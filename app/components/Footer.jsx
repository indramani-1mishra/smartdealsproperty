'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaBuilding, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter, FaArrowRight } from 'react-icons/fa6';

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Property in Noida', href: '/products/noida' },
  { label: 'Property in Greater Noida', href: '/products/greater-noida' },
  { label: 'Property in Greater Noida West', href: '/products/greater-noida-west' },
];

const quickLinks = [
  { label: 'New Launches', href: '/properties/new-launches' },
  { label: 'Under Construction', href: '/properties/under-construction', highlight: true },
  { label: 'Upcoming', href: '/properties/upcoming' },
  { label: 'Residential', href: '/properties/residential' },
  { label: 'Commercial', href: '/properties/commercial' },
  { label: 'Plot', href: '/properties/plot' },
];

const popularSearch = [
  { label: 'Noida', href: '/products/noida' },
  { label: 'Greater Noida', href: '/products/greater-noida' },
  { label: 'Greater Noida West', href: '/products/greater-noida-west' },
  { label: 'Ghaziabad', href: '/products/ghaziabad' },
  { label: 'Yamuna Expressway', href: '/products/yamuna-expressway' },
  { label: 'Godrej Arden Greater Noida', href: '/products/godrej-arden' },
];

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaXTwitter, href: 'https://x.com', label: 'X' },
];

function FooterLinkList({ links }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={`flex items-center gap-2 text-sm transition-colors duration-200 group ${
              link.highlight
                ? 'text-[#C95E2B]'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <FaArrowRight className="w-3 h-3 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative bg-gray-950 text-white overflow-hidden"
      style={{
        backgroundImage: 'url(/footer/city-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Logo + Contact */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/headerimages/logo.jpeg"
                alt="Property Buddy Logo"
                width={180}
                height={60}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+918010994444"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <FaPhone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                8010994444
              </a>
              <a
                href="mailto:info@propertybuddyrealtors.com"
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="w-4 h-4 text-gray-400 flex-shrink-0" />
                info@propertybuddyrealtors.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <FaBuilding className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <span>BGF7 Tower- B, ATS Bouquet, Sector 132 Noida UP - 201304</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors duration-200"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2 — Company */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">Company</h4>
            <FooterLinkList links={companyLinks} />
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">Quick Links</h4>
            <FooterLinkList links={quickLinks} />
          </div>

          {/* Col 4 — Popular Search */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5">Popular Search</h4>
            <FooterLinkList links={popularSearch} />
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 bg-[#C95E2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-white text-center">
          <span>© 2025 All Rights Reserved</span>
          <span className="hidden sm:inline">|</span>
          <Link href="/terms" className="hover:underline">Terms & Condition</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}