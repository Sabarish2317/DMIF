import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  X,
  Menu,
} from "lucide-react";
import { supabase } from "../../utils/supabase";  // <-- make sure this is correct
import ActivityShowcaseSkeleton from "../../Components/ActivityShowcaseSkeleton";

interface EventItem {
  id: number;
  title: string;
  description: string;
  location: string;
  images: string[];
  event_date: string;
}

const ActivityShowcase = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // -----------------------------
  // ✅ Fetch Events from Supabase
  // -----------------------------
  async function fetchAll() {
    setLoading(true);
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: false });

    if (error) {
      console.error("Error fetching events:", error);
    } else {
      setEvents(data as EventItem[]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  // When events load and selectedEventIndex resets
  const activityImages =
    events.length > 0 ? events[selectedEventIndex].images : [];

  // ---------------------------------
  // Auto-play carousel
  // ---------------------------------
  useEffect(() => {
    if (isAutoPlay && activityImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % activityImages.length
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, activityImages.length]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? activityImages.length - 1 : prev - 1
    );
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % activityImages.length);
  const toggleAutoPlay = () => setIsAutoPlay(!isAutoPlay);

  const handleEventSelect = (index: number) => {
    setSelectedEventIndex(index);
    setCurrentIndex(0);
    setIsSidebarOpen(false);
  };

  // -----------------------------
  // Swipe Touch Events
  // -----------------------------
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) goToNext();
    if (distance < -50) goToPrevious();
  };

  // -----------------------------
  // Loading State
  // -----------------------------
  if (loading) {
    return (
      <div className="w-full">
       <ActivityShowcaseSkeleton />
      </div>
    );
  }

  // -----------------------------
  // No Events Found
  // -----------------------------
  if (events.length === 0) {
    return (
      <div className="w-full h-[300px] flex items-center justify-center text-lg font-semibold text-red-500">
        No events found in database
      </div>
    );
  }



  return (
    <div className="w-full m bg-gray-50 flex flex-col lg:flex-row">
      {/* Mobile Header with Menu Button */}
      <div className="lg:hidden  p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Activities</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Main Activity Section */}
      <div className="flex-1 py-4 lg:py-12 px-4 sm:px-6 lg:px-10">
        {/* Desktop Section Heading */}
        <div className="hidden lg:block relative flex items-center justify-between mb-10">
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold text-transparent uppercase tracking-widest select-none text-center w-full"
            style={{ WebkitTextStroke: "0.5px gray" }}
          >
            Activities
          </h1>
        </div>

        {/* Main Carousel Container */}
        <div className="flex items-center justify-center max-w-4xl mx-auto w-full">
          <div className="relative w-full">
            {/* Image Carousel */}
            <div
              className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-lg bg-white"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {activityImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-full h-full flex-shrink-0 relative"
                  >
                    <img
                      src={image}
                      alt={`Activity ${index + 1}`}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Hidden on mobile for touch gestures */}
              <button
                onClick={goToPrevious}
                className="hidden sm:flex absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:bg-blue-700 transition-colors duration-200"
              >
                <ChevronLeft size={16} className="lg:w-5 lg:h-5" />
              </button>
              <button
                onClick={goToNext}
                className="hidden sm:flex absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 lg:w-10 lg:h-10 items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:bg-blue-700 transition-colors duration-200"
              >
                <ChevronRight size={16} className="lg:w-5 lg:h-5" />
              </button>

              {/* Auto-play Control */}
              <button
                onClick={toggleAutoPlay}
                className="absolute top-2 lg:top-4 right-12 lg:right-16 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-md transition-all duration-200"
              >
                {isAutoPlay ? (
                  <Pause className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
                ) : (
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
                )}
              </button>

              {/* Fullscreen Control */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-2 lg:top-4 right-2 lg:right-4 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-md transition-all duration-200"
              >
                <Maximize2 className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-4 lg:mt-8 space-x-1.5 lg:space-x-2">
              {activityImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-800 w-6 lg:w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="text-center mt-2 lg:mt-3">
              <span className="text-gray-600 text-sm lg:text-base font-medium">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(activityImages.length).padStart(2, "0")}
              </span>
            </div>

            {/* Mobile Swipe Indicator */}
            <div className="sm:hidden text-center mt-4 text-xs text-gray-500">
              Swipe left or right to navigate
            </div>
          </div>
        </div>
      </div>

      {/* Events Sidebar - Mobile Overlay / Desktop Sidebar */}
      <div
        className={`
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        fixed lg:relative max-h-[690px] top-0 right-0 z-40 lg:z-auto
        w-full sm:w-80 lg:w-80 h-full lg:h-auto
        bg-white border-blue-500 
        flex flex-col
      `}
      >
        {/* Mobile Close Button */}
        <div className="lg:hidden flex items-center mt-15 justify-between p-4  border-b border-blue-200">
          <h2 className="text-lg font-semibold text-blue-800">Select Event</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 rounded-lg bg-blue-200 text-blue-600 hover:bg-blue-300 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block  sticky top-0 bg-blue-50 p-6 pb-4 mb-4 border-b border-blue-200 z-10">
          <h2 className="text-xl font-normal text-blue-800">Select Event</h2>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 p-4 lg:px-6 lg:pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
          {events.map((event, index) => {
            const cleanedTitle = event.title.replace(
              ` at ${event.location}`,
              ""
            );
            return (
              <div
                key={event.id}
                onClick={() => handleEventSelect(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-blue-400 ${
                  selectedEventIndex === index
                    ? " border-1 border-blue-500 shadow-sm"
                    : "bg-white border-2 border-blue-200"
                }`}
              >
                <h3
                  className={`font-semibold text-base lg:text-lg mb-2 ${
                    selectedEventIndex === index
                      ? "text-blue-800"
                      : "text-gray-800"
                  }`}
                >
                  {cleanedTitle}
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  {event.description}
                </p>
                {selectedEventIndex === index && (
                  <div className="mt-3 text-blue-700 text-xs space-y-1">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span>Currently Selected</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Images:</span>
                        <span>{event.images.length}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-blue-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" />
                        </svg>
                        <span className="text-xs">
                          <span className="font-medium">Location:</span>{" "}
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Overlay Background */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 lg:top-6 right-4 lg:right-6 text-white bg-white/20 p-2 rounded-full hover:bg-white/30 transition z-10"
          >
            <X size={20} className="lg:w-6 lg:h-6" />
          </button>
          <img
            src={activityImages[currentIndex]}
            alt="Fullscreen Activity"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ActivityShowcase;
