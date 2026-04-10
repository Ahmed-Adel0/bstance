"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "../blogData";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  Share2, 
  Bookmark,
  ChevronLeft,
  CheckCircle2
} from "lucide-react";

export default function BlogPostDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const post = blogPosts.find((p) => p.slug === slug);

  const [isSaved, setIsSaved] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('saved_posts');
      return saved ? JSON.parse(saved).includes(slug) : false;
    }
    return false;
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [shareStatus, setShareStatus] = useState<string | null>(null);

  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem('saved_posts') || '[]');
    if (isSaved) {
      const updated = saved.filter((s: string) => s !== slug);
      localStorage.setItem('saved_posts', JSON.stringify(updated));
    } else {
      saved.push(slug);
      localStorage.setItem('saved_posts', JSON.stringify(saved));
    }
    setIsSaved(!isSaved);
  };

  const handleShare = async () => {
    if (!post) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
        setShareStatus("تمت المشاركة!");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setShareStatus("تم نسخ الرابط!");
    }
    setTimeout(() => setShareStatus(null), 3000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6 text-center">
        <div>
          <h1 className="text-4xl font-black mb-4">المقال غير موجود</h1>
          <p className="text-muted-foreground mb-8">عذراً، لم نتمكن من العثور على المقال الذي تبحث عنه.</p>
          <Link href="/blog" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold">
            العودة للمدونة
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-20" dir="rtl">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      {/* Header / Breadcrumbs */}
      <div className="pt-28 md:pt-36 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <ChevronLeft className="w-3 h-3 rotate-180" />
            <Link href="/blog" className="hover:text-primary transition-colors">المدونة</Link>
            <ChevronLeft className="w-3 h-3 rotate-180" />
            <span className="text-primary/60 truncate max-w-[150px] md:max-w-none">{post.title}</span>
          </nav>

          <div className="mb-10 text-right">
             <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                   post.color === 'green' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                   post.color === 'blue' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                }`}>
                    {post.category}
                </span>
                <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground bg-secondary/30 px-3 py-1 rounded-lg border border-border">
                    <Clock className="w-3 h-3" />
                    {post.readTime} للقراءة
                </div>
             </div>
             
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.15] tracking-tight">{post.title}</h1>
             
             <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border/50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center font-black text-xs text-primary">
                        {post.author.split(' ').pop()?.charAt(0)}
                    </div>
                    <div>
                        <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-0.5">الكاتب</div>
                        <div className="text-xs font-bold">{post.author}</div>
                    </div>
                </div>
                <div className="flex items-center gap-3 pr-6 border-r border-border/50">
                    <div className="w-10 h-10 rounded-xl bg-secondary/40 flex items-center justify-center text-muted-foreground border border-border">
                        <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                        <div className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-0.5">تاريخ النشر</div>
                        <div className="text-xs font-bold">{post.date}</div>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 mr-auto relative">
                    {shareStatus && (
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-black rounded-lg animate-in fade-in slide-in-from-bottom-1 duration-300">
                        {shareStatus}
                      </div>
                    )}
                    <button 
                      onClick={handleShare}
                      className="w-10 h-10 rounded-xl border border-border flex items-center justify-center hover:bg-secondary transition-all text-muted-foreground hover:text-foreground"
                    >
                        <Share2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={handleSave}
                      className={`w-10 h-10 rounded-xl border border-border flex items-center justify-center transition-all ${
                        isSaved ? "bg-primary/20 text-primary border-primary/30" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-primary' : ''}`} />
                    </button>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <article className="glass-card rounded-[40px] border border-border bg-[#0a0a0f]/40 p-8 md:p-16 lg:p-20 shadow-2xl relative">
              <div className="absolute top-0 right-10 -translate-y-1/2 w-20 h-20 rounded-3xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/30 rotate-12">
                 <post.icon className="w-10 h-10 text-primary-foreground transform -rotate-12" />
              </div>
              
              <div 
                className="prose prose-invert prose-lg max-w-none 
                  prose-headings:font-black prose-headings:tracking-tight 
                  prose-p:text-muted-foreground prose-p:font-bold prose-p:leading-loose
                  prose-li:text-muted-foreground prose-li:font-bold
                  prose-strong:text-foreground prose-strong:font-black
                  prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-primary
                  prose-h4:text-xl prose-h4:font-black prose-h4:mb-4
                  prose-hr:border-border prose-hr:my-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-20 pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="text-right">
                    <h4 className="text-lg font-black mb-2">هل أعجبك المقال؟</h4>
                    <p className="text-sm text-muted-foreground font-bold">بإمكانك المساعدة في نشر العلم الرياضي عبر مشاركته مع أصدقائك.</p>
                 </div>
                 <div className="flex gap-4">
                    <button 
                      onClick={handleShare}
                      className="px-6 py-3 bg-secondary rounded-xl font-bold border border-border hover:bg-secondary/70 transition-all flex items-center gap-2"
                    >
                        <Share2 className="w-4 h-4" />
                        مشاركة المقال
                    </button>
                    <Link 
                      href="/blog"
                      className="px-6 py-3 border border-border rounded-xl font-bold hover:bg-secondary transition-all flex items-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4 -rotate-180" />
                        جميع المقالات
                    </Link>
                 </div>
              </div>
           </article>

           {/* Newsletter Mini */}
           <div className="mt-16 glass-card rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12 text-center">
                <h3 className="text-2xl font-black mb-4">انضم لـ 5000+ رياضي</h3>
                <p className="text-muted-foreground mb-8 font-bold text-sm">احصل على أحدث الأبحاث العلمية في بريدك أسبوعياً.</p>
                {isSubscribed ? (
                  <div className="flex items-center justify-center gap-2 text-primary font-black py-3">
                    <CheckCircle2 className="w-5 h-5" />
                    تم الاشتراك بنجاح!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                      <input required type="email" className="flex-1 bg-background/50 border border-border rounded-xl px-4 py-3 text-xs font-bold" placeholder="بريدك الإلكتروني" />
                      <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-black text-xs">اشترك الآن</button>
                  </form>
                )}
           </div>
        </div>
      </main>

      {/* Navigation Posts */}
      <section className="py-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
                <h3 className="text-2xl font-black">مقالات ذات صلة</h3>
                <Link href="/blog" className="text-xs font-black text-primary flex items-center gap-2 uppercase tracking-widest hover:translate-x-[-5px] transition-transform">
                    عرض الكل
                    <ArrowLeft className="w-4 h-4 -rotate-180" />
                </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.filter(p => p.slug !== slug).slice(0, 3).map(p => (
                   <Link key={p.slug} href={`/blog/${p.slug}`} className="glass-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-all group">
                        <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">{p.category}</div>
                        <h4 className="text-lg font-black mb-3 leading-tight group-hover:text-primary transition-colors">{p.title}</h4>
                        <div className="flex items-center justify-between text-[10px] font-bold text-muted-foreground pt-4 border-t border-border/30">
                            <span>{p.date}</span>
                            <span>{p.readTime}</span>
                        </div>
                   </Link>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
