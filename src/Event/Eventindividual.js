import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from '../Header/header';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';
import Footer from '../Footer/footer'
import { faAngleDoubleLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function EventIndividual() {
    const location = useLocation();
    const eventid = location.state.ID;
    const [eventindlist, seteventindlist] = useState([])
    console.log('eventid', eventindlist)

    useEffect(() => {
        fetchEventIndividual(eventid);
    }, []);

    const fetchEventIndividual = (id) => {
        axios.get(`${apiURL}/UserMaster/event_view_get_id?id=${id}`)
            .then(response => {
                console.log(response.data.data, "Fetched data successfully");
                seteventindlist(response.data.data);
            })
            .catch(error => {
                console.error("Error fetching artisan data:", error);
            });
    };
    const uploaImage = (e) => {
        let image1 = JSON.parse(e);
        console.log('image1', image1);
        return 'data:image;base64,' + image1.base64Data
    }

    return (
        <div>
            <Header />
            <div className='container mt-4'>
                <div style={{ display: 'flex' }}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} className='angle-left' />
                    <Link to='/event'>
                        <h3 style={{ color: '#000' }}>All Events</h3>
                    </Link>
                </div>
                <div className='mt-4'>
                    {eventindlist && eventindlist.map((item, i) =>
                        <div className='col'>
                            <h1 className='mt-2 mb-4'>{item.event_title}</h1>
                            <h5 className='mt-2 mb-4'>{item.event_start_date} @ {item.event_start_time} - {item.event_end_date} @ {item.event_end_time}</h5>
                            {JSON.parse(item.event_image) != '' ?
                                <div>
                                    <img
                                        alt='Event'
                                        className='imgsize'
                                        style={{ margin: '0 auto', display: 'flex' }}
                                        src={uploaImage(item.event_image)}
                                    />
                                </div> : null
                            }
                            <p className='event-individual-des'>{item.description}</p>
                            <hr />
                            <div className='mb-5'>
                                <h2>DETAILS</h2>
                                <h4>Start:</h4>
                                <p className=''>{item.event_start_date} @ {item.event_start_time}</p>
                                <h4>End:</h4>
                                <p className=''>{item.event_end_date} @ {item.event_end_time}</p>
                                <h4>Website:</h4>
                                <a className='website-color'>{item.event_web_site}</a>
                                <h2 className='mt-4'>VENUE</h2>
                                <p className=''>{item.venue_details}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default EventIndividual
