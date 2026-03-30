"use client";

import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: LucideIcon;
  subLabel: string;
}

export default function StatCard({ label, value, trend, trendUp, icon: Icon, subLabel }: StatCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass glass-hover p-6 rounded-3xl relative overflow-hidden"
    >
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div className={cn(
          "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium",
          trendUp ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
        )}>
          {trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {trend}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-sm font-medium text-slate-400">{label}</p>
        <div className="flex items-baseline gap-2 mt-1">
          <h3 className="text-3xl font-heading font-bold tracking-tight text-white">{value}</h3>
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{subLabel}</span>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/5 rounded-full blur-2xl" />
    </motion.div>
  );
}
