"use client";
import React from "react";
import { useBookingForm } from "@/hooks/useBookingForm";

const perks = [
  { icon: "🏆", text: "برامج مصممة تحت إشراف متخصصين معتمدين" },
  { icon: "✅", text: "تأكيد فوري عبر واتساب في أقل من دقيقتين" },
  { icon: "🕐", text: "مواعيد مرنة — صباحاً ومساءً حسب جدولك" },
  { icon: "🛡️", text: "تعقيم كامل بمعايير طبية معتمدة في كل جلسة" },
  { icon: "📊", text: "متابعة مستمرة وتقييم دوري للأداء" },
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
              برنامجك.
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
              ⚡ أسعار خاصة لفترة محدودة — احجز الآن
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

                <optgroup label="— جلسات الريكافري —">
                  <option value="ريكافري عادية">ريكافري عادية — 400 ج.م</option>
                  <option value="ريكافري شاملة">ريكافري شاملة — 500 ج.م</option>
                  <option value="حجامة فقط">حجامة فقط — 250 ج.م</option>
                </optgroup>

                <optgroup label="— باقات التغذية —">
                  <option value="تغذية 3 شهور">تغذية 3 شهور — 1,500 ج.م</option>
                  <option value="تغذية 6 شهور">تغذية 6 شهور — 2,500 ج.م</option>
                  <option value="تغذية سنة">تغذية سنة — 4,000 ج.م</option>
                </optgroup>

                <optgroup label="— باقات التدريب —">
                  <option value="تدريب شهر">تدريب شهر — 800 ج.م</option>
                  <option value="تدريب 3 شهور">تدريب 3 شهور — 2,100 ج.م</option>
                  <option value="تدريب 6 شهور">تدريب 6 شهور — 3,800 ج.م</option>
                  <option value="تدريب سنة">تدريب سنة — 6,500 ج.م</option>
                </optgroup>

                <optgroup label="— باقات مركّبة —">
                  <option value="تغذية + تدريب 3 شهور">تغذية + تدريب 3 شهور — 3,000 ج.م</option>
                  <option value="تغذية + تدريب 6 شهور">تغذية + تدريب 6 شهور — 5,200 ج.م</option>
                  <option value="تغذية + تدريب سنة">تغذية + تدريب سنة — 9,000 ج.م</option>
                  <option value="تدريب + ريكافري شهر">تدريب + ريكافري شهر — 1,500 ج.م</option>
                  <option value="تدريب + ريكافري 3 شهور">تدريب + ريكافري 3 شهور — 3,600 ج.م</option>
                  <option value="تدريب + ريكافري 6 شهور">تدريب + ريكافري 6 شهور — 6,500 ج.م</option>
                  <option value="تدريب + ريكافري سنة">تدريب + ريكافري سنة — 11,000 ج.م</option>
                  <option value="تغذية + ريكافري 3 شهور">تغذية + ريكافري 3 شهور — 2,200 ج.م</option>
                  <option value="تغذية + ريكافري 6 شهور">تغذية + ريكافري 6 شهور — 3,800 ج.م</option>
                  <option value="تغذية + ريكافري سنة">تغذية + ريكافري سنة — 6,000 ج.م</option>
                </optgroup>

                <optgroup label="— الباقة الشاملة (Transformation) —">
                  <option value="شاملة 3 شهور">الباقة الشاملة 3 شهور — 4,500 ج.م</option>
                  <option value="شاملة 6 شهور">الباقة الشاملة 6 شهور — 8,000 ج.م</option>
                  <option value="شاملة سنة">الباقة الشاملة سنة — 14,000 ج.م</option>
                </optgroup>

                <optgroup label="— للأكاديميات والجيمات —">
                  <option value="شراكة أكاديمية">أريد شراكة لأكاديميتي / جيمي</option>
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
