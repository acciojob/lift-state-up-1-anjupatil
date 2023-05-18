import React,{useState} from "react";

const Child=({showModal})=>{
    return(
        <div className="child">
            <h2>Child Component</h2>
            {showModal && 
            <div>
                <h1>Modal Content</h1>
                <p>This is the modal content</p>
                
            </div>}
        </div>
    )
}

export default Child;