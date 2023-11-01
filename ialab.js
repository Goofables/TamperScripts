// ==UserScript==
// @name         IALab Utils
// @version      0.1
// @description  Make IALab interface better
// @author       Goofables
// @match        https://vcloud.ialab.dsu.edu/*
// @icon         https://www.google.com/s2/favicons?domain=dsu.edu
// @grant        none
// ==/UserScript==

setInterval(() => {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("disabled");
        buttons[i].removeAttribute("aria-disabled");
    }
}, 1000);

if (document.URL.includes("https://vcloud.ialab.dsu.edu/login/")) setInterval(() => {
    document.getElementById("loginButton").click()
}, 250);


