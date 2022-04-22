import React from "react";
import {Link} from 'react-router-dom';

import "./todosList.css"


import TodosTerm from "../TodosTerm/todosTerm";


const TodosList = (props) =>{


    return(

        

        <div className={"container mm-4 mt-5"}>

            <label>Filter:</label>
            <select id="select" className="form-select" onChange={props.handleChange}>
              <option value="" selected disabled hidden>Choose</option>
              <option value="all">All</option>
              <option value="finished">Finished</option>
              <option value="notFinished">Not finished</option>
            </select>

        <div className={"row"}>
            <div className={"table-responsive"}>
                <table className={"table table-striped"}>
                    <thead>
                    <tr>
                        <th scope={"col"}>Title</th>
                        <th scope={"col"}>Completed</th>
                        <th className="text-right" scope={"col"}>Delete</th>
                        <th className="text-right" scope={"col"}>Finished</th>

                    </tr>
                    </thead>
                    <tbody>
                        {props.todos.map((term=>{
                            
                            return(
                                <TodosTerm key={term.id} term={term} 
                                onDelete = {props.onDelete}
                                onGet = {props.onGet}/>
                            );
                            


                        }))}
                    </tbody>
                    </table>
                    </div>
                    </div>
                    </div>



    )
}



export default TodosList;