import React, { useState, useEffect } from 'react'
import './Memberfone.css'
import { ToastContainer, toast } from 'react-toastify';
import { validEmailRegex } from '../Commen/Common';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Swal from 'sweetalert2';
import { apiURL } from "../Commen/apiurl";
import axios from 'axios';
import Individual_Header from '../Header/new_header';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { useLocation } from 'react-router';

function New_member_form() {

    const location = useLocation();
    const { ID, Flag } = location.state;
    console.log(ID, Flag, "ID,Flag")

    const [step, setStep] = useState(1);

    const [firstcheck, setfirstcheck] = useState(false);
    const [secondcheck, setsecondcheck] = useState(false);
    const [consultant, setconsultant] = useState(false);
    const [entrepreneur, setentrepreneur] = useState(false);
    const [homemake, sethomemake] = useState(false);
    const [professional, setprofessional] = useState(false);
    const [retired, setretired] = useState(false);
    const [student, setStudent] = useState(false);
    const [languageval, setlanguageval] = useState(false);
    // const [languagevalenglish, setLanguagevalEnglish] = useState(true);
    const [languageenglish, setLanguageEnglish] = useState(true);

    // page3
    const [socialSite1, setsocialSite1] = useState("");
    const [socialSite1Url, setsocialSiteUrl1] = useState("");
    const [socialSite2, setsocialSite2] = useState("");
    const [socialSite2Url, setsocialSite2Url] = useState("");
    const [socialSite3, setsocialSite3] = useState("");
    const [socialSite3Url, setsocialSite3Url] = useState("");
    const [socialSite4, setsocialSite4] = useState("");
    const [socialSite4Url, setsocialSite4Url] = useState("");
    const [socialSite5, setsocialSite5] = useState("");
    const [socialSite5Url, setsocialSite5Url] = useState("");
    const [siteUrl, setSiteUrl] = useState("");
    //page2
    const [indorganization, setIndOrganization] = useState("");
    const [iamoption, setiamOption] = useState("");
    const [nameoforgani, setNameoforgani] = useState("");
    const [yourdesignation, setYourDesignation] = useState("");
    const [whattypeorgani, setWhatTypeOrgani] = useState("");
    const [typeofenge, setTypeofEnge] = useState("");
    const [authorcontact, setAuthorContact] = useState("");
    const [authorcontactnumber, setAuthorContactnumber] = useState("");
    const [organisationaddres, setOrganisationAddres] = useState("");
    const [organisationheadaddres, setOrganisationHeadAddres] = useState("");
    const [organisationstate, setorganisationstate] = useState("");
    const [whatdoseorgani, setWhatDoseOrgani] = useState("");
    const [organisationarea, setOrganisationArea] = useState("");
    const [areaofwork, setareaofwork] = useState("");
    const [nameoforganunit, setNameofOrganunit] = useState("");
    const [whatisareawork, setWhatisAreawork] = useState("");
    const [intersetedvolunteer, setIntersetedVolunteer] = useState(false);
    const [interstshome, setInterstsHome] = useState("");
    const [noofyears, setNoofYears] = useState("");
    const [interstcdvolunteer, setInterstcdvolunteer] = useState(false);
    const [profnameoforgan, setProfNameofOrgan] = useState("");
    const [profwhatareawork, setProfWhatAreawork] = useState("");
    const [stateval, setStateval] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [profareofexpert, setProfAreofExpert] = useState("");
    const [profintersetcdvol, setProfIntersetCdvol] = useState(false);
    const [retiredprevious, setRetiredPrevious] = useState("");
    const [retirenoofyears, setRetireNoofYears] = useState("");
    const [retireintersetcd, setRetireIntersetcd] = useState(false);
    const [studentinstitue, setStudentInstitue] = useState("");
    const [studentcourse, setStudentCourse] = useState("");
    const [studentdrade, setStudentdrade] = useState("");
    const [studentspecialization, setStudentSpecialization] = useState("");
    const [studentcdintersetvol, setStudentcdIntersetvol] = useState(false);
    const [consultanthowmanyyears, setConsultanthowmanyyears] = useState("");
    const [profyearsexpet, setProfyearsexpet] = useState("");
    const [consultantcdinterst, setConsultantcdinterst] = useState(false);
    const [countrycode, setCountryCode] = useState("");


    //    page1
    const [yourName, setYourname] = useState("");
    const [email, setEmail] = useState("");
    const [yourPhoto, setYourphoto] = useState("");
    const [contactNumber, setContactnumber] = useState("");
    const [communicateLanguage, setCommunicatelanguage] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [yourphoto, setYourPhoto] = useState("");
    const [agree, setagree] = useState(false)
    const [artisanformdata, setArtisanFormData] = useState("");

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    console.log(selectedCountry, "selectedcountry")
    const [selectedCity, setSelectedCity] = useState('');
    const [loadingCountries, setLoadingCountries] = useState(true);
    const [loadingCities, setLoadingCities] = useState(false);
    const [apiResponse, setAPIResponse] = useState("");

    useEffect(() => {
        // Fetch the list of countries when the component mounts
        axios
            .get('https://countriesnow.space/api/v0.1/countries')
            .then((response) => {
                setCountries(response.data.data);
                setLoadingCountries(false);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
                setLoadingCountries(false);
            });
    }, []);

    useEffect(() => {
        // Fetch cities when a country is selected
        if (selectedCountry) {
            setLoadingCities(true);
            axios
                .get(`https://countriesnow.space/api/v0.1/countries/cities/${selectedCountry}`)
                .then((response) => {
                    setCities(response.data.data);
                    setLoadingCities(false);
                })
                .catch((error) => {
                    console.error('Error fetching cities:', error);
                    setLoadingCities(false);
                });
        }
    }, [selectedCountry]);

    const handleNext = () => {
        if (step == 1) {
            if (yourName) {
                if (validEmailRegex.test(email)) {
                    if (contactNumber) {
                        // if (countrycode) {
                        if (country) {
                            if (city) {
                                if (stateval) {
                                    setStep(step + 1);
                                } else {
                                    toast.error('Please Select State');
                                }
                                // if(indorganization === 'Individual' || indorganization === 'Organization'){
                                //     if()
                                // setStep(step + 1);
                                //     } else {
                                //     toast.error('Please Select Joining CD')
                                // }
                            } else {
                                toast.error('Please Enter City Name')
                            }
                        } else {
                            toast.error('Please Select Country Name')
                        }
                        // } else {
                        //     toast.error('Please Select Country Code')
                        // }
                    } else {
                        toast.error('Please Enter Contact Number')
                    }
                } else {
                    toast.error('Please Enter Valid Email Address')
                }
            } else {
                toast.error('Please Enter Your Name')
            }
        } else {
            if (indorganization === 'Individual' || indorganization === 'Organization') {
                if (indorganization === 'Individual') {
                    if (iamoption === 'Consultant / Freelancer' || iamoption === 'Entrepreneur (self-employed)' || iamoption === 'Home-maker' || iamoption === 'Professional (employed)' || iamoption === 'Retired' || iamoption === 'Student (studying in school/ college/university)') {
                        var _validation = false;
                        if (iamoption === 'Consultant / Freelancer') {
                            console.log('iiiiii', iamoption)
                            _validation = consultantfun();
                        }
                        if (iamoption === 'Entrepreneur (self-employed)') {
                            _validation = Entrepreneur();
                        }
                        if (iamoption === 'Home-maker') {
                            _validation = homemaker();
                        }
                        if (iamoption === 'Professional (employed)') {
                            _validation = Professional();
                        }
                        if (iamoption === 'Retired') {
                            _validation = Retired();
                        }
                        if (iamoption === 'Student (studying in school/ college/university)') {
                            _validation = Student();
                        }
                        if (_validation) {
                            console.log('123', _validation)
                            setStep(step + 1);
                        }
                    } else {
                        toast.error('Please Choose on I am')
                    }
                }
                if (indorganization === 'Organization') {
                    if (nameoforgani) {
                        if (yourdesignation) {
                            if (whattypeorgani) {
                                if (typeofenge) {
                                    setStep(step + 1);
                                } else {
                                    toast.error('Please Choose Engagement with CD')
                                }
                            } else {
                                toast.error('Please Choose type of Organsation')
                            }
                        } else {
                            toast.error('Please Enter Your Designation')
                        }
                    } else {
                        toast.error('Please Enter Name of Organization')
                    }
                }
            } else {
                toast.error('Please Choose joining CD ')
            }
        }
    };
    const consultantfun = () => {
        // debugger;
        if (areaofwork == '') {
            toast.error('Please enter your area of work')
            return false
        }
        if (consultanthowmanyyears == '') {
            toast.error('Please choose your of experience')
            return false
        }
        return true;
    }
    const Entrepreneur = () => {
        if (nameoforganunit == '') {
            toast.error('Please enter Name of Organization/Unit')
            return false
        }
        if (whatisareawork == '') {
            toast.error('Please Enter area of work')
            return false
        }
        return true;
    }
    const homemaker = () => {
        if (interstshome == '') {
            toast.error('Please enter Interests / Expertise')
            return false
        }
        if (noofyears == '') {
            toast.error('Please Enter  years experience')
            return false
        }
        return true;
    }
    const Professional = () => {
        if (profnameoforgan == '') {
            toast.error('Please enter Name of Organization')
            return false
        }
        if (profwhatareawork == '') {
            toast.error('Please your area of work')
            return false
        }
        if (profyearsexpet == '') {
            toast.error('Please Choose years of experience')
            return false
        }
        // if (profareofexpert == '') {
        //     toast.error('Please your Areas of expertise')
        //     return false
        // }
        return true;
    }
    const Retired = () => {
        if (retiredprevious == '') {
            toast.error('Please enter Previous occupation')
            return false
        }
        return true;
    }
    const Student = () => {
        if (studentinstitue == '') {
            toast.error('Please enter Institute / College Name')
            return false
        }
        if (studentcourse == '') {
            toast.error('Please Enter  Course')
            return false
        }
        if (studentdrade == '') {
            toast.error('Please enter Grade/ Class/ Semester')
            return false
        }
        if (studentspecialization == '') {
            toast.error('Please Enter  Specialization,')
            return false
        }
        return true;
    }
    const handlePrevious = () => {
        setStep(step - 1);
    };
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

    const languageChange = () => {
        if (languageenglish) {
            setLanguageEnglish(false);
            setlanguageval(true)
        } else {
            setLanguageEnglish(true);
            setlanguageval(false)
        }

    };
    const uploadlogoyourphoto = (e, flag) => {

        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = handleReaderLoadeddropphoto.bind(this, flag);
            reader.readAsBinaryString(file);
        }
    };



    const handleReaderLoadeddropphoto = (flag, e) => {

        let binaryString = e.target.result;
        if (flag == 'photologo') {
            setYourPhoto({
                base64Data: btoa(binaryString),
            });
        }
    };


    const handleSubmit = async () => {
        if (agree) {
            setIsLoading(true);
            var payloadartisan = {
                "id": ID,
                "name": yourName,
                "your_email": email,
                "your_photo": JSON.stringify(yourphoto),
                "contact_number": contactNumber,
                "communicate_languages": JSON.stringify(languagevaldata),
                // "communicate_languages": communicateLanguage,
                "country": country,
                "country_code": countrycode,
                "state": city,
                "cd_joining": indorganization,
                "i_am": iamoption,
                "con_what_is_area_work": areaofwork,
                "con_experience_of_feild": consultanthowmanyyears,
                "name_of_organization": nameoforganunit,
                "entre_what_is_area_work": whatisareawork,
                "home_interests": interstshome,
                "home_no_of_experience": noofyears,
                "Organization_you_are_employe": nameoforgani,
                "professional_what_is_area_work": profwhatareawork,
                "professional_experience_of_feild": profyearsexpet,
                "professional_areas_of_expertise": profareofexpert,
                "previous_occupation": retiredprevious,
                "retried_experience": retirenoofyears,
                "institute_name": studentinstitue,
                "course": studentcourse,
                "semester": studentdrade,
                "Specialization": studentspecialization,
                "new_name_of_organization": profnameoforgan,
                "your_designation": yourdesignation,
                "type_of_organization": whattypeorgani,
                "type_of_engagement_cd": typeofenge,
                "authorized_name": authorcontact,
                "authorized_number": authorcontactnumber,
                "organization_address": organisationaddres,
                "head_office_address": organisationheadaddres,
                "regions_organization": organisationstate,
                "what_does_your_organization": whatdoseorgani,
                "collaborate_areas": organisationarea,
                "youtube_social_site": socialSite1,
                "youtube_social_site_url": socialSite1Url,
                "facebook_social_site": socialSite2,
                "facebook_social_site_url": socialSite2Url,
                "linkedin_social_site": socialSite3,
                "linkedin_social_site_url": socialSite3Url,
                "twitter_social_site": socialSite4,
                "twitter_social_site_url": socialSite4Url,
                "insta_social_site": socialSite5,
                "insta_social_site_url": socialSite5Url,
                "siteUrl": siteUrl,
                "state1": stateval,
                "Flag": Flag,
            }
            try {
                const response = await axios.post(`${apiURL}/UserMaster/UserMaster/member_form_data`, payloadartisan, {
                });
                setArtisanFormData(response.data);
                setIsLoading(false);
                if (Flag == "U") {
                    showAlerterr1()
                } else {
                    showAlert()
                }
            } catch (error) {
                console.error('Error making POST request:', error);
                setIsLoading(false);
                showAlerterr();
            }
        } else {
            toast.error('Please Check Terms & Conditions')
        }
    };
    const showAlerterr1 = () => {
        Swal.fire({
            title: 'Member Form Updated Successfully',
            confirmButtonText: 'OK',
            confirmButtonColor: '#D19426',
            customClass: {
                confirmButton: 'addsubmitevent',
            },
        });
    };
    const showAlerterr = () => {
        Swal.fire({
            title: 'Member Added Failed',
            confirmButtonText: 'OK',
            confirmButtonColor: '#D19426',
            customClass: {
                confirmButton: 'addsubmitevent',
            },
        });
    };
    const showAlert = () => {
        Swal.fire({
            title: 'Thank you for sharing your profile with us, you will be added to our members section soon!',
            confirmButtonText: 'OK',
            confirmButtonColor: '#D19426',
            customClass: {
                confirmButton: 'addsubmitevent',
            },
        });
    };
    const [languagevaldata, setLanguagevaldata] = useState([]);

    const handleSelectlanguage = (languagevaldata) => {
        setLanguagevaldata(languagevaldata);
        console.log("qqqq");
    }
    const languagedata = [
        { value: 'Assamese', label: 'Assamese' },
        { value: 'Bengali', label: 'Bengali' },
        { value: 'Bodo', label: 'Bodo' },
        { value: 'Dogri', label: 'Dogri' },
        { value: 'English', label: 'English' },
        { value: 'Gujarati', label: 'Gujarati' },
        { value: 'Hindi', label: 'Hindi' },
        { value: 'Kannada', label: 'Kannada' },
        { value: 'Kashmiri', label: 'Kashmiri' },
        { value: 'Konkani', label: 'Konkani' },
        { value: 'Maithili', label: 'Maithili' },
        { value: 'Malayalam', label: 'Malayalam' },
        { value: 'Manipuri', label: 'Manipuri' },
        { value: 'Marathi', label: 'Marathi' },
        { value: 'Nepali', label: 'Nepali' },
        { value: 'Odia', label: 'Odia' },
        { value: 'Punjabi', label: 'Punjabi' },
        { value: 'Sanskrit', label: 'Sanskrit' },
        { value: 'Santali', label: 'Santali' },
        { value: 'Sindhi', label: 'Sindhi' },
        { value: 'Tamil', label: 'Tamil' },
        { value: 'Telugu', label: 'Telugu' },
        { value: 'Urdu', label: 'Urdu' },
    ];
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <ToastContainer toastOptions={{ position: "top-right" }} />
                        <div className='fullbodymarg'>
                            <div className='container member_form_height '>

                                <div className='col-12 row mt-3'>
                                    <div className='col-12'>
                                        <label className='label-head'>Your name<span className='required-color'> (required)</span></label>
                                        <input type='text' className='form-control' value={yourName} onChange={(e) => setYourname(e.target.value)}>
                                        </input>
                                    </div>
                                </div>
                                <div className='col-12 row mt-3'>
                                    <div className='col-12'>
                                        <label className='label-head'>Email<span className='required-color'> (required)</span></label>
                                        <input type='text' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}>
                                        </input>
                                    </div>
                                </div>
                                {/* <div className='col-12 row '>
                                    <label className='label-head'>Email<span className='required-color'>(Required)</span></label>
                                    <input type='text' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}>
                                    </input>
                                </div> */}
                                <div className='col-12 row mt-3'>
                                    <label className='label-head'>Your photo</label>
                                    <input type='file' className='inputlogo file-change' onChange={(e) => uploadlogoyourphoto(e, 'photologo')} />
                                </div>

                                {/* <div className='col-12 row mt-3'>
                                    <label className='label-head'>Your Photo</label>
                                    <input type='file' className='form-control file-change' onChange={(e) => uploadlogoyourphoto(e, 'photologo')} />
                                </div> */}
                                <p className='photosize ml-3'>Accepted file types: jpg, jpeg, png, Max. file size: 32 MB.</p>

                                <div className='col-12 row mt-3'>
                                    <div className='col-12'>
                                        <label className='label-head'>Contact number<span className='required-color'> (required)</span></label>
                                        <input type='number' className='form-control' value={contactNumber} onChange={(e) => setContactnumber(e.target.value)}>
                                        </input>
                                    </div>
                                </div>

                                <p className='photosize ml-3'>Enter 10 digit mobile number</p>

                                <div className='row mt-3'>
                                    <div className='col-12 paading '>
                                        {/* <div className='col-md-2 selectwrappermem'>
                                            <label className='label-head'>Country code<span className='required-color'>  (*)</span></label>
                                            <select className='memberarudrpform countywidth' value={countrycode} onChange={(e) => setCountryCode(e.target.value)}>
                                                <option >Select Code</option>
                                                <option >+91</option>
                                                <option>+92</option>
                                                <option >+1</option>
                                                <option>+971</option>
                                                <option >+966</option>
                                                <option>+44</option>
                                            </select>
                                        </div> */}
                                        {/* <div className='col-md-12 selectwrappermem'>
                                            <label className='label-head'>Country<span className='required-color'> (required)</span></label>
                                            <select className='memberarudrpform countywidthone' value={country} onChange={(e) => setCountry(e.target.value)}>
                                                <option value={"select"}>Click to Select...</option>
                                                <option value={"India"}>India</option>
                                                <option value={"Pakistan"}>Pakistan</option>
                                                <option value={"USA"}>USA</option>
                                                <option value={"Dubai"}>Dubai</option>
                                                <option value={"Southi"}>Southi</option>
                                                <option value={"Landon"}>London</option>
                                            </select>
                                        </div> */}
                                        <div className='col-12 selectwrappermemlang'>
                                            <label className='label-head'>Country<span className='required-color'> (required)</span></label>
                                            {loadingCountries ? (
                                                <p>Loading countries...</p>
                                            ) : (
                                                <select className='memberarudrpform countywidthone'
                                                    // onChange={(e) => setSelectedCountry(e.target.value)}
                                                    // value={selectedCountry}
                                                    value={country} onChange={(e) => setCountry(e.target.value)}
                                                >
                                                    <option value={"select"}>Click to Select...</option>
                                                    {countries.map((country) => (
                                                        <option key={country.iso2} value={country.iso2}>
                                                            {country.country}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {/* <div className='col-12 row mt-3'>
                                    <div className='col-12 '>
                                        <label className='label-head'>Languages you communicate in</label> */}

                                {/* <select className='memberarudrpform' value={communicateLanguage} onChange={(e) => setCommunicatelanguage(e.target.value)}>
                                            <option value={"select"}>Click to Select...</option>
                                            <option value={"Tamil"}>Tamil</option>
                                            <option value={"English"}>English</option>
                                            <option value={"Hindi"}>Hindi</option>
                                            <option value={"Telungu"}>Telungu</option>
                                            <option value={"Malayalam"}>Malayalam</option>
                                            <option value={"Kanadam"}>Kanadam</option>
                                        </select> */}

                                {/* <Select
                                            options={languagedata}
                                            value={languagevaldata}
                                            onChange={handleSelectlanguage}
                                            placeholder="Click to select..."
                                            className='txtssss '
                                            isMulti={true}
                                        /> */}

                                {/* </div>
                                </div> */}
                                <div className='col-12 row mt-3'>
                                    <label className='label-head'>Languages you communicate in</label>


                                    <Select
                                        options={languagedata}
                                        value={languagevaldata}
                                        onChange={handleSelectlanguage}
                                        placeholder="Click to select..."
                                        className='without-box mobile-select-with text_size'
                                        // className='txtssss'
                                        style={{ fontSize: '16px' }}
                                        isMulti={true}

                                    />
                                </div>


                                <div className='col-12 row mt-3'>
                                    <div className='col-12'>
                                        <label className='label-head'>City, Town or village<span className='required-color'> (required)</span></label>
                                        <input type='text' className='form-control' value={city} onChange={(e) => setCity(e.target.value)}>
                                        </input>
                                    </div>
                                </div>

                                <div className='col-12 row mt-3'>
                                    <div className='col-12 selectwrappermemlang'>
                                        <label className='label-head'>State <span className='required-color'> (required)</span></label>
                                        <select className='memberarudrpform ' value={stateval} name='stateval' onChange={(e) => setStateval(e.target.value)}>
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
                                            <option value="National Capital Territory (NCT),Delhi">National Capital Territory (NCT),Delhi</option>
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

                                {/* <div className='row mt-3'>
                                    <div className='col-md-2'>
                                        <label className='label-head'>Country Code<span className='required-color'>(*)</span></label>
                                        <select className='form-control countywidth' value={countrycode} onChange={(e) => setCountryCode(e.target.value)}>
                                            <option >Select Code</option>
                                            <option >+91</option>
                                            <option>+92</option>
                                            <option >+1</option>
                                            <option>+971</option>
                                            <option >+966</option>
                                            <option>+44</option>
                                        </select>
                                    </div>
                                    <div className='col-md-10'>
                                        <label className='label-head'>Country<span className='required-color'>(Required)</span></label>
                                        <select className='form-control countywidthone' value={country} onChange={(e) => setCountry(e.target.value)}>
                                            <option value={"select"}>Click to Select...</option>
                                            <option value={"India"}>India</option>
                                            <option value={"Pakistan"}>Pakistan</option>
                                            <option value={"USA"}>USA</option>
                                            <option value={"Dubai"}>Dubai</option>
                                            <option value={"Southi"}>Southi</option>
                                            <option value={"Landon"}>London</option>
                                        </select>
                                    </div>
                                </div> */}



                                <div className='col-12 mt-5 mb-5'>
                                    <button
                                        onClick={handleNext}
                                        className="bg-gradient-secondary-next px-3"
                                    // className="btn-next nextmrg"
                                    >
                                        Next
                                    </button>
                                </div>

                            </div>
                        </div >
                    </div >
                );
            case 2:
                return (
                    <div>
                        <ToastContainer toastOptions={{ position: "top-right" }} />
                        <div className='container member_form_height'>
                            <div className='row'>
                                <div className='optionclass'>
                                    <label className='label-head'>Are you joining CD as <span className='required-color'> (required)</span></label>
                                    <div className=''>
                                        <input type='radio' name='recogni' id='joincd' className='mx-2' value='Individual' checked={indorganization === 'Individual'} onChange={(e) => setIndOrganization(e.target.value)} />
                                        <label className='checkbox-label mx-3' for='joincd'>Individual (In your personal capacity)</label><br />
                                        <div className='organidisplay'>
                                            <input type='radio' name='radioGroup' id='cdngo' className='mx-2' value='Organization' checked={indorganization === 'Organization'} onChange={(e) => setIndOrganization(e.target.value)} />
                                            <label className='checkbox-label mx-3' for='cdngo'>Organization(As an organisation- NGO, Corporate, Social enterprise, SHG, Producer group etc)</label> <br />
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div className='optionclass'>

                                {indorganization === 'Individual' &&
                                    <>
                                        <div className='container mt-5'>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <div className='mt-5'>
                                                        <label className='label-head'>I am <span className='required-color'> (required)</span></label>
                                                        <div>

                                                            <input type='radio' name='radiofull' id='consultnt' className='mx-2' value='Consultant / Freelancer' checked={iamoption === 'Consultant / Freelancer'} onChange={(e) => setiamOption(e.target.value)} />
                                                            <label className='checkbox-label' for='consultnt'>Consultant / Freelancer</label><br />

                                                            <input type='radio' name='radiofull' id='entrepreneur' className='mx-2' value='Entrepreneur (self-employed)' checked={iamoption === 'Entrepreneur (self-employed)'} onChange={(e) => setiamOption(e.target.value)} />
                                                            <label className='checkbox-label' for='entrepreneur'>Entrepreneur (self-employed)</label><br />

                                                            <input type='radio' name='radiofull' id='home' className='mx-2' value='Home-maker' checked={iamoption === 'Home-maker'} onChange={(e) => setiamOption(e.target.value)} />
                                                            <label className='checkbox-label' for='home'>Home-maker</label> <br />

                                                            <input type='radio' name='radiofull' id='profess' className='mx-2' value='Professional (employed)' checked={iamoption === 'Professional (employed)'} onChange={(e) => setiamOption(e.target.value)} />
                                                            <label className='checkbox-label' for='profess'>Professional (employed)</label><br />

                                                            <input type='radio' name='radiofull' id='retired' className='mx-2' value='Retired' checked={iamoption === 'Retired'} onChange={(e) => setiamOption(e.target.value)} />
                                                            <label className='checkbox-label' for='retired'>Retired</label> <br />

                                                            <input type='radio' name='radiofull' id='student' className='mx-2' value='Student (studying in school/ college/university)' checked={iamoption === 'Student (studying in school/ college/university)'} onChange={(e) => setiamOption(e.target.value)} />
                                                            <label className='checkbox-label' for='student'>Student (studying in school/ college/university)</label><br />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {iamoption === 'Consultant / Freelancer' &&
                                            <div className='container consult'>
                                                <div>
                                                    <label className='label-head whatsarea'>What is your area of work<span className='required-color'> (required)</span></label>
                                                    <input type='text' className='form-control' value={areaofwork} onChange={(e) => setareaofwork(e.target.value)}></input>
                                                </div>

                                                <div>
                                                    <label className='label-head'>How many years of experience do you have in your field of work?<span className='required-color'> (required)</span></label><br />
                                                    {/* <input type='Checkbox' name='radiofull' className='mx-2' /> */}
                                                    <input type='radio' id='less5' name='radioyears' className='mx-2' value='less than 5 yrs' checked={consultanthowmanyyears === 'less than 5 yrs'} onChange={(e) => setConsultanthowmanyyears(e.target.value)} />
                                                    <label className='checkbox-label' for='less5'>less than 5 yrs</label><br />
                                                    <input type='radio' name='radioyears' id='less10' className='mx-2' value='5- 10 years' checked={consultanthowmanyyears === '5- 10 years'} onChange={(e) => setConsultanthowmanyyears(e.target.value)} />
                                                    <label className='checkbox-label' for='less10'>5- 10 years</label><br />
                                                    <input type='radio' name='radioyears' id='less15' className='mx-2' value='10-15 years' checked={consultanthowmanyyears === '10-15 years'} onChange={(e) => setConsultanthowmanyyears(e.target.value)} />
                                                    <label className='checkbox-label' for='less15'>10-15 years</label> <br />
                                                    <input type='radio' name='radioyears' id='less20' className='mx-2' value='15-20 years' checked={consultanthowmanyyears === '15-20 years'} onChange={(e) => setConsultanthowmanyyears(e.target.value)} />
                                                    <label className='checkbox-label' for='less20'>15-20 years</label><br />
                                                    <input type='radio' name='radioyears' id='more20' className='mx-2' value='More than 20 Years' checked={consultanthowmanyyears === 'More than 20 Years'} onChange={(e) => setConsultanthowmanyyears(e.target.value)} />
                                                    <label className='checkbox-label' for='more20'>More than 20 Years</label> <br />
                                                </div>
                                                <br />
                                                <div className='interset-cd mt-3'>
                                                    <input type='Checkbox' name='radiofullcd' id='interest' className='mx-2' checked={consultantcdinterst} onChange={(e) => setConsultantcdinterst(e.target.checked)} />
                                                    <label className='checkbox-label whatsareainter-cd' for='interest'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                                                </div>

                                                {/* <div className='col-12 row'>
                                                    <input type='Checkbox' name='radiofullcd' className='mx-2' checked={consultantcdinterst} onChange={(e) => setConsultantcdinterst(e.target.checked)} />
                                                    <label className='checkbox-label'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                                                </div> */}
                                            </div>
                                        }
                                        {iamoption === 'Entrepreneur (self-employed)' &&
                                            <div className='container'>
                                                <div >
                                                    <label className='label-head whatsarea'>Name of organization/unit<span className='required-color'> (required)</span></label>
                                                    <input type='text' className='form-control' value={nameoforganunit} onChange={(e) => setNameofOrganunit(e.target.value)}></input>
                                                </div>
                                                <div >
                                                    <label className='label-head whatsarea'>What is the area of work?<span className='required-color'> (required)</span></label>
                                                    <input type='text' className='form-control' value={whatisareawork} onChange={(e) => setWhatisAreawork(e.target.value)}></input>
                                                </div>
                                                <div className='interset-cd mt-3'>
                                                    <input type='Checkbox' name='radiofull' id='selfinter' className='mx-2' checked={intersetedvolunteer} onChange={(e) => setIntersetedVolunteer(e.target.checked)} />
                                                    <label className='checkbox-label whatsareainter-cd' for='selfinter'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                                                </div>

                                            </div>}
                                        {iamoption === 'Home-maker' && <div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>Interests / expertise<span className='required-color'> (required)</span></label>
                                                <input type='text' className='form-control' value={interstshome} onChange={(e) => setInterstsHome(e.target.value)}></input>
                                            </div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>No of years experience (if any)<span className='required-color'> (required)</span></label>
                                                <input type='text' className='form-control' value={noofyears} onChange={(e) => setNoofYears(e.target.value)}></input>
                                            </div>
                                            <div className='interset-cd mt-3'>
                                                <input type='Checkbox' name='radiofull' className='mx-2' id='hominterst' checked={interstcdvolunteer} onChange={(e) => setInterstcdvolunteer(e.target.checked)} />
                                                <label className='checkbox-label whatsareainter-cd' for='hominterst'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                                            </div>
                                        </div>}
                                        {iamoption === 'Professional (employed)' && <div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>Name of organization you are employed with<span className='required-color'> (required)</span></label>
                                                <input type='text' className='form-control' value={profnameoforgan} onChange={(e) => setProfNameofOrgan(e.target.value)}></input>
                                            </div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>What is your area of work<span className='required-color'> (required)</span></label>
                                                <input type='text' className='form-control' value={profwhatareawork} onChange={(e) => setProfWhatAreawork(e.target.value)}></input>
                                            </div>
                                            <div className='col-12 '>
                                                <label className='label-head'>How many years of experience do you have in your field of work?<span className='required-color'> (required)</span></label><br />
                                                <input type='radio' name='radioexpre' id='exless5' className='mx-2' value='less than 5 yrs' checked={profyearsexpet === 'less than 5 yrs'} onChange={(e) => setProfyearsexpet(e.target.value)} />
                                                <label className='checkbox-label' for='exless5'>less than 5 yrs</label><br />
                                                <input type='radio' name='radioexpre' id='exless10' className='mx-2' value='5- 10 years' checked={profyearsexpet === '5- 10 years'} onChange={(e) => setProfyearsexpet(e.target.value)} />
                                                <label className='checkbox-label' for='exless10'>5- 10 years</label><br />
                                                <input type='radio' name='radioexpre' id='exless15' className='mx-2' value='10-15 years' checked={profyearsexpet === '10-15 years'} onChange={(e) => setProfyearsexpet(e.target.value)} />
                                                <label className='checkbox-label' for='exless15'>10-15 years</label> <br />
                                                <input type='radio' name='radioexpre' id='exless20' className='mx-2' value='15-20 years' checked={profyearsexpet === '15-20 years'} onChange={(e) => setProfyearsexpet(e.target.value)} />
                                                <label className='checkbox-label' for='exless20'>15-20 years</label><br />
                                                <input type='radio' name='radioexpre' id='exmore20' className='mx-2' value='More than 20 Years' checked={profyearsexpet === 'More than 20 Years'} onChange={(e) => setProfyearsexpet(e.target.value)} />
                                                <label className='checkbox-label' for='exmore20'>More than 20 Years</label> <br />
                                            </div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>Areas of expertise, If any</label>
                                                <input type='text' className='form-control' value={profareofexpert} onChange={(e) => setProfAreofExpert(e.target.value)}></input>
                                            </div>
                                            <div className='interset-cd mt-3'>
                                                <input type='Checkbox' name='radiofull' className='mx-2' id='exinterst' checked={profintersetcdvol} onChange={(e) => setProfIntersetCdvol(e.target.checked)} />
                                                <label className='checkbox-label whatsareainter-cd' for='exinterst'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                                            </div>
                                        </div>}
                                        {iamoption === 'Retired' && <div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>Previous occupation<span className='required-color'> (required)</span></label>
                                                <input type='text' className='form-control' value={retiredprevious} onChange={(e) => setRetiredPrevious(e.target.value)}></input>
                                            </div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>No of years’ experience (if any)</label>
                                                <input type='text' className='form-control' value={retirenoofyears} onChange={(e) => setRetireNoofYears(e.target.value)}></input>
                                            </div>
                                            <div className='interset-cd mt-3'>
                                                <input type='Checkbox' name='radiofull' className='mx-2' id='reinterst' checked={retireintersetcd} onChange={(e) => setRetireIntersetcd(e.target.checked)} />
                                                <label className='checkbox-label whatsareainter-cd' for='reinterst'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                                            </div>

                                        </div>}
                                        {iamoption === 'Student (studying in school/ college/university)' && <div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>Institute / College / University / School name<span className='required-color'> (required)</span></label>
                                                <input type='text' className='form-control' value={studentinstitue} onChange={(e) => setStudentInstitue(e.target.value)}></input>
                                            </div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>Course<span className='required-color'> (required)</span></label>
                                                <input type='text' className='form-control' value={studentcourse} onChange={(e) => setStudentCourse(e.target.value)}></input>
                                            </div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>Grade/ Class/ Semester<span className='required-color'> (required)</span></label>
                                                <input type='text' className='form-control' value={studentdrade} onChange={(e) => setStudentdrade(e.target.value)}></input>
                                            </div>
                                            <div className='col-12 row'>
                                                <label className='label-head whatsarea'>Specialization,If any<span className='required-color'> (required)</span></label>
                                                <input type='text' className='form-control' value={studentspecialization} onChange={(e) => setStudentSpecialization(e.target.value)}></input>
                                            </div>
                                            <div className='interset-cd mt-3'>
                                                <input type='Checkbox' name='radiofull' className='mx-2' id='tudeninter' checked={studentcdintersetvol} onChange={(e) => setStudentcdIntersetvol(e.target.checked)} />
                                                <label className='checkbox-label whatsareainter-cd' for='tudeninter'>I Would be interested in volunteering with CD as an when opportunities arise.</label>
                                            </div>

                                        </div>}

                                    </>
                                }

                                {indorganization === 'Organization' &&
                                    <div className='mt-5 txtcolourtwo'>
                                        <div className='col-12 row'>
                                            <label className='label-head whatsarea'>Name of organisation<span className='required-color'> (required)</span></label>
                                            <input type='text' className='form-control' value={nameoforgani} onChange={(e) => setNameoforgani(e.target.value)}></input>
                                        </div>
                                        <div className='col-12 row'>
                                            <label className='label-head whatsarea'>Your designation<span className='required-color'> (required)</span></label>
                                            <input type='text' className='form-control' value={yourdesignation} onChange={(e) => setYourDesignation(e.target.value)}></input>
                                        </div>
                                        <div className='mt-5 mx-4'>
                                            <label className='label-head whatsarea'>Type of organisation<span className='required-color'> (required)</span></label>
                                            <div>
                                                <input type='radio' name='radiofullone' id='orgango' className='mx-2' value='NGO' checked={whattypeorgani === 'NGO'} onChange={(e) => setWhatTypeOrgani(e.target.value)} />
                                                <label className='checkbox-label' for='orgango'>NGO</label><br />
                                                <input type='radio' name='radiofullone' id='organcorpo' className='mx-2' value='Corporate' checked={whattypeorgani === 'Corporate'} onChange={(e) => setWhatTypeOrgani(e.target.value)} />
                                                <label className='checkbox-label' for='organcorpo'>Corporate</label><br />
                                            </div>
                                        </div>
                                        <div className='mt-2 mx-4'>
                                            <label className='label-head whatsarea'>Type of engagement with CD<span className='required-color'> (required)</span></label>
                                            <div>

                                                {/* <input type='radio' name='radiofull' className='mx-2' value='Strategic Partner'  checked={typeofenge === 'Strategic Partner'} onChange={(e) => setTypeofEnge(e.target.value)} /> */}
                                                <input type='radio' id='partner' name='radiofull' className='mx-2' value='Strategic Partner' checked={typeofenge === 'Strategic Partner'} onChange={(e) => setTypeofEnge(e.target.value)} />
                                                <label className='checkbox-label' for='partner' >Strategic partner</label><br />
                                                <input type='radio' name='radiofull' id='Collaborator' className='mx-2' value='Collaborator' checked={typeofenge === 'Collaborator'} onChange={(e) => setTypeofEnge(e.target.value)} />
                                                <label className='checkbox-label' for='Collaborator'>Collaborator</label><br />
                                                <input type='radio' name='radiofull' id='engaother' className='mx-2' value='Other' checked={typeofenge === 'Other'} onChange={(e) => setTypeofEnge(e.target.value)} />
                                                <label className='checkbox-label' for='engaother'>Other</label><br />
                                            </div></div>

                                        <div className='col-12 row'>
                                            <label className='label-head whatsarea'>Authorized contact person name</label>
                                            <input type='text' className='form-control' value={authorcontact} onChange={(e) => setAuthorContact(e.target.value)}></input>
                                        </div>
                                        <div className='col-12 row'>
                                            <label className='label-head whatsarea'>Authorized contact person number</label>
                                            <input type='text' className='form-control' value={authorcontactnumber} onChange={(e) => setAuthorContactnumber(e.target.value)}></input>
                                        </div>
                                        <div className='col-12 row '>
                                            <label className='label-head whatsarea'>Organisation address</label>
                                            <textarea type='text' className='text-area mb-3 textareaone' value={organisationaddres} onChange={(e) => setOrganisationAddres(e.target.value)} row='10' col='10'></textarea>

                                        </div>
                                        <div className='col-12 row '>
                                            <label className='label-head whatsarea'>Head office address (Please provide state, City & Pin code)</label>
                                            <textarea type='text' className=' text-area mb-3 textareaone' value={organisationheadaddres} onChange={(e) => setOrganisationHeadAddres(e.target.value)} row='10' col='10'></textarea>

                                        </div>
                                        <div className='col-12 row '>
                                            <label className='label-head whatsarea'>States or regions you organization work in</label>
                                            <input type='text' className='form-control' value={organisationstate} onChange={(e) => setorganisationstate(e.target.value)}></input>
                                        </div>
                                        <div className='col-12 row '>
                                            <label className='label-head whatsarea'>What does your organization do</label>
                                            <textarea type='text' className='text-area mb-3 textareaone' value={whatdoseorgani} onChange={(e) => setWhatDoseOrgani(e.target.value)} row='10' col='10'></textarea>
                                        </div>
                                        <div className='col-12 row '>
                                            <label className='label-head whatsarea'>My organization would like to collaborate in the following areas.</label>
                                            <textarea type='text' className='text-area mb-3 textareaone' row='10' col='10' value={organisationarea} onChange={(e) => setOrganisationArea(e.target.value)} ></textarea>
                                        </div>
                                    </div>
                                }
                                {/* </div> */}

                                <div className='col-12 mt-5 mb-5 mx-1'>
                                    <button
                                        onClick={handlePrevious}
                                        // className="bg-gradient-secondary btn-previous px-3"
                                        className="bg-gradient-secondary"
                                    >
                                        Previous
                                    </button>


                                    <button
                                        onClick={handleNext}
                                        // className="btn-next mt-4 mb-4"
                                        className="bg-gradient-secondary-next px-3"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div >
                );
            case 3:
                return (
                    <div>
                        <ToastContainer toastOptions={{ position: "top-right" }} />
                        <div className='container member_form_height'>
                            <div className='row mt-2 mb-4'>
                                <div className='col-6 selectwrappermem'>
                                    <label className='label-head'>Add social site</label>
                                    <select className='memberarudrpform' value={socialSite1} onChange={(e) => setsocialSite1(e.target.value)}>
                                        <option value="Instagram" selected="selected">Youtube</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="YouTube">Instagram</option>
                                        <option value="Twitter">Twitter</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label className='label-head'>Site URL</label>
                                    <input type='text' className='form-control' placeholder='https://' value={socialSite1Url} onChange={(e) => setsocialSiteUrl1(e.target.value)} />
                                </div>
                            </div>
                            <div className='row mt-2 mb-4'>
                                <div className='col-6 selectwrappermem'>
                                    <label className='label-head'>Add social site</label>
                                    <select className='memberarudrpform' value={socialSite2} onChange={(e) => setsocialSite2(e.target.value)}>
                                        <option value="Facebook" selected="selected">Facebook</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="YouTube">YouTube</option>
                                        <option value="Twitter">Twitter</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label className='label-head'>Site URL</label>
                                    <input type='text' className='form-control' placeholder='https://' value={socialSite2Url} onChange={(e) => setsocialSite2Url(e.target.value)} />
                                </div>
                            </div>
                            <div className='row mt-2 mb-4'>
                                <div className='col-6 selectwrappermem'>
                                    <label className='label-head'>Add social site</label>
                                    <select className='memberarudrpform' value={socialSite3} onChange={(e) => setsocialSite3(e.target.value)}>
                                        <option value="LinkedIn" selected="selected">LinkedIn</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="YouTube">YouTube</option>
                                        <option value="Twitter">Twitter</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label className='label-head'>Site URL</label>
                                    <input type='text' className='form-control' placeholder='https://' value={socialSite3Url} onChange={(e) => setsocialSite3Url(e.target.value)} />
                                </div>
                            </div>
                            <div className='row mt-2 mb-4'>
                                <div className='col-6 selectwrappermem'>
                                    <label className='label-head'>Add social site</label>
                                    <select className='memberarudrpform' value={socialSite4} onChange={(e) => setsocialSite4(e.target.value)}>
                                        <option value="YouTube" selected="selected">Twitter</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="Twitter">Youtube</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label className='label-head'>Site URL</label>
                                    <input type='text' className='form-control' placeholder='https://' value={socialSite4Url} onChange={(e) => setsocialSite4Url(e.target.value)} />
                                </div>
                            </div>
                            <div className='row mt-2 mb-4'>
                                <div className='col-6 selectwrappermem'>
                                    <label className='label-head'>Add social site</label>
                                    <select className='memberarudrpform' value={socialSite5} onChange={(e) => setsocialSite5(e.target.value)}>
                                        <option value="Twitter" selected="selected">Instagram</option>
                                        <option value="Instagram">Twitter</option>
                                        <option value="Facebook">Facebook</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="YouTube">YouTube</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <label className='label-head'>Site URL</label>
                                    <input type='text' className='form-control' placeholder='https://' value={socialSite5Url} onChange={(e) => setsocialSite5Url(e.target.value)} />
                                </div>
                            </div>
                            <div >
                                <label className='label-head'>Site URL</label>
                                <input type='text' className='form-control inputbottom' placeholder='https://' value={siteUrl} onChange={(e) => setSiteUrl(e.target.value)} />
                            </div>
                            <div className='mt-5'>
                                <a className='read-hindi' onClick={languageChange}>
                                    {languageenglish ?
                                        "Read in Hindi" : "Read in English"}
                                </a>
                            </div>
                            {languageenglish &&
                                <div className='mb-5'>
                                    <h3 className='gsection_title mt-4 mb-4' style={{ textAlign: 'center' }}>The Creative Dignity Pledge</h3>
                                    <p className='creative-para mb-3'>This pledge as a Member of Creative Dignity is our statement of intent, our commitment, that our actions and behaviours will align with our Vision, Mission, and Core Values.</p>
                                    <b className='bold-name'>Vision</b>
                                    <p className='creative-para mb-3'>A world where artisans have agency to thrive with dignity.</p>
                                    <b className='bold-name'>Mission</b>
                                    <p className='creative-para mb-4'>Enabling knowledge, tools and networks for artisans to be equal stakeholders in creating regenerative economies</p>
                                    <b className='bold-name'>Our Commitment</b>
                                    <ol className='mt-3 mx-4'>
                                        <li className='creative-para mb-3'>
                                            <b className='bold-name'>Artisan at the centre</b>
                                            -at all times and in all our endeavours we will keep the artisan at the centre. Every opportunity and activity will be evaluated by the impact it has on the artisan first. At every table – discussion or decision making – there will be artisan representation with an aim for it to be 50%.
                                        </li>
                                        <li className='creative-para mb-3'>
                                            <b className='bold-name'>Collaborate, not Compete</b>
                                            -we will collaborate with each other and not compete, keeping the best interests of the artisan and her ecosystem at the heart of all we do. We will not use another’s idea, design, IP, people or process without permission. We will seek to co-create value with others, for the artisan and the sector. We will amplify and celebrate each other’s work.
                                        </li>
                                        <li className='creative-para mb-3'>
                                            <b className='bold-name'>Open source</b>
                                            - We will openly share information, data, opportunities and our knowledge, skills and networks with each other so that we can build upon each other’s work and not rebuild/reinvent the wheel. I understand what I produce for Creative Dignity is non-proprietary.
                                        </li>
                                        <li className='creative-para mb-3'>
                                            <b className='bold-name'>Trust </b>
                                            -we will trust each other unless someone gives us reason not to. We will treat everyone equally. We will be respectful of each other in every way and always choose kindness and generosity. We will always operate with the fullest integrity.
                                        </li>
                                        <li className='creative-para mb-5'>
                                            <b className='bold-name'>Commitment and Accountability</b>
                                            -We are here voluntarily and are fully committed to the vision, mission, core values and goals of Creative Dignity. We remain accountable for our behaviour, words and actions, and the responsibilities we take on. We will honour the self governed, self motivated and self driven nature of CD.
                                        </li>
                                    </ol>
                                    <p className='creative-para mb-4'>By signing this form, I confirm my and my organization's commitment to abide by these principles.</p>
                                    <p className='creative-para mb-4'>I understand that if I do not honour this pledge I may be asked to leave Creative Dignity as a member.</p>
                                </div>}
                            {languageval &&
                                <div className='mb-5'>

                                    <h2 className='gsection_title mt-4 mb-4' style={{ textAlign: 'center' }}>रचनात्मक गरिमा प्रतिज्ञा</h2>
                                    <p className='creative-para mb-3'>क्रिएटिव डिगनिटी के सदस्य के रूप में यह प्रतिज्ञा हमारी मंशा, हमारी प्रतिबद्धता का बयान है, कि हमारे कार्य और व्यवहार हमारी दृष्टि, मिशन और मूल मूल्यों के साथ संरेखित होंगे।</p>
                                    <b className='bold-name'>विज़न</b>
                                    <p className='creative-para mb-3'>एक ऐसी दुनिया जहां कारीगरों के पास गरिमा के साथ फलने-फूलने का अधिकार है |</p>
                                    <b className='bold-name'>मिशन</b>
                                    <p className='creative-para mb-4'>पुनर्योजी अर्थव्यवस्थाओं को बनाने में कारीगरों को समान हितधारक बनने के लिए ज्ञान, उपकरण और नेटवर्क को सक्षम करना |</p>
                                    <b className='bold-name'>हमारी प्रतिबद्धता</b>
                                    <ol className='mt-3 mx-4'>
                                        <li className='creative-para mb-3'>
                                            <b className='bold-name'>केंद्र में कारीगर</b>
                                            -हर समय और अपने सभी प्रयासों में हम कारीगर को केंद्र में रखेंगे। प्रत्येक अवसर और गतिविधि का मूल्यांकन पहले कारीगर पर पड़ने वाले प्रभाव से किया जाएगा। प्रत्येक टेबल, चर्चा या निर्णय लेने पर, 50% होने के उद्देश्य से कारीगरों का प्रतिनिधित्व होगा।
                                        </li>
                                        <li className='creative-para mb-3'>
                                            <b className='bold-name'>सहयोग करें, प्रतिस्पर्धा न करें</b>
                                            -हम कारीगर और उसके पारिस्थितिकी तंत्र के सर्वोत्तम हितों को ध्यान में रखते हुए एक-दूसरे के साथ सहयोग करेंगे और प्रतिस्पर्धा नहीं करेंगे। हम अनुमति के बिना दूसरे के विचार, डिजाइन, आईपी, लोगों या प्रक्रिया का उपयोग नहीं करेंगे। हम कारीगर और क्षेत्र के लिए दूसरों के साथ मूल्य बनाने की कोशिश करेंगे। हम एक दूसरे के काम को बढ़ाएंगे और उसका जश्न मनाएंगे।
                                        </li>
                                        <li className='creative-para mb-3'>
                                            <b className='bold-name'>खुला स्रोत</b>
                                            - हम खुले तौर पर सूचना, डेटा, अवसर और अपने ज्ञान, कौशल और नेटवर्क को एक दूसरे के साथ साझा करेंगे ताकि हम एक दूसरे के काम पर निर्माण कर सकें और पहिया का पुनर्निर्माण या पुन: आविष्कार नहीं कर सकें। मैं समझता हूं कि क्रिएटिव डिगनिटी के लिए मैं जो उत्पादन करता हूं वह गैर-मालिकाना है।.
                                        </li>
                                        <li className='creative-para mb-3'>
                                            <b className='bold-name'>भरोसा </b>
                                            - हम एक-दूसरे पर तब तक भरोसा करेंगे जब तक कोई हमें न करने का कारण न बताए। हम सबके साथ समान व्यवहार करेंगे। हम हर तरह से एक-दूसरे का सम्मान करेंगे और हमेशा दया और उदारता का चुनाव करेंगे। हम हमेशा पूरी ईमानदारी के साथ काम करेंगे।
                                        </li>
                                        <li className='creative-para mb-5'>
                                            <b className='bold-name'>प्रतिबद्धता और जवाबदेही</b>
                                            - हम यहां "क्रिएटिव डिगनिटी" के विजन, मिशन, मूल मूल्यों और लक्ष्यों के लिए स्वेच्छा से और पूरी तरह से प्रतिबद्ध हैं। हम अपने व्यवहार, शब्दों और कार्यों और हमारे द्वारा लिए जाने वाले उत्तरदायित्वों के लिए जवाबदेह रहते हैं। हम "क्रिएटिव डिगनिटी" की स्व-शासित, स्व-प्रेरित और स्व-चालित प्रकृति का सम्मान करेंगे |
                                        </li>
                                    </ol>
                                    <p className='creative-para mb-4'>इस फॉर्म पर हस्ताक्षर करके, मैं इन सिद्धांतों का पालन करने के लिए अपने और अपने संगठन की प्रतिबद्धता की पुष्टि करता हूं।</p>

                                    <p className='creative-para mb-4'>मैं समझता हूं कि अगर मैं इस प्रतिज्ञा का सम्मान नहीं करता हूं तो मुझे एक सदस्य के रूप में "रचनात्मक गरिमा" छोड़ने के लिए कहा जा सकता है।</p>
                                    <p className='creative-para mb-4'>मैंने प्रतिज्ञा दस्तावेज पढ़ लिया है और मैं इसका पालन करने के लिए सहमत हूं |</p>
                                </div>
                            }
                            <div>
                                <input type='checkbox' className='mx-2' checked={agree} onChange={(e) => setagree(e.target.checked)} />
                                <label className='checkbox-label'>I agree <span className='required-color'> (required)</span></label>
                            </div>
                            <button
                                onClick={handlePrevious}
                                className="bg-gradient-secondary px-3 mx-0"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="btn-next mt-4 mb-4"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    useEffect(() => {
        if (ID != 0) {
            getData()
        }
    }, []);


    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${apiURL}/Get_all_module/get_by_id?id=${ID}&Flag=Member`);
            setAPIResponse(response.data.data);
            console.log("response", response.data.data)
            //    page1
            setYourname(response.data.data.name);
            setEmail(response.data.data.your_email);
            setContactnumber(response.data.data.contact_number);
            setCountry(response.data.data.country);
            setLanguagevaldata(JSON.parse(response.data.data.communicate_languages));
            setCity(response.data.data.state);
            setStateval(response.data.data.state1);
            //  page2
            setIndOrganization(response.data.data.cd_joining);
            setiamOption(response.data.data.i_am);
            setInterstsHome(response.data.data.home_interests);
            setNoofYears(response.data.data.home_no_of_experience);
            setareaofwork(response.data.data.con_what_is_area_work);
            setConsultanthowmanyyears(response.data.data.con_experience_of_feild);
            setNameofOrganunit(response.data.data.name_of_organization);
            setWhatisAreawork(response.data.data.entre_what_is_area_work);
            setProfNameofOrgan(response.data.data.new_name_of_organization);
            // setProfNameofOrgan(response.data.data.new_name_of_organization);
            setareaofwork(response.data.data.areaofwork);
            setConsultanthowmanyyears(response.data.data.con_experience_of_feild);
            setProfAreofExpert(response.data.data.professional_areas_of_expertise);
            setRetiredPrevious(response.data.data.previous_occupation);
            setRetireNoofYears(response.data.data.retried_experience);
            setStudentInstitue(response.data.data.institute_name);
            setStudentCourse(response.data.data.course);
            setStudentdrade(response.data.data.semester);
            setStudentSpecialization(response.data.data.Specialization);
            //    page3
            setsocialSiteUrl1(response.data.data.youtube_social_site_url);
            setsocialSite2Url(response.data.data.facebook_social_site_url);
            setsocialSite3Url(response.data.data.linkedin_social_site_url);
            setsocialSite4Url(response.data.data.twitter_social_site_url);
            setsocialSite5Url(response.data.data.insta_social_site_url);
            setSiteUrl(response.data.data.siteUrl);

            setIsLoading(false);
        } catch (error) {
            console.error('Error making POST request:', error);
            setIsLoading(false);
        }
    }

    return (
        <div>
            {/* <Header /> */}
            <Individual_Header />
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
                    {renderStep()}
                </>
            )}
            <Footer />
        </div>
    )
}

export default New_member_form