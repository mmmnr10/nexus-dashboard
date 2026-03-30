"use client";

import { motion } from "framer-motion";
import { Search, Filter, Mail, Phone, MoreHorizontal, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

const customers = [
  { id: 1, name: "Alice Freeman", email: "alice@example.com", status: "Active", phone: "+1 234 567 890", spend: "$12,430", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
  { id: 2, name: "John Doe", email: "john@example.com", status: "Inactive", phone: "+1 987 654 321", spend: "$8,200", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John" },
  { id: 3, name: "Emma Smith", email: "emma@example.com", status: "Active", phone: "+1 555 123 456", spend: "$15,200", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma" },
  { id: 4, name: "Robert Brown", email: "robert@example.com", status: "Pending", phone: "+1 888 999 000", spend: "$5,400", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert" },
  { id: 5, name: "Sophia Wilson", email: "sophia@example.com", status: "Active", phone: "+1 777 666 555", spend: "$9,800", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia" },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function CustomersView() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold text-white tracking-tight">Customers</h1>
          <p className="text-slate-500 font-medium mt-1">Manage and communicate with your client base.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-accent text-[#020617] text-sm font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2">
            <UserPlus className="w-4 h-4" /> Add Customer
          </button>
        </div>
      </motion.div>

      {/* Table Section */}
      <motion.div variants={item} className="glass p-8 rounded-[2.5rem]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search customers..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent/40"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 glass rounded-xl text-slate-400 hover:text-white"><Filter className="w-5 h-5"/></button>
            <button className="px-4 py-2 glass rounded-xl text-sm font-semibold text-slate-400 hover:text-white">Export CSV</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-4 font-heading font-bold text-sm text-slate-500 uppercase tracking-wider">Customer</th>
                <th className="pb-4 font-heading font-bold text-sm text-slate-500 uppercase tracking-wider">Status</th>
                <th className="pb-4 font-heading font-bold text-sm text-slate-500 uppercase tracking-wider">Contact</th>
                <th className="pb-4 font-heading font-bold text-sm text-slate-500 uppercase tracking-wider">Total Spend</th>
                <th className="pb-4 font-heading font-bold text-sm text-slate-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {customers.map((customer) => (
                <tr key={customer.id} className="group hover:bg-white/5 transition-colors">
                  <td className="py-5 flex items-center gap-3">
                    <img src={customer.avatar} className="w-10 h-10 rounded-xl bg-white/5" alt={customer.name} />
                    <div>
                      <p className="font-semibold text-white group-hover:text-accent font-heading">{customer.name}</p>
                      <p className="text-xs text-slate-500">{customer.email}</p>
                    </div>
                  </td>
                  <td className="py-5">
                    <span className={cn(
                      "px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border",
                      customer.status === "Active" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                      customer.status === "Pending" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                      "bg-red-500/10 text-red-400 border-red-500/20"
                    )}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 glass rounded-lg text-slate-400 hover:text-white"><Mail className="w-4 h-4"/></button>
                      <button className="p-1.5 glass rounded-lg text-slate-400 hover:text-white"><Phone className="w-4 h-4"/></button>
                    </div>
                  </td>
                  <td className="py-5 font-bold text-white font-heading">{customer.spend}</td>
                  <td className="py-5 text-right">
                    <button className="p-2 text-slate-500 hover:text-white"><MoreHorizontal className="w-5 h-5"/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
