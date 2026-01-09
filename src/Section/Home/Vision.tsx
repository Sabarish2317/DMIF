import { motion } from "framer-motion";
import { Target, Compass } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#F9FBFD] to-[#EEF7FF] py-12 sm:py-16 md:py-10 px-4 sm:px-8 lg:px-16">
      <div className="">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading tracking-[-0.01em] mb-4">
            Our Purpose & Direction
          </h2>

        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision Card */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-[0px_8px_32px_rgba(0,53,121,0.08)] p-8 sm:p-10 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#003579]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#003579] to-[#0056b3] rounded-2xl flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                viewport={{ once: true }}
              >
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#003579] mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                VISION
              </motion.h3>

              {/* Vision Content */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="para ">
                  "To ignite curiosity, cultivate originality, and empower every learner to become an inventor, researcher, and entrepreneur shaping humanity's future."
                </p>
                

              </motion.div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-[0px_8px_32px_rgba(167,0,1,0.08)] p-8 sm:p-10 overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#A70001]/5 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className="w-16 h-16 sm:w-10 sm:h-10 bg-gradient-to-r from-[#A70001] to-[#d32f2f] rounded-2xl flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                viewport={{ once: true }}
              >
                <Compass className="w-8 h-8 sm:w-5 sm:h-5 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h3
                className="font-bold text-xl sm:text-2xl lg:text-3xl text-[#A70001] mb-6 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                MISSION
              </motion.h3>

              {/* Mission Content */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="para ">
                  "Our mission is to mentor minds through Active Learning™, neuroscience-driven methods, and real-world innovation—cultivating self-learners and critical thinkers who turn curiosity into invention, invention into IP, and IP into entrepreneurial ventures."
                </p>

              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          className="flex justify-center mt-12 sm:mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >

        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;