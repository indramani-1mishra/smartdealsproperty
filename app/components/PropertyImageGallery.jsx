import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const PropertyImageGallery = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Property view ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Fullscreen Button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
        >
          <Maximize2 className="w-5 h-5 text-gray-800" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 mt-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative h-24 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
              currentIndex === index
                ? 'border-orange-500 scale-105'
                : 'border-transparent hover:border-orange-300'
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
          >
            ×
          </button>
          <img
            src={images[currentIndex]}
            alt="Fullscreen view"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyImageGallery;
