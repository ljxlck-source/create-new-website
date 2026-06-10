'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const SPECS_LEFT = [
  { label: 'Pixel Pitch Range', value: '1.5mm – 4.8mm' },
  { label: 'Brightness', value: '5,000 – 6,500 nits' },
  { label: 'Refresh Rate', value: '≥3,840Hz' },
  { label: 'Contrast Ratio', value: '5,000:1' },
  { label: 'Max Stacking Height', value: '12m (ground support)' },
  { label: 'Max Rigging Height', value: '30m (certified)' },
  { label: 'Flatness Tolerance', value: '±0.1mm' },
];

const SPECS_RIGHT = [
  { label: 'Panel Dimensions', value: '500×500mm / 500×1000mm' },
  { label: 'Cabinet Weight', value: '4.2kg (vs 8.5kg aluminum)' },
  { label: 'Weight Reduction', value: '50% lighter than traditional' },
  { label: 'Thickness', value: '68mm' },
  { label: 'Operating Temperature', value: '-20°C to +50°C' },
  { label: 'IP Rating', value: 'IP65 (front/rear)' },
  { label: 'MTBF', value: '≥100,000 hours' },
];

export default function TechSpecsSection() {
  const ref = useScrollReveal();

  return (
    <section id="specifications" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-medium tracking-[0.3em] text-brand uppercase">
              Specifications
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              TECHNICAL DATA
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Precision-engineered carbon fiber LED displays built for demanding
              professional environments. Every parameter optimized for rental
              efficiency and operational excellence.
            </p>
          </div>

          {/* Specs grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left column - Display Performance */}
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-brand uppercase">
                Display Performance
              </h3>
              <div className="space-y-4">
                {SPECS_LEFT.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Physical */}
            <div className="rounded-lg border border-border bg-card p-8">
              <h3 className="mb-6 text-sm font-semibold tracking-widest text-brand uppercase">
                Physical & Environmental
              </h3>
              <div className="space-y-4">
                {SPECS_RIGHT.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between border-b border-border/50 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm text-muted-foreground">
                      {spec.label}
                    </span>
                    <span className="font-mono text-sm font-semibold text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
