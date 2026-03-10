import React from 'react';

const PropertyDescription = ({ status, description, highlights = [] }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 border-b-4 border-orange-500 pb-2 inline-block">
        Property Description
      </h2>

      {/* Status Badge */}
      {status && (
        <div className="inline-block mt-4 mb-4">
          <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg border-2 border-dashed border-gray-400">
            {status}
          </span>
        </div>
      )}

      {/* Main Description */}
      <div className="prose max-w-none">
        {description.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed mb-4">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Highlights/Features */}
      {highlights.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Key Highlights</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">✓</span>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertyDescription;
