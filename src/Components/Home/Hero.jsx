import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-400 to-green-300 min-h-screen flex items-center justify-center text-white py-20 text-center">
      <div className="w-full px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Empowering Engineers of Tomorrow
        </h1>

        <p className="text-lg md:text-2xl mb-10 text-gray-100">
          Hands-on training, real-world skills, and mentorship for students, <br />
          graduates, and professionals
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <NavLink to="/join">
            <button className="bg-amber-800 hover:bg-amber-950 text-white font-semibold py-3 px-6 rounded-md shadow-md transition w-full  md:w-auto md:mx-auto">
              Join a Cohort
            </button>
          </NavLink>
          <NavLink to="/programs">
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-md shadow-md transition w-full md:w-auto">
              View Programs
            </button>
          </NavLink>
          <NavLink to="/">
          <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-6 rounded-md shadow-md transition w-full md:w-auto">
            Get Involved
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Hero
