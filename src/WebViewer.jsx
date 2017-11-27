import React, {Component} from "react";
import "./webflow.css";

class WebViewer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                TEST {this.props.location}  {this.props.duration}
            </div>
        );
    }

}

export default WebViewer;
