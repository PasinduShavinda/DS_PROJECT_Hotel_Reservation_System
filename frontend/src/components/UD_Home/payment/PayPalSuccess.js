import React, { Component } from "react";
import BG from "../images/successpayment.gif";
import "../payment/style/PayPalPayment.css";

class PayPalSuccess extends Component {
  render() {
    return (
      <center>
        <br />
        <br />
        <img className="sucess-img" src={BG} alt="bg img" />
        <br />
        <br />
        <h1 style={{ color: "#000080", fontStyle: "italic" }}>
          <b>Your Payment was Successfull</b>
        </h1>
        <br />
      </center>
    );
  }
}

export default PayPalSuccess;
