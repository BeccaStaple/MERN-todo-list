import React from "react";

export default class PriorityInput extends React.Component {

    render() {
        return(
            <select>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
        );
    }
}