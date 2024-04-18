import React, { useContext, useState, useEffect } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';

function Formthree(props) {
    const { arisandata, handleChange, next,
        back, b2B_formthree, setB2B_formthree, b2c_formthree,
        setB2c_Formthree, ecommerce, setEcommerce, export_fthree,
        setExport_Fthree, retail, setRetail, Socialmedia, setSocialMedia, localmarket,
        setLocalMarket, other_fthree, setOther_Fthree, national, setNational, stateaward,
        setstateaward, otheraward_fthree, setOtherAward_Fthree, notapplie, setnotapplie,
        zerotofive, setZerotoFive, fivetoten, setFivetoTen, tentofifteen,
        anyrecognition, setAnyRecognition, areumaster, setAreuMaster, settentoFifteen,
        submitArtisanForm, handleChangecivildemo, handleChangerecognition, handleChangeyears,
        handleCheckboxStore, firstcheck, secondcheck, threecheck, setfirstcheck, agree, setagree, languageval, setLanguageval, estore, newID } = props;

    console.log(firstcheck, "123firstcheck");

    const handleSelectlanguage = (languageval) => {
        setLanguageval(languageval);
        console.log("qqqq");
    }

    const [language, setLanguage] = useState(false);
    const [languageenglish, setLanguageEnglish] = useState(true);


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

    // const [languageval, setLanguageval] = useState([]);

    // const [firstcheck, setfirstcheck] = useState(false);
    // const [secondcheck, setsecondcheck] = useState(false);
    // const [threecheck, setthreecheck] = useState(false);
    // const [estore, setEstore] = useState([]);
    // console.log("AS", estore);


    const nextData = () => {
        next()
    }
    const languageChange = () => {
        if (languageenglish) {
            setLanguageEnglish(false);
            setLanguage(true);
        } else {
            setLanguageEnglish(true);
            setLanguage(false);
        }
    };


    // const handleCheckboxStore = (event, flag) => {
    //     const value = event.target.checked;
    //     console.log("121", value);
    //     if (flag === 'first') {
    //         setfirstcheck(value);
    //     }
    //     if (flag === 'second') {
    //         setsecondcheck(value);
    //     }
    //     if (flag === 'three') {
    //         setthreecheck(value);
    //     }

    // };

    const data = [{ Languages: "Tamil", id: 1 },
    { Languages: "Hindi", id: 2 },
    { Languages: "Telungu", id: 3 },
    { Languages: "Uruthu", id: 4 },
    { Languages: "Malayalam", id: 5 },
    { Languages: "French", id: 6 }]
    const [option, setOption] = useState(data);

    return (
        <div className='container mt-5 formthree'>
            <div className=' '>
                <h3 className='gsection_title mt-4 addinfo'>Additional information</h3>
            </div>

            <div className='row mt-2 mb-2'>
                <div className='col-6'>
                    <label className='label-head formthreeht'>Website name</label>
                    <input type='text' className='form-control' value={arisandata.websitename} name='websitename' onChange={handleChange} />
                </div>
                <div className='col-6'>
                    <label className='label-head formthreeht'>Website URL</label>
                    <input type='email' className='form-control' value={arisandata.Websiteurl} name='Websiteurl' onChange={handleChange} placeholder='https://' />
                </div>
            </div>

            <div>
                <input type='checkbox' className='' checked={estore.includes('Add an e-store you sell at1')} id="gridCheckestoreone" name='Add an e-store you sell at1' value='Add an e-store you sell at1' onChange={handleCheckboxStore} />
                <label className='checkbox-label mx-3' for='gridCheckestoreone'>Add an e-store you sell at</label>

                {firstcheck &&
                    <div className='row mt-2 mb-2'>
                        <div className='col-6'>
                            <label className='label-head'>Store Name</label>
                            <input type='text' className='form-control' value={arisandata.storename} name='storename' onChange={handleChange} />

                        </div>
                        <div className='col-6'>
                            <label className='label-head'>Store URL</label>
                            <input type='email' className='form-control' placeholder='https://' value={arisandata.storeurl} name='storeurl' onChange={handleChange} />
                        </div>
                    </div>
                }
            </div>

            <div>
                <input type='checkbox' className='' checked={estore.includes('Add an e-store you sell at2')} id="gridCheckestoretwo" name='Add an e-store you sell at2' value='Add an e-store you sell at2' onChange={handleCheckboxStore} />
                <label className='checkbox-label mx-3' for='gridCheckestoretwo'>Add an e-store you sell at</label>
                {secondcheck &&
                    <div className='row mt-2 mb-2'>
                        <div className='col-6'>
                            <label className='label-head'>Store Name</label>
                            <input type='text' className='form-control' value={arisandata.storenameone} name='storenameone' onChange={handleChange} />
                        </div>
                        <div className='col-6'>
                            <label className='label-head'>Store URL</label>
                            <input type='email' className='form-control' placeholder='https://' value={arisandata.storeurlone} name='storeurlone' onChange={handleChange} />
                        </div>
                    </div>
                }
            </div>

            <div>
                <input type='checkbox' className='' checked={estore.includes('Add an e-store you sell at3')} id="gridCheckestorethree" name='Add an e-store you sell at3' value='Add an e-store you sell at3' onChange={handleCheckboxStore} />
                <label className='checkbox-label mx-3' for='gridCheckestorethree'>Add an e-store you sell at</label>
                {threecheck &&
                    <div className='row mt-2 mb-2'>
                        <div className='col-6'>
                            <label className='label-head'>Store Name</label>
                            <input type='text' className='form-control' value={arisandata.storenametwo} name='storenametwo' onChange={handleChange} />
                        </div>
                        <div className='col-6'>
                            <label className='label-head'>Store URL</label>
                            <input type='email' className='form-control' placeholder='https://' value={arisandata.storeurltwo} name='storeurltwo' onChange={handleChange} />
                        </div>
                    </div>

                }

            </div>



            {/* <div className='row'>
                <input type='checkbox' className='mx-4' checked={firstcheck} id="gridCheckestoretwo" name='Add an e-store you sell at1' value='Add an e-store you sell at1' onChange={handleCheckboxStore} />
                <label className='checkbox-label mx-3'>Add an e-store you sell at</label>
            </div>
            {firstcheck &&
                <div className='row mt-2 mb-2'>
                    <div className='col-6'>
                        <label className='label-head'>Store Name</label>
                        <input type='text' className='form-control' value={arisandata.storename} name='storename' onChange={handleChange} />

                    </div>
                    <div className='col-6'>
                        <label className='label-head'>Store URL</label>
                        <input type='email' className='form-control' placeholder='https://' value={arisandata.storeurl} name='storeurl' onChange={handleChange} />
                    </div>
                </div>
            }
            <div className='row'>
               <input type='checkbox' className='mx-4' checked={secondcheck} id="gridCheckestoretwo" name='Add an e-store you sell at2' value='Add an e-store you sell at2' onChange={handleCheckboxStore} />
                <label className='checkbox-label mx-3'>Add an e-store you sell at</label>
            </div>
            {secondcheck &&
                <div className='row mt-2 mb-2'>
                    <div className='col-6'>
                        <label className='label-head'>Store Name</label>
                        <input type='text' className='form-control' value={arisandata.storenameone} name='storenameone' onChange={handleChange} />
                    </div>
                    <div className='col-6'>
                        <label className='label-head'>Store URL</label>
                        <input type='email' className='form-control' placeholder='https://' value={arisandata.storeurlone} name='storeurlone' onChange={handleChange} />
                    </div>
                </div>
            }
            <div className='row'>
                <input type='checkbox' className='mx-4' id="gridCheckestoreone" name='Add an e-store you sell at3' value='Add an e-store you sell at3' onChange={handleCheckboxStore} />
                <label className='checkbox-label mx-3'>Add an e-store you sell at</label>
            </div>
            {threecheck &&
                <div className='row mt-2 mb-2'>
                    <div className='col-6'>
                        <label className='label-head'>Store Name</label>
                        <input type='text' className='form-control' value={arisandata.storenametwo} name='storenametwo' onChange={handleChange} />
                    </div>
                    <div className='col-6'>
                        <label className='label-head'>Store URL</label>
                        <input type='email' className='form-control' placeholder='https://' value={arisandata.storeurltwo} name='storeurltwo' onChange={handleChange} />
                    </div>
                </div>

            } */}



            <div className=''>
                <label className='label-head'>How do you sell your products (select all that apply )</label>
                <div className=''>

                    <input className='mx-2' type="checkbox" id="gridCheckModify" checked={national.includes('B2B')} name='B2B' value='B2B' onChange={handleChangecivildemo} />
                    <label className='checkbox-label' for='gridCheckModify'>B2B</label><br />

                    <input className='mx-2' type="checkbox" id="gridCheckb2c" checked={national.includes('B2C')} name='B2C' value='B2C' onChange={handleChangecivildemo} />
                    <label className='checkbox-label' for='gridCheckb2c'>B2C</label><br />

                    <input className='mx-2' type="checkbox" id="gridCheckecom" checked={national.includes('ecommerce')} name='ecommerce' value='ecommerce' onChange={handleChangecivildemo} />
                    <label className='checkbox-label' for='gridCheckecom'>E commerce</label><br />

                    <input className='mx-2' type="checkbox" id="gridCheckexpo" checked={national.includes('export')} name='export' value='export' onChange={handleChangecivildemo} />
                    <label className='checkbox-label' for='gridCheckexpo'>Export</label><br />

                    <input className='mx-2' type="checkbox" id="gridCheckretail" checked={national.includes('retail')} name='retail' value='retail' onChange={handleChangecivildemo} />
                    <label className='checkbox-label' for='gridCheckretail'>Retail</label><br />

                    <input className='mx-2' type="checkbox" id="gridChecksocial" checked={national.includes('social media')} name='social media' value='social media' onChange={handleChangecivildemo} />
                    <label className='checkbox-label' for='gridChecksocial'>Social media</label><br />


                    <input className='mx-2' type="checkbox" id="gridChecklocal" name='local market' value='local market' onChange={handleChangecivildemo} />
                    <label className='checkbox-label' for='gridChecklocal'>Local market</label><br />

                    <input className='mx-2' type="checkbox" id="gridCheckother" name='Others' value='Others' onChange={handleChangecivildemo} />
                    <label className='checkbox-label' for='gridCheckother'>Others</label>
                </div>

            </div>
            {arisandata.areyouval === 'Individual artisan / artisan family business' && (
                <div className=''>
                    <label className='label-head '>Have you won any recognition</label>
                    <div className='' >
                        <input className='mx-2' type="checkbox" id="gridChecknational" name='National award' value='National award' onChange={handleChangerecognition} />
                        <label className='checkbox-label' for='gridChecknational'>National award</label> <br />

                        <input className='mx-2' type="checkbox" id="gridCheckstae" name='State award' value='State award' onChange={handleChangerecognition} />
                        <label className='checkbox-label' for='gridCheckstae'>State award</label><br />

                        <input className='mx-2' type="checkbox" id="gridCheckotherre" name='Others' value='Others' onChange={handleChangerecognition} />
                        <label className='checkbox-label' for='gridCheckotherre'>Others</label><br />

                        <input className='mx-2' type="checkbox" id="gridCheckna" name='N/A' value='N/A' onChange={handleChangerecognition} />
                        <label className='checkbox-label' for='gridCheckna'>N/A</label>
                    </div>
                </div>
            )}

            {arisandata.areyouval === 'Individual artisan / artisan family business' && (
                <div className=''>
                    <label className='label-head'>Since how many years have you been practicing the craft?</label>
                    <div>
                        {/* <input type='checkbox' className='mx-2' value="0-5" checked={zerotofive === '0-5'} onChange={(e) => setZerotoFive(e.target.value)} /> */}
                        <input className='mx-2' type="checkbox" id="gridCheck05" name='0-5' value='0-5' onChange={handleChangeyears} />
                        <label className='checkbox-label' for='gridCheck05'>0-5</label><br />
                        <input className='mx-2' type="checkbox" id="gridCheck10" name='5-10' value='5-10' onChange={handleChangeyears} />
                        <label className='checkbox-label' for='gridCheck10'>5-10</label><br />
                        <input className='mx-2' type="checkbox" id="gridCheck15" name='10-15' value='10-15' onChange={handleChangeyears} />
                        <label className='checkbox-label' for='gridCheck15'>10-15</label><br />
                        <input className='mx-2' type="checkbox" id="gridCheck+15" name='More than 15' value='More than 15' onChange={handleChangeyears} />
                        <label className='checkbox-label' for='gridCheck+15'>More than 15</label>
                    </div>
                </div>
            )}

            <div className='row'>
                <div className='col-12'>
                    <label className='label-head'>Languages you communicate in</label>
                    <div className='row mt-3 mb-4 '>
                        <div className='col-12 col-md-12' > {/* Adjust the column width as needed */}

                            <Select
                                options={languagedata}
                                value={languageval}
                                onChange={handleSelectlanguage}
                                placeholder="Click to select..."
                                className='without-box mobile-select-with text_size'
                                // className='txtssss'
                                style={{ fontSize: '16px' }}
                                isMulti={true}

                            />

                        </div>
                    </div>
                </div>
            </div>
            {arisandata.areyouval === 'Individual artisan / artisan family business' && (
                <>
                    <div className='row'>
                        <div className='col-12'>
                            <label className='label-head'>Artisan card number </label>
                            <div className='row mt-3 mb-4'>
                                <div className='col-12 col-md-12'>
                                    <input type='text' className='form-control' value={arisandata.artisancard} name='artisancard' onChange={handleChange} placeholder='Artisan card number' />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div>
                        <label className='label-head'>Is your family involved in craft</label>
                        <div>
                            <input type='radio' name='recogni' id='Craft' className='mx-2' value='yes' checked={anyrecognition === 'yes'} onChange={(e) => setAnyRecognition(e.target.value)} />
                            <label className='checkbox-label' for='Craft' name='ivolcraf'>Yes</label><br />
                            <input type='radio' name='recogni' id='Craft1' className='mx-2' value='No' checked={anyrecognition === 'No'} onChange={(e) => setAnyRecognition(e.target.value)} />
                            <label className='checkbox-label' for='Craft1'>No</label> <br />
                            <input type='radio' name='recogni' id='Craft2' className='mx-2' value='NA' checked={anyrecognition === 'NA'} onChange={(e) => setAnyRecognition(e.target.value)} />
                            <label className='checkbox-label' for='Craft2'>NA</label>
                        </div>
                    </div>

                    <div>
                        <label className='label-head'>Are you a?</label>
                        <div>
                            <input type='radio' name='areyou' id='areu' className='mx-2' value='Master Craftsmen' checked={areumaster === 'Master Craftsmen'} onChange={(e) => setAreuMaster(e.target.value)} />
                            <label className='checkbox-label' for='areu'>Master Craftsmen</label><br />
                            <input type='radio' name='areyou' id='areu1' className='mx-2' value='Beginner' checked={areumaster === 'Beginner'} onChange={(e) => setAreuMaster(e.target.value)} />
                            <label className='checkbox-label' for='areu1'>Beginner</label> <br />
                            <input type='radio' name='areyou' id='areu2' className='mx-2' value='Learner' checked={areumaster === 'Learner'} onChange={(e) => setAreuMaster(e.target.value)} />
                            <label className='checkbox-label' for='areu2'>Learner</label>
                        </div>
                    </div>
                </>
            )}
            {languageenglish ?
                <div className='mt-5'>
                    <a className='read-hindi' onClick={languageChange}>Read in hindi</a>
                </div> :
                <div className='mt-5'>
                    <a className='read-hindi' onClick={languageChange}>Read in english</a>
                </div>
            }
            {languageenglish &&
                <div className='mb-5'>
                    <h3 className='gsection_title mt-4 mb-4' style={{ textAlign: 'center' }}>The Creative Dignity Pledge</h3>
                    <p className='creative-para mb-3'>This pledge as a Member of Creative Dignity is our statement of intent, our commitment, that our actions and behaviours will align with our Vision, Mission, and Core Values.</p>
                    <b className='bold-name'>Vision</b>
                    <p className='creative-para mb-3'>A world where artisans have agency to thrive with dignity.</p>
                    <b className='bold-name'>Mission</b>
                    <p className='creative-para mb-4'>Enabling knowledge, tools and networks for artisans to be equal stakeholders in creating regenerative economies</p>
                    <b className='bold-name'>Our commitment</b>
                    <ol className='mt-3 mx-4 language-text'>
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
                </div>
            }
            {language &&
                <div className='mb-5'>
                    <h3 className='gsection_title mt-4 mb-4' style={{ textAlign: 'center' }}>रचनात्मक गरिमा प्रतिज्ञा</h3>
                    <p className='creative-para mb-3'>क्रिएटिव डिगनिटी के सदस्य के रूप में यह प्रतिज्ञा हमारी मंशा, हमारी प्रतिबद्धता का बयान है, कि हमारे कार्य और व्यवहार हमारी दृष्टि, मिशन और मूल मूल्यों के साथ संरेखित होंगे।</p>
                    <b className='bold-name'>विज़न</b>
                    <p className='creative-para mb-3'>एक ऐसी दुनिया जहां कारीगरों के पास गरिमा के साथ फलने-फूलने का अधिकार है |</p>
                    <b className='bold-name'>मिशन</b>
                    <p className='creative-para mb-4'>पुनर्योजी अर्थव्यवस्थाओं को बनाने में कारीगरों को समान हितधारक बनने के लिए ज्ञान, उपकरण और नेटवर्क को सक्षम करना |</p>
                    <b className='bold-name'>हमारी प्रतिबद्धता</b>
                    <ol className='mt-3 mx-4 language-text'>
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
                <input type='checkbox' className='mx-2' id='agree' checked={agree} onChange={(e) => setagree(e.target.checked)} />
                <label className='checkbox-label' for='agree'>I agree <span className='required-color'> (required)</span></label>
            </div>
            <div className='mt-5 mb-5'>
                <button
                    onClick={back}
                    className="bg-gradient-secondary-formthree"
                >
                    Previous
                </button>
                <button onClick={submitArtisanForm}
                    className="bg-gradient-secondary-next"

                >Submit
                </button>
            </div>
        </div>
    )
}

export default Formthree