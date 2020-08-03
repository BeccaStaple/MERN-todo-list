import React from "react";
import Axios from "axios";

export default class ShowToDos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos : [{
              description : "",
              dateToComplete : "",
              priorityLevel : "",
              completed : ""
            }]
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:4494/todo/show").then(res => {
            const todos = res.data;
            console.log(todos);
            this.setState({todos});

        }
        )
    }

    render() {
        return (
            <div>
                {this.state.todos.map(todo => {
                    <p> 
                        {todo.description} 
                        <br/> 
                        {todo.dateToComplete} 
                        <br/> 
                        {todo.priorityLevel} 
                        <br/> 
                        <input  type="checkbox" /> 
                    </p> })
                }
                
            </div>
        )
    }
}