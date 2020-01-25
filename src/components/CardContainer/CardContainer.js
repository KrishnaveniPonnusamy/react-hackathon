import React, { useEffect } from 'react';
import CardView from '../CardView/CardView';

import { connect } from 'react-redux';
import { setHotelsAction } from '../../redux/actions';
import { Grid } from '@material-ui/core';
import './CardContainer.css';

function CardContainer({hotels, setHotels, ...props}){
  useEffect(() => {
    setHotels();
  }, []);
   
      return (
        <div  className="list-container">
        <Grid container spacing={4}>
        {hotels.map((hotel,i)=>{
          return(
            <Grid item sm={12} md={4} lg={3} ><CardView hotelName={hotel.name} hotelDescription={hotel.description} hotelPic={hotel.hotelPic} key={i} hotelObject={hotel} {...props} /></Grid>
          )
        })}
        </Grid>
        </div>
    )
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