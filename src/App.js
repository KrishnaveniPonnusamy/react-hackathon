import CardContainer from './components/CardContainer';
import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav';
import AboutPage from './components/AboutPage';
import ContactUs from './components/ContactUs';
import HotelDetails from './components/HotelDetails'


import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';



  const App = () => {

    return(
      <Router>
        <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path='/about' component={AboutPage}></Route>
          <Route path='/contact' component={ContactUs}></Route>  
          <Route path='/hotelDetails' component={HotelDetails}></Route>  
        </Switch>
        </div>

      </Router>

    )
  }


const Home = () =>(

  <div className="home" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
    <CardContainer/>
  </div>
)



export default App;
