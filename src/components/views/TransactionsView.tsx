"use client";

import { motion } from "framer-motion";
import { CreditCard, ArrowUpRight, ArrowDownLeft, Calendar, DollarSign, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const transactions = [
  { id: 1, type: "Revenue", amount: "+$1,240.00", status: "Completed", date: "Mar 28, 2024", icon: ArrowUpRight, color: "text-green-400" },
  { id: 2, type: "Refund", amount: "-$420.00", status: "Processing", date: "Mar 27, 2024", icon: ArrowDownLeft, color: "text-amber-400" },
  { id: 3, type: "Payout", amount: "-$12,000.00", status: "Completed", date: "Mar 25, 2024", icon: ArrowDownLeft, color: "text-red-400" },
  { id: 4, type: "Revenue", amount: "+$3,500.00", status: "Completed", date: "Mar 24, 2024", icon: ArrowUpRight, color: "text-green-400" },
  { id: 5, type: "Revenue", amount: "+$940.00", status: "Failed", date: "Mar 22, 2024", icon: ArrowUpRight, color: "text-red-200" },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function TransactionsView() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold text-white tracking-tight">Transactions</h1>
          <p className="text-slate-500 font-medium mt-1">Detailed history of all financial activities.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl glass text-sm font-semibold hover:bg-white/5 transition-all">Export JSON</button>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Available Balance", value: "$45,230.00", icon: WalletIcon },
          { label: "Pending Payouts", value: "$12,430.20", icon: BankIcon },
          { label: "Total Revenue (YTD)", value: "$420,000.00", icon: DollarSign },
        ].map((stat, i) => (
          <motion.div key={i} variants={item} className="glass p-6 rounded-3xl">
            <div className="p-3 rounded-2xl bg-white/5 w-fit">
              <stat.icon className="w-5 h-5 text-accent" />
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold font-heading text-white mt-1">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Transaction List */}
      <motion.div variants={item} className="glass p-8 rounded-[2.5rem]">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-heading font-bold text-white">Latest Transfers</h3>
          <div className="flex items-center gap-3">
            <button className="p-2 glass rounded-xl text-slate-400 hover:text-white"><Filter className="w-5 h-5"/></button>
            <button className="px-4 py-2 glass rounded-xl text-sm font-semibold text-slate-400 hover:text-white">View All</button>
          </div>
        </div>

        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between group p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-accent/10 transition-colors">
                  <tx.icon className={cn("w-5 h-5", tx.color)} />
                </div>
                <div>
                  <p className="font-semibold text-white font-heading">{tx.type}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-2"><Calendar className="w-3 h-3" /> {tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={cn("text-sm font-bold font-heading", tx.color)}>{tx.amount}</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 mt-1">{tx.status}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function WalletIcon({ className }: { className?: string }) {
  return <CreditCard className={className} />;
}

function BankIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M3 21h18M3 10h18M5 10V21M19 10V21M9 10V21M15 10V21M12 3L2 10h20L12 3z" />
    </svg>
  );
}
