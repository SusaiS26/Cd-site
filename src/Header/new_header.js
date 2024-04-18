import React, { useEffect, useState } from 'react';
// import { Images } from '../../assets/Image';
import Imagespic from '../Images/Imagespic';
import '../Header/header.css';
import {
    FacebookShareButton, TwitterShareButton, LinkedinShareButton,
    WhatsappShareButton, InstagramShareButton, YoutubeShareButton,
} from 'react-share';

function Individual_Header() {
    const [navbarClass, setNavbarClass] = useState('');
    const [hasNavScrolledtext, sethasNavScrolledtext] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [scrollY1, setScrollY1] = useState(-25);
    const [menuOpen, setMenuOpen] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [hasScrolled, setHasScrolled] = useState(false);

    const defaultLogoImage = Imagespic.CDlogosymbol;
    const scrolledLogoImage = Imagespic.CDlogosymbol1;

    const handleScroll = () => {
        setScrollY(window.scrollY);
        setScrollY1(window.scrollY1);
        if (window.scrollY > 100) {
            setNavbarClass('navbar-yellow');
            sethasNavScrolledtext(true);
            setHasScrolled(true);
        } else {
            setNavbarClass('navbar-yellow');
            sethasNavScrolledtext(false);
            setHasScrolled(false);
        }
    };


    const toggleMenu = () => {
        setMenuOpen((menuopen) => menuOpen);
    };

    const openDropdownOnHover = (event) => {
        const dropdownItem = event.currentTarget.querySelector('.dropdown-menu');
        if (dropdownItem) {
            dropdownItem.classList.add('show');
        }
    };

    const closeDropdownOnLeave = (event) => {
        const dropdownItem = event.currentTarget.querySelector('.dropdown-menu');
        if (dropdownItem) {
            dropdownItem.classList.remove('show');
        }
    };

    return (
        <div>
            <div className="parallax-icons-container fixed-top">
                <div className="parallax-icons">
                    <LinkedinShareButton url={"https://www.linkedin.com/company/creativedignity/"} title={"linkedin"}>
                        <img
                            alt="LinkedIn"
                            src={Imagespic.linkedin}
                            width="20"
                            height="20"
                            className="header_icon_size1 mx-3 alignnone size-full wp-image-380 ls-is-cached lazyloaded"
                        />
                    </LinkedinShareButton>
                    <TwitterShareButton url={"https://twitter.com/creativedigniti"} title={"twitter"}>
                        <img
                            alt="Twitter"
                            src={Imagespic.twitter}
                            width="20"
                            height="20"
                            className="header_icon_size1 mx-3 alignnone size-full wp-image-380 ls-is-cached lazyloaded"
                        />
                    </TwitterShareButton>
                    <FacebookShareButton url={"https://www.facebook.com/creativedignity2020"} quote={"Facebook"}>
                        <img
                            alt="Facebook"
                            src={Imagespic.facebook}
                            width="20"
                            height="20"
                            className="header_icon_size1 alignnone mx-3 size-full wp-image-380 ls-is-cached lazyloaded"
                        />
                    </FacebookShareButton>
                    <a href="https://www.instagram.com/creativedignity" target="_blank" rel="noopener noreferrer">
                        <img
                            alt="Instagram"
                            src={Imagespic.instagram}
                            width="20"
                            height="20"
                            className="header_icon_size1 alignnone mx-3 size-full wp-image-380 ls-is-cached lazyloaded"
                        />
                    </a>
                    <a href="https://www.youtube.com/@creativedignity" target="_blank" rel="noopener noreferrer">
                        <img alt="youtube" width="20" height="20" data-src="https://www.creativedignity.org/wp-content/uploads/2022/12/youtube-e1670229925357.png" class="alignnone size-full wp-image-380 lazyloaded" src="https://www.creativedignity.org/wp-content/uploads/2022/12/youtube-e1670229925357.png" className="header_icon_size1 alignnone mx-2 size-full wp-image-380 ls-is-cached lazyloaded" />
                    </a>
                    <a href='/Getinvolved'>
                        <button type='button' className='getinvolvedbutton hongkong-font' >
                            <a className='getinvolvedbtn_a'>Get Involved</a></button>
                    </a>
                </div>
            </div>
            <nav
                className={`navbar navbar-expand-lg navbar-yellow fixed-top`}
                style={{
                    backgroundImage: `url(Imagespic.cd_background)`,
                    //   backgroundImage: `url('C:\\Users\\Dell\\Downloads\\test-app\\src\\assets\\cd_backgroundimage.png')`, // Set background image
                    backgroundColor: `rgba(255, 255, 255, ${scrollY / 400})`,
                    backgroundSize: 'cover',
                    marginTop: '72px',
                }}
            >
                <a className="navbar-brand">
                    <img
                        src={scrolledLogoImage}
                        width="30"
                        height="30"
                        className="d-inline-block align-top w-100 logo_img"
                        alt="Creative dignity Logo"
                    />
                </a>
                <button className={`ml-auto move-right  navbar-toggler ${menuOpen ? '' : 'collapsed'}`} type="button"
                    data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={toggleMenu} >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${menuOpen ? '' : 'show'}`} id="navbarNav"  >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown" onMouseEnter={openDropdownOnHover}
                            onMouseLeave={closeDropdownOnLeave} >
                            <a className={`nav-link hongkong-font dropdown-toggle ${hasNavScrolledtext ? 'nav-link-textblack' : 'nav-link-textblack'}`} id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                About
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item hongkong-font" href="https://www.inkmyweb.net/cd/about-us/">
                                    Our story
                                </a>
                                <a className="dropdown-item hongkong-font" href="https://www.inkmyweb.net/cd/people/">
                                    People
                                </a>
                                <a className="dropdown-item hongkong-font" href="https://www.inkmyweb.net/cd/collaborators-supporters/">
                                    Collaborators Supporters
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={openDropdownOnHover}
                            onMouseLeave={closeDropdownOnLeave} >
                            <a className={`nav-link hongkong-font dropdown-toggle ${hasNavScrolledtext ? 'nav-link-textblack' : 'nav-link-textblack'}`} id="navbarDropdown"
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            >
                                What's On
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item hongkong-font" href="/event">
                                    Events
                                </a>
                                <a className="dropdown-item hongkong-font" href="/opportunities">
                                    Opportunities
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="/artisan" className={`hongkong-font nav-link ${hasNavScrolledtext ? 'nav-link-textblack' : 'nav-link-textblack'}`}>
                                Artisan directory
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/member" className={`hongkong-font nav-link ${hasNavScrolledtext ? 'nav-link-textblack' : 'nav-link-textblack'}`}>
                                Members
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.inkmyweb.net/cd/programme/" className={`hongkong-font nav-link ${hasNavScrolledtext ? 'nav-link-textblack' : 'nav-link-textblack'}`}>
                                Our Programs
                            </a>
                        </li>
                        <li className="nav-item dropdown" onMouseEnter={openDropdownOnHover}
                            onMouseLeave={closeDropdownOnLeave} >
                            <a className={`nav-link hongkong-font dropdown-toggle ${hasNavScrolledtext ? 'nav-link-textblack' : 'nav-link-textblack'}`} id="navbarDropdown"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Media
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item hongkong-font" href="https://www.inkmyweb.net/cd/instagram/">
                                    Instagram
                                </a>
                                <a className="dropdown-item hongkong-font" href="https://www.inkmyweb.net/cd/blog/">
                                    Blog
                                </a>
                                <a className="dropdown-item hongkong-font" href="/Smaller-form">
                                    Interesting Read
                                </a>
                                <a className="dropdown-item hongkong-font" href="https://www.inkmyweb.net/cd/press/">
                                    CD in the Press
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.inkmyweb.net/cd/resources/" className={`hongkong-font nav-link ${hasNavScrolledtext ? 'nav-link-textblack' : 'nav-link-textblack'}`}>
                                Resources
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Parallax Effect for Content */}
            {/* <div
        className="parallax"
        style={{
          transform: `translateY(${scrollY1}px)`,
        }}
      >
        <div className=' container parallax-content' style={{boxShadow: 'none'}}>
          <p className='text-center header-content'>Events and Opportunities</p>
          <p className='text-center header-text' style={{ width: '100%', height: '100%'  }}>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
          <p className='text-center header-text' style={{ width: '100%', height: '100%'  }}> elit, sed do eiusmod tempor incididunt ut labore et</p>
            <p className='text-center header-text' style={{ width: '100%', height: '100%' }}>  dolore magna aliqua.</p>
        </div>
      </div> */}
        </div>
    )
}

export default Individual_Header