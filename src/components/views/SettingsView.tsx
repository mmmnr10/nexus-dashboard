"use client";

import { motion } from "framer-motion";
import { User, Lock, Bell, Shield, Globe, Monitor, Save, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const settingsSections = [
  { id: "profile", label: "Profile", icon: User },
  { id: "security", label: "Security", icon: Lock },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "privacy", label: "Privacy", icon: Shield },
  { id: "content", label: "Content", icon: Globe },
  { id: "appearance", label: "Appearance", icon: Monitor },
];

export default function SettingsView() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold text-white tracking-tight">Settings</h1>
          <p className="text-slate-500 font-medium mt-1">Manage your account preferences and application configuration.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-accent text-[#020617] text-sm font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Changes
          </button>
        </div>
      </motion.div>

      <div className="flex flex-col xl:flex-row gap-8">
        {/* Navigation Sidebar */}
        <motion.div variants={item} className="xl:w-64 space-y-2">
          {settingsSections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200 group relative",
                activeSection === section.id 
                  ? "bg-white/10 text-accent" 
                  : "text-slate-500 hover:text-white hover:bg-white/5"
              )}
            >
              <section.icon className={cn(
                "w-5 h-5",
                activeSection === section.id ? "text-accent" : "group-hover:text-white"
              )} />
              <span className="font-semibold text-sm font-heading">{section.label}</span>
              {activeSection === section.id && (
                <motion.div
                  layoutId="settingsIndicator"
                  className="absolute left-0 w-1 h-6 bg-accent rounded-r-full"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div variants={item} className="flex-1 glass p-8 rounded-[2.5rem]">
          <div className="max-w-2xl space-y-8">
            <div className="flex items-center gap-6">
              <div className="relative group cursor-pointer">
                <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden p-1">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover rounded-[1.8rem]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">Alex Rivera</h3>
                <p className="text-sm text-slate-500 font-medium">Administrator • Since Jan 2024</p>
                <div className="flex items-center gap-2 mt-3">
                  <button className="px-4 py-1.5 glass rounded-xl text-xs font-bold text-slate-300 hover:text-white transition-all">Change Avatar</button>
                  <button className="px-4 py-1.5 glass rounded-xl text-xs font-bold text-red-400 hover:bg-red-500/10 transition-all">Delete Account</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input type="text" defaultValue="Alex Rivera" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-accent/40" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input type="email" defaultValue="alex.rivera@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-accent/40" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Bio</label>
                <textarea rows={4} defaultValue="Senior UI/UX Designer and Frontend Architect working on the Next-Gen SaaS platforms." className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] py-3 px-4 text-white focus:outline-none focus:border-accent/40 resize-none" />
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-heading font-bold text-white">Public Profile</h4>
                  <p className="text-sm text-slate-500">Making your profile public allows others to see your progress.</p>
                </div>
                <button className="w-12 h-6 bg-accent/20 border border-accent/40 rounded-full relative p-1 group">
                  <div className="w-4 h-4 bg-accent rounded-full absolute right-1 top-1 shadow-lg shadow-accent/40" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
