import React from "react";
import HeroSection from "@/components/Hero/Hero";
import CTA from "@/components/CTA/CTA";
import Collection from "@/components/Collections/Collections";
import ProductGrid from "@/components/Products/Products";
import PaymentSlider from "@/components/PaymentSlider/PaymentSlider";
const page = () => {
  return (
    <>
    <HeroSection />
    <Collection />
         
   <ProductGrid/>
   <PaymentSlider/>
    
      <CTA />
    </>
  );
};

export default page;
