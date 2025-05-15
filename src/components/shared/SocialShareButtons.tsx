import React from 'react';
import { Facebook, Twitter, Share2 } from 'lucide-react';

interface SocialShareButtonsProps {
  url?: string;
  title?: string;
  description?: string;
  className?: string;
  path?: string; // Optional path to use for production URL
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({
  url,
  title = 'Check out this game on Ramakrishna Centre, Johannesburg',
  description = 'I found this interesting game on the Ramakrishna Centre, Johannesburg website.',
  className = '',
  path,
}) => {
  // Determine the URL to share
  const getShareUrl = () => {
    // If a specific URL is provided, use that
    if (url) return url;

    // If we're in a local/development environment and a path is provided,
    // construct a production URL to share instead of localhost
    if (window.location.hostname === 'localhost' && path) {
      return `https://ramakrishna-johannesburg.org.za${path}`;
    }

    // Otherwise use the current URL
    return window.location.href;
  };

  const shareUrl = getShareUrl();

  // Encode parameters for sharing
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  // Share URLs for different platforms
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;

  // Function to handle share button clicks
  const handleShareClick = (shareUrl: string) => {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      <span className="text-sm text-gray-600 mr-1">Share:</span>

      {/* Facebook */}
      <button
        onClick={() => handleShareClick(facebookShareUrl)}
        className="p-2 sm:p-2.5 rounded-full bg-spiritual-50 hover:bg-spiritual-100 text-spiritual-600 transition-colors shadow-sm"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <Facebook size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
      </button>

      {/* Twitter */}
      <button
        onClick={() => handleShareClick(twitterShareUrl)}
        className="p-2 sm:p-2.5 rounded-full bg-spiritual-50 hover:bg-spiritual-100 text-spiritual-600 transition-colors shadow-sm"
        aria-label="Share on Twitter"
        title="Share on Twitter"
      >
        <Twitter size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
      </button>

      {/* WhatsApp - More prominent on mobile */}
      <button
        onClick={() => handleShareClick(whatsappShareUrl)}
        className="p-2 sm:p-2.5 rounded-full bg-green-50 hover:bg-green-100 text-green-600 transition-colors shadow-sm"
        aria-label="Share on WhatsApp"
        title="Share on WhatsApp"
      >
        <Share2 size={18} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
      </button>
    </div>
  );
};

export default SocialShareButtons;
