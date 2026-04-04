import { Zap, Target, Heart, Users } from "lucide-react";

const team = [
  { name: "د. محمد الشريف", role: "المؤسس ومدير أداء رياضي", icon: "MS", specialty: "علوم الرياضة – 12 سنة خبرة" },
  { name: "أ. سارة حسن", role: "أخصائية تغذية رياضية", icon: "SH", specialty: "RD معتمدة – 8 سنوات خبرة" },
  { name: "د. أحمد قاسم", role: "أخصائي استشفاء وعلاج طبيعي", icon: "AK", specialty: "PT معتمد – 10 سنوات خبرة" },
  { name: "أ. نورا إبراهيم", role: "مديرة العمليات", icon: "NI", specialty: "MBA – خبرة في Sports Tech" },
  { name: "أ. كريم يوسف", role: "كبير مطوري البرمجيات", icon: "KY", specialty: "Full Stack – بناء المنصة الرقمية" },
  { name: "أ. منى السيد", role: "مديرة علاقات العملاء", icon: "MS2", specialty: "متخصصة في تجربة المستخدم" },
];

const values = [
  { icon: Target, title: "النتائج أولاً", desc: "كل قرار نتخذه مبني على تحسين نتائج اللاعب الفعلية على أرض الملعب." },
  { icon: Zap, title: "العلم والتكنولوجيا", desc: "نستخدم أحدث الأبحاث العلمية والتكنولوجيا الرقمية لرسم خطط دقيقة." },
  { icon: Heart, title: "الاهتمام الحقيقي", desc: "كل لاعب بالنسبة لنا حالة خاصة – نتعامل معه باهتمام شخصي حقيقي." },
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
            <h1 className="text-5xl font-black tracking-tight mb-4">
              من نحن؟
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              B•Stance وُلدت من رؤية بسيطة: كل رياضي مصري يستحق منهجية تدريب احترافية ومتكاملة، بغض النظر عن إمكانياته المادية.
            </p>
          </div>

          {/* Story */}
          <div className="glass-card rounded-2xl p-8 mb-14">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-black mb-4">قصتنا</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    بدأت B•Stance عام 2023 عندما لاحظ فريقنا فجوة كبيرة في السوق المصري: الرياضيون الناشئون لا يجدون نظاماً متكاملاً يربط التدريب بالتغذية والاستشفاء.
                  </p>
                  <p>
                    معظم الأكاديميات تركز على التدريب فقط، بينما تُهمَل التغذية الرياضية والاستشفاء اللذان يمثلان 60% من التطور الفعلي للاعب.
                  </p>
                  <p>
                    قررنا بناء منظومة رقمية متكاملة تضم مدربين وأخصائيي تغذية وخبراء استشفاء تحت سقف واحد، بسعر يناسب السوق المصري.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "سنة التأسيس", val: "2023" },
                  { label: "لاعب نشط", val: "500+" },
                  { label: "أكاديمية شريكة", val: "20+" },
                  { label: "محافظات خدمة", val: "8" },
                ].map((s) => (
                  <div key={s.label} className="bg-secondary/50 rounded-xl p-5 text-center">
                    <div className="text-3xl font-black text-gradient-green">{s.val}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-center mb-10">قيمنا</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="glass-card rounded-xl p-6 flex gap-4">
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
            <h2 className="text-3xl font-black text-center mb-10">فريقنا</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((m) => (
                <div key={m.name} className="glass-card rounded-xl p-5 text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                    {m.name[0]}
                  </div>
                  <div className="font-semibold">{m.name}</div>
                  <div className="text-xs text-primary mt-0.5">{m.role}</div>
                  <div className="text-xs text-muted-foreground mt-1">{m.specialty}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
