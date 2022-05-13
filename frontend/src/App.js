import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Shv_All_Taxi_Reservations from './components/shv_TaxiReservation/shv_All_Taxi_Reservations';
import Shv_Create_Taxi_Reservations from './components/shv_TaxiReservation/shv_Create_Taxi_Reservations';
import Shv_Taxi_Reservations_Home_Page from './components/shv_TaxiReservation/shv_Taxi_Reservations_Home_Page';
import Shv_Update_Taxi_Reservations from './components/shv_TaxiReservation/shv_Update_Taxi_Reservations';
import Shv_View_Taxi_Reservations from './components/shv_TaxiReservation/shv_View_Taxi_Reservations';
import TaxiHomeAdmin from './components/shv_TaxiReservation/shv_Taxi_Home_Admin';
import TaxiHomeClient from './components/shv_TaxiReservation/shv_Taxi_Home_Client';
import Shv_AdminTaxiReport from './components/shv_TaxiReservation/shv_admin_taxi_reservation_report';
import LocationService from './components/shv_LocationService/LocationService';
import Home from './components/Home';
import Shv_Taxi_Booking_Home from './components/shv_TaxiReservation/shv_Taxi_Booking_Home';
import Footer from './components/shv_Footer/Footer';








import RoomsHome from "./components/sug_RoomReservations/sug_RoomsHome";
import HomePage from "./components/sug_HomePage/sug_HomePage";

import AllroomReservations from "./components/sug_RoomReservations/sug_AllroomReservations";
import BookedDetails from "./components/sug_RoomReservations/sug_BookedDetails";
import EditReservation from "./components/sug_RoomReservations/sug_EditReservations";
import ReservationDetails from "./components/sug_RoomReservations/sug_reservationdetails";

//import ReserveRoom from "./components/sug_RoomReservations/sug_ReserveRoom";
import RoomBook from "./components/sug_RoomReservations/sug_roombook";

export default class App extends Component {
    render(){

        return( 
          <div>
          <BrowserRouter>

          
          <Route path = "/TaxiHome"  exact component = {Shv_Taxi_Reservations_Home_Page}/>
          <Route path = "/AllTaxi" component = {Shv_All_Taxi_Reservations}/>
          <Route path = "/BookTaxi" component = {Shv_Create_Taxi_Reservations}/>
          <Route path = "/UpdateTaxi/:id" component = {Shv_Update_Taxi_Reservations}/>
          <Route path = "/ViewTaxi/:id" component = {Shv_View_Taxi_Reservations}/>
          <Route path = "/TaxiAdminHome" component = {TaxiHomeAdmin}/>
          <Route path = "/TaxiAdminClient" component = {TaxiHomeClient}/>
          <Route path = "/location" component = {LocationService}/>
          <Route path = "/AdminTaxiReport" component = {Shv_AdminTaxiReport}/>
          <Route path = "/TaxiBookHome" component = {Shv_Taxi_Booking_Home}/>


          <Route path="/Allreservations" exact component={AllroomReservations}></Route>
          <Route path="/reserveroom" exact component={RoomBook}></Route>
          <Route path="/editReservation/:id" exact component={EditReservation}></Route>
          <Route path="/reservationdetails/:id" exact component={ReservationDetails}></Route>
         <Route path="/bookeddetails" exact component={BookedDetails}></Route>
         <Route path="/roomhomepage" exact component={RoomsHome}></Route>
          <Route path="/" exact component={HomePage}></Route>

          </BrowserRouter>
          <br/><br/>
          <Footer/>
          </div>
        )
      }
    }
