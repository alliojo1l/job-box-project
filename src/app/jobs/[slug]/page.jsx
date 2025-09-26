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

      <form className="space-y-6 bg-white p-6 rounded-xl shadow">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Resume (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
          <textarea
            rows="4"
            placeholder="Write your cover letter..."
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Submit Application
        </button>
      </form>
    </main>
  );
}
