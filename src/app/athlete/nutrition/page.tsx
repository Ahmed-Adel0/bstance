"use client";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Plus, CheckCircle, Salad, Droplets, Target, Coffee, Zap, Sun, Clock } from "lucide-react";
import StatsCard from "@/components/ui/StatsCard";

const macros = [
  { name: "بروتين", value: 120, target: 160, color: "#22c55e", unit: "g" },
  { name: "كربوهيدرات", value: 220, target: 280, color: "#3b82f6", unit: "g" },
  { name: "دهون", value: 55, target: 70, color: "#eab308", unit: "g" },
];

const meals = [
  {
    name: "الإفطار",
    time: "8:00 ص",
    calories: 650,
    done: true,
    items: ["بيض مسلوق × 3 (210 kcal)", "خبز أسمر × 2 شريحة (160 kcal)", "أفوكادو نصفة (120 kcal)", "حليب خالي الدسم 200مل (160 kcal)"],
    protein: 35,
    carbs: 65,
    fat: 22,
    icon: Coffee,
  },
  {
    name: "وجبة خفيفة (سناك)",
    time: "11:00 ص",
    calories: 200,
    done: true,
    items: ["موزة كبيرة (120 kcal)", "مكسرات مشكلة 20g (80 kcal)"],
    protein: 5,
    carbs: 30,
    fat: 8,
    icon: Zap,
  },
  {
    name: "الغداء الأداء الرئيسي",
    time: "2:00 م",
    calories: 800,
    done: false,
    items: ["صدر دجاج مشوي 200g (330 kcal)", "أرز بني 150g (195 kcal)", "خضار مشكلة 200g (80 kcal)", "زيت زيتون ملعقة (120 kcal)"],
    protein: 45,
    carbs: 75,
    fat: 15,
    icon: Sun,
  },
  {
    name: "وجبة ما بعد التدريب",
    time: "6:00 م",
    calories: 350,
    done: false,
    items: ["بروتين واي 1 سكوب (120 kcal)", "موزة (120 kcal)", "حليب 200مل (120 kcal)"],
    protein: 30,
    carbs: 35,
    fat: 5,
    icon: Zap,
  },
  {
    name: "العشاء المتوازن",
    time: "8:00 م",
    calories: 600,
    done: false,
    items: ["سمك مشوي 200g (260 kcal)", "خضار مطبوخة (120 kcal)", "حساء عدس (220 kcal)"],
    protein: 45,
    carbs: 45,
    fat: 12,
    icon: Coffee,
  },
];

const consumed = 850;
const target = 2800;
const pieData = [
  { name: "مستهلك", value: consumed, color: "#22c55e" },
  { name: "متبقي", value: target - consumed, color: "rgba(255,255,255,0.05)" },
];

export default function NutritionPage() {
  const [selectedMeal, setSelectedMeal] = useState(meals[2]);

  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black">نظام التغذية والأداء</h1>
          <p className="text-muted-foreground text-sm mt-0.5">الثلاثاء 28 ديسمبر – خطة التحجيم العضلي</p>
        </div>
        <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-black hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
                <Plus className="w-4 h-4" />
                إضافة وجبة
            </button>
        </div>
      </div>

      {/* Summary Donuts & Macro Progress */}
      <div className="grid md:grid-cols-4 gap-4">
        {/* Calories Donut Card */}
        <div className="glass-card rounded-2xl p-6 border border-border flex items-center gap-4 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="relative w-20 h-20 flex-shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={28} outerRadius={38} dataKey="value" strokeWidth={0}>
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-black group-hover:scale-110 transition-transform">{Math.round((consumed / target) * 100)}%</span>
            </div>
          </div>
          <div>
            <div className="text-2xl font-black group-hover:text-primary transition-colors">{consumed}</div>
            <div className="text-[10px] text-muted-foreground font-bold tracking-tight">من {target} kcal</div>
            <div className="text-[10px] text-green-400 font-bold mt-1 shadow-sm">متبقي {target - consumed} kcal</div>
          </div>
        </div>

        {/* Macros Progress Cards */}
        {macros.map((m) => (
          <div key={m.name} className="glass-card rounded-2xl p-6 border border-border bg-background/20 relative group overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="text-[10px] text-muted-foreground font-black uppercase tracking-wider">{m.name}</span>
              <Target className="w-3.5 h-3.5 text-muted-foreground opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all" />
            </div>
            <div className="text-xl font-black relative z-10">{m.value}<span className="text-xs font-bold text-muted-foreground ml-1">{m.unit}</span></div>
            <div className="text-[10px] text-muted-foreground font-bold mb-3 relative z-10">من {m.target}{m.unit}</div>
            <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden relative z-10">
              <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(m.value / m.target) * 100}%`, backgroundColor: m.color }} />
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Meals List Detailed */}
        <div className="lg:col-span-2 space-y-4">
           <div className="flex items-center justify-between mb-2">
             <h2 className="font-black text-sm">وجبات اليوم</h2>
             <div className="flex items-center gap-2 text-xs text-blue-400 font-bold bg-blue-500/10 px-3 py-1.5 rounded-xl border border-blue-500/20">
                <Droplets className="w-4 h-4" />
                الماء: 1.2L / 3L
             </div>
           </div>

           {meals.map((meal) => (
             <div 
               key={meal.name} 
               className={`glass-card rounded-2xl border transition-all overflow-hidden cursor-pointer group ${
                 meal.done ? "border-green-500/20 bg-green-500/5 opacity-80" : "border-border hover:border-primary/20"
               }`}
               onClick={() => setSelectedMeal(meal)}
             >
                <div className="flex items-center gap-5 p-5">
                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-border group-hover:scale-105 transition-transform ${
                     meal.done ? "bg-green-500/20 text-green-400 border-green-500/20 shadow-sm" : "bg-secondary text-muted-foreground"
                   }`}>
                      {meal.done ? <CheckCircle className="w-6 h-6 border-none" /> : <meal.icon className="w-6 h-6" />}
                   </div>
                   <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                         <span className={`text-sm font-black transition-colors ${meal.done ? "line-through text-muted-foreground" : "group-hover:text-primary"}`}>{meal.name}</span>
                         <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-black">
                            <Clock className="w-3.5 h-3.5" />
                            {meal.time}
                         </div>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-[10px] text-muted-foreground font-bold uppercase tracking-tight">
                         <span className="text-primary font-black py-0.5 px-2 bg-primary/10 rounded-md">{meal.calories} kcal</span>
                         <span>بروتين {meal.protein}g</span>
                         <span>كارب {meal.carbs}g</span>
                         <span>دهون {meal.fat}g</span>
                      </div>
                   </div>
                </div>
                {/* Expanded Details on Selection - showing items in half opaque bg */}
                {selectedMeal.name === meal.name && (
                  <div className="px-5 pb-5 pt-3 border-t border-border/40 bg-background/20 animate-in slide-in-from-top-1 duration-300">
                     <div className="grid grid-cols-2 gap-3">
                        {meal.items.map((item, i) => (
                           <div key={i} className="text-[11px] text-muted-foreground flex items-center gap-2 font-medium bg-secondary/20 p-2 rounded-lg border border-border/50">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                              {item}
                           </div>
                        ))}
                     </div>
                  </div>
                )}
             </div>
           ))}
        </div>

        {/* Nutritionist Insights Card */}
        <div className="lg:col-span-1 space-y-6">
           <div className="glass-card rounded-[32px] p-8 border border-border shadow-2xl relative overflow-hidden bg-primary/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                 <div className="w-12 h-12 rounded-2xl bg-secondary border border-border flex items-center justify-center font-black text-sm text-primary shadow-sm hover:rotate-6 transition-transform">س</div>
                 <div>
                    <h3 className="text-sm font-black">أخصائية التغذية سارة</h3>
                    <div className="text-[10px] uppercase font-black text-muted-foreground tracking-widest opacity-60">تطوير الأداء الغذائي</div>
                 </div>
              </div>
              <p className="text-xs text-muted-foreground leading-loose p-5 bg-background/60 rounded-2xl border border-border/50 italic font-medium relative z-10 mb-6 group hover:border-primary/20 transition-all">
                 "ممتاز يا محمد! إفطارك اليوم مثالي وقمت بالدقة المطلوبة. لاحظت تركيز تمرين اليوم، تأكد من شرب 500 مل إضافية من الماء قبل الغداء وتناول البروتين بعد التمرين فوراً لضمان أفضل بناء عضلي."
              </p>
              <button className="w-full py-4 px-4 bg-primary text-primary-foreground rounded-2xl font-black text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                 استشارة سريعة مع الأخصائية
                 <Plus className="w-4 h-4" />
              </button>
           </div>

           {/* Shopping List Quick Card */}
           <div className="glass-card rounded-2xl p-6 border border-border bg-background/20">
              <h3 className="font-black text-sm mb-4">قائمة التسوق للأسبوع</h3>
              <div className="space-y-3">
                 {[
                   { item: "صدور دجاج (2 كجم)", bought: true },
                   { item: "أرز بني عضووي", bought: false },
                   { item: "أفوكادو حبات", bought: true },
                   { item: "مكمل واي بروتين", bought: false },
                 ].map((i, idx) => (
                   <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-secondary/30 border border-border/40 group hover:bg-secondary transition-all">
                      <span className={`text-[11px] font-bold ${i.bought ? 'line-through text-muted-foreground' : 'text-foreground/80'}`}>{i.item}</span>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${i.bought ? 'bg-green-500 border-green-500 text-white shadow-sm' : 'border-border'}`}>
                         {i.bought && <CheckCircle className="w-3.5 h-3.5 border-none" />}
                      </div>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-4 py-2 text-[10px] font-black text-primary hover:underline underline-offset-4 decoration-primary/20 tracking-tight">عرض القائمة الكاملة</button>
           </div>
        </div>
      </div>
    </div>
  );
}
