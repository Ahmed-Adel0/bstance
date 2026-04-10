import Link from 'next/link'
import { login } from '@/app/auth/actions'
import { Zap, ChevronLeft, Mail, Lock, CheckCircle2 } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 relative overflow-hidden" dir="rtl">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-md w-full relative z-10">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <Link href="/" className="flex items-center gap-2 mb-4 group transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <Zap className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
            </div>
            <span className="font-black text-2xl tracking-tighter italic">B•STANCE</span>
          </Link>
          <div className="h-px w-12 bg-primary/30" />
        </div>

        {/* Login Card */}
        <div className="glass-card rounded-[2.5rem] p-8 border border-white/5 shadow-2xl backdrop-blur-xl bg-black/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black mb-2 tracking-tight">تسجيل الدخول</h1>
            <p className="text-muted-foreground text-sm font-medium">عد لمواصلة تدريباتك وتطوير أدائك</p>
          </div>

          <form action={login} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/70 mr-4" htmlFor="email">البريد الإلكتروني</label>
              <div className="relative group">
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all font-medium placeholder:text-muted-foreground/30 shadow-inner"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary/70 mr-4" htmlFor="password">كلمة المرور</label>
              <div className="relative group">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-12 py-4 text-sm focus:outline-none focus:border-primary/40 focus:bg-white/[0.05] transition-all font-medium placeholder:text-muted-foreground/30 shadow-inner"
                />
              </div>
            </div>

            <div className="flex justify-between items-center px-2 pt-2">
               <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-4 h-4 border border-white/10 rounded transition-colors group-hover:border-primary/50" />
                  <span className="text-[10px] font-bold text-muted-foreground">تذكرني</span>
               </label>
               <Link href="#" className="text-[10px] font-bold text-primary hover:underline underline-offset-4">نسيت كلمة المرور؟</Link>
            </div>

            <button
               type="submit"
               className="w-full h-14 bg-primary text-primary-foreground rounded-2xl font-black text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 mt-8 group active:scale-[0.98]"
            >
               دخول للمنصة
               <Zap className="w-4 h-4 fill-current group-hover:animate-pulse" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center space-y-4">
            <p className="text-xs text-muted-foreground font-medium">ليس لديك حساب؟</p>
            <Link 
               href="/signup" 
               className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/5 hover:border-primary/20 hover:bg-white/[0.02] transition-all text-xs font-black text-foreground group"
            >
               أنشئ حساباً جديداً
               <ChevronLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Footer Security Note */}
        <div className="mt-8 flex items-center justify-center gap-2 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default">
           <CheckCircle2 className="w-3 h-3" />
           <span className="text-[9px] font-black tracking-[0.2em]">SECURE ACCESS • END-TO-END ENCRYPTED</span>
        </div>
      </div>
    </div>
  )
}
