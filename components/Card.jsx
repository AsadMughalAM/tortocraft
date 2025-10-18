import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ title, description, imageUrl, href, priority }) {
  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden h-full">
      
      {/* 🖼 Product Image */}
      <div className="relative w-full aspect-[4/5] overflow-hidden flex-shrink-0">
        {imageUrl ? (
          <Image
            src={`${imageUrl}`}
            alt={title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
          />
        ) : (
          <div className="bg-gray-200 flex justify-center items-center h-full text-gray-500">
            <i className="fas fa-image text-2xl opacity-50"></i>
          </div>
        )}
      </div>

      {/* 📄 Product Info */}
      <div className="p-6 text-center flex flex-col flex-grow">
        <div className="flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-[#3b2f2f] tracking-wide group-hover:text-[#c19a6b] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-600 font-light mb-4 line-clamp-3 italic flex-grow">
            {description}
          </p>
        </div>

        {/* 🔘 Button */}
        <Link
          href={href}
          className="bg-[#c19a6b] text-white px-6 py-2 rounded-md font-medium hover:bg-[#a37b53] transition-colors duration-300 w-full mt-auto"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}