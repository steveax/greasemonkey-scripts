// ==UserScript==
// @name         Linkify Ticket Numbers in PRs
// @namespace    http://puppetlabs.com/
// @version      0.1
// @description  Add links back to tickets.puppetlabs.com for various projects in pull requests at github
// @author       Steve Axthelm
// @match        https://github.com/puppetlabs/*
// @grant        none
// ==/UserScript==
(function() {
  var projects = /(BKR|BUILD|CHAT|CORPSRE|ENTERPRISE|FACT|FORGE|HELP|HI|IMAGES|INFRA|IT|MCO|MODULES|OPS|PA|PDB|PE|PERF|POOLER|PUP|QA|QENG|RE|SERVER|SWEEP|TK|VANAGON|WEB|WHO)-\d+/;
  var mainHeading = document.querySelector('.gh-header-title');
  headingText = mainHeading.querySelector('.js-issue-title').textContent;
  if (document.location.href.match(/pull\/\d+.*/) && headingText.match(projects)) {
    headingText = headingText.replace(projects, '<a href="https://tickets.puppetlabs.com/browse/' + '$&' + '">' + '$&' + '</a>');
    mainHeading.querySelector('.js-issue-title').innerHTML = headingText;
  }
})();
