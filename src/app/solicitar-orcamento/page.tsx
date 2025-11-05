"use client";

import { Header } from "@/features/landing/header";
import { Footer } from "@/features/landing/footer";
import { QuoteChat } from "@/components/quote-chat";
import styles from "@/app/orbital-background.module.css";

export default function SolicitarOrcamentoPage() {
  return (
    <div className={styles.orbitalRoot}>
      <div className={styles.scene} aria-hidden="true">
        <div className={styles.waveGrid} />
        <div className={styles.wavyLight} />
      </div>

      <div className={styles.inner}>
        <Header />
        <main className="flex min-h-[calc(100vh-5rem)] pt-20">
          <div className="flex w-full flex-col">
            <QuoteChat />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
