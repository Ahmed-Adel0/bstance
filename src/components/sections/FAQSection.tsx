"use client";
import React, { useState } from "react";
import { useFaq } from "@/hooks/useFaq";

const categories = [
  { id: "all",        label: "الكل",          icon: "🔍" },
  { id: "services",   label: "الخدمات",       icon: "🏋️" },
  { id: "recovery",   label: "الريكافري",     icon: "💆" },
  { id: "packages",   label: "الباقات",       icon: "📦" },
  { id: "academies",  label: "الأكاديميات",   icon: "🏟️" },
  { id: "general",    label: "عام",           icon: "ℹ️" },
];

const faqs = [
  // ── SERVICES ──────────────────────────────────────────────
  {
    category: "services",
    icon: "🏋️",
    question: "ما هي خدمات B•Stance الرئيسية؟",
    answer:
      "نقدم ثلاث خدمات رئيسية: التدريب الرياضي (برامج فتنس مخصصة للرياضيين)، التغذية الرياضية (أنظمة غذائية مخصصة لكل لاعب)، والاستشفاء العضلي والريكافري (جلسات متخصصة لتسريع التعافي). كل الخدمات تحت إشراف متخصصين معتمدين.",
  },
  {
    category: "services",
    icon: "📋",
    question: "من هم المتخصصون المعتمدون في B•Stance؟",
    answer:
      "فريقنا يضم خبراء حاصلين على أعلى الاعتمادات العالمية في التدريب بالإضافة إلى درجة الماجستير في التربية الرياضية، وأخصائيين معتمدين من وحدة الطب الرياضي بوزارة الشباب والرياضة في التغذية الرياضية.",
  },

  // ── RECOVERY ──────────────────────────────────────────────
  {
    category: "recovery",
    icon: "💆",
    question: "ما الفرق بين الريكافري العادية والريكافري الشاملة؟",
    answer: (
      <>
        <strong style={{ color: "var(--teal-light)" }}>
          الريكافري العادية (400 ج.م):
        </strong>{" "}
        تشمل العلاج اليدوي، الجن والأدوات العلاجية، تدليك عميق للعضلات، حجامة موضعية عند الحاجة، وحجامة جافة عند الطلب.
        <br />
        <br />
        <strong style={{ color: "var(--gold)" }}>
          الريكافري الشاملة (500 ج.م):
        </strong>{" "}
        تشمل حجامة شاملة للظهر والقدمين، الحجامة النارية، الفوطة النارية، الجن والأدوات العلاجية، والتدليك العميق للرياضيين.
      </>
    ),
  },
  {
    category: "recovery",
    icon: "🔴",
    question: "ما هي جلسة الحجامة فقط؟",
    answer:
      "جلسة حجامة رياضية بسعر 250 ج.م تشمل: حجامة للظهر أو مناطق الألم أوالقدمين، تدخل وتدليك يدوي سريع وموضعي، استخدام الجن لتخفيف الاحتقان العضلي الفوري. مناسبة لمن يحتاج جلسة حجامة سريعة بدون باقة الريكافري الكاملة.",
  },
  {
    category: "recovery",
    icon: "⏱️",
    question: "كم تستغرق جلسة الريكافري؟ وهل تحتاج لتحضير مسبق؟",
    answer:
      "الجلسة العادية تستغرق 30–45 دقيقة والشاملة حتى 60 دقيقة. للحصول على أفضل نتيجة: تجنب الأكل الثقيل قبل الجلسة بساعتين، وتأكد من الترطيب الجيد. بعد الجلسة يُنصح بالراحة وتجنب التمرين المكثف ليوم واحد.",
  },

  // ── PACKAGES ──────────────────────────────────────────────
  {
    category: "packages",
    icon: "📦",
    question: "ما هي أنواع الباقات المتاحة؟",
    answer:
      "نقدم باقات فردية (تغذية فقط، تدريب فقط، ريكافري فقط)، باقات مركّبة (تغذية + تدريب، تدريب + ريكافري، تغذية + ريكافري)، والباقة الشاملة Transformation التي تجمع الثلاثة معاً. كل الباقات بأسعار خاصة وخصومات كبيرة.",
  },
  {
    category: "packages",
    icon: "🏆",
    question: "ما هي الباقة الشاملة (Transformation Package)؟",
    answer:
      "الباقة الشاملة تجمع التدريب والتغذية والريكافري في برنامج متكامل. تشمل: برنامج تدريب كامل، برنامج تغذية مخصص، وجلسات ريكافري منتظمة. متاحة لمدة 3 شهور (4,500 ج.م)، 6 شهور (8,000 ج.م)، أو سنة (14,000 ج.م).",
  },
  {
    category: "packages",
    icon: "⬆️",
    question: "هل يمكنني ترقية باقتي أو تغييرها بعد الاشتراك؟",
    answer:
      "بالتأكيد، يمكنك الترقية لأي باقة أعلى في أي وقت. تواصل معنا على واتساب وسنرتب لك الترقية.",
  },

  // ── ACADEMIES ──────────────────────────────────────────────
  {
    category: "academies",
    icon: "🏟️",
    question: "ما هي خدمات B•Stance للأكاديميات والجيمات؟",
    answer:
      "نقدم منظومة دعم متكاملة تشمل: تدريب فتنس متخصص للاعبين، برامج تغذية رياضية مخصصة، جلسات استشفاء عضلي، وجلسات حجامة للرياضيين. الهدف هو مساعدة اللاعبين على تحسين الأداء وتقليل الإصابات.",
  },
  {
    category: "academies",
    icon: "📊",
    question: "ما هو منهج صناعة البطل (Athlete Development System)؟",
    answer:
      "منهجية علمية من 4 مراحل: التقييم والتحليل، التخطيط المقنن، التنفيذ والمتابعة، والتقييم الدوري والتطوير. مصمم لمساعدة الأكاديميات على تطوير أداء لاعبيها بشكل علمي ومستدام.",
  },

  // ── GENERAL ──────────────────────────────────────────────
  {
    category: "general",
    icon: "💳",
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نقبل الدفع نقداً في الفرع، أو عبر المحافظ الإلكترونية. يمكنك الحجز الآن وترتيب طريقة الدفع مع فريقنا عبر واتساب.",
  },
  {
    category: "general",
    icon: "📍",
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
                  <span className="faq-q-icon">{faq.icon}</span>
                  <span className="faq-q-text">{faq.question}</span>
                </div>
                <span
                  className={`faq-chevron ${openIndex === faq.originalIndex ? "faq-chevron--open" : ""}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="faq-body-v2">
                <div className="faq-inner-v2">{faq.answer}</div>
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="faq-empty">
              <span style={{ fontSize: "2rem" }}>🔍</span>
              <p>لا توجد أسئلة في هذه الفئة</p>
            </div>
          )}
        </div>

        {/* Bottom contact nudge */}
        <div className="faq-contact-nudge">
          <span>🤔</span>
          <span>لم تجد إجابتك؟</span>
          <a
            href="https://wa.me/201279266345"
            target="_blank"
            rel="noopener noreferrer"
            className="faq-whatsapp-link"
          >
            تواصل معنا على واتساب
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
