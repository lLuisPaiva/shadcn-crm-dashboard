/**
 * Home Page Component
 */

"use client";

// Internal imports from feature components
import { CTA } from "@/features/landing/cta";
import { Features } from "@/features/landing/features";
import { Footer } from "@/features/landing/footer";
import { Header } from "@/features/landing/header";
import { Hero } from "@/features/landing/hero";
import { HowItWorks } from "@/features/landing/how-it-works";
import { Pricing } from "@/features/landing/pricing";
// import { Testimonials } from "@/features/landing/testimonials";
import { LanguageProvider } from "@/lib/i18n/context";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        {/* <Testimonials /> */}
        <CTA />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
