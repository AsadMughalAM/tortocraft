"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CTA from "@/components/CTA/CTA";
import Link from "next/link";
import { Get_Collections_With_Products } from "./query";
import client from "@/lib/apollo";
import Loader from "@/components/Loader/Loader";

export default function ShopCollection() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const { data } = await client.query({
          query: Get_Collections_With_Products,
        });
        setCollections(data.collectionCollection.items);
      } catch (err) {
        setError(err);
        console.error("Error fetching collections:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center py-20 min-h-[50vh]">
        <Loader />
      </div>
    );
    
  if (error)
    return (
      <div className="text-center py-20">
        <p className="text-red-600 text-lg mb-4">Error loading collections</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-[#c19a6b] text-white px-6 py-2 rounded-md hover:bg-[#a37b53] transition-colors"
        >
          Try Again
        </button>
      </div>
    );

  return (
    <main className="bg-[#f5f3ee] min-h-screen text-[#3b2f2f]">
      {/* 🌟 Hero Section */}
      <section className="bg-[#3b2f2f] text-[#f5f3ee] py-32 px-6 text-center h-100">
        <h1 className="uppercase tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-4">
          Curated for{" "}
          <span className="text-[#c19a6b] font-medium">You</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic opacity-90">
          “Explore timeless craftsmanship and luxury in every detail.”
        </p>
      </section>

      {/* 🛍️ Collections Section */}
   <section className="container mx-auto px-4 py-12 md:py-16">
  {collections.map((collection) => (
    <div key={collection.slug} className="mb-16 md:mb-24">
      {/* Collection Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12">
        <span className="text-[#3b2f2f]">
          {collection.title.split(" ")[0]}{" "}
        </span>
        <span className="text-[#c19a6b]">
          {collection.title.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      {/* ✨ Product Cards */}
      {collection.linkedFrom?.entryCollection?.items?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {collection.linkedFrom.entryCollection.items.map((product) => (
            <Link
              key={product.slug}
              href={`/shop/product/${product.slug}`}
              className="group bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden h-full flex flex-col"
            >
              {/* Product Image */}
              {product.productImage ? (
                <div className="relative w-full aspect-[4/5] overflow-hidden flex-shrink-0">
                  <Image
                    src={`${product.productImage.url}?w=800&h=1000&fit=fill&q=90`}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="bg-gray-200 flex justify-center items-center aspect-[4/5] text-gray-500 flex-shrink-0">
                  No Image
                </div>
              )}

              {/* Product Info */}
              <div className="p-6 text-center flex flex-col flex-grow">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-[#3b2f2f] tracking-wide group-hover:text-[#c19a6b] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 font-light mb-4 line-clamp-3 italic flex-grow">
                    {product.description}
                  </p>
                </div>
                <button className="bg-[#c19a6b] text-white px-6 py-2 rounded-md font-medium hover:bg-[#a37b53] transition-colors duration-300 w-full mt-auto">
                  View Product
                </button>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products available in this collection</p>
        </div>
      )}
    </div>
  ))}
</section>

      <CTA />
    </main>
  );
}