import React, { Component } from 'react'
import TaxiItem from './shv_carList'
import Shv_Taxi_NavBar from '../shv_NavBars/shv_Taxi_NavBar';

export default class extends Component {
  render() {
    return (
    <div>
        <Shv_Taxi_NavBar/><br/><br/>
      <div className='container'>
        
          <TaxiItem/>
          
      </div>
    </div>
    )
  }
}
