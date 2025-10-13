export function EventCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Header */}
      <div className="skeleton bg-gray-400 p-4 relative">
        <div className="absolute top-3 right-3">
          <div className="h-4 w-12 bg-gray-300 rounded-md"></div>
        </div>
        <div className="h-5 w-20 bg-gray-300 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="p-2">
        <div className="h-6 w-40 bg-gray-300 rounded-md mb-3"></div>

        <div className="flex items-center gap-2 text-sm mb-3">
          <div className="flex skeleton  items-center gap-1">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-16 bg-gray-300 rounded-md"></div>
          </div>
          <div className="flex  skeleton  items-center gap-1">
            <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-12 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        <div className="h-4 w-full skeleton  bg-gray-300 rounded-md mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded-md mb-4"></div>

        <div className="w-full h-10 skeleton  bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}
