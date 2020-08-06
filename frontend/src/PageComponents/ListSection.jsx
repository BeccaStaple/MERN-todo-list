import React from "react"
import ShowDone from "./ShowDone"
import ShowToDos from "./ShowToDos"


export default function ListSection() {
    return (
        <div className="todo-list">
            <ShowToDos/>
            <ShowDone/>

        </div>
    )
}