"use client";
import { Zap, Target, Heart, Users } from "lucide-react";

const team = [
  { name: "د. أحمد فضل", role: "أخصائي التغذية والإنتاجية", icon: "AF", specialty: "خبير بناء الأنظمة الغذائية الذكية - 10 سنوات خبرة" },
  { name: "كابتن النحاس", role: "خبير الاستشفاء والريكافري", icon: "AN", specialty: "متخصص علوم الاستشفاء البدني والحجامة الرياضية" },
  { name: "كابتن عرفات", role: "خبير التدريب الرياضي", icon: "CA", specialty: "مدرب أحمال متخصص في تطوير الأداء البدني" },
  { name: "كابتن الملا", role: "متخصص التأهيل والريكافري", icon: "KM", specialty: "خبير تأهيل رياضي ومتابعة ما بعد الإصابات" },
];

const values = [
  { icon: Target, title: "النتائج أولاً", desc: "كل قرار نتخذه مبني على تحسين نتائج اللاعب الفعلية على أرض الملعب." },
  { icon: Zap, title: "نظام التشغيل الرياضي (OS)", desc: "نحن لا نقدم مجرد تدريب، بل نظام تشغيل رقمي يربط كل جوانب حياتك الرياضية." },
  { icon: Heart, title: "التواجد الذكي", desc: "نحن معك أينما كنت؛ في بيتك، أو في الجيم الشريك، أو في مركزنا للاستشفاء." },
  { icon: Users, title: "الشراكة المجتمعية", desc: "نؤمن بدورنا في بناء جيل رياضي مصري قادر على المنافسة عالمياً." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
               مهمتنا: <span className="text-gradient-hero">رقمنة</span> الاحتراف الرياضي
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              B•Stance هي أول نظام تشغيل رياضي في مصر يهدف لتمكين الرياضيين من الوصول للعالمية من خلال تكامل العلم والتكنولوجيا.
            </p>
          </div>

          {/* Story */}
          <div className="glass-card rounded-2xl p-8 mb-14 border border-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">رؤيتنا</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    بدأت B•Stance لتغيير مفهوم التدريب في مصر. نحن لا نمتلك المباني، بل نمتلك "المنهجية والنتائج". استراتيجيتنا هي **التواجد الذكي**؛ حيث يتواجد خبراؤنا وأنظمتنا في كل مكان تحتاجه.
                  </p>
                  <p>
                    نحن ندمج بين التدريب البدني الاحترافي، والتغذية العلمية الدقيقة، وبروتوكولات الاستشفاء المتقدمة، لنوفر للاعب تجربة "نظام تشغيل رياضي" شامل.
                  </p>
                  <p>
                    من خلال شراكاتنا مع أفضل الجيمات والأكاديميات والأندية، نصل بخدماتنا لكل رياضي يسعى للتميز، مدعومين بمنصة رقمية تتابع كل تفاصيل تقدمه.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "لاعب نشط", val: "1200+" },
                  { label: "جيم وأكاديمية شريكة", val: "15+" },
                  { label: "جلسة استشفاء شهرياً", val: "400+" },
                  { label: "مدرب خبير", val: "10+" },
                ].map((s) => (
                  <div key={s.label} className="bg-secondary/50 rounded-xl p-5 text-center border border-border/50">
                    <div className="text-3xl font-black text-primary">{s.val}</div>
                    <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-3xl font-black text-center mb-10">ركائز التميز</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="glass-card rounded-xl p-6 flex gap-4 border border-border hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="text-center mb-12">
               <h2 className="text-3xl font-black mb-4">نخبة الخبراء (The Masters)</h2>
               <p className="text-muted-foreground">فريق متكامل يعمل لخدمة هدف واحد: نجاحك الرياضي</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((m) => (
                <div key={m.name} className="glass-card rounded-2xl p-6 text-center border border-border group hover:border-primary/40 transition-all">
                  <div className="w-20 h-20 rounded-full bg-secondary border border-primary/20 flex items-center justify-center text-primary font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-all">
                    {m.icon}
                  </div>
                  <div className="font-black text-lg">{m.name}</div>
                  <div className="text-xs text-primary font-bold mt-1 mb-3">{m.role}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed px-4">{m.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
