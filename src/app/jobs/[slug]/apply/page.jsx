export default function ApplyPage({ params }) {
  const { slug } = params;

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Apply for {slug}</h1>

      <form className="space-y-4 bg-white p-6 rounded-lg shadow">
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
    </main>
  );
}
