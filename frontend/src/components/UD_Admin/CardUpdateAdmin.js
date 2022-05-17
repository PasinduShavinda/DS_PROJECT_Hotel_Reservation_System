import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

class CardUpdateAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterPayment: "",
      cardnumber: "",
      customerName: "",
      expiry: "",
      cvc: "",
      focus: "",
    };
  }
  //.........................................
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;
    const { enterPayment, cardnumber, customerName, expiry, cvc } = this.state;

    const data = {
      enterPayment: enterPayment,
      cardnumber: cardnumber,
      customerName: customerName,
      expiry: expiry,
      cvc: cvc,
    };
    console.log(data);

    //validation start here
    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    const card = /^[0-9\b]+$/;

    if (
      cardnumber.length === 0 ||
      customerName.length === 0 ||
      expiry.length === 0 ||
      cvc.length === 0
    ) {
      swal(
        "Fields can not be empty!",
        "Please fill all the information!",
        "error"
      );
    } else if (!card.test(Number(enterPayment))) {
      swal(
        "Invalid Payment",
        "Payment cannot contain any Characters!",
        "error"
      );
    } else if (!card.test(Number(cardnumber))) {
      swal(
        "Invalid Card Number",
        "Card Number cannot contain any Characters!",
        "error"
      );
    } else if (!name.test(String(customerName))) {
      swal(
        "Invalid Customer Name",
        "Customer name cannot contain any Numbers!",
        "error"
      );
    } else if (cardnumber.length > 16) {
      swal(
        "Invalid Card Number!",
        "Do not enter more than 16 Numbers!",
        "error"
      );
    } else if (cardnumber.length < 16) {
      swal(
        "Invalid Card Number!",
        "Do not enter less than 16 Numbers!",
        "error"
      );
    } else if (customerName.length > 20) {
      swal(
        "Invalid Customer Name!",
        "Do not enter more than 20 letters!",
        "error"
      );
    } else if (customerName.length < 3) {
      swal("Invalid Customer Name!", "Please check your name again!", "error");
    } else if (!card.test(Number(cvc))) {
      swal("Invalid CVC Number", "CVC cannot contain any Characters!", "error");
    } else if (cvc.length < 3) {
      swal("Invalid CVC Number", "CVC should contain 3 numbers only!", "error");
    } else if (cvc.length > 3) {
      swal("Invalid CVC Number", "CVC should contain 3 numbers only!", "error");
    }
    //validation end here
    else {
      axios
        .put(`http://localhost:8280/cardpay/updateCardpay/${id}`, data)
        .then((res) => {
          if (res.data.success) {
            alert("Card updated successfully");

            this.setState({
              enterPayment: "",
              cardnumber: "",
              customerName: "",
              expiry: "",
              cvc: "",
            });
          }
        });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    //card/${id}/
    axios.get(`http://localhost:8280/cardpay/getCardpay/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          enterPayment: res.data.card.enterPayment,
          cardnumber: res.data.card.cardnumber,
          customerName: res.data.card.customerName,
          expiry: res.data.card.expiry,
          cvc: res.data.card.cvc,
        });
        console.log(this.state.card);
      }
    });
  }

  render() {
    return (
      <div className="container" align="center">
        <br />
        <br />
        <Cards
          payment={this.state.enterPayment}
          number={this.state.cardnumber}
          name={this.state.customerName}
          expiry={this.state.expiry}
          cvc={this.state.cvc}
          focused={this.state.focus}
        />
        <br />
        <h2>Update Card Details Here</h2>

        <br />
        <form style={{ width: "40%" }}>
          <label>Enter Payment: </label>
          <input
            class="form-control"
            type="tel"
            name="enterPayment"
            placeholder="Enter Payment"
            value={this.state.enterPayment}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br />
          <label>Enter Card Number: </label> <br />
          <input
            class="form-control"
            type="tel"
            name="cardnumber"
            placeholder="Card Number"
            value={this.state.cardnumber}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br />
          <label> Enter customer Name: </label> <br />
          <input
            class="form-control"
            type="text"
            name="customerName"
            placeholder="customer Name"
            value={this.state.customerName}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br />
          <label>Enter MM/YY: </label> <br />
          <input
            class="form-control"
            type="text"
            name="expiry"
            placeholder="MM/YY"
            value={this.state.expiry}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br />
          <label>Enter CVC: </label> <br />
          <input
            class="form-control"
            type="tel"
            name="cvc"
            placeholder="cvc"
            value={this.state.cvc}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <br />
          <br />
          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; UPDATE
          </button>
          <br></br>
          <br></br>
          <div className="form-group">
            <a class="btn btn-outline-primary btn-lg" href="/cardHomeAdmin">
              Back
            </a>
          </div>
        </form>
      </div>
    );
  }
}
export default CardUpdateAdmin;
