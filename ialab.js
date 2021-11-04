// ==UserScript==
// @name         IALab Utils
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make IALab interface better
// @author       Goofables
// @match        https://vcloud.ialab.dsu.edu/tenant/*
// @icon         https://www.google.com/s2/favicons?domain=dsu.edu
// @grant        none
// ==/UserScript==

setInterval(function() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("disabled");
        buttons[i].removeAttribute("aria-disabled");
    }
//    console.log("reeee");
}, 500);

if (document.URL.includes("https://vcloud.ialab.dsu.edu/login/")) setInterval(()=>{document.getElementById("loginButton").click()}, 250);

