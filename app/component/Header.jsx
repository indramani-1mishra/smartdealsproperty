'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'City',
    dropdown: [
      { label: 'Noida', href: '/city/noida' },
      { label: 'Greater Noida', href: '/city/greater-noida' },
      { label: 'Greater Noida West', href: '/city/greater-noida-west' },
      { label: 'Ghaziabad', href: '/city/ghaziabad' },
      { label: 'Yamuna Expressway', href: '/city/yamuna-expressway' },
    ],
  },
  {
    label: 'Properties',
    dropdown: [
      { label: 'Residential', href: '/properties/residential' },
      { label: 'Commercial', href: '/properties/commercial' },
      { label: 'Plot', href: '/properties/plot' },
    ],
  },
  {
    label: 'about',
    href: '/about',
  },
  {
    label: 'Career',
    href: '/career',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
];

const PHONE = '8010994444';
const PHONE_HREF = `tel:+91${PHONE}`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Mobile only: toggle accordion
  const toggleMobileDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        closeMenu();
      }
    };
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex-shrink-0">
          <Image
            src="/headerimages/logo.jpeg"
            alt="Property Buddy Logo"
            width={180}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav — hover dropdowns */}
        <nav className="hidden lg:flex items-center">
          {navLinks.map((item) =>
            item.dropdown ? (
              // "group" enables hover-based show/hide via CSS only
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 px-5 py-2 text-[15px] font-medium text-gray-600 group-hover:text-[#C95E2B] transition-colors duration-200">
                  {item.label}
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown — hidden by default, shown on group hover */}
                <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50
                                invisible opacity-0 translate-y-1
                                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-200 ease-out">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={closeMenu}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-orange-50 hover:text-[#C95E2B] transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="px-5 py-2 text-[15px] font-medium text-gray-600 hover:text-[#C95E2B] transition-colors duration-200"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Phone Button */}
        <a
          href={PHONE_HREF}
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-[#C95E2B] text-white text-[15px] font-semibold rounded-md hover:bg-[#b04f21] transition-colors duration-200 shadow-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
          </svg>
          {PHONE}
        </a>

        {/* Hamburger (mobile) */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-orange-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu — click based accordion */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-0.5">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-medium text-gray-600 rounded-md hover:bg-orange-50 hover:text-[#C95E2B] transition-colors"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`overflow-hidden transition-all duration-200 ${activeDropdown === item.label ? 'max-h-64' : 'max-h-0'}`}>
                  <div className="ml-4 border-l-2 border-orange-200 pl-3 mt-1 flex flex-col gap-0.5">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeMenu}
                        className="block px-3 py-2 text-sm text-gray-500 hover:text-[#C95E2B] hover:bg-orange-50 rounded-md transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block px-3 py-3 text-[15px] font-medium text-gray-600 rounded-md hover:bg-orange-50 hover:text-[#C95E2B] transition-colors"
              >
                {item.label}
              </Link>
            )
          )}

          {/* Mobile Phone Button */}
          <a
            href={PHONE_HREF}
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 bg-[#C95E2B] text-white text-[15px] font-semibold rounded-md hover:bg-[#b04f21] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
            </svg>
            {PHONE}
          </a>
        </nav>
      </div>
    </header>
  );
}