import React from 'react'
import './Allartisan.css'
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';



function Allartisanform() {
    return (

        <div className='allartisancss'>
            <Header></Header>
            <div className='container mt-5'>
                <div className='col-12 row'>
                    <p className='label-head'>Filter/sort</p>
                </div>
            </div>
            <div className='row mt-5'>
                <select className='without-box col-2'>
                    <option>Craft</option>
                    <option>Tamil</option>
                    <option>English</option>
                </select>
                <select className='without-box col-2'>
                    <option>Material</option>
                    <option>Tamil</option>
                    <option>English</option>
                </select>
                <select className='without-box col-2'>
                    <option>State</option>
                    <option>Tamil</option>
                    <option>English</option>
                </select>
                <div className='col-2 '>
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search..."
                    />
                    <FaSearch className="search-icon" />

                </div>
                <div className='col-2'>
                    <Button variant="warning" className='btnwant'>Get list here</Button>
                </div>
            </div>
            <div className='btnsizeart'>
                <Button variant="secondary" className='btnstyle'>Example..x </Button>
                <Button variant="secondary" className='btnstyle'>Example..x </Button>
                <Button variant="secondary" className='btnstyle'>Example..x </Button>
            </div>
            <br />  <br />  <br />
            <div className='d-flex justify-content-around'>
                <div >
                    <a href="/Artisanpage">
                        <img src={Images.Allartisanfemale} alt="Allartisan Female" className="imgvieimage" />
                        <div className='dvpformmrg'>
                            <h3 className='kalyanjo'>Kalyan Joshi</h3>
                            <FaMapMarkerAlt className='cssheight' />
                            <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                            <p className='txtprsize'>Phad Painting</p>
                        </div>
                    </a>
                </div>
                <div>
                <a href="/Artisanpage">
                    <img src={Images.Allartisanmale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                    </a>
                </div>
                <div >
                    <img src={Images.Allartfe2} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <div >
                    <img src={Images.Allartisanmale} className='imgvieimage' />
                    <div>
                        <div className='dvpformmrg'>
                            <h3 className='kalyanjo'>Kalyan Joshi</h3>
                            <FaMapMarkerAlt className='cssheight' />
                            <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                            <p className='txtprsize'>Phad Painting</p>
                        </div>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartfe2} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartisanfemale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <div >
                    <img src={Images.Allartfe2} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>

                <div >
                    <img src={Images.Allartisanfemale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartisanmale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>

            </div>
            <div className='d-flex justify-content-around'>
                <div >

                    <img src={Images.Allartisanfemale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartisanmale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartfe2} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-around'>
                <div >
                    <img src={Images.Allartfe2} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>

                <div >
                    <img src={Images.Allartisanfemale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>
                <div >
                    <img src={Images.Allartisanmale} className='imgvieimage' />
                    <div className='dvpformmrg'>
                        <h3 className='kalyanjo'>Kalyan Joshi</h3>
                        <FaMapMarkerAlt className='cssheight' />
                        <p className='txtprsize' style={{ display: 'inline-block', marginLeft: '5px' }}>Bhilwada, Rajasthan</p>
                        <p className='txtprsize'>Phad Painting</p>
                    </div>
                </div>

            </div>
            <div className='txtbottomt d-flex justify-content-center'>
                <div><h6 className='textcenter'>know of an event opportunity?</h6></div>
                <div><Button className='btnstyle'>Tell us</Button></div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Allartisanform
