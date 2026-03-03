"use client";
import React from "react";
import CountdownTimer from "@/components/ui/CountdownTimer";

const perks = [
  {
    icon: "🎁",
    title: "هدية فورية مضمونة",
    desc: "بمجرد انتهاء الجلسة تحصل على هديتك — بدون انتظار نتيجة السحب.",
  },
  {
    icon: "🎟️",
    title: "هات صاحبك — فرصتك تضاعف",
    desc: "أحضر صديقاً معك واحصل على تذكرتين في السحب الكبير بدلاً من واحدة.",
  },
  {
    icon: "✅",
    title: "الكل منتصر",
    desc: "خصم 20% مضمون لكل المشاركين + دليل التغذية للرياضيين مجاناً.",
  },
];

// ضع هنا تاريخ نهاية الفترة الفعلي (27 رمضان)
const RAFFLE_END_DATE = "2026-03-27T23:59:59";

export default function GoldenOpportunitySection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        className="section"
        id="golden-opportunity"
        style={{
          background: "rgba(255,179,71,0.03)",
          borderTop: "1px solid rgba(255,179,71,0.1)",
        }}
      >
        <div
          className="reveal"
          style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto" }}
        >
          {/* Label */}
          <div
            className="s-label"
            style={{ justifyContent: "center", color: "var(--accent)" }}
          >
            أيام الفرصة الذهبية
          </div>

          {/* Title */}
          <h2 className="s-title" style={{ color: "var(--accent)" }}>
            Everyone Wins — الكل منتصر! 🏆
          </h2>

          {/* Sub */}
          <p
            className="s-sub"
            style={{ margin: "0 auto", marginBottom: "40px" }}
          >
            باخترتك B•Stance مستحيل تخرج فاضي. فترة السحب محدودة — 14 يوم
            فقط لتضمن مكافأتك.
          </p>

          {/* Perks grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
              marginBottom: "44px",
              textAlign: "right",
            }}
          >
            {perks.map((perk, i) => (
              <div
                key={i}
                className={`rule-card reveal rd${i + 1}`}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  padding: "24px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,179,71,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ fontSize: "2.2rem" }}>{perk.icon}</div>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  {perk.title}
                </h3>
                <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Countdown */}
          <div
            className="hero-countdown"
            style={{ margin: "0 auto 36px", maxWidth: "420px" }}
          >
            <div className="cd-label">الوقت المتبقي لضمان مكافأتك</div>
            <CountdownTimer targetDate={RAFFLE_END_DATE} />
          </div>

          {/* CTA */}
          <button
            className="btn-primary"
            onClick={scrollToBooking}
            style={{ fontSize: "1.1rem", padding: "16px 36px" }}
          >
            احجز الآن واضمن مكافأتك 🚀
          </button>
        </div>
      </section>
    </>
  );
}
