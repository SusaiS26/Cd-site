import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import './Memberprofile.css';
import { AiFillFacebook } from 'react-icons/ai';
import { Button, Container } from 'react-bootstrap';

function Memberprofile() {
    return (
        <div className='memberprofilecss'>
            <div><Header></Header></div>
            <Container>
                <div className='container'>
                    <p className='profilecss'>XXX {'>'} My Profile</p>
                    <img src={Images.manimage} className='imagesprofile'></img>

                    <div className='mempromt'>
                        <div className='row '>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='textonepr row'>Text</h3>
                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='textonepr row'>Text</h3>
                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='textonepr row'>Text</h3>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='textonepr row'>Text</h3>
                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='textonepr row'>Text</h3>
                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='textonepr row'>Text</h3>
                            </div>
                        </div>
                        <div className='col-12'>
                            <p className='under-line'></p>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-4'>
                            <p className='areaofwork row'>Area of work</p>
                            <h4 className='texttilede row'>Textile Design</h4>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit row'>Non-editable field</p>
                            <h3 className='textonepr row'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit row'>Non-editable field</p>
                            <h3 className='textonepr row'>Text</h3>
                        </div>
                    </div>

                    <div className='  mt-5 mb-4'>
                        <p className='nonedit'>Non-editable field</p>
                        <h3 className='textonepr'>Text</h3>
                    </div>
                    <div className='  mt-5 mb-4'>
                        <p className='nonedit'>Name</p>
                        <h3 className='textonepr'>Arjun Dev</h3>
                    </div>

                    <div className=' mt-5 mb-4'>
                        <p className='nonedit'>Type of Member</p>
                        <h3 className='textonepr'>Individual</h3>
                    </div>
                    <div className=' mt-5 mb-4'>
                        <p className='nonedit'>Editable Text field</p>
                        <h3 className='textonepr'>Text</h3>
                    </div>
                    <div className=' mt-5 mb-4'>
                        <p className='nonedit'>Area of work</p>
                        <h3 className='textonepr'>Textile Design</h3>
                    </div>
                    <div className=' mt-5 mb-4'>
                        <p className='nonedit'>Email</p>
                        <h3 className='textonepr'>kdjrhtk@gajkjd.com</h3>
                    </div>
                    <div className='mt-5 mb-4'>
                        <p className='nonedit'>Editable field dropdown</p>
                        <select className='selectoptiont'>
                            <option>Selected Option</option>
                            <option>Tamil</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Telungu</option>
                            <option>Malayalam</option>
                            <option>Kanadam</option>
                        </select>
                    </div>

                    <div>
                        <p className='nonedit'>Editable Links</p>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div className='facebarjun'><p className='fbpading'>facebook.com/ArjunDev</p></div>
                        </div>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div className='facebarjun'><p className='fbpading'>facebook.com/ArjunDev</p></div>
                        </div>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div className='facebarjun'><p className='fbpading'>facebook.com/ArjunDev</p></div>
                        </div>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div className='facebarjun'><p className='fbpading'>facebook.com/ArjunDev</p></div>
                        </div>
                    </div>
                    <div>
                        <p className='editable'>Non-Editable Links</p>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div className='facebarjun'><p className='fbpading'>facebook.com/ArjunDev</p></div>
                        </div>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div className='facebarjun'><p className='fbpading'>facebook.com/ArjunDev</p></div>
                        </div>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div className='facebarjun'><p className='fbpading'>facebook.com/ArjunDev</p></div>
                        </div>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div className='facebarjun'><p className='fbpading'>facebook.com/ArjunDev</p></div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='btnsizeartone'>
                            <Button variant="secondary" className='btnstyleone'>Aaaaaa   x</Button>
                            <Button variant="primary" className='btnstyleone'>Bbbbbb   x</Button>
                            <Button variant="primary" className='btnstyleone'>Cccccc   x</Button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='btnsizeartonetwo'>
                            <Button variant="secondary" className='btnstyleone'>Dddddd   x</Button>
                            <Button variant="primary" className='btnstyleone'>Eeeeee   x</Button>
                        </div>
                    </div>

                    <div className='row'>
                        <Button variant="secondary" className='col-12 col-md-2 btnmemberlist btn-block btn-lg'>Share</Button>
                    </div>

                    {/* <Button variant="secondary" className='btnmemberlist btn-block btn-lg'>Add</Button> */}
                    <p className='editable'>Multi-select Non-editable</p>
                    <div className='row'>
                        <div className='btnsizeartone'>
                            <Button variant="secondary" className='btnstyleone'>Aaaaaa   x</Button>
                            <Button variant="primary" className='btnstyleone'>Bbbbbb   x</Button>
                            <Button variant="primary" className='btnstyleone'>Cccccc   x</Button>
                        </div>
                    </div>
                    <div className='row btnmgbotton'>
                        <div className='btnsizeartonetwo'>
                            <Button variant="secondary" className='btnstyleone'>Dddddd   x</Button>
                            <Button variant="primary" className='btnstyleone'>Eeeeee   x</Button>
                        </div>
                    </div>
                </div>
            </Container>

            <div><Footer></Footer></div>
        </div >
    )
}

export default Memberprofile
