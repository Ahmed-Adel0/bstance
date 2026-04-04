"use client";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend,
} from "recharts";
import { TrendingUp, Award, Target, Zap, CheckCircle, ChevronRight, Activity, Calendar } from "lucide-react";
import StatsCard from "@/components/ui/StatsCard";

const performanceHistory = [
  { week: "أسبوع 1", speed: 28, strength: 72, endurance: 65, weight: 70.5 },
  { week: "أسبوع 2", speed: 29, strength: 75, endurance: 67, weight: 70.2 },
  { week: "أسبوع 3", speed: 30, strength: 78, endurance: 70, weight: 69.8 },
  { week: "أسبوع 4", speed: 30.5, strength: 80, endurance: 72, weight: 69.5 },
  { week: "أسبوع 6", speed: 31, strength: 84, endurance: 75, weight: 69.1 },
  { week: "أسبوع 8", speed: 32, strength: 88, endurance: 78, weight: 68.7 },
  { week: "أسبوع 10", speed: 33, strength: 91, endurance: 82, weight: 68.2 },
  { week: "أسبوع 12", speed: 33.5, strength: 93, endurance: 84, weight: 67.8 },
  { week: "أسبوع 14", speed: 34, strength: 95, endurance: 87, weight: 67.5 },
];

const weeklyScores = [
  { week: "أسبوع 11", training: 85, nutrition: 78, recovery: 88 },
  { week: "أسبوع 12", training: 90, nutrition: 82, recovery: 85 },
  { week: "أسبوع 13", training: 88, nutrition: 80, recovery: 90 },
  { week: "أسبوع 14", training: 92, nutrition: 85, recovery: 91 },
];

const milestones = [
  { title: "أول تمرين مكتمل", date: "1 سبتمبر", icon: "🎯", done: true },
  { title: "أول أسبوع متواصل", date: "8 سبتمبر", icon: "🔥", done: true },
  { title: "تحسين السرعة 10%", date: "15 أكتوبر", icon: "⚡", done: true },
  { title: "رفع سكوات 90 كجم", date: "1 نوفمبر", icon: "💪", done: true },
  { title: "14 يوم متتالي", date: "28 ديسمبر", icon: "🏆", done: true },
  { title: "السرعة 35 كم/ساعة", date: "الهدف القادم", icon: "🚀", done: false },
];

export default function ProgressPage() {
  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-black">تحليلات التطور الشامل (14 أسبوع)</h1>
           <p className="text-muted-foreground text-sm mt-0.5">تقرير الحالة البدنية – الأسبوع 14</p>
        </div>
        <div className="flex items-center gap-2">
            <button className="px-4 py-2.5 bg-secondary/50 rounded-xl border border-border text-xs font-black text-muted-foreground hover:text-foreground transition-all flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                تحميل التقرير الكامل
            </button>
        </div>
      </div>

      {/* Grid for Quick Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "السرعة القصوى", before: "28 كم/ساعة", now: "34 كم/ساعة", improve: "+21%", color: "green", icon: Zap },
          { label: "أقوى سكوات", before: "72 كجم", now: "95 كجم", improve: "+32%", color: "blue", icon: Activity },
          { label: "معدل التحمل", before: "65", now: "87", improve: "+34%", color: "yellow", icon: TrendingUp },
          { label: "الوزن المثالي", before: "70.5 كجم", now: "67.5 كجم", improve: "-3 كجم", color: "green", icon: Target },
        ].map((m) => (
          <div key={m.label} className="glass-card rounded-2xl p-5 border border-border group hover:border-primary/20 transition-all relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4 relative z-10">
               <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-secondary/60 group-hover:bg-primary/10 transition-colors`}>
                  <m.icon className={`w-5 h-5 ${m.color === 'green' ? 'text-green-400' : m.color === 'blue' ? 'text-blue-400' : 'text-yellow-400'}`} />
               </div>
               <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none">{m.label}</span>
            </div>
            <div className="text-2xl font-black mb-1 group-hover:scale-105 transition-transform tracking-tight">{m.now}</div>
            <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground opacity-60">
               <span className="line-through">{m.before}</span>
               <span className="text-green-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {m.improve}
               </span>
            </div>
            <div className={`absolute top-0 right-0 w-2 h-2 rounded-full m-5 shadow-glow shadow-${m.color}-500/40 opacity-40`} />
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Main Progression Graph */}
        <div className="glass-card rounded-[32px] p-8 border border-border bg-background/20 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
           <div className="flex items-center justify-between mb-8">
              <h2 className="font-black text-sm uppercase tracking-widest text-primary border-r-2 border-primary pr-3">مسيرة التطور (Evolution Journey)</h2>
              <div className="flex gap-4">
                 {["السرعة", "القوة", "التحمل"].map((t, idx) => (
                    <div key={t} className="flex items-center gap-1.5 text-[9px] font-black text-muted-foreground uppercase opacity-60">
                        <div className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-green-500' : idx === 1 ? 'bg-blue-500' : 'bg-yellow-500'}`} />
                        {t}
                    </div>
                 ))}
              </div>
           </div>
           <ResponsiveContainer width="100%" height={260}>
             <LineChart data={performanceHistory}>
               <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" />
               <XAxis dataKey="week" tick={{ fill: "#6b7280", fontSize: 10, fontWeight: 800 }} axisLine={false} tickLine={false} />
               <YAxis tick={{ fill: "#6b7280", fontSize: 10, fontWeight: 800 }} axisLine={false} tickLine={false} />
               <Tooltip 
                  contentStyle={{ background: "#0a0a0f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", fontSize: "11px", fontWeight: "bold" }}
                  itemStyle={{ padding: "2px 0" }}
               />
               <Line type="monotone" dataKey="speed" stroke="#22c55e" strokeWidth={3} dot={{ r: 4, fill: "#22c55e", strokeWidth: 0 }} activeDot={{ r: 6, strokeWidth: 0 }} name="السرعة" />
               <Line type="monotone" dataKey="strength" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4, fill: "#3b82f6", strokeWidth: 0 }} activeDot={{ r: 6, strokeWidth: 0 }} name="القوة" />
               <Line type="monotone" dataKey="endurance" stroke="#eab308" strokeWidth={3} dot={{ r: 4, fill: "#eab308", strokeWidth: 0 }} activeDot={{ r: 6, strokeWidth: 0 }} name="التحمل" />
             </LineChart>
           </ResponsiveContainer>
        </div>

        {/* Vertical split: Weekly Analysis & Milestones */}
        <div className="space-y-6">
           {/* Weekly Bar Chart */}
           <div className="glass-card rounded-[32px] p-8 border border-border bg-[#0a0a10]/40 relative overflow-hidden">
              <h2 className="font-black text-sm mb-8 opacity-80 border-r-2 border-primary pr-3 tracking-widest uppercase">معدلات الأداء الأسبوعي الأخير</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={weeklyScores} barSize={14} barGap={8}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.02)" />
                  <XAxis dataKey="week" tick={{ fill: "#6b7280", fontSize: 10, fontWeight: 900 }} axisLine={false} tickLine={false} />
                  <YAxis domain={[70, 100]} tick={{ fill: "#6b7280", fontSize: 10, fontWeight: 900 }} axisLine={false} tickLine={false} />
                  <Tooltip 
                     cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                     contentStyle={{ background: "#0a0a0f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", fontSize: "10px" }} 
                  />
                  <Bar dataKey="training" fill="#22c55e" name="تدريب" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="nutrition" fill="#3b82f6" name="تغذية" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="recovery" fill="#eab308" name="استشفاء" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
           </div>

           {/* Achievements / Milestones */}
           <div className="glass-card rounded-3xl p-8 border border-border bg-background/20 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Award className="w-24 h-24 text-primary" />
              </div>
              <div className="flex items-center justify-between gap-2 mb-8 relative z-10">
                 <h2 className="font-black text-sm border-r-2 border-primary pr-3 uppercase tracking-widest">خارطة الإنجازات (Achievements)</h2>
                 <Award className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="space-y-4 relative z-10 max-h-[220px] overflow-y-auto no-scrollbar pr-1">
                {milestones.map((m, i) => (
                  <div 
                    key={i} 
                    className={`flex items-center gap-5 p-4 rounded-2xl border transition-all hover:scale-[1.01] ${
                      m.done ? "bg-secondary/40 border-border/50 group" : "bg-primary/5 border-primary/20 shadow-glow"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl shadow-inner ${
                      m.done ? "bg-secondary/60 opacity-60" : "bg-primary/10 border border-primary/30"
                    }`}>
                      {m.icon}
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs font-black ${!m.done ? "text-primary group-hover:scale-105 transition-transform" : "text-muted-foreground opacity-80"}`}>{m.title}</div>
                      <div className="text-[10px] text-muted-foreground font-black uppercase tracking-tighter opacity-40 mt-0.5">{m.date}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center border ${
                      m.done ? "bg-green-500 border-green-500 text-white" : "border-primary/40 bg-secondary/50"
                    }`}>
                      {m.done ? <CheckCircle className="w-4 h-4 border-none" /> : <Target className="w-3.5 h-3.5 text-primary opacity-40 shrink-0" />}
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
