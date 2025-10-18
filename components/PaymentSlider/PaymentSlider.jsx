"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import images
import paypalImg from "../../app/Assets/paypal.png";
import visaImg from "../../app/Assets/visa.png";
import mastercardImg from "../../app/Assets/Mastercard.png";
import moneygramImg from "../../app/Assets/moneygram.png";
import remitly from "../../app/Assets/remitly.png";
import payoneer from "../../app/Assets/payoneer.png";
import west from "../../app/Assets/west.png";

const paymentMethods = [
  { name: "PayPal", img: paypalImg },
  { name: "Visa", img: visaImg },
  { name: "MasterCard", img: mastercardImg },
  { name: "MoneyGram", img: moneygramImg },
  { name: "Remitly", img: remitly },
  { name: "Payoneer", img: payoneer },
  { name: "West", img: west },
];

export default function PaymentSlider() {
  return (
    <div className="p-10">
      <h1 className=" text-center uppercase tracking-widest text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
        Payment <span className="text-[#c19a6b] font-medium">Methods</span>
      </h1>

      <div className="w-full max-w-4xl mx-auto py-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {paymentMethods.map((method) => (
            <SwiperSlide
              key={method.name}
              className="flex justify-center items-center"
            >
              <div className="w-20 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 relative">
                <Image
                  src={method.img}
                  alt={method.name}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
