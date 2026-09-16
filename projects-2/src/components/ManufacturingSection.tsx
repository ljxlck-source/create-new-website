'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Cpu, Cog, FlaskConical, ShieldCheck } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Cpu,
    image: 'https://aka.doubaocdn.com/s/3prK1wZ49Z',
    title: 'Aerospace-Grade Material Selection',
    description:
      'T700/T800 carbon fiber prepreg sourced from certified aerospace suppliers. Each batch undergoes rigorous material testing.',
    specs: [
      { label: 'Tensile Strength', value: '3,500 MPa' },
      { label: 'Fiber Density', value: '1.75 g/cm³' },
      { label: 'Traceability', value: '100%' },
    ],
  },
  {
    step: '02',
    icon: Cog,
    image: null,
    title: '5-Axis CNC Precision Machining',
    description:
      'German-engineered CNC centers achieve 0.05mm tolerance. Diamond-coated tools prevent delamination during edge finishing.',
    specs: [
      { label: 'Tolerance', value: '±0.05mm' },
      { label: 'Flatness', value: '±0.1mm' },
      { label: 'Edge Quality', value: 'Zero delamination' },
    ],
  },
  {
    step: '03',
    icon: FlaskConical,
    image: 'https://aka.doubaocdn.com/s/KumW1wZ49Z',
    title: 'Autoclave Molding Process',
    description:
      'Vacuum-bagged carbon fiber cured under 6-bar pressure at 120°C. Zero voids, maximum density, consistent mechanical properties.',
    specs: [
      { label: 'Temperature', value: '120°C ±2°C' },
      { label: 'Pressure', value: '6 bar (85 psi)' },
      { label: 'Void Content', value: '<1%' },
    ],
  },
  {
    step: '04',
    icon: ShieldCheck,
    image: 'https://aka.doubaocdn.com/s/orYw1wZ49Z',
    title: 'Quality Assurance & Testing',
    description:
      'CMM inspection, thermal cycling tests, and 100% electrical testing. Only panels meeting aerospace standards ship.',
    specs: [
      { label: 'Inspection Points', value: '47 per panel' },
      { label: 'Thermal Cycles', value: '-30°C to +60°C' },
      { label: 'Defect Rate', value: '<0.1%' },
    ],
  },
];

export default function ManufacturingSection() {
  const ref = useScrollReveal();

  return (
    <section id="manufacturing" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-medium tracking-[0.3em] text-brand uppercase">
              Manufacturing
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              MANUFACTURING EXCELLENCE
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every LEDScreenX carbon fiber panel is manufactured to the same
              standards used in aviation and motorsport. Precision engineering
              meets industrial-scale reliability.
            </p>
          </div>

          {/* Process steps */}
          <div className="grid gap-6 lg:grid-cols-4">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-brand/50"
                >
                  {/* Image */}
                  {step.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className={`flex flex-1 flex-col p-6 ${!step.image ? '' : ''}`}>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-mono text-3xl font-bold text-brand/20">
                        {step.step}
                      </span>
                      <Icon className="h-6 w-6 text-brand" />
                    </div>

                    <h3 className="mb-3 text-sm font-semibold leading-snug">
                      {step.title}
                    </h3>
                    <p className="mb-5 text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Specs */}
                    <div className="mt-auto space-y-2 border-t border-border pt-4">
                      {step.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="flex items-center justify-between text-xs"
                        >
                          <span className="text-muted-foreground">
                            {spec.label}
                          </span>
                          <span className="font-mono font-semibold text-foreground">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
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
