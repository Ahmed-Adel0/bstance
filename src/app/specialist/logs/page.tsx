"use client";
import { useState } from "react";
import { ClipboardList, User, Search, Plus, Filter, Save, History, CheckCircle } from "lucide-react";

const recentLogs = [
  { id: 1, athlete: "محمد كريم", type: "Recovery", detail: "تدليك عضلي عميق - مستوى الألم 3/10", time: "اليوم، 2:30 م", status: "حفظ كمسودة" },
  { id: 2, athlete: "يوسف علي", type: "Academy", detail: "اختبارات سرعة 50 متر - تحسن 0.5ث", time: "اليوم، 11:00 ص", status: "مكتمل" },
  { id: 3, athlete: "أحمد رامي", type: "Recovery", detail: "جلسة تبريد (Ice Bath) - 15 دقيقة", time: "أمس، 5:00 م", status: "مكتمل" },
];

export default function SessionLogsPage() {
  const [selectedType, setSelectedType] = useState("all");

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground">سجل الجلسات ونتائج الأداء</h1>
          <p className="text-muted-foreground text-sm mt-1">توثيق رحلة اللاعب وضمان استمرارية النظام الرياضي</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 group">
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              تسجيل جلسة جديدة
           </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Log Form */}
        <div className="lg:col-span-2 space-y-6">
           <div className="glass-card rounded-2xl p-6 border border-border bg-background/40">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <ClipboardList className="w-4 h-4 text-green-400" />
                </div>
                <h3 className="font-black text-lg">تسجيل سريع</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground pr-1">اختيار اللاعب</label>
                  <div className="relative">
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select className="w-full bg-secondary/50 border border-border rounded-xl pr-10 pl-4 py-3 text-sm focus:outline-none focus:border-primary transition-all appearance-none">
                      <option>محمد كريم</option>
                      <option>يوسف علي</option>
                      <option>أحمد رامي</option>
                      <option>زياد طارق</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground pr-1">نوع الجلسة</label>
                  <select className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-all appearance-none">
                    <option>جلسة استشفاء (Recovery)</option>
                    <option>تمرين قياس أداء (Workout/Testing)</option>
                    <option>استشارة تغذية (Nutrition)</option>
                    <option>تقييم دوري (Assessment)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-xs font-bold text-muted-foreground pr-1">ملاحظات الجلسة والنتائج</label>
                <textarea 
                  className="w-full bg-secondary/50 border border-border rounded-xl p-4 text-sm focus:outline-none focus:border-primary transition-all h-32 placeholder:text-muted-foreground/30"
                  placeholder="اكتب ملاحظاتك الفنية هنا... (مثلاً: استجابة العضلة، مستويات الحمل، التوصيات القادمة)"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="sharenAthlete" className="w-4 h-4 rounded accent-primary bg-secondary" />
                  <label htmlFor="sharenAthlete" className="text-xs font-bold text-muted-foreground cursor-pointer">مشاركة النتيجة مع اللاعب فوراً</label>
                </div>
                <div className="flex gap-2">
                  <button className="px-6 py-2.5 rounded-xl bg-secondary border border-border text-foreground font-bold text-sm hover:bg-secondary/70 transition-all flex items-center gap-2">
                    <Save className="w-4 h-4 text-muted-foreground" />
                    حفظ مسودة
                  </button>
                  <button className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    اعتماد الجلسة
                  </button>
                </div>
              </div>
           </div>
        </div>

        {/* History & Filters */}
        <div className="space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-border bg-background/40">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <History className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-black text-sm">آخر الإدخالات</h3>
                </div>
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <Filter className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>

              <div className="space-y-4">
                {recentLogs.map((log) => (
                  <div key={log.id} className="p-3 rounded-xl border border-border bg-secondary/20 hover:border-primary/30 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black group-hover:text-primary transition-colors">{log.athlete}</span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold ${
                        log.status === 'مكتمل' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-medium mb-2 leading-relaxed">{log.detail}</p>
                    <div className="flex items-center justify-between text-[9px] text-muted-foreground/60 font-bold">
                      <span>{log.type}</span>
                      <span>{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-2 rounded-lg border border-border text-[10px] font-bold text-muted-foreground hover:bg-secondary transition-all">
                مشاهدة التاريخ الكامل
              </button>
            </div>

            {/* Quick Search */}
            <div className="glass-card rounded-2xl p-6 border border-border bg-primary/5">
              <h4 className="text-xs font-black mb-3">بحث سريع عن تقرير</h4>
              <div className="relative">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input 
                  className="w-full bg-background/50 border border-border rounded-xl pr-10 pl-4 py-2 text-xs focus:outline-none focus:border-primary"
                  placeholder="اسم اللاعب، التاريخ، أو نوع الجلسة..."
                />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
