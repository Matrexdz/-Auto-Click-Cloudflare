// ==UserScript==
// @name         Auto Click Cloudflare
// @namespace    Matrexdz
// @version      0.1
// @description  Automatically clicks on the verification phrase when it appears on the page
// @author       Your Name
// @include      *
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let searchCount = 0;
    setInterval(function() {
        const verificationPhrase = document.querySelector('span.ctp-label');
        if (verificationPhrase && verificationPhrase.textContent.trim() === 'Vérifiez que vous êtes humain') {
            verificationPhrase.click();
            searchCount++;
        }
    }, 1000);
    const counterElement = document.createElement('div');
    counterElement.style.display = 'none';
    document.body.appendChild(counterElement);
})();
