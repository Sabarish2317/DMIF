import React, { useState } from "react";
import { Award, ChevronRight, Trophy } from "lucide-react";
import { useTestimonials } from "../../utils/TestimonialData";
import LazyImage from "../../Components/Common/LazyImage";
import Popup from "./Popup";
import IconButton from "../../Components/Common/Button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Outcome {
  label: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  patent: string;
  position: string;
  text: string;
  image: string;
  outcomes?: Outcome[];
  created_at: string;
}

const HallOfFrames: React.FC = () => {
  type ModalMode = "OUTCOME" | "PERSON";
  const { items: testimonials } = useTestimonials();
  const [visibleCount, setVisibleCount] = useState(12);
  const [modalMode, setModalMode] = useState<ModalMode | null>(null);
  const [modalData, setModalData] = useState<any>(null);

  const peopleWithOutcomes: Testimonial[] = testimonials
    .filter((t): t is any => 
      t.outcomes !== undefined && 
      t.outcomes.length > 0 && 
      t.patent !== undefined &&
      t.name !== undefined &&
      t.image !== undefined
    )
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  const allOutcomes = peopleWithOutcomes.flatMap(
    (person) =>
      person.outcomes?.map((outcome) => ({ ...outcome, person })) || []
  );

  // ⭐ FIXED ANIMATION (TS SAFE — NO LAG)
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },

    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: custom * 0.06,
        duration: 0.55,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Hall of Fame
          </h1>

          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Celebrating Innovation, Excellence & Achievement
          </p>

          {/* <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-3xl font-bold text-white">{peopleWithOutcomes.length}</p>
              <p className="text-sm text-blue-100">Innovators</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-3xl font-bold text-white">{totalAchievements}</p>
              <p className="text-sm text-blue-100">Achievements</p>
            </div>
          </div> */}
        </motion.div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48h1440V0s-187.5 48-720 48S0 0 0 0v48z"
              fill="rgb(248 250 252)"
            />
          </svg>
        </div>
      </div>

      {/* Outcomes Section */}
      <div className="mx-auto flex flex-col gap-5">
        <section className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center mb-2">
            <h2 className="heading mb-4 text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px]">
              Featured Patents & Publications
            </h2>
          </div>

          {/* Outcomes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {allOutcomes.slice(0, visibleCount).map((item, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                onClick={() => {
                  setModalMode("OUTCOME");
                  setModalData({ ...item, person: item.person });
                }}
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <LazyImage
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {visibleCount < allOutcomes.length ? (
              <IconButton
                onClick={() => setVisibleCount((prev) => prev + 10)}
                label="See More"
              />
            ) : (
              <IconButton
                onClick={() => setVisibleCount(10)}
                label="See Less"
              />
            )}
          </div>
        </section>

        {/* People Section */}
        <div className="min-h-screen bg-gray-50">
          <section className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900">
                Innovators & Researchers
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {peopleWithOutcomes
                .filter((person) => person.name !== "Mythili Krishnan")
                .map((person, index) => (
                  // your existing card code here

                  <motion.div
                    key={person.id}
                    custom={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 cursor-pointer transform hover:-translate-y-1"
                    onClick={() => {
                      setModalMode("PERSON");
                      setModalData(person);
                    }}
                  >
                    <div className="p-6 h-full flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <div className="relative mb-4 flex justify-center">
                          <div className="relative">
                            <LazyImage
                              src={person.image}
                              alt={person.name}
                              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-blue-900 rounded-full p-2 shadow-lg">
                              <Trophy className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 text-center">
                          {person.name}
                        </h3>

                        {person.patent && (
                          <div className="flex justify-center mb-3">
                            <div className="inline-flex items-center bg-blue-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                              <Award className="w-3.5 h-3.5 mr-1.5" />
                              <span>{person.patent}</span>
                            </div>
                          </div>
                        )}

                        <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
                          {person.position}
                        </p>
                      </div>

                      <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3 border border-blue-100">
                        <div className="flex items-center space-x-2">
                          <div className="bg-blue-900 rounded-lg p-2">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-blue-900">
                              {person.outcomes?.length || 0}
                            </p>
                            <p className="text-xs text-gray-600 font-medium">
                              Achievements
                            </p>
                          </div>
                        </div>

                        <ChevronRight className="w-5 h-5 text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </section>
        </div>
      </div>

      {/* Modal */}
      {modalMode && modalData && (
        <Popup
          modalMode={modalMode}
          modalData={modalData}
          onClose={() => {
            setModalMode(null);
            setModalData(null);
          }}
          onOpenOutcome={(outcome, person) => {
            setModalMode("OUTCOME");
            setModalData({ ...outcome, person });
          }}
        />
      )}
    </div>
  );
};

export default HallOfFrames;
