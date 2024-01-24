// ==UserScript==
// @name         SteamActivateSubmit
// @version      0.1
// @description  Auto submit steam product activation codes
// @author       Goofables
// @match        https://store.steampowered.com/account/registerkey*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// ==/UserScript==


function check_code() {
    if (document.getElementById("error_display").innerHTML !== "") return;
    let code = document.getElementById("product_key").value;
    document.getElementById("accept_ssa").checked = true;
    if (code.length < 7) return;
    if (document.getElementById("registerkey_form").style.display !== "") return;
    document.getElementById("register_btn").click()
}

setInterval(check_code,50);
