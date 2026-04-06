"use client";

import Link from "next/link";
import WhatsAppForm from "@/components/WhatsAppForm";
import { useState as useReactState } from "react";
import {
  Dumbbell,
  Salad,
  Heart,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  ChevronRight,
  Play,
  X,
} from "lucide-react";

const stats = [
  { value: "+1200", label: "لاعب تم تطويرهم" },
  { value: "+7", label: "أكاديمية تستخدم النظام" },
  { value: "88/100", label: "متوسط تقييم الأداء" },
  { value: "4.9/5", label: "تقييم المستخدمين" },
];

const services = [
  {
    icon: Dumbbell,
    title: "التدريب",
    color: "green",
    desc: "برامج تدريبية مخصصة لكل لاعب بناءً على تقييم شامل للأداء، تتضمن تمارين يومية وجلسات مباشرة.",
    features: ["Online & Offline", "مراقبة فورية", "تعديل تلقائي"],
  },
  {
    icon: Salad,
    title: "التغذية",
    color: "blue",
    desc: "خطط غذائية علمية مصممة لدعم الأداء الرياضي، متابعة السعرات وتحليل التغذية اليومية.",
    features: ["خطط مخصصة", "تتبع السعرات", "استشارات أخصائيين"],
  },
  {
    icon: Heart,
    title: "الاستشفاء",
    color: "yellow",
    desc: "جلسات استشفاء احترافية Offline لتقليل الإصابات وتحسين الأداء على المدى الطويل.",
    features: ["جلسات حضورية", "متابعة الإرهاق", "توصيات طبية"],
  },
];

const testimonials = [
  {
    name: "أحمد علي",
    role: "ولي أمر لاعب كرة قدم",
    text: "ابني مستواه اتغير تمام خلال 3 شهور… أول مرة أشوف تطور حقيقي!",
    rating: 5,
  },
  {
    name: "محسن ابراهيم",
    role: "مدير أكاديمية سباحة",
    text: "قدرنا نتابع 70 لاعب بسهولة وبدقة غير مسبوقة.",
    rating: 5,
  },
  {
    name: "محمد هلال",
    role: "لاعب جيم",
    text: "مش بس تدريب… دي تجربة متكاملة غيرت حياتي.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "هل المنصة مناسبة للمبتدئين؟",
    a: "نعم، النظام مصمم لكل المستويات من مبتدئ إلى محترف.",
  },
  {
    q: "هل في متابعة حقيقية؟",
    a: "نعم، متابعة يومية + تعديل مستمر حسب الأداء.",
  },
  {
    q: "هل النتائج مضمونة؟",
    a: "طبقًا لبياناتنا، أكثر من 78% من اللاعبين لاحظوا تحسن خلال أول شهر.",
  },
  {
    q: "هل في اشتراك طويل؟",
    a: "لا، بدون عقود – تقدر تبدأ وتوقف في أي وقت.",
  },
];

const colorMap: Record<string, string> = {
  green: "text-primary bg-primary/10 border-primary/20",
  blue: "text-accent bg-accent/10 border-accent/20",
  yellow: "text-foreground bg-foreground/10 border-foreground/20",
};

function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useReactState<number | null>(null);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div 
          key={i} 
          className="glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all cursor-pointer group"
          onClick={() => toggle(i)}
        >
          <div className="p-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${activeIndex === i ? 'bg-primary text-white' : 'bg-primary/10 border border-primary/20 text-primary'}`}>
                <span className="font-black text-xs">{i + 1}</span>
              </div>
              <h3 className="font-bold text-foreground transition-colors group-hover:text-primary">{faq.q}</h3>
            </div>
            <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${activeIndex === i ? 'rotate-90 text-primary' : 'rotate-180'}`} />
          </div>
          
          <div 
            className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="px-6 pb-6 pr-20 text-sm text-muted-foreground leading-relaxed border-t border-border/10 pt-4">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const resultCardsData = [
  { 
    id: 1, 
    name: "كنزي", 
    sport: "رياضة تنافسية", 
    stats: "وزن مثالي وأداء عالي", 
    img: "/clients/kanzy.jpg", 
    coach: "B•Stance Team", 
    category: "تجهيز بطولات واستشفاء", 
    story: "كنزي كانت بتواجه مشكلة كبيرة قبل البطولات، وزنها مش ثابت وضغط كبير إنها تنزل بسرعة، ومع كل محاولة كانت بتخاف تخسر قوتها أو طاقتها. قررت تبدأ بطريقة مختلفة، فاشتغلنا معاها على نظام متكامل من تدريب وتغذية واستشفاء. مع الوقت قدرت توصل لوزنها المثالي من غير إجهاد، وحافظت على مستواها البدني، ودخلت البطولات جاهزة بأعلى أداء." 
  },
  { 
    id: 2, 
    name: "جنّة", 
    sport: "منتخب الصفوة", 
    stats: "تأهل للمنتخب", 
    img: "/clients/janah.jpg", 
    coach: "B•Stance Team", 
    category: "تغذية ذكية وإدارة طاقة", 
    story: "جنّة كانت قبل تصفيات منتخب الصفوة تحت ضغط كبير، الوزن ثابت والتوتر عالي، وأي قرار غلط كان ممكن يضيّع الفرصة. بدل ما تعتمد على التخسيس العنيف، بدأنا معاها خطة قائمة على التغذية الذكية وإدارة طاقة الجسم. يوم التصفيات دخلت وهي مش مرهقة، بالعكس كانت بكامل قوتها، وقدرت تقدم أداء قوي وتتأهل لمنتخب الصفوة." 
  },
  { 
    id: 3, 
    name: "عبد الملك", 
    sport: "لياقة وتأهيل", 
    stats: "تعافي كامل", 
    img: "/clients/عبدالملك.jpg", 
    coach: "B•Stance Team", 
    category: "إعادة تأهيل إصابات", 
    story: "عبد الملك كان عنده تحدي صعب، انزلاق غضروفي في الفقرة الرابعة والخامسة مع ضغط شغل يومي. الوضع كان ممكن يخليه يوقف تمامًا، لكنه قرر يكمل. اشتغلنا معاه على برنامج تدريبي آمن مناسب لحالته مع نظام غذائي يساعده على التعافي. خلال شهر ونص بس بدأ يظهر فرق واضح في جسمه وأدائه، وقدر يتحسن بدون ما يضغط على إصابته." 
  },
  { 
    id: 4, 
    name: "أحمد", 
    sport: "كونغ فو", 
    stats: "+12kg عضل", 
    img: "/imgs/res 1.jpg", 
    coach: "B•Stance Team", 
    category: "بناء عضلي رياضي", 
    story: "أحمد بدأ رحلته كلاعب كونغ فو بوزن 58 كجم وكان محتاج يبني جسمه عشان ينافس بشكل أقوى. التزم ببرنامج تدريب مكثف ونظام غذائي دقيق مناسب لطبيعة لعبته. خلال 3 شهور وصل لوزن 70 كجم مع تحسن كبير في القوة والسرعة ورد الفعل، وأصبح جاهز للمنافسة بشكل أفضل." 
  },
  { 
    id: 5, 
    name: "محمود", 
    sport: "كونغ فو / حركة", 
    stats: "-8kg وزن", 
    img: "/clients/محمود كونغ فو.jpg", 
    coach: "B•Stance Team", 
    category: "تحكم وتطوير أداء", 
    story: "محمود بدأ بوزن 68 كجم وكان محتاج يتحكم في جسمه ويحسن أداءه داخل اللعب. اشتغل على نظام تدريب منتظم وتغذية مخصصة لهدفه. خلال فترة قصيرة قدر ينزل لوزن 60 كجم، ومع ده تحسنت سرعته وقدرته على التحكم في جسمه، وده انعكس بشكل واضح على مستواه وثقته أثناء اللعب." 
  },
  { 
    id: 6, 
    name: "عادل", 
    sport: "لياقة عامة", 
    stats: "تحول وتفوق", 
    img: "/clients/عادل.jpg", 
    coach: "B•Stance Team", 
    category: "إدارة الوقت واللياقة", 
    story: "عادل كان في فترة صعبة جدًا مع ضغط امتحانات الثانوية العامة، وكان سهل جدًا يأجل أي خطوة. لكنه قرر يبدأ رغم الظروف، ونظم وقته بين المذاكرة والتمرين. التزم بالخطة وبدأ يشوف نتائج تدريجيًا في جسمه ومستواه، ونجح دراسيًا في نفس الوقت، وأثبت إن البداية ممكنة في أي وقت." 
  }
];

function ResultCard({ data, onClick }: { data: typeof resultCardsData[0], onClick: () => void }) {
  return (
    <div className="w-[300px] flex-shrink-0 group relative overflow-hidden rounded-[2rem] glass-card border border-border/50 hover:border-primary/50 transition-all duration-500 bg-secondary/10 hover:shadow-[0_0_30px_rgba(43,184,202,0.15)]">
      <div 
        className="relative aspect-[4/5] overflow-hidden cursor-pointer bg-background/50" 
        onClick={onClick}
      >
        {/* Background Image */}
        <img 
          src={data.img} 
          alt={data.name} 
          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
        />
        
        {/* Gradient Overlay for info block readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 pointer-events-none" />

        {/* Hover Alternative (Sleek Icon & Text instead of bulky button) */}
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center z-20">
          <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center mb-3 bg-primary/20 text-primary shadow-[0_0_15px_rgba(43,184,202,0.5)] transform scale-50 group-hover:scale-100 transition-all duration-500 delay-75">
            <ArrowRight className="w-6 h-6 -rotate-180" />
          </div>
          <span className="text-white font-black tracking-wide text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
            اكتشف القصة
          </span>
        </div>

        {/* Info Block Always visible */}
        <div className="absolute bottom-6 left-6 right-6 z-10 transition-transform duration-500 group-hover:translate-y-4 group-hover:opacity-0 pointer-events-none flex items-end justify-between">
          <div className="text-right">
            <h4 className="text-xl font-black text-foreground drop-shadow-md mb-1">{data.name}</h4>
            <p className="text-xs text-primary uppercase font-bold tracking-widest">{data.sport}</p>
          </div>
          <div className="bg-background/80 backdrop-blur-md px-3 py-2 rounded-xl border border-border/50 text-center">
            <span className="block text-accent font-black text-lg leading-none">{data.stats}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [selectedHero, setSelectedHero] = useReactState<typeof resultCardsData[0] | null>(null);

  return (
    <div className="min-h-screen bg-background relative">

      {/* Hero Section */}
      <section id="hero" className="relative md:h-screen min-h-[600px] flex items-center overflow-hidden pt-32 pb-16 md:pt-20 md:pb-10">
        {/* Background Graphic & Image */}
        <div className="absolute inset-0 z-0 bg-background">
          {/* Seamless Blending Gradients */}
          <div className="absolute inset-0 bg-gradient-to-l from-background from-20% via-background/95 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent opacity-80 z-10 pointer-events-none" />
          
          <img 
            alt="Performance Athlete" 
            className="absolute left-0 top-15 md:top-10 w-full h-[85%] md:h-[90%] lg:w-[65%] object-contain object-top lg:object-left-top opacity-50 mix-blend-screen grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8xH6_VUwXxISQ9D9sGKY9FWdXfl-ZICz1dgv2xSXACOyX9PevgkD1--2mtInQ_4Cf230tO-uxalNCBYMawn-QsCSl2FIG6Dwf-h5GJG1HtFC73VtvhSZ_fR43bbOwPHHS4IsUHE6RizcnrGC4YmiUXhVSlPmkpsKnQlyLTz6W0pwBjY87f6HxIkgJYhW1-9Vp8pVYuDs8KUqZUTqqCWTKVnljiR77_lPp8xQzWCEf-cX9_hkkG3RcHFQwjShih-dengnbrdEOe86B" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 flex flex-col items-start space-y-15">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-primary pulse-green" />
                منصة رقم 1 لإدارة الأداء الرياضي في مصر
              </div>

              {/* Headline */}
              <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] md:leading-tight">
                حوّل أداءك{" "}
                <span className="text-gradient-hero">الرياضي</span>
                <br />
                بمنهج علمي متكامل
              </h1>
              
              <p className="text-sm sm:text-base md:text-xl font-medium text-muted-foreground leading-relaxed border-r-2 border-primary/50 pr-5 py-1.5 max-w-2xl" dir="rtl">
                المنصة الأولى من نوعها التي تدمج أدق أساليب التدريب مع التغذية والاستشفاء، لنرتقي بأدائك الرياضي كلياً <span className="text-primary font-bold drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">وليس فقط مظهرك الجسدي.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-8 w-full sm:w-auto">
                <Link
                  href="#registration-form"
                  className="bg-primary text-primary-foreground font-black py-3 px-6 md:py-4 md:px-10 rounded-xl hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all flex items-center justify-center gap-3 group text-sm sm:text-base md:text-lg"
                >
                  ابدأ تقييمك الآن
                  <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#results"
                  className="bg-secondary/50 text-foreground border border-border font-bold py-3 px-6 md:py-4 md:px-10 rounded-xl hover:bg-secondary transition-all text-sm sm:text-base md:text-lg flex items-center justify-center gap-2"
                >
                 نتائجنا
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Kinetic Arc (Visual Branding) */}
        <div className="absolute bottom-10 left-10 hidden lg:block w-[300px] h-[300px] border-4 border-accent/20 rounded-full z-10 pointer-events-none">
          <div className="absolute inset-0 border-t-4 border-primary rounded-full animate-spin [animation-duration:8s]"></div>
          <div className="absolute inset-4 border-b-4 border-accent/40 rounded-full animate-spin [animation-duration:12s]" style={{ animationDirection: 'reverse' }}></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col drop-shadow-xl bg-background/20 backdrop-blur-[2px] rounded-full m-12 border border-border/50">
            <img 
              src="/imgs/Icon.png" 
              alt="BStance Icon" 
              className="w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-[0_0_20px_rgba(57,255,20,0.4)] animate-pulse" 
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium mb-4">
              <Zap className="w-3 h-3" />
              منظومة متكاملة
            </div>
            <h2 className="text-4xl font-black tracking-tight">
              ثلاثة محاور،{" "}
              <span className="text-gradient-hero">نتيجة واحدة</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              كل محور مصمم ليكمل الآخر. التدريب يحتاج تغذية صحيحة، والتغذية لا تكتمل بدون استشفاء فعّال.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all group">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${colorMap[s.color]}`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  اعرف أكثر <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Gap / Bento Grid Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* subtle pattern can go here */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 md:mb-20 text-center lg:text-right">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
              المعادلة اللي ناقصاك <br /><span className="text-primary italic">عشان توصل للقمة</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl text-lg mx-auto lg:mx-0">
              التمرين لوحده بيمثل 30% بس من النتيجة. الـ 70% الباقيين هما التخصص الحقيقي لـ B•Stance.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-secondary/30 rounded-3xl overflow-hidden relative group border border-border/50">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-8 md:p-12 flex flex-col justify-end z-10">
                <span className="text-primary font-bold text-xs md:text-sm uppercase mb-4 tracking-widest text-glow">التشخيص الدقيق</span>
                <h4 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tighter">البصمة الرياضية الحقيقية</h4>
                <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
                  كل لاعب جيناته، سرعة حرقه، ونقاط ضعفه مختلفة. بنبدأ بتحليل InBody وتقييم حركي شامل عشان نعرف "قدرة تحملك" الحقيقية، مش اللي الورقة بتقوله.
                </p>
              </div>
              <img alt="Biometric scanning" className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0 absolute inset-0 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcidyI8KNBsjflGKLwTfsnHsd5PO9yBEOAGC-RiK2T2xYEZ83rZzpccvbaTeqg8eZYEfTcOh3pQ_TNoMGEtJZVabbX_vC5ZyPe5OZF0yEqyYhfCO9-8kT1OLy34KwSLVR5DCU12fR7W8FM4KknGBup7lmTwItiiMD3rWZ8Jq6y1OAgw7mJ5XVuRgv1yFOAVclniWgvCaDvSaDhJkvzS2c--s2e9AOqjWbJ0tF_mn-r5EJaNmER8dX4ajUyqVlK9zSj2buL5sW9YnDb" />
            </div>

            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="bg-secondary/20 p-8 md:p-10 rounded-3xl flex flex-col justify-center border border-border/30 relative group">
                <span className="text-muted-foreground font-bold text-xs uppercase mb-6 tracking-widest">التدريب التقليدي</span>
                <h5 className="text-xl md:text-2xl font-bold mb-4">نظام "الفورمة الواحدة"</h5>
                <p className="text-muted-foreground text-sm leading-relaxed border-r-2 border-border/50 pr-4">
                  "نفس البرنامج لكل الناس، ونفس الأكل لكل الأوزان.. والبقاء للأقوى!"
                </p>
              </div>
              <div className="bg-primary p-8 md:p-10 rounded-3xl flex flex-col justify-center text-primary-foreground relative shadow-[0_10px_40px_rgba(57,255,20,0.2)]">
                <span className="font-bold text-xs uppercase mb-6 tracking-widest opacity-80">نهج B•Stance الذكي</span>
                <h5 className="text-xl md:text-2xl font-black mb-4">التدريب المتكيف والتحكم في الاستشفاء</h5>
                <p className="text-primary-foreground/90 font-medium text-sm leading-relaxed border-r-2 border-primary-foreground/30 pr-4">
                  نظامنا بيعدل حمل التمرين يوم بيوم بناءً على جودة نومك وإجهادك.. بنعرف إمتى جسمك محتاج راحة وإمتى محتاج زقة بعلم التغذية والاستشفاء لترجع للملعب 100%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Results Scrolling Section */}
      <section id="results" className="py-24 md:py-32 bg-background border-t border-border/50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            <Star className="w-3 h-3 fill-primary text-primary" />
            قصص نجاح حقيقية
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">
            أبطال <span className="text-gradient-hero">B•Stance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg mx-auto">
            رحلات تحول استثنائية لأبطالنا... كل إنجاز هو نتيجة تخطيط علمي وتدريب موجه، وليس صدفة.
          </p>
        </div>

        <div className="flex flex-col gap-8 relative z-10">
          {/* Row 1 */}
          <div className="flex overflow-hidden pause-on-hover">
            <div className="flex animate-scroll-left w-max gap-6 pr-6">
              {[...resultCardsData, ...resultCardsData, ...resultCardsData, ...resultCardsData].map((data, index) => (
                <ResultCard key={`row1-${index}`} data={data} onClick={() => setSelectedHero(data)} />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden pause-on-hover">
            <div className="flex animate-scroll-right w-max gap-6 pr-6">
              {[...resultCardsData, ...resultCardsData, ...resultCardsData, ...resultCardsData].reverse().map((data, index) => (
                <ResultCard key={`row2-${index}`} data={data} onClick={() => setSelectedHero(data)} />
              ))}
            </div>
          </div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 blur-[150px] rounded-full -translate-y-1/2 pointer-events-none" />
      </section>

      {/* Testimonials */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-medium mb-4">
              <Star className="w-3 h-3" />
              آراء العملاء
            </div>
            <h2 className="text-4xl font-black tracking-tight">
              ماذا يقول <span className="text-gradient-green">لاعبونا</span>؟
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all">
                <div className="text-3xl font-black text-primary mb-2">{s.value}</div>
                <div className="text-xs text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration / CTA Section */}
      <section id="registration-form" className="py-20 border-t border-border scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black tracking-tight mb-4">
              ابدأ رحلتك دلوقتي <span className="text-primary">(مجاني 100%)</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              انضم لمئات اللاعبين الذين حولوا أداءهم مع B•Stance. التقييم مجاني وبدون التزامات.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.7fr_1fr] md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <WhatsAppForm />

            {/* Side CTAs */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-primary/20">
                <h3 className="font-bold text-lg mb-2">ابدأ التقييم المجاني الآن</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  تقييم شامل لمستواك الرياضي مجاناً بدون أي التزام. اكتشف نقاط قوتك وما تحتاج تطوره.
                </p>
                <Link
                  href="/onboarding"
                  className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  ابدأ الآن <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-accent/20">
                <h3 className="font-bold text-lg mb-2">احجز مكالمة استشارية</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  تحدث مع أحد متخصصينا واعرف خطة التطوير المناسبة لك أو لأكاديميتك.
                </p>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all"
                >
                  احجز الآن <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black tracking-tight mb-4">
              الأسئلة <span className="text-gradient-green">الشائعة</span>
            </h2>
            <p className="text-muted-foreground">كل اللي محتاج تعرفه قبل ما تبدأ</p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <img src="/imgs/Logo.png" alt="BStance Logo" className="h-10 w-auto object-contain" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                منظومة متكاملة لإدارة الأداء الرياضي في مصر والوطن العربي.
              </p>
            </div>
            {[
              {
                title: "المنصة",
                links: ["الخدمات", "الأسعار", "النتائج", "المدونة"],
              },
              {
                title: "للمتخصصين",
                links: ["بورتال المدرب", "أخصائي التغذية", "الاستشفاء", "الأكاديميات"],
              },
              {
                title: "الشركة",
                links: ["من نحن", "تواصل معنا", "سياسة الخصوصية", "الشروط"],
              },
            ].map((col) => (
              <div key={col.title}>
                <div className="text-sm font-semibold mb-3">{col.title}</div>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2025 B•Stance. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/bstanceofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/BStanceOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/10 transition-all"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <span className="text-xs text-muted-foreground">صُنع بـ ❤️ لأبطال المستقبل</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Hero Modal */}
      {selectedHero && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" dir="rtl">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 animate-backdrop-in" 
            onClick={() => setSelectedHero(null)} 
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card border border-border/50 rounded-3xl shadow-[0_0_50px_rgba(43,184,202,0.15)] bg-secondary/30 flex flex-col md:flex-row p-6 md:p-8 animate-modal-in">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedHero(null)} 
              className="absolute top-4 right-4 md:top-6 md:left-6 md:right-auto z-10 w-10 h-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center border border-border/50 hover:bg-destructive/20 hover:text-destructive transition-colors hidden md:flex"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Mobile Close Button */}
            <button 
              onClick={() => setSelectedHero(null)} 
              className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center border border-border hover:bg-destructive/20 hover:text-destructive transition-colors md:hidden"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Column */}
            <div className="w-full md:w-2/5 aspect-[4/5] overflow-hidden rounded-2xl relative mb-6 md:mb-0 md:ml-8 shrink-0 border border-primary/20 bg-background/50">
              <img src={selectedHero.img} alt={selectedHero.name} className="w-full h-full object-contain" />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border/50 flex items-center gap-2">
                 <span className="text-accent font-black text-xl">{selectedHero.stats}</span>
              </div>
            </div>

            {/* Details Column */}
            <div className="w-full md:w-3/5 flex flex-col justify-center">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium w-fit mb-4">
                  <Star className="w-3 h-3 fill-primary" /> تحت إشراف: {selectedHero.coach}
               </div>

               <h3 className="text-3xl md:text-5xl font-black mb-1">{selectedHero.name}</h3>
               <p className="text-muted-foreground font-bold uppercase tracking-widest text-sm mb-6">{selectedHero.sport}</p>
               
               <h4 className="text-lg md:text-xl font-bold mb-3 border-b border-border/50 pb-3 text-foreground">{selectedHero.category}</h4>
               
               <p className="text-muted-foreground leading-relaxed mb-8 md:text-lg">{selectedHero.story}</p>
               
               <Link
                  href="#registration-form"
                  onClick={() => setSelectedHero(null)}
                  className="bg-primary text-primary-foreground font-black py-4 px-6 md:px-8 rounded-xl flex items-center justify-center gap-3 group w-full md:w-fit hover:shadow-[0_0_30px_rgba(43,184,202,0.4)] transition-all mt-auto"
               >
                  ابدأ رحلتك زي {selectedHero.name.split(' ')[0]}
                  <ArrowRight className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
