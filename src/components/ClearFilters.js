import React from "react";

function ClearBtn(props){
    return(
        <button type="button" className="btn btn-success btn-clear" onClick ={props.clear}>Clear Filters</button>
    )
}

export default ClearBtn;