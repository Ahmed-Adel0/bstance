"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import { Users, Building2, TrendingUp, DollarSign, ArrowRight, UserPlus, FileText, LayoutGrid, CheckCircle } from "lucide-react";
import StatsCard from "@/components/ui/StatsCard";

const revenueData = [
  { month: "يناير", amount: 120000 },
  { month: "فبراير", amount: 145000 },
  { month: "مارس", amount: 168000 },
  { month: "أبريل", amount: 185000 },
  { month: "مايو", amount: 210000 },
  { month: "يونيو", amount: 242000 },
];

const subscriptionDistribution = [
  { name: "أفراد Pro", value: 45, color: "#22c55e" },
  { name: "أفراد Elite", value: 25, color: "#3b82f6" },
  { name: "أكاديميات", value: 20, color: "#eab308" },
  { name: "أفراد Starter", value: 10, color: "#6b7280" },
];

const academies = [
  { id: 1, name: "أكاديمية النادي الأهلي", players: 120, plan: "B2B Large", status: "نشط", revenue: "12,000 LE" },
  { id: 2, name: "أكاديمية زد الرياضية", players: 85, plan: "B2B Medium", status: "نشط", revenue: "8,500 LE" },
  { id: 3, name: "نادي وادي دجلة", players: 200, plan: "B2B Enterprise", status: "نشط", revenue: "20,000 LE" },
  { id: 4, name: "أكاديمية فوت ميت", players: 45, plan: "B2B Small", status: "تجريبي", revenue: "4,500 LE" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6" dir="rtl">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-3xl font-black tracking-tight">لوحة تحكم المشرف العام</h1>
           <p className="text-muted-foreground text-sm mt-1">نظرة استراتيجية على نمو منصة B•Stance الرياضية.</p>
        </div>
        <div className="flex gap-2">
           <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-black text-xs shadow-xl shadow-primary/20 flex items-center gap-2 group">
              <Building2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              إضافة أكاديمية (B2B)
           </button>
           <button className="px-5 py-2.5 rounded-xl bg-secondary border border-border text-foreground font-black text-xs flex items-center gap-2 hover:bg-secondary/70 transition-all shadow-sm">
              <FileText className="w-4 h-4" />
              التقارير المالية
           </button>
        </div>
      </div>

      {/* Global Stats Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="إجمالي الإيرادات" value="1.2M LE" sub="+18% هذا الربع" icon={DollarSign} color="green" />
        <StatsCard title="إجمالي المشتركين" value="2,450" sub="+320 مستخدم جديد" icon={Users} color="blue" trend={{ value: "+15%", up: true }} />
        <StatsCard title="الأكاديميات الشريكة" value="28" sub="تغطي 4,200 لاعب" icon={Building2} color="yellow" />
        <StatsCard title="معدل النمو الشهري" value="22%" sub="مستهدف 25%" icon={TrendingUp} color="green" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Growth Graph */}
        <div className="lg:col-span-2 glass-card rounded-2xl p-6 border border-border bg-background/20 relative overflow-hidden group">
           <div className="flex items-center justify-between mb-8 z-10 relative">
              <h3 className="font-black text-sm">نمو الإيرادات السنوي</h3>
              <div className="flex gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                 <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" />الإيرادات الفعلية</span>
              </div>
           </div>
           <div className="h-[280px] z-10 relative">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={revenueData}>
                    <defs>
                       <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#22c55e" stopOpacity={0.4} />
                          <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                       </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                    <XAxis dataKey="month" tick={{ fill: "#6b7280", fontSize: 10, fontWeight: 700 }} axisLine={false} tickLine={false} />
                    <YAxis hide />
                    <Tooltip
                       contentStyle={{ background: "#0a0a0f", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", fontSize: "11px", fontWeight: 700 }}
                       cursor={{ stroke: "rgba(255,255,255,0.1)", strokeWidth: 1 }}
                    />
                    <Area type="monotone" dataKey="amount" stroke="#22c55e" strokeWidth={3} fill="url(#primaryGradient)" fillOpacity={1} dot={{ stroke: '#22c55e', strokeWidth: 2, fill: '#0a0a0f', r: 4 }} activeDot={{ r: 6, strokeWidth: 0, fill: '#22c55e' }} />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Sub Distribution Chart */}
        <div className="lg:col-span-1 glass-card rounded-2xl p-6 border border-border bg-background/20 relative overflow-hidden">
           <h3 className="font-black text-sm mb-4 self-start">توزيع الاشتراكات</h3>
           <div className="h-[220px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <Pie data={subscriptionDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={4} dataKey="value">
                       {subscriptionDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                       ))}
                    </Pie>
                    <Tooltip cursor={{ fill: 'none' }} contentStyle={{ display: 'none' }} />
                 </PieChart>
              </ResponsiveContainer>
           </div>
           <div className="space-y-2 mt-4">
              {subscriptionDistribution.map((stat) => (
                 <div key={stat.name} className="flex items-center justify-between p-2 rounded-lg bg-secondary/20 border border-border/50">
                    <div className="flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full" style={{ backgroundColor: stat.color }} />
                       <span className="text-[10px] text-muted-foreground font-black">{stat.name}</span>
                    </div>
                    <span className="text-xs font-black">{stat.value}%</span>
                 </div>
              ))}
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Academies Management Quick List */}
        <div className="glass-card rounded-2xl p-6 border border-border bg-background/20">
           <div className="flex items-center justify-between mb-6">
              <h3 className="font-black text-sm">الأكاديميات الشريكة (B2B)</h3>
              <button className="text-[10px] text-primary font-black hover:gap-2 transition-all flex items-center gap-1">عرض جميع الشراكات <ArrowRight className="w-3.5 h-3.5" /></button>
           </div>
           <div className="space-y-4">
              {academies.map((ac) => (
                 <div key={ac.id} className="p-4 rounded-xl border border-border bg-secondary/10 flex items-center justify-between group hover:border-primary/20 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-xs text-primary group-hover:scale-105 transition-transform">
                          <Building2 className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-xs font-black group-hover:text-primary transition-colors">{ac.name}</div>
                          <div className="text-[9px] text-muted-foreground font-black mt-0.5">{ac.players} لاعب نشط | {ac.plan}</div>
                       </div>
                    </div>
                    <div className="text-left flex flex-col items-end">
                       <div className="text-xs font-black text-foreground">{ac.revenue}</div>
                       <div className={`text-[9px] font-black mt-1 px-2 py-0.5 rounded-full border ${ac.status === 'نشط' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'}`}>
                          {ac.status}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Global System Health & Logs */}
        <div className="glass-card rounded-2xl p-6 border border-border bg-background/20 relative overflow-hidden">
           <h3 className="font-black text-sm mb-6">سجل عمليات النظام (Live Logs)</h3>
           <div className="space-y-4 relative z-10">
              {[
                 { action: "اشتراك جديد Elite", user: "علي محمود", time: "منذ دقيقتين", color: "blue" },
                 { action: "جلسة مكتملة", user: "د. طارق سيد", time: "منذ 5 دقائق", color: "green" },
                 { action: "دفع B2B دوري", user: "أكاديمية زد", time: "منذ 15 دقيقة", color: "yellow" },
                 { action: "تعديل خطة تدريب", user: "م. محمد الشريف", time: "منذ 22 دقيقة", color: "green" },
                 { action: "تسجيل دخول مشرف", user: "أدمن 4", time: "منذ ساعة", color: "blue" },
              ].map((log, i) => (
                 <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                       <div className={`w-1.5 h-1.5 rounded-full ${log.color === 'blue' ? 'bg-blue-500' : log.color === 'green' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                       <div>
                          <div className="text-xs font-black group-hover:text-primary transition-colors">{log.action}</div>
                          <div className="text-[9px] text-muted-foreground font-bold">{log.user}</div>
                       </div>
                    </div>
                    <div className="text-left">
                       <div className="text-[9px] text-muted-foreground font-black">{log.time}</div>
                    </div>
                 </div>
              ))}
           </div>
           <div className="mt-8 flex gap-4 pt-4 border-t border-border/50">
              <div className="flex-1 text-center">
                 <div className="text-xs font-black text-primary">99.9%</div>
                 <div className="text-[9px] text-muted-foreground font-black">جاهزية الخوادم</div>
              </div>
               <div className="flex-1 text-center border-r border-border/50">
                 <div className="text-xs font-black text-foreground">1.2s</div>
                 <div className="text-[9px] text-muted-foreground font-black">سرعة الاستجابة</div>
              </div>
               <div className="flex-1 text-center border-r border-border/50">
                 <div className="text-xs font-black text-green-400">0</div>
                 <div className="text-[9px] text-muted-foreground font-black">أعطال نشطة</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
