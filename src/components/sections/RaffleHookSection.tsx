"use client";
import React from "react";

export default function RaffleHookSection() {
  return (
    <>
      {/* ═══════ RAFFLE HOOK ═══════ */}
      <section className="hook-section" id="raffle-hook">
        <div
          style={{ textAlign: "center", marginBottom: "44px" }}
          className="reveal"
        >
          <div className="s-label" style={{ justifyContent: "center" }}>
            🏆 &nbsp;سحب الافتتاح الكبير — 16 حتى 26 رمضان
          </div>
          <h2
            className="s-title"
            style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)" }}
          >
            كل حجز = تذكرة سحب تلقائية
          </h2>
          <p
            className="s-sub"
            style={{
              margin: "0 auto",
              textAlign: "center",
              maxWidth: "620px",
            }}
          >
            نوع الجائزة يتحدد حسب الخدمة التي تحجزها —{" "}
            <strong style={{ color: "var(--gold)" }}>مكملات Volt</strong>{" "}
            للخدمات الفردية، و
            <strong style={{ color: "var(--teal-light)" }}>
              {" "}
              ترقية الاشتراك
            </strong>{" "}
            لأصحاب الباقات.
          </p>
        </div>

        {/* TWO COLUMN LOGIC */}
        <div className="raffle-logic reveal">
          {/* Col 1: Individual = Supplements */}
          <div className="raffle-col">
            <div className="raffle-col-header">
              <div className="rcol-badge supplements">
                🎁 مكملات Volt (بروتين أو كارب أو كرياتين)
              </div>
              <div className="rcol-title">الخدمات الفردية</div>
            </div>
            <div className="raffle-tier">
              <div className="rt-icon-sm gold-bg">🥗</div>
              <div>
                <div className="rt-service">نظام تغذية / جدول تمرين</div>
                <div className="rt-prize-label">
                  الجائزة:{" "}
                  <strong>مكملات Volt</strong>
                </div>
              </div>
            </div>
            <div className="raffle-tier">
              <div className="rt-icon-sm gold-bg">💆</div>
              <div>
                <div className="rt-service">جلسة ريكافري (عادية أو كاملة)</div>
                <div className="rt-prize-label">
                  الجائزة:{" "}
                  <strong>مكملات Volt</strong>
                </div>
              </div>
            </div>
            <div className="raffle-tier">
              <div className="rt-icon-sm gold-bg">🔴</div>
              <div>
                <div className="rt-service">جلسات الحجامة (بكل أنواعها)</div>
                <div className="rt-prize-label">
                  الجائزة:{" "}
                  <strong>مكملات Volt</strong>
                </div>
              </div>
            </div>
            <div className="raffle-note">
              💡 الخدمات الفردية تدخلك سحب المكملات — مكافأة حقيقية لأي
              رياضي يبحث عن بروتين أو كرياتين بجودة عالية.
            </div>
          </div>

          {/* Col 2: Packages = Upgrade */}
          <div
            className="raffle-col"
            style={{
              borderColor: "rgba(61, 216, 200, 0.25)",
              background: "rgba(61, 216, 200, 0.03)",
            }}
          >
            <div className="raffle-col-header">
              <div className="rcol-badge upgrade">👑 سحب ترقية الاشتراك</div>
              <div className="rcol-title">باقات النخبة حصراً</div>
            </div>
            <div className="raffle-tier vip-tier">
              <div className="rt-icon-sm teal-bg">👑</div>
              <div>
                <div className="rt-service">الباقة الشهرية — 600 ج.م</div>
                <div className="rt-prize-label teal">
                  الجائزة:{" "}
                  <strong>ترقية من شهر → 3 شهور بنفس السعر المدفوع</strong>
                </div>
              </div>
            </div>
            <div className="raffle-tier vip-tier">
              <div className="rt-icon-sm teal-bg">💎</div>
              <div>
                <div className="rt-service">
                  الباقة الربع سنوية — 1,800 ج.م
                </div>
                <div className="rt-prize-label teal">
                  الجائزة:{" "}
                  <strong>ترقية من 3 شهور → 6 شهور بنفس السعر المدفوع</strong>
                </div>
              </div>
            </div>
            <div className="raffle-tier vip-tier">
              <div className="rt-icon-sm teal-bg">🏅</div>
              <div>
                <div className="rt-service">الباقة النصف سنوية أو السنوية</div>
                <div className="rt-prize-label teal">
                  الجائزة:{" "}
                  <strong>
                    باقة مكملات Volt كاملة (بروتين + كارب + كرياتين)
                  </strong>
                </div>
              </div>
            </div>
            <div
              className="raffle-note"
              style={{
                background: "rgba(61, 216, 200, 0.07)",
                borderColor: "rgba(61, 216, 200, 0.2)",
                color: "rgba(255, 255, 255, 0.62)",
              }}
            >
              💎 مثال: اشتركت بالباقة الشهرية وفزت بالسحب — بتاخد 3 شهور متابعة كاملة
              بنفس المبلغ اللي دفعته. ترقية حقيقية بدون أي تكلفة إضافية.
            </div>
          </div>
        </div>

        {/* Rules */}
        <div
          className="rules-grid reveal"
          style={{ marginTop: "28px" }}
        >
          <div className="rule-card">
            <div className="rule-ico">✅</div>
            <span>احجز أي خدمة أو باقة من 16 لـ 26 رمضان وادخل السحب تلقائياً</span>
          </div>
          <div className="rule-card">
            <div className="rule-ico">📅</div>
            <span>السحب مفتوح 10 أيام فقط — النتائج تُعلَن 27 رمضان يوم الافتتاح</span>
          </div>
          <div className="rule-card">
            <div className="rule-ico">💡</div>
            <span>كل حجز إضافي = فرصة إضافية — كلما حجزت أكثر، فرصتك أعلى</span>
          </div>
          <div className="rule-card">
            <div className="rule-ico">🎁</div>
            <span>حتى لو ما فزتش — كل المشاركين يحصلون على كوبون خصم حصري بعد السحب</span>
          </div>
          <div className="rule-card">
            <div className="rule-ico">🎁</div>
            <span>هات صاحبك — فرصتك تتضاعف</span>
            <div className="rbs-text">أحضر صديقاً معك واحصل على تذكرتين في السحب بدلاً من واحدة!</div>
          </div>
        </div>

        <div className="section-cta-bar">
          <a href="#booking" className="btn-primary">
            📲 احجز الآن وادخل السحب مجاناً ←
          </a>
          <p>الحجز لا يلزمك بأي شيء — فريقنا سيتواصل معك لترتيب كل شيء</p>

          {/* Bridge to Services */}
          <div className="raffle-to-services-bridge reveal">
            <span className="rtb-text">
              جاهز تشوف الخدمات والأسعار؟
            </span>
            <a href="#services" className="rtb-link">
              تصفّح الخدمات الفردية والباقات
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{ transform: "scaleX(-1)" }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
