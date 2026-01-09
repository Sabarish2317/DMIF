import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { APPROUTES } from "../Routes/appRoutes"; // ✅ import your routes

const Footer = () => {


const handleNavClick = (path: string) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // height of sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (path === "Testimonials" || path === "about") {
    const sectionId = path.toLowerCase();

    if (window.location.pathname === "/") {
      // already on home → scroll immediately
      scrollToSection(sectionId);
    } else {
      // navigate to home first, then scroll after a short delay
      navigate("/", { state: { scrollTo: sectionId } });
    }
  } else {
    navigate(path);
  }
};


  const navigate = useNavigate();
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 
        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        
        {/* Left - Logo & Info */}
        <div className="flex flex-col items-center justify-center sm:items-start gap-4 max-w-xs mx-auto sm:mx-0 col-span-2 sm:col-span-1">
       <img
      src="/Logo-bgRemovced.png"
      alt="Logo"
      className="h-12 sm:h-16 w-auto object-contain cursor-pointer"
      onClick={() => navigate("/")}
    />
         
          {/* <p className="text-sm text-gray-700">reach@drDr.Madhan.in</p>
          <p className="text-sm text-gray-700">www.drDr.Madhan.in</p> */}
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={APPROUTES.FAQ} className="text-gray-600 hover:text-blue-900 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to={APPROUTES.CONTACT_US} className="text-gray-600 hover:text-blue-900 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to={APPROUTES.APPLY_NOW} className="text-gray-600 hover:text-blue-900 transition">
                Apply Now
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Main Menu */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-3">Main Menu</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={APPROUTES.HOME} className="text-gray-600 hover:text-blue-900 transition">
                Home
              </Link>
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-blue-900 transition" onClick={() => handleNavClick("Testimonials")}>
              Testimonials
            </li>
            <li>
              <Link to={APPROUTES.G_GMPS} className="text-gray-600 hover:text-blue-900 transition">
                G-GMP
              </Link>
            </li>
            <li>
              <Link to={APPROUTES.WHY_IT_MATTERS} className="text-gray-600 hover:text-blue-900 transition">
                Why It Matters
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
{/* Social Media */}
<div className="col-span-2 sm:col-span-1 flex flex-col items-center sm:items-start justify-start w-full">
  <h4 className="font-semibold text-gray-800 mb-3 text-center sm:text-left">
    Social Media
  </h4>
  <div className="flex gap-3 justify-center sm:justify-start flex-wrap">
    <a
      href="https://www.linkedin.com/company/drmadhan/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200"
    >
      <Linkedin size={18} />
    </a>
    <a
      href="https://www.instagram.com/dr_madhan_institute/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-md bg-pink-100 text-pink-600 hover:bg-pink-200"
    >
      <Instagram size={18} />
    </a>
    <a
      href="https://www.youtube.com/@Dr.MadhanInstituteofFuture"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-md bg-red-100 text-red-700 hover:bg-red-200"
    >
      <Youtube size={18} />
    </a>
  </div>
</div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-xs sm:text-sm text-gray-600 flex justify-center px-4 sm:px-8 max-w-7xl mx-auto">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} Dr.Madhan Institute of Future.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


