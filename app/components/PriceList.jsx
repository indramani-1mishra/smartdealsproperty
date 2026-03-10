import React from 'react';

const PriceListCard = ({ unit, price, size, status = 'Available' }) => {
  const isSoldOut = status.toLowerCase() === 'sold out';

  return (
    <div
      className={`bg-gray-50 rounded-lg p-6 transition-all hover:shadow-lg ${
        isSoldOut ? 'opacity-70' : ''
      }`}
    >
      {/* Unit Type */}
      <h3 className="text-2xl font-bold text-orange-600 mb-4">{unit}</h3>

      {/* Price */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm mb-1">Price</p>
        <p className="text-xl font-semibold text-gray-900">{price}</p>
      </div>

      {/* Size */}
      <div className="mb-4">
        <p className="text-gray-600 text-sm mb-1">Size</p>
        <p className="text-lg font-medium text-gray-900">{size}</p>
      </div>

      {/* Divider */}
      <div className="border-t-2 border-dashed border-gray-300 my-4"></div>

      {/* Status */}
      <div className="flex items-center justify-between">
        <span
          className={`px-4 py-2 rounded-lg font-semibold ${
            isSoldOut
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {status}
        </span>

        {!isSoldOut && (
          <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-colors">
            Enquire Now
          </button>
        )}
      </div>
    </div>
  );
};

const PriceList = ({ units = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Unit <span className="text-orange-600">Price List</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {units.map((unit, index) => (
          <PriceListCard
            key={index}
            unit={unit.unit}
            price={unit.price}
            size={unit.size}
            status={unit.status}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceList;
