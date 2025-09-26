"use client";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/data/jobs";

export default function JobsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categorySlug = searchParams.get("category");
  const pageParam = parseInt(searchParams.get("page")) || 1;

  let jobs = [];
  if (categorySlug) {
    const category = categories.find((c) => c.slug === categorySlug);
    jobs = category ? category.jobs : [];
  } else {
    jobs = categories.flatMap((c) =>
      c.jobs.map((job) => ({ ...job, category: c.name }))
    );
  }

  // Pagination
  const jobsPerPage = 10;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (pageParam - 1) * jobsPerPage;
  const paginatedJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const handlePageChange = (newPage) => {
    router.push(`?page=${newPage}${categorySlug ? `&category=${categorySlug}` : ""}`);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedJobs.map((job) => (
          <div
            key={job.slug}
            className="group block p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:border-green-500 transition transform hover:-translate-y-1"
          >
            {/* Job Title & Company */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-lg">
                {job.company?.[0] || "J"}
              </div>
              <div>
                <h2 className="text-xl font-semibold group-hover:text-green-600 transition">
                  {job.title}
                </h2>
                <p className="text-gray-500 text-sm">{job.company}</p>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-gray-600 line-clamp-2 mb-4">{job.shortDescription}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-3 text-sm mb-4">
              {job.type && (
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-medium">
                  {job.type}
                </span>
              )}
              {job.location && (
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  {job.location}
                </span>
              )}
              {job.salary && (
                <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full">
                  {job.salary}
                </span>
              )}
            </div>

            {/* View Details Button */}
            <Link
              href={`/jobs/${job.slug}`}
              className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => handlePageChange(pageParam - 1)}
            disabled={pageParam === 1}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                pageParam === i + 1
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(pageParam + 1)}
            disabled={pageParam === totalPages}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
