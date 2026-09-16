'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Weight, Clock, Package, ArrowRight } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Weight,
    title: '50% Weight Reduction',
    description: '4.2kg vs 8.5kg per panel',
    highlight: 'Half the weight',
  },
  {
    icon: Clock,
    title: '40% Faster Installation',
    description: 'Less crew, less time',
    highlight: '2 crew vs 4',
  },
  {
    icon: Package,
    title: '60% More Panels Per Case',
    description: 'Reduced shipping costs',
    highlight: 'Fewer shipments',
  },
];

export default function AdvantageSummary() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Carbon Fiber vs. Aluminum:{' '}
              <span className="text-brand">Key Advantages</span>
            </h2>
          </div>

          {/* Advantage cards */}
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            {ADVANTAGES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-lg border border-border bg-card p-8 text-center transition-all duration-300 hover:border-brand/50"
                >
                  <div className="mb-5 inline-flex rounded-full bg-brand/10 p-4">
                    <Icon className="h-7 w-7 text-brand" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="inline-block rounded-full bg-data-green/10 px-4 py-1 text-xs font-semibold text-data-green">
                    {item.highlight}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="rounded-lg border border-brand/30 bg-brand/5 p-8 text-center sm:p-12">
            <h3 className="mb-3 text-xl font-bold">
              Request Full Spec Sheet
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Available for rental companies, integrators & procurement teams.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-md bg-brand px-7 py-3 text-sm font-semibold text-brand-foreground transition-all duration-200 hover:bg-brand-light"
            >
              Contact via WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
