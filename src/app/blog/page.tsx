import Link from "next/link";
import { Dumbbell, Salad, Heart, Clock, User, ArrowRight, BookOpen, Search, Zap, Filter } from "lucide-react";

const categories = ["الكل", "التدريب", "التغذية", "الاستشفاء", "علم الرياضة", "نصائح"];

const posts = [
  {
    slug: "pre-match-nutrition",
    category: "التغذية",
    icon: Salad,
    color: "blue",
    title: "التغذية قبل المباراة: ما يجب أكله وما يجب تجنبه",
    excerpt: "دليل شامل لتغذية اللاعب قبل 24 ساعة من المباراة لضمان أعلى مستوى من الطاقة والتركيز.",
    readTime: "5 دقائق",
    author: "د. سارة حسن",
    date: "28 ديسمبر 2024",
    featured: true,
  },
  {
    slug: "muscle-recovery-science",
    category: "الاستشفاء",
    icon: Heart,
    color: "green",
    title: "علم الاستشفاء العضلي: كيف تنمو العضلات أثناء النوم؟",
    excerpt: "لماذا يعتبر النوم هو المحرك الأساسي للأداء البدني، وكيف تحسن جودة نومك للحصول على أفضل نتائج.",
    readTime: "7 دقائق",
    author: "د. أحمد قاسم",
    date: "25 ديسمبر 2024",
  },
  {
    slug: "explosive-power-training",
    category: "التدريب",
    icon: Dumbbell,
    color: "yellow",
    title: "تمارين القوة الانفجارية للاعبي كرة القدم",
    excerpt: "أهم 5 تمارين لتحسين سرعتك في أول 5 أمتار من الانطلاق وزيادة قوة قفزك الرأسي.",
    readTime: "6 دقائق",
    author: "م. محمد الشريف",
    date: "22 ديسمبر 2024",
  },
  {
    slug: "hydration-and-performance",
    category: "نصائح",
    icon: Zap,
    color: "blue",
    title: "الجفاف: العدو الخفي للأداء الرياضي والتركيز الذهني",
    excerpt: "دراسة توضح كيف يقلل نقص الماء بنسبة 2% من وزن الجسم أداءك البدني بنسبة 20%.",
    readTime: "4 دقائق",
    author: "د. سارة حسن",
    date: "20 ديسمبر 2024",
  },
  {
    slug: "strength-for-swimmers",
    category: "التدريب",
    icon: Dumbbell,
    color: "green",
    title: "تمارين القوة الأرضية للسباحين: هل تزيد من سرعتك؟",
    excerpt: "لماذا يحتاج السباح لتمارين القوة خارج الماء لزيادة قوة سحبه ودفعته من الحائط.",
    readTime: "8 دقائق",
    author: "م. محمد الشريف",
    date: "18 ديسمبر 2024",
  },
  {
    slug: "ice-bath-vs-heat",
    category: "الاستشفاء",
    icon: Heart,
    color: "yellow",
    title: "حمام الثلج أم الحرارة؟ أيهما تختار بعد تمرين شاق؟",
    excerpt: "مقارنة علمية دقيقة بين فوائد التعرض للبرد والحرارة لتقليل آلام العضلات والالتهابات.",
    readTime: "5 دقائق",
    author: "د. أحمد قاسم",
    date: "15 ديسمبر 2024",
  },
];

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const remainingPosts = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Search & Categories Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent blur-[120px] pointer-events-none opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter">مدونة <span className="text-gradient-hero">B•Stance</span></h1>
            <p className="text-muted-foreground text-lg mb-10 font-bold">آخر الأبحاث والنصائح في علوم الرياضة والتغذية والاستشفاء.</p>
            
            <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 mb-12">
                <div className="relative flex-1">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input className="w-full bg-secondary/50 border border-border rounded-xl pr-10 pl-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-muted-foreground shadow-sm" placeholder="ابحث عن موضوع..." />
                </div>
                <button className="px-6 py-3 bg-secondary rounded-xl font-bold flex items-center justify-center gap-2 border border-border hover:bg-secondary/70 transition-all">
                    <Filter className="w-4 h-4" />
                    تصفية
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 overflow-x-auto pb-4 no-scrollbar">
                {categories.map((c) => (
                    <button key={c} className={`px-5 py-2 rounded-full border transition-all text-xs font-black ${
                        c === 'الكل' ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' : 'bg-secondary/40 border-border text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}>
                        {c}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card rounded-[32px] border border-border bg-[#0a0a0f]/40 relative overflow-hidden group cursor-pointer hover:border-primary/20 transition-all">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    <div className="grid lg:grid-cols-2 lg:items-center">
                        <div className="p-8 md:p-14 lg:p-20 relative z-10 text-right">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="px-3.5 py-1.5 rounded-lg bg-primary/20 text-primary text-[10px] uppercase font-black border border-primary/20 tracking-widest">متميز</span>
                                <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{featuredPost.category}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                            <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-bold opacity-80">{featuredPost.excerpt}</p>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground font-bold border-t border-border/50 pt-8">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center font-black text-[10px] text-primary">س</div>
                                    <span>{featuredPost.author}</span>
                                </div>
                                <div className="flex items-center gap-2 border-r border-border pr-6">
                                    <Clock className="w-4 h-4" />
                                    <span>{featuredPost.readTime} للقراءة</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video lg:aspect-square bg-secondary/30 border-l border-border flex items-center justify-center overflow-hidden">
                             <BookOpen className="w-24 h-24 text-muted-foreground/10 group-hover:scale-110 group-hover:text-primary/10 transition-all transform -rotate-12" />
                             <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a10] to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )}

      {/* Grid Posts */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="glass-card rounded-3xl border border-border bg-background/40 p-6 hover:border-primary/20 transition-all group relative overflow-hidden flex flex-col h-full hover:shadow-xl shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                             <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-border ${
                                 p.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                                 p.color === 'green' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'
                             }`}>
                                 <p.icon className="w-6 h-6" />
                             </div>
                             <div className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">{p.category}</div>
                        </div>
                        <h3 className="text-xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed font-bold flex-1 opacity-70 mb-6">{p.excerpt}</p>
                        
                        <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-border/40">
                             <div className="flex items-center justify-between text-[10px] font-black text-muted-foreground opacity-60">
                                <span>{p.author}</span>
                                <span>{p.date}</span>
                             </div>
                             <div className="flex items-center justify-between group-hover:translate-x-[-4px] transition-transform">
                                <span className="text-[11px] font-black text-primary uppercase flex items-center gap-2">
                                    اقرأ المزيد
                                    <ArrowRight className="w-4 h-4 -rotate-180" />
                                </span>
                                <span className="text-[10px] text-muted-foreground font-bold">{p.readTime}</span>
                             </div>
                        </div>
                    </Link>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <button className="px-8 py-3 rounded-xl border border-border bg-secondary/50 font-bold text-xs hover:bg-secondary transition-all">عرض المزيد من المقالات</button>
            </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-40" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-primary/30">
                <Zap className="w-8 h-8 text-primary-foreground fill-current" />
            </div>
            <h2 className="text-4xl font-black mb-6">احصل على علم الرياضة في بريدك</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto font-bold leading-relaxed opacity-80">نرسل أسبوعياً أفضل النصائح والأبحاث العلمية المخصصة للرياضيين الطموحين.</p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                <input className="flex-1 bg-secondary/50 border border-border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-muted-foreground tracking-tight" placeholder="أدخل بريدك الإلكتروني" />
                <button className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-black shadow-lg shadow-primary/20 hover:scale-105 transition-all">اشترك الآن</button>
            </div>
            <p className="mt-4 text-[10px] text-muted-foreground opacity-40 uppercase font-black tracking-widest">لا توجد رسائل سبام • يمكنك المغادرة في أي وقت</p>
        </div>
      </section>
    </div>
  );
}
