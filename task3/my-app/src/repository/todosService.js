import axios from '../custom-axios/axios';




const TodosService = {


    fetchTodos : () =>{

        return axios.get("/todos");
    },

    deleteTodo : (id) =>{

        return axios.delete(`/todos/${id}`);
    },


    getTodoDetails : (id) =>{

        return axios.get(`/todos/${id}`);
    },

    getUserDetails : (id) =>{

        return axios.get(`/users/${id}`);
    }

}



export default TodosService;