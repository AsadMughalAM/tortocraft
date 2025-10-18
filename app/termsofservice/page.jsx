"use client";
import React from "react";

export default function TermsOfService() {
  return (
    <main className="bg-[#f5f3ee] text-[#3b2f2f] py-26   px-6 md:px-20">
      <section className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Terms <span className="text-[#c19a6b]">of Service</span>
        </h1>

        <p>
          Welcome to <strong>YourCompany</strong>. By accessing or using our website, you
          agree to comply with the following Terms of Service. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Use of Our Services</h2>
        <p>
          You agree to use our website only for lawful purposes. You must not engage in
          activities that disrupt or damage the website or its users.
        </p>

        <h2 className="text-2xl font-semibold mt-8">2. Purchases and Payments</h2>
        <p>
          All payments are processed securely through trusted third-party gateways. Prices
          and availability of products are subject to change without notice.
        </p>

        <h2 className="text-2xl font-semibold mt-8">3. Intellectual Property</h2>
        <p>
          All content, logos, images, and designs are the property of <strong>YourCompany</strong>.
          You may not reproduce or distribute them without written permission.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from the use or inability to use our
          website or products, except as required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of our site indicates
          your acceptance of any changes.
        </p>

        <p className="text-sm text-gray-600 mt-10">
          Last updated: {new Date().getFullYear()}
        </p>
      </section>
    </main>
  );
}
