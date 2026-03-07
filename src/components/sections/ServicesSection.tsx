"use client";
import React from "react";

const recoveryServices = [
  {
    icon: "🥗",
    name: "نظام تغذية مخصص",
    desc: "خطة غذائية مصممة خصيصاً لجسمك وأهدافك وجدول تمرينك — تغذية علمية لا حرمان.",
    price: "250",
    originalPrice: "500",
    delay: "",
  },
  {
    icon: "🏋️",
    name: "جدول تمرين مخصص",
    desc: "برنامج تمرين احترافي مبني على مستواك وهدفك — يرفع أداءك ويحميك من الإصابات.",
    price: "250",
    originalPrice: "500",
    delay: "rd1",
  },
  {
    icon: "💆",
    name: "جلسة ريكافري عادية",
    desc: "مساج عميق متخصص + Massage Gun لتخفيف الألم وإعادة نشاط العضلات فوراً بعد التمرين.",
    price: "400",
    originalPrice: "700",
    delay: "rd2",
  },
  {
    icon: "🌿",
    name: "جلسة ريكافري كاملة",
    desc: "مساج رياضي عميق + أدوات متخصصة + Massage Gun + فوطة نارية + حجامة — استعادة كاملة للجسم.",
    price: "700",
    originalPrice: "1,000",
    delay: "rd3",
    highlight: true,
  },
];

const hijamaServices = [
  {
    icon: "🔴",
    name: "حجامة الرقبة",
    desc: "تخفيف آلام الرقبة والصداع وتوتر الكتفين — تنشيط الدورة الدموية وتجديد الطاقة.",
    price: "150",
    originalPrice: null,
    delay: "rd1",
  },
  {
    icon: "🔴",
    name: "حجامة الظهر",
    desc: "علاج الآلام المزمنة وتعزيز مرونة الظهر — الخيار الأول للرياضيين بعد الإجهاد.",
    price: "200",
    originalPrice: "300",
    delay: "",
  },
  {
    icon: "🔴",
    name: "حجامة القدمين",
    desc: "تنشيط الدورة الدموية وتخفيف إجهاد الأطراف — استرخاء عميق للقدمين.",
    price: "250",
    originalPrice: "300",
    delay: "rd2",
  },
];

const addons = [
  {
    icon: "🔥",
    name: "فوطة نارية",
    desc: "حرارة علاجية عميقة تُرخّي العضلات وتسرّع الاستشفاء.",
    price: "100",
  },
  {
    icon: "⭕",
    name: "حجامة جافة",
    desc: "شفط فراغي بدون شروط — لتنشيط العضلات وتخفيف التوتر.",
    price: "100",
  },
  {
    icon: "🕯️",
    name: "حجامة نارية",
    desc: "حرارة علاجية عميقة للعضلات المجهدة والتشنجات المزمنة.",
    price: "100",
  },
];

export default function ServicesSection() {
  return (
    <>
      {/* ═══════ INDIVIDUAL SERVICES ═══════ */}
      <section className="section alt" id="services">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="s-label" style={{ justifyContent: "center" }}>
            الخدمات الفردية
          </div>
          <h2 className="s-title">الأسعار والتفاصيل — احجز ما يناسبك</h2>
          <p className="s-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            كل جلسة فردية تدخلك سحب{" "}
            <strong style={{ color: "var(--gold)" }}>مكملات Volt </strong>تلقائياً 🎁 — بروتين أو كرياتين أو كارب.
          </p>
          <p style={{ margin: "0 auto", textAlign: "center" }}>أو تجربة B.Stance لمدة شهر مجانا</p>
          <a
            href="#raffle-hook"
            className="svc-raffle-bridge"
            aria-label="اعرف المزيد عن آلية السحب"
          >
            <span>🎯</span>
            شوف تفاصيل الجوائز والسحب
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="svc-layout">
          {/* ── RECOVERY & TRAINING ── */}
          <div className="svc-block">
            <div className="svc-block-header svc-block-header--teal">
              <span className="svc-block-icon">💆</span>
              <div>
                <div className="svc-block-title">ريكافري · تدريب · تغذية</div>
                <div className="svc-block-sub">
                  🎁 كل جلسة = تذكرة سحب مكملات Volt
                </div>
              </div>
            </div>

            <div className="svc-cards">
              {recoveryServices.map((s, i) => (
                <div
                  key={i}
                  className={`svc-card reveal ${s.delay} ${s.highlight ? "svc-card--highlight" : ""}`}
                >
                  <div className="svc-card-left">
                    <div className="svc-card-icon">{s.icon}</div>
                    <div className="svc-card-body">
                      <div className="svc-card-name">{s.name}</div>
                      <div className="svc-card-desc">{s.desc}</div>
                      <div className="svc-card-prices">
                        <span className="svc-card-price">{s.price} ج.م</span>
                        {s.originalPrice && (
                          <span className="svc-card-orig">
                            {s.originalPrice} ج.م
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── HIJAMA ── */}
          <div className="svc-block">
            <div className="svc-block-header svc-block-header--red">
              <span className="svc-block-icon">🔴</span>
              <div>
                <div className="svc-block-title">جلسات الحجامة التشريطية</div>
                <div className="svc-block-sub">
                  كاسات أحادية الاستخدام · أعلى معايير التعقيم والسلامة
                </div>
              </div>
            </div>

            {/* Individual hijama */}
            <div className="svc-cards">
              {hijamaServices.map((s, i) => (
                <div key={i} className={`svc-card reveal ${s.delay}`}>
                  <div className="svc-card-left">
                    <div className="svc-card-icon svc-card-icon--red">
                      {s.icon}
                    </div>
                    <div className="svc-card-body">
                      <div className="svc-card-name">{s.name}</div>
                      <div className="svc-card-desc">{s.desc}</div>
                      <div className="svc-card-prices">
                        <span className="svc-card-price">{s.price} ج.م</span>
                        {s.originalPrice && (
                          <span className="svc-card-orig">
                            {s.originalPrice} ج.م
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Comprehensive hijama */}
            <div className="svc-block-sub-header">
              ✨ الحجامة الشاملة — أعلى قيمة بأقل تكلفة
            </div>
            <div className="svc-card svc-card--highlight reveal">
              <div className="svc-card-left">
                <div className="svc-card-icon">🌟</div>
                <div className="svc-card-body">
                  <div className="svc-card-name">
                    حجامة شاملة (ظهر + رقبة + قدمين)
                  </div>
                  <div className="svc-card-desc">
                    جلسة متكاملة لإعادة التوازن الكامل للجسم — توفّر أكثر من
                    200 ج.م مقارنةً بالحجز المنفصل.
                  </div>
                  <div className="svc-card-prices">
                    <span className="svc-card-price">400 ج.م</span>
                    <span className="svc-card-orig">600 ج.م</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="svc-block-sub-header" style={{ marginTop: "20px" }}>
              ➕ إضافات على الجلسة
            </div>
            <div className="addons-grid-v2">
              {addons.map((a, i) => (
                <div key={i} className={`addon-card-v2 reveal rd${i + 1}`}>
                  <div className="addon-ico-v2">{a.icon}</div>
                  <div className="addon-name-v2">{a.name}</div>
                  <div className="addon-desc-v2">{a.desc}</div>
                  <div className="addon-price-v2">{a.price} ج.م</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="section-cta-bar">
          <a href="#booking" className="btn-primary">
            📲 احجز جلستك وادخل السحب الآن ←
          </a>
        </div>
      </section>
    </>
  );
}
