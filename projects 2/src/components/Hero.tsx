'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section className="carbon-bg relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[120px]" />

      <div ref={ref} className="reveal relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-brand">
            NEXT GEN DISPLAY TECHNOLOGY
          </span>
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          THE FUTURE IS
          <br />
          <span className="text-brand">CARBON FIBER</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Lighter. Stronger. Faster. Upgrade your inventory with the new
          industry standard for professional AV.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#benefits"
            className="group inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3 text-sm font-semibold text-brand-foreground transition-all duration-200 hover:bg-brand-light"
          >
            EXPLORE BENEFITS
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#specifications"
            className="inline-flex items-center gap-2 rounded-md border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-brand hover:text-brand"
          >
            TECH SPECS
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
