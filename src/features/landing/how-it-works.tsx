"use client";

import Link from "next/link";
import { MessageSquare, Database, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/context";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: 1,
      title: t.howItWorks.steps.step1.title,
      description: t.howItWorks.steps.step1.description,
      icon: MessageSquare,
    },
    {
      number: 2,
      title: t.howItWorks.steps.step2.title,
      description: t.howItWorks.steps.step2.description,
      icon: Database,
    },
    {
      number: 3,
      title: t.howItWorks.steps.step3.title,
      description: t.howItWorks.steps.step3.description,
      icon: Zap,
    },
    {
      number: 4,
      title: t.howItWorks.steps.step4.title,
      description: t.howItWorks.steps.step4.description,
      icon: CheckCircle2,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative"
      aria-labelledby="how-it-works-heading"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <h2
            id="how-it-works-heading"
            className="text-3xl font-bold tracking-tight uppercase sm:text-4xl"
          >
            {t.howItWorks.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-center text-lg">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/20 transition-all"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold">
                      {step.number}
                    </div>
                    <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                      <Icon className="text-primary h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/how-it-works">
            <Button variant="outline" size="lg">
              {t.howItWorks.learnMore}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

