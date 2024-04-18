
import React, { useContext, useState, useEffect } from 'react'
import './Memberfone.css'
import { event } from 'jquery';




function Memberformtwo(props) {
    const [firstcheck, setfirstcheck] = useState(false);
    const [secondcheck, setsecondcheck] = useState(false);
    const [consultant, setconsultant] = useState(false);
    const [entrepreneur, setentrepreneur] = useState(false);
    const [homemake, sethomemake] = useState(false);
    const [professional, setprofessional] = useState(false);
    const [retired, setretired] = useState(false);
    const [student, setStudent] = useState(false);

    const { data, handleChange, next, back, error, setError } = props;
    const nextData = () => {
        next()
    }
    const handleCheckboxChange = (event, flag) => {
        const value = event.target.checked;
        if (flag === 'first') {
            // setfirstcheck(value);
            setfirstcheck(true);
            setsecondcheck(false);
            setconsultant(false)
            sethomemake(false);
            setentrepreneur(false);
            setprofessional(false);
            setretired(false);
            setStudent(false);
        }
        if (flag === 'second') {
            setfirstcheck(false);
            setsecondcheck(true)
            setconsultant(false)
        }
    }
    const handleCheckboxconsultant = (event, flag) => {
        if (flag === 'consultant') {
            setconsultant(true);
            setentrepreneur(false);
            sethomemake(false);
            setprofessional(false);
            setretired(false);
            setStudent(false);
        }
        if (flag === 'entrepreneur') {
            setentrepreneur(true);
            setconsultant(false);
            sethomemake(false);
            setprofessional(false);
            setretired(false);
            setStudent(false);
        }
        if (flag === 'homemake') {
            sethomemake(true);
            setentrepreneur(false);
            setconsultant(false);
            setprofessional(false);
            setretired(false);
            setStudent(false);
        }
        if (flag === 'professional') {
            sethomemake(false);
            setentrepreneur(false);
            setconsultant(false);
            setprofessional(true);
            setretired(false);
            setStudent(false);
        }
        if (flag === 'retired') {
            setretired(true)
            sethomemake(false);
            setentrepreneur(false);
            setconsultant(false);
            setprofessional(false);
            setStudent(false);
        }
        if (flag === 'student') {
            setStudent(true);
            setretired(false)
            sethomemake(false);
            setentrepreneur(false);
            setconsultant(false);
            setprofessional(false);
        }
    }

    return (
        <div className='container mt-5'>
            <label className='label-head'>Are you joining CD as <span className='required-color'>(Required)</span></label>
            <div>
                <input type='radio' name='radioGroup' className='mx-2' checked={firstcheck} onChange={(event) => handleCheckboxChange(event, 'first')} />
                <label className='checkbox-label'>Individual (In your personal capacity)</label><br />
                <input type='radio' name='radioGroup' className='mx-2' checked={secondcheck} onChange={(event) => handleCheckboxChange(event, 'second')} />
                <label className='checkbox-label'>Organization (As an organisation- NGO, Corporate, Social Enterprise, SHG, Producer Group etc)</label> <br />
            </div>

            {firstcheck &&
                <div className='mt-5'>
                    <label className='label-head'>I am <span className='required-color'>(Required)</span></label>
                    <div>
                        <input type='radio' name='radiofull' className='mx-2' checked={consultant} onChange={(event) => handleCheckboxconsultant(event, 'consultant')} />
                        <label className='checkbox-label'>Consultant / Freelancer</label><br />
                        <input type='radio' name='radiofull' className='mx-2' checked={entrepreneur} onChange={(event) => handleCheckboxconsultant(event, 'entrepreneur')} />
                        <label className='checkbox-label'>Entrepreneur (self-employed)</label><br />
                        <input type='radio' name='radiofull' className='mx-2' checked={homemake} onChange={(event) => handleCheckboxconsultant(event, 'homemake')} />
                        <label className='checkbox-label'>Home-maker</label> <br />
                        <input type='radio' name='radiofull' className='mx-2' checked={professional} onChange={(event) => handleCheckboxconsultant(event, 'professional')} />
                        <label className='checkbox-label'>Professional (employed)</label><br />
                        <input type='radio' name='radiofull' className='mx-2' checked={retired} onChange={(event) => handleCheckboxconsultant(event, 'retired')} />
                        <label className='checkbox-label'>Retired</label> <br />
                        <input type='radio' name='radiofull' className='mx-2' checked={student} onChange={(event) => handleCheckboxconsultant(event, 'student')} />
                        <label className='checkbox-label'>Student (studying in school/ college/university)</label><br />
                    </div>
                </div>
            }

            {secondcheck &&
                <div className='mt-5 txtcolourtwo'>
                    <div className='col-12 row'>
                        <label className='label-head'>Name of Organization<span className='required-color'>(Required)</span></label>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='col-12 row'>
                        <label className='label-head'>Your Designation<span className='required-color'>(Required)</span></label>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='mt-5'>
                        <label className='label-head'>What type of Organsation<span className='required-color'>(Required)</span></label>
                        <div>
                            <input type='radio' name='radiofull' className='mx-2' />
                            <label className='checkbox-label'>NGO</label><br />
                            <input type='radio' name='radiofull' className='mx-2' />
                            <label className='checkbox-label'>Corporate</label><br />
                        </div>
                    </div>
                    <div><label className='label-head'>Type of Engagement with CD<span className='required-color'>(Required)</span></label>
                        <div>
                            <input type='radio' name='radiofull' className='mx-2' />
                            <label className='checkbox-label'>Strategic Partner</label><br />
                            <input type='radio' name='radiofull' className='mx-2' />
                            <label className='checkbox-label'>Collaborator</label><br />
                            <input type='radio' name='radiofull' className='mx-2' />
                            <label className='checkbox-label'>Other</label><br />
                        </div></div>

                    <div className='col-12 row'>
                        <label className='label-head'>Authorized Contact Person Name</label>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='col-12 row'>
                        <label className='label-head'>Authorized Contact Person Number</label>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='col-12 row '>
                        <label className='label-head'>Organisation Address</label>
                        <textarea type='text' className='text-area mb-3 textareaone' row='10' col='10'></textarea>
                    </div>
                    <div className='col-12 row '>
                        <label className='label-head'>Head Office address (Please provide state , city & pin code)</label>
                        <textarea type='text' className='text-area mb-3 textareaone' row='10' col='10'></textarea>
                    </div>
                    <div className='col-12 row '>
                        <label className='label-head'>States or regions you organization work in</label>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div className='col-12 row '>
                        <label className='label-head'>What does your Organization do</label>
                        <textarea type='text' className='text-area mb-3 textareaone' row='10' col='10'></textarea>
                    </div>
                    <div className='col-12 row '>
                        <label className='label-head'>My organization would like to collaborate in the following areas.</label>
                        <textarea type='text' className='text-area mb-3 textareaone' row='10' col='10'></textarea>
                    </div>
                </div>
            }


            {consultant &&
                <div>
                    <div className='col-12 row'>
                        <label className='label-head'>What is your area of work<span className='required-color'>(Required)</span></label>
                        <input type='text' className='form-control'></input>
                    </div>
                    <div>
                        <label className='label-head'>How many years of experience do you have in your field of work?<span className='required-color'>(Required)</span></label><br />
                        <input type='Checkbox' name='radiofull' className='mx-2' />
                        <label className='checkbox-label'>less than 5 yrs</label><br />
                        <input type='Checkbox' name='radiofull' className='mx-2' />
                        <label className='checkbox-label'>5- 10 years</label><br />
                        <input type='Checkbox' name='radiofull' className='mx-2' />
                        <label className='checkbox-label'>10-15 years</label> <br />
                        <input type='Checkbox' name='radiofull' className='mx-2' />
                        <label className='checkbox-label'>15-20 years</label><br />
                        <input type='Checkbox' name='radiofull' className='mx-2' />
                        <label className='checkbox-label'>More than 20 Years</label> <br />
                    </div>
                    <br />
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>I Would be interested in volunteering with CD as an when opportunities arise.</label>

                </div>
            }
            {entrepreneur && <div>
                <div className='col-12 row'>
                    <label className='label-head'>Name of Organization/Unit<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>What is the area of work?<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                </div>
            </div>}
            {homemake && <div>
                <div className='col-12 row'>
                    <label className='label-head'>Interests / Expertise<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>No of years’ experience (if any)<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                </div>
            </div>}
            {professional && <div>
                <div className='col-12 row'>
                    <label className='label-head'>Name of Organization you are employed with<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>What is your area of work<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div>
                    <label className='label-head'>How many years of experience do you have in your field of work?<span className='required-color'>(Required)</span></label><br />
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>less than 5 yrs</label><br />
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>5- 10 years</label><br />
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>10-15 years</label> <br />
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>15-20 years</label><br />
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>More than 20 Years</label> <br />
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Areas of expertise, if any<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                </div>
            </div>}
            {retired && <div>
                <div className='col-12 row'>
                    <label className='label-head'>Previous occupation<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>No of years’ experience (if any)</label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                </div>

            </div>}
            {student && <div>
                <div className='col-12 row'>
                    <label className='label-head'>Institute / College / University / School name<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Course<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Grade/ Class/ Semester<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <label className='label-head'>Specialization, if any<span className='required-color'>(Required)</span></label>
                    <input type='text' className='form-control'></input>
                </div>
                <div className='col-12 row'>
                    <input type='Checkbox' name='radiofull' className='mx-2' />
                    <label className='checkbox-label'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                </div>

            </div>}

            <button
                onClick={back}
                className="bg-gradient-secondary px-3"
            >
                Previous
            </button>
            <button
                onClick={nextData}
                className="btn-next mt-4 mb-4"
            >
                Next
            </button>
        </div>
    )
}

export default Memberformtwo;
