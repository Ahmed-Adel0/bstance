"use client";
import React from "react";

const testimonials = [
  {
    text: "جلسة الريكافري حلّت مشكلة في ظهري كانت مستنياني من سنتين. الكوتش شارح كل خطوة وحاسس فعلاً إن في حد بيهتم بنتيجتك مش بس بفلوسك.",
    name: "محمد أحمد",
    type: "عميل ريكافري",
    initial: "م",
    gradient: "linear-gradient(135deg, #2aafa0, #3dd8c8)",
    delay: "",
  },
  {
    text: "الحجامة مع كابتن إبراهيم كانت تجربة مختلفة تماماً. كل الأدوات بُفتحت أمامي، الجو نظيف ومريح، والنتيجة واضحة من أول جلسة.",
    name: "سارة محمود",
    type: "عميلة حجامة",
    initial: "س",
    gradient: "linear-gradient(135deg, #0d1b4b, #1a7a6e)",
    delay: "rd1",
  },
  {
    text: "اشتركت في الربع سنوية ووفزت في السحب بترقية 6 شهور. يعني دفعت 1,800 ج.م وحصلت على 6 شهور متابعة كاملة — الكسب كان حقيقي!",
    name: "أحمد رامي",
    type: "فائز في سحب الترقية",
    initial: "أ",
    gradient: "linear-gradient(135deg, var(--gold), #e89000)",
    delay: "rd2",
  },
  {
    text: "النظام الغذائي مبني على أكلي الطبيعي — ده اللي خلاني أستمر أكثر من شهرين بدون ما أفكر أوقف. فرق واضح في الطاقة والتركيز من الأسبوع الأول.",
    name: "كريم مصطفى",
    type: "عميل تغذية وتمرين",
    initial: "ك",
    gradient: "linear-gradient(135deg, #1a7a6e, #3dd8c8)",
    delay: "",
  },
];

export default function TestimonialsSection() {
  return (
    <>
      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="section alt" id="testimonials">
        <div style={{ textAlign: "center", marginBottom: "34px" }}>
          <div className="s-label" style={{ justifyContent: "center" }}>
            آراء العملاء
          </div>
          <h2 className="s-title">الكلام مش بتاعنا — بتاعهم</h2>
          <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            تجارب حقيقية من عملاء B•Stance
          </p>
        </div>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className={`testi-card reveal ${t.delay}`}>
              <div className="t-stars">★★★★★</div>
              <div className="t-quote">"</div>
              <p className="t-text">{t.text}</p>
              <div className="t-author">
                <div
                  className="t-av"
                  style={{ background: t.gradient }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="t-type">{t.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta-bar">
          <a href="#booking" className="btn-primary">
            📲 ابدأ رحلتك وادخل السحب ←
          </a>
          <p>انضم لعملاء B•Stance — حجزك يدخلك السحب تلقائياً</p>
        </div>
      </section>
    </>
  );
}
