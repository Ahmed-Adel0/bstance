import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import NavbarConditional from "@/components/layout/NavbarConditional";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-cairo",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "B•Stance – Sports Performance Platform",
  description: "The premier destination for elite performance, integrating professional training, scientific nutrition, and advanced physical recovery.",
  icons: {
    icon: "/imgs/Icon.png",
    shortcut: "/imgs/Icon.png",
    apple: "/imgs/Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className={`${cairo.variable} ${tajawal.variable} antialiased font-cairo bg-background text-foreground`}>
        <NavbarConditional />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
