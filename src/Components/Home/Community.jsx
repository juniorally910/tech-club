import React from 'react'
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ETB Club transformed my understanding of engineering. The hands-on projects and mentorship helped me land my dream internship at a tech startup.",
    name: "Alex Thompson",
    role: "Computer Engineering Student, Year 3",
  },
  {
    quote:
      "The CAD program was incredible. I went from basic sketches to designing complex assemblies. Now I’m confident using SolidWorks professionally.",
    name: "Maria Santos",
    role: "Mechanical Engineering Graduate",
  },
  {
    quote:
      "As a mentor, I love seeing students grow from beginners to confident engineers. The community here is truly special.",
    name: "David Kim",
    role: "Senior Engineer & Mentor",
  },
];

const stats = [
  { value: "500+", label: "Active Members", color: "text-blue-600" },
  { value: "50+", label: "Completed Projects", color: "text-green-600" },
  { value: "25+", label: "Industry Mentors", color: "text-blue-600" },
  { value: "95%", label: "Job Placement Rate", color: "text-green-600" },
];

const Community = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Join Our Community
        </h2>
        <p className="text-gray-600 mb-12">
          Hear from our members about their experience
        </p>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-left"
            >
              <Quote className="text-blue-600 mb-3" size={24} />
              <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
              <h4 className="font-semibold text-gray-900">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center"
            >
              <span
                className={`text-2xl font-bold ${stat.color}`}
              >
                {stat.value}
              </span>
              <span className="text-gray-600 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community
