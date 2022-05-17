import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

class CardHomeAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CardPosts: [],
    };
  }

  //call the link
  componentDidMount() {
    this.retrieveCardPosts();
  }

  retrieveCardPosts() {
    axios.get("http://localhost:8280/cardpay/getCardpay").then((res) => {
      if (res.data.success) {
        this.setState({
          CardPosts: res.data.existingcard,
        });

        console.log(this.state.CardPosts);
      }
    });
  }

  //delete function
  onDelete = (id) => {
    swal({
      title: "Are you Sure?",
      text: "Once deleted, you will not be able to recover this Payment details !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://localhost:8280/cardpay/deleteCardpay/${id}`)
          .then((res) => {
            swal("Deleted Successfully");
            this.retrieveCardPosts();
          });
        swal("Done! Payment Details has been Deleted!", {
          icon: "sucess",
        });
      } else {
        swal("Not Deleted! Your Payment Details are Safe!");
      }
    });
    console.log("delete me");
  };

  //search function start here

  filterData(CardPosts, searchKey) {
    const result = CardPosts.filter(
      (CardPosts) =>
        CardPosts.customerName.toLowerCase().includes(searchKey) ||
        CardPosts.expiry.toLowerCase().includes(searchKey)
    );

    this.setState({ CardPosts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8280/cardpay/saveCardpay").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingcard, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>Search Payment details</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search by Customer Name"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"> Enter Payment</th>
              <th scope="col"> Card Number</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Expire Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.CardPosts.map((CardPosts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                {/* 
                <td>
                  <a
                    href={`/cardDetails${CardPosts._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {CardPosts.enterPayment}
                  </a>
                </td> */}
                <td>{CardPosts.enterPayment}</td>
                <td>{CardPosts.cardnumber}</td>
                <td>{CardPosts.customerName}</td>
                <td>{CardPosts.expiry}</td>

                <td>
                  {/* <a className="btn UD_btn-primary" href="/mail">
                    <i className="fas fa-edit"></i>&nbsp;Request
                  </a> */}
                  &nbsp; &nbsp;
                  <a
                    className="btn btn-warning"
                    href={`/cardUpdateAdmin/${CardPosts._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.onDelete(CardPosts._id);
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br></br>
        <div className="form-group">
          <a class="btn btn-outline-primary btn-lg" href="/adminHome">
            Back
          </a>
        </div>
        <br></br>
        <button className="btn btn-primary">
          <a
            href="/cardReport"
            style={{ textDecoration: "none", color: "white" }}
          >
            Card Payment Report
          </a>{" "}
        </button>
      </div>
    );
  }
}

export default CardHomeAdmin;
