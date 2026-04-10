"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Dumbbell, 
  Zap, 
  Search, 
  Phone, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  Star,
  Trophy,
  GraduationCap
} from "lucide-react";

type LocationType = "HQ" | "GYM" | "ACADEMY" | "CLUB";

const locations = [
  {
    city: "طناح",
    name: "مركز بيستانس الرئيسي (B•Stance HQ)",
    type: "HQ" as LocationType,
    typeName: "مركز استشفاء وتدريب",
    address: "الجمعية الشرعية - طناح",
    services: ["استشفاء رياضي", "حجامة", "تدريب شخصي", "قياسات InBody"],
    hours: "1ص – 5م | 8م : 1ص",
    isHQ: true
  },
  {
    city: "المنصورة",
    name: "جيم شريك - المنصورة",
    type: "GYM" as LocationType,
    typeName: "جيم شريك",
    address: "حي الجامعة، المنصورة",
    services: ["تدريب مع سفراء بيستانس", "تقييم أداء"],
    hours: "24 ساعة",
    isHQ: false
  },
  {
    city: "المنصورة",
    name: "أكاديمية إيفنت (Event Academy)",
    type: "ACADEMY" as LocationType,
    typeName: "أكاديمية رياضية",
    address: "المنصورة - نادي جزيرة الورد",
    services: ["قياس أداء السباحين", "برامج تغذية رياضية"],
    hours: "8ص - 8م",
    isHQ: false
  },
  {
    city: "الزقازيق",
    name: "نادي الشرقية الرياضي",
    type: "CLUB" as LocationType,
    typeName: "نادي رياضي",
    address: "الزقازيق",
    services: ["وحدة استشفاء متنقلة", "تقييمات دورية"],
    hours: "6ص - 10م",
    isHQ: false
  },
  {
    city: "طنطا",
    name: "Partner Gym - طنطا",
    type: "GYM" as LocationType,
    typeName: "جيم شريك",
    address: "شارع البحر، طنطا",
    services: ["تدريب مع سفراء بيستانس"],
    hours: "8ص - 11م",
    isHQ: false
  },
  {
    city: "المحلة الكبرى",
    name: "أكاديمية الفرسان",
    type: "ACADEMY" as LocationType,
    typeName: "أكاديمية رياضية",
    address: "المحلة الكبرى",
    services: ["تدريب رياضي", "قياسات دائرية"],
    hours: "7ص - 12م",
    isHQ: false
  }
];

export default function LocationsPage() {
  const [activeTab, setActiveTab] = useState<"ALL" | LocationType>("ALL");

  const filteredLocations = activeTab === "ALL" 
    ? locations 
    : locations.filter(loc => loc.type === activeTab);

  const categories = [
    { id: "ALL", label: "الكل", icon: Zap },
    { id: "HQ", label: "مراكزنا", icon: Star },
    { id: "GYM", label: "جيم شريك", icon: Dumbbell },
    { id: "ACADEMY", label: "أكاديميات", icon: GraduationCap },
    { id: "CLUB", label: "أندية", icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-right">
            <h1 className="text-4xl md:text-6xl font-black mb-6">مراكزنا <span className="text-gradient-hero">وشركاؤنا</span></h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              توسعنا لخدمتك أينما كنت. اكتشف أماكن تواجدنا الفعلية، الجيمات الشريكة، والأكاديميات التي نطبق فيها نظامنا الرياضي.
            </p>
        </div>
      </section>

      {/* Categories & Search */}
      <section className="py-12 bg-secondary/10 sticky top-16 z-30 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-2 p-1 bg-background/50 border border-border rounded-2xl overflow-x-auto no-scrollbar">
                 {categories.map((cat) => (
                   <button 
                     key={cat.id} 
                     onClick={() => setActiveTab(cat.id as any)}
                     className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${activeTab === cat.id ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' : 'text-muted-foreground hover:bg-secondary'}`}
                   >
                     <cat.icon className="w-3.5 h-3.5" />
                     {cat.label}
                   </button>
                 ))}
              </div>
              <div className="relative w-full md:w-72">
                 <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                 <input 
                   type="text" 
                   placeholder="بحث في المدن أو المراكز..."
                   className="w-full bg-background border border-border py-2.5 pr-10 pl-4 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc) => (
              <div 
                key={loc.name} 
                className={`group glass-card rounded-3xl p-6 border transition-all duration-300 hover:border-primary/50 relative overflow-hidden flex flex-col ${loc.isHQ ? 'border-primary/40 bg-primary/5 ring-1 ring-primary/20' : 'border-border'}`}
              >
                {loc.isHQ && (
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                )}
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${loc.isHQ ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                      {loc.typeName}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-bold">
                      <MapPin className="w-3.5 h-3.5" />
                      {loc.city}
                    </div>
                  </div>

                  <h3 className="text-xl font-black mb-4 group-hover:text-primary transition-colors">{loc.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {loc.services.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-background border border-border text-[9px] font-bold text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-border/50">
                    <div className="flex items-start gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {loc.address}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {loc.hours}
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex gap-2">
                   <a 
                     href={`https://wa.me/201279266345?text=أريد الاستفسار عن ${loc.name}`}
                     className="flex-1 text-center py-3 bg-primary text-primary-foreground font-black rounded-xl text-xs hover:shadow-lg transition-all"
                   >
                     حجز موعد
                   </a>
                   <button className="px-4 py-3 rounded-xl bg-secondary border border-border hover:bg-secondary/70 transition-all">
                      <ChevronRight className="w-4 h-4 -rotate-180" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-24 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              توسع معانا
           </div>
           <h2 className="text-3xl md:text-5xl font-black mb-6">هل تملك منشأة رياضية؟</h2>
           <p className="text-muted-foreground text-lg mb-10">
              سواء كنت جيم، أكاديمية، أو نادي رياضي؛ يمكنك الانضمام لمنظومة بيستانس وتقديم خدماتنا لعملائك بمزايا حصرية.
           </p>
           <Link href="/contact" className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-xl shadow-primary/30">
              تواصل للشراكة
           </Link>
        </div>
      </section>
    </div>
  );
}
