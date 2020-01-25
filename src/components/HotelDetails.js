import React from "react";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';



class HotelDetails extends React.Component{

    state = { hotel : {
        id: 1,
        name:"The Taj",
        rating: 5,
        address: "opposite Kempegowda International Airport, Devanahalli",
        city: "Bangalore",
        state: "Karnataka",
        phNo: "9876543120",
        rooms: [{
            id: 1,
            type: "A/C",
            price: 8000,
            photos: [{id: 1, url: "https://lh3.googleusercontent.com/proxy/bnhrY4IqMxsv7jrrGPpS6y6Of5LNhzKJhZDnLtAdQXoKauWe757vzvSBQkqfgJ7Injly2wEESZioIrATBa_kntbLrmRDYCRI4vAdWQPuZSH7Lvr-nbaDLuP4BBe_KMd5PP4l1x7Bp4_UbxjrvD3QmWYQzGeKO1Y=w296-h202-n-k-rw-no-v1"},
                {id: 2, url: "https://lh3.googleusercontent.com/p/AF1QipOjHz6i0yEgYV65oELmKnwIysxaeBAVScIrOeuo=w296-h202-n-k-rw-no-v1"}
            ]
        },{
            id: 2,
            type: "A/C",
            price: 6000,
            photos: [{id: 1, url: "https://lh3.googleusercontent.com/proxy/bnhrY4IqMxsv7jrrGPpS6y6Of5LNhzKJhZDnLtAdQXoKauWe757vzvSBQkqfgJ7Injly2wEESZioIrATBa_kntbLrmRDYCRI4vAdWQPuZSH7Lvr-nbaDLuP4BBe_KMd5PP4l1x7Bp4_UbxjrvD3QmWYQzGeKO1Y=w296-h202-n-k-rw-no-v1"},
                {id: 2, url: "https://lh3.googleusercontent.com/p/AF1QipOjHz6i0yEgYV65oELmKnwIysxaeBAVScIrOeuo=w296-h202-n-k-rw-no-v1"}
            ]
        },{
            id: 3,
            type: "Non  A/C",
            price: 5000,
            photos: [{id: 1, url: "https://lh3.googleusercontent.com/proxy/bnhrY4IqMxsv7jrrGPpS6y6Of5LNhzKJhZDnLtAdQXoKauWe757vzvSBQkqfgJ7Injly2wEESZioIrATBa_kntbLrmRDYCRI4vAdWQPuZSH7Lvr-nbaDLuP4BBe_KMd5PP4l1x7Bp4_UbxjrvD3QmWYQzGeKO1Y=w296-h202-n-k-rw-no-v1"},
                {id: 2, url: "https://lh3.googleusercontent.com/p/AF1QipOjHz6i0yEgYV65oELmKnwIysxaeBAVScIrOeuo=w296-h202-n-k-rw-no-v1"}
            ]
        }],
    }
};
    render(){
        const {name,rating,address, city, state, phNo, rooms} = this.state.hotel;

        const styles = {
            container: {
                padding:"50px"
            },
            paper:{
                marginBottom: "50px",
                 padding:"20px"
            },
            hotelImages:{
                display:"flex", 
                flexDirection:"row"
            },
            hotelImage: {
                width:"50%",
                 height: "250px",
                  marginRight: "10px", 
                   marginLeft: "10px"
            }
        };
        return (          

            <div>
                <Container maxWidth="lg" style={styles.container}>
                    <Paper>
                   <h1>Address:</h1>
                   <p>Hotel Name: {name}</p>
                   <p>Rating: {rating}</p>
                   <p>Address: {address} </p>
                   <p>City: {city}</p>
                   <p>State: {state}</p>
                   <p>Contact Number: {phNo}</p>
                   </Paper>
                </Container>

                <Container>                
                    
                   
                        {rooms.map((room, i)=>{
                           return(
                            
                            <Container elevation={3}>
                                 <h1>Room Details: </h1>
                                <Paper style={styles.paper}>
                                <div>
                            
                                    <h2>Room Type: {room.type}</h2>
                                    <h2>Price: {room.price}</h2>
                                </div>
                                <div style={styles.hotelImages}>{room.photos.map((photo, i) =>{ return(
                                   <img src={photo.url} style={styles.hotelImage}/>
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
