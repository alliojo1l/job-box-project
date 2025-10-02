"use client";
import { useState } from "react";

export default function SearchBar({ categories = [], onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showHelp, setShowHelp] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm, selectedCategory);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Help Message - shows only once when user clicks */}
      {showHelp && (
        <p className="mb-2 text-sm text-gray-600 bg-yellow-100 p-2 rounded">
          ℹ️ Tip: First choose a category, then type it in the search box.
        </p>
      )}

      <form
        onSubmit={handleSearch}
        className="flex items-center border border-gray-300 rounded-lg overflow-hidden"
      >
        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border-r outline-none"
        >
          <option value="">Search Available Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Search Input */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowHelp(true)} // show help when first focused
          placeholder="Type your search..."
          className="flex-1 px-3 py-2 outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white hover:bg-green-600"
        >
          🔍
        </button>
      </form>
    </div>
  );
}
