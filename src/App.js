import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Artisan_Individual_page from './Artisan/individual_page';
import ArtisanForm from './ArtisanForm';
import MemerForm from './MemerForm';
import Allartisanlandingpage from './Artisan/Allartisanlandingpage';
import Artisanpage from './Artisan/Artisanpage';
import Memberlist from './MemerForm/Memberlist';
import Eventopportunitylandingpage from './Event/Eventopportunitylandingpage';
import Aloginpage from './Aloginpage/Aloginpage';
import Singup from './Aloginpage/Singup';
import Eventlistpage from './CommunityAdd/Eventlistpage';
import Opportunity from './CommunityAdd/Opportunity';
import Addopportunityform from './CommunityAdd/Addopportunityform';
import Volunteerform from './Volunteer/Volunteerform';
import Opportunitiessummary from './Opportunitypg.js/Opportunitiessummary';
import Memberprofile from './MemerForm/Memberprofile';
import Artisanprofile from './Artisan/Artisanprofile';
import Smaller from './Smallerform/Smaller';
import Eventform from './CommunityAdd/Eventform';
import New_member_form from './MemerForm/New_member_form';
import Getinvolved from './Getenvol/Getinvolved';
import Homepage from './Home/home';
import EventIndividual from './CommunityAdd/EventIndividual';

// import New_member_list from './MemerForm/New_member_list';
import New_event from './New/New_event';
import EventCalendar from './New/calenderview'
import Event_individual from './Event/Eventindividual'; 
import Artisan_profile from './Profile/Artisan_profile';
import Member_profile from './Profile/Member_profile';
import New_header from './Header/new_header';
import Header from './Header/header';
import Admin_approval from './New/Admin_approval';
import Social_share from './New/Social_share';
import Event_day from './New/Event_day';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/Homepage' element={<Homepage />}></Route>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/Login' element={<Aloginpage />}></Route>
          <Route exact path='/Artisan-Form' element={<ArtisanForm />}></Route>
          <Route exact path='artisan' element={<Allartisanlandingpage />}></Route>
          <Route exact path='/Artisanpage' element={<Artisanpage />}></Route>
          <Route exact path='/Artisanpage/:artisanid' element={<Artisanpage />}></Route>
          <Route exact path='/member' element={<Memberlist />}></Route>
          <Route exact path='/opportunities' element={<Eventopportunitylandingpage />}></Route>
          <Route exact path='/Signup' element={<Singup />}></Route>
          <Route exact path='/Eventform' element={<Eventform />}></Route>
          <Route exact path='/event' element={<Eventlistpage />}></Route>
          <Route exact path='/Opportunity' element={<Opportunity />}></Route>
          <Route exact path='/Opportunity/Addopportunityform' element={<Addopportunityform />}></Route>
          <Route exact path='/Volunteerform' element={<Volunteerform />}></Route>
          <Route exact path='/Opportunitiessummary' element={<Opportunitiessummary />}></Route>
          <Route exact path='/Opportunitiessummary/:opportunityid' element={<Opportunitiessummary />}></Route>
          <Route exact path='/Memberprofile' element={<Memberprofile />}></Route>
          <Route exact path='/Artisanprofile' element={<Artisanprofile />}></Route>
          <Route exact path='/interesting-read' element={<Smaller />}></Route>
          <Route exact path='/Member_form' element={<New_member_form />}></Route>
          <Route exact path='/Getinvolved' element={<Getinvolved />}></Route>
          <Route exact path='/EventIndividual' element={<EventIndividual />}></Route>
          {/* <Route exact path="/event/:eventid" element={<EventIndividual />}></Route> */}

          {/* <Route exact path='/New_member_list' element={<New_member_list/>}></Route> */}
          <Route exact path='/New_event' element={<New_event/>}></Route>
          <Route exact path='/EventCalendar' element={<EventCalendar/>}></Route>
          <Route exact path='/Event_individual' element={<Event_individual/>}></Route>
          <Route exact path='/Artisan_profile' element={<Artisan_profile/>}></Route>
          <Route exact path='/Member_profile' element={<Member_profile/>}></Route>
          <Route exact path='/new_header' element={<New_header/>}></Route>
          <Route exact path='/Header' element={<Header/>}></Route>
          <Route exact path='/Admin_approval' element={<Admin_approval/>}></Route>
          <Route exact path='/Social_share' element={<Social_share/>}></Route>
          <Route exact path='/Event_day' element={<Event_day/>}></Route>
          
          <Route exact  path="/EventIndividual/:eventid" element={<EventIndividual/>}></Route>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;