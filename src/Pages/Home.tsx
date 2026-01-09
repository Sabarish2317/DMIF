// Import section components
import HeroSection from "../Section/Home/HeroSection";
import MadhanSection from "../Section/Home/DrMadhanSection";
import AboutDMIFSection from "../Section/Home/AboutDMIFSection";
import KeyFeature from "../Section/Home/KeyFeature";
import TestimonialsCarousel from "../Section/Home/Testimonials";
import CTASection from "../Section/Home/CTASection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ActivityShowcase from "../Section/Home/Activities";
import InstituteVideoSection from "../Section/Home/Video";
// import VisionMissionSection from "../Section/Home/Vision";

const Home = () => {

  const location = useLocation();

   useEffect(() => {
    if (location.state?.scrollTo) {
      const scrollToSection = () => {
        const section = document.getElementById(location.state.scrollTo);
        if (section) {
          const navbarHeight = 60; // adjust according to your sticky navbar
          const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      // If page fully loaded, scroll immediately
      if (document.readyState === "complete") {
        scrollToSection();
      } else {
        // wait for load event (images/fonts/rendered content)
        window.addEventListener("load", scrollToSection);
        // clean up listener
        return () => window.removeEventListener("load", scrollToSection);
      }
    }
  }, [location.state]);
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

<InstituteVideoSection />
      {/* About DMIF Section */}
   <div id="about">
       <AboutDMIFSection />
   </div>

      {/* Dr. Dr.Madhan Section */}
      <MadhanSection />


      {/* Key Program Features Section */}
      <KeyFeature />

      {/* <VisionMissionSection /> */}
      <ActivityShowcase/>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsCarousel />
      </div>
      

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
