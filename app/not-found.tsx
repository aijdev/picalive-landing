import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { ArrowRightIcon } from "./components/Icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Examples", href: "/examples" },
  { label: "Features", href: "/features" },
  { label: "FAQ", href: "/faq" },
];

export default function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div className="brand-glow pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative flex flex-col items-center py-24 text-center sm:py-32">
        <span className="text-6xl font-bold text-gradient">404</span>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          This page wandered off
        </h1>
        <p className="mt-4 max-w-md text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
          get you back to bringing photos to life.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Back to home
          </Button>
          <Button href="/how-it-works" variant="secondary" size="lg">
            See how it works
          </Button>
        </div>

        <div className="mt-16 grid w-full max-w-2xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="card card-hover group flex items-center justify-between gap-2 p-5 text-left"
            >
              <span className="font-semibold tracking-tight">{link.label}</span>
              <ArrowRightIcon className="h-4 w-4 text-brand transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
