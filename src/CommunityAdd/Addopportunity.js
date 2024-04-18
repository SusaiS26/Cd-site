import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Addopportunitycs.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Addopportunity() {

    const [title, setTitle] = useState("")
    const [logo, setLogo] = useState("")
    const [oppertunitytype, setOppertunitytype] = useState("")
    const [location, setLocation] = useState("")
    const [jobdescription, setJobdescription] = useState("")
    const [closingdate, setClosingdate] = useState("")
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinked] = useState("")
    const [twitter, setTwitter] = useState("")
    const [response, setResponse] = useState(null)
    console.log(response)

    const postData = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/UserMaster/create_opportunity', {
                "tittle": title,
                "company_logo": logo,
                "Opportunity_type": oppertunitytype,
                "location": location,
                "job_description": jobdescription,
                "closing_date": closingdate,
                "instagram_url": instagram,
                "facebook_url": facebook,
                "linkedin_url": linkedin,
                "twitter_url": twitter
            });

            setResponse(response.data);
        } catch (error) {
            console.error('Error making POST request:', error);
        }
    };

    useEffect = () => {
        ongetaddoppform();
      }
    
      const ongetaddoppform = () => {
        axios.get("http://localhost:8000/UserMaster/get_all_events")
          .then((res) => {
            setResponse(res.data);
            console.log("Susainathan", res.data);
          })
          .catch((error) => {
            console.log("Susai123", error)
          })
      }

    return (
        <div className='addopportunitycs'>
            <Header></Header>
            <div className='container mt-5 '>
                <div className='col-12 row'>
                    <label className='label-head'>Title<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control' value={title}  onChange={(e) => setTitle(e.target.value)}>	
                    </input>
                </div>
                <div className='col-12 row mt-3'>
                    <label className='label-head'>Company logo</label>
                    <input type='file' className='form-control file-change alignmentone' value={logo} onChange={(e) => setLogo(e.target.value)} />
                    <h5 className='txtaccfile'>Accepted file types: jpg, jpeg, png, Max. file size: 32 MB.</h5>
                </div>
                <div className='col-12 row mt-3'>
                    <label className='label-head'>Opportunity Type</label>
                   	
                    <select className='form-control' value={oppertunitytype} onChange={(e) => setOppertunitytype(e.target.value)}>
                        <option>--Select--</option>
                        <option>Tamil</option>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Telungu</option>
                        <option>Malayalam</option>
                        <option>Kanadam</option>
                    </select>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Location<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control' value={location} onChange={(e) => setLocation(e.target.value)}>	
                    </input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Job Description<span className='required-color'>(Required)</span></label>
                    <textarea type='text' className='form-control inputtextsize' value={jobdescription} onChange={(e) => setJobdescription(e.target.value)}> </textarea>	
                  

                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Closing Date</label>
                </div>
                <input type='date' className='form-controlone col-12' value={closingdate} onChange={(e) => setClosingdate(e.target.value)}>
                </input>
                <div className='col-12 row'>
                    <label className='label-head'>Instagram</label>
                    <input type='text' placeholder='https://' className='form-control' value={instagram} onChange={(e) => setInstagram(e.target.value)}>	
                    </input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Facebook</label>
                    <input type='text' placeholder='https://' className='form-control' value={facebook} onChange={(e) => setFacebook(e.target.value)}>	
                    </input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Linkedin</label>
                    <input type='text' placeholder='https://' className='form-control' value={linkedin} onChange={(e) => setLinked(e.target.value)}>	
                    </input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Twitter</label>
                    <input type='text' placeholder='https://' className='form-control' value={twitter} onChange={(e) => setTwitter(e.target.value)}>	
                    </input>
                </div>
                <div className='row col-2'>
                    <button className="btn-nextone mt-4 mb-4" onClick={postData}>Submit</button>
                </div>

            </div>


            <Footer></Footer>
        </div>
    )
}

export default Addopportunity;
