"use client";
import Link from "next/link";
import { CheckCircle, Zap, Building2, Star } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    nameAr: "البداية",
    price: "299",
    period: "شهرياً",
    desc: "مناسب للمبتدئين والراغبين في تجربة المنصة",
    badge: null,
    color: "blue",
    features: [
      "برنامج تدريب أسبوعي",
      "خطة غذائية أساسية",
      "تتبع التقدم",
      "تواصل مع المدرب (أسبوعياً)",
      "تقارير شهرية",
    ],
    notIncluded: ["جلسات استشفاء", "تواصل يومي", "برامج متقدمة"],
  },
  {
    id: "pro",
    name: "Pro",
    nameAr: "الاحترافي",
    price: "599",
    period: "شهرياً",
    desc: "الأكثر شيوعاً – للاعبين الجادين",
    badge: "الأكثر شيوعاً",
    color: "green",
    features: [
      "برنامج تدريب يومي مخصص",
      "خطة غذائية متكاملة",
      "2 جلسة استشفاء / شهر",
      "تواصل يومي مع المتخصصين",
      "تتبع الأداء المتقدم",
      "تقارير أسبوعية تفصيلية",
      "تعديل البرامج كل أسبوعين",
    ],
    notIncluded: ["جلسات استشفاء غير محدودة"],
  },
  {
    id: "elite",
    name: "Elite",
    nameAr: "النخبة",
    price: "999",
    period: "شهرياً",
    desc: "لأعلى مستوى من الأداء والمتابعة",
    badge: "الأفضل للمحترفين",
    color: "yellow",
    features: [
      "كل مزايا Pro",
      "جلسات استشفاء غير محدودة",
      "مدرب شخصي مخصص",
      "أخصائي تغذية خاص",
      "تحليل بيومكانيكي",
      "خطة المباريات والمنافسات",
      "تقارير أداء شاملة",
      "دعم 24/7",
    ],
    notIncluded: [],
  },
];

const academyPlans = [
  {
    name: "أكاديمية صغيرة",
    players: "حتى 30 لاعب",
    price: "2,499",
    period: "شهرياً",
  },
  {
    name: "أكاديمية متوسطة",
    players: "حتى 80 لاعب",
    price: "5,999",
    period: "شهرياً",
  },
  {
    name: "أكاديمية كبيرة",
    players: "أكثر من 80 لاعب",
    price: "مخصص",
    period: "تواصل معنا",
  },
];

const colorMap: Record<string, string> = {
  green: "border-green-500/40 bg-green-500/5",
  blue: "border-blue-500/20 bg-blue-500/5",
  yellow: "border-yellow-500/30 bg-yellow-500/5",
};

const badgeColor: Record<string, string> = {
  green: "bg-green-500/20 text-green-400 border-green-500/30",
  blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-black tracking-tight mb-4">
              باقات <span className="text-gradient-hero">مرنة</span> بأسعار مصرية
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              استثمار في أدائك الرياضي بقيمة تناسب ميزانيتك
            </p>
          </div>

          {/* Individual Plans */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {plans.map((p) => (
              <div
                key={p.id}
                className={`relative rounded-2xl border p-6 flex flex-col gap-5 transition-all ${colorMap[p.color]}`}
              >
                {p.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold border ${badgeColor[p.color]}`}>
                    <Star className="w-3 h-3 inline mr-1" />
                    {p.badge}
                  </div>
                )}
                <div>
                  <div className="text-xs font-medium text-muted-foreground mb-1">{p.name}</div>
                  <div className="text-2xl font-black">{p.nameAr}</div>
                  <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                </div>
                <div>
                  <span className="text-4xl font-black">{p.price}</span>
                  <span className="text-muted-foreground text-sm mr-1"> جنيه / {p.period}</span>
                </div>
                <div className="flex-1 space-y-2">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                  {p.notIncluded.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground text-right border-r-2 border-transparent">
                      <div className="w-3.5 h-3.5 rounded-full border border-border flex-shrink-0 mt-0.5" />
                      <span className="line-through">{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/onboarding"
                  className={`text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    p.color === "green"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 green-glow"
                      : "border border-border hover:bg-secondary"
                  }`}
                >
                  ابدأ بهذه الباقة
                </Link>
              </div>
            ))}
          </div>

          {/* Academy Plans */}
          <div className="glass-card rounded-3xl p-8 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-black">باقات الأكاديميات (B2B)</h2>
                <p className="text-xs text-muted-foreground">لإدارة الفرق والأكاديميات الرياضية</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {academyPlans.map((a) => (
                <div key={a.name} className="bg-secondary/40 rounded-xl p-5">
                  <h3 className="font-semibold mb-1">{a.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{a.players}</p>
                  <div className="text-2xl font-black mb-0.5">{a.price}</div>
                  <div className="text-xs text-muted-foreground">{a.period !== "مخصص" ? `جنيه / ${a.period}` : a.period}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/academy"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-500/10 transition-all text-sm"
              >
                <Building2 className="w-4 h-4" />
                تعرف أكثر على شراكات الأكاديميات
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-14">
            <h2 className="text-2xl font-black mb-6 text-center">أسئلة شائعة</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { q: "هل يمكن إلغاء الاشتراك في أي وقت؟", a: "نعم، يمكنك الإلغاء في أي وقت بدون رسوم إضافية." },
                { q: "هل التقييم الأولي مجاني؟", a: "نعم، التقييم الشامل مجاني وبدون التزامات." },
                { q: "هل يمكن تغيير الباقة لاحقاً؟", a: "بالطبع، يمكنك الترقية أو التخفيض في أي وقت." },
                { q: "كيف يتم الدفع؟", a: "نقبل Fawry, Vodafone Cash, Instapay وجميع البطاقات." },
              ].map((f) => (
                <div key={f.q} className="glass-card rounded-xl p-5">
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold mb-1 text-right">{f.q}</div>
                      <div className="text-xs text-muted-foreground text-right">{f.a}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
