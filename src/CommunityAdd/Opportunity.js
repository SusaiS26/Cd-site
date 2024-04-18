import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer'
import { Button, Dropdown } from 'react-bootstrap';
import './Opportunity.css';

import { AiFillFacebook } from 'react-icons/ai';

import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { BiPhone } from 'react-icons/bi';
import { FaShoppingBag } from 'react-icons/fa';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';



function Opportunity() {
    const location = useLocation();
    const eventid = location.state.ID;


    const [artisanData, setArtisanData] = useState(''); // Initialize with an empty array

    useEffect(() => {
        fetchArtisanData(eventid);
    }, []);

    const fetchArtisanData = (id) => {
        axios.get(`${apiURL}/UserMaster/opportunity_view_get_id?id=${id}`)
            .then(response => {
                setArtisanData(response.data.data[0]);
            })
            .catch(error => {
                console.error("Error fetching artisan data:", error);
            });
    };

    const uploaImage = (e) => {
        let image1 = JSON.parse(e);
        return 'data:image;base64,' + image1.base64Data
    }

    return (
        <div className='opportunitycss'>
            <Header></Header>
            <div className='row d-flex justify-content-center titlecssone'>

                <div className='eventcursor '>

                    <a href="/Opportunity" className='txteventcol '>  <h1 >Opportunities</h1></a>
                    <br />
                    {artisanData != '' &&
                        <div>
                            <div className='row fulltop border-box d-flex justify-content-center'>
                                <div className='row'>
                                    {JSON.parse(artisanData.company_logo) != '' ?
                                        <div>
                                            <img
                                                alt='Event'
                                                className='imgsize'
                                                // className='imgartimag'
                                                style={{ height: '200px', width: 'auto' }}
                                                src={uploaImage(artisanData.company_logo)}
                                            // src={`data:image;base64,${event.event_image}`}
                                            />
                                        </div>
                                        : null
                                    }

                                </div>
                                {/* artisanData */}
                                <div className='row col-12 d-flex justify-content-center'>
                                    <h3 className='discripte'>{artisanData.tittle}</h3>
                                </div>


                                <div className=''>
                                    <h3 className='row col-12'>{artisanData.job_description}</h3><br />
                                    <h3 className='row col-12'>{artisanData.Opportunity_type}</h3> <br />
                                    <h3 className='row col-12'>{artisanData.location}</h3> <br />
                                    <h3 className='row col-12'>{artisanData.closing_date}</h3> <br />
                                    <br />
                                </div>


                            </div>

                        </div>
                    }

                </div>
            </div>

            <div>

                <div className='d-flex justify-content-end '>
                    <Link to="/Opportunity/Addopportunityform" state={{ ID: 0, Flag: "I" }}>
                        <Button variant="secondary" className='formaddev col-12'>
                            Add Opportunities
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Opportunity