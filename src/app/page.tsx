import Link from "next/link";
import {
  Dumbbell,
  Salad,
  Heart,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
  Play,
} from "lucide-react";

const stats = [
  { value: "500+", label: "لاعب نشط" },
  { value: "20+", label: "أكاديمية شريكة" },
  { value: "95%", label: "نسبة الرضا" },
  { value: "3x", label: "تحسن الأداء" },
];

const services = [
  {
    icon: Dumbbell,
    title: "التدريب",
    color: "green",
    desc: "برامج تدريبية مخصصة لكل لاعب بناءً على تقييم شامل للأداء، تتضمن تمارين يومية وجلسات مباشرة.",
    features: ["Online & Offline", "مراقبة فورية", "تعديل تلقائي"],
  },
  {
    icon: Salad,
    title: "التغذية",
    color: "blue",
    desc: "خطط غذائية علمية مصممة لدعم الأداء الرياضي، متابعة السعرات وتحليل التغذية اليومية.",
    features: ["خطط مخصصة", "تتبع السعرات", "استشارات أخصائيين"],
  },
  {
    icon: Heart,
    title: "الاستشفاء",
    color: "yellow",
    desc: "جلسات استشفاء احترافية Offline لتقليل الإصابات وتحسين الأداء على المدى الطويل.",
    features: ["جلسات حضورية", "متابعة الإرهاق", "توصيات طبية"],
  },
];

const testimonials = [
  {
    name: "أحمد محمود",
    role: "لاعب كرة قدم – 16 سنة",
    text: "بعد 3 شهور مع B•Stance، تحسنت سرعتي بشكل ملحوظ. البرنامج المتكامل بين التدريب والتغذية غيّر كل شيء.",
    rating: 5,
  },
  {
    name: "أ. كريم سالم",
    role: "مدير أكاديمية المستقبل",
    text: "نظام رائع لمتابعة اللاعبين. نستطيع الآن تتبع أداء 80 لاعب بشكل يومي بدقة عالية.",
    rating: 5,
  },
  {
    name: "سارة أحمد",
    role: "لاعبة جيم – 22 سنة",
    text: "التغذية والتدريب في مكان واحد. الدعم المستمر من الفريق جعل رحلتي أسهل بكثير.",
    rating: 5,
  },
];

const colorMap: Record<string, string> = {
  green: "text-primary bg-primary/10 border-primary/20",
  blue: "text-accent bg-accent/10 border-accent/20",
  yellow: "text-foreground bg-foreground/10 border-foreground/20",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary pulse-green" />
                منصة رقم 1 لإدارة الأداء الرياضي في مصر
              </div>

              {/* Headline */}
              <h1 className="text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                حوّل أداءك{" "}
                <span className="text-gradient-hero">الرياضي</span>
                <br />
                بمنهج علمي متكامل
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                B•Stance تجمع التدريب والتغذية والاستشفاء في منظومة واحدة مصممة خصيصاً للاعبين الناشئين وأكاديميات الرياضة في مصر.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/onboarding"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all spotlight shadow-xl shadow-primary/20"
                >
                  ابدأ رحلتك مجاناً
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border text-foreground font-medium text-base hover:bg-secondary transition-all"
                >
                  <Play className="w-4 h-4" />
                  شاهد كيف تعمل
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["تقييم مجاني", "بدون عقود", "دعم 24/7"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="glass-card spotlight rounded-2xl p-6 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold">لوحة أداء اللاعب</span>
                  <span className="text-xs text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded-full">● مباشر</span>
                </div>
                {/* Mini charts */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "اللياقة", val: 87, color: "bg-primary" },
                    { label: "التغذية", val: 72, color: "bg-accent" },
                    { label: "الاستشفاء", val: 91, color: "bg-foreground/50" },
                  ].map((m) => (
                    <div key={m.label} className="bg-secondary/50 rounded-xl p-3 text-center">
                      <div className="text-xl font-bold">{m.val}%</div>
                      <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                      <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
                        <div
                          className={`h-full rounded-full ${m.color}`}
                          style={{ width: `${m.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Training plan */}
                <div className="space-y-2">
                  {[
                    { name: "تدريب السرعة", done: true },
                    { name: "التغذية – الغداء", done: true },
                    { name: "جلسة استشفاء", done: false },
                  ].map((t) => (
                    <div key={t.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-secondary/30">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${t.done ? "border-primary bg-primary" : "border-border"}`}>
                        {t.done && <CheckCircle className="w-2.5 h-2.5 text-primary-foreground" />}
                      </div>
                      <span className={`text-sm ${t.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                        {t.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 glass-card spotlight rounded-xl p-3 flex items-center gap-3 border border-primary/30 shadow-xl">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary-foreground z-10" />
                </div>
                <div className="z-10">
                  <div className="text-xs font-semibold">تحسن الأداء</div>
                  <div className="text-lg font-black text-primary">+34%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-gradient-green">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-4">
              <Zap className="w-3 h-3" />
              منظومة متكاملة
            </div>
            <h2 className="text-4xl font-black tracking-tight">
              ثلاثة محاور،{" "}
              <span className="text-gradient-hero">نتيجة واحدة</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              كل محور مصمم ليكمل الآخر. التدريب يحتاج تغذية صحيحة، والتغذية لا تكتمل بدون استشفاء فعّال.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${colorMap[s.color]}`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  اعرف أكثر <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-sports border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black tracking-tight">كيف تبدأ رحلتك؟</h2>
            <p className="text-muted-foreground mt-4">خطوات بسيطة توصلك لأقصى إمكاناتك</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "تقييم شامل", desc: "أجب على استبيان تقييم الأداء ليتعرف الفريق على مستواك." },
              { step: "02", title: "اختر باقتك", desc: "نخصص لك برنامجاً متكاملاً يناسب هدفك وميزانيتك." },
              { step: "03", title: "ابدأ التدريب", desc: "تمارين يومية، خطة غذائية، وجلسات استشفاء منسقة." },
              { step: "04", title: "تابع التقدم", desc: "لوحة تحكم تتابع تطورك يومياً مع تقارير أسبوعية." },
            ].map((s) => (
              <div key={s.step} className="relative glass-card rounded-xl p-5">
                <div className="text-4xl font-black text-primary/20 mb-3">{s.step}</div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black tracking-tight">
              ماذا يقول <span className="text-gradient-green">لاعبونا</span>؟
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="glass-card rounded-3xl p-12 border border-primary/20">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-4xl font-black tracking-tight mb-4">
              جاهز تبدأ رحلتك؟
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              انضم لمئات اللاعبين الذين حولوا أداءهم مع B•Stance. التقييم مجاني وبدون التزامات.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/onboarding"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all green-glow"
              >
                ابدأ التقييم المجاني
              </Link>
              <Link
                href="/academy"
                className="px-8 py-4 rounded-xl border border-blue-500/30 text-blue-400 font-medium hover:bg-blue-500/10 transition-all"
              >
                للأكاديميات والمدارس
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img src="/imgs/Logo.png" alt="BStance Logo" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                منظومة متكاملة لإدارة الأداء الرياضي في السوق المصري.
              </p>
            </div>
            {[
              {
                title: "المنصة",
                links: ["الخدمات", "الأسعار", "النتائج", "المدونة"],
              },
              {
                title: "للمتخصصين",
                links: ["بورتال المدرب", "أخصائي التغذية", "الاستشفاء", "الأكاديميات"],
              },
              {
                title: "الشركة",
                links: ["من نحن", "تواصل معنا", "سياسة الخصوصية", "الشروط"],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-sm font-semibold mb-3">{col.title}</div>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2024 B•Stance. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-4">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">صُنع بـ ❤️ لأبطال المستقبل</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
