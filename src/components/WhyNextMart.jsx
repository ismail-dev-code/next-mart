"use client";

import { Truck, ShieldCheck, Headphones, CreditCard } from "lucide-react";

export default function WhyNextMart() {
  const highlights = [
    {
      icon: <Truck size={28} className="text-amber-400" />,
      title: "Fast & Free Delivery",
      description: "Get your orders delivered quickly and without extra charges on eligible items.",
    },
    {
      icon: <ShieldCheck size={28} className="text-sky-300" />,
      title: "Secure Shopping",
      description: "Shop confidently with our secure checkout and buyer protection.",
    },
    {
      icon: <Headphones size={28} className="text-amber-400" />,
      title: "24/7 Customer Support",
      description: "Our dedicated team is here to help you anytime, anywhere.",
    },
    {
      icon: <CreditCard size={28} className="text-sky-300" />,
      title: "Easy Payment Options",
      description: "Choose from multiple safe and convenient payment methods.",
    },
  ];

  return (
    <section className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Shop with{" "}
          <span className="text-sky-300">Next</span>
          <span className="text-amber-400">Mart</span>?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 hover:bg-slate-800 transition rounded-2xl p-6 text-center shadow-md"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
