"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Heart, Zap } from "lucide-react";
import CTA from "@/components/CTA/CTA";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FAQ from "@/components/Faq/faq";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import about from '../Assets/about.jpg'

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function About() {
  const COLORS = {
    BG_LIGHT: "#f5f3ee",
    TEXT_DARK: "#3b2f2f", 
    ACCENT_GOLD: "#c19a6b",
  };

  const testimonials = [
    {
      name: "Sarah K.",
      review: "The quality and design are unmatched! I feel confident wearing my custom outfit.",
    },
    {
      name: "James T.",
      review: "TORTOCRAFT brings creativity to life. Excellent customer service and attention to detail!",
    },
    {
      name: "Aisha L.",
      review: "Premium fabrics, perfect fit, and fast delivery. Highly recommended!",
    },
    {
      name: "Liam R.",
      review: "The craftsmanship is exceptional. I love how personalized my outfit feels.",
    },
    {
      name: "Emma W.",
      review: "Outstanding service and impeccable tailoring. Will order again for sure!",
    },
  ];

  const valueProps = [
    { icon: Heart, title: "Handcrafted Love", description: "Every piece is custom-tailored, reflecting true artistry and dedication." },
    { icon: Clock, title: "Timeless Design", description: "Fashion that transcends seasonal trends, focusing on long-lasting style." },
    { icon: Zap, title: "Sustainable Future", description: "Ethically sourced materials and zero-waste practices guide our craft." },
  ];

  return (
    <main className="bg-[#f5f3ee] text-[#3b2f2f] min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="bg-[#3b2f2f] text-[#f5f3ee] py-32 px-6 text-center h-100">
        <h1 className="uppercase tracking-widest text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight px-2 mb-4">
          The <span className="text-[#c19a6b] font-medium">CRAFT</span> Story
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl leading-normal font-light italic opacity-90">
          "Where Premium Fabrics Meet Personal Style, Crafted for Confidence."
        </p>
      </section>

      {/* 2. Our Story / Heritage Section */}
      <section className="py-24 px-6 md:px-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b pb-3 border-gray-300">
            Our Heritage of Craftsmanship
          </h2>
          <p className="mb-4 text-lg text-justify leading-relaxed">
            Founded on the principle that fashion should be as unique as the wearer, TORTOCRAFT began in 2025 with a single tailor's commitment to <b className="text-[#c19a6b]">**uncompromising quality**</b>. We reject fast fashion in favor of creating enduring garments that respect both the wearer and the planet.
          </p>
          <p className="mb-6 text-lg text-justify leading-relaxed">
            Our process combines <b className="text-[#c19a6b]">**age-old tailoring techniques**</b> with modern, sustainable fabric sourcing. This dedication ensures every stitch contributes to a flawless fit and a conscious creation.
          </p>
          <Link
            href="/sustainability"
            className="text-[#c19a6b] font-semibold hover:text-[#3b2f2f] transition inline-block border-b-2 border-[#c19a6b] pb-0.5"
          >
            Explore Our Sustainable Practices &rarr;
          </Link>
        </div>
        
        <div className="shadow-2xl overflow-hidden">
          <Image
            src={about}
            width={600}
            height={400}
            alt="Craftsmanship"
            className="object-cover rounded-2xl h-full hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* 3. Core Values/Mission */}
      <section className="py-20 px-6 md:px-20 bg-white border-y border-gray-200">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Guiding <span className="text-[#c19a6b]">Principles</span> 
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {valueProps.map((prop, index) => (
            <div key={index} className="p-8 group border border-gray-100 bg-white shadow-sm hover:shadow-lg transition duration-300">
              <prop.icon size={48} className="mx-auto mb-4 text-[#c19a6b] group-hover:scale-110 transition" />
              <h3 className="text-2xl font-semibold mb-2 text-[#3b2f2f] tracking-wide">
                {prop.title}
              </h3>
              <p className="text-base text-gray-700 mt-2">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonials (Swiper) - Fixed Autoplay */}
      <section className="py-24 bg-[#f5f3ee] px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Customer <span className="text-[#c19a6b]">Rave Reviews</span>
        </h2>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={40}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
         
         
          loop={true}
          speed={800}
          className="pb-16"
          breakpoints={{
            640: { 
              slidesPerView: 1,
              spaceBetween: 20 
            },
            768: { 
              slidesPerView: 2,
              spaceBetween: 30 
            },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 40 
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border-b-4 border-[#c19a6b] p-8 rounded-sm shadow-xl flex flex-col items-center h-full min-h-[350px]">
                <div className="w-20 h-20 flex items-center justify-center bg-[#3b2f2f] text-[#f5f3ee] text-3xl font-bold rounded-full mb-4">
                  {item.name.charAt(0).toUpperCase()}
                </div>
                <p className="text-lg text-center mb-5 italic text-[#3b2f2f] flex-grow">
                  "{item.review}"
                </p>
                <h4 className="font-bold text-sm uppercase tracking-wider text-[#c19a6b] border-t pt-3 w-full text-center">
                  {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <FAQ/>

      {/* 5. CTA Section */}
    <CTA/>
    </main>
  );
}