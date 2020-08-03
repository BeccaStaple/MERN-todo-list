import React from "react";
import ToDoForm from "./ToDoForm";
import ShowToDos from "./ShowToDos";

export default class AddItemSection extends React.Component {

    render() {
        return (
            <div>
                <h2>Add a ToDo</h2>
                <ToDoForm />
                <h2>ToDo List</h2>
                <ShowToDos />
            </div>
        );
    }
}