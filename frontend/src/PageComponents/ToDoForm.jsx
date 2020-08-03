import React from "react";
import Axios from "axios";

import SubmitButton from "../FormComponents/SubmitButton";

export default class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                description : "",
                dateToComplete : "",
                priorityLevel : "",
                completed : false
            
        }
    }

    changeHandler = event => {
        this.setState( { [event.target.name] : event.target.value });
        
    }

    handleSubmit = event => {
        event.preventDefault();
        const newToDoItem = this.state;
        console.log(newToDoItem);
        
        Axios.post("http://localhost:4494/todo/create",  newToDoItem )
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })

    }

   
    render() {
        const {description, dateToComplete, priorityLevel} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>ToDo Item</label>
                <input type="text" name="description" onChange={this.changeHandler} value={description}/>
                <label>Due Date</label>
                <input type="date" name="dateToComplete" onChange={this.changeHandler} value={dateToComplete}/>
                <label>Priority Level</label>
                <select type="" name="priorityLevel" onChange={this.changeHandler} value={priorityLevel}>
                    <option value=""></option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <SubmitButton />
            </form>
        );
    }
}