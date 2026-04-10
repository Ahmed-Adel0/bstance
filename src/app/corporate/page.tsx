"use client";
import Link from "next/link";
import { 
  LayoutDashboard,
  Building2, 
  Users, 
  Zap, 
  Heart, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Utensils, 
  MessageCircle,
  Shield,
  Clock,
  Briefcase
} from "lucide-react";

const corporateServices = [
  {
    icon: LayoutDashboard,
    title: "منصة B•Stance OS للموظفين",
    desc: "لوحة تحكم رقمية لكل موظف لمتابعة خطته التدريبية، نظامه الغذائي، وحجز جلسات الاستشفاء بسهولة.",
    color: "primary"
  },
  {
    icon: Zap,
    title: "جلسات استشفاء في المقر (On-site)",
    desc: "نأتي إليكم بمعدات الاستشفاء المتقدمة وفريقنا المختص لتقديم جلسات ريكافري سريعة ترفع النشاط.",
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "تحليلات الأداء المؤسسي",
    desc: "تقارير دورية مجمعة للشركة عن تحسن الحالة البدنية والالتزام الصحي لفريق العمل دون المساس بالخصوصية.",
    color: "primary"
  },
  {
    icon: Building2,
    title: "العضوية الهجينة (Hybrid)",
    desc: "دمج بين التدريب الرقمي (SaaS) والوصول الفعلي لفروعنا والشركاء الرياضيين في مختلف المحافظات.",
    color: "accent"
  }
];

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
              <Building2 className="w-3.5 h-3.5" />
              خدمات الشركات والمؤسسات
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              حوّل شركتك إلى <span className="text-gradient-hero">بيئة رياضية ذكية</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
              نقدم نظام B•Stance OS للشركات: اشتراك برمجيات (SaaS) متكامل لموظفيكم، مدعوم بزيارات استشفاء ميدانية وتدريب هجين.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote" className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-xl shadow-primary/20">
                اطلب عرض سعر
              </a>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-secondary border border-border font-bold hover:bg-secondary/70 transition-all">
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 border-t border-border/50 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">ماذا نقدم <span className="text-gradient-hero">لشركتكم؟</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">حلول مرنة مصممة لتناسب بيئة عملكم وتلبي احتياجات موظفيكم.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            {corporateServices.map((service) => (
              <div key={service.title} className="glass-card p-8 rounded-3xl border border-border hover:border-primary/40 transition-all group">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Co-working health" 
                className="relative rounded-3xl border border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">لماذا تهتم الشركات <br/> <span className="text-primary">بـبرامج العافية؟</span></h2>
              <div className="space-y-6">
                {[
                  { title: "زيادة الإنتاجية", desc: "الموظف الصحي هو موظف أكثر تركيزاً وأعلى إنجازاً." },
                  { title: "تقليل معدل الغياب", desc: "التعامل الاستباقي مع الصحة يقلل من أيام الإجازات المرضية." },
                  { title: "تعزيز الولاء المؤسسي", desc: "الاهتمام بصحة الموظف يبني علاقة أقوى وأكثر استدامة مع الشركة." },
                  { title: "بيئة عمل إيجابية", desc: "جلسات الاستشفاء الجماعية تكسر الروتين وتزيد من ترابط الفريق." }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-10 md:p-16 rounded-[2.5rem] border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] pointer-events-none" />
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">اطلب عرض سعر مخصص</h2>
              <p className="text-muted-foreground">اترك بيانات شركتك وسيقوم خبيرنا بالتواصل معك لتصميم الباقة الأمثل.</p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6 text-right">
                <div className="space-y-2">
                  <label className="text-sm font-bold pr-2">اسم الشركة</label>
                  <input type="text" className="w-full bg-background/50 border border-border p-4 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="شركة ..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold pr-2">اسم المسؤول</label>
                  <input type="text" className="w-full bg-background/50 border border-border p-4 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="الاسم بالكامل" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-right">
                <div className="space-y-2">
                  <label className="text-sm font-bold pr-2">البريد الإلكتروني</label>
                  <input type="email" className="w-full bg-background/50 border border-border p-4 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="name@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold pr-2">رقم الهاتف</label>
                  <input type="tel" className="w-full bg-background/50 border border-border p-4 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="01xxxxxxxxx" />
                </div>
              </div>
              <div className="space-y-2 text-right">
                <label className="text-sm font-bold pr-2">عدد الموظفين التقريبي</label>
                <select className="w-full bg-background/50 border border-border p-4 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all">
                  <option>1 - 20 موظف</option>
                  <option>21 - 50 موظف</option>
                  <option>51 - 200 موظف</option>
                  <option>أكثر من 200 موظف</option>
                </select>
              </div>
              <div className="space-y-2 text-right">
                <label className="text-sm font-bold pr-2">الخدمات المطلوبة</label>
                <textarea className="w-full bg-background/50 border border-border p-4 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all h-32" placeholder="أخبرنا بالمزيد عن احتياجاتكم..."></textarea>
              </div>
              <button className="w-full bg-primary text-primary-foreground font-black py-4 rounded-xl hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all">
                إرسال الطلب الآن
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <section className="py-20 text-center">
        <p className="text-muted-foreground mb-4">هل لديك استفسار سريع؟</p>
        <a href="https://wa.me/201234567890" target="_blank" className="inline-flex items-center gap-2 text-primary font-black text-xl hover:scale-105 transition-all">
          <MessageCircle className="w-6 h-6" />
          تحدث معنا عبر واتساب
        </a>
      </section>
    </div>
  );
}
