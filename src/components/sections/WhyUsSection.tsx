"use client";
import React from "react";

/* ════════════════════════════════════════════════
   WhyUsSection — لماذا B•Stance
   Updated: certified specialists, sports nutrition & recovery
   ════════════════════════════════════════════════ */

const pillars = [
  {
    icon: "🏋️",
    title: "برامج تدريبية احترافية",
    text: "يقدمها خبراء حاصلون على أعلى الاعتمادات العالمية في التدريب بالإضافة إلى درجة الماجستير في التربية الرياضية.",
    result: "✦ برامج علمية مبنية على أحدث الأبحاث والمعايير الدولية",
    delay: "",
  },
  {
    icon: "🥗",
    title: "تغذية رياضية متخصصة",
    text: "برامج تغذية رياضية متخصصة لكل رياضة تحت إشراف أخصائيين معتمدين من وحدة الطب الرياضي بوزارة الشباب والرياضة.",
    result: "✦ أنظمة غذائية مبنية على بيانات حقيقية وأهداف محددة",
    delay: "rd1",
  },
  {
    icon: "🔄",
    title: "استشفاء رياضي متكامل",
    text: "برامج استشفاء رياضي متكاملة ومقننة حسب البرنامج التدريبي لكل لاعب للمساعدة على التعافي الصحيح والوصول لأعلى مستوى أداء.",
    result: "✦ تقنيات استشفاء متقدمة نادراً ما تجدها في المنطقة",
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
          <h2 className="s-title">منظومة متكاملة تحت إشراف متخصصين معتمدين</h2>
          <p className="s-sub" style={{ margin: "0 auto", textAlign: "center", maxWidth: "720px" }}>
            نقدم خدماتنا تحت إشراف متخصصين معتمدين لضمان أعلى جودة في التدريب
            والرعاية الرياضية. تشمل منظومتنا:
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
        <div className="reveal rd1 why-integration">
          <div className="why-integration-title">
            لماذا B•Stance؟
          </div>
          <p className="why-integration-desc">
            لأننا نجمع <strong>فريق الأداء الكامل</strong> في منظومة واحدة —{" "}
            المدرب وأخصائي التغذية وأخصائي الريكافري يعملون معاً لضمان أن كل جهد تبذله يتحول إلى:
          </p>
          <div className="why-badges">
            {[
              { icon: "💪", text: "تحسين القوة واللياقة" },
              { icon: "⚡", text: "تسريع التعافي" },
              { icon: "🛡️", text: "تقليل الإصابات" },
              { icon: "🏆", text: "أفضل أداء في المنافسات" },
            ].map((r, i) => (
              <div key={i} className="why-badge">
                <span>{r.icon}</span> {r.text}
              </div>
            ))}
          </div>
        </div>

        {/* ── لمن صُممت المنظومة؟ ── */}
        <div className="reveal rd3 why-audience">
          <div className="why-audience-title">
            لمن صُممت هذه المنظومة؟
          </div>
          <div className="why-audience-list">
            {[
              { icon: "🏆", text: "الأبطال والمحترفون الساعون لكسر أرقامهم" },
              { icon: "🏋️", text: "لاعبي الجيم الباحثين عن نتائج حقيقية" },
              { icon: "⭐", text: "الأكاديميات الرياضية والناشئين لحماية مستقبلهم الرياضي" },
              { icon: "🏟️", text: "الجيمات التي تريد تقديم خدمات متكاملة لعملائها" },
            ].map((a, i) => (
              <div key={i} className="why-audience-item">
                <span className="why-audience-icon">{a.icon}</span>
                <span className="why-audience-text">{a.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="section-cta-bar">
          <a href="#packages" className="btn-primary">
            📲 ابدأ برنامجك الآن ←
          </a>
          <p>التدريب البدني • التغذية الرياضية • الاستشفاء العضلي</p>
        </div>
      </section>
    </>
  );
}
