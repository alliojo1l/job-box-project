// components/JobCard.jsx
import Link from "next/link";

export default function JobCard({ job, categorySlug }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{job.title}</h3>
      <p className="text-gray-600 text-sm">{job.shortDescription}</p>
      <Link 
        href={`/jobs/${categorySlug}/${job.slug}`} 
        className="mt-2 inline-block text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
