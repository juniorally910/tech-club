import React from 'react'
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id='contact' className="bg-white border-t-2 border-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-gray-600">
            Ready to start your engineering journey with us?
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Mail className="text-blue-600" size={18} />
                <a href="mailto:info@etbclub.org">info@etbclub.org</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-green-600" size={18} />
                <a href="tel:+15551234567">+250 (7xx) xxx xxx</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="text-blue-700" size={18} />
                <a
                  href="https://linkedin.com/company/etb-club"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/company/etb-club
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-blue-600 rounded-full text-white hover:opacity-80"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-green-600 rounded-full text-white hover:opacity-80"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-3 bg-blue-400 rounded-full text-white hover:opacity-80"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Program Interest
                </label>
                <select className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500">
                  <option>Select a program</option>
                  <option>CAD Training</option>
                  <option>Robotics</option>
                  <option>Internship Prep</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
