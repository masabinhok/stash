import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Stash - Your Personal Cloud Storage',
  description:
    'Simplify your digital life with Stash. Securely store, access, and share your files from anywhere, anytime. Your data, always protected and always at your fingertips.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased font-poppins`}>
        {children}
      </body>
    </html>
  );
}
