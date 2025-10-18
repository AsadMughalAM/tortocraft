"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import client from "@/lib/apollo";
import { Get_Collections_With_Products } from "../../query";
import PaymentSlider from "@/components/PaymentSlider/PaymentSlider";
import Loader from "@/components/Loader/Loader";
import CTA from "@/components/CTA/CTA";
export default function ProductDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await client.query({
          query: Get_Collections_With_Products,
        });
        let found = null;
        data.collectionCollection.items.forEach((collection) => {
          const prod = collection.linkedFrom.entryCollection.items.find(
            (p) => p.slug === slug
          );
          if (prod) found = prod;
        });
        setProduct(found);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const features = [
    "Premium Quality Materials",
    "Handcrafted Excellence",
    "Eco-Friendly Production",
    "Lifetime Warranty",
    "Free Shipping Worldwide",
  ];

  if (loading)
    return (
      <div className="bg-[#f5f3ee] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mt-4 text-lg text-[#3b2f2f]">
            <Loader />
          </p>
        </div>
      </div>
    );

  if (!product)
    return (
      <div className="bg-[#f5f3ee] min-h-screen flex py-15 items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-[#3b2f2f] mb-4">Product Not Found</p>
          <button
            onClick={() => router.back()}
            className="bg-[#c19a6b] text-white px-6 py-3 rounded-lg hover:bg-[#a37b53] transition font-semibold"
          >
            Return to Collections
          </button>
        </div>
      </div>
    );

  return (
    <>
    <div className="bg-[#f5f3ee] min-h-screen py-15">
      {/* Breadcrumb Navigation */}
      <nav className="container mx-auto px-4 py-12">
        <div className="flex items-center space-x-2 text-lg text-[#6b5b4b]">
          <button
            onClick={() => router.push("/")}
            className="hover:text-[#c19a6b] transition"
          >
            Home
          </button>
          <span>›</span>
          <button
            onClick={() => router.back()}
            className="hover:text-[#c19a6b] transition"
          >
            Collections
          </button>
          <span>›</span>
          <span className="text-[#3b2f2f] font-medium">{product.title}</span>
        </div>
      </nav>

      {/* Product Gallery & Info Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Single Product Image */}
          <div className="flex-1 flex justify-center w-full">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-lg">
              {product.productImage && (
                <img
                  src={product.productImage.url}
                  alt={product.title}
                  className="w-full h-auto rounded-xl object-cover"
                />
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 space-y-8 w-full">
            {/* Header Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#3b2f2f] tracking-tight">
                  {product.title}
                </h1>
                <span className="bg-[#c19a6b] text-white text-xs px-3 py-1.5 rounded-full uppercase font-semibold tracking-wide">
                  Premium
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#3b2f2f]">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#3b2f2f]">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <span className="text-[#c19a6b] text-lg">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl mb-2">🚚</div>
                <p className="font-semibold text-[#3b2f2f]">Shipping Time</p>
                <p className="text-sm text-gray-600">Delivered in 3-5 days</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">↩️</div>
                <p className="font-semibold text-[#3b2f2f]">30-Day Returns</p>
                <p className="text-sm text-gray-600">No questions asked</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🛡️</div>
                <p className="font-semibold text-[#3b2f2f]">
                  Quality Guarantee
                </p>
                <p className="text-sm text-gray-600">Premium Material</p>
              </div>
            </div>

            {/* Customization Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-600 text-lg">💡</span>
                <div>
                  <p className="font-semibold text-yellow-800">
                    Fully Customizable
                  </p>
                  <p className="text-yellow-700 text-sm mt-1">
                    Need a different size? Contact us for custom orders and bulk
                    pricing. We can customize colors, materials, and dimensions
                    to fit your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PaymentSlider></PaymentSlider>
    </div>
      <CTA></CTA>
      </>
  );
}
