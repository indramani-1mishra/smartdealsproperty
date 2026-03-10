import React from 'react';
import { Heart, Share2, Printer, MapPin, Calendar } from 'lucide-react';

const PropertyHeader = ({ 
  title, 
  location, 
  launchDate,
  onFavorite,
  onShare,
  onPrint 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        {/* Left Side - Title & Location */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h1>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="w-5 h-5 mr-2 text-orange-600" />
            <span className="text-lg">{location}</span>
          </div>

          {launchDate && (
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 mr-2 text-orange-600" />
              <span>{launchDate}</span>
            </div>
          )}
        </div>

        {/* Right Side - Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onFavorite}
            className="p-3 border-2 border-gray-300 rounded-lg hover:border-red-500 hover:bg-red-50 transition-all group"
            title="Add to Favorites"
          >
            <Heart className="w-6 h-6 text-gray-600 group-hover:text-red-500" />
          </button>

          <button
            onClick={onShare}
            className="p-3 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group"
            title="Share Property"
          >
            <Share2 className="w-6 h-6 text-gray-600 group-hover:text-blue-500" />
          </button>

          <button
            onClick={onPrint}
            className="p-3 border-2 border-gray-300 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all group"
            title="Print Details"
          >
            <Printer className="w-6 h-6 text-gray-600 group-hover:text-orange-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
