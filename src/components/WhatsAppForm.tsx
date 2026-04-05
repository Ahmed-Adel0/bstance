"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "201279266345"; // Egypt country code + number

const sportLabels: Record<string, string> = {
  football: "كرة قدم",
  basketball: "Basketball",
  swimming: "سباحة",
  athletics: "ألعاب قوى",
  gym: "جيم / لياقة",
  other: "أخرى",
};

const goalLabels: Record<string, string> = {
  performance: "تحسين الأداء",
  pro: "احتراف",
  injury: "تقليل إصابات",
  fitness: "تطوير لياقة",
  academy: "متابعة أكاديمية",
};

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sport, setSport] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "🟢 *طلب تقييم مجاني – B•Stance*",
      "",
      `👤 *الاسم:* ${name || "—"}`,
      `📞 *رقم الهاتف:* ${phone || "—"}`,
      `📧 *البريد الإلكتروني:* ${email || "—"}`,
      `🏅 *الرياضة:* ${sportLabels[sport] || "—"}`,
      `🎯 *الهدف:* ${goalLabels[goal] || "—"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm transition-all";

  return (
    <div className="glass-card rounded-3xl p-8 border border-primary/20">
      <h3 className="text-xl font-bold mb-6 text-center">املأ البيانات وابدأ تقييمك</h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-xs text-muted-foreground font-medium mb-1.5">📌 الاسم</label>
          <input
            type="text"
            placeholder="اسمك الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground font-medium mb-1.5">📌 رقم الهاتف</label>
          <input
            type="tel"
            placeholder="01xxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground font-medium mb-1.5">📌 البريد الإلكتروني</label>
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground font-medium mb-1.5">📌 نوع الرياضة</label>
          <select
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            className={`${inputClass} text-foreground`}
          >
            <option value="">اختر رياضتك</option>
            <option value="football">كرة قدم</option>
            <option value="basketball">Basketball</option>
            <option value="swimming">سباحة</option>
            <option value="athletics">ألعاب قوى</option>
            <option value="gym">جيم / لياقة</option>
            <option value="other">أخرى</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-muted-foreground font-medium mb-1.5">📌 هدفك</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className={`${inputClass} text-foreground`}
          >
            <option value="">اختر هدفك</option>
            <option value="performance">تحسين الأداء</option>
            <option value="pro">احتراف</option>
            <option value="injury">تقليل إصابات</option>
            <option value="fitness">تطوير لياقة</option>
            <option value="academy">متابعة أكاديمية</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all green-glow mt-2"
        >
          احجز تقييمك المجاني الآن
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
