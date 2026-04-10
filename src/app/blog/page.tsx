"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Dumbbell, Salad, Heart, Clock, User, ArrowRight, BookOpen, Search, Zap, Filter, CheckCircle2 } from "lucide-react";

const categories = ["الكل", "التدريب", "التغذية", "الاستشفاء", "علم الرياضة", "نصائح"];

const posts = [
  {
    slug: "essential-vitamins-minerals-athletes",
    category: "التغذية",
    icon: Salad,
    color: "green",
    title: "أهم الفيتامينات والمعادن للرياضيين: دليلك الكامل للمصادر الطبيعية",
    excerpt: "اكتشف العناصر الغذائية الأساسية التي تحرك أداءك البدني وكيف تحصل عليها من الطبيعة مباشرة دون الاعتماد على المكملات فقط.",
    readTime: "5 دقائق",
    author: "د. سارة حسن",
    date: "10 يناير 2025",
    featured: true,
  },
  {
    slug: "hiit-vs-liss-cardio-guide",
    category: "التدريب",
    icon: Dumbbell,
    color: "blue",
    title: "HIIT أم LISS؟ دليلك العلمي لاختيار نوع الكارديو المناسب لهدفك",
    excerpt: "مقارنة شاملة بين التدريبات عالية الشدة والتمارين منخفضة الشدة: أيهما الأسرع لحرق الدهون وأيهما الأفضل لبناء اللياقة؟",
    readTime: "6 دقائق",
    author: "م. محمد الشريف",
    date: "9 يناير 2025",
  },
  {
    slug: "muscle-recovery-the-growth-secret",
    category: "الاستشفاء",
    icon: Heart,
    color: "green",
    title: "الاستشفاء العضلي: السر الحقيقي الذي يحدث خارج جدران الصالة الرياضية",
    excerpt: "لماذا لا تنمو عضلاتك أثناء التمرين بل أثناء الراحة؟ تعرف على بروتوكولات الاستشفاء التي تضمن لك التطور المستمر.",
    readTime: "7 دقائق",
    author: "د. أحمد قاسم",
    date: "8 يناير 2025",
  },
  {
    slug: "diet-alone-is-not-enough",
    category: "نصائح",
    icon: Zap,
    color: "yellow",
    title: "هل الدايت وحده يكفي؟ الحقيقة الصادمة عن فقدان الوزن بدون تمرين",
    excerpt: "لماذا قد يكون الرجيم القاسي بدون برنامج رياضي سبباً في ترهل الجسم وفقدان الكتلة العضلية، وكيف تتجنب هذا الفخ؟",
    readTime: "4 دقائق",
    author: "د. سارة حسن",
    date: "7 يناير 2025",
  },
  {
    slug: "does-sweating-mean-fat-loss",
    category: "علم الرياضة",
    icon: BookOpen,
    color: "blue",
    title: "خرافة التعرق وحرق الدهون: هل العرق الكثير يعني فقدان وزن أكثر؟",
    excerpt: "الحقيقة العلمية وراء عملية التعرق وعلاقتها بحرارة الجسم، ولماذا لا يعتبر العرق مقياساً حقيقياً لحرق السعرات الحرارية.",
    readTime: "5 دقائق",
    author: "د. أحمد قاسم",
    date: "6 يناير 2025",
  },
  {
    slug: "is-knuckle-cracking-harmful",
    category: "علم الرياضة",
    icon: BookOpen,
    color: "green",
    title: "هل فرقعة الأصابع تسبب هشاشة العظام؟ رأي العلم النهائي",
    excerpt: "كشف الغموض وراء صوت الفرقعة المألوف، ولماذا يعتبره الباحثون عادة غير ضارة في معظم الحالات.",
    readTime: "3 دقائق",
    author: "د. أحمد قاسم",
    date: "5 يناير 2025",
  },
  {
    slug: "hamstring-injuries-prevention",
    category: "الاستشفاء",
    icon: Heart,
    color: "yellow",
    title: "إصابة العضلة الخلفية (Hamstring): الكابوس الذي يهدد الرياضيين",
    excerpt: "دليل اللاعبين والرياضيين لفهم مراحل إصابة الخلفية وكيفية بناء توازن عضلي يحميك من التمزقات المتكررة.",
    readTime: "8 دقائق",
    author: "م. محمد الشريف",
    date: "4 يناير 2025",
  },
  {
    slug: "reps-and-goals-training-science",
    category: "التدريب",
    icon: Dumbbell,
    color: "blue",
    title: "لغة الأرقام في الجيم: كيف تختار عدد العدات المناسب لهدفك؟",
    excerpt: "فهم علم التكيف العضلي وكيف يؤثر عدد التكرارات في كل مجموعة على النتيجة النهائية لشكل وقوة عضلاتك.",
    readTime: "6 دقائق",
    author: "م. محمد الشريف",
    date: "3 يناير 2025",
  },
  {
    slug: "evening-stretches-benefits",
    category: "الاستشفاء",
    icon: Heart,
    color: "green",
    title: "سحر الإطالات قبل النوم: 5 دقائق قد تغير جودة استشفائك العضلي",
    excerpt: "لماذا تعتبر تمارين الإطالة البسيطة في نهاية اليوم ضرورة وليست رفاهية لتحسين المرونة وجودة النوم.",
    readTime: "4 دقائق",
    author: "د. أحمد قاسم",
    date: "2 يناير 2025",
  },
  {
    slug: "best-time-for-vitamins",
    category: "التغذية",
    icon: Salad,
    color: "yellow",
    title: "التوقيت هو كل شيء: متى تأخذ فيتاميناتك لتحقيق أقصى استفادة؟",
    excerpt: "دليل عملي لتنسيق مواعيد الفيتامينات والمعادن مع الوجبات لضمان أفضل امتصاص وتجنب تعارض العناصر.",
    readTime: "5 دقائق",
    author: "د. سارة حسن",
    date: "1 يناير 2025",
  },
  {
    slug: "prickly-pear-benefits-athletes",
    category: "التغذية",
    icon: Salad,
    color: "blue",
    title: "التين الشوكي: كنز الصيف المخفي والقيمة الغذائية للرياضيين",
    excerpt: "اكتشف لماذا يعتبر التين الشوكي من أفضل الفواكه لتحسين الهضم ومكافحة الالتهابات بفضل مضادات الأكسدة.",
    readTime: "4 دقائق",
    author: "د. سارة حسن",
    date: "30 ديسمبر 2024",
  },
  {
    slug: "boost-testosterone-naturally",
    category: "نصائح",
    icon: Zap,
    color: "green",
    title: "دليلك لرفع هرمون التستسترون طبيعياً عبر التغذية والعادات",
    excerpt: "بعيداً عن المكملات المشبوهة، تعلم كيف ترفع مستويات الهرمون الأساسي للذكورة عبر تحسين نومك وجودة غذائك.",
    readTime: "6 دقائق",
    author: "م. محمد الشريف",
    date: "29 ديسمبر 2024",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchesCategory = activeCategory === "الكل" || p.category === activeCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const featuredPost = filteredPosts.find((p) => p.featured) || (activeCategory === "الكل" ? posts[0] : undefined);
  const remainingPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug);
  const visiblePosts = remainingPosts.slice(0, visibleCount);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 5000);
  };

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
                    <input 
                      className="w-full bg-secondary/50 border border-border rounded-xl pr-10 pl-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-muted-foreground shadow-sm" 
                      placeholder="ابحث عن موضوع..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <button className="px-6 py-3 bg-secondary rounded-xl font-bold flex items-center justify-center gap-2 border border-border hover:bg-secondary/70 transition-all disabled:opacity-50">
                    <Filter className="w-4 h-4" />
                    تصفية
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 overflow-x-auto pb-4 no-scrollbar">
                {categories.map((c) => (
                    <button 
                      key={c} 
                      onClick={() => setActiveCategory(c)}
                      className={`px-5 py-2 rounded-full border transition-all text-xs font-black ${
                        activeCategory === c ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20' : 'bg-secondary/40 border-border text-muted-foreground hover:bg-secondary hover:text-foreground'
                      }`}
                    >
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
                <Link href={`/blog/${featuredPost.slug}`} className="block glass-card rounded-[32px] border border-border bg-[#0a0a0f]/40 relative overflow-hidden group cursor-pointer hover:border-primary/20 transition-all">
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
                </Link>
            </div>
        </section>
      )}

      {/* Grid Posts */}
      <section className="py-24 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {visiblePosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {visiblePosts.map((p) => (
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
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-bold">لم يتم العثور على مقالات تطابق بحثك.</p>
              </div>
            )}
            
            {remainingPosts.length > visibleCount && (
              <div className="mt-16 text-center">
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 6)}
                    className="px-8 py-3 rounded-xl border border-border bg-secondary/50 font-bold text-xs hover:bg-secondary transition-all"
                  >
                    عرض المزيد من المقالات
                  </button>
              </div>
            )}
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
            
            {isSubscribed ? (
              <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-500">
                <div className="flex items-center gap-2 px-6 py-4 bg-primary/10 border border-primary/20 rounded-2xl text-primary font-black">
                  <CheckCircle2 className="w-6 h-6" />
                  تم الاشتراك بنجاح! تفضل بمراجعة بريدك.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input required type="email" className="flex-1 bg-secondary/50 border border-border rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-all font-bold placeholder:text-muted-foreground tracking-tight" placeholder="أدخل بريدك الإلكتروني" />
                  <button type="submit" className="px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-black shadow-lg shadow-primary/20 hover:scale-105 transition-all">اشترك الآن</button>
              </form>
            )}
            <p className="mt-4 text-[10px] text-muted-foreground opacity-40 uppercase font-black tracking-widest">لا توجد رسائل سبام • يمكنك المغادرة في أي وقت</p>
        </div>
      </section>
    </div>
  );
}
