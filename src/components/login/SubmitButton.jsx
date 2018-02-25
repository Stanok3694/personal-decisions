import React from "react";
import { withRouter } from "react-router-dom";

const SubmitButton = (props) => (
    <button
        onClick={() => props.onSubmit(props.history)}
        type="submit">Submit
        </button>
);

export default withRouter(SubmitButton);