"use client";
import { useState } from "react";
import { CheckCircle, Play, ChevronDown, ChevronUp, Clock, Flame, Dumbbell, Zap, Target, BookOpen } from "lucide-react";
import StatsCard from "@/components/ui/StatsCard";

const exercises = [
  {
    id: 1,
    name: "إحماء ديناميكي",
    duration: "10 دقائق",
    sets: null,
    reps: null,
    category: "warmup",
    done: true,
    desc: "تحرك مفاصل الجسم كله بشكل تدريجي لزيادة تدفق الدم ومرونة المفاصل.",
    videoUrl: "#",
    intensity: "منخفض",
  },
  {
    id: 2,
    name: "سكوات – قوة الأرجل",
    duration: "15 دقيقة",
    sets: 4,
    reps: 12,
    category: "strength",
    done: true,
    desc: "ركز على عمق السكوات (90 درجة) مع الحفاظ على استقامة الظهر وتوجيه الركبتين للخارج.",
    videoUrl: "#",
    intensity: "عالي",
  },
  {
    id: 3,
    name: "بلانك – ثبات الجذع",
    duration: "5 دقائق",
    sets: 3,
    reps: "60 ثانية",
    category: "core",
    done: false,
    desc: "حافظ على خط مستقيم من الرأس للكعبين ولا تسمح للحوض بالنزول لأسفل.",
    videoUrl: "#",
    intensity: "متوسط",
  },
  {
    id: 4,
    name: "انطلاق سريع (Sprint)",
    duration: "10 دقائق",
    sets: 6,
    reps: "30 متر",
    category: "speed",
    done: false,
    desc: "انطلاق من وضع الجلوس، ركز على أول 3 خطوات (Acceleration phase).",
    videoUrl: "#",
    intensity: "أقصى",
  },
];

export default function TrainingPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const completed = exercises.filter((e) => e.done).length;
  const total = exercises.length;
  const progress = Math.round((completed / total) * 100);

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-black">برنامج اليوم: القوة والسرعة</h1>
           <p className="text-muted-foreground text-sm mt-0.5">الثلاثاء 28 ديسمبر – الأسبوع 14</p>
        </div>
        <div className="flex items-center gap-3 bg-secondary/30 border border-border px-4 py-2.5 rounded-xl text-xs font-black group hover:border-primary/20 transition-all">
           <Target className="w-4 h-4 text-primary" />
           تركيز اليوم: القوة الانفجارية
        </div>
      </div>

      {/* Progress Stats Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="تمارين مكتملة" value={`${completed} / ${total}`} sub={`${progress}% من الجلسة`} icon={CheckCircle} color="blue" />
        <StatsCard title="الوقت المقدر" value="45 دقيقة" sub="متبقي 20 دقيقة" icon={Clock} color="blue" />
        <StatsCard title="السعرات المتوقعة" value="650" sub="بمعدل 12 kcal/min" icon={Flame} color="blue" />
        <StatsCard title="حمل التدريب" value="عالي" sub="نسبة الاستجابة 85%" icon={Zap} color="blue" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Exercises List */}
        <div className="lg:col-span-2 space-y-4">
           <h2 className="font-black text-sm mb-4">قائمة التمارين</h2>
           {exercises.map((e) => (
             <div key={e.id} className={`glass-card rounded-2xl border transition-all overflow-hidden spotlight ${
               e.done ? "border-primary/20 bg-primary/5 opacity-80" : "border-border hover:border-primary/20"
             }`}>
                <div 
                   className="p-5 flex items-center justify-between gap-4 cursor-pointer group"
                   onClick={() => setExpanded(expanded === e.id ? null : e.id)}
                >
                   <div className="flex items-center gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-border group-hover:scale-105 transition-transform ${
                        e.done ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                      }`}>
                         {e.done ? <CheckCircle className="w-6 h-6 border-none" /> : <Play className="w-5 h-5 fill-current" />}
                      </div>
                      <div className="flex-1">
                         <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-black uppercase text-muted-foreground opacity-60 tracking-wider font-tajawal">{e.category}</span>
                            {e.done && <span className="px-1.5 py-0.5 rounded-md bg-primary/20 text-primary border border-primary/20 text-[10px] font-black">مكتمل</span>}
                         </div>
                         <h3 className="text-sm font-black truncate">{e.name}</h3>
                         <div className="text-[11px] text-muted-foreground mt-1 flex items-center gap-3 font-bold">
                            {e.sets && (<span>{e.sets} مجموعات × {e.reps}</span>)}
                            <span>{e.duration}</span>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center gap-2">
                       <div className={`text-[9px] px-2 py-0.5 rounded-full border font-black ${
                         e.intensity === 'أقصى' ? 'bg-destructive/10 text-destructive border-destructive/20' : 
                         e.intensity === 'عالي' ? 'bg-accent/20 text-accent border-accent/20' : 
                         'bg-primary/10 text-primary border-primary/20'
                       }`}>
                          {e.intensity}
                       </div>
                       {expanded === e.id ? <ChevronUp className="w-5 h-5 opacity-40" /> : <ChevronDown className="w-5 h-5 opacity-40" />}
                   </div>
                </div>

                {expanded === e.id && (
                  <div className="px-5 pb-6 border-t border-border/40 animate-in slide-in-from-top-2 duration-300">
                     <div className="pt-4 grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                           <div>
                              <label className="text-[10px] font-black uppercase text-primary mb-2 block tracking-widest">وصف التمرين</label>
                              <p className="text-xs text-muted-foreground leading-relaxed font-medium">{e.desc}</p>
                           </div>
                           <div className="flex gap-2 pt-2">
                              <button className="flex-1 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-black text-[11px] flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                                 {e.done ? "إلغاء الإكمال" : "إتمام التمرين"}
                              </button>
                               <button className="px-4 py-2.5 rounded-xl bg-secondary border border-border text-muted-foreground font-black text-[11px] hover:text-foreground hover:bg-secondary/70 transition-all">
                                 تخطي
                              </button>
                           </div>
                        </div>
                        <div className="aspect-video bg-background/50 rounded-xl border border-border relative flex items-center justify-center group overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                           <div className="text-center z-10">
                              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-2 border border-primary/20 group-hover:scale-110 transition-transform">
                                 <BookOpen className="w-6 h-6 text-primary" />
                              </div>
                              <span className="text-[10px] font-black text-muted-foreground">عرض فيديو توضيحي</span>
                           </div>
                        </div>
                     </div>
                  </div>
                )}
             </div>
           ))}
        </div>

        {/* Coach Insight & Program Summary */}
        <div className="lg:col-span-1 space-y-6">
           {/* Coach Card */}
           <div className="glass-card rounded-2xl p-6 border border-border bg-primary/5 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                 <div className="w-12 h-12 rounded-xl bg-secondary border border-border flex items-center justify-center font-black text-sm text-primary">م</div>
                 <div>
                    <div className="text-sm font-black">م. محمد الشريف</div>
                    <div className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">توجيهات المدرب</div>
                 </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed italic bg-background/40 p-4 rounded-xl border border-border/50 relative z-10 font-medium">
                 &quot;محمد، اليوم التدريب عالي الكثافة. ركز على الانفجار البدني في تمارين السرعة. تأكد من شرب الإلكتروليتات خلال الجلسة وتوقف فوراً إذا شعرت بألم في العضلة الضامة.&quot;
              </p>
           </div>

           {/* Program Progress Tracker */}
           <div className="glass-card rounded-2xl p-6 border border-border bg-background/20 relative">
              <h3 className="font-black text-sm mb-6">تقدم البرنامج الأسبوعي</h3>
              <div className="space-y-6">
                 {[
                   { label: "الأحد - قوة علوية", done: true, current: false },
                   { label: "الاثنين - استشفاء نشط", done: true, current: false },
                   { label: "الثلاثاء - قوة وسرعة", done: false, current: true },
                   { label: "الأربعاء - مهارات فنية", done: false, current: false },
                   { label: "الخميس - قوة سفلية", done: false, current: false },
                 ].map((day, i) => (
                   <div key={i} className="flex items-center gap-3 relative">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center border transition-all z-10 ${
                        day.done ? "bg-primary border-primary text-primary-foreground" : 
                        day.current ? "bg-accent/20 border-accent shadow-lg ring-1 ring-accent/40 text-accent spotlight" : 
                        "bg-secondary border-border text-muted-foreground"
                      }`}>
                         {day.done ? <CheckCircle className="w-3.5 h-3.5 border-none" /> : (i + 1)}
                      </div>
                      <div className={`text-[11px] font-black ${day.current ? 'text-primary' : day.done ? 'text-muted-foreground' : 'text-muted-foreground opacity-60'}`}>
                         {day.label}
                      </div>
                      {/* Vertical line between icons */}
                      {i < 4 && <div className="absolute top-6 left-3 w-0.5 h-6 bg-border -z-0" />}
                   </div>
                 ))}
              </div>
           </div>

           {/* Equipment Needed */}
           <div className="glass-card rounded-2xl p-6 border border-border shadow-inner bg-secondary/10">
              <h3 className="font-black text-sm mb-4">الأدوات المطلوبة</h3>
              <div className="flex flex-wrap gap-2">
                 {["Dam-bells (12kg)", "Barbell", "Cones", "Elastic Band"].map((tool) => (
                   <span key={tool} className="px-3 py-1.5 rounded-lg bg-background border border-border text-[9px] font-black text-muted-foreground tracking-tight hover:border-primary/40 transition-colors">{tool}</span>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
