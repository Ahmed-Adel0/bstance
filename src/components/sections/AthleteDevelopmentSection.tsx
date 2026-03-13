"use client";
import React from "react";
import { 
  BarChart3, 
  ClipboardList, 
  Dumbbell, 
  TrendingUp, 
  Target, 
  Users, 
  Trophy,
  CalendarCheck,
  ArrowLeft,
  MessageCircle,
  Award
} from "lucide-react";

/* ════════════════════════════════════════════════
   AthleteDevelopmentSection — منهج صناعة البطل
   Athlete Development System
   ════════════════════════════════════════════════ */

const phases = [
  {
    num: "01",
    title: "التقييم والتحليل",
    subtitle: "Assessment",
    desc: "تحليل شامل لمستوى اللاعب البدني والحركي، تقييم التغذية الحالية، وتحديد نقاط القوة والضعف.",
    icon: <BarChart3 size={24} />,
    color: "teal",
  },
  {
    num: "02",
    title: "التخطيط المقنن",
    subtitle: "Planning",
    desc: "وضع برنامج تدريبي وتغذوي واستشفائي مخصص بناءً على بيانات التقييم وأهداف اللاعب ومتطلبات رياضته.",
    icon: <ClipboardList size={24} />,
    color: "gold",
  },
  {
    num: "03",
    title: "التنفيذ والمتابعة",
    subtitle: "Execution",
    desc: "تطبيق البرنامج تحت إشراف مباشر مع متابعة يومية وتعديلات مستمرة لضمان التقدم في الأداء.",
    icon: <Dumbbell size={24} />,
    color: "teal",
  },
  {
    num: "04",
    title: "التقييم الدوري والتطوير",
    subtitle: "Progress & Optimize",
    desc: "إعادة تقييم دورية للأداء وتحديث البرنامج للوصول لأعلى مستوى ممكن والحفاظ عليه طوال الموسم.",
    icon: <TrendingUp size={24} />,
    color: "gold",
  },
];

const benefits = [
  { icon: <Target size={20} color="var(--teal-light)" />, text: "منهجية علمية مبنية على أحدث الأبحاث" },
  { icon: <Users size={20} color="var(--gold)" />, text: "فريق متكامل يعمل بتنسيق تام" },
  { icon: <BarChart3 size={20} color="var(--teal-light)" />, text: "قياس التطور بالأرقام والبيانات" },
  { icon: <Trophy size={20} color="var(--gold)" />, text: "نتائج ملموسة في الأداء والمنافسات" },
];

export default function AthleteDevelopmentSection() {
  return (
    <section className="section alt" id="athlete-dev">
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <div className="s-label" style={{ justifyContent: "center", gap: "8px" }}>
          <Trophy size={14} color="var(--teal-light)" />
          Athlete Development System
        </div>
        <h2 className="s-title flex items-center justify-center gap-3">
          <Award size={32} color="var(--gold)" />
          منهج صناعة البطل
        </h2>
        <p
          className="s-sub"
          style={{ margin: "0 auto", textAlign: "center", maxWidth: "720px" }}
        >
          منهجية علمية متكاملة لتطوير الرياضيين خطوة بخطوة — من التقييم الأولي
          وحتى الوصول لأعلى مستويات الأداء.
        </p>
      </div>

      {/* Phases Timeline */}
      <div className="dev-timeline">
        {phases.map((phase, i) => (
          <div
            key={i}
            className={`dev-phase dev-phase--${phase.color} reveal rd${i + 1}`}
          >
            <div className="dev-phase-num">{phase.num}</div>
            <div className="dev-phase-connector" />
            <div className="dev-phase-content">
              <div className="dev-phase-icon">{phase.icon}</div>
              <h3 className="dev-phase-title">{phase.title}</h3>
              <div className="dev-phase-subtitle">{phase.subtitle}</div>
              <p className="dev-phase-desc">{phase.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="dev-benefits reveal">
        <div className="dev-benefits-title">لماذا هذا المنهج ضرورة لكل أكاديمية؟</div>
        <div className="dev-benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="dev-benefit-item">
              <span className="dev-benefit-icon">{b.icon}</span>
              <span className="dev-benefit-text">{b.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="section-cta-bar">
        <a
          href="https://wa.me/201279266345?text=أنا%20مهتم%20بمنهج%20صناعة%20البطل%20للأكاديمية"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex items-center justify-center gap-2"
        >
          <MessageCircle size={18} />
          <span>ابدأ تطبيق المنهج في أكاديميتك</span>
          <ArrowLeft size={16} />
        </a>
        <p>منهج صناعة البطل — الفارق بين التدريب العادي والتطوير الحقيقي</p>
      </div>
    </section>
  );
}
