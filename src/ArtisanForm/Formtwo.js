import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './artisan_form.css';


function Formtwo(props) {
    const { arisandata, handleChange, next, back, error, setError } = props;

    // const nextData = () => {
    //     if (arisandata.stateval) {
    //         if (arisandata.addressdetails) {
    //             next()
    //         } 
    //     } 
    // }
    return (
        <div className='container mt-5 formtwo'>
            <ToastContainer toastOptions={{ position: "top-right" }} />
            <div className='col-12 row mb-4 '>
                <h3 className='gsection_title mt-4 contactmrgbottom'>Contact information</h3>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-7'>
                        <label className='label-head'>Your city / Town / Village</label>
                        <input type='text' className='form-control' value={arisandata.townvilcity} name='townvilcity' onChange={handleChange} />
                    </div>
                    <div className='col-5 selectwrapperformtwostate'>
                        <label className='label-head'>State </label>
                        <select className='artisanarudrpform' value={arisandata.stateval} name='stateval' onChange={handleChange}>
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

                <div className='row mt-3 addresht'>
                    <div className='col-12'>
                        <label className='label-head'>Address </label>
                        <textarea type='text' className='form-control text-area addresheight vb' rows='6' cols='6' value={arisandata.addressdetails} name='addressdetails' onChange={handleChange}></textarea>
                    </div>
                </div>


                <div className='row mt-2 mb-2'>
                    <div className='col-6'>
                        <label className='label-head'>Contact number</label>
                        <input type='text' className='form-control' value={arisandata.contactnumber} name='contactnumber' onChange={handleChange} />
                        <p className='para-change'>Enter 10 digit mobile number</p>
                    </div>
                    <div className='col-6'>
                        <label className='label-head'>Email ID</label>
                        <input type='email' className='form-control' value={arisandata.emailid} name='emailid' onChange={handleChange} />
                    </div>
                </div>
                <div className='row mt-2 mb-4'>
                    <div className='col-6 selectwrapperformtwostate'>
                        <label className='label-head'>Add social site</label>
                        <select className='artisanarudrpform' value={arisandata.socialsite} name='socialsite' onChange={handleChange}>
                            {/* <option>--Select--</option> */}
                            <option value="Instagram">Instagram</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Linkedin">LinkedIn</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Youtube">Youtube</option>
                        </select>
                    </div>
                    <div className='col-6'>
                        <label className='label-head'>Site URL</label>
                        <input type='email' className='form-control' placeholder='https://' value={arisandata.siteurl} name='siteurl' onChange={handleChange} />
                    </div>
                </div>

                <div className='row mt-2 mb-4'>
                    <div className='col-6 selectwrapperformtwostate'>
                        <label className='label-head'>Add social site</label>
                        <select className='artisanarudrpform' value={arisandata.socialsiteone} name='socialsiteone' onChange={handleChange} >
                            {/* <option>--Select--</option> */}
                            <option value="facebook">Facebook</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Linkedin">LinkedIn</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Youtube">Youtube</option>
                        </select>
                    </div>
                    <div className='col-6'>
                        <label className='label-head'>Site URL</label>
                        <input type='email' className='form-control' placeholder='https://' value={arisandata.siteurlone} name='siteurlone' onChange={handleChange} />
                    </div>
                </div>

                <div className='row mt-2 mb-4'>
                    <div className='col-6 selectwrapperformtwostate'>
                        <label className='label-head'>Add social site</label>
                        <select className='artisanarudrpform' value={arisandata.socialsitetwo} name='socialsitetwo' onChange={handleChange} socialsitetwo>
                            {/* <option>--Select--</option> */}
                            <option value="Linkedin">LinkedIn</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Youtube">Youtube</option>
                        </select>
                    </div>
                    <div className='col-6'>
                        <label className='label-head'>Site URL</label>
                        <input type='email' className='form-control' placeholder='https://' value={arisandata.siteurltwo} name='siteurltwo' onChange={handleChange} />
                    </div>
                </div>

                <div className='row mt-2 mb-4'>
                    <div className='col-6 selectwrapperformtwostate'>
                        <label className='label-head'>Add social site</label>
                        <select className='artisanarudrpform' value={arisandata.socialsitethree} name='socialsitethree' onChange={handleChange}>
                            {/* <option>--Select--</option> */}
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Linkedin">LinkedIn</option>
                            <option value="Youtube">Youtube</option>
                        </select>
                    </div>
                    <div className='col-6'>
                        <label className='label-head'>Site URL</label>
                        <input type='email' className='form-control' placeholder='https://' value={arisandata.siteurlthree} name='siteurlthree' onChange={handleChange} />
                    </div>
                </div>


                <div className='row mt-2 mb-4'>
                    <div className='col-6 selectwrapperformtwostate'>
                        <label className='label-head'>Add social site</label>
                        <select className='artisanarudrpform' value={arisandata.socialsitefour} name='socialsitefour' onChange={handleChange}>
                            {/* <option>--Select--</option> */}
                            <option value="Youtube">Youtube</option>
                            <option value="Instagram">Instagram</option>
                            <option value="facebook">Facebook</option>
                            <option value="Linkedin">LinkedIn</option>
                            <option value="Twitter">Twitter</option>
                        </select>
                    </div>
                    <div className='col-6'>
                        <label className='label-head'>Site URL</label>
                        <input type='email' className='form-control' placeholder='https://' value={arisandata.siteurlfour} name='siteurlfour' onChange={handleChange} />
                    </div>
                </div>
            </div>



            {/* <button
                onClick={back}
                className="bg-gradient-secondary px-3"
            >
                Previous
            </button>
            <button
                onClick={next}
                className="btn-next mt-4 ml-4 mb-4"

            >
                Next
            </button> */}


            < div className='mt-5 mb-5' >
                <button
                    onClick={back}
                    className="bg-gradient-secondary"
                >
                    Previous
                </button>
                <button
                    onClick={next}
                    className="bg-gradient-secondary-next px-3"
                >
                    Next
                </button>

                {/* <button
                    onClick={next}
                    className="bg-gradient-secondary-next px-3"
                className="btn-next mt-4 ml-4 mb-4"

                >
                    Next
                </button> */}
            </div >



        </div >
    )
}

export default Formtwo