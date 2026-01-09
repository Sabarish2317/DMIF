import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

export const features = [
  {
    id: 1,
    title: "Patents",
    description:
      "Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas, ensuring intellectual property rights and long-term impact.",
    footer: "Protect Ideas",
    image: "/Programs/image1.png",
  },
  {
    id: 2,
    title: "Research",
    description:
      "Work directly on academic and industry-level research projects, developing critical thinking and analytical skills through practical, real-world experience.",
    footer: "Human Ideas",
    image: "/Programs/image2.svg",
  },
  {
    id: 3,
    title: "Global Exposure",
    description:
      "Build a strong global network by engaging with peers, mentors, and experts across different cultures, enhancing both collaboration and cross-cultural learning.",
    footer: "Global Network",
    image: "/Programs/image3.svg",
  },
  {
    id: 4,
    title: "Ivy League Readiness",
    description:
      "Develop the academic rigor, leadership mindset, and personal discipline required to compete for admission to Ivy League and other top universities.",
    footer: "Future Ready",
    image: "/Programs/image4.svg",
  },
  {
    id: 5,
    title: "Innovation Thinking",
    description:
      "Learn structured methods and design-thinking approaches to generate creative, practical, and impactful solutions for today’s global challenges.",
    footer: "Creative Problem Solving",
    image: "/Programs/image 24.png",
  },
  {
    id: 6,
    title: "Brain Science",
    description:
      "Explore neuroscience-based techniques to optimize memory, focus, and overall learning performance, applying brain science principles to everyday success.",
    footer: "Mind Science",
    image: "/Programs/image 23.png",
  },
];



const KeyFeature = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-12">
      <motion.h2
        className="heading mb-4 text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[48px] text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Key Program Features
      </motion.h2>

      {/* Grid layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start cursor-pointer bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-all"
            onClick={() => navigate(`/feature/${feature.id}`)}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Left - Image */}
            <div className="w-full sm:w-auto">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-lg w-full"
              />
            </div>

            {/* Right - Text */}
            <div className="flex flex-col h-full justify-between flex-1">
              <div className="flex flex-col gap-1 md:gap-2">
                <p className="text-base md:text-lg font-semibold text-gray-800">
                  {feature.title}
                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-[#003579] font-medium mt-2 md:mt-3 text-sm md:text-base">
                <p>{feature.footer}</p>
                <ArrowRight size={18} className="md:w-[22px] md:h-[22px]" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default KeyFeature;
