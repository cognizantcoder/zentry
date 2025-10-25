import React from "react";
import HeroSection from "./Component/Hero";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Features from "./Component/Features";
import Story from "./Component/Story";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
