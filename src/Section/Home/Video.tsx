import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function InstituteVideoSection() {
  const [play, setPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Azure Blob Storage Video URL
  const videoUrl =
    "https://dmifstorage.blob.core.windows.net/course-1-videos/DMIF_Video.mp4?se=2026-01-04T15%3A19%3A48Z&sp=r&sv=2025-11-05&sr=b&sig=wkn783TsyO2bOLVnzvJFB79AJH2S8XKEXYg%2BjuZJ5aM%3D";

  // Custom thumbnail (you can replace with any image you want)
  const thumbnail = "/thumbnail.png"; // <- add your own thumbnail image

  const handlePlay = () => {
    setPlay(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 200);
  };

  return (
    <section className="py-10 bg-gray-50">
      <div className="mx-auto flex flex-col gap-10 px-4 text-center max-w-6xl">
        
        {/* Heading */}
        <div className="flex flex-col gap-3">
          <h2 className="heading font-bold text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-tight">
            Discover Our Institute
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Get to know us in 3 Minutes! Watch our introduction video to explore who we are,
            what we do, and how we can help you achieve your goals.
          </p>
        </div>

        {/* Video */}
        <div className="relative w-full mx-auto rounded-2xl overflow-hidden shadow-xl bg-black">
          
          {/* Thumbnail */}
          {!play && (
            <div
              className="relative cursor-pointer group"
              onClick={handlePlay}
            >
              <img
                src={thumbnail}
                alt="Video Preview"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/70 backdrop-blur-xl p-3 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play size={22} className="text-blue-900" />
                </div>
              </div>
            </div>
          )}

          {/* HTML5 Video Player */}
          {play && (
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
