import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class LocationService extends Component {

  render() {
    return (

      <div>
        <center>
        <Map
          google={this.props.google}

          initialCenter={{
            lat: 6.9222,
            lng: 79.8549
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
        <Marker
        title={'Hilton Hotel'}
        name={'Hilton'}
        position={{lat: 6.9222, lng: 79.8549}} />
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
        </Map>
          </center>
      </div>
      
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBx7EyhXLo23GvkH85n8037DTEgQm8wUtU")
})(LocationService)