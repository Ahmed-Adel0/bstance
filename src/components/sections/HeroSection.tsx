"use client";
import React from "react";
import CountdownTimer from "@/components/ui/CountdownTimer";

// تاريخ نهاية السحب — 27 رمضان 2026
const RAFFLE_END_DATE = "2026-03-17T17:59:59";

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
              <div className="hero-brand-divider"></div>
              <div className="hero-brand-sub">Reset your Balance</div>
            </div>

            {/* H1 */}
            <h1>
              <span className="h1-top">لأن التوازن هو الأساس —</span>
              <span>
                استعِد قوتك <br />
                <span className="h1-accent">وانطلق بشغف</span>
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-sub">
              تجربة رياضية تجمع بين الاحترافية العلمية والنتائج الملموسة.
              نضع بين يديك
              <br />
              <strong style={{ color: "rgba(255,255,255,0.85)" }}>
                أحدث تقنيات الاستشفاء، التدريب الذكي، والخطط الغذائية الدقيقة
                لتمكينك من بلوغ ذروة أدائك البدني.
              </strong>
            </p>

            {/* Countdown — مفصول بـ spacer واضح */}
            <div className="hero-countdown-wrap">
              <div className="hero-countdown">
                <div className="cd-label">
                  🏆 سحب الافتتاح الكبير — الوقت المتبقي
                </div>
                <CountdownTimer targetDate={RAFFLE_END_DATE} />
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-btns">
              <a href="#services" className="btn-primary">
                اكتشف خدماتنا
              </a>
              <a href="#booking" className="btn-outline">
                احجز جلستك الآن
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stats-glass reveal">
          <div className="stat-item">
            <span className="stat-num" data-t="200" data-p="+" data-s=" جلسة">
              0
            </span>
            <div className="stat-lbl">جلسة ريكافري وحجامة منجزة</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <span className="stat-num" data-t="3" data-s=" متخصصين">
              0
            </span>
            <div className="stat-lbl">في التغذية والتدريب والريكافري</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <span className="stat-num" data-t="100" data-s="%">
              0
            </span>
            <div className="stat-lbl">تعقيم بمعايير طبية معتمدة</div>
          </div>
          <div className="stat-div"></div>
          <div className="stat-item">
            <span className="stat-num" data-t="3" data-p="+" data-s=" سنوات">
              0
            </span>
            <div className="stat-lbl">خبرة الفريق المتخصص</div>
          </div>
        </div>
      </div>
    </>
  );
}
