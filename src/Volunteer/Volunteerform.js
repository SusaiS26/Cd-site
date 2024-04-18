import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Volunteerform.css';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from "../Commen/apiurl";
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { validEmailRegex } from '../Commen/Common';
import Individual_Header from '../Header/new_header';
import { useLocation } from 'react-router';


function Volunteerform() {

    const location = useLocation();
    const { ID, Flag } = location.state;
    console.log(ID,Flag,"ID")

    const [Email, setEmail] = useState("")
    const [Country, setCountry] = useState("")
    const [Mobilenumber, setMobilenumber] = useState("")
    const [Name, setName] = useState("")
    const [yourole, setyourole] = useState("")
    const [memberofCD, setmemberofCD] = useState("")
    const [youlive, setyoulive] = useState("")
    const [readLanguages, setreadLanguages] = useState("")
    const [writeLanguages, setwriteLanguages] = useState("")
    const [youare, setyouare] = useState("")
    const [Qualification, setQualification] = useState("")
    const [organizationname, setorganizationname] = useState("")
    const [projectskills, setprojectskills] = useState("")
    const [projectbriefpara, setProjectBriefPara] = useState("")
    const [howmanyworking, sethowmanyworking] = useState("")
    const [volunteeringopportunity, setvolunteeringopportunity] = useState("")
    const [response, setResponse] = useState("")
    const [tamilsp, setTamilsp] = useState("")
    const [logo, setLogo] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setAPIResponse] = useState("");
    console.log(apiResponse, "apiResponse");

    useEffect(() => {
        if (ID != 0) {
            getData()
        }
    }, []);

    const clearState = () => {
        setEmail('');
        setCountry('')
        setMobilenumber('');
        setName('');
        setyourole('');
        setmemberofCD('');
        setyoulive('');
        setreadLanguages('');
        setwriteLanguages('');
        setTamilsp('');
        setyouare('');
        setQualification('');
        setorganizationname('');
        setprojectskills('');
        setProjectBriefPara('');
        sethowmanyworking('');
        setvolunteeringopportunity('');
        setLogo('');
    }

    const postData = async () => {
        if (validEmailRegex.test(Email)) {
            if (Country.trim()) {
                if (Mobilenumber) {
                    if (Name.trim()) {
                        if (yourole) {
                            if (youlive) {
                                if (readLanguages) {
                                    if (writeLanguages) {
                                        if (tamilsp) {
                                            if (youare) {
                                                if (Qualification) {
                                                    if (organizationname) {
                                                        if (projectskills) {
                                                            if (projectbriefpara) {
                                                                if (howmanyworking) {
                                                                    if (volunteeringopportunity) {
                                                                        setIsLoading(true);
                                                                        var payloadvolu = {
                                                                            "id": ID,
                                                                            "Email": Email,
                                                                            "Country_code": Country,
                                                                            "Mobile_no": Mobilenumber,
                                                                            "Name": Name,
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
                                                                            "Flag": Flag,
                                                                        }
                                                                        try {
                                                                            const response = await axios.post(`${apiURL}/UserMaster/volunteer_form_create`, payloadvolu, {
                                                                            });
                                                                            setResponse(response.data);
                                                                            setIsLoading(false);
                                                                            showAlert(response.data.message);
                                                                            clearState();
                                                                        } catch (error) {
                                                                            console.error('Error making POST request:', error);
                                                                            setIsLoading(false);
                                                                            showAlerterr();
                                                                        }
                                                                    } else {
                                                                        toast.error('Please Choose Volunteering opportunity')
                                                                    }
                                                                } else {
                                                                    toast.error('Please Choose day/week.')
                                                                }
                                                            } else {
                                                                toast.error('Please Enter your contribute.')
                                                            }
                                                        } else {
                                                            toast.error('Please Enter Project Details')
                                                        }
                                                    } else {
                                                        toast.error('Please Enter your Organization Name')
                                                    }
                                                } else {
                                                    toast.error('Please Enter your Qualification')
                                                }
                                            } else {
                                                toast.error('Please Choose your Role')
                                            }
                                        } else {
                                            toast.error('Please Enter your Speak languages')
                                        }
                                    } else {
                                        toast.error('Please Enter your Write languages')
                                    }
                                } else {
                                    toast.error('Please Enter your Read languages')
                                }
                            } else {
                                toast.error('Please Enter Your live')
                            }
                        } else {
                            toast.error('Please Enter Your Role')
                        }
                    } else {
                        toast.error('Please Enter Name')
                    }
                } else {
                    toast.error('Please Enter Mobile Number')
                }
            } else {
                toast.error('Please Enter Country Code')
            }
        } else {
            toast.error('Please Enter Valid Email Address')
        }
    };
    const showAlerterr = () => {
        Swal.fire({
            title: 'Volunteer Added Failed',
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'addsubmitevent',
            },
        });
    };
    const showAlert = () => {
        Swal.fire({
            title: 'Volunteer Added Successfully',
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: 'addsubmitevent',
            },
        });
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

    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${apiURL}/Get_all_module/get_by_id?id=${ID}&Flag=Volunteer`);
            setAPIResponse(response.data.data);

            setEmail(response.data.data.Email);
            setCountry(response.data.data.Country_code)
            setMobilenumber(response.data.data.Mobile_no);
            setName(response.data.data.Name);
            setyourole(response.data.data.Your_role_apply);
            setmemberofCD(response.data.data.Are_you_member_of_cd);
            setyoulive(response.data.data.Where_do_you_live);
            setreadLanguages(response.data.data.Languages_you_can_read);
            setwriteLanguages(response.data.data.Languages_you_can_write);
            setTamilsp(response.data.data.Languages_you_can_speak);
            setyouare(response.data.data.You_are);
            setQualification(response.data.data.Your_qualification);
            setorganizationname(response.data.data.Are_working_and_organization_name);
            setprojectskills(response.data.data.Are_skills_and_project_name);
            setProjectBriefPara(response.data.data.Interested);
            sethowmanyworking(response.data.data.Working_time);
            setvolunteeringopportunity(response.data.data.Volunteering_opportunity);
            // setLogo(response.data.data);

            setIsLoading(false);
        } catch (error) {
            console.error('Error making POST request:', error);
            setIsLoading(false);
        }
    }

    return (
        <div className='volunteerfcss'>
            {/* <Header></Header> */}
            <Individual_Header />
            <ToastContainer toastOptions={{ position: "top-right" }} />
            {isLoading ? (
                <div className="spinner-box">
                    <div className="pulse-container">
                        <div className="pulse-bubble pulse-bubble-1"></div>
                        <div className="pulse-bubble pulse-bubble-2"></div>
                        <div className="pulse-bubble pulse-bubble-3"></div>
                    </div>
                </div>
            ) : (
                <>
                    <div>
                        <h1 className='volunteersign'>Volunteer Sign-up Form</h1>
                    </div>
                    <div className='row '>
                        <div className='col-3'>
                        </div>
                        <div className='col-3'>
                        </div>
                    </div>
                    <div className='container containborder valun_header_height'>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <div>
                                    <label className='label-head emailbotobor'>Email<span className='required-color'>  *</span></label>
                                </div>
                                <input type='text' placeholder='Your email' className='form-control' value={Email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Country code<span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={Country} onChange={(e) => setCountry(e.target.value)} />

                            </div> </div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Mobile number<span className='required-color'>  *</span></label>
                                <input type='number' placeholder='Your answer' className='form-control' value={Mobilenumber} onChange={(e) => setMobilenumber(e.target.value)} />

                            </div></div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Name<span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={Name} onChange={(e) => setName(e.target.value)} />

                            </div></div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>The role you are applying for:<span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={yourole} onChange={(e) => setyourole(e.target.value)} />

                            </div></div>



                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Are you a member of CD?</label>
                                <div>
                                    <input type='radio' className='mx-2' name='memofcd' value='Yes' checked={memberofCD === 'Yes'} onChange={(e) => setmemberofCD(e.target.value)} />
                                    <label className='checkbox-label'>Yes </label><br />
                                    <input type='radio' className='mx-2' value='No' name='memofcd' checked={memberofCD === 'No'} onChange={(e) => setmemberofCD(e.target.value)} />
                                    <label className='checkbox-label'>No</label><br />
                                </div>
                            </div>

                        </div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Where do you live?
                                    <span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={youlive} onChange={(e) => setyoulive(e.target.value)} />

                            </div> </div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Languages you can read
                                    <span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={readLanguages} onChange={(e) => setreadLanguages(e.target.value)} />
                            </div></div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Languages you can write
                                    <span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={writeLanguages} onChange={(e) => setwriteLanguages(e.target.value)} />
                            </div> </div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Languages you can speak
                                    <span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={tamilsp} onChange={(e) => setTamilsp(e.target.value)} />
                            </div> </div>

                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>You are:<span className='required-color'>  *</span></label>
                                <div>
                                    <input type='radio' className='mx-2' value='An entrepreneur' name='yourofcd' checked={youare === 'An entrepreneur'} onChange={(e) => setyouare(e.target.value)} />
                                    <label className='checkbox-label'>An entrepreneur</label><br />
                                    <input type='radio' className='mx-2' value='Student' name='yourofcd' checked={youare === 'Student'} onChange={(e) => setyouare(e.target.value)} />
                                    <label className='checkbox-label'>Student</label><br />
                                    <input type='radio' className='mx-2' value='Professional' name='yourofcd' checked={youare === 'Professional'} onChange={(e) => setyouare(e.target.value)} />
                                    <label className='checkbox-label'>Professional</label><br />
                                    {/* <input type='radio' className='mx-2' value='No' name='memofcd' checked={memberofCD === 'No'} onChange={(e) => setmemberofCD(e.target.value)} />
                            <label className='checkbox-label'>No</label><br /> */}
                                    <input type='radio' className='mx-2' value='Retd / Household' name='yourofcd' checked={youare === 'Retd / Household'} onChange={(e) => setyouare(e.target.value)} />
                                    <label className='checkbox-label'>Retd/Household</label><br />
                                    <input type='radio' className='mx-2' value='others' name='yourofcd' checked={youare === 'others'} onChange={(e) => setyouare(e.target.value)} />
                                    <label className='checkbox-label'>Others</label><br />
                                </div>

                            </div></div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>What is your qualification?
                                    <span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={Qualification} onChange={(e) => setQualification(e.target.value)} />
                            </div></div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Are you  working? If yes, Please write down the organization name.
                                    <span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={organizationname} onChange={(e) => setorganizationname(e.target.value)} />
                            </div></div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'> What are the skills you will bring to this project?
                                    <span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={projectskills} onChange={(e) => setprojectskills(e.target.value)} />
                            </div></div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>Please write a brief para on why you are interested in this project and how you expect to contribute
                                    <span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={projectbriefpara} onChange={(e) => setProjectBriefPara(e.target.value)} />

                            </div></div>
                        <div className='emailbordercs'>
                            <div className='col-12 row selectwrappervolun'>
                                <label className='label-head'>How many hours a day/week would you be able to work.
                                    <span className='required-color'>  *</span></label>
                                <select className='volunteerdrpform' value={howmanyworking} onChange={(e) => sethowmanyworking(e.target.value)}>
                                    <option>Click to Select...</option>
                                    <option>1-2 hour per week</option>
                                    <option>2-4 hour per week</option>
                                    <option>more than 4 hr per week</option>
                                </select>
                            </div></div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                <label className='label-head'>How did you learn of this volunteering opportunity
                                    <span className='required-color'>  *</span></label>
                                <input type='text' placeholder='Your answer' className='form-control' value={volunteeringopportunity} onChange={(e) => setvolunteeringopportunity(e.target.value)} />

                            </div>
                        </div>
                        <div className='emailbordercs'>
                            <div className='col-12 row'>
                                {/* <label className='label-head'>Please attach a CV (Optional)
                        </label>
                        <input type='file' placeholder='Your answer' className='form-control' onChange={(e) => uploadImage(e, 'logo')} /> */}

                                {/* <input type="file"  class="form-control" accept=".jpeg, .png, .jpg, .pdf"  onChange={(e)=>uploadImage(e,'logo')}/> */}

                                {/* <img
                        src={data:image/png;base64,${imageData}}
                        alt='Event'
                        className='form-control'
                        style={{ height: '200px', width: 'auto' }}
      /> */}
                                <div className="col-12 row mt-3">
                                    <label className="label-head">Please attach a CV (Optional)</label>
                                    <input type="file" className="inputattcv file-change" onChange={(e) => uploadImage(e, 'logo')} />
                                    {/* {logo && (
                                <div>
                                    <img src={logo} alt="Uploaded Logo" style={{ maxWidth: '100px' }} />
                                </div>
                            )} */}
                                </div>

                            </div>
                        </div>
                        <div className='row submitform'>
                            <div className='col-6'>
                                <Button className='btnsubvalu' onClick={postData}>Submit</Button>
                            </div>

                            <div className='col-6 d-flex justify-content-end'>
                                <Button className='btnsubvalu' onClick={clearState}>Clear</Button>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </>
            )}
        </div>
    )
}

export default Volunteerform;