import jobsData from "@/data/jobs"; // adjust path if needed

export default function ApplyPage({ params }) {
  const { slug } = params;
  const job = jobsData.find((job) => job.slug === slug);

  if (!job) {
    return <p className="p-8 text-red-600">Job not found.</p>;
  }

  return (
    <main className="p-8 max-w-4xl mx-auto space-y-10">
      {/* ===== Job Details Section ===== */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-green-700 mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-4">{job.summary}</p>
        
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="mb-4">{job.description}</p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Location:</strong> {job.location}</li>
          <li><strong>Type:</strong> {job.type}</li>
          <li><strong>Salary:</strong> {job.salary}</li>
        </ul>
      </section>

      {/* ===== Application Form Section ===== */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6">Apply for {job.title}</h2>

        <form className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Resume (PDF)</label>
            <input
              type="file"
              accept="application/pdf"
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Cover Letter</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
          >
            Submit Application
          </button>
        </form>
      </section>
    </main>
  );
}
