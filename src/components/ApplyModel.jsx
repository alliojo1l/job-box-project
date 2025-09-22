"use client";

import { useState } from "react";

export default function ApplyModal({ job, isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: "",
    coverLetter: "",
  });

  if (!isOpen) return null; // modal hidden if not open

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Application submitted for ${job.title}`);
    console.log(form);
    onClose(); // close after submit
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-bold mb-4">Apply for {job.title}</h2>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleChange}
            required
            className="w-full border px-4 py-2 rounded-lg"
          />

          <textarea
            name="coverLetter"
            placeholder="Cover Letter (optional)"
            rows="3"
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
