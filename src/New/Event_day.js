import React, { useState, useEffect, useRef } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { apiURL } from '../Commen/apiurl';
import axios from 'axios';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Button, Dropdown } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import '../CommunityAdd/Eventlistpage.css';

const localizer = momentLocalizer(moment);

function Event_day() {
    const [events, setEvents] = useState([]);
    const [tooltipEvent, setTooltipEvent] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
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
        return (
            <div
                onMouseEnter={(e) => handleMouseEnter(event, e)}
                onMouseLeave={handleMouseLeave}
                className="calendar-event"
            >
                <h1>{event.event_title}</h1>
            </div>
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


    const imageConvert = (e) => {
        let image1 = JSON.parse(e);
        console.log('image1', image1);
        return 'data:image;base64,' + image1.base64Data
    }

    const customTooltip = () => {
        if (!tooltipEvent || !tooltipVisible) return null;

        const converted_image = imageConvert(tooltipEvent.event_image);
        const tooltipStyle = {
            position: 'absolute',
            top: `${tooltipPosition.top + 10}px`,
            left: `${tooltipPosition.left}px`,
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

        return (
            <div className="custom-tooltip" style={tooltipStyle}>
                {converted_image && (
                    <img
                        src={converted_image}
                        alt={tooltipEvent.event_title}
                        style={imageStyle}
                    />
                )}
                <h1>{tooltipEvent.event_title}</h1>
                <h4>{tooltipEvent.event_start_date}</h4>
                <div>
                    <h4>{formattedStartTime} - {formattedEndTime}</h4>
                </div>
            </div>
        );
    };

    return (
        <div className='addformfullcss'>
            <div id='myDiv' className='txtbacgroundimg'>
                <Header></Header>
                <div className="parallax" style={{ transform: `translateY(${scrollY1}px)`, }}>
                    <div className='parallax-content'>
                        <h1 className='text-center font-weight-bold hongkong-font' style={{ fontSize: '50px' }}>Events</h1>
                        <p className='text-center banner_text oppotunity_banner_small_text' >Handmade events are an immersive journey into a world of craftsmanship, culture, and creativity.Some are sensory delights where vibrant colors, intricate textures, and diverse traditions come to life, some connect us to the roots of our knowledge and lifestyle and some make us hope for a conscious future. </p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        {/* <input type='Checkbox' name='radiofullev'
                            className="mx-2 custom-checkbox"
                            checked={showOnlyCDExclusives}
                            onChange={handleShowOnlyCDExclusivesChange} />
                        <label className='checkbox-labelone'>Show only CD Exclusives</label> */}
                    </div>
                    <div className='col-6'>
                        <div className='d-flex justify-content-end'>
                            <a href="/Eventform" className='txteventcol'>  <Button variant="secondary" className='formaddev'>Add Event</Button></a>
                        </div>
                    </div>
                </div>
                <div className='searchevent'>
                    <FaSearch className="search-icon1" />
                    <input type='text' className='inptsearch' placeholder='Search for events' value={search} onChange={(e) => setSearch(e.target.value)}></input>
                    <button className='btnfinevent' onClick={fetchSearchEventDetails}>Find Events</button>
                    <a class="inline-p" style={{ textDecoration: 'none' }}  href="/event">List</a>
                    <a class="inline-p" style={{ textDecoration: 'none' }}  href="/EventCalendar">Month</a>
                    <a class="inline-p" style={{ textDecoration: 'underline' }}>Day</a>
                </div>

                <div className="event-calendar-container mt-5">
                    {/* <h1>Event Calendar</h1> */}

                    <Calendar
                        ref={calendarRef}
                        localizer={localizer}
                        events={events.map((event) => ({
                            ...event,
                            start: new Date(event.event_start_date + 'T' + event.event_start_time),
                        }))}
                        startAccessor={(event) => new Date(event.start)}
                        endAccessor={(event) => new Date(event.start)}
                        style={{ height: 700 }}
                        components={{
                            event: customEvent,
                        }}
                        defaultView="day"
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

export default Event_day;
