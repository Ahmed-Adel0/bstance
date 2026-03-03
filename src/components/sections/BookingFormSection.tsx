"use client";
import React from "react";
import { useBookingForm } from "@/hooks/useBookingForm";

const perks = [
  { icon: "🏆", text: "كل حجز = تذكرة سحب تلقائية — بدون أي إجراءات إضافية" },
  { icon: "✅", text: "تأكيد فوري عبر واتساب في أقل من دقيقتين" },
  { icon: "🕐", text: "مواعيد مرنة — صباحاً ومساءً حسب جدولك" },
  { icon: "🛡️", text: "تعقيم كامل بمعايير طبية معتمدة في كل جلسة" },
  { icon: "🎁", text: "كوبون خصم مضمون لكل المشاركين — حتى بدون فوز" },
];

export default function BookingFormSection() {
  const { formData, errors, isSubmitted, handleChange, handleSubmit } =
    useBookingForm();

  return (
    <>
      {/* ═══════ BOOKING ═══════ */}
      <section className="booking-section" id="booking">
        <div className="booking-wrap">
          {/* Left: info */}
          <div className="reveal">
            <div className="s-label">احجز الآن</div>
            <h2 className="s-title">3 خطوات وتبدأ رحلتك</h2>
            <p className="s-sub" style={{ marginBottom: "18px" }}>
              أرسل طلبك وسيتواصل معك فريقنا خلال دقائق لترتيب كل تفاصيل
              جلستك.
            </p>
            <ul className="bk-perks">
              {perks.map((p, i) => (
                <li key={i} className="bk-perk">
                  <div className="bk-ico">{p.icon}</div>
                  {p.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <form className="booking-form reveal rd2" onSubmit={handleSubmit}>
            <div className="form-title">📲 احجز مكانك الآن</div>
            <div className="form-subtitle">
              سيتواصل معك فريقنا لترتيب باقي التفاصيل
            </div>
            <div className="form-urgency">
              ⚡ أسعار الإطلاق الخاصة سارية خلال فترة السحب فقط
            </div>

            {/* Name */}
            <div className="fg">
              <label htmlFor="f_name">الاسم الكريم</label>
              <input
                type="text"
                id="f_name"
                name="name"
                placeholder="اسمك الكامل"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.name && (
                <span
                  className="error-text"
                  style={{ color: "#ff6b6b", fontSize: "13px" }}
                >
                  {errors.name}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="fg">
              <label htmlFor="f_phone">رقم الواتساب</label>
              <input
                type="tel"
                id="f_phone"
                name="phone"
                placeholder="01xxxxxxxxx"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                dir="ltr"
              />
              {errors.phone && (
                <span
                  className="error-text"
                  style={{ color: "#ff6b6b", fontSize: "13px" }}
                >
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Goal / Service */}
            <div className="fg">
              <label htmlFor="f_goal">ما الذي تريد حجزه؟</label>
              <select
                id="f_goal"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
              >
                <option value="" disabled>
                  اختر الخدمة أو الباقة
                </option>
                <optgroup label="— الخدمات الفردية (سحب مكملات Volt) —">
                  <option value="جلسة ريكافري عادية">
                    جلسة ريكافري عادية — 400 ج.م
                  </option>
                  <option value="جلسة ريكافري كاملة">
                    جلسة ريكافري كاملة — 700 ج.م
                  </option>
                  <option value="حجامة الظهر">حجامة الظهر — 200 ج.م</option>
                  <option value="حجامة الرقبة">حجامة الرقبة — 150 ج.م</option>
                  <option value="حجامة القدمين">
                    حجامة القدمين — 250 ج.م
                  </option>
                  <option value="حجامة شاملة">
                    حجامة شاملة (ظهر + رقبة + قدمين) — 400 ج.م
                  </option>
                  <option value="نظام تغذية">نظام تغذية مخصص — 250 ج.م</option>
                  <option value="جدول تمرين">
                    جدول تمرين مخصص — 250 ج.م
                  </option>
                </optgroup>
                <optgroup label="— باقات النخبة (سحب ترقية مجانية) —">
                  <option value="الباقة الشهرية">
                    الباقة الشهرية 👑 — 800 ج.م
                  </option>
                  <option value="الباقة الربع سنوية">
                    الباقة الربع سنوية 💎 — 2,000 ج.م
                  </option>
                  <option value="الباقة النصف سنوية">
                    الباقة النصف سنوية 🏅 — 3,000 ج.م
                  </option>
                  <option value="الباقة السنوية">
                    الباقة السنوية 🌟 — 6,000 ج.م
                  </option>
                </optgroup>
              </select>
              {errors.goal && (
                <span
                  className="error-text"
                  style={{ color: "#ff6b6b", fontSize: "13px" }}
                >
                  {errors.goal}
                </span>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitted}
              style={
                isSubmitted
                  ? { background: "linear-gradient(135deg,#1A7A6E,#2AAFA0)" }
                  : {}
              }
            >
              {isSubmitted
                ? "✅ تم الإرسال! سنتواصل معك فوراً 🎉"
                : "📲 أرسل طلب الحجز الآن"}
            </button>

            <div className="form-note">
              بياناتك آمنة تماماً — للتواصل فقط ✓
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
