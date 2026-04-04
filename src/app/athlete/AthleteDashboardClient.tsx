"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { Dumbbell, Salad, Heart, TrendingUp, CheckCircle, Calendar, Flame, Target } from "lucide-react";
import StatsCard from "@/components/ui/StatsCard";

const weeklyData = [
  { day: "سبت", training: 85, nutrition: 70, recovery: 90 },
  { day: "أحد", training: 88, nutrition: 75, recovery: 85 },
  { day: "اثنين", training: 72, nutrition: 80, recovery: 88 },
  { day: "ثلاثاء", training: 90, nutrition: 85, recovery: 92 },
  { day: "أربعاء", training: 78, nutrition: 88, recovery: 80 },
  { day: "خميس", training: 92, nutrition: 72, recovery: 91 },
  { day: "جمعة", training: 65, nutrition: 90, recovery: 95 },
];

const radarData = [
  { subject: "القوة", A: 85 },
  { subject: "السرعة", A: 78 },
  { subject: "المرونة", A: 62 },
  { subject: "التحمل", A: 88 },
  { subject: "الرشاقة", A: 74 },
  { subject: "التوازن", A: 80 },
];

const typeColor: Record<string, string> = {
  training: "text-green-400",
  nutrition: "text-blue-400",
  recovery: "text-yellow-400",
};

interface AthleteDashboardClientProps {
  profile: any;
  initialWorkouts: any[];
  initialNutrition: any[];
}

export default function AthleteDashboardClient({ profile, initialWorkouts, initialNutrition }: AthleteDashboardClientProps) {
  // Map workouts to task format
  const workoutTasks = initialWorkouts.flatMap(w => 
    (w.exercises || []).map((ex: any) => ({
      label: ex.name || 'تمرين',
      type: 'training',
      done: w.is_completed
    }))
  );

  // If no real workouts, use dummy for display if needed, but for MVP let's show real data
  const displayTasks = workoutTasks.length > 0 ? workoutTasks : [
    { label: "لم يتم تعيين تمارين لليوم بعد", type: "training", done: false }
  ];

  const completedTasks = displayTasks.filter((t) => t.done).length;

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black">مرحباً، {profile.full_name?.split(' ')[0] || 'بطل'}! 👋</h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            {new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
          <Flame className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold">بداية جديدة</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="أداء اليوم" value={`${Math.round((completedTasks / displayTasks.length) * 100)}%`} sub="من الخطة اليومية" icon={Target} color="green" />
        <StatsCard title="التمارين" value={`${completedTasks}/${displayTasks.length}`} sub="تمارين مكتملة اليوم" icon={Dumbbell} color="green" />
        <StatsCard title="نقاط الرياضة" value="0" sub="إجمالي النقاط المجمعة" icon={Salad} color="blue" />
        <StatsCard title="جلسة الاستشفاء" value="-- " sub="لم يتم التعيين" icon={Heart} color="yellow" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Weekly Chart */}
        <div className="lg:col-span-2 glass-card rounded-xl p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-semibold">الأداء الأسبوعي</h2>
            <div className="flex gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />تدريب</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />تغذية</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500 inline-block" />استشفاء</span>
            </div>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="colorTraining" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorNutrition" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="day" tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#6b7280", fontSize: 11 }} axisLine={false} tickLine={false} domain={[50, 100]} />
                <Tooltip
                  contentStyle={{ background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", fontSize: "12px" }}
                />
                <Area type="monotone" dataKey="training" stroke="#22c55e" strokeWidth={2} fill="url(#colorTraining)" />
                <Area type="monotone" dataKey="nutrition" stroke="#3b82f6" strokeWidth={2} fill="url(#colorNutrition)" />
                <Area type="monotone" dataKey="recovery" stroke="#eab308" strokeWidth={2} fill="transparent" strokeDasharray="4 2" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="glass-card rounded-xl p-5">
          <h2 className="font-semibold mb-4 text-right">ملف الأداء</h2>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#6b7280", fontSize: 10 }} />
                <Radar name="الأداء" dataKey="A" stroke="#22c55e" fill="#22c55e" fillOpacity={0.2} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Today's Tasks */}
        <div className="glass-card rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">مهام اليوم</h2>
            <span className="text-xs text-muted-foreground">{completedTasks}/{displayTasks.length} مكتمل</span>
          </div>
          <div className="mb-3 h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${(completedTasks / displayTasks.length) * 100}%` }}
            />
          </div>
          <div className="space-y-2">
            {displayTasks.map((t, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${t.done ? "bg-secondary/20" : "bg-secondary/40"}`}>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${t.done ? "bg-primary border-primary" : "border-border"}`}>
                  {t.done && <CheckCircle className="w-2.5 h-2.5 text-primary-foreground" />}
                </div>
                <span className={`text-sm flex-1 ${t.done ? "text-muted-foreground line-through" : ""}`}>{t.label}</span>
                <span className={`text-xs font-medium ${typeColor[t.type] || 'text-primary'}`}>
                  {t.type === "training" ? "تدريب" : t.type === "nutrition" ? "تغذية" : "استشفاء"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming */}
        <div className="glass-card rounded-xl p-5">
          <h2 className="font-semibold mb-4">القادم هذا الأسبوع</h2>
          <div className="space-y-3">
             <div className="p-8 text-center text-muted-foreground text-xs italic">
                لا توجد أحداث قادمة حالياً. انتظر تحديث المدرب.
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
