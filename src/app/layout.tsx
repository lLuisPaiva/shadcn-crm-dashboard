import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/providers/theme-provider";
import { LanguageProvider } from "@/lib/i18n/context";
import { QuoteChatProvider } from "@/contexts/quote-chat-context";
import { QuoteChatFloating } from "@/components/quote-chat-floating";

export const metadata: Metadata = {
  title: "Typeble - Work The Way You Talk | Real System Integration",
  description:
    "Work naturally with your existing systems using human language. We integrate directly with your company's systems and execute actions automatically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistMono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          forcedTheme={undefined}
        >
          <LanguageProvider>
            <QuoteChatProvider>
              <TooltipProvider>
                {children}
                <QuoteChatFloating />
              </TooltipProvider>
            </QuoteChatProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
