import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ModalImage from 'react-modal-image';
import './Artisanpage.css';
import { AiOutlineRight } from 'react-icons/fa';
import Imagespic from '../Images/Imagespic';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { BiPhone } from 'react-icons/bi';
import { IoMdMail } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';
import Footer from '../Footer/footer'
import Images from '../Images/Imagespic';
import Button from 'react-bootstrap/Button';
import { useNavigate, Link, useLocation, useParams } from "react-router-dom";
import { apiURL } from "../Commen/apiurl"
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Individual_Header from '../Header/new_header';
import { FaPhoneAlt } from 'react-icons/fa';
// import ArtianCatalogue from './ArtianCatalogue';
import ReactLoading from "react-loading";
import SocialArtisanShareModal from '../New/Artsian_socialshare';
// import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Artisanpage() {

    // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    const { artisanid } = useParams();

    let artisan_id = window.atob(artisanid);

    // const location = useLocation();
    // const eventid = location.state.ID;
    const [currentTab, setcurrentTab] = useState(1)

    const [artisanData, setArtisanData] = useState(''); // Initialize with an empty arraypro
    const [portfolio, setportfolio] = useState([])
    const [catalogue, setcatalogue] = useState({ base64Data: '' });
    const [numPages, setNumPages] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    // const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);




    const nextSlide = () => {
        if (currentSlide + 1 == portfolio.length) {
            setCurrentSlide(0);
        }
        else if (currentSlide < portfolio.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const previousSlide = () => {
        if (currentSlide == 0) {
            setCurrentSlide(portfolio.length - 1);
        }
        else if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };


    useEffect(() => {
        fetchArtisanData(artisan_id);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleDownloadClick = () => {
        if (catalogue && catalogue.base64Data) {
            const downloadLink = document.createElement('a');
            downloadLink.href = `data:image/png;base64,${catalogue.base64Data}`;
            downloadLink.download = 'catalogue.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    };

    const fetchArtisanData = (id) => {
        setIsLoading(true);
        axios.get(`${apiURL}/UserMaster/UserMaster/artician_form_data_id_data_view?id=${id}`)
            .then(response => {
                setArtisanData(response.data.data);
                setportfolio(JSON.parse(response.data.data.files))
                // setcatalogue(JSON.parse(response.data.data.image))
                setcatalogue(JSON.parse(response.data.data.image));
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching artisan data:", error);
                setIsLoading(false);
            });
    };

    const uploaImage = (e) => {
        let image1 = JSON.parse(e);
        return 'data:image;base64,' + image1.base64Data
    }

    const handleTabChange = (value) => {
        setcurrentTab(value)
    }

    const openShareModal = () => {
        setIsShareModalOpen(true);
    };
    const closeShareModal = () => {
        setIsShareModalOpen(false);
    };



    const [pdfUrl, setPdfUrl] = useState(null);

    useEffect(() => {
        const base64Data = catalogue.base64Data;

        async function convertBase64ToBlob() {
            try {
                const blob = await fetch(`data:application/pdf;base64,${base64Data}`)
                    .then((response) => response.blob());

                const pdfUrl = URL.createObjectURL(blob);
                setPdfUrl(pdfUrl);
            } catch (error) {
                console.error('Error converting Base64 to Blob:', error);
                setPdfUrl(null);
            }
        }

        if (base64Data) {
            convertBase64ToBlob();
        } else {
            setPdfUrl(null);
        }
    }, [catalogue.base64Data]);

    return (
        <div className='artisanindiv'>
            {/* <Header /> */}
            <Individual_Header />

            <div className='container artisan_top'>
                {/* <div>
                    <p className='rajashead left-align'>
                        <Link to='/artisan' > Artisans </Link> &gt; {artisanData.state} &gt; Phad Painting &gt; {artisanData.organization_name}
                    </p>
                </div> */}
            </div>
            {isLoading ? (
                <div className='d-flex justify-content-center mt-5'>
                    <ReactLoading type="spin" color="#134f5c" height={100} width={50} />
                </div>
            ) : (
                <>
                    <div className='container'>

                        <div class="mt-5 cd_breadcrumbs_container px-2 mb-5">
                            <span>
                                {/* <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                                </span> &gt;  <span><a href="/artisan">Artisans</a>
                                </span> */}
                                <span><a href="https://www.inkmyweb.net/cd/">Home</a>
                                </span> &gt;  <span><a href="/artisan">Artisans</a>
                                </span> &gt; <span>{artisanData.organization_name}</span>
                            </span>
                        </div>

                        <div className='row left-align'>
                            <div className='col-sm-2'></div>
                            <div className='col-sm-1'>
                                <h1><a className={currentTab == 1 ? 'tab-active' : 'non-active'} onClick={() => handleTabChange(1)}>About</a></h1>
                            </div>
                            <div className='col-sm-2'></div>
                            <div className='col-sm-1'>
                                <h1><a className={currentTab == 2 ? 'tab-active' : 'non-active'} onClick={() => handleTabChange(2)}>Portfolio </a></h1>
                            </div>
                            <div className='col-sm-2'></div>
                            <div className='col-sm-1'>
                                <h1><a className={currentTab == 3 ? 'tab-active' : 'non-active'} onClick={() => handleTabChange(3)}>Catalogue </a></h1>
                            </div>
                            <div className='col-sm-2'></div>
                        </div>
                    </div>
                </>
            )}
            {currentTab == 1 &&
                <>
                    {artisanData != '' &&
                        <div className='container artian-individual'>
                            <div className='row'>
                                <div className='col-md-5'>
                                    {JSON.parse(artisanData.logo) != '' ?
                                        <div>
                                            <img
                                                alt='Event'
                                                className='imgsize'
                                                // className='imgartimag'
                                                // style={{ height: '200px', width: 'auto' }}
                                                src={uploaImage(artisanData.logo)}
                                            // src={`data:image;base64,${event.event_image}`}
                                            />
                                        </div>
                                        : <div>
                                            <img
                                                alt='Event'
                                                className='imgsize'
                                                src={Imagespic.Frameicon}
                                            />
                                        </div>
                                    }

                                </div>

                                <div className='col-md-7'>
                                    <h4 className='artian-indi-name mt-3'>{artisanData.organization_name}</h4>
                                    {artisanData.your_city &&
                                        <div className='mt-2 mb-2 mx-0' style={{ display: 'flex' }}>
                                            <FaMapMarkerAlt className='cssheight map-icon' />
                                            <h6 className='artian-indivi-location mt-1'>{artisanData.state ?`${artisanData.your_city}, ${artisanData.state} `: artisanData.your_city}</h6>
                                        </div>
                                    }

                                    <div className='col-md-12 mb-4 mt-2' style={{ paddingLeft: '0px' }}>
                                        {artisanData.craft_practiced_under_the_category_1 && (
                                            <Button className='btnwantone met_craft_tags mx-2'>
                                                {artisanData.craft_practiced_under_the_category_1}
                                            </Button>
                                        )}

                                        {artisanData.craft_practiced_under_the_category_2 && (
                                            <Button className='btnwantone met_craft_tags mx-2'>
                                                {artisanData.craft_practiced_under_the_category_2}
                                            </Button>
                                        )}

                                        {artisanData.materials_used_for_the_craft_1 && artisanData.materials_used_for_the_craft_2 && (
                                            <>
                                                <Button className='btnwantone met_craft_tags mx-2'>
                                                    {artisanData.materials_used_for_the_craft_1}
                                                </Button>
                                                <Button className='btnwantone met_craft_tags mx-2'>
                                                    {artisanData.materials_used_for_the_craft_2}
                                                </Button>
                                            </>
                                        )}
                                    </div>

                                    <br />
                                    <div className='txtimtop mb-4'>

                                        {artisanData.site_url_2 && (
                                            <a href={artisanData.site_url_2}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className='' width="30" height="30" viewBox="0 0 35 35" fill="none">
                                                    <g clip-path="url(#clip0_489586_3622)">
                                                        <path d="M34.9897 0H0.0102539C0.00459083 0 0 0.00459083 0 0.0102539V34.9897C0 34.9954 0.00459083 35 0.0102539 35H34.9897C34.9954 35 35 34.9954 35 34.9897V0.0102539C35 0.00459083 34.9954 0 34.9897 0Z" fill="#134F5C" />
                                                        <path d="M19.6191 31.1719V10.7324C19.6191 9.29688 20.0293 8.33984 22.0117 8.33984H24.6094V4.0332C24.1309 3.96484 22.627 3.82812 20.8496 3.82812C17.1582 3.82812 14.6289 6.08398 14.6289 10.2539V31.1719H19.6191ZM24.4043 13.8086H10.3906V18.7305H23.7891" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_489586_3622">
                                                            <rect width="35" height="35" rx="3" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        )}

                                        {artisanData.site_url_4 && (
                                            <a href={artisanData.site_url_4}
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className='mx-5' width="30" height="30" viewBox="0 0 35 35" fill="none">
                                                    <g clip-path="url(#clip0_489586_3625)">
                                                        <path d="M34.9897 0H0.0102539C0.00459083 0 0 0.00459083 0 0.0102539V34.9897C0 34.9954 0.00459083 35 0.0102539 35H34.9897C34.9954 35 35 34.9954 35 34.9897V0.0102539C35 0.00459083 34.9954 0 34.9897 0Z" fill="#134F5C" />
                                                        <path d="M29.873 10.3907C29.0527 10.8008 28.0957 11.0743 27.1387 11.211C28.1641 10.5958 28.916 9.63872 29.3262 8.47661C28.3691 9.02349 27.3438 9.43364 26.25 9.63872C25.5061 8.87681 24.5352 8.37671 23.4829 8.21346C22.4306 8.05022 21.3538 8.23263 20.414 8.73334C19.4742 9.23404 18.7222 10.026 18.2707 10.9904C17.8193 11.9548 17.6927 13.0397 17.9102 14.0821C14.082 13.877 10.3906 12.0997 7.99805 9.02349C7.67249 9.54347 7.45308 10.1227 7.35247 10.7279C7.25186 11.3331 7.27204 11.9522 7.41184 12.5496C7.55165 13.1469 7.80831 13.7107 8.16704 14.2083C8.52576 14.706 8.97945 15.1278 9.50195 15.4493C8.75 15.4493 7.99805 15.3125 7.31445 14.9708C7.38281 17.2266 8.95508 19.209 11.1426 19.6875C10.459 19.8926 9.70703 19.8926 8.95508 19.7559C9.63867 21.7383 11.4844 23.1055 13.5352 23.1739C11.5527 24.8145 8.88672 25.5665 6.35742 25.1563C8.47104 26.5667 10.9374 27.3569 13.4771 27.4374C16.0168 27.5179 18.5283 26.8855 20.727 25.6118C22.9257 24.3381 24.7237 22.4741 25.9173 20.2309C27.111 17.9878 27.6525 15.4551 27.4805 12.92C28.4375 12.2364 29.2578 11.4161 29.873 10.3907Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_489586_3625">
                                                            <rect width="35" height="35" rx="3" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        )}

                                        {artisanData.site_url_1 && (
                                            <a
                                                href={artisanData.site_url_1}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" className='mx-2' height="30" viewBox="0 0 35 35" fill="none">
                                                    <g clip-path="url(#clip0_489586_3628)">
                                                        <path d="M8.87509 34.8762C6.79362 34.7816 5.66291 34.4352 4.91084 34.1418C3.91432 33.7538 3.20385 33.292 2.45594 32.5451C1.70803 31.7982 1.24513 31.0878 0.859215 30.0912C0.565875 29.3392 0.219485 28.2085 0.124825 26.127C0.0208042 23.877 0 23.2019 0 17.5016C0 11.8012 0.0228847 11.1271 0.123785 8.87509C0.218444 6.79362 0.566915 5.66499 0.858175 4.91084C1.24617 3.91432 1.70907 3.20385 2.4549 2.4549C3.20177 1.70803 3.91224 1.24409 4.9098 0.858175C5.66187 0.564835 6.79258 0.218444 8.87405 0.123785C11.1251 0.0208042 11.8012 0 17.4995 0C23.1998 0 23.8739 0.0228847 26.126 0.123785C28.2074 0.218444 29.336 0.566915 30.0902 0.858175C31.0867 1.24409 31.7972 1.70803 32.5451 2.4549C33.293 3.20177 33.7538 3.91328 34.1418 4.9098C34.4352 5.66187 34.7816 6.79258 34.8762 8.87405C34.9792 11.1261 35 11.8002 35 17.5005C35 23.1988 34.9792 23.8749 34.8762 26.127C34.7816 28.2085 34.4331 29.3392 34.1418 30.0912C33.7538 31.0878 33.292 31.7982 32.5451 32.5451C31.7982 33.292 31.0867 33.7538 30.0902 34.1418C29.3381 34.4352 28.2074 34.7816 26.126 34.8762C23.876 34.9792 23.1998 35 17.4995 35C11.8012 35 11.1251 34.9802 8.87509 34.8762Z" fill="#134F5C" />
                                                        <path d="M8.87509 34.8762C6.79362 34.7816 5.66291 34.4352 4.91084 34.1418C3.91432 33.7538 3.20385 33.292 2.45594 32.5451C1.70803 31.7982 1.24513 31.0878 0.859215 30.0912C0.565875 29.3392 0.219485 28.2085 0.124825 26.127C0.0208042 23.877 0 23.2019 0 17.5016C0 11.8012 0.0228847 11.1271 0.123785 8.87509C0.218444 6.79362 0.566915 5.66499 0.858175 4.91084C1.24617 3.91432 1.70907 3.20385 2.4549 2.4549C3.20177 1.70803 3.91224 1.24409 4.9098 0.858175C5.66187 0.564835 6.79258 0.218444 8.87405 0.123785C11.1251 0.0208042 11.8012 0 17.4995 0C23.1998 0 23.8739 0.0228847 26.126 0.123785C28.2074 0.218444 29.336 0.566915 30.0902 0.858175C31.0867 1.24409 31.7972 1.70803 32.5451 2.4549C33.293 3.20177 33.7538 3.91328 34.1418 4.9098C34.4352 5.66187 34.7816 6.79258 34.8762 8.87405C34.9792 11.1261 35 11.8002 35 17.5005C35 23.1988 34.9792 23.8749 34.8762 26.127C34.7816 28.2085 34.4331 29.3392 34.1418 30.0912C33.7538 31.0878 33.292 31.7982 32.5451 32.5451C31.7982 33.292 31.0867 33.7538 30.0902 34.1418C29.3381 34.4352 28.2074 34.7816 26.126 34.8762C23.876 34.9792 23.1998 35 17.4995 35C11.8012 35 11.1251 34.9802 8.87509 34.8762Z" fill="#134F5C" />
                                                        <path d="M13.2028 17.5749C13.2028 15.1813 15.1427 13.2403 17.5363 13.2403C19.93 13.2403 21.8709 15.1813 21.8709 17.5749C21.8709 19.9685 19.93 21.9095 17.5363 21.9095C15.1427 21.9095 13.2028 19.9685 13.2028 17.5749ZM10.8596 17.5749C10.8596 21.2625 13.8488 24.2516 17.5363 24.2516C21.2239 24.2516 24.213 21.2625 24.213 17.5749C24.213 13.8874 21.2239 10.8982 17.5363 10.8982C13.8488 10.8982 10.8597 13.8872 10.8597 17.5749H10.8596ZM22.9171 10.6335C22.917 10.9421 23.0084 11.2438 23.1798 11.5004C23.3511 11.7571 23.5947 11.9572 23.8798 12.0754C24.1648 12.1936 24.4786 12.2246 24.7813 12.1646C25.084 12.1045 25.362 11.956 25.5803 11.7379C25.7986 11.5197 25.9473 11.2418 26.0077 10.9391C26.068 10.6365 26.0372 10.3227 25.9192 10.0376C25.8013 9.75241 25.6014 9.50864 25.3448 9.33709C25.0883 9.16554 24.7867 9.07391 24.4781 9.07378H24.4775C24.0638 9.07397 23.6671 9.23834 23.3746 9.53078C23.082 9.82322 22.9175 10.2198 22.9171 10.6335ZM12.2833 28.1589C11.0156 28.1011 10.3265 27.89 9.86863 27.7116C9.26156 27.4752 8.82841 27.1937 8.37301 26.739C7.9176 26.2842 7.63571 25.8515 7.40041 25.2444C7.22191 24.7867 7.01075 24.0975 6.95312 22.8297C6.89008 21.4592 6.8775 21.0475 6.8775 17.5751C6.8775 14.1028 6.89112 13.6922 6.95312 12.3205C7.01085 11.0528 7.22357 10.3649 7.40041 9.90585C7.63675 9.29878 7.91823 8.86564 8.37301 8.41023C8.82779 7.95483 9.26052 7.67293 9.86863 7.43763C10.3263 7.25913 11.0156 7.04797 12.2833 6.99034C13.6539 6.9273 14.0656 6.91472 17.5363 6.91472C21.0071 6.91472 21.4192 6.92814 22.791 6.99055C24.0587 7.04828 24.7466 7.261 25.2056 7.43784C25.8127 7.67314 26.2458 7.95566 26.7012 8.41044C27.1566 8.86522 27.4375 9.29899 27.6738 9.90605C27.8523 10.3637 28.0635 11.053 28.1211 12.3207C28.1842 13.6924 28.1967 14.103 28.1967 17.5753C28.1967 21.0477 28.1842 21.4582 28.1211 22.83C28.0634 24.0977 27.8512 24.7867 27.6738 25.2446C27.4375 25.8517 27.156 26.2848 26.7012 26.7392C26.2464 27.1935 25.8127 27.4754 25.2056 27.7118C24.7479 27.8903 24.0587 28.1014 22.791 28.1591C21.4204 28.2221 21.0087 28.2347 17.5363 28.2347C14.064 28.2347 13.6534 28.2221 12.2833 28.1591V28.1589ZM12.1756 4.65101C10.7914 4.71405 9.84553 4.93353 9.0195 5.25496C8.16455 5.58689 7.43983 6.0322 6.71616 6.75473C5.99248 7.47727 5.54831 8.20208 5.21638 9.05807C4.89496 9.88463 4.67547 10.83 4.61244 12.2142C4.54836 13.6006 4.53369 14.0438 4.53369 17.5749C4.53369 21.106 4.54836 21.5492 4.61244 22.9356C4.67547 24.32 4.89496 25.2652 5.21638 26.0917C5.54831 26.9467 5.99259 27.6729 6.71616 28.3951C7.43973 29.1173 8.16351 29.562 9.0195 29.8949C9.84709 30.2163 10.7914 30.4358 12.1756 30.4988C13.5627 30.5618 14.0052 30.5776 17.5363 30.5776C21.0674 30.5776 21.5107 30.5629 22.8971 30.4988C24.2814 30.4358 25.2266 30.2163 26.0532 29.8949C26.9081 29.562 27.6328 29.1176 28.3565 28.3951C29.0802 27.6726 29.5234 26.9467 29.8563 26.0917C30.1777 25.2652 30.3982 24.3199 30.4602 22.9356C30.5233 21.5482 30.5379 21.106 30.5379 17.5749C30.5379 14.0438 30.5233 13.6006 30.4602 12.2142C30.3972 10.8299 30.1777 9.88411 29.8563 9.05807C29.5234 8.20312 29.079 7.47841 28.3565 6.75473C27.634 6.03106 26.9081 5.58689 26.0542 5.25496C25.2266 4.93353 24.2813 4.71301 22.8981 4.65101C21.5115 4.58766 21.0685 4.57227 17.5379 4.57227C14.0073 4.57227 13.5632 4.58693 12.1761 4.65101" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_489586_3628">
                                                            <rect width="35" height="35" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>
                                        )}

                                        {artisanData.site_url_3 && (
                                            <a
                                                href={artisanData.site_url_3}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" className='mx-5' height="30" viewBox="0 0 35 35" fill="none">
                                                    <g clip-path="url(#clip0_489586_3632)">
                                                        <path d="M32.4078 0.000976562H2.58344C1.15937 0.000976562 0 1.13082 0 2.52207V32.4733C0 33.8679 1.15937 34.9999 2.58344 34.9999H32.41C33.8373 34.9999 35 33.8679 35 32.4733V2.52207C35 1.13082 33.8373 0.000976562 32.4078 0.000976562Z" fill="#134F5C" />
                                                        <path d="M5.18992 13.1221H10.3907V29.8236H5.18992V13.1221ZM7.78648 4.80957C9.4457 4.80957 10.7943 6.15817 10.7943 7.81738C10.7943 9.4766 9.4457 10.8285 7.78758 10.8285C6.98942 10.8267 6.22443 10.509 5.65994 9.9447C5.09545 9.38042 4.77741 8.61554 4.77539 7.81738C4.77539 7.42212 4.8533 7.03072 5.00466 6.66559C5.15602 6.30045 5.37787 5.96872 5.65752 5.68938C5.93717 5.41004 6.26913 5.18855 6.63444 5.03759C6.99974 4.88662 7.39122 4.80914 7.78648 4.80957ZM13.638 13.1221H18.6168V15.4047H18.6857C19.3791 14.0922 21.0723 12.7075 23.6076 12.7075C28.8641 12.7075 29.8343 16.1671 29.8343 20.6635V29.8247H24.6466V21.7003C24.6466 19.7644 24.6116 17.2707 21.9495 17.2707C19.2479 17.2707 18.8323 19.3816 18.8323 21.5582V29.8203H13.6457V13.1188L13.638 13.1221Z" fill="white" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_489586_3632">
                                                            <rect width="35" height="35" fill="white" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </a>

                                        )}

                                        {artisanData.site_url_5 && (
                                            <a
                                                href={artisanData.site_url_5}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="65" style={{ marginTop: "23px" }} viewBox="0 0 1735 1735" fill="none">
                                                    <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" fill="#134F5C" style={{ marginTop: "5px" }} ></path>
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                    <div className='row'>

                                        {artisanData.website_name && artisanData.website_url && (
                                            <div className='col-md-6 mt-4 contact-list'>
                                                <a href={artisanData.website_url} className=' icon-title ' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333333' }}>
                                                    <BiWorld className='cssheightworld mr-3' />
                                                    {artisanData.website_name}
                                                </a>
                                            </div>
                                        )}

                                        {!artisanData.website_name && artisanData.website_url && (
                                            <div className='col-md-6 mt-4 contact-list'>
                                                <a href={artisanData.website_url} target="_blank" rel="noopener noreferrer">
                                                    <BiWorld className='cssheightworld' />
                                                    <p className='mx-3 icon-title'>{artisanData.website_url}</p>
                                                </a>
                                            </div>
                                        )}
                                        {artisanData.contact_no &&
                                            < div className='col-md-6 mt-3 contact-list'>
                                                <FaPhoneAlt className='cssheightworlds mt-2' /> <p className='mx-3 icon-title'>{artisanData.contact_no}</p>
                                            </div>
                                        }
                                        {/* {artisanData.Email_id &&
                                            <div className='col-md-6 mt-4 contact-list'>
                                                <IoMdMail className='cssheightworld' /><p className='mx-3 icon-title'>{artisanData.Email_id}</p>
                                            </div>
                                        } */}
                                        {artisanData.Email_id && (
                                            <div className='col-md-6 mt-4 contact-list'>
                                                <IoMdMail className='cssheightworld' />
                                                <a href={`mailto:${artisanData.Email_id}`} className='mx-3 icon-title' style={{ textDecoration: 'none', color: '#333333' }}>
                                                    {artisanData.Email_id}
                                                </a>
                                            </div>
                                        )}
                                        {artisanData.store[0].store_name && artisanData.store[0].store_url && (
                                            <div className='col-md-6 mt-4 contact-list'>
                                                <a href={artisanData.store[0].store_url} className=' icon-title' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333333' }}>
                                                    <FaShoppingBag className='cssheightworld mr-3' />
                                                    {artisanData.store[0].store_name}
                                                </a>
                                            </div>
                                        )}

                                        <div className='col-md-6'></div>
                                        <div className='col-md-4'>
                                            <div className='col-md-2'></div>

                                            {artisanData.store_name2 && artisanData.store_url2 && (

                                                <a href={artisanData.store_url2} className=' icon-title' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333333' }}>

                                                    {artisanData.store_name2}
                                                </a>
                                            )}
                                        </div>

                                        <div className='col-md-6'></div>
                                        <div className='col-md-4 mt-2'>
                                            <div className='col-md-2'></div>
                                            {artisanData.store_name3 && artisanData.store_url3 && (
                                                <a href={artisanData.store_url3} className=' icon-title' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333333' }}>
                                                    {artisanData.store_name3}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='container'>
                        {(artisanData.bio_about_the_organization || artisanData.about_the_craft) &&
                            <div className='row left-align mt-2'>
                                <div className='col-sm-2'></div>
                                <div className='col-md-8'>
                                    <h1 className='akalyanj mb-5'>About {artisanData.organization_name}</h1>
                                    <div className=''>
                                        <p className='fontsizeart'>{artisanData.bio_about_the_organization}</p>
                                    </div>
                                    {artisanData.about_the_craft && artisanData.craft_practiced_under_the_category_1 &&
                                        <>
                                            <h1 className='akalyanj mt-5'>About {artisanData.craft_practiced_under_the_category_1}</h1>
                                            <div className=''>
                                                <p className='fontsizeart'>{artisanData.about_the_craft}</p>
                                            </div>
                                        </>}
                                </div>
                                <div className='col-sm-2'>
                                    <Button className='btnshare' onClick={openShareModal}>Share</Button>
                                </div>
                            </div>
                        }
                    </div>
                </>
            }
            {currentTab == 2 &&
                <>
                    <div className='container'>
                        {portfolio != "" ?
                            <div class="custom-image-slider">
                                {portfolio && portfolio.map((preview, index) => (
                                    <div key={index}>
                                        <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                                            <ModalImage
                                                small={preview.base64}
                                                medium={preview.base64}
                                                large={preview.base64}
                                                className="carousel-img"
                                                alt={`Image ${index}`}
                                            />
                                            <p className='portfolio-description'>{preview.description}</p>
                                            <div class="carousel-caption">
                                                <p className='page-portfolio'>{index + 1} of {portfolio.length}</p>
                                            </div>
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target={`#demo #carousel-item-${index}`}
                                            data-bs-slide="prev"
                                            onClick={previousSlide}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="50" viewBox="0 0 56 50" fill="none">
                                                <path d="M27.8876 46.9426L2.44434 24.1445L27.9018 1.33375" stroke="#333333" stroke-width="2.96429" />
                                            </svg>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target={`#demo #carousel-item-${index}`}
                                            data-bs-slide="next"
                                            onClick={nextSlide}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="50" viewBox="0 0 56 50" fill="none">
                                                <path d="M25.8018 2.05647L51.2451 24.8545L25.7876 47.6653" stroke="#333333" stroke-width="2.96429" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}

                            </div>
                            :
                            <h2>No Portfolio  Images</h2>
                        }
                    </div>
                </>
            }

            {
                currentTab == 3 &&
                <div className='container'>
                    <div className='col-lg-12 row mt-2 mb-4'>
                        {catalogue.base64Data != '' ?
                            <>
                                <iframe src={pdfUrl} width="100%" height="800" title="PDF Viewer" />
                            </> :
                            <h2>No Catalogue Pdf</h2>
                        }
                    </div>
                </div>
            }
            <Footer></Footer>
            <>
                <SocialArtisanShareModal
                    isOpen={isShareModalOpen}
                    onClose={closeShareModal}
                    shareUrl={`https://app.creativedignity.org/Artisanpage/${artisanid}`}
                    title={artisanData.organization_name}
                    artisan_id={artisanid}
                />
            </>
        </div >
    )
}

export default Artisanpage