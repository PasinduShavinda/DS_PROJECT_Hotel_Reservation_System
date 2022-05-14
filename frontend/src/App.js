import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Shv_All_Taxi_Reservations from "./components/shv_TaxiReservation/shv_All_Taxi_Reservations";
import Shv_Create_Taxi_Reservations from "./components/shv_TaxiReservation/shv_Create_Taxi_Reservations";
import Shv_Taxi_Reservations_Home_Page from "./components/shv_TaxiReservation/shv_Taxi_Reservations_Home_Page";
import Shv_Update_Taxi_Reservations from "./components/shv_TaxiReservation/shv_Update_Taxi_Reservations";
import Shv_View_Taxi_Reservations from "./components/shv_TaxiReservation/shv_View_Taxi_Reservations";
import TaxiHomeAdmin from "./components/shv_TaxiReservation/shv_Taxi_Home_Admin";
import TaxiHomeClient from "./components/shv_TaxiReservation/shv_Taxi_Home_Client";

//.............
import Shv_Taxi_NavBar from "./components/shv_NavBars/shv_Taxi_NavBar";
//.........udara.....................................................

//import "bootstrap/dist/css/bootstrap.min.css";
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
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Shv_Taxi_NavBar />
        <Route path="/" exact component={Shv_Taxi_Reservations_Home_Page} />
        <Route path="/AllTaxi" component={Shv_All_Taxi_Reservations} />
        <Route path="/BookTaxi" component={Shv_Create_Taxi_Reservations} />
        <Route
          path="/UpdateTaxi/:id"
          component={Shv_Update_Taxi_Reservations}
        />
        <Route path="/ViewTaxi/:id" component={Shv_View_Taxi_Reservations} />
        <Route path="/TaxiAdminHome" component={TaxiHomeAdmin} />
        <Route path="/TaxiAdminClient" component={TaxiHomeClient} />

        {/* ..........udara............. */}
        {/* Payclient */}
        <Route path="/CardPay" component={CardPayment}></Route>
        <Route path="/success" component={CardPaymentSucces}></Route>
        <Route path="/payHome" component={PaymentHome}></Route>
        <Route path="/addpaypal" component={PayPalPayment}></Route>
        <Route path="/palSuccess" component={PayPalSuccess}></Route>

        {/* Admin */}
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
        <Route path="/cardUpdateAdmin/:id" component={CardUpdateAdmin}></Route>
        <Route path="/cardHomeAdmin" exact component={CardHomeAdmin}></Route>
        <Route path="/cardReport" exact component={CardReport}></Route>
        {/* <Route path="/cardDetails" exact component={CardDetailsAdmin}></Route> */}
      </BrowserRouter>
    );
  }
}
