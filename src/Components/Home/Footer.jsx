import React from 'react'
import { Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <>
    <div className='w-full h-6 bg-blue-100 animate-pulse'></div>
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-bold text-white">ETB Club</h3>
          <p className="mt-3 text-sm">
            Empowering the next generation of engineers through hands-on learning
            and mentorship.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        
        <div>
          <h4 className="font-semibold text-white mb-3">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Software Development</a></li>
            <li><a href="#" className="hover:text-white">CAD & 3D Modeling</a></li>
            <li><a href="#" className="hover:text-white">Electronics & IoT</a></li>
            <li><a href="#" className="hover:text-white">Mechatronics</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold text-white mb-3">Community</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Join a Cohort</a></li>
            <li><a href="#" className="hover:text-white">Mentorship</a></li>
            <li><a href="#" className="hover:text-white">Events</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Newsletter</h4>
          <p className="text-sm mb-3">
            Stay updated with our latest programs and events
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-md"
            >
              →
            </button>
          </form>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 Engineering Training & Bridge Club. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer
