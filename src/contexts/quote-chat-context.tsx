"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ChatMode = "quote" | "schedule";

interface QuoteChatContextType {
  isOpen: boolean;
  mode: ChatMode;
  openChat: (mode?: ChatMode) => void;
  closeChat: () => void;
  setMode: (mode: ChatMode) => void;
}

const QuoteChatContext = createContext<QuoteChatContextType | undefined>(
  undefined
);

export function QuoteChatProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("quote");

  const openChat = (newMode: ChatMode = "quote") => {
    setMode(newMode);
    setIsOpen(true);
  };
  
  const closeChat = () => setIsOpen(false);

  return (
    <QuoteChatContext.Provider value={{ isOpen, mode, openChat, closeChat, setMode }}>
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
