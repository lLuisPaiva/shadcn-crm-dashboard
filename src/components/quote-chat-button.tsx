"use client";

import React from "react";
import { useQuoteChat } from "@/contexts/quote-chat-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuoteChatButtonProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  mode?: "quote" | "schedule";
}

export function QuoteChatButton({
  children,
  variant = "default",
  size = "default",
  className,
  icon,
  onClick,
  mode = "quote",
}: QuoteChatButtonProps) {
  const { openChat } = useQuoteChat();

  const handleClick = () => {
    openChat(mode);
    onClick?.();
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
    >
      {icon && <span className="mr-2 inline-flex items-center">{icon}</span>}
      {children}
    </Button>
  );
}
