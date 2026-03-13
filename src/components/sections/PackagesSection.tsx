"use client";
import React, { useState } from "react";
import { 
  Apple, 
  Dumbbell, 
  Activity, 
  Droplets, 
  Flame, 
  Zap, 
  Battery, 
  Trophy,
  Check,
  MoveRight,
  ArrowLeft,
  CalendarCheck
} from "lucide-react";

/* ════════════════════════════════════════════════
   PackagesSection — باقات B•Stance الجديدة
   باقات فردية + مركّبة + باقة شاملة
   ════════════════════════════════════════════════ */

type PackageCategory = "nutrition" | "training" | "recovery" | "transformation";

interface TabDef {
  id: PackageCategory;
  label: string;
  icon: React.ReactNode;
}

const tabs: TabDef[] = [
  { id: "training", label: "التدريب", icon: <Dumbbell size={18} /> },
  { id: "nutrition", label: "التغذية", icon: <Apple size={18} /> },
  { id: "recovery", label: "الريكافري", icon: <Activity size={18} /> },
  { id: "transformation", label: "الباقة الشاملة", icon: <Trophy size={18} /> },
];

interface PackageItem {
  duration: string;
  price: string;
  originalPrice?: string;
  note?: string;
  features?: string[];
}

interface PackageGroup {
  id: PackageCategory;
  title: string;
  subtitle: string;
  desc?: string;
  color: "teal" | "gold" | "red" | "blue";
  items: PackageItem[];
  includes?: string[];
}

const packageGroups: PackageGroup[] = [
  {
    id: "training",
    title: "باقات التدريب",
    subtitle: "برامج تدريب فتنس احترافية",
    color: "teal",
    desc: "خطة تدريبية متكاملة تحت إشراف نخبة من المتخصصين للوصول إلى أقصى مستويات القوة واللياقة وتقليل فرص الإصابة.",
    items: [
      { 
        duration: "شهر", price: "800", originalPrice: "1,200",
        features: ["تصميم برنامج رياضي مخصص لهدفك", "توجيه دقيق للأداء الحركي الصحيح", "متابعة وتحديث أسبوعي"]
      },
      { 
        duration: "3 شهور", price: "2,100", originalPrice: "3,600",
        features: ["برنامج رياضي متخصص للتطور البدني", "تطوير مستمر لزيادة الأحمال والأوزان", "متابعة دقيقة وتصحيح الأداء", "تقييم شهري للقوة ونقاط الضعف"]
      },
      { 
        duration: "6 شهور", price: "3,800", originalPrice: "7,200",
        features: ["برنامج تدريبي متدرج ومتقدم", "تحليل وتصحيح دقيق للحركة التعويضية", "تقييم نصف شهري للأداء", "خطة شاملة لتقليل وحماية من الإصابات"]
      },
      { 
        duration: "سنة", price: "6,500", originalPrice: "14,400",
        features: ["إشراف تدريبي استراتيجي لعام كامل", "تعديل البرامج تزامناً مع مراحل الموسم", "تجهيز بدني مكثف للبطولات", "تحسينات متعاقبة وبناء بطل حقيقي"]
      },
    ]
  },
  {
    id: "nutrition",
    title: "باقات التغذية",
    subtitle: "أنظمة غذائية رياضية مخصصة",
    color: "gold",
    desc: "برامج تغذية مصممة علمياً لتلبية احتياجاتك، سواء كنت تسعى لحرق الدهون، بناء العضلات، أو تحسين أدائك الرياضي.",
    items: [
      { 
        duration: "3 شهور", price: "1,500", originalPrice: "3,000",
        features: ["خطة غذائية مفصلة ومتجددة", "متابعة دورية كل أسبوعين", "قائمة بدائل واسعة للوجبات", "تخطيط أساسي للمكملات الغذائية"]
      },
      { 
        duration: "6 شهور", price: "2,500", originalPrice: "6,000",
        features: ["أنظمة غذائية مرنة ومحدثة باستمرار", "متابعة أسبوعية لضمان الاستمرارية", "تعديلات مخصصة لكسر ثبات الوزن", "إرشادات مكملات متقدمة للرياضيين"]
      },
      { 
        duration: "سنة", price: "4,000", originalPrice: "12,000",
        features: ["متابعة شخصية دقيقة ومستمرة (VIP)", "تعديلات لامحدودة على البرامج", "تجهيز غذائي شامل للبطولات الرياضية", "دعم متواصل على مدار العام"]
      },
    ]
  },
  {
    id: "recovery",
    title: "جلسات الريكافري والحجامة",
    subtitle: "أعلى مستويات الاستشفاء البدني",
    color: "teal",
    desc: "منظومة استشفاء متكاملة صُممت خصيصاً للرياضيين لضمان أسرع عودة للمنافسة، من الاسترخاء الأساسي وحتى الاسترداد العميق.",
    items: [
      { 
        duration: "Quick Recovery", price: "200", originalPrice: "300", note: "للاستراحة الفورية",
        features: ["تدليك رقبة وكتف وظهر", "تدليك يدوي بزيوت طبيعية", "استخدام جهاز الجن لتفكيك العضلات", "جلسة سريعة وفعالة (30 دقيقة)"]
      },
      { 
        duration: "Sport Recovery", price: "300", originalPrice: "500", note: "الأكثر طلباً للرياضيين",
        features: ["تدليك شامل (رقبة، ظهر، ذراعين، رجلين)", "استخدام أدوات الريكافري الاحترافية", "تحسين المدى الحركي للمفاصل", "تخفيف آلام التمرين المكثف"]
      },
      { 
        duration: "Deep Recovery", price: "400", originalPrice: "600", note: "الاستشفاء الحراري العميق",
        features: ["كل مميزات الباقة الرياضية", "تقنية الفوطة النارية (Heat Therapy)", "حجامة موضعية لمناطق الألم", "فك التصلبات العضلية المزمنة"]
      },
      { 
        duration: "Elite Recovery", price: "500", originalPrice: "700", note: "المنظومة الكاملة - VIP",
        features: ["تجربة الاستشفاء القصوى للـ Pro", "كل التقنيات (حرارة + يدوي + أدوات)", "حجامة شاملة (ظهر + كل رجل)", "رعاية خاصة وتجهيز بدني متكامل"]
      },
      { 
        duration: "حجامة رياضية", price: "250", originalPrice: "400", note: "تجديد النشاط والحيوية",
        features: ["جلسة حجامة رياضية دقيقة", "تنشيط الدورة الدموية الكبرى", "إزالة السموم والاحتقان العضلي", "تدليك يدوي تنشيطي سريع"]
      }
    ]
  },
  {
    id: "transformation",
    title: "الباقة الشاملة (Transformation Package)",
    subtitle: "برنامج متكامل (تدريب + تغذية + ريكافري)",
    color: "gold",
    desc: "الخيار الأفضل للرياضيين الراغبين في تحول كامل في الأداء البدني، حيث تجمع المنظومة بين العلم والتطبيق لضمان النتائج.",
    items: [
      { 
        duration: "3 شهور", price: "4,500", originalPrice: "6,000",
        features: ["برنامج تدريب بدني مكثف", "خطة تغذية رياضية مخصصة", "جلسات ريكافري منتظمة", "متابعة دورية وتقييم أداء"]
      },
      { 
        duration: "6 شهور", price: "8,000", originalPrice: "12,000",
        features: ["تحديث شهري شامل للخطط", "أولوية في حجز جلسات الريكافري", "تطوير مستمر لزيادة الأحمال", "دعم مباشر من الفريق الفني"]
      },
      { 
        duration: "سنة", price: "14,000", originalPrice: "24,000",
        features: ["مشروع صناعة بطل متكامل", "متابعة VIP على مدار الساعة", "تجهيز بدني وغذائي للمنافسات", "وصول شامل لكافة تقنيات الاستشفاء"]
      },
    ]
  },
];

export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState<PackageCategory>("transformation");

  const activeGroup = packageGroups.find((g) => g.id === activeTab)!;

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="section" id="packages">
        {/* Header */}
        <div className="pkg-header">
          <div className="s-label" style={{ justifyContent: "center" }}>
            باقات B•Stance
          </div>
          <h2 className="s-title pkg-title">
            اختر الباقة التي تناسب هدفك
          </h2>
          <p className="s-sub pkg-sub">
            باقات متنوعة تناسب كل الأهداف — فردية أو مركّبة أو شاملة.
            <br />
            <span style={{ color: "var(--teal-light)", fontWeight: 700 }}>
              Train • Nutrition • Recovery
            </span>{" "}
            — اختر ما يناسبك وابدأ رحلتك.
          </p>
        </div>

        {/* Tabs */}
        <div className="pkg-tabs" role="tablist" aria-label="أقسام الباقات">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={`pkg-tab ${activeTab === tab.id ? "pkg-tab--active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              style={{ transition: "all 0.3s ease" }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Package Content */}
        <div 
          className="pkg-content" 
          key={activeTab}
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          style={{ animation: "fadeInUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards", opacity: 0 }}
        >
          <div className="pkg-content-header" style={{ marginBottom: "32px", textAlign: "center" }}>
            <h3 className="pkg-content-title" style={{ fontSize: "1.8rem", color: activeGroup.color === 'gold' ? 'var(--gold)' : activeGroup.color === 'blue' ? 'var(--blue)' : activeGroup.color === 'red' ? 'var(--red)' : 'var(--teal-light)', marginBottom: "12px", transition: "color 0.3s ease" }}>
              {activeGroup.title}
            </h3>
            <p className="pkg-content-sub" style={{ fontSize: "1.15rem", color: "#fff", fontWeight: "bold" }}>{activeGroup.subtitle}</p>
            {activeGroup.desc && (
              <p style={{ marginTop: "16px", fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: "1.8", maxWidth: "800px", margin: "16px auto 0" }}>
                {activeGroup.desc}
              </p>
            )}
          </div>

          {/* Pricing Cards (Features Included Inside) */}
          <div className="pkg-pricing-grid" style={{ alignItems: "stretch" }}>
            {activeGroup.items.map((item, i) => {
              const isBestValue = activeGroup.items.length > 2 && i === activeGroup.items.length - 1;
              return (
                <div
                  key={i}
                  className={`pkg-pricing-card pkg-pricing-card--${activeGroup.color} ${isBestValue ? "pkg-pricing-card--best" : ""}`}
                  style={{ 
                    display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "100%", position: "relative", overflow: "hidden", 
                    transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease",
                    animation: `fadeInUp 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
                    animationDelay: `${i * 0.15}s`,
                    opacity: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), 0 0 20px ${activeGroup.color === 'gold' ? 'rgba(255, 215, 0, 0.2)' : activeGroup.color === 'blue' ? 'rgba(79, 172, 254, 0.2)' : activeGroup.color === 'red' ? 'rgba(255, 77, 77, 0.2)' : 'rgba(61, 216, 200, 0.2)'}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  {/* Highlight bar at top */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: activeGroup.color === 'gold' ? 'var(--gold)' : activeGroup.color === 'blue' ? 'var(--blue)' : activeGroup.color === 'red' ? 'var(--red)' : 'var(--teal-light)' }} />

                  <div>
                    {isBestValue && (
                      <div className="pkg-best-badge" style={{ marginTop: "12px", zIndex: 1 }}>أفضل قيمة 🏆</div>
                    )}
                    <div className="pkg-pricing-duration" style={{ fontSize: "1.4rem", marginBottom: "4px", paddingTop: isBestValue ? "0" : "12px" }}>{item.duration}</div>
                    {item.note && (
                      <div style={{ fontSize: "0.85rem", color: activeGroup.color === 'gold' ? 'var(--gold)' : 'var(--teal-light)', fontWeight: "bold", marginBottom: "8px", opacity: 0.9 }}>
                        {item.note}
                      </div>
                    )}
                    
                    <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: "24px" }}>
                      {item.originalPrice && (
                        <div className="pkg-pricing-orig" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.4)", textDecoration: "line-through", marginBottom: "4px" }}>
                          {item.originalPrice} ج.م
                        </div>
                      )}
                      <div className="pkg-pricing-price-row" style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "6px" }}>
                        <span className={`pkg-pricing-num pkg-pricing-num--${activeGroup.color}`} style={{ fontSize: "2.8rem" }}>
                          {item.price}
                        </span>
                        <span className="pkg-pricing-unit" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)" }}>ج.م</span>
                      </div>
                      {item.originalPrice && (
                        <div className={`pkg-pricing-save pkg-pricing-save--${activeGroup.color}`} style={{ display: "inline-block", marginTop: "8px", padding: "4px 12px", borderRadius: "20px", background: activeGroup.color === 'gold' ? 'rgba(255, 215, 0, 0.1)' : activeGroup.color === 'blue' ? 'rgba(79, 172, 254, 0.1)' : activeGroup.color === 'red' ? 'rgba(255, 77, 77, 0.1)' : 'rgba(61, 216, 200, 0.1)', color: activeGroup.color === 'gold' ? 'var(--gold)' : activeGroup.color === 'blue' ? 'var(--blue)' : activeGroup.color === 'red' ? 'var(--red)' : 'var(--teal-light)', fontSize: "0.85rem", fontWeight: "bold" }}>
                          وفّر {(parseInt(item.originalPrice.replace(/,/g, "")) - parseInt(item.price.replace(/,/g, ""))).toLocaleString()} ج.م 🔥
                        </div>
                      )}
                    </div>
                    
                    {/* Features List inside the card */}
                    {item.features && (
                      <div className="pkg-card-features" style={{ margin: "0 0 28px", textAlign: "right", padding: "0 8px" }}>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginBottom: "16px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>تشمل الآتي:</div>
                        {item.features.map((inc, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "14px", fontSize: "0.95rem", color: "rgba(255,255,255,0.85)" }}>
                            <span style={{ color: activeGroup.color === "gold" ? "var(--gold)" : activeGroup.color === "blue" ? "var(--blue)" : activeGroup.color === "red" ? "var(--red)" : "var(--teal-light)", marginTop: "2px", flexShrink: 0, filter: "drop-shadow(0 0 5px currentColor)" }}>
                              <Check size={16} strokeWidth={3} />
                            </span>
                            <span style={{ lineHeight: "1.5" }}>{inc}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    className={`pkg-pricing-cta pkg-pricing-cta--${activeGroup.color}`}
                    onClick={scrollToBooking}
                    style={{ marginTop: "auto", width: "100%", padding: "16px", borderRadius: "12px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", fontWeight: "bold", transition: "all 0.3s ease" }}
                  >
                    اختيار الباقة
                    <MoveRight size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compare note */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "48px",
            padding: "24px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.05)",
            maxWidth: "720px",
            margin: "48px auto 0",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              flexWrap: "wrap",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.6)",
              fontWeight: "600"
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--teal-light)" }}>★</span> باقات مرنة تناسب كل الميزانيات</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--teal-light)" }}>★</span> إمكانية الترقية في أي وقت</span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "var(--gold)", fontWeight: 800 }}>خصم 10% عند اختيار خدمتين | خصم 15% عند اختيار 3 خدمات  🔥</span></span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="section-cta-bar" style={{ marginTop: "32px" }}>
          <a href="#booking" className="btn-primary flex items-center justify-center gap-2" style={{ padding: "16px 32px", fontSize: "1.1rem" }}>
            <CalendarCheck size={20} />
            <span>احجز باقتك وابدأ منظومتك</span>
            <ArrowLeft size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
