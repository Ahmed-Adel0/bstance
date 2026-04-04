"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "كيف تعمل", href: "/how-it-works" },
  { label: "الخدمات", href: "/services" },
  { label: "الأسعار", href: "/pricing" },
  { label: "النتائج", href: "/results" },
  { label: "الأكاديميات", href: "/academy" },
  { label: "عنا", href: "/about" },
  { label: "المدونة", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/imgs/Logo.png" alt="BStance Logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link text-xs">
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors green-glow"
            >
              ابدأ الآن
            </Link>
          </div>

          {/* Mobile menu */}
          <button
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border flex flex-col gap-2">
              <Link href="/login" className="text-sm text-center py-2 text-muted-foreground">
                تسجيل الدخول
              </Link>
              <Link
                href="/signup"
                className="text-sm text-center py-2 rounded-lg bg-primary text-primary-foreground font-semibold"
                onClick={() => setOpen(false)}
              >
                ابدأ الآن
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
