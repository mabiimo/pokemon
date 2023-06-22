import React from "react";

import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import ContentPokeDetail from "../Components/PokeDetailPage/ContentPokeDetail";

export default function PokeDetailPage() {
  return (
    <div className="min-h-screen bg-[#262626]  p-10">
      <NavigationBar />
      <ContentPokeDetail />
      <Footer />
    </div>
  );
}
