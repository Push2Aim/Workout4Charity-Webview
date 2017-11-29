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
                <div className="titletext"><h2 className="author">Mark Manson</h2>
                    <h1 className="articletitle">Chaos bei Rettung</h1></div>
                <div className="titleimage"></div>
                <div className="articletext">
                    <div className="articletext_first_letter">F</div>
                    <p className="articletext_first_paragraph">ünf Migranten sind während einer Rettung im Mittelmeer ertrunken. Das ist
                        ihre Geschichte.</p>
                    <div className="articletext_body">Die Nothilfeorganisation Sea Watch, die mit Rettungsbooten schiffbrüchige Migranten im
                        Mittelmeer birgt, erhob gegen die libysche Küstenwache schwere Vorwürfe. Demnach habe während der laufenden
                        Rettung ein heranpreschendes libysches Patrouillenboot "Angst und Panik" unter den Migranten ausgelöst.&nbsp;An
                        Bord des Schiffs der Küstenwache seien Menschen bedroht und geschlagen worden. Darum seien bereits Gerettete
                        zurück ins Wasser gesprungen und ertrunken.
                    </div>
                </div>
                <div className="coverpic"></div>
                <div className="articletext"><h3 className="ctatext_header">So kannst du helfen!</h3>
                    <p className="bold ctatext_body">Am nächsten Dienstag ist ein Spendenlauf von Nike.</p>
                    <p className="ctatext_body italic">7. Dezember, München, Marienplatz.</p>
                    <p className="ctatext_body">Renn um Flüchtlingen zu helfen!</p>
                    <a onClick={this.askPermission.bind(this)} className="button w-button">Teilnehmen</a>
                    <div className="bottommenu placeholder"></div>
                </div>
                <div className="bottommenu w-container">
                    <a onClick={this.share.bind(this)} className="sendbutton w-button">Senden an</a>
                    <a  className="teambutton w-button"></a></div>
            </div>
        );
    }

    participate() {
        console.log("participate()");
        return MessengerExtensions.getUserID()
            .then(userID =>
                fetch('https://workout4charity.herokuapp.com/event', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    // credentials: 'same-origin', // By default, fetch won't send any cookies to the server
                    body: JSON.stringify({userID: userID})
                })
            )
    }
    share() {
        console.log("share()");
        return MessengerExtensions.share();
    }

    askPermission() {
        console.log("askPermission()");
        return MessengerExtensions.askPermission("user_profile")
            .then(this.participate());
    }
}

export default WebViewer;
