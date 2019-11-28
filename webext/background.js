/*jshint esversion: 6 */

function onBeforeRequest(request) {
    let url = request.url;
    url = url.replace(new RegExp("tracking=[^\\/\\?&]*", "gi"), "");

    if (request.url !== url) {
        console.log("redirect url to: "+url);
        return {
            redirectUrl: url
        }
    } else {
        return {}
    }
}


browser.webRequest.onBeforeRequest.addListener(
    onBeforeRequest,
    {urls: ["<all_urls>"]},
    ["blocking"]
);