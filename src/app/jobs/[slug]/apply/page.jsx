"use client";

import { useParams } from "next/navigation";
import Link from "next/link"; // <-- Import Link
import { ArrowLeft } from "lucide-react"; // <-- Import ArrowLeft icon
import { categories } from "@/data/jobs";

export default function ApplyPage() {
  const { slug } = useParams();

  const job = categories.flatMap(c => c.jobs).find(j => j.slug === slug);

  if (!job) return <p className="p-8">Job not found.</p>;

  return (
    <main className="p-8 max-w-2xl mx-auto">
      
      {/* Back Button Added and Corrected */}
      <Link
        // Link back to the specific job details page
        href={`/jobs/${slug}`} 
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to details
      </Link>
      {/* End Back Button */}

      <h1 className="text-2xl font-bold mb-6">Apply for {job.title}</h1>
      
      {/* Connect to FormSubmit */}
      <form 
        action="https://formsubmit.co/5b9071014754c85e45e68b38ebc199a4 " 
        method="POST"
        className="space-y-6 bg-white p-6 rounded-xl shadow"
        encType="multipart/form-data"
      >
        {/* Hidden Field to include the job title in the email subject/body */}
        <input type="hidden" name="Applying for Job" value={job.title} />
        
        {/* Prevent bot spam */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Redirect after submit */}
        <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />

        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input 
            type="text" 
            name="name" 
            className="w-full mt-2 p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500" 
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input 
            type="email" 
            name="email"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500" 
            required 
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Resume (PDF)</label>
          <input 
            type="file" 
            name="resume" 
            accept=".pdf" 
            className="w-full mt-2 p-3 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
            required // Added required since a resume is typically mandatory for a job
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Cover Letter</label>
          <textarea 
            name="cover_letter"
            rows="4" 
            className="w-full mt-2 p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder={`e.g., Dear Hiring Manager, I am writing to express my interest in the ${job.title} position...`}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
}