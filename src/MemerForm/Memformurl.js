import React, { useState } from 'react'

function Memformurl(props) {
    const { data, handleChange, next, back, error, setError } = props;
    const [languageval, setlanguageval] = useState(false);
    const nextData = () => {
        next()
    }
    const languageChange = () => {
        setlanguageval(true)
    }
    return (
        <div>
            <div className='row mt-2 mb-4'>
                <div className='col-6'>
                    <label className='label-head'>Add Social Site</label>
                    <select className='form-control'>
                        <option>--Instagram--</option>
                        <option>YouTube</option>
                        <option>Facebook</option>
                        <option>LinkedIn</option>
                        <option>Twitter</option>
                    </select>
                </div>
                <div className='col-6'>
                    <label className='label-head'>Site URL</label>
                    <input type='email' className='form-control' placeholder='https://' />
                </div>
            </div>
            <div className='row mt-2 mb-4'>
                <div className='col-6'>
                    <label className='label-head'>Add Social Site</label>
                    <select className='form-control'>
                        <option>--Instagram--</option>
                        <option>YouTube</option>
                        <option>Facebook</option>
                        <option>LinkedIn</option>
                        <option>Twitter</option>
                    </select>
                </div>
                <div className='col-6'>
                    <label className='label-head'>Site URL</label>
                    <input type='email' className='form-control' placeholder='https://' />
                </div>
            </div>
            <div className='row mt-2 mb-4'>
                <div className='col-6'>
                    <label className='label-head'>Add Social Site</label>
                    <select className='form-control'>
                        <option>--Instagram--</option>
                        <option>YouTube</option>
                        <option>Facebook</option>
                        <option>LinkedIn</option>
                        <option>Twitter</option>
                    </select>
                </div>
                <div className='col-6'>
                    <label className='label-head'>Site URL</label>
                    <input type='email' className='form-control' placeholder='https://' />
                </div>
            </div>
            <div className='row mt-2 mb-4'>
                <div className='col-6'>
                    <label className='label-head'>Add Social Site</label>
                    <select className='form-control'>
                        <option>--Instagram--</option>
                        <option>YouTube</option>
                        <option>Facebook</option>
                        <option>LinkedIn</option>
                        <option>Twitter</option>
                    </select>
                </div>
                <div className='col-6'>
                    <label className='label-head'>Site URL</label>
                    <input type='email' className='form-control' placeholder='https://' />
                </div>
            </div>
            <div className='row mt-2 mb-4'>
                <div className='col-6'>
                    <label className='label-head'>Add Social Site</label>
                    <select className='form-control'>
                        <option>--Instagram--</option>
                        <option>YouTube</option>
                        <option>Facebook</option>
                        <option>LinkedIn</option>
                        <option>Twitter</option>
                    </select>
                </div>
                <div className='col-6'>
                    <label className='label-head'>Site URL</label>
                    <input type='email' className='form-control' placeholder='https://' />
                </div>
            </div>
            <div >
                <label className='label-head'>Site URL</label>
                <input type='email' className='form-control inputbottom' placeholder='https://' />
            </div>
            <div className='mt-5'>
                <a className='read-hindi' onClick={languageChange}>Read in Hindi</a>
            </div>
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
            </div>
            {languageval &&
                <div className='mb-5'>
                    <h3 className='gsection_title mt-4 mb-4' style={{ textAlign: 'center' }}>क्रिएटिव डिगनिटी प्रतिज्ञा पत्र</h3>
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
                <input type='checkbox' className='mx-2' />
                <label className='checkbox-label'>I agree <span className='required-color'>(Required)</span></label>
            </div>
            <button
                onClick={back}
                className="bg-gradient-secondary px-3 mx-0"
            >
                Previous
            </button>
            <button
                onClick={nextData}
                className="btn-next mt-4 mb-4"
            >
                Submit
            </button>
        </div>
    )
}

export default Memformurl
