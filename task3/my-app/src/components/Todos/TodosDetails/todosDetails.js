import React from "react";
import "./todosDetails.css"


const TodoDetails = (props) =>{

    return(
       

        <div>

            {props.userDetails.id}

            {props.userDetails.name}

<br/>
            {props.userDetails.username}

            <br/>

            {props.userDetails.email}

        
           


        </div>

    );





}


export default TodoDetails