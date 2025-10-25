export default function AboutPage() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto p-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">About JBox</h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Connecting job seekers with opportunities. Whether you are just
            starting out or advancing your career, JBox makes job hunting easier
            and faster.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-green-50 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-7">
              To empower job seekers by providing easy access to opportunities
              while helping employers find the right talent efficiently.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-700 leading-7">
              To become the leading job platform that bridges the gap between
              skills and opportunities, creating a world where everyone can find
              meaningful work.
            </p>
          </div>
        </section>

        {/* Core Features */}
        <section>
          <h2 className="text-3xl text-white font-bold text-center mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Easy Job Search</h3>
              <p className="text-gray-600">
                Browse jobs by category and apply with just a few clicks.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">For All Levels</h3>
              <p className="text-gray-600">
                From fresh graduates to experienced professionals, JBox is for
                everyone.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Free & Accessible</h3>
              <p className="text-gray-600">
                100% free for job seekers. Start applying today without
                barriers.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center  text-white p-12 rounded-2xl shadow">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Next Job?
          </h2>
          <p className="mb-6">
            Explore thousands of opportunities and take the next step in your
            career journey with JBox.
          </p>
          <a
            href="/jobs"
            className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Browse Jobs
          </a>
        </section>
      </div>
    </main>
  );
}
