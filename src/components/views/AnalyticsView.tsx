"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ArrowUpRight, ArrowDownRight, Globe, Zap, MousePointer2 } from "lucide-react";

const data = [
  { name: "Mon", sessions: 4000 },
  { name: "Tue", sessions: 3000 },
  { name: "Wed", sessions: 2000 },
  { name: "Thu", sessions: 2780 },
  { name: "Fri", sessions: 1890 },
  { name: "Sat", sessions: 2390 },
  { name: "Sun", sessions: 3490 },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AnalyticsView() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold text-white tracking-tight">Analytics</h1>
          <p className="text-slate-500 font-medium mt-1">Deep dive into your traffic and performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2.5 rounded-xl glass text-sm font-semibold outline-none focus:ring-2 focus:ring-accent/20">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 12 Months</option>
          </select>
        </div>
      </motion.div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Active Sessions", value: "2,430", change: "+14.2%", up: true, icon: Globe },
          { label: "Bounce Rate", value: "42.5%", change: "-2.1%", up: true, icon: Zap },
          { label: "Conversion Rate", value: "3.2%", change: "+0.8%", up: true, icon: MousePointer2 },
        ].map((metric, i) => (
          <motion.div 
            key={i}
            variants={item}
            className="glass p-6 rounded-3xl"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-white/5">
                <metric.icon className="w-5 h-5 text-accent" />
              </div>
              <div className={`flex items-center text-xs font-bold ${metric.up ? "text-green-400" : "text-red-400"}`}>
                {metric.up ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {metric.change}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">{metric.label}</p>
              <h3 className="text-2xl font-heading font-bold text-white mt-1">{metric.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Chart Section */}
      <motion.div variants={item} className="glass p-8 rounded-[2.5rem]">
        <h3 className="text-xl font-heading font-bold text-white mb-8">Weekly Traffic Sessions</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: "#64748b", fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: "#64748b", fontSize: 12 }}
                dx={-10}
              />
              <Tooltip 
                cursor={{ fill: "rgba(255,255,255,0.03)" }}
                contentStyle={{ 
                  background: "rgba(15, 23, 42, 0.9)", 
                  border: "1px solid rgba(255,255,255,0.1)", 
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)"
                }}
              />
              <Bar dataKey="sessions" radius={[6, 6, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 5 ? "#38bdf8" : "#1e293b"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
