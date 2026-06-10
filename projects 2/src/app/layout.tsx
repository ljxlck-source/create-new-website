import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: 'LEDScreenX | Carbon Fiber LED Display Technology',
  description:
    'LEDScreenX redefines professional LED display with advanced carbon fiber technology. Lighter, stronger, faster — the new industry standard for professional AV.',
  keywords: [
    'LED display',
    'carbon fiber LED',
    'LED screen',
    'rental LED',
    'professional AV',
    'LEDScreenX',
    'carbon fiber cabinet',
  ],
  openGraph: {
    title: 'LEDScreenX | The Future is Carbon Fiber',
    description:
      'Lighter. Stronger. Faster. Upgrade your inventory with the new industry standard for professional AV.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
