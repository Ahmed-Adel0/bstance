"use client";
import React from "react";
import { 
  Dumbbell, 
  Apple, 
  Activity, 
  Trophy, 
  CheckCircle2, 
  Star, 
  Flame, 
  Droplets, 
  Zap,
  Hand,
  CalendarCheck,
  ArrowLeft,
  Sparkles,
  Check
} from "lucide-react";

const mainServices = [
  {
    icon: <Dumbbell size={32} color="var(--teal-light)" />,
    name: "برامج تدريبية احترافية",
    desc: "برامج تدريب فتنس مصممة خصيصاً للرياضيين لتحسين القوة والسرعة وتقليل الإصابات، مبنية على أحدث الأبحاث وتحت إشراف خبراء حاصلين على أعلى الاعتمادات العالمية والماجستير.",
    color: "teal",
    delay: "",
  },
  {
    icon: <Apple size={32} color="var(--gold)" />,
    name: "تغذية رياضية متخصصة",
    desc: "أنظمة غذائية مخصصة لكل لاعب حسب رياضته لتحسين الأداء وتسريع التعافي، مبنية على بيانات حقيقية تحت إشراف أخصائيين معتمدين من وحدة الطب الرياضي بوزارة الشباب.",
    color: "gold",
    delay: "rd1",
  },
  {
    icon: <Activity size={32} color="var(--teal-light)" />,
    name: "استشفاء رياضي متكامل",
    desc: "جلسات استشفاء وتقنيات متقدمة نادراً ما تجدها، مخصصة حسب البرنامج التدريبي لكل لاعب لتسريع التعافي وتقليل الإجهاد العضلي والوقاية الفعالة من الإصابات.",
    color: "blue",
    delay: "rd2",
  },
];

const audience = [
  { icon: <Trophy size={20} color="var(--gold)" />, text: "الأبطال والمحترفون الساعون لكسر أرقامهم وصدارة الترتيب" },
  { icon: <CheckCircle2 size={20} color="var(--teal-light)" />, text: "كل رياضي يبحث عن التطور المستمر وحماية مستقبله الرياضي من الإصابات" },
  { icon: <Star size={20} color="var(--gold)" />, text: "الأكاديميات الرياضية والناشئين لبناء أساس بدني وصحي سليم" },
  { icon: <Flame size={20} color="#ff8a65" />, text: "مرتادو الصالات الرياضية والمهتمون بالفتنس لنتائج حقيقية وجسم مثالي" },
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


        <div className="section-cta-bar">
          <a href="#packages" className="btn-primary flex items-center justify-center gap-2">
            <CalendarCheck size={18} />
            <span>تصفح باقاتنا السعرية واشترك الآن</span>
            <ArrowLeft size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
