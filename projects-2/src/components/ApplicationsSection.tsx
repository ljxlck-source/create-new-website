'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { Building2, Palette, Monitor, Lightbulb } from 'lucide-react';

const APPLICATIONS = [
  {
    icon: Building2,
    title: 'Fixed Installation',
    description:
      'Permanent architectural integration for corporate lobbies, broadcast studios, and command centers. Seamless mounting with zero visible fasteners.',
  },
  {
    icon: Palette,
    title: 'Virtual Production',
    description:
      'High refresh rate and precise color accuracy for XR stages and LED volumes. Carbon fiber rigidity ensures perfect camera tracking alignment.',
  },
  {
    icon: Monitor,
    title: 'Rental & Touring',
    description:
      '50% lighter than aluminum means faster load-in/out, fewer crew members, and dramatically reduced shipping costs for touring productions.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Displays',
    description:
      'Custom shapes and curves made possible by carbon fiber&apos;s moldability. Create immersive brand experiences with unique form factors.',
  },
];

export default function ApplicationsSection() {
  const ref = useScrollReveal();

  return (
    <section id="applications" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className="reveal">
          {/* Section header */}
          <div className="mb-16 text-center">
            <span className="text-xs font-medium tracking-[0.3em] text-brand uppercase">
              Applications
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              BUILT FOR EVERY STAGE
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              From permanent architectural integration to demanding touring
              schedules, carbon fiber LED delivers.
            </p>
          </div>

          {/* Featured image - Rental & Touring */}
          <div className="mb-12 overflow-hidden rounded-lg border border-border">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src="https://aka.doubaocdn.com/s/IEmQ1wZ49Z"
                alt="HIGH-END RENTAL - Global Touring & Events"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-sm">
                  HIGH-END RENTAL
                </span>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Global Touring & Events
                </h3>
                <p className="mt-2 max-w-lg text-sm text-muted-foreground">
                  Carbon fiber LED panels engineered for the rigors of
                  international touring. Faster setup, fewer crew, lower
                  logistics costs.
                </p>
              </div>
            </div>
          </div>

          {/* Applications grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {APPLICATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex gap-6 rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-brand/50"
                >
                  <div className="shrink-0">
                    <div className="rounded-md bg-brand/10 p-3">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
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
