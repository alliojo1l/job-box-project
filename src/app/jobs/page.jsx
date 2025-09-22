"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/jobs";

export default function JobsPage() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category");

  let jobs = [];
  if (categorySlug) {
    const category = categories.find((c) => c.slug === categorySlug);
    jobs = category ? category.jobs : [];
  } else {
    // all jobs
    jobs = categories.flatMap((c) => c.jobs.map((job) => ({ ...job, category: c.name })));
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <Link 
            key={job.slug} 
            href={`/jobs/${job.slug}`}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p>{job.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
