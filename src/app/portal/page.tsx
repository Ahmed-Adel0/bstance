"use client";
import { User, Shield, Briefcase, Zap, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortalSelectionPage() {
  const portals = [
    { title: "بوابة اللاعب", desc: "تابع تمارينك وتغذيتك يومياً", icon: User, href: "/athlete", color: "blue" },
    { title: "بوابة المتخصص", icon: Shield, desc: "إدارة اللاعبين والخطط التدريبية", href: "/specialist", color: "green" },
    { title: "بوابة الشركات والأكاديميات", icon: Briefcase, desc: "إدارة المؤسسات الرياضية الكبرى", href: "/admin", color: "yellow" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden" dir="rtl">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-4xl w-full relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
                        <Zap className="w-6 h-6 text-primary-foreground" />
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-black mb-2">اختر البوابة المناسبة</h1>
                <p className="text-muted-foreground mb-12">سجل دخولك أو انتقل إلى مساحة عملك</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
                {portals.map((p, i) => (
                    <motion.div
                        key={p.href}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                        <Link
                            href={p.href}
                            className="glass-card group p-8 rounded-3xl border border-border bg-background/40 flex flex-col items-center text-center gap-6 hover:border-primary/40 hover:bg-secondary/40 transition-all flex-1 h-full shadow-lg"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all border border-border group-hover:border-primary/20 shadow-inner">
                                <p.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed font-bold">{p.desc}</p>
                            </div>
                            <div className="mt-auto w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                                <ChevronLeft className="w-5 h-5 text-primary" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12"
            >
                <Link href="/" className="text-xs font-bold text-muted-foreground hover:text-foreground transition-all">
                    العودة للرئيسية
                </Link>
            </motion.div>
        </div>
    </div>
  );
}
