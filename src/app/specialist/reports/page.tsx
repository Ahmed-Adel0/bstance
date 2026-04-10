"use client";
import { 
  FileBarChart, 
  Send, 
  Download, 
  User, 
  TrendingUp, 
  TrendingDown, 
  CheckCircle2, 
  Clock,
  ExternalLink,
  MessageSquare
} from "lucide-react";

const athleteReports = [
  { 
    id: 1, 
    name: "محمد كريم", 
    sport: "كرة قدم", 
    status: "جاهز للإرسال", 
    lastAssessment: "منذ أسبوع",
    progress: "+12%",
    trend: "up"
  },
  { 
    id: 2, 
    name: "يوسف علي", 
    sport: "سباحة", 
    status: "تم الإرسال", 
    lastAssessment: "أمس",
    progress: "+5%",
    trend: "up"
  },
  { 
    id: 3, 
    name: "أحمد رامي", 
    sport: "ألعاب قوى", 
    status: "مسودة", 
    lastAssessment: "منذ ساعتين",
    progress: "-2%",
    trend: "down"
  },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground">مركز تقارير الأداء</h1>
          <p className="text-muted-foreground text-sm mt-1">توليد ومشاركة ملخصات الأداء الأسبوعية مع اللاعبين</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 rounded-xl bg-secondary border border-border text-foreground font-bold text-sm flex items-center gap-2 hover:bg-secondary/70 transition-all">
              <Download className="w-4 h-4" />
              تصدير الكل (Excel)
           </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-4">
         {[
            { label: "تقارير تم إرسالها", count: "48", color: "green" },
            { label: "تقارير معلقة", count: "12", color: "yellow" },
            { label: "لاعبين بدون تقييم", count: "5", color: "red" },
            { label: "متوسط التحسن", count: "8.5%", color: "blue" },
         ].map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 border border-border flex flex-col items-center">
               <span className="text-[10px] font-black text-muted-foreground uppercase mb-1">{stat.label}</span>
               <span className={`text-2xl font-black ${
                  stat.color === 'green' ? 'text-green-500' : 
                  stat.color === 'red' ? 'text-red-500' : 
                  stat.color === 'yellow' ? 'text-yellow-500' : 'text-primary'
               }`}>{stat.count}</span>
            </div>
         ))}
      </div>

      <div className="glass-card rounded-3xl border border-border bg-background/40 overflow-hidden">
         <div className="overflow-x-auto">
            <table className="w-full text-right">
               <thead className="bg-secondary/20 border-b border-border text-xs font-black text-muted-foreground">
                  <tr>
                     <th className="px-6 py-4">اللاعب</th>
                     <th className="px-6 py-4">الرياضة</th>
                     <th className="px-6 py-4">آخر تقييم</th>
                     <th className="px-6 py-4">معدل التطور</th>
                     <th className="px-6 py-4">الحالة</th>
                     <th className="px-6 py-4">الإجراءات</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-border">
                  {athleteReports.map((report) => (
                     <tr key={report.id} className="hover:bg-secondary/10 transition-colors group">
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">
                                 {report.name[0]}
                              </div>
                              <span className="text-sm font-black">{report.name}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-muted-foreground">{report.sport}</td>
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-1.5 text-xs">
                              <Clock className="w-3 h-3 text-muted-foreground" />
                              {report.lastAssessment}
                           </div>
                        </td>
                        <td className="px-6 py-4">
                           <div className={`flex items-center gap-1.5 text-xs font-black ${report.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                              {report.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                              {report.progress}
                           </div>
                        </td>
                        <td className="px-6 py-4">
                           <span className={`px-2 py-1 rounded-lg text-[10px] font-black border ${
                              report.status === 'تم الإرسال' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                              report.status === 'جاهز للإرسال' ? 'bg-primary/10 border-primary/20 text-primary' :
                              'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                           }`}>
                              {report.status}
                           </span>
                        </td>
                        <td className="px-6 py-4">
                           <div className="flex items-center gap-2">
                              <button className="p-2 rounded-lg bg-secondary border border-border hover:border-primary/50 transition-all text-muted-foreground hover:text-primary">
                                 <ExternalLink className="w-4 h-4" />
                              </button>
                              <button className="p-2 rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:scale-105 transition-all">
                                 <Send className="w-4 h-4" />
                              </button>
                              <button className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500/20 transition-all">
                                 <MessageSquare className="w-4 h-4" />
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      {/* Report Preview Modal Mockup */}
      <div className="grid lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 glass-card rounded-3xl p-8 border border-primary/20 bg-primary/5">
            <div className="flex items-center justify-between mb-8">
               <h3 className="font-black text-lg">معاينة التقرير القادم لـ "محمد كريم"</h3>
               <div className="text-[10px] text-muted-foreground font-bold">توليد آلي بواسطة B•Stance OS</div>
            </div>
            
            <div className="space-y-6">
               <div className="flex items-center justify-between p-4 rounded-2xl bg-background border border-border">
                  <div className="flex items-center gap-4">
                     <FileBarChart className="w-10 h-10 text-primary" />
                     <div>
                        <div className="text-xs font-black">تقرير حالة الاستشفاء الأسبوعية</div>
                        <div className="text-[10px] text-muted-foreground">تاريخ الصدور: 12 أبريل 2026</div>
                     </div>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
               </div>

               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-background border border-border">
                     <span className="text-[10px] text-muted-foreground font-bold uppercase">الالتزام بالبرنامج</span>
                     <div className="text-xl font-black text-primary">85%</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-background border border-border">
                     <span className="text-[10px] text-muted-foreground font-bold uppercase">تحسن معدل القوة</span>
                     <div className="text-xl font-black text-green-400">+3.2%</div>
                  </div>
               </div>
            </div>
         </div>

         <div className="glass-card rounded-3xl p-8 border border-border bg-gradient-to-br from-background to-secondary/20 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
               <Send className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-black text-xl mb-4">أتمتة التقارير</h3>
            <p className="text-xs text-muted-foreground mb-8 leading-relaxed font-bold">
               يمكنك تفعيل خيار "الإرسال الآلي" ليرسل النظام التقارير صباح كل سبت لجميع اللاعبين المكتمل تقييمهم.
            </p>
            <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-extrabold text-sm shadow-xl shadow-primary/20">
               تفعيل الأتمتة الآن
            </button>
         </div>
      </div>
    </div>
  );
}
