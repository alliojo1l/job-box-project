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
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showHelp, setShowHelp] = useState(false); // ✅ helper state

  const links = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Jobs" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/DOC", label: "DOC" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search);
    if (selectedCategory) params.set("category", selectedCategory);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <nav className="bg-gradient-to-br from-white to-green-500 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-green-500 to-white rounded-lg shadow-md transition cursor-pointer"
        >
          <span className="text-white text-2xl font-extrabold">J</span>
          <span className="text-white-500 text-2xl font-extrabold">-Box</span>
        </Link>

        {/* Desktop Links + Search */}
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

          {/* ✅ Helper Message */}
          {showHelp && (
            <p className="absolute top-20 text-sm bg-green-500 text-white px-3 py-1 rounded shadow">
              ℹ️ <strong>Tip: Choose a category, then copy the same category in the search box.</strong>
            </p>
          )}

          {/* Search Bar with Category */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm relative"
          >
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-2 py-1 text-sm text-gray-700 outline-none border-r"
            >
              <option value="">Choose Category➡️</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setShowHelp(true)} // ✅ show help only once
              className="px-3 py-1 text-sm text-gray-700 outline-none"
            />

            <button
              type="submit"
              className="bg-green-300 px-3 py-2 text-green-800 hover:bg-green-400 transition"
            >
              <Search size={20} />
            </button>
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

            {/* Mobile Search with Category */}
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white rounded-lg overflow-hidden shadow-sm mt-3"
            >
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-2 py-2 text-sm text-gray-700 outline-none border-r"
              >
                <option value="">Choose Category </option>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setShowHelp(true)} // ✅ also for mobile
                className="px-3 py-2 text-sm text-gray-700 outline-none w-full"
              />
              <button
                type="submit"
                className="bg-green-300 px-3 py-2 text-green-400 hover:bg-green-600 transition"
              >
                <Search size={18} />
              </button>
            </form>
          </ul>
        </div>
      )}
    </nav>
  );
}
