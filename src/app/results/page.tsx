import Link from "next/link";
import { Star, TrendingUp, Dumbbell, Salad, Heart, ChevronRight, Zap, Target, Award, Users } from "lucide-react";

const caseStudies = [
  {
    name: "محمد كريم",
    age: 16,
    sport: "كرة قدم",
    duration: "4 أشهر",
    icon: Dumbbell,
    color: "green",
    before: { speed: "28 كم/ساعة", strength: "72 كجم سكوات", recovery: "48 ساعة" },
    after: { speed: "34 كم/ساعة", strength: "95 كجم سكوات", recovery: "24 ساعة" },
    improvement: "+21%",
    quote: "B•Stance غيّرت طريقة تفكيري في التدريب. البرنامج المتكامل جعلني أتحسن بشكل لم أتخيله.",
    tags: ["تدريب", "تغذية", "استشفاء"],
  },
  {
    name: "يوسف علي",
    age: 14,
    sport: "سباحة",
    duration: "3 أشهر",
    icon: Heart,
    color: "blue",
    before: { speed: "1:15 دقيقة/م", strength: "45 كجم", recovery: "24 ساعة" },
    after: { speed: "1:05 دقيقة/م", strength: "62 كجم", recovery: "12 ساعة" },
    improvement: "+15%",
    quote: "لم أكن أتخيل أن التغذية العلمية تؤدي لهذا الفارق الشاسع في الأداء داخل حمام السباحة.",
    tags: ["تغذية", "أداء"],
  },
  {
    name: "أحمد رامي",
    age: 17,
    sport: "ألعاب قوى",
    duration: "6 أشهر",
    icon: Award,
    color: "yellow",
    before: { speed: "11.5 ثانية (100م)", strength: "80 كجم", recovery: "72 ساعة" },
    after: { speed: "10.8 ثانية (100م)", strength: "110 كجم", recovery: "36 ساعة" },
    improvement: "+35%",
    quote: "نظام الاستشفاء مع B•Stance هو السر الحقيقي وراء قدرتي على التدريب بكثافة دون إصابات.",
    tags: ["استشفاء", "قوة"],
  },
];

const mainStats = [
  { label: "لاعب ناجح", value: "1,200+", icon: Users },
  { label: "من البرامج المكتملة", value: "98%", icon: CheckCircle },
  { label: "معدل التحسن البدني", value: "24%", icon: TrendingUp },
  { label: "إصابات تم تجنبها", value: "140+", icon: Heart },
];

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">البيانات <span className="text-gradient-hero">تتحدث</span></h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 font-bold leading-loose">اكتشف كيف ساهم نظام B•Stance العلمي في تطوير أداء مئات الرياضيين وتحويل أهدافهم إلى حقائق ملموسة.</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {mainStats.map((s) => (
                    <div key={s.label} className="glass-card p-6 rounded-2xl border border-border group hover:border-primary/20 transition-all cursor-default">
                        <div className="w-12 h-12 rounded-xl bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <s.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-3xl font-black mb-1">{s.value}</div>
                        <div className="text-xs text-muted-foreground font-black tracking-tight">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black mb-16 text-right">وثائق النجاح (Case Studies)</h2>
            <div className="space-y-12">
                {caseStudies.map((cs) => (
                    <div key={cs.name} className="glass-card rounded-[32px] border border-border bg-background/40 p-8 md:p-12 relative overflow-hidden group">
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                        
                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-105 transition-transform border border-border">
                                        <cs.icon className={`w-7 h-7 ${cs.color === 'green' ? 'text-green-400' : cs.color === 'blue' ? 'text-blue-400' : 'text-yellow-400'}`} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black">{cs.name}</h3>
                                        <div className="text-sm text-muted-foreground font-bold tracking-tight">{cs.age} سنة | {cs.sport} | {cs.duration}</div>
                                    </div>
                                </div>
                                <blockquote className="text-lg md:text-xl font-bold leading-relaxed mb-6 italic text-muted-foreground">
                                    &quot;{cs.quote}&quot;
                                </blockquote>
                                <div className="flex gap-2">
                                    {cs.tags.map((t) => (
                                        <span key={t} className="px-3 py-1 rounded-full bg-secondary/80 border border-border text-[10px] font-black uppercase text-secondary-foreground">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-secondary/20 rounded-2xl p-5 border border-border">
                                        <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground mb-3">قبل الاشتراك</div>
                                        <div className="space-y-2">
                                            {Object.entries(cs.before).map(([key, val]) => (
                                                <div key={key} className="flex items-center justify-between gap-10">
                                                    <span className="text-[10px] font-bold opacity-60 uppercase">{key === 'speed' ? 'السرعة' : key === 'strength' ? 'القوة' : 'الاستشفاء'}</span>
                                                    <span className="text-xs font-black line-through text-muted-foreground">{val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-primary/5 rounded-2xl p-5 border border-primary/20">
                                        <div className="text-[10px] uppercase font-black tracking-widest text-primary mb-3">بـعد B•Stance</div>
                                        <div className="space-y-2">
                                            {Object.entries(cs.after).map(([key, val]) => (
                                                <div key={key} className="flex items-center justify-between gap-10">
                                                    <span className="text-[10px] font-bold opacity-60 uppercase">{key === 'speed' ? 'السرعة' : key === 'strength' ? 'القوة' : 'الاستشفاء'}</span>
                                                    <span className="text-xs font-black text-primary">{val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-2xl border border-border flex items-center justify-between">
                                    <div>
                                        <div className="text-[10px] font-black uppercase text-muted-foreground tracking-widest mb-1">صافي التحسن العام</div>
                                        <div className="text-4xl font-black text-primary tracking-tighter">{cs.improvement}</div>
                                    </div>
                                    <div className="flex -space-x-1">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} className="w-4 h-4 fill-primary text-primary" />
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

      {/* Trust Quote */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black mb-8">الرحلة للقمة علمية 100%</h2>
            <div className="grid md:grid-cols-2 gap-8 text-right">
                <div className="glass-card p-6 rounded-2xl border border-border hover:border-primary/20 transition-all group">
                    <Target className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-black mb-2">أرقام حقيقية</h3>
                    <p className="text-sm text-muted-foreground font-bold leading-relaxed">نحن لا نعتمد على الكلمات، بل على القياسات الدقيقة لسرعتك، قوتك، ونشاطك القلبي.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl border border-border hover:border-primary/20 transition-all group">
                    <TrendingUp className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-black mb-2">تدرج مدروس</h3>
                    <p className="text-sm text-muted-foreground font-bold leading-relaxed">كل خطة نعدلها أسبوعياً بناءً على استجابتك الفسيولوجية لضمان استمرار التصاعد.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-black mb-6 leading-tight">اجعل نتائجك القادمة حقيقة.</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-bold tracking-tight">ابدأ اليوم التقييم الشامل واحصل على بروتوكول الأداء المخصص الخاص بك.</p>
            <Link href="/onboarding" className="px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-xl shadow-primary/30 inline-flex items-center gap-3">
                لنبدأ التقييم الآن <ChevronRight className="w-5 h-5 -rotate-180" />
            </Link>
        </div>
      </section>
    </div>
  );
}
