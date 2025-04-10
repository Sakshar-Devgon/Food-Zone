import React from "react";

//Components
import Navbar from "../components/Navbar";
import FoodItems from "../components/FoodItems";
import Hero from "../components/Hero";
import Join from "../components/Join";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Team from "../components/Team";

const Home = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <Join />
         <FoodItems />
         <Features />
         <Team />
         <Footer />
      </>
   );
};

export default Home;
