"use client";
import React from "react";

/* ════════════════════════════════════════════════
   CTASection — Call To Action النهائي  
   ════════════════════════════════════════════════ */

export default function CTASection() {
  return (
    <section
      className="section cta-final-section"
      id="cta-final"
    >
      {/* Glow effect */}
      <div className="cta-final-glow" />

      <div className="reveal cta-final-inner">
        <div className="s-label" style={{ justifyContent: "center" }}>
          ابدأ رحلتك الآن
        </div>
        <h2 className="s-title cta-final-title">
          ابدأ رحلتك نحو أداء رياضي أفضل مع منظومة B•Stance
        </h2>
        <p className="s-sub cta-final-sub">
          سواء كنت لاعباً ناشئاً يسعى لتحقيق البطولات أو رياضياً يريد تطوير
          أدائه، نقدم لك الدعم الكامل للوصول لأفضل نسخة منك.
        </p>

        {/* CTA Buttons */}
        <div className="cta-final-btns">
          <a href="#booking" className="btn-primary">
            احجز برنامجك الآن
          </a>
          <a
            href="https://wa.me/201279266345?text=أنا%20مهتم%20بخدمات%20B•Stance%20للأكاديميات"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            تواصل معنا للأكاديميات
          </a>
        </div>

        {/* Trust badges */}
        <div className="reveal rd1 cta-trust-badges">
          {[
            { icon: "🛡️", text: "متخصصون معتمدون" },
            { icon: "📊", text: "نتائج مبنية على بيانات" },
            { icon: "🏆", text: "منظومة متكاملة" },
          ].map((badge, i) => (
            <div key={i} className="cta-trust-badge">
              <span>{badge.icon}</span>
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
