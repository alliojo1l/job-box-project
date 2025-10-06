"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { categories } from "@/data/jobs";

export default function JobsPageWrapper() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading jobs...</div>}>
      <JobsPage />
    </Suspense>
  );
}

function JobsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categorySlug = searchParams.get("category");
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setCurrentPage(1);
  }, [categorySlug, searchQuery]);

  // Build jobs list
  let jobs = [];
  if (categorySlug) {
    const category = categories.find((c) => c.slug === categorySlug);
    jobs = category
      ? category.jobs.map((job) => ({ ...job, category: category.name }))
      : [];
  } else {
    jobs = categories.flatMap((c) =>
      c.jobs.map((job) => ({ ...job, category: c.name }))
    );
  }

  // Search filter
  if (searchQuery) {
    jobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchQuery) ||
        job.company?.toLowerCase().includes(searchQuery) ||
        job.shortDescription?.toLowerCase().includes(searchQuery) ||
        job.location?.toLowerCase().includes(searchQuery) ||
        job.category?.toLowerCase().includes(searchQuery)
    );
  }

  // Pagination
  const jobsPerPage = 10;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Category filter handler
  const handleCategoryChange = (slug) => {
    const params = new URLSearchParams(searchParams);
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => handleCategoryChange("")}
          className={`px-4 py-2 rounded-lg border ${
            !categorySlug
              ? "bg-green-500 text-white border-green-600"
              : "bg-white text-gray-700 hover:bg-green-100"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => handleCategoryChange(c.slug)}
            className={`px-4 py-2 rounded-lg border ${
              categorySlug === c.slug
                ? "bg-green-500 text-white border-green-600"
                : "bg-white text-gray-700 hover:bg-green-100"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {jobs.length === 0 ? (
        <p className="text-gray-500">
          No jobs found for "{searchQuery || categorySlug || "all"}"
        </p>
      ) : (
        <>
          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentJobs.map((job) => (
              <div
                key={job.slug}
                className="group block p-6 bg-gradient-to-br from-white to-green-400 border rounded-2xl shadow-sm hover:shadow-lg hover:border-green-400 transition transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-green-600 font-bold text-lg">
                    {job.company?.[0] || "J"}
                  </div>
                  <div>
                    <Link
                      href={`/jobs/${job.slug}`}
                      className="text-xl font-semibold text-green-400 hover:underline hover:text-green-500 transition"
                    >
                      {job.title}
                    </Link>
                    <p className="text-gray-500 text-sm">{job.company}</p>
                  </div>
                </div>

                <p className="text-gray-600 line-clamp-2 mb-4">
                  {job.shortDescription}
                </p>

                <div className="flex flex-wrap gap-3 text-sm mb-4">
                  {job.type && (
                    <span className="px-3 py-1 bg-yellow-100 text-orange-400 rounded-full font-medium">
                      {job.type}
                    </span>
                  )}
                  {job.location && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {job.location}
                    </span>
                  )}
                  {job.salary && (
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      {job.salary}
                    </span>
                  )}
                </div>

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
          <div className="flex justify-center mt-8 gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}
