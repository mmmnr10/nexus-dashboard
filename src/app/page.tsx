"use client";

import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import DashboardOverview from "@/components/views/DashboardOverview";
import AnalyticsView from "@/components/views/AnalyticsView";
import CustomersView from "@/components/views/CustomersView";
import TransactionsView from "@/components/views/TransactionsView";
import ProjectsView from "@/components/views/ProjectsView";
import TasksView from "@/components/views/TasksView";
import SettingsView from "@/components/views/SettingsView";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderView = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardOverview />;
      case "Analytics":
        return <AnalyticsView />;
      case "Customers":
        return <CustomersView />;
      case "Transactions":
        return <TransactionsView />;
      case "Projects":
        return <ProjectsView />;
      case "Tasks":
        return <TasksView />;
      case "Settings":
        return <SettingsView />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col pl-20 lg:pl-64 transition-all duration-300">
        <TopBar />
        
        <main className="flex-1 p-8 mt-20">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-7xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderView()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
