import React, { useState } from "react";

const RequestMentor = () => {
  const [form, setForm] = useState({ name: "", email: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-md mx-auto my-10 bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Request a Mentor</h2>
      {submitted ? (
        <div className="text-blue-600 font-semibold">Thank you! We’ll connect you with a mentor soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full border rounded px-3 py-2"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border rounded px-3 py-2"
            type="text"
            name="interest"
            placeholder="Area of Interest (e.g. Web, IoT)"
            value={form.interest}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
          >
            Request Mentor
          </button>
        </form>
      )}
    </section>
  );
};

export default RequestMentor;