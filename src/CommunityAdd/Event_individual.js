import React from 'react'

function Event_individual() {

    const [event_list, setevent_list] = useState([]);
    useEffect(() => {
        fetcheventdetails();
    }, []);

      const fetcheventdetails = () => {
        axios.get(`${apiURL}/UserMaster/get_all_events`, {
            headers: {
                "accept": "application/json",
            }
        }).then(resp => {
            setevent_list(resp.data.data[0]);
        })
            .catch(err => {
                console.log(err)
            })
    }
    
      const formattedStartDate = new Date(event_start_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <h2>{event_title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>Event Start Date: {formattedStartDate}</p>
                        <img src={event_image} alt="Event" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <p>Event Description:</p>
                        <p>{event_description}</p>
                        <div className="event-details-info">
                            <h3>Details</h3>
                            <p>Start Date: {formattedStartDate}</p>
                            <p>End Date: {event_details.end_date}</p>
                            <p>URL: {event_details.url}</p>
                            <p>Venue: {event_details.venue}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event_individual
