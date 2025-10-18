"use client";
import React from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "After your order is confirmed, you’ll receive an email with a tracking link so you can follow your package’s journey in real time.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept PayPal, Visa, MasterCard, Payoneer, MoneyGram, and other secure payment methods.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, we offer a 7-day return and exchange policy for unused items in original packaging. Contact our support team for help.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach us anytime via email at support@yourcompany.com or through the Contact page on our website.",
    },
  ];

  return (
    <main className="bg-[#f5f3ee] text-[#3b2f2f] py-26 px-6 md:px-20">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Frequently <span className="text-[#c19a6b]">Asked Questions</span>
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="bg-white rounded-xl shadow p-6 cursor-pointer transition hover:shadow-md"
            >
              <summary className="text-lg font-semibold">
                {faq.question}
              </summary>
              <p className="mt-3 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
