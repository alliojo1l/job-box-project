"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { categories } from "@/data/jobs"; // ✅ import categories

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showHelp, setShowHelp] = useState(false); // ✅ warning state

  const links = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedCategory) {
      setShowHelp(true);
      setTimeout(() => setShowHelp(false), 3000); // auto-hide warning
      return;
    }
    router.push(`/jobs?category=${selectedCategory}`);
  };

  return (
    <nav className="bg-green-500 text-white sticky top-0 z-50 shadow-md ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg shadow-md transition cursor-pointer"
        >
          <span className="text-green-500 text-2xl font-extrabold">J</span>
          <span className="text-green-500 text-2xl font-extrabold">-Box</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-medium transition ${
                    pathname === link.href
                      ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-yellow-300"
                      : "hover:text-yellow-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Category Search Form */}
          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-sm relative ml-4"
          >
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 text-sm text-gray-700 outline-none border-r w-full md:w-auto"
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Search Button */}
            <button
              type="submit"
              className={`mt-2 md:mt-0 md:ml-2 px-3 py-2 rounded-lg transition w-full md:w-auto ${
                selectedCategory
                  ? "bg-green-400 text-white hover:bg-green-500"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              <Search size={20} />
            </button>

            {/* Warning Message */}
            {showHelp && !selectedCategory && (
              <p className="text-red-500 text-sm mt-2 md:absolute md:-bottom-6 md:left-0 animate-fade">
                ⚠️ Please select a category before searching.
              </p>
            )}
          </form>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-green-700 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md ${
                    pathname === link.href
                      ? "bg-green-200 text-green-800 font-semibold"
                      : "hover:bg-green-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Mobile Category Search */}
            <form
              onSubmit={handleSearch}
              className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm mt-3 p-2"
            >
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-2 py-2 text-sm text-gray-700 outline-none border rounded-md"
              >
                <option value="">Select Category</option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className={`mt-2 px-3 py-2 rounded-lg transition ${
                  selectedCategory
                    ? "bg-green-400 text-white hover:bg-green-500"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <Search size={18} />
              </button>

              {showHelp && !selectedCategory && (
                <p className="text-red-500 text-sm mt-2 animate-fade">
                  ⚠️ Please select a category before searching.
                </p>
              )}
            </form>
          </ul>
        </div>
      )}
    </nav>
  );
}
