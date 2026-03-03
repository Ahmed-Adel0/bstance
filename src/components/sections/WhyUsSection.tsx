"use client";
import React from "react";

const pillars = [
  {
    icon: "🏋️",
    title: "تمرين يحقق نتيجة",
    text: "برنامج مخصص بفيديوهات مشروحة + متابعة يومية تضمن التقدم المستمر وتحميك من الإصابات.",
    result: "✦ جداول موثقة وقابلة للتطوير والتكيف",
    delay: "",
  },
  {
    icon: "🥗",
    title: "تغذية تناسب حياتك",
    text: "مش حمية تعذيب — خطة مرنة مبنية على أكلك وجدولك الحقيقي. تحقق هدفك وتستمر بدون معاناة.",
    result: "✦ سعرات دقيقة وخطة مستدامة طويلاً",
    delay: "rd1",
  },
  {
    icon: "🔄",
    title: "الاستشفاء = الفرق الحقيقي",
    text: "بدون ريكافري وحجامة، كل جهدك في التمرين لن يصل لأقصاه. الاستشفاء هو ما يبني الجسم فعلاً.",
    result: "✦ شراكة Volt — مكملات أصلية معتمدة",
    delay: "rd2",
  },
];

export default function WhyUsSection() {
  return (
    <>
      {/* ═══════ WHY ═══════ */}
      <section className="section alt" id="why">
        <div style={{ textAlign: "center" }}>
          <div className="s-label" style={{ justifyContent: "center" }}>
            لماذا B•Stance
          </div>
          <h2 className="s-title">3 أعمدة — نجاح حقيقي ومستدام</h2>
          <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            أغلب من يفشلون يأخذون خطوة واحدة ويتجاهلون الباقي. هنا نربط
            الثلاثة في منظومة متكاملة.
          </p>
        </div>

        <div className="why-grid">
          {pillars.map((p, i) => (
            <div key={i} className={`why-card reveal ${p.delay}`}>
              <div className="why-ico">{p.icon}</div>
              <div className="why-title">{p.title}</div>
              <div className="why-text">{p.text}</div>
              <div className="why-result">{p.result}</div>
            </div>
          ))}
        </div>

        <div className="section-cta-bar">
          <a href="#booking" className="btn-primary">
            📲 احجز تجربتك الأولى ←
          </a>
          <p>أول حجز يدخلك السحب تلقائياً — بدون أي خطوات إضافية</p>
        </div>
      </section>
    </>
  );
}
