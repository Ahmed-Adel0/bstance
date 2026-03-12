"use client";
import React from "react";

export default function HeroSection() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="hero" id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>

        {/* ── Floating icon – left side ── */}
        <div className="hero-float-icon" aria-hidden="true">
          <div className="hero-float-outer" />
          <div className="hero-float-ring">
            <img
              src="/imgs/Icon.png"
              alt=""
              className="hero-float-img"
              style={{ width: "120px", height: "120px" }}
            />
          </div>
        </div>

        <div className="hero-inner">
          <div className="hero-content">
            {/* Brand badge */}
            <div className="hero-brand">
              <div className="hero-brand-text">B•Stance</div>
              {/* <div className="hero-brand-divider"></div>
              <div className="hero-brand-sub"></div> */}
            </div>

            {/* H1 */}
            <h1>
              <span className="h1-top">منظومة متكاملة</span>
              <span>
                لتطوير أداء الرياضيين <br />
                <span className="h1-accent">وصناعة الأبطال</span>
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-sub">
              إحنا أول منظومة بتقدّم خدمات رياضية متكاملة تحت إشراف متخصصين
              معتمدين لمساعدة الرياضيين على تطوير أدائهم والوصول لأفضل مستوى
              ممكن في رياضتهم.
              <br />
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>
                في B•Stance نقدم منظومة متكاملة تشمل التدريب البدني، التغذية
                الرياضية، والاستشفاء العضلي وفق برامج مدروسة ومقننة تناسب
                احتياج كل لاعب.
              </strong>
            </p>

            {/* CTAs */}
            <div className="hero-btns">
              <a href="#packages" className="btn-primary">
                ابدأ برنامجك الآن
              </a>
              <a href="#packages" className="btn-outline">
               تصفح خدماتنا
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-glass reveal">
          <div className="stat-item">
            <span className="stat-num" data-t="100" data-p="+" data-s="">
              0
            </span>
            <div className="stat-lbl">جلسة ريكافري مكتملة</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <span className="stat-num" data-t="5" data-p="+" data-s="">
              0
            </span>
            <div className="stat-lbl">خبير ومتخصص رياضي معتمد</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <span className="stat-num" data-t="100" data-s="%">
              0
            </span>
            <div className="stat-lbl">برامج علمية مخصصة للرياضيين</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <span className="stat-num" data-t="10" data-p="+" data-s="">
              0
            </span>
            <div className="stat-lbl">سنوات من الخبرة المتراكمة</div>
          </div>
        </div>
      </div>
    </>
  );
}
