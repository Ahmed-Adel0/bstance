import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  title: "B•Stance",
  description: "B•Stance Official Website",
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
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${tajawal.variable} antialiased font-cairo`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
