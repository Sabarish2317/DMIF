import { Mail } from "lucide-react";
import IconButton from "../../Components/Common/Button";
import { motion } from "framer-motion";

const ConnectWithUs = () => {
  return (
    <section className="flex flex-col relative md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-24 overflow-hidden">
      {/* Left - Text & Button */}
      <motion.div
        className="flex flex-col gap-6 max-w-lg"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Connect with us
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
           We’d love to hear from you! Connect with our Customer Success Team to discuss collaborations, speaking engagements, or any general inquiries
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <IconButton
            label="Contact Us"
            icon={<Mail size={18} />}
            iconPosition="left"
            onClick={() => (window.location.href = "mailto:reach@drmadhan.in")}
          />
        </motion.div>
      </motion.div>

      {/* Right - Image */}
      <motion.img
        src="/ConnectWithUs.png"
        alt="Contact Us"
        className="w-full max-w-xl hidden md:flex absolute bottom-0 right-0"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      />
    </section>
  );
};

export default ConnectWithUs;
