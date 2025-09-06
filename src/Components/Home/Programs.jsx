import React, { useState } from "react";
import { Code, Box, Cpu, Cog } from "lucide-react";

const Programs = () => {
  const [activeTab, setActiveTab] = useState("software");

  const tabs = [
    { id: "software", label: "Software Development", icon: <Code className="w-5 h-5 mr-2" /> },
    { id: "cad", label: "CAD & 3D Modeling", icon: <Box className="w-5 h-5 mr-2" /> },
    { id: "electronics", label: "Electronics & IoT", icon: <Cpu className="w-5 h-5 mr-2" /> },
    { id: "mechatronics", label: "Mechatronics", icon: <Cog className="w-5 h-5 mr-2" /> },
  ];

  return (
    <section id='programs' className="py-12 px-2 sm:px-4 md:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Programs</h2>
        <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-2xl">
          2-month intensive cohorts designed to give you hands-on experience with
          industry-standard tools and technologies
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-md font-medium transition text-sm sm:text-base ${
              activeTab === tab.id
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "software" && (
        <div className="bg-gray-100 rounded-lg p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Software Development</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Master modern web development with hands-on projects. Build full-stack
              applications, create responsive designs, and develop professional
              portfolios.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>✅ Front-end: React, HTML5, CSS3, JavaScript</li>
              <li>✅ Back-end: Node.js, Express, APIs</li>
              <li>✅ Database: MongoDB, PostgreSQL</li>
              <li>✅ Portfolio Development</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              <span className="font-medium">Duration:</span> 2 months &nbsp;|&nbsp;
              <span className="font-medium">Projects:</span> 3-4 real-world applications
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 mt-4 lg:mt-0 w-full lg:w-1/3">
            <div className="flex items-center mb-3 text-blue-600">
              <Code className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-base sm:text-lg">Example Outcomes</h4>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
              <li>E-commerce Platform</li>
              <li>Task Management App</li>
              <li>Professional Portfolio Site</li>
              <li>Real-time Chat Application</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "cad" && (
        <div className="bg-gray-100 rounded-lg p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">CAD & 3D Modeling</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Dive into computer-aided design and 3D modeling. Learn to create precise digital prototypes for engineering, architecture, and product design.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>✅ Tools: SolidWorks, AutoCAD </li>
              <li>✅ 2D Drafting & 3D Modeling</li>
              <li>✅ Rendering & Visualization</li>
              <li>✅ Design for Manufacturing</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              <span className="font-medium">Duration:</span> 2 months &nbsp;|&nbsp;
              <span className="font-medium">Projects:</span> 2-3 detailed models
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 mt-4 lg:mt-0 w-full lg:w-1/3">
            <div className="flex items-center mb-3 text-blue-600">
              <Box className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-base sm:text-lg">Example Outcomes</h4>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Mechanical Part Assemblies</li>
              <li>3D Printed Prototypes</li>
              <li>Product Renderings</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "electronics" && (
        <div className="bg-gray-100 rounded-lg p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Electronics & IoT</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Explore the world of electronics and the Internet of Things. Build circuits, program microcontrollers, and connect devices to the cloud.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>✅ Microcontrollers: Arduino, ESP32</li>
              <li>✅ Sensors & Actuators</li>
              <li>✅ Circuit Design & PCB Prototyping</li>
              <li>✅ IoT Cloud Integration</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              <span className="font-medium">Duration:</span> 2 months &nbsp;|&nbsp;
              <span className="font-medium">Projects:</span> 2-3 connected devices
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 mt-4 lg:mt-0 w-full lg:w-1/3">
            <div className="flex items-center mb-3 text-blue-600">
              <Cpu className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-base sm:text-lg">Example Outcomes</h4>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Home Automation System</li>
              <li>Weather Monitoring Station</li>
              <li>Wearable Health Tracker</li>
              <li>Remote Sensor Network</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "mechatronics" && (
        <div className="bg-gray-100 rounded-lg p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Mechatronics</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Integrate mechanics, electronics, and software to create smart machines. Learn robotics, automation, and control systems through hands-on builds.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
              <li>✅ Robotics Fundamentals</li>
              <li>✅ Sensors & Actuators Integration</li>
              <li>✅ Motion Control & Automation</li>
              <li>✅ Embedded Programming</li>
            </ul>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              <span className="font-medium">Duration:</span> 2 months &nbsp;|&nbsp;
              <span className="font-medium">Projects:</span> 2-3 robotic systems
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 sm:p-6 mt-4 lg:mt-0 w-full lg:w-1/3">
            <div className="flex items-center mb-3 text-blue-600">
              <Cog className="w-6 h-6 mr-2" />
              <h4 className="font-semibold text-base sm:text-lg">Example Outcomes</h4>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
              <li>Line-following Robot</li>
              <li>Automated Conveyor System</li>
              <li>Robotic Arm</li>
              <li>Smart Vehicle Prototype</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
