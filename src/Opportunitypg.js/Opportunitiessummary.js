import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import './Opportunitiessummary.css';
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { BiWorld } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Individual_Header from '../Header/new_header';
import SocialOpportunityShareModal from '../New/OpportunitySocialShare';
import ReactLoading from "react-loading";

function Opportunitiessummary() {

    const { opportunityid } = useParams();

    let opportunity_id = window.atob(opportunityid);

    // const location = useLocation();
    // const eventid = location.state.ID;
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [Opportunitity, setOpportunitity] = useState('')
    const [image, setimage] = useState()
    const [banerimage, setbanerimage] = useState()
    const [isLoading, setIsLoading] = useState(false);
    const openShareModal = () => {
        setIsShareModalOpen(true);
    };

    const closeShareModal = () => {
        setIsShareModalOpen(false);
    };
    useEffect(() => {
        fetchArtisanData(opportunity_id);
    }, []);

    const descriptionHtml = Opportunitity.job_description;

    const fetchArtisanData = (id) => {
        setIsLoading(true);
        axios.get(`${apiURL}/UserMaster/opportunity_view_get_id?id=${id}`)
            .then(response => {
                console.log(response.data.data, "Fetched data successfully");
                setOpportunitity(response.data.data[0]);
                setimage(JSON.parse(response.data.data[0]['company_logo']))
                setbanerimage(JSON.parse(response.data.data[0]['banner_image']))
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching artisan data:", error);
                setIsLoading(false);
            });
    };
    const formatDateToMonthDateYear = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    };

    return (
        <div className='opportunitypagecss'>
            <Individual_Header />
            <div className='opp_height'>
                {/* <p class='mx-5 mt-5 px-5' >
                    <Link to='/opportunities' className='opportunity-link'>
                        <span className='evetop mx-1'>Opportunities</span> </Link><span class='mx-1'>
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
                                <div class="cd_breadcrumbs_container px-2 mb-5 mt-5">
                                    <span>
                                        {/* <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                                        </span> &gt;  <span><a href="/opportunities">Opportunities</a>
                                        </span> */}
                                        <span>
                                            <a href="https://www.inkmyweb.net/cd/">Home</a>
                                        </span> &gt; <span>
                                            <a href="/opportunities">Opportunities</a></span>
                                        &gt; <span><a>{Opportunitity.tittle}</a></span>


                                        {/* &gt; <span class="breadcrumb_last" aria-current="page">Name</span> */}

                                    </span>
                                </div>
                                {image ?
                                    <img src={`data:image/png;base64,${image.base64Data}`} alt="Base64 Image" className='imglog opper-individual-img mt-5 mb-5' /> :
                                    <img src={Images.Logooppor} className='imglog mt-5 mb-5'></img>
                                }
                                <h3 className='event-posted-text'>Posted on {formatDateToMonthDateYear(Opportunitity.created_at)}</h3>
                                <h1 className='event-junior-tarasha-text hongkong-font'>{Opportunitity.tittle}</h1>

                                {/* <div className='row'>
                                    <div className='col-xl-3 col-md-3 col-lg-3'>
                                        {Opportunitity && Opportunitity.Opportunity_type ? (
                                            <>
                                                {Opportunitity.Opportunity_type !== "+" ?
                                                    <Button variant="secondary" className='event-buttons'>
                                                        <span className='spanlist'>
                                                            {Opportunitity.Opportunity_type.split('+')[0]}
                                                        </span>
                                                    </Button>
                                                    : null}
                                            </>
                                        ) : null}
                                    </div>
                                </div> */}

                                <div className='row'>
                                    <div className='col-xl-12 col-md-12 col-lg-12 tags_fit' style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px'
                                    }}>
                                        {Opportunitity && Opportunitity.Opportunity_type ? (
                                            <>
                                                {Opportunitity.Opportunity_type !== "+" ?
                                                    <Button variant="secondary" className='event-buttons click_tag'>
                                                        <span className='spanlist' style={{ color: '#fff' }}>
                                                            {Opportunitity.Opportunity_type.split('+')[0]}
                                                        </span>
                                                    </Button>
                                                    : null}
                                            </>
                                        ) : null}

                                        {Opportunitity && Opportunitity.tags ? (
                                            <>
                                                {Opportunitity.tags.split(',').map((tag, index) => (
                                                    <Button
                                                        key={index}
                                                        variant="secondary"
                                                        className='event-buttons non_click_tag'

                                                    >
                                                        <span className='spanlist' style={{ color: '#000000' }}>{tag.trim()}</span>
                                                    </Button>
                                                ))}
                                            </>
                                        ) : null}
                                    </div>
                                </div>

                                <div class="row mt-4 mb-4">
                                    <div className='col-xl-12 col-md-12 col-lg-12 tags_fit'>
                                        {Opportunitity.instagram_url && (
                                            <>
                                                <BiWorld className='cssheightworld' style={{ fontSize: '30px' }} />
                                                <a className='locationcol artisan-link mb-3' href={Opportunitity.instagram_url} target="_blank" rel="noopener noreferrer">
                                                    {Opportunitity.instagram_url}
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>



                                <div className='row mt-2'>
                                    <div style={{ display: 'flex' }}>
                                        {/* <FaMapMarkerAlt className='csshemap' />
                                        <p className='multiloc mx-2'>{Opportunitity.venue}</p> */}

                                        {Opportunitity.opportunity_mode === "online" && (
                                            <div>
                                                <a href={''} className='event-link'>
                                                    <p className='locationcol artisan-link mb-4'>{Opportunitity.link}</p>
                                                </a>
                                            </div>
                                        )}
                                        {Opportunitity.opportunity_mode === "offline" && Opportunitity.venue_details && (
                                            <div>
                                                <div className='locationcol artisan-link d-flex justify-content-start'>
                                                    <FaMapMarkerAlt className='cssheight' />
                                                    <p className='locationcol artisan-link mb-3'>{Opportunitity.venue_details}</p>
                                                </div>
                                            </div>
                                        )}
                                        {Opportunitity.opportunity_mode === "hybrid" && (
                                            <div>
                                                {Opportunitity.venue_details && (
                                                    <div className='locationcol artisan-link d-flex '>
                                                        <FaMapMarkerAlt className='cssheight mt-4' />
                                                        <p className='locationcol artisan-link ml-2 mt-3 mb-2' >{Opportunitity.venue_details}</p>
                                                    </div>
                                                )}
                                                <a href={''} >
                                                    <p className='locationcol artisan-link ml-4'>{Opportunitity.link}</p>
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <h3 className='event-posted-text mb-3'>Application ends on {formatDateToMonthDateYear(Opportunitity.closing_date)}</h3>
                                <div className='row'>
                                    <div className='col-12 col-md-2'>
                                        <Button className='btnshare btn-lg'
                                            onClick={openShareModal}>Share</Button>
                                    </div>
                                    <div className='mt-5'>
                                        {/* <div className='mt-5' style={{ width: '770px' }}> */}
                                        <div className='individual-para' dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
                                    </div>

                                    <div className='col-12 mt-5 mb-5'>

                                        {banerimage ?
                                            <img src={`data:banerimage/png;base64,${banerimage.base64Data}`} alt="Base64 Image" /> :
                                            null
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer></Footer>
            <>
                <SocialOpportunityShareModal
                    isOpen={isShareModalOpen}
                    onClose={closeShareModal}
                    shareUrl={`https://app.creativedignity.org/Opportunitiessummary/${opportunityid}`}
                    title={Opportunitity.tittle}
                    location={Opportunitity.venue}
                    closingDate={Opportunitity.closing_date}
                    Opportunity_id={opportunityid}
                />
            </>
        </div>
    )
}

export default Opportunitiessummary;