"use client";
import React, { useState } from "react";
import {
  Trophy,
  Medal,
  TrendingUp,
  TrendingDown,
  Repeat2,
  ArrowLeft,
  Zap,
  Apple,
  Activity,
  Dumbbell,
  MessageCircle,
  Award,
  Star,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════ */
type CategoryKey = "all" | "elite" | "structural" | "lifestyle";

interface AccentStyle {
  primary: string;
  bg: string;
  border: string;
  shadow: string;
}

interface Champion {
  id: number;
  name: string;
  gender: "male" | "female";
  sport: string;
  sportEmoji: string;
  category: CategoryKey;
  categoryLabel: string;
  duration: string;
  fromVal: string;
  toVal: string;
  unit: string;
  direction: "up" | "down" | "none";
  result: string;
  quote: string;
  accentColor: keyof typeof ACCENTS;
  delay: string;
  badge: string;
  medalEmoji: string;
  placeholderBg: string;
}

interface ServiceItem {
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
  title: string;
  desc: string;
  cta: string;
}

/* ═══════════════════════════════════════════════════════
   ACCENT COLORS MAP
   ═══════════════════════════════════════════════════════ */
const ACCENTS = {
  teal: {
    primary: "var(--teal-light, #3dd8c8)",
    bg: "rgba(61,216,200,0.08)",
    border: "rgba(61,216,200,0.25)",
    shadow: "rgba(61,216,200,0.15)",
  },
  gold: {
    primary: "var(--gold, #ffb347)",
    bg: "rgba(255,179,71,0.08)",
    border: "rgba(255,179,71,0.25)",
    shadow: "rgba(255,179,71,0.15)",
  },
  blue: {
    primary: "var(--blue, #4facfe)",
    bg: "rgba(79,172,254,0.08)",
    border: "rgba(79,172,254,0.25)",
    shadow: "rgba(79,172,254,0.15)",
  },
} satisfies Record<string, AccentStyle>;

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */
const CHAMPIONS: Champion[] = [
  {
    id: 1,
    name: "جنة محمد",
    gender: "female",
    sport: "ملاكمة",
    sportEmoji: "🥊",
    category: "elite",
    categoryLabel: "النخبة والبطولات",
    duration: "3 أشهر",
    fromVal: "وزن",
    toVal: "مثالي",
    unit: "",
    direction: "none",
    result: "ضغط تصفيات منتخب الصفوة كان يتطلب توازن دقيق بين الوزن والطاقة. انضمت لمنتخب مصر بوزن مثالي وأداء ثابت في كل مباراة.",
    quote: "البطولة لا تُبنى بحرمان الجسم… بل بتغذيته بذكاء يحافظ على قوته حتى لحظة الحسم.",
    accentColor: "gold",
    delay: "rd1",
    badge: "🥇 منتخب مصر",
    medalEmoji: "🏅",
    placeholderBg: "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 60%, #0f3460 100%)",
  },
  {
    id: 2,
    name: "كنزي",
    gender: "female",
    sport: "تايكوندو",
    sportEmoji: "🥋",
    category: "elite",
    categoryLabel: "النخبة والبطولات",
    duration: "6 أسابيع",
    fromVal: "وزن",
    toVal: "تنافسي",
    unit: "",
    direction: "down",
    result: "الوصول للوزن المثالي بدون التضحية بالقوة العضلية — أداء قوي ومستقر في توقيت البطولة.",
    quote: "قبل أن تبدأ المنافسة… نحن نكسبها في نظامك الغذائي.",
    accentColor: "teal",
    delay: "rd2",
    badge: "🥋 أداء بطولي",
    medalEmoji: "🏆",
    placeholderBg: "linear-gradient(135deg, #0d1b4b 0%, #0f4c3a 60%, #1a7a6e 100%)",
  },
  {
    id: 3,
    name: "أحمد",
    gender: "male",
    sport: "كونغ فو",
    sportEmoji: "🥷",
    category: "structural",
    categoryLabel: "التحول الهيكلي",
    duration: "3 أشهر",
    fromVal: "58",
    toVal: "70",
    unit: "كجم",
    direction: "up",
    result: "زيادة عضلية صافية تخدم الأداء القتالي والسرعة مباشرة — التحول من نحافة الجسم إلى قوته الحقيقية.",
    quote: "ليس الهدف أن تكبر… بل أن تصبح أقوى في رياضتك.",
    accentColor: "teal",
    delay: "rd3",
    badge: "💪 +12 كجم عضل خالص",
    medalEmoji: "⚡",
    placeholderBg: "linear-gradient(135deg, #0d1b4b 0%, #1a4a6e 50%, #2aafa0 100%)",
  },
  {
    id: 4,
    name: "محمود",
    gender: "male",
    sport: "كونغ فو",
    sportEmoji: "🥊",
    category: "structural",
    categoryLabel: "التحول الهيكلي",
    duration: "3 أشهر",
    fromVal: "68",
    toVal: "60",
    unit: "كجم",
    direction: "down",
    result: "جسم أخف وأداء أسرع وأكثر تحكماً — تحسن واضح في السرعة والثقة داخل الحلبة.",
    quote: "خسارة الوزن الحقيقية = زيادة الكفاءة، وليس فقط رقم على الميزان.",
    accentColor: "gold",
    delay: "rd4",
    badge: "⚡ -8 كجم + سرعة أعلى",
    medalEmoji: "🎯",
    placeholderBg: "linear-gradient(135deg, #1a0a00 0%, #5c3308 60%, #c97a1a 100%)",
  },
  {
    id: 5,
    name: "محمد",
    gender: "male",
    sport: "فتنس",
    sportEmoji: "🏋️",
    category: "lifestyle",
    categoryLabel: "تغيير نمط الحياة",
    duration: "6 أشهر",
    fromVal: "بداية",
    toVal: "أسلوب حياة",
    unit: "",
    direction: "none",
    result: "بدأ بهدف بسيط: تحسين الشكل والثقة — الالتزام تحوّل إلى أسلوب حياة وتطور مستمر يؤثر على كل جانب.",
    quote: "كل بطل بدأ بخطوة… ونحن نحولها لمسار كامل.",
    accentColor: "blue",
    delay: "rd5",
    badge: "🔄 تحول كامل",
    medalEmoji: "✨",
    placeholderBg: "linear-gradient(135deg, #0d1b4b 0%, #0a2a50 50%, #1a4a8e 100%)",
  },
];

const CATEGORIES: { key: CategoryKey; label: string; icon: React.ReactNode }[] = [
  { key: "all",        label: "كل الأبطال",      icon: <Trophy size={13} /> },
  { key: "elite",      label: "النخبة",           icon: <Medal size={13} /> },
  { key: "structural", label: "التحول الجسدي",   icon: <TrendingUp size={13} /> },
  { key: "lifestyle",  label: "نمط الحياة",       icon: <Repeat2 size={13} /> },
];

const SERVICES: ServiceItem[] = [
  {
    icon: <Apple size={26} />,
    color: "var(--gold, #ffb347)",
    bg: "rgba(255,179,71,0.08)",
    border: "rgba(255,179,71,0.25)",
    title: "🍽️ التغذية الرياضية",
    desc: "نحن لا نحسب سعرات فقط — نبني نظامًا يصمد تحت ضغط البطولات. الفرق بين لاعبة عادية وبطلة؟ خطة تُبنى على علم.",
    cta: "اكتشف خطط التغذية",
  },
  {
    icon: <Dumbbell size={26} />,
    color: "var(--teal-light, #3dd8c8)",
    bg: "rgba(61,216,200,0.08)",
    border: "rgba(61,216,200,0.25)",
    title: "🏋️ التدريب الرياضي",
    desc: "لا نقدّم برامج جاهزة — بل نصمّم هندسة جسمك حسب رياضتك. سواء هدفك كتلة أو سرعة، برنامجك يُبنى عليك أنت.",
    cta: "ابدأ برنامجك التدريبي",
  },
  {
    icon: <Activity size={26} />,
    color: "var(--blue, #4facfe)",
    bg: "rgba(79,172,254,0.08)",
    border: "rgba(79,172,254,0.25)",
    title: "♻️ الريكافري والاستشفاء",
    desc: "الأداء العالي لا يكتمل بدون استشفاء ذكي. أبطالنا يدخلون المنافسات بطاقة كاملة — لأننا نهتم بما بعد التمرين مثلما نهتم داخله.",
    cta: "تعرف على الاستشفاء",
  },
];

/* ═══════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════ */
export default function HallOfFameSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filtered =
    activeCategory === "all"
      ? CHAMPIONS
      : CHAMPIONS.filter((c) => c.category === activeCategory);

  return (
    <section
      id="hall-of-fame"
      style={{ position: "relative", padding: "90px 4%", overflow: "hidden", background: "rgba(255,255,255,0.013)" }}
    >
      {/* Glow orbs */}
      <div style={{ position:"absolute", top:"-120px", right:"-80px", width:"420px", height:"420px", borderRadius:"50%", background:"var(--gold,#ffb347)", filter:"blur(130px)", opacity:0.09, pointerEvents:"none", zIndex:0 }} />
      <div style={{ position:"absolute", bottom:"100px", left:"-100px", width:"380px", height:"380px", borderRadius:"50%", background:"var(--teal-light,#3dd8c8)", filter:"blur(120px)", opacity:0.08, pointerEvents:"none", zIndex:0 }} />

      {/* ── Header ── */}
      <div className="reveal" style={{ textAlign:"center", marginBottom:"52px", position:"relative", zIndex:1 }}>
        <div className="s-label" style={{ justifyContent:"center", gap:"8px" }}>
          <Award size={13} color="var(--gold)" />
          Hall of Fame — من الأرقام إلى البطولات
        </div>
        <h2 className="s-title" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"12px", marginBottom:"14px" }}>
          <span style={{ fontSize:"1.7rem" }}>🏆</span>
          أبطالنا يتكلمون بالأرقام
        </h2>
        <p className="s-sub" style={{ margin:"0 auto", textAlign:"center", maxWidth:"680px" }}>
          في B•Stance لا نقيس النجاح بالكلام — بل بالكيلوغرامات والميداليات والنتائج التي يصنعها{" "}
          <strong style={{ color:"var(--teal-light)" }}>أبطالنا</strong> داخل وخارج المنافسات.
        </p>

        {/* Mini stats */}
        <div style={{ display:"flex", justifyContent:"center", gap:"40px", marginTop:"36px", flexWrap:"wrap" }}>
          {[
            { num:"5+", label:"أبطال موثقون", color:"var(--teal-light)" },
            { num:"3",  label:"رياضات مختلفة",  color:"var(--gold)" },
            { num:"100%", label:"نتائج حقيقية", color:"var(--teal-light)" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign:"center" }}>
              <div style={{ fontFamily:"'Tajawal',sans-serif", fontSize:"2.1rem", fontWeight:900, color:s.color, lineHeight:1, textShadow:`0 0 18px ${s.color}60` }}>
                {s.num}
              </div>
              <div style={{ fontSize:"0.74rem", color:"rgba(255,255,255,0.45)", marginTop:"4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Filter buttons ── */}
      <div className="reveal" style={{ display:"flex", justifyContent:"center", gap:"10px", flexWrap:"wrap", marginBottom:"52px", position:"relative", zIndex:1 }}>
        {CATEGORIES.map((cat) => {
          const active = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                display:"inline-flex", alignItems:"center", gap:"6px",
                padding:"9px 22px", borderRadius:"50px",
                fontSize:"0.8rem", fontWeight:700,
                fontFamily:"'Cairo',sans-serif",
                cursor:"pointer",
                transition:"all 0.3s cubic-bezier(0.175,0.885,0.32,1.275)",
                border: active ? "1px solid transparent" : "1px solid rgba(61,216,200,0.2)",
                background: active ? "linear-gradient(135deg,var(--teal-mid,#2aafa0),var(--teal-light,#3dd8c8))" : "rgba(255,255,255,0.04)",
                color: active ? "var(--navy,#0d1b4b)" : "rgba(255,255,255,0.55)",
                boxShadow: active ? "0 6px 22px rgba(61,216,200,0.3)" : "none",
                transform: active ? "translateY(-2px)" : "none",
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* ── Champions Grid ── */}
      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",
          gap:"24px",
          marginBottom:"80px",
          position:"relative",
          zIndex:1,
        }}
      >
        {filtered.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} accent={ACCENTS[champion.accentColor]} />
        ))}
      </div>

      {/* ── Service bridge ── */}
      <ServiceBridge />

      {/* ── Bottom CTA ── */}
      <div className="section-cta-bar reveal" style={{ position:"relative", zIndex:1 }}>
        <a
          href="https://wa.me/201279266345?text=أنا%20مهتم%20بالانضمام%20لأبطال%20B•Stance"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ display:"inline-flex", alignItems:"center", gap:"10px" }}
        >
          <MessageCircle size={18} />
          <span>انضم لأبطال B•Stance</span>
          <ArrowLeft size={16} />
        </a>
        <p>كل بطل بدأ بخطوة — خطوتك الأولى تبدأ الآن.</p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CHAMPION CARD
   ═══════════════════════════════════════════════════════ */
function ChampionCard({ champion: c, accent: a }: { champion: Champion; accent: AccentStyle }) {
  const [hovered, setHovered] = useState(false);

  const titleLabel = c.gender === "female" ? "البطلة" : "البطل";

  return (
    <div
      className={`reveal ${c.delay}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:"relative",
        background:"rgba(255,255,255,0.03)",
        borderRadius:"24px",
        border:`1px solid ${hovered ? a.border : "rgba(255,255,255,0.07)"}`,
        overflow:"hidden",
        transition:"all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)",
        transform: hovered ? "translateY(-8px)" : "none",
        boxShadow: hovered ? `0 24px 60px ${a.shadow}` : "none",
        display:"flex",
        flexDirection:"column",
        backdropFilter:"blur(12px)",
      }}
    >
      {/* Inner corner glow */}
      <div style={{ position:"absolute", top:"-50px", right:"-50px", width:"180px", height:"180px", borderRadius:"50%", background:a.primary, filter:"blur(55px)", opacity: hovered ? 0.18 : 0.1, transition:"opacity 0.4s", pointerEvents:"none" }} />

      {/* ── Placeholder image header (swap with <img> when real photos are ready) ── */}
      <div
        style={{
          position:"relative",
          height:"175px",
          background: c.placeholderBg,
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          overflow:"hidden",
        }}
      >
        {/* Grid overlay */}
        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${a.primary}15 1px,transparent 1px),linear-gradient(90deg,${a.primary}15 1px,transparent 1px)`, backgroundSize:"26px 26px", opacity:0.6 }} />
        {/* Emoji placeholder — replace with <img> tag later */}
        <div style={{ position:"relative", zIndex:1, fontSize:"3.6rem", filter:`drop-shadow(0 0 22px ${a.primary})`, userSelect:"none", lineHeight:1 }}>
          {c.sportEmoji}
        </div>
        {/* Bottom fade to card bg */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"65px", background:"linear-gradient(to bottom,transparent,rgba(8,15,42,0.95))" }} />
        {/* Category pill */}
        <div style={{ position:"absolute", top:"13px", right:"13px", background:`rgba(0,0,0,0.55)`, border:`1px solid ${a.border}`, color:a.primary, fontSize:"0.64rem", fontWeight:800, padding:"4px 12px", borderRadius:"50px", backdropFilter:"blur(8px)" }}>
          {c.categoryLabel}
        </div>
        {/* Medal */}
        <div style={{ position:"absolute", top:"11px", left:"14px", fontSize:"1.35rem" }}>{c.medalEmoji}</div>
        {/* Duration chip */}
        <div style={{ position:"absolute", bottom:"10px", left:"50%", transform:"translateX(-50%)", background:"rgba(0,0,0,0.65)", border:"1px solid rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.75)", fontSize:"0.67rem", fontWeight:700, padding:"3px 12px", borderRadius:"50px", whiteSpace:"nowrap", backdropFilter:"blur(6px)" }}>
          ⏱ {c.duration}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ padding:"22px 24px", display:"flex", flexDirection:"column", gap:"16px", flex:1 }}>
        {/* Name row */}
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:"10px", flexWrap:"wrap" }}>
          <div>
            <h3 style={{ fontFamily:"'Tajawal',sans-serif", fontSize:"1.1rem", fontWeight:900, color:"#fff", margin:0 }}>
              {titleLabel} {c.name}
            </h3>
            <div style={{ fontSize:"0.73rem", color:"rgba(255,255,255,0.44)", marginTop:"3px", display:"flex", alignItems:"center", gap:"5px" }}>
              <span style={{ width:5, height:5, borderRadius:"50%", background:a.primary, display:"inline-block", flexShrink:0 }} />
              {c.sport}
            </div>
          </div>
          <div style={{ fontSize:"0.68rem", fontWeight:700, color:"rgba(255,255,255,0.55)", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.09)", padding:"3px 10px", borderRadius:"50px", flexShrink:0 }}>
            {c.badge}
          </div>
        </div>

        {/* ── Transformation visual ── */}
        <div style={{ background:a.bg, border:`1px solid ${a.border}`, borderRadius:"14px", padding:"14px 18px", display:"flex", alignItems:"center", gap:"14px" }}>
          {/* FROM */}
          <div style={{ textAlign:"center", flex:1 }}>
            <div style={{ fontFamily:"'Tajawal',sans-serif", fontSize: c.unit ? "1.9rem" : "0.88rem", fontWeight:900, color:"rgba(255,255,255,0.45)", lineHeight:1.1 }}>
              {c.fromVal}
            </div>
            {c.unit && <div style={{ fontSize:"0.62rem", color:"rgba(255,255,255,0.28)", marginTop:"2px" }}>{c.unit}</div>}
          </div>

          {/* Arrow indicator */}
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"3px" }}>
            <div style={{ width:"34px", height:"34px", borderRadius:"50%", background:a.primary, display:"flex", alignItems:"center", justifyContent:"center", boxShadow:`0 0 16px ${a.primary}55`, flexShrink:0 }}>
              {c.direction === "up"   ? <TrendingUp   size={15} color="#080f2a" /> :
               c.direction === "down" ? <TrendingDown size={15} color="#080f2a" /> :
                                        <Star         size={15} color="#080f2a" />}
            </div>
            <div style={{ fontSize:"0.58rem", color:a.primary, fontWeight:800 }}>
              {c.direction === "up" ? "زيادة" : c.direction === "down" ? "تخفيض" : "تطور"}
            </div>
          </div>

          {/* TO */}
          <div style={{ textAlign:"center", flex:1 }}>
            <div style={{ fontFamily:"'Tajawal',sans-serif", fontSize: c.unit ? "1.9rem" : "0.88rem", fontWeight:900, color:a.primary, lineHeight:1.1, textShadow:`0 0 14px ${a.primary}50` }}>
              {c.toVal}
            </div>
            {c.unit && <div style={{ fontSize:"0.62rem", color:a.primary, opacity:0.7, marginTop:"2px" }}>{c.unit}</div>}
          </div>
        </div>

        {/* Result */}
        <p style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.58)", lineHeight:1.75, margin:0 }}>{c.result}</p>

        {/* Quote */}
        <div style={{ background:a.bg, borderRight:`3px solid ${a.primary}`, borderRadius:"10px", padding:"14px 16px", display:"flex", gap:"10px", alignItems:"flex-start" }}>
          <span style={{ fontSize:"1.4rem", lineHeight:1, opacity:0.45, flexShrink:0, color:a.primary }}>❝</span>
          <p style={{ fontSize:"0.8rem", color:"rgba(255,255,255,0.7)", lineHeight:1.7, fontStyle:"italic", margin:0 }}>{c.quote}</p>
        </div>

        {/* CTA */}
        <a
          href="#booking"
          style={{
            display:"flex", alignItems:"center", justifyContent:"center", gap:"8px",
            marginTop:"auto", padding:"11px 20px", borderRadius:"50px",
            background:a.bg, border:`1px solid ${a.border}`,
            color:a.primary, fontSize:"0.8rem", fontWeight:800, textDecoration:"none",
            transition:"all 0.25s",
          }}
          onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "translateY(-2px)"; el.style.background = a.border; }}
          onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = "none"; el.style.background = a.bg; }}
        >
          <span>أريد نتيجة مثل {titleLabel} {c.name}</span>
          <ArrowLeft size={13} />
        </a>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   SERVICE BRIDGE
   ═══════════════════════════════════════════════════════ */
function ServiceBridge() {
  return (
    <div className="reveal" style={{ position:"relative", zIndex:1, marginBottom:"60px", paddingTop:"64px", borderTop:"1px solid rgba(61,216,200,0.1)" }}>
      <div style={{ textAlign:"center", marginBottom:"48px" }}>
        <div className="s-label" style={{ justifyContent:"center" }}>
          <Zap size={13} color="var(--teal-light)" />
          النتائج تبدأ من هنا
        </div>
        <h3 style={{ fontFamily:"'Tajawal',sans-serif", fontSize:"clamp(1.3rem,2.2vw,1.9rem)", fontWeight:900, color:"#fff", margin:"10px 0 12px" }}>
          الخدمات التي صنعت أبطالنا
        </h3>
        <p style={{ fontSize:"0.86rem", color:"rgba(255,255,255,0.47)", lineHeight:1.8, maxWidth:"600px", margin:"0 auto" }}>
          قصص نجاحهم ليست صدفة — كل نتيجة وراءها منظومة متكاملة من التغذية والتدريب والاستشفاء.
        </p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(270px, 1fr))", gap:"20px" }}>
        {SERVICES.map((svc, i) => (
          <SvcCard key={i} svc={svc} />
        ))}
      </div>
    </div>
  );
}

function SvcCard({ svc }: { svc: ServiceItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:"rgba(255,255,255,0.03)",
        borderRadius:"22px",
        padding:"28px 24px",
        border:`1px solid ${hovered ? svc.border : "rgba(255,255,255,0.07)"}`,
        display:"flex", flexDirection:"column", gap:"14px",
        transition:"all 0.35s cubic-bezier(0.175,0.885,0.32,1.275)",
        transform: hovered ? "translateY(-6px)" : "none",
        boxShadow: hovered ? `0 16px 40px ${svc.bg}` : "none",
        position:"relative", overflow:"hidden",
      }}
    >
      {/* top accent line on hover */}
      <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg,transparent,${svc.color},transparent)`, opacity: hovered ? 1 : 0, transition:"opacity 0.3s" }} />

      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div style={{ width:"54px", height:"54px", borderRadius:"16px", background:svc.bg, border:`1px solid ${svc.border}`, display:"flex", alignItems:"center", justifyContent:"center", color:svc.color }}>
          {svc.icon}
        </div>
      </div>

      <h4 style={{ fontFamily:"'Tajawal',sans-serif", fontSize:"1.05rem", fontWeight:900, color:"#fff", margin:0 }}>
        {svc.title}
      </h4>
      <p style={{ fontSize:"0.82rem", color:"rgba(255,255,255,0.52)", lineHeight:1.75, margin:0, flex:1 }}>{svc.desc}</p>

      <a
        href="#packages"
        style={{
          display:"inline-flex", alignItems:"center", gap:"7px",
          fontSize:"0.8rem", fontWeight:800, color:svc.color,
          textDecoration:"none", marginTop:"auto",
          transition:"gap 0.25s",
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "14px"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "7px"; }}
      >
        <span>{svc.cta}</span>
        <ArrowLeft size={14} />
      </a>
    </div>
  );
}
