"use client";
import { useParams } from "next/navigation";
import { categories } from "@/data/jobs";
import { useState } from "react";

export default function JobDetails() {
  const { slug } = useParams();
  const job = categories.flatMap((c) => c.jobs).find((j) => j.slug === slug);

  const [applied, setApplied] = useState(false);

  if (!job) return <p>Job not found</p>;

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="mt-4">{job.description}</p>

      {!applied ? (
        <button 
          onClick={() => setApplied(true)} 
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-green-600"
        >
          Apply Now
        </button>
      ) : (
        <div className="mt-6 p-4 border rounded bg-blue-100 text-green-800">
           Application submitted! successfully✅
        </div>
      )}
    </main>
  );
}
