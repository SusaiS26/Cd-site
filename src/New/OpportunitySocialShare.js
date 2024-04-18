import React,{useState} from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import copy from 'clipboard-copy';

const SocialOpportunityShareModal = ({ isOpen, onClose, shareUrl, title, location, closingDate,Opportunity_id }) => {
  const eventURL = `https://app.creativedignity.org/Opportunitiessummary/${Opportunity_id}`; 
  const [textToCopy, setTextToCopy] = useState(eventURL);

  if (!isOpen) {
    return null;
  }

  const handleShare = (network) => {
    // Construct the share text
    const shareText = `Check out this opportunity in ${location} closing on ${closingDate}: ${title}`;

    // Construct the share URL with the share text
    const constructedShareUrl = `${shareUrl}&text=${encodeURIComponent(shareText)}`;

    // Use the share URL based on the selected social network
    switch (network) {
      case 'facebook':
        // Handle Facebook sharing
        // Use the constructedShareUrl for the URL
        // You can customize the quote or other parameters as needed
        break;
      case 'twitter':
        // Handle Twitter sharing
        // Use the constructedShareUrl for the URL
        // You can customize the title or other parameters as needed
        break;
      case 'linkedin':
        // Handle LinkedIn sharing
        // Use the constructedShareUrl for the URL
        // You can customize the title or other parameters as needed
        break;
      case 'whatsapp':
        // Handle WhatsApp sharing
        // Use the constructedShareUrl for the URL
        // You can customize the title or other parameters as needed
        break;
      case 'email':
        // Handle email sharing
        // Use the constructedShareUrl for the URL
        // You can customize the title or other parameters as needed
        break;
      default:
        break;
    }

    // Close the modal after sharing
    onClose();
  };

  const handleCopyText = () => {
    if (textToCopy) {
      copy(textToCopy)
        .then(() => {
          alert('URL copied to clipboard');
        })
        .catch((err) => {
          console.error('Unable to copy URL: ', err);
        });
    }
  }

  return (
    <div className="social-share-overlay">
      <div className="social-share-modal">
        <button className="but-share" onClick={onClose}>
          X
        </button>
        <div>
          <div className="social-share-content">
            <div className="social-icons-container">
              <FacebookShareButton
                url={shareUrl}
                title={`Check out this opportunity \nTitle: ${title}\nLocation: ${location}\nClosing Date: ${closingDate}`}
                onClick={() => handleShare('facebook')}
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={shareUrl}
                title={`Check out this opportunity \nTitle: ${title}\nLocation: ${location}\nClosing Date: ${closingDate}`}
                onClick={() => handleShare('twitter')}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <LinkedinShareButton
                url={shareUrl}
                title={`Check out this opportunity \nTitle: ${title}\nLocation: ${location}\nClosing Date: ${closingDate}`}
                onClick={() => handleShare('linkedin')}
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>

              <WhatsappShareButton
                url={shareUrl}
                title={`Check out this opportunity \nTitle: ${title}\nLocation: ${location}\nClosing Date: ${closingDate}`}
                onClick={() => handleShare('whatsapp')}
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <EmailShareButton url={shareUrl}
                title={`Check out this opportunity \nTitle: ${title}\nLocation: ${location}\nClosing Date: ${closingDate}`}
                onClick={() => handleShare('email')}
              >
                <EmailIcon size={32} round />
              </EmailShareButton>

              <div className='round-icon' style={{ fontSize: '15px' }}>
                <FontAwesomeIcon icon={faCopy} onClick={handleCopyText} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialOpportunityShareModal;
