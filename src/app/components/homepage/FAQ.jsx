"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you provide food during temple tours?",
    a: "Yes, we provide home-cooked satvik meals on all our packages."
  },
  {
    q: "Are travel costs included?",
    a: "Yes, the travel cost from pickup to drop, including local temple transfers, is included."
  },
  {
    q: "Can I customize my itinerary?",
    a: "Absolutely! We can tailor trips according to your preferred temples and dates."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#fff5dc] py-16 px-4" id="faq">
      <h2 className="text-3xl font-bold text-center text-[#dd511b] mb-10">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((f, i) => (
          <div key={i} className="mb-4 border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left px-4 py-3 font-semibold text-gray-800 bg-white hover:bg-gray-100"
            >
              {f.q}
            </button>
            {openIndex === i && (
              <div className="px-4 py-3 bg-white border-t text-gray-600">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
