import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-slate-900 text-white border-t border-slate-800">
      <div className="relative h-full md:h-[80vh] flex items-center justify-start text-left md:py-0 py-12 px-6 md:px-16">
        {/* Background image with gradient overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('/hero1.jpg')`,
          }}
        ></div>

        {/* Hero text */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-2 leading-tight">
         Empowering Your Digital Growth Journey
          </h1>
         <p className="text-lg md:text-2xl mb-8">
  A digital platform where customers can easily discover and buy products.
</p>

          <Link href={"/products"} className="bg-amber-400 hover:bg-amber-500 text-black cursor-pointer font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
          Start Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
