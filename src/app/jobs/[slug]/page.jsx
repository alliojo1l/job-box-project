import { categories } from "@/data/jobs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // icon

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
      {/* Back Button with icon */}
      <Link
        href="/jobs"
        className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Jobs
      </Link>

      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-500 mt-2">{job.jobSummary}</p>

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

      {/* Apply Button */}
      <div className="mt-6">
        <Link
          href={`/jobs/${slug}/apply`}
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
