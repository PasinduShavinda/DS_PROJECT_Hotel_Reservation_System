import React, { Component } from "react";
//import {Form,Button,Carousel,FormControl} from 'react-bootstrap'
import { Link } from "react-router-dom";
import "../UD_Home/payment/style/CardPayment.css";
import BG from "../UD_Home/images/paychoose.gif";

class adminHome extends Component {
  render() {
    return (
      <div className="App">
        <center>
          <img className="bg-img" src={BG} alt="bg img" />
        </center>

        <h1 className="topic" style={{ textAlign: "center" }}>
          <b>Admin</b>
        </h1>
        <br />
        {/* <h4 style={{ textAlign: "center" }}>
          Please do payments to proceed ahead with your choice
        </h4> */}
        <div className="col-10 mt-5 ml-5 mr-10">
          <center>
            <form>
              <h4 style={{ textAlign: "center" }}>
                Select Card Operate option:
              </h4>
              <br />
              <div className="form-group">
                <a class="btn btn-outline-primary btn-lg" href="/cardHomeAdmin">
                  Card Details
                </a>
              </div>
              <br />
              <div className="form-group">
                <a
                  class="btn btn-outline-primary btn-lg"
                  href="/payPalHomeAdmin"
                >
                  PayPal Details
                </a>
              </div>

              <br></br>
              <div className="form-group">
                <a class="btn btn-outline-primary btn-lg" href="/">
                  Back
                </a>
              </div>
              <br />
            </form>
          </center>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default adminHome;
