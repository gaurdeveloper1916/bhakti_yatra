"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function BookingContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, we will contact you shortly!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="bg-orange-50 dark:bg-slate-800"
      id="booking"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Heading */}
        <div className="mb-6 max-w-3xl text-center md:mx-auto">
          <p className="text-base font-semibold uppercase tracking-wide text-[#dd511b] dark:text-orange-300">
            Contact / Booking
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Book Your Spiritual Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-slate-400">
            Fill out the form or reach us directly — we’re here to help plan your perfect temple yatra.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Details */}
          <div>
            <p className="mt-3 mb-8 text-lg text-gray-600 dark:text-slate-400">
              Our dedicated team will guide you through every step of your journey with devotion and care.
            </p>
            <ul>
              {/* Address */}
              <li className="flex mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#dd511b] text-white">
                  <MapPin size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">RZ-50/E1, Vashist Park, Pankha Road </h3>
                  <p className="text-gray-600 dark:text-slate-400">Near Janakpuri,  </p>
                  <p className="text-gray-600 dark:text-slate-400">New Delhi - 110046, India
</p>
                </div>
              </li>

              {/* Contact */}
              <li className="flex mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#dd511b] text-white">
                  <Phone size={20} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact</h3>
                  <p className="text-gray-600 dark:text-slate-400">+91 81302 22583</p>
                  <p className="text-gray-600 dark:text-slate-400">info@yatrakarlo.com</p>
                </div>
              </li>

              {/* Working Hours */}
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#dd511b] text-white">
                  <Clock size={20} />
                </div>
                <div className="ml-4">
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
    Working Hours
  </h3>
  <p className="text-gray-600 dark:text-slate-400">
    24 × 7 – Always Open
  </p>
</div>

              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg border border-orange-200 dark:border-slate-700">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Ready to Get Started?</h3>
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-4 shadow-sm dark:text-gray-300 dark:bg-slate-800 dark:border-slate-600 focus:border-[#dd511b] focus:ring-1 focus:ring-[#dd511b]"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-4 shadow-sm dark:text-gray-300 dark:bg-slate-800 dark:border-slate-600 focus:border-[#dd511b] focus:ring-1 focus:ring-[#dd511b]"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-300 py-2 px-4 shadow-sm dark:text-gray-300 dark:bg-slate-800 dark:border-slate-600 focus:border-[#dd511b] focus:ring-1 focus:ring-[#dd511b]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#dd511b] text-white font-semibold py-3 rounded-md hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
