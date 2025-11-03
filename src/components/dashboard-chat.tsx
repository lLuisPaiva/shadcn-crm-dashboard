"use client";

// External dependencies
import React, { useState, useRef, useEffect } from "react";
import { Send, MessageSquare, X, Loader2 } from "lucide-react";

// Internal components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface DashboardChatProps {
  onAction?: (action: string) => void;
  context?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

/**
 * DashboardChat Component
 *
 * Chat interface that replaces click-by-click actions with natural language commands.
 * Users can describe what they need, and the chat executes actions or provides information.
 */
export function DashboardChat({
  onAction,
  context = "dashboard",
  open: controlledOpen,
  onOpenChange,
}: DashboardChatProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setOpen = onOpenChange || setInternalOpen;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: `Hi! I'm here to help you work with your ${context}. Instead of clicking through menus, just tell me what you need. For example:
      
• "Show me sales from last month"
• "Create a new customer"
• "What are my pending orders?"
• "Generate a revenue report"

What would you like to do?`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      const response = generateResponse(input, context);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Execute action if provided
      if (response.action && onAction) {
        onAction(response.action);
      }

      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full"
          aria-label="Open chat"
        >
          <MessageSquare className="h-4 w-4" aria-hidden="true" />
          <span className="sr-only">Chat</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex w-full flex-col p-0 sm:max-w-lg"
      >
        <SheetHeader className="border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle>Chat Assistant</SheetTitle>
              <SheetDescription>
                Describe what you need instead of clicking
              </SheetDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1 px-4 py-4" ref={scrollRef}>
          <div className="space-y-4">
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
                    "max-w-[80%] rounded-lg px-4 py-2",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap">
                    {message.content}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.role === "user" && (
                  <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <span className="text-primary text-xs font-semibold">
                      U
                    </span>
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <MessageSquare className="text-primary h-4 w-4" />
                </div>
                <div className="bg-muted rounded-lg px-4 py-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t px-4 py-3">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe what you need... (e.g., 'Show me sales from last month')"
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              size="icon"
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/**
 * Generate response based on user input
 * In a real implementation, this would call an AI API
 */
function generateResponse(
  input: string,
  context: string
): { message: string; action?: string } {
  const lowerInput = input.toLowerCase();

  // Sales/Revenue queries
  if (lowerInput.includes("sales") || lowerInput.includes("revenue")) {
    if (lowerInput.includes("last month") || lowerInput.includes("previous")) {
      return {
        message: "Showing sales data from last month. Let me fetch that for you...\n\n✅ Found: $245,670 in revenue\n✅ 124 deals closed\n✅ Top customer: TechCorp Solutions ($45,000)\n\nWould you like to see a detailed breakdown or export this data?",
        action: "show_sales_last_month",
      };
    }
    if (lowerInput.includes("this month") || lowerInput.includes("current")) {
      return {
        message: "Showing current month sales...\n\n✅ Revenue so far: $189,450\n✅ 89 deals closed\n✅ On track to exceed last month\n\nNeed more details?",
        action: "show_sales_current_month",
      };
    }
    return {
      message: "I can help you with sales data! What period would you like to see?\n\n• Last month\n• This month\n• Custom date range\n• Specific quarter",
      action: "show_sales_menu",
    };
  }

  // Customer queries
  if (
    lowerInput.includes("customer") ||
    lowerInput.includes("client") ||
    lowerInput.includes("new customer") ||
    lowerInput.includes("create customer")
  ) {
    if (lowerInput.includes("new") || lowerInput.includes("create")) {
      return {
        message: "I'll help you create a new customer. Let me open the customer form...\n\n✅ Opening customer creation form\n\nYou can provide:\n• Company name\n• Contact email\n• Phone number (optional)\n• Industry\n• Address\n\nOr tell me all the details now and I'll fill it in for you!",
        action: "create_customer",
      };
    }
    if (lowerInput.includes("show") || lowerInput.includes("find") || lowerInput.includes("search") || lowerInput.includes("list")) {
      return {
        message: "I can help you find customers! What are you looking for?\n\n• All customers\n• Customers from a specific company\n• Customers by industry\n• Customers by location\n• Recently added customers\n\nJust tell me what you need!",
        action: "show_customers",
      };
    }
    return {
      message: "I can help you with customers! What would you like to do?\n\n• Create a new customer\n• Search for customers\n• View customer details\n• Update customer information\n• Export customer list\n\nJust tell me what you need!",
      action: "show_customers_menu",
    };
  }

  // Order queries
  if (
    lowerInput.includes("order") ||
    lowerInput.includes("pending order") ||
    lowerInput.includes("new order")
  ) {
    if (lowerInput.includes("pending")) {
      return {
        message: "Here are your pending orders:\n\n✅ 12 pending orders\n✅ Total value: $89,450\n✅ Oldest pending: 5 days\n\nWould you like me to show the list or help you process any specific order?",
        action: "show_pending_orders",
      };
    }
    if (lowerInput.includes("new") || lowerInput.includes("create")) {
      return {
        message: "Creating a new order... Let me open the order form.\n\n✅ Order form opened\n\nTell me the details:\n• Customer name\n• Products/services\n• Quantity\n• Price\n\nOr say 'cancel' if you changed your mind.",
        action: "create_order",
      };
    }
    return {
      message: "I can help you with orders! What would you like to do?\n\n• View pending orders\n• Create new order\n• Check order status\n• View completed orders",
      action: "show_orders_menu",
    };
  }

  // Report queries
  if (
    lowerInput.includes("report") ||
    lowerInput.includes("generate") ||
    lowerInput.includes("export")
  ) {
    return {
      message: "What kind of report would you like?\n\n• Sales report\n• Revenue report\n• Customer insights\n• Lead analysis\n\nJust tell me which one and the date range, and I'll generate it for you!",
      action: "show_reports_menu",
    };
  }

  // Lead queries
  if (lowerInput.includes("lead") || lowerInput.includes("prospect")) {
    return {
      message: "Here's your leads overview:\n\n✅ 45 active leads\n✅ 12 qualified this week\n✅ 8 need follow-up\n\nWhat would you like to do?\n• View all leads\n• See qualified leads\n• Create new lead\n• Check lead scoring",
      action: "show_leads_overview",
    };
  }

  // Default response
  return {
    message: `I understand you want to "${input}". Let me help you with that!\n\nI can assist you with:\n• Sales & Revenue data\n• Customer management\n• Orders & Invoices\n• Reports & Analytics\n• Leads management\n\nTry asking something like:\n• "Show me sales from last month"\n• "Create a new customer"\n• "What are my pending orders?"\n• "Generate a revenue report"`,
  };
}

