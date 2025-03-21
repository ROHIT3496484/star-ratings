import React, { useState } from 'react'
import './App.css'

const StarRating = ({starcount}) => {
    const [starvalue, setStarvalue] = useState();
    const [mouseenter, setMouseenter] = useState(0);
    
  return (
    <div>
      {new Array(starcount).fill(0).map((val, index)=>{
        //here we created new array for the all indexes
        return(
            <span key={index} className={mouseenter === 0 /*used for if we are selected star value and hover to minimum of selected */ & index < starvalue /*for the star selection */ || index < mouseenter ? "gold" : " "} onClick={()=>setStarvalue(index+1)}
            onMouseEnter={()=> setMouseenter(index+1)}
            onMouseOut={()=>setMouseenter(0)}
            >
                &#9734;
            </span>
        )
      })}
    </div>
  )
}

export default StarRating
