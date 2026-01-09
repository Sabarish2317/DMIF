import { motion } from "framer-motion";

const MentorshipSection = () => {
  return (
    <motion.section
      className="py-20 px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Image above content on mobile, side-by-side on desktop */}
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-24">
        
        {/* Left - Illustration */}
        <motion.div
          className="flex justify-center w-full lg:w-1/2 mb-6 lg:mb-0"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full max-w-md h-60 lg:h-80">
            <img
              src="/About/mentorship.svg"
              alt="Mentorship Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
        
        {/* Right - Content */}
        <motion.div
          className="flex flex-col items-center lg:items-start gap-6 lg:gap-8 w-full lg:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="heading text-center lg:text-left leading-tight">
            Why Mentorship {'>'} instruction
          </h2>
          
          <div className="flex flex-col gap-6 lg:gap-8 w-full max-w-lg">
            {/* Variants for stagger effect */}
            {[
              "Mentorship personalizes growth, while instruction is one-size-fits-all.",
              "Mentorship connects theory to real-world application, unlike pure instruction.",
              "Mentorship fosters lifelong development, beyond classroom teaching.",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 lg:gap-6"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Icon Box (just reusing the same markup from your code) */}
                <div className="w-14 h-14 bg-[#FBFBFB] rounded-full shadow-md flex items-center justify-center flex-shrink-0">
                  {i === 0 && (
                    <div className="w-7 h-7 grid grid-cols-2 gap-1">
                      <div className="w-3 h-3 bg-[#003579] rounded-sm"></div>
                      <div className="w-3 h-3 bg-[#003579] rounded-sm"></div>
                      <div className="w-3 h-3 bg-[#003579] rounded-sm"></div>
                      <div className="w-3 h-3 bg-[#FD661F] rounded-sm"></div>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="relative w-7 h-7">
                      <div className="w-5 h-5 bg-[#FD661F] rounded-sm"></div>
                      <div className="w-5 h-5 bg-[#003579] rounded-sm absolute top-2 left-2"></div>
                    </div>
                  )}
                  {i === 2 && (
                    <svg
                      viewBox="0 0 30 26"
                      fill="currentColor"
                      className="w-7 h-7 text-[#003579]"
                    >
                      <path d="M15 13C17.7614 13 20 10.7614 20 8C20 5.23858 17.7614 3 15 3C12.2386 3 10 5.23858 10 8C10 10.7614 12.2386 13 15 13Z" />
                      <path d="M22 13C23.6569 13 25 11.6569 25 10C25 8.34315 23.6569 7 22 7C20.3431 7 19 8.34315 19 10C19 11.6569 20.3431 13 22 13Z" />
                      <path d="M8 13C9.65685 13 11 11.6569 11 10C11 8.34315 9.65685 7 8 7C6.34315 7 5 8.34315 5 10C5 11.6569 6.34315 13 8 13Z" />
                      <path d="M15 16C11.134 16 8 19.134 8 23H22C22 19.134 18.866 16 15 16Z" />
                      <path d="M22 16C21.0908 16 20.2368 16.1883 19.463 16.5268C21.0851 18.0829 22 20.3956 22 23H27C27 19.134 23.866 16 22 16Z" />
                      <path d="M8 16C8.90916 16 9.7632 16.1883 10.537 16.5268C8.91486 18.0829 8 20.3956 8 23H3C3 19.134 6.134 16 8 16Z" />
                    </svg>
                  )}
                </div>

                {/* Text */}
                <p className="para leading-7 tracking-wide">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default MentorshipSection;
