export default function ThankYouPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center max-w-lg">
        <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your application has been submitted successfully. We’ll review it and get back to you soon.
        </p>
        <a 
          href="/" 
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
