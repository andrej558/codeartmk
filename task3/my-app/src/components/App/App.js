import './App.css';
import React, {Component} from "react";

import {BrowserRouter as Router, Redirect, Route, Routes} from 'react-router-dom'

import TodosList from "../Todos/TodosList/todosList"

import TodosService from '../../repository/todosService';

import TodoDetails from '../Todos/TodosDetails/todosDetails';

class App extends Component{


  constructor(props){

    super(props);
    this.state = {

      filterValue : "",
      todos : [],
      filteredTodos : [],

      selectedTodo : {},

      selectedUser : {}
    }
  }

  handleChange = event =>{

   //console.log(document.getElementById('select').value); 

    let val = document.getElementById('select').value;

   if(val == "finished"){

    this.setState({
      //this.state.todos.filter(t=>t.finished == "true");
      filteredTodos: this.state.todos.filter(t=>t.completed.toString() == "true")
    })

  }

  else if(val == "notFinished"){

    this.setState({
      
      filteredTodos: this.state.todos.filter(t=>t.completed.toString() == "false")

    })
  }

  else{
    this.setState({
      filteredTodos : this.state.todos


    })
  }
  
  }

  render(){

    return(
      <Router>
        <main>
          <div className='container'>

            

            <Routes>

              <Route path={"/todos"} element = {
                
                <TodosList todos = {this.state.filteredTodos}
                onDelete = {this.deleteTodo}
                handleChange = {this.handleChange}
                onGet = {this.getUserDetails}
                />

            
              }/>

              <Route path={"todos/details/:id"} element = {

                  <TodoDetails todoDetails = {this.state.selectedTodo}
                  userDetails = {this.state.selectedUser}
                  />

              }/>


            </Routes>      

          </div>

        </main>

      </Router>
    )


  }


  componentDidMount(){

    this.loadTodos();
  }



  loadTodos = () =>{

    TodosService.fetchTodos()
    .then((data=>{
      this.setState({
        todos : data.data,
        filteredTodos : this.state.todos
      })

    }));

  }

  deleteTodo = (id) =>{

    TodosService.deleteTodo(id)
    .then(()=>{
      //console.log(222);
      //this.setState({});

      this.loadTodos();
      //window.location.reload(false);
    });
  }
    
    getTodoDetails = (id) =>{

      TodosService.getTodoDetails(id)
      .then(data=>{
        this.setState({
          selectedTodo: data.data
        })
      });
    }

    getUserDetails = (id) =>{

      TodosService.getUserDetails(id)
      .then(data=>{
        this.setState({
          selectedUser: data.data
        })
      });
    }

    getDetails = (id) =>{

      this.getTodoDetails(id);
      this.getUserDetails(this.state.selectedTodo.userid);


    }


  

}





export default App;
