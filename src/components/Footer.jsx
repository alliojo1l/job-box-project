import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    
        <div>
          <h2 className="text-xl font-bold text-white">JBox</h2>
          <p className="text-sm mt-2">
            Find your next job with ease. JBox connects talent with
            opportunities.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/jobs" className="hover:text-white">Jobs</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        <p>© 2025 JBox Application. All rights reserved.</p>
      </div>
    </footer>
  );
}
