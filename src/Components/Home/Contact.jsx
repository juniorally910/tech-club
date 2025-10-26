import React, { useState } from "react";
import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const ApiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending your message...");

    try {
      const res = await fetch(`${ApiUrl}/api/contact/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", program: "", message: "" });
      } else {
        toast.error(data.error || "Failed to send message. Try again!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      toast.dismiss(loadingToast);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white border-t-2 border-gray-100 py-16">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-gray-300 to-green-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
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
                <a href="mailto:techbuildsengineer@gmail.com">
                  techbuildsengineer@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-green-600" size={18} />
                <a href="tel:+250786015225">+250 786015 225</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="text-blue-700" size={18} />
                <a href="#" target="_blank" rel="noreferrer">
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

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Program Interest
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a program</option>
                  <option value="Software Development">
                    Software Development
                  </option>
                  <option value="CAD & 3D Modeling">CAD & 3D Modeling</option>
                  <option value="Electronics & IoT">Electronics & IoT</option>
                  <option value="Mechatronics">Mechatronics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
