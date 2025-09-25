import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 font-bold">
              JD
            </div>
            <span className="font-medium">John Doe</span>
          </div>
        </div>

        {/* Nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
