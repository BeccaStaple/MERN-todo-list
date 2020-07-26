import React from "react";
import ToDoForm from "./ToDoForm";

export default class AddItemSection extends React.Component {

    render() {
        return (
            <div>
                <h2>Add a ToDo</h2>
                <ToDoForm />
            </div>
        );
    }
}