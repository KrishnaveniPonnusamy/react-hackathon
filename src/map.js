import React, { useEffect } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

var MapComponent = ({google}) => {
    return (
        <Map
          google={google}
          zoom={8}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBWRyO-SVMRXrYUlobQwbcePm4Ax_aL6z0'
  })(MapComponent);

