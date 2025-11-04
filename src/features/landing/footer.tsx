"use client";

// External imports
import Link from "next/link";
import { Zap } from "lucide-react";

// Internal imports
import { XIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import { useLanguage } from "@/lib/i18n/context";

/**
 * FooterHeading component for consistent section headings
 */
const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-foreground text-sm font-semibold tracking-wide uppercase">
    {children}
  </h3>
);

/**
 * FooterLink component for consistent link styling
 */
const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
  >
    {children}
  </Link>
);

/**
 * Navigation data for footer links
 */
const navigation = {
  product: [
    { nameKey: "features" as const, href: "#features" },
    { nameKey: "pricing" as const, href: "#pricing" },
    { nameKey: "testimonials" as const, href: "#testimonials" },
    { nameKey: "api" as const, href: "#" },
  ],
  company: [
    { nameKey: "about" as const, href: "#" },
    { nameKey: "blog" as const, href: "#" },
    { nameKey: "careers" as const, href: "#" },
    { nameKey: "press" as const, href: "#" },
  ],
  support: [
    { nameKey: "documentation" as const, href: "#" },
    { nameKey: "guides" as const, href: "#" },
    { nameKey: "helpCenter" as const, href: "#" },
    { nameKey: "contact" as const, href: "#" },
  ],
  legal: [
    { nameKey: "privacy" as const, href: "#" },
    { nameKey: "terms" as const, href: "#" },
    { nameKey: "security" as const, href: "#" },
  ],
  social: [
    {
      name: "X",
      href: "https://x.com/KaraBharat",
      openInNewTab: true,
      icon: XIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com/KaraBharat/shadcn-crm-dashboard",
      openInNewTab: true,
      icon: GitHubIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kara-bharat/",
      openInNewTab: true,
      icon: LinkedInIcon,
    },
  ],
};

/**
 * Main Footer component
 */
export function Footer() {
  const { t } = useLanguage();

  // Navigation labels mapping
  const navLabels: Record<string, Record<string, string>> = {
    product: {
      features: t.header.nav.features,
      pricing: t.header.nav.pricing,
      testimonials: "Testimonials", // Not in header, keeping for now
      api: "API",
    },
    company: {
      about: "About",
      blog: "Blog",
      careers: "Careers",
      press: "Press",
    },
    support: {
      documentation: "Documentation",
      guides: "Guides",
      helpCenter: "Help Center",
      contact: t.header.nav.contact,
    },
    legal: {
      privacy: "Privacy",
      terms: "Terms",
      security: "Security",
    },
  };

  return (
    <footer
      className="border-border/50 relative border-t"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Background elements */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] opacity-50"
        aria-hidden="true"
      ></div>
      <div
        className="bg-primary/10 absolute top-1/4 right-1/4 -z-10 h-64 w-64 rounded-full blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-12">
          <div className="space-y-8">
            <div className="flex items-center">
              <div
                className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg"
                aria-hidden="true"
              >
                <Zap className="text-primary h-6 w-6" />
              </div>
              <span className="ml-4 text-xl font-bold tracking-tight">
                Typeble
              </span>
            </div>
            <p className="text-muted-foreground text-base">
              {t.footer.description}
            </p>
            <div className="flex space-x-5">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={item.name}
                  target={item.openInNewTab ? "_blank" : "_self"}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeading>{t.footer.links.product}</FooterHeading>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.product.map((item) => (
                    <li key={item.nameKey}>
                      <FooterLink href={item.href}>
                        {navLabels.product[item.nameKey] || item.nameKey}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeading>{t.footer.links.company}</FooterHeading>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.company.map((item) => (
                    <li key={item.nameKey}>
                      <FooterLink href={item.href}>
                        {navLabels.company[item.nameKey] || item.nameKey}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <FooterHeading>{t.footer.links.support}</FooterHeading>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.support.map((item) => (
                    <li key={item.nameKey}>
                      <FooterLink href={item.href}>
                        {navLabels.support[item.nameKey] || item.nameKey}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <FooterHeading>{t.footer.links.legal}</FooterHeading>
                <ul role="list" className="mt-4 space-y-3">
                  {navigation.legal.map((item) => (
                    <li key={item.nameKey}>
                      <FooterLink href={item.href}>
                        {navLabels.legal[item.nameKey] || item.nameKey}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-border/50 mt-12 border-t pt-8">
          <p className="text-muted-foreground text-center text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
