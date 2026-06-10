'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const METRICS = [
  { value: '100%', label: 'Material Traceability', sub: 'Full batch tracking' },
  { value: '<0.1%', label: 'Defect Rate', sub: 'Industry leading' },
  { value: '±0.05mm', label: 'Machining Precision', sub: '5-axis CNC' },
  { value: '47', label: 'Inspection Points', sub: 'Per panel verification' },
];

export default function PerformanceMetrics() {
  const ref = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-medium tracking-[0.3em] text-brand uppercase">
              Quality
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              QUALITY BY THE NUMBERS
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Manufacturing metrics that set industry standards.
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="group rounded-lg border border-border bg-card p-8 text-center transition-all duration-300 hover:border-brand/50"
              >
                <div className="glow-number mb-3 font-mono text-4xl font-bold text-brand">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {metric.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {metric.sub}
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
