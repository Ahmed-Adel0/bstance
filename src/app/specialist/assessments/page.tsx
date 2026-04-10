"use client";
import { useState } from "react";
import { 
  Activity, 
  User, 
  Ruler, 
  Weight, 
  Target, 
  Camera, 
  FileCheck, 
  ChevronLeft, 
  ChevronRight,
  ClipboardCheck,
  Zap,
  ShieldCheck
} from "lucide-react";

export default function AssessmentFormPage() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground">التقييم الرياضي الشامل (Elite Assessment)</h1>
          <p className="text-muted-foreground text-sm mt-1">تسجيل نتائج التحليل البدني والقوام للاعب</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-xs font-bold text-muted-foreground ml-2">المرحلة {step} من {totalSteps}</div>
          <div className="flex gap-1">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1.5 w-8 rounded-full transition-all ${s <= step ? 'bg-primary' : 'bg-muted'}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="glass-card rounded-3xl p-8 border border-border bg-background/40 relative overflow-hidden">
            {/* Step 1: Basic Info & InBody */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-black">المعلومات الأساسية و InBody</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground px-1">اختيار اللاعب</label>
                      <select className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none appearance-none">
                        <option>محمد كريم</option>
                        <option>يوسف علي</option>
                        <option>أحمد رامي</option>
                      </select>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground px-1">تاريخ التقييم</label>
                      <input type="date" className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none" defaultValue={new Date().toISOString().split('T')[0]} />
                   </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {[
                      { label: "الطول (cm)", icon: Ruler, placeholder: "180" },
                      { label: "الوزن (kg)", icon: Weight, placeholder: "75" },
                      { label: "نسبة الدهون (%)", icon: Activity, placeholder: "14" },
                      { label: "كتلة العضلات (kg)", icon: Activity, placeholder: "38" },
                   ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <label className="text-[10px] font-black text-muted-foreground px-1 uppercase">{item.label}</label>
                        <div className="relative">
                           <item.icon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/40" />
                           <input type="number" className="w-full bg-secondary/20 border border-border rounded-xl pr-10 pl-4 py-3 text-sm focus:border-primary outline-none placeholder:text-muted-foreground/20 font-bold" placeholder={item.placeholder} />
                        </div>
                      </div>
                   ))}
                </div>
              </div>
            )}

            {/* Step 2: Postural Analysis */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-black">تحليل القوام (Postural Analysis)</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                     <h4 className="text-xs font-black text-primary border-b border-primary/20 pb-2">ملاحظات التوازن</h4>
                     {[
                        "ميل الرأس للأمام (Forward Head)",
                        "انحناء الأكتاف (Rounded Shoulders)",
                        "ميل الحوض (Pelvic Tilt)",
                        "استواء القدم (Flat Feet)"
                     ].map((check) => (
                        <div key={check} className="flex items-center justify-between p-3 rounded-xl bg-secondary/20 border border-border transition-colors hover:border-primary/30">
                           <span className="text-xs font-bold">{check}</span>
                           <input type="checkbox" className="w-4 h-4 accent-primary" />
                        </div>
                     ))}
                  </div>

                  <div className="space-y-4">
                     <h4 className="text-xs font-black text-primary border-b border-primary/20 pb-2">توثيق الصور</h4>
                     <div className="grid grid-cols-2 gap-3">
                        <button className="aspect-square rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:bg-secondary/20 transition-all group">
                           <Camera className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                           <span className="text-[10px] font-bold text-muted-foreground">صورة أمامية</span>
                        </button>
                        <button className="aspect-square rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:bg-secondary/20 transition-all group">
                           <Camera className="w-6 h-6 text-muted-foreground group-hover:text-primary" />
                           <span className="text-[10px] font-bold text-muted-foreground">صورة جانبية</span>
                        </button>
                     </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Performance & Recommendation */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <ClipboardCheck className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="text-xl font-black">تقرير الأداء والتوصيات</h3>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-muted-foreground">مستوى اليونة (Flexibility)</label>
                       <input type="range" className="w-full accent-primary h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-muted-foreground">مستوى القوة (Strength)</label>
                       <input type="range" className="w-full accent-primary h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground">التوصية الفنية (Technical Advice)</label>
                    <textarea 
                      className="w-full bg-secondary/50 border border-border rounded-2xl p-4 text-sm focus:border-primary outline-none h-32"
                      placeholder="اكتب خلاصة التقييم والنصائح للاعب هنا..."
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xs font-black text-primary">تحويل تلقائي</h5>
                      <p className="text-[10px] text-muted-foreground">سيتم إرسال هذا التقييم كنسخة أولية في تقرير اللاعب القادم.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-12 flex items-center justify-between pt-6 border-t border-border/50">
              <button 
                onClick={prevStep}
                disabled={step === 1}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-border text-xs font-black hover:bg-secondary disabled:opacity-30 transition-all font-cairo"
              >
                <ChevronRight className="w-4 h-4" />
                السابق
              </button>

              {step < totalSteps ? (
                <button 
                  onClick={nextStep}
                  className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-black shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all font-cairo"
                >
                  التالي
                  <ChevronLeft className="w-4 h-4" />
                </button>
              ) : (
                <button className="flex items-center gap-2 px-8 py-2.5 rounded-xl bg-green-500 text-white text-xs font-black shadow-lg shadow-green-500/20 hover:scale-[1.02] transition-all font-cairo">
                  حفظ التقييم النهائي
                  <FileCheck className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
           <div className="glass-card rounded-3xl p-6 border border-border bg-primary/5">
              <div className="flex items-center gap-2 mb-4">
                 <ShieldCheck className="w-4 h-4 text-primary" />
                 <h4 className="text-sm font-black">لماذا هذا التقييم؟</h4>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed font-bold">
                 يُعد التقييم الرياضي هو حجر الأساس في "نظام بيستانس". من خلاله نضمن أن بروتوكولات التدريب والتغذية مبنية على حقائق رقمية وليست مجرد توقعات.
              </p>
           </div>

           <div className="glass-card rounded-3xl p-6 border border-border">
              <h4 className="text-xs font-black mb-4">تقييمات سابقة للاعب</h4>
              <div className="space-y-3">
                 {[
                    { date: "15 يناير", weight: "78kg", bodyFat: "16%" },
                    { date: "20 فبراير", weight: "76kg", bodyFat: "15%" },
                 ].map((prev, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-secondary/40 border border-border text-[10px]">
                       <span className="font-bold">{prev.date}</span>
                       <div className="flex gap-2">
                          <span className="text-primary">{prev.weight}</span>
                          <span className="text-accent">{prev.bodyFat}</span>
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
