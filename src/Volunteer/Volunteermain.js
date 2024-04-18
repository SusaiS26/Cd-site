import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Volunteerform.css';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from "../Commen/apiurl";
import Swal from 'sweetalert2';

function Volunteerform() {

    const [Email, setEmail] = useState("")
    const [Country, setCountry] = useState("")
    const [Mobilenumber, setMobilenumber] = useState("")
    const [Name, setName] = useState("")
    const [yourole, setyourole] = useState("")
    const [memberofCD, setmemberofCD] = useState("")

    const [youlive, setyoulive] = useState("")
    const [readLanguages, setreadLanguages] = useState("")
    const [writeLanguages, setwriteLanguages] = useState("")
    const [speakLanguages, setspeakLanguages] = useState("")
    const [youare, setyouare] = useState("")
    const [Qualification, setQualification] = useState("")
    const [organizationname, setorganizationname] = useState("")
    const [projectskills, setprojectskills] = useState("")
    const [projectcontribute, setprojectcontribute] = useState("")
    const [projectbriefpara, setProjectBriefPara] = useState("")
    const [howmanyworking, sethowmanyworking] = useState("")
    const [volunteeringopportunity, setvolunteeringopportunity] = useState("")
    const [response, setResponse] = useState("")
    const [tamilsp, setTamilsp] = useState("")
    const [logo, setLogo] = useState("")
    console.log("1234", logo)


    const postData = async () => {
        var payloadvolu = {
            "Email": Email,
            "Country_code": Country,
            "Mobile_no": Mobilenumber,
            "name": Name,
            "Your_role_apply": yourole,
            "Are_you_member_of_cd": memberofCD,
            "Where_do_you_live": youlive,
            "Languages_you_can_read": readLanguages,
            "Languages_you_can_write": writeLanguages,
            "Languages_you_can_speak": tamilsp,
            "You_are": youare,
            "Your_qualification": Qualification,
            "Are_working_and_organization_name": organizationname,
            "Are_skills_and_project_name": projectskills,
            "Interested": projectbriefpara,
            "Working_time": howmanyworking,
            "Volunteering_opportunity": volunteeringopportunity,
            "Resume": JSON.stringify(logo),
        }
        try {
            const response = await axios.post(`${apiURL}/UserMaster/volunteer_form_create`, payloadvolu, {
                
            });
            showAlert();
            setResponse(response.data);
        }
        catch (error) {
            console.error('Error making POST request:', error);
        }
    };
const onClickSaveVal = async () => {
    var payloadvolu = {
        "Name": nameStore,
        "Age": age,
        "Section": section,
        "DOB": datebirth
    };

    try {
        // Using axios to make a POST request to the specified API endpoint
        const response = await axios.post(`http://localhost:8001/api/std/insert`, payloadvolu, {
            // Optional additional configurations can be specified here
        });

        // Setting the response data to the state variable
        setPostresponse(response.data);
    } catch (error) {
        // Handling errors if the POST request fails
        console.error('Error making POST request:', error);
    }
};


    const uploadImage = (e, flag) => {

        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = handleReaderLoaded.bind(this, flag);
            reader.readAsBinaryString(file);
        }
    };

    const handleReaderLoaded = (flag, e) => {

        let binaryString = e.target.result;
        if (flag == 'logo') {
            setLogo({
                base64Data: btoa(binaryString),
            });
        }
    };

    const showAlert = () => {
        Swal.fire({
            title: 'Alert Title',
            text: 'This is a sweet alert!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className='volunteerfcss'>
            <Header></Header>
            <div>
                <h1 className='volunteersign'>Volunteer Sign-up Form</h1>
            </div>
            <div className='row '>
                <div className='col-3'>

                </div>

                <div className='col-3'>
                </div>
            </div>
            <div className='container containborder mt-5 '>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <div>
                            <label className='label-head emailbotobor'>Email<span className='required-color'>*</span></label>
                        </div>
                        <input type='text' placeholder='Your email' className='form-control' value={Email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Country code<span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={Country} onChange={(e) => setCountry(e.target.value)} />

                    </div> </div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Mobile number<span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={Mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} />

                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Name<span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={Name} onChange={(e) => setName(e.target.value)} />

                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>The role you are applying for:<span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={yourole} onChange={(e) => setyourole(e.target.value)} />

                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Are you a member of CD?</label>
                        <div className='col-12 row'>
                            <input type='radio' className='mx-2' name='memofcd' value='yes' checked={memberofCD === 'yes'} onChange={(e) => setmemberofCD(e.target.value)} />
                            <label className='checkbox-label'>Yes</label><br />
                        </div></div>
                    <div className='col-12 row'>
                        <input type='radio' className='mx-2' value='No' name='memofcd' checked={memberofCD === 'No'} onChange={(e) => setmemberofCD(e.target.value)} />
                        <label className='checkbox-label'>No</label><br />
                    </div>
                </div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Where do you live?
                            <span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={youlive} onChange={(e) => setyoulive(e.target.value)} />

                    </div> </div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Languages you can Read
                            <span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={readLanguages} onChange={(e) => setreadLanguages(e.target.value)} />
                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Languages you can Write
                            <span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={writeLanguages} onChange={(e) => setwriteLanguages(e.target.value)} />
                    </div> </div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Languages you can Speak
                            <span className='required-color'>*</span></label>
                        <div className='col-12 row'>
                            <input type='radio' className='mx-2' name='userType' value='Tamil' checked={tamilsp === 'Tamil'} onChange={(e) => setTamilsp(e.target.value)} />
                            <label className='checkbox-label'>Tamil</label><br />
                        </div>
                        <div className='col-12 row'>
                            <input type='radio' className='mx-2' name='userType' value='English' checked={tamilsp === 'English'} onChange={(e) => setTamilsp(e.target.value)} />
                            <label className='checkbox-label'>English</label><br />
                        </div>
                        <div className='col-12 row'>
                            <input type='radio' className='mx-2' name='userType' value='other' checked={tamilsp === 'other'} onChange={(e) => setTamilsp(e.target.value)} />
                            <label className='checkbox-label'>other</label><br />
                        </div>
                        {/* <input type='radio' className='mx-2' name='userType' value={youare} onChange={(e) => setyouare(e.target.value)} /> */}
                    </div> </div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>You are:<span className='required-color'>*</span></label>
                        <div className='col-12 row'>
                            <input type='radio' className='mx-2' name='userType' checked={youare === 'An entrepreneur'} value='An entrepreneur' onChange={(e) => setyouare(e.target.value)} />
                            <label className='checkbox-label'>An entrepreneur</label><br />
                        </div>
                        <div className='col-12 row'>
                            <input type='radio' className='mx-2' name='userType' checked={youare === 'Student'} value='Student' onChange={(e) => setyouare(e.target.value)} />
                            <label className='checkbox-label'>Student</label><br />
                        </div>
                        <div className='col-12 row'>
                            <input type='radio' className='mx-2' name='userType' checked={youare === 'Professional'} value='Professional' onChange={(e) => setyouare(e.target.value)} />
                            <label className='checkbox-label'>Professional</label><br />
                        </div>
                        <div className='col-12 row'>
                            <input type='radio' className='mx-2' name='userType' checked={youare === 'Retd / Household'} value='Retd / Household' onChange={(e) => setyouare(e.target.value)} />
                            <label className='checkbox-label'>Retd / Household</label><br />
                        </div>
                        <div className='col-12 row'>
                            <input type='radio' className='mx-2' name='userType' checked={youare === 'others'} value='others' onChange={(e) => setyouare(e.target.value)} />
                            <label className='checkbox-label'>others</label><br />
                        </div>
                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>What is your qualification?
                            <span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={Qualification} onChange={(e) => setQualification(e.target.value)} />
                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Are you  working? If yes, please write down the organization name.
                            <span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={organizationname} onChange={(e) => setorganizationname(e.target.value)} />
                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'> What are the skills you will bring to this project?
                            <span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={projectskills} onChange={(e) => setprojectskills(e.target.value)} />
                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>Please write a brief para on why you are interested in this project and how you expect to contribute
                            <span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={projectbriefpara} onChange={(e) => setProjectBriefPara(e.target.value)} />

                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>How many hours a day/week would you be able to work.
                            <span className='required-color'>*</span></label>
                        <select className='form-control' value={howmanyworking} onChange={(e) => sethowmanyworking(e.target.value)}>
                            <option>Click to Select...</option>
                            <option>1-2 hour per week</option>
                            <option>2-4 hour per week</option>
                            <option>more than 4 hr per week</option>
                        </select>
                    </div></div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>How did you learn of this volunteering opportunity
                            <span className='required-color'>*</span></label>
                        <input type='text' placeholder='Your answer' className='form-control' value={volunteeringopportunity} onChange={(e) => setvolunteeringopportunity(e.target.value)} />

                    </div>
                </div>
                <div className='emailbordercs'>
                    <div className='col-12 row'>
                        <label className='label-head'>How did you learn of this volunteering opportunity
                            <span className='required-color'>*</span></label>
                        <input type='file' placeholder='Your answer' className='form-control' value={projectcontribute} onChange={(e) => uploadImage(e, 'logo')} />

                        {/* <input type="file"  class="form-control" accept=".jpeg, .png, .jpg, .pdf"  onChange={(e)=>uploadImage(e,'logo')}/> */}

                        {/* <img
                        src={data:image/png;base64,${imageData}}
                        alt='Event'
                        className='form-control'
                        style={{ height: '200px', width: 'auto' }}
      /> */}

                    </div>
                </div>


                <div className='row submitform'>
                    <div className='col-2'>
                        <Button className='btnsubvalu' onClick={postData}>Submit</Button>
                    </div>
                    <div className='col-8'>

                    </div>
                    <div className='col-2'>
                        <Button className='btnsubvalu'>Clear Form</Button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Volunteerform;
