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
              completed : "",
            }]
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:4494/todo/show-false").then(res => {
            const todos = res.data;
            this.setState({todos});

        }
        )
    }

    handleChange(event) {

       this.setState({ todos : {completed : event.target.value} });
        
        console.log(this.state);
    }

    render() {
        return (
            <div className="todoSection">
                <h2 className="todo-headers">ToDo List</h2>
                {this.state.todos
                .map(todo => <p>
                    ToDo Item: {todo.description} <br/>
                    Due Date: {todo.dateToComplete} <br/>
                    Priority Level: {todo.priorityLevel} <br/>
                    Completed: 
                     <input name="completed" 
                    onChange={this.handleChange} 
                    value={this.state.todos.completed} 
                    type="checkbox" /></p>)}
                
            </div>
        )
    }
}