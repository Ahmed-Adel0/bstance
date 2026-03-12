"use client";
import React from "react";

/* ════════════════════════════════════════════════
   AcademyServicesSection — خدماتنا للأكاديميات والجيمات
   ════════════════════════════════════════════════ */

const services = [
  { icon: "🏋️", text: "تدريب فتنس متخصص للاعبين" },
  { icon: "🥗", text: "برامج تغذية رياضية مخصصة" },
  { icon: "💆", text: "جلسات استشفاء عضلي" },
  { icon: "🔴", text: "جلسات حجامة للرياضيين" },
];

const goals = [
  { icon: "💪", text: "تحسين القوة واللياقة" },
  { icon: "⚡", text: "تسريع التعافي" },
  { icon: "🛡️", text: "تقليل الإصابات" },
  { icon: "🏆", text: "الوصول لأفضل أداء في المنافسات" },
];

export default function AcademyServicesSection() {
  return (
    <section className="section" id="academies">
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div className="s-label" style={{ justifyContent: "center" }}>
          خدمات الأكاديميات والجيمات
        </div>
        <h2 className="s-title">منظومة دعم متكاملة للأكاديميات الرياضية</h2>
        <p
          className="s-sub"
          style={{ margin: "0 auto", textAlign: "center", maxWidth: "720px" }}
        >
          نقدم منظومة دعم متكاملة للأكاديميات الرياضية والجيمات لمساعدة
          اللاعبين على تحسين الأداء وتقليل الإصابات.
        </p>
      </div>

      <div className="acad-grid reveal">
        {/* Services Column */}
        <div className="acad-card">
          <div className="acad-card-header acad-card-header--teal">
            <span className="acad-card-icon">🏟️</span>
            <div>
              <div className="acad-card-title">الخدمات المقدمة</div>
              <div className="acad-card-sub">
                خدمات متكاملة لدعم اللاعبين
              </div>
            </div>
          </div>
          <div className="acad-items">
            {services.map((s, i) => (
              <div key={i} className={`acad-item reveal rd${i + 1}`}>
                <span className="acad-item-icon">{s.icon}</span>
                <span className="acad-item-text">{s.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Goals Column */}
        <div className="acad-card">
          <div className="acad-card-header acad-card-header--gold">
            <span className="acad-card-icon">🎯</span>
            <div>
              <div className="acad-card-title">هدف المنظومة</div>
              <div className="acad-card-sub">
                مساعدة اللاعب على تحقيق أعلى مستوى
              </div>
            </div>
          </div>
          <div className="acad-items">
            {goals.map((g, i) => (
              <div key={i} className={`acad-item acad-item--gold reveal rd${i + 1}`}>
                <span className="acad-item-icon">{g.icon}</span>
                <span className="acad-item-text">{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section-cta-bar">
        <a
          href="https://wa.me/201279266345?text=أنا%20مهتم%20بخدمات%20B•Stance%20للأكاديميات"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          📲 تواصل معنا للأكاديميات ←
        </a>
        <p>شراكات مصممة لتطوير أداء لاعبيك وحمايتهم من الإصابات</p>
      </div>
    </section>
  );
}
