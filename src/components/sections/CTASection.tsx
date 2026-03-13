"use client";
import React from "react";
import { ShieldCheck, BarChart3, Trophy, Rocket, MessageCircle, ChevronLeft } from "lucide-react";

/* ════════════════════════════════════════════════
   CTASection — Call To Action النهائي  
   ════════════════════════════════════════════════ */

export default function CTASection() {
  return (
    <section
      className="section cta-final-section"
      id="cta-final"
    >
      {/* Decorative Glows */}
      <div className="cta-final-glow cta-final-glow--1" />
      <div className="cta-final-glow cta-final-glow--2" />
      <div className="cta-final-glow cta-final-glow--3" />

      <div className="cta-container">
        <div className="reveal cta-card">
          <div className="cta-content">
            <div className="s-label" style={{ marginBottom: "20px" }}>
              <Rocket size={14} className="ml-2" />
              ابدأ رحلتك الآن
            </div>
            
            <h2 className="cta-title">
              هل أنت مستعد لتكون <span className="text-gradient">النسخة الأفضل</span> من نفسك؟
            </h2>
            
            <p className="cta-desc">
              انضم الآن لأكثر من 500+ رياضي حققوا نتائج ملموسة مع منظومة B•Stance المتكاملة. نحن لا نقدم مجرد تمرين، نحن نصنع نمط حياة رياضي مستدام.
            </p>

            <div className="cta-actions">
              <a href="#booking" className="btn-premium">
                <Rocket size={20} />
                <span>احجز برنامجك الآن</span>
                <ChevronLeft size={16} />
              </a>
              
              <a
                href="https://wa.me/201279266345?text=أنا%20مهتم%20بخدمات%20B•Stance%20للأكاديميات"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
              >
                <MessageCircle size={20} />
                تواصل معنا للأكاديميات
              </a>
            </div>

            {/* Trust markers */}
            <div className="cta-trust">
              {[
                { icon: <ShieldCheck size={18} />, text: "مدربون معتمدون دولياً" },
                { icon: <BarChart3 size={18} />, text: "خطط مبنية على قياسات حقيقية" },
                { icon: <Trophy size={18} />, text: "نتائج مضمونة بالالتزام" },
              ].map((badge, i) => (
                <div key={i} className="cta-trust-item">
                  <span className="cta-trust-icon">{badge.icon}</span>
                  <span className="cta-trust-text">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
