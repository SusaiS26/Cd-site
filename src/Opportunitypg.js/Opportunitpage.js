import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import './opportunitypage.css';
import { Button } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Opportunitpage() {
    return (
        <div className='opportunitypagecss'>
            <Header></Header>
            <div className='row d-flex justify-content-around'>
                <div className='col'>
                    <p className='evetop'> Events and Opportunities{'>'}Junior designer</p>
                </div></div>
            <div className='row'>
                <div className='col-3'></div>
                <div className='col-7'>
                    <img src={Images.Logooppor} className='imglog'></img>
                    <h3 className='txttarash'>Tarasha</h3>
                    <h3 className='txttarash'>Posted on June 17, 2022</h3>
                    <h1 className='juniorde'>Junior designer at Tarasha</h1>
                    <div className='row'>
                        <div className='btnsizeartone'>
                            <Button variant="secondary" className='btnstyleone'>Get list here</Button>
                            <Button variant="primary" className='btnstyleone'>New Button</Button>
                            <Button variant="primary" className='btnstyleone'>New Button</Button>
                        </div>
                    </div>
                    <div className='row'>
                        <FaMapMarkerAlt className='csshemap' />
                        <p className='multiloc'>Multiple locations</p>
                    </div>
                    <div>
                        <Button className='btnshare'>Share</Button>
                    </div>
                    <p className='txthellowthtop'>Hellow there !</p>
                    <p className='txthellowthtop'>Creative Dignity in partnership with Project Tarasha is looking for young, dynamic</p>
                    <p className='txthellowthtop'> fashion, product and textile designers to work with artisan groups on a short design</p>
                    <p className='txthellowthtop'>  co-creation program.</p>
                    <p className='txthellowthtop'> The aim of this program is to improve the overall product aesthetics and relevance of</p>
                    <p className='txthellowthtop'> the craft while being sensitive to the artisan's creative process.</p>

                    <div>
                        <div className='row mrtop'>
                            <h4 className='hellowthtopex'>Experience:</h4><p className='txthellowthtop'>1-2 years of relevant design experience</p>
                        </div>
                        <div className='row mrtop'>
                            <h4 className='hellowthtopex'>Skills:</h4><p className='txthellowthtop'>Strong visualization skills, co creation spirit, updated on latest market and  design trends.</p>
                        </div>

                        <div className='row mrtop'>
                            <h4 className='hellowthtopex'>Software:</h4><p className='txthellowthtop'>Adobe Photoshop, Illustrator, Auto CAD( for 3d crafts)</p>
                        </div>
                    </div>

                    <div className='imgdesignercallout'>
                        <div className='imgdesignercalloutinner'>
                            <div className='padcss'>
                                <h1 className='applyfilltop'>Hello there!</h1>
                                <h2 className='applyfill'>Creative Dignity in partnership with Project Tarasha is looking for young,dynamic fashion,product and textile designers to work with artisan groups on a short design co-creation program.</h2>
                                <div className='row mrtop'>
                                    <h4 className='experince'>Role:</h4><p className='txthellowth'>Junior designer</p>
                                </div>
                                <div className='row mrtop'>
                                    <h4 className='experince'>Opportunity type:</h4><p className='txthellowth'>Paid</p>
                                </div>

                                <div className='row mrtop'>
                                    <h4 className='experince'>Duration:</h4><p className='txthellowth'>1 to 2 months( full time- contract based position)</p>
                                </div>
                                <div className='row mrtop'>
                                    <h4 className='experince'>Experience:</h4><p className='txthellowth'>1-2 years of relevant design experience</p>
                                </div>
                                <div className='row mrtop'>
                                    <h4 className='experince'>Skills:</h4><p className='txthellowth'>Strong visualization skills, co creation spirit, updated on latest market and  design trends.</p>
                                </div>

                                <div className='row mrtop'>
                                    <h4 className='experince'>Software:</h4><p className='txthellowth'>Adobe Photoshop, Illustrator, Auto CAD( for 3d crafts)</p>
                                </div>
                                <div className='row mrtop'>
                                    <h4 className='experince'>Responsibilities:</h4><p className='txthellowthone'>To understand the needs of the artisan group, analyze the problem,strategize and plan the course of action with the senior designer and artisans. </p>

                                    <h4 className='txthellowthone'> To work under the supervision of the senior designer, and co create with the artisans on ground.
                                        The junior designers will be required to stay in the cluster for the duration of 1-2 months for the implementation of the program.</h4>
                                    <p className='txthellowthone'>Document each and every step of the process, from the starting point,to the end of the process, including ideations, challenges and every other detail.</p>
                                </div>
                                <div>
                                    <h4 className='applyfill'>To apply fill our form:</h4>
                                    <h4 className='applyfill'>bit.ly/DesignOpportunitywithCD</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mrtop'>
                        <h4 className='experinceone'>Role:</h4><p className='txthellowthbottom'>Junior designer</p>
                    </div>

                    <div className='row mrtop'>
                        <h4 className='experincebottom'>Duration:</h4><p className='txthellowthbottom'>1 to 2 months( full time- contract based position)</p>
                    </div>

                    <div className='row mrtop'>
                        <h4 className='experincebottom'>Responsibilities:</h4><p className='txthellowthbottom'>To understand the needs of the artisan group, analyze the problem, </p>
                        <p className='txthellowthfull'>strategize and plan the course of action with the senior designer and artisans.
                            To work under the supervision of the senior designer, and co create with the artisans on ground.
                            The junior designers will be required to stay in the cluster for the duration of 1-2 months for the implementation of the program.
                            Document each and every step of the process, from the starting point,to the end of the process, including ideations, challenges and every other detail..</p>
                    </div>

                    <div className='row mrtop'>
                        <h4 className='experincebottom'>Remuneration:</h4><p className='txthellowthbottom'> ₹ 20,000 per month</p>
                    </div>

                    <div className='row mrtop'>
                        <h4 className='experincebottom'>Location: </h4>
                        <p className='txthellowthbottom'>Uttar Pradesh, Rajasthan, West Bengal and Gujarat,</p>
                        <p className='txtinterser'> If interested, please write to craftdesignlab@creativedignity.org, and we will get in touch with you.</p>
                    </div>

                </div> </div>



            <Footer></Footer>
        </div>
    )
}

export default Opportunitpage;
