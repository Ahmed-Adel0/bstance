"use client";
import React from "react";

/* ════════════════════════════════════════════════
   B•Stance — باقات الاشتراك
   4 باقات (شهرية / ربع سنوية / نصف سنوية / سنوية)
   + protocol pills (Train • Fuel • Recover)
   ════════════════════════════════════════════════ */

const packages = [
  /* ── 1. الباقة الشهرية ── */
  {
    id: "monthly",
    tag: { text: "🔥 ابدأ من هنا — الأنسب للمبتدئين", type: "hot" },
    featured: false,
    accentColor: "gold",
    delay: "",
    for: "للمبتدئين وأصحاب الجداول المزدحمة",
    name: "الباقة الشهرية",
    duration: "30 يوم",
    tagline: "شوف الفرق بنفسك",
    originalPrice: "1,700",
    price: "1000",
    unit: "ج.م / شهر",
    saveBadge: "وفّر 700 ج.م — خصم 40% 🔥",
    protocol: ["Training", "Nutrition", "Recovery"],
    features: [
      "برنامج تدريب مخصص بالفيديو",
      "نظام تغذية علمي متكامل",
      "متابعة يومية مع الكوتش عبر واتساب",
      "جلسة ريكافري واحدة طوال الشهر",
    ],
    highlight: "نقطة الانطلاق المثالية — ابدأ وشوف النتيجة بنفسك",
    cta: "احجز الباقة الشهرية",
  },

  /* ── 2. الباقة الربع سنوية (Flagship) ── */
  {
    id: "quarterly",
    tag: { text: "⭐ الأكثر طلباً — الأوفر قيمة", type: "top" },
    featured: true,
    accentColor: "teal",
    delay: "rd1",
    for: "للجادين في تحقيق نتائج ملموسة",
    name: "الباقة الربع سنوية",
    duration: "90 يوم",
    tagline: "حيث تبدأ التحولات الحقيقية",
    originalPrice: "3,500",
    price: "2,000",
    unit: "ج.م",
    saveBadge: "وفّر 1,500 ج.م 🎉",
    protocol: ["Training", "Nutrition", "Recovery"],
    features: [
      "كل مميزات الشهرية × 3 أشهر متواصلة",
      "جلسة ريكافري شهرية (3 جلسات)",
      "فيديو كول شهري مع الكوتش",
      "تعديل مستمر على الخطة والتغذية",
      "متابعة مكثفة طوال فترة الاشتراك",
    ],
    highlight: "التكامل الحقيقي — Train • Fuel • Recover في منظومة واحدة 💪",
    cta: "اشترك في الربع سنوية",
  },

  /* ── 3. الباقة النصف سنوية ── */
  {
    id: "semi-annual",
    tag: null,
    featured: false,
    accentColor: "gold",
    delay: "rd2",
    for: "لمن يريد تحولاً جسدياً حقيقياً ومستداماً",
    name: "الباقة النصف سنوية",
    duration: "6 أشهر",
    tagline: "متابعة مكثفة لمدة ستة أشهر",
    originalPrice: "4,500",
    price: "3,000",
    unit: "ج.م",
    saveBadge: "وفّر 1,500 ج.م 🔥",
    protocol: ["Training", "Nutrition", "Recovery"],
    features: [
      "متابعة مكثفة 6 أشهر متواصلة",
      "جلسة ريكافري شهرية (6 جلسات)",
      "فيديو كول مرتين شهرياً مع الكوتش",
      "تعديل مستمر للخطة + أولوية في الحجوزات",
      "اشتراك الجيم مُضمَّن في الباقة",
    ],
    highlight: "التحول الحقيقي يبدأ بعد الشهر الثالث — هنا تحصد النتائج",
    cta: "احجز النصف سنوية",
  },

  /* ── 4. الباقة السنوية ── */
  {
    id: "annual",
    tag: null,
    featured: false,
    accentColor: "teal",
    delay: "rd3",
    for: "لمن يريد تحولاً شاملاً وتغييراً دائماً",
    name: "الباقة السنوية",
    duration: "12 شهر",
    tagline: "التحول الكامل والمستدام",
    originalPrice: "9,000",
    price: "6,000",
    unit: "ج.م",
    saveBadge: "وفّر 3,000 ج.م 🏅",
    protocol: ["Training", "Nutrition", "Recovery"],
    features: [
      "تحول جسدي كامل طوال 12 شهراً",
      "جلسة ريكافري شهرية (12 جلسة)",
      "فيديو كول مرتين شهرياً",
      "خصم حصري على مكملات Volt",
      "اشتراك الجيم مُضمَّن في الباقة",
      "أولوية قصوى في جميع الحجوزات",
    ],
    highlight: "استثمار في نفسك لسنة كاملة — نتائج مضمونة بالبيانات 🏆",
    cta: "احجز الباقة السنوية",
  },
];

/* ── Protocol Pills ── */
const protocolColors: Record<string, string> = {
  Training: "rgba(61,216,200,0.15)",
  Nutrition: "rgba(255,179,71,0.15)",
  Recovery: "rgba(255,107,107,0.15)",
};
const protocolTextColors: Record<string, string> = {
  Training: "#3dd8c8",
  Nutrition: "#ffb347",
  Recovery: "#ff9090",
};
const protocolIcons: Record<string, string> = {
  Training: "💪",
  Nutrition: "🥗",
  Recovery: "💆",
};

export default function PackagesSection() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ═══════ PACKAGES ═══════ */}
      <section className="section" id="packages">
        {/* Header */}
        <div className="pkg-header">
          <div className="s-label" style={{ justifyContent: "center" }}>
            باقات الاشتراك
          </div>
          <h2 className="s-title pkg-title">
            اختر باقتك — ابدأ بالخطوة التي تناسبك
          </h2>
          <p className="s-sub pkg-sub">
            كل باقة مصممة لتناسب مرحلتك الحالية — ويمكنك الترقية في أي وقت.
            <br />
            <span style={{ color: "var(--teal-light)", fontWeight: 700 }}>
              Train • Nutrition • Recovery
            </span>{" "}
            — المنظومة الكاملة تبدأ بخطوة واحدة.
          </p>
        </div>

        {/* Grid */}
        <div className="pkg-grid-v2">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`pkg-card-v2 reveal ${pkg.delay} ${pkg.featured ? "pkg-card-v2--featured" : ""}`}
            >
              {/* Featured glow */}
              {pkg.featured && <div className="pkg-featured-glow" />}

              {/* Top tag */}
              {pkg.tag && (
                <div className={`pkg-top-tag-v2 pkg-top-tag-v2--${pkg.tag.type}`}>
                  {pkg.tag.text}
                </div>
              )}

              {/* Target audience */}
              <div className="pkg-for-v2">{pkg.for}</div>

              {/* Name + duration */}
              <div className="pkg-name-block">
                <h3 className="pkg-name-v2">{pkg.name}</h3>
                <div className="pkg-duration">
                  <span>{pkg.duration}</span>
                  <span className="pkg-duration-dot">·</span>
                  <span>{pkg.tagline}</span>
                </div>
              </div>

              {/* Protocol pills */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                  margin: "10px 0 14px",
                }}
              >
                {pkg.protocol.map((p) => (
                  <span
                    key={p}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      background: protocolColors[p] || "rgba(255,255,255,0.07)",
                      color: protocolTextColors[p] || "rgba(255,255,255,0.6)",
                      border: `1px solid ${protocolTextColors[p] || "rgba(255,255,255,0.12)"}22`,
                      padding: "4px 12px",
                      borderRadius: "50px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                    }}
                  >
                    {protocolIcons[p] || "•"} {p}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="pkg-price-block">
                <div className="pkg-orig-price">
                  بدلاً من {pkg.originalPrice} ج.م
                </div>
                <div className="pkg-price-row-v2">
                  <span className={`pkg-price-num pkg-price-num--${pkg.accentColor}`}>
                    {pkg.price}
                  </span>
                  <span className="pkg-price-unit">{pkg.unit}</span>
                </div>
                <div className={`pkg-save-badge pkg-save-badge--${pkg.accentColor}`}>
                  {pkg.saveBadge}
                </div>
              </div>

              {/* Divider */}
              <div className="pkg-divider" />

              {/* Features */}
              <ul className="pkg-features-v2">
                {pkg.features.map((f, i) => (
                  <li key={i}>
                    <span className={`pkg-check pkg-check--${pkg.accentColor}`}>
                      ✔
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Highlight note */}
              <div
                className={`pkg-vip-reward pkg-vip-reward--${pkg.accentColor}`}
              >
                <span className="pkg-vip-ico">✦</span>
                <span>{pkg.highlight}</span>
              </div>

              {/* CTA */}
              <button
                className={`pkg-cta-btn ${pkg.featured ? "pkg-cta-btn--solid" : "pkg-cta-btn--outline"} pkg-cta-btn--${pkg.accentColor}`}
                onClick={scrollToBooking}
              >
                {pkg.cta}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Compare note */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "32px",
            padding: "20px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "16px",
            border: "1px solid rgba(61,216,200,0.08)",
            maxWidth: "720px",
            margin: "32px auto 0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "28px",
              flexWrap: "wrap",
              fontSize: "0.82rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <span>✅ لا تعاقد — قابل للإلغاء في أي وقت</span>
            <span>✅ ترقية الباقة متاحة دائماً</span>
            <span>✅ بيانات موحدة بين المدرب وأخصائي التغذية والريكافري</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="section-cta-bar">
          <a href="#booking" className="btn-primary">
            📲 احجز باقتك وابدأ منظومتك ←
          </a>
          <p>Train • Fuel • Recover</p>
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.25)",
              marginTop: "4px",
            }}
          >
            * اشتراك الجيم مُضمَّن في الباقات النصف سنوية والسنوية — يُفعَّل
            عند بدء الاشتراك الفعلي.
          </p>
        </div>
      </section>
    </>
  );
}
