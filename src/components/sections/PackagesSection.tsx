"use client";
import React, { useState } from "react";
import {
  Check,
  ArrowLeft,
  CalendarCheck,
  Target,
  Users,
  Shield,
  Star,
  Clock,
  TrendingUp,
  Award,
  Flame,
  Heart,
} from "lucide-react";

/* ════════════════════════════════════════════════
   PackagesSection — باقات B•Stance المحسّنة
   مع: Persona / نتائج متوقعة / CTA قوي / Risk Reversal
   ════════════════════════════════════════════════ */

import { PackageCategory, tabs, packageGroups, PackageGroup } from "../../data/packagesData";

/* ─── Color helpers ─── */
const colorVar = (color: PackageGroup["color"]) =>
  color === "gold"
    ? "var(--gold)"
    : color === "blue"
    ? "var(--blue)"
    : color === "red"
    ? "var(--red)"
    : "var(--teal-light)";

const colorAlpha = (color: PackageGroup["color"], alpha: number) =>
  color === "gold"
    ? `rgba(255,215,0,${alpha})`
    : color === "blue"
    ? `rgba(79,172,254,${alpha})`
    : color === "red"
    ? `rgba(255,77,77,${alpha})`
    : `rgba(61,216,200,${alpha})`;

/* ─── Sub-components ─── */
function PersonaBadge({ label, color }: { label: string; color: PackageGroup["color"] }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: "20px",
        fontSize: "0.78rem",
        fontWeight: "700",
        background: colorAlpha(color, 0.12),
        color: colorVar(color),
        border: `1px solid ${colorAlpha(color, 0.25)}`,
        marginBottom: "6px",
      }}
    >
      {label}
    </span>
  );
}

function ResultBadge({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        fontSize: "0.88rem",
        color: "rgba(255,255,255,0.75)",
        marginBottom: "6px",
      }}
    >
      <TrendingUp size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#4ade80" }} />
      <span>{text}</span>
    </div>
  );
}

/* ─── Main Component ─── */
export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState<PackageCategory>("transformation");

  const activeGroup = packageGroups.find((g) => g.id === activeTab)!;

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        .pkg-content {
           max-width: 1750px !important;
           width: 100%;
           padding: 0 16px;
           margin: 0 auto;
        }
        .creative-card {
           position: relative;
           background: #111727; /* Deep Navy Background */
           border-radius: 24px;
           padding: 28px 24px;
           display: flex;
           flex-direction: column;
           align-items: flex-start;
           text-align: right;
           transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
           border: 1px solid rgba(255, 255, 255, 0.05);
           z-index: 1;
           overflow: hidden;
        }
        .creative-card:hover {
           transform: translateY(-8px);
           box-shadow: 0 25px 60px rgba(0, 0, 0, 0.4);
           border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .creative-hero-card {
           border: 1px solid rgba(255, 215, 0, 0.3) !important;
           background: linear-gradient(160deg, #182038, #111727);
        }
        .creative-hero-card:hover {
           box-shadow: 0 25px 60px rgba(255, 215, 0, 0.15);
           border: 1px solid rgba(255, 215, 0, 0.5) !important;
        }
        .feature-row {
           transition: all 0.3s ease;
        }
        .feature-row:hover {
           transform: translateX(-4px);
        }
      `}</style>
      <section className="section" id="packages">
        {/* ── Header ── */}
        <div className="pkg-header">
          <div className="s-label" style={{ justifyContent: "center" }}>
            باقات B•Stance
          </div>
          <h2 className="s-title pkg-title">اختر الباقة التي تناسب هدفك</h2>
          <p className="s-sub pkg-sub">
            باقات متنوعة تناسب كل الأهداف — فردية أو مركّبة أو شاملة.
            <br />
            <span style={{ color: "var(--teal-light)", fontWeight: 700 }}>
              Train • Nutrition • Recovery
            </span>{" "}
            — اختر ما يناسبك وابدأ رحلتك.
          </p>
        </div>

        {/* ── Urgency Strip ── */}
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto 40px",
            padding: "14px 24px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, rgba(255,215,0,0.08), rgba(61,216,200,0.08))",
            border: "1px solid rgba(255,215,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            fontSize: "0.88rem",
            fontWeight: "700",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.75)" }}>
            <Shield size={16} style={{ color: "var(--teal-light)" }} />
            ضمان الرضا الكامل
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.75)" }}>
            <Clock size={16} style={{ color: "var(--gold)" }} />
            أماكن محدودة شهريًا
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.75)" }}>
            <Star size={16} style={{ color: "var(--gold)" }} />
            <span style={{ color: "var(--gold)" }}>خصم 10% عند خدمتين | 15% عند 3 خدمات 🔥</span>
          </span>
        </div>

        {/* ── Tabs ── */}
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

        {/* ── Content Panel ── */}
        <div
          className="pkg-content"
          key={activeTab}
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          style={{
            animation: "fadeInUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards",
            opacity: 0,
          }}
        >
          {/* Panel Header */}
          <div className="pkg-content-header" style={{ marginBottom: "32px", textAlign: "center" }}>
            <h3
              className="pkg-content-title"
              style={{
                fontSize: "1.8rem",
                color: colorVar(activeGroup.color),
                marginBottom: "12px",
                transition: "color 0.3s ease",
              }}
            >
              {activeGroup.title}
            </h3>
            <p
              className="pkg-content-sub"
              style={{ fontSize: "1.15rem", color: "#fff", fontWeight: "bold" }}
            >
              {activeGroup.subtitle}
            </p>
            {activeGroup.desc && (
              <p
                style={{
                  marginTop: "16px",
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: "1.8",
                  maxWidth: "800px",
                  margin: "16px auto 0",
                }}
              >
                {activeGroup.desc}
              </p>
            )}

            {/* Category Persona */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", fontWeight: "700" }}>
                <Users size={14} style={{ display: "inline", marginLeft: "4px" }} />
                مناسبة لـ:
              </span>
              {activeGroup.persona.map((p, i) => (
                <PersonaBadge key={i} label={p} color={activeGroup.color} />
              ))}
            </div>
          </div>

          {/* ── Pricing Cards ── */}
          <div 
            style={{ 
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
              gap: "20px",
              alignItems: "stretch",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {activeGroup.items.map((item, i) => {
              const accentColor = colorVar(activeGroup.color);
              const accentAlpha = (a: number) => colorAlpha(activeGroup.color, a);
              const isHero = item.isHero || item.isBestValue;

              return (
                <div
                  key={i}
                  className={`creative-card ${isHero ? "creative-hero-card" : ""}`}
                  style={{
                     "--card-color": accentColor,
                     "--card-color-alpha": accentAlpha(0.25),
                     animation: `fadeInUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards`,
                     animationDelay: `${i * 0.15}s`,
                     opacity: 0,
                  } as React.CSSProperties}
                >

                  {/* Subheading (Persona) */}
                  <div style={{ fontSize: "0.85rem", color: "#8f9bb3", fontWeight: "600", marginBottom: "6px" }}>
                    {item.persona.join(" و ")}
                  </div>

                  {/* Main Title */}
                  <h4 style={{ fontSize: "1.6rem", fontWeight: "900", color: "#fff", marginBottom: "4px", letterSpacing: "-0.5px" }}>
                    {item.label}
                  </h4>

                  {/* Duration / Subtitle */}
                  <div style={{ fontSize: "0.85rem", color: "#637089", fontWeight: "500", marginBottom: "16px" }}>
                    {item.duration} {item.note ? ` . ${item.note}` : " . شوف الفرق بنفسك"}
                  </div>


                  {/* Price Section */}
                  <div style={{ width: "100%", marginBottom: "20px" }}>
                    {item.originalPrice && (
                      <div style={{ fontSize: "0.85rem", color: "#637089", textDecoration: "line-through", marginBottom: "2px", fontWeight: "600" }}>
                        بدلاً من {item.originalPrice} ج.م
                      </div>
                    )}
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "8px" }}>
                      <span style={{ fontSize: "2.8rem", fontWeight: "900", color: "#ffb347", lineHeight: "1" }}>
                        {item.price}
                      </span>
                      <span style={{ fontSize: "0.9rem", color: "#637089", fontWeight: "600" }}>
                        ج.م / {item.duration.replace("تجديد ", "").replace("باقة ", "")}
                      </span>
                    </div>
                    
                    {item.originalPrice && (
                      <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: "rgba(255, 179, 71, 0.08)",
                        border: "1px solid rgba(255, 179, 71, 0.2)",
                        color: "#ffb347",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: "800",
                        gap: "6px"
                      }}>
                        <Flame size={12} fill="#ffb347" />
                        وفّر {(parseInt(item.originalPrice.replace(/,/g, "")) - parseInt(item.price.replace(/,/g, ""))).toLocaleString()} ج.م — خصم {Math.round(((parseInt(item.originalPrice.replace(/,/g, "")) - parseInt(item.price.replace(/,/g, ""))) / parseInt(item.originalPrice.replace(/,/g, ""))) * 100)}%
                      </div>
                    )}
                  </div>

                  {/* Subtle Divider */}
                  <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "20px" }} />

                  {/* Features List */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexGrow: 1, width: "100%", marginBottom: "24px" }}>
                    {item.features.map((f, idx) => (
                      <div key={idx} className="feature-row" style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <Check size={16} strokeWidth={4} style={{ color: "#ffb347", flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ color: "#d1d8e0", fontSize: "0.9rem", fontWeight: "500", lineHeight: "1.6" }}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive CTA Box */}
                  <button
                    onClick={scrollToBooking}
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      padding: "14px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textAlign: "right",
                      marginTop: "auto",
                      fontFamily: "inherit"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255, 179, 71, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(255, 179, 71, 0.3)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      const icon = e.currentTarget.querySelector('svg');
                      if(icon) {
                        icon.style.opacity = '1';
                        icon.style.filter = 'drop-shadow(0 0 8px rgba(255, 179, 71, 0.6))';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.transform = "none";
                      const icon = e.currentTarget.querySelector('svg');
                      if(icon) {
                        icon.style.opacity = '0.7';
                        icon.style.filter = 'none';
                      }
                    }}
                  >
                    <span style={{ color: "#a0aec0", fontSize: "0.85rem", fontWeight: "600", lineHeight: "1.5", flex: 1 }}>
                       نقطة الانطلاق المثالية — {item.ctaText}
                    </span>
                    <Star size={18} color="#a0aec0" fill="currentColor" style={{ flexShrink: 0, opacity: 0.7, transition: "all 0.3s ease", marginLeft: "8px" }} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Risk Reversal + Trust Bar ── */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: "48px",
            padding: "28px 24px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "20px",
            border: "1px solid rgba(255,255,255,0.06)",
            maxWidth: "820px",
            margin: "48px auto 0",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              flexWrap: "wrap",
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.6)",
              fontWeight: "600",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Shield size={16} style={{ color: "var(--teal-light)" }} />
              ضمان الرضا الكامل
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Star size={16} style={{ color: "var(--teal-light)" }} />
              باقات مرنة قابلة للترقية
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Heart size={16} style={{ color: "var(--teal-light)" }} />
              دعم مستمر طوال الرحلة
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "var(--gold)", fontWeight: 800 }}>
                خصم 10% عند خدمتين | خصم 15% عند 3 خدمات 🔥
              </span>
            </span>
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="section-cta-bar" style={{ marginTop: "32px" }}>
          <a
            href="#booking"
            className="btn-primary flex items-center justify-center gap-2"
            style={{ padding: "16px 32px", fontSize: "1.1rem" }}
          >
            <CalendarCheck size={20} />
            <span>احجز باقتك وابدأ منظومتك</span>
            <ArrowLeft size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
