import React, { useState, useEffect } from 'react';
// import './Allartisanlandingpage.css'
import '../Artisan/Allartisanlandingpage.css';
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Imagespic from '../Images/Imagespic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faMapLocationDot, faMapMarked, faMapMarker, faMarker } from '@fortawesome/free-solid-svg-icons';


function New_Memberlist() {


    const [event_list, setevent_list] = useState([])
    console.log('sssss', event_list)
    const [search, setSearch] = useState("");

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
        // const token = sessionStorage.getItem('data')
        axios.get(`${apiURL}/UserMaster/UserMaster/member_form_data_all_data_view`, {
            headers: {
                "accept": "application/json",
                // 'Authorization': `Bearer ${token}`,
            }
        }).then(resp => {
            setevent_list(resp.data.data)
        })
            .catch(err => {
                console.log(err)
            })
    }

    // const fetchsearchartisandetails = () => {
    //     var search_data = search;
    //     axios.get(`${apiURL}/UserMaster/UserMaster/artisan_search_data?search_query=${search_data}`, {
    //         headers: {
    //             "accept": "application/json",
    //         }
    //     }).then(resp => {
    //         setevent_list(resp.data.data)
    //     })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

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
    return (
        <div className='allartisancss'>
            <div id='myDiv' className='txtbacgroundimg'>
                <Header></Header>
                <div className="parallax" style={{ transform: `translateY(${scrollY1}px)`, }}>
                    <div className='parallax-content'>
                    <h1 className='text-center font-weight-bold hongkong-font' style={{ fontSize: '50px' }}>Members</h1>
                     {/* <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "HongKong", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <p className='text-center' style={{ width: '100%', height: '100%', color: 'white', fontFamily: "HongKong", fontWeight: '400', wordWrap: 'break-word', fontSize: '26px' }}> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                    </div>
                </div>
                {/* <h1 className='artian-head'>Artisan</h1> */}
            </div>
            {/* <div className='container mt-5'>
                <div className='col-12 row'>
                    <p className='label-head'>Home » Artisans</p>
                </div>
            </div> */}
            <Container>
                {/* <div className='col-12 row'>
                    <p className='label-allartisan'> This is an open-source repository of various talented artisans in India. The catalogues reflect the potential of an artisan workshop who can be contacted after registration. This space keeps getting updated with new catalogues and new artisans as the network grows.
                        During the pandemic, catalogues were remotely created by CD volunteers and students with the artisans, that helped many to sell their stocks. It is still a challenge for most artisans to create good catalogues for their products.</p>
                </div> */}
                <div className='txtmrgbottom px-3 mb-5'>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-2'>
                            <select className='without-box mobile-select-with'>
                                <option>Craft</option>
                                <option>Tamil</option>
                                <option>English</option>
                            </select>
                        </div>
                        <div className='col-12 col-md-2'>
                            <select className='without-box mobile-select-with'>
                                <option>Material</option>
                                <option>Tamil</option>
                                <option>English</option>
                            </select>
                        </div>
                        <div className='col-12 col-md-2'>
                            <select className='without-box mobile-select-with'>
                                <option>State</option>
                                <option>Tamilnadu</option>
                                <option>Kerala</option>
                            </select>
                        </div>
                        <div className='col-12 col-md-4 mt-3 mt-md-0'>
                            <input
                                type="text"
                                className="search-box mt-3"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <FaSearch className="search-icon"
                            //  onClick={fetchsearchartisandetails} 
                             />
                        </div>
                        <div className='col-12 col-md-2 mt-3 mt-md-0'>
                            <Button variant="warning" className='btnwant'>Get listed here</Button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div class="">
                            <div className="opportunity-cards-container">
                                <div className="oppcard-container">
                                    {event_list && event_list.map((event, key) => {
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
                                            return (
                                                <Link to={'/Artisanpage'} state={{ ID: event.id }} className='opp-cards' key={event.id}>
                                                    <div className="" key={event.id}>
                                                        {JSON.parse(event.your_photo) !== '' ? (
                                                            <div className=" opportunity-card-image">
                                                                <img
                                                                    alt='Event'
                                                                    className='imgartimag img-trasprant'
                                                                    style={{ height: imgHeight }}
                                                                    src={uploaImage(event.your_photo)}

                                                                />
                                                            </div>
                                                        ) : null}
                                                        <p className='artian-title-name mt-3'>{event.name}</p>
                                                        <div className='' style={{ display: 'flex' }}>
                                                            <FaMapMarkerAlt className='cssheight map-icon' />
                                                            <h6 className='artian-title-location mt-2'>{event.state}</h6>
                                                        </div>
                                                        <h6 className='artian-sub-head mb-5'>{event.cd_joining}</h6>
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
                                    {event_list && event_list.map((event, key) => {
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
                                            return (
                                                <Link to={'/Artisanpage'} state={{ ID: event.id }} className='opp-card' key={event.id}>
                                                    <div className="" key={event.id}>
                                                        {JSON.parse(event.your_photo) !== '' ? (
                                                            <div className=" opportunity-card-image">
                                                                <img
                                                                    alt='Event'
                                                                    className='imgartimag img-trasprant'
                                                                    style={{ height: imgHeight }}
                                                                    src={uploaImage(event.your_photo)}
                                                                // src={event.image}
                                                                />
                                                            </div>
                                                        ) : null}
                                                        <p className='artian-title-name mt-3'>{event.name}</p>
                                                        <div className='' style={{ display: 'flex' }}>
                                                            <FaMapMarkerAlt className='cssheight map-icon' />
                                                            <h6 className='artian-title-location mt-2'>{event.state}</h6>
                                                        </div>
                                                        <h6 className='artian-sub-head mb-5'>{event.cd_joining}</h6>
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
                                    {event_list && event_list.map((event, key) => {
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
                                            return (
                                                // <Link to="/Artisanpage" state={{ eventid: 1 }}>
                                                <Link to={'/Artisanpage'} state={{ ID: event.id }} className='opp-cards' key={event.id}>
                                                    <div className="" key={event.id}>
                                                        {JSON.parse(event.your_photo) !== '' ? (
                                                            <div className=" opportunity-card-image">
                                                                <img
                                                                    alt='Event'
                                                                    className='imgartimag img-trasprant'
                                                                    style={{ height: imgHeight }}
                                                                    src={uploaImage(event.your_photo)}
                                                                // src={event.image}
                                                                />
                                                            </div>
                                                        ) : null}
                                                        <p className='artian-title-name mt-3'>{event.name}</p>
                                                        <div className='' style={{ display: 'flex' }}>
                                                            <FaMapMarkerAlt className='cssheight map-icon' />
                                                            <h6 className='artian-title-location mt-2'>{event.state}</h6>
                                                        </div>
                                                        <h6 className='artian-sub-head mb-5'>{event.cd_joining}</h6>
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
                {/* <div className='column'>
                        <div className=''>
                            <img src={Imagespic.Allartisanfemale} />
                            <h4 className='artian-title-name mt-3'>Kalyan Joshi</h4>
                            <div className='mt-2' style={{ display: 'flex' }}>
                                <FontAwesomeIcon icon={faMapMarker} className='map-icon' />
                                <h6 className='artian-title-location'>Bhilwada, Rajasthan</h6>
                            </div>
                            <h6 className='artian-sub-head mb-4'>{event.cd_joining}</h6>
                        </div>
                        <div className=''>
                            <img src={Imagespic.Allartisanmale} />
                            <h4 className='artian-title-name mt-3'>Kalyan Joshi</h4>
                            <div className='mt-2' style={{ display: 'flex' }}>
                                <FontAwesomeIcon icon={faMapMarker} className='map-icon' />
                                <h6 className='artian-title-location'>Bhilwada, Rajasthan</h6>
                            </div>
                            <h6 className='artian-sub-head mb-4'>{event.cd_joining}</h6>
                        </div>
                    </div>
                    <div className='column'>
                        <div className=''>
                            <img src={Imagespic.Allartisanmale} />
                            <h4 className='artian-title-name mt-3'>Kalyan Joshi</h4>
                            <div className='mt-2' style={{ display: 'flex' }}>
                                <FontAwesomeIcon icon={faMapMarker} className='map-icon' />
                                <h6 className='artian-title-location'>Bhilwada, Rajasthan</h6>
                            </div>
                            <h6 className='artian-sub-head mb-4'>{event.cd_joining}</h6>
                        </div>
                        <div className=''>
                            <img src={Imagespic.Allartfe2} />
                            <h4 className='artian-title-name mt-3'>Kalyan Joshi</h4>
                            <div className='mt-2' style={{ display: 'flex' }}>
                                <FontAwesomeIcon icon={faMapMarker} className='map-icon' />
                                <h6 className='artian-title-location'>Bhilwada, Rajasthan</h6>
                            </div>
                            <h6 className='artian-sub-head mb-4'>{event.cd_joining}</h6>
                        </div>
                    </div>
                    <div className='column'>
                        <div className=''>
                            <img src={Imagespic.Allartfe2} />
                            <h4 className='artian-title-name mt-3'>Kalyan Joshi</h4>
                            <div className='mt-2' style={{ display: 'flex' }}>
                                <FontAwesomeIcon icon={faMapMarker} className='map-icon' />
                                <h6 className='artian-title-location'>Bhilwada, Rajasthan</h6>
                            </div>
                            <h6 className='artian-sub-head mb-4'>{event.cd_joining}</h6>
                        </div>
                        <div className=''>
                            <img src={Imagespic.Allartisanfemale} />
                            <h4 className='artian-title-name mt-3'>Kalyan Joshi</h4>
                            <div className='mt-2' style={{ display: 'flex' }}>
                                <FontAwesomeIcon icon={faMapMarker} className='map-icon' />
                                <h6 className='artian-title-location'>Bhilwada, Rajasthan</h6>
                            </div>
                            <h6 className='artian-sub-head mb-4'>{event.cd_joining}</h6>
                        </div>
                    </div> */}

            </Container>
            <div className='txtbottomt d-flex justify-content-center'>
                <div><h6 className='textcenter'>Get listed in the artisan directory</h6></div>
                <div><Button className='btnstyle footer_btn_color'>Join us</Button></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default New_Memberlist;