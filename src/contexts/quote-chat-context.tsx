"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuoteChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
}

const QuoteChatContext = createContext<QuoteChatContextType | undefined>(
  undefined
);

export function QuoteChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openChat = () => setIsOpen(true);
  const closeChat = () => setIsOpen(false);

  return (
    <QuoteChatContext.Provider value={{ isOpen, openChat, closeChat }}>
      {children}
    </QuoteChatContext.Provider>
  );
}

export function useQuoteChat() {
  const context = useContext(QuoteChatContext);
  if (context === undefined) {
    throw new Error("useQuoteChat must be used within a QuoteChatProvider");
  }
  return context;
}
