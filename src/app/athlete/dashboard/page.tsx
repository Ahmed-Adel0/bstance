"use client";
import React from "react";
import { 
  TrendingUp, 
  Dumbbell, 
  Heart, 
  BarChart3, 
  ChevronRight, 
  Star, 
  ArrowUpRight,
  Target,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const stats = [
  { label: "مستوى الأداء العام", value: "85%", change: "+12%", icon: TrendingUp, color: "primary" },
  { label: "نسبة العضلات", value: "42.5kg", change: "+0.8kg", icon: Dumbbell, color: "accent" },
  { label: "معدل الاستشفاء", value: "عالي", change: "مستقر", icon: Heart, color: "primary" },
  { label: "نسبة الدهون", value: "12%", change: "-2%", icon: BarChart3, color: "accent" },
];

const coachNotes = [
  {
    coach: "د. أحمد فضل (تغذية)",
    note: "تم ملاحظة تحسن في مستويات الطاقة. استمر على زيادة حصة البروتين بعد تمرين السباحة بـ 30 دقيقة.",
    date: "أمس"
  },
  {
    coach: "كابتن الملا (ريكافري)",
    note: "تحسن ملحوظ في مرونة مفصل الكتف. جلسة الريكافري القادمة نركز على عضلات الظهر السفلي.",
    date: "9 أبريل"
  }
];

export default function AthleteDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Sidebar/Layout can be added later, focusing on content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4">
              <Star className="w-3.5 h-3.5 fill-current" />
              حساب بطل بيستانس
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-2">أهلاً، <span className="text-gradient-hero">عمر أحمد!</span></h1>
            <p className="text-muted-foreground italic">تحليل أداء السباحة | أكاديمية إيفنت</p>
          </div>
          <div className="flex gap-3">
             <button className="px-6 py-3 rounded-xl bg-secondary border border-border font-bold text-sm hover:bg-secondary/70 transition-all">تحميل التقارير PDF</button>
             <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-black text-sm hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all">تحديث القياسات</button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6 rounded-3xl border border-border hover:border-primary/30 transition-all">
               <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}`}>
                     <s.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-md">
                     <ArrowUpRight className="w-3 h-3" />
                     {s.change}
                  </div>
               </div>
               <div className="text-xs text-muted-foreground mb-1 font-bold">{s.label}</div>
               <div className="text-2xl font-black">{s.value}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chart/Growth Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 rounded-[2.5rem] border border-border min-h-[400px]">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                     <Target className="w-5 h-5 text-primary" />
                     مخطط تطور الأداء البدني
                  </h3>
                  <div className="flex gap-2">
                     <button className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold">InBody</button>
                     <button className="px-3 py-1 rounded-lg bg-secondary text-muted-foreground text-xs font-bold">Speed</button>
                  </div>
               </div>
               
               {/* Visual Placeholder for a Chart */}
               <div className="h-64 w-full bg-secondary/20 rounded-2xl flex items-center justify-center border border-dashed border-border group">
                  <BarChart3 className="w-12 h-12 text-muted-foreground/30 group-hover:scale-110 group-hover:text-primary/30 transition-all duration-700" />
                  <span className="text-xs text-muted-foreground mr-4">رسم بياني تفاعلي لتطور الكتلة العضلية وانخفاض الدهون</span>
               </div>
               
               <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">الهدف القادم</div>
                    <div className="text-lg font-black text-primary">تأهل للمنصورة</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">الترتيب في الأكاديمية</div>
                    <div className="text-lg font-black text-primary">#3</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">أيام الالتزام</div>
                    <div className="text-lg font-black text-primary">24 يوم</div>
                  </div>
               </div>
            </div>

            {/* Coach Insights */}
            <div className="glass-card p-8 rounded-3xl border border-border">
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  رؤية الخبراء (Expert Insights)
               </h3>
               <div className="space-y-6">
                  {coachNotes.map((note) => (
                    <div key={note.coach} className="p-5 rounded-2xl bg-secondary/30 border border-border relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-1 h-full bg-primary/30 group-hover:bg-primary transition-colors" />
                       <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-sm text-foreground">{note.coach}</span>
                          <span className="text-[10px] text-muted-foreground">{note.date}</span>
                       </div>
                       <p className="text-sm text-muted-foreground leading-relaxed">{note.note}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column / Roadmap & Next Sessions */}
          <div className="space-y-8">
             <div className="glass-card p-8 rounded-3xl border border-primary/20 bg-primary/5">
                <h3 className="text-lg font-bold mb-6">جلسات الاستشفاء القادمة</h3>
                <div className="space-y-4">
                   <div className="flex items-center justify-between p-4 rounded-xl bg-background border border-border group hover:border-primary/40 transition-all cursor-pointer">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Clock className="w-5 h-5 text-primary" />
                         </div>
                         <div>
                            <div className="text-sm font-bold">ريكافري عميق</div>
                            <div className="text-[10px] text-muted-foreground">غداً، 4:00 م - طناح</div>
                         </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-all -rotate-180" />
                   </div>
                   <button className="w-full py-3 rounded-xl border border-dashed border-primary/40 text-primary text-xs font-bold hover:bg-primary/5 transition-all">
                      حجز جلسة إضافية
                   </button>
                </div>
             </div>

             <div className="glass-card p-8 rounded-3xl border border-border">
                <h3 className="text-lg font-bold mb-6">قائمة المهمات اليومية</h3>
                <div className="space-y-4">
                   {[
                     { task: "تمارين استطالة الكتف", time: "10 دقائق", done: true },
                     { task: "وجبة الغداء (300ج دجاج)", time: "1:30 م", done: true },
                     { task: "تمرين السباحة المسائي", time: "8:00 م", done: false },
                     { task: "شرب 3 لتر ماء", time: "طوال اليوم", done: false },
                   ].map((t) => (
                     <div key={t.task} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                           <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${t.done ? 'bg-green-500 border-green-500 text-white' : 'border-border'}`}>
                              {t.done && <CheckCircle2 className="w-3.5 h-3.5" />}
                           </div>
                           <span className={t.done ? 'line-through text-muted-foreground' : ''}>{t.task}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground">{t.time}</span>
                     </div>
                   ))}
                </div>
             </div>

             <div className="p-6 rounded-3xl bg-accent/5 border border-accent/20 flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                   <h4 className="text-sm font-bold mb-1">تنبيه ذكي</h4>
                   <p className="text-xs text-muted-foreground leading-relaxed">لاحظنا انخفاض في عدد ساعات النوم في آخر يومين. احرص على النوم 8 ساعات لتحسين جودة الاستشفاء.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
