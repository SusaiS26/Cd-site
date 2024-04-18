import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer'
import { FaSearch } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Images from '../Images/Imagespic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../Event/Eventoppo.css'
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Imagespic from '../Images/Imagespic';

function Eventlistpage() {

    const [event_list, setevent_list] = useState([])
    const [search, setSearch] = useState("");
    const [fullEvent_list, setFullEvent_list] = useState([]);
    const [isPageNation, setIsPageNation] = useState(false)
    const [currentPageNation, setCurrentPageNation] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [showOnlyCDExclusives, setShowOnlyCDExclusives] = useState(false);

    useEffect(() => {
        fetcheventdetails();
    }, [showOnlyCDExclusives]);


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
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const options = { month: 'long', day: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    const handleShowOnlyCDExclusivesChange = (e) => {
        setShowOnlyCDExclusives(e.target.checked);
    }
    const fetcheventdetails = () => {

        if (showOnlyCDExclusives) {
            setIsLoading(true);
            axios
                .get(`${apiURL}/UserMaster/oppertunity_view_cd_exclusive`, {
                    headers: {
                        accept: "application/json",
                    },
                })
                .then((resp) => {
                    // setevent_list(resp.data.data)
                    let currentDataLength = resp.data.data.length;
                    if (currentDataLength > 9) {
                        setFullEvent_list(resp.data.data);
                        setevent_list(resp.data.data.slice(0, 9));
                        setIsPageNation(true);
                        let quotient = Math.floor(currentDataLength / 9);
                        const remainder = currentDataLength % 9;
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
        } else {
            setIsLoading(true);
            axios
                .get(`${apiURL}/UserMaster/get_all_opportunity`, {
                    headers: {
                        accept: "application/json",
                    },
                })
                .then((resp) => {
                    let currentDataLength = resp.data.data.length;
                    if (currentDataLength > 9) {
                        setFullEvent_list(resp.data.data);
                        setevent_list(resp.data.data.slice(0, 9));
                        setIsPageNation(true);
                        let quotient = Math.floor(currentDataLength / 9);
                        const remainder = currentDataLength % 9;
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
        }
    }


    const goToPrevious = () => {
        if (currentPageNation > 1) {
            let tempCurrentPageNation = currentPageNation - 1;
            setCurrentPageNation(tempCurrentPageNation);
            let endIndex = tempCurrentPageNation * 9;
            let startIndex = endIndex - 9;
            setevent_list(fullEvent_list.slice(startIndex, endIndex));
        }
    }
    const goToPagingNumber = (pagingnum) => {
        setCurrentPageNation(pagingnum);
        let endIndex = pagingnum * 9;
        let startIndex = endIndex - 9;
        if (endIndex > fullEvent_list.length) {
            endIndex = fullEvent_list.length;
        }
        setevent_list(fullEvent_list.slice(startIndex, endIndex));
    }
    const goToNext = () => {
        if (currentPageNation < pageCount) {
            let tempCurrentPageNation = currentPageNation + 1;
            setCurrentPageNation(tempCurrentPageNation);
            let startIndex = currentPageNation * 9;
            let endIndex = tempCurrentPageNation * 9;
            if (endIndex > fullEvent_list.length) {
                endIndex = fullEvent_list.length;
            }
            setevent_list(fullEvent_list.slice(startIndex, endIndex));
        }
    }

    const fetchSearchOpportunityDetails = () => {
        setIsLoading(true);
        axios
            .get(`${apiURL}/UserMaster/oppotunity_search_data?search_query=${search}`, {
                headers: {
                    accept: "application/json",
                },
            })
            .then((resp) => {
                let currentDataLength = resp.data.data.length;
                if (currentDataLength > 9) {
                    setFullEvent_list(resp.data.data);
                    setevent_list(resp.data.data.slice(0, 9));
                    setIsPageNation(true);
                    let quotient = Math.floor(currentDataLength / 9);
                    const remainder = currentDataLength % 9;
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

    const uploaImage = (e) => {
        let image1 = JSON.parse(e);
        return 'data:image;base64,' + image1.base64Data
    }
    let firstRow = 1;
    let secondRow = 2;
    let thirdRow = 3;


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchSearchOpportunityDetails();
        }
    };


    return (
        <div class="allartisancss">
            <div id='myDiv' className='txtbacgroundimg'>
                <Header></Header>

                <div className="opportunity_parallax" style={{ transform: `translateY(${scrollY1}px)`, }}>
                    <div className='parallax-content smallpara-font'>
                        <h1 className='text-center font-weight-bold hongkong-font oppotunity_banner_text' style={{ fontSize: '40px', fontWeight: '400 !important', marginTop: "120px" }}>Opportunities </h1>{/* <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "Roboto", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}>Opportunities in the handmade sector make people part of creative communities, </p>
                        <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "Roboto", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}>  strengthen our connection with conscious ways of living and working and help contribute to socio-economic development, cultural preservation, and sustainability.</p> */}

                        {/* <p className='text-center banner_text oppotunity_banner_small_text'> Opportunities in the handmade sector make people part of creative communities, strengthen our connection with conscious ways of living and working and help contribute to socio-economic development, cultural preservation, and sustainability.</p> */}

                        {/* <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "Roboto", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "Roboto", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>

                {/* <h1 className='txtmemheader hongkong-font'>Opportunity</h1> */}
                {/* <p className='txtmemone'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                <p className='txtmemtwo'>  elit, sed do eiusmod tempor incididunt ut labore et</p>
                <p className='txtmemthree'>  dolore magna aliqua.</p> */}
            </div>

            <div className='container px-5 opportunity'>
                {/* <p class='mx-5 mt-5 px-5 mb-5' >
                    <Link to='https://www.inkmyweb.net/cd/' className='opportunity-link'>
                        <span style={{ fontSize: '14px', color: '#134f5c' }} className='evetop mx-1'>Home</span> </Link><span class='mx-1'>
                        <FontAwesomeIcon icon={faChevronRight} className='right-icons' />
                    </span>
                    <span class='mx-1 breadcrum_text'>Opportunities list</span>
                </p> */}

                <div class="mt-5 cd_breadcrumbs_container mb-5">
                    <span>
                        <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                        </span> &gt; <span class="breadcrumb_last" aria-current="page">Opportunities</span>
                    </span>
                </div>
                <p className='texbanneropportunity' >Opportunities in the handmade sector make
                    people part of creative communities,
                    strengthen our connection with conscious ways of living and
                    working and help contribute to socio-economic development, cultural preservation,
                    and sustainability.</p>

                <div className=''>
                    <div className="row mb-5 mt-5 px-0">
                        <div class='col-xl-6 col-lg-6 col-md-6 px-0'>
                            <input type='Checkbox' name='radiofullev'
                                checked={showOnlyCDExclusives}
                                onChange={handleShowOnlyCDExclusivesChange}
                                className="custom-checkbox" />
                            <label className='checkbox-labelone hongkong-font mx-2' >Show only CD Exclusives</label>
                        </div>
                        <div class='col-xl-6 col-lg-6 col-md-6  px-0'>
                            <Link to="/Opportunity/Addopportunityform" state={{ ID: 0, Flag: "I" }}>
                                <Button variant="secondary" className='btnaddoppo'>
                                    Add Opportunity</Button>
                            </Link>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className='row py-2' style={{ border: '1px solid #dedede' }}>
                    <div className='col-xl-9 col-md-6'>
                        <FaSearch className="search-icon1" />
                        <input type='text' onKeyPress={handleKeyPress} className='inptsearch1' placeholder='Search  Opportunities' value={search} onChange={(e) => setSearch(e.target.value)}></input>

                    </div>
                    <div className='col-xl-3 col-md-6 '>
                        <button className='btnfinevent find-float mt-2' onClick={fetchSearchOpportunityDetails}>Find Opportunity</button>
                    </div>
                </div>
            </div>


            {/* <div className='searchevent'>
                    <FaSearch className='search-icon1' />
                    <input type='text' placeholder='Search  Oppotunities' value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button className='btnfinevent'>Fint Opportunity</button>
                 </div> */}
            {isLoading ? (
                <div className='d-flex justify-content-center mt-5'>
                    <ReactLoading type="spin" color="#134f5c" height={100} width={50} />
                </div>
            ) : (
                <>
                    {event_list.length > 0 ?
                        <div className=' container eventopp-container'>

                            <div className="row mt-5">
                                <div className="col-12">
                                    <div class="">
                                        <div className="opportunity-cards-container">
                                            <div className="oppcard-container">
                                                {event_list.map((event, key) => {
                                                    let imgHeight = "350px";
                                                    if ((key + 1) === 1) {
                                                        imgHeight = "350px";
                                                    }
                                                    else if ((key + 1) === 4) {
                                                        imgHeight = "200px";
                                                    }
                                                    else if ((key + 1) === 7) {
                                                        imgHeight = "300px";
                                                    }
                                                    if (firstRow == (key + 1)) {
                                                        firstRow = firstRow + 3;

                                                        const eventId = String(event.id);

                                                        const encodedId = window.btoa(eventId);

                                                        return (
                                                            // <Link to="/Opportunity" state={{ eventid: 1 }}>
                                                            <Link to={`/Opportunitiessummary/${encodedId}`} state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>
                                                                {/* <Link to={'/Opportunitiessummary'} state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}> */}
                                                                <div className="" key={event.id}>
                                                                    {JSON.parse(event.company_logo) !== '' ? (
                                                                        <div className="opportunity-card-image-container">
                                                                            {event.cd_member === "Yes" &&
                                                                                <button className="corner-button">CD EXCLUSIVE</button>}
                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag'
                                                                                    style={{ height: imgHeight }}
                                                                                    src={uploaImage(event.company_logo)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ) : <div className="opportunity-card-image-container">
                                                                        {event.cd_member === "Yes" &&
                                                                            <button className="corner-button">CD EXCLUSIVE</button>}
                                                                        <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag'
                                                                                style={{ height: imgHeight }}
                                                                                src={Imagespic.Frameicon}
                                                                            />
                                                                        </div>
                                                                    </div>}
                                                                    <div className="opportunity-card-details mb-4">
                                                                        <p className='title-event'>{event.tittle}</p>
                                                                        {/* {event.location &&
                                                                        <div className='locationcol d-flex justify-content-start'>
                                                                            <FaMapMarkerAlt className='cssheight' />
                                                                            <p className='locationcol'>{event.location}</p>
                                                                        </div>
                                                                    } */}

                                                                        {event.opportunity_mode == "offline" ?
                                                                            <div className='locationcol d-flex justify-content-start'>
                                                                                <FaMapMarkerAlt className='cssheight' />
                                                                                <p className='locationcol'>{event.venue}</p>
                                                                            </div>
                                                                            :
                                                                            <div className='locationcol d-flex justify-content-start'>
                                                                                <FaMapMarkerAlt className='cssheight' />
                                                                                <p className='locationcol'>{event.opportunity_mode}</p>
                                                                            </div>
                                                                        }
                                                                        <p className='txtprsize'>{formatDate(event.closing_date)}</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        )
                                                    }
                                                    else {
                                                        return (<></>);
                                                    }

                                                }
                                                )}
                                            </div>
                                            <div className="oppcard-container">
                                                {event_list.map((event, key) => {
                                                    let imgHeight = "350px";
                                                    if ((key + 1) === 2) {
                                                        imgHeight = "200px";
                                                    }
                                                    else if ((key + 1) === 5) {
                                                        imgHeight = "300px";
                                                    }
                                                    else if ((key + 1) === 8) {
                                                        imgHeight = "350px";
                                                    }
                                                    if (secondRow == (key + 1)) {
                                                        secondRow = secondRow + 3;
                                                        const eventId = String(event.id);

                                                        const encodedId = window.btoa(eventId);
                                                        return (
                                                            // <Link to="/Opportunity" state={{ eventid: 1 }}>
                                                            <Link to={`/Opportunitiessummary/${encodedId}`} state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>
                                                                <div className="" key={event.id}>
                                                                    {JSON.parse(event.company_logo) !== '' ? (
                                                                        <div className="opportunity-card-image-container">
                                                                            {event.cd_member === "Yes" &&
                                                                                <button className="corner-button">CD EXCLUSIVE</button>}
                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag'
                                                                                    style={{ height: imgHeight }}
                                                                                    src={uploaImage(event.company_logo)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ) : <div className="opportunity-card-image-container">
                                                                        {event.cd_member === "Yes" &&
                                                                            <button className="corner-button">CD EXCLUSIVE</button>}
                                                                        <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag'
                                                                                style={{ height: imgHeight }}
                                                                                src={Imagespic.Frameicon}
                                                                            />
                                                                        </div>
                                                                    </div>}
                                                                    <div className="opportunity-card-details mb-4">
                                                                        <p className='title-event'>{event.tittle}</p>
                                                                        {event.opportunity_mode == "offline" ?
                                                                            <div className='locationcol d-flex justify-content-start'>
                                                                                <FaMapMarkerAlt className='cssheight' />
                                                                                <p className='locationcol'>{event.venue}</p>
                                                                            </div>
                                                                            :
                                                                            <div className='locationcol d-flex justify-content-start'>
                                                                                <FaMapMarkerAlt className='cssheight' />
                                                                                <p className='locationcol'>{event.opportunity_mode}</p>
                                                                            </div>
                                                                        }
                                                                        <p className='txtprsize'>{formatDate(event.closing_date)}</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        )
                                                    }
                                                    else {
                                                        return (<></>)
                                                    }
                                                }
                                                )}
                                            </div>
                                            <div className="oppcard-container">
                                                {event_list.map((event, key) => {
                                                    let imgHeight = "350px";
                                                    if ((key + 1) === 3) {
                                                        imgHeight = "300px";
                                                    }
                                                    else if ((key + 1) === 6) {
                                                        imgHeight = "350px";
                                                    }
                                                    else if ((key + 1) === 9) {
                                                        imgHeight = "200px";
                                                    }
                                                    if (thirdRow == (key + 1)) {
                                                        thirdRow = thirdRow + 3;
                                                        const eventId = String(event.id);

                                                        const encodedId = window.btoa(eventId);
                                                        return (
                                                            // <Link to="/Opportunity" state={{ eventid: 1 }}>
                                                            <Link to={`/Opportunitiessummary/${encodedId}`} state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>
                                                                <div className="" key={event.id}>
                                                                    {JSON.parse(event.company_logo) !== '' ? (
                                                                        <div className="opportunity-card-image-container">
                                                                            {event.cd_member === "Yes" &&
                                                                                <button className="corner-button">CD EXCLUSIVE</button>}
                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag'
                                                                                    style={{ height: imgHeight }}
                                                                                    src={uploaImage(event.company_logo)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ) : <div className="opportunity-card-image-container">
                                                                        {event.cd_member === "Yes" &&
                                                                            <button className="corner-button">CD EXCLUSIVE</button>}
                                                                        <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag'
                                                                                style={{ height: imgHeight }}
                                                                                src={Imagespic.Frameicon}
                                                                            />
                                                                        </div>
                                                                    </div>}
                                                                    <div className="opportunity-card-details mb-4">
                                                                        <p className='title-event'>{event.tittle}</p>
                                                                        {event.opportunity_mode == "offline" ?
                                                                            <div className='locationcol d-flex justify-content-start'>
                                                                                <FaMapMarkerAlt className='cssheight' />
                                                                                <p className='locationcol'>{event.venue}</p>
                                                                            </div>
                                                                            :
                                                                            <div className='locationcol d-flex justify-content-start'>
                                                                                <FaMapMarkerAlt className='cssheight' />
                                                                                <p className='locationcol'>{event.opportunity_mode}</p>
                                                                            </div>
                                                                        }
                                                                        <p className='txtprsize'>{formatDate(event.closing_date)}</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        )
                                                    }
                                                    else {
                                                        return (<></>);
                                                    }

                                                }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

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



                        </div>
                        :
                        <div className={`container eventopp-container ${isLoading ? 'blurred-content' : ''}`}>
                            <p style={{ fontSize: '25px', textAlign: 'center', fontFamily: 'Roboto' }}>No Records Found</p>
                        </div>
                    }
                </>
            )}

            <div className='txtbottomt d-flex justify-content-center'>
                <div><h6 className='textcenter'>Know of an event or opportunity?</h6></div>
                <div><Button className='btnstyle'>Tell us</Button></div>
            </div>

            <div>
                <Footer></Footer>
            </div>

        </div>
    )
}

export default Eventlistpage;