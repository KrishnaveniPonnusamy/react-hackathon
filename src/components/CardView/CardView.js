// card component which displayes each hotel details. takes hotel object through props

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HotelDetails from '../HotelDetails';
import { Link } from 'react-router-dom';




const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    minWidth:310
  },
  media: {
    height: 150,
  },
});

const handleButtonClick = () =>{
  return <HotelDetails/>
}

export default function MediaCard( props) {
  const classes = useStyles();
  console.log(props)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.hotelPic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.hotelName} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.description} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:"space-evenly"}}>
        <Button size="small" style={{color:"white" ,background:"green"}} onClick={() => {
          console.log(props);
          props.history.push('/hotelDetails',
            {...props.hotelObject}
          )
        }}>
                    Book Now
        {/* <Link style={{ color: "white", fontWeight: "bold", textDecoration: "none" }} to='/'>
                </Link> */}
        </Button>
        <Button size="small" style={{color:"white" ,background:"green"}} >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
