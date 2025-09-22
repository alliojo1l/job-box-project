export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Job-Box</h1>

      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-gray-200">Home</a></li>
        <li><a href="/jobs" className="hover:text-gray-200">Jobs</a></li>
        <li><a href="/about" className="hover:text-gray-200">About</a></li>
        <li><a href="/contact" className="hover:text-gray-200">Contact</a></li>
        <li><a href="/faq" className="hover:text-gray-200">FAQ</a></li>
      </ul>
    </nav>
  );
}
