import React from 'react';
import logo from './logo.svg';
import './App.css';
import {hotels} from './constants';
import CardContainer from './components/CardContainer';


function App() {

  return (
    <div className="App" style={{display:"flex",flexDirection:"row"}}>
  
     <CardContainer hotels={hotels}/>
      
    </div>
  );
  
}

export default App;
