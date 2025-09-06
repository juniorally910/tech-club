import React from 'react'
import { Rocket, Users, Cog, Crown } from "lucide-react";

const Us = () => {
     const values = [
    { icon: <Rocket size={28} className="text-blue-600" />, title: "Innovation" },
    { icon: <Users size={28} className="text-green-500" />, title: "Collaboration" },
    { icon: <Cog size={28} className="text-blue-600" />, title: "Practical Learning" },
    { icon: <Crown size={28} className="text-green-500" />, title: "Leadership" },
  ];
  
  return (
     <section id='about' className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
       
        <h2 className="text-3xl font-bold text-center mb-12">About ETB Club</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">Our Mission</h3>
            <p className="text-gray-600 mb-8 text-center md:text-left">
              To empower the next generation of engineers with practical skills,
              innovative thinking, and real-world experience that bridges the gap
              between academic theory and industry practice.
            </p>

            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">Our Vision</h3>
            <p className="text-gray-600 text-center md:text-left">
              To be the leading platform where engineering students and professionals
              collaborate, learn, and innovate to solve the world's most pressing challenges.
            </p>
          </div>

         
          <div className="grid grid-cols-2 gap-6">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-md transition"
              >
                {item.icon}
                <h4 className="mt-3 font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Us
