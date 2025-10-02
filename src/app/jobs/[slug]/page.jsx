import { categories } from "@/data/jobs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // icon

// NOTE: Assumes your categories data file is located at "@/data/jobs" and contains the enhanced structure.

export default async function JobDetailsPage({ params }) {
  // Destructure the slug from the params object passed by Next.js
  const { slug } = await params;

  // Find the job across all categories by checking the 'slug'
  const job = categories
    .flatMap((cat) => cat.jobs)
    .find((job) => job.slug === slug);

  // Handle case where the job slug doesn't match any job
  if (!job) {
    return <h1 className="p-6 text-2xl">Job not found</h1>;
  }

  // --- JSX Rendering the detailed job information ---
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Back Button */}
      <Link
        href="/jobs"
        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Jobs
      </Link>

      <h1 className="text-4xl font-extrabold text-gray-900">{job.jobTitle}</h1>
      
      {/* Quick Info Section (Styled for better presentation) */}
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4 border-b border-gray-200 text-sm sm:text-base">
        <p>
          <strong className="font-semibold text-gray-600">Type:</strong>{' '}
          <span className="text-blue-600 font-medium">{job.type}</span>
        </p>
        <p>
          <strong className="font-semibold text-gray-600">Salary:</strong>{' '}
          <span className="font-medium">{job.salary}</span>
        </p>
        <p>
          <strong className="font-semibold text-gray-600">Location:</strong>{' '}
          <span className="font-medium">{job.location}</span>
        </p>
        <p>
          <strong className="font-semibold text-gray-600"></strong>
          <span className="font-medium">{job.id}</span>
        </p>
      </div>

      {/* Job Summary */}
      <h2 className="text-2xl font-bold mt-8 text-gray-800">Job Summary</h2>
      <p className="mt-2 text-lg text-gray-700 italic">
        {job.jobSummary}
      </p>

      {/* Job Description */}
      <h2 className="text-2xl font-bold mt-6 text-gray-800">Full Description</h2>
      <p className="mt-2 text-gray-700 leading-relaxed">
        {job.jobDescription}
      </p>

      {/* Job Requirements - This is the key addition! */}
      {job.jobRequirements && job.jobRequirements.length > 0 && (
        <>
          <h2 className="text-2xl font-bold mt-6 text-gray-800">Key Requirements</h2>
          <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 pl-4">
            {/* Map through the array of requirements and render each as a list item */}
            {job.jobRequirements.map((req, index) => (
              <li key={index} className="text-base">
                {req}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Apply Button - Kept your original application link structure */}
      <div className="mt-10 pt-4 border-t border-gray-200">
        <Link
          href={`/jobs/${slug}/apply`}
          className="inline-block  text-center bg-green-300 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-green-600 transition shadow-lg"
        >
          Apply Now for {job.jobTitle}
        </Link>
      </div>
    </div>
  );
}