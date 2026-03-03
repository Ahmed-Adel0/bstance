"use client";
import React from "react";

const packages = [
  {
    id: "monthly",
    tag: { text: "🔥 ابدأ من هنا — الأنسب للمبتدئين", type: "hot" },
    upgradeBadge: "🎁 فرصة سحب: شهر ← 3 شهور مجاناً",
    for: "للمبتدئين وصاحب الجداول المزدحمة",
    name: "الباقة الشهرية",
    duration: "30 يوم",
    tagline: "شوف الفرق بنفسك",
    originalPrice: "1,500",
    price: "800",
    unit: "ج.م / شهر",
    saveBadge: "وفّر 700 ج.م — خصم 50% 🔥",
    features: [
      "برنامج تدريب مخصص بالفيديو",
      "نظام تغذية علمي متكامل",
      "متابعة يومية مع الكوتش عبر واتساب",
      "جلسة ريكافري واحدة طوال الشهر",
    ],
    vipReward: {
      icon: "👑",
      text: "سحب VIP: الفائز يحصل على ترقية لباقة 3 شهور — بنفس السعر المدفوع",
    },
    cta: "احجز الباقة الشهرية",
    featured: false,
    accentColor: "gold",
    delay: "",
  },
  {
    id: "quarterly",
    tag: { text: "⭐ الأكثر اختياراً — الأوفر قيمة", type: "top" },
    upgradeBadge: "🎁 فرصة سحب: 3 شهور ← 6 شهور مجاناً",
    for: "للجادين في تحقيق نتائج ملموسة",
    name: "الباقة الربع سنوية",
    duration: "90 يوم",
    tagline: "حيث تبدأ التحولات الحقيقية",
    originalPrice: "3,500",
    price: "2,000",
    unit: "ج.م",
    saveBadge: "وفّر 1,500 ج.م 🎉",
    features: [
      "كل مميزات الشهرية × 3 أشهر متواصلة",
      "جلسة ريكافري شهرية (3 جلسات)",
      "فيديو كول شهري مع الكوتش",
      "تعديل مستمر على الخطة والتغذية",
      "متابعة مكثفة طوال فترة الاشتراك",
    ],
    vipReward: {
      icon: "💎",
      text: "سحب VIP: ترقية لباقة 6 شهور كاملة — قيمة فعلية 3,000 ج.م",
    },
    cta: "اشترك في الربع سنوية",
    featured: true,
    accentColor: "teal",
    delay: "rd1",
  },
  {
    id: "semi-annual",
    tag: null,
    upgradeBadge: null,
    for: "لمن يريد تحولاً جسدياً حقيقياً ومستداماً",
    name: "الباقة النصف سنوية",
    duration: "6 أشهر",
    tagline: "متابعة مكثفة لمدة ستة أشهر",
    originalPrice: "4,500",
    price: "3,000",
    unit: "ج.م",
    saveBadge: "وفّر 1,500 ج.م 🔥",
    features: [
      "متابعة مكثفة 6 أشهر متواصلة",
      "جلسة ريكافري شهرية (6 جلسات)",
      "فيديو كول مرتين شهرياً مع الكوتش",
      "تعديل مستمر للخطة + أولوية في الحجوزات",
      "اشتراك الجيم مُضمَّن في الباقة",
    ],
    vipReward: {
      icon: "🏅",
      text: "سحب VIP: باقة مكملات Volt كاملة (بروتين + كارب + كرياتين)",
    },
    cta: "احجز النصف سنوية",
    featured: false,
    accentColor: "gold",
    delay: "rd2",
  },
  {
    id: "annual",
    tag: null,
    upgradeBadge: null,
    for: "لمن يريد تحولاً شاملاً وتغييراً دائماً",
    name: "الباقة السنوية",
    duration: "12 شهر",
    tagline: "التحول الكامل والمستدام",
    originalPrice: "9,000",
    price: "6,000",
    unit: "ج.م",
    saveBadge: "وفّر 3,000 ج.م 🏅",
    features: [
      "تحول جسدي كامل طوال 12 شهراً",
      "جلسة ريكافري شهرية (12 جلسة)",
      "فيديو كول مرتين شهرياً",
      "خصم حصري على مكملات Volt",
      "اشتراك الجيم مُضمَّن في الباقة",
      "أولوية قصوى في جميع الحجوزات",
    ],
    vipReward: {
      icon: "🌟",
      text: "سحب VIP: باقة مكملات Volt كاملة (بروتين + كارب + كرياتين)",
    },
    cta: "احجز الباقة السنوية",
    featured: false,
    accentColor: "teal",
    delay: "rd3",
  },
];

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
            باقات النخبة
          </div>
          <h2 className="s-title pkg-title">
            اشترك وادخل سحب الترقية المجانية
          </h2>
          <p className="s-sub pkg-sub">
            باقات الاشتراك هي الطريق الوحيد لسحب ترقية الباقة الأعلى مجاناً.
            <br />
            كلما كانت باقتك أكبر، كانت الجائزة أكبر.
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

              {/* Upgrade badge */}
              {pkg.upgradeBadge && (
                <div className="pkg-upgrade-badge">{pkg.upgradeBadge}</div>
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

              {/* Price */}
              <div className="pkg-price-block">
                <div className="pkg-orig-price">
                  بدلاً من {pkg.originalPrice} ج.م
                </div>
                <div className="pkg-price-row-v2">
                  <span
                    className={`pkg-price-num pkg-price-num--${pkg.accentColor}`}
                  >
                    {pkg.price}
                  </span>
                  <span className="pkg-price-unit">{pkg.unit}</span>
                </div>
                <div
                  className={`pkg-save-badge pkg-save-badge--${pkg.accentColor}`}
                >
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

              {/* VIP Reward */}
              <div
                className={`pkg-vip-reward pkg-vip-reward--${pkg.accentColor}`}
              >
                <span className="pkg-vip-ico">{pkg.vipReward.icon}</span>
                <span>{pkg.vipReward.text}</span>
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

        {/* Bottom CTA */}
        <div className="section-cta-bar">
          <a href="#booking" className="btn-primary">
            📲 احجز باقتك وادخل سحب الترقية ←
          </a>
          <p>كل اشتراك = دخول تلقائي في سحب ترقية الباقة الأعلى مجاناً</p>
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
