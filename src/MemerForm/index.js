import React, { useContext, useState } from "react";
import Header from '../Header/header'
import Footer from '../Footer/footer'
import Memberformtwo from "./Memberformtwo";
import Memberformone from "./Memberformone";
import Memformurl from "./Memformurl";

function MemerForm() {

    const [activeStep, setActiveStep] = useState(1);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const [memberphoto, setMemberPhoto] = useState("")
    console.log('asas', memberphoto);
    const [memberformData, setMemberFormData] = useState({

        yourname: "",
        email: "",
        contactnum: "",
        languagecom: "",
        citytownv: "",
        country: "",
        materialsuse: "",
        materialsuseone: "",
        productrange: "",
        // formtwo
        townvilcity: "",
        stateval: "",
        addressdetails: "",
        contactnumber: "",
        emailid: "",
        socialsite: "",
        siteurl: "",
        socialsiteone: "",
        siteurlone: "",
        socialsitetwo: "",
        siteurltwo: "",
        socialsitethree: "",
        siteurlthree: "",
        // formthree
        websitename: "",
        Websiteurl: "",
        storename: "",
        storenameone: "",
        storenametwo: "",
        storeurl: "",
        storeurlone: "",
        storeurltwo: "",
        languagescomunit: "",
        //checkbox

    });

    const handleChange = (event) => {
        setMemberFormData({
            ...memberformData,
            [event.target.name]: event.target.value
        });
    };

    const uploadphoto = (e, flag) => {
        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = handleReaderLoaded.bind(this, flag);
            reader.readAsBinaryString(file);
        }
    };

    const handleReaderLoaded = (flag, e) => {

        let binaryString = e.target.result;
        if (flag == 'photo') {
            setMemberPhoto({
                base64Data: btoa(binaryString),
            });
        }
    };

    return (
        <div>
            <Header />
            <div className='container'>

                {activeStep === 1 ? <Memberformone
                    next={handleNext}
                    memberdata={memberformData}
                    uploadphoto={uploadphoto}
                    handleChange={handleChange}

                /> : ""}
                {activeStep === 2 ? <Memberformtwo
                    // handleChange={handleChange}
                    next={handleNext}
                    back={handleBack}

                /> : ""}
                {activeStep === 3 ? <Memformurl
                    // handleChange={handleChange}
                    next={handleNext}
                    back={handleBack}

                /> : ""}
            </div>
            <Footer />
        </div>
    )
}

export default MemerForm
