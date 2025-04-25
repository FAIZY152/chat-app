import FeatureSection from "@/components/pages/FeatureSection";
import Footer from "@/components/pages/Footer";
import HeroSection from "@/components/pages/Hero-section";
import Navbar from "@/components/pages/Navbar";
import UserReviews from "@/components/pages/UserReviews";
import React from "react";

const MainUi = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100  flex flex-col">
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainUi;
