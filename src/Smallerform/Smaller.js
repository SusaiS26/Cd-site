import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Smaller.css'
import { Button } from 'react-bootstrap';
import { apiURL } from "../Commen/apiurl";
import axios from 'axios';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import Individual_Header from '../Header/new_header';
import { useLocation } from 'react-router';
import { getDefaultNormalizer } from '@testing-library/react';


function Smaller() {

    const location = useLocation();
    const { ID, Flag } = location.state;

    const [tittle, settittle] = useState("")
    const [website_name, setwebsite_name] = useState("")
    const [website_url, setwebsite_url] = useState("")
    const [description, setdescription] = useState("")
    const [response, setResponse] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [apiResponse, setAPIResponse] = useState("");


    useEffect(() => {
        if (ID != 0) {
            getData()
        }
    }, []);

    const postData = async () => {
        if (tittle) {
            setIsLoading(true);
            var payloadvolu = {
                "id": ID,
                "Tittle": tittle,
                "website_name": website_name,
                "website_url": website_url,
                "Description": description,
                "Flag": Flag,
            }
            try {
                const response = await axios.post(`${apiURL}/UserMaster/smaller_form`, payloadvolu, {});
                setIsLoading(false);
                showAlert(response.data.message);
                setResponse(response.data);
            } catch (error) {
                console.error('Error making POST request:', error);
                setIsLoading(false);
                showAlerterr();
            }
        } else {
            toast.error('Please Enter Event Title');
        }
    };
    const showAlerterr = () => {
        Swal.fire({
            title: 'Smaller Added Failed',
            confirmButtonText: 'OK',
            confirmButtonColor: '#D19426',
            customClass: {
                confirmButton: 'addsubmitevent',
            },
        });
    };
    const showAlert = () => {
        Swal.fire({
            title: 'Smaller Form Added Successfully',
            confirmButtonText: 'OK',
            confirmButtonColor: '#D19426',
            customClass: {
                confirmButton: 'addsubmitevent',
            },
        });
    };

    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${apiURL}/Get_all_module/get_by_id?id=${ID}&Flag=Smaller`);
            setAPIResponse(response.data.data)
            settittle(response.data.data.Tittle)
            setwebsite_name(response.data.data.website_name)
            setwebsite_url(response.data.data.website_url)
            setdescription(response.data.data.Description)
            setIsLoading(false);
        } catch (error) {
            console.error('Error making POST request:', error);
            setIsLoading(false);
        }
    }

    return (
        <div className='smallerformcss'>

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
                    <div className='container smaller_form_height'>
                        <div className='col-12 row mt-3'>
                            <label className='label-head'>Title<span className='required-color'> (required)</span></label>
                            <input type='text' className='form-control' value={tittle} onChange={(e) => settittle(e.target.value)} />
                        </div>
                        <div className='col-12 row mt-3'>
                            <label className='label-head'>Website name</label>
                            <input type='text' className='form-control' value={website_name} onChange={(e) => setwebsite_name(e.target.value)} />
                        </div>
                        <div className='col-12 row mt-3'>
                            <label className='label-head'>Website URL</label>
                            <input type='text' className='form-control' value={website_url} onChange={(e) => setwebsite_url(e.target.value)} />
                        </div>
                        <div className='col-12 row mt-3'>
                            <label className='label-head'>Description</label>
                            <textarea type='text' className='text-area mb-3 textareaone' row='10' col='10' value={description} onChange={(e) => setdescription(e.target.value)} ></textarea>
                        </div>

                        <div className='col-4'>
                            {/* <button className="btn-next mt-4 mb-4"onClick={postData}>Submit</button> */}
                            <Button className='btn-next mt-4 mb-4' onClick={postData}>Submit</Button>
                        </div>

                    </div>
                </>
            )}
            <div><Footer /></div>
        </div>
    )
}

export default Smaller