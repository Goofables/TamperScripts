// ==UserScript==
// @name         Better Quizlet
// @version      0.2
// @description  Make quizlet usable
// @author       Goofables
// @match        https://quizlet.com/*
// @icon         https://www.google.com/s2/favicons?domain=quizlet.com
// @grant        none
// ==/UserScript==

const cards = JSON.parse(window.__NEXT_DATA__["props"]["pageProps"]["dehydratedReduxStateKey"])["studyModesCommon"]["studiableData"]["studiableItems"];
document.getElementsByTagName("body")[0].innerHTML = '<style>td, tr {border: 3px solid rgb(100,100,100);padding: 10px;} </style><table style="max-width: 800px;min-width: 100px;margin: 0 auto;border: 3px solid rgb(100,100,100);"><thead><tr><th>Word</th><th>Definition</th></tr></thead><tbody id="betterQuizlet"></tbody></table>';

for (const card of cards) {
    const word = card["cardSides"].find(t => t["label"] === "word")["media"].find(t=>t["type"]===1)["plainText"];
    const definition = card["cardSides"].find(t => t["label"] === "definition")["media"].find(t=>t["type"]===1)["plainText"];
    document.getElementById("betterQuizlet").innerHTML += '<tr><td>' + word + '</td><td>' + definition + '</td></tr>';
}
