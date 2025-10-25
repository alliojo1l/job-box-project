import Link from "next/link";
import { categories } from "@/data/jobs"; 

export default function Home() {
  return (
    <main className="p-4 md:p-8 space-y-16">
      {/* HERO SECTION */}
      <section
        className="relative text-center text-white rounded-4xl p-5 shadow bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="p-8 min-h-screen bg-cover bg-center rounded-4xl flex items-center justify-center">
          <div className="bg-white/70 p-8 rounded-xl max-w-3xl mx-auto text-green-700">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              Find your dream job across multiple industries. Apply with just a click!
            </h1>

            <p className="text-lg sm:text-xl font-bold mb-8 text-gray-700">
              Browse categories, explore opportunities, and take the next step
              in your career journey.
            </p>

            {/* Centered and improved button */}
            <div className="flex justify-center">
              <Link
                href="/jobs"
                className="inline-block bg-green-500 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Browse All Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JOB CATEGORIES SECTION  */}
      <section className="bg-gray-100 rounded-2xl p-12 text-center shadow">
        <h2 className="text-3xl font-bold mb-6">Job Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/jobs?category=${category.slug}`}
              className="p-6 bg-gradient-to-br from-white to-green-100 shadow rounded-xl hover:shadow-xl transition text-center text-gray-800 hover:text-green-800"
            >
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p>{category.jobs.length} jobs available</p>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-gray-100 rounded-2xl p-12 text-center shadow">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">1. Browse Jobs</h3>
            <p>Explore categories and find opportunities that match your skills.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">2. Apply Easily</h3>
            <p>Click on a job, fill the application form, and submit instantly.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">3. Get Hired</h3>
            <p>Employers will reach out if you are shortlisted. Start your journey!</p>
          </div>
        </div>
      </section>
    </main>
  );
}
