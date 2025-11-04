"use client";

// External imports
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Globe } from "lucide-react";
import { useTheme } from "next-themes";

// Internal imports
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * NavLink component for consistent styling of navigation links
 */
const NavLink = ({
  href,
  isActive,
  onClick,
  children,
}: {
  href: string;
  isActive: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative rounded-md px-4 py-2 text-sm font-medium tracking-wide transition-all",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-background/80 hover:text-foreground",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

/**
 * Language Selector Component
 */
const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "en" as const, label: "English", flag: "🇬🇧" },
    { code: "pt" as const, label: "Português", flag: "🇵🇹" },
    { code: "da" as const, label: "Dansk", flag: "🇩🇰" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {languages.find((l) => l.code === language)?.flag} {languages.find((l) => l.code === language)?.label}
          </span>
          <span className="sm:hidden">
            {languages.find((l) => l.code === language)?.flag}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              "gap-2",
              language === lang.code && "bg-accent"
            )}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { resolvedTheme } = useTheme();

  const navItems = [
    { label: "Home", href: "/" },
    { label: t.header.nav.features, href: "/#features" },
    { label: t.header.nav.useCases, href: "/use-cases" },
    { label: t.header.nav.howItWorks, href: "/how-it-works" },
    { label: t.header.nav.pricing, href: "/#pricing" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="fixed inset-x-0 top-4 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-background/90 border-border/30 relative rounded-full border shadow-lg backdrop-blur-xl">
            <nav
              className="flex h-16 items-center justify-between px-4 sm:px-6"
              aria-label="Main navigation"
            >
              {/* Logo */}
              <Link
                href="/"
                className="group flex items-center gap-2.5"
                aria-label="Typeble homepage"
              >
                <div className="flex items-center gap-2">
                  {/* <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-full"> */}
                    <Image
                      src={resolvedTheme === "dark" ? "/images/logo-gold.png" : "/images/logo.png"}
                      alt="Typeble"
                      width={150}
                      height={40}
                      className="h-10 w-auto"
                      priority
                    />
                  {/* </div> */}
                  <span className="text-lg font-bold tracking-tight">
                    Typeble
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => {
                  const isActive = item.href === "/"
                    ? false // Handle active state for home differently
                    : false; // You can add active state logic here later
                  return (
                    <NavLink key={item.label} href={item.href} isActive={isActive}>
                      {item.label}
                    </NavLink>
                  );
                })}
              </div>

              {/* Desktop CTA */}
              <div className="hidden items-center gap-3 md:flex">
                <LanguageSelector />
                <Link href="/#contact">
                  <Button variant="ghost" className="font-medium tracking-wide">
                    {t.header.nav.contact}
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="px-4 font-medium tracking-wide">
                    {t.header.cta}
                  </Button>
                </Link>

                <ModeToggle />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-background/80 rounded-full p-2 transition-colors md:hidden"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu
                  className="text-muted-foreground h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-background/80 fixed inset-0 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="bg-background/95 border-border/50 fixed inset-x-0 top-0 border-b p-6">
            <div className="mt-20 flex flex-col gap-2 space-y-1">
              {navItems.map((item) => {
                return (
                  <NavLink
                    key={item.label}
                    href={item.href}
                    isActive={false}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
              <div className="border-border/50 mt-6 grid grid-cols-2 gap-3 border-t pt-6">
                <Link href="/#contact" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full font-medium tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.header.nav.contact}
                  </Button>
                </Link>
                <Link href="/dashboard" className="w-full">
                  <Button
                    className="w-full font-medium tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.header.cta}
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-between pt-6">
                <LanguageSelector />
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
