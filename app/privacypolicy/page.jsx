"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f5f3ee] text-[#3b2f2f] py-26 px-6 md:px-20">
      <section className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Privacy <span className="text-[#c19a6b]">Policy</span>
        </h1>

        <p className="text-lg leading-relaxed">
          At <strong>Tortocraft</strong>, we value your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how we
          collect, use, and protect your data when you interact with our website or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
        <p>
          We may collect personal details such as your name, email address, billing
          information, and order history when you make a purchase or contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-8">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process and fulfill your orders.</li>
          <li>To improve our products, services, and user experience.</li>
          <li>To send updates, promotional offers, or support responses.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">3. Data Protection</h2>
        <p>
          We use industry-standard security measures to safeguard your personal data
          against unauthorized access, alteration, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Third-Party Services</h2>
        <p>
          Our website may include links to third-party services (e.g., PayPal, Stripe).
          We are not responsible for their privacy practices and encourage you to review
          their policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Your Rights</h2>
        <p>
          You can request to access, update, or delete your data at any time by contacting us
          at <a href="mailto:support@yourcompany.com" className="text-[#c19a6b]">tortocraft415@.com</a>.
        </p>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
