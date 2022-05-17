import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import "../payment/style/PayPalPayment.css";
class PayPalPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cpayment: "",
      cname: "",
      cemail: "",
      cpassword: "",
    };
  }
  changecPaymentHandler = (event) => {
    this.setState({ cpayment: event.target.value });
  };
  changeNameHandler = (event) => {
    this.setState({ cname: event.target.value });
  };
  changeEmailHandler = (event) => {
    this.setState({ cemail: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ cpassword: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { cpayment, cname, cemail, cpassword } = this.state;

    const Paypal = {
      cpayment: cpayment,
      cname: cname,
      cemail: cemail,
      cpassword: cpassword,
    };
    console.log(Paypal);

    //validation start here
    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    const email = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const UD_card = /^[0-9\b]+$/;

    if (
      cpayment.length === 0 ||
      cname.length === 0 ||
      cemail.length === 0 ||
      cpassword.length === 0
    ) {
      swal(
        "Fields can not be empty!",
        "Please fill all the information!",
        "error"
      );
    } else if (!UD_card.test(Number(cpayment))) {
      swal("Invalid Payment", "Payment cannot contain any Numbers!", "error");
    } else if (!name.test(String(cname))) {
      swal(
        "Invalid Customer Name",
        "Customer name cannot contain any Numbers!",
        "error"
      );
    } else if (cname.length > 20) {
      swal(
        "Invalid Customer Name!",
        "Do not enter more than 20 letters!",
        "error"
      );
    } else if (cname.length < 3) {
      swal("Invalid Customer Name!", "Please check your name again!", "error");
    } else if (!email.test(String(cemail))) {
      swal(
        "Invalid Customer email",
        "Customer email should contain @ sign!",
        "error"
      );
    } else if (cemail.length > 20) {
      swal("Invalid Customer Email!", "Please recheck your Email address!");
    } else if (cemail.length < 3) {
      swal(
        "Invalid Customer Email!",
        "Please enter Correct Email Address!",
        "error"
      );
    } else if (cpassword.length > 8) {
      swal(
        "Invalid Customer Password!",
        "Please enter Correct Password!",
        "error"
      );
    } else if (cpassword.length < 8) {
      swal(
        "Invalid Customer Password!",
        "Please recheck your password",
        "error"
      );
    }

    //validation end here
    else {
      axios
        .post("http://localhost:8280/paypal/savePayPal", Paypal)
        .then((response) => {
          if (response.data.success) {
            swal("Payment successfully added!");
            this.props.history.push(
              "/palSuccess/" +
                this.state.cpassword +
                "/" +
                this.props.match.params.tot
            );
          } else {
            swal("Failed");
          }
        });
    }
  };

  //method of demo button
  demo = () => {
    //setState

    this.setState({
      ...this.state,
      cpayment: "100",
      cname: "Udara Sandaruwan",
      cemail: "udara@gmail.com",
      cpassword: "12352acd",
    });
  };
  render() {
    return (
      <div className="App">
        <div className="col-10 mt-5 ml-5 mr-10">
          <center>
            <h1 class="topic">
              <b>PAY NOW </b>
            </h1>

            <h4>
              Please do payments to proceed ahead with your selected items
            </h4>
            <br></br>
          </center>
          <center>
            <div className="UD_card" style={{ width: "35%" }}>
              <form onSubmit={this.onSubmit} className="payform">
                <h3>Payments through PayPal</h3>
                <div className="form-group">
                  <br></br>
                  <Link to="https://www.paypal.com">
                    <input
                      type="submit"
                      value="Sign in"
                      className="form-control"
                    />
                  </Link>
                  <br />
                  <input
                    type="tel"
                    placeholder="Enter Payment"
                    onChange={this.changecPaymentHandler}
                    value={this.state.cpayment}
                    className="form-control"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Customer Name "
                    onChange={this.changeNameHandler}
                    value={this.state.cname}
                    className="form-control"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Email Address"
                    onChange={this.changeEmailHandler}
                    value={this.state.cemail}
                    className="form-control"
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={this.changePasswordHandler}
                    value={this.state.cpassword}
                    className="form-control"
                  />
                </div>

                <br></br>
                <div className="btn btn-outline-primary ">
                  <Link
                    to={"/CardPay/"}
                    value="Pay Rs."
                    className="far fa-check-square"
                    onClick={this.onSubmit}
                  >
                    Pay
                  </Link>
                  <br />
                </div>
              </form>

              <center>
                <button
                  className="btn btn-outline-primary"
                  style={{
                    marginTop: "15px",
                  }}
                  onClick={(e) => {
                    this.setState({
                      ...this.state,
                      cpayment: "100",
                      cname: "Udara Sandaruwan",
                      cemail: "udara@gmail.com",
                      cpassword: "12352acd",
                    });
                  }}
                >
                  Demo
                </button>
                <br></br>
                <br></br>
                <div className="form-group">
                  <a class="btn btn-outline-primary btn-lg" href="/payHome">
                    Back
                  </a>
                </div>
              </center>
            </div>
          </center>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
export default PayPalPayment;
