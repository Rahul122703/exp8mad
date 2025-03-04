import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import Discounts from "./components/Discounts";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSection />
      <Categories />
      <BestSellers />
      <Discounts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
