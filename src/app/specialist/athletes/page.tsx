"use client";
import { useState } from "react";
import { Search, Filter, Mail, Phone, MoreVertical, LayoutGrid, List as ListIcon, ChevronRight, UserPlus, FileText, CheckCircle, AlertTriangle } from "lucide-react";

const athletes = [
  { id: 1, name: "تامر", sport: "Fitness", category: "إكتومورف", age: 22, status: "stable", commitment: 95, trend: "+15%", lastActive: "منذ ساعة", avatar: "ت" },
  { id: 2, name: "الديب", sport: "Performance", category: "محترف", age: 24, status: "stable", commitment: 88, trend: "+8%", lastActive: "منذ ساعتين", avatar: "د" },
  { id: 3, name: "د. طارق شريف", sport: "Fitness", category: "طبيب", age: 31, status: "stable", commitment: 92, trend: "+10%", lastActive: "منذ 4 ساعات", avatar: "ط" },
  { id: 4, name: "محمود (حووود)", sport: "كرة قدم", category: "محترف", age: 20, status: "stable", commitment: 90, trend: "+12%", lastActive: "منذ يوم", avatar: "م" },
  { id: 5, name: "الاتش", sport: "Lifestyle", category: "تحول", age: 25, status: "stable", commitment: 82, trend: "+5%", lastActive: "منذ 5 ساعات", avatar: "ه" },
  { id: 6, name: "كابتن ميسو", sport: "Bodybuilding", category: "إندومورف", age: 26, status: "stable", commitment: 85, trend: "+7%", lastActive: "منذ 30 دقيقة", avatar: "م" },
  { id: 7, name: "عبود", sport: "Performance", category: "ناشئ", age: 21, status: "stable", commitment: 94, trend: "+20%", lastActive: "منذ ساعتين", avatar: "ع" },
  { id: 8, name: "سيد", sport: "Fitness", category: "تحدي", age: 28, status: "stable", commitment: 80, trend: "+25%", lastActive: "منذ 3 أيام", avatar: "س" },
  { id: 9, name: "مهندس طاهر", sport: "Fitness", category: "إصرار", age: 27, status: "stable", commitment: 75, trend: "+4%", lastActive: "منذ يومين", avatar: "ط" },
  { id: 10, name: "موزة", sport: "Fitness", category: "استمرارية", age: 23, status: "stable", commitment: 78, trend: "+6%", lastActive: "منذ ساعة", avatar: "م" },
  { id: 11, name: "محمد كريم", sport: "كرة قدم", category: "محترف", age: 16, status: "stable", commitment: 85, trend: "+5%", lastActive: "منذ ساعة", avatar: "م" },
  { id: 12, name: "يوسف علي", sport: "سباحة", category: "ناشئ", age: 14, status: "warning", commitment: 62, trend: "-2%", lastActive: "منذ ساعتين", avatar: "ي" },
  { id: 13, name: "أحمد رامي", sport: "ألعاب قوى", category: "محترف", age: 17, status: "stable", commitment: 93, trend: "+12%", lastActive: "منذ 4 ساعات", avatar: "أ" },
  { id: 14, name: "زياد طارق", sport: "كرة سلة", category: "هواة", age: 15, status: "critical", commitment: 45, trend: "-15%", lastActive: "منذ يومين", avatar: "ز" },
  { id: 15, name: "سارة حسن", sport: "تنس", category: "ناشئ", age: 13, status: "stable", commitment: 78, trend: "+2%", lastActive: "منذ 5 ساعات", avatar: "س" },
  { id: 16, name: "عمر خالد", sport: "كرة قدم", category: "محترف", age: 18, status: "stable", commitment: 88, trend: "+4%", lastActive: "منذ 30 دقيقة", avatar: "ع" },
];

export default function AthletesPage() {
  const [view, setView] = useState("list");

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-black">قائمة اللاعبين</h1>
           <p className="text-muted-foreground text-xs mt-0.5">إدارة وتتبع أداء 142 لاعباً نشطاً</p>
        </div>
        <div className="flex gap-2">
           <div className="flex bg-secondary/50 border border-border rounded-lg p-1.5 gap-1 shadow-sm">
              <button
                onClick={() => setView("list")}
                className={`p-1 rounded-md transition-all ${view === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                 <ListIcon className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setView("grid")}
                className={`p-1 rounded-md transition-all ${view === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              >
                 <LayoutGrid className="w-3.5 h-3.5" />
              </button>
           </div>
           <button className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-xs shadow-lg shadow-primary/20 flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              إضافة لاعب
           </button>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="glass-card rounded-2xl p-4 border border-border bg-background/20 flex flex-col md:flex-row items-center gap-4">
         <div className="relative flex-1 w-full">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              className="bg-secondary/30 border border-border rounded-xl pr-10 pl-4 py-2.5 text-xs w-full focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground font-medium"
              placeholder="بحث بالاسم، الرياضة، أو الباقة..."
            />
         </div>
         <div className="flex gap-2 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary/30 border border-border rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all">
               <Filter className="w-3.5 h-3.5" />
               تصفية
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-secondary/30 border border-border rounded-xl text-xs font-bold text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all">
               <FileText className="w-3.5 h-3.5" />
               تصدير Excel
            </button>
         </div>
      </div>

      {/* Athletes List/Grid */}
      {view === 'list' ? (
        <div className="glass-card rounded-2xl border border-border overflow-hidden bg-background/20">
           <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse">
                 <thead>
                    <tr className="bg-secondary/40 border-b border-border">
                       <th className="px-6 py-4 text-[10px] uppercase font-black tracking-wider text-muted-foreground">اللاعب</th>
                       <th className="px-6 py-4 text-[10px] uppercase font-black tracking-wider text-muted-foreground">الرياضة</th>
                       <th className="px-6 py-4 text-[10px] uppercase font-black tracking-wider text-muted-foreground">الحالة</th>
                       <th className="px-6 py-4 text-[10px] uppercase font-black tracking-wider text-muted-foreground">الالتزام</th>
                       <th className="px-6 py-4 text-[10px] uppercase font-black tracking-wider text-muted-foreground">التحسن</th>
                       <th className="px-6 py-4 text-[10px] uppercase font-black tracking-wider text-muted-foreground">آخر نشاط</th>
                       <th className="px-6 py-4 text-[10px] uppercase font-black tracking-wider text-muted-foreground"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-border/50">
                    {athletes.map((a) => (
                       <tr key={a.id} className="hover:bg-secondary/10 transition-colors group cursor-pointer">
                          <td className="px-6 py-4">
                             <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-border flex items-center justify-center font-black text-xs text-primary">
                                   {a.avatar}
                                </div>
                                <div>
                                   <div className="text-xs font-black group-hover:text-primary transition-colors">{a.name}</div>
                                   <div className="text-[10px] text-muted-foreground font-bold">{a.category} – {a.age} سنة</div>
                                </div>
                             </div>
                          </td>
                          <td className="px-6 py-4 text-xs font-bold text-muted-foreground">{a.sport}</td>
                          <td className="px-6 py-4">
                             {a.status === 'stable' ? (
                               <span className="flex items-center gap-1.5 text-green-400 text-[10px] font-black underline underline-offset-4 decoration-green-500/20">
                                  <CheckCircle className="w-3 h-3" /> مستقر
                               </span>
                             ) : a.status === 'warning' ? (
                               <span className="flex items-center gap-1.5 text-orange-400 text-[10px] font-black underline underline-offset-4 decoration-orange-500/20">
                                  <AlertTriangle className="w-3 h-3" /> تنبيه
                               </span>
                             ) : (
                               <span className="flex items-center gap-1.5 text-red-500 text-[10px] font-black underline underline-offset-4 decoration-red-500/20">
                                  <AlertTriangle className="w-3 h-3" /> حرج
                               </span>
                             )}
                          </td>
                          <td className="px-6 py-4">
                             <div className="flex items-center gap-3 w-28">
                                <span className="text-[10px] font-black w-8">{a.commitment}%</span>
                                <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                                   <div className={`h-full rounded-full ${a.commitment > 80 ? 'bg-green-500' : a.commitment > 60 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${a.commitment}%` }} />
                                </div>
                             </div>
                          </td>
                          <td className="px-6 py-4">
                             <span className={`text-[10px] font-black ${a.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                                {a.trend}
                             </span>
                          </td>
                          <td className="px-6 py-4 text-[10px] text-muted-foreground font-bold">{a.lastActive}</td>
                          <td className="px-6 py-4 text-left">
                             <div className="flex items-center gap-1 justify-end">
                                <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-all">
                                   <Mail className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-all">
                                   <Phone className="w-4 h-4" />
                                </button>
                                <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
                                   <MoreVertical className="w-4 h-4" />
                                </button>
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
           {athletes.map((a) => (
             <div key={a.id} className="glass-card rounded-2xl border border-border p-5 bg-background/20 hover:border-primary/30 transition-all cursor-pointer group flex flex-col gap-4">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-border flex items-center justify-center font-black text-sm text-primary">
                         {a.avatar}
                      </div>
                      <div>
                         <div className="text-sm font-black group-hover:text-primary transition-colors">{a.name}</div>
                         <div className="text-[10px] text-muted-foreground font-bold">{a.category} | {a.sport}</div>
                      </div>
                   </div>
                   <button className="p-1.5 rounded-lg text-muted-foreground hover:bg-secondary transition-all">
                      <MoreVertical className="w-4 h-4" />
                   </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-secondary/30 rounded-xl p-3 border border-border">
                      <div className="text-[9px] text-muted-foreground font-bold mb-1 uppercase tracking-wider">الالتزام</div>
                      <div className="flex items-center gap-2">
                         <span className="text-sm font-black">{a.commitment}%</span>
                         <span className={`text-[9px] font-bold ${a.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{a.trend}</span>
                      </div>
                   </div>
                   <div className="bg-secondary/30 rounded-xl p-3 border border-border">
                      <div className="text-[9px] text-muted-foreground font-bold mb-1 uppercase tracking-wider">الحالة</div>
                      <div className={`text-xs font-black flex items-center gap-1.5 ${a.status === 'stable' ? 'text-green-400' : a.status === 'warning' ? 'text-orange-400' : 'text-red-500'}`}>
                         {a.status === 'stable' ? "مستقر" : a.status === 'warning' ? "تنبيه" : "حرج"}
                      </div>
                   </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border mt-1">
                   <div className="text-[9px] text-muted-foreground font-bold">آخر ظهور: {a.lastActive}</div>
                   <button className="flex items-center gap-1.5 text-primary text-[10px] font-black hover:gap-2 transition-all">
                      عرض الملف <ChevronRight className="w-3 h-3" />
                   </button>
                </div>
             </div>
           ))}
        </div>
      )}
    </div>
  );
}
