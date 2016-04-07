cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "id": "cordova-plugin-dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "id": "cordova-plugin-dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "id": "cordova-plugin-globalization.GlobalizationError",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "id": "cordova-plugin-globalization.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/cordova-plugin-mfp/bootstrap.js",
        "id": "cordova-plugin-mfp.mfp",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-mfp-jsonstore/bootstrap.js",
        "id": "cordova-plugin-mfp-jsonstore.jsonstore",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-mfp-push/www/MFPPush.js",
        "id": "cordova-plugin-mfp-push.MFPPush",
        "clobbers": [
            "MFPPush"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.1",
    "cordova-plugin-dialogs": "1.2.0",
    "cordova-plugin-globalization": "1.0.3",
    "cordova-plugin-okhttp": "2.0.0",
    "cordova-plugin-mfp": "8.0.2016032300",
    "cordova-plugin-mfp-jsonstore": "8.0.2016032300",
    "cordova-plugin-mfp-push": "8.0.2016032300"
};
// BOTTOM OF METADATA
});