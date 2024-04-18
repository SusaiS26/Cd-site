import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { ToastContainer, toast } from 'react-toastify';
import './Addopportunitycs.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { apiURL } from "../Commen/apiurl"
import Swal from 'sweetalert2';
import Individual_Header from '../Header/new_header';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useLocation } from 'react-router';


function Addopportunityform() {

    const location = useLocation();
    const { ID, Flag } = location.state;


    const [OpportunityMode, setOpportunityMode] = useState("")
    const [link, setLink] = useState("")
    const [platform_name, setPlatform_name] = useState("")
    const [opporvenuedetails, setopporvenuedetails] = useState("")
    const [opporvenuedetailshyper, setOpporvenuedetailsHyper] = useState("")
    const [title, setTitle] = useState("")
    // const [logo, setLogo] = useState("")
    const [oppertunitytype, setOppertunitytype] = useState("")
    const [oppertunitytypeoption, setOppertunitytypeoption] = useState("")
    // const [location, setLocation] = useState("")
    const [jobdescription, setJobdescription] = useState("")
    console.log(jobdescription, "jobdescription")
    const [closingdate, setClosingdate] = useState("")
    const [facebook, setFacebook] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinked] = useState("")
    const [twitter, setTwitter] = useState("")
    const [response, setResponse] = useState(null)
    const [logo, setLogo] = useState("")
    const [cdExclusive, setCdExclusive] = useState("")
    const [event_banner_image, setOpportunityImage] = useState(null);
    const [emplojob, setEmplojob] = useState([]);
    const [tags, setTags] = useState("");
    const [oppoimage, setOppoimage] = useState("")

    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setAPIResponse] = useState("");
    console.log(apiResponse, "apires")


    useEffect(() => {
        if (ID != 0) {
            getData()
        }
    }, []);

    // const [banner_image, setBannerImage] = useState('');
    // console.log(banner_image, "banner_image")

    const postData = async () => {
        if (title) {
            if (OpportunityMode) {
                // if (location) {
                // if (jobdescription) {
                setIsLoading(true);
                try {
                    const response = await axios.post(`${apiURL}/UserMaster/create_opportunity`, {
                        "id": ID,
                        "tittle": title,
                        "company_logo": JSON.stringify(logo),
                        "Opportunity_type": oppertunitytype,
                        "location": "location",
                        "job_description": jobdescription,
                        "closing_date": closingdate,
                        "instagram_url": instagram,
                        "facebook_url": facebook,
                        "linkedin_url": linkedin,
                        "twitter_url": twitter,
                        "cd_member": cdExclusive,
                        "banner_image": "",
                        "platform_name": platform_name,
                        "url": link,
                        "venue": opporvenuedetails,
                        "opportunity_mode": OpportunityMode,
                        "tags": tags,
                        "banner_image": "banner",
                        "opportunity_image": JSON.stringify(oppoimage),
                        "Flag": Flag,
                    });
                    setIsLoading(false);
                    if (Flag == "U") {
                        showAlert1();
                    } else {
                        showAlert();
                    }
                    setResponse(response.data);
                } catch (error) {
                    console.error('Error making POST request:', error);
                    setIsLoading(false);
                }
                // } else {
                //     toast.error('Please Enter Description')
                // }

                // } else {
                //     toast.error('Please Enter Location name')
                // }
            } else {
                toast.error('Please Choose Opportunity mode')
            }
        } else {
            toast.error('Please Enter Title name')
        }
    };
    const showAlert = () => {
        Swal.fire({
            title: 'Thank you for sharing an interesting opportunity, it will be added to our What’s On section soon!',
            confirmButtonText: 'OK',
            confirmButtonColor: 'transparent', // Set the button background color to transparent
            customClass: {
                confirmButton: 'red-background black-font', // Add custom classes
            },
            buttonsStyling: false, // Disable default button styling
        });

    };
    const showAlert1 = () => {
        Swal.fire({
            title: 'Updated Successfully',
            confirmButtonText: 'OK',
            confirmButtonColor: 'transparent', // Set the button background color to transparent
            customClass: {
                confirmButton: 'red-background black-font', // Add custom classes
            },
            buttonsStyling: false, // Disable default button styling
        });

    };

    // useEffect = () => {
    //     ongetaddoppform();
    //   }

    //   const ongetaddoppform = () => {
    //     axios.get("http://localhost:8000/UserMaster/get_all_events")
    //       .then((res) => {
    //         setResponse(res.data);
    //         console.log("Susainathan", res.data);
    //       })
    //       .catch((error) => {
    //         console.log("Susai123", error)
    //       })
    //   }


    // const uploadImage1 = (e, flag) => {
    //     let file = e.target.files[0];
    //     if (file) {
    //         const fileName = file.name;
    //         console.log('Selected File Name:', fileName);
    //         setOpportunityImage(file);
    //         const imageUrl = URL.createObjectURL(file);
    //         setBannerImage(imageUrl);

    //         const reader = new FileReader();
    //         reader.onload = handleReaderLoaded1.bind(this, flag);
    //         reader.readAsBinaryString(file);
    //     }
    // };

    // const handleReaderLoaded1 = (flag, e) => {
    //     let binaryString = e.target.result;
    //     if (flag === 'banner_image') {
    //         setBannerImage({
    //             base64Data: btoa(binaryString),
    //         });
    //     }
    // };
    const handleChangeempjob = (event) => {
        console.log("ppppppppp");
        const valueToAddOrRemove = event.target.value;
        // Check if the value is already in the array
        if (emplojob.includes(valueToAddOrRemove)) {
            // If it's in the array, remove it
            const newArray = emplojob.filter(day => day !== valueToAddOrRemove);
            setEmplojob(newArray);
        } else {
            // If it's not in the array, add it
            const newArray = [...emplojob, valueToAddOrRemove];
            setEmplojob(newArray);
        }
    }


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
    const handleCD_Exclusive = (e) => {
        setCdExclusive(e.target.value);
    };
    const handleOpportunityModeChange = (e) => {
        setOpportunityMode(e.target.value);
    };

    // const { quill, quillRef } = useQuill();

    // React.useEffect(() => {
    //     if (quill && jobdescription) {
    //         quill.clipboard.dangerouslyPasteHTML(jobdescription);
    //         quill.on('text-change', () => {
    //             setJobdescription(quillRef.current.firstChild.innerHTML);
    //         });
    //     }
    // }, [quill,jobdescription]);

    const { quill, quillRef } = useQuill();

    // React.useEffect(() => {
    //     if (quill) {
    //         quill.on('text-change', () => {
    //             setJobdescription(quillRef.current.firstChild.innerHTML);
    //         });
    //     }
    // }, [quill]);

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(jobdescription);

            quill.on('text-change', () => {
                setJobdescription(quillRef.current.firstChild.innerHTML);
            });
        }
    }, [quill]);


    const uploadopportImage = (e, flag) => {
        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = handleReaderLoadedone.bind(this, flag);
            reader.readAsBinaryString(file);
        }
    }
    const handleReaderLoadedone = (flag, e) => {
        let binaryString = e.target.result;
        if (flag == 'oppoimage') {
            setOppoimage({
                base64Data: btoa(binaryString),
            });
        }
    };

    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${apiURL}/Get_all_module/get_by_id?id=${ID}&Flag=Opportunity`);
            setAPIResponse(response.data.data)

            setTitle(response.data.data.tittle)
            setTags(response.data.data.tags)
            // setLogo(response.data.data.tittle)
            // setOppoimage(response.data.data.tittle)
            setOppertunitytype(response.data.data.Opportunity_type)
            setOpportunityMode(response.data.data.opportunity_mode)
            setJobdescription(response.data.data.job_description)

            setCdExclusive(response.data.data.cd_member)
            setClosingdate(response.data.data.closing_date)
            setInstagram(response.data.data.instagram_url)
            setopporvenuedetails(response.data.data.venue)

            setIsLoading(false);
        } catch (error) {
            console.error('Error making POST request:', error);
            setIsLoading(false);
        }
    }


    return (
        <div className='addopportunitycs'>
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
                    <div className='container mb-5 opportunity-height'>
                        <div className='col-12 row'>
                            <label className='label-head'>Title<span className='required-color'> (required)</span></label>
                            <input type='text' className='form-control' value={title} onChange={(e) => setTitle(e.target.value)}>
                            </input>
                        </div>

                        <div className='col-12 row'>
                            <label className='label-head'>Tags</label>
                            <input type='text' className='form-control' value={tags} onChange={(e) => setTags(e.target.value)}>
                            </input>
                        </div>


                        <div className='col-12 row mt-3'>
                            <label className='label-head'>Company logo</label>
                            {/* <input type='file' className='form-control file-change alignmentone' value={logo} onChange={(e) => setLogo(e.target.value)} /> */}
                            <input type='file' placeholder='Your answer' className='inputfileupload' onChange={(e) => uploadImage(e, 'logo')} />
                            <h5 className='txtaccfile'>Accepted file types: jpg, jpeg, png, Max. file size: 32 MB.</h5>
                        </div>

                        <div className='col-12 row mt-3'>
                            <label className='label-head'>Opportunity image</label>
                            <input type='file' className='inputfileupload' onChange={(e) => uploadopportImage(e, 'oppoimage')} />
                        </div>

                        <div className='col-12 row mt-3 selectwrapperoppor'>
                            <label className='label-head'>Opportunity type</label>
                            <select className='addopportunitydrpform' value={oppertunitytype} onChange={(e) => setOppertunitytype(e.target.value)}>
                                <option>--Select--</option>
                                <option value="Employment">Employment</option>
                                <option value="Courses, Fellowships and Scholarships">Courses, Fellowships and Scholarships</option>
                                <option value="Trainings and Workshops">Trainings and Workshops</option>
                                <option value="Grants and Funds">Grants and Funds</option>
                                <option value="Incubator and Accelerators">Incubator and Accelerators</option>
                                <option value="Contest">Contest</option>
                                <option value="Collaborations">Collaborations</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className='col-12 row mt-3'>
                            {oppertunitytype === 'Employment' && (
                                <>
                                    <h2>Employment type</h2>
                                    <div >
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="job" value='job' onChange={handleChangeempjob} />
                                            <span className="label-text">Job</span>
                                        </label>
                                    </div>
                                    <div >
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Internship" value='Internship' onChange={handleChangeempjob} />
                                            <span className="label-text">Internship</span>
                                        </label>
                                    </div>
                                    <div >
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Volunteering" value='Volunteering' onChange={handleChangeempjob} />
                                            <span className="label-text">Volunteering</span>
                                        </label>
                                    </div>
                                    <div >
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Freelance Project" value='Freelance Project' onChange={handleChangeempjob} />
                                            <span className="label-text">Freelance Project</span>
                                        </label>
                                    </div>
                                    <div >
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Full-time" value='Full-time' onChange={handleChangeempjob} />
                                            <span className="label-text">Full-time</span>
                                        </label>
                                    </div>

                                    <div >
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Part-time" value='Part-time' onChange={handleChangeempjob} />
                                            <span className="label-text">Part-time</span>
                                        </label>
                                    </div>
                                    <div >
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Paid" value='Paid' onChange={handleChangeempjob} />
                                            <span className="label-text">Paid</span>
                                        </label>
                                    </div>
                                    <div >
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Unpaid" value='Unpaid' onChange={handleChangeempjob} />
                                            <span className="label-text">Unpaid</span>
                                        </label>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* <div className='col-12 row mt-3'>
                    <label className='label-head'>Opportunity Type Options</label>

                    <select className='addopportunitydrpform' value={oppertunitytypeoption} onChange={(e) => setOppertunitytypeoption(e.target.value)}>
                        <option>--Select--</option>
                        {oppertunitytype === "Employment" ? (
                            <>
                                <option value="Job">Job</option>
                                <option value="Internship">Internship</option>
                                <option value="Freelanceprojct">Freelance projct</option>
                                <option value="Volunteering-time">Volunteering-time</option>
                                <option value="Paid">Paid</option>
                                <option value="UnPaid">UnPaid</option>
                            </>
                        ) : null}
                        {oppertunitytype === "GrantsandFunds" || oppertunitytype === "IncubatorandAccelerators"
                            || oppertunitytype === "Collaborations" ? (
                            <>
                                <option value="Description">Description</option>
                                <option value="Amount">Amount</option>
                                <option value="Criteria">Criteria</option>
                                <option value="Deadline">Deadline</option>
                            </>
                        ) : null}
                        {oppertunitytype === "Contest" ? (
                            <>
                                <option value="Description">Description</option>
                                <option value="Amount">Amount</option>
                                <option value="Deadline">Deadline</option>
                                <option value="Rewards">Rewards</option>
                            </>
                        ) : null}

                    </select>
                </div> */}

                        <div className='col-12 row'>
                            <label className='label-head'>Opportunity mode<span className='required-color'> (required)</span></label>
                            <div>
                                <label className='checkbox-label'>
                                    <input
                                        type="radio"
                                        name="OpportunityMode"
                                        value="online"
                                        checked={OpportunityMode === 'online'}
                                        onChange={handleOpportunityModeChange}
                                    />
                                    <span className="label-text">Online</span>
                                </label>
                            </div>
                            <div>
                                <label className='checkbox-label'>
                                    <input
                                        type="radio"
                                        name="eventMode"
                                        value="offline"
                                        checked={OpportunityMode === 'offline'}
                                        onChange={handleOpportunityModeChange}
                                    />
                                    <span className="label-text">Offline</span>
                                </label>
                            </div>
                            <div>
                                <label className='checkbox-label'>
                                    <input
                                        type="radio"
                                        name="eventMode"
                                        value="hybrid"
                                        checked={OpportunityMode === 'hybrid'}
                                        onChange={handleOpportunityModeChange}
                                    />
                                    <span className="label-text">Hybrid</span>

                                </label>
                            </div>

                        </div>
                        {OpportunityMode === 'online' ? (
                            <>

                                {/* <div className='col-12 row mt-3 communitymrg'>
                            <label for="platform_name" class="form-label label-head">Platform name:</label>
                            <input type='text' placeholder='Platform name' class='form-control foreventorgani' value={platform_name} onChange={(e) => setPlatform_name(e.target.value)} />
                        </div>

                        <div className='col-12 row mt-3 communitymrg'>
                            <label for="link" class="form-label label-head">Link:</label>
                            <input type='text' placeholder='Link' class='form-control foreventorgani' value={link} onChange={(e) => setLink(e.target.value)} />
                        </div> */}

                            </>)
                            : null}
                        {OpportunityMode === 'offline' ? (
                            <>
                                <div className='col-12 row mt-3 communitymrg'>
                                    <label className='label-head '>Location</label>
                                    <input type='text' placeholder='Location' class='form-control  foreventorgani' value={opporvenuedetails} onChange={(e) => setopporvenuedetails(e.target.value)} />
                                </div>
                            </>)
                            : null}
                        {OpportunityMode === 'hybrid' ? (
                            <>
                                {/* <div className='col-12 row mt-3 communitymrg'>
                            <label for="platform_name" class="form-label label-head">Platform name:</label>
                            <input type='text' placeholder='Platform name' class='form-control foreventorgani' value={platform_name} onChange={(e) => setPlatform_name(e.target.value)} />
                        </div>
                        <div className='col-12 row mt-3 communitymrg'>
                            <label for="link" class="form-label label-head">Link:</label>
                            <input type='text' placeholder='Link' class='form-control foreventorgani' value={link} onChange={(e) => setLink(e.target.value)} />
                        </div> */}
                                <div className='col-12 row mt-3 communitymrg'>
                                    <label className='label-head '>Location</label>
                                    <input type='text' placeholder='Location' class='form-control  foreventorgani' value={opporvenuedetails} onChange={(e) => setopporvenuedetails(e.target.value)} />
                                </div>
                            </>
                        ) : null}

                        {/* <div className='col-12 row'>
                    <label className='label-head'>Location<span className='required-color'> (required)</span></label>
                    <input type='text' className='form-control' value={location} onChange={(e) => setLocation(e.target.value)}>
                    </input>
                </div> */}

                        <div className='col-12 row'>
                            {/* <label className='label-head'>Description<span className='required-color'>(Required)</span></label>
                    <textarea type='text' className='form-control inputtextsize' value={jobdescription} onChange={(e) => setJobdescription(e.target.value)}> </textarea> */}

                            <div className='col-12 row mb-5'>
                                <label className='label-head'>Description<span className='required-color'> (required)</span></label>
                                <div className='quillrefdoc col-12'>
                                    <div ref={quillRef} />
                                </div>
                            </div>


                            {/* <div className='col-12 row mt-3 mb-3'>
                        <label className='label-head'>Opportunities Banner Image</label>
                        <input type='file' className='inputfileupload' onChange={(e) => uploadImage1(e, 'banner_image')} />
                    </div> */}

                            <div className='col-12 row cd-exclusive1 cd-exclusive'>
                                <label className='label-head'>This is a CD exclusive opportunity </label>
                            </div>
                            <div>
                                <label className='checkbox-label'>
                                    <input
                                        type="radio"
                                        name="cdExclusive"
                                        value="Yes"
                                        checked={cdExclusive === 'Yes'}
                                        onChange={handleCD_Exclusive}
                                    />
                                    <span className="label-text">Yes</span>

                                </label>
                            </div>
                            <div>
                                <label className='checkbox-label'>
                                    <input
                                        type="radio"
                                        name="cdExclusive"
                                        value="No"
                                        checked={cdExclusive === 'No'}
                                        onChange={handleCD_Exclusive}
                                    />
                                    <span className="label-text">No</span>

                                </label>
                            </div>

                        </div>
                        <div className='col-12 row'>
                            <label className='label-head'>Application deadline</label>
                            <input type='date' className='form-controlone col-12' value={closingdate} onChange={(e) => setClosingdate(e.target.value)}>
                            </input>
                        </div>

                        <div class='col-12 row mt-3'>
                            <label className='label-head'>External link:</label>
                            <input type='text' placeholder='Enter URL for opportunity link' class='form-control foreventextranal mb-5' value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                        </div>
                        {/* <>
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
                </> */}

                        <div className='row col-xl-2 col-md-6'>
                            <button className="btn-nextone mt-4 mb-4" onClick={postData}>Submit</button>
                        </div>

                    </div>

                </>
            )}
            <Footer></Footer>
        </div>
    )
}

export default Addopportunityform;