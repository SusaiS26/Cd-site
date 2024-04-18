import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation } from 'react-router-dom'
import Footer from '../Footer/footer'
import Formone from "./Formone";
import Formtwo from "./Formtwo";
import Formthree from "./Formthree";
import Memberformone from "../MemerForm/Memberformone";
import axios from 'axios';
import { apiURL } from "../Commen/apiurl"
import Swal from 'sweetalert2';
import Individual_Header from "../Header/new_header";

function ArtisanForm() {

  const [activeStep, setActiveStep] = useState(1);
  const location = useLocation();
  // const update = location.state.flag
  let ID = 0; 
  let update = 'I'
  try {
    const { id,flag } = location.state;
    ID = id;
    update = flag

  } catch (ex) { }

    console.log('id.....', ID,update)



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
    // handleCategoryChange()
  };

  const [artisanformData, setArtisanFormData] = useState({

    orginizationval: "",
    areyouval: "",
    yourname: "",
    brandname: "",
    bioorginization: "",
    aboutthecraft: "",
    acceptpracticed: "",
    acceptpracticedone: "",
    materialsuse: "",
    materialsuseone: "",
    productrange: "",
    craftother: "",
    materialother:"",


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
    socialsitefour: "",
    siteurlfour: "",
    socialsitefive: "",
    siteurlfive: "",

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
    artisancard: "",
    //checkbox

  });

  const [yourlogos, setYourLogos] = useState();
  const [b2B_formthree, setB2B_formthree] = useState([])
  const [b2c_formthree, setB2c_Formthree] = useState(false)
  const [ecommerce, setEcommerce] = useState(false)
  const [export_fthree, setExport_Fthree] = useState(false)
  const [retail, setRetail] = useState(false)
  const [Socialmedia, setSocialMedia] = useState(false)
  const [localmarket, setLocalMarket] = useState(false)
  const [other_fthree, setOther_Fthree] = useState(false)
  const [national, setNational] = useState([])
  const [stateaward, setstateaward] = useState(false)
  const [otheraward_fthree, setOtherAward_Fthree] = useState(false)
  const [notapplie, setnotapplie] = useState(false)
  const [zerotofive, setZerotoFive] = useState([])
  const [estore, setEstore] = useState([]);
  const [fivetoten, setFivetoTen] = useState(false)
  const [tentofifteen, settentoFifteen] = useState(false)
  const [artisanres, setArtisanRes] = useState("");
  const [artisanlogo, setArtisanLogo] = useState("")
  const [artisanlogotwo, setArtisanLogoTwo] = useState("")
  const [artisanlogodrop, setArtisanLogoDrop] = useState([])

  const [anyrecognition, setAnyRecognition] = useState("")
  const [areumaster, setAreuMaster] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedmaterials, setselectedmaterials] = useState("");
  const [firstcheck, setfirstcheck] = useState(false);
  const [secondcheck, setsecondcheck] = useState(false);
  const [threecheck, setthreecheck] = useState(false);
  const [agree, setagree] = useState(false)
  const [languageval, setLanguageval] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [inputKey, setInputKey] = useState(0);
  const inputRef = useRef()
  const [isLoading, setIsLoading] = useState(false);
  const [event_list, setevent_list] = useState([])
  const [acceptPracticedOneOptions, setAcceptPracticedOneOptions] = useState([]);
  const [materialsuseOneOptions, setMaterialsuseOneOptions] = useState([]);
  console.log('artisanlist', selectedCategory,selectedmaterials)


  const handleChange = (event) => {
    setArtisanFormData({
      ...artisanformData,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    if (ID != 0) {
      fetchartisandetails(ID);
    }

  }, []);
  const fetchartisandetails = (id) => {
    setIsLoading(true);
    axios.get(`${apiURL}/Get_all_module/get_by_id?id=${id}&Flag=Artisan`, {
      headers: {
        "accept": "application/json",
      }
    }).then(resp => {
      console.log('fetch....', resp)
      setevent_list(resp.data.data)
      setArtisanFormData({
        areyouval: resp.data.data.are_you, orginizationval: resp.data.data.organization_name, brandname: resp.data.data.organization_name,
        bioorginization: resp.data.data.bio_about_the_organization, aboutthecraft: resp.data.data.about_the_craft, acceptpracticedone: resp.data.data.craft_practiced_under_the_category_2,
        materialsuseone: resp.data.data.materials_used_for_the_craft_2, productrange: resp.data.data.product_range, townvilcity: resp.data.data.your_city, stateval: resp.data.data.state, addressdetails: resp.data.data.address,
        contactnumber: resp.data.data.contact_no, emailid: resp.data.data.Email_id, socialsite: resp.data.data.Add_Social_Site_1, siteurl: resp.data.data.site_url_1, socialsiteone: resp.data.data.Add_Social_Site_2, siteurlone: resp.data.data.site_url_2, socialsitetwo: resp.data.data.Add_Social_Site_3,
        siteurltwo: resp.data.data.site_url_3, socialsitethree: resp.data.data.Add_Social_Site_4, siteurlthree: resp.data.data.site_url_4, socialsitefour: resp.data.data.Add_Social_Site_5, siteurlfour: resp.data.data.site_url_5,
        websitename: resp.data.data.website_name, Websiteurl: resp.data.data.website_url,
      })
      handleCategoryChange(resp.data.data.craft_practiced_under_the_category_1)
      handleMaterialsChange(resp.data.data.materials_used_for_the_craft_1)
      setArtisanLogo(JSON.parse(resp.data.data.logo))
      setUploadedImages(JSON.parse(resp.data.data.files))
      setArtisanLogoTwo(JSON.parse(resp.data.data.image))
      setEstore(resp.data.data.Add_an_estore_you)
      let checked = resp.data.data.Add_an_estore_you ? resp.data.data.Add_an_estore_you : []
      console.log('dd',checked)
      checked.forEach((value) => {
        if (value === 'Add an e-store you sell at1') {
          setfirstcheck(true);
        } else if (value === 'Add an e-store you sell at2') {
          setsecondcheck(true);
        } else if (value === 'Add an e-store you sell at3') {
          setthreecheck(true);
        }
      });
      setNational(resp.data.data.your_products)
      setLanguageval(JSON.parse(resp.data.data.communicate_languages))
      setIsLoading(false);
    })
      .catch(err => {
        setIsLoading(false);
        console.log(err)
      })
  }

  const uploadlogo = (e, flag) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded.bind(this, flag);
      reader.readAsBinaryString(file);
    }
  };

  const handleReaderLoaded = (flag, e) => {
    let binaryString = e.target.result;
    if (flag == 'logo') {
      setArtisanLogo({
        base64Data: btoa(binaryString),
      });
    }
  };

  const uploadlogotwo = (e, flag) => {
    let file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = handleReaderLoadedtwo.bind(this, flag);
      reader.readAsBinaryString(file);
    }
  };

  const handleReaderLoadedtwo = (flag, e) => {
    let binaryString = e.target.result;
    if (flag == 'logotwo') {
      setArtisanLogoTwo({
        base64Data: btoa(binaryString),
      });
    }
  };






  const uploadlogodrop = (e) => {
    const files = e.target.files;
    const previews = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uniqueId = new Date().getTime();

      const reader = new FileReader();
      reader.onload = (event) => {
        previews.push({ id: uniqueId, file, base64: event.target.result });
        if (previews.length === files.length) {
          setUploadedImages((existingPreviews) => [...existingPreviews, ...previews]);
          setInputKey((prevKey) => prevKey + 1); // Increment the inputKey
          inputRef.current.value = ''; // Clear the input value
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDescriptionChange = (index, newDescription) => {
    const updatedImages = [...uploadedImages];
    updatedImages[index] = {
      ...updatedImages[index],
      description: newDescription,
    };
    setUploadedImages(updatedImages);
  };

  const handleCheckboxStore = (event) => {
    const valueToAddOrRemove = event.target.value;
    const name = event.target.name;
  
    if (name === 'Add an e-store you sell at1') {
      if (event.target.checked) {
        setfirstcheck(true);
      } else {
        setfirstcheck(false);
      }
    }
    if (name === 'Add an e-store you sell at2') {
      if (event.target.checked) {
        setsecondcheck(true);
      } else {
        setsecondcheck(false);
      }
    }
    if (name === 'Add an e-store you sell at3') {
      if (event.target.checked) {
        setthreecheck(true);
      } else {
        setthreecheck(false);
      }
    }
  
    if (event.target.checked) {
      setEstore([...estore, valueToAddOrRemove]);
    } else {
      setEstore(estore.filter((item) => item !== valueToAddOrRemove));
    }
  };

  // const handleCheckboxStore = (event) => {
  //   if (event && event.target) {
  //     const valueToAddOrRemove = event.target.value;
  //     if (event.target.name === 'Add an e-store you sell at1') {
  //       setfirstcheck(event.target.checked);
  //     } else if (event.target.name === 'Add an e-store you sell at2') {
  //       setsecondcheck(event.target.checked);
  //     } else if (event.target.name === 'Add an e-store you sell at3') {
  //       setthreecheck(event.target.checked);
  //     }

  //     const updatedEstore = [...estore];

  //     if (event.target.checked) {
  //       updatedEstore.push(valueToAddOrRemove);
  //     } else {
  //       const index = updatedEstore.indexOf(valueToAddOrRemove);
  //       if (index !== -1) {
  //         updatedEstore.splice(index, 1);
  //       }
  //     }

  //     setEstore(updatedEstore);
  //   }
  // };

  const handleChangecivildemo = (event) => {
    const valueToAddOrRemove = event.target.value;

    // Check if the value is already in the array
    if (national.includes(valueToAddOrRemove)) {
      // If it's in the array, remove it
      const newArray = national.filter(day => day !== valueToAddOrRemove);
      setNational(newArray);
    } else {
      // If it's not in the array, add it
      const newArray = [...national, valueToAddOrRemove];
      setNational(newArray);
    }
  };

  const handleChangerecognition = (event) => {
    const valueToAddOrRemove = event.target.value;

    // Check if the value is already in the array
    if (b2B_formthree.includes(valueToAddOrRemove)) {
      // If it's in the array, remove it
      const newArray = b2B_formthree.filter(day => day !== valueToAddOrRemove);
      setB2B_formthree(newArray);
    } else {
      // If it's not in the array, add it
      const newArray = [...b2B_formthree, valueToAddOrRemove];
      setB2B_formthree(newArray);
    }
  };
  const handleChangeyears = (event) => {
    const valueToAddOrRemove = event.target.value;
    // Check if the value is already in the array
    if (zerotofive.includes(valueToAddOrRemove)) {
      // If it's in the array, remove it
      const newArray = zerotofive.filter(day => day !== valueToAddOrRemove);
      setZerotoFive(newArray);
    } else {
      // If it's not in the array, add it
      const newArray = [...zerotofive, valueToAddOrRemove];
      setZerotoFive(newArray);
    }
  };

  const submitArtisanForm = async () => {

    var name = artisanformData.orginizationval.length > 0 ? artisanformData.orginizationval : artisanformData.yourname

    if (agree || (ID !=0)) {
      setIsLoading(true)
      var payloadform = {
        // 1stform
        "are_you": artisanformData.areyouval,
        "organization_name": name,
        // "organization_name": artisanformData.orginizationval,
        "bio_about_the_organization": artisanformData.bioorginization,
        "about_the_craft": artisanformData.aboutthecraft,
        "craft_practiced_under_the_category_1": selectedCategory,
        // "craft_practiced_under_the_category_2": artisanformData.acceptpracticedone,
        "craft_practiced_under_the_category_2": artisanformData.acceptpracticedone == 'Others' ? artisanformData.craftother : artisanformData.acceptpracticedone,
        "materials_used_for_the_craft_1": selectedmaterials,
        "materials_used_for_the_craft_2": artisanformData.materialsuseone === 'Others' ? artisanformData.materialother : artisanformData.materialsuseone,
        "product_range": artisanformData.productrange,
        "logo": JSON.stringify(artisanlogo),
        "files": JSON.stringify(uploadedImages),
        "image": JSON.stringify(artisanlogotwo),
        // 2nd form
        "your_city": artisanformData.townvilcity,
        "state": artisanformData.stateval,
        "address": artisanformData.addressdetails,
        "contact_no": artisanformData.contactnumber,
        "Email_id": artisanformData.emailid,
        "Add_Social_Site_1": artisanformData.socialsite,
        "site_url_1": artisanformData.siteurl,
        "Add_Social_Site_2": artisanformData.socialsiteone,
        "site_url_2": artisanformData.siteurlone,
        "Add_Social_Site_3": artisanformData.socialsitetwo,
        "site_url_3": artisanformData.siteurltwo,
        "Add_Social_Site_4": artisanformData.socialsitethree,
        "site_url_4": artisanformData.siteurlthree,
        "Add_Social_Site_5": artisanformData.socialsitefour,
        "site_url_5": artisanformData.siteurlfour,
        // 3rd form  
        "website_name": artisanformData.websitename,
        "website_url": artisanformData.Websiteurl,
        "Add_an_estore_you": estore,
        "your_products": national,
        "won_any_recognition": b2B_formthree,
        "practicing_the_craft": zerotofive,
        "communicate_languages": JSON.stringify(languageval),
        "involved_in_Craft": anyrecognition,
        "Are_you_a": areumaster,
        "Flag": update,
        id:ID,
        "store": [
          {
            "store_name": artisanformData.storename,
            "store_url": artisanformData.storeurl,
          }
        ],
        "store_name2": artisanformData.storenameone,
        "store_name3": artisanformData.storenametwo,
        "store_url2":artisanformData.storeurlone,
        "store_url3": artisanformData.storeurltwo
      }
      try {
        const response = await axios.post(`${apiURL}/UserMaster/UserMaster/artician_form_data`, payloadform, {
        });
        setIsLoading(false);
        setArtisanRes(response.data);
        showAlert();
      } catch (error) {
        console.log('Server response:', error.response);
        showAlerterr();
        setIsLoading(false);
      }
    } else {
      toast.error('Please Check Terms & Conditions')
    }
  };

  const showAlerterr = () => {
    Swal.fire({
      title: 'Profile Added Failed',
      // text: message,
      // icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#D19426',
      customClass: {
        confirmButton: 'addsubmitevent',
      },
    });
  };
  const showAlert = () => {
    Swal.fire({
      // title: 'Profile Added Successfully',
      title: 'Thank you for sharing your work with us, you will be added to our artisan directory soon!',
      // text: message,
      // icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#D19426',
      customClass: {
        confirmButton: 'addsubmitevent',
      },
    });
  };

  const handleCategoryChange = (e,flag) => {
    console.log('dddd',e,flag)
    if(flag == 'add'){
      const selectedCategory = e.target.value ;
      setSelectedCategory(selectedCategory);
  
      // Set the options for acceptpracticedone based on the selected category
      const optionsForAcceptPracticedOne = optionsMap[selectedCategory] || [];
      setAcceptPracticedOneOptions(optionsForAcceptPracticedOne);
    } else {
      const selectedCategory = e;
      setSelectedCategory(selectedCategory);
  
      // Set the options for acceptpracticedone based on the selected category
      const optionsForAcceptPracticedOne = optionsMap[selectedCategory] || [];
      setAcceptPracticedOneOptions(optionsForAcceptPracticedOne);
    }

  };

  const handleMaterialsChange = (e,flag) => {
    console.log('pppp',e,flag)
    if(flag == 'add1'){
      const selectedCategory = e.target.value;
      setselectedmaterials(selectedCategory);

      // Set the options for acceptpracticedone based on the selected category
      const optionsForAcceptPracticedOne = optionsMap1[selectedCategory] || [];
      setMaterialsuseOneOptions(optionsForAcceptPracticedOne);
    } else {
      const selectedCategory = e;
      setselectedmaterials(selectedCategory);
      // Set the options for acceptpracticedone based on the selected category
      const optionsForAcceptPracticedOne = optionsMap1[selectedCategory] || [];
      setMaterialsuseOneOptions(optionsForAcceptPracticedOne);
    }

  };

  const optionsMap = {
    "Handloom": [
      "Kaleen – knotted carpets",
      "Namda – felted rugs",
      "Gabba – embroidered rugs",
      "Khabdan – pile carpets",
      "Tsug-dul and tsug-gdan – woollen pile rugs",
      "Challi – woollen textiles",
      "Paabu – stitched boots",
      "Knitted socks",
      "Kullu shawls",
      "Galeecha – knotted carpets",
      "Panja dhurrie",
      "Nala",
      "Razai – quilt making",
      "Panja dhurrie weaving",
      "Camel trappings",
      "Tibetan carpets",
      "Kotpad sari",
      "Dongaria scarf – kapra gonda",
      "Silk garland making",
      "Bhavani dhurries",
      "Woollen druggets",
      "Rayon dhurrie",
      "Navalgund dhurrie",
      "Patola weaving",
      "Mashru weaving",
      "Patku weaving",
      "Sujuni weaving",
      "Pata weaving",
      "Eri silk spinning",
      "Loin loom weaving",
      "Mizo puan weaving",
      "Tripuri textiles",
      "Others"
    ],
    "Textile": [
      "Ajrakh printing",
      "Bagh block printing",
      "Bagru and Sanganer block printing",
      "Bandhani",
      "Bandhej and leheriya",
      "Dabu printing",
      "Kalamkari",
      "Mata Ni Pachedi",
      "Paagadu bandhu",
      "Patola weaving",
      "Rogan painting",
      "Sungadi",
      "Telia rumal",
      "Thanjavur Kalamkari ",
      "Thigma",
      "Others"
    ],
    "Embroidery": [
      "Applique",
      "Ari embroidery",
      "Banjara embroidery",
      "Chamba rumal",
      "Chikankari",
      "Dongaria scarf",
      "Gota work",
      "Kachchhi embroidery",
      "Kamdani and fardi ka kaam",
      "Kantha",
      "Kashidakari",
      "Kasuti ",
      "Khatwa",
      "Konglan",
      "Meghwal embroidery",
      "Paabu",
      "Phulkari and bagh",
      "Pipili appliqué",
      "Razai ",
      "Sujuni",
      "Tharu appliqué",
      "Toda embroidery",
      "Zardozi",
      "Embroidery on leather",
      "Others"
    ],
    "Paintings": [
      "Aipan",
      "Bhitti chitra",
      "Chamba painting",
      "Ganjappa cards",
      "Ganjifa cards",
      "Gesso painting",
      "Gond chitrakala",
      "Hill painting",
      "Jadupatua",
      "Madhubani",
      "Miniature painting",
      "Nirmal painting",
      "Painted scrolls of Cheriyal",
      "Pallagai padam",
      "Patachitra",
      "Phad painting",
      "Pichhwai",
      "Pithora painting",
      "Quitabat",
      "Surpur painting",
      "Talapatra khodai",
      "Thanjavur glass painting",
      "Thangka painting",
      "Usta kaam",
      "Hazaribagh Wall painting",
      "Warli painting",
      "Others"
    ],
    "Ceramic Work": [
      "Black pottery",
      "Black terracotta",
      "Blue pottery of Jaipur",
      "Clay relief work",
      "Clay toys",
      "Krishnanagar clay work",
      "Kumbhar kama",
      "Maati ro kaam",
      "Mitti da kaam",
      "Pottery of Khurja and Chinhat",
      "Painted terracotta",
      "Pressed clay work",
      "Surahi",
      "Terracotta of Pokharan",
      "Terracotta of Molela",
      "Terracotta of Sawai Madhopur",
      "Terracotta jewellery",
      "Gangaur idol making",
      "Thongjao pottery",
      "Others"
    ],
    "Paper and Papier-mache Crafts": [
      "Papier-Mache",
      "Handmade paper",
      "Bahi – clothbound books",
      "Sanjhi – paper stencils",
      "Gambhira masks",
      "Handmade paper products",
      "Kite making",
      "Others"
    ],
    "Wood work": [
      "Walnut wood carving",
      "Pinjrakari and khatumband – wood work",
      "Wood work of Dharamsala",
      "Carved and turned wood work",
      "Wood inlay of Hoshiarpur",
      "Wood and lac turnery",
      "Block making",
      "Tarkashi – metal inlay in wood",
      "Sandalwood carving",
      "Musical instruments",
      "Paatra kaam – utensil making",
      "Kavad – mobile shrines",
      "Likhai – wood carving",
      "Wooden toys",
      "Flexible fish – brass and wood",
      "Katho kama – wood carving",
      "Choktse – tables",
      "Gambhira masks",
      "Sherpai – measuring bowls",
      "Veena – string instrument ",
      "Nadaswaram – wind instrument",
      "Marapani – wood carving",
      "Vallam – boat making",
      "Laminated wood work and inlay",
      "Ship building",
      "Kathakali and Theyyam headgear",
      "Nettur petti – jewellery boxes",
      "Symmetric wood stringing",
      "Rosewood inlay",
      "Bhoota figures",
      "Kashta kari – wood carving",
      "Bullock cart making",
      "Wood with metal embossing",
      "Sankheda furniture",
      "Marquetry",
      "Mask making",
      "Sitar – string instrument",
      "Others"
    ],
    "Bamboo, Cane and Reed Crafts": [
      "Wicker work",
      "Basketry",
      "Pula chappal – grass footwear",
      "Khunda – bamboo staves",
      "Palm leaf work (basketry)",
      "Chik making",
      "Sarkanda work",
      "Bamboo flutes",
      "Cane furniture",
      "Moonj basketry",
      "Date palm craft",
      "Ringaal basketry",
      "Lantana furniture",
      "Sikki craft",
      "Straw craft",
      "Bamboo craft",
      "Sheetalpati – reed mats",
      "Maslond – grass mats",
      "Wooden toys of Kondapalli",
      "Wooden cutlery of Udayagiri",
      "Kora mat weaving",
      "Bamboo flute",
      "Palmyra basketry",
      "Maniche Kaam – bamboo craft",
      "Bamboo fish traps",
      "Vaaskaam – bamboo crafts",
      "Bamboo nesting baskets",
      "Coiled cane work",
      "Bamboo and cane bridges",
      "Flattened bamboo containers",
      "Apa Tani bamboo products",
      "Cane haversacks",
      "Kophi – cane baskets",
      "Kauna phak – reed mats",
      "Bamboo furniture of Katlamara",
      "Bamboo fences",
      "Bamboo rain shields",
      "Bamboo carrying baskets",
      "Garo bamboo house",
      "Others"
    ],
    "Metal Work": [
      "Copper Ware",
      "Lost wax metal casting",
      "Silver jewellery",
      "Thattar ka kaam – sheet metal work",
      "Brass ware",
      "Tarkashi – metal inlay in wood",
      "Silver ware",
      "Musical instruments",
      "Wrought iron work",
      "Damascening",
      "Metal engraving",
      "Koftgiri – weaponry",
      "Thewa – gold leaf work",
      "Naqqashi – engraving",
      "Zardozi – gold embroidery",
      "Carved wooden furniture",
      "Ebony wood carving",
      "Brass ware of Moradabad",
      "Varaq ka kaam – gold and silver foil work",
      "Sheet metal work",
      "Repoussé",
      "Tribal jewellery",
      "Dhokra – lost wax metal casting",
      "Flexible fish – brass and wood",
      "Brass and bell metal ware",
      "Brass ornaments",
      "Chandi tarkashi – silver filigree",
      "Ku – Buddhist figurines",
      "Beaten silver engraving",
      "Sherpai – measuring bowls",
      "Bidri ware",
      "Silver filigree",
      "Bronze casting",
      "Kavasam – sheet metal cladding",
      "Vilakku – brass lamps",
      "Brass repoussé",
      "Bell metal ware",
      "Aranmula kannadi – metal mirror",
      "Nettur petti – jewellery boxes",
      "Sheet metal embossing",
      "Otim kaam – brass ware",
      "Dhaatu kaam – copper ware",
      "Bell making",
      "Devru – embossed metal",
      "Tambaat kaam – copper and brass ware",
      "Uthavache kaam – metal embossing",
      "Metal dies and metal casting",
      "Taal, jhanjh, ghanta – brass musical instruments",
      "Iron craft",
      "Others"
    ],
    "Leather  Work": [
      "Embroidery on leather",
      "Jutti – leather footwear",
      "Mojari – leather footwear",
      "Musical instruments",
      "Katki chappal – leather footwear",
      "Leather craft",
      "Leather puppets",
      "Wood with metal embossing",
      "Silver ornaments",
      "Kolhapuri chappal – leather footwear",
      "Others"
    ],
    "Dolls and toys": [
      "Kullu Doll making",
      "Katputli – puppets",
      "Gangaur idol making",
      "Clay toys",
      "Wooden toys",
      "Cowdung toys",
      "Chhau mask",
      "Lac-coated toys",
      "Leather puppets",
      "Wooden toys of Kondapalli",
      "Raja-rani dolls",
      "Others"
    ],
    "Lac, Enamel and Wax Craft": [
      "Wood and lac turnery",
      "Meenakari – enamel work",
      "Lac ware",
      "Meenakari and kundan jewellery",
      "Lac bangles",
      "Lac products",
      "Menawati – candle making",
      "Others"
    ],
    "Glass, Beads and Gem Crafts": [
      "Kundan jadai – gem setting",
      "Meenakari and kundan jewellery",
      "Glass work",
      "Cut glass work",
      "Muthangi – pearl-studded attire",
      "Agate stone work",
      "Bead work",
      "Others"
    ],
    "Stone Work": [
      "Marble carving",
      "Stone carving",
      "Pacchikari – stone inlay of Agra",
      "Soft stone carving",
      "Shazar stone jewellery",
      "Pathar kama – stone work",
      "Soapstone utensils",
      "Soapstone sculpture",
      "Pathar kaam/Sompura kaam – stone carving",
      "Others"
    ],
    "Bone, Shell and Horn Crafts": [
      "Seep ka kaam – mother-of-pearl work",
      "Bone work",
      "Bone carving",
      "Seashell craft",
      "Horn carving",
      "Shimpla hast kala – seashell craft",
      "Tortosie shell and ivory carving",
      "Others"

    ],
    "Natural Fibers Crafts": [
      "Nettle fibre craft",
      "Rambaans – natural fibre craft",
      "Jute work",
      "Coconut shell carving",
      "Betel nut carving",
      "Talapatra khodai – palm leaf engraving",
      "Shola pith craft",
      "Coir craft",
      "Paddy and root craft",
      "Conch shell carving",
      "Jute craft",
      "Palm leaf work",
      "Root carving",
      "Ramacham root products",
      "Coconut based crafts",
      "Coir work",
      "Screw pine craft",
      "Areca palm leaf craft",
      "Mooda – rice packaging",
      "Ambadi – sisal craft",
      "Others"
    ]
  };


  const optionsMap1 = {
    "Natural Fibers": [
      "Bamboo",
      "Cane",
      "Sarkanda / Munj / Reed",
      "Sikki / Vettiver",
      "Kauna",
      "Kora",
      "Maslond",
      "Banana bark fiber",
      "Coconut shell",
      "Coconut fibers",
      "Coir",
      "Jute",
      "Toddy Palm Leaf",
      "Date Palm Leaf",
      "Palm Stem fiber",
      "Betelnut / Areca palm fiber",
      "Nettle fiber",
      "Sholapith",
      "Flowers",
      "Paddy straw",
      "Bottle Gourd"
    ],

    "Paper": [
      "Handmade Paper",
      "Papier-mache",
    ],
    "Bone, Shells, Horns": [
      "Bone",
      "Conch",
      "Horn",
      "Seashells"
    ],
    "Glass and Beads": [
      "Beads",
      "Cut glass",
      "Glass"
    ],
    "Precious metals and gems": [
      "Gold",
      "Silver",
      "Kundan",
      "Enamel",
      "Gold leaf",
      "Precious Stones",
      "Semi-precious metals and stones"
    ],
    "Lac, Wax and Enamel": [
      "Enamel",
      "Lac",
      "Wax"
    ],
    "Leather": [
      "Chrome Tan",
      "Vegetable Tan",
      "Synthetic Tan",
      "Vegan leather"
    ],
    "Metals": [
      "Copper",
      "Brass",
      "Bellmetal",
      "Iron",
      "Bronze",
      "Tin",
      "Wrought Iron",
      "Alloys"
    ],
    "Cotton": [
      "Kala Cotton",
      "Desi Cotton",
      "Better Cotton",
      "Organic Cotton"
    ],
    "Silk": [
      "Mulberry Silk",
      "Eri Silk",
      "Muga Silk",
      "Tussar Silk",
      "Ahimsa Silk",
      "Bamboo fiber blend",
      "Pineapple fiber blend"
    ],
    "Wool": [
      "Camel Wool",
      "Pashmina Wool",
      "Sheep Wool",
      "Yak Wool",
      "Desi Wool",
      "Merino Wool",
      "Acrylic Wool"
    ],
    "Linen": [
      "Linen and Cotton Blend",
      "Linen and Silk Mix",
      "Linen and Polyester Mix"
    ],
    "Wood": [
      "Teak Wood",
      "Mango Wood",
      "Sandalwood",
      "Walnut wood",
      "Acacia wood",
      "Pine Wood",
      "Cedar wood",
      "Rose Wood",
      "Industrial Wood"
    ],
    "Stone": [
      "Soap Stone",
      "Granite",
      "Marble",
      "Sandstone"
    ],
    "Clay, Ceramics and Cement": [
      "Earthenware",
      "Stoneware",
      "Porcelain",
      "Plaster of Paris",
      "Cement"
    ],
    "Dyes": [
      "Azo free dyes",
      "Natural dyes",
      "Chemical dyes",
    ],
    "Plastic": [
      "Plastic Rope",
      "Plastic Sheet",
      "Plastic Cane",
      "Plastic Tape"
    ],
    "Recycled": [
      "Recycled Fabric",
      "Recycled Rubber",
      "Recycled Plastic",
      "Recycled Packing Material",
      "Recycled Glass",
      "Recycled Metal"
    ]



  };


  return (
    <div>
      {/* <Header /> */}
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
          <div className='container' style={{ marginTop: '150px' }}>
            {activeStep === 1 ? <Formone

              arisandata={artisanformData}
              handleChange={handleChange}
              next={handleNext}
              yourlogos={yourlogos}
              uploadlogo={uploadlogo}
              uploadlogotwo={uploadlogotwo}
              uploadlogodrop={uploadlogodrop}
              uploadedImages={uploadedImages}
              setUploadedImages={setUploadedImages}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedmaterials={selectedmaterials}
              setselectedmaterials={setselectedmaterials}
              handleDescriptionChange={handleDescriptionChange}
              inputKey={inputKey}
              inputRef={inputRef}
              handleCategoryChange={handleCategoryChange}
              handleMaterialsChange={handleMaterialsChange}
              acceptPracticedOneOptions={acceptPracticedOneOptions}
              setAcceptPracticedOneOptions={setAcceptPracticedOneOptions}
              materialsuseOneOptions={materialsuseOneOptions}


            /> : ""}

            {activeStep === 2 ? <Formtwo
              next={handleNext}
              back={handleBack}
              arisandata={artisanformData}
              handleChange={handleChange}

            /> : ""}
            {activeStep === 3 ? <Formthree

              back={handleBack}
              arisandata={artisanformData}
              handleChange={handleChange}
              handleChangecivildemo={handleChangecivildemo}
              handleChangerecognition={handleChangerecognition}
              handleChangeyears={handleChangeyears}
              handleCheckboxStore={handleCheckboxStore}
              b2B_formthree={b2B_formthree}
              setB2B_formthree={setB2B_formthree}
              b2c_formthree={b2c_formthree}
              setB2c_Formthree={setB2c_Formthree}
              ecommerce={ecommerce}
              setEcommerce={setEcommerce}
              export_fthree={export_fthree}
              setExport_Fthree={setExport_Fthree}
              retail={retail}
              setRetail={setRetail}
              Socialmedia={Socialmedia}
              setSocialMedia={setSocialMedia}
              localmarket={localmarket}
              setLocalMarket={setLocalMarket}
              other_fthree={other_fthree}
              setOther_Fthree={setOther_Fthree}
              national={national}
              setNational={setNational}
              stateaward={stateaward}
              setstateaward={setstateaward}
              otheraward_fthree={otheraward_fthree}
              setOtherAward_Fthree={setOtherAward_Fthree}
              notapplie={notapplie}
              setnotapplie={setnotapplie}
              zerotofive={zerotofive}
              setZerotoFive={setZerotoFive}
              fivetoten={fivetoten}
              setFivetoTen={setFivetoTen}
              tentofifteen={tentofifteen}
              settentoFifteen={settentoFifteen}
              submitArtisanForm={submitArtisanForm}
              anyrecognition={anyrecognition}
              setAnyRecognition={setAnyRecognition}
              areumaster={areumaster}
              setAreuMaster={setAreuMaster}
              estore={estore}
              setestore={setEstore}
              firstcheck={firstcheck}
              setfirstcheck={setfirstcheck}
              secondcheck={secondcheck}
              threecheck={threecheck}
              agree={ID ? true : agree}
              setagree={ID ? true : setagree}
              languageval={languageval}
              setLanguageval={setLanguageval}
              // newID={ID}

            /> : ""}
          </div>
        </>
      )}
      <Footer />
    </div>
  )
}

export default ArtisanForm