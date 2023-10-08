// ==UserScript==
// @name         DSU SSO
// @version      0.1
// @description  Fix the dumb sso page that wants your username first
// @author       Goofables
// @match        https://adfs.sdbor.edu/adfs/ls/*
// @icon         https://www.google.com/s2/favicons?domain=sdbor.edu
// @grant        none
// ==/UserScript==

setTimeout(() => {
    document.getElementById("emailInput").value = "@dsu.edu";
    document.getElementsByName("HomeRealmByEmail")[0].click();
}, 500);

