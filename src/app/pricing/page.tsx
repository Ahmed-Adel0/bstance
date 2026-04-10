"use client";
import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle,
  Zap,
  MapPin,
  Star,
  Shield,
  Utensils,
  Dumbbell,
  BarChart3,
  Gift,
  Users,
  Sparkles,
  ChevronDown,
  MessageCircle,
  ArrowLeft,
  Heart,
  Flame,
  Settings,
  Clock,
} from "lucide-react";

const trainingPlans = [
  {
    id: "1month",
    name: "شهر واحد",
    originalPrice: 600,
    discountedPrice: 400,
    saving: 33,
    isPopular: false,
  },
  {
    id: "3months",
    name: "3 أشهر",
    originalPrice: 1800,
    discountedPrice: 1000,
    saving: 44,
    isPopular: true,
  },
  {
    id: "6months",
    name: "6 أشهر",
    originalPrice: 3600,
    discountedPrice: 1900,
    saving: 47,
    isPopular: false,
  },
];

const nutritionPlans = [
  {
    id: "nutr-3",
    name: "3 أشهر تغذية متكاملة",
    originalPrice: 2000,
    discountedPrice: 1200,
    features: [
      "خطة غذائية مخصصة حسب هدفك الرياضي",
      "متابعة شهرية لتقييم التقدم وتعديل النظام",
      "بدائل مرنة تناسب يومك وأسلوب حياتك",
      "توازن دقيق بين الأداء والطاقة والتعافي",
    ],
  },
  {
    id: "nutr-6",
    name: "6 أشهر تغذية شاملة",
    originalPrice: 4000,
    discountedPrice: 2000,
    features: [
      "خطة غذائية متجددة حسب تطور مستواك",
      "متابعة مستمرة لضمان أفضل نتائج",
      "تقارير دورية لقياس الأداء والتقدم",
      "مرونة كاملة في الاختيارات الغذائية",
      "تحليل شامل لعاداتك الغذائية وتصحيحها",
    ],
  },
];

const recoveryServices = [
  {
    id: "rec-1",
    name: "Quick Recovery Session",
    price: 200,
    icon: Zap,
    duration: "30-45 دقيقة",
    target: "الظهر، الرقبة، الكتفين",
    content: "جلسة سريعة لتخفيف الإجهاد العضلي الناتج عن الجلوس الطويل أو استخدام الموبايل، تعيد لك نشاطك وتركيزك خلال وقت قصير.",
    techniques: "Gun Massage + مساج يدوي خفيف لتنشيط الدورة الدموية",
    suitable: "الموظفين، أصحاب العمل المكتبي، كبار السن، أي شخص يعاني من إجهاد يومي بسيط",
    color: "accent",
  },
  {
    id: "rec-2",
    name: "Medium Recovery Session",
    price: 300,
    icon: Heart,
    duration: "45-60 دقيقة",
    target: "الظهر، الذراعين، الكتفين، الرقبة",
    content: "جلسة متوسطة تساعد على فك الشد العضلي وتحسين المرونة، مناسبة للنشاط البدني المنتظم وتقليل الإجهاد المتراكم.",
    techniques: "Gun Massage + أدوات مساج احترافية + مساج يدوي متوسط العمق",
    suitable: "المبتدئين في الرياضة، من يمارسون التمارين بانتظام، أصحاب الأعمال التي تتطلب حركة أو وقوف",
    color: "accent",
  },
  {
    id: "rec-3",
    name: "Deep Recovery Session",
    price: 400,
    icon: Dumbbell,
    duration: "60-75 دقيقة",
    target: "الظهر، الرقبة، الذراعين، الساقين",
    content: "جلسة استشفاء عميق مخصصة للرياضيين لتقليل الإجهاد العضلي وتسريع التعافي بين التمارين وتحسين الأداء.",
    techniques: "Gun Massage + مساج يدوي عميق + أدوات مساج متخصصة + حجامة جافة",
    suitable: "الرياضيين المحترفين، الهواة المتقدمين، لاعبي الألعاب الجماعية والتمارين عالية الشدة",
    color: "accent",
  },
  {
    id: "rec-4",
    name: "Full Body Reset",
    price: 500,
    icon: Flame,
    duration: "75-90 دقيقة",
    target: "الجسم بالكامل",
    content: "جلسة شاملة لإعادة توازن الجسم بالكامل، تساعد على تقليل الإجهاد وتحسين الدورة الدموية وتجديد النشاط العام.",
    techniques: "Gun Massage + حجامة جافة + مساج يدوي عميق + أدوات مساج متخصصة + فوطة نارية + حجامة نارية",
    suitable: "الإجهاد البدني أو الذهني، بداية أو نهاية موسم رياضي، تجهيز العريس قبل المناسبات، جلسة شهرية للحفاظ على الأداء",
    color: "primary",
    badge: "الأكثر شمولاً",
  },
  {
    id: "rec-5",
    name: "حجامة موضعية",
    price: 300,
    icon: Sparkles,
    duration: "30-45 دقيقة",
    target: "منطقة محددة (الظهر أو الساقين)",
    content: "جلسة موجهة لعلاج الألم في منطقة معينة، تساعد على تحسين الدورة الدموية وتقليل الالتهابات العضلية.",
    techniques: "حجامة رطبة باستخدام أدوات معقمة",
    suitable: "الآلام الموضعية، الشد العضلي المستمر، دعم التعافي من الإصابات البسيطة",
    color: "accent",
  },
  {
    id: "rec-6",
    name: "حجامة شاملة",
    price: 400,
    icon: Shield,
    duration: "45-60 دقيقة",
    target: "عدة مناطق بالجسم (الظهر، الكتفين، الساقين)",
    content: "جلسة حجامة متكاملة تساعد على تحسين الدورة الدموية وتقليل الإجهاد العام ودعم الاستشفاء بشكل شامل.",
    techniques: "مساج يدوي خفيف لتنشيط الدورة الدموية + حجامة جافة + حجامة رطبة باستخدام أدوات معقمة",
    suitable: "الرياضيين بعد المنافسات، الإجهاد المزمن، تجهيز العريس قبل المناسبات، جلسة دورية للحفاظ على التوازن البدني",
    color: "primary",
  },
];

const allInOnePlans = [
  {
    id: "allinone-3",
    name: "باقة النخبة (Elite OS)",
    duration: "3 أشهر",
    price: "3200 جنيه",
    originalPrice: "5200 جنيه",
    isCustom: true,
    isHighlighted: false,
    color: "accent",
    features: [
      "نظام B•Stance OS الموحد",
      "برنامج تدريبي هجين (أونلاين + متابعة)",
      "نظام غذائي مرتبط بمعدلات الحرق",
      "جلسة استشفاء شاملة شهرياً",
      "تقرير أداء شهري لتقييم التطور",
    ],
    cta: "ابدأ كـ Elite",
  },
  {
    id: "allinone-6",
    name: "تحويل الأداء الكامل",
    duration: "6 أشهر",
    price: "5900 جنيه",
    originalPrice: "8500 جنيه",
    isCustom: true,
    isHighlighted: true,
    color: "primary",
    features: [
      "إدارة رياضية شاملة 360 درجة",
      "تنسيق كامل بين الفريق الطبي والرياضي",
      "تعديل النظام أسبوعياً حسب النتائج",
      "جلسة ريكافري (Deep Release) شهرياً",
      "أولوية في حجز خدمات الأكاديمية",
    ],
    cta: "تحول الآن",
  },
];

const eliteAssessment = {
  title: "التقييم الرياضي الشامل (Elite Assessment)",
  price: "450 جنيه",
  features: [
    "تحليل InBody متقدم",
    "اختبارات توازن القوام (Posture)",
    "قياس معدلات القوة والتحمل",
    "تقرير فني شامل مع التوصيات",
  ],
  bonus: "خصم 20% على أي باقة عند الاشتراك في نفس اليوم",
};

const whyBstance = [
  {
    icon: Shield,
    title: "إشراف طبي متخصص",
    desc: "متابعة من دكاترة ومدربين معتمدين",
    color: "accent",
  },
  {
    icon: Utensils,
    title: "نظام غذائي مخصص",
    desc: "مصمم حسب هدفك: تنشيف، تضخيم، أو تحسين الأداء",
    color: "accent",
  },
  {
    icon: Dumbbell,
    title: "برنامج تدريبي ذكي",
    desc: "مبني على مستواك وقدرتك البدنية",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "متابعة مستمرة",
    desc: "تقييم وتعديل لضمان أفضل نتيجة",
    color: "accent",
  },
  {
    icon: Gift,
    title: "مكافآت وتحفيز",
    desc: "عروض وهدايا للملتزمين بالبرنامج",
    color: "accent",
  },
  {
    icon: Users,
    title: "تدريب حضوري واستشفاء",
    desc: "متاح في عدة محافظات لخدمة أكبر عدد من اللاعبين",
    color: "accent",
  },
];

const colorStyles: Record<string, { card: string; badge: string; price: string; icon: string; btn: string }> = {
  accent: {
    card: "border-accent/30 hover:border-accent/50",
    badge: "bg-accent/20 text-accent/90 border-accent/30",
    price: "text-accent",
    icon: "bg-accent/10 text-accent border-accent/20",
    btn: "border-accent/40 text-accent hover:bg-accent/10",
  },
  primary: {
    card: "border-primary/40 hover:border-primary/70",
    badge: "bg-primary/20 text-primary border-primary/30",
    price: "text-primary",
    icon: "bg-primary/10 text-primary border-primary/20",
    btn: "bg-primary text-primary-foreground hover:bg-primary/90 green-glow",
  },
};

/* ─── SECTION HEADER ─────────────────────────────────────────────────────── */
function SectionHeader({ label, title, sub }: { label: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-4">
        <Zap className="w-3 h-3" />
        {label}
      </div>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">{title}</h2>
      {sub && <p className="text-muted-foreground max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────────────────── */
export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whatsappLink = "https://wa.me/201234567890";

  return (
    <div className="min-h-screen bg-background" dir="rtl">

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/6 blur-[120px]" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(43,184,202,1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,184,202,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6">
              <Sparkles className="w-3 h-3" />
              باقات وأسعار 2025
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              اختر الباقة المناسبة{" "}
              <span className="text-gradient-hero block sm:inline">لرحلتك الرياضية</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              برامج تدريب وتغذية واستشفاء – مصممة خصيصاً لك بقيادة فريق متخصص من المدربين والأطباء.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#training"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all green-glow"
              >
                <Dumbbell className="w-4 h-4" />
                استكشف الباقات
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-bold text-sm hover:bg-secondary/50 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                تواصل مع مستشار رياضي
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-8">
              {[
                { value: "+500", label: "مشترك نشط" },
                { value: "98%", label: "نسبة الرضا" },
                { value: "5", label: "مدن مصرية" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#training"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce cursor-pointer z-20"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 space-y-28">

        {/* ══════════════════════ ALL-IN-ONE (SPORTS OS) ══════════════════════ */}
        <section id="allinone" className="scroll-mt-32">
          <SectionHeader
            label="نظام التشغيل الرياضي (Sports OS)"
            title={<>الباقة الشاملة: <span className="text-gradient-hero">التحول الكامل</span></>}
            sub="منظومة متكاملة من التدريب والتغذية والاستشفاء – الحل الأكثر احترافية والأعلى طلباً"
          />

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {allInOnePlans.map((plan) => {
              return (
                <div
                  key={plan.id}
                  className={`relative glass-card rounded-2xl p-7 border flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 w-full md:w-[calc(50%-12px)] max-w-md ${
                    plan.isHighlighted
                      ? "border-primary/60 shadow-lg shadow-primary/10"
                      : "border-border"
                  }`}
                >
                  {plan.isHighlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold bg-primary text-primary-foreground flex items-center gap-1.5 shadow-lg shadow-primary/30">
                      <Star className="w-3 h-3 fill-current" />
                      الأفضل قيمة  
                    </div>
                  )}

                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{plan.name}</div>
                    <div className="text-2xl font-black">{plan.duration}</div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl font-black text-primary">
                      {plan.price}
                    </div>
                    {plan.originalPrice && (
                      <div className="text-muted-foreground text-xs line-through decoration-primary/30">
                        السعر الأصلي: {plan.originalPrice}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-2.5">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                      plan.isHighlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 green-glow"
                        : "border border-border hover:bg-secondary/50"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              );
            })}
          </div>

          {/* How it works box */}
          <div className="mt-8 relative overflow-hidden rounded-2xl bg-[#0d1326] border border-primary/20 p-7">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 animate-pulse">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-black text-xl mb-2">آلية عمل نظام B•Stance الموحد</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  هذا النظام يعني أنك تعمل معنا كـ{" "}
                  <span className="text-primary font-semibold">"منظومة متكاملة"</span>. سنقوم بالتنسيق بين مدربك، أخصائي التغذية، وأخصائي الريكافري لضمان أن كل جلسة استشفاء تخدم برنامجك التدريبي. لا مزيد من العشوائية، كل شيء محسوب بدقة.
                </p>
              </div>
              <Link
                href="/how-it-works"
                className="px-6 py-3 rounded-xl bg-secondary border border-border text-sm font-bold hover:bg-secondary/70 transition-all"
              >
                اعرف المزيد
              </Link>
            </div>
          </div>

          {/* Special Up-sell for 11 Apr Event */}
          <div className="mt-12 glass-card rounded-3xl p-8 border border-accent/40 bg-gradient-to-r from-accent/5 to-transparent flex flex-wrap items-center justify-between gap-6 relative overflow-hidden">
             <div className="absolute -left-10 -bottom-10 opacity-5">
                <Star className="w-40 h-40" />
             </div>
             <div className="relative z-10 max-w-lg">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-black mb-3">
                   عرض خاص لحدث 11 أبريل
                </div>
                <h3 className="text-2xl font-black mb-2">ابدأ بتقييم النخبه (Elite Assessment)</h3>
                <p className="text-sm text-muted-foreground">احصل على تحليل شامل لجسمك، قوامك، وأدائك البدني. تقرير مفصل يضعك على الطريق الصحيح.</p>
             </div>
             <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="text-3xl font-black text-accent">{eliteAssessment.price}</div>
                <Link href="/event/swimming" className="px-8 py-3 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/20 hover:scale-105 transition-all">
                   احجز مكانك في الحدث
                </Link>
             </div>
          </div>
        </section>

        {/* ══════════════════════ TRAINING PACKAGES ══════════════════════ */}
        <section id="training" className="scroll-mt-32">
          <SectionHeader
            label="تدريب أونلاين"
            title={<>باقات <span className="text-gradient-hero">التدريب الأونلاين</span></>}
            sub="برامج تدريب مخصصة مع متابعة يومية من المدربين المتخصصين"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {trainingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative glass-card rounded-2xl p-7 flex flex-col gap-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${
                  plan.isPopular ? "border-primary/50" : "border-border"
                }`}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold bg-primary text-primary-foreground flex items-center gap-1.5 shadow-lg shadow-primary/30">
                    <Star className="w-3 h-3 fill-current" />
                    الأوفر
                  </div>
                )}

                {/* Saving badge */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-sm text-muted-foreground mb-0.5">مدة الاشتراك</div>
                    <div className="text-2xl font-black">{plan.name}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent/90 border border-accent/20">
                    وفر {plan.saving}%
                  </span>
                </div>

                {/* Pricing */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-primary">{plan.discountedPrice.toLocaleString()}</span>
                    <span className="text-muted-foreground text-sm">ج.م</span>
                  </div>
                  <div className="text-muted-foreground text-sm line-through">
                    السعر الأصلي: {plan.originalPrice.toLocaleString()} ج.م
                  </div>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-2.5">
                  {[
                    "برنامج تدريبي مخصص",
                    "متابعة يومية مع المدرب",
                    "تقارير أداء دورية",
                    "تعديل البرنامج حسب التقدم",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                    plan.isPopular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 green-glow"
                      : "border border-border hover:bg-secondary/50 hover:border-primary/30"
                  }`}
                >
                  اختر الباقة
                </a>
              </div>
            ))}
          </div>

                    {/* Offline note */}
          <div className="mt-8 flex items-start gap-3 p-5 rounded-xl bg-secondary/40 border border-border">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold mb-0.5">التدريب الاوفلاين متاح أيضاً</div>
              <div className="text-xs text-muted-foreground">
                متاح التدريب الأوفلاين حضورياً حسب موقعك الجغرافي:{" "}
                <span className="text-primary font-medium">طناح – المنصورة – الزقازيق – طنطا – المحلة الكبرى</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════ NUTRITION PACKAGES ══════════════════════ */}
        <section id="nutrition" className="scroll-mt-32">
          <SectionHeader
            label="تغذية"
            title={<>باقات <span className="text-gradient-hero">التغذية</span> المُخصصة</>}
            sub="خطط تغذية مدروسة مع متابعة مستمرة من أخصائيي التغذية"
          />

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {nutritionPlans.map((plan, idx) => (
              <div
                key={plan.id}
                className={`relative glass-card rounded-2xl p-7 border flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 w-full md:w-[calc(50%-12px)] max-w-md ${
                  idx === 1 ? "border-primary/40" : "border-border"
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-bold bg-primary text-primary-foreground flex items-center gap-1.5 shadow-lg shadow-primary/30">
                    <Star className="w-3 h-3 fill-current" />
                    الأفضل قيمة
                  </div>
                )}

                <div>
                  <div className="text-xl font-black mb-1">{plan.name}</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-primary">{plan.discountedPrice.toLocaleString()}</span>
                    <span className="text-muted-foreground text-sm">ج.م</span>
                  </div>
                  <div className="text-muted-foreground text-sm line-through">
                    السعر الأصلي: {plan.originalPrice.toLocaleString()} ج.م
                  </div>
                  <div className="text-xs text-primary font-semibold">
                    وفر {Math.round((1 - plan.discountedPrice / plan.originalPrice) * 100)}%
                  </div>
                </div>

                <div className="flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                    idx === 1
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 green-glow"
                      : "border border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                >
                  اختر الباقة
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════ RECOVERY SERVICES ══════════════════════ */}
        <section id="recovery" className="scroll-mt-32">
          <SectionHeader
            label="Recovery"
            title={<>جلسات <span className="text-gradient-hero">الاستشفاء والحجامة</span></>}
            sub="اختر ما يناسب جسمك ومستواك الرياضي"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {recoveryServices.map((svc) => {
              const cs = colorStyles[svc.color];
              const IconComp = svc.icon;
              return (
                <div
                  key={svc.id}
                  className={`glass-card rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cs.card}`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${cs.icon}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    {svc.badge && (
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${cs.badge}`}>
                        {svc.badge}
                      </span>
                    )}
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-md">
                        <Clock className="w-2.5 h-2.5" />
                        {svc.duration}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="font-black text-xl mb-1">{svc.name}</div>
                  </div>

                  <div className="flex-1 space-y-3">
                    {[
                      { value: svc.content, isPrimary: true },
                      { label: "التقنيات:", value: svc.techniques },
                      { label: "المنطقة:", value: svc.target },
                      { label: "مناسب لـ:", value: svc.suitable },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                        <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${svc.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                        <div className="text-muted-foreground">
                          {item.label && <span className="font-bold text-foreground/90 ml-1">{item.label}</span>}
                          <span className={item.isPrimary ? "text-foreground font-medium" : "text-muted-foreground"}>{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <span className={`text-3xl font-black ${cs.price}`}>{svc.price}</span>
                      <span className="text-muted-foreground text-xs mr-1">ج.م</span>
                    </div>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${cs.btn}`}
                    >
                      احجز الآن
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Discount and Up-sell banners */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="relative overflow-hidden rounded-2xl border border-dashed border-primary/50 bg-primary/5 p-6">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/10 blur-[60px] pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-black text-lg text-primary mb-1">عرض الاستشفاء المزدوج</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    عند حجز سيشن الحجامة مع سيشن الريكافري في باقة واحدة، تحصل على{" "}
                    <span className="text-primary font-bold">خصم 30%</span> على الباقة.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-dashed border-accent/50 bg-accent/5 p-6">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-accent/10 blur-[60px] pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <Utensils className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-black text-lg text-accent mb-1">تطور أسرع مع التغذية</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    الاستشفاء يبدأ من الداخل! احصل على <span className="text-accent font-bold">خصم 20%</span> على باقات التغذية عند حجز أي جلسة استشفاء اليوم.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ══════════════════════ WHY BSTANCE ══════════════════════ */}
        <section id="why" className="scroll-mt-32">
          <SectionHeader
            label="مميزاتنا"
            title={<>لماذا تختار <span className="text-gradient-hero">B•Stance؟</span></>}
            sub="نقدم تجربة رياضية متكاملة تجمع بين العلم والاحترافية"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyBstance.map((item) => {
              const cs = colorStyles[item.color];
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className={`glass-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${cs.card}`}
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${cs.icon}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="font-black text-base mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════ FAQ ══════════════════════ */}
        <section id="faq" className="scroll-mt-32">
          <SectionHeader
            label="أسئلة شائعة"
            title={<>أسئلة <span className="text-gradient-hero">يسألها الجميع</span></>}
          />

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "هل يمكن إلغاء الاشتراك في أي وقت؟",
                a: "نعم، يمكنك الإلغاء في أي وقت بدون رسوم إضافية.",
              },
              {
                q: "هل التقييم الأولي مجاني؟",
                a: "نعم، التقييم الشامل مجاني وبدون التزامات.",
              },
              {
                q: "هل يمكن تغيير الباقة لاحقاً؟",
                a: "بالطبع، يمكنك الترقية أو التخفيض في أي وقت حسب احتياجاتك.",
              },
              {
                q: "كيف يتم الدفع؟",
                a: "نقبل Fawry, Vodafone Cash, Instapay وجميع البطاقات البنكية.",
              },
              {
                q: "هل يمكنني الجمع بين تدريب أونلاين وحضوري؟",
                a: "نعم، الباقة الشاملة تشمل التدريب الأونلاين والحضوري في نفس الوقت.",
              },
              {
                q: "ما هي المدن المتاح فيها التدريب الحضوري؟",
                a: "طناح – المنصورة – الزقازيق – طنطا – المحلة الكبرى، ونتوسع باستمرار.",
              },
            ].map((faq, i) => (
              <button
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full glass-card rounded-xl border border-border hover:border-primary/30 transition-all text-right"
              >
                <div className="flex items-center justify-between p-5">
                  <span className="font-semibold text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground flex-shrink-0 mr-3 transition-transform ${openFaq === i ? "rotate-180 text-primary" : ""}`}
                  />
                </div>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground text-right leading-relaxed border-t border-border/50 pt-4">
                    {faq.a}
                  </div>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* ══════════════════════ CTA FINAL ══════════════════════ */}
        <section>
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-10 md:p-16 text-center">
            {/* Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-6">
                <Clock className="w-3 h-3" />
                ابدأ رحلتك اليوم
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                جاهز تبدأ <span className="text-gradient-hero">رحلتك الرياضية؟</span>
              </h2>

              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                تواصل معنا الآن واحصل على استشارة مجانية لاختيار الباقة المناسبة لأهدافك ومستواك الرياضي.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all green-glow text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  تواصل معنا عبر واتساب
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border font-bold hover:bg-secondary/50 transition-all text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  العودة للرئيسية
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
