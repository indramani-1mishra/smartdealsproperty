'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Himanshu Gupta',
    role: 'IT Analyst',
    image: '/testimonials/himanshu.jpg',
    review:
      "I bought a property from Mr. Abhishek Gupta at Property Buddy. He was transparent, professional, and clearly explained all details—pros and cons. The process was smooth, and he's been helpful even post-sale. Highly recommend Property Buddy—a trustworthy agency!",
  },
  {
    id: 2,
    name: 'Sonam Gupta',
    role: 'Principal',
    image: '/testimonials/sonam.jpg',
    review:
      'I am very impressed with Mr. Abhishek—he is a genuine and helpful person who ensures a smooth and transparent property-buying experience. Highly recommended!',
  },
  {
    id: 3,
    name: 'Priyank Omer',
    role: 'Operations Head',
    image: '/testimonials/priyank.jpg',
    review:
      'I, Priyank Omer had a wonderful experience with the real estate services provided. The agent was professional, knowledgeable, and guided me at every step. They understood my needs well and helped me find the perfect property. Highly recommended',
  },
  {
    id: 4,
    name: 'Ravi Sharma',
    role: 'Software Engineer',
    image: '/testimonials/ravi.jpg',
    review:
      'Excellent service and great support throughout the buying process. Property Buddy made everything seamless and stress-free. Would definitely recommend to friends and family.',
  },
  {
    id: 5,
    name: 'Anjali Mehta',
    role: 'Business Owner',
    image: '/testimonials/anjali.jpg',
    review:
      'Very professional team. They helped me find the perfect commercial space for my business. The entire process was transparent and hassle-free.',
  },
  {
    id: 6,
    name: 'Deepak Verma',
    role: 'Doctor',
    image: '/testimonials/deepak.jpg',
    review:
      'Property Buddy provided exceptional service. Their knowledge of the local market is outstanding. I found my dream home thanks to their expert guidance.',
  },
  {
    id: 7,
    name: 'Neha Singh',
    role: 'Teacher',
    image: '/testimonials/neha.jpg',
    review:
      'I had a great experience with Property Buddy. They were patient, understanding, and found exactly what I was looking for within my budget. Highly recommended!',
  },
];

const CARDS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(testimonials.length / CARDS_PER_PAGE);
const AUTO_INTERVAL = 4000;

// Avatar placeholder — shows initials with orange background
function AvatarPlaceholder({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#C95E2B] rounded-full">
      <span className="text-white font-bold text-lg select-none">{initials}</span>
    </div>
  );
}

function TestimonialAvatar({ src, name }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-100">
      {!imgError ? (
        <Image
          src={src}
          alt={name}
          width={56}
          height={56}
          className="object-cover w-full h-full"
          onError={() => setImgError(true)}
        />
      ) : (
        <AvatarPlaceholder name={name} />
      )}
    </div>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-10 h-10 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <TestimonialAvatar src={testimonial.image} name={testimonial.name} />
          <div>
            <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.role}</p>
          </div>
        </div>
        <QuoteIcon />
      </div>

      {/* Review text */}
      <p className="text-gray-600 text-sm leading-relaxed">{testimonial.review}</p>
    </div>
  );
}

export default function CustomerReview() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (page) => {
      if (isAnimating || page === currentPage) return;
      setIsAnimating(true);
      setCurrentPage(page);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, currentPage]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((currentPage + 1) % TOTAL_PAGES);
    }, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [currentPage, goTo]);

  const visibleCards = testimonials.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section className="bg-gray-50 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-10">
          Customer Testimonials
        </h2>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-400 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {visibleCards.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Page ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentPage
                  ? 'w-8 h-3 bg-[#C95E2B]'
                  : 'w-3 h-3 bg-[#C95E2B]/30 hover:bg-[#C95E2B]/60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}