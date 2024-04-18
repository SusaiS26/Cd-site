import React from 'react'
import './Communityadd.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Images from '../Images/Imagespic';

function Communityadd() {
  return (
    <div className='textrefer'>
      <Header></Header>
      <div className='txtfullcadd '>
        <div className='container mt-5'>
          <div className='col-12 row mt-3 '>
            <label className='label-headone txtaddnew'>Add New Event </label>
          </div>
          <div className='col-12 row mt-3'>
            <label className='label-headtwo '>EVENT TITLE<span className='required-color'>(Required)</span></label>
            <input type='text' className='form-control txtinputbox' />
          </div>
          <div className='col-12 row mt-3 communitymrg'>
            <label className='label-headthree'>EVENT DESCRIPTION <span className='required-color'>(Required)</span></label>
            <textarea type='text' className='text-area mb-3' row='10' col='10'></textarea>
          </div>
          <div className='col-12 row mt-3 communitymrg'>
            <div className='txteventtime'>
              <div className='event-time-header'>
                <label className='label-head '>EVENT TIME & DATE </label>
              </div>
              <div className='col-12 row mt-4 start-end'>
                <h4>Start/End:</h4>
                {/* <select id="countries" class='form-control foreventstatus'>
                 
                </select> */}
                <input type='text' className='form-control foreventstatustime' />
                <input type='text' className='form-control foreventstatustime' />
                <div>
                  <p className='todate'>to</p>
                </div>
                <input type='text' className='form-control foreventstatustime' />
                <input type='text' className='form-control foreventstatustime' />
              </div>
              <div className='alldayevent'>
                <input type='Checkbox' name='radiofull' className='mx-2' />
                <label className='checkbox-label'>All Day Event</label>
              </div>
            </div>
          </div>
          <div className='col-12 row mt-3 communitymrg'>
            <div className='txteventtime'>
              <div className='event-time-header'>
                <label className='label-head '>EVENT IMAGE</label>
              </div>
              <div className=' start-end'>
                <div class="chooseimg">
                  <img src={Images.imageicon}></img>
                </div>
                <div class="chooseimg">
                  <p>Choose a .jpg, .png, or .gif file under 32 MB in size.</p>
                </div>
                <div >
                  <input type='file' className='form-control uploadf'></input>

                </div>
              </div>
            </div>
          </div>
          <div className='col-12 row mt-3 communitymrg'>
            <div className='txteventtime'>
              <div className='event-time-header'>
                <label className='label-head '>EVENT CATEGORIES </label>
              </div>
              <div className='col-12 row mt-3'>
                <select className='form-control formalign'>
                  <option>Click to Select...</option>
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>USA</option>
                  <option>Dubai</option>
                  <option>Southi</option>
                  <option>Landon</option>
                </select>
              </div>
            </div>
          </div>
          <div className='col-12 row mt-3 communitymrg'>
            <div className='txteventtime'>
              <div className='event-time-header'>
                <label className='label-head '>EVENTS STATUS </label>
              </div>

              <div class='col-12 row mt-3'>
                <label for="countries" class="form-label">Set status:</label>
                <select id="countries" class='form-control foreventstatus'>
                  <option>Click to Select...</option>
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>USA</option>
                  <option>Dubai</option>
                  <option>Southi</option>
                  <option>Landon</option>
                </select>
              </div>

            </div>
          </div>
          <div className='col-12 row mt-3 communitymrg'>
            <div className='txteventtime'>
              <div className='event-time-header'>
                <label className='label-head '>VENUE DETAILS </label>
              </div>

              <div class='col-12 row mt-3'>
                <label for="countries" class="form-label">Venue:</label>
                <select id="countries" class='form-control foreventvenue'>
                  <option>Click to Select...</option>
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>USA</option>
                  <option>Dubai</option>
                  <option>Southi</option>
                  <option>Landon</option>
                </select>
              </div>

            </div>
          </div>
          <div className='col-12 row mt-3 communitymrg'>
            <div className='txteventtime'>
              <div className='event-time-header'>
                <label className='label-head '>ORGANIZER DETAILS</label>
              </div>

              <div class='col-12 row mt-3'>
                <label for="countries" class="form-label">Organizer:</label>
                <select id="countries" class='form-control foreventorgani'>
                  <option>Create or Find an Organizer...</option>
                  <option>India</option>
                  <option>Pakistan</option>
                  <option>USA</option>
                  <option>Dubai</option>
                  <option>Southi</option>
                  <option>Landon</option>
                </select>
              </div>
              <div>
                <button type="button" class="btn-primary addanotherorg">ADD ANOTHER ORGANIZER</button>
              </div>
            </div>
          </div>
          <div className='col-12 row mt-3 communitymrg'>
            <div className='txteventtime'>
              <div className='event-time-header'>
                <label className='label-head '>EVENT WEBSITE</label>
              </div>
              <div class='col-12 row mt-3'>
                <label for="countries" class="form-label">External Link:</label>
                <input type='text' placeholder='Enter URL for event information' class='form-control foreventextranal' />
              </div>
            </div>
          </div>
          <div className='col-12 row mt-3 communitymrg'>
            <div className='txteventtime'>
              <div className='event-time-header'>
                <label className='label-head '>EVENT COST</label>
              </div>
              <div class='col-12 row mt-3'>
                <label for="countries" class="form-label label-cost">Cost:</label>
                <input type='text' class='form-control foreventcost' />
                <p className='txtleavebla'>Leave blank to hide the field. Enter a 0 for events that are free.</p>
              </div>
            </div>
          </div>
          <div>
                <button type="button" class="btn-primary addsubmitevent">SUBMIT EVENT</button>
              </div>
        </div>
      </div>

      <Footer></Footer>
    </div >
  );
}

export default Communityadd;
