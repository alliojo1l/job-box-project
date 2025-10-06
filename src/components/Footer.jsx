import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* ==== Brand Section ==== */}
        <div>
          <h2 className="text-2xl font-extrabold text-green-600 dark:text-green-400">
            JBox
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
            Find your next career opportunity effortlessly. 
            <br />JBox connects top talent with meaningful jobs across industries.
          </p>
        </div>

        {/* ==== Quick Links ==== */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-400">
            <li>
              <Link href="/" className="hover:text-green-500 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:text-green-500 transition-colors">Jobs</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-500 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-green-500 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* ==== Contact Info ==== */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Contact
          </h3>
          <div className="text-gray-700 dark:text-gray-400 flex flex-col gap-2">
            <a
              href="mailto:tijaniolamilekan858@gmail.com"
              className="flex items-center gap-2 hover:text-green-500 transition-colors"
            >
              <FaEnvelope className="text-green-500" />
              tijaniolamilekan858@gmail.com
            </a>
          </div>
        </div>

        {/* ==== Social Media ==== */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Follow Us
          </h3>
          <div className="flex items-center gap-4 text-xl">
            <a
              href="https://facebook.com/jboxapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/jboxapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-sky-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/company/jboxapp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* ==== Bottom Bar ==== */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-5 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">
            JBox
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
