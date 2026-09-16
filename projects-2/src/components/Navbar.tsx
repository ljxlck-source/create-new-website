'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'TECHNOLOGY', href: '#technology' },
  { label: 'MANUFACTURING', href: '#manufacturing' },
  { label: 'BENEFITS', href: '#benefits' },
  { label: 'APPLICATIONS', href: '#applications' },
  { label: 'SPECIFICATIONS', href: '#specifications' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav bg-background/80 border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-widest text-foreground">
              LED<span className="text-brand">Screen</span>X
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-widest text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md border border-brand px-5 py-2 text-xs font-semibold tracking-widest text-brand transition-all duration-200 hover:bg-brand hover:text-brand-foreground"
            >
              CONTACT
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border pb-4 lg:hidden">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-2 py-3 text-xs font-medium tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-block rounded-md border border-brand px-5 py-2 text-xs font-semibold tracking-widest text-brand transition-all duration-200 hover:bg-brand hover:text-brand-foreground"
            >
              CONTACT
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
