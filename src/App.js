import CardContainer from './components/CardContainer/CardContainer';
import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import AboutPage from './components/About/AboutPage';
import ContactUs from './components/Contact/ContactUs';


import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Filter from './components/Filter/Filter';

class App extends Component {

  render(){

    return(
      <Router>
        <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path='/about' component={AboutPage}></Route>
          <Route path='/contact' component={ContactUs}></Route>  
        </Switch>
        </div>

      </Router>

    )
  }
}

const Home = () =>(
  <div>
    <Filter />
    <div className="home" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <CardContainer/>
    </div>
  </div>
)



export default App;
