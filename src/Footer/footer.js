import React from 'react'

function Footer() {
    return (
        <div>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-sm-4 col-xs-12" style={{ borderRight: "1px solid white" }}>
                            <div class="single_footer">
                                <h6 className='footerh6_1'>Creative Dignity</h6>
                                {/* <h6 className='footerh6 mt-4'>Some text about CD’s mission</h6>
                                <h6 className='footerh6 mt-4'>Touching lives of artisans</h6> */}
                                {/* <p class="footerh6_2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> */}
                                <p class="footerh6_2" >A pandemic-born movement collectivizing the efforts in the Indian handmade sector enabling artisans to be equal and active participants in building a thriving ecosystem of the future that brings well-being for the planet and people.</p>
                                <div className='row mt-4'>
                                    <div className='col-md-4'>
                                        <h6 className='footerh6_2'>© 2023 — 2024</h6>
                                    </div>
                                    {/* <div className='col-md-4'>
                                        <h6 className='footerh6_2'>Privacy Policy </h6>
                                    </div>
                                    <div className='col-md-4'>
                                        <h6 className='footerh6_2'>Terms of use</h6>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-lg-4 col-sm-4 col-xs-12">
                            <div class="single_footer">
                                <h6 className='footerh6'>Services</h6 className='footerh6'>
                                <ul>
                                    <li><a>Lorem Ipsum</a></li>
                                    <li><a>Simply dummy text</a></li>
                                    <li><a>The printing and typesetting </a></li>
                                    <li><a>Standard dummy text</a></li>
                                    <li><a>Type specimen book</a></li>
                                </ul>
                            </div>
                        </div> */}


                        {/* <div class="col-md-1 col-sm-4 col-xs-12" style={{ borderRight: "1px solid white" }}>
                            <div></div>
                        </div>
                        <div class="col-md-1 col-sm-4 col-xs-12">
                            <div></div>
                        </div> */}



                        <div class="col-md-8 col-sm-4 col-xs-12">
                            <div className='container-fluid row'>
                                <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6'>About us</h6 >
                                        <ul>
                                            <li><a className='footer_decoration' href='https://www.inkmyweb.net/cd/about-us/'>Our story</a></li>
                                            <li><a className='footer_decoration' href="https://www.inkmyweb.net/cd/people/">People</a></li>
                                            <a className='footer_decoration footer_a_tag' href="https://www.inkmyweb.net/cd/collaborators-supporters/" >Collaborators &amp; supporters</a>

                                            {/* <a href="https://www.inkmyweb.net/cd/collaborators-supporters/" class="menu-link">Collaborators &amp; supporters</a> */}
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6'>Network</h6 >
                                        <ul>
                                            <a className='footer_decoration footer_a_tag' href='/artisan' >Artisan directory</a>
                                            <li><a className='footer_decoration' href='/member'>Members</a></li>
                                            {/* <li><a>Network</a></li>
                                            <li><a>Network</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6'>What's on</h6 >
                                        <ul>
                                            <li><a className='footer_decoration' href='https://www.inkmyweb.net/cd/programme/'>Programs</a></li>
                                            <li><a className='footer_decoration' href='/event'>Events</a></li>
                                            <li><a className='footer_decoration' href='/opportunities'>Opportunities</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6'>Media</h6 >
                                        <ul>
                                            <li><a className='footer_decoration' href="https://www.inkmyweb.net/cd/instagram/">Instagram</a></li>
                                            <li><a className='footer_decoration' href="https://www.inkmyweb.net/cd/blog/">Blog</a></li>
                                            <li>
                                            <a className='footer_decoration footer_a_tag' href='/interesting-read' >Interesting reads</a>
                                            </li>
                                            <li><a className='footer_decoration footer_a_tag' href='https://www.inkmyweb.net/cd/press/'>CD in the press</a></li>
                                            {/* <li><a>CD in the press</a></li> */}

                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6'>Get involved</h6 >
                                        <ul>
                                            <li><a className='footer_decoration' href="/Volunteerform">Volunteer</a></li>
                                            {/* <li><a>Become a member</a></li> */}
                                            <a className='footer_decoration footer_a_tag' href='/Member_form' >Become a member</a>
                                            <li><a className='footer_decoration' href='https://pages.razorpay.com/pl_IDWr28ZHUL1f07/view'>Donate</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6'>More</h6 >
                                        <ul>
                                            <li><a className='footer_decoration' href='https://www.inkmyweb.net/cd/resources/'>Resources</a></li>
                                            <li><a className='footer_decoration' href='https://www.inkmyweb.net/cd/contact-us/'>Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6'>Community</h6 >
                                        <ul>
                                            <li><a>Community</a></li>
                                            <li><a>Community</a></li>
                                            <li><a>Community</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6' >Projects</h6 >
                                        <ul>
                                            <li><a>Projects</a></li>
                                            <li><a>Projects</a></li>
                                            <li><a>Projects</a></li>
                                            <li><a>Projects</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6' >Events</h6 >
                                        <ul>
                                            <li><a>Events</a></li>
                                            <li><a>Events</a></li>
                                            <li><a>Events </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-12">
                                    <div class="single_footer single_footer_address">
                                        <h6 className='footerh6'>Media</h6>
                                        <ul>
                                            <li><a>Media</a></li>
                                            <li><a>Media</a></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>

                        </div>
                        {/* <div class="col-md-4 col-sm-4 col-xs-12">
                            <div class="single_footer single_footer_address">
                                <h6 className='footerh6'>Subscribe today</h6 className='footerh6'>
                                <div class="signup_form">
                                    <form action="#" class="subscribe">
                                        <input type="text" class="subscribe__input" placeholder="Enter Email Address" />
                                        <button type="button" class="subscribe__btn"><i class="fas fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                            {/* <div class="social_profile">
                                <ul>
                                    <li><a><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a><i class="fab fa-twitter"></i></a></li>
                                    <li><a><i class="fab fa-google-plus-g"></i></a></li>
                                    <li><a><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div> */}
                        {/* </div> */}
                    </div>
                    {/* <div class="row">
                        <div class="col-lg-12 col-sm-12 col-xs-12">
                            <p class="copyright">Copyright © 2019 <a>Akdesign</a>.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer