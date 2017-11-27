import React, {Component} from "react";
import "./webflow.css";
import MessengerExtensions from "./messengerExtensions";

class WebViewer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div onClick={this.postRequest.bind(this)}>
                TEST {this.props.location} {this.props.duration}
            </div>
        );
    }

    postRequest() {
        console.log("postRequest(name)");
        return MessengerExtensions.getUserID()
            .then(userID =>
                fetch('/event', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    credentials: 'same-origin', // By default, fetch won't send any cookies to the server
                    body: JSON.stringify({userID: userID})
                })
            )
    }
}

export default WebViewer;
