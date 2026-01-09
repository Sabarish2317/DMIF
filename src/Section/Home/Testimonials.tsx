import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IconButton from "../../Components/Common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useTestimonials } from "../../utils/TestimonialData";
import LazyImage from "../../Components/Common/LazyImage";
import TestimonialSkeleton from "../../Components/TestimonialSkleton";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragStart = useRef({ x: 0, y: 0 });
const { items: testimonials } = useTestimonials();


  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom === 1) return;
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.3, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.3, 1));

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Timer helpers (guarded by selectedOutcome)
  const startAutoSlide = () => {
    // DO NOT start if popup is open
    if (selectedOutcome) return;
    if (testimonials.length === 0) return;
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setShowFull(false);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (testimonials.length === 0) return;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
  if (testimonials.length > 0) {
    setCurrentSlide(0);   // Reset to valid slide
  }
}, [testimonials.length]);


  const restartAutoSlide = () => {
    // If popup is open, don't restart
    if (selectedOutcome) return;
    stopAutoSlide();
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pause auto-slide while outcome popup is open, resume when closed
  useEffect(() => {
    if (selectedOutcome) {
      stopAutoSlide();
    } else {
      // if user closed popup, restart timer (respects start guard)
      restartAutoSlide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOutcome]);

  // ✅ Carousel navigation (user-initiated restarts timer)
  const nextSlide = (userInitiated = false) => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setShowFull(false);
    if (userInitiated) restartAutoSlide();
  };

  const prevSlide = (userInitiated = false) => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setShowFull(false);
    if (userInitiated) restartAutoSlide();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setShowFull(false);
    restartAutoSlide();
  };


const currentTestimonial = testimonials[currentSlide];

// SAFETY GUARD → prevents crash
if (!currentTestimonial) {
  return <div className="text-center ">
    <TestimonialSkeleton/>
  </div>;
}

const prevTestimonial =
  testimonials[(currentSlide - 1 + testimonials.length) % testimonials.length];

const nextTestimonial =
  testimonials[(currentSlide + 1) % testimonials.length];



  const isLongText = currentTestimonial.text.split("\n").join(" ").length > 400;



  return (
    <div
      className={`relative py-12 px-4 sm:px-6 lg:px-10 ${
        showFull ? "min-h-[750px]" : "min-h-[600px]"
      } overflow-hidden transition-all duration-300`}
    >
      {/* Section Heading */}
      <motion.div
        className="relative inset-0 flex items-center justify-between mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent uppercase tracking-widest select-none text-center w-full"
          style={{ WebkitTextStroke: "0.5px gray" }}
        >
          Testimonials
        </h1>
        <img
          src="/Testimonial.png"
          className="opacity-30 w-16 hidden md:flex sm:w-24 md:w-32 lg:max-w-sm"
          alt="Testimonials"
        />
      </motion.div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center gap-8 lg:gap-16">
        {/* Prev (Desktop only) */}
        <motion.div
          className="hidden xl:flex flex-col items-center w-[180px] h-[240px]"
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={prevTestimonial.image}
            alt={prevTestimonial.name}
            className="w-full h-full object-cover shadow-md rounded-lg"
          />
          <IconButton
            label="Previous"
            onClick={() => prevSlide(true)}
            icon={<ChevronLeft size={22} />}
            className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 mt-3 rounded-lg"
          />
        </motion.div>

        {/* Center Slide */}
        <div
          onMouseEnter={() => {
            // hover should pause only if popup isn't open
            if (!selectedOutcome) stopAutoSlide();
          }}
          onMouseLeave={() => {
            // only restart if popup isn't open
            if (!selectedOutcome) startAutoSlide();
          }}
          className="flex-1 max-w-4xl mx-auto flex justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              className="rounded-lg p-6 sm:p-8 bg-white shadow-lg w-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                {/* Image */}
                <motion.div
                  className="w-full max-w-[320px] h-[280px] sm:h-[340px] lg:h-[380px] flex-shrink-0"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {currentTestimonial.image ? (
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-lg">
                      No Image
                    </div>
                  )}
                </motion.div>

                {/* Text */}
                <motion.div
                  className="flex flex-col h-full justify-between"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div>
                    <p
                      className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: !showFull && isLongText ? 6 : "unset",
                      }}
                    >
                      {currentTestimonial.text}
                    </p>
                    {isLongText && (
                      <button
                        className="text-blue-800 cursor-pointer text-end font-semibold text-sm hover:underline mb-4"
                        onClick={() => setShowFull((prev) => !prev)}
                      >
                        {showFull ? "Show less" : "Show more"}
                      </button>
                    )}

                    {/* Outcomes Section */}
                    {currentTestimonial.outcomes &&
                      currentTestimonial.outcomes.length > 0 && (
                        <div className="">
                          <p className="mb-2 font-medium">Outcomes</p>

                          <div className="overflow-x-auto scrollbar-hide">
                            <div className="flex gap-4 pb-2">
                              {currentTestimonial.outcomes.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="cursor-pointer flex flex-col items-center flex-shrink-0 group"
                                  onClick={() => setSelectedOutcome(item.image)}
                                >
                                  <LazyImage
                                    src={item.image}
                                    alt={item.label}
                                    className="h-16 w-16 object-cover rounded-md shadow-md group-hover:opacity-80 transition"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                  </div>

                  <div className="text-center lg:text-end">
                    <div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                          {currentTestimonial.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {currentTestimonial.position}
                        </p>
                      </div>
                      <div>
                        <p className="ext-xs sm:text-sm text-blue-600">
                          {currentTestimonial?.patent}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next (Desktop only) */}
        <motion.div
          className="hidden xl:flex flex-col items-center w-[180px] h-[240px]"
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={nextTestimonial.image}
            alt={nextTestimonial.name}
            className="w-full h-full object-cover shadow-md rounded-lg"
          />
          <IconButton
            label="Next"
            onClick={() => nextSlide(true)}
            icon={<ChevronRight size={22} />}
            className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 mt-3 rounded-lg"
          />
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-blue-800 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Mobile Floating Arrows */}
      <div className="xl:hidden absolute top-1/2 left-4 right-4 flex justify-between items-center -translate-y-1/2">
        <button
          onClick={() => prevSlide(true)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:bg-blue-700"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => nextSlide(true)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:bg-blue-700"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Outcome Image Popup */}
      <AnimatePresence>
        {selectedOutcome && (
          <motion.div
            className="fixed inset-0 bg-black/40 bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <motion.div
              className="relative bg-white p-3 rounded-lg shadow-lg max-w-4xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Zoom Controls */}
              <div className="absolute top-3 right-3 flex gap-2 z-50">
                <button
                  className="bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80"
                  onClick={zoomIn}
                >
                  ➕
                </button>

                <button
                  className="bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80"
                  onClick={zoomOut}
                >
                  ➖
                </button>

                <button
                  className="bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80"
                  onClick={resetZoom}
                >
                  ⟳
                </button>

                <button
                  className="bg-black bg-opacity-60 text-white p-2 rounded-full hover:bg-opacity-80"
                  onClick={() => {
                    setSelectedOutcome(null);
                    resetZoom();
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Zoomable + Draggable Image */}
              <div
                className="relative w-full h-[70vh] select-none  overflow-hidden cursor-grab active:cursor-grabbing"
                onMouseDown={handleMouseDown}
                draggable={false}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={selectedOutcome}
                  className="absolute top-1/2 left-1/2 select-none pointer-events-none rounded-lg shadow-md"
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  style={{
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                    transition: isDragging ? "none" : "transform 0.2s ease",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialsCarousel;
