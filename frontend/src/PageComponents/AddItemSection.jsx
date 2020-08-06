import React from "react";
import ToDoForm from "./ToDoForm";
import ListSection from "./ListSection";

export default class AddItemSection extends React.Component {

    render() {
        return (
            <div>
                <h2 className="heading">Add a ToDo</h2>
                <ToDoForm />
                <ListSection/>
            </div>
        );
    }
}