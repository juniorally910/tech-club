import { Phone, User2 } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Mentorship = () => {
    const steps = [
    {
      id: 1,
      title: "Match with a Mentor",
      description:
        "Get paired with a professional based on your interests and career goals",
      color: "bg-blue-600 hover:bg-blue-300 hover:text-gray-600 transition-all easy-in-out",
    },
    {
      id: 2,
      title: "Regular Sessions",
      description:
        "Weekly 1-on-1 sessions to discuss projects, career advice, and technical guidance",
      color: "bg-green-500 hover:bg-green-300 hover:text-gray-600 transition-all easy-in-out",
    },
    {
      id: 3,
      title: "Project Reviews",
      description:
        "Get feedback on your work and guidance on industry best practices",
      color: "bg-blue-600 hover:bg-blue-300 hover:text-gray-600 transition-all easy-in-out",
    },
  ];

  const mentors = [
    {
      phone: "+250788123456",
      name: "Caleb",
      role: "Mechanical Engineering Student, Year 4",
      expertise: "CAD & Product Design",
    },
    {
      phone: "+250788123456",
      name: "Mucyo",
      role: "Mechanical Engineering Student, Year 4",
      expertise: "CAD & Product Design",
    },
    {
      phone: "+250788123456",
      name: "BOB",
      role: "IT Student, Year 4",
      expertise: "Software Development & Systems",
    },
    {
      phone: "+250788123456",
      name: "Junior",
      role: "Energy Engineering Student, Year 4",
      expertise: "Renewable energy and embedded systems",}
  ];
  return (
     <section id='mentorship' className="py-12 px-6 md:px-16">
    
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Meet our Team</h2>
        <p className="text-gray-600 mt-2">
          Connect with industry professionals and experienced alumni who guide
          your learning journey
        </p>
      </div>

      
      <div className="space-y-8">
                  <h3 className="font-semibold text-lg mb-6 text-center">Featured Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {mentors.map((mentor, idx) => (
              <div
                key={idx}
                className="bg-white rounded-md p-4 shadow hover:shadow-md hover:scale-105 transition"
              >
                <div className='rounded-full'>
                  <User2  className=" mb-4 border-2 border-gray-600  rounded-full"/>
                </div>
                <h4 className="font-semibold hover:font-black transition-font transition-all ease-in-out">{mentor.name}</h4>
                <p className="text-gray-600 text-sm">{mentor.role}</p>
                <p className="text-blue-600 text-sm font-medium">
                  {mentor.expertise}
                </p>
                <p className="text-sm font-medium mt-6 italic">
                 Tel: {mentor.phone}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Mentorship
