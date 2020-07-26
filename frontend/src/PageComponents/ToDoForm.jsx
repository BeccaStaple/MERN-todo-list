import React from "react";
import Axios from "axios";

import TextInput from "../FormComponents/TextInput";
import DateInput from "../FormComponents/DateInput";
import PriorityInput from "../FormComponents/PriorityInput";
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

       /* const newToDoItem = {
            newToDo : {
                description : this.state.description,
                dateToComplete : this.state.dateToComplete,
                priorityLevel : this.state.priorityLevel,
                completed: false
            }
            
        } */
        

    }

   
    render() {
        const {description, dateToComplete, priorityLevel} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>ToDo Item</label>
                <input name="description" onChange={this.changeHandler} value={description}/>
                <label>Due Date</label>
                <input name="dateToComplete" onChange={this.changeHandler} value={dateToComplete}/>
                <label>Priority Level</label>
                <input name="priorityLevel" onChange={this.changeHandler} value={priorityLevel}/>
                <SubmitButton />
            </form>
        );
    }
}