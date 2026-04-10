"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { Users, UserPlus, FileText, AlertTriangle, ChevronRight, Search, LayoutGrid, Calendar, ClipboardList } from "lucide-react";
import Link from "next/link";
import StatsCard from "@/components/ui/StatsCard";

const athleteGrowth = [
  { month: "يناير", count: 45 },
  { month: "فبراير", count: 52 },
  { month: "مارس", count: 68 },
  { month: "أبريل", count: 85 },
  { month: "مايو", count: 110 },
  { month: "يونيو", count: 142 },
];

const fatigueDistribution = [
  { name: "ممتاز", value: 45, color: "#22c55e" },
  { name: "طبيعي", value: 30, color: "#3b82f6" },
  { name: "متوسط", value: 15, color: "#eab308" },
  { name: "مرتفع", value: 10, color: "#ef4444" },
];

const alerts = [
  { id: 1, athlete: "محمد كريم", type: "تعب عضلي مرتفع", level: "critical", time: "منذ ساعة" },
  { id: 2, athlete: "يوسف علي", type: "تأخر في وجبة الغداء", level: "warning", time: "منذ ساعتين" },
  { id: 3, athlete: "أحمد رامي", type: "إتمام جلسة الاستشفاء", level: "info", time: "منذ 4 ساعات" },
];

export default function SpecialistDashboard() {
  return (
    <div className="space-y-6" dir="rtl">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-black tracking-tight">نظام إدارة الأداء</h1>
           <p className="text-muted-foreground text-sm mt-1">مرحباً د. محمد ، إليك نظرة شاملة على أداء فريقك اليوم.</p>
        </div>
        <div className="flex flex-wrap gap-2">
           <Link href="/specialist/sop" className="px-4 py-2 rounded-xl bg-secondary border border-border text-foreground font-bold text-sm flex items-center gap-2 hover:bg-secondary/70 transition-all">
              <FileText className="w-4 h-4" />
              البروتوكولات (SOPs)
           </Link>
           <Link href="/specialist/logs" className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 group">
              <ClipboardList className="w-4 h-4 group-hover:scale-110 transition-transform" />
              تسجيل جلسة
           </Link>
        </div>
      </div>

      {/* Global Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="إجمالي اللاعبين" value="142" sub="+12 هذا الشهر" icon={Users} color="green" />
        <StatsCard title="الجلسات المتبقية" value="8" sub="من أصل 12 اليوم" icon={Calendar} color="blue" />
        <StatsCard title="لاعبين بنشاط مكثف" value="28" sub="تأدية 100% من الخطة" icon={LayoutGrid} color="yellow" />
        <StatsCard title="تنبيهات حرجة" value="3" sub="تتطلب تدخل فوري" icon={AlertTriangle} color="yellow" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Growth Chart */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-border bg-background/40">
           <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-sm text-right">نمو أعداد اللاعبين</h3>
              <div className="text-xs text-muted-foreground">آخر 6 أشهر</div>
           </div>
           <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={athleteGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip
                       contentStyle={{ background: "#1a1a2e", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", fontSize: "11px" }}
                       cursor={{ fill: "rgba(255,255,255,0.02)" }}
                    />
                    <Bar dataKey="count" fill="url(#blueGradient)" radius={[6, 6, 0, 0]}>
                       <defs>
                          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                             <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.1} />
                          </linearGradient>
                       </defs>
                    </Bar>
                 </BarChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Fatigue Status Distribution */}
        <div className="lg:col-span-1 glass-card rounded-2xl p-6 border border-border bg-background/40">
           <div className="flex flex-col items-center">
              <h3 className="font-bold text-sm mb-4 self-start">مستويات التعب العامة</h3>
              <div className="h-[180px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                       <Pie data={fatigueDistribution} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={5} dataKey="value">
                          {fatigueDistribution.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                       </Pie>
                       <Tooltip cursor={{ fill: 'none' }} contentStyle={{ display: 'none' }} />
                    </PieChart>
                 </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full mt-4">
                 {fatigueDistribution.map((stat) => (
                    <div key={stat.name} className="flex flex-col border-r-2 border-border pr-2">
                       <span className="text-[10px] text-muted-foreground font-bold mb-0.5">{stat.name}</span>
                       <span className="text-sm font-black" style={{ color: stat.color }}>{stat.value}%</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Critical Alerts Dashboard */}
        <div className="glass-card rounded-2xl p-6 border border-border bg-background/40">
           <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-sm">التنبيهات العاجلة</h3>
              <button className="text-[10px] text-primary font-bold hover:underline">مشاهدة الكل</button>
           </div>
           <div className="space-y-3">
              {alerts.map((alert) => (
                 <div key={alert.id} className={`p-4 rounded-xl border flex items-center justify-between group cursor-pointer transition-all ${
                   alert.level === 'critical' ? 'bg-red-500/5 border-red-500/20' : alert.level === 'warning' ? 'bg-orange-500/5 border-orange-500/20' : 'bg-blue-500/5 border-blue-500/20'
                 }`}>
                    <div className="flex items-center gap-4">
                       <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ring-2 ring-background ${
                         alert.level === 'critical' ? 'bg-red-500/20 text-red-500' : alert.level === 'warning' ? 'bg-orange-500/20 text-orange-500' : 'bg-blue-500/20 text-blue-500'
                       }`}>
                          {alert.athlete[0]}
                       </div>
                       <div>
                          <div className="text-xs font-black mb-0.5 group-hover:text-primary transition-colors">{alert.athlete}</div>
                          <div className="text-[10px] text-muted-foreground font-bold">{alert.type}</div>
                       </div>
                    </div>
                    <div className="text-left flex flex-col items-end">
                       <div className="text-[10px] text-muted-foreground font-bold">{alert.time}</div>
                       <ChevronRight className="w-3.5 h-3.5 mt-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Players Quick List */}
        <div className="glass-card rounded-2xl p-6 border border-border bg-background/40">
           <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-sm">قائمة اللاعبين النشطين</h3>
              <div className="flex items-center gap-2 border border-border rounded-lg px-2.5 py-1 bg-secondary/20 transition-all focus-within:border-primary/50">
                 <Search className="w-3 h-3 text-muted-foreground" />
                 <input className="bg-transparent text-[10px] w-28 focus:outline-none placeholder:text-muted-foreground font-medium" placeholder="بحث..." />
              </div>
           </div>
           <div className="space-y-4">
              {[
                 { name: "محمد كريم", sport: "كرة قدم", level: "محترف", progress: 85, color: "green" },
                 { name: "يوسف علي", sport: "سباحة", level: "ناشئ", progress: 62, color: "blue" },
                 { name: "أحمد رامي", sport: "ألعاب قوى", level: "محترف", progress: 91, color: "yellow" },
                 { name: "زياد طارق", sport: "كرة سلة", level: "هواة", progress: 45, color: "blue" },
              ].map((athlete, i) => (
                 <div key={i} className="flex items-center justify-between gap-4 p-1 hover:bg-secondary/10 rounded-lg transition-all group cursor-pointer">
                    <div className="flex items-center gap-3">
                       <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[10px] border border-border ${
                         athlete.color === 'green' ? 'bg-green-500/10 text-green-400' : athlete.color === 'blue' ? 'bg-blue-500/10 text-blue-400' : 'bg-yellow-500/10 text-yellow-400'
                       }`}>
                          {athlete.name[0]}
                       </div>
                       <div>
                          <div className="text-xs font-black group-hover:text-primary transition-colors">{athlete.name}</div>
                          <div className="text-[9px] text-muted-foreground font-bold">{athlete.sport} | {athlete.level}</div>
                       </div>
                    </div>
                    <div className="w-32">
                       <div className="flex justify-between text-[9px] mb-1 font-bold text-muted-foreground">
                          <span>الالتزام</span>
                          <span>{athlete.progress}%</span>
                       </div>
                       <div className="h-1 bg-border rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${athlete.progress}%` }} />
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
