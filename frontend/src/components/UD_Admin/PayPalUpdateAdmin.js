import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

class PayPalUpdateAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpayment: "",
      cname: "",
      cemail: "",
      cpassword: "",
    };
  }

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
    const { cpayment, cname, cemail, cpassword } = this.state;

    const data = {
      cpayment: cpayment,
      cname: cname,
      cemail: cemail,
      cpassword: cpassword,
    };

    console.log(data);

    //validation start here
    const name = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;
    const email = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const card = /^[0-9\b]+$/;

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
    } else if (!card.test(Number(cpayment))) {
      swal("Invalid payment", "payment cannot contain any String!", "error");
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

    axios
      .put(`http://localhost:8280/paypal/updatePaypal/${id}`, data)
      .then((res) => {
        if (res.data.success) {
          alert("Paypal updated successfully");

          this.setState({
            cpayment: "",
            cname: "",
            cemail: "",
            cpassword: "",
          });
        }
      });
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    //post/${id}/
    axios.get(`http://localhost:8280/paypal/getPaypal/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          cpayment: res.data.paypal.cpayment,
          cname: res.data.paypal.cname,
          cemail: res.data.paypal.cemail,
          cpassword: res.data.paypal.cpassword,
        });

        console.log(this.state.paypal);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="col-10 mt-5 ml-5 mr-10">
          <center>
            <div class="card" style={{ width: "48rem" }}>
              <form className="payform">
                <h3>Payments through PayPal Details</h3>
                <label>Enter Payment: </label>
                <br />
                <input
                  type="tel"
                  name="cpayment"
                  placeholder="Payment"
                  onChange={this.handleInputChange}
                  value={this.state.cpayment}
                  className="form-control"
                />
                <br />
                <label>Enter Customer Name : </label>
                <br />
                <input
                  type="text"
                  name="cname"
                  placeholder="Customer Name"
                  onChange={this.handleInputChange}
                  value={this.state.cname}
                  className="form-control"
                />
                <br />
                <label>Enter Email Address: </label> <br />
                <input
                  type="text"
                  name="cemail"
                  placeholder="Email Address"
                  onChange={this.handleInputChange}
                  value={this.state.cemail}
                  className="form-control"
                />
                <br />
                <label> Enter Password: </label>
                <br />
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                  value={this.state.cpassword}
                  className="form-control"
                />
                <br />
                <br></br>
                <div className="form-group">
                  <button
                    value="Pay Rs."
                    className="btn btn-warning"
                    onClick={this.onSubmit}
                  >
                    Update
                  </button>
                </div>
                <br></br>
                <div className="form-group">
                  <a
                    class="btn btn-outline-primary btn-lg"
                    href="/payPalHomeAdmin"
                  >
                    Back
                  </a>
                </div>
              </form>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
export default PayPalUpdateAdmin;
