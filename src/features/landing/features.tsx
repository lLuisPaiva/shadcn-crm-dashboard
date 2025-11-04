"use client";

// External imports
import {
  Bot,
  BrainCircuit,
  MessageSquare,
  Smartphone,
  RefreshCw,
  Sparkles,
  TimerReset,
  TrendingUp,
  Zap,
} from "lucide-react";

// Internal imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/context";

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
      <h2 className="text-3xl font-bold tracking-tight uppercase sm:text-4xl">
        <span className="relative">
          {title.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "text-primary" : ""}>
              {word}{" "}
            </span>
          ))}
        </span>
      </h2>
      <p className="text-muted-foreground mt-4 max-w-2xl text-center text-lg">
        {subtitle}
      </p>
    </div>
  );
};

/**
 * FeatureCard component displaying individual feature with icon and description
 */
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  return (
    <Card
      key={index}
      className="border-border/50 bg-background/60 hover:border-primary/20 group overflow-hidden rounded-xl border p-1 transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative p-5">
        <div
          className="group-hover:bg-opacity-80 mb-3 flex h-14 w-14 items-center justify-center rounded-lg transition-all duration-300"
          style={{ backgroundColor: feature.bgColor, color: feature.textColor }}
          aria-hidden="true"
        >
          {feature.icon}
        </div>
        <CardTitle className="mb-1 text-xl font-semibold tracking-tight">
          {feature.title}
        </CardTitle>
        <p className="text-muted-foreground">{feature.description}</p>
      </div>
    </Card>
  );
};

/**
 * Main Features component
 */
export function Features() {
  const { t } = useLanguage();

  const featuresData = [
    {
      title: t.features.items.realIntegration.title,
      description: t.features.items.realIntegration.description,
      icon: <Zap className="h-7 w-7" aria-hidden="true" />,
      bgColor: "rgba(34, 197, 94, 0.1)",
      textColor: "rgb(34, 197, 94)",
    },
    {
      title: t.features.items.workNaturally.title,
      description: t.features.items.workNaturally.description,
      icon: <MessageSquare className="h-7 w-7" aria-hidden="true" />,
      bgColor: "rgba(168, 85, 247, 0.1)",
      textColor: "rgb(168, 85, 247)",
    },
    {
      title: t.features.items.naturalLanguage.title,
      description: t.features.items.naturalLanguage.description,
      icon: <Bot className="h-7 w-7" aria-hidden="true" />,
      bgColor: "rgba(234, 179, 8, 0.1)",
      textColor: "rgb(234, 179, 8)",
    },
    {
      title: t.features.items.yourSystems.title,
      description: t.features.items.yourSystems.description,
      icon: <TrendingUp className="h-7 w-7" aria-hidden="true" />,
      bgColor: "rgba(59, 130, 246, 0.1)",
      textColor: "rgb(59, 130, 246)",
    },
    {
      title: t.features.items.worksWithTools.title,
      description: t.features.items.worksWithTools.description,
      icon: <RefreshCw className="h-7 w-7" aria-hidden="true" />,
      bgColor: "rgba(249, 115, 22, 0.1)",
      textColor: "rgb(249, 115, 22)",
    },
    {
      title: t.features.items.instantExecution.title,
      description: t.features.items.instantExecution.description,
      icon: <Smartphone className="h-7 w-7" aria-hidden="true" />,
      bgColor: "rgba(14, 165, 233, 0.1)",
      textColor: "rgb(14, 165, 233)",
    },
  ];

  return (
    <section
      id="features"
      className="relative"
      aria-labelledby="features-heading"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
        aria-hidden="true"
      ></div>
      <div
        className="absolute top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute right-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <SectionTitle
          title={t.features.title}
          subtitle={t.features.subtitle}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>

        {/* Feature highlight */}
        <div className="border-border/50 bg-background/50 mt-24 rounded-xl border p-8 lg:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div
              className="bg-primary/10 flex h-20 w-20 items-center justify-center rounded-lg md:h-24 md:w-24"
              aria-hidden="true"
            >
              <BrainCircuit className="text-primary h-10 w-10 md:h-12 md:w-12" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold tracking-tight">
                {t.features.highlight.title}
              </h3>
              <p className="text-muted-foreground mt-4 text-lg">
                {t.features.highlight.description}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {t.features.highlight.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full"
                      aria-hidden="true"
                    >
                      <Zap className="text-primary h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
