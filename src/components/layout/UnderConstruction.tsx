"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function UnderConstruction() {
  const pathname = usePathname();

  // Show only on non-home pages
  if (pathname === "/") return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      {/* Spinning ring */}
      <div className="relative mb-10">
        <div className="w-28 h-28 rounded-full border-4 border-border relative">
          <div className="absolute inset-0 rounded-full border-t-4 border-primary animate-spin [animation-duration:2s]" />
          <div
            className="absolute inset-2 rounded-full border-b-4 border-accent/40 animate-spin [animation-duration:3.5s]"
            style={{ animationDirection: "reverse" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/imgs/Icon.png"
              alt="B•Stance Icon"
              className="w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(57,255,20,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* Logo */}
      <img
        src="/imgs/Logo.png"
        alt="B•Stance Logo"
        className="h-10 w-auto object-contain mb-8 opacity-90"
      />

      {/* Headline */}
      <h1 className="text-3xl md:text-5xl font-black tracking-tight text-center mb-4 leading-tight">
        يتم تحديث المنصة
      </h1>

      {/* Subtext */}
      <p className="text-muted-foreground text-center max-w-md text-base md:text-lg leading-relaxed mb-8">
        نعمل على تطوير تجربتك الرياضية وإضافة ميزات جديدة.
        <br />
        <span className="text-primary font-semibold">سنعود قريباً بشيء استثنائي.</span>
      </p>

      {/* Status badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        جاري التحديث…
      </div>

      {/* Bottom link back to home */}
      <a
        href="/"
        className="mt-10 text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
      >
        العودة للصفحة الرئيسية
      </a>
    </div>
  );
}
