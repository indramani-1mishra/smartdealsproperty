import React from 'react';
import { Download } from 'lucide-react';

const DownloadBrochure = ({ brochureUrl, propertyName }) => {
  const handleDownload = () => {
    if (brochureUrl) {
      window.open(brochureUrl, '_blank');
    } else {
      alert('Brochure will be sent to your email!');
    }
  };

  return (
    <div className="my-8">
      <button
        onClick={handleDownload}
        className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
      >
        <Download className="w-6 h-6" />
        Download Brochure
      </button>
    </div>
  );
};

export default DownloadBrochure;
