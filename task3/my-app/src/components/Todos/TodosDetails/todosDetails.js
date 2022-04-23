import React from "react";
import "./todosDetails.css"


const TodoDetails = (props) =>{

    return(
       

        <div>

            
            <div id="name">
                <h2>Name:</h2>
                <p>
                {props.userDetails.name}
                </p>
            

            </div>

<br/>
        <div id="username">
            <h2>Username:</h2>
        <p>
        {props.userDetails.username}
        </p>
        </div>
        
            

            <br/>

            <div id="email">
            <h2>Email:</h2>
            <a href={"mailto:" + props.userDetails.email}>
            {props.userDetails.email}
            </a>
            </div>
            
            
            {/* <div>
                {Object.keys(props.userDetails.address).map((objKey, index)=>{

                     <div key={index}>
                         <p>{objKey.street}</p>
                    </div>

                })}
            </div> */}

        
           {/* <p>
               {props.userDetails.address.suite}
           </p>

            <p>
            {props.userDetails.suite}
            </p> */}

        </div>

    );





}


export default TodoDetails