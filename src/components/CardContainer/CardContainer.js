import React, { useEffect } from 'react';
import CardView from '../CardView/CardView';

import { connect } from 'react-redux';
import { setHotelsAction } from '../../redux/actions';


function CardContainer({hotels, setHotels}){
  useEffect(() => {
    setHotels();
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
    return {
      hotels: state.hotelsState.list
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    setHotels: () => dispatch(setHotelsAction())
    })

  export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);