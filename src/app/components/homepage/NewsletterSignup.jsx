"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section className="bg-[#fff5dc] py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-[#dd511b] mb-2">
        Join Our Spiritual Travel Community
      </h2>
      <p className="text-gray-700 mb-6">
        Get exclusive temple guides, discounts, and travel tips directly in your inbox.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-[#dd511b] text-white px-5 py-2 rounded font-semibold hover:bg-orange-700 transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
