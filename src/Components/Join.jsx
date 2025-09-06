import React, { useState } from "react";

const Join = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    motivation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Join Cohort Data:", formData);
    alert("Thank you for joining the cohort!");
    setFormData({ name: "", email: "", program: "", motivation: "" });
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Join a Cohort
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700">Program</label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a program</option>
              <option value="Software Development">Software Development</option>
              <option value="CAD & 3D Modeling">CAD & 3D Modeling</option>
              <option value="Electronics & IoT">Electronics & IoT</option>
              <option value="Mechatronics">Mechatronics</option>
            </select>
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700">Motivation</label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              rows="3"
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Why do you want to join?"
            ></textarea>
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Join Cohort
          </button>
        </form>
      </div>
    </div>
  )
}

export default Join
