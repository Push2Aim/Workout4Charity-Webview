import React, {Component} from "react";
import "./webflow.css";
import MessengerExtensions from "./messengerExtensions";
import {CopyToClipboard} from "react-copy-to-clipboard";
import request from "request";

class WebViewer extends Component {
    PAGE_ACCESS_TOKEN = "EAAB77aN8QOUBACD3DUlgyUQ8oLNkexhXZCggJrho3sRckDnZAWsCowOIm13lfFZB1UZCPL1nbh3kpCz6vn47qRSAxBmmZBK6NutjRmGEoILtFZAoC01uC1fZB3eGsvYYj3MEYVnBJZBSIkJDSu4SYDGxMcsUgSWV8tPk0cmeambdta3VbcWGPKaj";

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
                <div className="teamcontainer w-container">
                    <div className="teamtext"><h2 className="ctatext_header blue">Dein Team</h2>
                        <ul className="namelist">
                            {this.state.team.map(this.buildList)}
                        </ul>
                        <a   className="copy_invite_link team w-button" data-ix="copy-invite-linkappear-3">Einladung kopieren</a><a
                              className="copy_invite_link_clicked w-button">Einladung kopiert</a>
                        <h2 className="ctatext_header laufzieltitle">Euer Laufziel</h2></div>
                </div>
                <div className="articlecontainer w-container">
                    <div className="titletext"><h2 className="author">Martin Lejeune</h2>
                        <h1 className="articletitle">Nähre Hoffnung :)</h1></div>
                    <div className="titleimage"></div>
                    <div className="articletext">
                        <div className="articletext_first_letter">U</div>
                        <p className="articletext_first_paragraph">nseren Willen zu leben und zu kämpfen, können keine Raketen und Granaten
                            brechen.</p>
                        <div className="articletext_body">Gaza Stadt, der 31. Juli 2014. Hilferuf aus dem Gazastreifen. Seit dem 22.
                            Juli bin ich im Gazastreifen und ich kann einfach nicht glauben, was hier passiert. Ich erlebe die
                            schlimmsten Tage meines Lebens. Alle Menschen in Gaza erleben die schlimmsten Tage ihres Lebens. Denn so
                            massiv wie in dieser Wochen waren noch keine Angriffe auf Gaza. Hinter diesen Worten verbergen sich
                            menschliche Tragödien. Die humanitäre Katastrophe in Gaza hat einen neuen Höhepunkt erreicht. Der Krieg
                            in Gaza ist ein Krieg gegen Zivilisten. Das sage nicht nur ich, sondern auch die Menschen in Gaza und die
                            Journalisten, mit denen ich spreche, von denen einige so ziemlich sämtliche Kriege der letzten zehn Jahre
                            abgedeckt haben (Afghanistan, Irak, Libyen, Syrien, etc…). Was hier passiert, hat eine besondere
                            Qualität.Überall schlagen Raketen ein. In Wohnhäuser, in denen Familien leben, in Moscheen, in denen
                            Menschen beten. Am frühen Abend des 30. Juli bombardierte ein F16-Kampfjet das Wohnhaus, das bis dahin
                            schräg gegenüber unseres Hauses stand. Wir saßen gerade auf dem Balkon als die Rakete 50 Meter entfernt
                            einschlug. Kurz zuvor hörte ich noch einen Esel hysterisch wiehern, als ob er den Angriff schon ahnte und
                            uns warnen wollte. Trümmer fliegen in schneller Geschwindigkeit gegen unsere Hausmauer und verfehlen uns
                            nur knapp. Wir sitzen plötzlich inmitten einer Staubwolke. Der Staub bedeckt meine Brillengläser und meinen
                            Laptop. Der Staub knirscht zwischen meinen Zähnen. Es dauert etwa eine halbe Minute bis sich der Rauch legt.
                            Jetzt sehe ich den Vater, mit dem ich mich vorhin noch auf der Straße unterhalten habe, wie er sich mit
                            seinen Kindern hinter einem Bagger verschanzt, um Deckung zu finden, falls ein zweiter Schlag folgt. Der
                            Bagger steht auf einem Parkplatz gegenüber unseres Hauses und gehört einem Baumunternehmer. Ich laufe sofort
                            zu den Trümmern des bombardierten Wohnhauses und sehe die Verletzten. Ich habe die Familie schon mehrmals in
                            unserer Straße spazierengehen sehen. Ich filme mit meinem Handy wie die Rettungswagen eintreffen und die
                            Verletzten ins Krankenhaus bringen. Auf der Straße liegen Steine, Scherben, umgekippte Strommasten.Seit dem
                            ich hier bin, wurden jeweils am hellichten Tag bei unbedecktem Himmel und bei freier Sicht zahlreiche zivile
                            Ziele bombardiert. Zum Beispiel eine Mädchengrundschule der Vereinten Nationen in Beit Hanoun, in der sich
                            Hunderte Flüchtlinge aufhielten, und dies, obwohl die UN zuvor die GPS-Koordinaten der Schule dem
                            Generalkommando der israelischen Streitkräfte durchgegeben hatte. Ich erinnere schon gar nicht mehr die
                            genaue Zahl der Toten und habe auch kein Internet, um es zu recherchieren. Auch wurde auch ein Park im
                            Schatti-Flüchtlingslager, vor dessen Eingang acht Kinder spielten, die alle durch den Angriff getötet
                            wurden, bombardiert. Und am späten Nachmittag des 30. Juli fielen der Bombardierung eines Marktes im Norden
                            des Gazastreifens 17 Menschenleben zum Opfer. 160 Palästinenser wurden verletzt, die dort gerade ihre
                            Einkäufe erledigten. Diese Aufzählung an Massakern an der Zivilbevölkerung ließe sich beliebig lang
                            fortsetzen, da seit dem 8. Juli bereits um die 1000 Zivilisten getötet wurden. Ich kann nicht verstehen,
                            weshalb die israelischen Streitkräfte so etwas tun. Weshalb werden offenbar gezielt zivile Ziele und große
                            Menschenansammlungen bombardiert? Die genaue Kenntnis der zu attackierenden Ziele dürfte durch die
                            allgegenwärtigen Aufklärungsdrohnen, die gestochen scharfe Bilder liefern, vorhanden sein. Weshalb töten die
                            Bomberpiloten immer wieder vorsätzlich Frauen und Kinder? Welchen ethischen Maßstäben folgen diese Herren
                            der Lüfte über Leben und Tod? Sie sitzen in den modernsten Kampfjets, die jemals entwickelt wurden und
                            brüsten sich mit «zielgenauen Schlägen». Daß in einem Krieg Soldaten Soldaten töten müssen, ist durch das
                            Völkerrecht legitimiert, aber Zivilisten gezielt zu attackieren, so wie die Familie in unserem Nachbarhaus,
                            die Kinder im Park, die Flüchtlinge in der UN-Schule, das ist rechtlich durch keine Kriegsordnung gedeckt.
                            Die Menschen im Gazastreifen fragen sich, weshalb deutsche und westeuropäische Regierungschefs diese
                            Verstöße gegen internationale Konventionen nicht scharf verurteilen. Das sind Kriegsverbrechen, die hier
                            jeden Tag im Gazastreifen durch die israelischen Streitkräfte verübt werden. Auch Krankenhäuser, ein
                            Wasserwerk und das einzige Kraftwerk des Gazastreifens wurden bombardiert. In unserem Viertel im Zentrum von
                            Gaza Stadt, das «Beverly Hills» genannt wird und bis vor drei Wochen noch über eine ziemlich intakte
                            Infrastruktur verfügte, hat niemand mehr fließendes Wasser. Wir waschen uns mit Wasser aus Plastikflaschen,
                            die wir im Tante-Emma-Laden um die Ecke kaufen. Wir haben seit der Nacht auf den 29. Juli, in der das
                            Kraftwerk bombardiert wurde, keinen Strom und kein Internet mehr. Das Festnetztelefon ist tot. Das Handy ist
                            das einzige Kommunikationsmittel, das noch funktioniert, was natürlich auf Dauer sehr kostspielig ist.
                            Diesen Text schreibe und versende ich im Al Deira Hotel, das über einen eigenen Generator verfügt und in dem
                            die französische Nachrichtenagentur AFP ihr eigenes WLAN-Netz hat. Es gibt kein Brot mehr im
                            Gazastreifen. Es gibt nirgendwo mehr Brot zu kaufen. Wir essen das Brot, das die Ehefrau meines Gastgebers
                            Maher zu Hause bäckt im Innenhof unseres Hauses in einem selbstgebauten Ofen, den sie mit Holzkohle
                            befeuert. Wir tunken das Brot in Olivenöl und Za&#x27;tar, eine Paste aus Thymian, Sesam und Salz. Das essen
                            wir jeden Tag. Selbst wenn es noch Brot zu kaufen gäbe, hätten wir kein Geld, um es bezahlen zu können. Seit
                            Beginn des Krieges gibt es kein Bargeld mehr an den Geldautomaten, sind die Banken geschlossen, wurde das
                            Finanzministerium komplett zerstört, funktionieren EC- und Kreditkarten nicht mehr. Wenn wir Mehl und Öl
                            kaufen gehen im Laden um die Ecke, lassen wir anschreiben, so wie das alle derzeit tun müssen.Es gibt kein
                            öffentliches Leben mehr im Gazastreifen. Alle Behörden und Büros, fast alle Geschäfte und Restaurants sind
                            geschlossen. Die Menschen gehen nur aus dem Haus, falls unbedingt nötig. Die Strände und Parks sind
                            menschenleer. Die letzten vier Kinder, die am Strand Fußball spielten, sind von einer israelischen Rakete
                            getötet worden. Es war kein Hamas-Kämpfer oder Raketenabschußrampen in der Nähe, berichteten Augenzeugen
                            übereinstimmend.Ich wohne in einem zweistöckigen Haus um die Ecke der am 29. Juli zerbombten Al Amin
                            Moschee. Zehn Menschen lebten in dem Haus, bevor der Krieg begann. Jetzt sind es 70, die sich die zwei
                            Wohnungen im Haus teilen. Meine Gastgeber haben 60 Flüchtlinge aus dem Norden des Gazastreifens, der dem
                            Erdboden platt gemacht wurde, bei sich aufgenommen. Die Männer müssen im Hauseingang und im Hausflur
                            schlafen, die Wohnungen sind den Kindern und Frauen vorbehalten. Auf so engem Raum mit fremden Menschen
                            zusammen zu leben und nebeneinander zu schlafen ist für alle nicht leicht und Privatsphäre gibt es gar
                            keine. Auch liegen die Nerven blank nach dreieinhalb Wochen Dauerbombardement, von dem ich ja nur anderthalb
                            Wochen mitbekommen habe. Trotzdem verhalten sich alle 70 Bewohner der zwei Wohnungen immer ruhig und
                            rücksichtsvoll, sind solidarisch und teilen das wenige miteinander, was sie noch haben: das selbstgebackene
                            Brot, den Handy-Akku, die letzte Zigarette, ein Stück Seife zum Waschen. Ich war gestern in einem
                            Kindergarten in unserem Viertel, in dem nachts 80 Menschen pro Gruppenraum schlafen. Palästinenser sind
                            so schlau wie die Libanesen, intelligent wie die Iraker, starke Kämpfer wie die Algerier und gastfreundlich
                            wie die Syrer. Vielleicht ist es diese Vielzahl an guten Eigenschaften, die es den Menschen in Gaza
                            ermöglicht, mit dieser schweren Situation umzugehen ohne zu resignieren. Trotz seit dreieinhalb Wochen
                            anhaltender Bombardierung aus der Luft, zu See und zu Land spielen die Kinder noch tagsüber auf der Straße,
                            singen die Frauen beim Brotbacken noch ihre Lieder, leisten die Männer noch immer Widerstand. Maher, mein
                            Gastgeber, erklärt: «Unseren Willen zu leben und zu kämpfen, können keine Raketen und Granaten brechen.»
                        </div>
                    </div>
                    <div className="coverpic"></div>
                    <div className="articletext"><h3 className="ctatext_header">So kannst du helfen!</h3>
                        <p className="ctatext_body bold">Am Freitag, den 12.1.2017, wollen wir von Spes einen Spendenlauf für Gaza
                            mitorganisieren.</p>
                        <p className="ctatext_body italic">Wenn wir 20 Teilnehmer aus dem MEP und von den Zuschauern des Demo Days
                            zusammenkriegen, werden wir alles geben, um den Lauf möglich zu machen!</p>
                        <p className="ctatext_body">Renne für Hoffnung im Gaza! Wir wollen nicht an Dein Geld, wir wollen niemanden zwingen
                            - Spes will Dir nur sagen, dass Du mit einem Lauf die Chance hast, etwas zu bewirken :-) Wir freuen uns auf
                            Dich!</p>
                        <a onClick={this.participate.bind(this)}  data-w-id="c8975a9d-bb66-b409-2a11-8b0f02c8062d" style={{backgroundColor:"rgb(255,51,0)"}}
                                        className="button w-button" data-ix="copy-invite-linkappear">
                            {this.state.team && this.state.team.length > 0?"Einladung Annehmen":"Teilnehmen"}
                        </a>
                        <CopyToClipboard>
                        <a
                              data-w-id="9668432f-aa7e-515b-bdca-badd10eec1f1"
                              className="copy_invite_link w-button"
                              data-ix="copy-invite-linkappear-2">
                            Einladung
                            kopieren</a>
                        </CopyToClipboard>
                        <a   className="copy_invite_link_clicked w-button">Einladung kopiert</a>
                        <div className="bottommenu placeholder"></div>
                    </div>
                </div>
                <div className="bottommenu w-container">
                    <a onClick={this.share.bind(this)}  className="sendbutton w-button">Senden an</a>
                    <a
                        className="teambutton w-button"
                        data-ix="new-interaction"></a>
                    <a
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
        return MessengerExtensions.share({
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Du kannst helfen ohne Geld auszugeben",
                        "subtitle":"Ein Brief aus dem Gazastreifen - Hoffnung.",
                        "image_url": "https://github.com/Push2Aim/Workout4Charity-ChatBot/blob/master/public/Gaza%20Hoffnung.jpg?raw=true",
                        "default_action": {
                            "type": "web_url",
                            "url": "https://workout4charity.herokuapp.com/?ref="+this.state.team.join(","),
                            "webview_share_button": "hide",
                            "webview_height_ratio": "full",
                            "messenger_extensions": true,
                        },
                        "buttons": [{
                            "type": "web_url",
                            "url": "https://workout4charity.herokuapp.com/?ref="+this.state.team.join(","),
                            "title": "Mehr Lesen",
                            "webview_share_button": "hide",
                            "webview_height_ratio": "full",
                            "messenger_extensions": true,
                        }]
                    }]
                }
            }}
    );
    }

    askPermission() {
        console.log("askPermission()");
        return MessengerExtensions.askPermission("user_profile")
            .then(this.participate());
    }

    userInfoRequest(userId) {
        alert("userInfoRequest("+userId+")")
        return new Promise((resolve, reject) => {
            request({
                    method: 'GET',
                    uri: "https://graph.facebook.com/v2.6/" + userId + "?fields=first_name,last_name,profile_pic,locale,timezone,gender&access_token=" + this.PAGE_ACCESS_TOKEN
                },
                function (error, response) {
                    if (error) {
                        console.error('Error while userInfoRequest: ', error);
                        alert(JSON.stringify(error))
                        reject(error);
                    } else {
                        console.log('userInfoRequest result: ', response.body);
                        let userInfo = JSON.parse(response.body);
                        alert(response.body);
                        resolve(userInfo);
                    }
                });
        })
            .then(userInfo =>{
                    alert(userInfo.first_name + " " + userInfo.last_name)
                }
            )
    }

    postToServer(userID) {
        const self = this;
        fetch('/event', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin', // By default, fetch won't send any cookies to the server
            body: JSON.stringify({userID: userID})
            })
            .then(res => {
                let {first_name,last_name} = res.body.userInfo;
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
