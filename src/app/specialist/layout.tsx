import PortalSidebar from "@/components/layout/PortalSidebar";
import { Bell, Search, Globe } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function SpecialistPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Test Bypass: Mocks user if not logged in
  const isMocked = !user;
  
  let profile = null;
  if (!isMocked) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();
    profile = data;

    if (!profile || (profile.role !== 'coach' && profile.role !== 'specialist' && profile.role !== 'admin')) {
      redirect('/athlete');
    }
  } else {
    // Simulated profile for unauthenticated testing
    profile = { full_name: "د. محمد الشريف", role: "coach" };
  }

  const initial = profile?.full_name ? profile.full_name.charAt(0) : 'م';

  return (
    <div className="flex h-screen bg-background overflow-hidden" dir="rtl">
      <PortalSidebar type="specialist" />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between h-14 px-6 border-b border-border bg-background/80 backdrop-blur-sm flex-shrink-0 z-20">
          <div className="flex items-center gap-6">
            <div className="relative max-w-xs">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
              <input
                className="bg-secondary/50 border border-border rounded-lg pr-9 pl-3 py-1.5 text-xs w-56 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground font-medium"
                placeholder="بحث عن لاعب أو فريق..."
              />
            </div>
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-secondary/30 rounded-lg border border-border text-[10px] font-bold text-muted-foreground">
               <Globe className="w-3 h-3" />
               وضع العرض: مباشر
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="hidden md:flex gap-4 border-l border-border pl-4">
                <div className="text-left">
                   <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">الحالة</div>
                   <div className="text-xs font-black text-green-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      متاح حالياً
                   </div>
                </div>
                <div className="text-left">
                   <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">المهام</div>
                   <div className="text-xs font-black">جاهز للعمل</div>
                </div>
             </div>
            <button className="relative p-2.5 rounded-xl hover:bg-secondary transition-colors border border-transparent hover:border-border group">
              <Bell className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-orange-500 border-2 border-background" />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-left hidden sm:block">
                <div className="text-xs font-black">{profile.full_name || 'مدرب B•Stance'}</div>
                <div className="text-[10px] text-muted-foreground font-bold capitalize">{profile.role === 'coach' ? 'مدرب أداء' : profile.role}</div>
              </div>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-sm font-black shadow-lg shadow-green-500/10 border border-green-400/20 uppercase">
                {initial}
              </div>
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6 bg-background/50 relative">
           {/* Grid background effect */}
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none"></div>
           {children}
        </main>
      </div>
    </div>
  );
}
