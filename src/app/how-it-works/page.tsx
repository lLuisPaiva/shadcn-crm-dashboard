"use client";

import { Header } from "@/features/landing/header";
import { Footer } from "@/features/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  MessageSquare, 
  RefreshCw, 
  Database, 
  CheckCircle2,
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "You Talk Naturally",
    description: "Describe what you need in human language, just like talking to a colleague.",
    icon: MessageSquare,
    example: '"Create a quote for this client" or "Show me sales from last month"',
  },
  {
    number: 2,
    title: "We Integrate",
    description: "Typeble connects directly to your systems—CRM, email, databases, booking platforms, and more.",
    icon: Database,
    example: "Direct access to your actual business systems",
  },
  {
    number: 3,
    title: "We Execute",
    description: "Actions happen automatically in your systems. We don't just generate text—we execute real actions.",
    icon: Zap,
    example: "Quote created in your system, data retrieved from your database, message sent from your email",
  },
  {
    number: 4,
    title: "You Review",
    description: "Everything is prepared for your review. Validate and approve—it's that simple.",
    icon: CheckCircle2,
    example: "Review the quote, message, or report, then approve and send",
  },
];

const integrations = [
  "CRM Systems",
  "Email Platforms",
  "Databases",
  "Booking Platforms",
  "LinkedIn",
  "Inventory Systems",
  "Accounting Software",
  "Project Management Tools",
  "And many more...",
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-20 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              How It Works
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Work the way you talk. Typeble integrates directly with your systems 
              and executes actions automatically.
            </p>
          </div>

          {/* Steps */}
          <div className="mb-24 space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col gap-8 md:flex-row md:items-center">
                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold">
                        {step.number}
                      </div>
                      <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                        <Icon className="text-primary h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                    <p className="text-muted-foreground text-lg">
                      {step.description}
                    </p>
                    <div className="border-border/50 rounded-lg border bg-muted/50 p-4">
                      <p className="text-sm">
                        <span className="font-semibold">Example:</span>{" "}
                        <span className="italic">{step.example}</span>
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden items-center justify-center md:flex">
                      <ArrowRight className="text-muted-foreground h-8 w-8" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Real Integration Section */}
          <Card className="border-border/50 mb-16">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="text-primary h-6 w-6" />
                <CardTitle className="text-2xl">Real System Integration</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-lg">
                Typeble integrates directly with your company's systems. We execute 
                actions automatically—not just generate text.
              </p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Direct Connection</h3>
                  <p className="text-muted-foreground text-sm">
                    Connects to your CRM, email, databases, booking platforms, 
                    and all business systems.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Automatic Execution</h3>
                  <p className="text-muted-foreground text-sm">
                    Executes actions automatically in your systems. When you say 
                    "create a quote," we create it in your system.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Integrations Section */}
          <Card className="border-border/50 mb-16">
            <CardHeader>
              <div className="flex items-center gap-3">
                <RefreshCw className="text-primary h-6 w-6" />
                <CardTitle className="text-2xl">Works with Your Tools</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-lg">
                Typeble integrates seamlessly with your existing systems. No need 
                to change your tools—we work alongside them.
              </p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((integration, index) => (
                  <span
                    key={index}
                    className="border-border bg-background rounded-full border px-4 py-2 text-sm"
                  >
                    {integration}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Example Flow */}
          <Card className="border-border/50 mb-16">
            <CardHeader>
              <CardTitle className="text-2xl">Example Workflow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-semibold">You say:</p>
                    <p className="text-muted-foreground italic">
                      "Cria um orçamento para este cliente"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-semibold">Typeble:</p>
                    <p className="text-muted-foreground">
                      Analyzes email → Checks pricing database → Calculates costs → 
                      Generates quote in your system
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 text-primary flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-semibold">You:</p>
                    <p className="text-muted-foreground">
                      Review the quote → Approve → Send to client ✅
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="border-border/50 bg-background/50 rounded-xl border p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">
              Ready to Work The Way You Talk?
            </h2>
            <p className="text-muted-foreground mx-auto mb-6 max-w-md text-lg">
              See how Typeble integrates with your systems and executes actions automatically.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/#pricing">
                <Button size="lg">View Pricing</Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

