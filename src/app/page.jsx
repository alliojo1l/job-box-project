import Link from "next/link";
import { categories } from "@/data/jobs";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Job Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.slug} 
            href={`/jobs?category=${category.slug}`}
            className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <p>{category.jobs.length} jobs available</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

  

  