import React from 'react'
import { Trash2, Drone, Home, Code2, Cog, Users } from "lucide-react";

const Projects = () => {
    const projects = [
    {
      title: "Smart Waste Management System",
      category: "IoT",
      description: "IoT-enabled waste bins with real-time monitoring and route optimization",
      icon: <Trash2 className="w-6 h-6" />,
      tags: ["Arduino", "IoT", "Mobile App"],
    },
    {
      title: "Autonomous Delivery Drone",
      category: "Mechatronics",
      description: "GPS-guided drone with obstacle avoidance and package delivery system",
      icon: <Drone className="w-6 h-6" />,
      tags: ["Raspberry Pi", "Computer Vision", "Flight Control"],
    },
    {
      title: "Smart Home Control Hub",
      category: "IoT",
      description: "Centralized home automation system with voice control and mobile app",
      icon: <Home className="w-6 h-6" />,
      tags: ["React", "Node.js", "Arduino", "Voice AI"],
    },
    {
      title: "Engineering Portfolio Platform",
      category: "Software",
      description: "Professional portfolio website with project showcase and resume builder",
      icon: <Code2 className="w-6 h-6" />,
      tags: ["React", "Node.js", "Database", "Responsive Design"],
    },
    {
      title: "Mechanical Assembly Optimizer",
      category: "CAD",
      description: "CAD tool for optimizing mechanical assemblies and reducing material waste",
      icon: <Cog className="w-6 h-6" />,
      tags: ["SolidWorks API", "Python", "Optimization Algorithms"],
    },
    {
      title: "Real-time Collaboration Tool",
      category: "Software",
      description: "Engineering team collaboration platform with file sharing and version control",
      icon: <Users className="w-6 h-6" />,
      tags: ["React", "WebSocket", "Cloud Storage", "Git Integration"],
    },
  ];
  return (
     <section id='projects' className="py-12 px-6 md:px-16">
      
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Projects & Prototypes</h2>
        <p className="text-gray-600 mt-2">
          Real projects built by our community members
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            
            <div className="flex items-center space-x-3 mb-3 text-blue-600">
              {project.icon}
              <h3 className="font-semibold text-lg">{project.title}</h3>
            </div>
            
            <p className="text-md font-bold text-green-600 mb-2">
              {project.category}
            </p>
           
            <p className="text-gray-600 mb-4">{project.description}</p>

            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm bg-gray-200 hover:text-blue-600 hover:bg-gray-300 rounded-full text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
