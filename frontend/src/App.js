import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Shv_All_Taxi_Reservations from "./components/shv_TaxiReservation/shv_All_Taxi_Reservations";
import Shv_Create_Taxi_Reservations from "./components/shv_TaxiReservation/shv_Create_Taxi_Reservations";
import Shv_Taxi_Reservations_Home_Page from "./components/shv_TaxiReservation/shv_Taxi_Reservations_Home_Page";
import Shv_Update_Taxi_Reservations from "./components/shv_TaxiReservation/shv_Update_Taxi_Reservations";
import Shv_View_Taxi_Reservations from "./components/shv_TaxiReservation/shv_View_Taxi_Reservations";
import TaxiHomeAdmin from "./components/shv_TaxiReservation/shv_Taxi_Home_Admin";
import TaxiHomeClient from "./components/shv_TaxiReservation/shv_Taxi_Home_Client";
import Shv_AdminTaxiReport from "./components/shv_TaxiReservation/shv_admin_taxi_reservation_report";
import LocationService from "./components/shv_LocationService/LocationService";
// import Home from "./components/Home";
import Shv_Taxi_Booking_Home from "./components/shv_TaxiReservation/shv_Taxi_Booking_Home";
import Footer from "./components/shv_Footer/Footer";

import RoomsHome from "./components/sug_RoomReservations/sug_RoomsHome";
import HomePage from "./components/sug_HomePage/sug_HomePage";

import AllroomReservations from "./components/sug_RoomReservations/sug_AllroomReservations";
import BookedDetails from "./components/sug_RoomReservations/sug_BookedDetails";
import EditReservation from "./components/sug_RoomReservations/sug_EditReservations";
import ReservationDetails from "./components/sug_RoomReservations/sug_reservationdetails";

//import ReserveRoom from "./components/sug_RoomReservations/sug_ReserveRoom";
import RoomBook from "./components/sug_RoomReservations/sug_roombook";

//.........udara.....................................................
import CardPayment from "./components/UD_Home/payment/CardPayment";
import CardPaymentSucces from "./components/UD_Home/payment/CardPaymentSucces";
import PaymentHome from "./components/UD_Home/payment/PaymentHome";
import PayPalPayment from "./components/UD_Home/payment/PayPalPayment";
import PayPalSuccess from "./components/UD_Home/payment/PayPalSuccess";
//...............admin.......
import adminHome from "./components/UD_Admin/AdminHome";
//.............paypal........
//import PayPalDetailsAdmin from "./components/UD_Admin/PayPalDetailsAdmin";
import PayPalUpdateAdmin from "./components/UD_Admin/PayPalUpdateAdmin";
import PayPalHomeAdmin from "./components/UD_Admin/PayPalHomeAdmin";
import PayPalPeport from "./components/UD_Admin/PayPalReport";
//..................card...........
// import CardDetailsAdmin from "./components/UD_Admin/CardDetailsAdmin";
import CardHomeAdmin from "./components/UD_Admin/CardHomeAdmin";
import CardUpdateAdmin from "./components/UD_Admin/CardUpdateAdmin";
import CardReport from "./components/UD_Admin/CardReport";
import admindashbord from "./components/sug_admindashbord/admindashbord";

//Thamodi//
import eventHomePage from "./components/th_eventBooking/th_eventHomePage";
import WeddingHall from "./components/th_eventBooking/th_weddingHall";
import OutdoorFunction from "./components/th_eventBooking/th_outdoorFunction";
import SpecialActivities from "./components/th_eventBooking/th_specialActivities";
import AllEventReservations from "./components/th_eventBooking/th_allEventReservation";
import EventBook from "./components/th_eventBooking/th_eventBooking";
import EditEventBook from "./components/th_eventBooking/th_editEventBDetails";
import EventReservationDetails from "./components/th_eventBooking/th_eventReservationDetails";


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* ..........udara............. */}
          {/* Payclient */}
          <Route path="/CardPay" component={CardPayment}></Route>
          <Route path="/success" component={CardPaymentSucces}></Route>
          <Route path="/payHome" component={PaymentHome}></Route>
          <Route path="/addpaypal" component={PayPalPayment}></Route>
          <Route path="/palSuccess" component={PayPalSuccess}></Route>

          {/* Admin.................................... */}
          <Route path="/adminHome" component={adminHome}></Route>
          {/* paypal */}
          <Route path="/payPalHomeAdmin" component={PayPalHomeAdmin}></Route>
          <Route
            path="/payPalUpdateAdmin/:id"
            component={PayPalUpdateAdmin}
          ></Route>
          <Route path="/payPalPeport" component={PayPalPeport}></Route>
          {/* <Route path="/payPalDetails" component={PayPalDetailsAdmin}></Route> */}

          {/* card */}
          <Route
            path="/cardUpdateAdmin/:id"
            component={CardUpdateAdmin}
          ></Route>
          <Route path="/cardHomeAdmin" exact component={CardHomeAdmin}></Route>
          <Route path="/cardReport" exact component={CardReport}></Route>
          {/* <Route path="/cardDetails" exact component={CardDetailsAdmin}></Route> */}

          {/* shv............................................................................ */}
          <Route
            path="/Taxi_Reservations_Home"
            exact
            component={Shv_Taxi_Reservations_Home_Page}
          />
          <Route path="/AllTaxi" component={Shv_All_Taxi_Reservations} />
          <Route path="/BookTaxi" component={Shv_Create_Taxi_Reservations} />
          <Route
            path="/UpdateTaxi/:id"
            component={Shv_Update_Taxi_Reservations}
          />
          <Route path="/ViewTaxi/:id" component={Shv_View_Taxi_Reservations} />
          <Route path="/TaxiAdminHome" component={TaxiHomeAdmin} />
          <Route path="/TaxiAdminClient" component={TaxiHomeClient} />
          <Route path="/location" component={LocationService} />
          <Route path="/AdminTaxiReport" component={Shv_AdminTaxiReport} />
          <Route path="/TaxiBookHome" component={Shv_Taxi_Booking_Home} />

          <Route
            path="/Allreservations"
            exact
            component={AllroomReservations}
          ></Route>
          <Route path="/reserveroom" exact component={RoomBook}></Route>
          <Route
            path="/editReservation/:id"
            exact
            component={EditReservation}
          ></Route>
          <Route
            path="/reservationdetails/:id"
            exact
            component={ReservationDetails}
          ></Route>

           <Route
            path="/admindashbord"
            exact
            component={admindashbord}
          ></Route>
          <Route path="/bookeddetails" exact component={BookedDetails}></Route>
          <Route path="/roomhomepage" exact component={RoomsHome}></Route>
          <Route path="/" exact component={HomePage}></Route>

          {/*Thamodi*/}
          <Route path="/eventHome" exact component={eventHomePage}></Route>
            <Route path="/WeddingHall" exact component={WeddingHall}></Route>
            <Route path="/OutdoorFunction" exact component={OutdoorFunction}></Route>
            <Route path="/SpecialActivities" exact component={SpecialActivities}></Route>
            <Route path="/AllEventReservations" exact component={AllEventReservations}></Route>
            <Route path="/EventBook" exact component={EventBook}></Route>
            <Route path="/EditEventBook/:id" exact component={EditEventBook}></Route>
            <Route path="/EventReservationDetails" exact component={EventReservationDetails}></Route>

        </BrowserRouter>
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}
