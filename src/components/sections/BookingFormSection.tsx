"use client";
import React from "react";
import { useBookingForm } from "@/hooks/useBookingForm";
import { 
  Trophy, 
  CheckCircle, 
  Clock, 
  CheckCircle2, 
  BarChart3, 
  MessageCircle, 
  Zap 
} from "lucide-react";

const perks = [
  { icon: <Trophy size={18} />, text: "برامج مصممة تحت إشراف متخصصين معتمدين" },
  { icon: <CheckCircle size={18} />, text: "تأكيد فوري عبر واتساب في أقل من دقيقتين" },
  { icon: <Clock size={18} />, text: "مواعيد مرنة — صباحاً ومساءً حسب جدولك" },
  { icon: <CheckCircle2 size={18} />, text: "تعقيم كامل بمعايير طبية معتمدة في كل جلسة" },
  { icon: <BarChart3 size={18} />, text: "متابعة مستمرة وتقييم دوري للأداء" },
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
                  <div className="bk-ico" style={{ color: i % 2 === 0 ? "var(--teal-light)" : "var(--gold)" }}>{p.icon}</div>
                  {p.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <form className="booking-form reveal rd2" onSubmit={handleSubmit}>
            <div className="form-title flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              احجز مكانك الآن
            </div>
            <div className="form-subtitle">
              سيتواصل معك فريقنا لترتيب باقي التفاصيل
            </div>
            <div className="form-urgency flex items-center justify-center gap-2">
              <Zap size={16} color="var(--gold)" fill="var(--gold)" /> 
              أسعار خاصة لفترة محدودة — احجز الآن
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
                  <option value="Quick Recovery">Quick Recovery — 200 ج.م</option>
                  <option value="Sport Recovery">Sport Recovery — 300 ج.م</option>
                  <option value="Deep Recovery">Deep Recovery — 400 ج.م</option>
                  <option value="Elite Recovery">Elite Recovery — 500 ج.م</option>
                  <option value="حجامة رياضية">حجامة رياضية فقط — 250 ج.م</option>
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
              className="submit-btn flex items-center justify-center gap-2"
              disabled={isSubmitted}
              style={
                isSubmitted
                  ? { background: "linear-gradient(135deg,#1A7A6E,#2AAFA0)" }
                  : {}
              }
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={18} />
                  تم الإرسال! سنتواصل معك فوراً
                </>
              ) : (
                <>
                  <MessageCircle size={18} />
                  أرسل طلب الحجز الآن
                </>
              )}
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
