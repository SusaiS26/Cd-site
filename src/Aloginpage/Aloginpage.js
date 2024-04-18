import React, { useState } from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './Aloginpage.css';
import Button from 'react-bootstrap/Button';
import Images from '../Images/Imagespic';
import GithubSquare from '@rsuite/icons/legacy/GithubSquare';
import LinkedinSquare from '@rsuite/icons/legacy/LinkedinSquare';
import FacebookSquare from '@rsuite/icons/legacy/FacebookSquare';
import axios from 'axios';
import { apiURL } from '../Commen/apiurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import "rsuite/dist/rsuite.min.css";

function Aloginpage() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");
    const navigate = useNavigate();

    const loginCheck = async () => {
        console.log("login")
        if (username && password)
            if (username) {
                if (password) {
                    const requestData = new FormData();
                    requestData.append('username', username);
                    requestData.append('password', password);

                    try {
                        const response = await axios.post(`${apiURL}/Auth/token`, requestData, {});
                        console.log("response", response)
                        setResponse(response.data);
                        sessionStorage.setItem("access_token",response.data.access_token)
                        if (response.data.access_token) {
                            navigate('/Admin_approval');
                        }
                    } catch (error) {
                        console.error('Error making POST request:', error);
                        toast.error('Login Failed');
                    }
                }
                else {
                    toast.error('Please Enter Password');
                }
            }
            else {
                toast.error('Please Enter Username');
            }
        else {
            toast.error('Please Enter Username and Password');
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            loginCheck();
        }
    };

    return (<>
        <Header></Header>
        <ToastContainer toastOptions={{ position: "top-right" }} />
        <div className='fullbodysigin'>
            <div id='myDivone' className='d-flex'>
                <div class="signindcsfirst mx-5 col-xl-3 col-lg-3 col-md-6 py-5 px-5">
                    <div class="form-outline userlist">
                        <label className="emailid" >User Name</label>
                        <input type="text" autoComplete='off' placeholder='Please Enter User Name' id="form2Example1" class="form-control " value={username} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div class="form-outline ">
                        <label className="emailid" for="form2Example2">Password</label>
                        <input type="password" onKeyPress={handleKeyPress} placeholder='Please Enter password' id="form2Example2" class="form-control " value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="button" class="btnone btn-primary btnsignin btn-block py-3 " onClick={loginCheck}>Sign in</button>
                    <p className='sinupcss'>If You Have No Account Please <a href="/Signup" className='txtbold'> sign up</a></p>
                    <div className='row siginform mx-1'>
                        <span className='col-xl-6 col-md-6 signwithsocial'>Sign in with</span>
                        {/* <div className="google-plus-icon"> */}
                        <div className="col-xl-2 col-md-2 google-plus-icon"> <img src={Images.chrome} className='googlepcs'></img></div>
                        {/* </div> */}
                        <div className='col-xl-2 col-md-2 signwithsocial'>or</div>
                        <div className='col-xl-2 col-md-2 logfacecss'>
                            <FacebookSquare style={{ fontSize: '3rem' }} color="#153FEC" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    </>
    )
}

export default Aloginpage;