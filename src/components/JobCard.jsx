import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      {/* Job Title as Clickable Link */}
      <Link 
        href={`/jobs/${job.slug}`} 
        className="block text-lg font-semibold text-green-500 hover:underline hover:text-green-400 transition"
      >
        {job.title}
      </Link>

      {/* Short Description */}
      <p className="text-gray-600 text-sm mt-2">{job.shortDescription}</p>

      {/* View Details Button */}
      <Link 
        href={`/jobs/${job.slug}`} 
        className="mt-3 inline-block text-white bg-green-500 px-3 py-2 rounded-md hover:bg-green-600 transition"
      >
        View Details
      </Link>
    </div>
  );
}
