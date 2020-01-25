import CardContainer from './components/CardContainer/CardContainer';
import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import AboutPage from './components/About/AboutPage';
import ContactUs from './components/Contact/ContactUs';
import HotelDetails from './components/HotelDetails'


import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Filter from './components/Filter/Filter';

const App = () =>  {


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

const Home = (props) =>(
  <div>
    <Filter />
      <CardContainer {...props} />
  </div>
)



export default App;
