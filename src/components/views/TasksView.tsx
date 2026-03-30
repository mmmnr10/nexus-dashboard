"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, MoreHorizontal, Plus, Calendar, Tag, ChevronRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const tasksData = [
  { id: 1, title: "Review design system with the team", priority: "High", completed: false, date: "Today" },
  { id: 2, title: "Update documentation for API v2", priority: "Medium", completed: true, date: "Yesterday" },
  { id: 3, title: "Fix bug in the authentication flow", priority: "High", completed: false, date: "Mar 30" },
  { id: 4, title: "Implement new dashboard views", priority: "Low", completed: false, date: "Apr 2" },
  { id: 5, title: "Meeting with the stakeholders", priority: "Medium", completed: false, date: "Apr 5" },
];

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function TasksView() {
  const [tasks, setTasks] = useState(tasksData);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-heading font-bold text-white tracking-tight">Tasks</h1>
          <p className="text-slate-500 font-medium mt-1">Keep track of your daily responsibilities and deadlines.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-xl bg-accent text-[#020617] text-sm font-bold shadow-lg hover:scale-105 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Task
          </button>
        </div>
      </motion.div>

      {/* Task List Section */}
      <motion.div variants={item} className="glass p-8 rounded-[2.5rem]">
        <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
          <h3 className="text-xl font-heading font-bold text-white">Daily Tasks</h3>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{tasks.filter(t => t.completed).length}/{tasks.length} Completed</span>
        </div>

        <div className="space-y-4">
          {tasks.map((task, i) => (
            <motion.div 
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => toggleTask(task.id)}
              className={cn(
                "flex items-center justify-between group p-5 rounded-[1.5rem] cursor-pointer transition-all border",
                task.completed ? "bg-white/5 border-transparent opacity-60" : "glass border-transparent hover:border-accent/40 hover:bg-white/5"
              )}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "p-2 rounded-xl transition-colors",
                  task.completed ? "text-green-400 bg-green-500/10" : "text-slate-500 group-hover:text-accent group-hover:bg-accent/10"
                )}>
                  {task.completed ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                </div>
                <div>
                  <p className={cn(
                    "font-semibold font-heading text-lg transition-all",
                    task.completed ? "text-slate-500 line-through" : "text-white group-hover:text-accent"
                  )}>
                    {task.title}
                  </p>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {task.date}</span>
                    <span className={cn(
                      "text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border",
                      task.priority === "High" ? "bg-red-500/10 text-red-400 border-red-500/20" :
                      task.priority === "Medium" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                      "bg-blue-500/10 text-blue-400 border-blue-500/20"
                    )}>
                      {task.priority}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 text-slate-500 hover:text-white"><MoreHorizontal className="w-5 h-5"/></button>
                <ChevronRight className="w-5 h-5 text-slate-700 group-hover:text-accent transition-all group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
