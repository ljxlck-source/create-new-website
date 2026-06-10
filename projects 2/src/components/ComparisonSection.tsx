'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const COMPARISON_DATA = [
  { label: 'Weight (per panel)', carbon: '5-7 kg', aluminum: '12-15 kg', advantage: '50% Lighter' },
  { label: 'Structural Rigidity', carbon: 'Extreme', aluminum: 'Prone to Deformation', advantage: 'Zero Warping' },
  { label: 'Transport Cost', carbon: '40% Lower', aluminum: 'Baseline', advantage: 'Major Savings' },
  { label: 'Installation Crew', carbon: '2 crew', aluminum: '4 crew', advantage: '50% Less Labor' },
  { label: 'Panels Per Case', carbon: '+60% capacity', aluminum: 'Baseline', advantage: 'Fewer Shipments' },
];

export default function ComparisonSection() {
  const ref = useScrollReveal();

  return (
    <section id="technology" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-medium tracking-[0.3em] text-brand uppercase">
              Technology
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              DON&apos;T GET WEIGHED DOWN
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Traditional aluminum cabinets are heavy, fragile, and slow to
              install. Carbon fiber changes the game completely.
            </p>
          </div>

          {/* Comparison table */}
          <div className="overflow-hidden rounded-lg border border-border">
            {/* Header row */}
            <div className="grid grid-cols-4 gap-4 bg-secondary px-6 py-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              <div>Specification</div>
              <div className="text-center">
                <span className="text-brand">Carbon Fiber</span>
              </div>
              <div className="text-center">Aluminum Die-Cast</div>
              <div className="text-center">Advantage</div>
            </div>

            {/* Data rows */}
            {COMPARISON_DATA.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 gap-4 px-6 py-5 text-sm ${
                  i % 2 === 0 ? 'bg-card/50' : 'bg-transparent'
                }`}
              >
                <div className="text-muted-foreground">{row.label}</div>
                <div className="text-center font-semibold text-brand">{row.carbon}</div>
                <div className="text-center text-muted-foreground">{row.aluminum}</div>
                <div className="text-center">
                  <span className="inline-block rounded-full bg-data-green/10 px-3 py-0.5 text-xs font-semibold text-data-green">
                    {row.advantage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
