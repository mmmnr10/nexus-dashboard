"use client";

import StatCard from "@/components/StatCard";
import MainChart from "@/components/MainChart";
import ActivityFeed from "@/components/ActivityFeed";
import { DollarSign, Users, Percent, Activity, Github } from "lucide-react";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Hero / About Section */}
      <motion.div 
        variants={item} 
        className="glass p-10 rounded-[3rem] relative overflow-hidden group border-white/20 shadow-2xl"
      >
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest border border-accent/30">v1.0.0 Stable</span>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] items-center text-slate-400 font-bold uppercase tracking-widest">Live Demo Active</span>
          </div>

          <h1 className="text-5xl font-heading font-black text-white tracking-tight mb-6">
            Nexus <span className="text-accent underline decoration-accent/30 underline-offset-8 transition-all group-hover:decoration-accent">SaaS Dashboard</span>
          </h1>
          
          <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8">
            Nexus Dashboard är en kraftfull plattform med ett sofistikerat glassmorphism-gränssnitt. 
            Den erbjuder realtidsinsikter med dynamiska grafer för intäktsanalys, systemhälsa och 
            användarkonvertering. Med sju dedikerade vyer — från Analytics till Projekthantering — 
            levererar den en sömlös och högpresterande användarupplevelse. Fullt responsiv och optimerad för prestanda.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            {["React", "Next.js", "Framer Motion", "TailwindCSS", "Lucide React"].map((tech) => (
              <span key={tech} className="px-4 py-1.5 glass rounded-xl text-xs font-bold text-slate-300 border border-white/5 group-hover:border-white/20 transition-all">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center flex-wrap gap-4">
            <a 
              href="https://nexus-dashboard-ecru-chi.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-accent text-[#020617] text-sm font-black shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              Besök Live Demo
            </a>
            <a 
              href="https://github.com/mmmnr10/nexus-dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl glass text-white text-sm font-black hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10"
            >
              Koden på GitHub
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-full pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[120px] rounded-full" />
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <motion.div variants={item}>
          <StatCard 
            label="Total Revenue" 
            value="$128,430" 
            trend="+12.5%" 
            trendUp={true} 
            icon={DollarSign}
            subLabel="USD / Month"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard 
            label="Active Users" 
            value="14,209" 
            trend="+3.2%" 
            trendUp={true} 
            icon={Users}
            subLabel="Users Active"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard 
            label="Conversion" 
            value="4.8%" 
            trend="-2.4%" 
            trendUp={false} 
            icon={Percent}
            subLabel="Last 30 Days"
          />
        </motion.div>
        <motion.div variants={item}>
          <StatCard 
            label="System Health" 
            value="99.9%" 
            trend="Stable" 
            trendUp={true} 
            icon={Activity}
            subLabel="Server Status"
          />
        </motion.div>
      </div>

      {/* Charts & Activity */}
      <div className="flex flex-col xl:flex-row gap-8">
        <motion.div variants={item} className="flex-[2]">
          <MainChart />
        </motion.div>
        <motion.div variants={item} className="flex-1 flex">
          <ActivityFeed />
        </motion.div>
      </div>
    </div>
  );
}
