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
import styles from "./orbital-background.module.css";

export default function Home() {
  return (
    <main className={styles.orbitalRoot}>
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.waveGrid} />
        <div className={styles.wavyLight} />
      </div>

      <div className={styles.inner}>
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        {/* <Testimonials /> */}
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
