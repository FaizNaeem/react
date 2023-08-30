//  import { useState } from "react"
import React ,{useState} from "react"
function Use (){
    const [resolve ,reject]= useState("black")
return(
    <div style={{background:resolve}}>
<h1 style={{color:"white" ,textAlign:"center"} }>Hello World</h1>
<button onClick={() => {reject("yellow")}} onDoubleClick={() => {reject("green")}}>Change Bg Color</button>
    </div>
)
}
export default Use