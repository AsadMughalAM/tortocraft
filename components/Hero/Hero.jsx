"use client";

import { useEffect, useState } from "react";
import client from "@/lib/apollo";
import { HERO_SECTION_QUERY } from "./query.js";
import Loader from "../Loader/Loader.jsx";
import Link from "next/link";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .query({ query: HERO_SECTION_QUERY })
      .then((res) => {
        const firstHero = res.data?.heroSectionCollection?.items?.[0];
        if (firstHero) setHero(firstHero);
        else setError("No hero section found");
      })
      .catch((err) => {
        console.error("Contentful Error:", err);
        setError("Failed to load hero section");
      });
  }, []);

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!hero) return <Loader />;

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center bg-[#3b2f2f] text-[#f5f3ee] overflow-hidden px-6">
      {/* Background Video or Image */}
      {hero.bgImage?.url ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src={hero.bgImage.url} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b2f2f] to-black opacity-70" />
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
 <h1
  className="font-extrabold uppercase tracking-tight 
             text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
             text-[#c19a6b] 
             [text-shadow:2px_2px_0_#3b2f2f, -2px_-2px_0_#3b2f2f,2px-2px_0_#c19a6b]
             drop-shadow-lg"
>
    <span className="text-[#f5f3ee] ">
          {hero.title.split(" ")[0]}{" "}
        </span>
        <span className="text-[#c19a6b]">
          {hero.title.split(" ").slice(1).join(" ")}
        </span>
</h1>
        <p className="mt-4 text-[#f5f3ee] 
                      text-base sm:text-lg md:text-xl lg:text-2xl 
                      max-w-2xl mx-auto leading-relaxed">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {hero.cta && hero.ctaUrl && (
            <Link
              href={hero.ctaUrl}
              className="px-6 sm:px-8 py-3 sm:py-4 
                         bg-[#c19a6b] text-[#3b2f2f] font-semibold rounded-full 
                         shadow-md hover:bg-[#f5f3ee] hover:text-[#3b2f2f] transition-all duration-300"
            >
              {hero.cta}
            </Link>
          )}
          {hero.cta2 && hero.cta2Url && (
            <Link
              href={hero.cta2Url}
              className="px-6 sm:px-8 py-3 sm:py-4 
                         border border-[#c19a6b] text-[#f5f3ee] font-semibold rounded-full 
                         hover:bg-[#f5f3ee] hover:text-[#3b2f2f] transition-all duration-300"
            >
              {hero.cta2}
            </Link>
          )}
        </div>
      </div>

     
    </section>
  );
}
