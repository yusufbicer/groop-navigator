
import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks";
import BlogPreview from "../components/home/BlogPreview";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-groop-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
