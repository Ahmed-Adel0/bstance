import Link from "next/link";
import { ArrowRight, CheckCircle, Dumbbell, Salad, Heart, BarChart3, Zap, User, ClipboardList, CreditCard, LayoutDashboard } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: User,
    title: "دخول الموقع واختيار البدء",
    desc: "تزور الموقع وتضغط 'ابدأ الآن' – لا يحتاج تسجيل مسبق، فقط قرار البدء.",
    color: "green",
    details: ["الصفحة الرئيسية تعرض قيمة المنصة", "CTA واضح يقود للتقييم", "لا حاجة لبيانات مسبقة"],
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "استبيان التقييم الشامل",
    desc: "تملأ استبيان ذكي يحلل مستواك ومتطلباتك في التدريب والتغذية والاستشفاء.",
    color: "blue",
    details: ["بيانات شخصية واللياقة البدنية", "الأهداف الرياضية والتغذوية", "التاريخ الطبي والإصابات"],
  },
  {
    num: "03",
    icon: CreditCard,
    title: "اختيار الباقة المناسبة",
    desc: "نظامنا يقترح أفضل باقة تناسب أهدافك، وتتم عملية الدفع بشكل رقمي آمن.",
    color: "yellow",
    details: ["ترشيح ذكي للباقة", "باقات متنوعة (Starter, Pro, Elite)", "دفع إلكتروني فوري"],
  },
  {
    num: "04",
    icon: LayoutDashboard,
    title: "بناء البورتال المخصص",
    desc: "بمجرد الاشتراك، يتم إنشاء ملفك الشخصي ومنصة تواصل متكاملة مع المتخصصين.",
    color: "green",
    details: ["تفعيل بوابة اللاعب", "تعيين مدرب وأخصائي تغذية", "مركز تواصل (Chat) فوري"],
  },
  {
    num: "05",
    icon: Dumbbell,
    title: "تلقي الخطط وبدء التنفيذ",
    desc: "تصلك خطط التدريب والتغذية وتتبع تنفيذها يومياً مع توجيهات لحظية.",
    color: "blue",
    details: ["فيديوهات شرح التمارين", "مواعيد وجبات دقيقة", "تتبع تنفيذ المهمات (Checklist)"],
  },
  {
    num: "06",
    icon: BarChart3,
    title: "التقييم الدوري والتطور",
    desc: "نراقب نتائجك ونعدل الخطط دورياً لضمان استمرار التحسن والوصول لمستواك الأقصى.",
    color: "yellow",
    details: ["اختبارات أداء شهرية", "تعديل الخطط حسب السرعة", "تقارير تقدم مفصلة"],
  },
];

const pillars = [
  { icon: Dumbbell, label: "التدريب", desc: "برامج قوة وسرعة مبنية على أحدث الأبحاث العلمية." },
  { icon: Salad, label: "التغذية", desc: "خطط وجبات مخصصة لتحسين الأداء وسرعة الاستشفاء." },
  { icon: Heart, label: "الاستشفاء", desc: "بروتوكولات علمية لتقليل مخاطر الإصابات وتحسين الراحة." },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/10 to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/80 border border-border text-xs font-bold text-primary mb-6">
            <Zap className="w-3.5 h-3.5" />
            رحلتك نحو القمة تبدأ من هنا
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            كيف <span className="text-gradient-hero">تعمل</span> المنصة؟
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            نحن ندمج العلم بالتكنولوجيا لنقدم لك تجربة رياضية متكاملة. اكتشف كيف نحول بياناتك إلى نتائج ملموسة على أرض الملعب.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/onboarding" className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20">
              ابدأ الآن
            </Link>
            <Link href="/services" className="px-8 py-4 rounded-xl bg-secondary border border-border font-bold hover:bg-secondary/70 transition-all">
              اكتشف الخدمات
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">التكامل الثلاثي</h2>
            <p className="text-muted-foreground">سر التميز يكمن في التوازن بين الأركان الأساسية الثلاثة</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((p) => (
              <div key={p.label} className="glass-card p-8 rounded-2xl border border-border text-center group hover:border-primary/40 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <p.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-black mb-3">{p.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Flow */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-black mb-4">خطواتك للوصول للاحترافية</h2>
             <p className="text-muted-foreground">نظام B•Stance مصمم ليكون سهلاً، فعالاً، ومواكباً لكل تحسن تحققه.</p>
          </div>

          <div className="space-y-12 relative">
             {/* Timeline path vertical */}
             <div className="absolute top-0 bottom-0 right-[27px] w-0.5 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent hidden md:block" />

             {steps.map((step, i) => (
               <div key={step.num} className="relative md:pr-20 group">
                  {/* Step unit desktop */}
                  <div className={`absolute top-0 right-0 w-14 h-14 rounded-full border-2 border-border bg-background flex items-center justify-center z-10 transition-all group-hover:border-primary/50 group-hover:scale-110 hidden md:flex`}>
                     <span className="text-lg font-black">{step.num}</span>
                  </div>

                  <div className="glass-card rounded-2xl p-8 border border-border group-hover:border-primary/20 transition-all relative overflow-hidden">
                     {/* Step background pattern */}
                     <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
                     
                     <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                          step.color === 'green' ? 'bg-green-500/10 text-green-400' : 
                          step.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-yellow-500/10 text-yellow-400'
                        }`}>
                           <step.icon className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                           <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-xl font-black">{step.title}</h3>
                              <span className="md:hidden w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs font-black">{step.num}</span>
                           </div>
                           <p className="text-muted-foreground mb-4 leading-relaxed">{step.desc}</p>
                           <div className="grid sm:grid-cols-3 gap-3">
                              {step.details.map((d) => (
                                <div key={d} className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-muted-foreground">
                                   <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                                   {d}
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8">هل أنت مستعد لهذه النقلة؟</h2>
          <p className="text-muted-foreground text-lg mb-10">البيانات لا تخدع، العلم يؤدي للنتائج، والعمل يبدأ الآن.</p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/onboarding" className="px-10 py-5 rounded-xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center gap-3">
                ابدأ رحلتك
                <ArrowRight className="w-5 h-5 -rotate-180" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
