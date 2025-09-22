import Link from "next/link";
import { categories } from "@/data/jobs";

export default function Home() {
  return (
    <main className="p-8 space-y-16">
     
      <section
        className="relative text-center text-white rounded-2xl p-12 shadow bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div> 
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to JBox</h1>
          <p className="text-lg mb-6">
            Find your dream job across multiple industries. Apply with just a click!
          </p>
          <Link
            href="/jobs"
            className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Browse All Jobs
          </Link>
        </div>
      </section>

    
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Job Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/jobs?category=${category.slug}`}
              className="p-6 bg-green-400 shadow rounded-xl hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p>{category.jobs.length} jobs available</p>
            </Link>
          ))}
        </div>
      </section>

      
      <section className="bg-gray-100 rounded-2xl p-12 text-center shadow">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <p>Employers will reach out if you’re shortlisted. Start your journey!</p>
          </div>
        </div>
      </section>
    </main>
  );
}

  

  