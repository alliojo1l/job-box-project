"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How do I apply for a job?",
    answer:
      "Go to the Jobs page, select a job, and click the Apply button on the job details page.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No, this demo project does not require accounts. In a real platform, you would create an account to track applications.",
  },
  {
    question: "Can I filter jobs by category?",
    answer:
      "Yes! You can browse jobs by category from the home page or filter jobs on the jobs page.",
  },
  {
    question: "Is Job Box free to use?",
    answer: "Yes, Job Box is completely free for job seekers.",
  },
  {
    question: "How often are new jobs posted?",
    answer:
      "New jobs are added regularly. Check back frequently to see the latest opportunities.",
  },
  {
    question: "Can I save jobs to apply later?",
    answer:
      "In this demo, saving jobs is not enabled. But in a real version, you could bookmark jobs for later.",
  },
  {
    question: "What types of jobs are available?",
    answer:
      "Job Box lists roles across multiple categories such as Tech, Healthcare, Education, Business, and more.",
  },
  {
    question: "Can employers post jobs here?",
    answer:
      "Currently, this demo focuses on job seekers only. In a real platform, employers would be able to create accounts and post jobs.",
  },
  {
    question: "How do I know if my application was submitted?",
    answer:
      "Once you click Apply, you will see a confirmation message. In a real version, you would also get an email confirmation.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes, your privacy is important.",
  },
  
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions on JBox</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search FAQs..."
        className="w-full p-2 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              {openIndex === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
}
