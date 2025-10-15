import React from "react";
import HeroSection from "./Component/Hero";
import About from "./Component/About";

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <HeroSection />
      <About/>
    <section  className=" z-0 min-h-screen "/>
    </main>
  );
};

export default App;
