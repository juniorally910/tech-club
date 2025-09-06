import React from 'react'
import { NavLink } from 'react-router-dom';

const Mentorship = () => {
    const steps = [
    {
      id: 1,
      title: "Match with a Mentor",
      description:
        "Get paired with a professional based on your interests and career goals",
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "Regular Sessions",
      description:
        "Weekly 1-on-1 sessions to discuss projects, career advice, and technical guidance",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Project Reviews",
      description:
        "Get feedback on your work and guidance on industry best practices",
      color: "bg-blue-600",
    },
  ];

  const mentors = [
    {
      name: "Caleb",
      role: "Mechanical Engineering Student, Year 4",
      expertise: "CAD & Product Design",
    },
    {
      name: "Mucyo",
      role: "Mechanical Engineering Student, Year 4",
      expertise: "CAD & Product Design",
    },
    {
      name: "BOB",
      role: "IT Student, Year 4",
      expertise: "Software Development & Systems",
    },
    {
      name: "Junior",
      role: "Energy Engineering Student, Year 4",
      expertise: "Renewable energy and embedded systems",}
  ];
  return (
     <section id='mentorship' className="py-12 px-6 md:px-16">
    
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Mentorship Program</h2>
        <p className="text-gray-600 mt-2">
          Connect with industry professionals and experienced alumni who guide
          your learning journey
        </p>
      </div>

      
      <div className="grid md:grid-cols-2 gap-8">
        
        <div>
          <h3 className="font-semibold text-lg mb-6">How It Works</h3>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start space-x-4">
                <div
                  className={`${step.color} text-white w-7 h-7 flex items-center justify-center rounded-full font-bold`}
                >
                  {step.id}
                </div>
                <div>
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

     
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-6">Featured Mentors</h3>
          <div className="space-y-4">
            {mentors.map((mentor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md p-4 shadow hover:shadow-md transition"
              >
                <h4 className="font-semibold">{mentor.name}</h4>
                <p className="text-gray-600 text-sm">{mentor.role}</p>
                <p className="text-blue-600 text-sm font-medium">
                  {mentor.expertise}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="mt-10 flex justify-center space-x-4">
        <NavLink to="/request-mentor">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 hover:scale-105 transition-all font-semibold">
            Request a Mentor
          </button>
        </NavLink>
        <NavLink to="/become-mentor">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 hover:scale-105 transition-all font-semibold">
            Become a Mentor
          </button>
        </NavLink>
      </div>
    </section>
  )
}

export default Mentorship
