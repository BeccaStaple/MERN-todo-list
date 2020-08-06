import React from "react";
import Axios from "axios";

export default class ShowDone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            completedTasks : [{
            description : "",
              dateToComplete : "",
              priorityLevel : "",
              completed : "",
            }]
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:4494/todo/show-true").then(res => {    
        const completedTasks = res.data;
        console.log(res.data);
            this.setState({completedTasks});
        })
    }

    render() {
        return (
            <div className="doneSection">
                <h2 className="todo-headers">Done</h2>
                {this.state.completedTasks.map(done => <p> Completed Task: {done.description} </p>)}
            </div>
        );
    }
}