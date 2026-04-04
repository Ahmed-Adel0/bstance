import { Bell, Dumbbell, Salad, Heart, CheckCircle, AlertTriangle, Calendar, MessageSquare, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const notifications = [
  {
    id: 1,
    type: "training",
    icon: Dumbbell,
    title: "تذكير: تدريب الساعة 5:00 م",
    desc: "لديك جلسة تدريب قوة خلال ساعتين – تأكد من تناول الغداء قبلها بـ 90 دقيقة لضمان الطاقة.",
    time: "منذ 5 دقائق",
    read: false,
    color: "green",
  },
  {
    id: 2,
    type: "message",
    icon: MessageSquare,
    title: "رسالة من م. محمد الشريف",
    desc: "ممتاز! أداء اليوم كان مميز جداً 💪 تأكد من تغذية ما بعد التمرين لسرعة الاستشفاء.",
    time: "منذ 2 ساعة",
    read: false,
    color: "blue",
  },
  {
    id: 3,
    type: "nutrition",
    icon: Salad,
    title: "تحديث: تم تعديل خطة الوجبات",
    desc: "أخصائية التغذية سارة عدلت وجبة العشاء بناءً على كثافة تدريب اليوم.",
    time: "منذ 4 ساعات",
    read: true,
    color: "yellow",
  },
  {
    id: 4,
    type: "recovery",
    icon: Heart,
    title: "تقييم: مستوى التعب مرتفع",
    desc: "نظام B•Stance يوصي بجلسة ثلج (Ice Bath) اليوم قبل النوم بـ 30 دقيقة.",
    time: "منذ 7 ساعات",
    read: true,
    color: "red",
  },
  {
    id: 5,
    type: "system",
    icon: Bell,
    title: "تقرير الأداء الأسبوعي جاهز",
    desc: "لقد حققت تحسناً بنسبة 12% في القوة الانفجارية هذا الأسبوع. أحسنت!",
    time: "أمس",
    read: true,
    color: "blue",
  },
  {
    id: 6,
    type: "training",
    icon: Calendar,
    title: "تأكيد جلسة الاستشفاء",
    desc: "تم تأكيد موعدك مع د. أحمد قاسم غداً الساعة 4:00 مساءً.",
    time: "منذ يومين",
    read: true,
    color: "green",
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
           <h1 className="text-2xl font-black">التنبيهات</h1>
           <p className="text-muted-foreground text-sm mt-0.5">تابع تحديثات التدريب والتغذية وفريق العمل</p>
        </div>
        <button className="text-xs font-bold text-primary hover:underline underline-offset-4 decoration-primary/20 transition-all">تحديد الكل كمقروء</button>
      </div>

      {/* Tabs placeholder */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
         {["الكل", "التدريب", "التغذية", "الاستشفاء", "النظام"].map((t, i) => (
           <button key={t} className={`px-4 py-2 rounded-xl text-[10px] font-black border transition-all ${
             i === 0 ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20" : "bg-secondary/40 border-border text-muted-foreground hover:bg-secondary"
           }`}>
             {t}
           </button>
         ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`glass-card rounded-2xl p-5 border border-border group hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden ${
              !n.read ? "bg-primary/5 ring-1 ring-primary/20" : "bg-background/40"
            }`}
          >
            {/* Read indicator */}
            {!n.read && <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-primary" />}
            
            <div className="flex items-start gap-4 pr-1">
               <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-border/50 group-hover:scale-105 transition-transform ${
                 n.color === 'green' ? 'bg-green-500/10 text-green-400' :
                 n.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                 n.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-red-500/10 text-red-500'
               }`}>
                  <n.icon className="w-6 h-6" />
               </div>

               <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                     <h3 className={`text-sm font-black truncate max-w-[80%] ${!n.read ? 'text-foreground' : 'text-foreground/80'}`}>{n.title}</h3>
                     <span className="text-[10px] text-muted-foreground font-bold whitespace-nowrap">{n.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-2 pr-1">{n.desc}</p>
                  
                  <div className="mt-4 flex items-center justify-between">
                     <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-bold opacity-60">
                        <Clock className="w-3 h-3" />
                        تلقي آلي عبر فورتكس
                     </div>
                     <button className="flex items-center gap-1.5 text-[10px] font-black text-primary hover:gap-2 transition-all">
                        عرض التفاصيل
                        <ArrowLeft className="w-3 h-3" />
                     </button>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>

       {/* Load more */}
       <div className="text-center pt-4">
          <button className="px-6 py-2.5 rounded-xl border border-border bg-secondary/40 text-[10px] font-black text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
             تحميل تنبيهات أقدم
          </button>
       </div>
    </div>
  );
}
