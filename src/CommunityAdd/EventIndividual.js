import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../Header/header';
import Images from '../Images/Imagespic';
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';
import '../Opportunitypg.js/Opportunitiessummary.css';
import { Button } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Footer from '../Footer/footer'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Individual_Header from '../Header/new_header';
import SocialShareModal from '../New/Social_share';
import ReactLoading from "react-loading";
import { BiWorld } from 'react-icons/bi';
// import Juniordesigners from '../../../CD-Site_UI/src/Images/Junior designers.jpg';


function EventIndividual() {

    const { eventid } = useParams();

    let event_id = window.atob(eventid);

    // const location = useLocation();
    // const eventid = location.state.ID;
    const [eventindlist, seteventindlist] = useState('')
    console.log("eventtime", eventindlist)
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [image, setimage] = useState()
    console.log('eventid', image)
    const [banerimage, setbanerimage] = useState()
    const [eventData, setEventData] = useState(null);
    const [Opportunitity, setOpportunitity] = useState('')
    const [sharedData, setSharedData] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const descriptionHtml = eventindlist.description;


    useEffect(() => {
        fetchEventIndividual(event_id);
    }, [event_id]);

    const openShareModal = () => {
        console.log("open")
        setIsShareModalOpen(true);
    };

    const closeShareModal = () => {
        setIsShareModalOpen(false);
    };
    const fetchEventIndividual = (id) => {
        setIsLoading(true);
        axios.get(`${apiURL}/UserMaster/event_view_get_id?id=${id}`)
            .then(response => {
                console.log(response.data.data, "Fetched data successfully");
                setEventData(response.data.data[0]);
                setOpportunitity(response.data.data[0]);
                seteventindlist(response.data.data[0]);
                setimage(JSON.parse(response.data.data[0]['event_image']))
                setbanerimage(JSON.parse(response.data.data[0]['banner_image']))
                setSharedData({
                    eventTitle: response.data.data[0].event_title,
                    eventImage: response.data.data[0]['event_image'],
                    eventStartDate: formattedStartDate, // Use the formatted date you want to share
                    eventVenue: response.data.data[0].venue_details,
                    city: response.data.data[0].city,
                    state: response.data.data[0].state,
                });
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching artisan data:", error);
                setIsLoading(false);
            });
    };
    const eventStartTime = eventindlist ? eventindlist.event_start_time : '';
    const eventEndTime = eventindlist ? eventindlist.event_end_time : '';
    const event_start_date = eventindlist ? eventindlist.event_start_date : '';

    // const formatDateToMonthDateYear = (dateString) => {
    //     const options = { year: 'numeric', month: 'long', day: 'numeric' };
    //     const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    //     return formattedDate;
    // }
    const formatDateToMonthDateYearWithDay = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    }

    const formattedStartDate = formatDateToMonthDateYearWithDay(event_start_date);
    function formatTimeWithAMPM(time) {
        const [hours, minutes] = time.split(':').map(Number);
        let period = 'AM';

        if (hours >= 12) {
            period = 'PM';
            if (hours > 12) {
                hours -= 12;
            }
        }

        return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
    }
    const convertToAMPM = (time) => {
        const [hours, minutes] = time.split(':');
        let period = 'AM';
        let hours12 = parseInt(hours, 10);
        if (hours12 >= 12) {
            period = 'PM';
            return `${hours12}:${minutes} ${period}`;
        } else if (hours12 === 0) {
            // If it's midnight (00:00), convert to 12:00 AM
            return `${hours12}:${minutes} ${period}`;
        }
        return `${hours12}:${minutes} ${period}`;
    };


    return (
        <div className='opportunitypagecss'>
            {/* <Header /> */}
            <Individual_Header />
            <div className='container' style={{ marginTop: '115px' }}>

                {/* <p class='mx-5 mt-5 px-5' >
                    <Link to='/event' className='opportunity-link'>
                        <span className='evetop mx-1'>Eventlist</span> </Link><span class='mx-1'>
                        <FontAwesomeIcon icon={faChevronRight} className='right-icons' />
                    </span>
                    <span class='mx-1'><a href='#' className='event-junior-designer-text'>Junior designer</a></span>
                </p> */}
                {isLoading ? (
                    <div className='d-flex justify-content-center mt-5'>
                        <ReactLoading type="spin" color="#134f5c" height={100} width={50} />
                    </div>
                ) : (
                    <>
                        <div className='d-flex main-content-section'>
                            <div className='col-xl-2 col-md-2 col-lg-2 left-section'></div>
                            <div className='col-xl-8 col-md-8 col-lg-8 right-section'>
                                {/* <img src={Images.Logooppor} className='imglog mt-5 mb-5'></img> */}
                                <div>
                                    <div class="cd_breadcrumbs_container px-2 mb-5 br-mrg-top">
                                        <span>
                                            {/* <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                                            </span> &gt;  <span><a href="/event">Events</a>
                                            </span> */}
                                            <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                                            </span> &gt;  <span><a href="/event">Events</a>
                                            </span>&gt; <span>{eventindlist.event_title}</span>
                                        </span>
                                    </div>
                                </div>
                                {image ?
                                    <img src={`data:image/png;base64,${image.base64Data}`} alt="Base64 Image" className='imglog opper-individual-img mt-5 mb-5' /> :
                                    <img src={Images.Logooppor} className='imglog mt-5 mb-5'>

                                    </img>

                                }
                                <h3 className='event-tarasha-text'>
                                    {eventindlist.cd_member === "Yes" ? (
                                        <Button
                                            variant="secondary"
                                            className='event-buttons'
                                        >
                                            <span className='spanlist'>CD Exclusive</span>
                                        </Button>
                                    ) : null}

                                </h3>



                                <h1 className='event-junior-tarasha-text hongkong-font'>{eventindlist.event_title}</h1>
                                <div className='row'>
                                    <div className='col-xl-12 col-md-12 col-lg-12 mt-2 tags_fit mb-3' style={{
                                        // display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        paddingLeft: '0px',
                                    }} >
                                        {eventindlist.categories ? JSON.parse(eventindlist.categories).map((category, index) => (
                                            <Button
                                                key={index}
                                                // variant="secondary"
                                                className='event-buttons event_tags'

                                            >
                                                <span className='spanlist'>{category}</span>
                                            </Button>
                                        )) : null}
                                    </div>



                                    <div style={{ display: 'flex', alignItems: 'center' }}>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 28 30" fill="none">
                                            <path d="M24.5455 2.72727H23.1818V0H20.4545V2.72727H6.81818V0H4.09091V2.72727H2.72727C1.22727 2.72727 0 3.95455 0 5.45455V27.2727C0 28.7727 1.22727 30 2.72727 30H24.5455C26.0455 30 27.2727 28.7727 27.2727 27.2727V5.45455C27.2727 3.95455 26.0455 2.72727 24.5455 2.72727ZM24.5455 27.2727H2.72727V9.54545H24.5455V27.2727Z" fill="#828282" />
                                        </svg>
                                        <div>

                                            <div className='mt-3 ml-3'>
                                                {eventindlist && eventindlist && (

                                                    <p className='plist'>

                                                        {formatDateToMonthDateYearWithDay(event_start_date)} | {formatTimeWithAMPM(eventStartTime)} - {convertToAMPM(eventindlist.event_end_time)}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mt-1'>
                                    <div style={{ display: 'flex' }}>
                                        {/* <FaMapMarkerAlt className='csshemap' /> */}
                                        {/* <p className='onlist'>Online</p> */}
                                        {/* <p className=' onlist '>{eventindlist.event_mode}</p> */}
                                        {eventindlist.event_mode === "online" && (
                                            <div>
                                                <a href={''} className='event-link'>
                                                    <p className='locationcol artisan-link mb-4'>{eventindlist.link}</p>
                                                </a>
                                            </div>
                                        )}

                                        {eventindlist.event_mode === "offline" && (
                                            <div>
                                                <div className='locationcol artisan-link d-flex justify-content-start'>
                                                    <FaMapMarkerAlt className='cssheight' />

                                                    <p className='locationcol artisan-link mb-3'>
                                                        {eventindlist.venue_details && (
                                                            <span className="equal-spacing">{eventindlist.venue_details}</span>
                                                        )}
                                                        {(eventindlist.city && eventindlist.venue_details) && (
                                                            <span className="equal-spacing">, </span>
                                                        )}
                                                        {eventindlist.city && (
                                                            <span className="equal-spacing">{eventindlist.city}</span>
                                                        )}
                                                        {(eventindlist.city && eventindlist.state) && (
                                                            <span className="equal-spacing">, </span>
                                                        )}
                                                        {eventindlist.state && (
                                                            <span className="equal-spacing">{eventindlist.state}</span>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                        {eventindlist.event_mode === "hybrid" && (
                                            <div>

                                                <div className='locationcol artisan-link d-flex '>
                                                    <FaMapMarkerAlt className='cssheight mt-4' />

                                                    <p className='locationcol artisan-link mb-3 mt-3'>
                                                        <span className="equal-spacing">{eventindlist.venue_details}</span>
                                                        <span className="equal-spacing">, {eventindlist.city}</span>
                                                        <span className="equal-spacing">, {eventindlist.state}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div class="row  mb-4 ">
                                    <div className='col-xl-12 col-md-12 col-lg-12 tags_fit'>
                                        {eventindlist.event_web_site && (
                                            <>
                                                <BiWorld className='cssheightworld' style={{ fontSize: '30px' }} />
                                                <a className='locationcol artisan-link mb-3 ml-2' href={eventindlist.event_web_site} target="_blank" rel="noopener noreferrer">
                                                    {eventindlist.event_web_site}
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {eventindlist.event_cost && (
                                    <div className='row px-3 mb-2 locationcol'>
                                        Event Fee:  {eventindlist.event_cost}
                                    </div>
                                )}
                                <div className='row'>
                                    <div className='col-12 col-md-2'>
                                        <Button className='btnshare btn-lg'
                                            onClick={openShareModal}>Share</Button>
                                    </div>
                                    {/* <div className='mt-5' style={{ width: '770px' }}>
                                        {eventindlist.description && (
                                            <div>
                                                <span className='job-list'>{eventindlist.description}</span>
                                            </div>
                                        )}
                                    </div> */}

                                    <div className='mt-5'>
                                        {/* <div className='mt-5' style={{ width: '770px' }}> */}
                                        <div className='individual-para' dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
                                    </div>
                                    <div className='col-12 mt-5 mb-5'>
                                        {banerimage ?
                                            <img src={`data:banerimage/png;base64,${banerimage.base64Data}`} alt="Base64 Image" />
                                            : null
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                )}

            </div>
            <Footer />
            <>
                <SocialShareModal
                    // isOpen={isShareModalOpen}
                    // onClose={closeShareModal}
                    // shareUrl='https://app.creativedignity.org/event'
                    // title={eventindlist.event_title}
                    // sharedData={sharedData}
                    isOpen={isShareModalOpen}
                    onClose={closeShareModal}
                    shareUrl={`https://app.creativedignity.org/EventIndividual/${eventid}`}
                    title={eventindlist.event_title}
                    location={eventindlist.venue}
                    closingDate={eventindlist.event_start_date}
                    eventId={eventid}
                />

            </>
        </div>
    )
}

export default EventIndividual