import React from 'react'
import Header from '../Header/header';
import Individual_Header from '../Header/new_header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import './Artisanprofile.css';
import { AiFillFacebook } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
function Artisanprofile() {
    return (
        <div className='artisanprofilecss'>
            <div>
              <Individual_Header />
                </div>

            <div className='container'>
                <p className='profilecss'>XXX {'>'} My Profile</p>
                <img src={Images.manimage} className='imagesprofile'></img>

                <div className='mempromt'>
                    <div className='row '>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='artisantextcss'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='artisantextcss'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='artisantextcss'>Text</h3>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='artisantextcss'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='artisantextcss'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='artisantextcss'>Text</h3>
                        </div>
                    </div>
                    <div className='col-12'>
                        <p className='under-line'></p>
                    </div>
                    <div className='row '>
                        <div className='col-4'>
                            <p className='nonedit'>Area of work</p>
                            <h4 className='texttilededesign'>Textile Design</h4>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='artisantextcss'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='artisantextcss'>Text</h3>
                        </div>

                    </div>
                    <div className='  mt-5 mb-4'>
                        <p className='nonedit'>Non-editable field</p>
                        <h3 className='artisantextcss'>Text</h3>
                    </div>
                    <div className='  mt-5 mb-4'>
                        <p className='nonedit'>Name</p>
                        <h3 className='artisantextcss'>Arjun Dev</h3>
                    </div>

                    <div className=' mt-5 mb-4'>
                        <p className='nonedit'>Type of Member</p>
                        <h3 className='artisantextcss'>Individual</h3>
                    </div>
                    <div className=' mt-5 mb-4'>
                        <p className='nonedit'>Editable list of files</p>
                        <h3 className='artisantextcss'>Individual</h3>
                    </div>

                    <div className="d-flex justify-content-between artisanmrgtop">
                        <div className='noneditfieldlon'>
                            Editable text field long
                        </div>
                        <div className='paragrapEdit'>
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
                <div className='mt-5 mb-4'>
                    <p className='areaofworkone'>Area of work</p>
                    <h4 className='texttilede'>Textile Design</h4>

                </div>
                <div className='mt-5 mb-4'>
                    <p className='areaofworkone'>E-mail</p>
                    <h4 className='texttilede'>kdrjggffhhj@gjjh.com</h4>
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

                <div><p className='nonedit'>Editable Links</p>
                    <div className='row'>
                        <AiFillFacebook className='cssfontheight' />
                    </div>
                </div>
                <div class="rowone ">
                    <div class="facebarjun">facebook.com/ArjunDev</div>
                    <div class="fbpading">Edit</div>
                    <div class="xesize">x</div>
                </div>
                <div className='row'>
                    <AiFillFacebook className='cssfontheight' />
                </div>
                <div class="rowone ">
                    <div class="facebarjun">facebook.com/ArjunDev</div>
                    <div class="fbpading">Edit</div>
                    <div class="xesize">x</div>
                </div>
                <p className="Website ">Website</p>
                <div class="rowone ">
                    <div class="facebarjun">facebook.com/ArjunDev</div>
                    <div class="fbpading">Edit</div>
                    <div class="xesize">x</div>
                </div>
                <p className="Website ">Jaypore</p>
                <div class="rowone ">
                    <div class="facebarjun">facebook.com/ArjunDev</div>
                    <div class="fbpading">Edit</div>
                    <div class="xesize">x</div>
                </div>
                <Button className='addbtn'>Add</Button>
                <div>
                    <p className='nonedit'>Non-Editable Links</p>
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
                <Button className='addbtn'>Add</Button>
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
                        <Button variant="primary" className='btnstyleone'>Eeeeee   x</Button>
                    </div>
                </div>
                <div>
                    <p className='nonedit'>Editable list of files Type 1</p>
                </div>
                <div className='back-col-pro'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={Images.Lastlogo} ></img>
                            <p className='ghtkjhsnumber'>ghtkjhs_45729453.jpg</p>
                            <h3>Change file</h3>
                        </div>
                        <div className='col-7'>
                            <p className='loremipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                        <div className=' d-flex justify-content-between'>
                            <p className='loremipsum firstp'>Edit description </p>
                            <p className='secondp'>x</p>
                        </div>
                    </div>
                </div>
                <div className='back-col-pro'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={Images.Lastlogo} ></img>
                            <p className='ghtkjhsnumber'>ghtkjhs_45729453.jpg</p>
                            <h3>Change file</h3>
                        </div>
                        <div className='col-7'>
                            <p className='loremipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                        <div className=' d-flex justify-content-between'>
                            <p className='loremipsum firstp'>Edit description </p>
                            <p className='secondp'>x</p>
                        </div>
                    </div>
                </div>

                <div className='back-col-pro'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={Images.Lastlogo} ></img>
                            <p className='ghtkjhsnumber'>ghtkjhs_45729453.jpg</p>
                            <h3>Change file</h3>
                        </div>
                        <div className='col-7'>
                            <p className='loremipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                        <div className=' d-flex justify-content-between'>
                            <p className='loremipsum firstp'>Edit description </p>
                            <p className='secondp'>x</p>
                        </div>

                    </div>
                </div>
                <div>
                    <Button className='addbtn'>Add</Button>
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
                <div>
                    <Button className='addbtn'>Add</Button>
                </div>
                <div><p className='nonedit'>Multi-layered select editable</p></div>
                <div className='row'>
                    <div className='levelone col-3'>
                        <p className='nonedit'>Level 1</p>
                        <select className='selectoptiontlevel'>
                            <option>Selected Option</option>
                            <option>Tamil</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Telungu</option>
                            <option>Malayalam</option>
                            <option>Kanadam</option>
                        </select>

                    </div>
                    <div className='levelone col-3'>
                        <p className='nonedit'>Level 2</p>
                        <select className='selectoptiontlevel'>
                            <option>Selected Option</option>
                            <option>Tamil</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Telungu</option>
                            <option>Malayalam</option>
                            <option>Kanadam</option>
                        </select>

                    </div>
                    <div className='levelone col-3'>
                        <p className='nonedit'>Level 3</p>
                        <select className='selectoptiontlevel'>
                            <option>Selected Option</option>
                            <option>Tamil</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Telungu</option>
                            <option>Malayalam</option>
                            <option>Kanadam</option>
                        </select>

                    </div>
                </div>
                <div>
                    <Button className='addbtn'>Add</Button>
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
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Artisanprofile