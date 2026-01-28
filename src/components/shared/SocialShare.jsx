import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';
import { FiShare2 } from 'react-icons/fi';

const SocialShare = ({ 
  url, 
  title, 
  description, 
  hashtags = ['RoofMasterNG', 'RoofingNigeria', 'Construction'],
  size = 40,
  borderRadius = 8
}) => {
  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;
  const shareDescription = description || 'Check out this roofing solution from RoofMaster Nigeria';

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-50 rounded-xl">
      <div className="flex items-center space-x-2">
        <FiShare2 className="w-5 h-5 text-gray-600" />
        <span className="font-semibold text-gray-800">Share This Page</span>
      </div>
      
      <div className="flex space-x-4">
        <FacebookShareButton
          url={shareUrl}
          quote={shareDescription}
          hashtag={hashtags[0]}
        >
          <FacebookIcon size={size} round borderRadius={borderRadius} />
        </FacebookShareButton>
        
        <TwitterShareButton
          url={shareUrl}
          title={shareTitle}
          hashtags={hashtags}
        >
          <TwitterIcon size={size} round borderRadius={borderRadius} />
        </TwitterShareButton>
        
        <LinkedinShareButton
          url={shareUrl}
          title={shareTitle}
          summary={shareDescription}
          source="RoofMaster Nigeria"
        >
          <LinkedinIcon size={size} round borderRadius={borderRadius} />
        </LinkedinShareButton>
        
        <WhatsappShareButton
          url={shareUrl}
          title={shareTitle}
          separator=":: "
        >
          <WhatsappIcon size={size} round borderRadius={borderRadius} />
        </WhatsappShareButton>
      </div>
      
      <div className="mt-4">
        <button
          onClick={() => navigator.clipboard.writeText(shareUrl)}
          className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default SocialShare;