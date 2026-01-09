import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const CreativityInAI = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-center items-center bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Side - Content */}
      <div className="flex-1 p-6 md:p-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="heading mb-2">Creativity in the AI Era</h2>
          <p className="para">
            We combine technical expertise with business insight to deliver solutions
          </p>
        </motion.div>

        <div className="space-y-4">
          {/* Feature 1 */}
          <motion.div
            className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <p className="para">
              In the AI era, creativity is no longer limited to human imagination alone,
              empowering everyone.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <p className="para">
              AI tools lower barriers to entry in creative fields, enabling individuals
              without formal training to compose music, create art, and write stories.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 mt-1">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <p className="para">
              As AI generates content based on vast datasets of human-created works,
              the notions of originality and authorship are evolving.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="w-full md:w-1/2 relative"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src="/whyitMatters.png"
          alt="Why it Matters"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default CreativityInAI;
