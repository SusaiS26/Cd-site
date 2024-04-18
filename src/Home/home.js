import React, { useState, useEffect } from 'react';
import './home.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { apiURL } from '../Commen/apiurl';
import axios from 'axios';
import Swal from 'sweetalert2';

function App() {
  const [activeCity, setActiveCity] = useState('London');
  const [event_list, setEventList] = useState([]);
  const [member_date, setmember_data] = useState([])
  const [artisan_list, setartisan_list] = useState([])
  const [opportunity_list, setopportunity_list] = useState([])
  const [volunteer_list, setVolunteer_list] = useState([])
  const [smaller_list, setsmaller_list] = useState([])


  const openCity = (cityName) => {setActiveCity(cityName);};
  
  
  useEffect(() => {fetcheventdetails();}, []);
  useEffect(() => { fetchArisandetails();}, []);
  useEffect(() => {fetchmemberdetails();}, []);
  useEffect(() => {fetchOpportunitydetails();}, []);
  useEffect(() => {fetchVolunteerdetails();}, []);
  useEffect(() => {fetchsmallerdetails();}, []);
  

  const showMemberAlerter = (eventId) => {
    Swal.fire({
      title: 'Member details',
      showCancelButton: true, // This adds the "Reject" button
      confirmButtonText: 'Approve',
      cancelButtonText: 'Reject', // Specify the "Reject" button label
      text: `Event ID: ${eventId}`,
    }).then((result) => {
        if (result.isConfirmed) {
            // Handle the "Approve" button click
            // Make a GET request to your FastAPI endpoint
            axios.get(`${apiURL}/UserMaster/member_data_approw?id=${eventId}`)
              .then((response) => {
                // Handle the response from the server
                if (response.data.code === 200) {
                  Swal.fire('Event Approved', '', 'success');
                } else {
                  Swal.fire('Approval Failed', 'Error occurred while approving the event', 'error');
                }
              })
              .catch((error) => {
                Swal.fire('Error', 'An error occurred while processing the request', 'error');
              });
          } else if (result.isDismissed) {
        // Handle the "Reject" button click
        // You can put your rejection logic here
        Swal.fire('Event Rejected', '', 'error');
      }
    });
  }
  
  const showAlerterr = (eventId) => {
    Swal.fire({
      title: 'Event details',
      showCancelButton: true, // This adds the "Reject" button
      confirmButtonText: 'Approve',
      cancelButtonText: 'Reject', // Specify the "Reject" button label
      text: `Event ID: ${eventId}`,
    }).then((result) => {
        if (result.isConfirmed) {
            // Handle the "Approve" button click
            // Make a GET request to your FastAPI endpoint
            axios.get(`${apiURL}/UserMaster/event_action_get?id=${eventId}`)
              .then((response) => {
                // Handle the response from the server
                if (response.data.code === 200) {
                  Swal.fire('Event Approved', '', 'success');
                } else {
                  Swal.fire('Approval Failed', 'Error occurred while approving the event', 'error');
                }
              })
              .catch((error) => {
                Swal.fire('Error', 'An error occurred while processing the request', 'error');
              });
          } else if (result.isDismissed) {
        // Handle the "Reject" button click
        // You can put your rejection logic here
        Swal.fire('Event Rejected', '', 'error');
      }
    });
  }
  
  const showArtisanAlerter = (eventId) => {
    Swal.fire({
      title: 'Event details',
      showCancelButton: true, // This adds the "Reject" button
      confirmButtonText: 'Approve',
      cancelButtonText: 'Reject', // Specify the "Reject" button label
      text: `Event ID: ${eventId}`,
    }).then((result) => {
        if (result.isConfirmed) {
            axios.get(`${apiURL}/UserMaster/approw_artician_form_data?id=${eventId}`)
              .then((response) => {
                if (response.data.code === 200) {
                  Swal.fire('Event Approved', '', 'success');
                } else {
                  Swal.fire('Approval Failed', 'Error occurred while approving the event', 'error');
                }
              })
              .catch((error) => {
                Swal.fire('Error', 'An error occurred while processing the request', 'error');
              });
          } else if (result.isDismissed) {
        // Handle the "Reject" button click
        // You can put your rejection logic here
        Swal.fire('Event Rejected', '', 'error');
      }
    });
  }
  const showopportunityAlerter = (eventId) => {
    Swal.fire({
      title: 'Event details',
      showCancelButton: true, // This adds the "Reject" button
      confirmButtonText: 'Approve',
      cancelButtonText: 'Reject', // Specify the "Reject" button label
      text: `Event ID: ${eventId}`,
    }).then((result) => {
        if (result.isConfirmed) {
            // Handle the "Approve" button click
            // Make a GET request to your FastAPI endpoint
            axios.get(`${apiURL}/UserMaster/opportunity_action_approw?id=${eventId}`)
              .then((response) => {
                // Handle the response from the server
                if (response.data.code === 200) {
                  Swal.fire('Event Approved', '', 'success');
                } else {
                  Swal.fire('Approval Failed', 'Error occurred while approving the event', 'error');
                }
              })
              .catch((error) => {
                Swal.fire('Error', 'An error occurred while processing the request', 'error');
              });
          } else if (result.isDismissed) {
        // Handle the "Reject" button click
        // You can put your rejection logic here
        Swal.fire('Event Rejected', '', 'error');
      }
    });
  }
  const showVolunteerAlerter = (eventId) => {
    Swal.fire({
      title: 'Event details',
      showCancelButton: true, // This adds the "Reject" button
      confirmButtonText: 'Approve',
      cancelButtonText: 'Reject', // Specify the "Reject" button label
      text: `Event ID: ${eventId}`,
    }).then((result) => {
        if (result.isConfirmed) {
            // Handle the "Approve" button click
            // Make a GET request to your FastAPI endpoint
            axios.get(`${apiURL}/UserMaster/volunteer_action_approw?id=${eventId}`)
              .then((response) => {
                // Handle the response from the server
                if (response.data.code === 200) {
                  Swal.fire('Event Approved', '', 'success');
                } else {
                  Swal.fire('Approval Failed', 'Error occurred while approving the event', 'error');
                }
              })
              .catch((error) => {
                Swal.fire('Error', 'An error occurred while processing the request', 'error');
              });
          } else if (result.isDismissed) {
        // Handle the "Reject" button click
        // You can put your rejection logic here
        Swal.fire('Event Rejected', '', 'error');
      }
    });
  }
  const showsmallerAlerter = (eventId) => {
    Swal.fire({
      title: 'Event details',
      showCancelButton: true,
      confirmButtonText: 'Approve',
      cancelButtonText: 'Reject',
      text: `Event ID: ${eventId}`,
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the "Approve" button click
        // Make a GET request to your FastAPI endpoint
        axios.get(`${apiURL}/UserMaster/smaller_action_approw?id=${eventId}`)
          .then((response) => {
            // Handle the response from the server
            if (response.data.code === 200) {
              Swal.fire('Event Approved', '', 'success');
            } else {
              Swal.fire('Approval Failed', 'Error occurred while approving the event', 'error');
            }
          })
          .catch((error) => {
            Swal.fire('Error', 'An error occurred while processing the request', 'error');
          });
      } else if (result.isDismissed) {
        // Handle the "Reject" button click
        Swal.fire('Event Rejected', '', 'error');
      }
    });
  };
  
  

  const fetcheventdetails = () => {
    axios
      .get(`${apiURL}/UserMaster/get_action_events`, {
        headers: {
          accept: 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setEventList(resp.data.data);
        console.log('yyyyy', JSON.parse(resp.data.data[0].event_image));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fetchOpportunitydetails = () => {
    // const token = sessionStorage.getItem('data')
    axios.get(`${apiURL}/UserMaster/get_action_opportunity`, {
        headers: {
            "accept": "application/json",
            // 'Authorization': `Bearer ${token}`,
        }
    }).then(resp => {
        console.log(resp, "0000000000000000000000000")
        setopportunity_list(resp.data.data)
    })
        .catch(err => {
            console.log(err)
        })
  }
  const fetchmemberdetails = () => {
    // const token = sessionStorage.getItem('data')
    axios.get(`${apiURL}/UserMaster/UserMaster/member_form_data_action_data_view`, {
        headers: {
            "accept": "application/json",
            // 'Authorization': `Bearer ${token}`,
        }
    }).then(resp => {
        console.log(resp, "0000000000000000000000000")
        setmember_data(resp.data.data)
    })
        .catch(err => {
            console.log(err)
        })
  }
const fetchArisandetails = () => {
    axios.get(`${apiURL}/UserMaster/UserMaster/artician_data_Action_data_view`, {
        headers: {
            "accept": "application/json",
        }
    }).then(resp => {

        console.log(resp, "0000000000000000000000000")

        setartisan_list(resp.data.data)
    })
        .catch(err => {
            console.error('Error parsing image data:', err);
        })
  }

  const fetchVolunteerdetails = () => {
    axios.post(`${apiURL}/UserMaster/volunteer_form_view_action`, {
        headers: {
            "accept": "application/json",
        }
    }).then(resp => {
        console.log(resp, "0000000000000000000000000")
        setVolunteer_list(resp.data.data)
    })
        .catch(err => {
            console.error('Error parsing image data:', err);
        })
  }

  const fetchsmallerdetails = () => {
    axios
      .post(`${apiURL}/UserMaster/smaller_form_view_action`, {
        headers: {
          accept: 'application/json',
          // 'Authorization': `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setsmaller_list(resp.data.data);
        console.log('yyyyy', JSON.parse(resp.data.data[0].event_image));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <div className="App">
        <div className="w3-container">
          {/* <div className="w3-bar w3-black">
            <button className={`w3-bar-item w3-button ${activeCity === 'Artisan' ? 'active' : ''}`} onClick={() => openCity('Artisan')}>
              Artisan
            </button>
            <button className={`w3-bar-item w3-button ${activeCity === 'Member' ? 'active' : ''}`} onClick={() => openCity('Member')}>
              Member
            </button>
            <button className={`w3-bar-item w3-button ${activeCity === 'Event' ? 'active' : ''}`} onClick={() => openCity('Event')}>
              Event
            </button>
            <button className={`w3-bar-item w3-button ${activeCity === 'opportunity' ? 'active' : ''}`} onClick={() => openCity('opportunity')}>
              opportunity
            </button>
            <button className={`w3-bar-item w3-button ${activeCity === 'Volunteer' ? 'active' : ''}`} onClick={() => openCity('Volunteer')}>
              Volunteer
            </button>
            <button className={`w3-bar-item w3-button ${activeCity === 'Smaller' ? 'active' : ''}`} onClick={() => openCity('Smaller')}>
              Smaller
            </button>
          </div> */}
          <div className="d-flex justify-content-between">
    <button className={`w3-bar-item w3-button ${activeCity === 'Artisan' ? 'active' : ''}`} onClick={() => openCity('Artisan')}>
      Artisan
    </button>
    <button className={`w3-bar-item w3-button ${activeCity === 'Member' ? 'active' : ''}`} onClick={() => openCity('Member')}>
      Member
    </button>
    <button className={`w3-bar-item w3-button ${activeCity === 'Event' ? 'active' : ''}`} onClick={() => openCity('Event')}>
      Event
    </button>
    <button className={`w3-bar-item w3-button ${activeCity === 'opportunity' ? 'active' : ''}`} onClick={() => openCity('opportunity')}>
      Opportunity
    </button>
    <button className={`w3-bar-item w3-button ${activeCity === 'Volunteer' ? 'active' : ''}`} onClick={() => openCity('Volunteer')}>
      Volunteer
    </button>
    <button className={`w3-bar-item w3-button ${activeCity === 'Smaller' ? 'active' : ''}`} onClick={() => openCity('Smaller')}>
      Smaller
    </button>
  </div>
        
          
  <div>
          <div id="Artisan" className={`w3-container city ${activeCity === 'Artisan' ? 'show' : ''}`}>
            <h2>Artisan</h2>
            <div className='table-responsive'>
            <table className="table">
              <tr>
                <th>Name</th>
                <th>City</th>
                <th>State</th>
                <th>Organization Name</th>
                <th>Communicate Languages</th>
                <th>Phone Number</th>
                <th>Action</th>
              </tr>
              {artisan_list && artisan_list.map((artisan, i) => (
              <tr  key={i}>
                <td>{artisan.are_you}</td>
                <td>{artisan.your_city}</td>
                <td>{artisan.state}</td>
                <td>{artisan.organization_name}</td>
                <td>{artisan.communicate_languages}</td>
                <td>{artisan.contact_no}</td>
                <td value={artisan.id}>
                <button className="w3-bar-item w3-button" onClick={() => showArtisanAlerter(artisan.id)}>
                    Action
                </button>
                </td>
              </tr>

                ))}
            </table>
            </div>
          </div>
          <div id="Member" className={`w3-container city ${activeCity === 'Member' ? 'show' : ''}`}>
            <h2>Member</h2>
            <div className='table-responsive'>
            <table className="table">
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Languages</th>
                <th>Type Of Organization</th>
                <th>Event End Time</th>
                <th>Email ID</th>
                <th>Action</th>
              </tr>
              {member_date && member_date.map((members, i) => (
              <tr  key={i}>
                <td>{members.name}</td>
                <td>{members.contact_number}</td>
                <td>{members.communicate_languages}</td>
                <td>{members.type_of_organization}</td>
                <td>{members.event_end_time}</td>
                <td>{members.your_email}</td>
                <td value={members.id}>
                <button className="w3-bar-item w3-button" onClick={() => showMemberAlerter(members.id)}>
                    Action
                </button>
                </td>
              </tr>

                ))}
            </table>
            </div>
          </div>
          <div id="Event" className={`w3-container city ${activeCity === 'Event' ? 'show' : ''}`}>
            <h2>Event Data</h2>
            <div className='table-responsive'>
            <table className="table">
              <tr>
                <th>Tittle</th>
                <th>Event Start Date</th>
                <th>Event Start Time</th>
                <th>Event End Date</th>
                <th>Event End Time</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
              {event_list && event_list.map((event, i) => (
              <tr  key={i}>
                <td>{event.event_title}</td>
                <td>{event.event_start_date}</td>
                <td>{event.event_start_time}</td>
                <td>{event.event_end_date}</td>
                <td>{event.event_end_time}</td>
                <td>{event.description}</td>
                <td value={event.id}>
                <button className="w3-bar-item w3-button" onClick={() => showAlerterr(event.id)}>
                    Action
                </button>
                </td>
              </tr>

                ))}
            </table>
            </div>
          </div>         
          <div id="opportunity" className={`w3-container city ${activeCity === 'opportunity' ? 'show' : ''}`}>
            <h2>opportunity</h2>
            <div className='table-responsive'>
            <table className="table">
              <tr>
                <th>Tittle</th>
                <th>Opportunity Type</th>
                <th>location</th>
                <th>Closing date</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
              {opportunity_list && opportunity_list.map((opportunity_list, i) => (
              <tr  key={i}>
                <td>{opportunity_list.tittle}</td>
                <td>{opportunity_list.Opportunity_type}</td>
                <td>{opportunity_list.location}</td>
                <td>{opportunity_list.closing_date}</td>
                <td>{opportunity_list.job_description}</td>
                <td value={opportunity_list.id}>
                <button className="w3-bar-item w3-button" onClick={() => showopportunityAlerter(opportunity_list.id)}>
                    Action
                </button>
                </td>
              </tr>

                ))}
            </table>
            </div>
          </div>    
          <div id="Volunteer" className={`w3-container city ${activeCity === 'Volunteer' ? 'show' : ''}`}>
            <h2>Volunteer</h2>
            <div className='table-responsive'>
            <table className="table">
              <tr>
                <th>You Are</th>
                <th>Mobile No</th>
                <th>Location</th>
                <th>Member of CD</th>
                <th>Languages</th>
                <th>Action</th>
              </tr>
              {volunteer_list && volunteer_list.map((Volunteer_list, i) => (
              <tr  key={i}>
                <td>{Volunteer_list.You_are}</td>
                <td>{Volunteer_list.Mobile_no}</td>
                <td>{Volunteer_list.location}</td>
                <td>{Volunteer_list.Are_you_member_of_cd}</td>
                <td>{Volunteer_list.Languages_you_can_read}</td>
                <td value={Volunteer_list.id}>
                <button className="w3-bar-item w3-button" onClick={() => showVolunteerAlerter(Volunteer_list.id)}>
                    Action
                </button>
                </td>
              </tr>

                ))}
            </table>
            </div>
          </div>
          <div id="Smaller" className={`w3-container city ${activeCity === 'Smaller' ? 'show' : ''}`}>
            <h2>Smaller</h2>
            <div className='table-responsive'>
            <table className="table">
              <tr>
                <th>Tittle</th>
                <th>Website Name</th>
                <th>Description</th>             
                <th>Action</th>             
              </tr>
              {smaller_list && smaller_list.map((Smaller, i) => (
              <tr  key={i}>
                <td>{Smaller.Tittle}</td>
                <td>{Smaller.website_name}</td>
                <td>{Smaller.Description}</td>
                <td>
                <button className="w3-bar-item w3-button" onClick={() => showsmallerAlerter(Smaller.id)}>
                    Action
                </button>
                </td>
              </tr>

                ))}
            </table>
            </div>
          </div>
          
            </div>


          
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;