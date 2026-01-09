import { useNavigate } from "react-router-dom";
import IconButton from "../../Components/Common/Button";
import { APPROUTES } from "../../Routes/appRoutes";
import { motion } from "framer-motion";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      className="w-full bg-[#F9F9F9] px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 flex flex-col justify-center md:flex-row items-center md:justify-between gap-6 sm:gap-8 md:gap-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
    >
      {/* Left Content */}
      <motion.div
        className="flex flex-col gap-6 sm:gap-8 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="heading max-w-xl text-xl sm:text-2xl md:text-3xl lg:text-[38px] leading-tight px-2 sm:px-0">
            Start your journey with DMIF and make an impact
          </h2>
          <p className="para text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Become a part of DMIF's global community — Where learners dive into
            real-world innovation and research, gaining outcomes like patents,
            publications, and startup-ready ideas
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IconButton
            className="max-w-sm w-full sm:w-auto"
            onClick={() => {
              navigate(APPROUTES.APPLY_NOW);
            }}
            label="Register Now"
          />
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex justify-center items-center flex-shrink-0"
        initial={{ opacity: 0, x: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <img
          src="/HOME/Union.png"
          alt="CTA Illustration"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
        />
      </motion.div>
    </motion.section>
  );
};

export default CTASection;
