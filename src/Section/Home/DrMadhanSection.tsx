  import { useState } from "react";
  import { Mail, Linkedin, Facebook, Instagram, Youtube, CalendarIcon } from "lucide-react";
  import { motion } from "framer-motion";
  import IconButton from "../../Components/Common/Button";

  const socialIcons = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/drmadhaniimcal/", icon: Linkedin, mail: false },
    { name: "Facebook", url: "https://www.facebook.com/madhankrs?mibextid=wwXIfr", icon: Facebook, mail: false },
    { name: "Email", url: "mailto:reach@drmadhan.in", icon: Mail, mail: true },
    { name: "Instagram", url: "https://www.instagram.com/madhankrs?igsh=MWNleTI1Mmh1bmF5dQ==", icon: Instagram, mail: false },
    { name: "YouTube", url: "https://youtube.com/@madhankumarsrinivasan?si=ZlsMu3wkHyBedF3K", icon: Youtube, mail: false },
  ];

  function SocialMediaCard() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
      <motion.div
        className="flex flex-row justify-center items-center p-3 bg-white shadow-[0px_12px_64px_rgba(28,25,25,0.12)] rounded-md gap-3 sm:gap-4 mt-4 w-full max-w-sm mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        {socialIcons.map((icon, idx) => {
          const IconComp = icon.icon;
          const isSelected = selected === idx;
          return (
            <motion.a
              key={icon.name}
              href={icon.url}
              target={icon.mail ? undefined : "_blank"}
              rel={icon.mail ? undefined : "noopener noreferrer"}
              aria-label={icon.name}
              onClick={() => setSelected(idx)}
              className={`group w-12 h-12 rounded-md flex items-center justify-center transition-all duration-200 ${
                isSelected ? "bg-[#003579]" : "bg-white hover:bg-[#003579]"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.1, duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              <IconComp
                size={24}
                stroke={isSelected ? "#fff" : "#003579"}
                strokeWidth={2}
                className="w-6 h-6 transition-colors duration-200 group-hover:stroke-white"
              />
            </motion.a>
          );
        })}
      </motion.div>
    );
  }

  const DrMadhanSection = () => {
    return (
      <section className="w-full py-4 sm:py-6 px-4 sm:px-8 lg:px-16">
        <motion.div
          className="w-full mx-auto bg-white shadow-[0px_36px_105px_rgba(43,56,76,0.1)] rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          {/* Left - Image and Social */}
          <motion.div
            className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex-shrink-0 flex flex-col items-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-full bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <motion.img
                src="/HOME/madhan.jpg"
                alt="Dr. Madhan Kumar Srinivasan"
                className="w-full h-70 md:h-90"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Social Icons */}
            <div className="absolute -bottom-24 sm:-bottom-20  lg:-bottom-25 flex flex-col items-center gap-4">
              <SocialMediaCard />

              {/* Book a Meet Button */}
              <IconButton
                label="Book a Meet"
                icon={<CalendarIcon />}
                onClick={() => window.open("https://calendly.com/drmadhan/dmif-enquiry", "_blank")}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="flex w-full flex-col gap-4 sm:gap-6 mt-22 sm:mt-20 lg:mt-0"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading text-center lg:text-left px-2 sm:px-0">
              Dr.MADHAN KUMAR SRINIVASAN
            </h2>
            
            <div className="font-normal text-sm sm:text-base lg:text-lg leading-relaxed text-[#556070] px-2 sm:px-0">
              <ul className="space-y-3">
                <li>Dr.Madhan Kumar Srinivasan, Ph.D., EPBA (IIM Calcutta), is a CEO and a serial entrepreneur, innovator, Chief Mentor and professor with 22+ years of global experience in Cloud, AI, and Big Data.</li>
                <li>An Accenture Prolific Inventor, he holds 120+ patents and 100+ grants, many transformed into successful products across the US, UK, Europe, Australia, Singapore, and India.</li>
                <li>He is the Founder & CEO of ImagineX Innovations and Wise Work, and Co-founder of Hue Learn Singapore & Longer Life Tech, advising Fortune 500 companies, startups, and governments worldwide.</li>
                <li>A pioneer in India's cloud journey, he built the first private cloud at Infosys (2012) and created Accenture's Cloud AI business line, deploying its flagship Cloud AI product.</li>
                <li>Recognized as a 3x TEDx Speaker, Invited Speaker at Green Accelerator during Davos 2024, and recipient of global awards including the Top 100 Scientists Award (IBC, Cambridge), also an Inspiring Teacher 2010 awardee from Teachers Academy at Osmania University, India, Dr. Madhan continues to drive innovation, education, and entrepreneurship across industries and academia.</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>
    );
  };

  export default DrMadhanSection;