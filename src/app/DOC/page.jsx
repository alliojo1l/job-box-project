"use client";

import { useState } from "react";
import { categories } from "@/data/jobs";

export default function DocsPage() {
  const [copied, setCopied] = useState(null);

  // Copy category name
  const handleCopy = (name) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500); // Reset after 1.5s
  };

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Documentation</h1>

      <p className="mb-4 text-gray-700">
        To search jobs, copy a category below and paste it into the{" "}
        <b>search bar at the top</b>.  
        Example: <b>Design</b>, <b>Marketing</b>, <b>Engineering</b>.
      </p>

      {/* List of categories with copy buttons */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Available Categories:</h2>
        <ul className="space-y-3">
          {categories.map((c) => (
            <li
              key={c.slug}
              className="flex items-center justify-between p-3 bg-white shadow rounded-lg border relative"
            >
              <span>{c.name}</span>
              <div className="relative">
                <button
                  onClick={() => handleCopy(c.name)}
                  className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                >
                  Copy
                </button>

                {/* Tooltip */}
                {copied === c.name && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded shadow">
                    Copied!
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
