"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "/" },
  { label: "كيف تعمل", href: "/how-it-works" },
  { label: "الخدمات", href: "/services" },
  { label: "الأسعار", href: "/pricing" },
  { label: "الشركات", href: "/corporate" },
  { label: "النتائج", href: "/results" },
  { label: "الأكاديميات", href: "/academy" },
  { label: "عنا", href: "/about" },
  { label: "المدونة", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 inset-x-0 mx-auto w-[92%] md:w-[95%] max-w-7xl z-50 bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-xl transition-all">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/imgs/Logo.png" alt="BStance Logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link 
                  key={l.href} 
                  href={l.href} 
                  className={`nav-link text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                    isActive 
                      ? "text-primary bg-primary/10 border border-primary/20" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors green-glow shadow-[0_0_15px_rgba(57,255,20,0.3)]"
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
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl rounded-b-2xl overflow-hidden mt-1 shadow-2xl">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-bold py-2.5 px-3 rounded-lg transition-colors ${
                    isActive 
                      ? "text-primary bg-primary/10 border border-primary/20" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-border flex flex-col gap-2 mt-2">
              <Link href="/login" className="text-sm font-semibold text-center py-3 text-muted-foreground bg-secondary/10 rounded-xl hover:bg-secondary/30">
                تسجيل الدخول
              </Link>
              <Link
                href="/signup"
                className="text-sm text-center py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 green-glow"
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
