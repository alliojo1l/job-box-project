"use client";

import { useParams } from "next/navigation";
import { categories } from "@/data/jobs";

export default function ApplyPage() {
  const { slug } = useParams();

  const job = categories.flatMap(c => c.jobs).find(j => j.slug === slug);

  if (!job) return <p className="p-8">Job not found.</p>;

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Apply for {job.title}</h1>

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

        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input 
            type="text" 
            name="name" 
            className="w-full mt-2 p-3 border rounded-lg" 
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input 
            type="email" 
            name="email"
            className="w-full mt-2 p-3 border rounded-lg" 
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Resume (PDF)</label>
          <input 
            type="file" 
            name="resume" 
            accept=".pdf" 
            className="w-full mt-2 p-3 border rounded-lg" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Cover Letter</label>
          <textarea 
            name="cover_letter"
            rows="4" 
            className="w-full mt-2 p-3 border rounded-lg"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
}
