let MessengerExtensions;
module.exports = {
    doneLoading: doneLoading,
    getFeatures: getFeatures,
    getUserID: getUserID,
    share: share,
    close: close,
    askPermission: askPermission,
};
doneLoading();
function doneLoading() {
    return new Promise((resolve, reject) => {
        try {
            if (MessengerExtensions) resolve(MessengerExtensions);
            window.extAsyncInit = () => {
                console.log("doneLoading");
                MessengerExtensions = window.MessengerExtensions;
                resolve(window.MessengerExtensions);
            };
        } catch (err) {
            reject(err)
        }
    });
}

function getFeatures() {
    return doneLoading().then(extension =>
        extension.getSupportedFeatures(result =>
                result.supported_features,
            err => new Error(err)));
}

function getUserID(callback) {
    return doneLoading().then(extension =>
        extension.getUserID(function success(uids) {
            // User ID was successfully obtained.
            callback(uids.psid);

            return uids.psid;
        }, (err, errorMessage) => {
            // Error handling code
            return new Error(err, errorMessage);
        }))
}

function share(message) {
    message = message || {
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
                        "url": "https://workout4charity.herokuapp.com/",
                        "webview_share_button": "hide",
                        "webview_height_ratio": "full",
                        "messenger_extensions": true,
                    },
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://workout4charity.herokuapp.com/",
                        "title": "Mehr Lesen",
                        "webview_share_button": "hide",
                        "webview_height_ratio": "full",
                        "messenger_extensions": true,
                    }]
                }]
            }
        }};

    return doneLoading().then(extension => {
        return extension.beginShareFlow(function(share_response) {
                // User dismissed without error, but did they share the message?
                if(share_response.is_sent){
                    // The user actually did share.
                    // Perhaps close the window w/ requestCloseBrowser().
                    return true;
                }
                return false;
            },
            function(errorCode, errorMessage) {
            // An error occurred in the process
                return new Error(errorCode, errorMessage);
            },
            message,
            "broadcast");
    })
}

function close() {
    return doneLoading().then(extension =>
        extension.requestCloseBrowser(
            () => "Close successful",
            err => new Error(err)));
}

function askPermission(permission) {
    return doneLoading().then(extension =>{
        extension.askPermission(
            function(permission_response) {
                // Person grants or rejects the asked permission.
                let permissions = permission_response.permissions; // list of all permissions granted
                let isGranted = permission_response.isGranted;

                if (isGranted) {
                    // User has granted user_profile permission
                    return permissions;
                }
                else return Promise.reject();
            }, function(errorCode, errorMessage) {
                // Error occurred
                return new Error(errorCode, errorMessage);
            },
            permission||"user_profile"
        );
    })
}

