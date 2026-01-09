import { motion } from "framer-motion";
import { useState } from "react";

const OverviewSection = () => {
  const [showMore, setShowMore] = useState(false);

  const paragraphs = [
    `The Dr. Dr.Madhan Institute of Future (DMIF) is a global initiative founded by Dr. Dr.Madhan Kumar Srinivasan, an innovator with 120+ patents (100+ granted), 50+ research papers, 10+ book chapters, and worldwide recognition as a 3-time TEDx speaker, serial entrepreneur of 6 companies, innovation advisor to the Government of India, and Professor of Practice at leading universities such as VIT and SRM.`,

    `DMIF is dedicated to preparing youth across the globe for the AI-driven creative economy, where success depends not only on technical knowledge but also on original thinking, creativity, and intellectual property (IP) creation. In an era where tools like ChatGPT and Generative AI can replicate and optimize but cannot truly originate, DMIF empowers learners to become inventors, researchers, entrepreneurs, and global innovators by guiding them through patent filing, scholarly publishing, and innovation-driven projects.`,

    `Through structured mentorship, weekly guidance sessions, and personalized feedback, students gain exposure to real-world innovation practices, IP development, and research methodology. This enables them to stand out in placement drives, access international research collaborations, strengthen higher education applications at Ivy League institutions, IITs, IIMs, and leading global universities, and gain a clear edge for overseas jobs, startup visas, and permanent residency pathways.`,

    `Alongside patents and research, DMIF also offers a dedicated Entrepreneurship Track, where students learn how to convert their ideas into market-ready ventures, explore startup funding pathways, and build IP-driven business models. This track nurtures entrepreneurial leadership by combining innovation with execution — helping learners move from being thinkers and creators to founders and changemakers.`,

    `More than just a training program, DMIF nurtures a culture of innovation. Patents, research, and entrepreneurship serve as global passports, unlocking opportunities for startup equity, licensing revenues, research fellowships, and skilled migration worldwide. By collaborating with academic institutions, DMIF not only enables students to graduate with real IP ownership, publications, and entrepreneurial experience, but also enhances institutional rankings (NIRF, NAAC, ARIIA), builds faculty research culture, and strengthens the international brand visibility of partner institutions. In doing so, DMIF plays a transformative role in shaping the next generation of global innovators and thought leaders.`,
  ];

  return (
    <motion.section
      className="py-12 px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-14">
        {/* Left Content */}
        <motion.div
          className="flex flex-col items-start gap-4 max-w-5xl w-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="heading text-left leading-tight">
            An Overview & Detailed Explanation.
          </h1>

          {/* Paragraphs */}
          <div className="space-y-3 text-justify leading-5">
            {paragraphs
              .slice(0, showMore ? paragraphs.length : 2)
              .map((text, i) => (
                <motion.p
                  key={i}
                  className="para"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 * i }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {text}
                </motion.p>
              ))}
          </div>

          {/* Read More / Read Less button - only visible on mobile */}
          <button
            className="lg:hidden mt-4 text-blue-600 font-medium underline"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        </motion.div>

        {/* Right Content - DMIF Logo */}
        <motion.div
          className="flex justify-center items-center lg:justify-start lg:items-start w-full lg:w-auto"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/About/logo.svg"
            alt="DMIF Logo"
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OverviewSection;
