import {React,useEffect,useState} from 'react';
import {

  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LineShareButton,
  LineIcon,
  EmailShareButton,
  EmailIcon,
  InstagramIcon,
} from 'react-share';
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';
import './Admin_approval.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import copy from 'clipboard-copy';
import { useNavigate, Link, useLocation } from "react-router-dom";


const SocialShareModal = ({ isOpen, onClose, shareUrl, title, location1, closingDate, eventId}) => {
  const eventURL = `https://app.creativedignity.org/EventIndividual/${eventId}`; 
  const [textToCopy, setTextToCopy] = useState(eventURL);
  
  if (!isOpen) {
    return null;
  }

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
};


const handleShare = (network) => {
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
  }


  return (
    <div className='social-share-overlay'>
      <div className='social-share-modal'>
        <div className='social-header'>
          <button className='close-button' onClick={onClose}>X</button>
        </div>

        <div className='social-share-content'>
          <div className='social-icons-container mt-1'>
            <FacebookShareButton url={shareUrl} title={`Check out this event \nTitle: ${title}\nLocation: ${location1}\Starting Date: ${closingDate}}`}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={`Check out this event \nTitle: ${title}\nLocation: ${location1}\Starting Date: ${closingDate}}`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <LinkedinShareButton url={shareUrl} title={`Check out this event \nTitle: ${title}\nLocation: ${location1}\Starting Date: ${closingDate}}`}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>

            <WhatsappShareButton url={shareUrl} title={`Check out this event \nTitle: ${title}\nLocation: ${location1}\Starting Date: ${closingDate}}`}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>

            <EmailShareButton url={shareUrl} title={`Check out this event \nTitle: ${title}\nLocation: ${location1}\Starting Date: ${closingDate}}`}>
              <EmailIcon size={32} round />
            </EmailShareButton>
 


<div className='round-icon' style={{ fontSize: '15px' }}>
  <FontAwesomeIcon icon={faCopy} onClick={handleCopyText} />
</div>

            {/* 
             */}
          </div>
        </div>
      </div>
    </div>
  );
};

function handleInstagramShare(sharedData) {
  const { imageUrl, caption } = sharedData;

  // Construct Instagram share URL
  const instagramUrl = `https://www.instagram.com/share?url=${imageUrl}&caption=${caption}`;

  // Open Instagram share URL in a new tab
  window.open(instagramUrl, '_blank');
}

export default SocialShareModal;