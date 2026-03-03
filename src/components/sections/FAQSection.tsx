"use client";
import React, { useState } from "react";
import { useFaq } from "@/hooks/useFaq";

const categories = [
  { id: "all",      label: "الكل",        icon: "🔍" },
  { id: "raffle",   label: "السحب",       icon: "🎁" },
  { id: "hijama",   label: "الحجامة",     icon: "🔴" },
  { id: "recovery", label: "الريكافري",   icon: "💆" },
  { id: "packages", label: "الباقات",     icon: "📦" },
  { id: "general",  label: "عام",         icon: "ℹ️" },
];

const faqs = [
  // ── RAFFLE ──────────────────────────────────────────────
  {
    category: "raffle",
    icon: "🎁",
    question: "إيه الفرق بين سحب المكملات وسحب ترقية الاشتراك؟",
    answer: (
      <>
        <strong style={{ color: "var(--gold)" }}>سحب المكملات:</strong> مخصص
        لأصحاب الخدمات الفردية (ريكافري، تغذية، تمرين، حجامة) — الجائزة مكمل
        باقة مكملات كاملة (بروتين + كارب + كيرياتين).
        <br />
        <br />
        <strong style={{ color: "var(--teal-light)" }}>
          سحب ترقية الاشتراك:
        </strong>{" "}
        حصري للمشتركين في الباقات فقط — الجائزة هي ترقية اشتراكك للباقة
        الأعلى بنفس المبلغ الذي دفعته. مثال: اشتركت بالشهرية (800 ج.م) وفزت
        → تاخد 3 شهور كاملة بنفس السعر.
      </>
    ),
  },
  {
    category: "raffle",
    icon: "🎟️",
    question: "إزاي أدخل السحب؟",
    answer:
      "الأمر بسيط جداً: احجز أي خدمة أو باقة خلال الفترة من 16 لـ 26 رمضان — ستدخل السحب تلقائياً بدون أي خطوات إضافية. كلما حجزت أكثر، ارتفعت فرصتك. النتائج تُعلَن 27 رمضان يوم الافتتاح الرسمي.",
  },
  {
    category: "raffle",
    icon: "🤔",
    question: "إيه اللي بحصل لو ما فزتش في السحب؟",
    answer:
      "حتى لو ما فزتش — ستحصل تلقائياً على كوبون خصم حصري على الجلسات والباقات ومكملات Volt. في B•Stance، مفيش حد بيخرج فاضي. كل من شارك يستحق مكافأة.",
  },
  {
    category: "raffle",
    icon: "📅",
    question: "متى يبدأ السحب ومتى تُعلَن النتائج؟",
    answer:
      "فترة السحب من 16 رمضان حتى 26 رمضان (10 أيام). النتائج تُعلَن في 27 رمضان يوم الافتتاح الرسمي لـ B•Stance. يُنصح بالحجز مبكراً لضمان تسجيل تذكرتك.",
  },

  // ── HIJAMA ──────────────────────────────────────────────
  {
    category: "hijama",
    icon: "🛡️",
    question: "هل الحجامة آمنة؟ ما هو بروتوكول التعقيم المتبع؟",
    answer:
      "نعم، الحجامة في B•Stance تتم وفق أعلى معايير السلامة الطبية. كل الكاسات أحادية الاستخدام وتُفتَح أمامك مباشرة قبل الجلسة. المشرط معقم ومعبأ، السطح والأيدي مُعقَّمة قبل وبعد كل جلسة. الأخصائي  مُدرَّب ومعتمد على هذه البروتوكولات.",
  },
  {
    category: "hijama",
    icon: "🩸",
    question: "ما الفرق بين الحجامة الجافة والتشريطية والنارية؟",
    answer: (
      <>
        <strong style={{ color: "var(--teal-light)" }}>الجافة (100 ج.م):</strong>{" "}
        كاسات فراغية بدون شروط — لتنشيط الدورة الدموية وتخفيف توتر العضلات،
        مناسبة للمبتدئين.
        <br />
        <strong style={{ color: "var(--gold)" }}>
          التشريطية (150–250 ج.م):
        </strong>{" "}
        تشريطات صغيرة مع الكاسات لإزالة الدم الراكد وعلاج الآلام المزمنة —
        الأكثر شيوعاً للرياضيين.
        <br />
        <strong style={{ color: "#ff8a65" }}>النارية (100 ج.م):</strong>{" "}
        حرارة علاجية عميقة للمفاصل والعضلات المتعبة — بدون شروط.
      </>
    ),
  },
  {
    category: "hijama",
    icon: "⏱️",
    question: "كم تستغرق جلسة الحجامة؟ وهل تحتاج لتحضير مسبق؟",
    answer:
      "جلسة الحجامة العادية تستغرق 30–45 دقيقة. للحصول على أفضل نتيجة: تجنب الأكل الثقيل قبل الجلسة بساعتين، وتأكد من الترطيب الجيد (اشرب ماء كافياً). بعد الجلسة يُنصح بالراحة وتجنب التمرين المكثف ليوم واحد.",
  },

  // ── RECOVERY ──────────────────────────────────────────────
  {
    category: "recovery",
    icon: "💆",
    question: "ما الفرق بين الريكافري العادية والريكافري الكاملة؟",
    answer: (
      <>
        <strong style={{ color: "var(--teal-light)" }}>
          الريكافري العادية (400 ج.م):
        </strong>{" "}
        مساج عميق متخصص + Massage Gun — مثالية للاستشفاء بعد التمرين وتخفيف
        آلام العضلات (DOMS).
        <br />
        <br />
        <strong style={{ color: "var(--gold)" }}>
          الريكافري الكاملة (700 ج.م):
        </strong>{" "}
        تضيف فوطة نارية وحجامة للاستشفاء الأعمق — للرياضيين الجادين والحالات
        المزمنة أو ما قبل المنافسات.
      </>
    ),
  },
  {
    category: "recovery",
    icon: "🏃",
    question: "متى أحجز جلسة الريكافري؟ قبل التمرين ولا بعده؟",
    answer:
      "الريكافري مصممة أساساً لما بعد التمرين لتسريع استشفاء العضلات وتخفيف الألم. يمكن أيضاً استخدامها قبل المنافسات لتنشيط العضلات. للحالات المزمنة يمكن الحجز في أي وقت. فريقنا يرشدك لأنسب توقيت حسب وضعك.",
  },

  // ── PACKAGES ──────────────────────────────────────────────
  {
    category: "packages",
    icon: "🏋️",
    question: "هل اشتراك الجيم مُضمَّن في الباقات؟",
    answer:
      "نعم، اشتراك الجيم مُضمَّن في الباقات النصف سنوية (6 أشهر) والسنوية (12 شهر) — يُفعَّل عند بدء الاشتراك الفعلي. الباقات الشهرية والربع سنوية لا تشمل اشتراك الجيم، لكنها تشمل برامج التدريب والمتابعة.",
  },
  {
    category: "packages",
    icon: "⬆️",
    question: "هل يمكنني ترقية باقتي بعد الاشتراك؟",
    answer:
      "بالتأكيد، يمكنك الترقية لأي باقة أعلى في أي وقت. يُحسب الفرق في السعر بشكل عادل (نسبي على أيام المتبقية) وتستفيد فوراً من مميزات الباقة الجديدة. تواصل معنا على واتساب وسنرتب لك الترقية خلال 24 ساعة.",
  },
  {
    category: "packages",
    icon: "📋",
    question: "ما الذي يشمله برنامج التدريب والتغذية في الباقات؟",
    answer:
      "برنامج التدريب يشمل خطة تمارين مخصصة بالفيديو مبنية على مستواك وهدفك، مع تعديلات دورية حسب تقدمك. برنامج التغذية يشمل نظام غذائي علمي كامل يحترم أذواقك وجدولك. المتابعة تتم يومياً عبر واتساب مع الكوتش.",
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
      "B•Stance موجود في طناح - المنصورة. بعد الحجز عبر الموقع، سيتواصل معك فريقنا على واتساب لتأكيد الموعد والعنوان التفصيلي. الحجز لا يلزمك بأي شيء — الفريق هيرتب معك كل التفاصيل.",
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
            href="https://wa.me/201000000001"
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
