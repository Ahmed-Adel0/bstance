"use client";
import React from "react";

/* ════════════════════════════════════════════════
   WhyUsSection — لماذا B•Stance
   التصميم الأصلي (why-grid / why-card) + المحتوى المحدّث
   ════════════════════════════════════════════════ */

const pillars = [
  {
    icon: "🏋️",
    title: "تمرين يحقق نتيجة",
    text: "برنامج مخصص بفيديوهات مشروحة + متابعة يومية تضمن التقدم المستمر وتحميك من الإصابات. مش تمرين عشوائي — كل حركة محسوبة لهدفك.",
    result: "✦ جداول موثقة وقابلة للتطوير والتكيف مع مستواك",
    delay: "",
  },
  {
    icon: "🥗",
    title: "تغذية تناسب حياتك",
    text: "مش حمية تعذيب — خطة مرنة مبنية على أكلك وجدولك الحقيقي. تحقق هدفك وتستمر بدون معاناة. كل سعرة محسوبة لخدمة أدائك.",
    result: "✦ سعرات دقيقة وخطة مستدامة مبنية على بيانات حقيقية",
    delay: "rd1",
  },
  {
    icon: "🔄",
    title: "الاستشفاء = الفرق الحقيقي",
    text: "بدون ريكافري، كل جهدك في التمرين لن يصل لأقصاه. الاستشفاء هو ما يبني الجسم فعلاً — حجامة تشريحية، فوطة نارية، Massage Gun.",
    result: "✦ تقنيات متخصصة نادراً ما تجدها في المنطقة",
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
          <p className="s-sub" style={{ margin: "0 auto", textAlign: "center", maxWidth: "680px" }}>
            البطل لا يُصنع داخل صالة التدريب فقط —
            بل يُبنى في لحظات الاستشفاء الذكي مع التغذية الصحيحة.
            لذلك نقدم منظومة متكاملة تربط الثلاثة معاً.
          </p>
        </div>

        {/* الأعمدة الثلاثة — التصميم الأصلي */}
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

        {/* ── التكامل = الفارق ── */}
        <div
          className="reveal rd1"
          style={{
            textAlign: "center",
            marginTop: "48px",
            maxWidth: "720px",
            margin: "48px auto 0",
          }}
        >
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              color: "var(--gold)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            لماذا B•Stance؟
          </div>
          <p
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.02rem)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 2,
              margin: "0 auto 28px",
            }}
          >
            لأننا نجمع <strong style={{ color: "#fff" }}>فريق الأداء الكامل</strong> في منظومة واحدة —{" "}
            المدرب وأخصائي التغذية وأخصائي الريكافري يعملون معاً لضمان أن كل جهد تبذله يتحول إلى:
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "💪", text: "أداء أقوى" },
              { icon: "⚡", text: "سرعة أعلى" },
              { icon: "🛡️", text: "جسد أكثر جاهزية وأقل عرضة للإصابات" },
            ].map((r, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  background: "rgba(61,216,200,0.06)",
                  border: "1px solid rgba(61,216,200,0.15)",
                  borderRadius: "50px",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <span>{r.icon}</span> {r.text}
              </div>
            ))}
          </div>
        </div>

        {/* ── لمن صُممت المنظومة؟ ── */}
        <div
          className="reveal rd3"
          style={{
            textAlign: "center",
            marginTop: "48px",
            padding: "28px 24px",
            background: "rgba(255,179,71,0.04)",
            border: "1px solid rgba(255,179,71,0.12)",
            borderRadius: "20px",
            maxWidth: "680px",
            margin: "48px auto 0",
          }}
        >
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              color: "var(--gold)",
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            لمن صُممت هذه المنظومة؟
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { icon: "🏆", text: "الأبطال والمحترفون الساعون لكسر أرقامهم" },
              { icon: "🏋️", text: "لاعبي الجيم الباحثين عن نتائج حقيقية" },
              { icon: "⭐", text: "الأكاديميات والناشئين لحماية مستقبلهم الرياضي" },
            ].map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  background: "rgba(255,255,255,0.03)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,179,71,0.08)",
                  textAlign: "right",
                }}
              >
                <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{a.icon}</span>
                <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>
                  {a.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="section-cta-bar">
          <a href="#booking" className="btn-primary">
            📲 احجز تجربتك الأولى ←
          </a>
          <p>جلستك الأولى هي بداية المنظومة — ليست مجرد جلسة</p>
        </div>
      </section>
    </>
  );
}
