import { Phone, Mail, MapPin, Clock, MessageSquare, Building2, Globe, Send, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-primary/10 to-transparent blur-[120px] pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
              تواصل <span className="text-gradient-hero">بذكاء</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-bold leading-relaxed opacity-80 italic">فريق B•Stance التقني والرياضي جاهز للإجابة على كل أسئلتك لدفعك نحو القمة.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Form */}
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-border shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
              <h2 className="font-black text-2xl mb-8 flex items-center gap-3">
                 <MessageSquare className="w-6 h-6 text-primary" />
                 أرسل رسالة
              </h2>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-1.5 opacity-60">الاسم الأول</label>
                    <input
                      type="text"
                      className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-muted-foreground/30 shadow-sm"
                      placeholder="محمد"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-1.5 opacity-60">اسم العائلة</label>
                    <input
                      type="text"
                      className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-muted-foreground/30 shadow-sm"
                      placeholder="أحمد"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-1.5 opacity-60">البريد الإلكتروني</label>
                  <input
                    type="email"
                    className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-muted-foreground/30 shadow-sm"
                    placeholder="example@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-1.5 opacity-60">رقم الهاتف</label>
                  <input
                    type="tel"
                    className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-muted-foreground/30 shadow-sm"
                    placeholder="01xxxxxxxxx"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-1.5 opacity-60">نوع الاستفسار</label>
                  <select className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold text-foreground/80 appearance-none shadow-sm">
                    <option value="">اختر نوع الاستفسار</option>
                    <option>اشتراك فردي Pro</option>
                    <option>شراكة أكاديمية B2B</option>
                    <option>خدمات الاستشفاء</option>
                    <option>أخرى</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-1.5 opacity-60">الرسالة</label>
                  <textarea
                    rows={4}
                    className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-muted-foreground/30 resize-none shadow-sm"
                    placeholder="اكتب رسالتك وتطلعاتك هنا..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4.5 rounded-2xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 active:scale-95"
                >
                  إرسال الرسالة
                  <Send className="w-4.5 h-4.5 mx-auto -rotate-180" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 relative gap-4">
              {[
                { icon: Phone, label: "هاتف", value: "+20 100 123 4567", sub: "متاح 9 صباحاً – 9 مساءً" },
                { icon: Mail, label: "بريد إلكتروني", value: "info@bstance.com", sub: "نرد خلال 24 ساعة" },
                { icon: MapPin, label: "العنوان الرئيسي", value: "القاهرة، مصر", sub: "خدمة في جميع المحافظات" },
                { icon: Globe, label: "ساعات العمل", value: "السبت – الخميس", sub: "9:00 صباحاً – 9:00 مساءً" },
              ].map((c) => (
                <div key={c.label} className="glass-card rounded-2xl p-6 flex items-center gap-6 border border-border bg-background/40 hover:border-primary/20 transition-all cursor-pointer group">
                  <div className="w-12 h-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                    <c.icon className="w-5.5 h-5.5 text-primary opacity-80" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground mb-0.5 opacity-60">{c.label}</div>
                    <div className="font-black text-base">{c.value}</div>
                    <div className="text-[11px] font-bold text-muted-foreground mt-0.5">{c.sub}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                     <Zap className="w-3.5 h-3.5 text-primary" />
                  </div>
                </div>
              ))}

              {/* Academy Card */}
              <div className="glass-card rounded-3xl p-8 border border-blue-500/20 bg-blue-500/5 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors" />
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <span className="font-black text-lg text-blue-400">شراكة أكاديمية؟</span>
                    <div className="text-[10px] uppercase font-black tracking-widest text-muted-foreground opacity-60">خصص حلا لمركزك الرياضي</div>
                  </div>
                </div>
                <p className="text-[13px] text-muted-foreground mb-6 font-bold leading-relaxed relative z-10 px-0.5">
                  للأكاديميات والنوادي والمدارس الرياضية – تواصل مباشرة مع فريق الشراكات الاستراتيجي لدينا للحصول على حلول SaaS مخصصة.
                </p>
                <div className="flex items-center gap-3 text-xs font-black text-blue-400 group-hover:translate-x-[-10px] transition-transform relative z-10">
                  <Mail className="w-4 h-4" />
                  academy@bstance.com
                </div>
              </div>

               {/* Social */}
               <div className="glass-card rounded-2xl p-6 bg-secondary/20 border border-border">
                <div className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-5 mr-1 pr-1 border-r-2 border-primary">المنصات الاجتماعية</div>
                <div className="flex justify-between gap-3">
                  {["Instagram", "Facebook", "Twitter", "LinkedIn"].map((s) => (
                    <div key={s} className="flex-1 text-center py-2.5 rounded-xl bg-background/40 text-[10px] font-black text-muted-foreground hover:text-primary hover:bg-secondary border border-border/40 cursor-pointer transition-all uppercase tracking-tighter">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Map Placeholder or Visual Trust Area */}
       <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-black uppercase tracking-widest text-primary">المقر الرئيسي</span>
            </div>
            <h2 className="text-3xl font-black mb-10 leading-tight">متواجدون لدعمك في كل خطوة.</h2>
            <div className="glass-card aspect-[21/9] rounded-[40px] border border-border bg-secondary/10 flex items-center justify-center group overflow-hidden relative">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] group-hover:scale-110 transition-transform duration-[20s]" />
                 <div className="text-center relative z-10">
                    <Globe className="w-16 h-16 text-muted-foreground/20 mx-auto mb-4 group-hover:rotate-12 transition-all duration-1000" />
                    <p className="text-sm font-black text-muted-foreground italic">خارطة التفاعل الرقمي قيد التحديث...</p>
                 </div>
                 <div className="absolute bottom-6 right-6 text-right px-6 py-4 glass-card border border-border rounded-2xl shadow-xl">
                    <div className="text-xs font-black mb-1 text-primary">القاهرة، مصر</div>
                    <div className="text-[10px] text-muted-foreground font-bold italic opacity-60">حي التجمع الخامس، القاهرة الجديدة</div>
                 </div>
            </div>
        </div>
      </section>
    </div>
  );
}
