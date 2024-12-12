import React from "react";

const LoaderCard = () => {
  return (
    <div className="max-w-sm w-full mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Skeleton */}
        <div className="w-full h-48 skeleton"></div>

        {/* Content Skeleton */}
        <div className="p-4">
          {/* Title Skeleton */}
          <div className="w-3/4 h-6 skeleton rounded-md mb-4"></div>

          {/* Text Skeleton */}
          <div className="w-full h-4 skeleton rounded-md mb-2"></div>
          <div className="w-5/6 h-4 skeleton rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderCard;
