import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    minWidth:310
  },
  media: {
    height: 150,
  },
});

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
        <Button size="small" style={{color:"white" ,background:"green"}}>
          Book Now
        </Button>
        <Button size="small" style={{color:"white" ,background:"green"}}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
