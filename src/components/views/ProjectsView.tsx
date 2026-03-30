"use client";

import { motion } from "framer-motion";
import { Folder, MoreVertical, Plus, Clock, Users, ChevronRight } from "lucide-react";

const projects = [
  { id: 1, title: "Nexus Dashboard", progress: 75, status: "In Progress", members: 4, deadline: "Apr 15" },
  { id: 2, title: "Mobile App Redesign", progress: 40, status: "Design", members: 2, deadline: "May 5" },
  { id: 3, title: "E-commerce Integration", progress: 100, status: "Completed", members: 6, deadline: "Mar 20" },
  { id: 4, title: "AI Chatbot Prototype", progress: 15, status: "Early Stage", members: 3, deadline: "Jun 1" },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectsView() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold text-white tracking-tight">Projects</h1>
          <p className="text-slate-500 font-medium mt-1">Track and manage your active company initiatives.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-accent text-[#020617] text-sm font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Project
          </button>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div 
            key={project.id}
            variants={item}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-[2.5rem] relative group border border-transparent hover:border-white/20 transition-all shadow-xl hover:shadow-accent/5"
          >
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-accent/10 transition-colors">
                <Folder className="w-6 h-6 text-accent" />
              </div>
              <button className="p-2 text-slate-500 hover:text-white transition-colors"><MoreVertical className="w-5 h-5"/></button>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <div className="flex items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> Due {project.deadline}</span>
                <span className="flex items-center gap-1.5"><Users className="w-3 h-3" /> {project.members} Team Members</span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex justify-between text-sm font-bold font-heading">
                <span className="text-slate-400">Completion</span>
                <span className="text-white">{project.progress}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${project.progress}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="bg-accent h-full rounded-full shadow-lg shadow-accent/20"
                />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                project.status === "Completed" ? "bg-green-500/10 text-green-400" : "bg-white/5 text-slate-400"
              }`}>
                {project.status}
              </span>
              <button className="flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-white group/btn">
                View Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
