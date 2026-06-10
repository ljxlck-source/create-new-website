'use client';

const FOOTER_LINKS = {
  Company: ['About Us', 'Technology', 'Case Studies', 'Contact'],
  Solutions: [
    'Rental & Touring',
    'Virtual Production',
    'Fixed Installation',
    'Creative Displays',
  ],
  Legal: ['Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block">
              <span className="text-lg font-bold tracking-widest text-foreground">
                LED<span className="text-brand">Screen</span>X
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Redefining professional visual solutions with advanced carbon
              fiber technology. Lighter, stronger, faster — the new standard for
              the AV industry.
            </p>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold tracking-widest text-foreground uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} LEDScreenX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
