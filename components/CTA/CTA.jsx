import React from 'react'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 text-center bg-[#3b2f2f] text-[#f5f3ee] px-4 sm:px-6 border-t-4 border-[#c19a6b]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-tight">
          Ready to Craft Your <span className="text-[#c19a6b]">Signature Look</span>?
        </h3>
        <Link
          href="/contact"
          className="inline-block px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 bg-[#c19a6b] text-[#3b2f2f] font-bold uppercase rounded-sm shadow-2xl  hover:text-[#3b2f2f] transition duration-300 tracking-widest text-sm sm:text-base md:text-lg lg:text-xl transform  active:scale-95"
        >
          Design Your Outfit Now &rarr;
        </Link>
      </div>
    </section>
  )
}

export default CTA