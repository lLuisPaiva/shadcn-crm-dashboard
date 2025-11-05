"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/context";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface QuoteData {
  companyName?: string;
  contact?: string;
  integrationType?: string;
  systemsCount?: string;
  usersCount?: string;
  specificNeeds?: string;
  timeline?: string;
}

type QuestionStep = 
  | "welcome"
  | "company"
  | "contact"
  | "integration"
  | "systems"
  | "users"
  | "needs"
  | "timeline"
  | "summary";

// Validation functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  // Remove spaces, dashes, and plus signs for validation
  const cleaned = phone.replace(/[\s\-+]/g, '');
  // Check if it has 9-15 digits
  const phoneRegex = /^\d{9,15}$/;
  return phoneRegex.test(cleaned);
};

export function QuoteChat() {
  const { t, language } = useLanguage();
  const isPT = language === "pt";
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: isPT
        ? "Olá! 👋 Estou aqui para ajudá-lo a solicitar um orçamento personalizado da Typeble.\n\nEm vez de preencher um formulário longo, vamos conversar! Vou fazer algumas perguntas rápidas para entender melhor as necessidades da sua empresa.\n\nEstá pronto para começar?"
        : "Hello! 👋 I'm here to help you request a personalized Typeble quote.\n\nInstead of filling out a long form, let's chat! I'll ask you a few quick questions to better understand your company's needs.\n\nReady to start?",
      timestamp: new Date(),
    },
  ]);
  
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<QuestionStep>("welcome");
  const [quoteData, setQuoteData] = useState<QuoteData>({});
  const [validationError, setValidationError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Integration type options
  const integrationOptions = isPT
    ? [
        "Migração de sistemas",
        "Plataforma completa Typeble",
        "Solução empresarial personalizada",
      ]
    : [
        "System migration",
        "Complete Typeble platform",
        "Custom enterprise solution",
      ];

  useEffect(() => {
    // Scroll to bottom when messages change
    // Access the viewport element inside ScrollArea
    const scrollViewport = scrollRef.current?.querySelector('[data-radix-scroll-area-viewport]');
    if (scrollViewport) {
      scrollViewport.scrollTop = scrollViewport.scrollHeight;
    }
  }, [messages]);

  const questions: Record<QuestionStep, { pt: string; en: string }> = {
    welcome: {
      pt: "Ótimo! Vamos começar. Qual é o nome da sua empresa?",
      en: "Great! Let's start. What's your company name?",
    },
    company: {
      pt: "Perfeito! Como posso contactá-lo? Pode partilhar o seu email ou telefone?",
      en: "Perfect! How can I contact you? Can you share your email or phone number?",
    },
    contact: {
      pt: "Que tipo de integração está a procurar?",
      en: "What type of integration are you looking for?",
    },
    integration: {
      pt: "Quantos sistemas ou ferramentas precisa de integrar? (ex: CRM, ERP, ferramentas de email, etc.)",
      en: "How many systems or tools do you need to integrate? (e.g., CRM, ERP, email tools, etc.)",
    },
    systems: {
      pt: "Quantos utilizadores vão usar a plataforma?",
      en: "How many users will use the platform?",
    },
    users: {
      pt: "Tem alguma necessidade específica ou requisito que gostaria de mencionar?",
      en: "Do you have any specific needs or requirements you'd like to mention?",
    },
    needs: {
      pt: "Qual é o prazo esperado para implementação? (ex: 1 mês, 3 meses, urgente)",
      en: "What's the expected timeline for implementation? (e.g., 1 month, 3 months, urgent)",
    },
    timeline: {
      pt: "",
      en: "",
    },
    summary: {
      pt: "",
      en: "",
    },
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Validate contact (email or phone) on company step
    if (currentStep === "company") {
      const contactValue = input.trim();
      if (!isValidEmail(contactValue) && !isValidPhone(contactValue)) {
        setValidationError(
          isPT
            ? "Por favor, introduza um email válido ou um número de telefone válido."
            : "Please enter a valid email or phone number."
        );
        return;
      }
      setValidationError("");
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setValidationError("");

    // Simular delay de processamento
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Processar resposta e atualizar dados
    const userInput = input.trim().toLowerCase();
    
    if (currentStep === "welcome") {
      setQuoteData({ ...quoteData, companyName: userMessage.content });
      setCurrentStep("company");
      addAssistantMessage(questions.company[isPT ? "pt" : "en"]);
    } else if (currentStep === "company") {
      setQuoteData({ ...quoteData, contact: userMessage.content });
      setCurrentStep("contact");
      addAssistantMessage(questions.contact[isPT ? "pt" : "en"]);
    } else if (currentStep === "systems") {
      setQuoteData({ ...quoteData, systemsCount: userMessage.content });
      setCurrentStep("users");
      addAssistantMessage(questions.users[isPT ? "pt" : "en"]);
    } else if (currentStep === "users") {
      setQuoteData({ ...quoteData, usersCount: userMessage.content });
      setCurrentStep("needs");
      addAssistantMessage(questions.needs[isPT ? "pt" : "en"]);
    } else if (currentStep === "needs") {
      const updatedData = { ...quoteData, timeline: userMessage.content };
      setQuoteData(updatedData);
      setCurrentStep("summary");
      setIsLoading(false);
      // Show summary after state update
      setTimeout(() => showSummary(updatedData), 100);
      return;
    }

    setIsLoading(false);
    
    // Refocus input after sending message
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleIntegrationSelect = async (option: string) => {
    if (isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: option,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simular delay de processamento
    await new Promise((resolve) => setTimeout(resolve, 800));

    setQuoteData({ ...quoteData, integrationType: option });
    setCurrentStep("systems");
    addAssistantMessage(questions.systems[isPT ? "pt" : "en"]);

    setIsLoading(false);

    // Refocus input after selection
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const addAssistantMessage = (content: string) => {
    const assistantMessage: Message = {
      id: Date.now().toString(),
      role: "assistant",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, assistantMessage]);
    // Refocus input after assistant responds
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const showSummary = (data: QuoteData) => {
    const summaryData = data || quoteData;
    const summary = isPT
      ? `Excelente! Recolhi todas as informações. Aqui está um resumo do seu pedido de orçamento:\n\n## 📋 Resumo do Pedido\n\n- **Empresa:** ${summaryData.companyName}\n- **Contacto:** ${summaryData.contact}\n- **Tipo de Integração:** ${summaryData.integrationType}\n- **Sistemas a integrar:** ${summaryData.systemsCount}\n- **Utilizadores:** ${summaryData.usersCount}\n- **Prazo:** ${summaryData.timeline}\n\n✅ **O seu pedido foi enviado com sucesso!** A nossa equipa entrará em contacto consigo em breve com um orçamento personalizado.\n\nObrigado pelo interesse na Typeble! 🚀`
      : `Excellent! I've gathered all the information. Here's a summary of your quote request:\n\n## 📋 Request Summary\n\n- **Company:** ${summaryData.companyName}\n- **Contact:** ${summaryData.contact}\n- **Integration Type:** ${summaryData.integrationType}\n- **Systems to integrate:** ${summaryData.systemsCount}\n- **Users:** ${summaryData.usersCount}\n- **Timeline:** ${summaryData.timeline}\n\n✅ **Your request has been successfully submitted!** Our team will contact you shortly with a personalized quote.\n\nThank you for your interest in Typeble! 🚀`;

    addAssistantMessage(summary);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
      // Focus is restored in handleSend after setIsLoading
    }
  };

  const isComplete = currentStep === "summary";

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b flex-shrink-0 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
            <MessageSquare className="text-primary h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              {isPT ? "Solicitar Orçamento" : "Request Quote"}
            </h2>
            <p className="text-muted-foreground text-sm">
              {isPT
                ? "Converse connosco para um orçamento personalizado"
                : "Chat with us for a personalized quote"}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 min-h-0 px-6 py-4" ref={scrollRef}>
        <div className="mx-auto max-w-3xl space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <MessageSquare className="text-primary h-4 w-4" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[85%] rounded-lg px-4 py-3",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.role === "assistant" ? (
                  <div className="markdown-content">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        p: ({ children }) => (
                          <p className="mb-3 last:mb-0 leading-relaxed text-sm">
                            {children}
                          </p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-foreground">
                            {children}
                          </strong>
                        ),
                        ul: ({ children }) => (
                          <ul className="my-3 ml-5 list-disc space-y-2 marker:text-foreground/60">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="my-3 ml-5 list-decimal space-y-2 marker:text-foreground/60">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="pl-1 leading-relaxed">{children}</li>
                        ),
                        em: ({ children }) => (
                          <em className="italic">{children}</em>
                        ),
                        h1: ({ children }) => (
                          <h1 className="text-lg font-bold mb-3 mt-4 first:mt-0">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-base font-semibold mb-2 mt-4 first:mt-0">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-sm font-semibold mb-2 mt-3 first:mt-0">
                            {children}
                          </h3>
                        ),
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">
                    {message.content}
                  </p>
                )}
                <p className="text-muted-foreground mt-1.5 text-xs">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              {message.role === "user" && (
                <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <span className="text-primary text-xs font-semibold">U</span>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                <MessageSquare className="text-primary h-4 w-4" />
              </div>
              <div className="bg-muted rounded-lg px-4 py-3">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="border-t bg-background flex-shrink-0 px-6 py-4">
        <div className="mx-auto max-w-3xl">
          {isComplete ? (
            <div className="flex items-center justify-center gap-2 rounded-lg bg-primary/5 p-4">
              <CheckCircle2 className="text-primary h-5 w-5" />
              <p className="text-sm font-medium">
                {isPT
                  ? "Pedido enviado com sucesso!"
                  : "Request submitted successfully!"}
              </p>
            </div>
          ) : currentStep === "contact" ? (
            // Integration type selection buttons
            <div className="space-y-2">
              {integrationOptions.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleIntegrationSelect(option)}
                  disabled={isLoading}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-4"
                >
                  {option}
                </Button>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {validationError && (
                <p className="text-destructive text-sm">{validationError}</p>
              )}
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    setValidationError("");
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isPT
                      ? "Escreva a sua resposta..."
                      : "Type your response..."
                  }
                  className="flex-1"
                  disabled={isLoading}
                  autoFocus
                  type={currentStep === "company" ? "email" : "text"}
                />
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  disabled={!input.trim() || isLoading}
                  size="icon"
                  type="button"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
