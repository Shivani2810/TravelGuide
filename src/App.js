import React from "react";
import data from "./data.js"
import { useState } from "react";
import Tours from "./components/Tours"


const[tours,setTours]=useState(data); 

const App = () => {
  return (
    

    <div>
        <h2>The Travel Guide</h2>
        <Tours tourdata={tours}></Tours>
    </div>


  )
};

export default App;
