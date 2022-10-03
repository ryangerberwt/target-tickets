webpackJsonp([7], {
    108: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var overlay = function() {
            var api = {};
            return api.init = function($browserOverlay) {
                !function($browserOverlay) {
                    document.getElementById("overlay-exit-button").onclick = function() {
                        !function($browserOverlay) {
                            $browserOverlay.className = "hidden"
                        }($browserOverlay)
                    }
                }($browserOverlay)
            }
                ,
                api
        }();
        window.overlay = overlay,
            __webpack_exports__.a = overlay
    },
    109: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var overlay, __WEBPACK_IMPORTED_MODULE_0_guxfoe_unsupported_browsers_overlay_overlay_js__ = __webpack_require__(108), utils = (overlay = __WEBPACK_IMPORTED_MODULE_0_guxfoe_unsupported_browsers_overlay_overlay_js__.a,
            {
                setCookie: function(cname, cvalue, exdays) {
                    var d = new Date;
                    if (exdays) {
                        d.setTime(d.getTime() + 24 * exdays * 60 * 60 * 1e3);
                        var expires = "expires=" + d.toUTCString();
                        document.cookie = cname + "=" + cvalue + "; " + expires
                    } else
                        document.cookie = cname + "=" + cvalue + ";"
                },
                getCookie: function(cname) {
                    for (var name = cname + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
                        for (var c = ca[i]; " " === c.charAt(0); )
                            c = c.substring(1);
                        if (0 === c.indexOf(name))
                            return c.substring(name.length, c.length)
                    }
                    return ""
                },
                redirect: function(path) {
                    var host = window.location.host
                        , protocol = window.location.protocol;
                    window.location.pathname.indexOf(path) > -1 || window.location.replace(protocol + "//" + host + path)
                },
                isBlank: function(str) {
                    return !str || /^\s*$/.test(str)
                },
                showOverlay: function(canShowOverlay) {
                    if (canShowOverlay) {
                        var $browserOverlay = document.getElementById("legacy-browser-overlay")
                            , overlayCounter = utils.getCookie("unsupported-browsers-overlay-counter")
                            , cookieOverlayCounter = overlayCounter - 1 >= 0 ? overlayCounter - 1 : 0;
                        $browserOverlay.className = "",
                            utils.setCookie("unsupported-browsers-overlay-counter", cookieOverlayCounter, 30),
                            utils.setCookie("unsupported-browsers-overlay-session", "showed"),
                            overlay.init($browserOverlay)
                    }
                }
            });
        window.utils = utils,
            __webpack_exports__.a = utils
    },
    185: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var utils, api, __WEBPACK_IMPORTED_MODULE_0_guxfoe_unsupported_browsers_unsupported_browsers_utils_js__ = __webpack_require__(109), overlaySessionChecker = (utils = __WEBPACK_IMPORTED_MODULE_0_guxfoe_unsupported_browsers_unsupported_browsers_utils_js__.a,
            (api = {}).canShowOverlay = function($unsupportedDiv) {
                var canShowOverlay = !1;
                if ("showed" !== utils.getCookie("unsupported-browsers-overlay-session")) {
                    var overlayCount = $unsupportedDiv.getAttribute("data-overlay-count");
                    if (overlayCount > 0) {
                        var overlayCounter = utils.getCookie("unsupported-browsers-overlay-counter");
                        overlayCounter ? overlayCounter > 0 && (canShowOverlay = !0) : (utils.setCookie("unsupported-browsers-overlay-counter", overlayCount, 30),
                            canShowOverlay = !0)
                    } else
                        "0" === overlayCount && (utils.setCookie("unsupported-browsers-overlay-counter", "", -1),
                            canShowOverlay = !0)
                }
                return canShowOverlay
            }
            ,
            api);
        window.overlaySessionChecker = overlaySessionChecker,
            __webpack_exports__.a = overlaySessionChecker
    },
    725: function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(726)
    },
    726: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        __webpack_require__(108),
            __webpack_require__(109),
            __webpack_require__(185),
            __webpack_require__(727);
        var __WEBPACK_IMPORTED_MODULE_4__scss_unsupported_browser_scss__ = __webpack_require__(728);
        __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__scss_unsupported_browser_scss__)
    },
    727: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_guxfoe_unsupported_browsers_overlay_overlay_js__ = __webpack_require__(108)
            , __WEBPACK_IMPORTED_MODULE_1_guxfoe_unsupported_browsers_unsupported_browsers_utils_js__ = __webpack_require__(109)
            , __WEBPACK_IMPORTED_MODULE_2_guxfoe_unsupported_browsers_unsupported_browsers_overlaySessionChecker_js__ = __webpack_require__(185)
            , unsupportedBrowsers = function(overlaySessionChecker, utils, overlay) {
            var api = {}, initialized = !1, $icons, initUnsupportedBrowsers = function initUnsupportedBrowsers() {
                function roadblockOnIeManagement(ieVersion, canShowOverlay) {
                    var roadblockPagePath = $unsupportedDiv.getAttribute("data-roadblock-path")
                        , overlayVersion = $unsupportedDiv.getAttribute("data-overlay-version")
                        , roadblockVersion = $unsupportedDiv.getAttribute("data-roadblock-version");
                    if (overlayVersion && roadblockVersion) {
                        if (ieVersion <= roadblockVersion && ieVersion <= overlayVersion)
                            return void (roadblockVersion < overlayVersion ? utils.redirect(roadblockPagePath) : showOverlay(canShowOverlay));
                        if (ieVersion <= roadblockVersion)
                            return void utils.redirect(roadblockPagePath);
                        ieVersion <= overlayVersion && showOverlay(canShowOverlay)
                    }
                }
                function matchBrowser(details, userAgent) {
                    var browserRegResults = new RegExp(details.browserRegex,"i").exec(userAgent)
                        , browserMatch = !1;
                    if (utils.isBlank(details.browserName) && (browserMatch = !0),
                    browserRegResults && browserRegResults.length >= 1)
                        if (browserRegResults.length >= 4) {
                            var parsedBrowserVersion = browserRegResults[2] + "." + browserRegResults[3];
                            (details.browserVersion >= parsedBrowserVersion || utils.isBlank(details.browserVersion)) && (browserMatch = !0)
                        } else
                            browserMatch = !0;
                    return browserMatch
                }
                function matchPlatform(details, userAgent) {
                    var platformMatch = !1
                        , platformRegResults = new RegExp(details.platformRegex,"i").exec(userAgent);
                    if (utils.isBlank(details.platformName) && (platformMatch = !0),
                    platformRegResults && platformRegResults.length >= 1)
                        if (platformRegResults.length >= 4) {
                            var parsedPlatformVersion = platformRegResults[2] + "." + platformRegResults[3];
                            (details.platformVersion >= parsedPlatformVersion || utils.isBlank(parsedPlatformVersion)) && (platformMatch = !0)
                        } else
                            platformMatch = !0;
                    return platformMatch
                }
                function matchUserAgent(details) {
                    var userAgent = navigator.userAgent
                        , browserMatch = matchBrowser(details, userAgent)
                        , platformMatch = matchPlatform(details, userAgent);
                    return browserMatch && platformMatch
                }
                function choooseRoadblockMode(roadblockPagePath, canShowOverlay, mode) {
                    "roadblock" === mode ? utils.redirect(roadblockPagePath) : "overlay" === mode && showOverlay(canShowOverlay)
                }
                function showOverlay(canShowOverlay) {
                    canShowOverlay && (confirmWhenWindows($icons = $("#legacy-browser-overlay").find(".windows-only-icon")),
                        utils.showOverlay(!0))
                }
                function roadblockOtherBrowserManagement(canShowOverlay) {
                    var otherBrowsersListDetails, chosenOtherBrowsersList, roadblockPagePath = $unsupportedDiv.getAttribute("data-roadblock-path"), browserInfo, matchedBrowserDetails, matched;
                    function grepCallback(element) {
                        return element.description === browserInfo.browserFamily
                    }
                    if (window.JSON ? (otherBrowsersListDetails = JSON.parse($unsupportedDiv.getAttribute("data-all-other-browsers-list-details")),
                        chosenOtherBrowsersList = JSON.parse($unsupportedDiv.getAttribute("data-chosen-other-browsers-list"))) : (otherBrowsersListDetails = eval("(" + $unsupportedDiv.getAttribute("data-all-other-browsers-list-details") + ")"),
                        chosenOtherBrowsersList = eval("(" + $unsupportedDiv.getAttribute("data-chosen-other-browsers-list") + ")")),
                    otherBrowsersListDetails && chosenOtherBrowsersList)
                        for (var i = 0; i < chosenOtherBrowsersList.length; i++) {
                            browserInfo = chosenOtherBrowsersList[i],
                                matchedBrowserDetails = grep(otherBrowsersListDetails, grepCallback);
                            for (var j = 0; j < matchedBrowserDetails.length; j++)
                                matched = matchUserAgent(matchedBrowserDetails[j]),
                                matched && choooseRoadblockMode(roadblockPagePath, canShowOverlay, browserInfo.mode)
                        }
                }
                function grep(items, callback) {
                    for (var filtered = [], length = items.length, i = 0; i < length; i++) {
                        var item = items[i];
                        callback(item) && filtered.push(item)
                    }
                    return filtered
                }
                function roadblockManagement($unsupportedDiv, canShowOverlay) {
                    var ieVersion = getIEVersion($unsupportedDiv);
                    ieVersion ? roadblockOnIeManagement(ieVersion, canShowOverlay) : roadblockOtherBrowserManagement(canShowOverlay)
                }
                function getIEVersion($unsupportedDiv) {
                    var sAgent, idx, ieVersion = $unsupportedDiv.getAttribute("data-ie-version");
                    return ieVersion || (ieVersion = (idx = (sAgent = window.navigator.userAgent).indexOf("MSIE")) > 0 ? parseInt(sAgent.substring(idx + 5, sAgent.indexOf(".", idx)), 10) : navigator.userAgent.match(/Trident\/7\./) ? 11 : null),
                        ieVersion
                }
                function isWindowsOS() {
                    return -1 !== navigator.appVersion.indexOf("Win")
                }
                function confirmWhenWindows($icons) {
                    isWindowsOS() && $icons.addClass("windows-confirmed")
                }
                var $unsupportedDiv = document.getElementById("unsupported-browsers-data");
                if ($unsupportedDiv) {
                    var canShowOverlay = overlaySessionChecker.canShowOverlay($unsupportedDiv);
                    roadblockManagement($unsupportedDiv, canShowOverlay)
                } else
                    $icons = $(".windows-only-icon"),
                        confirmWhenWindows($icons)
            };
            return api.init = function() {
                initialized || ("function" != typeof window.matchMedia && (window.matchMedia = function() {
                        return !0
                    }
                ),
                    window.addEventListener ? window.addEventListener("load", initUnsupportedBrowsers, !1) : window.attachEvent && window.attachEvent("onload", initUnsupportedBrowsers),
                    initialized = !0)
            }
                ,
                api.init(),
                api
        }(__WEBPACK_IMPORTED_MODULE_2_guxfoe_unsupported_browsers_unsupported_browsers_overlaySessionChecker_js__.a, __WEBPACK_IMPORTED_MODULE_1_guxfoe_unsupported_browsers_unsupported_browsers_utils_js__.a, __WEBPACK_IMPORTED_MODULE_0_guxfoe_unsupported_browsers_overlay_overlay_js__.a);
        window.unsupportedBrowsers = unsupportedBrowsers;
        var _unused_webpack_default_export = unsupportedBrowsers
    },
    728: function(module, exports) {}
}, [725]);
