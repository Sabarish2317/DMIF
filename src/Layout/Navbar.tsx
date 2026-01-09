import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import IconButton from "../Components/Common/Button";
import { APPROUTES } from "../Routes/appRoutes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: APPROUTES.HOME },
    // {label: "About", path: "about" },
 { label: "Hall of Fame", path: APPROUTES.HALL_OF_FAMES },
    { label: "G-GMP", path: APPROUTES.G_GMPS },
    
    { label: "Certifications", path: APPROUTES.CERTIFICATIONS },
    { label: "Why It Matters", path: APPROUTES.WHY_IT_MATTERS },
   
    { label: "Testimonials", path: "Testimonials" }, // special case
    { label: "Contact Us", path: APPROUTES.CONTACT_US },
  
  ];

  const handleNavClick = (path: string) => {
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = -80; // height of sticky navbar
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
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
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center sticky top-0 z-50 px-4 sm:px-6 py-3 sm:py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/Webp/logoHori.webp"
          alt="Logo"
          className="h-10 sm:h-12 md:h-16"
        />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6 lg:space-x-8">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.path)}
            className="relative text-gray-700 hover:text-blue-900 transition text-sm lg:text-base
              after:content-[''] after:absolute cursor-pointer after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300
              hover:after:w-full"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <IconButton
          label="Apply Now"
          icon={<Mail size={16} />}
          iconPosition="right"
          onClick={() => {
            navigate(APPROUTES.APPLY_NOW);
          }}
          className="text-sm px-4 py-2"
        />
      </div>

      {/* Mobile Hamburger */}
      <button
        className="block md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 md:hidden z-50 border-t">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.path)}
              className="text-base relative text-gray-700 hover:text-blue-900 transition
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300
                hover:after:w-full"
            >
              {item.label}
            </button>
          ))}

          {/* Mobile Apply Button */}
          <div className="mt-4">
            <IconButton
              label="Apply Now"
              icon={<Mail size={16} />}
              iconPosition="right"
              onClick={() => {
                setIsOpen(false);
                navigate(APPROUTES.APPLY_NOW);
              }}
              className="text-sm px-6 py-2"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
