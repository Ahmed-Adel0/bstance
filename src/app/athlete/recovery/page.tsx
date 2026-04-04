"use client";
import { Calendar, Heart, Clock, MapPin, CheckCircle, AlertTriangle, Zap } from "lucide-react";

const sessions = [
  {
    id: 1,
    type: "تدليك رياضي",
    date: "الخميس 26 ديسمبر",
    time: "4:00 م",
    duration: "60 دقيقة",
    specialist: "د. أحمد قاسم",
    location: "B•Stance Center – القاهرة",
    status: "قادمة",
    color: "green",
  },
  {
    id: 2,
    type: "علاج طبيعي – Electrotherapy",
    date: "السبت 28 ديسمبر",
    time: "10:00 ص",
    duration: "45 دقيقة",
    specialist: "د. أحمد قاسم",
    location: "B•Stance Center – القاهرة",
    status: "قادمة",
    color: "blue",
  },
  {
    id: 3,
    type: "Ice Bath",
    date: "الثلاثاء 24 ديسمبر",
    time: "5:30 م",
    duration: "20 دقيقة",
    specialist: "أ. كريم سالم",
    location: "B•Stance Center – القاهرة",
    status: "مكتملة",
    color: "yellow",
  },
];

const fatigueData = [
  { area: "الأرجل", level: 75, status: "تعب متوسط" },
  { area: "الظهر", level: 40, status: "جيد" },
  { area: "الكتفان", level: 60, status: "تعب خفيف" },
  { area: "القلب والأوعية", level: 30, status: "ممتاز" },
];

const recoveryTips = [
  { icon: "💧", tip: "اشرب 3 لتر ماء يومياً للإسراع في التعافي العضلي" },
  { icon: "😴", tip: "النوم 8-9 ساعات ليلاً ضروري لإفراز هرمون النمو" },
  { icon: "🧘", tip: "10 دقائق تنفس عميق بعد التمرين تخفض الكورتيزول" },
  { icon: "🥗", tip: "بروتين بعد 30 دقيقة من التمرين يسرع بناء العضل" },
];

const statusColor: Record<string, string> = {
  قادمة: "text-green-400 bg-green-500/10 border-green-500/20",
  مكتملة: "text-muted-foreground bg-secondary/30 border-border",
};

const fatigueColor = (level: number) => {
  if (level < 40) return "bg-green-500";
  if (level < 65) return "bg-yellow-500";
  return "bg-red-500";
};

export default function RecoveryPage() {
  return (
    <div className="space-y-6" dir="rtl">
      <div>
        <h1 className="text-2xl font-black">نظام الاستشفاء</h1>
        <p className="text-muted-foreground text-sm mt-0.5">متابعة التعافي وحجز الجلسات</p>
      </div>

      {/* Recovery Score */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="glass-card rounded-xl p-5 md:col-span-1 border border-border">
          <div className="text-sm text-muted-foreground mb-2">مؤشر الاستشفاء اليوم</div>
          <div className="flex items-center gap-3">
            <div className="text-5xl font-black text-green-400">82</div>
            <div>
              <div className="text-sm font-semibold text-green-400">ممتاز</div>
              <div className="text-xs text-muted-foreground">جسمك جاهز للتدريب</div>
            </div>
          </div>
          <div className="mt-3 h-2 bg-border rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full" style={{ width: "82%" }} />
          </div>
        </div>

        <div className="glass-card rounded-xl p-5 border border-border flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
            <Heart className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-2xl font-black">58 bpm</div>
            <div className="text-xs text-muted-foreground">معدل ضربات القلب أثناء الراحة</div>
            <div className="text-xs text-green-400">ممتاز للرياضيين</div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-5 border border-border flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
            <Zap className="w-5 h-5 text-yellow-400" />
          </div>
          <div>
            <div className="text-2xl font-black">8.2h</div>
            <div className="text-xs text-muted-foreground">نوم الليلة الماضية</div>
            <div className="text-xs text-green-400">مثالي للتعافي</div>
          </div>
        </div>
      </div>

      {/* Fatigue Map */}
      <div className="glass-card rounded-xl p-5 border border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-right">خريطة الإرهاق العضلي</h2>
          <AlertTriangle className="w-4 h-4 text-yellow-400" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
          {fatigueData.map((f) => (
            <div key={f.area} className="flex flex-col gap-2 p-3 bg-secondary/20 rounded-xl border border-border">
               <div className="flex justify-between items-center text-xs">
                 <span className="font-bold text-sm">{f.area}</span>
                 <span className={`px-2 py-0.5 rounded-full ${fatigueColor(f.level)} bg-opacity-20 text-[10px] font-bold`}>{f.status}</span>
               </div>
              <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${fatigueColor(f.level)}`} style={{ width: `${f.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Sessions */}
        <div className="glass-card rounded-xl p-5 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">جلسات الاستشفاء</h2>
            <button className="text-xs text-primary hover:underline font-bold">+ حجز جلسة</button>
          </div>
          <div className="space-y-3">
            {sessions.map((s) => (
              <div key={s.id} className="p-4 bg-secondary/30 rounded-xl border border-border group hover:border-primary/20 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold tracking-tight text-sm">{s.type}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${statusColor[s.status]}`}>
                    {s.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {s.date}
                  </div>
                   <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {s.time} ({s.duration})
                  </div>
                  <div className="flex items-center gap-1.5 col-span-2">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {s.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Tips */}
        <div className="glass-card rounded-xl p-5 border border-border">
          <h2 className="font-semibold mb-4 text-right">توصيات الاستشفاء</h2>
          <div className="space-y-3">
            {recoveryTips.map((t, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl border border-border text-right">
                <span className="text-xl shadow-lg bg-background w-10 h-10 rounded-lg flex items-center justify-center shrink-0">{t.icon}</span>
                <p className="text-sm text-muted-foreground leading-relaxed pt-2">{t.tip}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 border border-green-500/20 bg-green-500/5 rounded-xl flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="text-green-400 font-bold block mb-1">مستوى الاستشفاء ممتاز!</span> يمكنك تنفيذ برنامج التدريب الأسبوعي بشدة عالية دون خوف من الإصابات.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
