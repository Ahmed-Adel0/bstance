"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  Ticket, 
  ArrowRight, 
  MapPin, 
  Building2,
  LayoutDashboard,
  Zap,
  CheckCircle2
} from "lucide-react";

export default function CorporateActivate() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      if (code.toLowerCase() === "bstance2025") {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4" dir="rtl">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-md w-full glass-card p-8 md:p-10 rounded-[2rem] border border-border relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black mb-2">تفعيل اشتراك الشركات</h1>
          <p className="text-sm text-muted-foreground">أدخل الكود الخاص بشركتك لتفعيل باقة بيستانس الخاصة بك.</p>
        </div>

        {status !== "success" ? (
          <form onSubmit={handleActivate} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold pr-2 uppercase tracking-widest text-muted-foreground">كود التفعيل</label>
              <div className="relative">
                <Ticket className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full bg-secondary/30 border border-border p-4 pr-12 rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all font-mono tracking-widest" 
                  placeholder="EX: BST-XXXX-XXXX"
                  required
                />
              </div>
              {status === "error" && (
                <p className="text-xs text-destructive mt-1 pr-2">الكود غير صحيح، يرجى التأكد منه ومعاودة المحاولة.</p>
              )}
            </div>

            <button 
              type="submit"
              disabled={status === "loading"}
              className={`w-full bg-primary text-primary-foreground font-black py-4 rounded-xl transition-all flex items-center justify-center gap-3 ${status === "loading" ? "opacity-70 cursor-wait" : "hover:shadow-[0_0_25px_rgba(57,255,20,0.3)]"}`}
            >
              {status === "loading" ? "جاري التحقق..." : "تفعيل الآن"}
              <ArrowRight className="w-5 h-5 -rotate-180" />
            </button>
          </form>
        ) : (
          <div className="text-center animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6 border border-green-500/30">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-black mb-4">تم التفعيل بنجاح!</h2>
            <p className="text-sm text-muted-foreground mb-8">
              أهلاً بك في عائلة بيستانس. لقد تم تفعيل باقة <span className="text-primary font-bold">باقة الشركات الشاملة</span> الخاصة بك.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border text-right">
                <LayoutDashboard className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                   <div className="text-sm font-bold">بوابة الموظف (B•Stance OS)</div>
                   <div className="text-xs text-muted-foreground">تم تفعيل حسابك الرقمي الموحد لمتابعة التغذية والتدريب من أي مكان.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border text-right">
                <Zap className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                   <div className="text-sm font-bold">الخدمات الميدانية (On-site)</div>
                   <div className="text-xs text-muted-foreground">باقتك تشمل جلسات استشفاء دورية في مقر الشركة، يمكنك معرفة مواعيدها من لوحة التحكم.</div>
                </div>
              </div>
            </div>

            <Link href="/athlete" className="w-full bg-primary text-primary-foreground font-black py-4 rounded-xl block hover:shadow-[0_0_25px_rgba(57,255,20,0.3)] transition-all">
              دخول لوحة التحكم الرقمية
            </Link>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-border flex flex-col gap-4 text-center">
          <p className="text-xs text-muted-foreground italic">
            تواجه مشكلة في التفعيل؟ تواصل مع مسؤول الموارد البشرية (HR) في شركتك أو راسلنا مباشرة.
          </p>
          <Link href="/corporate" className="text-xs text-primary font-bold hover:underline">
            تعرف أكثر عن خدمات الشركات
          </Link>
        </div>
      </div>
    </div>
  );
}
