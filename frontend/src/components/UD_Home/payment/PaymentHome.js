import React, { Component } from "react";
//import { Link } from "react-router-dom";
import "../payment/style/CardPayment.css";
import "../payment/style/PaymentHome.css";
import BG from "../images/paychoose.gif";

class PaymentHome extends Component {
  render() {
    return (
      <div className="App">
        <center>
          <img className="bg-img" src={BG} alt="bg img" />
        </center>

        <h1 className="topic" style={{ textAlign: "center" }}>
          <b>PAY NOW </b>
        </h1>
        <br />
        <h4 style={{ textAlign: "center" }}>
          Please do payments to proceed ahead with your choice
        </h4>
        <div className="col-10 mt-5 ml-5 mr-10">
          <center>
            <form>
              <h4 style={{ textAlign: "center" }}>Select Payment option:</h4>
              <br />
              <div className="form-group">
                <a class="btn btn-outline-primary btn-lg" href="/CardPay">
                  Card Payments
                </a>
              </div>
              <br />
              <div className="form-group">
                <a class="btn btn-outline-primary btn-lg" href="/addpaypal">
                  PayPal
                </a>
              </div>
              <br></br>
              <div className="form-group">
                {/* <Link
                  to={"/addpaypal/" + this.props.match.params.tot}
                  style={{ textAlign: "center" }}
                  className="btn btn-outline-primary btn-lg"
                  role="button"
                >
                  <span>PayPal</span>
                </Link> */}
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
export default PaymentHome;
