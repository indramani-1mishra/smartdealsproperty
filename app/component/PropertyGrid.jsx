import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyGrid = ({ 
  properties = [], 
  columns = 2, 
  onPropertyClick,
  onFavorite,
  onShare 
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6`}>
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          image={property.image}
          title={property.title}
          location={property.location}
          price={property.price}
          priceLabel={property.priceLabel}
          area={property.area}
          tags={property.tags}
          isFeatured={property.isFeatured}
          onCardClick={() => onPropertyClick?.(property)}
          onFavorite={() => onFavorite?.(property)}
          onShare={() => onShare?.(property)}
        />
      ))}
    </div>
  );
};

export default PropertyGrid;
