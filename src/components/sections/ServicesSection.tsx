"use client";
import React from "react";

const mainServices = [
  {
    icon: "🏋️",
    name: "برامج تدريبية احترافية",
    desc: "برامج تدريب فتنس مصممة خصيصاً للرياضيين لتحسين القوة والسرعة وتقليل الإصابات، مبنية على أحدث الأبحاث وتحت إشراف خبراء حاصلين على أعلى الاعتمادات العالمية والماجستير.",
    color: "teal",
    delay: "",
  },
  {
    icon: "🥗",
    name: "تغذية رياضية متخصصة",
    desc: "أنظمة غذائية مخصصة لكل لاعب حسب رياضته لتحسين الأداء وتسريع التعافي، مبنية على بيانات حقيقية تحت إشراف أخصائيين معتمدين من وحدة الطب الرياضي بوزارة الشباب.",
    color: "gold",
    delay: "rd1",
  },
  {
    icon: "💆",
    name: "استشفاء رياضي متكامل",
    desc: "جلسات استشفاء وتقنيات متقدمة نادراً ما تجدها، مخصصة حسب البرنامج التدريبي لكل لاعب لتسريع التعافي وتقليل الإجهاد العضلي والوقاية الفعالة من الإصابات.",
    color: "blue",
    delay: "rd2",
  },
];

const audience = [
  { icon: "🏆", text: "الأبطال والمحترفون الساعون لكسر أرقامهم وصدارة الترتيب" },
  { icon: "🎖️", text: "كل رياضي يبحث عن التطور المستمر وحماية مستقبله الرياضي من الإصابات" },
  { icon: "⭐", text: "الأكاديميات الرياضية والناشئين لبناء أساس بدني وصحي سليم" },
  { icon: "🔥", text: "مرتادو الصالات الرياضية والمهتمون بالفتنس لنتائج حقيقية وجسم مثالي" },
];

export default function ServicesSection() {
  return (
    <>
      <section className="section alt" id="services">
        {/* HEADER: Combined Why Us and Services */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div className="s-label" style={{ justifyContent: "center" }}>
            لماذا B•Stance وماذا نقدم؟
          </div>
          <h2 className="s-title">منظومة متكاملة تحت إشراف متخصصين معتمدين</h2>
          <p className="s-sub" style={{ margin: "0 auto", textAlign: "center", maxWidth: "780px" }}>
            نقف بجانبك بفريق علمي متكامل يجمع بين التدريب البدني، التغذية الرياضية، والاستشفاء العضلي. نحن لا نقدم خدمات عشوائية، بل نوفر منظومة متناغمة تضمن تحويل كل قطرة عرق إلى نتيجة حقيقية وأداء فارق.
          </p>
        </div>

        {/* TARGET AUDIENCE */}
        <div className="why-audience reveal mb-64" style={{ marginBottom: "64px" }}>
          <div className="why-audience-title"> لمن صُممت هذه المنظومة؟ </div>
          <div className="why-audience-list">
            {audience.map((a, i) => (
              <div key={i} className="why-audience-item">
                <span className="why-audience-icon">{a.icon}</span>
                <span className="why-audience-text">{a.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CORE SERVICES */}
        <div className="svc-main-grid">
          {mainServices.map((s, i) => (
            <div key={i} className={`svc-main-card svc-main-card--${s.color} reveal ${s.delay}`}>
              <div className="svc-main-icon">{s.icon}</div>
              <h3 className="svc-main-name">{s.name}</h3>
              <p className="svc-main-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* RECOVERY SERVICES EXPLANATION */}
        <div style={{ textAlign: "center", margin: "64px 0 40px" }}>
          <div className="s-label" style={{ justifyContent: "center" }}>
            خدمات الريكافري بالتفصيل
          </div>
          <h2 className="s-title" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)" }}>
            طرق وتقنيات جلسات الاستشفاء المتخصصة
          </h2>
          <p className="s-sub" style={{ margin: "0 auto", maxWidth: "680px" }}>
            تختلف أدواتنا حسب درجة الإجهاد ونوع الرياضة، ولكنها جميعاً تهدف إلى إزالة التصلب وإرجاعك لكامل لياقتك. تعرف على أبرز تقنياتنا:
          </p>
        </div>

        <div className="recovery-grid" style={{ gap: "24px" }}>
          {/* Card 1 */}
          <div className="recovery-card reveal">
             <div className="recovery-card-header" style={{ marginBottom: "12px" }}>
               <span className="recovery-card-emoji">👐</span>
               <div>
                 <h3 className="recovery-card-title">المساج الرياضي العميق</h3>
               </div>
             </div>
             <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: "1.8" }}>
               نطبق تقنيات متطورة في التدليك الرياضي (Sports Massage) لتفكيك التلاصقات العضلية، تحرير حامض اللاكتيك المتصلب، وزيادة مرونة الأوتار والعضلات المتقصرة من تكرار الحركة.
             </p>
          </div>

          {/* Card 2 */}
          <div className="recovery-card reveal rd1">
             <div className="recovery-card-header" style={{ marginBottom: "12px" }}>
               <span className="recovery-card-emoji">🔴</span>
               <div>
                 <h3 className="recovery-card-title">الحجامة الرياضية الدقيقة</h3>
               </div>
             </div>
             <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: "1.8" }}>
               نستخدم الحجامة المتزحلقة والجافة والنارية والتشريحية بدقة عالية لسحب السموم المتراكمة وتكثيف التدفق الدموي نحو العضلات المنهكة، مما يسرع بشكل مضاعف من التئام الألياف بعد المجهود.
             </p>
          </div>

          {/* Card 3 */}
          <div className="recovery-card reveal rd2">
             <div className="recovery-card-header" style={{ marginBottom: "12px" }}>
               <span className="recovery-card-emoji">🔥</span>
               <div>
                 <h3 className="recovery-card-title">العلاج الحراري (الفوطة النارية)</h3>
               </div>
             </div>
             <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: "1.8" }}>
               تقنية مثالية للاسترخاء العميق وإخراج "التيارات الهوائية" والرطوبة المحتبسة داخل المفاصل. الحرارة المتغلغلة توسع الأوعية الدموية وتبعث إحساساً بخفة الحركة الفورية.
             </p>
          </div>

          {/* Card 4 */}
          <div className="recovery-card reveal rd3">
             <div className="recovery-card-header" style={{ marginBottom: "12px" }}>
               <span className="recovery-card-emoji">⚡</span>
               <div>
                 <h3 className="recovery-card-title">أجهزة الريكافري المتقدمة</h3>
               </div>
             </div>
             <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: "1.8" }}>
               ندمج أجهزة الـ Massage Guns لضخ الدورة اللمفاوية وطرد السوائل الزائدة، مما ينعش الأطراف المتعبة في وقت قياسي جداً.
             </p>
          </div>
        </div>

        <div className="section-cta-bar">
          <a href="#packages" className="btn-primary">
            📲 تصفح باقاتنا السعرية واشترك الآن ←
          </a>
        </div>
      </section>
    </>
  );
}
