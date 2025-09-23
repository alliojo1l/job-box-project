import { categories } from "@/data/jobs";
import Link from "next/link";

export default function JobDetailsPage({ params }) {
  const { slug } = params;

  // Find the job
  const job = categories.flatMap((c) => c.jobs).find((job) => job.slug === slug);

  if (!job) {
    return <p className="p-8 text-red-500">Job not found</p>;
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-500 mb-6">{job.company} • {job.location}</p>

      <p className="text-lg mb-6">{job.longDescription}</p>

      <p className="text-green-600 font-semibold mb-6">
        Salary: {job.salary}
      </p>

      <Link
        href={`/jobs/${job.slug}/apply`}
        className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
      >
        Apply Now
      </Link>
    </main>
  );
}
