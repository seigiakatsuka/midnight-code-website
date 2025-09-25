import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/ui/navbar";
import localFont from 'next/font/local';

const satoshi = localFont({
  src: './fonts/satoshi/Satoshi-Variable.woff2',
  display: 'swap',
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: {
      template:' %s | Midnight Code',
        default: 'Midnight Code'
  },
  description: 'Midnight Code is a Web Development Company based in the United States. Specializing in React, Next.js, and Tailwind CSS to create stunning websites and applications.',
  keywords: ['Web Development', 'React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Frontend Development', 'Backend Development', 'Full-Stack Development', 'UI/UX Design', 'Responsive Design', 'E-commerce Solutions',]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased`}
      >
      <header>
          <Navbar />
      </header>
        {children}
      </body>
    </html>
  );
}
