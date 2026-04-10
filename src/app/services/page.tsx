import Link from "next/link";
import { Dumbbell, Salad, Heart, CheckCircle, ArrowRight, Monitor, MapPin, Video, Users, Clock } from "lucide-react";

const services = [
  {
    id: "training",
    icon: Dumbbell,
    title: "التدريب",
    subtitle: "Training Program",
    color: "green",
    gradient: "from-green-500/20 to-green-500/5",
    borderColor: "border-green-500/20",
    delivery: ["Online", "Offline"],
    description:
      "برامج تدريبية مخصصة ومصممة من قِبَل مدربين معتمدين تناسب مستواك وأهدافك. نستخدم أحدث الأساليب العلمية لتطوير القوة والسرعة واللياقة.",
    features: [
      "تقييم شامل للمستوى الحالي",
      "برنامج تدريبي أسبوعي مخصص",
      "فيديوهات توضيحية لكل تمرين",
      "مراقبة الأداء في الوقت الفعلي",
      "تعديل البرامج كل 4 أسابيع",
      "تواصل مباشر مع المدرب",
    ],
    target: ["ناشئو الأكاديميات (12–18 سنة)", "لاعبو الجيم", "الرياضيون المحترفون"],
    icon2: Monitor,
    icon2Label: "متاح أونلاين",
    icon3: MapPin,
    icon3Label: "جلسات حضورية",
  },
  {
    id: "nutrition",
    icon: Salad,
    title: "التغذية",
    subtitle: "Nutrition Plan",
    color: "blue",
    gradient: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
    delivery: ["Online"],
    description:
      "خطط غذائية علمية مصممة لدعم أهدافك الرياضية. أخصائيو التغذية المعتمدون يتابعون تغذيتك يومياً ويعدّلون الخطة بناءً على تقدمك.",
    features: [
      "تحليل الاحتياجات الغذائية",
      "خطة وجبات أسبوعية مفصلة",
      "تتبع السعرات والبروتين يومياً",
      "بدائل غذائية ذكية",
      "وصفات صحية سهلة التحضير",
      "استشارات أسبوعية مع الأخصائي",
    ],
    target: ["جميع الرياضيين", "الراغبين في إنقاص/زيادة الوزن", "الناشئون وأولياء الأمور"],
    icon2: Video,
    icon2Label: "استشارات أونلاين",
    icon3: Clock,
    icon3Label: "متابعة 24/7",
  },
  {
    id: "recovery",
    icon: Heart,
    title: "الاستشفاء",
    subtitle: "Recovery System",
    color: "yellow",
    gradient: "from-yellow-500/20 to-yellow-500/5",
    borderColor: "border-yellow-500/20",
    delivery: ["Offline"],
    description:
      "منظومة استشفاء متكاملة تشمل جلسات المساج الرياضي التخصصي (Quick, Deep, Athletic, Reset) وجلسات الحجامة العلمية لتسريع التعافي العضلي، التخلص من السموم، وإعادة توازن الجسم.",
    features: [
      "جلسات مساج رياضي متنوعة (من 20 إلى 75 دقيقة)",
      "حجامة استشفائية (موضعية أو شاملة للجسم)",
      "تقنيات Massage Gun وأدوات تدليك احترافية",
      "استخدام الفوطة النارية (Hot Towel) لتهدئة العضلات",
      "تحسين جودة النوم وتقليل الالتهابات المزمنة",
      "برامج مخصصة للرياضيين المحترفين والهواة المتقدمين",
    ],
    target: [
      "الرياضيون المحترفون والهواة المتقدمون",
      "أصحاب المهن المكتبية ومن يعانون من إجهاد مزمن",
      "الراغبون في تحسين جودة النوم وتقليل التوتر",
      "أصحاب المهن التي تتطلب مجهوداً بدنياً عالياً",
    ],
    icon2: MapPin,
    icon2Label: "حضوري فقط",
    icon3: Users,
    icon3Label: "فريق متخصص",
  },
];

const colorMap: Record<string, string> = {
  green: "text-green-400 bg-green-500/10 border-green-500/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black tracking-tight mb-4">
              خدماتنا <span className="text-gradient-hero">المتكاملة</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              تدريب + تغذية + استشفاء – ثلاثة محاور مدروسة لبناء لاعب متكامل
            </p>
          </div>

          {/* Services */}
          <div className="space-y-10">
            {services.map((s, idx) => (
              <div
                key={s.id}
                className={`glass-card rounded-3xl overflow-hidden border ${s.borderColor}`}
              >
                <div className={`bg-gradient-to-r ${s.gradient} p-8`}>
                  <div className={`flex flex-col lg:flex-row gap-8 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Left */}
                    <div className="flex-1 space-y-5">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${colorMap[s.color]}`}>
                        <s.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-muted-foreground mb-1">{s.subtitle}</div>
                        <h2 className="text-3xl font-black">{s.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{s.description}</p>
                      {/* Delivery badges */}
                      <div className="flex gap-2">
                        {s.delivery.map((d) => (
                          <span key={d} className={`px-3 py-1 rounded-full text-xs font-semibold border ${colorMap[s.color]}`}>
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <s.icon2 className="w-4 h-4" />
                          {s.icon2Label}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <s.icon3 className="w-4 h-4" />
                          {s.icon3Label}
                        </div>
                      </div>
                    </div>
                    {/* Right */}
                    <div className="flex-1 space-y-5">
                      <div>
                        <div className="text-sm font-semibold mb-3">ما تحصل عليه:</div>
                        <ul className="space-y-2">
                          {s.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-semibold mb-2">مناسب لـ:</div>
                        <div className="flex flex-col gap-1.5">
                          {s.target.map((t) => (
                            <div key={t} className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/30 rounded-lg px-3 py-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              {t}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all green-glow"
            >
              شاهد الباقات والأسعار
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
