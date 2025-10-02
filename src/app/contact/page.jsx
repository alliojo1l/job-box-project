"use client";

import { useState } from "react";


export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! successfully ✅");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        Have questions or feedback? Fill out the form below:
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          rows="4"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-green-500"
        >
          Send Message
        </button>
      </form>
        {/* Connect to FormSubmit */}
      <form 
        action="https://formsubmit.co/5b9071014754c85e45e68b38ebc199a4" 
        method="POST"
        className="space-y-6 bg-white p-6 rounded-xl shadow"
        encType="multipart/form-data"
      >
        {/* Prevent bot spam */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Redirect after submit */}
        <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
</form>
    </div>
  );
}
