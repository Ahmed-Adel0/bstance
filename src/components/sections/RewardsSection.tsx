"use client";
import React from "react";

const tiers = [
  {
    badge: "🎁",
    badgeClass: "t-silver",
    title: "الزيارة الثالثة",
    reward: "جلسة ريكافري عادية مجانية",
    desc: "مكافأة ولائك — استشفاء كامل على حسابنا بعد رحلتك مع B•Stance.",
  },
  {
    badge: "⚡",
    badgeClass: "t-gold",
    title: "الزيارة السادسة",
    reward: "خصم 50% على جلستك",
    desc: "نصف السعر تقديراً لثقتك المستمرة بنا — لأن زبوننا الثابت يستحق أكثر.",
  },
];

export default function RewardsSection() {
  return (
    <>
      {/* ═══════ REWARDS & LOYALTY ═══════ */}
      <section className="section" id="loyalty">
        <div className="loyalty-layout">
          <div className="reveal w-full max-w-[820px] mx-auto text-center">
            <div className="s-label justify-center">نظام المكافآت</div>
            <h2 className="s-title">B•Stance Rewards — ولاؤك يُكافَأ دائماً 🏅</h2>
            <p className="s-sub mb-[30px] mx-auto">
              نظام واضح وبسيط — كل زيارة تقرّبك من مكافأة حقيقية.
            </p>

            {/* Tier rows */}
            <div className="tier-rows rd2 flex flex-col gap-4">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className="tier-row flex items-start text-right gap-5"
                >
                  <div className={`tier-badge ${tier.badgeClass} shrink-0`}>
                    {tier.badge}
                  </div>
                  <div>
                    <div className="tier-name">{tier.title}</div>
                    <div
                      className="tier-reward text-[1.05rem] mt-1"
                      style={{ fontWeight: 700 }}
                    >
                      {tier.reward}
                    </div>
                    <div
                      style={{
                        color: "var(--text-muted)",
                        fontSize: "0.9rem",
                        marginTop: "4px",
                      }}
                    >
                      {tier.desc}
                    </div>
                  </div>
                </div>
              ))}

              {/* Referral Box */}
              <div
                className="tier-row flex items-start text-right gap-5"
                style={{
                  border: "1px solid var(--accent)",
                  background: "rgba(255,179,71,0.05)",
                }}
              >
                <div
                  className="tier-badge shrink-0"
                  style={{ background: "var(--accent)", color: "#000" }}
                >
                  👥
                </div>
                <div>
                  <div className="tier-name" style={{ color: "var(--accent)" }}>
                    أحضر صديقاً (Referral)
                  </div>
                  <div
                    className="tier-reward text-[1.05rem] mt-1"
                    style={{ fontWeight: 700 }}
                  >
                    خصم 25% لصاحبك + جلسة ريكافري عادية مجانية لك
                  </div>
                  <div
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.9rem",
                      marginTop: "4px",
                    }}
                  >
                    انت بتكسب لما صاحبك بيجرب — مكافأة فورية لكليكما عند أول
                    جلسة.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
