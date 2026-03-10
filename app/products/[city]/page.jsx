'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Grid, List } from 'lucide-react';
import PropertyGrid from '@/components/PropertyGrid';
import FilterSidebar from '@/components/FilterSidebar';
import ContactForm from '@/components/ContactForm';

export default function PropertyCityPage() {
  const params = useParams();
  const city = params?.city || 'noida';

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(true);

  // Dummy data - Replace with API call
  const dummyProperties = [
    {
      id: 1,
      image: '/images/property1.jpg',
      title: 'Experion Sector 151',
      location: 'Noida Sector 151',
      priceLabel: '₹On Request',
      area: '2616-4200 Sq.ft.',
      tags: ['Residential', 'For New Launch'],
      isFeatured: false,
    },
    {
      id: 2,
      image: '/images/property2.jpg',
      title: 'Godrej Riverine Noida',
      location: 'Sec 44 Noida',
      priceLabel: '₹7.99 Cr*',
      area: '2616-4200 Sq.ft.',
      tags: ['Residential', 'For Under Construction'],
      isFeatured: false,
    },
    {
      id: 3,
      image: '/images/property3.jpg',
      title: 'Experion Elements Noida',
      location: 'Noida sec 45',
      priceLabel: '₹6.50-7.69 Cr*',
      area: '2975-3530 Sq.ft.',
      tags: ['Residential', 'For Under Construction'],
      isFeatured: true,
    },
    {
      id: 4,
      image: '/images/property4.jpg',
      title: 'M3M Cullinan Noida',
      location: 'Sector 94 Noida',
      priceLabel: '₹9.28-18.04 Cr*',
      area: '3200 - 6920 Sq.ft.',
      tags: ['Residential', 'For Under Construction'],
      isFeatured: false,
    },
  ];

  // Fetch properties on mount
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProperties(dummyProperties);
      setFilteredProperties(dummyProperties);
      setLoading(false);
    }, 500);
  }, [city]);

  // Handle filter changes
  const handleFilterChange = (filters) => {
    let filtered = [...properties];

    // Search filter
    if (filters.search) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // Status filter
    if (filters.status) {
      filtered = filtered.filter((p) =>
        p.tags.some((tag) => tag.toLowerCase().includes(filters.status))
      );
    }

    // Type filter
    if (filters.type) {
      filtered = filtered.filter((p) =>
        p.tags.some((tag) => tag.toLowerCase().includes(filters.type))
      );
    }

    // City filter
    if (filters.city) {
      filtered = filtered.filter((p) =>
        p.location.toLowerCase().includes(filters.city)
      );
    }

    setFilteredProperties(filtered);
  };

  // Handle sort
  const handleSort = (value) => {
    setSortBy(value);
    let sorted = [...filteredProperties];

    switch (value) {
      case 'newest':
        sorted.reverse();
        break;
      case 'price-low':
        sorted.sort((a, b) => a.id - b.id);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    setFilteredProperties(sorted);
  };

  // Handle property click
  const handlePropertyClick = (property) => {
    console.log('Property clicked:', property);
    // Navigate to property details page
    // router.push(`/property/${property.id}`);
  };

  // Handle contact form submit
  const handleContactSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    alert('Thank you! Our team will contact you soon.');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading properties...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-orange-600 to-red-900 text-white py-16 px-4"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(234, 88, 12, 0.9), rgba(127, 29, 29, 0.9))',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Property City: {city.charAt(0).toUpperCase() + city.slice(1)}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar - Left */}
          <div className="lg:col-span-1">
            <FilterSidebar onFilterChange={handleFilterChange} />
          </div>

          {/* Properties Grid - Middle */}
          <div className="lg:col-span-2">
            {/* View Toggle & Sort */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-gray-100'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => handleSort(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Properties */}
            {filteredProperties.length === 0 ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-gray-600 text-lg">No properties found matching your criteria.</p>
              </div>
            ) : (
              <PropertyGrid
                properties={filteredProperties}
                columns={viewMode === 'grid' ? 1 : 1}
                onPropertyClick={handlePropertyClick}
                onFavorite={(property) => console.log('Favorited:', property)}
                onShare={(property) => console.log('Shared:', property)}
              />
            )}
          </div>

          {/* Contact Form - Right */}
          <div className="lg:col-span-1">
            <ContactForm onSubmit={handleContactSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}