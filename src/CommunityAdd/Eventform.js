import React, { useContext, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Eventform.css';
import { Link, useLocation, useNavigate, } from "react-router-dom";
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import axios from 'axios';
import { apiURL } from "../Commen/apiurl"
import Select from 'react-select';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Individual_Header from '../Header/new_header';
import { useQuill } from 'react-quilljs';



function Eventform() {

    const location = useLocation();
    const { ID, Flag } = location.state;
    console.log(ID, Flag, "ID")

    const navigate = useNavigate()
    const [fullname, setfullname] = useState('')
    const [eventtittle, seteventtittle] = useState("")
    const [eventdiscription, seteventdiscription] = useState("")
    const [startdate, setstartdate] = useState("")
    const [starttime, setstarttime] = useState('08:00')
    const [enddate, setenddate] = useState("")
    const [endtime, setendtime] = useState('18:00')
    const [eventimage, seteventimage] = useState(null)
    // const [eventcategories, seteventcategories] = useState([]);
    const [venuedetails, setvenuedetails] = useState("")
    const [organizer, setOrganizer] = useState("");
    const [organizersData, setOrganizersData] = useState([]);
    const [showAddAnother, setShowAddAnother] = useState(false);
    const [eventwebsite_link, seteventwebsite_link] = useState("")
    const [event_cost, setevent_cost] = useState("")
    const [eventstatus, setEventStatus] = useState('Scheduled');
    const [selectedImage, setSelectedImage] = useState(null);
    const [eventMode, setEventMode] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [response, setResponse] = useState("")
    const [logo, setLogo] = useState("")
    const [cdExclusive, setCdExclusive] = useState("")
    const [event_banner_image, setEventBannerImage] = useState(null);
    const [banner_image, setBannerImage] = useState('');
    const [platform_name, setPlatform_name] = useState('');
    const [link, setLink] = useState('');
    const [isToastOpen, setIsToastOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [townvilcity, settownvilcity] = useState("")
    const [stateval, setStateVal] = useState("")

    const [apiResponse, setAPIResponse] = useState("");
    console.log(apiResponse, "apiResponse");


    // const categoriesString = eventcategories.map(category => category.value).join(',');

    const uploadImage = (e, flag) => {

        let file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
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

    const [eventcategories, setEventCategories] = useState([]);
    console.log(eventcategories, "eventcategories")


    const handleChangecivildemo = (event) => {
        const eventcategorie = event.target.value;
        if (eventcategories.includes(eventcategorie)) {
            const newArray = eventcategories.filter(day => day !== eventcategorie);
            setEventCategories(newArray);
        } else {
            const newArray = [...eventcategories, eventcategorie];
            setEventCategories(newArray);
        }
    };

    useEffect(() => {
        if (ID != 0) {
            getData()
        }
    }, []);

    useEffect(() => {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-based
        const currentDay = today.getDate().toString().padStart(2, '0');

        const formattedStartDate = `${currentYear}-${currentMonth}-${currentDay}`;
        const formattedEndDate = `${currentYear}-${currentMonth}-${currentDay}`;

        setstartdate(formattedStartDate);
        setenddate(formattedEndDate);
    }, []);
    const handlecheckbox = (e) => {
        setIsChecked(e.target.checked);
    };
    const handleStartdateChange = (e) => {
        const newStartdate = e.target.value;
        setstartdate(newStartdate);

        if (enddate < newStartdate) {
            setenddate(newStartdate);
        }
    };

    const handleendtime = (e) => {
        const newendtime = e.target.value;
        if (startdate === enddate) {
            if (!isToastOpen) {
                setIsToastOpen(true);
                if (starttime < newendtime) {
                    setendtime(newendtime)
                } else {
                    toast.error('Start date/time should be before the End date')
                }
                setTimeout(() => {
                    setIsToastOpen(false);
                }, 5000); // set the timeout based on how long the toast message will be displayed
            }
        } else {
            setendtime(newendtime)
        }
    }
    const convertToAMPM = (time) => {
        const [hours, minutes] = time.split(':');
        let period = 'AM';
        let hours12 = parseInt(hours, 10);
        if (hours12 >= 12) {
            period = 'PM';
            return `${hours12}:${minutes} ${period}`;
        } else if (hours12 === 0) {
            // If it's midnight (00:00), convert to 12:00 AM
            return `${hours12}:${minutes} ${period}`;
        }
        return `${hours12}:${minutes} ${period}`;
    };
    const handleEventStatusChange = (e) => {
        setEventStatus(e.target.value);
    };

    const handleEventModeChange = (e) => {
        setEventMode(e.target.value);
    };

    const handleCD_Exclusive = (e) => {
        setCdExclusive(e.target.value);
    };
    const categoriesString = eventcategories.join(',');

    const postData = async () => {

        if (eventtittle) {
            if (eventdiscription) {
                setIsLoading(true);
                // if (startdate && starttime && enddate && endtime) {
                var payload = {
                    "id": ID,
                    "event_title": eventtittle,
                    "description": eventdiscription,
                    "event_start_date": startdate,
                    "event_start_time": starttime,
                    "event_end_date": enddate,
                    "event_end_time": endtime,
                    "event_image": JSON.stringify(logo),
                    "categories": JSON.stringify(eventcategories),
                    "event_status": eventstatus,
                    "venue_details": venuedetails,
                    "organizer": organizer,
                    "event_web_site": eventwebsite_link,
                    "event_cost": event_cost,
                    "cd_member": cdExclusive,
                    "event_mode": eventMode,
                    "banner_image": "",
                    "platform_name": platform_name,
                    "link": link,
                    "Flag": Flag,
                    "city": townvilcity,
                    "state": stateval,
                }
                try {
                    const response = await axios.post(`${apiURL}/Auth/create_event`, payload, {
                    });
                    setIsLoading(false);
                    showAlert(response.data.message);
                    setResponse(response.data);
                    navigate('/event')
                } catch (error) {
                    setIsLoading(false);
                    console.error('Error making POST request:', error);
                }
                // } else {
                //     toast.error('Please Enter Event Date and Time');
                // }
            } else {
                toast.error('Please Enter Event Description');
            }
        } else {
            toast.error('Please Enter Event Title');
        }
    };
    const showAlert = (message) => {
        Swal.fire({
            title: 'Thank you for sharing an interesting Event, it will be added to our What’s On section soon!',
            confirmButtonText: 'OK',
            confirmButtonColor: '#D19426',
            customClass: {
                confirmButton: 'addsubmitevent',
            },
        });
    };

    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.clipboard.dangerouslyPasteHTML(eventdiscription);
            quill.on('text-change', () => {
                seteventdiscription(quillRef.current.firstChild.innerHTML);
            });
        }
    }, [quill]);

    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${apiURL}/Get_all_module/get_by_id?id=${ID}&Flag=Event`);
            setAPIResponse(response.data.data);
            seteventtittle(response.data.data.event_title);
            setstartdate(response.data.data.event_start_date);
            setstarttime(response.data.data.event_start_time);
            setenddate(response.data.data.event_end_date);
            setendtime(response.data.data.event_end_time);
            setEventCategories(JSON.parse(response.data.data.categories));
            setEventMode(response.data.data.event_mode);
            setvenuedetails(response.data.data.venue_details);
            setLink(response.data.data.link);
            setPlatform_name(response.data.data.platform_name);
            setOrganizer(response.data.data.organizer);
            setCdExclusive(response.data.data.cd_member);
            seteventwebsite_link(response.data.data.event_web_site);
            setevent_cost(response.data.data.event_cost);
            seteventdiscription(response.data.data.description);
            setStateVal(response.data.data.state);
            settownvilcity(response.data.data.your_city);

            setIsLoading(false);
        } catch (error) {
            console.error('Error making POST request:', error);
            setIsLoading(false);
        }
    }


    const testbutton = () => {
        if (fullname != '') {
            alert('welcome')
        } else {
            toast.error('Please Enter Full Name');
        }
    }
    function formatDate(dateString) {
        if (!dateString) return ''; // Handle cases where the date is empty or undefined

        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options); // 'en-GB' sets the format to dd/mm/yyyy
    }

    const checkboxes = [
        { name: 'Collective Meeting and Sessions', value: 'Collective Meeting and Sessions' },
        { name: 'Exhibition, Bazaar and Sales', value: 'Exhibition, Bazaar and Sales' },
        { name: 'Art Showcase, Presentation', value: 'Art Showcase, Presentation' },
        { name: 'Cultural Festival', value: 'Cultural Festival' },
        { name: 'Hands-on Craft Workshop', value: 'Hands-on Craft Workshop' },
        { name: 'Craft Tour', value: 'Craft Tour' },
        { name: 'Training and Workshop', value: 'Training and Workshop' },
        { name: 'Contest and Awards', value: 'Contest and Awards' },
        { name: 'Symposium, Conclave and Conference', value: 'Symposium, Conclave and Conference' },
        { name: 'Seminar, Webinar and Information Sessions', value: 'Seminar, Webinar and Information Sessions' },
        { name: 'Talk, Panel Discussion, Interview', value: 'Talk, Panel Discussion, Interview' },
        { name: 'Others', value: 'Others' },
    ];

    return (
        <div className='textrefer'>
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
                    <div className='container event_form_height' style={{ border: '2px solid #dedede' }}>
                        <div className='mt-5'>
                            <div className='col-12 row mt-3 '>
                                <label className='label-headone txtaddnew'>Add new event </label>
                            </div>

                            <div className='col-12 row mt-3 communitymrg'>
                                <div className='txteventtime'>
                                    <div className='event-time-header'>
                                        <label className='label-headtwo '> Event title<span className='required-color'> (Required)</span></label>
                                    </div>
                                    <div class='col-12 row mt-3'>
                                        <input type='text' placeholder='Event Title' className='form-control txtinputbox' value={eventtittle} onChange={(e) => seteventtittle(e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 row'>
                                <div class="mb-5">
                                    <label className='label-head'>Description<span className='required-color'> (Required)</span></label>
                                    <div className='quillrefdoc event_desc_bot col-12' style={{ paddingLeft: '0px' }}>
                                        <div ref={quillRef} />
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 row mt-3 communitymrg'>
                                <div className='txteventtime'>
                                    <div className='event-time-header'>
                                        <label className='label-head '>Event date & time</label>
                                    </div>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <div className='mt-4 '>
                                                    {/* <h4>Start/End:</h4> */}
                                                    <div className=''>
                                                        <div className='col-sm-2'>
                                                            <p className='starten'>Start</p>
                                                        </div>
                                                        <div className='col-sm-2 mb-5'>
                                                            <input
                                                                type='date'
                                                                className='form-controlone1'
                                                                value={startdate}
                                                                onChange={handleStartdateChange}
                                                            />
                                                        </div>
                                                        {isChecked == false &&
                                                            <div className='col-sm-2'>

                                                                <input
                                                                    type='time'
                                                                    className='form-controlone1'
                                                                    value={starttime}
                                                                    onChange={(e) => setstarttime(e.target.value)}
                                                                />
                                                            </div>
                                                        }

                                                        <div className='col-sm-1 event-to'>
                                                            <p className='todate'>End</p>
                                                        </div>

                                                        <div className='col-sm-2 mb-5'>
                                                            <input
                                                                type='date'
                                                                className='form-controlone1'
                                                                value={enddate}
                                                                min={startdate}
                                                                onChange={(e) => setenddate(e.target.value)}
                                                            />
                                                        </div>
                                                        {isChecked == false &&
                                                            <div className='col-sm-2 mb-5'>
                                                                <input
                                                                    type='time'
                                                                    className='form-controlone1'
                                                                    value={endtime}
                                                                    min={starttime}
                                                                    onChange={handleendtime}
                                                                // onChange={(e) => setendtime(e.target.value)}
                                                                />
                                                            </div>
                                                        }
                                                        <div className='col-sm-1'></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-sm-2'></div>
                                            <div className='col-md-8 mx-2'>
                                                <div>
                                                    <input type='Checkbox' name='radiofull' className='mx-2' onChange={handlecheckbox} checked={isChecked} />
                                                    <label className='checkbox-label alldayev'>All day event</label>
                                                </div>
                                                <div>
                                                    {(startdate && isChecked == false) &&
                                                        <p className='start-envents mx-2'>This event starts at {convertToAMPM(starttime)} on {formatDate(startdate)} and ends at {convertToAMPM(endtime)} on {formatDate(enddate)}</p>
                                                    }
                                                    {isChecked &&
                                                        <>
                                                            {startdate === enddate ?
                                                                <p className='start-envents mx-2'>This event is all day on {formatDate(startdate)}.</p> :
                                                                <p className='start-envents mx-2'>This event is all day starting on {formatDate(startdate)} and ending on {formatDate(enddate)}.</p>
                                                            }

                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12 row mt-3 communitymrg'>
                                <div className='txteventtime'>
                                    <div className='event-time-header'>
                                        <label className='label-head '> Event image</label>
                                    </div>
                                    <div className=' start-end'>
                                        <div class="chooseimg">
                                            {selectedImage ? (
                                                <img src={selectedImage} alt="Thumbnail" style={{ maxWidth: '200px' }} />
                                            ) : (
                                                <img src={Images.imageicon} alt='Placeholder' />
                                            )}
                                        </div>
                                        <div class="chooseimg">
                                            <p>Choose a .jpg, .png, or .gif file under 32 MB in size.</p>
                                        </div>
                                        <div className='fileimage'>
                                            <div className='image-color'><span className='choseimg'>Choose image</span>
                                                <input type='file' className='form-control uploadf' value={eventimage} onChange={(e) => uploadImage(e, 'logo')} ></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 row mt-3 communitymrg'>
                                <div className='txteventtime'>
                                    <div className='event-time-header'>
                                        <label className='label-head '>Event categories</label>
                                    </div>
                                    {/* <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="collective Meeting and Sessions"
                                                value="collective Meeting and Sessions"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Collective Meeting and Sessions</span>
                                        </label>
                                    </div>

                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Exhibition,Bazaar and Sales"
                                                value="Exhibition, Bazaar and Sales"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Exhibition, Bazaar and Sales</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Art Showcase, Presentation"
                                                value="Art Showcase, Presentation"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Art Showcase, Presentation</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Cultural Festival"
                                                value="Cultural Festival"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Cultural Festival</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Hands-on Craft Workshop"
                                                value="Hands-on Craft Workshop"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Hands-on Craft Workshop</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Craft Tour"
                                                value="Craft Tour"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Craft Tour</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Training and Workshop"
                                                value="Training and Workshop"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Training and Workshop</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Contest and Awards"
                                                value="Contest and Awards"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Contest and Awards</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Symposium,Conclave and Conference"
                                                value="Symposium, Conclave and Conference"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Symposium, Conclave and Conference</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Seminar, Webinar and Information Sessions"
                                                value="Semina, Webinar and Information Sessions"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Seminar, Webinar and Information Sessions</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Talk, Panel Discussion, Interview"
                                                value="Talk,Panel Discussion,Interview"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Talk, Panel Discussion, Interview</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input type="checkbox" name="Others"
                                                value="Others"
                                                onChange={handleChangecivildemo} />
                                            <span className="label-text">Others</span>
                                        </label>
                                    </div> */}
                                    {checkboxes.map((checkbox) => (
                                        <div key={checkbox.name}>
                                            <label className='checkbox-label'>
                                                <input
                                                    type='checkbox'
                                                    name={checkbox.name}
                                                    value={checkbox.value}
                                                    onChange={handleChangecivildemo}
                                                    checked={eventcategories.includes(checkbox.value)}
                                                />
                                                <span className='label-text'>{checkbox.value}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* <div className='col-12 row mt-3 communitymrg'>
                        <div className='txteventtime'>
                            <div className='event-time-header'>
                                <label className='label-head'>Event status</label>
                            </div>

                            <div className='col-12 row mt-3'>
                                <label htmlFor="event-status" className="form-label">Set status:</label>
                                <select id="event-status" className='form-control foreventstatus' value={eventstatus} onChange={handleEventStatusChange}>
                                    <option value="Scheduled">Scheduled</option>
                                    <option value="Canceled">Canceled</option>
                                    <option value="Postponed">Postponed</option>
                                </select>
                            </div>

                            {eventstatus !== 'Scheduled' && (
                                <div className='col-12 row mt-3'>
                                    <label htmlFor="reason" className="form-label">Reason:</label>
                                    <textarea id="reason" className="form-control" rows="3"></textarea>
                                </div>
                            )}
                        </div>
                    </div> */}

                            <div className='col-12 row mt-3 communitymrg'>
                                <div className='txteventtime'>
                                    <div className='event-time-header'>
                                        <label className='label-head'> Event mode </label>
                                    </div>
                                    <div>
                                        <label className='checkbox-label'>
                                            <input
                                                type="radio"
                                                name="eventMode"
                                                value="online"
                                                checked={eventMode === 'online'}
                                                onChange={handleEventModeChange}
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
                                                checked={eventMode === 'offline'}
                                                onChange={handleEventModeChange}
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
                                                checked={eventMode === 'hybrid'}
                                                onChange={handleEventModeChange}
                                            />
                                            <span className="label-text">Hybrid</span>

                                        </label>
                                    </div>
                                </div>
                            </div>

                            {eventMode === 'online' ? (
                                <>
                                    <div className='col-12 row mt-3 communitymrg'>
                                        <div className='txteventtime'>
                                            <div className='event-time-header'>
                                                <label className='label-head '>Platform name</label>
                                            </div>
                                            <div class='col-12 row mt-3'>
                                                {/* <label for="platform_name" class="form-label">Platform Name:</label> */}
                                                <input type='text' placeholder='Platform Name' class='form-control foreventorgani' value={platform_name} onChange={(e) => setPlatform_name(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 row mt-3 communitymrg'>
                                        <div className='txteventtime'>
                                            <div className='event-time-header'>
                                                <label className='label-head '>Link</label>
                                            </div>
                                            <div class='col-12 row mt-3'>
                                                {/* <label for="link" class="form-label">Link:</label> */}
                                                <input type='text' placeholder='Link' class='form-control foreventorgani' value={link} onChange={(e) => setLink(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                </>)
                                : null}
                            {eventMode === 'offline' ? (
                                <>
                                    <div className='col-12 row mt-3 communitymrg'>
                                        <div className='txteventtime'>
                                            <div className='event-time-header'>
                                                <label className='label-head '>Venue details</label>
                                            </div>
                                            <div class='col-12 row mt-3'>
                                                {/* <label for="countries" class="form-label">Venue:</label> */}
                                                <input type='text' placeholder='Venue' class='form-control foreventorgani' value={venuedetails} onChange={(e) => setvenuedetails(e.target.value)} />
                                            </div>
                                            <div className='row'>
                                                <div className='col-7'>
                                                    <label className='label-head'>Your city / Town / Village</label>
                                                    <input type='text' class='form-control foreventorgani' value={townvilcity} name='townvilcity' onChange={(e) => settownvilcity(e.target.value)} />
                                                </div>
                                                <div className='col-5 selectwrapperformtwostate'>
                                                    <label className='label-head'>State </label>
                                                    <select class='form-control foreventorgani' value={stateval} name='stateval'
                                                        onChange={(e) => setStateVal(e.target.value)}
                                                    // onChange={(e) => setvenuedetails(e.target.value)}
                                                    >
                                                        <option>--Select State--</option>
                                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                        <option value="Assam">Assam</option>
                                                        <option value="Bihar">Bihar</option>
                                                        <option value="Chandigarh">Chandigarh</option>
                                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                                        <option value="Dadra & Nagar Haveli and Daman & Diu">Dadra & Nagar Haveli and Daman & Diu</option>
                                                        <option value="Goa">Goa</option>
                                                        <option value="Gujarat">Gujarat</option>
                                                        <option value="Haryana">Haryana</option>
                                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                        <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                                        <option value="Jharkhand">Jharkhand</option>
                                                        <option value="Karnataka">Karnataka</option>
                                                        <option value="Kerala">Kerala</option>
                                                        <option value="Ladakh">Ladakh</option>
                                                        <option value="Lakshadweep">Lakshadweep</option>
                                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                        <option value="Maharashtra">Maharashtra</option>
                                                        <option value="Manipur">Manipur</option>
                                                        <option value="Meghalaya">Meghalaya</option>
                                                        <option value="Mizoram">Mizoram</option>
                                                        <option value="Nagaland">Nagaland</option>
                                                        <option value="National Capital Territory (NCT), Delhi">National Capital Territory (NCT), Delhi</option>
                                                        <option value="Odisha">Odisha</option>
                                                        <option value="Puducherry">Puducherry</option>
                                                        <option value="Punjab">Punjab</option>
                                                        <option value="Rajasthan">Rajasthan</option>
                                                        <option value="Sikkim">Sikkim</option>
                                                        <option value="TamilNadu">TamilNadu</option>
                                                        <option value="Telangana">Telangana</option>
                                                        <option value="Tripura">Tripura</option>
                                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                        <option value="Uttarakhand">Uttarakhand</option>
                                                        <option value="West Bengal">West Bengal</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>)
                                : null}

                            {eventMode === 'hybrid' ? (
                                <>
                                    <div className='col-12 row mt-3 communitymrg'>
                                        <div className='txteventtime'>
                                            <div className='event-time-header'>
                                                <label className='label-head '>Platform name</label>
                                            </div>
                                            <div class='col-12 row mt-3'>
                                                {/* <label for="platform_name" class="form-label">Platform Name:</label> */}
                                                <input type='text' placeholder='Platform Name' class='form-control foreventorgani' value={platform_name} onChange={(e) => setPlatform_name(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 row mt-3 communitymrg'>
                                        <div className='txteventtime'>
                                            <div className='event-time-header'>
                                                <label className='label-head '>Link</label>
                                            </div>
                                            <div class='col-12 row mt-3'>
                                                {/* <label for="link" class="form-label">Link:</label> */}
                                                <input type='text' placeholder='Link' class='form-control foreventorgani' value={link} onChange={(e) => setLink(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12 row mt-3 communitymrg'>
                                        <div className='txteventtime'>
                                            <div className='event-time-header'>
                                                <label className='label-head '>Venue details</label>
                                            </div>

                                            <div class='col-12 row mt-3'>
                                                {/* <label for="countries" class="form-label">Venue:</label> */}
                                                <input type='text' placeholder='Venue' class='form-control foreventorgani' value={venuedetails} onChange={(e) => setvenuedetails(e.target.value)} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-7'>
                                            <label className='label-head'>Your city / Town / Village</label>
                                            <input type='text' class='form-control foreventorgani' value={townvilcity} name='townvilcity' onChange={(e) => settownvilcity(e.target.value)} />
                                        </div>
                                        <div className='col-5 selectwrapperformtwostate'>
                                            <label className='label-head'>State </label>
                                            <select class='form-control foreventorgani' value={stateval} name='stateval'
                                                onChange={(e) => setStateVal(e.target.value)}
                                            // onChange={(e) => setvenuedetails(e.target.value)}
                                            >
                                                <option>--Select State--</option>
                                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Dadra & Nagar Haveli and Daman & Diu">Dadra & Nagar Haveli and Daman & Diu</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Ladakh">Ladakh</option>
                                                <option value="Lakshadweep">Lakshadweep</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="National Capital Territory (NCT), Delhi">National Capital Territory (NCT), Delhi</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Puducherry">Puducherry</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="TamilNadu">TamilNadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>

                                            </select>
                                        </div>
                                    </div><div className='row'>
                                        <div className='col-7'>
                                            <label className='label-head'>Your city / Town / Village</label>
                                            <input type='text' class='form-control foreventorgani' value={townvilcity} name='townvilcity' onChange={(e) => settownvilcity(e.target.value)} />
                                        </div>
                                        <div className='col-5 selectwrapperformtwostate'>
                                            <label className='label-head'>State </label>
                                            <select class='form-control foreventorgani' value={stateval} name='stateval'
                                                onChange={(e) => setStateVal(e.target.value)}
                                            // onChange={(e) => setvenuedetails(e.target.value)}
                                            >
                                                <option>--Select State--</option>
                                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chandigarh">Chandigarh</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Dadra & Nagar Haveli and Daman & Diu">Dadra & Nagar Haveli and Daman & Diu</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Ladakh">Ladakh</option>
                                                <option value="Lakshadweep">Lakshadweep</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="National Capital Territory (NCT), Delhi">National Capital Territory (NCT), Delhi</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Puducherry">Puducherry</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="TamilNadu">TamilNadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>

                                            </select>
                                        </div>
                                    </div>
                                </>)
                                : null}

                            <div className='col-12 row mt-3 communitymrg'>
                                <div className='txteventtime'>
                                    <div className='event-time-header'>
                                        <label className='label-head'>Organizer details</label>
                                    </div>

                                    <div className='col-12 row mt-3'>
                                        {/* <label htmlFor="organizer" className="form-label">Organizer:</label> */}
                                        <input type='text' placeholder='Organizer' class='form-control txtinputbox ' value={organizer} onChange={(e) => setOrganizer(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 row mt-3 communitymrg'>
                                <div className='txteventtime'>
                                    <div className='event-time-header'>
                                        <label className='label-head'>This is a CD exclusive event</label>
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
                            </div>

                            <div className='col-12 row mt-3 communitymrg'>
                                <div className='txteventtime'>
                                    <div className='event-time-header'>
                                        <label className='label-head '>Event website</label>
                                    </div>
                                    <div class='col-12 row mt-3'>
                                        {/* <label for="countries" class="form-label">External Link:</label> */}
                                        <input type='text' placeholder='Enter URL for event information' class='form-control txtinputbox ' value={eventwebsite_link} onChange={(e) => seteventwebsite_link(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 row mt-3 communitymrg'>
                                <div className='txteventtime'>
                                    <div className='event-time-header'>
                                        <label className='label-head '>Event cost</label>
                                    </div>
                                    <div class='col-12 row mt-3'>
                                        {/* <label for="countries" class="form-label label-cost">Cost:</label> */}
                                        <input type='text' placeholder='Event Cost' class='form-control txtinputbox ' value={event_cost} onChange={(e) => setevent_cost(e.target.value)} />
                                        <p className='txtleavebla'>Leave blank to hide the field. Enter a 0 for events that are free.</p>
                                    </div>
                                </div>
                            </div>
                            <div class='row col-xl-2 col-md-6'>
                                <button type="button" onClick={postData} class="btn-primary addsubmitevent mb-4">Submit</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div class="mt-5">
                <Footer></Footer>
            </div>
        </div >
    )
}

export default Eventform