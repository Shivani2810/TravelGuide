import React, { useState } from "react";
import data from "./data.js";
import Tours from "./components/Tours";


const App = () => {

  const [tours, setTours] = useState(data);

  function removeTours(id)
    {
      const newTours=tours.filter(tour=> tour.id !== id)
      setTours(newTours); 
    }

    function refreshHandler(){
      setTours(data);
    }

    if(tours.length===0)
    {
      return(
        <div className="refresh ">
          <div>No Tours Left</div>
          <button className="refresh-btn" onClick={refreshHandler}>Refresh</button>
        </div>
      )
    }


  return (
    <div>
      <div className="heading-wrapper">
        <h2 className="title">The Travel Guide</h2>
      </div>
      
      <Tours tourdata={tours} removeTour={removeTours}/>
    </div>
  );
};

export default App;
