import React from "react";
import client from "@/lib/apollo";
import { get_Collections } from "./query";
import Card from "../../components/Card";
import Link from "next/link";
export default async function Collection() {
  const { data } = await client.query({ query: get_Collections });
  const collections = data?.collectionCollection?.items || [];

  return (
    <main className="bg-[#f5f3ee] min-h-screen text-[#3b2f2f]">
      <header className="py-16 text-center">
        <h1 className="uppercase tracking-widest text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Our <span className="text-[#c19a6b] font-extrabold">Collections</span>
        </h1>
      </header>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 xl:px-20 max-w-7xl mx-auto pb-16">
       
        {collections.length > 0 ? (
          collections.map((item, index) => (
            <Link href='/shop'>
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.bannerImage?.url}
              href={`/shop/${item.slug}`}
              priority={index < 3}
              
            />
        </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-700 text-lg">
            No collections found.
          </p>
        )}
      </section>
    </main>
  );
}
