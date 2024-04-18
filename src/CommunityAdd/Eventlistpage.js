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
import { FaMapMarkerAlt } from 'react-icons/fa';
import '../Event/Eventoppo.css'
import { apiURL } from "../Commen/apiurl"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Imagespic from '../Images/Imagespic';


function Eventlistpage() {

    const [event_list, setevent_list] = useState([])
    const [search, setSearch] = useState("");
    const [pastEvents, setPastEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [fullEvent_list, setFullEvent_list] = useState([]);
    const [isPageNation, setIsPageNation] = useState(false)
    const [currentPageNation, setCurrentPageNation] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const [isLoading, setIsLoading] = useState(false);
    const [showOnlyCDExclusives, setShowOnlyCDExclusives] = useState(false);
    useEffect(() => {
        fetchEventDetails();
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
    const fetchEventDetails = () => {
        setIsLoading(true);
        if (showOnlyCDExclusives) {
            axios
                .get(`${apiURL}/UserMaster/event_view_cd_exclusive`, {
                    headers: {
                        accept: "application/json",
                    },
                })
                .then((resp) => {
                    // setevent_list(resp.data.data)
                    setCurrentPageNation(1);
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
            axios
                .get(`${apiURL}/UserMaster/get_all_events`, {
                    headers: {
                        accept: "application/json",
                    },
                })
                .then((resp) => {
                    // setevent_list(resp.data.data)
                    setCurrentPageNation(1);
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
    const fetchSearchEventDetails = () => {
        setIsLoading(true);
        axios
            .get(`${apiURL}/UserMaster/event_search_data?search_query=${search}`, {
                headers: {
                    accept: "application/json",
                },
            })
            .then((resp) => {
                // setevent_list(resp.data.data)
                setCurrentPageNation(1);
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

    const handleShowOnlyCDExclusivesChange = (e) => {
        setShowOnlyCDExclusives(e.target.checked);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchSearchEventDetails();
        }
    };


    return (
        <div class="allartisancss">
            {/* <div id='myDiv' className='txtbacgroundimg'> */}
            <Header></Header>

            <div className="event_parallax" style={{ transform: `translateY(${scrollY1}px)`, }}>
                <div className='parallax-content'>
                    <h1 className='text-center font-weight-bold hongkong-font mobile-top oppotunity_banner_text' style={{ fontSize: '40px', fontWeight: '400 !important' }}>Events</h1>
                    {/* <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "Roboto", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}>Handmade events are an immersive journey into a world of craftsmanship, culture, and creativity. </p>
                    <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "Roboto", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}>Some are sensory delights where vibrant colors, intricate textures, and diverse traditions come to life, some connect us to the roots of our knowledge and lifestyle and some make us hope for a conscious future. </p> */}

                    {/* <p className='text-center banner_text oppotunity_banner_small_text' >Handmade events are an immersive journey into a world of craftsmanship, culture, and creativity.Some are sensory delights where vibrant colors, intricate textures, and diverse traditions come to life, some connect us to the roots of our knowledge and lifestyle and some make us hope for a conscious future. </p> */}

                    {/* <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "Roboto", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "Roboto", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                </div>
            </div>


            {/* <h1 className='txtmemheader hongkong-font'>Events</h1> */}
            {/* <p className='txtmemone'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                <p className='txtmemtwo'>  elit, sed do eiusmod tempor incididunt ut labore et</p>
                <p className='txtmemthree'>  dolore magna aliqua.</p> */}
            {/* </div> */}
            <div className='container bannerevent'>
                {/* <p class='mx-5 mt-5 px-5 mb-5' >
                    <Link to='https://www.inkmyweb.net/cd/' className='opportunity-link'>
                        <span style={{ fontSize: '14px', color: '#134f5c' }} className='evetop mx-1'>Home</span> </Link><span class='mx-1'>
                        <FontAwesomeIcon icon={faChevronRight} className='right-icons' />
                    </span>
                    <span class='mx-1 breadcrum_text'>Events list</span>
                </p> */}
                <div class="mt-5 cd_breadcrumbs_container mb-5">
                    <span>
                        <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                        </span> &gt; <span class="breadcrumb_last" aria-current="page">Events</span>
                    </span>
                </div>
                <p className='texbannerevent' >Handmade events are an immersive journey into a world of craftsmanship, culture, and creativity. Some are sensory delights where vibrant colors, intricate textures, and diverse traditions come to life, some connect us to the roots of our knowledge and lifestyle and some make us hope for a conscious future. </p>

                <div className="row mb-3 mt-5 px-0">
                    <div class='col-xl-6 col-lg-6 col-md-6 px-0'>
                        <input type='Checkbox' name='radiofullev'
                            checked={showOnlyCDExclusives}
                            onChange={handleShowOnlyCDExclusivesChange}
                            className="custom-checkbox" id="show_cd" />
                        <label for="show_cd" className='checkbox-labelone hongkong-font mx-2' >Show only CD Exclusives</label>
                    </div>
                    <div class='col-xl-6 col-lg-6 col-md-6  px-0'>
                        <Link to="/Eventform" state={{ ID: 0, Flag: "I" }}>
                            <Button variant="secondary" className='btnaddoppo'>
                                Add Event</Button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className='container px-0 '>
                <div className='row mb-5 mt-5 px-0'>
                    <div className="col-12 px-0 row">
                        <div class='col-xl-6 col-lg-6 col-md-6 px-5'>
                            <input type='Checkbox' name='radiofullev' className="mx-2 custom-checkbox"
                                checked={showOnlyCDExclusives}
                                onChange={handleShowOnlyCDExclusivesChange} />
                            <label className='checkbox-labelone hongkong-font'>Show only CD Exclusives</label>
                        </div>
                        <div class='col-xl-6 col-lg-6 col-md-6  px-0'>
                            <Link to="/Eventform">
                                <Button variant="secondary" className='btnaddoppo'>
                                    Add Events</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='container searchevent'>
                <FaSearch className="search-icon1" />
                <input type='text' className='inptsearch' onKeyPress={handleKeyPress} placeholder='Search for events' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                <button className='btnfinevent' onClick={fetchSearchEventDetails}>Find Events</button>
                <a class="inline-p px-2 mx-4" style={{ textDecoration: 'underline' }} >List</a>
                <a class="inline-p" style={{ textDecoration: 'none' }} href="/EventCalendar">Calendar</a>
                {/* <a class="inline-p" style={{ textDecoration: 'none' }} href="/Event_day">Day</a> */}
            </div>



            {isLoading ? (
                <div className='d-flex justify-content-center mt-5'>
                    <ReactLoading type="spin" color="#134f5c" height={100} width={50} />
                </div>
            ) : (
                <>
                    {event_list.length > 0 ?

                        <div className={`container eventopp-container ${isLoading ? 'blurred-content' : ''}`}>

                            <div className="row mt-5">
                                {/* <h1>Upcomming Events</h1> */}
                                <div className="col-12 px-0">
                                    <div class="d-flex justify-content-around">
                                        <div className="opportunity-cards-container px-0" style={{ width: '100%' }}>
                                            <div className="oppcard-container">
                                                {event_list.map((event, key) => {
                                                    console.log(event, "jhyfctdcgy", key)
                                                    let imgHeight = "480px";
                                                    let imgWidth = "360px";
                                                    if ((key + 1) === 1) {
                                                        imgHeight = "480px";
                                                        imgWidth = "360px";
                                                    }
                                                    else if ((key + 1) === 4) {
                                                        imgHeight = "312px";
                                                        imgWidth = "360px";
                                                    }
                                                    else if ((key + 1) === 7) {
                                                        imgHeight = "360px";
                                                        imgWidth = "389px";
                                                    }
                                                    if (firstRow == (key + 1)) {
                                                        firstRow = firstRow + 3;

                                                        const eventId = String(event.id);

                                                        const encodedId = window.btoa(eventId);

                                                        return (
                                                            // <Link to="/Opportunity" state={{ eventid: 1 }}>
                                                            <Link
                                                                to={`/EventIndividual/${encodedId}`}
                                                                state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>

                                                                <div className="" key={event.id}>
                                                                    {JSON.parse(event.event_image) !== '' ? (
                                                                        <div className="opportunity-card-image-container">
                                                                            {event.cd_member === "Yes" &&
                                                                                <button className="corner-button">CD EXCLUSIVE</button>}

                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag'
                                                                                    style={{ height: 'imgHeight', width: 'imgWeight' }}
                                                                                    src={uploaImage(event.event_image)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ) : <div className="opportunity-card-image-container">
                                                                        {event.cd_member === "Yes" && <button className="corner-button">CD EXCLUSIVE</button>}

                                                                        <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag'
                                                                                style={{ height: 'imgHeight', width: 'imgWeight' }}
                                                                                src={Imagespic.Frameicon}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    }
                                                                    <div className="opportunity-card-details mb-4">
                                                                        <p className='title-event artisan-link'>{event.event_title}</p>


                                                                        {event.event_mode === "offline" && event.venue_details && (
                                                                            <div>
                                                                                <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                                    <FaMapMarkerAlt className='cssheight' />

                                                                                    <p className='locationcol artisan-link mb-3'>
                                                                                        <span className="equal-spacing">{event.venue_details}</span>
                                                                                        <span className="equal-spacing">, {event.city}</span>
                                                                                        <span className="equal-spacing">, {event.state}</span>
                                                                                    </p>

                                                                                </div>
                                                                            </div>
                                                                        )}


                                                                        {event.event_mode == "online" && (
                                                                            <div>
                                                                                <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                                    <FaMapMarkerAlt className='cssheight' />
                                                                                    <p className='locationcol artisan-link mb-3'>{event.event_mode}</p>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        {event.event_mode === "hybrid" && (
                                                                            <div>
                                                                                <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                                    <FaMapMarkerAlt className='cssheight' />
                                                                                    <p className='locationcol artisan-link mb-3'>
                                                                                        {event.venue_details && (
                                                                                            <>
                                                                                                <span className="equal-spacing">{event.venue_details}</span>
                                                                                                {(event.city || event.state) && ', '}
                                                                                            </>
                                                                                        )}
                                                                                        {event.city && (
                                                                                            <>
                                                                                                <span className="equal-spacing">{event.city}</span>
                                                                                                {event.state && ', '}
                                                                                            </>
                                                                                        )}
                                                                                        {event.state && (
                                                                                            <span className="equal-spacing">{event.state}</span>
                                                                                        )}
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        )}

                                                                        <p className='txtprsize artisan-link'>{formatDate(event.event_start_date)}</p>
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
                                                    let imgHeight = "480px";
                                                    let imgWidth = "360px";
                                                    if ((key + 1) === 2) {
                                                        imgHeight = "312px";
                                                        imgWidth = "360px"
                                                    }
                                                    else if ((key + 1) === 5) {
                                                        imgHeight = "389px";
                                                        imgWidth = "360px";
                                                    }
                                                    else if ((key + 1) === 8) {
                                                        imgHeight = "480px";
                                                        imgWidth = "360px";
                                                    }
                                                    if (secondRow == (key + 1)) {
                                                        secondRow = secondRow + 3;

                                                        const eventId = String(event.id);

                                                        const encodedId = window.btoa(eventId);

                                                        return (
                                                            // <Link to="/Opportunity" state={{ eventid: 1 }}>
                                                            <Link
                                                                to={`/EventIndividual/${encodedId}`}
                                                                state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>

                                                                <div className="" key={event.id}>
                                                                    {JSON.parse(event.event_image) !== '' ? (
                                                                        <div className="opportunity-card-image-container">
                                                                            {event.cd_member === "Yes" && <button className="corner-button">CD EXCLUSIVE</button>}
                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag'
                                                                                    style={{ height: 'imgHeight', width: 'imgWeight' }}
                                                                                    src={uploaImage(event.event_image)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ) : <div className="opportunity-card-image-container">
                                                                        {event.cd_member === "Yes" && <button className="corner-button">CD EXCLUSIVE</button>}

                                                                        <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag'
                                                                                style={{ height: 'imgHeight', width: 'imgWeight' }}
                                                                                src={Imagespic.Frameicon}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    }
                                                                    <div className="opportunity-card-details mb-4">
                                                                        <p className='title-event artisan-link'>{event.event_title}</p>
                                                                        {event.event_mode && (
                                                                            <>
                                                                                {event.event_mode == "offline" ?
                                                                                    <>
                                                                                        {event.event_mode === "offline" && event.venue_details && (
                                                                                            <div>
                                                                                                <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                                                    <FaMapMarkerAlt className='cssheight' />

                                                                                                    <p className='locationcol artisan-link mb-3'>
                                                                                                        <span className="equal-spacing">{event.venue_details}</span>
                                                                                                        <span className="equal-spacing">, {event.city}</span>
                                                                                                        <span className="equal-spacing">, {event.state}</span>
                                                                                                    </p>

                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </>
                                                                                    :
                                                                                    <>
                                                                                        {event.event_mode && (
                                                                                            <div>
                                                                                                <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                                                    <FaMapMarkerAlt className='cssheight' />
                                                                                                    <p className='locationcol artisan-link mb-3'>{event.event_mode}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        )}


                                                                                    </>
                                                                                }
                                                                            </>
                                                                        )}

                                                                        <p className='txtprsize artisan-link'>{formatDate(event.event_start_date)}</p>
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
                                                    let imgHeight = "480px";
                                                    let imgWidth = "360px";
                                                    if ((key + 1) === 3) {
                                                        imgHeight = "389px";
                                                        imgWidth = "360px;";
                                                    }
                                                    else if ((key + 1) === 6) {
                                                        imgHeight = "480px";
                                                        imgWidth = "360px";
                                                    }
                                                    else if ((key + 1) === 9) {
                                                        imgHeight = "312px";
                                                        imgWidth = "360px";
                                                    }
                                                    if (thirdRow == (key + 1)) {
                                                        thirdRow = thirdRow + 3;

                                                        const eventId = String(event.id);

                                                        const encodedId = window.btoa(eventId);

                                                        return (
                                                            // <Link to="/Opportunity" state={{ eventid: 1 }}>
                                                            <Link
                                                                to={`/EventIndividual/${encodedId}`}
                                                                state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>

                                                                <div className="" key={event.id}>
                                                                    {JSON.parse(event.event_image) !== '' ? (
                                                                        <div className="opportunity-card-image-container">
                                                                            {event.cd_member === "Yes" && <button className="corner-button">CD EXCLUSIVE</button>}

                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag'
                                                                                    style={{ height: 'imgHeight', width: 'imgWeight' }}
                                                                                    src={uploaImage(event.event_image)}
                                                                                />
                                                                            </div>
                                                                        </div>

                                                                    ) :
                                                                        <div className="opportunity-card-image-container">
                                                                            {event.cd_member === "Yes" && <button className="corner-button">CD EXCLUSIVE</button>}
                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag'
                                                                                    style={{ height: 'imgHeight', width: 'imgWeight' }}
                                                                                    src={Imagespic.Frameicon}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                    <div className="opportunity-card-details mb-4">
                                                                        <p className='title-event artisan-link'>{event.event_title}</p>
                                                                        {event.event_mode && (
                                                                            <>
                                                                                {event.event_mode == "offline" ?
                                                                                    <>
                                                                                        {event.event_mode === "offline" && event.venue_details && (
                                                                                            <div>
                                                                                                <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                                                    <FaMapMarkerAlt className='cssheight' />

                                                                                                    <p className='locationcol artisan-link mb-3'>
                                                                                                        <span className="equal-spacing">{event.venue_details}</span>
                                                                                                        <span className="equal-spacing">, {event.city}</span>
                                                                                                        <span className="equal-spacing">, {event.state}</span>
                                                                                                    </p>

                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </>
                                                                                    :
                                                                                    <>
                                                                                        {event.event_mode && (
                                                                                            <div>
                                                                                                <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                                                    <FaMapMarkerAlt className='cssheight' />
                                                                                                    <p className='locationcol artisan-link mb-3'>{event.event_mode}</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        )}
                                                                                    </>
                                                                                }
                                                                            </>
                                                                        )}

                                                                        <p className='txtprsize artisan-link'>{formatDate(event.event_start_date)}</p>
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
                    {/* <div className={`container-fluid eventopp-container ${isLoading ? 'blurred-content' : ''}`}>
                    
                        <div className="row mt-5">
                        <h1>Past Events</h1>
                            <div className="col-12">
                                <div class="d-flex justify-content-around">
                                    <div className="opportunity-cards-container">
                                        <div className="oppcard-container">
                                            {pastEvents.map((event, key) => {
                                                console.log(event, "jhyfctdcgy", key)
                                                let imgHeight = "480px";
                                                let imgWidth = "360px";
                                                if ((key + 1) === 1) {
                                                    imgHeight = "480px";
                                                    imgWidth = "360px";
                                                }
                                                else if ((key + 1) === 4) {
                                                    imgHeight = "312px";
                                                    imgWidth = "360px";
                                                }
                                                else if ((key + 1) === 7) {
                                                    imgHeight = "360px";
                                                    imgWidth = "389px";
                                                }
                                                if (firstRow == (key + 1)) {
                                                    firstRow = firstRow + 3;
                                                    return (
                                                        // <Link to="/Opportunity" state={{ eventid: 1 }}>
                                                        <Link to={'/Opportunitiessummary'} state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>
                                                            <div className="" key={event.id}>
                                                                {JSON.parse(event.event_image) !== '' ? (
                                                                    <div className="opportunity-card-image-container">
                                                                        {event.cd_member === "Yes" &&
                                                                            <button className="corner-button">CD EXCLUSIVE</button>}
                                                                        <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag'
                                                                                style={{ height: 'imgHeight', width: 'imgWeight' }}
                                                                                src={uploaImage(event.event_image)}
                                                                            />
                                                                        </div>

                                                                    </div>
                                                                ) : null}
                                                                <div className="opportunity-card-details mb-4">
                                                                    <p className='title-event artisan-link'>{event.event_title}</p>
                                                                    <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                        <FaMapMarkerAlt className='cssheight' />
                                                                        <p className='locationcol artisan-link'>{event.event_mode}</p>
                                                                    </div>
                                                                    <p className='txtprsize artisan-link'>{formatDate(event.event_start_date)}</p>
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
                                            {pastEvents.map((event, key) => {
                                                let imgHeight = "480px";
                                                let imgWidth = "360px";
                                                if ((key + 1) === 2) {
                                                    imgHeight = "312px";
                                                    imgWidth = "360px"
                                                }
                                                else if ((key + 1) === 5) {
                                                    imgHeight = "389px";
                                                    imgWidth = "360px";
                                                }
                                                else if ((key + 1) === 8) {
                                                    imgHeight = "480px";
                                                    imgWidth = "360px";
                                                }
                                                if (secondRow == (key + 1)) {
                                                    secondRow = secondRow + 3;
                                                    return (
                                                        // <Link to="/Opportunity" state={{ eventid: 1 }}>
                                                        <Link to={'/Opportunitiessummary'} state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>
                                                            <div className="" key={event.id}>
                                                                {JSON.parse(event.event_image) !== '' ? (
                                                                    <div className="opportunity-card-image-container">
                                                                        {event.cd_member === "Yes" && <button className="corner-button">CD EXCLUSIVE</button>}
                                                                        <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag'
                                                                                style={{ height: 'imgHeight', width: 'imgWidth' }}
                                                                                src={uploaImage(event.event_image)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                ) : null}
                                                                <div className="opportunity-card-details mb-4">
                                                                    <p className='title-event artisan-link'>{event.event_title}</p>
                                                                    <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                        <FaMapMarkerAlt className='cssheight' />
                                                                        <p className='locationcol artisan-link'>{event.event_mode}, {event.state}</p>
                                                                    </div>
                                                                    <p className='txtprsize artisan-link'>{formatDate(event.event_start_date)}</p>
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
                                            {pastEvents.map((event, key) => {
                                                let imgHeight = "480px";
                                                let imgWidth = "360px";
                                                if ((key + 1) === 3) {
                                                    imgHeight = "389px";
                                                    imgWidth = "360px;";
                                                }
                                                else if ((key + 1) === 6) {
                                                    imgHeight = "480px";
                                                    imgWidth = "360px";
                                                }
                                                else if ((key + 1) === 9) {
                                                    imgHeight = "312px";
                                                    imgWidth = "360px";
                                                }
                                                if (thirdRow == (key + 1)) {
                                                    thirdRow = thirdRow + 3;
                                                    return (
                                                        // <Link to="/Opportunity" state={{ eventid: 1 }}>
                                                        <Link to={'/Opportunitiessummary'} state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>
                                                            <div className="" key={event.id}>
                                                                {JSON.parse(event.event_image) !== '' ? (
                                                                    <div className="opportunity-card-image-container">
                                                                        {event.cd_member === "Yes" && <button className="corner-button">CD EXCLUSIVE</button>}
                                                                        <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag'
                                                                                style={{ height: 'imgHeight', width: 'imgWidth' }}
                                                                                src={uploaImage(event.event_image)}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                ) : null}
                                                                <div className="opportunity-card-details mb-4">
                                                                    <p className='title-event artisan-link'>{event.event_title}</p>
                                                                    <div className='locationcol artisan-link d-flex justify-content-start'>
                                                                        <FaMapMarkerAlt className='cssheight' />
                                                                        <p className='locationcol artisan-link'>{event.event_mode}, {event.state}</p>
                                                                    </div>
                                                                    <p className='txtprsize artisan-link'>{formatDate(event.event_start_date)}</p>
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
                    </div> */}
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