"use client";

import { Header } from "@/features/landing/header";
import { Footer } from "@/features/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Zap } from "lucide-react";

const useCases = [
  {
    industry: "Printing & Graphics",
    challenge: "Creating quotes takes too long, customers wait for pricing.",
    solution: [
      "AI monitors incoming emails with quote requests",
      "Automatically analyzes requirements (quantity, materials, specifications)",
      "Generates complete quote with pricing calculations",
      "User only needs to validate and send",
    ],
    result: "Quotes ready in seconds instead of hours",
    example: "Tenho aqui um cliente, cria um orçamento para este trabalho",
  },
  {
    industry: "Travel Agencies",
    challenge: "Manual research across multiple platforms, time-consuming quote preparation.",
    solution: [
      "AI receives email with travel request",
      "Automatically searches multiple booking platforms",
      "Compares prices and availability",
      "Prepares complete quote with best options",
    ],
    result: "User validates and sends while continuing other tasks",
    example: "Para esta viagem, cria um orçamento",
  },
  {
    industry: "Recruitment Agencies",
    challenge: "Manual candidate matching, repetitive message writing, time-consuming process.",
    solution: [
      "User creates job opportunity",
      "AI automatically searches database for matching candidates",
      "Prepares personalized messages for each candidate",
      "Generates LinkedIn messages ready to send",
    ],
    result: "User validates and approves bulk sending",
    example: "Escreve uma mensagem para este candidato a dizer que temos esta oferta",
  },
  {
    industry: "Call Centers & Customer Support",
    challenge: "Agents need to search for information while on calls, causing hold times and delays.",
    solution: [
      "Real-time AI assistant listens to conversation",
      "Automatically researches relevant information",
      "Provides instant answers to agent's questions",
      "Searches knowledge base, policies, and systems",
    ],
    result: "Delivers information in real-time without interrupting call",
    example: "Agent receives instant answer while on call",
  },
  {
    industry: "Law Firms",
    challenge: "Contract analysis and document review takes hours, delaying client responses.",
    solution: [
      "AI analyzes contracts and legal documents",
      "Identifies critical points, risks, and clauses",
      "Generates summaries and recommendations",
      "Prepares draft responses for client communication",
    ],
    result: "User reviews and approves before sending",
    example: "Analisa este contrato e prepara um resumo dos pontos críticos",
  },
  {
    industry: "Medical Clinics",
    challenge: "Scheduling and patient management requires multiple system interactions.",
    solution: [
      "AI analyzes patient history and preferences",
      "Suggests optimal appointment times",
      "Prepares patient communication based on medical history",
      "Automatically updates records and schedules",
    ],
    result: "Generates follow-up reminders",
    example: "Agenda uma consulta para este paciente com base no histórico",
  },
  {
    industry: "Restaurants & Catering",
    challenge: "Creating custom menus and event proposals is time-consuming.",
    solution: [
      "AI analyzes event requirements and preferences",
      "Generates personalized menu suggestions",
      "Calculates pricing based on guest count and preferences",
      "Prepares complete proposals with dietary restrictions",
    ],
    result: "User validates and sends",
    example: "Cria um menu personalizado para este evento com base nas preferências",
  },
  {
    industry: "Real Estate Agencies",
    challenge: "Finding matching properties and preparing personalized messages for each client.",
    solution: [
      "AI searches property database based on client criteria",
      "Matches properties with client preferences",
      "Generates personalized messages for each property",
      "Prepares comparison tables and recommendations",
    ],
    result: "User validates and sends",
    example: "Encontra propriedades que correspondem a estes critérios e prepara mensagens",
  },
  {
    industry: "E-commerce & Online Retail",
    challenge: "Handling refund requests, customer inquiries, and order management manually.",
    solution: [
      "AI analyzes refund requests and order history",
      "Checks policies and generates appropriate responses",
      "Prepares refund approvals or denial explanations",
      "Handles customer inquiries automatically",
    ],
    result: "User reviews and approves",
    example: "Analisa este pedido de reembolso e prepara a resposta",
  },
  {
    industry: "Accounting Firms",
    challenge: "Preparing tax documents, financial reports, and client communications takes significant time.",
    solution: [
      "AI analyzes financial data and transactions",
      "Generates tax reports and summaries",
      "Prepares client communication with explanations",
      "Identifies discrepancies and highlights important points",
    ],
    result: "User validates and sends",
    example: "Prepara o relatório fiscal para este cliente e explica as principais alterações",
  },
  {
    industry: "Marketing Agencies",
    challenge: "Creating content, managing campaigns, and preparing client reports across multiple platforms.",
    solution: [
      "AI generates content ideas based on client briefs",
      "Creates social media posts and ad copy",
      "Prepares campaign performance reports",
      "Schedules content across platforms",
    ],
    result: "User reviews and approves",
    example: "Cria 10 posts para Instagram para este cliente sobre [tema]",
  },
  {
    industry: "Event Management Companies",
    challenge: "Coordinating vendors, managing timelines, and preparing event proposals.",
    solution: [
      "AI analyzes event requirements and budget",
      "Suggests vendors and suppliers",
      "Creates detailed timelines and checklists",
      "Prepares complete event proposals",
    ],
    result: "User validates and sends",
    example: "Prepara uma proposta completa para este evento com fornecedores e timeline",
  },
  {
    industry: "Educational Institutions",
    challenge: "Managing student communications, scheduling, and administrative tasks.",
    solution: [
      "AI handles student inquiries and scheduling",
      "Generates personalized communication for parents",
      "Prepares class schedules based on availability",
      "Creates reports and summaries automatically",
    ],
    result: "User validates and sends",
    example: "Envia uma mensagem aos pais sobre o progresso do aluno [nome]",
  },
  {
    industry: "Logistics & Transportation",
    challenge: "Route optimization, delivery scheduling, and customer communication.",
    solution: [
      "AI optimizes delivery routes based on locations",
      "Calculates delivery times and costs",
      "Generates customer notifications automatically",
      "Handles tracking inquiries and updates",
    ],
    result: "User reviews and approves",
    example: "Otimiza as rotas para estas 20 entregas e notifica os clientes",
  },
  {
    industry: "Maintenance & Technical Services",
    challenge: "Scheduling appointments, preparing quotes, and managing service requests.",
    solution: [
      "AI analyzes service requests and urgency",
      "Schedules technicians based on availability and location",
      "Generates quotes with parts and labor costs",
      "Prepares customer communication and reminders",
    ],
    result: "User validates and sends",
    example: "Prepara um orçamento para esta reparação e agenda técnico",
  },
  {
    industry: "Consulting Firms",
    challenge: "Preparing proposals, analyzing client needs, and generating reports.",
    solution: [
      "AI analyzes client requirements and industry data",
      "Generates proposal structures and recommendations",
      "Prepares custom reports with insights",
      "Creates presentation materials automatically",
    ],
    result: "User reviews and customizes",
    example: "Prepara uma proposta de consultoria para este cliente sobre [área]",
  },
  {
    industry: "Architecture & Construction",
    challenge: "Preparing project quotes, managing suppliers, and client communication.",
    solution: [
      "AI analyzes project requirements and specifications",
      "Calculates material costs and labor estimates",
      "Suggests suppliers and generates quotes",
      "Prepares project timelines and milestones",
    ],
    result: "User validates and sends",
    example: "Prepara um orçamento completo para este projeto de construção",
  },
  {
    industry: "Beauty Salons & Spas",
    challenge: "Managing appointments, client preferences, and service reminders manually.",
    solution: [
      "AI analyzes client history and preferences",
      "Suggests optimal appointment times",
      "Sends personalized reminders and confirmations",
      "Prepares service recommendations based on history",
    ],
    result: "User validates and sends",
    example: "Agenda um tratamento para este cliente e envia lembrete personalizado",
  },
  {
    industry: "Hotels & Hospitality",
    challenge: "Managing reservations, special requests, and guest communication across multiple channels.",
    solution: [
      "AI monitors booking requests from multiple platforms",
      "Matches guest preferences with available rooms",
      "Handles special requests and preparations",
      "Generates personalized welcome messages",
    ],
    result: "User reviews and approves",
    example: "Prepara tudo para este hóspede: quarto, preferências, e mensagem de boas-vindas",
  },
  {
    industry: "Insurance Companies",
    challenge: "Analyzing claims, preparing quotes, and managing customer communications.",
    solution: [
      "AI analyzes claim documents and photos",
      "Generates quotes based on risk assessment",
      "Prepares policy explanations and communications",
      "Handles customer inquiries automatically",
    ],
    result: "User reviews and approves",
    example: "Analisa este sinistro e prepara a resposta ao cliente",
  },
  {
    industry: "Automotive Dealerships",
    challenge: "Managing vehicle sales, service appointments, and customer follow-ups.",
    solution: [
      "AI matches customer preferences with inventory",
      "Schedules service appointments based on vehicle history",
      "Generates personalized follow-up messages",
      "Prepares financing options and quotes",
    ],
    result: "User validates and sends",
    example: "Encontra veículos que correspondem às preferências deste cliente e prepara mensagem",
  },
  {
    industry: "Fitness & Gyms",
    challenge: "Managing memberships, class schedules, and personalized training plans.",
    solution: [
      "AI analyzes member goals and progress",
      "Suggests optimal class schedules",
      "Generates personalized workout plans",
      "Prepares communication for renewals and reminders",
    ],
    result: "User validates and sends",
    example: "Cria um plano de treino personalizado para este membro com base no progresso",
  },
  {
    industry: "Photography Studios",
    challenge: "Preparing quotes, managing bookings, and delivering photo galleries.",
    solution: [
      "AI analyzes event requirements and package needs",
      "Generates quotes based on location, duration, and deliverables",
      "Schedules photographers and equipment",
      "Prepares delivery timelines and client communication",
    ],
    result: "User validates and sends",
    example: "Prepara um orçamento para este casamento e agenda fotógrafo",
  },
  {
    industry: "IT Support & Managed Services",
    challenge: "Managing tickets, resolving issues, and communicating with clients.",
    solution: [
      "AI analyzes support tickets and categorizes issues",
      "Suggests solutions based on knowledge base",
      "Generates client communication and updates",
      "Escalates complex issues automatically",
    ],
    result: "User reviews and approves",
    example: "Resolve este ticket e prepara resposta para o cliente",
  },
  {
    industry: "Property Management",
    challenge: "Managing tenants, maintenance requests, and lease communications.",
    solution: [
      "AI analyzes maintenance requests and urgency",
      "Schedules contractors based on availability",
      "Generates lease renewals and communications",
      "Prepares tenant notices and updates",
    ],
    result: "User validates and sends",
    example: "Resolve este pedido de manutenção e notifica o inquilino",
  },
  {
    industry: "Cleaning Services",
    challenge: "Scheduling teams, preparing quotes, and managing client communications.",
    solution: [
      "AI analyzes property size and requirements",
      "Calculates quotes based on frequency and scope",
      "Optimizes team schedules and routes",
      "Generates client confirmations and reminders",
    ],
    result: "User validates and sends",
    example: "Prepara orçamento para esta limpeza e agenda equipa",
  },
  {
    industry: "Freelancers & Independent Consultants",
    challenge: "Managing projects, invoicing, and client communications across multiple clients.",
    solution: [
      "AI tracks project timelines and deliverables",
      "Generates invoices automatically based on hours/work",
      "Prepares client updates and progress reports",
      "Sends payment reminders and follow-ups",
    ],
    result: "User reviews and approves",
    example: "Gera fatura para este projeto e envia ao cliente",
  },
  {
    industry: "Wholesale & Distribution",
    challenge: "Managing orders, inventory, and customer communications.",
    solution: [
      "AI analyzes order patterns and forecasts demand",
      "Generates quotes based on volume and pricing tiers",
      "Prepares order confirmations and delivery updates",
      "Handles customer inquiries automatically",
    ],
    result: "User validates and sends",
    example: "Prepara orçamento para este pedido em volume e confirma disponibilidade",
  },
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <Badge className="mb-4" variant="outline">
              <Zap className="mr-2 h-3 w-3" />
              29 Industries
            </Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Use Cases for Every Industry
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Typeble integrates with any company, regardless of industry. Work naturally 
              with your existing systems using human language.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Building2 className="text-primary h-5 w-5" />
                    <CardTitle className="text-lg">{useCase.industry}</CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Challenge: {useCase.challenge}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="mb-2 text-sm font-semibold">Solution:</p>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      {useCase.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-border/50 rounded-lg border bg-muted/50 p-3">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide">
                      Example
                    </p>
                    <p className="text-sm italic">"{useCase.example}"</p>
                  </div>
                  <div className="mt-3">
                    <p className="text-primary text-sm font-semibold">
                      Result: {useCase.result}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="border-border/50 bg-background/50 mt-24 rounded-xl border p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Your Industry Not Listed?
            </h2>
            <p className="text-muted-foreground mx-auto mb-6 max-w-md text-lg">
              Typeble works with any company. We adapt to your workflow and integrate 
              with your existing systems.
            </p>
            <a href="/#contact">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-semibold transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

