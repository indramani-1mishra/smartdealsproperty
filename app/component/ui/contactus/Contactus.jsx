'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaCar, FaTree, FaPlane } from 'react-icons/fa';

const CAPTCHA_ITEMS = [
  { icon: FaCar, label: 'car' },
  { icon: FaTree, label: 'tree' },
  { icon: FaPlane, label: 'plane' },
];

export default function Contactus() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [agreed, setAgreed] = useState(false);
  const [selectedCaptcha, setSelectedCaptcha] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const correctCaptcha = 'plane';

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name required';
    if (!form.email.trim()) e.email = 'Email required';
    if (!form.phone.trim()) e.phone = 'Phone required';
    if (!agreed) e.agreed = 'Please accept terms';
    if (selectedCaptcha !== correctCaptcha) e.captcha = 'Please select the correct option';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Request a Callback
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            Searching for a home that brings joy or a property that brings wealth? Contact us – Unlock Unreal Deals in Real Estate!
          </p>
        </div>

        {/* Two column layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left — Image */}
          <div className="lg:w-1/2 w-full rounded-xl overflow-hidden min-h-[320px] relative">
            <Image
              src="/propertyimage/contactimage.webp"
              alt="Property View"
              fill
              className="object-cover"
            />
          </div>

          {/* Right — Contact Form Card */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
                Contact Us
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 gap-3">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-semibold text-lg">Thank you! We'll call you soon.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-5">

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 focus:border-[#C95E2B] focus:outline-none pb-2 text-gray-700 placeholder-gray-400 text-sm transition-colors"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 focus:border-[#C95E2B] focus:outline-none pb-2 text-gray-700 placeholder-gray-400 text-sm transition-colors"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border-0 border-b border-gray-300 focus:border-[#C95E2B] focus:outline-none pb-2 text-gray-700 placeholder-gray-400 text-sm transition-colors"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Terms */}
                  <div>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 accent-[#C95E2B]"
                      />
                      <span className="text-sm text-gray-600">
                        I accept terms of use &{' '}
                        <a href="/privacy-policy" className="text-[#C95E2B] hover:underline">
                          privacy policy
                        </a>
                      </span>
                    </label>
                    {errors.agreed && <p className="text-red-500 text-xs mt-1">{errors.agreed}</p>}
                  </div>

                  {/* Captcha */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-3">
                      Please prove you are human by selecting the{' '}
                      <strong>plane</strong>.
                    </p>
                    <div className="flex items-center justify-center gap-6">
                      {CAPTCHA_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => setSelectedCaptcha(item.label)}
                            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all border-2 ${
                              selectedCaptcha === item.label
                                ? 'border-[#C95E2B] bg-orange-50 scale-110 text-[#C95E2B]'
                                : 'border-gray-200 hover:border-gray-400 text-gray-500'
                            }`}
                            aria-label={item.label}
                          >
                            <Icon className="w-5 h-5 text-xl" />
                          </button>
                        );
                      })}
                    </div>
                    {errors.captcha && <p className="text-red-500 text-xs mt-2 text-center">{errors.captcha}</p>}
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-3 border-2 border-[#C95E2B] text-[#C95E2B] font-semibold text-base rounded-md hover:bg-[#C95E2B] hover:text-white transition-all duration-200"
                  >
                    Submit
                  </button>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}