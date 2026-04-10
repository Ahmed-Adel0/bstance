"use client";
import React, { useState } from "react";
import { 
  QrCode, 
  User, 
  Phone, 
  Target, 
  Activity, 
  ArrowRight, 
  CheckCircle,
  Zap
} from "lucide-react";

export default function EventRegister() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setStep(step + 1);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center p-4" dir="rtl">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold mb-4">
            <Zap className="w-3 h-3 fill-current" />
            تسجيل سريع - B•Stance
          </div>
          <h1 className="text-3xl font-black mb-2">انضم للمنظومة الآن</h1>
          <p className="text-gray-400 text-sm">ابدأ رحلة التميز الرياضي ببياناتك الأساسية.</p>
        </div>

        <div className="glass-card p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
             <div 
               className="h-full bg-primary transition-all duration-500 ease-out" 
               style={{ width: `${(step / 3) * 100}%` }}
             />
          </div>

          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-left duration-300">
              <div className="space-y-4">
                <label className="text-sm font-bold flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  الاسم بالكامل
                </label>
                <input 
                  type="text" 
                  placeholder="أدخل اسمك كما في الهوية"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  رقم الهاتف (واتساب)
                </label>
                <input 
                  type="tel" 
                  placeholder="01xxxxxxxxx"
                  className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                />
              </div>
              <button 
                onClick={handleNext}
                disabled={loading}
                className="w-full bg-primary text-[#0a0a0f] font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all"
              >
                {loading ? "جاري الحفظ..." : "الخطوة التالية"}
                <ArrowRight className="w-5 h-5 -rotate-180" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-left duration-300">
              <div className="space-y-4">
                <label className="text-sm font-bold flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  الرياضة الأساسية
                </label>
                <select className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none appearance-none">
                  <option className="bg-[#0a0a0f]">سباحة</option>
                  <option className="bg-[#0a0a0f]">كرة قدم</option>
                  <option className="bg-[#0a0a0f]">كمال أجسام / فتنس</option>
                  <option className="bg-[#0a0a0f]">أخرى</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  هل تعاني من إصابات حالية؟
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-primary transition-all font-bold">نعم</button>
                  <button className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-primary transition-all font-bold">لا</button>
                </div>
              </div>
              <button 
                onClick={handleNext}
                disabled={loading}
                className="w-full bg-primary text-[#0a0a0f] font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all"
              >
                {loading ? "جاري الحفظ..." : "إتمام التسجيل"}
                <ArrowRight className="w-5 h-5 -rotate-180" />
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-6 animate-in zoom-in duration-500">
               <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 border border-primary/40">
                  <CheckCircle className="w-10 h-10 text-primary" />
               </div>
               <h2 className="text-2xl font-black mb-4">تم التسجيل بنجاح!</h2>
               <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  توجّه الآن لموظف بيستانس في المقر لعمل تقييم الـ <span className="text-primary font-bold">InBody</span> مجاناً وبدء رحلتك.
               </p>
               <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
                  <div className="text-[10px] text-primary font-black uppercase mb-1">رقم العضوية المؤقت</div>
                  <div className="text-xl font-mono font-bold tracking-widest text-primary">BS-5590-QX</div>
               </div>
               <button 
                 onClick={() => window.location.href = '/'}
                 className="w-full py-4 rounded-xl border border-white/20 font-bold hover:bg-white/5 transition-all"
               >
                 العودة للرئيسية
               </button>
            </div>
          )}
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-3 text-gray-500">
            <QrCode className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest italic">Powered by B•Stance Sports OS</span>
        </div>
      </div>
    </div>
  );
}
