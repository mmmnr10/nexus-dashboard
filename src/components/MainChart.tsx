"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Jan", revenue: 4000, users: 2400 },
  { name: "Feb", revenue: 3000, users: 1398 },
  { name: "Mar", revenue: 2000, users: 9800 },
  { name: "Apr", revenue: 2780, users: 3908 },
  { name: "May", revenue: 1890, users: 4800 },
  { name: "Jun", revenue: 2390, users: 3800 },
  { name: "Jul", revenue: 3490, users: 4300 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass p-4 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xl">
        <p className="font-heading font-bold text-sm text-slate-300">{label}</p>
        <div className="mt-2 space-y-1">
          <p className="text-xl font-bold text-accent">${payload[0].value.toLocaleString()}</p>
          <p className="text-[10px] uppercase font-bold text-slate-500">Total Revenue</p>
        </div>
      </div>
    );
  }
  return null;
};

export default function MainChart() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 }}
      className="glass p-8 rounded-[2.5rem] mt-8"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-heading font-bold text-white tracking-tight">Revenue Analytics</h3>
          <p className="text-sm text-slate-500 font-medium">Monthly performance across all regions</p>
        </div>
        <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-xl border border-white/10">
          <button className="px-4 py-1.5 rounded-lg text-sm font-semibold bg-accent text-white shadow-lg shadow-accent/20 transition-all">Monthly</button>
          <button className="px-4 py-1.5 rounded-lg text-sm font-semibold text-slate-400 hover:text-white transition-all">Weekly</button>
        </div>
      </div>

      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
              tickFormatter={(value) => `$${value/1000}k`}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(56, 189, 248, 0.2)", strokeWidth: 2 }} />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#38bdf8" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
