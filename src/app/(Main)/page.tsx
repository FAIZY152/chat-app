import FeatureSection from "@/components/pages/FeatureSection";
import Footer from "@/components/pages/Footer";
import HeroSection from "@/components/pages/Hero-section";
import Navbar from "@/components/pages/Navbar";
import UserReviews from "@/components/pages/UserReviews";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/option";

const MainUi = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="w-full min-h-screen bg-gray-100  flex flex-col">
      {/* Header */}
      <Navbar user={session?.user ?? null} />
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
