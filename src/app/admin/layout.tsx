"use client";
import PortalSidebar from "@/components/layout/PortalSidebar";
import { Bell, Search, Globe, Shield, Settings } from "lucide-react";

export default function AdminPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background overflow-hidden" dir="rtl">
      <PortalSidebar type="admin" />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between h-14 px-6 border-b border-border bg-background/80 backdrop-blur-sm flex-shrink-0 z-20">
          <div className="flex items-center gap-6">
            <div className="relative max-w-xs">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                className="bg-secondary/50 border border-border rounded-lg pr-10 pl-4 py-2 text-xs w-64 focus:outline-none focus:border-primary transition-all placeholder:text-muted-foreground font-bold"
                placeholder="بحث شامل في النظام..."
              />
            </div>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-secondary/30 rounded-lg border border-border text-[10px] font-black text-muted-foreground">
               <Shield className="w-3.5 h-3.5" />
               وضع المسؤول الرئيسي
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="hidden md:flex gap-3 border-l border-border pl-4">
                <div className="text-left">
                   <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">النظام</div>
                   <div className="text-xs font-black text-green-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      يعمل بكفاءة
                   </div>
                </div>
                 <div className="text-left">
                   <div className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">الإيرادات اليوم</div>
                   <div className="text-xs font-black">+4,250 LE</div>
                </div>
             </div>
            <button className="relative p-2.5 rounded-xl hover:bg-secondary transition-all border border-transparent hover:border-border group">
              <Bell className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all shadow-sm" />
              <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-primary border-2 border-background" />
            </button>
             <button className="p-2.5 rounded-xl hover:bg-secondary transition-all border border-transparent hover:border-border text-muted-foreground">
              <Settings className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-left hidden sm:block">
                <div className="text-xs font-black">Admin Panel</div>
                <div className="text-[9px] text-muted-foreground font-black">Super User</div>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-green-600 flex items-center justify-center text-primary-foreground text-sm font-black shadow-xl shadow-primary/20 border border-primary/20 rotate-3 group-hover:rotate-0 transition-transform">
                A
              </div>
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-background/50 relative">
           <div className="absolute inset-0 bg-[#0a0a0f] opacity-20 pointer-events-none"></div>
           <div className="max-w-7xl mx-auto w-full relative z-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
