import React from 'react';
import CardView from './CardView'
import {hotels} from '../constants'



function CardContainer(){

   
      return (
        hotels.map((hotel,i)=>{
          return(
          <CardView hotelName={hotel.name} hotelDescription={hotel.description} hotelPic={hotel.hotelPic} key={i}/>
          )
        }
    ))
  }
  

  export default CardContainer