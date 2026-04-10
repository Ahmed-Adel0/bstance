"use client";
import { FileText, CheckCircle2, AlertCircle, Bookmark, ExternalLink } from "lucide-react";

const sops = [
  {
    id: 1,
    title: "بروتوكول التقييم الأولي (Initial Assessment)",
    category: "إداري",
    description: "الخطوات المتبعة عند استقبال لاعب جديد لأول مرة.",
    steps: [
      "إجراء اختبار InBody وربطه بملف اللاعب.",
      "مراجعة التاريخ الصحي والإصابات السابقة.",
      "تحديد أهدف اللاعب (أداء، خسارة وزن، استشفاء).",
      "تصوير اللاعب (Front/Side) لتقييم القوام (Postural Analysis)."
    ],
    lastUpdated: "2024-03-20"
  },
  {
    id: 2,
    title: "بروتوكول جلسة الاستشفاء (Recovery Session)",
    category: "فني",
    description: "المعايير القياسية لجلسات الاستشفاء اليدوي والأجهزة.",
    steps: [
      "فحص خريطة الإرهاق العضلي في تطبيق اللاعب.",
      "تجهيز الأدوات المطلوبة (Hyperice, Normatec, etc.).",
      "تنفيذ الجلسة بناءً على نوع الرياضة (تحمل vs قوة).",
      "تسجيل النتائج فوراً في سجل الجلسات."
    ],
    lastUpdated: "2024-04-01"
  },
  {
    id: 3,
    title: "التدخل العاجل للإصابات",
    category: "طوارئ",
    description: "كيفية التعامل مع الإصابات الحادة أثناء التمرين.",
    steps: [
      "تطبيق قاعدة R.I.C.E فوراً.",
      "توجيه اللاعب لأخصائي العلاج الطبيعي الشريك.",
      "رفع تقرير إصابة (Injury Report) للإدارة."
    ],
    lastUpdated: "2024-02-15"
  }
];

export default function SOPPage() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-foreground">بروتوكولات العمل القياسية (SOPs)</h1>
          <p className="text-muted-foreground text-sm mt-1">المعايير المعتمدة لضمان جودة الخدمة في B•Stance</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-xl bg-secondary border border-border text-foreground font-bold text-sm flex items-center gap-2 hover:bg-secondary/70 transition-all">
            <Bookmark className="w-4 h-4" />
            المحفوظات
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {sops.map((sop) => (
          <div key={sop.id} className="glass-card rounded-2xl p-6 border border-border bg-background/40 relative overflow-hidden group">
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border ${
                sop.category === 'إداري' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                sop.category === 'فني' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                'bg-red-500/10 border-red-500/20 text-red-400'
              }`}>
                {sop.category}
              </span>
            </div>

            <div className="flex items-start gap-4 mb-6 pt-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="ml-12">
                <h3 className="text-xl font-black text-foreground mb-1 group-hover:text-primary transition-colors">{sop.title}</h3>
                <p className="text-xs text-muted-foreground font-medium">{sop.description}</p>
              </div>
            </div>

            <div className="space-y-3 mb-6 bg-secondary/20 p-4 rounded-xl border border-border">
              {sop.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-foreground font-medium">{step}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold">
                <AlertCircle className="w-3 h-3" />
                آخر تحديث: {sop.lastUpdated}
              </div>
              <button className="text-[10px] font-black text-primary flex items-center gap-1 hover:underline">
                فتح المستند الكامل
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Useful Forms Section */}
      <div className="glass-card rounded-2xl p-6 border border-border bg-gradient-to-br from-background/40 to-primary/5">
        <h3 className="text-lg font-black mb-6">النماذج السريعة (Evaluation Forms)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "نموذج InBody الموحد", format: "PDF", size: "1.2 MB" },
            { name: "مقياس الإجهاد (RPE Scale)", format: "IMG", size: "2.4 MB" },
            { name: "تقرير الجلسة لولي الأمر", format: "DOCX", size: "800 KB" },
          ].map((form, i) => (
             <div key={i} className="p-4 rounded-xl border border-border bg-background hover:border-primary/50 transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black">{form.name}</span>
                  <span className="text-[9px] bg-secondary px-1.5 py-0.5 rounded text-muted-foreground">{form.format}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">{form.size}</span>
                  <button className="text-[10px] text-primary font-bold group-hover:underline">تحميل</button>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
