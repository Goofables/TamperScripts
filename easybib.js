// ==UserScript==
// @name         Better Easybib
// @version      0.1
// @description  Close the popups
// @author       Goofables
// @match        https://www.easybib.com/*
// @icon         https://www.google.com/s2/favicons?domain=easybib.com
// @grant        none
// ==/UserScript==


function getElementsByXPath(xpath, parent) {
    let results = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
}

setInterval(
    () => getElementsByXPath("//button[@aria-label='close dialog']")[0].click(), 100,
)

setInterval(() => {
        for (const e of getElementsByXPath("//div[contains(@class,'styled__') and contains(@class, 'SideView')]")) {
            e.remove();
        }
        for (const e of document.getElementsByClassName("styled__AdMarginWrapper-sc-11wpos5-2")) {
            e.style.margin = '0';
        }
    },
    500
)




