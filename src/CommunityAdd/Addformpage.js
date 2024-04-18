import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer'
import './Addformpage.css';
import { FaSearch } from 'react-icons/fa';


import { GrNext } from 'react-icons/gr';
import { Button, Dropdown } from 'react-bootstrap';
import Images from '../Images/Imagespic';



function Addformpage() {



    return (
        <div className='addformfullcss'>
            <div id='myDiv' className='txtbacgroundimg'>
                <Header></Header>
                <h1 className='txtmem'>Events</h1>
            </div>
            <div className='row d-flex justify-content-around titlecssone'>

                <div className='eventcursor'>
                    <a href="/Eventlist" className='txteventcol'> <h1>Events</h1></a>

                </div>
                <div className='eventcursor'>

                    <a href="/Opportunity" className='txteventcol'>  <h1>Opportunities</h1></a>
                </div>

            </div>
            <div className='d-flex justify-content-end'>
            <a href="/Eventform" className='txteventcol'>  <Button variant="secondary" className='formaddev'>Add Event</Button></a>
            </div>

            <div className='searchevent'>
                <FaSearch className="search-icon" />
                <input type='text' className='inptsearch' placeholder='search for events'></input>
                <button className='btnfinevent'>Find Events</button>
                <p class="inline-p">List</p>
                <p class="inline-p">Month</p>
                <p class="inline-p">Day</p>
            </div>

            <div className='d-flex justify-content-start clendarconta'>
                <div className='todayst'><p className='txttodatcs'>Today</p></div>
                <select className='Today-calender'>
                    <option>Upcoming</option>
                    <option>Tamil</option>
                    <option>English</option>
                </select>
            </div>
            <div>
                {/* <p className='januaryp'>Upcoming</p> */}
            </div>
            <div className='evetcolor'>
                <p className='noupcome'>There are no upcoming events.</p>
            </div>
            <div>
                <h1 className='txtmarfrifri'>Latest Past Events</h1>
            </div>
            <div className='txtmarfrifri'>
                <h1>
                    FRI
                </h1>
                <h1>
                    20
                </h1>
            </div>
            <div className=' row txtmarfri'>
                <div className='col-6'>

                    <p className='txtparagrap'>January 20 @ 12:00 am - January 22 @ 11:59 pm</p>
                    <h1 className='txtprojectf'>Project Tarasha Artisan Direct</h1>
                    <h3 className='txtpavinta'>The Vintage Garden</h3>
                    <p className='txtparagrap'>Patkar Bungalow, 34D Turner Road, Bandra West Mumbai. Same compound as Nicobar & Diamantina, Mumbai, Maharashtra, India
                        Project Tarasha Artisan Direct - A Constellation of Art, Craft and Design brings together the most talented artisans from nooks and corners of the country, an expert curator from the heart of Mumbai, designers, pattern makers, tailors, performing artists, visual artists, speakers, craft experts and the list goes on... Everyone striving to create an accentuated, …
                        Project Tarasha Artisan Direct</p>
                    Read More »
                </div>
                <div className='col-6'>
                    <img src={Images.artdir} className='imgartimag' />
                </div>
            </div>
            <div className='row'></div>
            {/* <div className='d-flex justify-content-between'>
                <div>
                    <FaAngleLeft size={32} />
                    <p>Previous</p>
                </div>
                <div>
                    <FaAngleRight size={32} />
                    <p>Next</p>
                </div>
            </div> */}
            {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="secondary" className='formaddev'>Add Event</Button>
            </div> */}

            <div class='txtbottomt d-flex justify-content-between'>
                <h1 className='txtsubforup'><p className='' >Subscribe for updates</p></h1>
                <input type='text' className='inpsubupdate' placeholder='Email'></input>
                <Button variant="secondary" className='Subscriber'>Subscriber</Button>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    )
}

export default Addformpage
