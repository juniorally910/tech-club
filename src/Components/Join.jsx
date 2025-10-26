import React, { useState } from "react";
import axios from "axios";

const Join = ({ cohortId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    program: "",
    experience: "",
    startDate: "",
    motivation: "",
    referral: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
    const token = localStorage.getItem("token"); 

    try {
      const res = await axios.post(
        `${apiUrl}/api/cohort/join`,
        { ...formData, cohortId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(res.data.message || "Successfully application sent!");

      // Reset form and message after a delay
      
      setTimeout(() => {
        setMessage("");
        setFormData({
          name: "",
          email: "",
          phone: "",
          education: "",
          program: "",
          experience: "",
          startDate: "",
          motivation: "",
          referral: "",
        });
      }, 2000);
    } catch (err) {
      console.error("Error joining cohort:", err);
      setMessage(err.response?.data?.message || "Application failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Join a Cohort</h2>
        {message && (
          <p
            className={`text-center mb-4 font-semibold ${
              message.toLowerCase().includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/** Map through form fields for cleaner code */}
          {[
            { label: "Name", name: "name", type: "text", required: true },
            { label: "Email", name: "email", type: "email", required: true },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Education", name: "education", type: "text" },
            { label: "Start Date", name: "startDate", type: "date" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-md mb-1 font-semibold text-gray-800">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          {/* Program select */}
          <div>
            <label className="block text-md mb-1 font-semibold text-gray-800">Program</label>
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

          {/* Experience */}
          <div>
            <label className="block text-md mb-1 font-semibold text-gray-800">Experience Level</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Motivation */}
          <div>
            <label className="block text-md mb-1 font-semibold text-gray-800">Motivation</label>
            <textarea
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
              rows={3}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Why do you want to join?"
            />
          </div>

          {/* Referral */}
          <div>
            <label className="block text-md mb-1 font-semibold text-gray-800">How did you hear about us?</label>
            <select
              name="referral"
              value={formData.referral}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Friend/Referral">Friend/Referral</option>
              <option value="Social Media">Social Media</option>
              <option value="Website">Website</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-2 my-8 rounded-md font-semibold text-white ${
              submitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } transition`}
          >
            {submitting ? "Joining..." : "Join Cohort"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
