"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Star,
  TrendingUp,
  Heart,
  ChevronRight,
  Target,
  Users,
  Clock,
  Zap,
  X,
  ArrowLeft,
} from "lucide-react";

const clients = [
  {
    id: 1,
    name: "تامر",
    sport: "Fitness",
    category: "بناء عضلي",
    duration: "4.5 شهور",
    tag: "إكتومورف",
    img: "/clients/tamer.jpeg",
    stats: "تحول كتلة عضلية",
    story:
      'تامر كان من النوع اللي ناس كتير بتقول عليه "صعب يزيد"… جسم إكتومورف، حرق عالي، وزيادة الوزن عنده تحدي كبير. لكن مع الالتزام بالنظام الصح: تدريب + تغذية + متابعة مستمرة خلال 4 شهور ونص بس… قدر يعمل تحول واضح في الكتلة العضلية والنشفان. النتيجة؟ جسم متوازن وقوي يثبت إن المشكلة مش في الجينات… المشكلة في النظام.',
  },
  {
    id: 2,
    name: "الديب",
    sport: "Performance",
    category: "تطوير أداء",
    duration: "مستمر",
    tag: "التزام",
    img: "/clients/deeb.jpeg",
    stats: "تحول ملحوظ",
    story:
      "رحلة الديب لسه مكملة… لكن حتى أول مرحلة من التحول كانت كفاية إنها تبين الفرق. التغيير اللي حصل في البداية بس كان ملحوظ جدًا، وده بسبب الالتزام والاستمرارية. والأهم؟ المستوى الحالي بقى مختلف تمامًا عن البداية.",
  },
  {
    id: 3,
    name: "د. طارق شريف",
    sport: "Fitness",
    category: "تطوير شامل",
    duration: "5 شهور",
    tag: "انضباط",
    img: "/clients/tarek-sherif.jpeg",
    stats: "تحول في 5 شهور",
    story:
      "طبيعة شغله كدكتور كانت ممكن تكون عائق… لكن عقليته خلتها ميزة. خلال 5 شهور فقط، قدر يوصل لتغير واضح في جسمه وأدائه. التنظيم والانضباط كانوا العامل الأساسي في التحول ده، وده اللي خلا النتيجة تطلع بالشكل ده.",
  },
  {
    id: 4,
    name: "محمود (حووود)",
    sport: "كرة قدم",
    category: "بناء عضلي رياضي",
    duration: "9 شهور",
    tag: "لاعب كورة",
    img: "/clients/mahmoud.jpeg",
    stats: "+زيادة عضلية",
    story:
      "المعروف إن لاعبي الكورة صعب يزيدوا كتلة عضلية بسبب طبيعة اللعب والمجهود العالي. لكن محمود قرر يبدأ بشكل مختلف… وخلال 9 شهور قدر: يزيد كتلته العضلية ويحافظ على لياقته ويطور أداؤه داخل الملعب. أثبت إن التوازن ممكن… لو النظام صح.",
  },
  {
    id: 5,
    name: "الاتش",
    sport: "Lifestyle",
    category: "تغيير أسلوب حياة",
    duration: "7 شهور",
    tag: "تحول كامل",
    img: "/clients/hesham.jpeg",
    stats: "أسلوب حياة جديد",
    story:
      "رحلته ما كانتش بس شكل جسم… كانت تغيير كامل في أسلوب حياته. مشاكل في النوم، الأكل، وعدم انتظام التمرين… لكن خلال 7 شهور: بدأ يلتزم عدل عاداته وبنى نظام حياة جديد. النتيجة؟ تغيير واضح في الجسم… والأهم في العقلية.",
  },
  {
    id: 6,
    name: "كابتن ميسو",
    sport: "Bodybuilding",
    category: "تخسيس وتنشيف",
    duration: "14 شهر",
    tag: "إندومورف",
    img: "/clients/miso.jpeg",
    stats: "تحول متوازن",
    story:
      "بدأ بجسم إندومورف… دهون أعلى وكتلة عضلية أقل. لكن مع الاستمرارية لمدة سنة وشهرين: قدر يحول جسمه لشكل متوازن ويزود الكتلة العضلية بشكل واضح ويقلل نسبة الدهون تدريجيًا. رحلة طويلة… لكن نتيجة تستاهل.",
  },
  {
    id: 7,
    name: "عبود",
    sport: "Performance",
    category: "تطوير مستمر",
    duration: "سنة",
    tag: "صبر",
    img: "/clients/abdelrahman.jpeg",
    stats: "تحسن في الأداء",
    story:
      "في البداية، التغيير كان واضح… لكن اللي حصل بعد كده كان أقوى بكتير. بعد سنة من التمرين: تطور كبير في الشكل زيادة في القوة وتحسن في الأداء. رحلة تثبت إن الاستمرارية أهم من السرعة.",
  },
  {
    id: 8,
    name: "سيد",
    sport: "Fitness",
    category: "تنشيف",
    duration: "45 يوم",
    tag: "أسرع تحول",
    img: "/clients/sayed-haddad.jpeg",
    stats: "نشفان ملحوظ",
    story:
      "شغله صعب جدًا (حداد)… مجهود يومي عالي جدًا. لكن رغم كده، خلال 45 يوم بس: وصل لنشفان ملحوظ بدأ يظهر تغيير في جسمه. النتيجة دي تثبت إن أي حد يقدر يبدأ… مهما كانت ظروفه.",
  },
  {
    id: 9,
    name: "مهندس طاهر",
    sport: "Fitness",
    category: "تطوير شامل",
    duration: "مستمر",
    tag: "إصرار",
    img: "/clients/eng taher.jpeg",
    stats: "إصرار وتغيير",
    story:
      "فترات عدم التزام بسبب الدراسة كانت بتوقف التقدم شوية… لكن كل مرة كان بيرجع يكمل وده اللي خلّى في الآخر يوصل لتغيير واضح في جسمه. رحلته بتقول إن: الرجوع أهم من إنك تكمل بدون توقف.",
  },
  {
    id: 10,
    name: "موزة",
    sport: "Fitness",
    category: "تطوير مستمر",
    duration: "مستمر",
    tag: "استمرارية",
    img: "/clients/moza.jpeg",
    stats: "صبر وإنجاز",
    story:
      "رحلته كانت تدريب متقطع… كل شوية يبدأ ويقف لكن في كل مرة بيرجع… كان بيرجع أقوى من الأول ومع الصبر والاستمرارية بدأ يظهر تغيير حقيقي في جسمه لأن السر مش إنك متوقفش… السر إنك دايمًا ترجع.",
  },
  {
    id: 11,
    name: "كنزي",
    sport: "رياضة تنافسية",
    category: "إعداد بطولات",
    duration: "مستمر",
    tag: "بطولات",
    img: "/clients/kanzy.jpg",
    stats: "وزن مثالي وأداء عالي",
    story:
      "كنزي كانت بتواجه مشكلة كبيرة قبل البطولات، وزنها مش ثابت وضغط كبير إنها تنزل بسرعة. ومع كل محاولة كانت بتخاف تخسر قوتها أو طاقتها. قررت تبدأ بطريقة مختلفة، فاشتغلنا معاها على نظام متكامل من تدريب وتغذية واستشفاء. مع الوقت قدرت توصل لوزنها المثالي من غير إجهاد، وحافظت على مستواها البدني، ودخلت البطولات جاهزة بأعلى أداء.",
  },
  {
    id: 12,
    name: "جنّة",
    sport: "رياضة تنافسية",
    category: "إعداد بطولات",
    duration: "مستمر",
    tag: "منتخب",
    img: "/clients/janah.jpg",
    stats: "تأهل للمنتخب",
    story:
      "جنّة كانت قبل تصفيات منتخب الصفوة تحت ضغط كبير، الوزن ثابت والتوتر عالي، وأي قرار غلط كان ممكن يضيّع الفرصة. بدل ما تعتمد على التخسيس العنيف، بدأنا معاها خطة قائمة على التغذية الذكية وإدارة طاقة الجسم. يوم التصفيات دخلت وهي مش مرهقة، بكامل قوتها، وقدرت تتأهل لمنتخب الصفوة.",
  },
  {
    id: 13,
    name: "عبد الملك",
    sport: "Fitness",
    category: "تأهيل إصابات",
    duration: "شهر ونص",
    tag: "تأهيل",
    img: "/clients/abdelmalek.jpg",
    stats: "تعافي كامل",
    story:
      "عبد الملك كان عنده تحدي صعب، انزلاق غضروفي في الفقرة الرابعة والخامسة مع ضغط شغل يومي. الوضع كان ممكن يخليه يوقف تمامًا، لكنه قرر يكمل. اشتغلنا معاه على برنامج تدريبي آمن مناسب لحالته مع نظام غذائي يساعده على التعافي. خلال شهر ونص بس بدأ يظهر فرق واضح في جسمه وأدائه.",
  },
  {
    id: 14,
    name: "عادل",
    sport: "Fitness",
    category: "تطوير شامل",
    duration: "مستمر",
    tag: "إدارة وقت",
    img: "/clients/adel.jpg",
    stats: "تحول وتفوق",
    story:
      "عادل كان في فترة صعبة جدًا مع ضغط امتحانات الثانوية العامة، وكان سهل جدًا يأجل أي خطوة. لكنه قرر يبدأ رغم الظروف، ونظم وقته بين المذاكرة والتمرين. التزم بالخطة وبدأ يشوف نتائج تدريجيًا في جسمه ومستواه، ونجح دراسيًا في نفس الوقت.",
  },
];

const categories = ["الكل", "بناء عضلي", "تخسيس وتنشيف", "إعداد بطولات", "تأهيل إصابات", "تغيير أسلوب حياة", "تطوير شامل", "تطوير مستمر"];

const mainStats = [
  { label: "عميل ناجح", value: "+1200", icon: Users },
  { label: "معدل الرضا", value: "98%", icon: Star },
  { label: "معدل التحسن البدني", value: "+24%", icon: TrendingUp },
  { label: "أسرع تحول مُسجّل", value: "45 يوم", icon: Zap },
];

export default function ResultsPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [selected, setSelected] = useState<(typeof clients)[0] | null>(null);

  const filtered =
    activeCategory === "الكل"
      ? clients
      : clients.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-[120px]" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
          <div className="absolute top-60 left-10 w-48 h-48 bg-accent/5 rounded-full blur-[60px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold mb-6">
            <Star className="w-3 h-3 fill-primary" />
            قصص تحول حقيقية
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            النتائج{" "}
            <span className="text-gradient-hero">تتحدث عنها</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16 font-bold leading-loose">
            أكثر من 1200 لاعب حوّلوا أجسامهم وأدائهم مع B•Stance.
            <br />
            كل قصة هنا مبنية على نظام علمي حقيقي، وليس مجرد تحفيز.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-4">
            {mainStats.map((s) => (
              <div
                key={s.label}
                className="glass-card p-6 rounded-2xl border border-border group hover:border-primary/30 transition-all cursor-default hover:shadow-[0_0_30px_rgba(43,184,202,0.1)]"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-border">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl font-black mb-1 text-gradient-hero">
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground font-bold tracking-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filtered.map((client) => (
              <div
                key={client.id}
                onClick={() => setSelected(client)}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer border border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(43,184,202,0.15)] bg-secondary/20"
              >
                {/* image */}
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />

                {/* tag */}
                <div className="absolute top-3 right-3">
                  <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground text-[9px] font-black px-2 py-1 rounded-full">
                    {client.tag}
                  </span>
                </div>

                {/* info */}
                <div className="absolute bottom-0 right-0 left-0 p-4">
                  <div className="flex items-center gap-1 text-muted-foreground text-[9px] font-bold mb-1">
                    <Clock className="w-2.5 h-2.5" />
                    {client.duration}
                  </div>
                  <h3 className="text-sm font-black text-foreground leading-tight group-hover:text-primary transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-[10px] text-primary font-bold mt-0.5">
                    {client.stats}
                  </p>
                </div>

                {/* hover overlay */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center text-primary scale-50 group-hover:scale-100 transition-all duration-500">
                    <ArrowLeft className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted-foreground">
              لا توجد نتائج لهذه الفئة حتى الآن.
            </div>
          )}
        </div>
      </section>

      {/* ── Trust Section ── */}
      <section className="py-24 border-t border-border/50 bg-secondary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            المنهج اللي بيصنع النتائج
          </h2>
          <p className="text-muted-foreground mb-14 max-w-xl mx-auto font-bold">
            كل تحول حصل بسبب منظومة متكاملة، مش بسبب تمرين واحد أو دايت عشوائي.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-right">
            {[
              {
                icon: Target,
                title: "تقييم دقيق",
                desc: "كل رحلة بتبدأ بتحليل InBody وتقييم حركي شامل عشان نعرف نقطة البداية الحقيقية.",
              },
              {
                icon: TrendingUp,
                title: "خطة متكيفة",
                desc: "البرنامج بيتغير كل أسبوع بناءً على استجابة جسمك، مش برنامج ثابت لكل الناس.",
              },
              {
                icon: Heart,
                title: "متابعة مستمرة",
                desc: "مش بتتركك لوحدك. متابعة يومية وتعديل فوري عشان تضمن إن الرحلة مكملة.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glass-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-black mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-bold leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            خليك النتيجة{" "}
            <span className="text-gradient-hero">الجاية</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed font-bold max-w-xl mx-auto">
            ابدأ التقييم المجاني الآن واحصل على خطتك المخصصة في أقل من 48 ساعة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#registration-form"
              className="px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-xl shadow-primary/30 inline-flex items-center gap-3"
            >
              ابدأ رحلتك الآن
              <ChevronRight className="w-5 h-5 -rotate-180" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 rounded-2xl border border-border bg-secondary/30 font-black hover:bg-secondary/50 transition-all inline-flex items-center gap-3 text-foreground"
            >
              تحدث مع متخصص
            </Link>
          </div>
        </div>
      </section>

      {/* ── Story Modal ── */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir="rtl">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md animate-backdrop-in"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border border-border/50 rounded-3xl shadow-[0_0_60px_rgba(43,184,202,0.2)] bg-secondary/20 flex flex-col md:flex-row animate-modal-in">
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center border border-border hover:bg-destructive/20 hover:text-destructive transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="w-full md:w-2/5 aspect-[3/4] md:aspect-auto overflow-hidden rounded-t-3xl md:rounded-r-3xl md:rounded-tl-none relative shrink-0 bg-background/50">
              <img
                src={selected.img}
                alt={selected.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-black px-3 py-1.5 rounded-full">
                {selected.tag}
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="text-xl font-black text-accent">{selected.stats}</div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold w-fit mb-4">
                <Clock className="w-3 h-3" />
                {selected.duration}
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-1">{selected.name}</h3>
              <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs mb-2">
                {selected.sport} • {selected.category}
              </p>

              <div className="flex -space-x-0.5 mb-6 mt-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed text-base font-medium mb-8 border-r-2 border-primary/40 pr-4">
                {selected.story}
              </p>

              <Link
                href="/#registration-form"
                onClick={() => setSelected(null)}
                className="bg-primary text-primary-foreground font-black py-4 px-6 rounded-xl flex items-center justify-center gap-3 group hover:shadow-[0_0_30px_rgba(43,184,202,0.4)] transition-all mt-auto"
              >
                ابدأ رحلتك زي {selected.name.split(" ")[0]}
                <ChevronRight className="w-5 h-5 -rotate-180 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
