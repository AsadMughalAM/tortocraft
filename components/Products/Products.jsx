import React from "react";
import client from "@/lib/apollo";
import { Get_Products } from "./query";
import Card from "../../components/Card";

export default async function ProductGrid() {
  const { data } = await client.query({ query: Get_Products ,fetchPolicy: "no-cache"});
  const products = data?.productCollection?.items || [];

  return (
    <main className="bg-[#f5f3ee] min-h-screen text-[#3b2f2f]">
      <header className="py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center ">
          Latest <span className="text-[#c19a6b] font-extrabold">Products</span>
        </h1>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-12 xl:px-20 max-w-7xl mx-auto md:pb-10">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              description={product.description}
              imageUrl={product.productImage?.url}
              href={`shop/product/${product.slug}`}
              priority={index < 3}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-700 text-lg">
            No products available.
          </p>
        )}
      </section>
    </main>
  );
}
