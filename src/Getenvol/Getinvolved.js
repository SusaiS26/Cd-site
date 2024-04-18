import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer'
import './Getinvolved.css';
import Images from '../Images/Imagespic';
import { Link } from 'react-router-dom';


function Getinvolved() {
    return (
        <div className='getinvocss'>
            <div>
                <Header></Header>
            </div>
            <div className='fullbodymarg-get'>
                <div id='myDiv' className='txtbacgroundimg'>
                    <h1 className='txtmem hongkong-font'>Get Involved</h1>
                </div>
            </div>
            <div className='container'>
                {/* <p className='profilecss'>Home » Get Involved</p> */}
                <div className='row getinvolmrg-top'>
                    <div className='col-sm-4 mb-1'>
                        <div>
                            <a href='https://www.inkmyweb.net/cd/contact-us/'>
                                <img src={Images.Contact_us_listing} className='imgvieimageget' />
                                <div className='dvpformmrg'>
                                    <h1 className='contact'>Contact us</h1>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='col-sm-4 mb-1'>
                        <Link to="/Member_form" state={{ ID: 0, Flag: "I" }}>
                            <a href="/Member_form" className='remove-underline'>
                                <img src={Images.Become_a_member_listing} className='imgvieimageget' />
                                <div className='dvpformmrg'>
                                    <a><h1 className='contact'>Become a member</h1></a>
                                </div>
                            </a>
                        </Link>
                    </div>


                    <div className='col-sm-4 mb-1'>
                        <Link to="/Volunteerform" state={{ ID: 0, Flag: "I" }}>
                            <a href="/Volunteerform">
                                <img src={Images.Volunteer_with_us_listing} className='imgvieimageget' />
                                <div className='dvpformmrg'>
                                    <a><h1 className='contact'>Volunteer with us</h1></a>
                                </div>
                            </a>
                        </Link>
                    </div>
                    {/* <Link to="/Volunteerform" state={{ ID: 0, Flag: "I" }}> */}
                    <div className='col-sm-4 mb-1'>
                        <div>
                            <a href="https://pages.razorpay.com/pl_IDWr28ZHUL1f07/view">
                                <img src={Images.Donate_to_CD_listing} className='imgvieimageget' />
                                <div className='dvpformmrg'>
                                    <a><h1 className='contact'>Donate to CD</h1></a>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* </Link> */}
                    
                        <div className='col-sm-4 mb-1'>
                        <Link to="/Artisan-Form" state={{ ID: 0, Flag: "I" }}>
                            <a href="/Artisan-Form">
                                <img src={Images.Artisan_listing} className='imgvieimageget' />
                                <div className='dvpformmrg'>
                                    <a><h1 className='contact'>Get listed as an artisan</h1></a>
                                </div>
                            </a>
                            </Link>
                        </div>
                    
                        <div className='col-sm-4 mb-1'>
                        <Link to="/interesting-read" state={{ ID: 0, Flag: "I" }}>
                            <a href="/interesting-read">
                                <img src={Images.interesting_read_listing} className='imgvieimageget' />
                                <div className='dvpformmrg'>
                                    <a><h1 className='contact'>Add an Interesting read</h1></a>
                                </div>
                            </a>
                            </Link>
                        </div>  
                    
                        <div className='col-sm-4 mb-1'>
                        <Link to="/Eventform" state={{ ID: 0, Flag: "I" }}>
                            <div>
                                <a href="/Eventform">
                                    <img src={Images.event_listing} className='imgvieimageget' />
                                    <div className='dvpformmrg'>
                                        <a><h1 className='contact'>Add an event</h1></a>
                                    </div>
                                </a>
                            </div>
                            </Link>
                        </div>
                    
                        <div className='col-sm-4 mb-1'>
                        <Link to="/Opportunity/Addopportunityform" state={{ ID: 0, Flag: "I" }}>
                            <a href="/Opportunity/Addopportunityform">
                                <img src={Images.opportunity_listing} className='imgvieimageget' />
                                <div className='dvpformmrg'>
                                    <a><h1 className='contact'>Add an opportunity</h1></a>
                                </div>
                            </a>
                            </Link>
                        </div>
                    {/* <div className='col-sm-4 mb-1'>
                        <a href="/interesting-read">
                            <img src={Images.Twineimages} className='imgvieimageget' />
                            <div className='dvpformmrg'>
                                <a><h1 className='contact'>interesting-read</h1></a>
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
            <div className='getinvfooter'>
                <Footer></Footer>
            </div>
        </div >
    )
}

export default Getinvolved;