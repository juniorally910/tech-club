import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Folder, Layers, Users, Heart, Settings, ArrowLeft } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const active = (path) =>
    location.pathname === path ? "bg-gray-200 font-bold" : "";

  return (
    <div className="w-64 bg-white shadow-md flex flex-col p-4 space-y-4">
      <h1 className="text-xl font-bold mb-6">Club Management</h1>
      <nav className="space-y-2 flex-1">
        <Link
          to="/dashboard"
          className={`flex items-center space-x-3 p-2 rounded-lg ${active(
            "/dashboard"
          )}`}
        >
          <Home size={18} /> <span>Dashboard</span>
        </Link>
        <Link
          to="/dashboard/programs"
          className={`flex items-center space-x-3 p-2 rounded-lg ${active(
            "/dashboard/programs"
          )}`}
        >
          <Folder size={18} /> <span>Programs</span>
        </Link>
        <Link
          to="/dashboard/projects"
          className={`flex items-center space-x-3 p-2 rounded-lg ${active(
            "/dashboard/projects"
          )}`}
        >
          <Layers size={18} /> <span>Projects</span>
        </Link>
        <Link
          to="/dashboard/cohorts"
          className={`flex items-center space-x-3 p-2 rounded-lg ${active(
            "/dashboard/cohorts"
          )}`}
        >
          <Users size={18} /> <span>Cohorts</span>
        </Link>
        <Link
          to="/dashboard/mentorship"
          className={`flex items-center space-x-3 p-2 rounded-lg ${active(
            "/dashboard/mentorship"
          )}`}
        >
          <Heart size={18} /> <span>Mentorship</span>
        </Link>
        <Link
          to="/dashboard/settings"
          className={`flex items-center space-x-3 p-2 rounded-lg ${active(
            "/dashboard/settings"
          )}`}
        >
          <Settings size={18} /> <span>Settings</span>
        </Link>
      </nav>

      {/* 🔙 Back to Home button */}
      <div className="pt-4 border-t">
        <Link
          to="/"
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 text-blue-600 font-semibold"
        >
          <ArrowLeft size={18} /> <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
