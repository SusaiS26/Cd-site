import './singup.css';
import Button from 'react-bootstrap/Button';
import Images from '../Images/Imagespic';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiURL } from "../Commen/apiurl"



function Signup() {
    const [username, setusername] = useState("")
    const [Email, setEmail] = useState("")
    const [ContectNo, setContectNo] = useState("")
    const [Password, setPassword] = useState("")
    const [User_Type, setUser_Type] = useState("")
    const [Address, setAddress] = useState("")
    const [Designation, setDesignation] = useState("")
    const [Location, setLocation] = useState("")
    const [Pincode, setPincode] = useState("")

    const [response, setResponse] = useState(null);

    const postData = async () => {
        try {

            const response = await axios.post(`${apiURL}/Auth/AddUser`, {
                "username": username,
                "email": Email,
                "contact_number": ContectNo,
                "hashed_password": Password,
                "usertype": User_Type,
                "address": Address,
                "designation": Designation,
                "location": Location,
                "pincode": Pincode
            });

            setResponse(response.data);
        }
        catch (error) {
            console.error('Error making POST request:', error);
        }
    };


    return (
        <>    <Header></Header>
            <div className='signupcss  '>
                <div id='myDivonetwo'  >
                    <div className='txtfullmargin' >
                        <h1 className='txtsinupone'>Sign Up</h1>
                        <p className='txtsinupone'>Please fill in this form to create an account.</p>
                        <hr />
                    </div>
                    <div class="row">
                        <div className='col-3'>
                        </div>

                        <div className='col-3'>
                            <label for="email"><p className='txt-emailid'>Username</p></label><br />
                            <input type="text" class=' form-control' placeholder="Username" value={username} onChange={(e) => setusername(e.target.value)} required />
                        </div>
                        <div className='col-3'>
                            <label for="psw"><p className='txt-emailid'>Email</p></label><br />
                            <input type="text" class=' form-control' placeholder="Enter email" value={Email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className='col-3'>

                        </div>
                    </div>
                    <div class="row mrtop" >
                        <div className='col-3'>
                        </div>
                        <div className='col-3'>
                            <label for="email"><p className='txt-emailid'>Contact number</p></label><br />
                            <input type="text" class=' form-control' placeholder="Contact number" value={ContectNo} onChange={(e) => setContectNo(e.target.value)} required />
                        </div>
                        <div className='col-3'>
                            <label for="psw"><p className='txt-emailid'>Password</p></label><br />
                            <input type="password" class=' form-control' placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className='col-3'>
                        </div>
                    </div>
                    <div class="row mrtop" >
                        <div className='col-3'>
                        </div>
                        <div className='col-3'>
                            <label for="email"><p className='txt-emailid'>User type</p></label><br />

                            <select id="countries" class=' form-control' value={User_Type} onChange={(e) => setUser_Type(e.target.value)}>
                                <option>Click to Select...</option>
                                <option>Artisan</option>
                                <option>Member</option>
                            </select>
                        </div>
                        <div className='col-3'>
                            <label for="psw"><p className='txt-emailid'>Address</p></label><br />
                            <textarea type="text" class=' form-control' placeholder="Address" value={Address} onChange={(e) => setAddress(e.target.value)} required />
                        </div>
                        <div className='col-3'>
                        </div>
                    </div>
                    <div class="row mrtop" >
                        <div className='col-3'>
                        </div>
                        <div className='col-3'>
                            <label for="email"><p className='txt-emailid'>Designation</p></label><br />
                            <input type="text" class=' form-control' placeholder="Designation" value={Designation} onChange={(e) => setDesignation(e.target.value)} required />
                        </div>
                        <div className='col-3'>
                            <label for="psw"><p className='txt-emailid'>Location</p></label><br />
                            <input type="text" class=' form-control' placeholder="Location" value={Location} onChange={(e) => setLocation(e.target.value)} required />
                        </div>
                        <div className='col-3'>

                        </div>
                    </div>
                    <div class="row mrtop" >
                        <div className='col-3'>
                        </div>
                        <div className='col-3'>
                            <label for="pincode"><p className='txt-emailid'>Pincode</p></label><br />
                            <input type="text" class=' form-control' placeholder="Pincode" value={Pincode} onChange={(e) => setPincode(e.target.value)} required />
                        </div>
                        <div className='col-5 buttonsuccescss mt-5 mb-5'>
                            <button className='col-5 mt-4 butacc' variant="success" onClick={postData} >Create Account</button>
                            {/* <Button className='btnsubvalu' onClick={postData}>Submit</Button> */}
                        </div>
                        {/* <div className='col-3'>
                        </div> */}
                    </div>

                </div>
                <Footer></Footer>
            </div >
        </>
    )
}

export default Signup;