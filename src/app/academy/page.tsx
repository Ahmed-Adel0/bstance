import Link from "next/link";
import { Building2, Users, BarChart3, CheckCircle, ArrowRight, Zap, Shield, Clock, MessageSquare, Award, MonitorSmartphone, Target } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "إدارة جميع اللاعبين",
    desc: "تابع أداء كل لاعب في أكاديميتك من مكان واحد – تقارير يومية وأسبوعية.",
  },
  {
    icon: BarChart3,
    title: "تحليلات متقدمة",
    desc: "لوحة تحكم إدارية تعرض إحصائيات الأداء الجماعي والفردي.",
  },
  {
    icon: Zap,
    title: "برامج جاهزة وقابلة للتخصيص",
    desc: "مكتبة ضخمة من برامج التدريب جاهزة للتعديل حسب فريقك.",
  },
  {
    icon: Shield,
    title: "تقييم المخاطر والإصابات",
    desc: "نظام تعافي متكامل يقلل احتمالية الإصابة ويزيد من جاهزية الفريق.",
  },
  {
    icon: Clock,
    title: "توفير وقت المدربين",
    desc: "أتمتة عملية بناء البرامج ومتابعة التنفيذ تتيح للمدرب التركيز على الجانب الفني.",
  },
  {
    icon: Award,
    title: "الارتقاء بسمعة الأكاديمية",
    desc: "تقديم تقارير احترافية لأولياء الأمور تظهر مدى اهتمامك بالعلم والتطور.",
  },
];

const pillars = [
  { icon: MonitorSmartphone, title: "منصتك الخاصة", desc: "نظام إلكتروني متكامل لإدارة الأداء بالكامل (SaaS) مخصص لناديك." },
  { icon: Shield, title: "خبراء في خدمتك", desc: "أخصائيين في علوم الرياضة والتغذية والاستشفاء يتابعون فريقك لحظة بلحظة." },
  { icon: Target, title: "نظام التقييم الدوري", desc: "تقنيات حديثة لقياس السرعة، القوة، والمرونة لجميع اللاعبين." },
];

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Hero section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-blue-500/10 to-transparent opacity-40 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                نقل أكاديميتك للعالمية <br /> <span className="text-gradient-hero">بتقنيات B•Stance</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-bold">
                نحن لا نقدم مجرد منصة، نحن نقدم نظاماً متكاملاً لإدارة الأداء الرياضي (B2B) يساعدك على اكتشاف المواهب وتنميتها وتحويلها إلى أبطال حقيقيين.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-xl shadow-primary/20">
                    تقديم طلب شراكة
                </Link>
                <Link href="#features" className="px-8 py-4 rounded-xl bg-secondary border border-border font-black hover:bg-secondary/70 transition-all">
                    اكتشف المزايا
                </Link>
            </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <div className="grid md:grid-cols-3 gap-8">
                {pillars.map((p) => (
                    <div key={p.title} className="glass-card p-10 rounded-2xl border border-border relative overflow-hidden group">
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                            <p.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed font-bold">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Main Features */}
      <section id="features" className="py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <div className="md:max-w-xl">
              <h2 className="text-4xl font-black mb-4">لماذا B•Stance؟</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">أدوات إدارية وفنية متكاملة تضمن لأكاديميتك التفوق في عصر العلم والبيانات.</p>
            </div>
            <Link href="/contact" className="px-6 py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary/10 transition-all self-start">تحدث مع مستشارنا</Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass-card p-8 rounded-2xl border border-border hover:border-primary/20 transition-all flex flex-col items-center text-center gap-6 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                      <f.icon className="w-7 h-7 text-primary/80" />
                  </div>
                  <div>
                      <h3 className="text-lg font-black mb-3">{f.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-bold tracking-tight">{f.desc}</p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Summary */}
      <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-4xl font-black mb-10 leading-tight">شريكك في التطور، لا مجرد نظام.</h2>
            <div className="glass-card p-10 rounded-3xl border border-border bg-background/40 relative overflow-hidden">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="text-center group">
                        <div className="text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform tracking-tight">+15%</div>
                        <div className="text-xs text-muted-foreground font-black">زيادة في معدلات الالتزام</div>
                    </div>
                    <div className="text-center group border-r border-border md:pr-10">
                        <div className="text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform tracking-tight">-30%</div>
                        <div className="text-xs text-muted-foreground font-black">تقليل احتمالية الإصابات</div>
                    </div>
                    <div className="text-center group border-r border-border md:pr-10">
                        <div className="text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform tracking-tight">2X</div>
                        <div className="text-xs text-muted-foreground font-black">سرعة الوصول للنتائج</div>
                    </div>
                </div>
            </div>
            
            <div className="mt-14 p-8 bg-primary/10 border border-primary/20 rounded-2xl inline-block max-w-3xl">
                <p className="text-sm italic text-muted-foreground leading-loose">
                    "منذ تطبيق نظام B•Stance في الأكاديمية، لاحظنا تحولاً جذرياً في أداء لاعبينا، ليس فقط بدنياً، بل وثقافياً أيضاً. أصبح اللاعبون أكثر تحملاً للمسؤولية تجاه تغذيتهم واستشفائهم."
                </p>
                <div className="mt-4 font-bold text-primary">— د. محمد الشريف (كبير مدربي أكاديمية النادي)</div>
            </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-secondary flex items-center justify-center rounded-3xl mx-auto mb-8 border border-border">
                <Building2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-black mb-6">جاهز لنقل فريقك لمستوى جديد؟</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                اترك بيانات أكاديميتك وسيقوم أحد مسؤولي الشراكات لدينا بالتواصل معك خلال 24 ساعة لبدء التحول الرقمي الرياضي.
            </p>
            <Link href="/contact" className="px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-2xl shadow-primary/30 inline-flex items-center gap-3">
                تواصل معنا الآن <ArrowRight className="w-5 h-5 -rotate-180" />
            </Link>
        </div>
      </section>
    </div>
  );
}
