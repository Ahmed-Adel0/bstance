"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, ClipboardList, Target, CreditCard, ChevronLeft, ChevronRight, Zap, CheckCircle, Flame, Dumbbell, Salad, Heart } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const steps = [
  { id: 1, title: "بيانات اللاعب", icon: User },
  { id: 2, title: "تحليل المستوى", icon: ClipboardList },
  { id: 3, title: "الأهداف الرياضية", icon: Target },
  { id: 4, title: "اختر باقتك", icon: CreditCard },
];

export default function OnboardingPage() {
  const router = useRouter();
  const supabase = createClient();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    age: string;
    sport: string;
    level: string;
    goals: string[];
    plan: string;
  }>({
    name: "",
    age: "",
    sport: "",
    level: "intermediate",
    goals: [],
    plan: "pro",
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleFinish = async () => {
    setIsSubmitting(true);
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      router.push('/login');
      return;
    }

    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: formData.name,
        age: parseInt(formData.age),
        sport: formData.sport,
        fitness_level: formData.level,
        goals: formData.goals,
        // No column for plan yet, but let's assume it's part of the data or logs
      })
      .eq('id', user.id);

    if (error) {
      alert("حدث خطأ أثناء حفظ البيانات: " + error.message);
      setIsSubmitting(false);
      return;
    }

    router.push('/athlete');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col" dir="rtl">
      {/* Header */}
      <header className="px-6 h-20 border-b border-border flex items-center justify-between bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-black text-lg tracking-tight">B•Stance</span>
        </Link>
        <div className="flex gap-2">
           {steps.map((s) => (
             <div
               key={s.id}
               className={`w-8 h-1 rounded-full transition-all ${
                 s.id <= currentStep ? "bg-primary" : "bg-secondary"
               }`}
             />
           ))}
        </div>
        <div className="text-xs font-bold text-muted-foreground">خطوة {currentStep} من {steps.length}</div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center p-6 bg-[#0a0a0f]">
        <div className="absolute inset-0 bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
        
        <div className="max-w-md w-full relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="glass-card rounded-3xl p-8 border border-border shadow-2xl relative overflow-hidden"
            >
              {/* Step indicator floating */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Step Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto">
                 {(() => {
                    const Icon = steps[currentStep-1].icon;
                    return <Icon className="w-7 h-7 text-primary" />
                 })()}
              </div>

              <h2 className="text-2xl font-black text-center mb-2">{steps[currentStep-1].title}</h2>
              <p className="text-muted-foreground text-sm text-center mb-8">أكمل بياناتك لنقوم بخلق برنامجك المخصص</p>

              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-muted-foreground mr-1">الاسم الكامل</label>
                    <input
                      className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium"
                      placeholder="أدخل اسمك..."
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-muted-foreground mr-1">العمر</label>
                      <input
                        className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium"
                        placeholder="مثلاً: 16"
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-muted-foreground mr-1">الرياضة</label>
                      <select
                        className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-medium appearance-none"
                        value={formData.sport}
                        onChange={(e) => setFormData({...formData, sport: e.target.value})}
                      >
                         <option value="">اختر رياضتك</option>
                         <option value="football">كرة قدم</option>
                         <option value="basketball">كرة سلة</option>
                         <option value="swimming">سباحة</option>
                         <option value="athletics">ألعاب قوى</option>
                         <option value="other">أخرى</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Level Analysis */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid gap-3">
                    {(
                      [
                        { id: "beginner", title: "مبتدئ", desc: "أقل من سنة خبرة في الرياضة" },
                        { id: "intermediate", title: "متوسط", desc: "من 1-3 سنوات خبرة أو لاعب أكاديمية" },
                        { id: "pro", title: "محترف", desc: "لاعب نادي رسمي أو منافسات احترافية" },
                      ] as const
                    ).map((lvl) => (
                      <button
                        key={lvl.id}
                        onClick={() => setFormData({...formData, level: lvl.id as string})}
                        className={`p-4 rounded-2xl border text-right transition-all group ${
                          formData.level === lvl.id ? "bg-primary border-primary shadow-lg shadow-primary/20 scale-[1.02]" : "bg-secondary/30 border-border hover:bg-secondary/50"
                        }`}
                      >
                         <div className={`font-black text-sm mb-0.5 ${formData.level === lvl.id ? 'text-primary-foreground' : 'text-foreground'}`}>{lvl.title}</div>
                         <div className={`text-[10px] font-medium ${formData.level === lvl.id ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{lvl.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Goals */}
              {currentStep === 3 && (
                <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-3">
                      {(
                        [
                          { id: "strength", title: "زيادة القوة", icon: Dumbbell },
                          { id: "speed", title: "تطوير السرعة", icon: Flame },
                          { id: "weight-loss", title: "إنقاص الوزن", icon: Salad },
                          { id: "recovery", title: "تحسين الاستشفاء", icon: Heart },
                        ] as const
                      ).map((goal) => (
                        <button
                          key={goal.id}
                          className={`p-4 rounded-2xl border flex flex-col items-center gap-3 transition-all ${
                            formData.goals.includes(goal.id as string) ? "bg-primary/20 border-primary shadow-lg ring-1 ring-primary/40" : "bg-secondary/30 border-border hover:bg-secondary/50"
                          }`}
                          onClick={() => {
                             const newGoals = formData.goals.includes(goal.id as string) 
                                ? formData.goals.filter(g => g !== goal.id)
                                : [...formData.goals, goal.id];
                             setFormData({...formData, goals: newGoals});
                          }}
                        >
                           <goal.icon className={`w-6 h-6 ${formData.goals.includes(goal.id) ? 'text-primary' : 'text-muted-foreground'}`} />
                           <span className="text-[10px] font-black">{goal.title}</span>
                        </button>
                      ))}
                   </div>
                </div>
              )}

              {/* Step 4: Plan Selection */}
              {currentStep === 4 && (
                <div className="space-y-4">
                   <div className="grid gap-3">
                      {(
                      [
                        { id: "starter", title: "البداية (Starter)", price: "299 LE", ar: "تدريب + تغذية أساسي" },
                        { id: "pro", title: "الاحترافي (Pro)", price: "599 LE", ar: "البرنامج المتكامل الموصى به" },
                        { id: "elite", title: "النخبة (Elite)", price: "999 LE", ar: "دعم 24/7 + استشفاء مفتوح" },
                      ] as const
                    ).map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setFormData({...formData, plan: p.id as string})}
                          className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                             formData.plan === p.id ? "bg-primary border-primary shadow-lg shadow-primary/20 scale-[1.02]" : "bg-secondary/30 border-border"
                          }`}
                        >
                           <div className="text-right">
                              <div className={`font-black text-sm ${formData.plan === p.id ? 'text-primary-foreground' : 'text-foreground'}`}>{p.title}</div>
                              <div className={`text-[10px] font-medium ${formData.plan === p.id ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{p.ar}</div>
                           </div>
                           <div className={`text-sm font-black ${formData.plan === p.id ? 'text-primary-foreground' : 'text-primary'}`}>{p.price}</div>
                        </button>
                      ))}
                   </div>
                   <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-2">
                       <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                       <p className="text-[10px] text-muted-foreground leading-relaxed">
                          <span className="text-green-400 font-bold">باقة Pro:</span> تمنحك أفضل قيمة مع متابعة يومية من المتخصصين لضمان الالتزام والنتائج.
                       </p>
                   </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-10">
                {currentStep > 1 && (
                  <button
                    onClick={prevStep}
                    className="flex-1 px-4 py-4 rounded-2xl border border-border font-bold text-sm text-muted-foreground hover:bg-secondary transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    السابق
                  </button>
                )}
                {currentStep < steps.length ? (
                  <button
                    onClick={nextStep}
                    className="flex-[2] px-4 py-4 rounded-2xl bg-primary text-primary-foreground font-black text-sm green-glow flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                  >
                    المتابعة
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleFinish}
                    disabled={isSubmitting}
                    className="flex-[2] px-4 py-4 rounded-2xl bg-primary text-primary-foreground font-black text-sm green-glow flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 disabled:opacity-50"
                  >
                    {isSubmitting ? "جاري الحفظ..." : "تأكيد الاشتراك والبدء"}
                    <CheckCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-[10px] text-muted-foreground font-bold tracking-widest opacity-40">
         SECURE DATA ENCRYPTION • 2024 B•STANCE SPORTS TECH
      </footer>
    </div>
  );
}
