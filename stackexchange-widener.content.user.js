// ==UserScript==
// @name         StackExchange Widener
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Expand StackExchange sites to full screen width
// @author       Andrea D'Amore <a@d-amo.re>
// @match        http*://*stackoverflow.com/questions/*
// @match        http*://serverfault.com/questions/*
// @match        http*://superuser.com/questions/*
// @match        http*://askubuntu.com/questions/*
// @match        http*://stackapps.com/questions/*
// @match        http*://mathoverflow.net/questions/*
// @match        http*://*.stackexchange.com/questions/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9bpaItDu0g4hCwOlkQFdFNqlgEC6Wt0KqDyaVf0KQhSXFxFFwLDn4sVh1cnHV1cBUEwQ8QRycnRRcp8X9JoUWMB8f9eHfvcfcO8DYqTDG6xgFFNfVUPCZkc6uC/xV9CCKEWQyLzNAS6cUMXMfXPTx8vYvyLPdzf46gnDcY4BGI55imm8QbxNObpsZ5nzjMSqJMfE48ptMFiR+5Ljn8xrlos5dnhvVMap44TCwUO1jqYFbSFeIp4oisqJTvzTosc97irFRqrHVP/sJAXl1Jc53mEOJYQgJJCJBQQxkVmIjSqpJiIEX7MRf/oO1PkksiVxmMHAuoQoFo+8H/4He3RmFywkkKxIDuF8v6GAH8u0Czblnfx5bVPAF8z8CV2vZXG8DMJ+n1thY5Avq3gYvrtibtAZc7wMCTJuqiLfloegsF4P2MvikHhG6B3jWnt9Y+Th+ADHW1fAMcHAKjRcped3l3T2dv/55p9fcD4I1y07qwa9UAAAAwUExURQAAACosKTAyMDQ2M01PTE9RTmpsaXFzcHV3dKWnpMPFwsfJxs3QzNja193f3P///weP3FoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmCw0UEDIQSfOOAAAAUklEQVQI12P4DwUMCMY/Bn4gAjI+/AchsMj7DwwQNfwQkQ8M7yFq4Lr+Rv//v+U+kLGo/v//H1L/GX6ygSQS5jMcYAADHoTI/8VANd+1kHVBAQAZtGSMCcOCNwAAAABJRU5ErkJggg==
// @grant        none
// ==/UserScript==

(function (d) {
    "use strict";
    ["div.container", "div#content"]
        .map((sel) => document.querySelector(sel))
        .forEach(
            (el) => (el.style.maxWidth = el.style.maxWidth ? null : "none")
        );
})(document);
