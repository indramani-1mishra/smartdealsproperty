import React, { useState } from 'react';
import { Star, Coffee, Plane } from 'lucide-react';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    acceptTerms: false,
    captcha: '',
  });

  const [selectedCaptcha, setSelectedCaptcha] = useState(null);

  const captchaOptions = [
    { id: 'star', icon: Star, label: 'Star' },
    { id: 'coffee', icon: Coffee, label: 'Coffee' },
    { id: 'plane', icon: Plane, label: 'Plane' },
  ];

  // Randomly select correct captcha (for demo, it's "coffee" - cup)
  const correctCaptcha = 'coffee';

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill all fields');
      return;
    }

    if (!formData.acceptTerms) {
      alert('Please accept terms of use & privacy policy');
      return;
    }

    if (selectedCaptcha !== correctCaptcha) {
      alert('Please select the cup to verify you are human');
      return;
    }

    onSubmit?.(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
      <h3 className="text-2xl font-bold mb-6 border-b-4 border-orange-500 pb-2 inline-block">
        Contact Our Real Estate Experts
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
        />

        {/* Phone Input */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
        />

        {/* Terms Checkbox */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            checked={formData.acceptTerms}
            onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
            className="mt-1 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I accept terms of use &{' '}
            <a href="/privacy-policy" className="text-orange-600 hover:underline">
              privacy policy
            </a>
          </label>
        </div>

        {/* Captcha */}
        <div className="border-2 border-gray-300 rounded-lg p-4">
          <p className="text-sm text-gray-700 mb-3">
            Please prove you are human by selecting the <strong>cup</strong>.
          </p>
          <div className="flex justify-center gap-4">
            {captchaOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setSelectedCaptcha(option.id)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    selectedCaptcha === option.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 hover:border-orange-300'
                  }`}
                >
                  <Icon 
                    className={`w-8 h-8 ${
                      selectedCaptcha === option.id ? 'text-orange-600' : 'text-gray-600'
                    }`} 
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
