"use client";
import { useState } from "react";
import { Send, Paperclip, Image, MoreVertical, Phone, Video } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "م. محمد الشريف",
    role: "المدرب",
    avatar: "م",
    color: "from-green-500 to-emerald-600",
    lastMsg: "ممتاز! أداء اليوم كان مميز جداً",
    time: "2:30 م",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "أ. سارة حسن",
    role: "أخصائية التغذية",
    avatar: "س",
    color: "from-blue-500 to-indigo-600",
    lastMsg: "لا تنسَ وجبة البروتين بعد التمرين",
    time: "11:15 ص",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "د. أحمد قاسم",
    role: "أخصائي الاستشفاء",
    avatar: "أ",
    color: "from-yellow-500 to-orange-600",
    lastMsg: "جلستك غداً الساعة 4:00 مساءً",
    time: "أمس",
    unread: 1,
    online: false,
  },
];

const initialMessages = [
  { id: 1, sender: "coach", text: "صباح الخير محمد! كيف حالك اليوم؟", time: "9:00 ص" },
  { id: 2, sender: "me", text: "صباح النور أستاذ محمد! الحمد لله بخير، مستعد للتدريب", time: "9:02 ص" },
  { id: 3, sender: "coach", text: "ممتاز! ركز اليوم على السكوات – عمق كامل حتى 90 درجة. الوزن 80 كجم.", time: "9:05 ص" },
  { id: 4, sender: "me", text: "حاضر! هل أرفع الوزن إذا كانت الجولة الأخيرة سهلة؟", time: "9:08 ص" },
  { id: 5, sender: "coach", text: "لأ، حافظ على 80 كجم هذا الأسبوع. هدفنا الجودة وليس الكمية. الأسبوع الجاي نرفع 🎯", time: "9:10 ص" },
  { id: 6, sender: "me", text: "فهمت! انهيت التدريب دلوقتي، كان ممتاز الحمد لله", time: "2:25 م" },
  { id: 7, sender: "coach", text: "ممتاز! أداء اليوم كان مميز جداً 💪 تأكد من تغذية ما بعد التمرين خلال 30 دقيقة", time: "2:30 م" },
];

export default function ChatPage() {
  const [selected, setSelected] = useState(conversations[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      sender: "me",
      text: input,
      time: new Date().toLocaleTimeString("ar-EG", { hour: "numeric", minute: "2-digit", hour12: true }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="flex h-[calc(100vh-8.5rem)] rounded-2xl border border-border glass-card overflow-hidden" dir="rtl">
      {/* Conversations sidebar */}
      <div className="w-80 border-l border-border flex flex-col flex-shrink-0 bg-background/40">
        <div className="p-5 border-b border-border shadow-sm">
          <h2 className="font-black text-sm">المحادثات</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c)}
              className={`w-full flex items-center gap-4 p-4 text-right rounded-xl transition-all ${
                selected.id === c.id ? "bg-primary/10 border border-primary/20 shadow-md translate-x-1" : "hover:bg-secondary/50 border border-transparent"
              }`}
            >
              <div className="relative flex-shrink-0">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-white text-sm font-black`}>
                  {c.avatar}
                </div>
                {c.online && <div className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-sm font-black truncate">{c.name}</span>
                  <span className="text-[10px] text-muted-foreground whitespace-nowrap">{c.time}</span>
                </div>
                <div className="text-xs text-muted-foreground truncate">{c.lastMsg}</div>
              </div>
              {c.unread > 0 && selected.id !== c.id && (
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-black flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                  {c.unread}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat window */}
      <div className="flex-1 flex flex-col min-w-0 bg-background/20 relative">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-background/60 backdrop-blur-md z-10">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${selected.color} flex items-center justify-center text-white text-sm font-black`}>
              {selected.avatar}
            </div>
            <div>
              <div className="font-black text-sm">{selected.name}</div>
              <div className="text-[10px] text-muted-foreground flex items-center gap-1.5 font-medium">
                {selected.online ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    متصل الآن
                  </>
                ) : (
                  "آخر ظهور منذ ساعة"
                )}
                <span className="opacity-40">•</span>
                {selected.role}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground">
              <Phone className="w-4.5 h-4.5" />
            </button>
             <button className="p-2.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground">
              <Video className="w-4.5 h-4.5" />
            </button>
            <button className="p-2.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground">
              <MoreVertical className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-center mb-6">
            <span className="px-3 py-1 rounded-full bg-secondary/40 text-[10px] text-muted-foreground font-bold border border-border">أمس، 22 ديسمبر</span>
          </div>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-start" : "justify-end"}`}>
              <div className={`max-w-[80%] px-5 py-3.5 rounded-2xl text-sm relative shadow-sm ${
                msg.sender === "me"
                  ? "bg-primary text-primary-foreground rounded-br-sm border border-primary/20"
                  : "bg-secondary/70 rounded-bl-sm border border-border"
              }`}>
                <p className="leading-relaxed font-medium">{msg.text}</p>
                <div className={`text-[10px] mt-1.5 flex items-center gap-1 font-bold ${msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {msg.time}
                   {msg.sender === "me" && (
                    <div className="flex -space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/30 border border-primary-foreground/40" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-5 border-t border-border bg-background/60 backdrop-blur-md z-10">
          <div className="flex items-end gap-3 max-w-4xl mx-auto w-full">
            <div className="flex-1 bg-secondary/40 border border-border rounded-2xl flex items-center px-4 py-1 transition-all focus-within:border-primary/50 focus-within:bg-secondary/60">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="w-full bg-transparent border-none py-3.5 text-sm focus:outline-none placeholder:text-muted-foreground font-medium"
                placeholder="اكتب رسالتك للمدرب..."
              />
              <div className="flex items-center gap-1 mr-2 border-r border-border pr-3">
                <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
                  <Paperclip className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
                  <Image className="w-4 h-4" />
                </button>
              </div>
            </div>
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-4 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
            >
              <Send className="w-5 h-5 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
