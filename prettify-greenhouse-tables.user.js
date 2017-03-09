// ==UserScript==
// @name         Prettify Greenhouse Tables
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Steve Axthelm
// @match        https://app.greenhouse.io/guides/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var cells = document.getElementById('interview_guide_tab').getElementsByTagName('td');


    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute('style', 'padding: 0.5em; border: 1px solid #333; vertical-align: top');
    }
})();
