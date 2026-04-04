"use client";
import { useState } from "react";
import { Send, Paperclip, Image, MoreVertical, Phone, Video, Search, Filter, Calendar, Bell, ChevronLeft } from "lucide-react";

const athletes = [
  { id: 1, name: "محمد كريم", lastMsg: "يا دكتور السكوات بكرة كام كيلو؟", time: "2:30 م", unread: 2, online: true, avatar: "م", color: "green" },
  { id: 2, name: "يوسف علي", lastMsg: "تمام، خلصت وجبة الغداء", time: "11:15 ص", unread: 0, online: true, avatar: "ي", color: "blue" },
  { id: 3, name: "أحمد رامي", lastMsg: "ممكن نأجل الجلسة بكرة؟", time: "أمس", unread: 1, online: false, avatar: "أ", color: "yellow" },
  { id: 4, name: "زياد طارق", lastMsg: "في وجع خفيف في الركبة", time: "أمس", unread: 0, online: false, avatar: "ز", color: "blue" },
  { id: 5, name: "سارة حسن", lastMsg: "شكراً جداً على البرنامج!", time: "25 ديس", unread: 0, online: true, avatar: "س", color: "green" },
];

const initialMessages = [
  { id: 1, sender: "me", text: "أهلاً محمد! كيف حالك اليوم؟", time: "9:00 ص" },
  { id: 2, sender: "athlete", text: "الحمد لله بخير يا دكتور، مستعد للتدريب", time: "9:02 ص" },
  { id: 3, sender: "me", text: "ممتاز! ركز اليوم على السكوات – عمق كامل حتى 90 درجة. الوزن 80 كجم.", time: "9:05 ص" },
  { id: 4, sender: "athlete", text: "يا دكتور السكوات بكرة كام كيلو؟", time: "2:30 م" },
];

export default function SpecialistChatPage() {
  const [selected, setSelected] = useState(athletes[0]);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);

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
    <div className="flex flex-col h-[calc(100vh-8.5rem)] rounded-2xl border border-border glass-card overflow-hidden bg-background/20" dir="rtl">
        {/* Upper Header Control */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/20 z-20">
             <div className="flex items-center gap-4">
                <h1 className="text-sm font-black tracking-tight">مركز التواصل مع اللاعبين</h1>
                <div className="hidden md:flex gap-2">
                   <button className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      الكل (142)
                   </button>
                   <button className="flex items-center gap-1.5 px-3 py-1 bg-secondary/40 border border-border text-[10px] font-bold rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/60">
                      غير مقروء (15)
                   </button>
                </div>
             </div>
             <div className="flex items-center gap-2">
                <button className="p-2 rounded-xl bg-secondary/40 border border-border text-muted-foreground hover:text-foreground transition-all">
                   <Filter className="w-4 h-4" />
                </button>
                 <button className="p-2 rounded-xl bg-secondary/40 border border-border text-muted-foreground hover:text-foreground transition-all">
                   <Calendar className="w-4 h-4" />
                </button>
             </div>
        </div>

        <div className="flex flex-1 overflow-hidden relative">
            {/* Sidebar List */}
            <div className="w-80 border-l border-border flex flex-col flex-shrink-0 bg-background/20 z-10">
                <div className="p-4 border-b border-border/50">
                   <div className="relative">
                      <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
                      <input className="w-full bg-secondary/30 border border-border rounded-xl pr-9 pl-3 py-2 text-xs focus:outline-none focus:border-primary/50 placeholder:text-muted-foreground font-medium" placeholder="بحث عن لاعب..." />
                   </div>
                </div>
                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                   {athletes.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => setSelected(a)}
                        className={`w-full flex items-center gap-3.5 p-3.5 text-right rounded-xl transition-all border ${
                          selected.id === a.id ? "bg-primary/5 border-primary/20 shadow-sm" : "hover:bg-secondary/40 border-transparent"
                        }`}
                      >
                         <div className="relative">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-border flex items-center justify-center font-black text-xs text-primary shadow-sm`}>
                               {a.avatar}
                            </div>
                            {a.online && <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />}
                         </div>
                         <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                               <span className="text-xs font-black truncate">{a.name}</span>
                               <span className="text-[10px] text-muted-foreground font-bold">{a.time}</span>
                            </div>
                            <div className={`text-[10px] font-medium truncate ${a.unread > 0 ? 'text-foreground' : 'text-muted-foreground'}`}>{a.lastMsg}</div>
                         </div>
                         {a.unread > 0 && (
                            <span className="w-4.5 h-4.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-black flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/10">
                               {a.unread}
                            </span>
                         )}
                      </button>
                   ))}
                </div>
            </div>

            {/* Main Chat View */}
            <div className="flex-1 flex flex-col min-w-0 bg-background/50 relative">
                 {/* Chat Header */}
                 <div className="flex items-center justify-between p-4 border-b border-border bg-background/40 backdrop-blur-md z-10 shadow-sm">
                    <div className="flex items-center gap-3">
                       <button className="md:hidden p-2 rounded-lg hover:bg-secondary">
                          <ChevronLeft className="w-5 h-5" />
                       </button>
                       <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-black">
                          {selected.avatar}
                       </div>
                       <div>
                          <div className="text-xs font-black">{selected.name}</div>
                          <div className="text-[9px] text-muted-foreground font-bold flex items-center gap-1.5">
                             {selected.online ? (
                               <>
                                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                 متصل حالياً
                               </>
                             ) : "آخر ظهور في 10:30 صباحاً"}
                          </div>
                       </div>
                    </div>
                    <div className="flex items-center gap-1">
                       <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-all">
                          <Phone className="w-4 h-4" />
                       </button>
                        <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-all">
                          <Video className="w-4 h-4" />
                       </button>
                       <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
                          <MoreVertical className="w-4 h-4" />
                       </button>
                    </div>
                 </div>

                 {/* Message Flow */}
                 <div className="flex-1 overflow-y-auto p-6 space-y-5">
                    {messages.map((m) => (
                       <div key={m.id} className={`flex ${m.sender === 'me' ? 'justify-start' : 'justify-end'}`}>
                          <div className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm border ${
                            m.sender === 'me' ? 'bg-primary text-primary-foreground border-primary/10 rounded-br-sm' : 'bg-secondary/40 border-border rounded-bl-sm'
                          }`}>
                             <p className="text-sm font-medium leading-relaxed">{m.text}</p>
                             <div className={`text-[9px] mt-1.5 font-bold ${m.sender === 'me' ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
                                {m.time}
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>

                 {/* Typing Indicator Placeholder */}
                 <div className="px-6 py-2">
                    <div className="flex items-center gap-1.5 opacity-40">
                       <span className="w-1 h-1 rounded-full bg-foreground animate-bounce" style={{ animationDelay: '0ms' }} />
                       <span className="w-1 h-1 rounded-full bg-foreground animate-bounce" style={{ animationDelay: '150ms' }} />
                       <span className="w-1 h-1 rounded-full bg-foreground animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                 </div>

                 {/* Message Input View */}
                 <div className="p-4 border-t border-border bg-background/40 backdrop-blur-md z-10">
                    <div className="flex items-end gap-3 max-w-4xl mx-auto w-full">
                       <div className="flex-1 bg-secondary/30 border border-border rounded-2xl flex items-center px-4 transition-all focus-within:border-primary/40 focus-within:bg-secondary/50">
                          <input
                             className="w-full bg-transparent border-none py-3.5 text-xs focus:outline-none placeholder:text-muted-foreground font-medium"
                             placeholder="اكتب رسالتك للاعب..."
                             value={input}
                             onChange={(e) => setInput(e.target.value)}
                             onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                          />
                          <div className="flex items-center gap-1 mr-2 border-r border-border pr-2">
                             <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary transition-all">
                                <Paperclip className="w-4 h-4" />
                             </button>
                              <button className="p-2 rounded-lg text-muted-foreground hover:bg-secondary transition-all">
                                <Image className="w-4 h-4" />
                             </button>
                          </div>
                       </div>
                       <button
                         onClick={handleSend}
                         disabled={!input.trim()}
                         className="p-3.5 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100"
                       >
                          <Send className="w-4.5 h-4.5 mx-auto" />
                       </button>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  );
}
