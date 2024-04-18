import React, { useState, useEffect } from 'react';
// import './Allartisanlandingpage.css'
// import '../Artisan/Allartisanlandingpage.cs
import '../MemerForm/Memberlist.css'
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';
import Imagespic from '../Images/Imagespic';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitterSquare, FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faMapLocationDot, faMapMarked, faMapMarker, faMarker } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from "react-loading";
import Select from 'react-select';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { AiFillYoutube } from "react-icons/ai";
function Memberlist() {


    const [event_list, setevent_list] = useState([])
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [fullEvent_list, setFullEvent_list] = useState([]);
    const [isPageNation, setIsPageNation] = useState(false)
    const [currentPageNation, setCurrentPageNation] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const [selectedOptions, setSelectedOptions] = useState([]);

    useEffect(() => {
        fetcheventdetails();
    }, []);


    const [navbarClass, setNavbarClass] = useState('scrollbanner_height');
    const [hasNavScrolledtext, sethasNavScrolledtext] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [scrollY1, setScrollY1] = useState(-25);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
        setScrollY1(window.scrollY1);

        if (window.scrollY > 100) {
            setNavbarClass('navbar-yellow');
            sethasNavScrolledtext(true);
        } else {
            setNavbarClass('scrollbanner_height');
            sethasNavScrolledtext(false);
        }
    };

    const fetcheventdetails = () => {
        setIsLoading(true);
        // const token = sessionStorage.getItem('data')
        axios.get(`${apiURL}/UserMaster/UserMaster/member_form_data_all_data_view`, {
            headers: {
                "accept": "application/json",
                // 'Authorization': `Bearer ${token}`,
            }
        }).then(resp => {
            // setevent_list(resp.data.data)
            // setIsLoading(false);
            let currentDataLength = resp.data.data.length;
            if (currentDataLength > 20) {
                setFullEvent_list(resp.data.data);
                setevent_list(resp.data.data.slice(0, 20));
                setIsPageNation(true);
                let quotient = Math.floor(currentDataLength / 20);
                const remainder = currentDataLength % 20;
                if (remainder > 0) {
                    quotient = quotient + 1;
                }
                setPageCount(quotient)
                setIsLoading(false);
            }
            else {
                setevent_list(resp.data.data);
                setIsLoading(false);
            }
        })
            .catch(err => {
                console.log(err)
                setIsLoading(false);
            })
    }
    const fetchSearchMemberDetails = () => {
        setIsLoading(true);
        axios
            .get(`${apiURL}/UserMaster/UserMaster/member_search_data?search_query=${search}`, {
                headers: {
                    accept: "application/json",
                },
            })
            .then((resp) => {
                let currentDataLength = resp.data.data.length;
                if (currentDataLength > 20) {
                    setFullEvent_list(resp.data.data);
                    setevent_list(resp.data.data.slice(0, 20));
                    setIsPageNation(true);
                    let quotient = Math.floor(currentDataLength / 20);
                    const remainder = currentDataLength % 20;
                    if (remainder > 0) {
                        quotient = quotient + 1;
                    }
                    setPageCount(quotient)
                    setIsLoading(false);
                }
                else {
                    setevent_list(resp.data.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };
    const filterState = (value) => {
        const labelsArray = value && value.map(item => item.label);
        console.log('dsddvalue', labelsArray)
        const payload = {
            state: labelsArray
        }
        setIsLoading(true);
        axios.post(`${apiURL}/UserMaster/UserMaster/member_search_filter_data`, payload, {
            headers: {
                "accept": "application/json",
            }
        }).then(resp => {
            console.log('ssdzxcz', resp)
            setevent_list(resp.data.data)
            setIsLoading(false);
        })
            .catch(err => {
                console.log(err)
                setIsLoading(false);
            })
    }
    const goToPrevious = () => {
        if (currentPageNation > 1) {
            let tempCurrentPageNation = currentPageNation - 1;
            setCurrentPageNation(tempCurrentPageNation);
            let endIndex = tempCurrentPageNation * 20;
            let startIndex = endIndex - 20;
            setevent_list(fullEvent_list.slice(startIndex, endIndex));
        }
    }
    const goToPagingNumber = (pagingnum) => {
        setCurrentPageNation(pagingnum);
        let endIndex = pagingnum * 20;
        let startIndex = endIndex - 20;
        if (endIndex > fullEvent_list.length) {
            endIndex = fullEvent_list.length;
        }
        setevent_list(fullEvent_list.slice(startIndex, endIndex));
    }
    const goToNext = () => {
        if (currentPageNation < pageCount) {
            let tempCurrentPageNation = currentPageNation + 1;
            setCurrentPageNation(tempCurrentPageNation);
            let startIndex = currentPageNation * 20;
            let endIndex = tempCurrentPageNation * 20;
            if (endIndex > fullEvent_list.length) {
                endIndex = fullEvent_list.length;
            }
            setevent_list(fullEvent_list.slice(startIndex, endIndex));
        }
    }
    const uploaImage = (e) => {
        let image1 = JSON.parse(e);
        return 'data:image;base64,' + image1.base64Data
    }

    const allartianlist = [
        {
            image: Imagespic.Allartisanfemale,
        },
        {
            image: Imagespic.Allartisanmale,
        },
        {
            image: Imagespic.Allartfe2,
        },
        {
            image: Imagespic.Allartisanmale,
        },

        {
            image: Imagespic.Allartfe2,
        },
        {
            image: Imagespic.Allartisanfemale,
        },

    ]

    let firstRow = 1;
    let secondRow = 2;
    let thirdRow = 3;

    function isValidInstagramUrl(url) {
        return url.startsWith("https://www.instagram.com/");
    }
    function isValidTwitterUrl(url) {
        return url.startsWith("https://www.twitter.com/");
    }
    function isValidFacebookUrl(url) {
        return url.startsWith("https://www.facebook.com/");
    }
    function isValidLinkedinUrl(url) {
        return url.startsWith("https://www.linkedin.com/");
    }


    const handleSelectChange = (selectedValues) => {
        console.log('sdsdasdasdasdadad', selectedValues)
        const valueToCheck = selectedValues[0].value;
        if (!selectedOptions.some((option) => option.label === valueToCheck)) {
            const newOption = { label: valueToCheck };
            filterState([...selectedOptions, newOption]);
            setSelectedOptions([...selectedOptions, newOption]);
        }
    };

    const filterFirstDrpData = (removeValue) => {
        const updatedOptions = selectedOptions.filter((option) => option.label !== removeValue);
        setSelectedOptions(updatedOptions);
        filterState(updatedOptions)
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchSearchMemberDetails();
        }
    };


    const optionsMap = {
        "Andaman and Nicobar Islands": [
            "Andaman and Nicobar Islands",

        ],
        "Andhra Pradesh": [
            "Andhra Pradesh"
        ],
        "Arunachal Pradesh": [
            "Arunachal Pradesh"
        ],
        "Assam": [
            "Assam"
        ],
        "Bihar": [
            "Bihar"
        ],
        "Chandigarh": [
            "Chandigarh"
        ],
        "Chhattisgarh": [
            "Chhattisgarh"
        ],
        "Dadra & Nagar Haveli and Daman & Diu": [
            "Dadra & Nagar Haveli and Daman & Diu"
        ],
        "Goa": [
            "Goa"
        ],
        "Gujarat": [
            "Gujarat"
        ],
        "Haryana": [
            "Haryana"
        ],
        "Himachal Pradesh": [
            "Himachal Pradesh"
        ],
        "Jammu & Kashmir": [
            "Jammu & Kashmir"
        ],
        "Jharkhand": [
            "Jharkhand"
        ],
        "Karnataka": [
            "Karnataka"
        ],
        "Kerala": [
            "Kerala"
        ],
        "Ladakh": [
            "Ladakh"
        ],
        "Lakshadweep": [
            "Lakshadweep"
        ],
        "Madhya Pradesh": [
            "Madhya Pradesh"
        ],
        "Maharashtra": [
            "Maharashtra"
        ],
        "Manipur": [
            "Manipur"
        ],
        "Meghalaya": [
            "Meghalaya"
        ],
        "Mizoram": [
            "Mizoram"
        ],
        "Nagaland": [
            "Nagaland"
        ],
        "National Capital Territory (NCT),Delhi": [
            "National Capital Territory (NCT),Delhi"
        ],
        "Odisha": [
            "Odisha"
        ],
        "Puducherry": [
            "Puducherry"
        ],
        "Punjab": [
            "Punjab"
        ],
        "Rajasthan": [
            "Rajasthan"
        ],
        "Sikkim": [
            "Sikkim"
        ],
        "TamilNadu": [
            "TamilNadu"
        ],
        "Telangana": [
            "Telangana"
        ],
        "Tripura": [
            "Tripura"
        ],
        "Uttar Pradesh": [
            "Uttar Pradesh"
        ],
        "Uttarakhand": [
            "Uttarakhand"
        ],
        "West Bengal": [
            "West Bengal"
        ],
    };
    const options = Object.keys(optionsMap).map((category) => ({
        value: category,
        label: category,
    }));

    // const initialSelectedOption = options.find((option) => option.label === 'State');


    return (
        <div className='allartisancss'>
            <div id='myDiv' className='txtbacgroundimg'>
                <Header></Header>
                <div className="parallax" style={{ transform: `translateY(${scrollY1}px)`, }}>
                    <div className='parallax-content'>
                        <h1 className='text-center font-weight-bold hongkong-font' style={{ fontSize: '40px', marginTop: '70px' }}>Members</h1>
                        {/* <p className='text-centermember' >The CD network has 500+ members and continues to grow.</p> */}
                    </div>
                </div>
                {/* <h1 className='artian-head'>Artisan</h1> */}
            </div>

            {/* <p class='mx-5 mt-5 px-5' >
                <Link to='https://www.inkmyweb.net/cd/' className='opportunity-link'>
                    <span style={{ fontSize: '14px', color: '#134f5c' }} className='evetop mx-1'>Home</span> </Link><span class='mx-1'>
                    <FontAwesomeIcon icon={faChevronRight} className='right-icons' />
                </span>
                <span class='mx-1 breadcrum_text'>Memberlist</span>
            </p> */}

            {/* <div className='container mt-5'>
                <div className='col-12 row'>
                    <p className='label-head'>Home » Artisans</p>
                </div>
            </div> */}
            <Container className='txtmrgbottom'>
                <div class="mt-5 cd_breadcrumbs_container mb-5">
                    <span>
                        <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                        </span> &gt; <span class="breadcrumb_last" aria-current="page">Members</span>
                    </span>
                </div>
                <Row className=''>
                    <p className='banner_textbottom'>The CD network has 500+ members and continues to grow.The diversity of artisans, designers, buyers, writers, social entrepreneurs, students has led to dynamic collaborations and new ideas for the sector. Members provide the energy and fuel for all of CD’s initiatives, leading to mutual benefit and goodwill.</p>

                    <Col md={4}>
                        <div className=''>
                            <Select
                                isMulti
                                className='without-box mobile-select-with'
                                options={options}
                                value={[]}
                                // defaultValue={initialSelectedOption}
                                onChange={handleSelectChange}
                                placeholder="State"
                            />
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='col-12 mt-3 mt-md-0'>
                            <input
                                type="text"
                                className="search-box mt-3"
                                placeholder="Search..."
                                onKeyPress={handleKeyPress}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <FaSearch className="search-icon" onClick={fetchSearchMemberDetails} />
                        </div>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={2}>
                        <div className='col-12 mt-4 mt-md-0'>
                            <Link to="/Member_form" state={{ ID: 0, Flag: "I" }}>
                                <Button variant="warning" className='btnwant' href='/Member_form'>Join CD</Button>
                            </Link>
                        </div>
                    </Col>


                </Row>
                {/* <div className='row mx-5'>
                    <div className='col-12'>
                        <div class="d-flex align-content-start flex-wrap">
                            {selectedOptions.map((item01, index) => {
                                return (
                                    <p className='drp-texttile '>
                                        <span>{item01.label}</span>
                                        <span className='drpclose' onClick={() => filterFirstDrpData(item01.label)}>X</span>
                                    </p>);
                            })}
                        </div>
                    </div>
                </div> */}
                <div className='row '>
                    <div className='col-12'>
                        <div class="d-flex align-content-start flex-wrap">
                            {selectedOptions.map((item01, index) => {
                                return (
                                    <p className='drp-texttile '>
                                        <span>{item01.label}</span>
                                        <span className='drpclose' onClick={() => filterFirstDrpData(item01.label)}>X</span>
                                    </p>);
                            })}
                        </div>
                    </div>
                </div>
                {isLoading ? (
                    <div className='d-flex justify-content-center'>
                        <ReactLoading type="spin" color="#134f5c" height={100} width={50} />
                    </div>
                ) : (
                    <>
                        {event_list.length > 0 ?
                            <>
                                <Row className='image-top-one'>
                                    {event_list.map(event => (
                                        <Col xs={6} md={3}>
                                            {JSON.parse(event.your_photo) != '' ?
                                                <div>
                                                    <img
                                                        alt='Event'
                                                        className='imgvieimageone member_image'
                                                        src={uploaImage(event.your_photo)}
                                                    />
                                                </div>
                                                : <div>
                                                    <img
                                                        alt='Event'
                                                        className='imgvieimageone member_image'
                                                        src={Imagespic.Frameicon}
                                                    />
                                                </div>
                                            }
                                            <div className='mrgmemlist'>
                                                <p className='member_text'>{event.name}</p>
                                                {event.type_of_organization && (
                                                    <p className='member_small_text' style={{ fontStyle: 'italic' }}>{event.type_of_organization}</p>
                                                )}

                                                {event.your_designation && (
                                                    <p className='member_small_text1'>{event.your_designation}</p>
                                                )}

                                                {/* <div className='socialicon-icon '>


                                            {event.facebook_profile_url && isValidFacebookUrl(event.facebook_profile_url) ? (
                                                <a
                                                    href={event.facebook_profile_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <AiFillFacebook className='txt1234 icon' />
                                                </a>
                                            ) : (
                                                <a
                                                    href="https://www.facebook.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <AiFillFacebook className='txt1234 icon' />
                                                </a>
                                            )}

                                            {event.twitter_profile_url && isValidTwitterUrl(event.twitter_profile_url) ? (
                                                <a
                                                    href={event.twitter_profile_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaTwitterSquare className='txt1234 icon' />
                                                </a>
                                            ) : (
                                                <a
                                                    href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaTwitterSquare className='txt1234 icon' />
                                                </a>
                                            )}

                                            {event.linkedin_profile_url && isValidLinkedinUrl(event.linkedin_profile_url) ? (
                                                <a
                                                    href={event.linkedin_profile_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <AiFillLinkedin className='txt1234 icon' />
                                                </a>
                                            ) : (
                                                <a
                                                    href="https://www.linkedin.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <AiFillLinkedin className='txt1234 icon' />
                                                </a>
                                            )}

                                            {event.instagram_profile_url && isValidInstagramUrl(event.instagram_profile_url) ? (
                                                <a
                                                    href={event.instagram_profile_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaInstagramSquare className='txt1234 icon' />
                                                </a>
                                            ) : (
                                                <a
                                                    href="https://www.instagram.com/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaInstagramSquare className='txt1234 icon' />
                                                </a>
                                            )}
                                        </div> */}
                                                <div className='socialicon-icon '>
                                                    {event.insta_social_site_url && (
                                                        // <a href={event.insta_social_site_url} target="_blank" rel="noopener noreferrer">
                                                        //     <FaInstagram className='txt1234 icon' />
                                                        // </a>
                                                        <a href={event.insta_social_site_url} target="_blank" rel="noopener noreferrer" >
                                                            <FaInstagramSquare className='txt1234 icon' />
                                                        </a>
                                                    )}
                                                    {event.facebook_social_site_url && (
                                                        <a href={event.facebook_social_site_url} target="_blank" rel="noopener noreferrer">
                                                            <AiFillFacebook className='txt1234 icon' />
                                                        </a>
                                                    )}
                                                    {event.linkedin_social_site_url && (
                                                        <a href={event.linkedin_social_site_url} target="_blank" rel="noopener noreferrer">
                                                            <AiFillLinkedin className='txt1234 icon' />
                                                        </a>
                                                    )}
                                                    {event.twitter_social_site_url && (
                                                        <a href={event.twitter_social_site_url} target="_blank" rel="noopener noreferrer">
                                                            <FaTwitterSquare className='txt1234 icon' />
                                                        </a>
                                                    )}
                                                    {event.youtube_social_site_url && (
                                                        <a href={event.youtube_social_site_url} target="_blank" rel="noopener noreferrer">

                                                            <AiFillYoutube className='txt1234 icon' style={{ width: '40px', height: '40px' }} />

                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                                {isPageNation && (
                                    <div className="row">
                                        <div className="col-12">
                                            <nav
                                                aria-label="Page navigation example"
                                                className="pagination-nav d-flex justify-content-center"
                                                style={{ background: '#fff' }}
                                            >
                                                <ul className="pagination justify-content-center">
                                                    <li className={`page-item ${currentPageNation === 1 ? 'disabled' : ''}`}>
                                                        <a className="page-link" href="javascript:void(0)" tabIndex="-1" onClick={goToPrevious}>
                                                            Previous
                                                        </a>
                                                    </li>

                                                    {/* {currentPageNation !== 1 && ( */}
                                                    <li className="page-item">
                                                        <a
                                                            style={{ background: '#dedede' }}
                                                            className="page-link active"
                                                            onClick={() => goToPagingNumber(currentPageNation)}
                                                            href="javascript:void(0)"
                                                        >
                                                            {currentPageNation}
                                                        </a>
                                                    </li>
                                                    {/* )} */}

                                                    <li className={`page-item ${currentPageNation === pageCount ? 'disabled' : ''}`}>
                                                        <a className="page-link" href="javascript:void(0)" onClick={goToNext}>
                                                            Next
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                )}

                            </>
                            :
                            <div className={`container eventopp-container ${isLoading ? 'blurred-content' : ''}`}>
                                <p style={{ fontSize: '25px', textAlign: 'center', fontFamily: 'Roboto' }}>No Records Found</p>
                            </div>
                        }
                    </>
                )}
            </Container>
            <div className='txtbottomt d-flex justify-content-center'>
                <div><h6 className='textcenter'>Become a CD member</h6></div>
                <div><Button className='btnstyle footer_btn_color'>Join</Button></div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default Memberlist;