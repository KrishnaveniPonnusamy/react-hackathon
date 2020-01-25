import React from "react";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import MapComponent from './MapComponent';


class HotelDetails extends React.Component{

    render(){
        console.log(this.props.history.location.state);
        var hotelObject = this.props.history.location.state;
        console.log("hoteldetails",hotelObject)

        const styles = {
            container: {
                padding:"50px",
            },
            paper:{
                marginBottom: "50px",
                 padding:"20px"
            },
            hotelImages:{
                display:"flex", 
                flexDirection:"row"
            },
            PaperStyle:{
                padding:"50px",
                marginTop:'42%'
            }
        };
        return (

            

            <div>
                <MapComponent/>
            <div>

            </div>

                <Container maxWidth="lg" style={styles.PaperStyle}>
                    <Paper>
                   <h1>Address:</h1>
                   <p>Hotel Name: {hotelObject.name}</p>
                   <p>Rating: {hotelObject.rating}</p>
                   <p>Address: {hotelObject.address} </p>
                   <p>City: {hotelObject.city}</p>
                   <p>State: {hotelObject.state}</p>
                   <p>Contact Number: {hotelObject.phNo}</p>
                   </Paper>
                </Container>

                <Container>                
                    
                   
                        {hotelObject.rooms.map((room, i)=>{
                           return(
                            
                            <Container elevation={3}>
                                 <h1>Room Details: </h1>
                                <Paper style={styles.paper}>
                                <div>
                            
                                    <h2>Room Type: {room.type}</h2>
                                    <h2>Price: {room.price}</h2>
                                </div>
                                <div style={styles.hotelImages}>{room.photos.map((photo, i) =>{ return(
                                   <img src={photo.url} style={{width:"50%", height: "250px", marginRight: "10px",  marginLeft: "10px"}}/>
                                )}
                                )}
                                </div>
                                </Paper>
                                </Container>

                           ) 
                        })}
                    
                </Container>
                
            </div>
        )
    }
}

export default HotelDetails;
