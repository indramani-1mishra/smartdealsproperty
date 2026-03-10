import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const FeaturedPropertyCard = ({ property, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer mb-4"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {property.tag && (
          <span className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded">
            {property.tag}
          </span>
        )}
      </div>

      <div className="p-4">
        <h4 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">
          {property.title}
        </h4>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{property.location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-orange-600 font-bold">{property.price}</span>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </div>
  );
};

const FeaturedPropertiesSidebar = ({ properties = [], onPropertyClick }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-6 border-b-4 border-orange-500 pb-2 inline-block">
        Featured Properties
      </h3>

      <div className="space-y-4">
        {properties.map((property) => (
          <FeaturedPropertyCard
            key={property.id}
            property={property}
            onClick={() => onPropertyClick?.(property)}
          />
        ))}
      </div>

      {properties.length === 0 && (
        <p className="text-gray-500 text-center py-8">
          No featured properties available
        </p>
      )}
    </div>
  );
};

export default FeaturedPropertiesSidebar;
