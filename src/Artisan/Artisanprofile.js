import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import './Artisanprofile.css';
import { AiFillFacebook } from 'react-icons/ai';
import { Button, Container } from 'react-bootstrap';
function Artisanprofile() {
    return (
        <div className='artisanprofilecss'>
            <div><Header></Header></div>

            <div className='container'>
                <p className='profilecss'>XXX {'>'} My Profile</p>
                <img src={Images.manimage} className='imagesprofile'></img>

                <Container>
                    <div className='mempromt'>
                        <div className='row '>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='artisantextcss row'>Text</h3>
                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='artisantextcss row'>Text</h3>
                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='artisantextcss row'>Text</h3>
                            </div>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='artisantextcss row'>Text</h3>
                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='artisantextcss row'>Text</h3>
                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='artisantextcss row'>Text</h3>
                            </div>
                        </div>
                        <div className='col-12'>
                            <p className='under-line'></p>
                        </div>
                        <div className='row '>
                            <div className='col-4'>
                                <p className='nonedit row'>Area of work</p>
                                <h4 className='texttilededesign row'>Textile Design</h4>

                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='artisantextcss row'>Text</h3>
                            </div>
                            <div className='col-4'>
                                <p className='nonedit row'>Non-editable field</p>
                                <h3 className='artisantextcss row'>Text</h3>
                            </div>

                        </div>
                        <div className='  mt-5 mb-4'>
                            <p className='nonedit row'>Non-editable field</p>
                            <h3 className='artisantextcss row'>Text</h3>
                        </div>
                        <div className='  mt-5 mb-4'>
                            <p className='nonedit row'>Name</p>
                            <h3 className='artisantextcss row'>Arjun Dev</h3>
                        </div>

                        <div className=' mt-5 mb-4 '>
                            <p className='nonedit row'>Type of Member</p>
                            <h3 className='artisantextcss row'>Individual</h3>
                        </div>
                        <div className=' mt-5 mb-4'>
                            <p className='nonedit row'>Editable list of files</p>
                            <h3 className='artisantextcss row'>Individual</h3>
                        </div>

                        <div className="d-flex justify-content-between artisanmrgtop">
                            <div className='noneditfieldlon row'>
                                Editable text field long
                            </div>
                            <div className='paragrapEdit row'>
                                Edit
                            </div>

                        </div>
                        <div className='paragraphsize'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className='paragraphsize'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className='paragraphsize'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div className='paragraphsize'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </Container>
                <div className="d-flex justify-content-between artisanmrgtop">
                    <div className='noneditlong'>
                        Editable text field long in edit mode
                    </div>
                    <div className='paragrapEdit'>
                        Save
                    </div>
                </div>
                <div class="parent-div">
                    <div className='paragraphsize'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='paragraphsize'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='paragraphsize'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='paragraphsize'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                <Container>
                    <div className='mt-5 mb-4'>
                        <p className='areaofworkone row'>Area of work</p>
                        <h4 className='texttilede row'>Textile Design</h4>

                    </div>
                    <div className='mt-5 mb-4'>
                        <p className='areaofworkone row'>E-mail</p>
                        <h4 className='texttilede row'>kdrjggffhhj@gjjh.com</h4>
                    </div>
                    <div className='mt-5 mb-4'>
                        <p className='nonedit row'>Editable field dropdown</p>
                        <select className='selectoptiont row col-3'>
                            <option>Selected Option</option>
                            <option>Tamil</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Telungu</option>
                            <option>Malayalam</option>
                            <option>Kanadam</option>
                        </select>
                    </div>

                    <div><p className='nonedit'>Editable Links</p>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                        </div>
                    </div>
                    <div class="rowone row">
                        <div class="facebarjun col-6 col-md-3">facebook.com/ArjunDev</div>
                        <div class="fbpading col-6 col-md-3">Edit x</div>
                        {/* <!-- You can uncomment the line below if you want to include the "x" div on larger screens -->
                        <!-- <div class="xesize col-6 col-md-3">x</div> --> */}
                    </div>

                    <div className='row'>
                        <AiFillFacebook className='cssfontheight' />
                    </div>
                    <div class="rowone row">
                        <div class="facebarjun col-6 col-md-3">facebook.com/ArjunDev</div>
                        <div class="fbpading col-6 col-md-3">Edit x</div>
                    </div>
                    <p className="Website ">Website</p>
                    <div class="rowone row">
                        <div class="facebarjun col-6 col-md-3">facebook.com/ArjunDev</div>
                        <div class="fbpading col-6 col-md-3">Edit x</div>
                    </div>
                    <p className="Website ">Jaypore</p>
                    <div class="rowone row">
                        <div class="facebarjun col-6 col-md-3">facebook.com/ArjunDev</div>
                        <div class="fbpading col-6 col-md-3">Edit x</div>
                    </div>
                    <div className='row'>
                        <Button variant="secondary" className='col-12 col-md-2 btnmemberlist btn-block btn-lg'>Add</Button>
                    </div>
                    {/* <Button className='addbtn'>Add</Button> */}
                    <div>
                        <p className='nonedit'>Non-Editable Links</p>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div class="rowone ">
                                <div class="facebarjun col-12 col-md-12">facebook.com/ArjunDev</div>
                            </div>
                        </div>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div class="rowone ">
                                <div class="facebarjun col-12 col-md-12">facebook.com/ArjunDev</div>
                            </div>
                        </div>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div class="rowone ">
                                <div class="facebarjun col-12 col-md-12">facebook.com/ArjunDev</div>
                            </div>
                        </div>
                        <div className='row'>
                            <AiFillFacebook className='cssfontheight' />
                            <div class="rowone ">
                                <div class="facebarjun col-12 col-md-12">facebook.com/ArjunDev</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='nonedit'>Multi-select editable</p>
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
                        <Button variant="secondary" className='col-12 col-md-2 btnmemberlist btn-block btn-lg'>Add</Button>
                    </div>
                    <div><p className='nonedit'>Multi-select Non-editable</p></div>
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
                            <Button variant="primary" className='btnstyleone'>Eeeeee12   x</Button>
                        </div>
                    </div>
                    <div>
                        <p className='nonedit'>Editable list of files Type 1</p>
                    </div>
                    <div className='back-col-pro'>
                        <div className='row'>
                            <div className='col-12 col-md-2'>
                                <img src={Images.Lastlogo} alt='File' />
                                <p className='ghtkjhsnumber'>ghtkjhs_45729453.jpg</p>
                                <h3>Change file</h3>
                            </div>
                            <div className='col-12 col-md-7'>
                                <p className='loremipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            </div>
                            <div className='col-12 col-md-3 d-flex justify-content-between'>
                                <p className='loremipsum firstp'>Edit description</p>
                                <p className='secondp'>x</p>
                            </div>
                        </div>
                    </div>

                    <div className='back-col-pro'>
                        <div className='row'>
                            <div className='col-12 col-md-2'>
                                <img src={Images.Lastlogo} alt='File' />
                                <p className='ghtkjhsnumber'>ghtkjhs_45729453.jpg</p>
                                <h3>Change file</h3>
                            </div>
                            <div className='col-12 col-md-7'>
                                <p className='loremipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            </div>
                            <div className='col-12 col-md-3 d-flex justify-content-between'>
                                <p className='loremipsum firstp'>Edit description</p>
                                <p className='secondp'>x</p>
                            </div>
                        </div>
                    </div>


                    <div className='back-col-pro'>
                        <div className='row'>
                            <div className='col-12 col-md-2'>
                                <img src={Images.Lastlogo} alt='File' />
                                <p className='ghtkjhsnumber'>ghtkjhs_45729453.jpg</p>
                                <h3>Change file</h3>
                            </div>
                            <div className='col-12 col-md-7'>
                                <p className='loremipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            </div>
                            <div className='col-12 col-md-3 d-flex justify-content-between'>
                                <p className='loremipsum firstp'>Edit description</p>
                                <p className='secondp'>x</p>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <Button variant="secondary" className='col-12 col-md-2 btnmemberlist btn-block btn-lg'>Add</Button>
                    </div>

                    <div className='col-6'>
                        <p className='nonedit'>Editable list of files Type 2</p>
                    </div>
                    <div className='back-col-probottom'>
                        <div className='row'>
                            <div className='col-4'>
                                <img src={Images.Lastlogo} ></img>
                            </div>
                            <div className='col-6'>
                                <p className='ghtkjhsnumber'>ghtkjhs_45729453.jpg</p>
                                <h3>Change file</h3>
                                <h3>Preview</h3>

                            </div>
                            <div className=''>
                                <p className='secondp'>x</p>
                            </div>
                        </div>
                    </div>

                    <div className='back-col-probottom'>
                        <div className='row'>
                            <div className='col-4'>
                                <img src={Images.Lastlogo} ></img>
                            </div>
                            <div className='col-6'>
                                <p className='ghtkjhsnumber'>ghtkjhs_45729453.jpg</p>
                                <h3>Change file</h3>
                                <h3>Preview</h3>

                            </div>
                            <div className=''>
                                <p className='secondp'>x</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <Button variant="secondary" className='col-12 col-md-2 btnmemberlist btn-block btn-lg'>Add</Button>
                    </div>
                    <div><p className='nonedit'>Multi-layered select editable</p></div>
                    <div className='row'>
                        <div className='levelone col-12 col-md-3'>
                            <p className='nonedit'>Level 1</p>
                            <select className='selectoptiontlevel'>
                                <option>Selected Option</option>
                                <option>Tamil</option>
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Telugu</option>
                                <option>Malayalam</option>
                                <option>Kannada</option>
                            </select>
                        </div>
                        <div className='levelone col-12 col-md-3'>
                            <p className='nonedit'>Level 2</p>
                            <select className='selectoptiontlevel'>
                                <option>Selected Option</option>
                                <option>Tamil</option>
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Telugu</option>
                                <option>Malayalam</option>
                                <option>Kannada</option>
                            </select>
                        </div>
                        <div className='levelone col-12 col-md-3'>
                            <p className='nonedit'>Level 3</p>
                            <select className='selectoptiontlevel'>
                                <option>Selected Option</option>
                                <option>Tamil</option>
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Telugu</option>
                                <option>Malayalam</option>
                                <option>Kannada</option>
                            </select>
                        </div>
                    </div>

                    <div className='row'>
                        <Button variant="secondary" className='col-12 col-md-2 btnmemberlist btn-block btn-lg'>Add</Button>
                    </div>
                    <div>
                        <p className='nonedit'>Editable Checkboxes</p>
                    </div>
                    <div className='mrgartpro'>
                        <input type='checkbox' className='mx-2' />
                        <label className='checkbox-label'>Checkbox text</label><br />

                        <input type='checkbox' className='mx-2' />
                        <label className='checkbox-label'>Checkbox text</label><br />

                        <input type='checkbox' className='mx-2' />
                        <label className='checkbox-label'>Checkbox text</label><br />

                        <input type='checkbox' className='mx-2' />
                        <label className='checkbox-label'>Checkbox text</label><br />

                        <input type='checkbox' className='mx-2' />
                        <label className='checkbox-label'>Checkbox text</label><br />

                        <input type='checkbox' className='mx-2' />
                        <label className='checkbox-label'>Checkbox text</label><br />
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Artisanprofile
