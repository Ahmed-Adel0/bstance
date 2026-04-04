"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Dumbbell,
  Salad,
  Heart,
  LineChart,
  MessageSquare,
  Settings,
  LogOut,
  Zap,
  Bell,
  Users,
  Building2,
} from "lucide-react";

interface SidebarProps {
  type: "athlete" | "specialist" | "admin";
}

const athleteNav = [
  { label: "لوحة التحكم", href: "/athlete", icon: LayoutDashboard },
  { label: "التدريب", href: "/athlete/training", icon: Dumbbell },
  { label: "التغذية", href: "/athlete/nutrition", icon: Salad },
  { label: "الاستشفاء", href: "/athlete/recovery", icon: Heart },
  { label: "التقدم", href: "/athlete/progress", icon: LineChart },
  { label: "التنبيهات", href: "/athlete/notifications", icon: Bell },
  { label: "المحادثة", href: "/athlete/chat", icon: MessageSquare },
];

const specialistNav = [
  { label: "لوحة التحكم", href: "/specialist", icon: LayoutDashboard },
  { label: "اللاعبين", href: "/specialist/athletes", icon: Users },
  { label: "المحادثة", href: "/specialist/schedule", icon: MessageSquare },
];

const adminNav = [
  { label: "نظرة عامة", href: "/admin", icon: LayoutDashboard },
  { label: "الأكاديميات", href: "/admin/academies", icon: Building2 },
  { label: "الإعدادات", href: "/admin/settings", icon: Settings },
];

export default function PortalSidebar({ type }: SidebarProps) {
  const pathname = usePathname();
  const nav = type === "athlete" ? athleteNav : type === "specialist" ? specialistNav : adminNav;

  return (
    <aside className="w-64 border-l border-border bg-background flex flex-col flex-shrink-0 z-10">
      <div className="h-14 px-6 border-b border-border flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <img src="/imgs/Logo.png" alt="BStance Logo" className="h-8 w-auto object-contain" />
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {nav.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-4.5 h-4.5" />
              {item.label}
              {active && <div className="mr-auto w-1.5 h-1.5 rounded-full bg-primary" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border space-y-1">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
        >
          <Settings className="w-4.5 h-4.5" />
          الإعدادات
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all">
          <LogOut className="w-4.5 h-4.5" />
          تسجيل الخروج
        </button>
      </div>
    </aside>
  );
}
