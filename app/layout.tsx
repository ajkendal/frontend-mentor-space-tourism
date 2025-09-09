import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amanda Kendal-Brown | Frontend Mentor Space Tourism',
  description: 'Explore the universe of space tourism with Amanda Kendal-Brown',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning> {children}</body>
    </html>
  );
}
