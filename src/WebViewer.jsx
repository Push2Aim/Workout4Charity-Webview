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
                <div data-animation="slide" data-easing="ease-in-out-circ" data-duration="300" data-infinite="1"
                     className="slider w-slider">
                    <div className="w-slider-mask">
                        <div className="w-slide" >
                            <div className="titletext"><h2 className="author">Mark Manson</h2>
                                <h1 className="articletitle">Es ist traurig</h1></div>
                            <div className="titleimage"></div>
                        </div>
                        <div className="slide w-slide" >
                            <div className="articletext">
                                <div className="articletext_first_letter">S</div>
                                <p className="articletext_first_paragraph">uleyman ipsum dolor sit amet.Consectetur adipiscing elit.Suspendisse
                                    varius enim.</p>
                                <div className="articletext_body">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                                </div>
                            </div>
                        </div>
                        <div className="slide w-slide" >
                            <div className="articletext cover_pic_slide">
                                <div className="coverpic"></div>
                                <h3 className="ctatext_header">So kannst du helfen!</h3>
                                <div className="ctatext_body"><strong>Am nächsten Dienstag ist ein Spendenlauf von Nike.</strong><em>7.
                                    Dezember, München, Marienplatz.</em>Renn um Suleyman zu helfen!
                                </div>
                            </div>
                            <a onClick={this.postRequest.bind(this)} className="button w-button">Teilnehmen</a></div>
                    </div>
                    <div className="left-arrow w-slider-arrow-left">
                        <div className="w-icon-slider-left"></div>
                    </div>
                    <div className="right-arrow w-slider-arrow-right">
                        <div className="w-icon-slider-right"></div>
                    </div>
                    <div className="slide-nav w-round w-slider-nav">
                        <div className="w-slider-dot w-active" data-wf-ignore=""></div>
                        <div className="w-slider-dot" data-wf-ignore=""></div>
                        <div className="w-slider-dot" data-wf-ignore=""></div>
                    </div>
                </div>
                <div className="bottommenu w-container"><a  className="navigation w-button">1/4</a>
                    <a onClick={this.share.bind(this)}
                     className="sendbutton w-button">Senden an</a><a
                     className="teambutton w-button"></a></div>
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
