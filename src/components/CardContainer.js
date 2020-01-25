import React from 'react';
import CardView from './CardView'
import {hotels} from '../constants'



function CardContainer(){

   
      return (
        hotels.map((hotel,i)=>{
          return(
          <CardView hotelName={hotel.name} hotelDescription={hotel.description}/>
          )
        }
    ))
  }
  

  export default CardContainer