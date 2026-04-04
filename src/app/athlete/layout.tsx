import PortalSidebar from "@/components/layout/PortalSidebar";
import { Bell, Search } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function AthletePortalLayout({
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
  } else {
    // Simulated profile for unauthenticated testing
    profile = { full_name: "أحمد المتدرب", role: "athlete" };
  }

  // Split name for initial
  const initial = profile?.full_name ? profile.full_name.charAt(0) : 'أ';

  return (
    <div className="flex h-screen bg-background overflow-hidden" dir="rtl">
      <PortalSidebar type="athlete" />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between h-14 px-6 border-b border-border bg-background/80 backdrop-blur-sm flex-shrink-0">
          <div className="relative max-w-xs">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              className="bg-secondary/50 border border-border rounded-lg pr-9 pl-3 py-1.5 text-sm w-56 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
              placeholder="بحث..."
            />
          </div>
          <div className="flex items-center gap-3">
            <Link href="/athlete/notifications" className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold uppercase">
                {initial}
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-medium">{profile.full_name || 'لاعب B•Stance'}</div>
                <div className="text-xs text-muted-foreground capitalize">لاعب {profile.role || 'Pro'}</div>
              </div>
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}

import Link from "next/link";
