import React from 'react'
import Header from '../Header/header'
import { FaSearch } from 'react-icons/fa';


function New_event() {
    return (
        <div className='addformfullcss'>
            <div id='myDiv' className='txtbacgroundimg'>
                <Header></Header>
                <h1 className='txtmem'>Events</h1>
            </div>
            <div className='mt-5'>
            </div>
            <div className='container-fluid'>
                <div className='eventcursor'>
                    <a href="/event" className='txteventcol'> <h1>Events</h1></a>
                </div>
                <div style={{ marginBottom: "30px", textAlign: "right" }}>
                    <a href="/Eventform" className='txteventcol'>  <button className='formaddev' style={{width:"0px!important"}}>Add Event</button></a>
                </div>
                <div className='searchevent'>
                    <FaSearch className="search-icon" />
                    <input type='text' className='inptsearch' placeholder='search for events'></input>
                    <button className='btnfinevent'>Find Events</button>
                    <p class="inline-p">List</p>
                    <p class="inline-p">Month</p>
                    <p class="inline-p">Day</p>
                </div>
            </div>
        </div>
    )
}

export default New_event
