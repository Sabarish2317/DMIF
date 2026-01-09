import { motion } from "framer-motion";
import IconButton from "../../Components/Common/Button";
import { APPROUTES } from "../../Routes/appRoutes";
import { useNavigate } from "react-router-dom";

const UniqueSection = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      className="py-20 px-6 bg-[#F9FBFD]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Flip order on mobile: image first, text below */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-20">
        
        {/* Left Content */}
        <motion.div
          className="flex flex-col items-start gap-6 max-w-lg"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="heading leading-tight">
            What Makes DMIF Unique
          </h2>
          
          <p className="para leading-6 text-justify">
            The Dr. Dr.Madhan Institute of Future (DMIF) is unique because it goes
            beyond classroom learning by focusing on patents, research, and
            innovation-driven outcomes. With direct mentorship from Dr. Dr.Madhan,
            students gain hands-on guidance in filing patents, publishing
            research, and building global exposure. Unlike traditional programs,
            DMIF ensures students graduate with tangible achievements that open
            doors to higher studies, international careers, and entrepreneurship,
            while also boosting institutional rankings and reputation.
          </p>
          
          {/* Apply Now Button */}
          <motion.div
            className="pt-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              label="Apply Now"
              onClick={() => {
                navigate(APPROUTES.CONTACT_US)
              }}
              className="bg-[#003579] hover:bg-blue-800 px-6 py-3 text-base font-semibold flex items-center gap-3 font-sans"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              iconPosition="right"
            />
          </motion.div>
        </motion.div>
        
        {/* Right Content - Group Image */}
        <motion.div
          className="flex justify-center w-full max-w-xl"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/About/group.svg"
            alt="What Makes DMIF Unique"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UniqueSection;
