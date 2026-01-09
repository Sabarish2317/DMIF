import { useState } from "react";
import { X, Trophy, Award, Sparkles } from "lucide-react";
import LazyImage from "../../Components/Common/LazyImage";

const Popup = ({
  modalMode,
  modalData,
  onClose,
  onOpenOutcome,
}: {
  modalMode: "OUTCOME" | "PERSON" | null;
  modalData: any;
  onClose: () => void;
  onOpenOutcome: (outcome: any, person: any) => void;
}) => {
  if (!modalMode || !modalData) return null;

  const [zoomView, setZoomView] = useState(false);

  return (
    <>
      {/* MAIN POPUP */}
      <div className="fixed inset-0 px-8 pb-3 bg-black/50 backdrop-blur-sm flex items-center sm:items-center justify-center z-50 p-0 sm:p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
          
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer right-3 top-3 sm:right-4 sm:top-4 bg-white hover:bg-gray-100 p-2 sm:p-2.5 rounded-lg shadow-md z-10 transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>

          {/* HEADER */}
          <div className={`relative ${modalMode === "OUTCOME" ? "bg-white" : "bg-blue-900"} p-3 text-white`}>

            {/* OUTCOME HEADER */}
         

            {/* PERSON HEADER */}
            {modalMode === "PERSON" && (
              <div className="">
                <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center sm:items-start gap-4 sm:gap-5">
                  <div className="relative">
                    <LazyImage
                      src={modalData.image}
                      alt={modalData.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full shadow-md">
                      <Trophy className="w-5 h-5 text-blue-900" />
                    </div>
                  </div>

                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                      {modalData.name}
                    </h3>
                    <span className="inline-flex items-center bg-blue-800 text-white text-sm px-4 py-1.5 rounded-md">
                      <Sparkles className="w-4 h-4 mr-1.5" />
                      {modalData.patent}
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* BODY */}
          <div className="p-4 sm:p-6 bg-gray-50 overflow-y-auto flex-1">

            {/* OUTCOME VIEW (CERTIFICATE ONLY + ZOOM FEATURE) */}
            {modalMode === "OUTCOME" && (
              <div className="space-y-5">

                {/* Certificate thumbnail with hover zoom + click expand */}
                <div className="w-full flex justify-center">
                  <div
                    className="bg-white p-3 sm:p-4 rounded-xl border-2 border-blue-900 shadow-md cursor-zoom-in 
                               transform transition duration-300 hover:scale-[1.03]"
                  
                  >
                    <img
                      src={modalData.image}
                      alt={modalData.label}
                      className="w-full rounded-lg"
                    />
                  </div>
                </div>

              </div>
            )}

            {/* PERSON VIEW (UNCHANGED) */}
            {modalMode === "PERSON" && (
              <div className="flex flex-col gap-2">
                
                {/* Position */}
                <div className="bg-white p-5 sm:p-6 rounded-lg shadow border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-blue-900" />
                    <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide">
                      Position & Role
                    </h4>
                  </div>
                  <p className="text-gray-700 text-base">{modalData.position}</p>
                </div>

                {/* Achievements Header */}
                <div className="flex items-center gap-3 border-b-2 border-blue-900 pb-3">
                  <div className="bg-blue-900 p-2 rounded-lg">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-xl sm:text-2xl">Achievements</h4>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {modalData.outcomes?.map((out: any, i: number) => (
                    <div
                      key={i}
                      className="group bg-white p-3 rounded-lg border-2 border-gray-200 hover:border-blue-900 hover:shadow-lg cursor-pointer transition"
                      onClick={() => onOpenOutcome(out, modalData)}
                    >
                      <div className="overflow-hidden rounded-md mb-2">
                        <LazyImage
                          src={out.image}
                          alt={out.label}
                          className="aspect-square object-cover"
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-gray-700 text-center line-clamp-2">
                        {out.label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>
        </div>
      </div>

      {/* FULL SCREEN ZOOM OVERLAY */}
      {zoomView && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoomView(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setZoomView(false)}
              className="absolute -top-3 -right-3 bg-white p-2 rounded-full shadow"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            {/* Full Image */}
            <img
              src={modalData.image}
              alt="Expanded View"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
