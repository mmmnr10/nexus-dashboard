"use client";

import { Search, Bell, Settings, LogOut, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 left-20 lg:left-64 h-20 glass border-b border-white/10 flex items-center justify-between px-8 z-40 transition-all duration-300">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-accent transition-colors" />
          <input 
            type="text" 
            placeholder="Search analytics, users or files..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/40 transition-all text-sm"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium text-slate-500 bg-white/5 border border-white/10 rounded">⌘</kbd>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium text-slate-500 bg-white/5 border border-white/10 rounded">K</kbd>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative group p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-[#020617]" />
        </button>

        <button className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
          <Settings className="w-5 h-5" />
        </button>

        <div className="h-8 w-px bg-white/10 mx-2" />

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold group-hover:text-accent transition-colors">Alex Rivera</p>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-blue-400 p-[1px]">
            <div className="w-full h-full rounded-[11px] bg-[#020617] flex items-center justify-center overflow-hidden">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
        </div>
      </div>
    </header>
  );
}
