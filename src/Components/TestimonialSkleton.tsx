// src/components/Skeletons/TestimonialSkeleton.tsx
export default function TestimonialSkeleton() {
  return (
    <div className="rounded-lg p-6 sm:p-8 bg-white shadow-lg w-full animate-pulse">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">

        {/* Image Skeleton */}
        <div className="w-full max-w-[320px] h-[280px] sm:h-[340px] lg:h-[380px] bg-gray-200 rounded-lg" />

        {/* Text Block */}
        <div className="flex flex-col h-full justify-between w-full">

          {/* Multiline text */}
          <div className="space-y-3 mb-4">
            <div className="h-4 bg-gray-200 rounded w-[90%]" />
            <div className="h-4 bg-gray-200 rounded w-[85%]" />
            <div className="h-4 bg-gray-200 rounded w-[80%]" />
            <div className="h-4 bg-gray-200 rounded w-[70%]" />
            <div className="h-4 bg-gray-200 rounded w-[60%]" />
          </div>

          {/* Outcomes */}
          <div>
            <div className="h-4 bg-gray-200 w-24 rounded mb-3" />

            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-16 w-16 bg-gray-200 rounded-md flex-shrink-0"
                />
              ))}
            </div>
          </div>

          {/* Name + Position */}
          <div className="text-center lg:text-end mt-4 space-y-2">
            <div className="h-5 bg-gray-200 rounded w-40 lg:ml-auto" />
            <div className="h-4 bg-gray-200 rounded w-24 lg:ml-auto" />
            <div className="h-4 bg-gray-200 rounded w-20 lg:ml-auto" />
          </div>

        </div>
      </div>
    </div>
  );
}
