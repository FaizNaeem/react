import React from "react";
function Hello(props){
    return(
        <div>
            <h1 style={{color:"white"}}>Hello
                {props.title}
            </h1>
        </div>
    )
}
export default Hello