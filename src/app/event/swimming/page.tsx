"use client";
import { useState } from "react";
import { CheckCircle2, User, Phone, Target, Calendar, MapPin, ArrowLeft, Send, Award, Zap } from "lucide-react";
import Link from "next/link";
import CountdownTimer from "@/components/ui/CountdownTimer";

export default function SwimEventLanding() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4" dir="rtl">
        <div className="glass-card max-auto max-w-lg w-full rounded-3xl p-8 border border-primary/30 text-center space-y-6 relative overflow-hidden">
          {/* Success Background Effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-primary" />
          
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/50 animate-bounce">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          
          <h1 className="text-3xl font-black text-foreground">تم التسجيل بنجاح!</h1>
          <p className="text-muted-foreground font-medium">مرحباً بك في عائلة B•Stance. لقد تم حجز مكانك في يوم التقييم الرياضي.</p>
          
          <div className="bg-secondary/40 border border-primary/20 rounded-2xl p-6 relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-20 h-20 text-primary" />
             </div>
             <div className="relative z-10 text-right">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-md">قسيمة هدية فعالية 11 أبريل</span>
                <h3 className="text-xl font-black mt-3">تقييم InBody + تحليل قوام مجاني</h3>
                <p className="text-xs text-muted-foreground mt-1">صالحة للاستخدام في فرع هليوبوليس أو التجمع</p>
                <div className="mt-4 flex items-center justify-between">
                   <div className="text-2xl font-mono font-black text-primary tracking-tighter">BSTANCE-RIO85</div>
                   <div className="text-[9px] text-muted-foreground">صورة الشاشة للاحتفاظ بها</div>
                </div>
             </div>
          </div>

          <div className="pt-6">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" />
              العودة للموقع الرئيسي
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Co-Branding Header */}
        <header className="flex flex-col items-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex items-center gap-6 mb-6">
            <img src="/imgs/Logo.png" alt="BStance Logo" className="h-10 md:h-14 w-auto object-contain" />
            <div className="h-10 w-px bg-border/50" />
            <img src="/imgs/rio academy.jpg" alt="Rio Academy Logo" className="h-10 md:h-14 w-auto object-contain rounded-lg" />
          </div>
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest mb-4">
              فعالية حصرية - أكاديمية ريو للسباحة
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4">
              ابدأ رحلة <span className="text-gradient-green">الاحتراف</span> الرياضي اليوم
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto font-medium">
              سجل الآن للحصول على تقييم شامل لأدائك البدني وجاهزيتك الرياضية تحت إشراف خبراء بيستانس.
            </p>
          </div>
        </header>

        <div className="mb-12 flex justify-center animate-in fade-in zoom-in duration-1000 delay-500">
           <div className="glass-card rounded-2xl px-8 py-4 border-primary/20 bg-primary/5 flex flex-col items-center">
              <span className="text-[10px] font-black text-muted-foreground uppercase mb-2">الوقت المتبقي لانطلاق التقييم</span>
              <CountdownTimer targetDate="2026-04-11T00:00:00" />
           </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <div className="space-y-8 order-2 lg:order-1 animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
             <div className="glass-card rounded-3xl p-6 border border-border bg-secondary/30">
                <h3 className="font-black text-xl mb-6">ماذا ستحصل عليه في الفعالية؟</h3>
                <div className="space-y-6">
                   {[
                      { icon: <Zap className="w-5 h-5" />, title: "اختبار InBody دقيق", desc: "قياس نسبة العضلات والدهون والمياه في الجسم." },
                      { icon: <Target className="w-5 h-5" />, title: "تحليل توازن القوام", desc: "كشف أي انحرافات قوامية تؤثر على السباحة." },
                      { icon: <Award className="w-5 h-5" />, title: "استشارة فنية فورية", desc: "نصائح من أخصائيي الأداء لتحسين مستواك." },
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                            {item.icon}
                         </div>
                         <div>
                            <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground font-bold">
                   <Calendar className="w-4 h-4 text-primary" />
                   11 أبريل 2026
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground font-bold">
                   <MapPin className="w-4 h-4 text-primary" />
                   بمقر أكاديمية ريو للسباحة - المنصورة
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
            <div className="glass-card rounded-3xl p-8 border border-primary/20 bg-background relative overflow-hidden shadow-2xl shadow-primary/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
              
              <h3 className="text-2xl font-black mb-2">احجز مكانك مجاناً</h3>
              <p className="text-xs text-muted-foreground font-bold mb-8 italic">العرض متاح لـ 85 مشتركاً فقط يوم الفعالية</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-muted-foreground pr-2">اسم اللاعب / السباح</label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground/50 transition-colors" />
                    <input 
                      required
                      type="text"
                      className="w-full bg-secondary/30 border border-border rounded-xl pr-11 pl-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground/30 font-bold"
                      placeholder="أدخل الاسم الرباعي"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-muted-foreground pr-2">السن</label>
                    <input 
                      required
                      type="number"
                      className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground/30 font-bold text-center"
                      placeholder="عاما"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-muted-foreground pr-2">تخصص السباحة</label>
                    <select className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all font-bold appearance-none">
                      <option>فراشة</option>
                      <option>ظهر</option>
                      <option>صدر</option>
                      <option>حرة</option>
                      <option>متنوع</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black text-muted-foreground pr-2">رقم موبايل ولي الأمر (واتساب)</label>
                  <div className="relative">
                    <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground/50 transition-colors" />
                    <input 
                      required
                      type="tel"
                      className="w-full bg-secondary/30 border border-border rounded-xl pr-11 pl-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground/30 font-bold"
                      placeholder="01xxxxxxxxx"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black text-muted-foreground pr-2">الهدف من التقييم</label>
                  <div className="relative">
                    <Target className="absolute right-3 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground/50 transition-colors" />
                    <input 
                      type="text"
                      className="w-full bg-secondary/30 border border-border rounded-xl pr-11 pl-4 py-3.5 text-sm focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground/30 font-bold"
                      placeholder="مثلاً: زيادة السرعة، تقوية عضلات الظهر"
                    />
                  </div>
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-black text-base shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-3 border-background/30 border-t-background rounded-full animate-spin" />
                  ) : (
                    <>
                      تأكيد الحجز الآن
                      <Send className="w-5 h-5 rotate-[-45deg]" />
                    </>
                  )}
                </button>
              </form>
              <p className="text-[10px] text-center text-muted-foreground mt-4 font-bold">
                 * سيتم التواصل مع ولي الأمر عبر الواتساب لتأكيد موعد الجلسة.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 py-12 px-4 border-t border-border mt-16 text-center">
         <img src="/imgs/Logo.png" alt="BStance" className="h-6 mx-auto mb-4 opacity-50 grayscale" />
         <p className="text-[10px] text-muted-foreground font-bold">
            جميع الحقوق محفوظة © B•Stance Sports OS 2026. بالشراكة مع أكاديمية ريو.
         </p>
      </footer>
    </div>
  );
}
