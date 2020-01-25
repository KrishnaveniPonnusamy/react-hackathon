import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

var MapComponent = ({google}) => {
  const styles = {
    container: {
        padding:"20px"
    }    
};
    return (
      <Container maxWidth="lg" style={styles.container}>
        <Map
          google={google}
          zoom={6}
        >
           <Marker
    name={'Dolores park'}
    position={{lat: 37.759703, lng: -122.428093}} />
  <Marker />
        </Map>
        </Container>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBWRyO-SVMRXrYUlobQwbcePm4Ax_aL6z0'
  })(MapComponent);

