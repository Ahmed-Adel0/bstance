"use client";
import React from "react";

/* ═══════════════════════════════════════════
   سحب مكملات Volt — خاص بالجلسات الفردية
   الجوائز: بروتين أو كرياتين أو كارب لـ 3 فائزين
   + فائز بتجربة B•Stance لمدة شهر
   ═══════════════════════════════════════════ */

const prizes = [
  {
    rank: "الجائزة الأولى",
    icon: "🥇",
    title: "تجربة B•Stance كاملة — شهر مجاناً",
    desc: "جلسات Recovery + تقييم عضلي + بروتوكول أداء مخصص + متابعة استشفاء لمدة 30 يوماً.",
    color: "var(--teal-light)",
    bg: "rgba(61,216,200,0.06)",
    border: "rgba(61,216,200,0.2)",
    featured: true,
  },
  {
    rank: "الجائزة الثانية",
    icon: "🥈",
    title: "بروتين من إيڤولڤ (Evolve)",
    desc: "مكمل بروتين رياضي عالي الجودة من Evolve — وقود حيوي لبناء العضلة وتسريع الاستشفاء.",
    color: "var(--gold)",
    bg: "rgba(255,179,71,0.06)",
    border: "rgba(255,179,71,0.2)",
    featured: false,
  },
  {
    rank: "الجائزة الثالثة",
    icon: "🥉",
    title: "كرياتين 30 سرڤ من بيور جانيك (Pure Ganic)",
    desc: "كرياتين لرفع القوة والأداء — 30 جرعة من Pure Ganic لتعزيز الطاقة والتحمل.",
    color: "var(--gold)",
    bg: "rgba(255,179,71,0.06)",
    border: "rgba(255,179,71,0.2)",
    featured: false,
  },
  {
    rank: "الجائزة الرابعة",
    icon: "🏅",
    title: "كارب من تراكتور (Tractor)",
    desc: "مكمل كارب لتعويض الطاقة وتسريع الاستشفاء بعد التمرين — من Tractor.",
    color: "var(--gold)",
    bg: "rgba(255,179,71,0.06)",
    border: "rgba(255,179,71,0.2)",
    featured: false,
  },
];

const rules = [
  { icon: "✅", text: "احجز أي خدمة فردية (ريكافري / حجامة / تغذية / تدريب) وادخل السحب تلقائياً" },
  { icon: "💡", text: "كل جلسة إضافية = تذكرة إضافية — كلما حجزت أكثر، زادت فرصتك" },
  { icon: "📅", text: "الإعلان عن الفائزين الـ 4 عبر صفحاتنا الرسمية يوم الافتتاح" },
];

export default function RaffleHookSection() {
  return (
    <>
      {/* ═══════ RAFFLE HOOK ═══════ */}
      <section className="hook-section" id="raffle-hook">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "44px" }} className="reveal">
          <div className="s-label" style={{ justifyContent: "center" }}>
            🎁 &nbsp;سحب الافتتاح — بالشراكة مع Volt
          </div>
          <h2
            className="s-title"
            style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)" }}
          >
            4 جوائز حقيقية لـ 4 رياضيين — على كل جلسة فردية
          </h2>
          <p
            className="s-sub"
            style={{ margin: "0 auto", textAlign: "center", maxWidth: "580px" }}
          >
            كل ما عليك: احجز أي{" "}
            <strong style={{ color: "var(--gold)" }}>جلسة فردية</strong> وتدخل السحب تلقائياً.
            {" "}الجوائز من{" "}
            <strong style={{ color: "var(--teal-light)" }}>Volt Supplements</strong>{" "}.
          </p>
        </div>

        {/* Prize Cards */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            maxWidth: "1100px",
            margin: "0 auto 36px",
          }}
        >
          {prizes.map((p, i) => (
            <div
              key={i}
              style={{
                background: p.bg,
                border: `1px solid ${p.border}`,
                borderRadius: "18px",
                padding: "24px 20px",
                position: "relative",
                ...(p.featured
                  ? { boxShadow: "0 0 32px rgba(61,216,200,0.12)" }
                  : {}),
              }}
            >
              {p.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, var(--teal-mid), var(--teal-light))",
                    color: "var(--navy, #0d1b4b)",
                    fontSize: "0.68rem",
                    fontWeight: 900,
                    padding: "4px 16px",
                    borderRadius: "50px",
                    whiteSpace: "nowrap",
                  }}
                >
                  ⭐ الجائزة الكبرى
                </div>
              )}
              <div style={{ fontSize: "2.2rem", marginBottom: "10px" }}>{p.icon}</div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  color: p.color,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                {p.rank}
              </div>
              <div
                style={{
                  fontFamily: "'Tajawal', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 800,
                  marginBottom: "8px",
                  color: "#fff",
                }}
              >
                {p.title}
              </div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Rules */}
        <div className="rules-grid reveal" style={{ marginTop: "8px" }}>
          {rules.map((r, i) => (
            <div key={i} className="rule-card">
              <div className="rule-ico">{r.icon}</div>
              <span>{r.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="section-cta-bar">
          <a href="#services" className="btn-primary">
            🎯 تصفّح الجلسات الفردية وادخل السحب ←
          </a>
          <p>السحب مجاني — يكفي أن تحجز جلسة واحدة</p>

          {/* Bridge to Services */}
          <div className="raffle-to-services-bridge reveal">
            <span className="rtb-text">تريد معرفة الجلسات المشاركة؟</span>
            <a href="#services" className="rtb-link">
              شوف كل الخدمات الفردية
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{ transform: "scaleX(-1)" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
