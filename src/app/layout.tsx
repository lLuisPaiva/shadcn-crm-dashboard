import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { Toaster } from "@/components/ui/sonner";
import DashboardLayoutWrapper from "@/features/dashboard/components/dashboard-layout";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Transgrafica Dashboard",
  description: "Operations and analytics dashboard for Transgrafica.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>
        </ThemeProvider>
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
