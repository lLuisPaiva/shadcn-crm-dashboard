"use client";

// External imports
import {
  Bot,
  BrainCircuit,
  Clock,
  MessageSquare,
  Smartphone,
  MousePointerClick,
  RefreshCw,
  Sparkles,
  TimerReset,
  TrendingUp,
  Zap,
} from "lucide-react";

// Internal imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
 * Features data array containing all product features with their details
 */
const features = [
  {
    title: "Real System Integration",
    description:
      "We integrate directly with your systems and execute actions automatically. When you say 'create a quote,' we create it in your system.",
    icon: <Zap className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(34, 197, 94, 0.1)",
    textColor: "rgb(34, 197, 94)",
  },
  {
    title: "Work Naturally",
    description:
      "Work the way you talk. Describe what you need in natural language, and our platforms execute it instantly in your systems. No complex interfaces to learn.",
    icon: <MessageSquare className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(168, 85, 247, 0.1)",
    textColor: "rgb(168, 85, 247)",
  },
  {
    title: "Natural Language Actions",
    description:
      "Talk to your dashboard naturally. Our platforms understand commands and convert complex workflows into simple chat conversations that execute real actions.",
    icon: <Bot className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(234, 179, 8, 0.1)",
    textColor: "rgb(234, 179, 8)",
  },
  {
    title: "Your Systems, Your Language",
    description:
      "Work with your existing systems using natural language. No need to learn complex interfaces—just talk to your tools the way you'd talk to a colleague.",
    icon: <TrendingUp className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(59, 130, 246, 0.1)",
    textColor: "rgb(59, 130, 246)",
  },
  {
    title: "Works with Your Tools",
    description:
      "Integrates with your existing CRM, email, databases, and booking platforms. No need to change systems—we work alongside them.",
    icon: <RefreshCw className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(249, 115, 22, 0.1)",
    textColor: "rgb(249, 115, 22)",
  },
  {
    title: "Multi-Device Ready",
    description:
      "Chat from anywhere, anytime. Works on all devices—desktop, tablet, and mobile. Execute actions in your systems from any device.",
    icon: <Smartphone className="h-7 w-7" aria-hidden="true" />,
    bgColor: "rgba(14, 165, 233, 0.1)",
    textColor: "rgb(14, 165, 233)",
  },
];

/**
 * Main Features component
 */
export function Features() {
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
          title="Work The Way You Talk"
          subtitle="Work naturally with your systems using human language. We integrate directly and execute actions automatically."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
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
                WORK THE WAY YOU TALK
              </h3>
              <p className="text-muted-foreground mt-4 text-lg">
                Work naturally with your existing systems using human language. 
                We integrate directly and execute actions automatically. When you say "create a quote," 
                we create it in your system. Real integration means real actions in your actual tools.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2">
                  <span
                    className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full"
                    aria-hidden="true"
                  >
                    <MessageSquare className="text-primary h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">
                    Chat actions
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full"
                    aria-hidden="true"
                  >
                    <TimerReset className="text-primary h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">
                    Natural language
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full"
                    aria-hidden="true"
                  >
                    <Sparkles className="text-primary h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium">
                    Natural language
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
