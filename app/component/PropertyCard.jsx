import React from 'react';
import { Heart, Share2, MapPin } from 'lucide-react';

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  priceLabel = "₹On Request",
  area, 
  tags = [],
  isFeatured = false,
  onCardClick,
  onFavorite,
  onShare
}) => {
  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onCardClick}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 left-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 text-sm font-semibold">
            FEATURED
          </div>
        )}
        
        {/* Tags */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className={`px-3 py-1 text-xs font-semibold rounded ${
                tag === 'Residential' 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-green-500 text-white'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Area & Price Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="text-white">
            {area && <p className="text-sm mb-1">{area}</p>}
            <p className="text-lg font-bold">{priceLabel}</p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onFavorite?.();
            }}
            className="bg-white p-2 rounded-full hover:bg-red-50 transition-colors"
          >
            <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onShare?.();
            }}
            className="bg-white p-2 rounded-full hover:bg-blue-50 transition-colors"
          >
            <Share2 className="w-5 h-5 text-gray-700 hover:text-blue-500" />
          </button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
