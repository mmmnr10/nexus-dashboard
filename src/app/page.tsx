"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import StatCard from "@/components/StatCard";
import MainChart from "@/components/MainChart";
import ActivityFeed from "@/components/ActivityFeed";
import { DollarSign, Users, Percent, Activity } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-20 lg:pl-64 transition-all duration-300">
        <TopBar />
        
        <main className="flex-1 p-8 mt-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-7xl mx-auto space-y-8"
          >
            {/* Header Section */}
            <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-heading font-bold text-white tracking-tight">Overview</h1>
                <p className="text-slate-500 font-medium mt-1">Welcome back, Alex. Here's what's happening today.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-xl glass text-sm font-semibold hover:bg-white/5 transition-all">Download Report</button>
                <button className="px-5 py-2.5 rounded-xl bg-accent text-[#020617] text-sm font-bold shadow-lg shadow-accent/20 hover:scale-105 active:scale-95 transition-all">Add New Project</button>
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
          </motion.div>
        </main>
      </div>
    </div>
  );
}
