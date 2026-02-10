 import { useState } from "react";

 function Card(props)
 {

    let displayimage=props.image;
    let displayid=props.id;
    let displayname=props.name;
    let displayinfo=props.info;
    let displayprice=props.price;
    let removeTourss=props.removeTour1;


    

    const [readmore,setReadmore]=useState(false);
    let description= readmore?displayinfo:`${displayinfo.substr(0,200)}...`

    function readmoreHandler()
    {
        setReadmore(!readmore);
    }

    
    return(
        <div className="card">

              <img src={displayimage} className="tour-image"></img>


              <div className="tour-info">

                    <div className="tour-details">
                        <h3 className="tour-name">{displayname}</h3>
                        <h3 className="tour-price">₹{displayprice}</h3>
                    </div>

                    <div className="tour-description">
                        <p>{description}</p>
                        <span className="tour-readmore" onClick={readmoreHandler}>
                            {readmore?`Show Less`:`Read More`}
                        </span>
                    </div>

              </div>

              <div className="tour-interest">
                <button className="button-interest" onClick={()=>removeTourss(displayid)}> 
                    Not Interested
                </button>
              </div>
            
             
        </div>
    )
 }

 export default Card;