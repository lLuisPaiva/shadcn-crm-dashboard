"use client";

// External imports
import { Check, Sparkles, ArrowRight } from "lucide-react";

// Internal imports
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/context";
import { QuoteChatButton } from "@/components/quote-chat-button";

/**
 * SectionTitle component for consistent headings across sections
 */
const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-2xl md:text-3xl lg:text-4xl">
        <span className="relative">{title}</span>
      </h2>
      <p className="text-muted-foreground mt-4 max-w-2xl text-center text-lg">
        {subtitle}
      </p>
    </div>
  );
};

/**
 * PricingCard component for displaying individual pricing tier
 */
const PricingCard = ({ tier, index }: { tier: any; index: number }) => {
  return (
    <Card
      key={index}
      className={cn(
        "relative flex flex-col justify-between overflow-hidden border transition-all duration-300 hover:shadow-lg",
        tier.popular
          ? "border-primary shadow-md"
          : "border-border/50 hover:border-primary/20",
      )}
    >
      {tier.popular && (
        <div
          className="absolute -top-10 -right-10 overflow-hidden"
          aria-label="Popular plan"
        >
          <div className="bg-primary flex h-32 w-32 translate-x-2 -translate-y-2 rotate-45 items-center justify-center">
            <span className="text-primary-foreground mt-16 text-sm font-semibold">
              Popular
            </span>
          </div>
        </div>
      )}
      <CardHeader className={cn("p-3 sm:p-4", tier.popular ? "bg-primary/5" : "")}>
        <CardTitle>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              {tier.popular && (
                <Sparkles className="text-primary h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
              )}
              <h3 className="text-xl font-bold tracking-tight sm:text-xl">{tier.name}</h3>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl sm:text-4xl font-bold">{tier.price}</span>
            </div>
          </div>
        </CardTitle>
        <p className="text-muted-foreground mt-1.5 text-base">{tier.description}</p>
      </CardHeader>
      <CardContent className="flex-1 p-3 sm:p-4 pt-0">
        <ul className="space-y-1.5" aria-label={`Features for ${tier.name} plan`}>
          {tier.features.map((feature: string, j: number) => (
            <li key={j} className="flex items-start gap-2">
              <div
                className="bg-primary/10 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full mt-0.5"
                aria-hidden="true"
              >
                <Check className="text-primary h-2.5 w-2.5" />
              </div>
              <span className="text-base leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 pt-0">
        <QuoteChatButton
          className={cn(
            "h-9 sm:h-10 w-full font-semibold tracking-wide text-base sm:text-base md:text-lg",
            tier.name === "Enterprise" ? "gap-2" : "",
          )}
          size="lg"
          variant={tier.popular ? "default" : "outline"}
          icon={(tier.name === "Enterprise Solutions" || tier.name === "Soluções Empresariais") ? (
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          ) : undefined}
        >
          {tier.cta}
        </QuoteChatButton>
      </CardFooter>
    </Card>
  );
};

/**
 * Main Pricing component
 */
export function Pricing() {
  const { t } = useLanguage();

  const tiersData = [
    {
      name: t.pricing.tiers.migration.name,
      price: t.pricing.tiers.migration.price,
      description: t.pricing.tiers.migration.description,
      features: t.pricing.tiers.migration.features,
      cta: t.pricing.tiers.migration.cta,
      popular: false,
    },
    {
      name: t.pricing.tiers.complete.name,
      price: t.pricing.tiers.complete.price,
      description: t.pricing.tiers.complete.description,
      features: t.pricing.tiers.complete.features,
      cta: t.pricing.tiers.complete.cta,
      popular: true,
    },
    {
      name: t.pricing.tiers.enterprise.name,
      price: t.pricing.tiers.enterprise.price,
      description: t.pricing.tiers.enterprise.description,
      features: t.pricing.tiers.enterprise.features,
      cta: t.pricing.tiers.enterprise.cta,
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative"
      aria-labelledby="pricing-heading"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      ></div>
      <div
        className="bg-primary/20 absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute right-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <SectionTitle
          title={t.pricing.title}
          subtitle={t.pricing.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tiersData.map((tier, i) => (
            <PricingCard key={i} tier={tier} index={i} />
          ))}
        </div>

        {/* Consultation section */}
        <div className="border-border/50 bg-background/50 mt-12 sm:mt-16 rounded-xl border p-6 sm:p-8 text-center">
          <h3 className="text-xl font-bold tracking-tight sm:text-xl md:text-2xl" id="custom-plan">
            {t.pricing.consultation.title}
          </h3>
          <p className="text-muted-foreground mx-auto mt-3 sm:mt-4 text-base max-w-2xl">
            {t.pricing.consultation.description}
          </p>
                    <QuoteChatButton
            className="mt-6 sm:mt-8 h-11 sm:h-12 px-6 sm:px-8 font-semibold tracking-wide text-base sm:text-base md:text-lg"                                    
            size="lg"
            variant="outline"
            mode="schedule"
          >
            {t.pricing.consultation.cta}
          </QuoteChatButton>
        </div>
      </div>
    </section>
  );
}
