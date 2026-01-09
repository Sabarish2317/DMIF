import { APPROUTES } from "../../Routes/appRoutes";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const ResearchAndIp = () => {
  const navigate = useNavigate();
  const cards = [
    {
      number: 1,
      title: "Boosts High-Skill Jobs & Salaries",
      description:
        "Research and IP fuel the demand for skilled talent, creating more high-paying opportunities across technology, biotechnology, and other AI-driven sectors worldwide.",
    },
    {
      number: 2,
      title: "Fuels Startup Creation & Growth",
      description:
        "IP-backed innovation enables startups to attract funding, differentiate in the market, and scale successfully in competitive industries.",
    },
    {
      number: 3,
      title: "Enhances Global Recognition",
      description:
        "Strong research and IP achievements strengthen Green Card and PR visa applications by demonstrating recognized excellence.",
    },
  ];

  return (
    <motion.div
      className="bg-[#003579] text-white py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
          How Research & Intellectual Property Drive Career and Economic
          Advancement
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-[4px] rounded-xl p-6 hover:bg-blue-800/70  shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
          >
            <div className="flex items-start flex-col mb-4">
              <div className="w-12 h-12 bg-white rounded-[9px] flex items-center justify-center text-blue-500 p-2 font-bold text-sm">
                {card.number}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="max-w-7xl mx-auto mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={() => navigate(APPROUTES.APPLY_NOW)}
          className="bg-white cursor-pointer text-blue-900 px-8 py-3 rounded-lg font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          whileHover={{ scale: 1.08, backgroundColor: "#f3f4f6" }}
          transition={{ duration: 0.3 }}
         
        >
          Apply Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ResearchAndIp;
