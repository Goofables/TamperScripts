// ==UserScript==
// @name         Better D2L
// @version      0.1
// @description  Button to open all unread discussion posts
// @author       Goofables
// @match        https://d2l.sdbor.edu/*
// @icon         https://www.google.com/s2/favicons?domain=d2l.sdbor.edu
// @grant        none
// ==/UserScript==

function getElementsByXPath(xpath, parent) {
    let results = [];
    let query = document.evaluate(xpath, parent || document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
}

setTimeout(
    () => {
        const button = document.createElement('button');
        button.innerText = 'Open all unread';
        button.addEventListener('click', () => {
            getElementsByXPath("//div[contains(@class,'d2l-le-disc-post') and contains(@class,'unread')]//a[contains(@class,'d2l-linkheading-link')]/@href");
        })
        document.getElementById("createThreadButtonContainer").appendChild(button);
    }, 500
)
