import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Map, GoogleApiWrapper } from 'google-maps-react';

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
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        </Container>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBWRyO-SVMRXrYUlobQwbcePm4Ax_aL6z0'
  })(MapComponent);

