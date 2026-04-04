import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    up: boolean;
  };
  color: "green" | "blue" | "yellow";
}

const colorMap = {
  green: "text-primary bg-primary/10 border-primary/20",
  blue: "text-accent bg-accent/10 border-accent/20",
  yellow: "text-foreground bg-foreground/10 border-foreground/20",
};

export default function StatsCard({ title, value, sub, icon: Icon, trend, color }: StatsCardProps) {
  return (
    <div className="glass-card spotlight rounded-xl p-5 border border-border flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground font-medium">{title}</span>
        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${colorMap[color]} z-10`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="z-10">
        <div className="text-2xl font-black">{value}</div>
        <div className="text-[10px] text-muted-foreground mt-0.5">{sub}</div>
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-[10px] font-bold z-10 ${trend.up ? "text-primary" : "text-destructive"}`}>
          {trend.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {trend.value}
        </div>
      )}
    </div>
  );
}
