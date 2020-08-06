import React from "react";
import Button from "react-bootstrap/Button"

export default class SubmitButton extends React.Component {

    render() {
        return (
            <Button type="submit" className="submitButton" variant="warning">Submit</Button>
        );
    }
}