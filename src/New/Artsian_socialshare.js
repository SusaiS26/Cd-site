import {React,useEffect,useState} from 'react';
import css from '../../src/New/Admin_approval.css'
// import instagram from '../../src/Images/instagram.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import copy from 'clipboard-copy';
import Images from '../Images/Imagespic';
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
  InstagramShareButton,
  InstagramIcon,
  EmailIcon,
  EmailShareButton,

} from 'react-share';


const SocialArtisanShareModal = ({ isOpen, onClose, shareUrl, title,artisan_id}) => {
  const eventURL = `https://app.creativedignity.org/Artisanpage/${artisan_id}`; 
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
}
    return (
        <div className='col-md-4'>    
          <div className='social-share-overlay'>
         
        <div className='social-share-modal'>
        <button className='but-share' onClick={onClose}>X</button>
        
  <div>
          <div className='social-share-content'>
            <div className='social-icons-container mt-5' style={{paddingLeft:'0px'}}>
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
  
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
  
              <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
  
              <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>

              <EmailShareButton url={shareUrl} title={title}>
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
      </div>

    );
  };
  
  export default  SocialArtisanShareModal;