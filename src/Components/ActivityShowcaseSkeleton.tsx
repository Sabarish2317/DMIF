const ActivityShowcaseSkeleton = () => {
  return (
    <div className="w-full bg-gray-50 flex flex-col lg:flex-row animate-pulse">

      {/* Mobile Header Skeleton */}
      <div className="lg:hidden p-4 flex items-center justify-between">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>
        <div className="h-8 w-8 bg-gray-300 rounded-lg"></div>
      </div>

      {/* Main Section Skeleton */}
      <div className="flex-1 py-4 lg:py-12 px-4 sm:px-6 lg:px-10">
        
        {/* Desktop Title Skeleton */}
        <div className="hidden lg:flex justify-center mb-10">
          <div className="h-10 w-64 bg-gray-300 rounded"></div>
        </div>

        {/* Carousel Skeleton */}
        <div className="flex items-center justify-center max-w-4xl mx-auto w-full">
          <div className="relative w-full">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              {/* Dark overlay simulating loading state */}
              <div className="absolute inset-0 bg-gray-200" />
            </div>

            {/* Dots Skeleton */}
            <div className="flex justify-center mt-4 lg:mt-8 space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-gray-300"
                ></div>
              ))}
            </div>

            {/* Counter Skeleton */}
            <div className="flex justify-center mt-2 lg:mt-3">
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Skeleton */}
      <div className="lg:w-80 w-full border-l border-gray-200 p-4 lg:p-6 space-y-4">

        {/* Sidebar Title */}
        <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>

        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-4 rounded-lg bg-gray-200 border border-gray-300 space-y-2"
          >
            <div className="h-5 w-48 bg-gray-300 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 rounded"></div>

            <div className="mt-2 space-y-1">
              <div className="h-3 w-20 bg-gray-300 rounded"></div>
              <div className="h-3 w-28 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityShowcaseSkeleton;
