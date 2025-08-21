import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import HighlightProducts from "@/components/HighlightProducts";
import Navbar from "@/components/Navbar";
import WhyNextMart from "@/components/WhyNextMart";

export default function Home() {
  return (
    <div className="font-sans min-h-screen ">
      <HeroSection />
      <HighlightProducts/>
      <WhyNextMart />
    </div>
  );
}
