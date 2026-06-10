'use client';

import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Feather, Ruler, Thermometer, Truck } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Feather,
    title: 'Ultra-Lightweight',
    description:
      'Slash labor costs and setup time. One technician can handle installation effortlessly.',
  },
  {
    icon: Ruler,
    title: 'Structural Rigidity',
    description:
      'Zero warping over time. Perfect alignment for seamless large-scale screens every time.',
  },
  {
    icon: Thermometer,
    title: 'Thermal Stability',
    description:
      'Superior heat dissipation ensures longer component life and consistent color performance.',
  },
  {
    icon: Truck,
    title: 'Rental Ready',
    description:
      'Engineered for the road. Withstands thousands of install/dismantle cycles without fatigue.',
  },
];

export default function AdvantagesSection() {
  const ref = useScrollReveal();

  return (
    <section id="benefits" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-medium tracking-[0.3em] text-brand uppercase">
              Benefits
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              ENGINEERED FOR EXCELLENCE
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every aspect of our carbon fiber cabinets is designed to solve
              real-world operational challenges.
            </p>
          </div>

          {/* Advantages grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-brand/50"
                >
                  <div className="mb-5 inline-flex rounded-md bg-brand/10 p-3">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="mb-3 text-base font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
