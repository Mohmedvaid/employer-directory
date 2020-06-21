import React from "react";

function FilterBox(props) {
  return (

<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Filter By City
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {props.results.map((result, i)=>(
         <button key={i} className="dropdown-item" onClick={props.filter} >{result.location.city}</button>
    ))}
    
  </div>
</div>

  )
}

export default FilterBox;
