import React, { useEffect } from 'react';
import CardView from './CardView'
import Filter from './Filter';

import { connect } from 'react-redux';


function CardContainer({hotels, setHotels}){
  useEffect(() => {
    setHotels(hotels);
  }, []);
   
      return (
        hotels.map((hotel,i)=>{
          return(
          <CardView hotelName={hotel.name} hotelDescription={hotel.description} hotelPic={hotel.hotelPic} key={i}/>
          )
        }
    ))
  }
  
  const mapStateToProps = (state) => {
    console.log(state.hotelsState.list)
    return {
      hotels: state.hotelsState.list
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    setHotels: (data) => dispatch({type: 'SET_HOTELS', payload: data})
    })

  export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);