import React, {Component} from "react";
import "./webflow.css";
import MessengerExtensions from "./messengerExtensions";
import {CopyToClipboard} from "react-copy-to-clipboard";
import request from "request";

class WebViewer extends Component {

    constructor(props, context) {
        super(props, context);
        let team = props.team ? props.team.split(","): undefined ;
        this.state = {
            team: team || []
        }
    }

    render() {
        return (
            <div>
                <div onClick={this.post.bind(this)}>POST</div>
                <div onClick={this.postL.bind(this)}>POST_L</div>
                <div onClick={this.postRequest.bind(this)}>POST_Request</div>
                <div className="teamcontainer w-container"><h1 className="articletitle teamtitle">Team Profil</h1>
                    <div className="teamtext"><h2 className="ctatext_header">Dein Team</h2>
                        <ul className="namelist">
                            {this.state.team.map(this.buildList)}
                        </ul>
                        <CopyToClipboard text={"https://m.me/129740594364020/?ref="+this.state.team.join(",")}>
                        <a className="copy_invite_link team w-button"
                           data-ix="copy-invite-linkappear-3" style={{backgroundColor: "rgb(255, 51, 0)"}}>Einladung kopieren</a>
                        </CopyToClipboard>
                            <a
                             className="copy_invite_link_clicked w-button">Einladung
                            kopiert</a>
                        <h2 className="ctatext_header laufzieltitle">Euer Laufziel</h2>
                        <div className="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form">
                                <input type="text"
                                      className="copy_invite_link laufziel team w-input"
                                      maxlength="256" name="name"
                                      data-name="Name"
                                      placeholder="Nike Run Laufziel eingeben"
                                      id="name"
                                      style={{backgroundColor: "rgb(255, 51, 0)"}}/>
                                    <input
                                type="submit" value="Submit" data-wait="Please wait..."
                                className="copy_invite_link submitlaufziel team w-button" style={{backgroundColor: "rgb(255, 51, 0)"}}/>

                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="articlecontainer w-container">
                    <div className="titletext"><h2 className="author">Mark Manson</h2>
                        <h1 className="articletitle">Chaos bei Rettung</h1></div>
                    <div className="titleimage"></div>
                    <div className="articletext">
                        <div className="articletext_first_letter">F</div>
                        <p className="articletext_first_paragraph">ünf Migranten sind während einer Rettung im Mittelmeer ertrunken. Das ist
                            ihre Geschichte.</p>
                        <div className="articletext_body">Die Nothilfeorganisation Sea Watch, die mit Rettungsbooten schiffbrüchige
                            Migranten im Mittelmeer birgt, erhob gegen die libysche Küstenwache schwere Vorwürfe. Demnach habe während
                            der laufenden Rettung ein heranpreschendes libysches Patrouillenboot "Angst und Panik" unter den Migranten
                            ausgelöst.&nbsp;An Bord des Schiffs der Küstenwache seien Menschen bedroht und geschlagen worden. Darum
                            seien bereits Gerettete zurück ins Wasser gesprungen und ertrunken.
                        </div>
                    </div>
                    <div className="coverpic"></div>
                    <div className="articletext"><h3 className="ctatext_header">So kannst du helfen!</h3>
                        <p className="bold ctatext_body">Am nächsten Dienstag ist ein Spendenlauf von Nike.</p>
                        <p className="ctatext_body italic">7. Dezember, München, Marienplatz.</p>
                        <p className="ctatext_body">Renn um Flüchtlingen zu helfen!</p>
                        <a onClick={this.participate.bind(this)}
                              data-w-id="c8975a9d-bb66-b409-2a11-8b0f02c8062d"
                              style={{backgroundColor: "rgb(255, 51, 0)"}}
                              className="button w-button"
                              data-ix="copy-invite-linkappear">
                            {this.state.team && this.state.team.length > 0?"Einladung Annehmen":"Teilnehmen"}
                            </a>
                        <a
                             data-w-id="9668432f-aa7e-515b-bdca-badd10eec1f1"
                            className="copy_invite_link w-button" data-ix="copy-invite-linkappear-2"
                            style={{backgroundColor: "rgb(255, 51, 0)"}}>Einladung kopieren</a><a
                             className="copy_invite_link_clicked w-button">Einladung
                            kopiert</a>
                        <div className="bottommenu placeholder"></div>
                    </div>
                </div>
                <div className="bottommenu w-container"><a onClick={this.share.bind(this)}  className="sendbutton w-button">Senden
                    an</a><a  className="teambutton w-button"
                             data-ix="new-interaction"></a><a 
                                                              className="articlebutton w-button" data-ix="new-interaction-2"></a></div>

            </div>
        );
    }

    participate() {
        console.log("participate()");
        return MessengerExtensions.getUserID(this.postToServer)
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

    postToServer(userID) {
        const self = this;
        return fetch('/event', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin', // By default, fetch won't send any cookies to the server
            body: JSON.stringify({userID: userID})
            })
            .then(res => {
                let {first_name,last_name} = res.userInfo;
                alert("res:"+ JSON.stringify(res))
                self.setState((prevState, props) => ({
                    team: prevState.team.push(first_name + " " + last_name)
                }));
            })

    }
    post() {
        const self = this;
        return fetch('https://workout4charity.herokuapp.com/event', {
            method: 'post',
            body: JSON.stringify({userID: 1379308248862878})
            })
            .then(res => {
                let {first_name,last_name} = res.userInfo;
                alert("res:"+ JSON.stringify(res))
                self.setState((prevState, props) => ({
                    team: prevState.team.push(first_name + " " + last_name)
                }));
            })

    }
    postL() {
        const self = this;
        return fetch('http://localhost:5000/event', {
            method: 'post',
            body: JSON.stringify({userID: 1379308248862878})
            })
            .then(res => {
                let {first_name,last_name} = res.userInfo;
                alert("res:"+ JSON.stringify(res))
                self.setState((prevState, props) => ({
                    team: prevState.team.push(first_name + " " + last_name)
                }));
            })

    }

    postRequest() {
        return new Promise((resolve, reject) => {
            // request({
            //         method: 'POST',
            //         uri: "https://workout4charity.herokuapp.com/event",
            //         json: {userID: 1379308248862878},
            //         body: {userID: 1379308248862878},
            //     },
            //     function (error, response) {
            //         if (error) {
            //             console.error('Error while userInfoRequest: ', error);
            //             reject(error);
            //         } else {
            //             console.log('userInfoRequest result: ', response.body);
            //             let userInfo = JSON.parse(response.body);
            //             resolve(userInfo);
            //         }
            //     });
            // request.post(
            //     '/event',
            //     { json: {userID: 1379308248862878}},
            //     function (error, response, body) {
            //         if (error) {
            //             console.error('Error while userInfoRequest: ', error);
            //             reject(error);
            //         } else {
            //             console.log('userInfoRequest result: ', response.body);
            //             let userInfo = JSON.parse(response.body);
            //             alert(userInfo)
            //             alert(body)
            //             resolve(userInfo);
            //         }
            //     }
            // );

            request({
                url: "https://workout4charity.herokuapp.com/event",
                method: "POST",
                json: true,   // <--Very important!!!
                body: {userID: 1379308248862878}
            }, function (error, response, body){
                alert(JSON.stringify(response))
                console.log(response);
            });
        });
    }

    buildList(name) {
        return <li className="teamname">{name}</li>
    }
}

export default WebViewer;
