import React, { useState, useEffect } from 'react';
import './Allartisanlandingpage.css'
import Button from 'react-bootstrap/Button';
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Imagespic from '../Images/Imagespic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark, faMapLocationDot, faMapMarked, faMapMarker, faMarker } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from "react-loading";
import Select from 'react-select';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Allartisanlandingpage() {


    const [event_list, setevent_list] = useState([])
    const [isPageNation, setIsPageNation] = useState(false)
    const [fullEvent_list, setFullEvent_list] = useState([]);
    const [currentPageNation, setCurrentPageNation] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetcheventdetails();
    }, []);


    const [navbarClass, setNavbarClass] = useState('scrollbanner_height');
    const [hasNavScrolledtext, sethasNavScrolledtext] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [scrollY1, setScrollY1] = useState(-25);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY);
        setScrollY1(window.scrollY1);

        if (window.scrollY > 100) {
            setNavbarClass('navbar-yellow');
            sethasNavScrolledtext(true);
        } else {
            setNavbarClass('scrollbanner_height');
            sethasNavScrolledtext(false);
        }
    };

    const fetcheventdetails = () => {
        setIsLoading(true);
        // const token = sessionStorage.getItem('data')
        axios.get(`${apiURL}/UserMaster/UserMaster/artician_form_data_all_data_view`, {
            // axios.get("http://localhost:8000/UserMaster/UserMaster/artician_form_data_all_data_view", {
            headers: {
                "accept": "application/json",
                // 'Authorization': `Bearer ${token}`,
            }
        }).then(resp => {
            let currentDataLength = resp.data.data.length;
            if (currentDataLength > 9) {
                setFullEvent_list(resp.data.data);
                setevent_list(resp.data.data.slice(0, 9));
                setIsPageNation(true);
                let quotient = Math.floor(currentDataLength / 9);
                const remainder = currentDataLength % 9;
                if (remainder > 0) {
                    quotient = quotient + 1;
                }
                setPageCount(quotient)
                setIsLoading(false);
            }
            else {
                setevent_list(resp.data.data)
                setIsLoading(false);
            }
        })
            .catch(err => {
                setIsLoading(false);
                console.log(err)
            })
    }

    const fetchsearchartisandetails = () => {
        setIsLoading(true);
        var search_data = search;
        axios.get(`${apiURL}/UserMaster/UserMaster/artisan_search_data?search_query=${search_data}`, {
            headers: {
                "accept": "application/json",
            }
        }).then(resp => {
            let currentDataLength = resp.data.data.length;
            if (currentDataLength > 9) {
                setFullEvent_list(resp.data.data);
                setevent_list(resp.data.data.slice(0, 9));
                setIsPageNation(true);
                let quotient = Math.floor(currentDataLength / 9);
                const remainder = currentDataLength % 9;
                if (remainder > 0) {
                    quotient = quotient + 1;
                }
                setPageCount(quotient)
                setIsLoading(false);
            }
            else {
                setevent_list(resp.data.data)
                setIsLoading(false);
            }

        })
            .catch(err => {
                setIsLoading(false);
                console.log(err)
            })
    }

    const goToPrevious = () => {
        if (currentPageNation > 1) {
            let tempCurrentPageNation = currentPageNation - 1;
            setCurrentPageNation(tempCurrentPageNation);
            let endIndex = tempCurrentPageNation * 9;
            let startIndex = endIndex - 9;
            setevent_list(fullEvent_list.slice(startIndex, endIndex));
        }
    }
    const goToPagingNumber = (pagingnum) => {
        setCurrentPageNation(pagingnum);
        let endIndex = pagingnum * 9;
        let startIndex = endIndex - 9;
        if (endIndex > fullEvent_list.length) {
            endIndex = fullEvent_list.length;
        }
        setevent_list(fullEvent_list.slice(startIndex, endIndex));
    }
    const goToNext = () => {
        if (currentPageNation < pageCount) {
            let tempCurrentPageNation = currentPageNation + 1;
            setCurrentPageNation(tempCurrentPageNation);
            let startIndex = currentPageNation * 9;
            let endIndex = tempCurrentPageNation * 9;
            if (endIndex > fullEvent_list.length) {
                endIndex = fullEvent_list.length;
            }
            setevent_list(fullEvent_list.slice(startIndex, endIndex));
        }
    }

    const uploaImage = (e) => {
        let image1 = JSON.parse(e);
        return 'data:image;base64,' + image1.base64Data
    }

    const allartianlist = [
        {
            image: Imagespic.Allartisanfemale,
        },
        {
            image: Imagespic.Allartisanmale,
        },
        {
            image: Imagespic.Allartfe2,
        },
        {
            image: Imagespic.Allartisanmale,
        },

        {
            image: Imagespic.Allartfe2,
        },
        {
            image: Imagespic.Allartisanfemale,
        },

    ]

    let firstRow = 1;
    let secondRow = 2;
    let thirdRow = 3;

    const [selectedOptions, setSelectedOptions] = useState([
    ]);
    const [selectedcraft, setSelectedcraft] = useState([
    ]);
    const [selectedmeterialOptions, setSelectedmeterialOptions] = useState([
    ]);
    const [selectedstateOptions, setSelectedstateOptions] = useState([
    ]);

    // add data in dropdown

    // const handleSelectChange = (selectedValues) => {
    //     setSelectedOptions(selectedValues);
    // };

    const handleSelectChange = (selectedValues) => {

        const isValueSelected = selectedOptions.some((option) => option.label === selectedValues[0].value);
        if (!isValueSelected) {
            const newOption = {
                label: selectedValues[0].value,

            };
            setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, newOption]);
            setSelectedcraft((prevSelectedOptions) => [...prevSelectedOptions, newOption]);

        }

    };

    const handleSelectChange1 = (selectedValues) => {
        const isValueSelected = selectedOptions.some((option) => option.label === selectedValues[0].value);
        if (!isValueSelected) {
            const newOption1 = {
                label: selectedValues[0].value,

            };
            setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, newOption1]);
            setSelectedmeterialOptions((prevSelectedOptions) => [...prevSelectedOptions, newOption1]);
        }

    };

    // const handleSelectChange1 = (selectedValues) => {
    //     setSelectedmeterialOptions(selectedValues);
    // };

    const handleSelectChange2 = (selectedValues) => {
        const isValueSelected = selectedOptions.some((option) => option.label === selectedValues[0].value);
        if (!isValueSelected) {
            const newOption2 = {
                label: selectedValues[0].value,

            };
            setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, newOption2]);
            setSelectedstateOptions((prevSelectedOptions) => [...prevSelectedOptions, newOption2]);
        }

    };

    // const handleSelectChange2 = (selectedValues) => {
    //     setSelectedstateOptions(selectedValues);
    // };

    // Remove data
    const filterFirstDrpData = (removeValue) => {
        const updatedOptions = selectedOptions.filter((option) => option.label !== removeValue);

        if (selectedcraft.some((option) => option.label === removeValue)) {
            const updatedCraftOptions = selectedcraft.filter((option) => option.label !== removeValue);
            setSelectedcraft(updatedCraftOptions);
        } else if (selectedmeterialOptions.some((option) => option.label === removeValue)) {
            const updatedMaterialOptions = selectedmeterialOptions.filter((option) => option.label !== removeValue);
            setSelectedmeterialOptions(updatedMaterialOptions);
        } else if (selectedstateOptions.some((option) => option.label === removeValue)) {
            const updatedStateOptions = selectedstateOptions.filter((option) => option.label !== removeValue);
            setSelectedstateOptions(updatedStateOptions);
        }

        setSelectedOptions(updatedOptions);
    };

    // const filterFirstDrpData = (removeValue) => {
    //     const updatedOptions = selectedOptions.filter((option) => option.label !== removeValue);
    //     setSelectedOptions(updatedOptions);
    // };

    const filterSecondDrpData = (removeValue1) => {
        const updatedOptions = selectedmeterialOptions.filter((option) => option.label !== removeValue1);
        setSelectedmeterialOptions(updatedOptions);
    };

    const filterthirdDrpData = (removeValue2) => {
        const updatedOptions = selectedstateOptions.filter((option) => option.label !== removeValue2);
        setSelectedstateOptions(updatedOptions);
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
            "Tripuri textiles"
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
            "Embroidery on leather"
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
            "Warli painting"
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
        ],
        "Paper and Papier-mache Crafts": [
            "Papier-Mache",
            "Handmade paper",
            "Bahi – clothbound books",
            "Sanjhi – paper stencils",
            "Gambhira masks",
            "Handmade paper products",
            "Kite making",
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
            "Sitar – string instrument"
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
            "Garo bamboo house"
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
            "Raja-rani dolls"
        ],
        "Lac, Enamel and Wax Craft": [
            "Wood and lac turnery",
            "Meenakari – enamel work",
            "Lac ware",
            "Meenakari and kundan jewellery",
            "Lac bangles",
            "Lac products",
            "Menawati – candle making"
        ],
        "Glass, Beads and Gem Crafts": [
            "Kundan jadai – gem setting",
            "Meenakari and kundan jewellery",
            "Glass work",
            "Cut glass work",
            "Muthangi – pearl-studded attire",
            "Agate stone work",
            "Bead work"
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
            "Pathar kaam/Sompura kaam – stone carving"
        ],
        "Bone, Shell and Horn Crafts": [
            "Seep ka kaam – mother-of-pearl work",
            "Bone work",
            "Bone carving",
            "Seashell craft",
            "Horn carving",
            "Shimpla hast kala – seashell craft",
            "Tortosie shell and ivory carving",
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
            "Ambadi – sisal craft"
        ]

    };

    const options = Object.keys(optionsMap).map((category) => ({
        value: category,
        label: category,
    }));

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

    const options1 = Object.keys(optionsMap1).map((category) => ({
        value: category,
        label: category,
    }));


    const optionsMap2 = {
        "Andaman and Nicobar Islands": [
            "Andaman and Nicobar Islands",

        ],
        "Andhra Pradesh": [
            "Andhra Pradesh"
        ],
        "Arunachal Pradesh": [
            "Arunachal Pradesh"
        ],
        "Assam": [
            "Assam"
        ],
        "Bihar": [
            "Bihar"
        ],
        "Chandigarh": [
            "Chandigarh"
        ],
        "Chhattisgarh": [
            "Chhattisgarh"
        ],
        "Dadra & Nagar Haveli and Daman & Diu": [
            "Dadra & Nagar Haveli and Daman & Diu"
        ],
        "Goa": [
            "Goa"
        ],
        "Gujarat": [
            "Gujarat"
        ],
        "Haryana": [
            "Haryana"
        ],
        "Himachal Pradesh": [
            "Himachal Pradesh"
        ],
        "Jammu & Kashmir": [
            "Jammu & Kashmir"
        ],
        "Jharkhand": [
            "Jharkhand"
        ],
        "Karnataka": [
            "Karnataka"
        ],
        "Kerala": [
            "Kerala"
        ],
        "Ladakh": [
            "Ladakh"
        ],
        "Lakshadweep": [
            "Lakshadweep"
        ],
        "Madhya Pradesh": [
            "Madhya Pradesh"
        ],
        "Maharashtra": [
            "Maharashtra"
        ],
        "Manipur": [
            "Manipur"
        ],
        "Meghalaya": [
            "Meghalaya"
        ],
        "Mizoram": [
            "Mizoram"
        ],
        "Nagaland": [
            "Nagaland"
        ],
        "National Capital Territory (NCT), Delhi": [
            "National Capital Territory (NCT), Delhi"
        ],
        "Odisha": [
            "Odisha"
        ],
        "Puducherry": [
            "Puducherry"
        ],
        "Punjab": [
            "Punjab"
        ],
        "Rajasthan": [
            "Rajasthan"
        ],
        "Sikkim": [
            "Sikkim"
        ],
        "TamilNadu": [
            "TamilNadu"
        ],
        "Telangana": [
            "Telangana"
        ],
        "Tripura": [
            "Tripura"
        ],
        "Uttar Pradesh": [
            "Uttar Pradesh"
        ],
        "Uttarakhand": [
            "Uttarakhand"
        ],
        "West Bengal": [
            "West Bengal"
        ],
    };

    const options2 = Object.keys(optionsMap2).map((category) => ({
        value: category,
        label: category,
    }));

    const initialSelectedOption = options.find((option) => option.label === 'Craft');
    const initialSelectedOption1 = options1.find((option1) => option1.label === 'Meterial');
    const initialSelectedOption2 = options2.find((option2) => option2.label === 'State');

    useEffect(() => {
        fetchFilteredData();
    }, [selectedOptions, selectedmeterialOptions, selectedstateOptions]);

    const fetchFilteredData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                `${apiURL}/UserMaster/UserMaster/artisan_search_filter_data`,
                {
                    craft: selectedcraft.map((option) => option.label),
                    material: selectedmeterialOptions.map((option) => option.label),
                    state: selectedstateOptions.map((option) => option.label),
                }
            );
            let currentDataLength = response.data.data.length;
            if (currentDataLength > 9) {
                setFullEvent_list(response.data.data);
                setevent_list(response.data.data.slice(0, 9));
                setIsPageNation(true);
                let quotient = Math.floor(currentDataLength / 9);
                const remainder = currentDataLength % 9;
                if (remainder > 0) {
                    quotient = quotient + 1;
                }
                setPageCount(quotient)
                setIsLoading(false);
            }
            else {
                setevent_list(response.data.data)
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            console.error('Error fetching data:', error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            fetchsearchartisandetails();
        }
    };

    return (
        <div className='allartisancss'>
            <div id='myDiv' className='txtbacgroundimg'>
                <Header></Header>
                <div className="artisan_parallax" style={{ transform: `translateY(${scrollY1}px)`, }}>
                    <div className='parallax-content'>
                        <h1 className='text-center font-weight-bold hongkong-font' style={{ fontSize: '40px', marginTop: '70px' }}>Artisans</h1>

                        {/* <p className='text-center banner_text oppotunity_banner_small_text' >This is an open-source repository of various talented artisans in India. The catalogues reflect the potential of an artisan workshop who can be contacted after registration.</p> */}

                    </div>
                </div>
            </div>


            <Container>
                {/* <p class='mx-5 mt-5 px-5 mb-5' >
                    <Link to='https://www.inkmyweb.net/cd/' className='opportunity-link'>
                        <span style={{ fontSize: '14px', color: '#134f5c' }} className='evetop mx-1'>Home</span> </Link><span class='mx-1'>
                        <FontAwesomeIcon icon={faChevronRight} className='right-icons' />
                    </span>
                    <span class='mx-1 breadcrum_text'>Artisans list</span>
                </p> */}

                <div class="mx-4 mt-5 cd_breadcrumbs_container px-2 mb-5">
                    <span>
                        <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                        </span> &gt; <span class="breadcrumb_last" aria-current="page">Artisans</span>
                    </span>
                </div>
                <div className='txtmrgbottom dropdown_row mb-5'>
                    <div>
                        <p className='_texbannertbottom' >This is an open-source repository
                            of various talented artisans in India. The catalogues reflect the
                            potential of an artisan workshop who can be contacted after registration.
                            This space keeps getting updated with new catalogues and new artisans as the network grows.
                            <br />
                            During  the pandemic, catalogues were remotely created by
                            CD volunteers and students with the artisans, that helped many to sell their stocks. It is still a challenge for most artisans to create good catalogues for their products.</p>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-12 col-md-2'>
                            <Select
                                isMulti
                                className='without-box mobile-select-with'
                                options={options}
                                value={[]}
                                defaultValue={initialSelectedOption}
                                onChange={handleSelectChange}
                                placeholder="Craft"
                            />
                        </div>
                        <div className='col-12 col-md-2'>
                            <Select
                                isMulti
                                className='without-box mobile-select-with'
                                options={options1}
                                value={[]}
                                defaultValue={initialSelectedOption1}
                                onChange={handleSelectChange1}
                                placeholder="Material"
                            />
                        </div>
                        <div className='col-12 col-md-2'>
                            <Select
                                isMulti
                                className='without-box mobile-select-with'
                                options={options2}
                                value={[]}
                                defaultValue={initialSelectedOption2}
                                onChange={handleSelectChange2}
                                placeholder="States"
                            />
                        </div>

                        <div className='col-12 col-md-4 mt-3 mt-md-0'>
                            <input
                                type="text"
                                className="search-box mt-3"
                                placeholder="Search..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <FaSearch className="search-icon" onClick={fetchsearchartisandetails} />
                        </div>
                        <div className='col-12 col-md-2 mt-3 mt-md-0'>
                            <Button variant="warning" className='btnwant' href='/Artisan-Form'>Get listed here</Button>
                        </div>
                    </div>

                    <div className='row '>
                        <div className='col-12'>
                            <div class="d-flex align-content-start flex-wrap">
                                {selectedOptions.map((item01, index) => {
                                    return (
                                        <p className='drp-texttile '>
                                            <span>{item01.label}</span>
                                            <span className='drpclose' onClick={() => filterFirstDrpData(item01.label)}>x</span>
                                        </p>);
                                })}
                            </div>
                        </div>
                    </div>

                </div>


                {isLoading ? (
                    <div className='d-flex justify-content-center mt-5'>
                        <ReactLoading type="spin" color="#134f5c" height={100} width={50} />
                    </div>
                ) : (
                    <>
                        {event_list.length > 0 ?
                            <div className='container eventopp-container'>
                                <div className="row">
                                    <div className="col-12">
                                        <div class="">
                                            <div className="opportunity-cards-container">
                                                <div className="oppcard-container">
                                                    {event_list && event_list.map((event, key) => {
                                                        let imgHeight = "350px";
                                                        if ((key + 1) === 1) {
                                                            imgHeight = "350px";
                                                        }
                                                        else if ((key + 1) === 4) {
                                                            imgHeight = "200px";
                                                        }
                                                        else if ((key + 1) === 7) {
                                                            imgHeight = "300px";
                                                        }
                                                        if (firstRow == (key + 1)) {
                                                            firstRow = firstRow + 3;
                                                            const artisanid = String(event.id);

                                                            const encodedId = window.btoa(artisanid);
                                                            return (
                                                                <Link to={`/Artisanpage/${encodedId}`} state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>
                                                                    <div className="" key={event.id}>
                                                                        {JSON.parse(event.logo) !== '' ? (
                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag img-trasprant'
                                                                                    style={{ height: imgHeight }}
                                                                                    src={uploaImage(event.logo)}

                                                                                />
                                                                            </div>
                                                                        ) : <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag img-trasprant'
                                                                                style={{ height: imgHeight }}
                                                                                src={Imagespic.Frameicon}
                                                                            />
                                                                        </div>}

                                                                        <p className='artian-title-name mt-3'>{event.organization_name}</p>
                                                                        {event.your_city &&
                                                                            <div className='' style={{ display: 'flex' }}>
                                                                                <FaMapMarkerAlt className='cssheight map-icon' />
                                                                                <h6 className='artian-title-location mt-2'>{event.state ? `${event.your_city}, ${event.state}` : event.your_city}</h6>
                                                                            </div>
                                                                        }
                                                                        <h6 className='artian-sub-head mb-5'>{event.craft_practiced_under_the_category_2}</h6>
                                                                    </div>
                                                                </Link>
                                                            )
                                                        }
                                                        else {
                                                            return (<></>);
                                                        }

                                                    }
                                                    )}
                                                </div>
                                                <div className="oppcard-container">
                                                    {event_list && event_list.map((event, key) => {
                                                        let imgHeight = "350px";
                                                        if ((key + 1) === 2) {
                                                            imgHeight = "200px";
                                                        }
                                                        else if ((key + 1) === 5) {
                                                            imgHeight = "300px";
                                                        }
                                                        else if ((key + 1) === 8) {
                                                            imgHeight = "350px";
                                                        }
                                                        if (secondRow == (key + 1)) {
                                                            secondRow = secondRow + 3;
                                                            const artisanid = String(event.id);

                                                            const encodedId = window.btoa(artisanid);
                                                            return (
                                                                // <Link to={'/Artisanpage'} state={{ ID: event.id }} className='opp-card artisan-link' key={event.id}>
                                                                <Link to={`/Artisanpage/${encodedId}`} state={{ ID: event.id }} className='opp-card artisan-link' key={event.id}>
                                                                    <div className="" key={event.id}>
                                                                        {JSON.parse(event.logo) !== '' ? (
                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag img-trasprant'
                                                                                    style={{ height: imgHeight }}
                                                                                    src={uploaImage(event.logo)}
                                                                                // src={event.image}
                                                                                />
                                                                            </div>
                                                                        ) : <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag img-trasprant'
                                                                                style={{ height: imgHeight }}
                                                                                src={Imagespic.Frameicon}
                                                                            />
                                                                        </div>}
                                                                        <p className='artian-title-name mt-3'>{event.organization_name}</p>
                                                                        {event.your_city &&
                                                                            <div className='' style={{ display: 'flex' }}>
                                                                                <FaMapMarkerAlt className='cssheight map-icon' />
                                                                                <h6 className='artian-title-location mt-2'>{event.state ? `${event.your_city}, ${event.state}` : event.your_city}</h6>
                                                                            </div>
                                                                        }
                                                                        <h6 className='artian-sub-head mb-5'>{event.craft_practiced_under_the_category_2}</h6>
                                                                    </div>
                                                                </Link>
                                                            )
                                                        }
                                                        else {
                                                            return (<></>)
                                                        }
                                                    }
                                                    )}
                                                </div>
                                                <div className="oppcard-container">
                                                    {event_list && event_list.map((event, key) => {
                                                        let imgHeight = "350px";
                                                        if ((key + 1) === 3) {
                                                            imgHeight = "300px";
                                                        }
                                                        else if ((key + 1) === 6) {
                                                            imgHeight = "350px";
                                                        }
                                                        else if ((key + 1) === 9) {
                                                            imgHeight = "200px";
                                                        }
                                                        if (thirdRow == (key + 1)) {
                                                            thirdRow = thirdRow + 3;
                                                            const artisanid = String(event.id);

                                                            const encodedId = window.btoa(artisanid);
                                                            return (
                                                                // <Link to="/Artisanpage" state={{ eventid: 1 }}>
                                                                <Link to={`/Artisanpage/${encodedId}`} state={{ ID: event.id }} className='opp-cards artisan-link' key={event.id}>
                                                                    <div className="" key={event.id}>
                                                                        {JSON.parse(event.logo) !== '' ? (
                                                                            <div className=" opportunity-card-image">
                                                                                <img
                                                                                    alt='Event'
                                                                                    className='imgartimag img-trasprant'
                                                                                    style={{ height: imgHeight }}
                                                                                    src={uploaImage(event.logo)}
                                                                                // src={event.image}
                                                                                />
                                                                            </div>
                                                                        ) : <div className=" opportunity-card-image">
                                                                            <img
                                                                                alt='Event'
                                                                                className='imgartimag img-trasprant'
                                                                                style={{ height: imgHeight }}
                                                                                src={Imagespic.Frameicon}
                                                                            />
                                                                        </div>}
                                                                        <p className='artian-title-name mt-3'>{event.organization_name}</p>
                                                                        {event.your_city &&
                                                                            <div className='' style={{ display: 'flex' }}>
                                                                                <FaMapMarkerAlt className='cssheight map-icon' />
                                                                                <h6 className='artian-title-location mt-2'>{event.state ? `${event.your_city}, ${event.state}` : event.your_city}</h6>
                                                                            </div>
                                                                        }
                                                                        <h6 className='artian-sub-head mb-5'>{event.craft_practiced_under_the_category_2}</h6>
                                                                    </div>
                                                                </Link>
                                                            )
                                                        }
                                                        else {
                                                            return (<></>);
                                                        }

                                                    }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {isPageNation && (
                                    <div className="row">
                                        <div className="col-12">
                                            <nav
                                                aria-label="Page navigation example"
                                                className="pagination-nav d-flex justify-content-center"
                                                style={{ background: '#fff' }}
                                            >
                                                <ul className="pagination justify-content-center">
                                                    <li className={`page-item ${currentPageNation === 1 ? 'disabled' : ''}`}>
                                                        <a className="page-link" href="javascript:void(0)" tabIndex="-1" onClick={goToPrevious}>
                                                            Previous
                                                        </a>
                                                    </li>

                                                    {/* {currentPageNation == 1 && ( */}
                                                        <li className="page-item">
                                                            <a
                                                                style={{ background: '#dedede' }}
                                                                className="page-link active"
                                                                onClick={() => goToPagingNumber(currentPageNation)}
                                                                href="javascript:void(0)"
                                                            >
                                                                {currentPageNation}
                                                            </a>
                                                        </li>
                                                    {/* )} */}

                                                    <li className={`page-item ${currentPageNation === pageCount ? 'disabled' : ''}`}>
                                                        <a className="page-link" href="javascript:void(0)" onClick={goToNext}>
                                                            Next
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                )}


                                {/* {(() => {
                                    if (isPageNation) {
                                        return (<div className="row">
                                            <div className="col-12">
                                                <nav aria-label="Page navigation example" className="pagination-nav d-flex justify-content-center">
                                                    <ul className="pagination justify-content-center">
                                                        <li className="page-item ">
                                                            <a className="page-link" href="javascript:void(0)" tabindex="-1" onClick={goToPrevious}>Previous</a>
                                                        </li>
                                                        {[...Array(pageCount)].map((pagesize, i) => {
                                                            return (<li class="page-item"><a class="page-link" onClick={() => goToPagingNumber(i + 1)} href="javascript:void(0)">{i + 1}</a></li>);
                                                        })}
                                                        <li class="page-item">
                                                            <a class="page-link" href="javascript:void(0)" onClick={goToNext}>Next</a>
                                                        </li>
                                                    </ul>
                                                </nav>

                                            </div>
                                        </div>);
                                    }
                                })()
                               } */}
                            </div>
                            :
                            <div className={`container eventopp-container ${isLoading ? 'blurred-content' : ''}`}>
                                <p style={{ fontSize: '25px', textAlign: 'center', fontFamily: 'Roboto' }}>No Records Found</p>
                            </div>
                        }
                    </>
                )}
            </Container>
            <div className='txtbottomt'>
                <div><h6 className='textcenter'>Get listed in the artisan directory</h6></div>
                <div class='artisan-join mt-1'>
                    <Link to="/Artisan-Form">
                        <Button className='btnstyles footer_btn_color'>Join us</Button>
                    </Link> </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Allartisanlandingpage;