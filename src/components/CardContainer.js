import React from 'react';
import CardView from './CardView'
import {hotels} from '../constants'



function CardContainer(props){
//taking the hotel object and mapping to get each hotel. Passing each hotel details to card component to display the hotel details dynamically
   
      return (
        hotels.map((hotel,i)=>{
          return(
          <CardView hotelName={hotel.name} hotelDescription={hotel.description} hotelPic={hotel.hotelPic} key={i} hotelObject={hotel} {...props} />
          )
        }
    ))
  }
  

  export default CardContainer