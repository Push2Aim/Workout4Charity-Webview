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
            <div>
                TEST {this.props.location} {this.props.duration}
                <div onClick={this.postRequest.bind(this)}>postRequest()</div>
                <div onClick={this.share.bind(this)}>share()</div>
            </div>
        );
    }

    postRequest() {
        console.log("postRequest()");
        return MessengerExtensions.getUserID()
            .then(userID =>
                fetch('/event', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    credentials: 'same-origin', // By default, fetch won't send any cookies to the server
                    body: JSON.stringify({userID: userID||0})
                })
            )
    }
    share() {
        console.log("share()");
        return MessengerExtensions.share();
    }
}

export default WebViewer;
