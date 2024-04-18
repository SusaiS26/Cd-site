import React from 'react'
import './Memberfone.css'
import Header from '../Header/header';
import Footer from '../Footer/footer';

function Memberformone(props) {
    const { handleChange, next,memberdata, uploadphoto } = props;
    const nextData = () => {
        next()
    }

    return (
        <>
            <div className='fullbodymarg'>
                <div className='container mt-5 '>
                    <div className='col-12 row'>
                        <label className='label-head'>Your Name<span className='required-color'>(Required)</span></label>
                        <input type='text' className='form-control' value={memberdata.yourname} name='yourname' onChange={handleChange} />
                    </div>
                    <div className='col-12 row '>
                        <label className='label-head'>Email<span className='required-color'>(Required)</span></label>
                        <input type='text' className='form-control' value={memberdata.email} name='email' onChange={handleChange} />
                    </div>

                    <div className='col-12 row mt-3'>
                        <label className='label-head'>Your Photo</label>
                        <input type='file' className='form-control file-change alignment' onChange={(e) => uploadphoto(e, 'photo')} />
                    </div>
                    <p className='photosize'>Accepted file types: jpg, jpeg, png, Max. file size: 32 MB.</p>
                    <div className='col-12 row '>
                        <label className='label-head'>Contact number<span className='required-color'>(Required)</span></label>
                       <input type='text' className='form-control' value={memberdata.contactnum} name='contactnum' onChange={handleChange} />
                       
                    </div>
                    <p className='photosize'>Enter 10 digit mobile number</p>
                    <div className='col-12 row mt-3'>
                        <label className='label-head'>Languages you communicate in</label>
                        <select className='form-control' value={memberdata.languagecom} onChange={handleChange} name='languagecom'>
                            <option>Click to Select...</option>
                            <option>Tamil</option>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Telungu</option>
                            <option>Malayalam</option>
                            <option>Kanadam</option>
                        </select>
                    </div>
                    <div className='col-12 row '>
                        <label className='label-head'>City, Town or Village<span className='required-color'>(Required)</span></label>
                        <input type='text' className='form-control' value={memberdata.citytownv} name='citytownv' onChange={handleChange} />
                      
                    </div>
                    <div className='col-12 row mt-3'>
                        <label className='label-head'>Country<span className='required-color'>(Required)</span></label>
                        <select className='form-control' value={memberdata.country} onChange={handleChange} name='country'>
                            <option>Click to Select...</option>
                            <option>India</option>
                            <option>Pakistan</option>
                            <option>USA</option>
                            <option>Dubai</option>
                            <option>Southi</option>
                            <option>Landon</option>
                        </select>
                    </div>

                    <button
                        onClick={nextData}
                        className="btn-next mt-4 mb-4"
                    >
                        Next
                    </button>
                </div>
            </div >

        </>
    )
}

export default Memberformone
