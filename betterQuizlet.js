// ==UserScript==
// @name         Better Quizlet
// @version      0.1
// @description  Make quizlet usable
// @author       Goofables
// @match        https://quizlet.com/*
// @icon         https://www.google.com/s2/favicons?domain=quizlet.com
// @grant        none
// ==/UserScript==

document.getElementsByTagName("body")[0].innerHTML = '<style>td, tr {border: 3px solid rgb(100,100,100);padding: 10px;} </style><table style="max-width: 800px;min-width: 100px;margin: 0 auto;border: 3px solid rgb(100,100,100);"><thead><tr><th>Word</th><th>Definition</th></tr></thead><tbody id="betterQuizlet"></tbody></table>';

for (const tidin in window.Quizlet["setPageData"]["originalOrder"]) {
    const term = window.Quizlet["setPageData"]["termIdToTermsMap"][window.Quizlet["setPageData"]["originalOrder"][tidin]];
    document.getElementById("betterQuizlet").innerHTML += '<tr><td>' + term["word"] + '</td><td>' + term["definition"] + '</td></tr>';
}
