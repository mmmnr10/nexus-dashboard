"use client";

import { CheckCircle2, Clock, AlertCircle, ExternalLink, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const activities = [
  { 
    id: 1, 
    user: "Emma Thompson", 
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", 
    action: "Subscription purchase", 
    amount: "+$499.00", 
    status: "Success", 
    date: "2 mins ago" 
  },
  { 
    id: 2, 
    user: "Marc Jenkins", 
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc", 
    action: "Project upgrade", 
    amount: "+$1,200.00", 
    status: "Pending", 
    date: "15 mins ago" 
  },
  { 
    id: 3, 
    user: "Sarah Connor", 
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", 
    action: "Cloud storage add-on", 
    amount: "+$24.00", 
    status: "Success", 
    date: "1 hour ago" 
  },
  { 
    id: 4, 
    user: "John Wick", 
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John", 
    action: "Failed login attempt", 
    amount: null, 
    status: "Failed", 
    date: "3 hours ago" 
  },
  { 
    id: 5, 
    user: "Luna Lovegood", 
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna", 
    action: "API integration", 
    amount: "+$0.00", 
    status: "Success", 
    date: "5 hours ago" 
  }
];

export default function ActivityFeed() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="glass p-8 rounded-[2.5rem] flex-1 min-w-[400px]"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-heading font-bold text-white leading-tight">Recent Activity</h3>
        <button className="p-2 text-slate-400 hover:text-white transition-colors"><MoreVertical className="w-5 h-5"/></button>
      </div>

      <div className="space-y-6">
        {activities.map((item, index) => (
          <motion.div 
            key={item.id} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="flex items-center justify-between group p-3 -mx-3 rounded-2xl hover:bg-white/5 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 overflow-hidden border border-white/10 group-hover:border-accent/40 transition-colors">
                <img src={item.image} alt={item.user} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-semibold text-sm group-hover:text-accent transition-colors">{item.user}</p>
                <p className="text-xs text-slate-500 font-medium">{item.action}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-sm font-bold text-slate-300">{item.amount || ""}</p>
              <div className="flex items-center gap-2 justify-end mt-1">
                <span className="text-[10px] text-slate-500 font-medium">{item.date}</span>
                <Badge status={item.status} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-accent/10 hover:border-accent/20 transition-all flex items-center justify-center gap-2">
        See All Activity <ExternalLink className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

function Badge({ status }: { status: string }) {
  const styles = {
    Success: "bg-green-500/10 text-green-400 border-green-500/20",
    Pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Failed: "bg-red-500/10 text-red-400 border-red-500/20"
  };

  const icons = {
    Success: CheckCircle2,
    Pending: Clock,
    Failed: AlertCircle
  };

  const Icon = icons[status as keyof typeof icons];

  return (
    <div className={cn(
      "flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold border",
      styles[status as keyof typeof styles]
    )}>
      <Icon className="w-2.5 h-2.5" />
      {status}
    </div>
  );
}
