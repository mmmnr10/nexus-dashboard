"use client";

import { Home, BarChart2, Users, Settings, Bell, Layout, CreditCard, ChevronRight, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: BarChart2, label: "Analytics", active: false },
  { icon: Users, label: "Customers", active: false },
  { icon: CreditCard, label: "Transactions", active: false },
  { icon: Layout, label: "Projects", active: false },
  { icon: Bell, label: "Tasks", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export default function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-20 lg:w-64 glass border-r border-white/10 flex flex-col z-50 transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
          <Layout className="text-white w-6 h-6" />
        </div>
        <span className="hidden lg:block font-heading font-bold text-xl tracking-tight">Nexus</span>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className={cn(
              "w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative",
              activeTab === item.label 
                ? "bg-white/10 text-accent shadow-sm" 
                : "text-slate-400 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-colors",
              activeTab === item.label ? "text-accent" : "group-hover:text-white"
            )} />
            <span className="hidden lg:block font-medium">{item.label}</span>
            
            {activeTab === item.label && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 w-1 h-6 bg-accent rounded-r-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-white/5 space-y-4">
        <a 
          href="https://github.com/mmmnr10/nexus-dashboard" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-xl glass hover:bg-white/5 transition-all group"
        >
          <Code className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          <span className="hidden lg:block text-sm font-medium text-slate-400 group-hover:text-white transition-colors">GitHub Source</span>
        </a>

        <div className="glass rounded-2xl p-4 hidden lg:block">
          <p className="text-xs text-slate-500 font-medium mb-2 uppercase tracking-wider">Pro Plan</p>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Nexus Ultra</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </div>
          <div className="mt-3 w-full bg-white/5 rounded-full h-1.5">
            <div className="bg-accent w-3/4 h-full rounded-full" />
          </div>
        </div>
      </div>
    </aside>
  );
}
