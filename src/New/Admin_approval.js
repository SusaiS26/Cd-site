import React, { useState, useEffect } from 'react';
import './Admin_approval.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { apiURL } from '../Commen/apiurl';
import axios from 'axios';
import Swal from 'sweetalert2';
import ReactLoading from "react-loading";
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Admin_approval() {

  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.clear()
    navigate("/")
  };

  const [activeCity, setActiveCity] = useState('Artisan');
  const [event_list, setEventList] = useState([]);
  const [member_date, setmember_data] = useState([])
  const [artisan_list, setartisan_list] = useState([])
  const [opportunity_list, setopportunity_list] = useState([])
  const [volunteer_list, setVolunteer_list] = useState([])
  const [isPageNation, setIsPageNation] = useState(false)
  const [fullEvent_list, setFullEvent_list] = useState([]);
  const [currentPage, setCurrentPageNation] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [smallerStatus, setSmallerStatus] = useState("All");
  const [volunteerStatus, setVolunteerStatus] = useState("All");
  const [opportunityStatus, setOpportunityStatus] = useState("All");
  const [eventStatus, setEventStatus] = useState("All");
  const [artisanStatus, setArtisanStatus] = useState("All");
  const [memberStatus, setMemberStatus] = useState("All");
  const [artisansearch, setartisanSearch] = useState("");
  const [membersearch, setmemberSearch] = useState("");
  const [eventsearch, seteventSearch] = useState("");
  const [opportunitysearch, setopportunitySearch] = useState("");
  const [volunteersearch, setvolunteerSearch] = useState("");
  const [smallersearch, setsmallerSearch] = useState("");

  //Smaller 
  const [smaller_list, setSmallerList] = useState([]);
  const [isSmallerPagination, setIsSmallerPagination] = useState(false);
  const [currentPageSmaller, setCurrentPageSmaller] = useState(1);
  const [smallerPageCount, setSmallerPageCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [issmallerModalOpen, setIssmallerModalOpen] = useState(false);
  const [SmallerId, setSmallerId] = useState(null);
  const [SmallermodalAction, setSmallerModalAction] = useState(null);

  const opensmallerModal = (id, action) => {
    setSmallerId(id);
    setSmallerModalAction(action);
    setIssmallerModalOpen(true);
  };

  const closesmallerModal = () => {
    setIssmallerModalOpen(false);
  };
  const handleSmallerModalAction = (action) => {
    if (action === 'Approve') {
      axios.post(`${apiURL}/UserMaster/smaller_Approval?id=${SmallerId}`)
        .then((response) => {
          Swal.fire('Smaller Form Approved', '', 'success');
          setIssmallerModalOpen(false);
          fetchsmallerdetails();
        })
        .catch((error) => {
          setIssmallerModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
    else {
      axios.post(`${apiURL}/UserMaster/reject_forms?id=${SmallerId}&form=Smaller`)
        .then((response) => {
          Swal.fire('Smaller Form Rejected', '', 'success');
          setIssmallerModalOpen(false);
          fetchsmallerdetails();
        })
        .catch((error) => {
          setIssmallerModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
  }

  //event

  const [isEventPagination, setIsEventPagination] = useState(false);
  const [currentPageEvent, setCurrentPageEvent] = useState(1);
  const [EventPageCount, setEventPageCount] = useState(0);
  const [iseventModalOpen, setIseventModalOpen] = useState(false);
  const [EventId, setEventId] = useState(null);
  const [EventmodalAction, setEventModalAction] = useState(null);
  const openeventModal = (id, action) => {
    setEventId(id);
    setEventModalAction(action);
    setIseventModalOpen(true);
  };
  const closeeventModal = () => {
    setIseventModalOpen(false);
  };
  const handleEventModalAction = (action) => {
    if (action === 'Approve') {
      axios.post(`${apiURL}/UserMaster/event_Approval?id=${EventId}`)
        .then((response) => {
          Swal.fire('Event Form Approved', '', 'success');
          setIseventModalOpen(false);
          fetcheventdetails()
        })
        .catch((error) => {
          setIseventModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
    else {
      axios.post(`${apiURL}/UserMaster/reject_forms?id=${EventId}&form=Event`)
        .then((response) => {
          Swal.fire('Event Form Rejected', '', 'success');
          setIseventModalOpen(false);
          fetcheventdetails()
        })
        .catch((error) => {
          setIseventModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
  }

  //opportunity

  const [isOpportunityPagination, setIsOpportunityPagination] = useState(false);
  const [currentPageOpportunity, setCurrentPageOpportunity] = useState(1);
  const [OpportunityPageCount, setOpportunityPageCount] = useState(0);
  const [isopportunityModalOpen, setIsopportunityModalOpen] = useState(false);
  const [OpportunityId, setOpportunityId] = useState(null);
  const [OpportunitymodalAction, setOpportunityModalAction] = useState(null);
  const openopportunityModal = (id, action) => {
    setOpportunityId(id);
    setOpportunityModalAction(action);
    setIsopportunityModalOpen(true);
  };
  const closeopportunityModal = () => {
    setIsopportunityModalOpen(false);
  };
  const handleOpportunityModalAction = (action) => {
    if (action === 'Approve') {
      axios.post(`${apiURL}/UserMaster/opportunity_Approval?id=${OpportunityId}`)
        .then((response) => {
          Swal.fire('Opportunity Form Approved', '', 'success');
          setIsopportunityModalOpen(false);
          fetchsmallerdetails();
        })
        .catch((error) => {
          setIsopportunityModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
    else {
      axios.post(`${apiURL}/UserMaster/reject_forms?id=${OpportunityId}&form=Opportunity`)
        .then((response) => {
          Swal.fire('Opportunity Form Rejected', '', 'success');
          setIsopportunityModalOpen(false);
          fetchVolunteerdetails();
        })
        .catch((error) => {
          setIsopportunityModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
  }

  //Volunteer

  const [isVolunteerPagination, setIsVolunteerPagination] = useState(false);
  const [currentPageVolunteer, setCurrentPageVolunteer] = useState(1);
  const [VolunteerPageCount, setVolunteerPageCount] = useState(0);
  const [isvolunteerModalOpen, setIsvolunteerModalOpen] = useState(false);
  const [VolunteerId, setVolunteerId] = useState(null);
  const [VolunteermodalAction, setVolunteerModalAction] = useState(null);

  const openvolunteerModal = (id, action) => {
    setVolunteerId(id);
    setVolunteerModalAction(action);
    setIsvolunteerModalOpen(true);
  };

  const closevolunteerModal = () => {
    setIsvolunteerModalOpen(false);
  };
  const handleVolunteerModalAction = (action) => {
    if (action === 'Approve') {
      axios.post(`${apiURL}/UserMaster/volunteer_Approval?id=${VolunteerId}`)
        .then((response) => {
          Swal.fire('Volunteer Form Approved', '', 'success');
          setIsvolunteerModalOpen(false);
          fetchVolunteerdetails();
        })
        .catch((error) => {
          setIsvolunteerModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
    else {
      axios.post(`${apiURL}/UserMaster/reject_forms?id=${VolunteerId}&form=Volunteer`)
        .then((response) => {
          Swal.fire('Volunteer Form Rejected', '', 'success');
          setIsvolunteerModalOpen(false);
          fetchVolunteerdetails();
        })
        .catch((error) => {
          setIsvolunteerModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
  }

  // Member

  const [isMemberPagination, setIsMemberPagination] = useState(false);
  const [currentPageMember, setCurrentPageMember] = useState(1);
  const [MemberPageCount, setMemberPageCount] = useState(0);
  const [ismemberModalOpen, setIsmemberModalOpen] = useState(false);
  const [MemberId, setMemberId] = useState(null);
  const [MembermodalAction, setMemberModalAction] = useState(null);

  const openmemberModal = (id, action) => {
    setMemberId(id);
    setMemberModalAction(action);
    setIsmemberModalOpen(true);
  };

  const closememberModal = () => {
    setIsmemberModalOpen(false);
  };
  const handleMemberModalAction = (action) => {
    if (action === 'Approve') {
      axios.post(`${apiURL}/UserMaster/member_Approval?id=${MemberId}`)
        .then((response) => {
          Swal.fire('Member Form Approved', '', 'success');
          setIsmemberModalOpen(false);
          fetchmemberdetails()
        })
        .catch((error) => {
          setIsmemberModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
    else {
      axios.post(`${apiURL}/UserMaster/reject_forms?id=${MemberId}&form=Member`)
        .then((response) => {
          Swal.fire('Member Form Rejected', '', 'success');
          setIsmemberModalOpen(false);
          fetchmemberdetails()
        })
        .catch((error) => {
          setIsmemberModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
  }

  //Artisan 
  const [isArtisanPagination, setIsArtisanPagination] = useState(false);
  const [currentPageArtisan, setCurrentPageArtisan] = useState(1);
  const [ArtisanPageCount, setArtisanPageCount] = useState(0);
  const [isartisanModalOpen, setIsartisanModalOpen] = useState(false);
  const [ArtisanId, setArtisanId] = useState(null);
  const [ArtisanmodalAction, setArtisanModalAction] = useState(null);
  const openartisanModal = (id, action) => {
    setArtisanId(id);
    setArtisanModalAction(action);
    setIsartisanModalOpen(true);
  };
  const closeartisanModal = () => {
    setIsartisanModalOpen(false);
  };
  const handleArtisanModalAction = (action) => {
    if (action === 'Approve') {
      axios.post(`${apiURL}/UserMaster/artisan_Approval?id=${ArtisanId}`)
        .then((response) => {
          Swal.fire('Artisan Form Approved', '', 'success');
          setIsartisanModalOpen(false);
          fetchArisandetails()
        })
        .catch((error) => {
          setIsartisanModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
    else {
      axios.post(`${apiURL}/UserMaster/reject_forms?id=${ArtisanId}&form=Artisan`)
        .then((response) => {
          Swal.fire('Artisan Form Rejected', '', 'success');
          setIsartisanModalOpen(false);
          fetchArisandetails()
        })
        .catch((error) => {
          setIsartisanModalOpen(false);
          Swal.fire('Error', 'An error occurred while processing the request', 'error');
        });
    }
  }

  const openCity = (cityName) => { setActiveCity(cityName); };


  useEffect(() => { fetcheventdetails(); }, []);
  useEffect(() => { fetchArisandetails(); }, []);
  useEffect(() => { fetchmemberdetails(); }, []);
  useEffect(() => { fetchOpportunitydetails(); }, []);
  useEffect(() => { fetchVolunteerdetails(); }, []);
  useEffect(() => { fetchsmallerdetails(); }, []);

  const [isLoading, setIsLoading] = useState(false);

  // All pagination

  const [currentopportunityPageNation, setCurrentopportunityPageNation] = useState(1);
  const [Fullopportunity_list, setFullopportunity_list] = useState([]);

  const goToopportunityPrevious = () => {
    if (currentopportunityPageNation > 1) {
      let tempCurrentPageNation = currentopportunityPageNation - 1;
      setCurrentopportunityPageNation(tempCurrentPageNation);
      let endIndex = tempCurrentPageNation * 20;
      let startIndex = endIndex - 20;
      setopportunity_list(Fullopportunity_list.slice(startIndex, endIndex));
    }
  }
  const goToopportunityPagingNumber = (pagingnum) => {
    setCurrentopportunityPageNation(pagingnum);
    let endIndex = pagingnum * 20;
    let startIndex = endIndex - 20;
    if (endIndex > Fullopportunity_list.length) {
      endIndex = Fullopportunity_list.length;
    }
    setopportunity_list(Fullopportunity_list.slice(startIndex, endIndex));
  }
  const goToopportunityNext = () => {
    if (currentopportunityPageNation < pageCount) {
      let tempCurrentPageNation = currentopportunityPageNation + 1;
      setCurrentopportunityPageNation(tempCurrentPageNation);
      let startIndex = currentopportunityPageNation * 20;
      let endIndex = tempCurrentPageNation * 20;
      if (endIndex > Fullopportunity_list.length) {
        endIndex = Fullopportunity_list.length;
      }
      setopportunity_list(Fullopportunity_list.slice(startIndex, endIndex));
    }
  }

  const [currentvolunteerPageNation, setCurrentvolunteerPageNation] = useState(1);
  const [Fullvolunteer_list, setFullvolunteer_list] = useState([]);

  const goTovolunteerPrevious = () => {
    if (currentvolunteerPageNation > 1) {
      let tempCurrentPageNation = currentvolunteerPageNation - 1;
      setCurrentvolunteerPageNation(tempCurrentPageNation);
      let endIndex = tempCurrentPageNation * 20;
      let startIndex = endIndex - 20;
      setVolunteer_list(Fullvolunteer_list.slice(startIndex, endIndex));
    }
  }
  const goTovolunteerPagingNumber = (pagingnum) => {
    setCurrentvolunteerPageNation(pagingnum);
    let endIndex = pagingnum * 20;
    let startIndex = endIndex - 20;
    if (endIndex > Fullvolunteer_list.length) {
      endIndex = Fullvolunteer_list.length;
    }
    setVolunteer_list(Fullvolunteer_list.slice(startIndex, endIndex));
  }
  const goTovolunteerNext = () => {
    if (currentvolunteerPageNation < pageCount) {
      let tempCurrentPageNation = currentvolunteerPageNation + 1;
      setCurrentvolunteerPageNation(tempCurrentPageNation);
      let startIndex = currentvolunteerPageNation * 20;
      let endIndex = tempCurrentPageNation * 20;
      if (endIndex > Fullvolunteer_list.length) {
        endIndex = Fullvolunteer_list.length;
      }
      setVolunteer_list(Fullvolunteer_list.slice(startIndex, endIndex));
    }
  }


  const [currentartisanPageNation, setCurrentartisanPageNation] = useState(1);
  const [Fullartisan_list, setFullartisan_list] = useState([]);

  const goToartisanPrevious = () => {
    if (currentartisanPageNation > 1) {
      let tempCurrentPageNation = currentartisanPageNation - 1;
      setCurrentartisanPageNation(tempCurrentPageNation);
      let endIndex = tempCurrentPageNation * 20;
      let startIndex = endIndex - 20;
      setartisan_list(Fullartisan_list.slice(startIndex, endIndex));
    }
  }
  const goToartisanPagingNumber = (pagingnum) => {
    setCurrentartisanPageNation(pagingnum);
    let endIndex = pagingnum * 20;
    let startIndex = endIndex - 20;
    if (endIndex > Fullartisan_list.length) {
      endIndex = Fullartisan_list.length;
    }
    setartisan_list(Fullartisan_list.slice(startIndex, endIndex));
  }
  const goToartisanNext = () => {
    if (currentartisanPageNation < pageCount) {
      let tempCurrentPageNation = currentartisanPageNation + 1;
      setCurrentartisanPageNation(tempCurrentPageNation);
      let startIndex = currentartisanPageNation * 20;
      let endIndex = tempCurrentPageNation * 20;
      if (endIndex > Fullartisan_list.length) {
        endIndex = Fullartisan_list.length;
      }
      setartisan_list(Fullartisan_list.slice(startIndex, endIndex));
    }
  }



  const [currentmemberPageNation, setCurrentmemberPageNation] = useState(1);
  const [Fullmember_list, setFullmember_list] = useState([]);

  const goTomemberPrevious = () => {
    if (currentmemberPageNation > 1) {
      let tempCurrentPageNation = currentmemberPageNation - 1;
      setCurrentmemberPageNation(tempCurrentPageNation);
      let endIndex = tempCurrentPageNation * 20;
      let startIndex = endIndex - 20;
      setmember_data(Fullmember_list.slice(startIndex, endIndex));
    }
  }
  const goTomemberPagingNumber = (pagingnum) => {
    setCurrentmemberPageNation(pagingnum);
    let endIndex = pagingnum * 20;
    let startIndex = endIndex - 20;
    if (endIndex > Fullmember_list.length) {
      endIndex = Fullmember_list.length;
    }
    setmember_data(Fullmember_list.slice(startIndex, endIndex));
  }
  const goTomemberNext = () => {
    if (currentmemberPageNation < pageCount) {
      let tempCurrentPageNation = currentmemberPageNation + 1;
      setCurrentmemberPageNation(tempCurrentPageNation);
      let startIndex = currentmemberPageNation * 20;
      let endIndex = tempCurrentPageNation * 20;
      if (endIndex > Fullmember_list.length) {
        endIndex = Fullmember_list.length;
      }
      setmember_data(Fullmember_list.slice(startIndex, endIndex));
    }
  }



  const [currenteventPageNation, setCurrenteventPageNation] = useState(1);
  const [Fullevent_list, setFullevent_list] = useState([]);

  const goToeventPrevious = () => {
    if (currenteventPageNation > 1) {
      let tempCurrentPageNation = currenteventPageNation - 1;
      setCurrenteventPageNation(tempCurrentPageNation);
      let endIndex = tempCurrentPageNation * 20;
      let startIndex = endIndex - 20;
      setEventList(Fullevent_list.slice(startIndex, endIndex));
    }
  }
  const goToeventPagingNumber = (pagingnum) => {
    setCurrenteventPageNation(pagingnum);
    let endIndex = pagingnum * 20;
    let startIndex = endIndex - 20;
    if (endIndex > Fullevent_list.length) {
      endIndex = Fullevent_list.length;
    }
    setEventList(Fullevent_list.slice(startIndex, endIndex));
  }
  const goToeventNext = () => {
    if (currenteventPageNation < pageCount) {
      let tempCurrentPageNation = currenteventPageNation + 1;
      setCurrenteventPageNation(tempCurrentPageNation);
      let startIndex = currenteventPageNation * 20;
      let endIndex = tempCurrentPageNation * 20;
      if (endIndex > Fullevent_list.length) {
        endIndex = Fullevent_list.length;
      }
      setEventList(Fullevent_list.slice(startIndex, endIndex));
    }
  }


  const [currentsmallerPageNation, setCurrentsmallerPageNation] = useState(1);
  const [Fullsmaller_list, setFullsmaller_list] = useState([]);

  const goTosmallerPrevious = () => {
    if (currentsmallerPageNation > 1) {
      let tempCurrentPageNation = currentsmallerPageNation - 1;
      setCurrentsmallerPageNation(tempCurrentPageNation);
      let endIndex = tempCurrentPageNation * 20;
      let startIndex = endIndex - 20;
      setSmallerList(Fullsmaller_list.slice(startIndex, endIndex));
    }
  }
  const goTosmallerPagingNumber = (pagingnum) => {
    setCurrentsmallerPageNation(pagingnum);
    let endIndex = pagingnum * 20;
    let startIndex = endIndex - 20;
    if (endIndex > Fullsmaller_list.length) {
      endIndex = Fullsmaller_list.length;
    }
    setSmallerList(Fullsmaller_list.slice(startIndex, endIndex));
  }
  const goTosmallerNext = () => {
    if (currentsmallerPageNation < pageCount) {
      let tempCurrentPageNation = currentsmallerPageNation + 1;
      setCurrentsmallerPageNation(tempCurrentPageNation);
      let startIndex = currentsmallerPageNation * 20;
      let endIndex = tempCurrentPageNation * 20;
      if (endIndex > Fullsmaller_list.length) {
        endIndex = Fullsmaller_list.length;
      }
      setSmallerList(Fullsmaller_list.slice(startIndex, endIndex));
    }
  }

  const fetcheventdetails = (status, page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    if (status != null) {
      axios
        .get(`${apiURL}/Get_all_module/get_all_Event?Flag=${status}`, {
          headers: {
            accept: 'application/json',
          },
        })
        .then((resp) => {
          let currentDataLength = resp.data.Data.length;
          if (currentDataLength > 20) {
            setFullevent_list(resp.data.Data);
            setEventList(resp.data.Data.slice(0, 20));
            setIsEventPagination(true);
            let quotient = Math.floor(currentDataLength / 20);
            const remainder = currentDataLength % 20;
            if (remainder > 0) {
              quotient = quotient + 1;
            }
            setPageCount(quotient)
            setIsLoading(false);
          }
          else {
            setEventList(resp.data.Data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      axios
        .get(`${apiURL}/Get_all_module/get_all_Event?Flag=${eventStatus}`, {
          headers: {
            accept: 'application/json',
          },
        })
        .then((resp) => {
          let currentDataLength = resp.data.Data.length;
          if (currentDataLength > 20) {
            setFullevent_list(resp.data.Data);
            setEventList(resp.data.Data.slice(0, 20));
            setIsEventPagination(true);
            let quotient = Math.floor(currentDataLength / 20);
            const remainder = currentDataLength % 20;
            if (remainder > 0) {
              quotient = quotient + 1;
            }
            setPageCount(quotient)
            setIsLoading(false);
          }
          else {
            setEventList(resp.data.data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }

  const fetchOpportunitydetails = (status, page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    if (status != null) {
      axios.get(`${apiURL}/Get_all_module/get_all_Opportunity?Flag=${status}`, {
        headers: {
          "accept": "application/json",
        }
      }).then(resp => {
        let currentDataLength = resp.data.Data.length;
        if (currentDataLength > 20) {
          setFullopportunity_list(resp.data.Data);
          setopportunity_list(resp.data.Data.slice(0, 20));
          setIsOpportunityPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setopportunity_list(resp.data.Data);
          setIsLoading(false);
        }
        // setopportunity_list(resp.data.Data)
        // const currentDataLength = resp.data.Data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.Data.slice(startIndex, endIndex);
        // setopportunity_list(dataToDisplay);
        // setIsOpportunityPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setOpportunityPageCount(totalPages);
        // setIsLoading(false);
      })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
    else {
      axios.get(`${apiURL}/Get_all_module/get_all_Opportunity?Flag=${memberStatus}`, {
        headers: {
          "accept": "application/json",
        }
      }).then(resp => {
        // setopportunity_list(resp.data.Data)
        // const currentDataLength = resp.data.Data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.Data.slice(startIndex, endIndex);
        // setopportunity_list(dataToDisplay);
        // setIsOpportunityPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setOpportunityPageCount(totalPages);
        // setIsLoading(false);
        let currentDataLength = resp.data.Data.length;
        if (currentDataLength > 20) {
          setFullopportunity_list(resp.data.Data);
          setopportunity_list(resp.data.Data.slice(0, 20));
          setIsOpportunityPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setopportunity_list(resp.data.Data);
          setIsLoading(false);
        }
      })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  }

  const fetchmemberdetails = (status, page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    if (status != null) {
      axios.get(`${apiURL}/Get_all_module/get_all_Member?Flag=${status}`, {
        headers: {
          "accept": "application/json",
        }
      }).then(resp => {
        let currentDataLength = resp.data.Data.length;
        if (currentDataLength > 20) {
          setFullmember_list(resp.data.Data);
          setmember_data(resp.data.Data.slice(0, 20));
          setIsMemberPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setmember_data(resp.data.Data);
          setIsLoading(false);
        }
      })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      axios.get(`${apiURL}/Get_all_module/get_all_Member?Flag=${memberStatus}`, {
        headers: {
          "accept": "application/json",
        }
      }).then(resp => {
        let currentDataLength = resp.data.Data.length;
        if (currentDataLength > 20) {
          setFullmember_list(resp.data.Data);
          setmember_data(resp.data.Data.slice(0, 20));
          setIsMemberPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setmember_data(resp.data.Data);
          setIsLoading(false);
        }
      })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const fetchArisandetails = (status, page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    if (status != null) {
      axios.get(`${apiURL}/Get_all_module/get_all_Artisan?Flag=${status}`, {
        headers: {
          "accept": "application/json",
        }
      })
        .then(resp => {
          // setartisan_list(resp.data.Data)
          // const currentDataLength = resp.data.Data.length;
          // const startIndex = (page - 1) * itemsPerPage;
          // const endIndex = startIndex + itemsPerPage;
          // const dataToDisplay = resp.data.Data.slice(startIndex, endIndex);
          // setartisan_list(dataToDisplay);
          // setIsArtisanPagination(true);
          // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
          // setArtisanPageCount(totalPages);
          // setIsLoading(false);
          let currentDataLength = resp.data.Data.length;
          if (currentDataLength > 20) {
            setFullartisan_list(resp.data.Data);
            setartisan_list(resp.data.Data.slice(0, 20));
            setIsArtisanPagination(true);
            let quotient = Math.floor(currentDataLength / 20);
            const remainder = currentDataLength % 20;
            if (remainder > 0) {
              quotient = quotient + 1;
            }
            setPageCount(quotient)
            setIsLoading(false);
          }
          else {
            setartisan_list(resp.data.Data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      axios.get(`${apiURL}/Get_all_module/get_all_Artisan?Flag=${artisanStatus}`, {
        headers: {
          "accept": "application/json",
        }
      }).then(resp => {
        // setartisan_list(resp.data.Data)
        // const currentDataLength = resp.data.Data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.Data.slice(startIndex, endIndex);
        // setartisan_list(dataToDisplay);
        // setIsArtisanPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setArtisanPageCount(totalPages);
        // setIsLoading(false);
        let currentDataLength = resp.data.Data.length;
        if (currentDataLength > 20) {
          setFullartisan_list(resp.data.Data);
          setartisan_list(resp.data.Data.slice(0, 20));
          setIsArtisanPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setartisan_list(resp.data.Data);
          setIsLoading(false);
        }
      })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const fetchVolunteerdetails = (status, page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    if (status != null) {
      axios.get(`${apiURL}/Get_all_module/get_all_Volunteer?Flag=${status}`, {
        headers: {
          "accept": "application/json",
        }
      }).then(resp => {
        let currentDataLength = resp.data.Data.length;
        if (currentDataLength > 20) {
          setFullvolunteer_list(resp.data.Data);
          setVolunteer_list(resp.data.Data.slice(0, 20));
          setIsVolunteerPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setVolunteer_list(resp.data.Data);
          setIsLoading(false);
        }
        // setVolunteer_list(resp.data.Data)
        // const currentDataLength = resp.data.Data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.Data.slice(startIndex, endIndex);
        // setVolunteer_list(dataToDisplay);
        // setIsVolunteerPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setVolunteerPageCount(totalPages);
        // setIsLoading(false);
      })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
    else {
      axios.get(`${apiURL}/Get_all_module/get_all_Volunteer?Flag=${volunteerStatus}`, {
        headers: {
          "accept": "application/json",
        }
      }).then(resp => {
        let currentDataLength = resp.data.Data.length;
        if (currentDataLength > 20) {
          setFullvolunteer_list(resp.data.Data);
          setVolunteer_list(resp.data.Data.slice(0, 20));
          setIsVolunteerPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setVolunteer_list(resp.data.Data);
          setIsLoading(false);
        }
      })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const fetchsmallerdetails = (status, page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    if (status != null) {
      axios
        .get(`${apiURL}/Get_all_module/get_all_Smaller?Flag=${status}`, {
          headers: {
            accept: 'application/json',
          },
        })
        .then((resp) => {
          let currentDataLength = resp.data.Data.length;
          if (currentDataLength > 20) {
            setFullsmaller_list(resp.data.Data);
            setSmallerList(resp.data.data.slice(0, 20));
            setIsSmallerPagination(true);
            let quotient = Math.floor(currentDataLength / 20);
            const remainder = currentDataLength % 20;
            if (remainder > 0) {
              quotient = quotient + 1;
            }
            setPageCount(quotient)
            setIsLoading(false);
          }
          else {
            setSmallerList(resp.data.Data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      axios
        .get(`${apiURL}/Get_all_module/get_all_Smaller?Flag=${smallerStatus}`, {
          headers: {
            accept: 'application/json',
          },
        })
        .then((resp) => {
          let currentDataLength = resp.data.Data.length;
          if (currentDataLength > 20) {
            setFullsmaller_list(resp.data.Data);
            setSmallerList(resp.data.Data.slice(0, 20));
            setIsSmallerPagination(true);
            let quotient = Math.floor(currentDataLength / 20);
            const remainder = currentDataLength % 20;
            if (remainder > 0) {
              quotient = quotient + 1;
            }
            setPageCount(quotient)
            setIsLoading(false);
          }
          else {
            setSmallerList(resp.data.Data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

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

  const activeTab = ['Artisan', 'Member', 'Event', 'Opportunity', 'Volunteer', 'Smaller']

  const [isdeleteModalOpen, setIsdeleteModalOpen] = useState(false);
  const [model_id, setModel_id] = useState(null);
  const [model_name, setModel_name] = useState(null);

  const deleteModal = (id, action) => {
    setModel_id(id);
    setModel_name(action);
    setIsdeleteModalOpen(true);
  };
  const closedeleteModal = () => {
    setIsdeleteModalOpen(false);
  };

  const refreshdetails = (Modelname) => {
    if (Modelname == "Artisan") {
      fetchArisandetails()
    }
    else if (Modelname == "Member") {
      fetchmemberdetails()
    }
    else if (Modelname == "Event") {
      fetcheventdetails()
    }
    else if (Modelname == "Opportunity") {
      fetchOpportunitydetails()
    }
    else if (Modelname == "Volunteer") {
      fetchVolunteerdetails()
    }
    else if (Modelname == "Smaller") {
      fetchsmallerdetails()
    }
  };

  const smaller_change = (e) => {
    setSmallerStatus(e.target.value)
    fetchsmallerdetails(e.target.value)
  }
  const volunteer_change = (e) => {
    setVolunteerStatus(e.target.value)
    fetchVolunteerdetails(e.target.value)
  }
  const opportunity_change = (e) => {
    setOpportunityStatus(e.target.value)
    fetchOpportunitydetails(e.target.value)
  }
  const event_change = (e) => {
    setEventStatus(e.target.value)
    fetcheventdetails(e.target.value)
  }
  const member_change = (e) => {
    setMemberStatus(e.target.value)
    fetchmemberdetails(e.target.value)
  }
  const artisan_change = (e) => {
    setArtisanStatus(e.target.value)
    fetchArisandetails(e.target.value)
  }

  const handleDeleteModalAction = () => {
    axios.delete(`${apiURL}/Get_all_module/delete_by_id?id=${model_id}&Flag=${model_name}`)
      .then((response) => {
        Swal.fire(`${model_name} data deleted successfully`, '', 'success');
        setIsdeleteModalOpen(false);
        refreshdetails(model_name);
      })
      .catch((error) => {
        setIsdeleteModalOpen(false);
        Swal.fire('Error', 'An error occurred while processing the request', 'error');
      });
  }

  const handleartisanKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchSearchArtisanDetails();
    }
  };
  const handlememberKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchSearchMemberDetails();
    }
  };
  const handleeventKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchSearchEventDetails();
    }
  };
  const handleopportunityKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchSearchOpportunityDetails();
    }
  };
  const handlevolunteerKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchSearchVolunteerDetails();
    }
  };
  const handlesmallerKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchSearchSmallerDetails();
    }
  };


  const fetchSearchArtisanDetails = (page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    axios
      .get(`${apiURL}/UserMaster/UserMaster/artisan_search_data?search_query=${artisansearch}`, {
        headers: {
          accept: "application/json",
        },
      })
      .then(resp => {
        // setartisan_list(resp.data.data)
        // const currentDataLength = resp.data.data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.data.slice(startIndex, endIndex);
        // setartisan_list(dataToDisplay);
        // setIsArtisanPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setArtisanPageCount(totalPages);
        // setIsLoading(false);
        let currentDataLength = resp.data.data.length;
        if (currentDataLength > 20) {
          setFullartisan_list(resp.data.data);
          setartisan_list(resp.data.data.slice(0, 20));
          setIsArtisanPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setartisan_list(resp.data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const fetchSearchMemberDetails = (page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    axios
      .get(`${apiURL}/UserMaster/UserMaster/member_search_data?search_query=${membersearch}`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((resp) => {
        // setmember_data(resp.data.data)
        // const currentDataLength = resp.data.data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.data.slice(startIndex, endIndex);
        // setmember_data(dataToDisplay);
        // setIsMemberPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setMemberPageCount(totalPages);
        // setIsLoading(false);
        let currentDataLength = resp.data.data.length;
        if (currentDataLength > 20) {
          setFullmember_list(resp.data.data);
          setmember_data(resp.data.data.slice(0, 20));
          setIsMemberPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setmember_data(resp.data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const fetchSearchEventDetails = (page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    axios
      .get(`${apiURL}/UserMaster/event_search_data?search_query=${eventsearch}`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((resp) => {
        // setEventList(resp.data.data);
        // const currentDataLength = resp.data.data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.data.slice(startIndex, endIndex);
        // setEventList(dataToDisplay);
        // setIsEventPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setEventPageCount(totalPages);
        // setIsLoading(false);
        let currentDataLength = resp.data.data.length;
        if (currentDataLength > 20) {
          setFullevent_list(resp.data.data);
          setEventList(resp.data.data.slice(0, 20));
          setIsEventPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setEventList(resp.data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const fetchSearchOpportunityDetails = (page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    axios
      .get(`${apiURL}/UserMaster/oppotunity_search_data?search_query=${opportunitysearch}`, {
        headers: {
          accept: "application/json",
        },
      })
      .then(resp => {
        // setopportunity_list(resp.data.data)
        // const currentDataLength = resp.data.data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.data.slice(startIndex, endIndex);
        // setopportunity_list(dataToDisplay);
        // setIsOpportunityPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setOpportunityPageCount(totalPages);
        // setIsLoading(false);
        let currentDataLength = resp.data.data.length;
        if (currentDataLength > 20) {
          setFullopportunity_list(resp.data.data);
          setopportunity_list(resp.data.data.slice(0, 20));
          setIsOpportunityPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setopportunity_list(resp.data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const fetchSearchVolunteerDetails = (page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    axios
      .get(`${apiURL}/UserMaster/volunteer_search_data?search_query=${volunteersearch}`, {
        headers: {
          accept: "application/json",
        },
      })
      .then(resp => {
        // setVolunteer_list(resp.data.data)
        // const currentDataLength = resp.data.data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.data.slice(startIndex, endIndex);
        // setVolunteer_list(dataToDisplay);
        // setIsVolunteerPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setVolunteerPageCount(totalPages);
        // setIsLoading(false);
        let currentDataLength = resp.data.data.length;
        if (currentDataLength > 20) {
          setFullvolunteer_list(resp.data.data);
          setVolunteer_list(resp.data.data.slice(0, 20));
          setIsVolunteerPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setVolunteer_list(resp.data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const fetchSearchSmallerDetails = (page = 1, itemsPerPage = 9) => {
    setIsLoading(true);
    axios
      .get(`${apiURL}/UserMaster/smaller_search_data?search_query=${smallersearch}`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((resp) => {
        // const currentDataLength = resp.data.data.length;
        // const startIndex = (page - 1) * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // const dataToDisplay = resp.data.data.slice(startIndex, endIndex);
        // setSmallerList(dataToDisplay);
        // setIsSmallerPagination(true);
        // const totalPages = Math.ceil(currentDataLength / itemsPerPage);
        // setSmallerPageCount(totalPages);
        // setIsLoading(false);
        let currentDataLength = resp.data.data.length;
        if (currentDataLength > 20) {
          setFullsmaller_list(resp.data.data);
          setSmallerList(resp.data.data.slice(0, 20));
          setIsSmallerPagination(true);
          let quotient = Math.floor(currentDataLength / 20);
          const remainder = currentDataLength % 20;
          if (remainder > 0) {
            quotient = quotient + 1;
          }
          setPageCount(quotient)
          setIsLoading(false);
        }
        else {
          setSmallerList(resp.data.data);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };


  return (
    <div>
      <Header />
      <div className="parallax" style={{ transform: `translateY(${scrollY1}px)`, }}>
        <div className='parallax-content'>
          <h1 className='text-center font-weight-bold hongkong-font' style={{ fontSize: '50px' }}>Admin Approval</h1>
        </div>
      </div>

      {sessionStorage.getItem('access_token') && (
        <>
          <div className="container">
            <div class='row mb-5'>
              <div className='col-sm-3'></div>
              <div className='col-sm-3'></div>
              <div className='col-sm-3'></div>
              <div className='col-sm-3'>
                <button
                  className="mb-5"
                  style={{ fontSize: '16px', marginLeft: '185px' }}
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </button>
              </div>
            </div>
            <div >
              <div className='row'>
                {activeTab && activeTab.map((item) =>
                  <div className='col-sm-2'>
                    <button
                      className={`btn btn-outline-css ${activeCity === item ? 'active' : ''}`}
                      style={{ fontSize: '16px', marginRight: '10px' }}
                      onClick={() => openCity(item)}
                    >
                      {item}
                    </button>
                  </div>
                )}
              </div>

              {isLoading ? (
                <div className='d-flex justify-content-center'>
                  <ReactLoading type="spin" color="#134f5c" height={100} width={50} />
                </div>
              ) : (
                <>
                  <div>
                    {activeCity === 'Artisan' && (
                      <div id="Artisan" className={`mt-5  ${activeCity === 'Artisan' ? 'show1' : ''}`}>
                        <div className='row'>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}>Status</label>
                            <select id="event-status" className='form-control foreventstatus' value={artisanStatus} onChange={artisan_change}>
                              <option selected value="All">All</option>
                              <option value="Pending">Pending</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </div>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}></label>
                            <input
                              type="text"
                              className="search-box mt-5"
                              placeholder="Search..."
                              onKeyPress={handleartisanKeyPress}
                              value={artisansearch}
                              onChange={(e) => setartisanSearch(e.target.value)}
                            />
                            <FaSearch className="search-icon" onClick={fetchSearchArtisanDetails} />

                          </div>
                        </div>
                        <div className='table-responsive mt-5'>
                          <table className="table">
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Craft category</th>
                              <th>Craft name</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                            {artisan_list && artisan_list.map((artisan, i) => (
                              <tr key={i}>
                                {/* <td>{artisan.id}</td> */}
                                <td>{i + 1}</td>
                                <td>{artisan.organization_name}</td>
                                <td>{artisan.craft_practiced_under_the_category_1}</td>
                                <td>{artisan.craft_practiced_under_the_category_2}</td>
                                <td>{artisan.status}</td>

                                <td value={artisan.id}>
                                  <button className="w3-bar-item w3-button  "
                                    //  onClick={() => showArtisanAlerter(artisan.id)}
                                    onClick={() => openartisanModal(artisan.id, 'Approve')}
                                  >
                                    &#10004;
                                  </button>
                                  <Link to={'/Artisan-Form'} state={{ flag: 'U', id: artisan.id }}>
                                    <button
                                      className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    >
                                      &#9998;
                                    </button>
                                  </Link>
                                  <button
                                    className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    onClick={() => deleteModal(artisan.id, "Artisan")}
                                  >
                                    &#128465;
                                  </button>
                                </td>
                              </tr>

                            ))}
                          </table>
                        </div>
                        {isArtisanPagination && (
                          <div className="row">
                            <div className="col-12">
                              <nav
                                aria-label="Page navigation example"
                                className="pagination-nav d-flex justify-content-center"
                                style={{ background: '#fff' }}
                              >
                                <ul className="pagination justify-content-center">
                                  <li className={`page-item ${currentartisanPageNation === 1 ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" tabIndex="-1" onClick={goToartisanPrevious}>
                                      Previous
                                    </a>
                                  </li>

                                  {/* {currentopportunityPageNation !== 1 && ( */}
                                  <li className="page-item">
                                    <a
                                      style={{ background: '#dedede' }}
                                      className="page-link active"
                                      onClick={() => goToartisanPagingNumber(currentartisanPageNation)}
                                      href="javascript:void(0)"
                                    >
                                      {currentartisanPageNation}
                                    </a>
                                  </li>
                                  {/* )} */}

                                  <li className={`page-item ${currentartisanPageNation === pageCount ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" onClick={goToartisanNext}>
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        )}
 </div>
                    )}
                    {activeCity === 'Member' && (
                      <div id="Member" className={`mt-5  ${activeCity === 'Member' ? 'show1' : ''}`}>
                        <div className='row'>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}>Status</label>
                            <select id="event-status" className='form-control foreventstatus' value={memberStatus} onChange={member_change}>
                              <option selected value="All">All</option>
                              <option value="Pending">Pending</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </div>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}></label>
                            <input
                              type="text"
                              className="search-box mt-5"
                              placeholder="Search..."
                              onKeyPress={handlememberKeyPress}
                              value={membersearch}
                              onChange={(e) => setmemberSearch(e.target.value)}
                            />
                            <FaSearch className="search-icon" onClick={fetchSearchMemberDetails} />

                          </div>
                        </div>
                        <div className='table-responsive mt-5'>
                          <table className="table">
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Phone Number</th>
                              <th>Email</th>
                              <th>Country</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                            {member_date && member_date.map((members, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{members.name}</td>
                                <td>{members.contact_number}</td>
                                <td>{members.your_email}</td>
                                <td>{members.country}</td>
                                <td>{members.status}</td>
                                <td value={members.id}>
                                  <button className="w3-bar-item w3-button"
                                    //  onClick={() => showMemberAlerter(members.id)}
                                    onClick={() => openmemberModal(members.id, 'Approve')}
                                  >
                                    &#10004;
                                  </button>
                                  <Link to="/Member_form" state={{ ID: members.id, Flag: "U" }}>
                                    <button
                                      className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    >
                                      &#9998;
                                    </button>
                                  </Link>
                                  <button
                                    className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    onClick={() => deleteModal(members.id, "Member")}
                                  >
                                    &#128465;
                                  </button>
                                </td>
                              </tr>

                            ))}
                          </table>


                        </div>
                        {isMemberPagination && (
                          <div className="row">
                            <div className="col-12">
                              <nav
                                aria-label="Page navigation example"
                                className="pagination-nav d-flex justify-content-center"
                                style={{ background: '#fff' }}
                              >
                                <ul className="pagination justify-content-center">
                                  <li className={`page-item ${currentmemberPageNation === 1 ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" tabIndex="-1" onClick={goTomemberPrevious}>
                                      Previous
                                    </a>
                                  </li>

                                  {/* {currentopportunityPageNation !== 1 && ( */}
                                  <li className="page-item">
                                    <a
                                      style={{ background: '#dedede' }}
                                      className="page-link active"
                                      onClick={() => goTomemberPagingNumber(currentmemberPageNation)}
                                      href="javascript:void(0)"
                                    >
                                      {currentmemberPageNation}
                                    </a>
                                  </li>
                                  {/* )} */}

                                  <li className={`page-item ${currentmemberPageNation === pageCount ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" onClick={goTomemberNext}>
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        )}

                      </div>

                    )}
                    {activeCity === 'Event' && (
                      <div id="Event" className={`mt-5  ${activeCity === 'Event' ? 'show1' : ''}`}>
                        <div className='row'>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}>Status</label>
                            <select id="event-status" className='form-control foreventstatus' value={eventStatus} onChange={event_change}>
                              <option selected value="All">All</option>
                              <option value="Pending">Pending</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </div>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}></label>
                            <input
                              type="text"
                              className="search-box mt-5"
                              placeholder="Search..."
                              onKeyPress={handleeventKeyPress}
                              value={eventsearch}
                              onChange={(e) => seteventSearch(e.target.value)}
                            />
                            <FaSearch className="search-icon" onClick={fetchSearchEventDetails} />

                          </div>
                        </div>
                        <div className='table-responsive mt-5'>
                          <table className="table">
                            <tr>
                              <th>Id</th>
                              <th>Event Name</th>
                              <th>Event Start Date</th>
                              <th>Event Mode</th>
                              <th>CD Member</th>
                              <th>Organizer Details</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                            {event_list && event_list.map((event, i) => (
                              <tr key={i}>
                               <td>{i + 1}</td>
                                <td>{event.event_title}</td>
                                <td>{event.event_start_date}</td>
                                <td>{event.event_mode}</td>
                                <td>{event.cd_member}</td>
                                <td>{event.organizer}</td>
                                <td>{event.status}</td>
                                <td value={event.id}>
                                  <button className="w3-bar-item w3-button"
                                    // onClick={() => showAlerterr(event.id)}
                                    onClick={() => openeventModal(event.id, 'Approve')}
                                  >
                                    &#10004;
                                  </button>
                                  <Link to="/Eventform" state={{ ID: event.id, Flag: "U" }}>
                                    <button
                                      className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    >
                                      &#9998;
                                    </button>
                                  </Link>
                                  <button
                                    className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    onClick={() => deleteModal(event.id, "Event")}
                                  >
                                    &#128465;
                                  </button>
                                </td>
                              </tr>

                            ))}
                          </table>
                        </div>
                        {isEventPagination && (
                          <div className="row">
                            <div className="col-12">
                              <nav
                                aria-label="Page navigation example"
                                className="pagination-nav d-flex justify-content-center"
                                style={{ background: '#fff' }}
                              >
                                <ul className="pagination justify-content-center">
                                  <li className={`page-item ${currenteventPageNation === 1 ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" tabIndex="-1" onClick={goToeventPrevious}>
                                      Previous
                                    </a>
                                  </li>

                                  {/* {currentopportunityPageNation !== 1 && ( */}
                                  <li className="page-item">
                                    <a
                                      style={{ background: '#dedede' }}
                                      className="page-link active"
                                      onClick={() => goToeventPagingNumber(currenteventPageNation)}
                                      href="javascript:void(0)"
                                    >
                                      {currenteventPageNation}
                                    </a>
                                  </li>
                                  {/* )} */}

                                  <li className={`page-item ${currenteventPageNation === pageCount ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" onClick={goToeventNext}>
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        )}
                      </div>

                    )}
                    {activeCity === 'Opportunity' && (
                      <div id="opportunity" className={`mt-5  ${activeCity === 'Opportunity' ? 'show1' : ''}`}>
                        <div className='row'>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}>Status</label>
                            <select id="event-status" className='form-control foreventstatus' value={opportunityStatus} onChange={opportunity_change}>
                              <option selected value="All">All</option>
                              <option value="Pending">Pending</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </div>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}></label>
                            <input
                              type="text"
                              className="search-box mt-5"
                              placeholder="Search..."
                              onKeyPress={handleopportunityKeyPress}
                              value={opportunitysearch}
                              onChange={(e) => setopportunitySearch(e.target.value)}
                            />
                            <FaSearch className="search-icon" onClick={fetchSearchOpportunityDetails} />

                          </div>
                        </div>
                        <div className='table-responsive mt-5'>
                          <table className="table">
                            <tr>
                              <th>Id</th>
                              <th>Title</th>
                              <th>Opportunity Type</th>
                              <th>Application Deadline</th>
                              <th>Opportunity Mode</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                            {opportunity_list && opportunity_list.map((opportunity_list, i) => (
                              <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{opportunity_list.tittle}</td>
                                {opportunity_list.Opportunity_type && opportunity_list.Opportunity_type.includes("+") ? (
                                  <td>
                                    {opportunity_list.Opportunity_type.split("+").map((type, index) => (
                                      <span key={index}>{type}</span>
                                    ))}
                                  </td>
                                ) : (
                                  <td>{opportunity_list.Opportunity_type}</td>
                                )}
                                <td>{opportunity_list.closing_date}</td>
                                <td>{opportunity_list.opportunity_mode}</td>
                                <td>{opportunity_list.status}</td>
                                <td value={opportunity_list.id}>
                                  <button className="w3-bar-item w3-button"
                                    // onClick={() => showopportunityAlerter(opportunity_list.id)}
                                    onClick={() => openopportunityModal(opportunity_list.id, 'Approve')}
                                  >
                                    &#10004;
                                  </button>
                                  <Link to="/Opportunity/Addopportunityform" state={{ ID: opportunity_list.id, Flag: "U" }}>
                                    <button
                                      className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    >
                                      &#9998;
                                    </button>
                                  </Link>
                                  <button
                                    className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    onClick={() => deleteModal(opportunity_list.id, "Opportunity")}
                                  >
                                    &#128465;
                                  </button>
                                </td>
                              </tr>

                            ))}
                          </table>
                        </div>
                        {isOpportunityPagination && (
                          <div className="row">
                            <div className="col-12">
                              <nav
                                aria-label="Page navigation example"
                                className="pagination-nav d-flex justify-content-center"
                                style={{ background: '#fff' }}
                              >
                                <ul className="pagination justify-content-center">
                                  <li className={`page-item ${currentopportunityPageNation === 1 ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" tabIndex="-1" onClick={goToopportunityPrevious}>
                                      Previous
                                    </a>
                                  </li>

                                  {/* {currentopportunityPageNation !== 1 && ( */}
                                  <li className="page-item">
                                    <a
                                      style={{ background: '#dedede' }}
                                      className="page-link active"
                                      onClick={() => goToopportunityPagingNumber(currentopportunityPageNation)}
                                      href="javascript:void(0)"
                                    >
                                      {currentopportunityPageNation}
                                    </a>
                                  </li>
                                  {/* )} */}

                                  <li className={`page-item ${currentopportunityPageNation === pageCount ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" onClick={goToopportunityNext}>
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    {activeCity === 'Volunteer' && (
                      <div id="Volunteer" className={`mt-5  ${activeCity === 'Volunteer' ? 'show1' : ''}`}>
                        {/* <h2 className='text-center'>Volunteer</h2> */}

                        <div className='row'>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}>Status</label>
                            <select id="event-status" className='form-control foreventstatus' value={volunteerStatus} onChange={volunteer_change}>
                              <option selected value="All">All</option>
                              <option value="Pending">Pending</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </div>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}></label>
                            <input
                              type="text"
                              className="search-box mt-5"
                              placeholder="Search..."
                              onKeyPress={handlevolunteerKeyPress}
                              value={volunteersearch}
                              onChange={(e) => setvolunteerSearch(e.target.value)}
                            />
                            <FaSearch className="search-icon" onClick={fetchSearchVolunteerDetails} />

                          </div>
                        </div>

                        <div className='table-responsive mt-5'>
                          <table className="table">
                            <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Role</th>
                              <th>Location</th>
                              <th>Availability</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                            {volunteer_list && volunteer_list.map((Volunteer_list, i) => (
                              <tr key={i}>
                               <td>{i + 1}</td>
                                <td>{Volunteer_list.Name}</td>
                                <td>{Volunteer_list.Your_role_apply}</td>
                                <td>{Volunteer_list.Location}</td>
                                <td>{Volunteer_list.Are_you_member_of_cd}</td>
                                <td>{Volunteer_list.status}</td>
                                <td value={Volunteer_list.id}>

                                  <button
                                    className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    // onClick={() => showVolunteerAlerter(Volunteer_list.id)}
                                    onClick={() => openvolunteerModal(Volunteer_list.id, 'Approve')}
                                  >
                                    &#10004;
                                  </button>
                                  <Link to="/Volunteerform" state={{ ID: Volunteer_list.id, Flag: "U" }}>
                                    <button
                                      className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    >
                                      &#9998;
                                    </button>
                                  </Link>
                                  <button
                                    className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    onClick={() => deleteModal(Volunteer_list.id, "Volunteer")}
                                  >
                                    &#128465;
                                  </button>
                                </td>
                              </tr>

                            ))}
                          </table>
                        </div>
                        {isVolunteerPagination && (
                          <div className="row">
                            <div className="col-12">
                              <nav
                                aria-label="Page navigation example"
                                className="pagination-nav d-flex justify-content-center"
                                style={{ background: '#fff' }}
                              >
                                <ul className="pagination justify-content-center">
                                  <li className={`page-item ${currentvolunteerPageNation === 1 ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" tabIndex="-1" onClick={goTovolunteerPrevious}>
                                      Previous
                                    </a>
                                  </li>

                                  {/* {currentopportunityPageNation !== 1 && ( */}
                                  <li className="page-item">
                                    <a
                                      style={{ background: '#dedede' }}
                                      className="page-link active"
                                      onClick={() => goTovolunteerPagingNumber(currentvolunteerPageNation)}
                                      href="javascript:void(0)"
                                    >
                                      {currentvolunteerPageNation}
                                    </a>
                                  </li>
                                  {/* )} */}

                                  <li className={`page-item ${currentvolunteerPageNation === pageCount ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" onClick={goTovolunteerNext}>
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        )}
                        
                      </div>
                    )}
                    {activeCity === 'Smaller' && (
                      <div id="Smaller" className={`mt-5  ${activeCity === 'Smaller' ? 'show1' : ''}`}>
                        {/* <h2 className='text-center'>Smaller</h2> */}
                        <div className='row'>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}>Status</label>
                            <select id="event-status" className='form-control foreventstatus' value={smallerStatus} onChange={smaller_change}>
                              <option selected value="All">All</option>
                              <option value="Pending">Pending</option>
                              <option value="Approved">Approved</option>
                              <option value="Rejected">Rejected</option>
                            </select>
                          </div>
                          <div className='col-md-6'>
                            <label htmlFor="event-status" className="form-label" style={{ fontSize: '14px' }}></label>
                            <input
                              type="text"
                              className="search-box mt-5"
                              placeholder="Search..."
                              onKeyPress={handlesmallerKeyPress}
                              value={smallersearch}
                              onChange={(e) => setsmallerSearch(e.target.value)}
                            />
                            <FaSearch className="search-icon" onClick={fetchSearchSmallerDetails} />

                          </div>
                        </div>

                        <div className='table-responsive mt-5'>
                          <table className="table">
                            <tr>
                              <th>Id</th>
                              <th>Title</th>
                              <th>Website Name</th>
                              <th>Website URL</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                            {smaller_list && smaller_list.map((Smaller, i) => (
                              <tr key={i}>
                                {/* <td>{Smaller.id}</td> */}
                                <td>{i + 1}</td>
                                <td>{Smaller.Tittle}</td>
                                <td>{Smaller.website_name}</td>
                                <td>{Smaller.website_url}</td>
                                <td>{Smaller.status}</td>
                                <td>
                                  <button
                                    className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    onClick={() => opensmallerModal(Smaller.id, 'Approve')}
                                  >
                                    &#10004;
                                  </button>
                                  <Link to="/interesting-read" state={{ ID: Smaller.id, Flag: "U" }}>
                                    <button
                                      className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    >
                                      &#9998;
                                    </button>
                                  </Link>
                                  <button
                                    className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                    onClick={() => deleteModal(Smaller.id, "Smaller")}
                                  >
                                    &#128465;
                                  </button>


                                  {/* <button
                                className={`w3-bar-item w3-button ${"isHighlighted" ? 'button-highlighted' : 'button-default'}`}
                                onClick={() => opensmallerModal(Smaller.id, 'Reject')}
                              >
                                &#10008;
                              </button> */}
                                </td>
                              </tr>

                            ))}
                          </table>

                        </div>
                        {isSmallerPagination && (
                          <div className="row">
                            <div className="col-12">
                              <nav
                                aria-label="Page navigation example"
                                className="pagination-nav d-flex justify-content-center"
                                style={{ background: '#fff' }}
                              >
                                <ul className="pagination justify-content-center">
                                  <li className={`page-item ${currentsmallerPageNation === 1 ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" tabIndex="-1" onClick={goTosmallerPrevious}>
                                      Previous
                                    </a>
                                  </li>

                                  {/* {currentopportunityPageNation !== 1 && ( */}
                                  <li className="page-item">
                                    <a
                                      style={{ background: '#dedede' }}
                                      className="page-link active"
                                      onClick={() => goTosmallerPagingNumber(currentsmallerPageNation)}
                                      href="javascript:void(0)"
                                    >
                                      {currentsmallerPageNation}
                                    </a>
                                  </li>
                                  {/* )} */}

                                  <li className={`page-item ${currentsmallerPageNation === pageCount ? 'disabled' : ''}`}>
                                    <a className="page-link" href="javascript:void(0)" onClick={goTosmallerNext}>
                                      Next
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                            </div>
                          </div>
                        )} 
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}

      <div className='mt-5'>
        <Footer />
      </div>

      {/* smaller */}
      <Modal
        isOpen={issmallerModalOpen}
        onRequestClose={closesmallerModal}
        contentLabel="Example Modal"
        size='md'
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>Smaller Form</h2>
          <button class="col-md-3 btn btn-info admin-close" onClick={closesmallerModal}>&times;</button>
        </div>
        {/* <p>{SmallerId}</p> */}
        <div className='mt-3 mb-5'>
          <h3>Do you approve of your details?</h3>
        </div>
        <div className='row'>
          <button class="col-md-5 btn btn-info" style={{ background: '#134f5c', fontSize: '20px', color: 'white' }} onClick={() => handleSmallerModalAction('Approve')}>Approve</button>
          <span className='col-md-2'></span>
          <button class="col-md-5 btn btn-info" style={{ background: '#D19426', fontSize: '20px', color: 'white' }} onClick={() => handleSmallerModalAction('Reject')}>Reject</button>
        </div>
      </Modal>

      {/* volunteer */}
      <Modal
        isOpen={isvolunteerModalOpen}
        onRequestClose={closevolunteerModal}
        contentLabel="Example Modal"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>Volunteer Form</h2>
          <button class="col-md-3 btn btn-info admin-close" onClick={closevolunteerModal}>&times;</button>
        </div>
        {/* <p>{VolunteerId}</p> */}
        <div className='mt-3 mb-5'>
          <h3>Do you approve of your details?</h3>
        </div>
        <div className='row'>
          <button class="col-md-5 btn btn-info" style={{ background: '#134f5c', fontSize: '20px', color: 'white' }} onClick={() => handleVolunteerModalAction('Approve')}>Approve</button>
          <span className='col-md-2'></span>
          <button class="col-md-5 btn btn-info" style={{ background: '#D19426', fontSize: '20px', color: 'white' }} onClick={() => handleVolunteerModalAction('Reject')}>Reject</button>
        </div>
      </Modal>

      {/* opportunity */}
      <Modal
        isOpen={isopportunityModalOpen}
        onRequestClose={closeopportunityModal}
        contentLabel="Example Modal"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>Opportuntiy Form</h2>
          <button class="col-md-3 btn btn-info admin-close" onClick={closeopportunityModal}>&times;</button>
        </div>
        {/* <p>{OpportunityId}</p> */}
        <div className='mt-3 mb-5'>
          <h3>Do you approve of your details?</h3>
        </div>
        <div className='row'>
          <button class="col-md-5 btn btn-info" style={{ background: '#134f5c', fontSize: '20px', color: 'white' }} onClick={() => handleOpportunityModalAction('Approve')}>Approve</button>
          <span className='col-md-2'></span>
          <button class="col-md-5 btn btn-info" style={{ background: '#D19426', fontSize: '20px', color: 'white' }} onClick={() => handleOpportunityModalAction('Reject')}>Reject</button>
        </div>
      </Modal>

      {/* event */}
      <Modal
        isOpen={iseventModalOpen}
        onRequestClose={closeeventModal}
        contentLabel="Example Modal"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>Event Form</h2>
          <button class="col-md-3 btn btn-info admin-close" onClick={closeeventModal}>&times;</button>
        </div>
        {/* <p>{EventId}</p> */}
        <div className='mt-3 mb-5'>
          <h3>Do you approve of your details?</h3>
        </div>
        <div className='row'>
          <button class="col-md-5 btn btn-info" style={{ background: '#134f5c', fontSize: '20px', color: 'white' }} onClick={() => handleEventModalAction('Approve')}>Approve</button>
          <span className='col-md-2'></span>
          <button class="col-md-5 btn btn-info" style={{ background: '#D19426', fontSize: '20px', color: 'white' }} onClick={() => handleEventModalAction('Reject')}>Reject</button>
        </div>
      </Modal>

      {/* member */}
      <Modal
        isOpen={ismemberModalOpen}
        onRequestClose={closememberModal}
        contentLabel="Example Modal"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>Member Form</h2>
          <button class="col-md-3 btn btn-info admin-close" onClick={closememberModal}>&times;</button>
        </div>
        {/* <p>{MemberId}</p> */}
        <div className='mt-3 mb-5'>
          <h3>Do you approve of your details?</h3>
        </div>
        <div className='row'>
          <button class="col-md-5 btn btn-info" style={{ background: '#134f5c', fontSize: '20px', color: 'white' }} onClick={() => handleMemberModalAction('Approve')}>Approve</button>
          <span className='col-md-2'></span>
          <button class="col-md-5 btn btn-info" style={{ background: '#D19426', fontSize: '20px', color: 'white' }} onClick={() => handleMemberModalAction('Reject')}>Reject</button>
        </div>
      </Modal>


      {/* artisan */}
      <Modal
        isOpen={isartisanModalOpen}
        onRequestClose={closeartisanModal}
        contentLabel="Example Modal"
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>Artisan Form</h2>
          <button class="col-md-3 btn btn-info admin-close" onClick={closeartisanModal}>&times;</button>
        </div>
        {/* <p>{ArtisanId}</p> */}
        <div className='mt-3 mb-5'>
          <h3>Do you approve of your details?</h3>
        </div>
        <div className='row'>
          <button class="col-md-5 btn btn-info" style={{ background: '#134f5c', fontSize: '20px', color: 'white' }} onClick={() => handleArtisanModalAction('Approve')}>Approve</button>
          <span className='col-md-2'></span>
          <button class="col-md-5 btn btn-info" style={{ background: '#D19426', fontSize: '20px', color: 'white' }} onClick={() => handleArtisanModalAction('Reject')}>Reject</button>
        </div>
      </Modal>

      {/* delete */}

      <Modal
        isOpen={isdeleteModalOpen}
        onRequestClose={closedeleteModal}
        contentLabel="Example Modal"
        size='md'
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>{model_name} Form</h2>
          <button class="col-md-3 btn btn-info admin-close" onClick={closedeleteModal}>&times;</button>
        </div>
        {/* <p>{SmallerId}</p> */}
        <div className='mt-3 mb-5'>
          <h3>Do you want to delete this details?</h3>
        </div>
        <div className='row'>
          <button class="col-md-5 btn btn-info" style={{ background: '#134f5c', fontSize: '20px', color: 'white' }} onClick={() => handleDeleteModalAction()}>Delete</button>
          <span className='col-md-2'></span>
          <button class="col-md-5 btn btn-info" style={{ background: '#D19426', fontSize: '20px', color: 'white' }} onClick={() => closedeleteModal}>Cancel</button>
        </div>
      </Modal>

    </div>
  );
}

export default Admin_approval;