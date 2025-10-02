import { categories } from "@/data/jobs";
import Link from "next/link";

export default async function JobDetailsPage({ params }) {
  const { slug } = await params;

  // Find job inside all categories
  const job = categories
    .flatMap((cat) => cat.jobs)
    .find((job) => job.slug === slug);

  if (!job) {
    return <h1 className="p-6 text-2xl">Job not found</h1>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Back Button */}
      <Link
        href="/jobs"
        className="inline-block mb-4 text-blue-600 hover:underline"
      >
        ← Back to Jobs
      </Link>

      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-500 mt-2">{job.jobSummary}</p>

      {/* Example: show other details if available */}
      {job.location && (
        <p className="mt-2">
          <strong>Location:</strong> {job.location}
        </p>
      )}
      {job.salary && (
        <p className="mt-1">
          <strong>Salary:</strong> {job.salary}
        </p>
      )}

      {/* Apply Button that navigates to apply page */}
      <div className="mt-6">
        <Link
          href={`/jobs/${slug}/apply`}
          className="inline-block bg-green-300 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
