"use client";
import React, { useState } from "react";
import { useFaq } from "@/hooks/useFaq";
import { 
  Search, 
  Droplets, 
  Activity, 
  Package, 
  Info, 
  ChevronDown,
  HelpCircle,
  CreditCard,
  MapPin,
  TrendingUp,
  Dumbbell,
  ClipboardList,
  CheckCircle,
  MessageCircle,
  GraduationCap,
  Clock,
  ArrowUpCircle,
  Trophy,
  Layout
} from "lucide-react";

const categories = [
  { id: "all",        label: "الكل",          icon: <Search size={18} color="var(--teal-light)" /> },
  { id: "hijama",     label: "الحجامة",       icon: <Droplets size={18} color="var(--gold)" /> },
  { id: "recovery",   label: "الريكافري",     icon: <Activity size={18} color="var(--teal-light)" /> },
  { id: "packages",   label: "الباقات",       icon: <Package size={18} color="var(--gold)" /> },
  { id: "general",    label: "عام",           icon: <Info size={18} color="var(--teal-light)" /> },
];

const faqs = [
  // ── SERVICES ──────────────────────────────────────────────
  {
    category: "services",
    icon: <Dumbbell size={18} />,
    question: "ما هي خدمات B•Stance الرئيسية؟",
    answer:
      "نقدم ثلاث خدمات رئيسية: التدريب الرياضي (برامج فتنس مخصصة للرياضيين)، التغذية الرياضية (أنظمة غذائية مخصصة لكل لاعب)، والاستشفاء العضلي والريكافري (جلسات متخصصة لتسريع التعافي). كل الخدمات تحت إشراف متخصصين معتمدين.",
  },
  {
    category: "services",
    icon: <GraduationCap size={18} />,
    question: "من هم المتخصصون المعتمدون في B•Stance؟",
    answer:
      "فريقنا يضم خبراء حاصلين على أعلى الاعتمادات العالمية في التدريب بالإضافة إلى درجة الماجستير في التربية الرياضية، وأخصائيين معتمدين من وحدة الطب الرياضي بوزارة الشباب والرياضة في التغذية الرياضية.",
  },

  // ── RECOVERY ──────────────────────────────────────────────
  {
    category: "recovery",
    icon: <Activity size={18} />,
    question: "ما هي مستويات جلسات الريكافري المتاحة؟",
    answer: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div>
          <strong style={{ color: "var(--teal-light)" }}>Quick Recovery (200 ج.م):</strong> جلسة استرخاء أساسية (رقبة، كتف، ظهر) باستخدام التدليك اليدوي وجهاز الجن.
        </div>
        <div>
          <strong style={{ color: "var(--teal-mid)" }}>Sport Recovery (300 ج.م):</strong> الجلسة الأكثر طلباً، شاملة للجسم بالكامل (رقبة، ظهر، ذراعين، رجلين) مع أدوات الريكافري.
        </div>
        <div>
          <strong style={{ color: "var(--gold)" }}>Deep Recovery (400 ج.م):</strong> استشفاء عميق يشمل الفوطة النارية وحجامة موضعية عند الحاجة لفك التصلبات الشديدة.
        </div>
        <div>
          <strong style={{ color: "#fff", borderBottom: '1px solid var(--gold)' }}>Elite Recovery (500 ج.م):</strong> تجربة الـ VIP الكاملة، تشمل كافة التقنيات (فوطة نارية، حجامة شاملة للظهر والرجلين، تدليك عميق).
        </div>
      </div>
    ),
  },
  {
    category: "recovery",
    icon: <Droplets size={18} />,
    question: "ما هي جلسة الحجامة فقط؟",
    answer:
      "جلسة حجامة رياضية بسعر 250 ج.م تشمل: حجامة دقيقة للظهر أو مناطق الألم أو القدمين، تدخل وتدليك يدوي سريع وموضعي، واستخدام جهاز الجن لتخفيف الاحتقان العضلي. مخصصة لمن يبحث عن الحجامة كخدمة مستقلة.",
  },
  {
    category: "recovery",
    icon: <Clock size={18} />,
    question: "كم تستغرق جلسة الريكافري؟ وهل تحتاج لتحضير مسبق؟",
    answer:
      "تتراوح مدة الجلسة بين 30 دقيقة (Quick) وحتى 90 دقيقة (Elite). يفضل عدم تناول وجبات ثقيلة قبل الجلسة بساعتين، والحرص على شرب كميات كافية من الماء.",
  },

  // ── PACKAGES ──────────────────────────────────────────────
  {
    category: "packages",
    icon: <Package size={18} />,
    question: "ما هي أنواع الباقات المتاحة وهل يوجد خصومات للمشتركين؟",
    answer:
      "نوفر باقات فردية لكل خدمة (تدريب، تغذية، ريكافري). المميز عندنا هو الخصم التلقائي عند دمج الخدمات: خصم 10% عند الاشتراك في خدمتين، وخصم 15% عند الاشتراك في الثلاث خدمات معاً. هدفنا تشجيعك على الالتزام بمنظومة كاملة.",
  },
  {
    category: "packages",
    icon: <Trophy size={18} />,
    question: "ما هي الباقة الشاملة (Transformation Package)؟",
    answer:
      "الباقة الشاملة تجمع التدريب والتغذية والريكافري في برنامج متكامل. تشمل: برنامج تدريب كامل، برنامج تغذية مخصص، وجلسات ريكافري منتظمة. متاحة لمدة 3 شهور (4,500 ج.م)، 6 شهور (8,000 ج.م)، أو سنة (14,000 ج.م).",
  },
  {
    category: "packages",
    icon: <ArrowUpCircle size={18} />,
    question: "هل يمكنني ترقية باقتي أو تغييرها بعد الاشتراك؟",
    answer:
      "بالتأكيد، يمكنك الترقية لأي باقة أعلى في أي وقت. تواصل معنا على واتساب وسنرتب لك الترقية.",
  },

  // ── ACADEMIES ──────────────────────────────────────────────
  {
    category: "academies",
    icon: <Layout size={18} />,
    question: "ما هي خدمات B•Stance للأكاديميات والجيمات؟",
    answer:
      "نقدم منظومة دعم متكاملة تشمل: تدريب فتنس متخصص للاعبين، برامج تغذية رياضية مخصصة، جلسات استشفاء عضلي، وجلسات حجامة للرياضيين. الهدف هو مساعدة اللاعبين على تحسين الأداء وتقليل الإصابات.",
  },
  {
    category: "academies",
    icon: <TrendingUp size={18} />,
    question: "ما هو منهج صناعة البطل (Athlete Development System)؟",
    answer:
      "منهجية علمية من 4 مراحل: التقييم والتحليل، التخطيط المقنن، التنفيذ والمتابعة، والتقييم الدوري والتطوير. مصمم لمساعدة الأكاديميات على تطوير أداء لاعبيها بشكل علمي ومستدام.",
  },

  // ── GENERAL ──────────────────────────────────────────────
  {
    category: "general",
    icon: <CreditCard size={18} />,
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نقبل الدفع نقداً في الفرع، أو عبر المحافظ الإلكترونية. يمكنك الحجز الآن وترتيب طريقة الدفع مع فريقنا عبر واتساب.",
  },
  {
    category: "general",
    icon: <MapPin size={18} />,
    question: "أين يقع B•Stance؟ وكيف أحجز؟",
    answer:
      "B•Stance موجود في طناح - المنصورة. بعد الحجز عبر الموقع، سيتواصل معك فريقنا على واتساب لتأكيد الموعد والعنوان التفصيلي.",
  },
];

export default function FAQSection() {
  const [activeCat, setActiveCat] = useState("all");
  const { openIndex, toggleFaq } = useFaq();

  const filteredFaqs = faqs
    .map((faq, index) => ({ ...faq, originalIndex: index }))
    .filter((faq) => activeCat === "all" || faq.category === activeCat);

  return (
    <>
      {/* ═══════ FAQ ═══════ */}
      <section className="section alt" id="faq">
        {/* Header */}
        <div className="faq-header">
          <div className="s-label" style={{ justifyContent: "center" }}>
            الأسئلة الشائعة
          </div>
          <h2 className="s-title faq-title">كل أسئلتك — إجابات واضحة وأمينة</h2>
          <p className="s-sub faq-sub">
            اختر الفئة التي تهمك أو تصفح الكل — وإن لم تجد إجابتك تواصل معنا
            مباشرة
          </p>
        </div>

        {/* Category filters */}
        <div className="faq-cats-v2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`faq-cat-v2 ${activeCat === cat.id ? "faq-cat-v2--active" : ""}`}
              onClick={() => setActiveCat(cat.id)}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ list */}
        <div className="faq-list-v2">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.originalIndex}
              className={`faq-item-v2 ${openIndex === faq.originalIndex ? "faq-item-v2--open" : ""}`}
              data-cat={faq.category}
            >
              <button
                className="faq-btn-v2"
                onClick={() => toggleFaq(faq.originalIndex)}
              >
                <div className="faq-btn-left">
                  <span className="faq-q-icon" style={{ color: "var(--teal-light)" }}>{faq.icon}</span>
                  <span className="faq-q-text">{faq.question}</span>
                </div>
                <span
                  className={`faq-chevron ${openIndex === faq.originalIndex ? "faq-chevron--open" : ""}`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>
              <div className="faq-body-v2">
                <div className="faq-inner-v2">{faq.answer}</div>
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="faq-empty">
              <span style={{ color: "var(--teal-light)", opacity: 0.5 }}><Search size={48} /></span>
              <p>لا توجد أسئلة في هذه الفئة</p>
            </div>
          )}
        </div>

        {/* Bottom contact nudge */}
        <div className="faq-contact-nudge">
          <HelpCircle size={20} color="var(--gold)" />
          <span>لم تجد إجابتك؟</span>
          <a
            href="https://wa.me/201279266345"
            target="_blank"
            rel="noopener noreferrer"
            className="faq-whatsapp-link flex items-center gap-2"
          >
            تواصل معنا على واتساب
            <MessageCircle size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
