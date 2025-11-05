"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { QuoteChat } from "@/components/quote-chat";
import { useQuoteChat } from "@/contexts/quote-chat-context";
import { cn } from "@/lib/utils";

export function QuoteChatFloating() {
  const { isOpen, openChat, closeChat } = useQuoteChat();
  const pathname = usePathname();
  
  // Hide floating button on the quote page itself and on dashboard
  const shouldShow = pathname !== "/solicitar-orcamento" && !pathname?.startsWith("/dashboard");

  if (!shouldShow) return null;

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => openChat()}
        size="lg"
        className={cn(
          "fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-all hover:scale-110",
          "bg-primary text-primary-foreground",
          "hover:bg-primary/90"
        )}
        aria-label="Solicitar orçamento"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Sheet */}
      <Sheet open={isOpen} onOpenChange={(open) => (open ? openChat() : closeChat())}>
        <SheetContent
          side="right"
          className="flex h-full w-full flex-col p-0 sm:max-w-2xl"
        >
          <SheetTitle className="sr-only">Chat</SheetTitle>
          <SheetDescription className="sr-only">
            Chat para solicitar orçamento ou agendar consulta
          </SheetDescription>
          <div className="flex h-full flex-col overflow-hidden">
            <QuoteChat />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
