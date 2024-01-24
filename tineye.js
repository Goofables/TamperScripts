// ==UserScript==
// @name         Better Tineye
// @version      0.1
// @description  Check if images are still active
// @author       Goofables
// @match        https://tineye.com/*
// @icon         https://www.google.com/s2/favicons?domain=tineye.com
// @grant        none
// ==/UserScript==

function test_images() {
    for (const e of document.getElementsByClassName("image-link")) {
        const img = document.createElement("img");
        img.src = "https://i.mxsmp.com/a:tineye/" + e.getElementsByTagName("a")[0].href;
        img.referrerPolicy = "no-referrer";
        img.width = 20;
        img.height = 20;
        e.append(img);
    }
}


setTimeout(
    () => {
        const button = document.createElement('button');
        button.innerText = 'Test images';
        button.addEventListener('click', test_images);
        document.getElementById("results-div").prepend(button);
    }, 1000
)

