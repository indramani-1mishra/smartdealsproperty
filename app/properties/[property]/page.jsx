'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import PropertyHeader from '@/components/PropertyHeader';
import PropertyImageGallery from '@/components/PropertyImageGallery';
import PropertyDescription from '@/components/PropertyDescription';
import PriceList from '@/components/PriceList';
import DownloadBrochure from '@/components/DownloadBrochure';
import ContactForm from '@/components/ContactForm';
import FilterSidebar from '@/components/FilterSidebar';


export default function PropertyDetailPage() {
  const params = useParams();
  const router = useRouter();
  const propertyId = params?.property;

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dummy property data - Replace with API call
  const dummyProperty = {
    id: propertyId,
    title: propertyId,
    location: 'Sigma 3, Greater Noida',
    launchDate: 'November 16, 2025',
    status: 'For New Launch',
    
    images: [
      '/propertyimage/propertyimage.webp',
      '/propertyimage/propertyimage.webp',
     '/propertyimage/propertyimage.webp',
      '/propertyimage/propertyimage.webp',
    ],
    description: `Godrej Arden – Living brings you a lush green paradise in the heart of Greater Noida. This premium 9.58-acre low-density development is surrounded by a 10-acre green belt, offering open views with no high-rise buildings nearby. Enjoy excellent connectivity to Pari Chowk and Yamuna Expressway, along with strong capital appreciation and rental potential driven by the Jewar Airport influence zone. Choose from spacious 2, 3, and 4 BHK configurations designed for serene, modern living in Sigma III, Greater Noida.

Godrej Arden at Sigma 3, Greater Noida is one of the most awaited premium residential projects in Greater Noida by Godrej Properties, offering luxury homes designed for serenity and modern lifestyle. Godrej Arden brings you an exclusive living experience surrounded by lush greenery in a spacious low-density neighborhood, making it a standout choice for homebuyers looking for quality, comfort, and connectivity in Greater Noida real estate.

Located just minutes from Pari Chowk and with excellent access to the Yamuna Expressway and Noida-Greater Noida Expressway, Godrej Arden Greater Noida ensures seamless travel to major employment hubs and lifestyle destinations. The project's strategic location near the upcoming Jewar International Airport adds immense value to the project, especially with the upcoming Jewar International Airport influence zone set to boost property appreciation.

Designed with thoughtful layouts, Godrej Arden offers well-planned 2, 3, and 4 BHK apartments that cater to every family size and lifestyle. Modern features such as smart home automation, landscaped gardens, jogging tracks, and world-class amenities like swimming pools, clubhouses, gymnasiums, and children's play areas make this project a top choice for comfortable living in Greater Noida housing market.`,
    highlights: [
      '9.58-acre premium low-density development',
      '10-acre green belt surrounding the project',
      'Excellent connectivity to Pari Chowk and Yamuna Expressway',
      'Strong capital appreciation potential',
      'Jewar Airport influence zone',
      'Spacious 2, 3, and 4 BHK apartments',
      'Smart home automation',
      'World-class amenities',
      'Eco-friendly design with rainwater harvesting',
      'EV charging stations',
    ],
    units: [
      {
        unit: '2 BHK + Study',
        price: '₹ 1.90 Cr+ Onwards',
        size: '1380 Sq. ft.',
        status: 'Sold out',
      },
      {
        unit: '3 BHK',
        price: '₹ 2.20 Cr+- 2.72 Cr+',
        size: '1880 Sq. ft.',
        status: 'Available',
      },
      {
        unit: '3 BHK + Study',
        price: '₹ 2.52 Cr+ – 3.03 Cr+',
        size: '2110 Sq. ft.',
        status: 'Available',
      },
      {
        unit: '3 BHK + SR',
        price: '₹ 2.85 Cr+- 3.55 Cr+',
        size: '2400 Sq. ft.',
        status: 'Available',
      },
      {
        unit: '4 BHK',
        price: '₹ 3.50 Cr+ – 4.20 Cr+',
        size: '2800 Sq. ft.',
        status: 'Available',
      },
      {
        unit: '4 BHK + Servant',
        price: '₹ 4.50 Cr+ – 5.20 Cr+',
        size: '3200 Sq. ft.',
        status: 'Available',
      },
    ],
    brochureUrl: '/brochures/godrej-arden.pdf',
  };

  // Dummy featured properties
  const featuredProperties = [
    {
      id: 'experion-sector-151',
      title: 'Experion Sector 151',
      location: 'Noida Sector 151',
      price: '₹On Request',
      image: '/images/property1.jpg',
      tag: 'New Launch',
    },
    {
      id: 'godrej-riverine',
      title: 'Godrej Riverine Noida',
      location: 'Sec 44 Noida',
      price: '₹7.99 Cr*',
      image: '/images/property2.jpg',
      tag: 'Featured',
    },
    {
      id: 'm3m-cullinan',
      title: 'M3M Cullinan Noida',
      location: 'Sector 94 Noida',
      price: '₹9.28 Cr*',
      image: '/images/property4.jpg',
      tag: 'Premium',
    },
  ];

  // Fetch property details
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProperty(dummyProperty);
      setLoading(false);
    }, 500);
  }, [propertyId]);

  // Handlers
  const handleFavorite = () => {
    console.log('Added to favorites');
    alert('Added to favorites! ❤️');
  };

  const handleShare = () => {
    console.log('Share property');
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out ${property.title} at ${property.location}`,
        url: window.location.href,
      });
    } else {
      alert('Link copied to clipboard!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleContactSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    alert('Thank you! Our team will contact you soon.');
  };

  const handlePropertyClick = (property) => {
    router.push(`/properties/${property.id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading property details...</div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property not found</h2>
          <button
            onClick={() => router.push('/products/noida')}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Properties
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Property Header */}
        <PropertyHeader
          title={property.title}
          location={property.location}
          launchDate={property.launchDate}
          onFavorite={handleFavorite}
          onShare={handleShare}
          onPrint={handlePrint}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Filters (Hidden on property detail, shown for consistency) */}
          <div className="lg:col-span-1 hidden lg:block">
            <FilterSidebar onFilterChange={() => {}} />
          </div>

          {/* Middle Column - Property Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <PropertyImageGallery images={property.images} />

            {/* Property Description */}
            <PropertyDescription
              status={property.status}
              description={property.description}
              highlights={property.highlights}
            />

            {/* Download Brochure */}
            <DownloadBrochure
              brochureUrl={property.brochureUrl}
              propertyName={property.title}
            />

            {/* Price List */}
            <PriceList units={property.units} />
          </div>

          {/* Right Column - Contact Form & Featured Properties */}
          <div className="lg:col-span-1 space-y-6">
            <ContactForm onSubmit={handleContactSubmit} />
           
          </div>
        </div>
      </div>

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed right-4 bottom-4 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/918010994444"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg transition-all"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>

        <a
          href="tel:8010994444"
          className="bg-orange-500 hover:bg-orange-600 p-4 rounded-full shadow-lg transition-all"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
