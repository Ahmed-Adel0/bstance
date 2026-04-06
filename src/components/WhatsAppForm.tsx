"use client";

import { useState, useRef } from "react";
import { ArrowRight, ClipboardCheck, Upload, FileCheck, X, CheckCircle } from "lucide-react";

const WHATSAPP_NUMBER = "201279266345"; // Egypt country code + number

const sportLabels: Record<string, string> = {
  football: "كرة قدم",
  basketball: "Basketball",
  swimming: "سباحة",
  athletics: "ألعاب قوى",
  gym: "جيم / لياقة",
  other: "أخرى",
};

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sport, setSport] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [trainingDays, setTrainingDays] = useState("");
  const [trainingHours, setTrainingHours] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [inBodyFile, setInBodyFile] = useState<File | null>(null);
  const [isSent, setIsSent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const resetForm = () => {
    setName("");
    setPhone("");
    setSport("");
    setAge("");
    setHeight("");
    setWeight("");
    setTrainingDays("");
    setTrainingHours("");
    setMainGoal("");
    setInBodyFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setIsSent(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setInBodyFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setInBodyFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = [
      "*طلب تقييم مجاني – B•Stance*",
      "",
      `*الاسم:* ${name || "—"}`,
      `*رقم الهاتف:* ${phone || "—"}`,
      `*الرياضة:* ${sportLabels[sport] || "—"}`,
      `*السن:* ${age || "—"}`,
      `*الطول:* ${height ? height + " سم" : "—"}`,
      `*الوزن:* ${weight ? weight + " كجم" : "—"}`,
      `*تحليل InBody:* ${inBodyFile ? "مرفق (سأقوم بإرساله الآن)" : "غير متوفر"}`,
      `*أيام التمرين:* ${trainingDays || "—"}`,
      `*ساعات التمرين:* ${trainingHours || "—"}`,
      "",
      `*الهدف/الاستفسار:*`,
      `${mainGoal || "—"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    
    setIsSent(true);
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-lg bg-background/50 border border-border/60 focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/30 text-[15px] transition-all";

  const labelClass = "block text-sm text-foreground/80 font-medium mb-2";

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 border border-primary/10 relative overflow-hidden transition-all duration-500 min-h-[400px] flex flex-col justify-center">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <ClipboardCheck className="w-32 h-32 text-primary" />
      </div>

      {!isSent ? (
        <>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center relative z-10 text-foreground">ابدأ تقييمك الآن</h3>
          
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label className={labelClass}>الاسم</label>
                <input
                  type="text"
                  required
                  placeholder="الاسم الكامل"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>رقم الهاتف</label>
                <input
                  type="tel"
                  required
                  placeholder="01xxxxxxxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Age, Height, Weight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
              <div>
                <label className={labelClass}>السن</label>
                <input
                  type="number"
                  placeholder="سنة"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>الطول</label>
                <input
                  type="number"
                  placeholder="سم"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>الوزن</label>
                <input
                  type="number"
                  placeholder="كجم"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Sport & Training Days */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label className={labelClass}>نوع الرياضة</label>
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
                <label className={labelClass}>أيام التمرين في الاسبوع</label>
                <select
                  value={trainingDays}
                  onChange={(e) => setTrainingDays(e.target.value)}
                  className={`${inputClass} text-foreground`}
                >
                  <option value="">كم يوم في الأسبوع؟</option>
                  <option value="يوم واحد">يوم واحد</option>
                  <option value="يومين">يومين</option>
                  <option value="3 أيام">3 أيام</option>
                  <option value="4 أيام">4 أيام</option>
                  <option value="5 أيام">5 أيام</option>
                  <option value="6 أيام">6 أيام</option>
                  <option value="يومياً">يومياً</option>
                </select>
              </div>
            </div>

            {/* Training Hours & InBody Upload */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label className={labelClass}>عدد ساعات التمرين</label>
                <input
                  type="text"
                  placeholder="مثال: ساعة ونصف يومياً"
                  value={trainingHours}
                  onChange={(e) => setTrainingHours(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>تحليل InBody (اختياري)</label>
                <div className="relative group h-full">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                    className="hidden"
                  />
                  {!inBodyFile ? (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className={`${inputClass} border-dashed flex items-center justify-center gap-2 text-muted-foreground hover:border-primary/50 hover:text-foreground group-hover:bg-primary/5 transition-all`}
                    >
                      <Upload className="w-4 h-4" />
                      <span>إرفاق ملف</span>
                    </button>
                  ) : (
                    <div className={`${inputClass} flex items-center justify-between bg-primary/5 border-primary/20`}>
                      <div className="flex items-center gap-2 text-primary overflow-hidden">
                        <FileCheck className="w-5 h-5 shrink-0" />
                        <span className="text-sm truncate font-medium">{inBodyFile.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-1.5 hover:bg-primary/10 rounded-full transition-colors text-primary"
                      >
                        <X className="w-4 h-4 text-primary" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Goal */}
            <div>
              <label className={labelClass}>الهدف أو الاستفسار الأساسي</label>
              <textarea
                required
                rows={4}
                placeholder="خسارة وزن، زيادة عضلات، أو تحسين لياقة..."
                value={mainGoal}
                onChange={(e) => setMainGoal(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-[17px] hover:bg-primary/90 transition-all shadow-md shadow-primary/10 mt-6 active:scale-95"
            >
              إرسال وبدء التقييم
              <ArrowRight className="w-5 h-5 mr-1 rtl:rotate-180" />
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-10 animate-in fade-in zoom-in duration-500 relative z-10">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-foreground">تم توجيهك إلى واتساب بنجاح!</h3>
          <p className="text-muted-foreground mb-8 max-w-sm mx-auto leading-relaxed">
            لقد فتحنا لك محادثة الواتساب بشكله آلي. يرجى إرسال الرسالة الجاهرة ولا تنسَ إرفاق ملف الـ InBody في المحادثة إذا كان متوفراً.
          </p>
          <button
            onClick={resetForm}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all active:scale-95 group"
          >
            لديك استفسار آخر؟
            <ArrowRight className="w-4 h-4 mr-1 rtl:rotate-180 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
