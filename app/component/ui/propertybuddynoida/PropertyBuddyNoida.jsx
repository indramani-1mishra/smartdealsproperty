'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const properties = [
  {
    id: 1,
    image: '/propertyimage/propertyimage.webp',
    badge: 'Featured',
    type: 'Commercial',
    status: 'For New Launch',
    location: 'Greater Noida',
    title: 'Godrej Avenue 9 Sector 27 Greater Noida',
    area: '400-600-1000 Sq.ft.',
    href: '/properties/godrej-avenue9',
  },
  {
    id: 2,
    image: '/propertyimage/propertyimage.webp',
    badge: 'Featured',
    type: 'Residential',
    status: 'For Under Construction',
    location: 'Noida',
    title: 'Experion Elements Noida',
    area: '2975-3530 Sq.ft.',
    href: '/properties/experion-elements',
  },
  {
    id: 3,
   image: '/propertyimage/propertyimage.webp',
    badge: 'Featured',
    type: 'Residential',
    status: 'For New Launch',
    location: 'Greater Noida West',
    title: 'Godrej Majesty Sector 12 Greater Noida West',
    area: '1754-2503-2799 Sq.ft.',
    href: '/properties/godrej-majesty',
  },
  {
    id: 4,
    image: '/propertyimage/propertyimage.webp',
    badge: 'Featured',
    type: 'Villa',
    status: 'For Ready to Move in',
    location: 'Noida',
    title: 'Luxury Villa Sector 150 Noida',
    area: '3200-4500 Sq.ft.',
    href: '/properties/luxury-villa',
  },
  {
    id: 5,
    image: '/propertyimage/propertyimage.webp',
    badge: 'Featured',
    type: 'Commercial',
    status: 'For New Launch',
    location: 'Greater Noida',
    title: 'Premium Commercial Space Greater Noida',
    area: '500-1000-2000 Sq.ft.',
    href: '/properties/commercial-space',
  },
  {
    id: 6,
     image: '/propertyimage/propertyimage.webp',
    badge: 'Featured',
    type: 'Residential',
    status: 'For New Launch',
    location: 'Yamuna Expressway',
    title: 'Modern Apartments Yamuna Expressway',
    area: '1200-1800-2400 Sq.ft.',
    href: '/properties/modern-apartments',
  },
];

// Badge color mapping
const typeColors = {
  Commercial: 'bg-orange-500',
  Residential: 'bg-orange-500',
  Villa: 'bg-orange-500',
  Plot: 'bg-orange-500',
};

const statusColors = {
  'For New Launch': 'bg-green-500',
  'For Under Construction': 'bg-blue-500',
  'For Ready to Move in': 'bg-green-500',
};

function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);

  return (
    <Link href={property.href} className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative h-64 w-full overflow-hidden">
        {/* Image */}
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Featured ribbon */}
        {property.badge && (
          <div className="absolute top-0 left-0 z-10">
            <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rotate-[-45deg] translate-x-[-18px] translate-y-[10px] w-[80px] text-center shadow">
              {property.badge}
            </div>
          </div>
        )}

        {/* Type + Status tags */}
        <div className="absolute top-3 left-8 flex gap-2 z-10">
          <span className={`text-white text-xs font-semibold px-3 py-1 rounded-sm ${typeColors[property.type] || 'bg-orange-500'}`}>
            {property.type}
          </span>
          <span className={`text-white text-xs font-semibold px-3 py-1 rounded-sm ${statusColors[property.status] || 'bg-green-500'}`}>
            {property.status}
          </span>
        </div>

        {/* Like + Compare icons */}
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <button
            onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow transition-colors"
            aria-label="Like"
          >
            <svg className={`w-4 h-4 transition-colors ${liked ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </button>
          <button
            onClick={(e) => e.preventDefault()}
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow transition-colors"
            aria-label="Compare"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </button>
        </div>

        {/* Bottom text on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          {/* Location */}
          <div className="flex items-center gap-1 text-white/80 text-xs mb-1">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.location}
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-base leading-snug line-clamp-2">
            {property.title}
          </h3>

          {/* Divider */}
          <div className="border-t border-white/30 mt-2 pt-2">
            <p className="text-white/90 text-sm font-medium">{property.area}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function PropertyBuddyNoida() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Property Buddy Noida
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">
            Explore our finest selection of luxury houses, apartments, townhomes, penthouses, and more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

      </div>
    </section>
  );
}