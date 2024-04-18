import React, { useState, useEffect, useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { apiURL } from '../Commen/apiurl';
import axios from 'axios';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Button, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import '../CommunityAdd/Eventlistpage.css';
import Imagespic from '../Images/Imagespic';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const localizer = momentLocalizer(moment);

function EventCalendar() {
    const [events, setEvents] = useState([]);
    const [tooltipEvent, setTooltipEvent] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 100, left: 10 });
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const [search, setSearch] = useState("");

    const calendarRef = useRef(null);

    useEffect(() => {
        axios
            .get(`${apiURL}/UserMaster/get_all_events`)
            .then((response) => {
                const eventData = response.data.data;
                setEvents(eventData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const fetchSearchEventDetails = () => {
        axios
            .get(`${apiURL}/UserMaster/event_search_data?search_query=${search}`, {
                headers: {
                    accept: "application/json",
                },
            })
            .then((response) => {
                const eventData = response.data.data;
                setEvents(eventData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleMouseEnter = (event, e) => {
        setTooltipEvent(event);
        setTooltipPosition({ top: e.clientY, left: e.clientX });
        setTooltipVisible(true);
    };
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

    const handleMouseLeave = () => {
        setTooltipEvent(null);
        setTooltipVisible(false);
    };

    const customEvent = ({ event }) => {
        const eventId = String(event.id);
        const encodedId = window.btoa(eventId);
        const handleEventClick = () => {
            // Redirect to the event's individual page when the event is clicked
            window.location.href = `/EventIndividual/${encodedId}`;
          };
        return (
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip id={`tooltip-${event.id}`}>
                        <div>
                            <h4>{event.event_title}</h4>
                        </div>
                    </Tooltip>
                }
            >
                {/* <Link to={`/EventIndividual/${encodedId}`}
                    state={{ ID: event.id }} style={{ textDecoration: 'none' }} key={event.id}> */}
                    <div
                     onClick={handleEventClick}
                        onMouseEnter={(e) => handleMouseEnter(event, e)}
                        onMouseLeave={handleMouseLeave}
                        className="calendar-event"
                        style={{
                            overflow: 'visible',
                            zIndex: 1,
                        }}
                    >
                        <h4>{event.event_title}</h4>
                    </div>
                {/* </Link> */}
            </OverlayTrigger>
        );
    };

    // const fetchSearchEventDetails = () => {
    //     axios
    //         .get(`${apiURL}/UserMaster/event_search_data?search_query=${search}`, {
    //             headers: {
    //                 accept: "application/json",
    //             },
    //         })
    //         .then((resp) => {
    //             const currentDate = new Date();
    //             const events = resp.data.data;
    //             const upcomingEvents = events.filter((event) =>
    //                 new Date(event.event_start_date) >= currentDate
    //             );
    //             const pastEvents = events.filter((event) =>
    //                 new Date(event.event_start_date) < currentDate
    //             );
    //             setUpcomingEvents(upcomingEvents);
    //             setPastEvents(pastEvents);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    const handleCloseTooltip = () => {
        setTooltipVisible(false);
    };

    const imageConvert = (e) => {
        let image1 = JSON.parse(e);
        console.log('image1', image1);
        return 'data:image;base64,' + image1.base64Data
    }
    function formatDate(dateString) {
        if (!dateString) return ''; // Handle cases where the date is empty or undefined

        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options); // 'en-GB' sets the format to dd/mm/yyyy
    }
    const customTooltip = () => {
        if (!tooltipEvent || !tooltipVisible) return null;

        // const converted_image = imageConvert(tooltipEvent.event_image);
        const converted_image = tooltipEvent.event_image && tooltipEvent.event_image != '""'
            ? imageConvert(tooltipEvent.event_image)
            : Imagespic.Frameicon;
        const tooltipStyle = {
            position: 'absolute',
            top: `${tooltipPosition.top + 500}px`,
            left: `${tooltipPosition.left - 100}px`,
            zIndex: 1000,
        };

        const imageStyle = {
            maxWidth: '100%',
            height: '200px',
            width: '300px',
        };
        const startTime = moment(tooltipEvent.start);
        const endTime = moment(tooltipEvent.end);

        const formattedStartTime = startTime.format('h:mm A');
        const formattedEndTime = endTime.format('h:mm A');
        const eventId = String(tooltipEvent.id);
        const encodedId = window.btoa(eventId);

        return (

            <div className="custom-tooltip" style={tooltipStyle}>
                <button onClick={handleCloseTooltip} className="close-button closeicon ml-2 mb-2">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <Link to={`/EventIndividual/${encodedId}`}
                    state={{ ID: tooltipEvent.id }} style={{ textDecoration: 'none' }} key={tooltipEvent.id}>

                    {converted_image && (
                        <img
                            src={converted_image}
                            alt={tooltipEvent.event_title}
                            style={imageStyle}
                        />
                    )}
                    <h1>{tooltipEvent.event_title}</h1>
                    {tooltipEvent.link && (
                        <h3>{tooltipEvent.link}</h3>
                    )}
                    {tooltipEvent.venue_details && (
                        <h3>{tooltipEvent.venue_details}</h3>
                    )}
                   {/* <h4>{formatDate(tooltipEvent.event_start_date)}</h4> */}
                   <h4>{formatDate(tooltipEvent.event_start_date)} - {formatDate(tooltipEvent.event_end_date)}</h4>
                    <div>
                        <h4>{formattedStartTime} - {formattedEndTime}</h4>
                    </div>
                </Link>
            </div>

        );
    };

    const CustomDayEvent = ({ event }) => {
        const eventId = String(event.id);
        const encodedId = window.btoa(eventId);
        const handleEventClick = () => {
            // Redirect to the event's individual page when the event is clicked
            window.location.href = `/EventIndividual/${encodedId}`;
          };
        return (
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip id={`tooltip-${event.id}`}>
                        <div>
                            <h4>{event.event_title}</h4>
                        </div>
                    </Tooltip>
                }
            >
                {/* <Link to={`/EventIndividual/${encodedId}`}
                    state={{ ID: event.id }} style={{ textDecoration: 'none' }} key={event.id}> */}
                    <div
                     onClick={handleEventClick}
                        onMouseEnter={(e) => handleMouseEnter(event, e)}
                        onMouseLeave={handleMouseLeave}
                        className="calendar-event"
                        style={{
                            overflow: 'visible',
                            zIndex: 1,
                        }}
                    >
                        <h4>{event.event_title}</h4>
                    </div>
                {/* </Link> */}
            </OverlayTrigger>
        );
    };



    const customEventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#3a87ad',
            borderColor: '#285e8e',
        };

        if (moment(start).isSame(moment(), 'day')) {
            style.backgroundColor = '#ffcccb';
        }

        if (moment(start).isSame(moment(), 'week')) {
            style.backgroundColor = '#e6e6e6';
        }

        return {
            style,
        };
    };



    return (
        <div className='addformfullcss'>
            {/* <div id='myDiv' className='txtbacgroundimg'> */}
            <Header></Header>
            {/* <div className="event_parallax" style={{ transform: `translateY(${scrollY1}px)`, }}>
                    <div className='parallax-content'>
                        <h1 className='text-center mobile-top font-weight-bold hongkong-font' style={{ fontSize: '40px', fontWeight: '400 !important' }}>Events</h1> */}
            {/* <p className='text-center banner_text oppotunity_banner_small_text' >Handmade events are an immersive journey into a world of craftsmanship, culture, and creativity.Some are sensory delights where vibrant colors, intricate textures, and diverse traditions come to life, some connect us to the roots of our knowledge and lifestyle and some make us hope for a conscious future. </p> */}
            {/* </div>
                </div> */}
            <div className="event_parallax" style={{ transform: `translateY(${scrollY1}px)`, }}>
                <div className='parallax-content'>
                    <h1 className='text-center font-weight-bold hongkong-font mobile-top oppotunity_banner_text' style={{ fontSize: '40px', fontWeight: '400 !important' }}>Events</h1>
                </div>
            </div>
            {/* </div> */}
            <div className='container'>
                <div class="mt-5 cd_breadcrumbs_container mb-5">
                    <span>
                        <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                        </span> &gt; <span class="breadcrumb_last" aria-current="page"><a href='/event'>Events</a></span>
                        &gt; <span class="breadcrumb_last" aria-current="page">Event Calender</span>
                    </span>
                </div>
                <p className='texbannerevent1' >Handmade events are an immersive journey into a world of craftsmanship, culture, and creativity. Some are sensory delights where vibrant colors, intricate textures, and diverse traditions come to life, some connect us to the roots of our knowledge and lifestyle and some make us hope for a conscious future. </p>

                <div className='row'>
                    <div className='col-6'>
                        {/* <input type='Checkbox' name='radiofullev'
                            className="mx-2 custom-checkbox"
                            checked={showOnlyCDExclusives}
                            onChange={handleShowOnlyCDExclusivesChange} />
                        <label className='checkbox-labelone'>Show only CD Exclusives</label> */}
                    </div>
                    {/* <div className='col-6'>
                        <div className='d-flex justify-content-end'>
                            <a href="/Eventform" className='txteventcol'>  <Button variant="secondary" className='formaddev'>Add Event</Button></a>
                        </div>
                    </div> */}
                    <div class='col-xl-6 col-lg-6 col-md-6 mb-3 px-2'>
                        <Link to="/Eventform" state={{ ID: 0, Flag: "I" }}>
                            <Button variant="secondary" className='btnaddoppo'>
                                Add Event</Button>
                        </Link>
                    </div>
                </div>
                <div className='searchevent'>
                    <FaSearch className="search-icon1" />
                    <input type='text' className='inptsearch' placeholder='Search for events' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <button className='btnfinevent' onClick={fetchSearchEventDetails}>Find Events</button>
                    <a class="inline-p  list_a" style={{ textDecoration: 'none' }} href="/event">List</a>
                    <a class="inline-p" style={{ textDecoration: 'underline' }} >Calendar </a>
                    {/* <a class="inline-p" style={{ textDecoration: 'none' }} href="/Event_day">Day</a> */}
                </div>

                <div className="event-calendar-container mt-5">
                    {/* <h1>Event Calendar</h1> */}

                    <Calendar
                        ref={calendarRef}
                        localizer={localizer}
                        events={events.map((event) => ({
                            ...event,
                            start: new Date(event.event_start_date + 'T' + event.event_start_time),
                            end: new Date(event.event_end_date + 'T' + event.event_end_time),
                        }))}
                        startAccessor={(event) => new Date(event.start)}
                        endAccessor={(event) => new Date(event.end)}
                        style={{ height: 700 }}
                        components={{
                            event: customEvent,
                            day: {
                                event: CustomDayEvent,
                            },
                        }}
                        views={['month', 'week', 'day']}
                        eventPropGetter={customEventStyleGetter}
                    />
                    {customTooltip()}
                </div>
            </div>
            <div className='mt-5'>
                <Footer />
            </div>
        </div>
    );
}

export default EventCalendar;
