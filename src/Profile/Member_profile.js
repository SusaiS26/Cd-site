import React, { useState,useEffect } from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import axios from 'axios';
import { apiURL } from '../Commen/apiurl';
import './Memberprofile.css';
import { AiFillFacebook } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import Individual_Header from '../Header/new_header';

function Memberprofile() {

    useEffect(() => {
        fetchEventDetails();
    }, []);
    const member_id=5;
    const [profileList, setProfileList] = useState([]);
    console.log(profileList,"profilelist");

    const fetchEventDetails = () => {
            axios
                .get(`${apiURL}/UserMaster/UserMaster/member_form_data_id_data_view?id=${member_id}`, {
                    headers: {
                        accept: "application/json",
                    },
                })
                .then((resp) => {
                    setProfileList(resp.data.data)
                })
                .catch((err) => {
                    console.log(err);
                });
    }

    const uploaImage = (e) => {
        if (e) {
          let image1 = JSON.parse(e);
          console.log('image1', image1);
          return 'data:image;base64,' + image1.base64Data;
        }
        return ''; // Return a default value or handle the case where 'e' is undefined
      };
      

    return (
        <div className='memberprofilecss'>
            <div>
              <Individual_Header />
                </div>

            <div className='container'>
                <p className='profilecss'>XXX {'>'} My Profile</p>
                <img src={uploaImage(profileList.your_photo)} className='imagesprofile'></img>
                {/* <img src={Images.manimage} className='imagesprofile'></img> */}

                <div className='mempromt'>
                    <div className='row '>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='textonepr'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='textonepr'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='textonepr'>Text</h3>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='textonepr'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='textonepr'>Text</h3>
                        </div>
                        <div className='col-4'>
                            <p className='nonedit'>Non-editable field</p>
                            <h3 className='textonepr'>Text</h3>
                        </div>
                    </div>
                    <div className='col-12'>
                        <p className='under-line'></p>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-4'>
                        <p className='areaofwork'>Area of work</p>
                        <h4 className='texttilede'>Textile Design</h4>
                    </div>
                    <div className='col-4'>
                        <p className='nonedit'>Non-editable field</p>
                        <h3 className='textonepr'>Text</h3>
                    </div>
                    <div className='col-4'>
                        <p className='nonedit'>Non-editable field</p>
                        <h3 className='textonepr'>Text</h3>
                    </div>
                </div>

                <div className='  mt-5 mb-4'>
                    <p className='nonedit'>Non-editable field</p>
                    <h3 className='textonepr'>Text</h3>
                </div>
                <div className='  mt-5 mb-4'>
                    <p className='nonedit'>Name</p>
                    <h3  className='textonepr'>{profileList.name}</h3>
                </div>

                <div className=' mt-5 mb-4'>
                    <p className='nonedit'>Type of Member</p>
                    <h3  className='textonepr'>{profileList.cd_joining}</h3>
                </div>
                <div className=' mt-5 mb-4'>
                    <p className='nonedit'>Editable Text field</p>
                    <h3  className='textonepr'>Text</h3>
                </div>
                <div className=' mt-5 mb-4'>
                    <p className='nonedit'>Area of work</p>
                    <h3  className='textonepr'>{profileList.area_of_work}</h3>
                </div>
                <div className=' mt-5 mb-4'>
                    <p className='nonedit'>Email</p>
                    <h3  className='textonepr'>{profileList.your_email}</h3>
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
                    <div className='d-flex'>
                        <AiFillFacebook className='cssfontheight' />
                        <div className='facebarjun'><p className='fbpading'>{profileList.youtube_social_site_url}</p></div>
                    </div>
                    <div className='d-flex'>
                        <AiFillFacebook className='cssfontheight' />
                        <div className='facebarjun'><p className='fbpading'>{profileList.facebook_social_site_url}</p></div>
                    </div>
                    <div className='d-flex'>
                        <AiFillFacebook className='cssfontheight' />
                        <div className='facebarjun'><p className='fbpading'>{profileList.linkedin_social_site_url}</p></div>
                    </div>
                    <div className='d-flex'>
                        <AiFillFacebook className='cssfontheight' />
                        <div className='facebarjun'><p className='fbpading'>{profileList.twitter_social_site_url}</p></div>
                    </div>
                </div>
                <div>
                    <p className='editable'>Non-Editable Links</p>
                    <div className='d-flex'>
                        <AiFillFacebook className='cssfontheight' />
                        <div className='facebarjun'><p className='fbpading'>{profileList.youtube_social_site_url}</p></div>
                    </div>
                    <div className='d-flex'>
                        <AiFillFacebook className='cssfontheight' />
                        <div className='facebarjun'><p className='fbpading'>{profileList.youtube_social_site_url}</p></div>
                    </div>
                    <div className='d-flex'>
                        <AiFillFacebook className='cssfontheight' />
                        <div className='facebarjun'><p className='fbpading'>{profileList.youtube_social_site_url}</p></div>
                    </div>
                    <div className='d-flex'>
                        <AiFillFacebook className='cssfontheight' />
                        <div className='facebarjun'><p className='fbpading'>{profileList.youtube_social_site_url}</p></div>
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
                <Button variant="secondary" className='btnmemberlist'>Add</Button>
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


            <div><Footer></Footer></div>
        </div>
    )
}

export default Memberprofile