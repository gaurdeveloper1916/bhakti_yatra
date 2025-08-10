"use client";

const reviews = [
  {
    name: "Ravi Sharma",
    feedback: "The Khatu Shyam trip was beautifully organized. Spiritual and comfortable!",
  },
  {
    name: "Priya Verma",
    feedback: "Affordable and very well managed tours with delicious homely food.",
  },
  {
    name: "Anil Kumar",
    feedback: "Guides were respectful and knowledgeable. Would book again for sure!",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4" id="testimonials">
      <h2 className="text-3xl font-bold text-center text-[#dd511b] mb-10">
        What Our Devotees Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <p className="text-gray-700 italic mb-4">"{r.feedback}"</p>
            <h4 className="text-[#dd511b] font-semibold text-right">- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
