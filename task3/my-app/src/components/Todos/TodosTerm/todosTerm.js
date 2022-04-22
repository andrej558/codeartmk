import React from 'react';
import {Link} from 'react-router-dom';
import "./todosTerm.css"


const TodosTerm = (props) =>{


    return(
        

        <tr key={props.id} className={"clickable"}>
        
        <td scope={"col"}>
        <Link style={{textDecoration:'none'}}
        onClick={()=>props.onGet(props.term.userId)}
        to={`/todos/details/${props.term.id}`}>

            
            
{props.term.title}


        </Link>
        
        </td>

        
        <td scope={"col"}>{props.term.completed.toString()}</td>
        <td scope={"col"} className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
        
                
</td>

        <td className={"text-right form-check"}>
        <input className={"form-check-input"} type="checkbox"/>
        </td>
        </tr>
    )
}





export default TodosTerm;