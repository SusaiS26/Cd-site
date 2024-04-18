
import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer'
import { FaSearch } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaInstagramSquare } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import Images from '../Images/Imagespic';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Eventoppo.css'

function Eventoppo() {
  return (
    <div >
      <div id='myDiv' className='txtbacgroundimg'>
        <Header></Header>
        {/* <img src={Images.Fullbackground} /> */}

        <h1 className='txtmemheader'>Events and Opportunities</h1>
        <p className='txtmemone'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        <p className='txtmemtwo'>  elit, sed do eiusmod tempor incididunt ut labore et</p>
        <p className='txtmemthree'>  dolore magna aliqua.</p>
      </div>
      <div className='row alleventsi'>
        <div className='col-4'>
          <h1 className='txtallst'>All</h1>
        </div>
        <div className='col-4'>
          <h1 className='txteventcol'>Events</h1>
        </div>
        <div className='col-4'>
          <u><h1 className='txteventcol'>Opportunities</h1></u>
        </div>
      </div>
      <div className='row d-flex justify-content-between '>
        <div>
          <input type='Checkbox' name='radiofullev' className="mx-2 custom-checkbox"  />
          <label className='checkbox-labelone'>Show only CD Exclusives</label><br />
        </div>
        <div ><Button variant="secondary" className='btnaddoppo'>Add Event or opportunity</Button>
        </div>
      </div>
      <div className='d-flex justify-content-around martopcss'>
                <div >

                    <img src={Images.Allartisanfemale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3>Embroidery workshop</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>June 03-13</p>
                    </div>
                </div>
                <div>
                    <img src={Images.Allartisanmale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>June 03-13</p>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartfe2} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>June 03-13</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <div >
                    <img src={Images.Allartisanmale} className='imgvieimage' />
                    <div>
                        <div className='dvpformmrg'>
                            <h3>Kalyan Joshi</h3>
                            <FaMapMarkerAlt className='cssheight' />
                            <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                            <p className='txtprsize'>June 03-13</p>
                        </div>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartfe2} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>June 03-13</p>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartisanfemale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>June 03-13</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <div >
                    <img src={Images.Allartfe2} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>June 03-13</p>
                    </div>
                </div>

                <div >
                    <img src={Images.Allartisanfemale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>June 03-13</p>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartisanmale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>June 03-13</p>
                    </div>
                </div>
            </div>
      
      <div className='txtbottomt d-flex justify-content-center'>
        <div><h6 className='textcenter'>Know of an event or opportunity?</h6></div>
        <div><Button className='btnstyle'>Tell us</Button></div>
      </div>

      <div>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default Eventoppo;

