import React from "react";
import { useNavigate } from "react-router-dom";
import Hsx from "../components/Hsx";
import Cif from "../components/Cif";
import StepByStep from "../components/StepByStep";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const enterApp = () => {
    navigate("/home"); // Navigate to main app
  };

  return (
    <div>
      <header className="text-center py-6 bg-gray-900 sticky top-0 z-50">
        {/* Replace button with header text */}
        <h1
          // onClick={enterApp} // uncomment if you want the header clickable
          className="text-lime-400 text-3xl font-bold cursor-default select-none"
        >
        GROWTH TRADERS
        </h1>
      </header>

      <Hsx />
      <Cif />
      <StepByStep />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;