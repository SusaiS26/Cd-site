import React, { useState, useRef } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './artisan_form.css'

function Formone(props) {

  const { arisandata, uploadedImages, uploadlogodrop, setUploadedImages, setselectedmaterials, selectedmaterials, inputKey, inputRef, selectedCategory, setSelectedCategory, handleChange, next, uploadlogo, uploadlogotwo, artisanformData, error, setError,
    handleDescriptionChange, handleCategoryChange, acceptPracticedOneOptions, handleMaterialsChange, materialsuseOneOptions } = props;
  // const { arisandata1, handleChange1, next1, uploadlogo1, uploadlogotwo1, uploadlogodrop1, error1, setError1 } = props;
  const [yourlogo, setYourLogo] = useState("");
  const [portfolio, setPortFolio] = useState("")
  const [catalogue, setCatalogue] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);

  console.log('sdddimage', uploadedImages)
  const [descriptionInputs, setDescriptionInputs] = useState([]);

  const [logo, setLogo] = useState(null);

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
      "Bottle Gourd",
      "Others"
    ],

    "Paper": [
      "Handmade Paper",
      "Papier-mache",
      "Others"
    ],
    "Bone, Shells, Horns": [
      "Bone",
      "Conch",
      "Horn",
      "Seashells",
      "Others"
    ],
    "Glass and Beads": [
      "Beads",
      "Cut glass",
      "Glass",
      "Others"
    ],
    "Precious metals and gems": [
      "Gold",
      "Silver",
      "Kundan",
      "Enamel",
      "Gold leaf",
      "Precious Stones",
      "Semi-precious metals and stones",
      "Others"
    ],
    "Lac, Wax and Enamel": [
      "Enamel",
      "Lac",
      "Wax",
      "Others"
    ],
    "Leather": [
      "Chrome Tan",
      "Vegetable Tan",
      "Synthetic Tan",
      "Vegan leather",
      "Others"
    ],
    "Metals": [
      "Copper",
      "Brass",
      "Bellmetal",
      "Iron",
      "Bronze",
      "Tin",
      "Wrought Iron",
      "Alloys",
      "Others"
    ],
    "Cotton": [
      "Kala Cotton",
      "Desi Cotton",
      "Better Cotton",
      "Organic Cotton",
      "Others"
    ],
    "Silk": [
      "Mulberry Silk",
      "Eri Silk",
      "Muga Silk",
      "Tussar Silk",
      "Ahimsa Silk",
      "Bamboo fiber blend",
      "Pineapple fiber blend",
      "Others"
    ],
    "Wool": [
      "Camel Wool",
      "Pashmina Wool",
      "Sheep Wool",
      "Yak Wool",
      "Desi Wool",
      "Merino Wool",
      "Acrylic Wool",
      "Others"
    ],
    "Linen": [
      "Linen and Cotton Blend",
      "Linen and Silk Mix",
      "Linen and Polyester Mix",
      "Others",
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
      "Industrial Wood",
      "Others",
    ],
    "Stone": [
      "Soap Stone",
      "Granite",
      "Marble",
      "Sandstone",
      "Others",
    ],
    "Clay, Ceramics and Cement": [
      "Earthenware",
      "Stoneware",
      "Porcelain",
      "Plaster of Paris",
      "Cement",
      "Others",
    ],
    "Dyes": [
      "Azo free dyes",
      "Natural dyes",
      "Chemical dyes",
      "Others",
    ],
    "Plastic": [
      "Plastic Rope",
      "Plastic Sheet",
      "Plastic Cane",
      "Plastic Tape",
      "Others",
    ],
    "Recycled": [
      "Recycled Fabric",
      "Recycled Rubber",
      "Recycled Plastic",
      "Recycled Packing Material",
      "Recycled Glass",
      "Recycled Metal",
      "Others",
    ]



  };
 
  const nextData = () => {
    const requiredAreYouValues = [
      'Social enterprise',
      'SHG',
      'Producer company',
      'NGO',
      'Co-operatives/society',
      'Social Enterprise'
    ];

    if (requiredAreYouValues.includes(arisandata.areyouval)) {
      if (arisandata.orginizationval) {
        if (selectedCategory && arisandata.acceptpracticedone) {
          if (selectedmaterials && arisandata.materialsuseone) {
            next();
          } else {
            toast.error('Please Select Materials used for the craft');
          }
        } else {
          toast.error('Please Select Your craft under the category');
        }
      } else {
        toast.error('Please Enter Organization Name');
      }
    } else if (arisandata.areyouval === 'Individual artisan / artisan family business') {
      if (arisandata.yourname) {
        if (selectedCategory && arisandata.acceptpracticedone) {
          if (selectedmaterials && arisandata.materialsuseone) {
            next()
          } else {
            toast.error('Please Select Materials used for the craft');
          }
        } else {
          toast.error('Please Select Your craft under the category');
        }
      } else {
        toast.error('Please Enter Your Name');
      }
    }
  }

    // const [selectedCategory, setSelectedCategory] = useState("");

    // const [acceptPracticedOneOptions, setAcceptPracticedOneOptions] = useState([]);

    const [acceptmaterialsuseOneOptions, setAcceptmaterialsuseOneOptions] = useState([])
    const [materialsuseone, setmaterialsuseone] = useState([])

    // const handleCategoryChange = (event) => {
    //   const selectedCategory = event.target.value;
    //   setSelectedCategory(selectedCategory);

    //   // Set the options for acceptpracticedone based on the selected category
    //   const optionsForAcceptPracticedOne = optionsMap[selectedCategory] || [];
    //   setAcceptPracticedOneOptions(optionsForAcceptPracticedOne);
    // };

    const handlesChanges = (event) => {
      // Handle changes in the acceptpracticedone dropdown here
    };

    // const [selectedmaterials, setselectedmaterials] = useState("");

    // const [materialsuseOneOptions, setMaterialsuseOneOptions] = useState([]);

    // const handleMaterialsChange = (event) => {
    //   const selectedCategory = event.target.value;
    //   setselectedmaterials(selectedCategory);

    //   // Set the options for acceptpracticedone based on the selected category
    //   const optionsForAcceptPracticedOne = optionsMap1[selectedCategory] || [];
    //   setMaterialsuseOneOptions(optionsForAcceptPracticedOne);
    // };

    const handleDeleteClick = (index) => {
      const newPreviews = [...uploadedImages];
      newPreviews.splice(index, 1);
      setUploadedImages(newPreviews);
    };


    return (
      <div className='container mt-5 formonecontain'>
        <ToastContainer toastOptions={{ position: "top-right" }} />
        <div className='col-12 row selectwrapper'>
          <label className='label-head areumrg'>Are you a <span className='required-color'> (required)</span></label>
          <select className='artisanarudrp' value={arisandata.areyouval} onChange={handleChange} name='areyouval'>
            <option>--Select--</option>
            <option>Co-operatives/society</option>
            <option>Individual artisan / artisan family business</option>
            <option>NGO</option>
            <option>Producer company</option>
            <option>SHG</option>
            <option>Social enterprise</option>
          </select>
        </div>
        {(arisandata.areyouval === 'Social enterprise' || arisandata.areyouval === 'SHG' || arisandata.areyouval === 'Producer company' || arisandata.areyouval === 'NGO' || arisandata.areyouval === 'Co-operatives/society' || arisandata.areyouval === 'Social Enterprise') &&
          <>
            <div className='boobbbb col-12 row' >
              <h3 className=' gsection_title mt-4'>Biography</h3>
            </div>

            <div className='col-12 row mt-3'>
              <label className='label-head'>Organization name <span className='required-color'> (required)</span></label>
              <input type='text' className='form-control' value={arisandata.orginizationval} name='orginizationval' onChange={handleChange} placeholder='Organization Name' />
            </div>

            {/* <div className='col-12 row mt-3'>
            <label className='label-head'>Your Logo / Photo of the team or makers</label>
            <input type='file' className='inputlogo file-change' onChange={(e) => uploadlogo(e, 'logo')} />

          </div> */}
            <div className="col-12 row mt-3">
              <label className="label-head">Your logo / photo of the team or makers</label>
              <input type="file" className="inputlogo file-change" onChange={(e) => uploadlogo(e, 'logo')} />
              {logo && (
                <div>
                  <img src={logo} alt="Uploaded Logo" style={{ maxWidth: '100px' }} />
                </div>
              )}
            </div>
            <div className='col-12 row mt-3'>
              <label className='label-head'>Bio - about the organization</label>
              <textarea type='text' className='text-area mb-3' placeholder='Write a little about the organization, its vision and speciality, the founders and the team, no. of artisans the organization works with, products made, etc' row='10' col='10' value={arisandata.bioorginization} name='bioorginization' onChange={handleChange}></textarea>
              {/* <p className='para-change'>Write a little about the organization,its vision and speciality,the founders and the team,no. of artisans the organization works with,products made,etc</p> */}
            </div>
            <div className='col-12 row mt-3'>
              <label className='label-head'>About the craft</label>
              <textarea type='text' className='text-area mb-3' placeholder='Write a little about the craft, its speciality, its history, processes involved, raw materials, etc.' row='10' col='10' value={arisandata.aboutthecraft} name='aboutthecraft' onChange={handleChange}></textarea>
              {/* <p className='para-change'>Write a little about the craft,its speciality,its history,processes involved,raw materials,etc.</p> */}
            </div>

            <div className='col-12 row mt-3'>
              <label className='label-head'>Portfolio images</label>
              <div className='upload-drop'>
                <p className='drop-text'>Drop files here or</p>
                <div className='fileimage'>
                  <div className='image-color'><span className='choseimg'>Choose image</span>
                    <input type='file' key={inputKey} ref={inputRef} className='form-control uploadf' onChange={(e) => uploadlogodrop(e, 'logodrop')} multiple />
                  </div>
                </div>
              </div>
              {/* //new */}
              {/* {uploadedImages.map((image, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <img src={image.url} alt={`Thumbnail ${index}`} className='thumbnail mt-5' />
                <p className='img-filename'>{image.name}</p>
                <FontAwesomeIcon icon={faTrash} className='img-delete-icon' onClick={() => handleDeleteClick(index)} />
              </div>
            ))} */}
              {uploadedImages.map((image, index) => (
                <div key={index} className='image-container'>
                  <img src={image.base64} alt={`Thumbnail ${index}`} className='thumbnail mt-5' />
                  <div className='image-description'>
                    {/* <p className='img-filename'>{image.name}</p> */}

                    <textarea type='text'
                      className='text-area custom-textarea mb-4 thumbnail-mobile mt-4'
                      placeholder='Enter the description'
                      rows='71' cols='60' style={{ height: "71px", fontFamily: "Roboto" }}
                      value={image.description}
                      onChange={(e) => handleDescriptionChange(index, e.target.value)}
                    />

                    {/* <textarea
                    className='img-description-input'
                    placeholder='Enter description'
                    value={descriptionInputs[index]}
                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                  /> */}
                  </div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='img-delete-icon'
                    onClick={() => handleDeleteClick(index)}
                    size="2x"
                  />
                </div>
              ))}
              {/* //end */}
              {/* {artisanlogodrop && artisanlogodrop.map((preview, index) => (
              <div key={index} style={{ display: 'flex' }}>
                <p
                  className='multiple-img-filename'
                >
                  {preview.file.name}
                </p>
                <FontAwesomeIcon icon={faTrash} className='img-delete-icon mb-2' onClick={() => handleDeleteClick(index)} />
              </div>
            ))} */}
              <p className='para-change'>Accepted file types: jpg, jpeg, png, Max. file size: 32 MB, Max. files: 5.</p>
            </div>

            <div className='col-12 row mt-3'>
              <label className='label-head'>Catalogue PDF</label>
              <input type='file' accept="application/pdf" className='inputlogo file-change' onChange={(e) => uploadlogotwo(e, 'logotwo')} />
            </div>

            <div className='col-12 row mt-3'>
              <label className='label-head'>Craft practised under the category <span className='required-color'> (required)</span></label>
            </div>
            <div className='col-12 row selectwrapperfour'>
              <div className='col-6 d-flex justify-content-between'>
                <select
                  className='artisanarudrpform'
                  value={selectedCategory}
                  name='acceptpracticed'
                  // onChange={handleCategoryChange}
                  onChange={(e)=>handleCategoryChange(e,'add')}

                >
                  <option value="" className='crafcate'>--Select craft category--</option>
                  {Object.keys(optionsMap).map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col-6' >
                <select
                  className='artisanarudrpform'
                  value={arisandata.acceptpracticedone}
                  name='acceptpracticedone'
                  onChange={handleChange}
                >
                  <option className='crafcate'>--Select craft name--</option>
                  {acceptPracticedOneOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>


              <div className='mt-4 craftcss'>
                {arisandata.acceptpracticedone === 'Others' && <>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter craft name'
                    value={arisandata.acceptpracticedone === 'Others' ? arisandata.craftother : ''}
                    name='craftother'
                    onChange={handleChange}
                  />
                </>}
              </div>
            </div>


            <div className='col-12 row mt-3'>
              <label className='label-head'>Materials used for the crafts <span className='required-color'> (required)</span></label>
            </div>
            <div className='col-12 row selectwrapperfour'>
              <div className='col-6 d-flex justify-content-between'>
                <select
                  className='artisanarudrpform'
                  value={selectedmaterials}
                  name='selectedmaterials'
                  // onChange={handleMaterialsChange}
                  onChange={(e)=>handleMaterialsChange(e,'add1')}
                >
                  <option value="" className='crafcate'>--Select material category--</option>
                  {Object.keys(optionsMap1).map((materials, index) => (
                    <option key={index} value={materials}>
                      {materials}
                    </option>
                  ))}
                </select>
              </div>

              <div className='col-6'>
                <select
                  className='artisanarudrpform'
                  value={arisandata.materialsuseone}
                  name='materialsuseone'
                  onChange={handleChange}
                >
                  <option className='crafcate'>--Select material name--</option>
                  {materialsuseOneOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className='mt-4 craftcss'>
                {arisandata.materialsuseone === 'Others' && <>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter material name'
                    name='materialother'

                    // value={arisandata.materialsuseone === 'Others' ? arisandata.materialother : ''}
                    value={arisandata.materialsuseone === 'Others' ? arisandata.materialother : ''}
                    // value={arisandata.materialother}
                    onChange={handleChange}
                  />
                </>}
              </div>
            </div>

            <div className='col-12 row mx-1 productmrg'>
              <label className='label-head '>Product range</label>
              <input type='text' className='form-control productrange' value={arisandata.productrange} name='productrange' onChange={handleChange} />
            </div>

            <div className='mt-5 mb-5'>
              <button
                onClick={nextData}
                className="bg-gradient-secondary-firstnext"
              >
                Next
              </button>
            </div>
          </>
        }
        {arisandata.areyouval === 'Individual artisan / artisan family business' &&
          <>
            <div className='boobbbb col-12 row' >
              <h3 className=' gsection_title mt-4'>Biography</h3>
            </div>
            <div className='col-12 row mt-3'>
              <label className='label-head'>Your name <span className='required-color'> (required)</span></label>
              <input type='text' className='form-control' value={arisandata.yourname} name='yourname' onChange={handleChange} placeholder='Your Name' />
            </div>
            <div className='col-12 row mt-3'>
              <label className='label-head'>Brand name <span className='required-color'></span></label>
              <input type='text' className='form-control' value={arisandata.brandname} name='brandname' onChange={handleChange} placeholder='Brand Name' />
            </div>
            <div className='col-12 row mt-3'>
              <label className='label-head'> Your photo </label>
              <input type='file' className='inputlogo file-change' onChange={(e) => uploadlogo(e, 'logo')} />
            </div>
            <div className='col-12 row mt-3'>
              <label className='label-head'>Bio - about you     </label>
              <textarea type='text' className='text-area mb-3' row='10' placeholder='Write a little about the organization, its vision and speciality, the founders and the team, no. of artisans the organization works with, products made, etc' col='10' value={arisandata.bioorginization} name='bioorginization' onChange={handleChange}></textarea>

            </div>
            <div className='col-12 row mt-3'>
              <label className='label-head'>About the craft</label>
              <textarea type='text' placeholder='Write a little about the craft, its speciality, its history, processes involved, raw materials, etc.' className='text-area mb-3' row='10' col='10' value={arisandata.aboutthecraft} name='aboutthecraft' onChange={handleChange}></textarea>

            </div>

            <div className='col-12 row mt-3'>
              <label className='label-head'>Portfolio images</label>
              <div className='upload-drop'>
                <p className='drop-text'>Drop files here or</p>
                <div className='fileimage'>
                  <div className='image-color'><span className='choseimg'>Choose image</span>
                    <input type='file' key={inputKey} ref={inputRef} className='form-control uploadf' onChange={(e) => uploadlogodrop(e, 'logodrop')} multiple />
                  </div>
                </div>
              </div>
              {/* //new */}
              {/* {uploadedImages.map((image, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <img src={image.url} alt={`Thumbnail ${index}`} className='thumbnail mt-5' />
                <p className='img-filename'>{image.name}</p>
                <FontAwesomeIcon icon={faTrash} className='img-delete-icon' onClick={() => handleDeleteClick(index)} />
              </div>
            ))} */}
              {uploadedImages.map((image, index) => (
                <div key={index} className='image-container'>
                  <img src={image.base64} alt={`Thumbnail ${index}`} className='thumbnail mt-5' />
                  <div className='image-description'>
                    {/* <p className='img-filename'>{image.name}</p> */}

                    <textarea type='text'
                      className='text-area custom-textarea mb-4 thumbnail-mobile mt-4'
                      placeholder='Enter the description'
                      rows='71' cols='60' style={{ height: "71px", fontFamily: "Roboto" }}
                      value={image.description}
                      onChange={(e) => handleDescriptionChange(index, e.target.value)}
                    />

                    {/* <textarea
                    className='img-description-input'
                    placeholder='Enter description'
                    value={descriptionInputs[index]}
                    onChange={(e) => handleDescriptionChange(index, e.target.value)}
                  /> */}
                  </div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className='img-delete-icon'
                    onClick={() => handleDeleteClick(index)}
                    size="2x"
                  />
                </div>
              ))}
              {/* //end */}
              {/* {artisanlogodrop && artisanlogodrop.map((preview, index) => (
              <div key={index} style={{ display: 'flex' }}>
                <p
                  className='multiple-img-filename'
                >
                  {preview.file.name}
                </p>
                <FontAwesomeIcon icon={faTrash} className='img-delete-icon mb-2' onClick={() => handleDeleteClick(index)} />
              </div>
            ))} */}
              <p className='para-change'>Accepted file types: jpg, jpeg, png, Max. file size: 32 MB, Max. files: 5.</p>
            </div>

            <div className='col-12 row mt-3'>
              <label className='label-head'>Catalogue PDF</label>
              <input type='file' accept="application/pdf" className='inputlogo file-change' onChange={(e) => uploadlogotwo(e, 'logotwo')} />
            </div>



            <div className='col-12 row mt-3'>
              <label className='label-head'>Craft practised under the category <span className='required-color'> (required)</span></label>
            </div>
            <div className='col-12 row selectwrapperfour'>
              <div className='col-6 d-flex justify-content-between'>
                <select
                  className='artisanarudrpform'
                  value={selectedCategory}
                  name='acceptpracticed'
                  onChange={(e)=>handleCategoryChange(e,'add')}

                >
                  <option value="" className='crafcate'>--Select craft category--</option>
                  {Object.keys(optionsMap).map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className='col-6' >
                <select
                  className='artisanarudrpform'
                  value={arisandata.acceptpracticedone}
                  name='acceptpracticedone'
                  onChange={handleChange}
                >
                  <option className='crafcate'>--Select craft name--</option>
                  {acceptPracticedOneOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>


              <div className='mt-4 craftcss'>
                {arisandata.acceptpracticedone === 'Others' && <>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter craft name'
                    value={arisandata.acceptpracticedone === 'Others' ? arisandata.craftother : ''}
                    name='craftother'
                    onChange={handleChange}
                  />
                </>}
              </div>
            </div>


            <div className='col-12 row mt-3'>
              <label className='label-head'>Materials used for the crafts <span className='required-color'> (required)</span></label>
            </div>
            <div className='col-12 row selectwrapperfour'>
              <div className='col-6 d-flex justify-content-between'>
                <select
                  className='artisanarudrpform'
                  value={selectedmaterials}
                  name='selectedmaterials'
                  // onChange={handleMaterialsChange}
                  onChange={(e)=>handleMaterialsChange(e,'add1')}
                >
                  <option value="" className='crafcate'>--Select material category--</option>
                  {Object.keys(optionsMap1).map((materials, index) => (
                    <option key={index} value={materials}>
                      {materials}
                    </option>
                  ))}
                </select>
              </div>

              <div className='col-6'>
                <select
                  className='artisanarudrpform'
                  value={arisandata.materialsuseone}
                  name='materialsuseone'
                  onChange={handleChange}
                >
                  <option className='crafcate'>--Select material name--</option>
                  {materialsuseOneOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>



              <div className='mt-4 craftcss'>
                {arisandata.materialsuseone === 'Others' && <>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter material name'
                    name='materialother'

                    // value={arisandata.materialsuseone === 'Others' ? arisandata.materialother : ''}
                    value={arisandata.materialsuseone === 'Others' ? arisandata.materialother : ''}
                    // value={arisandata.materialother}
                    onChange={handleChange}
                  />
                </>}


              </div>


            </div>


            <div className='col-12 row mt-3 productmrg'>
              <label className='label-head '>Product range</label>
            </div>
            <div className='col-12 row'>
              <input type='text' className='form-control ' value={arisandata.productrange} name='productrange' onChange={handleChange} />
            </div>

            <div className='mt-5 mb-5'>

              <button
                onClick={nextData}
                className="bg-gradient-secondary-firstnext px-3"
              >
                Next
              </button>
            </div>

          </>}
      </div >
    )
  }

  export default Formone