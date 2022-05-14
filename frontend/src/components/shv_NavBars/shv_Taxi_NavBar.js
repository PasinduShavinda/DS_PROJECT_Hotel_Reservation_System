import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Shv_Taxi_NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
          <a class="navbar-brand" href="#">
            Taxi App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/">
                Home{" "}
              </a>
              <a class="nav-item nav-link" href="/BookTaxi">
                Reserve Taxi
              </a>
              <a class="nav-item nav-link" href="/AllTaxi">
                Manage Taxi Reserves
              </a>

              <a class="nav-item nav-link" href="/payHome">
                Pay
              </a>
              <a class="nav-item nav-link" href="/adminHome">
                PayAdmin
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
