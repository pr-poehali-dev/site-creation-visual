import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedImage from "@/components/FeaturedImage";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedImage />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Index;
