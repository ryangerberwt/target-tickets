webpackJsonp([4], {
    702: function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(703)
    },
    703: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_js__ = __webpack_require__(704)
            , __WEBPACK_IMPORTED_MODULE_2__scss_components_dealerlocator_dealerlocator_scss__ = __webpack_require__(721);
        __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_components_dealerlocator_dealerlocator_scss__);
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).ready(function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#dealer-locator").length && __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_js__.a.init()
        })
    },
    704: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_2_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
            __webpack_require__(2))
            , __WEBPACK_IMPORTED_MODULE_2_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__)
            , __WEBPACK_IMPORTED_MODULE_3_angular_route__ = __webpack_require__(28)
            , __WEBPACK_IMPORTED_MODULE_4_angular_sanitize__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_route__),
            __webpack_require__(22))
            , __WEBPACK_IMPORTED_MODULE_5_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_sanitize__),
            __webpack_require__(13))
            , __WEBPACK_IMPORTED_MODULE_30_configurationProvider__ = (__webpack_require__(705),
            __webpack_require__(706),
            __webpack_require__(707),
            __webpack_require__(708),
            __webpack_require__(709),
            __webpack_require__(710),
            __webpack_require__(711),
            __webpack_require__(151),
            __webpack_require__(153),
            __webpack_require__(152),
            __webpack_require__(154),
            __webpack_require__(150),
            __webpack_require__(712),
            __webpack_require__(713),
            __webpack_require__(145),
            __webpack_require__(714),
            __webpack_require__(715),
            __webpack_require__(716),
            __webpack_require__(717),
            __webpack_require__(718),
            __webpack_require__(719),
            __webpack_require__(155),
            __webpack_require__(720),
            __webpack_require__(156),
            __webpack_require__(6))
            , __WEBPACK_IMPORTED_MODULE_30_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_configurationProvider__);
        function toggleAccordion(e) {
            var accordionContainer, accordionContent, $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget);
            "keyup" === e.type && 13 !== e.keyCode || (accordionContent = (accordionContainer = $element.parents(".accordion")).find(".accordion-content"),
                accordionContainer.siblings(".accordion").find(".accordion-content").slideUp("fast", function(param) {
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).parents(".accordion").removeClass("accordion-open")
                }),
                accordionContainer.hasClass("accordion-open") ? accordionContent.slideUp("fast", function() {
                    accordionContainer.removeClass("accordion-open")
                }) : accordionContent.slideDown("fast", function() {
                    accordionContainer.addClass("accordion-open")
                }))
        }
        module = {
            init: function() {
                var script, apiUrl, conf = __WEBPACK_IMPORTED_MODULE_30_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_jquery___default()("#global-market-configuration")), BSLconf = __WEBPACK_IMPORTED_MODULE_30_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_jquery___default()("#bsl-endpoints-configuration"));
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#dealerLocatorMap").length || (script = document.createElement("script"),
                    apiUrl = "https://maps.googleapis.com/maps/api/js?client=gme-fordmotorcompany2&libraries=places&channel=" + conf.marketCode + "&callback=initMap",
                    script.setAttribute("type", "text/javascript"),
                    script.setAttribute("id", "dealerLocatorMap"),
                    script.setAttribute("src", apiUrl),
                    document.body.appendChild(script)),
                    window.initMap = function() {
                        __WEBPACK_IMPORTED_MODULE_5_dealerlocator_dealer_locator_app_js__.a.constant("GLOBAL_CONF", conf),
                            __WEBPACK_IMPORTED_MODULE_5_dealerlocator_dealer_locator_app_js__.a.constant("BSL_CONF", BSLconf),
                            __WEBPACK_IMPORTED_MODULE_5_dealerlocator_dealer_locator_app_js__.a.constant("DL_SERVICE", function() {
                                var i, config = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-config").data("dl-config"), newConfig = {};
                                if (config) {
                                    if (config.localisationAndSearchConfig)
                                        for (i = 0; i < config.localisationAndSearchConfig.length; i++)
                                            newConfig[config.localisationAndSearchConfig[i].key] = config.localisationAndSearchConfig[i].value;
                                    if (config.serviceConfig)
                                        for (i = 0; i < config.serviceConfig.length; i++)
                                            newConfig[config.serviceConfig[i].key] = config.serviceConfig[i].value;
                                    if (config.userExperienceConfig)
                                        for (i = 0; i < config.userExperienceConfig.length; i++)
                                            newConfig[config.userExperienceConfig[i].key] = config.userExperienceConfig[i].value;
                                    if (config.filterConfig && config.filterConfig[0] && config.filterConfig[0].filters)
                                        for (newConfig.filters = {},
                                                 i = 0; i < config.filterConfig[0].filters.length; i++)
                                            newConfig.filters[config.filterConfig[0].filters[i].option] = [],
                                                newConfig.filters[config.filterConfig[0].filters[i].option].push(config.filterConfig[0].filters[i]);
                                    if (config.categoryConfig && config.categoryConfig[0] && config.categoryConfig[0].categories)
                                        for (newConfig.categories = config.categoryConfig[0].categories,
                                                 i = 0; i < newConfig.categories.length; i++)
                                            newConfig.categories[i].name = newConfig.categories[i].key,
                                                newConfig.categories[i].services = newConfig.categories[i].value;
                                    if (config.distanceConfig && (newConfig.distance = config.distanceConfig),
                                    config.dealerItemAddressFormat && config.dealerItemAddressFormat.entries) {
                                        for (newConfig.dealerItemAddressFormat = [],
                                                 i = 0; i < config.dealerItemAddressFormat.entries.length; i++)
                                            newConfig.dealerItemAddressFormat[i] = config.dealerItemAddressFormat.entries[i].entry;
                                        newConfig.dealerItemAddressSeparator = config.dealerItemAddressFormat.separator
                                    }
                                    config.cvpRatingConfig && (newConfig.cvpRating = config.cvpRatingConfig),
                                        newConfig.autocompleteUrl = config.autocompleteUrl,
                                        newConfig.cvpUrl = config.cvpUrl
                                }
                                return newConfig
                            }()),
                            __WEBPACK_IMPORTED_MODULE_2_angular___default.a.bootstrap(document.getElementById("dealer-locator"), ["dealerlocator"])
                    }
                    ,
                    window.onpopstate = function(event) {
                        window.location.hash.length || document.location.reload(!0)
                    }
                    ,
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#global-ux").on("click keyup", ".accordion > h5, .accordion > h3", toggleAccordion)
            }
        },
            __webpack_exports__.a = module
    },
    705: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_2_angular_route__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
            __webpack_require__(28))
            , __WEBPACK_IMPORTED_MODULE_3_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_route__),
            __webpack_require__(13))
            , __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__)
            , __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer_js__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_6_guxfoe_overlay_component_overlay_js__ = __webpack_require__(26)
            , __WEBPACK_IMPORTED_MODULE_7_sessionStorageService__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_guxfoe_overlay_component_overlay_js__),
            __webpack_require__(42));
        __WEBPACK_IMPORTED_MODULE_3_dealerlocator_dealer_locator_app_js__.a.controller("MainController", ["$scope", "$rootScope", "$routeParams", "$timeout", "ApiService", "ConfigService", "PremiumService", "DeviceService", "LastSearchService", "GLOBAL_CONF", "BSL_CONF", "DL_SERVICE", "$location", function($scope, $rootScope, $routeParams, $timeout, ApiService, ConfigService, PremiumService, DeviceService, LastSearchService, GLOBAL_CONF, BSL_CONF, DL_SERVICE, $location) {
            var i, LAT_LNG_REGEX = new RegExp("[^+]\\d*\\.\\d*","g"), polygon = DL_SERVICE.polygon.split("%2C"), desktopDisplayPolygon = DL_SERVICE.desktopDisplayPolygon ? DL_SERVICE.desktopDisplayPolygon.split("%2C") : null, mobileDisplayPolygon = DL_SERVICE.mobileDisplayPolygon ? DL_SERVICE.mobileDisplayPolygon.split("%2C") : null, mapElem = document.getElementById("map"), boundsArray = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(polygon, function(polygonItem) {
                var polygonItemLatLng = polygonItem.match(LAT_LNG_REGEX);
                return {
                    lat: polygonItemLatLng[1],
                    lng: polygonItemLatLng[0]
                }
            }), displayBounds = [], $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body"), toolTipState = 0, toolTipIsOpen = !1, currentOpenToolTip = null, polygonLatLng = null, dealerId = __WEBPACK_IMPORTED_MODULE_7_sessionStorageService__.a.getItem("dealerId");
            dealerId && $location.path("/dealer/" + dealerId);
            if ($scope.config = ConfigService.getConfig(),
                $scope.params = $routeParams,
                $scope.desktop = window.matchMedia("(min-width: 768px)"),
                $scope.mobileAndTablet = window.matchMedia("(max-width: 991px)"),
                $scope.api = new ApiService({
                    language: GLOBAL_CONF.localeLowerHyphenUpper,
                    countryCode: GLOBAL_CONF.marketCode,
                    countryCodes: DL_SERVICE.countryCodes,
                    imagePath: "/etc/designs/guxfoe/clientlibs/guxfoe-dealerlocator/img/dealerlocator/",
                    countryBounds: boundsArray,
                    autocompleteCallbackURL: DL_SERVICE.autocompleteUrl,
                    dealerTableURL: DL_SERVICE.dealerTableURL,
                    autocompleteCallbackName: "autoCompleteDealers",
                    autoCompleteState: DL_SERVICE.isAutoCompleteEnabled,
                    autocompleteLabelFormat: DL_SERVICE.autocompleteLabelFormat,
                    services: DL_SERVICE.services,
                    cookieToBsl: BSL_CONF.cookieToBsl
                }),
                $scope.dealerlocator = {
                    addressFormat: $scope.config.addressformat.split(","),
                    autoCompleteState: DL_SERVICE.isAutoCompleteEnabled,
                    maxStarRating: DL_SERVICE.cvpRating ? DL_SERVICE.cvpRating.starRatingsConfig.maxStarRating : 5,
                    searchType: LastSearchService.searchTypeValue("location"),
                    searchTypePlaceholders: {
                        location: __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#search-type-location").attr("data-placeholder"),
                        dealername: __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#search-type-dealername").attr("data-placeholder")
                    },
                    map: new $scope.api.map(mapElem,{
                        disableBusinessPOI: !0
                    }),
                    errorMessage: null,
                    displaySplash: !1,
                    resultsVisible: !0,
                    showAdvancedSearch: !0,
                    suggestions: {},
                    dealerDataStatus: $scope.api.getDealerDataStatus
                },
                $scope.filters = {},
                $scope.filter = {
                    distance: $scope.config.distance.defaultDistance
                },
                $scope.sidekickState = {
                    dealerDetailsHidden: !0,
                    filterSettingsHidden: !1
                },
                $scope.searchInput = LastSearchService.searchInputValue(""),
                $scope.offset = $scope.desktop.matches ? -.5 * __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-search").width() : null,
                $scope.page = 0,
                $scope.sizeElements = sizeElements,
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("dealerData:send", function(dealer) {
                    $scope.cvpDealer = dealer
                }),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("ratingsLink:clicked", function(e) {
                    var data;
                    e.preventDefault(),
                        data = {
                            dealersNumber: $scope.dealerlocator.dealers.length,
                            contentSubType: __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data("contentSubType"),
                            locator: __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target).data("locator")
                        },
                        $scope.onRatingsClick($scope.dealerlocator.dealer, data)
                }),
                $scope.onRatingsClick = function(dealer, data) {
                    $scope.vm.dealer = dealer,
                        $scope.dealerlocator.dealer = dealer,
                        $scope.dealerlocator.map.deselectMarkers(),
                        $rootScope.$broadcast("overlay:requestRatingsData", dealer, data),
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer_js__.a.getDealerLocatorEvents().trackDealerViewReviews($scope.vm, data)
                }
                ,
                $scope.getDealerIndexFromElement = function(e) {
                    return e.closest(".dealer-item-container").data("dealer-index")
                }
                ,
                $scope.$watch("sidekickState.filterSettingsHidden", function(newVal, oldVal) {
                    newVal !== oldVal && ($scope.dealerlocator.resultsVisible && !0 === newVal ? $scope.sidekickState.dealerDetailsHidden = !1 : $scope.dealerlocator.resultsVisible && !1 === newVal && ($scope.sidekickState.dealerDetailsHidden = !0))
                }, !0),
                $scope.$watch("dealerlocator.resultsVisible", function(newVal, oldVal) {
                    newVal !== oldVal && (!0 === newVal ? $scope.dealerlocator.dealers ? $scope.sidekickState.dealerDetailsHidden = !1 : $scope.handleFilterSettings("open") : !1 === newVal && ($scope.sidekickState.dealerDetailsHidden = !0,
                        $scope.handleFilterSettings("close")))
                }, !0),
            $scope.desktop.matches && desktopDisplayPolygon)
                for (i = 0; i < desktopDisplayPolygon.length; i++)
                    desktopDisplayPolygon[i] && (polygonLatLng = desktopDisplayPolygon[i].match(LAT_LNG_REGEX),
                        displayBounds.push({
                            lat: polygonLatLng[1],
                            lng: polygonLatLng[0]
                        }));
            if (!$scope.desktop.matches && mobileDisplayPolygon)
                for (i = 0; i < mobileDisplayPolygon.length; i++)
                    mobileDisplayPolygon[i] && (polygonLatLng = mobileDisplayPolygon[i].match(LAT_LNG_REGEX),
                        displayBounds.push({
                            lat: polygonLatLng[1],
                            lng: polygonLatLng[0]
                        }));
            displayBounds.length > 0 ? (sizeElements(),
                $scope.dealerlocator.map.setBounds(displayBounds)) : $scope.dealerlocator.map.setBounds(boundsArray);
            function sizeElements() {
                var mapHeight, headerHeight, searchFieldHeight, searchResultsHeight, searchResultsHeaders;
                $timeout(function() {
                    $scope.desktop.matches ? (headerHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("header.global").height() || __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#global_header").height(),
                        (mapHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).height() - headerHeight) < 630 ? mapHeight = 630 : mapHeight > 768 && (mapHeight = 768),
                        __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#map").height(mapHeight),
                        searchFieldHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-search").height(),
                        searchResultsHeaders = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-results-header"),
                        searchResultsHeight = mapHeight - searchFieldHeight - 50 - 20 - 15 - 40,
                        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-results-list, .filters").height(searchResultsHeight - 50 * (searchResultsHeaders.length - 1)),
                        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-results").css({
                            top: searchFieldHeight + 35,
                            maxHeight: searchResultsHeight + 50
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-results-container").css("minHeight", 0)) : (__WEBPACK_IMPORTED_MODULE_0_jquery___default()("#map").height(200),
                        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-results-list").height("auto"),
                        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-results").css({
                            top: 0,
                            maxHeight: "none"
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".filters").height("auto"),
                        $scope.handleSidekickState("open")),
                        $scope.dealerlocator.map.trigger($scope.dealerlocator.map.map, "resize")
                }, 0)
            }
            (function() {
                    var parametersString, parametersArr, filters, distance, i;
                    for (parametersString = location.search.substring(1),
                             parametersArr = parametersString.split("&"),
                             i = 0; i < parametersArr.length; i++)
                        parametersArr[i].split("=")[0] && ("filters" === parametersArr[i].split("=")[0] && (filters = parametersArr[i].split("=")[1].split("|")),
                        "distance" === parametersArr[i].split("=")[0] && (distance = parametersArr[i].split("=")[1]));
                    if (filters)
                        for (i = 0; i < filters.length; i++)
                            $scope.config.services[filters[i]] && ($scope.config.services[filters[i]].selected = !0);
                    if (distance)
                        for (i = 0; i < $scope.config.distance.distanceOptions.length; i++)
                            distance === $scope.config.distance.distanceOptions[i].key && ($scope.filter.distance = distance)
                }
            )(),
                $scope.sizeElements(),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".loading").removeClass("loading"),
                $scope.countNonHighlightedFilters = function(category) {
                    var nonHighlightedLength = category.filters.filter(function(el) {
                        return !el.highlighted
                    }).length;
                    return nonHighlightedLength
                }
                ,
                $scope.updateFilters = function(e) {
                    e && e.preventDefault(),
                        $scope.dealerlocator.showDlResultsFilter = !0,
                        $scope.dealerlocator.isSearchEnabled = !0,
                        $scope.dealerlocator.fromFilter = !0,
                        $scope.$broadcast("filters-updated")
                }
                ,
                $scope.updateSearchField = function(search) {
                    $scope.$broadcast("search-updated", search)
                }
                ,
                $scope.clearFilters = function($event) {
                    for (var props, _i = 0; _i < $scope.config.filters.length; _i++)
                        $scope.config.filters[_i].selected = !1;
                    $scope.dealerlocator.filtersUpdated = !1,
                        $scope.sizeElements(),
                        props = {
                            deviceType: DeviceService.get()
                        },
                    "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                    "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase()),
                    $event && $event.preventDefault()
                }
                ,
                $scope.showDlResults = function() {
                    var test = !1;
                    return (void 0 !== $scope.dealerlocator.dealers && $scope.dealerlocator.dealers.length > 0 || $scope.dealerlocator.showDlResultsFilter || $scope.dealerlocator.dealer) && (test = !0),
                        test
                }
                ,
                $scope.showFilterTooltip = function(filter, $event) {
                    currentOpenToolTip = __WEBPACK_IMPORTED_MODULE_0_jquery___default()($event.currentTarget).parent().next();
                    var closeAllTooltips = function() {
                        for (var _i2 = 0; _i2 < $scope.config.filters.length; _i2++)
                            $scope.config.filters[_i2].showTooltip = !1
                    };
                    closeAllTooltips(),
                        $scope.checkIfShowTooltip(filter, closeAllTooltips);
                    var props = {
                        deviceType: DeviceService.get(),
                        dealerFilterType: "services",
                        facetSelection: filter.option
                    };
                    "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                    "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase())
                }
                ,
                $scope.checkIfShowTooltip = function(filter, functionToRun) {
                    filter.showTooltip || (filter.showTooltip = !0,
                    0 === toolTipState && $body.on("click", function(e) {
                        e.stopPropagation(),
                        ++toolTipState >= 3 && toolTipIsOpen && 0 === currentOpenToolTip.has(e.target).length && ($scope.$apply(function() {
                            functionToRun()
                        }),
                            toolTipState = 1,
                            toolTipIsOpen = !1)
                    }),
                        toolTipState = 1,
                        toolTipIsOpen = !0)
                }
                ,
                $scope.openDealerResults = function() {
                    $scope.handleSidekickState("open"),
                        $scope.handleFilterSettings("close")
                }
                ,
                $scope.toggleFilters = function(e) {
                    $scope.sizeElements(),
                        void 0 !== $scope.dealerlocator.totalDealers && 0 === $scope.dealerlocator.totalDealers.length ? $scope.handleSidekickState("open") : ($scope.sidekickState.filterSettingsHidden && $scope.trackOpeningFilters(),
                            $scope.handleFilterSettings("toggle"),
                        $scope.dealerlocator.dealers || $scope.handleSidekickState("toggle"));
                    var props = {
                        deviceType: DeviceService.get()
                    };
                    "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                    "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase()),
                    e && e.preventDefault()
                }
                ,
                $scope.collectData = function() {
                    return {
                        searchType: $scope.dealerlocator.currentSearchType,
                        searchTerm: $scope.params.searchParam,
                        totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : "",
                        distance: $scope.filter.distance,
                        currentLocation: $scope.dealerlocator.usingCurrentLocation
                    }
                }
                ,
                $scope.collectDataWithFilters = function() {
                    var analyticsFilters, selectedFilters, data = $scope.collectData();
                    return selectedFilters = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.filter($scope.config.filters, function(filter) {
                        return !!filter.selected
                    }),
                        analyticsFilters = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.map(selectedFilters, function(filter) {
                            return "Services:" + filter.displayFilter
                        }),
                        data.filters = analyticsFilters,
                        data
                }
                ,
                $scope.trackOpeningFilters = function() {
                    var data = $scope.collectData();
                    __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer_js__.a.getDealerLocatorEvents().trackOpeningFilters(data)
                }
                ,
                $scope.trackError = function(errorReason) {
                    var data = $scope.collectDataWithFilters();
                    data.errorReason = errorReason,
                        data.miniDealer = !1,
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer_js__.a.getCommonDealerLocatorEvents().trackError(data)
                }
                ,
                $scope.trackDealerActionClick = function(directions, dealerID, viewType) {
                    var data = $scope.collectDataWithFilters();
                    data.directionsClicked = directions,
                        data.dealerID = dealerID,
                        data.viewType = viewType,
                        data.miniDealer = !1,
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer_js__.a.getCommonDealerLocatorEvents().trackDealerActionClick(data)
                }
                ,
                $scope.trackClickDealer = function() {
                    var data = $scope.collectDataWithFilters();
                    $scope.dealerlocator.dealer ? (data.resultPosition = $scope.dealerlocator.dealer.index + 1,
                        data.dealerID = $scope.dealerlocator.dealer.DealerID) : __WEBPACK_IMPORTED_MODULE_7_sessionStorageService__.a.getItem("dealerId") ? data.dealerID = __WEBPACK_IMPORTED_MODULE_7_sessionStorageService__.a.getItem("dealerId") : (data.resultPosition = "",
                        data.dealerID = ""),
                        data.ctaPlacement = "list view",
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer_js__.a.getDealerLocatorEvents().trackClickDealer(data)
                }
                ,
                $scope.getRatingsPercentage = function(dealer) {
                    return dealer.CustomerRatingsCombined / $scope.dealerlocator.maxStarRating * 100 + "%"
                }
                ,
                $scope.callDealer = function(dealer, placement, index) {
                    var props = {
                        contactType: "c2c",
                        dealerCode: dealer.EntityID.toLowerCase(),
                        position: index ? index + 1 : 1,
                        totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                        radius: $scope.filter.distance,
                        deviceType: DeviceService.get(),
                        ctaPlacement: placement
                    };
                    "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                    "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase()),
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer_js__.a.getCommonDealerLocatorEvents().trackInitiateContactFullDealerLocator(dealer.DealerID)
                }
                ,
                $scope.getDirections = function(dealer, placement, index) {
                    var props = {
                        dealerCode: dealer.EntityID.toLowerCase(),
                        position: index ? index + 1 : 1,
                        totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                        radius: $scope.filter.distance,
                        deviceType: DeviceService.get(),
                        ctaPlacement: placement
                    };
                    "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                    "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase()),
                        $scope.trackDealerActionClick(!0, dealer.DealerID, "list view")
                }
                ,
                $scope.dealerWebsite = function(dealer, placement, index) {
                    var props = {
                        dealerCode: dealer.EntityID.toLowerCase(),
                        position: index ? index + 1 : 1,
                        totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                        radius: $scope.filter.distance,
                        deviceType: DeviceService.get(),
                        ctaPlacement: placement
                    };
                    "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                    "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase()),
                        $scope.trackDealerActionClick(!1, dealer.DealerID, "list view")
                }
                ,
                $scope.showResultsBlock = function() {
                    $scope.handleSidekickState("open"),
                    void 0 !== $scope.dealerlocator.map.selectedMarker && $scope.dealerlocator.map.selectedMarker.hideInfowindow(),
                        $scope.$apply()
                }
                ,
                $scope.handleSidekickState = function(action) {
                    switch (action) {
                        case "open":
                            $scope.dealerlocator.resultsVisible = !0;
                            break;
                        case "close":
                            $scope.dealerlocator.resultsVisible = !1;
                            break;
                        case "toggle":
                            $scope.dealerlocator.resultsVisible = !$scope.dealerlocator.resultsVisible;
                            break;
                        default:
                            console.error("WARNING - Please pass an appropriate action into handleSidekickState")
                    }
                }
                ,
                $scope.handleFilterSettings = function(action) {
                    switch (action) {
                        case "open":
                            $scope.sidekickState.filterSettingsHidden = !1;
                            break;
                        case "close":
                            $scope.sidekickState.filterSettingsHidden = !0;
                            break;
                        case "toggle":
                            $scope.sidekickState.filterSettingsHidden = !$scope.sidekickState.filterSettingsHidden;
                            break;
                        default:
                            $scope.sidekickState.filterSettingsHidden = !0
                    }
                }
                ,
                $scope.dealerlocator.map.addListener($scope.dealerlocator.map.map, "click", function(e) {
                    $scope.dealerlocator.clearAutocomplete(),
                        $scope.handleSidekickState("close"),
                        $scope.$apply()
                }),
                $scope.dealerlocator.map.addListener($scope.dealerlocator.map.map, "dragstart", function(e) {
                    $scope.dealerlocator.clearAutocomplete(),
                        $scope.handleSidekickState("open"),
                        $scope.$apply(),
                        $scope.handleSidekickState("close"),
                        $scope.$apply()
                }),
                $scope.dealerlocator.map.addListener($scope.dealerlocator.map.map, "idle", function(e) {
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#map").find('a[href*="google"]').attr("tabindex", "-1")
                }),
                $scope.desktop.addListener(function(media) {
                    media.matches ? $scope.offset = -.5 * __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-search").width() : $scope.offset = null
                }),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("resize", function() {
                    $scope.sizeElements(),
                        $scope.$apply()
                }),
                $scope.$watch("dealerlocator.dealer", function(dealer, previousDealer) {
                    var data;
                    $scope.params.tabParam && !previousDealer && (data = {
                        dealersNumber: $scope.dealerlocator.dealers.length,
                        contentSubType: "details",
                        locator: "dealer-locator"
                    },
                        dealer.overlayInfo = $scope.params.tabParam,
                        $rootScope.$broadcast("overlay:requestRatingsData", dealer, data))
                })
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_dealerlocator_dealer_locator_app_js__.a
    },
    706: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
            __webpack_require__(13))
            , __WEBPACK_IMPORTED_MODULE_3_mediaQuery__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_3_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mediaQuery__)
            , __WEBPACK_IMPORTED_MODULE_4_dealerDetailsFormatter__ = __webpack_require__(70)
            , __WEBPACK_IMPORTED_MODULE_5_sessionStorageService__ = __webpack_require__(42);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a.controller("DealerSearchController", ["$scope", "$location", "$window", "$timeout", "$routeParams", "ConfigService", "DeviceService", "EncodingService", "DealerService", "LastSearchService", function($scope, $location, $window, $timeout, $routeParams, ConfigService, DeviceService, EncodingService, DealerService, LastSearchService) {
            var currentLocationTimeout, dl = $scope.dealerlocator, searchField = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#search-field");
            $scope.formatDealerDetails = __WEBPACK_IMPORTED_MODULE_4_dealerDetailsFormatter__.a.formatDealerDetails,
                $scope.search = function(e) {
                    if (__WEBPACK_IMPORTED_MODULE_5_sessionStorageService__.a.removeItem("dealerId"),
                        dl.isSearchEnabled = !0,
                        clearTimeout(dl.map.autocompleteTimeout),
                    e && e.preventDefault(),
                        $scope.searchInput) {
                        $scope.dealerlocator.fromFilter = !0;
                        var searchInputEncoded = EncodingService.encodeSlash($scope.searchInput);
                        "desktop" !== __WEBPACK_IMPORTED_MODULE_3_mediaQuery___default.a.getMediaType() && $timeout(function() {
                            searchField.blur()
                        }, 0, !1),
                            dl.suggestions = null,
                            dl.disambiguationLatLng = null,
                            $location.path("/search/" + searchInputEncoded),
                            LastSearchService.set($scope.searchInput, dl.searchType),
                            $scope.sizeElements()
                    } else if (!dl.currentLocationClicked) {
                        dl.errorMessage = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".error-empty-search").text(),
                            $scope.sizeElements();
                        var props = {
                            errorType: "empty entry",
                            radius: $scope.filter.distance,
                            deviceType: DeviceService.get()
                        };
                        "location" === dl.searchType && (dl.currentSearchType = "location",
                            props.location = ""),
                        "dealername" === dl.searchType && (dl.currentSearchType = "dealer name",
                            props.namesearchTerm = ""),
                            props.searchSelection = dl.currentSearchType,
                            $scope.trackError("no entry")
                    }
                }
                ,
                $scope.$on("$routeChangeStart", function(e, next, current) {
                    next && ($scope.searchInput = next.pathParams.searchParam,
                        dl.errorMessage = null)
                }),
                $scope.$on("search-updated", function(e, data) {
                    $scope.searchInput = data
                }),
                $scope.$on("filters-updated", function() {
                    $routeParams.searchParam || $scope.search()
                }),
                $scope.locationSearch = function(location, e) {
                    __WEBPACK_IMPORTED_MODULE_5_sessionStorageService__.a.removeItem("dealerId"),
                        dl.suggestions = null,
                        $scope.sizeElements(),
                        dl.disambiguationLatLng = null,
                        $location.path("/search/" + location),
                        LastSearchService.set(location, dl.searchType),
                        e.preventDefault(),
                        $scope.sizeElements()
                }
                ,
                $scope.dealerSearch = function(dealerID, dealerName, e) {
                    __WEBPACK_IMPORTED_MODULE_5_sessionStorageService__.a.removeItem("dealerId"),
                        dl.suggestions = null,
                        dl.disambiguationLatLng = null,
                        $location.path("/dealer/" + dealerID),
                        LastSearchService.set(dealerName, dl.searchType),
                        e.preventDefault(),
                        $scope.sizeElements()
                }
                ,
                $scope.disambigSearch = function(disambiguation, e) {
                    __WEBPACK_IMPORTED_MODULE_5_sessionStorageService__.a.removeItem("dealerId"),
                        dl.isSearchEnabled = !0,
                        dl.suggestions = null,
                        $scope.sizeElements(),
                        $location.path("/search/" + disambiguation.description),
                        dl.disambiguationLatLng = {
                            lat: disambiguation.lat,
                            lng: disambiguation.lng
                        },
                        e.preventDefault(),
                        $scope.sizeElements()
                }
                ,
                dl.clearAutocomplete = function() {
                    dl.suggestions = {
                        dealers: [],
                        locations: []
                    },
                        $scope.sizeElements()
                }
                ,
                $scope.clearAutocomplete = dl.clearAutocomplete,
                $scope.searchTypeChange = function(type) {
                    dl.searchType = type,
                    "dealername" === dl.searchType && (dl.myCurrentLocationVisible = !1),
                        $scope.searchInput = "",
                        $scope.clearAutocomplete()
                }
                ,
                $scope.searchFieldBlur = function(e) {
                    currentLocationTimeout = $timeout(function() {
                        dl.myCurrentLocationVisible = !1
                    }, 200)
                }
                ,
                $scope.searchFieldFocus = function() {
                    "location" === dl.searchType && "" === $scope.searchInput && (dl.myCurrentLocationVisible = !0),
                    $scope.desktop.matches || __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").scrollTop(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(".dl-search-type").offset().top)
                }
                ,
                $scope.autocomplete = function() {
                    "true" === dl.autoCompleteState && (dl.myCurrentLocationVisible = !1,
                        $scope.searchInput.length >= 3 ? (dl.showDlResultsFilter = !1,
                            "location" === dl.searchType ? (dl.errorMessage = null,
                                dl.map.autocomplete($scope.searchInput, 5, function(results) {
                                    $scope.searchInput.length >= 3 ? dl.suggestions = results : dl.suggestions = {
                                        dealers: [],
                                        locations: []
                                    },
                                        $scope.$apply(),
                                        $scope.sizeElements()
                                }, "locations")) : "dealername" === dl.searchType && (dl.errorMessage = null,
                                dl.searchLoading = !0,
                                dl.dealerDataStatus.then(function() {
                                    $timeout(function() {
                                        dl.searchLoading = !1
                                    }, 0)
                                }).fail(function() {
                                    $timeout(function() {
                                        dl.searchLoading = !1
                                    }, 0)
                                }),
                                dl.map.autocomplete($scope.searchInput, 100, function(results) {
                                    $scope.searchInput.length >= 3 ? dl.suggestions = results : dl.suggestions = {
                                        dealers: [],
                                        locations: []
                                    },
                                        $scope.$apply(),
                                        $scope.sizeElements()
                                }, "dealers"))) : "" === $scope.searchInput && "dealername" !== dl.searchType ? dl.myCurrentLocationVisible = !0 : $scope.clearAutocomplete())
                }
                ,
                $scope.useCurrentLocation = function(e) {
                    if ($timeout.cancel(currentLocationTimeout),
                        dl.searchType = "location",
                        dl.currentSearchType = dl.searchType,
                        dl.currentLocationClicked = !0,
                        $window.navigator.geolocation)
                        $window.navigator.geolocation.getCurrentPosition(function(position) {
                            dl.map.reverseGeocode({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            }, function(data) {
                                data && ($scope.searchInput = data,
                                    dl.usingCurrentLocation = !0,
                                    $scope.search(e),
                                    $scope.$apply()),
                                    dl.currentLocationClicked = !1
                            })
                        }, function(error) {
                            var props = {
                                radius: $scope.filter.distance,
                                searchSelection: dl.currentSearchType,
                                deviceType: DeviceService.get()
                            };
                            switch (error.code) {
                                case error.PERMISSION_DENIED:
                                    props.errorType = "permission denied",
                                        dl.errorMessage = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".error-permission-denied").text();
                                    break;
                                case error.POSITION_UNAVAILABLE:
                                    props.errorType = "position unavailable",
                                        dl.errorMessage = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".error-position-unavailable").text();
                                    break;
                                case error.TIMEOUT:
                                    props.errorType = "timeout",
                                        dl.errorMessage = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".error-timeout").text();
                                    break;
                                case error.UNKNOWN_ERROR:
                                    props.errorType = "unknown",
                                        dl.errorMessage = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".error-unknown").text()
                            }
                            dl.currentLocationClicked = !1
                        });
                    else {
                        dl.errorMessage = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".error-geolocation-not-supported").text();
                        $scope.filter.distance,
                            dl.currentSearchType,
                            DeviceService.get()
                    }
                    dl.myCurrentLocationVisible = !1
                }
                ,
                $scope.isLonglabel = function(labelDealer, labelLocation) {
                    var returnValue = !1;
                    return labelDealer.length + labelLocation.length > 36 && (returnValue = !0),
                        returnValue
                }
                ,
                $scope.$watch(function() {
                    return dl.myCurrentLocationVisible
                }, function() {
                    $scope.sizeElements()
                })
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a
    },
    707: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_2_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__),
            __webpack_require__(2))
            , __WEBPACK_IMPORTED_MODULE_3_angular_route__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__),
            __webpack_require__(28))
            , __WEBPACK_IMPORTED_MODULE_4_dealerlocator_dealer_locator_app__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_route__),
            __webpack_require__(13))
            , __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_6_guxfoe_tooltip_component_tooltip__ = __webpack_require__(21)
            , __WEBPACK_IMPORTED_MODULE_6_guxfoe_tooltip_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_guxfoe_tooltip_component_tooltip__);
        __WEBPACK_IMPORTED_MODULE_4_dealerlocator_dealer_locator_app__.a.controller("DealerResultsController", ["$scope", "$routeParams", "$rootScope", "$timeout", "$location", "$q", "ConfigService", "DeviceService", "EncodingService", "DealerService", "errorHandler", "GLOBAL_CONF", "DL_SERVICE", function($scope, $routeParams, $rootScope, $timeout, $location, $q, ConfigService, DeviceService, EncodingService, DealerService, errorHandler, GLOBAL_CONF, DL_SERVICE) {
            $scope.sizeElements(),
                $scope.params = $routeParams,
                $scope.params.encodedSearchParams = EncodingService.encodeSlash($scope.params.searchParam),
                $scope.params.encodedSearchParams ? $scope.params.encodedSearchParams = "/search/" + $scope.params.encodedSearchParams : $scope.params.encodedSearchParams = "";
            $scope.dealerlocator.searchParams = $scope.params,
            void 0 === ConfigService.getSearchParams() && (ConfigService.setSearchParams($scope.params.searchParam),
                $scope.dealerlocator.isSearchEnabled = !0);
            ConfigService.getSearchParams() !== $scope.params.searchParam && ($scope.dealerlocator.isSearchEnabled = !0,
            void 0 !== $scope.params.searchParam && ConfigService.setSearchParams($scope.params.searchParam));
            void 0 === $scope.dealerlocator.dealer && ($scope.dealerlocator.dealer = null);
            $scope.dealerlocator.displaySplash = !1,
                $.subscribe("dealer-details-link:clicked", function(evt) {
                    var dealerIndex = $(evt.target).data("dealer-index");
                    $scope.showDetails(dealerIndex),
                        $timeout(function() {
                            $scope.handleSidekickState("open")
                        }, 0)
                }),
                $scope.showDetails = function(index) {
                    $scope.dealerlocator.dealer = $scope.dealerlocator.dealers[index],
                        $scope.dealerlocator.dealer.index = index,
                        $scope.dealerlocator.dealer.distance = $scope.dealerlocator.dealers[index].distance,
                        $scope.dealerlocator.map.deselectMarkers(),
                    $scope.desktop.matches || $("body").scrollTop($(".dl-results").offset().top),
                        $(".dl-results-list").scrollTop(0),
                        $scope.trackClickDealer()
                }
                ,
                $scope.changePath = function(index) {
                    $location.path("search/" + EncodingService.encodeSlash($scope.params.searchParam) + "/dealer/" + $scope.dealerlocator.dealers[index].EntityID),
                        $scope.handleSidekickState("open"),
                        $scope.dealerlocator.dealer = $scope.dealerlocator.dealers[index],
                        $scope.dealerlocator.dealer.index = index,
                        $scope.dealerlocator.dealer.distance = $scope.dealerlocator.dealers[index].distance,
                        $scope.dealerlocator.map.deselectMarkers(),
                    $scope.desktop.matches || $("body").scrollTop($(".dealer-details").offset().top)
                }
                ,
                $scope.showMoreDealers = function() {
                    var props;
                    $scope.page++,
                        $scope.trackShowMore($scope.page + 1),
                        $scope.dealerlocator.filtersUpdated ? (props = {
                            deviceType: DeviceService.get(),
                            pageNumber: $scope.page + 1,
                            searchType: $scope.dealerlocator.usingCurrentLocation ? "current location" : "manual search",
                            searchSelection: $scope.dealerlocator.currentSearchType,
                            totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                            radius: $scope.filter.distance,
                            dealerFilterType: "services"
                        },
                        "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                        "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase())) : (props = {
                            deviceType: DeviceService.get(),
                            pageNumber: $scope.page + 1,
                            searchType: $scope.dealerlocator.usingCurrentLocation ? "current location" : "manual search",
                            searchSelection: $scope.dealerlocator.currentSearchType,
                            totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                            radius: $scope.filter.distance
                        },
                        "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                        "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase())),
                        $scope.dealerlocator.dealers = $scope.dealerlocator.totalDealers.slice(0, ($scope.page + 1) * ConfigService.getConfig().prioritisationCount),
                        $scope.dealerlocator.map.displayDealers($scope.dealerlocator.dealers),
                        $scope.dealerlocator.map.setBounds($scope.dealerlocator.dealers),
                        $scope.dealerlocator.map.setZoom($scope.dealerlocator.map.getZoom() - 2)
                }
                ,
                $scope.search = function(triggeredInSubmit) {
                    $scope.sizeElements(),
                        $scope.page = 0,
                        $scope.dealerlocator.currentSearchType = "location";
                    var searchPromise = $q.defer();
                    searchPromise.promise.then(function() {}, function(reason) {
                        $scope.dealerlocator.errorMessage = errorHandler(reason),
                            $scope.dealerlocator.searchLoading = !1,
                            $scope.sizeElements(),
                            $scope.dealerlocator.currentSearchLocation.toLowerCase(),
                            $scope.filter.distance,
                            $scope.dealerlocator.currentSearchType,
                            DeviceService.get(),
                            $scope.trackError("system error")
                    }),
                        $.get("//" + window.location.host + window.location.pathname).fail(function() {
                            searchPromise.reject("no-connection")
                        }).done(function() {
                            $scope.handleSidekickState("open"),
                                $scope.dealerlocator.searchLoading = !0,
                                $scope.dealerlocator.map.geocodeLocation($routeParams.searchParam, function(locations) {
                                    for (var filters = {
                                        CountryCode: GLOBAL_CONF.iso3MarketCode
                                    }, orFilterReduction = function(prev, curr) {
                                        return prev[curr] = "1",
                                            prev
                                    }, andFilterSetter = function(filter) {
                                        filters[filter] = 1
                                    }, postalCode = !1, i = 0; i < $scope.config.filters.length; i++)
                                        $scope.config.filters[i].selected && (-1 === $scope.config.filters[i].option.indexOf("_OR_") && -1 === $scope.config.filters[i].option.indexOf("_AND_") ? filters[$scope.config.filters[i].option] = 1 : ($scope.config.filters[i].option.indexOf("_OR_") > -1 && (filters.OR_CLAUSES = filters.OR_CLAUSES || [],
                                            filters.OR_CLAUSES.push($scope.config.filters[i].option.split("_OR_").reduce(orFilterReduction, {}))),
                                        $scope.config.filters[i].option.indexOf("_AND_") > -1 && $scope.config.filters[i].option.split("_AND_").forEach(andFilterSetter)));
                                    if ($scope.dealerlocator.disambiguationLatLng && (locations = [$scope.dealerlocator.disambiguationLatLng]),
                                    1 === locations.length)
                                        locations[0].types && (postalCode = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.includes(locations[0].types, "postal_code")),
                                            $scope.dealerlocator.currentSearchLocation = $routeParams.searchParam.toLowerCase(),
                                            $timeout(function() {
                                                searchPromise.reject("")
                                            }, 2e4),
                                            $scope.dealerlocator.map.searchDealersByDistance({
                                                origin: locations[0],
                                                radius: $scope.filter.distance * $scope.config.distance.distanceConversion,
                                                limit: $scope.config.displayLimit,
                                                matchParameters: filters,
                                                callback: function(dealers) {
                                                    var props, i, servicesUpdated = [];
                                                    function dealerCallback(dealer, index) {
                                                        return function() {
                                                            $scope.dealerlocator.isDisplayDealerDetails && ($scope.dealerlocator.isPushPinClicked = !0,
                                                                $scope.changePath(index)),
                                                                $scope.dealerlocator.map.deselectMarkers(),
                                                                $scope.dealerlocator.map.selectMarker(index),
                                                                $scope.dealerlocator.map.selectedMarker = $scope.dealerlocator.map.markers[index],
                                                                $scope.dealerlocator.dealer = $scope.dealerlocator.dealers[index],
                                                                $scope.dealerlocator.dealer.index = index,
                                                                $scope.dealerlocator.dealer.distance = $scope.dealerlocator.dealers[index].distance,
                                                                $scope.selectResult(index),
                                                            $(".result").eq(index).length > 0 && ($scope.desktop.matches ? $(".dl-results-list").scrollTop($(".result").eq(index).position().top) : $("body").scrollTop($(".result").eq(index).offset().top)),
                                                                $scope.dealerlocator.map.panTo(dealer.location),
                                                                $scope.dealerlocator.currentSearchLocation.toLowerCase(),
                                                                dealer.EntityID.toLowerCase(),
                                                            $scope.dealerlocator.totalDealers && $scope.dealerlocator.totalDealers.length,
                                                                $scope.filter.distance,
                                                                DeviceService.get(),
                                                                $scope.trackClickDealerFromMap($scope.dealerlocator.dealer.DealerID, index + 1),
                                                                $.publish("dealerData:send", dealer)
                                                        }
                                                    }
                                                    for (searchPromise.resolve(),
                                                             i = 0; i < dealers.length; i++)
                                                        dealers[i].directionsURL = DealerService.getDealerAddressDirectionsURL(dealers[i].location, dealers[i], $scope.dealerlocator, locations[0]),
                                                            dealers[i].callback = dealerCallback(dealers[i], i),
                                                            dealers[i].index = i,
                                                            DealerService.processDealer(dealers[i], $scope.config, $scope.params, $scope.$parent.callDealer, $scope.$parent.getDirections, $scope.$parent.dealerWebsite, $scope.$parent.getRatingsPercentage);
                                                    if ($scope.dealerlocator.totalDealers = dealers,
                                                        $scope.dealerlocator.dealers = $scope.dealerlocator.totalDealers.slice(0, ($scope.page + 1) * ConfigService.getConfig().prioritisationCount),
                                                        $scope.$apply(),
                                                        $scope.sizeElements(),
                                                        triggeredInSubmit ? $scope.trackSubmit(postalCode) : $scope.trackInitSearch(postalCode),
                                                        $scope.dealerlocator.map.clearDealers(),
                                                        $scope.dealerlocator.map.displayDealers($scope.dealerlocator.dealers),
                                                    triggeredInSubmit && $scope.trackResultsPresent(1, postalCode),
                                                    $scope.dealerlocator.totalDealers.length && ($scope.dealerlocator.map.setBounds($scope.dealerlocator.dealers.concat(locations[0])),
                                                        $scope.dealerlocator.map.getZoom() > 14 ? $scope.dealerlocator.map.setZoom(14) : $scope.dealerlocator.map.setZoom($scope.dealerlocator.map.getZoom() - 2)),
                                                    0 === $scope.dealerlocator.totalDealers.length)
                                                        props = $scope.dealerlocator.filtersUpdated ? {
                                                            deviceType: DeviceService.get(),
                                                            location: $scope.dealerlocator.currentSearchLocation.toLowerCase(),
                                                            errorType: "zero results",
                                                            searchSelection: $scope.dealerlocator.currentSearchType,
                                                            radius: $scope.filter.distance
                                                        } : {
                                                            deviceType: DeviceService.get(),
                                                            location: $scope.dealerlocator.currentSearchLocation.toLowerCase(),
                                                            radius: $scope.filter.distance,
                                                            errorType: "zero results",
                                                            searchSelection: $scope.dealerlocator.currentSearchType
                                                        },
                                                            $scope.dealerlocator.errorMessage = $(".error-no-results").text(),
                                                            $scope.sidekickState.filterSettingsHidden = !1,
                                                            $scope.dealerlocator.searchLoading = !1,
                                                            $scope.sizeElements(),
                                                            $scope.$apply(),
                                                            $scope.sizeElements(),
                                                            $scope.trackError("zero results");
                                                    else {
                                                        for (i = 0; i < $scope.config.filters.length; i++)
                                                            $scope.config.filters[i].selected && servicesUpdated.push($scope.config.filters[i].option.toLowerCase());
                                                        $scope.dealerlocator.filtersUpdated ? (props = {
                                                            deviceType: DeviceService.get(),
                                                            pageNumber: $scope.page + 1,
                                                            location: $scope.dealerlocator.currentSearchLocation.toLowerCase(),
                                                            searchType: $scope.dealerlocator.usingCurrentLocation ? "current location" : "manual search",
                                                            searchSelection: $scope.dealerlocator.currentSearchType,
                                                            totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                                                            radius: $scope.filter.distance,
                                                            dealerFilterType: "services"
                                                        },
                                                        servicesUpdated.length > 0 && (props.facetSelection = servicesUpdated.join(","))) : (props = {
                                                            deviceType: DeviceService.get(),
                                                            pageNumber: $scope.page + 1,
                                                            location: $scope.dealerlocator.currentSearchLocation.toLowerCase(),
                                                            searchSelection: "location",
                                                            searchType: $scope.dealerlocator.usingCurrentLocation ? "current location" : "manual search",
                                                            totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                                                            radius: $scope.filter.distance
                                                        },
                                                        servicesUpdated.length > 0 && (props.facetSelection = servicesUpdated.join(","))),
                                                            $scope.sidekickState.filterSettingsHidden = !0,
                                                            $scope.dealerlocator.errorMessage = null,
                                                            $scope.dealerlocator.searchLoading = !1,
                                                            $scope.dealerlocator.showAdvancedSearch = !1,
                                                            $scope.$apply(),
                                                            $scope.sizeElements(),
                                                            $timeout(function() {
                                                                initTooltips()
                                                            })
                                                    }
                                                }
                                            });
                                    else if (locations.length > 1) {
                                        $scope.dealerlocator.suggestions = {
                                            disambiguations: []
                                        };
                                        for (var _i = 0; _i < locations.length; _i++)
                                            $scope.dealerlocator.suggestions.disambiguations.push(locations[_i]);
                                        $scope.dealerlocator.searchLoading = !1,
                                            $scope.$apply(),
                                            $scope.sizeElements(),
                                            $scope.trackError("disambiguation")
                                    } else
                                        $scope.dealerlocator.errorMessage = $(".error-no-locations").text(),
                                            $scope.dealerlocator.totalDealers = [],
                                            $scope.dealerlocator.dealers = [],
                                            $scope.dealerlocator.map.clearDealers(),
                                            $scope.clearFilters(),
                                        $scope.dealerlocator.filtersUpdated || ($scope.sidekickState.filterSettingsHidden = !0,
                                            $scope.dealerlocator.dealer = void 0,
                                            $scope.dealerlocator.dealers = void 0),
                                            $scope.dealerlocator.searchLoading = !1,
                                            $scope.$apply(),
                                            $scope.sizeElements(),
                                            $timeout(function() {
                                                initTooltips()
                                            }),
                                            $routeParams.searchParam.toLowerCase(),
                                            $scope.filter.distance,
                                            $scope.dealerlocator.currentSearchType,
                                            DeviceService.get(),
                                            $scope.trackError("invalid location")
                                }),
                                initTooltips()
                        })
                }
                ,
                $scope.nameSearch = function(triggeredInSubmit) {
                    var searchPromise = $q.defer();
                    $scope.dealerlocator.currentSearchType = "dealer name",
                        searchPromise.promise.then(function() {}, function(reason) {
                            $scope.dealerlocator.errorMessage = errorHandler(reason),
                                $scope.dealerlocator.searchLoading = !1,
                                $scope.sizeElements(),
                                $scope.filter.distance,
                                $scope.dealerlocator.currentSearchType,
                                DeviceService.get(),
                                $scope.trackError("system error")
                        }),
                        $.get("//" + window.location.host + window.location.pathname).fail(function() {
                            searchPromise.reject("no-connection")
                        });
                    for (var filters = {
                        CountryCode: GLOBAL_CONF.iso3MarketCode
                    }, orFilterReduction = function(prev, curr) {
                        return prev[curr] = "1",
                            prev
                    }, andFilterSetter = function(filter) {
                        filters[filter] = 1
                    }, i = 0; i < $scope.config.filters.length; i++)
                        $scope.config.filters[i].selected && (-1 === $scope.config.filters[i].option.indexOf("_OR_") && -1 === $scope.config.filters[i].option.indexOf("_AND_") ? filters[$scope.config.filters[i].option] = 1 : ($scope.config.filters[i].option.indexOf("_OR_") > -1 && (filters.OR_CLAUSES = filters.OR_CLAUSES || [],
                            filters.OR_CLAUSES.push($scope.config.filters[i].option.split("_OR_").reduce(orFilterReduction, {}))),
                        $scope.config.filters[i].option.indexOf("_AND_") > -1 && $scope.config.filters[i].option.split("_AND_").forEach(andFilterSetter)));
                    $scope.handleSidekickState("open"),
                        $scope.dealerlocator.searchLoading = !0,
                        $timeout(function() {
                            searchPromise.reject("timeout")
                        }, 2e4),
                        $scope.dealerlocator.map.searchDealersByProperties($scope.config.displayLimit, function(dealers) {
                            function dealerCallback(dealer, index) {
                                return function() {
                                    $scope.dealerlocator.isDisplayDealerDetails ? ($scope.dealerlocator.isPushPinClicked = !0,
                                        $scope.changePath(index)) : ($scope.handleSidekickState("open"),
                                        $scope.$apply()),
                                        $scope.dealerlocator.map.deselectMarkers(),
                                        $scope.dealerlocator.map.selectMarker(index),
                                        $scope.dealerlocator.map.selectedMarker = $scope.dealerlocator.map.markers[index],
                                        $scope.dealerlocator.dealer = $scope.dealerlocator.dealers[index],
                                        $scope.dealerlocator.dealer.index = index,
                                        $scope.dealerlocator.dealer.distance = $scope.dealerlocator.dealers[index].distance,
                                        $scope.selectResult(index),
                                    $(".result").eq(index).length > 0 && ($scope.desktop.matches ? $(".dl-results-list").scrollTop($(".result").eq(index).position().top) : $("body").scrollTop($(".result").eq(index).offset().top)),
                                        $scope.dealerlocator.map.panTo(dealer.location),
                                        $scope.dealerlocator.currentSearchName.toLowerCase(),
                                        dealer.EntityID.toLowerCase(),
                                    $scope.dealerlocator.totalDealers && $scope.dealerlocator.totalDealers.length,
                                        $scope.filter.distance,
                                        DeviceService.get(),
                                        $scope.trackClickDealerFromMap($scope.dealerlocator.dealer.DealerID, index + 1)
                                }
                            }
                            searchPromise.resolve(),
                                $scope.dealerlocator.currentSearchName = $routeParams.searchParam;
                            for (var _i2 = 0; _i2 < dealers.length; _i2++)
                                dealers[_i2].directionsURL = DealerService.getDealerAddressDirectionsURL(dealers[_i2].location, dealers[_i2], $scope.dealerlocator, ""),
                                    dealers[_i2].callback = dealerCallback(dealers[_i2], _i2),
                                    dealers[_i2].index = _i2,
                                    DealerService.processDealer(dealers[_i2], $scope.config, $scope.params, $scope.$parent.callDealer, $scope.$parent.getDirections, $scope.$parent.dealerWebsite, $scope.$parent.getRatingsPercentage);
                            $scope.dealerlocator.totalDealers = dealers,
                                $scope.dealerlocator.dealers = $scope.dealerlocator.totalDealers.slice(0, ($scope.page + 1) * ConfigService.getConfig().prioritisationCount),
                                $scope.dealerlocator.searchLoading = !1,
                                $scope.dealerlocator.showAdvancedSearch = !1,
                                $scope.$apply(),
                                $scope.sizeElements(),
                                triggeredInSubmit ? $scope.trackSubmit() : $scope.trackInitSearch(),
                                $scope.dealerlocator.map.clearDealers(),
                                $scope.dealerlocator.map.displayDealers($scope.dealerlocator.dealers),
                            triggeredInSubmit && $scope.trackResultsPresent(1),
                            $scope.dealerlocator.totalDealers.length && ($scope.dealerlocator.map.setBounds($scope.dealerlocator.dealers),
                                $scope.dealerlocator.map.getZoom() > 14 ? $scope.dealerlocator.map.setZoom(14) : $scope.dealerlocator.map.setZoom($scope.dealerlocator.map.getZoom() - 2)),
                                0 === $scope.dealerlocator.totalDealers.length ? ($scope.dealerlocator.filtersUpdated ? (DeviceService.get(),
                                    $scope.dealerlocator.currentSearchType,
                                    $scope.filter.distance,
                                    $scope.dealerlocator.currentSearchName.toLowerCase()) : (DeviceService.get(),
                                    $scope.filter.distance,
                                    $scope.dealerlocator.currentSearchType,
                                    $scope.dealerlocator.currentSearchName.toLowerCase()),
                                    $scope.dealerlocator.errorMessage = $(".error-no-results").text(),
                                    $scope.dealerlocator.filtersUpdated ? $scope.sidekickState.filterSettingsHidden = !0 : ($scope.sidekickState.filterSettingsHidden = !0,
                                        $scope.dealerlocator.dealer = void 0,
                                        $scope.dealerlocator.dealers = void 0),
                                    $scope.$apply(),
                                    $scope.sizeElements(),
                                    $scope.trackError("zero results")) : ($scope.sidekickState.filterSettingsHidden = !0,
                                    $scope.dealerlocator.errorMessage = null,
                                    $scope.$apply(),
                                    $scope.sizeElements(),
                                    $scope.dealerlocator.filtersUpdated ? (DeviceService.get(),
                                        $scope.page,
                                        $scope.dealerlocator.usingCurrentLocation,
                                        $scope.dealerlocator.currentSearchType,
                                    $scope.dealerlocator.totalDealers && $scope.dealerlocator.totalDealers.length,
                                        $scope.filter.distance,
                                        $scope.dealerlocator.currentSearchName.toLowerCase()) : (DeviceService.get(),
                                        $scope.page,
                                    $scope.dealerlocator.totalDealers && $scope.dealerlocator.totalDealers.length,
                                        $scope.filter.distance,
                                        $scope.dealerlocator.currentSearchName.toLowerCase()))
                        }, filters, {
                            DealerNameSearch: EncodingService.encodeMapCharacters($routeParams.searchParam).toLowerCase()
                        })
                }
                ,
                $scope.$on("filters-updated", function(e) {
                    for (var props, servicesUpdated = [], i = 0; i < $scope.config.filters.length; i++)
                        $scope.config.filters[i].selected && servicesUpdated.push($scope.config.filters[i].option.toLowerCase());
                    props = {
                        deviceType: DeviceService.get(),
                        radius: $scope.filter.distance,
                        dealerFilterType: "services",
                        facetSelection: servicesUpdated.join(",")
                    },
                    "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                    "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase()),
                        $scope.dealerlocator.filtersUpdated = !0,
                        "location" === $scope.dealerlocator.searchType ? $scope.search(!0) : "dealername" === $scope.dealerlocator.searchType && $scope.nameSearch(!0),
                        $scope.dealerlocator.isSearchEnabled = !1,
                    $scope.desktop.matches || $("body").scrollTop($(".dl-search-type").offset().top)
                }),
                $scope.selectResult = function(index) {
                    for (var i = 0; i < $scope.dealerlocator.dealers.length; i++)
                        $scope.dealerlocator.dealers[i].selected = !1;
                    $scope.dealerlocator.dealers[index].selected = !0,
                        $scope.$apply()
                }
                ,
                $scope.showResultsBlock = function() {
                    $scope.handleSidekickState("open"),
                    void 0 !== $scope.dealerlocator.map.selectedMarker && $scope.dealerlocator.map.selectedMarker.hideInfowindow()
                }
                ,
                $scope.trackInitSearch = function(postalCode) {
                    var data = $scope.collectDataWithFilters();
                    data.postalCode = postalCode,
                        data.currentLocation = $scope.dealerlocator.usingCurrentLocation,
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackInitSearch(data)
                }
                ,
                $scope.trackSubmit = function(postalCode) {
                    var data = $scope.collectDataWithFilters();
                    data.postalCode = postalCode,
                        data.currentLocation = $scope.dealerlocator.usingCurrentLocation,
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackSubmit(data)
                }
                ,
                $scope.trackShowMore = function(pageNumber) {
                    var data = $scope.collectDataWithFilters();
                    data.pageNumber = pageNumber,
                        data.currentLocation = $scope.dealerlocator.usingCurrentLocation,
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackShowMore(data)
                }
                ,
                $scope.trackResultsPresent = function(pageNumber, postalCode) {
                    var data = $scope.collectDataWithFilters();
                    data.pageNumber = pageNumber,
                        data.postalCode = postalCode,
                        data.currentLocation = $scope.dealerlocator.usingCurrentLocation,
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackResultsPresent(data)
                }
                ,
                $scope.trackClickDealerFromMap = function(dealerID, resultPosition) {
                    var data = $scope.collectDataWithFilters();
                    data.resultPosition = resultPosition,
                        data.dealerID = dealerID,
                        data.ctaPlacement = "map view",
                        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackClickDealer(data)
                }
                ,
                "location" === $scope.dealerlocator.searchType ? void 0 === $scope.dealerlocator.dealers || $scope.dealerlocator.dealers.length <= 0 || void 0 === $scope.dealerlocator.isSearchEnabled || void 0 !== $scope.dealerlocator.isSearchEnabled && $scope.dealerlocator.isSearchEnabled ? ($scope.search(),
                    $scope.dealerlocator.isSearchEnabled = !1) : $scope.$on("$viewContentLoaded", function() {
                    $timeout(function() {
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined($scope.dealerlocator.dealer) || !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined($scope.dealerlocator.dealer.index) && !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNull($scope.dealerlocator.dealer.index) || ($scope.dealerlocator.dealer.index = 0),
                            $scope.selectResult($scope.dealerlocator.dealer.index),
                            $scope.desktop.matches ? $(".dl-results-list").scrollTop($(".result").eq($scope.dealerlocator.dealer.index).position().top) : $("body").scrollTop($(".result").eq($scope.dealerlocator.dealer.index).offset().top),
                            initTooltips()
                    }, 0)
                }) : "dealername" === $scope.dealerlocator.searchType && (void 0 === $scope.dealerlocator.dealers || $scope.dealerlocator.dealers.length <= 0 || void 0 === $scope.dealerlocator.isSearchEnabled || void 0 !== $scope.dealerlocator.isSearchEnabled && $scope.dealerlocator.isSearchEnabled ? ($scope.nameSearch(),
                    $scope.dealerlocator.isSearchEnabled = !1) : $scope.$on("$viewContentLoaded", function() {
                    $timeout(function() {
                        $scope.selectResult($scope.dealerlocator.dealer.index),
                            $scope.desktop.matches ? $(".dl-results-list").scrollTop($(".result").eq($scope.dealerlocator.dealer.index).position().top) : $("body").scrollTop($(".result").eq($scope.dealerlocator.dealer.index).offset().top),
                            initTooltips()
                    }, 0)
                }));
            function initTooltips() {
                $(".dl-results-list").find(".gux-tooltip").each(function() {
                    __WEBPACK_IMPORTED_MODULE_6_guxfoe_tooltip_component_tooltip___default.a.initOne($(this))
                })
            }
            $scope.$watch(function($scope) {
                return $scope.dealerlocator.fromFilter
            }, function() {
                void 0 !== $scope.dealerlocator.fromFilter && $scope.dealerlocator.fromFilter && ($(".filters").scrollTop(0),
                    $scope.dealerlocator.fromFilter = !1)
            }),
                $scope.dealerlocator.isDisplayDealerDetails = !1
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_4_dealerlocator_dealer_locator_app__.a
    },
    708: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_angular_route__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(28))
            , __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_route__),
            __webpack_require__(13))
            , __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__),
            __webpack_require__(4))
            , __WEBPACK_IMPORTED_MODULE_5_guxfoe_tooltip_component_tooltip__ = __webpack_require__(21)
            , __WEBPACK_IMPORTED_MODULE_5_guxfoe_tooltip_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_guxfoe_tooltip_component_tooltip__);
        __webpack_require__(42);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app__.a.controller("DealerDetailsController", ["$scope", "$timeout", "$q", "$routeParams", "$location", "ConfigService", "DeviceService", "EncodingService", "DealerService", "GLOBAL_CONF", "DL_SERVICE", function($scope, $timeout, $q, $routeParams, $location, ConfigService, DeviceService, EncodingService, DealerService, GLOBAL_CONF, DL_SERVICE) {
            $scope.params = $routeParams,
                $scope.params.encodedSearchParams = EncodingService.encodeSlash($scope.params.searchParam),
                $scope.params.encodedSearchParams ? $scope.params.encodedSearchParams = "/search/" + $scope.params.encodedSearchParams : $scope.params.encodedSearchParams = "";
            $scope.sidekickState.filterSettingsHidden = !0,
                $scope.dealerlocator.displaySplash = !1,
                $scope.dealerlocator.searchParams = $scope.params,
                $scope.checkService = DealerService.checkService,
            void 0 === ConfigService.getSearchParams() && (ConfigService.setSearchParams($scope.params.searchParam),
                $scope.dealerlocator.isSearchEnabled = !0);
            ConfigService.getSearchParams() !== $scope.params.searchParam && (void 0 !== $scope.params.searchParam && ConfigService.setSearchParams($scope.params.searchParam),
                $scope.dealerlocator.isSearchEnabled = !0);
            $scope.sizeElements(),
                $scope.$on("$viewContentLoaded", function() {
                    $timeout(function() {
                        void 0 !== $scope.dealerlocator.isPushPinClicked && $scope.dealerlocator.isPushPinClicked ? $scope.dealerlocator.isPushPinClicked = !1 : $scope.showResultsBlock(),
                            initTooltips()
                    }, 0)
                }),
                $scope.showResultsBlock = function() {
                    $scope.handleSidekickState("open"),
                    void 0 !== $scope.dealerlocator.map.selectedMarker && $scope.dealerlocator.map.selectedMarker.hideInfowindow()
                }
                ,
                $scope.dealerlocator.isDisplayDealerDetails = !0;
            var searchPromise = $q.defer();
            searchPromise.promise.then(function() {
                $timeout(function() {
                    initTooltips()
                })
            }, function() {
                var location = $scope.dealerlocator.currentSearchLocation;
                $scope.dealerlocator.errorMessage = $(".error-critical").text(),
                    $scope.dealerlocator.searchLoading = !1,
                    $scope.sizeElements();
                location && location.toLowerCase(),
                    $scope.dealerlocator.currentSearchType,
                    $scope.filter.distance,
                    DeviceService.get()
            });
            var filters = {
                CountryCode: GLOBAL_CONF.iso3MarketCode,
                EntityID: $scope.params.dealerID
            };
            if (!$scope.dealerlocator.isSearchEnabled && $scope.dealerlocator.dealer && $scope.dealerlocator.dealer.EntityID === $scope.params.dealerID) {
                $scope.dealerlocator.map.selectMarker($scope.dealerlocator.dealer.index),
                    $scope.dealerlocator.map.selectedMarker = $scope.dealerlocator.map.markers[$scope.dealerlocator.dealer.index],
                    $scope.dealerlocator.map.setCenter($scope.dealerlocator.dealer.location);
                var props = {
                    dealerCode: $scope.dealerlocator.dealer.EntityID.toLowerCase(),
                    position: $scope.dealerlocator.dealer.index + 1,
                    totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                    radius: $scope.filter.distance,
                    deviceType: DeviceService.get()
                };
                "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase())
            } else
                $scope.dealerlocator.isSearchEnabled = !1,
                    $scope.params.searchParam && "location" === $scope.dealerlocator.searchType ? ($scope.dealerlocator.searchLoading = !0,
                        $timeout(function() {
                            searchPromise.reject()
                        }, 2e4),
                        $scope.dealerlocator.map.geocodeLocation($scope.params.searchParam, function(locations) {
                            1 === locations.length ? $scope.dealerlocator.map.searchDealersByDistance({
                                origin: locations[0],
                                radius: null,
                                limit: $scope.config.displayLimit,
                                matchParameters: filters,
                                callback: function(dealers) {
                                    if (dealers && dealers.length >= 1) {
                                        searchPromise.resolve(),
                                            $scope.dealerlocator.dealer = dealers[0],
                                            $scope.dealerlocator.dealer.index = dealers[0].index,
                                            $scope.dealerlocator.dealers = dealers,
                                            $scope.dealerlocator.totalDealers = [$scope.dealerlocator.dealer],
                                            $scope.dealerlocator.dealer.directionsURL = DealerService.getDealerAddressDirectionsURL($scope.dealerlocator.dealer.location, $scope.dealerlocator.dealer, $scope.dealerlocator, ""),
                                            $scope.dealerlocator.dealer.callback = (dealer = dealers[0],
                                                    function() {
                                                        $.publish("dealerData:send", dealer),
                                                            $scope.dealerlocator.map.deselectMarkers(),
                                                            $scope.dealerlocator.map.selectMarker(0),
                                                            $scope.dealerlocator.map.selectedMarker = $scope.dealerlocator.map.markers[0],
                                                            $scope.dealerlocator.dealer = $scope.dealerlocator.dealers[0],
                                                            $scope.dealerlocator.dealer.index = 0,
                                                            $scope.dealerlocator.dealer.distance = $scope.dealerlocator.dealers[0].distance;
                                                        var props = {
                                                            dealerCode: dealer.EntityID.toLowerCase(),
                                                            position: 1,
                                                            totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                                                            radius: $scope.filter.distance,
                                                            deviceType: DeviceService.get()
                                                        };
                                                        "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                                                        "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase())
                                                    }
                                            ),
                                            DealerService.processDealer($scope.dealerlocator.dealer, $scope.config, $scope.params, $scope.$parent.callDealer, $scope.$parent.getDirections, $scope.$parent.dealerWebsite, $scope.$parent.getRatingsPercentage),
                                            $scope.dealerlocator.searchLoading = !1,
                                            $scope.dealerlocator.showAdvancedSearch = !1,
                                            $scope.dealerlocator.map.displayDealers([$scope.dealerlocator.dealer]),
                                            $scope.dealerlocator.map.setCenter($scope.dealerlocator.dealer.location),
                                            $scope.dealerlocator.map.setZoom(14),
                                            $scope.$apply(),
                                            $scope.sizeElements();
                                        var _props = {
                                            dealerCode: $scope.dealerlocator.dealer.EntityID.toLowerCase(),
                                            position: $scope.dealerlocator.dealer.index ? $scope.dealerlocator.dealer.index + 1 : 1,
                                            totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                                            radius: $scope.filter.distance,
                                            deviceType: DeviceService.get()
                                        };
                                        "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (_props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                                        "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (_props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase())
                                    } else
                                        searchPromise.reject();
                                    var dealer
                                }
                            }) : (searchPromise.resolve(),
                                $location.path("/search/" + $scope.params.searchParam))
                        })) : ($scope.dealerlocator.searchLoading = !0,
                        $timeout(function() {
                            searchPromise.reject()
                        }, 2e4),
                        $scope.dealerlocator.map.searchDealersByProperties(1, function(dealers) {
                            if (dealers && dealers.length > 0) {
                                searchPromise.resolve(),
                                    $scope.dealerlocator.dealer = dealers[0],
                                    $scope.dealerlocator.dealers = dealers,
                                    $scope.dealerlocator.totalDealers = [$scope.dealerlocator.dealer],
                                    $scope.dealerlocator.dealer.directionsURL = DealerService.getDealerAddressDirectionsURL($scope.dealerlocator.dealer.location, $scope.dealerlocator.dealer, $scope.dealerlocator, ""),
                                    $scope.dealerlocator.dealer.callback = (dealer = dealers[0],
                                            function() {
                                                $.publish("dealerData:send", dealer),
                                                    $scope.dealerlocator.map.deselectMarkers(),
                                                    $scope.dealerlocator.map.selectMarker(0),
                                                    $scope.dealerlocator.map.selectedMarker = $scope.dealerlocator.map.markers[0],
                                                    $scope.dealerlocator.dealer.DealerName.toLowerCase(),
                                                    dealer.EntityID.toLowerCase(),
                                                $scope.dealerlocator.totalDealers && $scope.dealerlocator.totalDealers.length,
                                                    $scope.filter.distance,
                                                    DeviceService.get()
                                            }
                                    ),
                                    DealerService.processDealer($scope.dealerlocator.dealer, $scope.config, $scope.params, $scope.$parent.callDealer, $scope.$parent.getDirections, $scope.$parent.dealerWebsite, $scope.$parent.getRatingsPercentage),
                                    $scope.dealerlocator.searchLoading = !1,
                                    $scope.dealerlocator.showAdvancedSearch = !0,
                                    $scope.dealerlocator.map.displayDealers([$scope.dealerlocator.dealer]),
                                    $scope.dealerlocator.map.setCenter($scope.dealerlocator.dealer.location),
                                    $scope.dealerlocator.map.setZoom(14),
                                    $scope.updateSearchField($scope.dealerlocator.dealer.DealerName),
                                    $scope.$apply(),
                                    $scope.sizeElements();
                                var _props2 = {
                                    dealerCode: $scope.dealerlocator.dealer.EntityID.toLowerCase(),
                                    position: $scope.dealerlocator.dealer.index ? $scope.dealerlocator.dealer.index + 1 : 1,
                                    totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                                    radius: $scope.filter.distance,
                                    deviceType: DeviceService.get()
                                };
                                "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (_props2.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                                "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (_props2.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase())
                            } else
                                searchPromise.reject();
                            var dealer
                        }, filters));
            function initTooltips() {
                $(".dl-results-list").scrollTop(0),
                    $(".dl-results-list .gux-tooltip").each(function() {
                        __WEBPACK_IMPORTED_MODULE_5_guxfoe_tooltip_component_tooltip___default.a.initOne($(this))
                    })
            }
            $scope.openServices = function(type, e) {
                var props, isNotEnterKey = "keyup" === e.type && 13 !== e.keyCode;
                isNotEnterKey || $(e.target).parent().hasClass("accordion-open") || (props = {
                    dealerCode: $scope.dealerlocator.dealer.EntityID.toLowerCase(),
                    position: $scope.dealerlocator.dealer.index + 1 || 1,
                    totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                    radius: $scope.filter.distance,
                    infoType: type,
                    deviceType: DeviceService.get(),
                    actionType: "expand"
                },
                "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase()),
                    $scope.trackExpandDealerInfo(e.target.textContent.trim()))
            }
                ,
                $scope.dealerCTA = function(e) {
                    var ctaName = $(e.target).eq(0).text().toLowerCase()
                        , props = {
                        dealerCode: $scope.dealerlocator.dealer.EntityID.toLowerCase(),
                        position: $scope.dealerlocator.dealer.index + 1 || 1,
                        totalResults: $scope.dealerlocator.totalDealers ? $scope.dealerlocator.totalDealers.length : 1,
                        radius: $scope.filter.distance,
                        infoType: ctaName,
                        deviceType: DeviceService.get(),
                        actionType: "select"
                    };
                    "location" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchLocation && (props.location = $scope.dealerlocator.currentSearchLocation.toLowerCase()),
                    "dealer name" === $scope.dealerlocator.currentSearchType && $scope.dealerlocator.currentSearchName && (props.namesearchTerm = $scope.dealerlocator.currentSearchName.toLowerCase()),
                        $scope.trackClickCTA(e.target.text)
                }
                ,
                $scope.trackExpandDealerInfo = function(infoType) {
                    __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackExpandDealerInfo(infoType)
                }
                ,
                $scope.trackClickCTA = function(ctaName) {
                    __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackClickCTA(ctaName)
                }
                ,
                $scope.$on("filters-updated", function(e) {
                    $scope.params.searchParam ? $location.path("/search/" + $scope.params.searchParam) : $location.path("/search/" + $scope.dealerlocator.dealer.DealerName)
                })
        }
        ])
    },
    709: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_angular_sanitize__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(22))
            , __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_sanitize__),
            __webpack_require__(13));
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a.directive("guxDealerFilter", ["$sanitize", function($sanitize) {
            return {
                restrict: "EA",
                template: '<div class="columns small-8">\t<pre>{{filter.activeByDefault}}</pre>\t<p>\t\t<input class="custom-checkbox"\t\t\ttype="checkbox"\t\t\tvalue="{{ filter.option }}"\t\t\tid="{{ filter.option }}"\t\t\tdata-ng-class="{checked:filter.selected}"\t\t\tdata-ng-attr-tabindex="{{sidekickState.filterSettingsHidden ? -1 : 0}}"\t\t\tdata-ng-model="filter.selected">\t\t<label for="{{ filter.option }}"\t\t\tdata-ng-bind-html="filter.displayFilter"></label>\t</p></div><div class="columns small-4">\t<button class="info-tooltip"\t\tdata-ng-attr-tabindex="{{sidekickState.filterSettingsHidden ? -1 : 0}}"\t\tdata-ng-show="filter.tooltip"\t\tdata-ng-click="showFilterTooltip(filter, $event)">\t\t<span class="icon-info"\t\t\tdata-ng-class="{ \'icon-info-hover\': filter.showTooltip }"></span>\t</button></div><div class="columns small-11 large-10 tooltip-content-wrap"\tdata-ng-class="{ hide: !filter.showTooltip }">\t<div class="tooltip-content">\t\t<button class="tooltip-close"\t\t\tdata-ng-click="filter.showTooltip = false"></button>\t\t<h6>{{ filter.displayFilter }}</h6>\t\t<p>{{ filter.tooltip }}</p>\t</div></div>',
                link: function(scope, element, attrs) {}
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a
    },
    710: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__)
            , __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__ = __webpack_require__(13)
            , templateHtml = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("#directive-dealer-item").html();
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a.directive("ngGuxDealerItem", function() {
            return {
                restrict: "A",
                replace: !0,
                scope: {
                    config: "=",
                    dealer: "=",
                    params: "=",
                    isTooltip: "=",
                    sidekickState: "=",
                    isDetails: "=details",
                    resultCtrlShowDetails: "&",
                    mainCtrlCallDealer: "&",
                    mainCtrlGetRatingsPercentage: "&",
                    mainCtrlGetDirections: "&",
                    mainCtrlDealerWebsite: "&",
                    mainCtrlOnRatingsClick: "&"
                },
                template: templateHtml,
                controller: ["$scope", "DealerService", function($scope, DealerService) {
                    $scope.init = function(dealer, config) {
                        $scope.dealer = dealer
                    }
                        ,
                        $scope.commaSeparatedServices = DealerService.commaSeparatedServices
                }
                ]
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a
    },
    711: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__ = __webpack_require__(13);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a.directive("ngGuxDealerItemServices", [function() {
            return {
                restrict: "A",
                replace: !0,
                require: "^DealerDetailsController",
                scope: {
                    onOpenAccordionCallback: "=",
                    dealer: "=",
                    servicesLabel: "@",
                    servicesList: "="
                },
                template: '<div class="accordion accordion-open"        data-ng-show="activeServices.length">   <h5 tabindex="0"        data-ng-keyup="onOpenAccordionCallback(type, $event)"        data-ng-click="onOpenAccordionCallback(type, $event)">{{servicesLabel}}</h5>   <div class="accordion-content">       <p class="dealer-service"           data-ng-repeat="activeService in activeServices track by $index"          data-ng-bind-html="activeService"></p>   </div></div>',
                controller: ["$scope", "DealerService", function(scope, DealerService) {
                    var servicesArray = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.fromJson(scope.servicesList);
                    scope.activeServices = [],
                        scope.type = "services",
                        scope.$watch("dealer", function(newValue) {
                            newValue && servicesArray.length > 0 && (scope.activeServices = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(DealerService.checkService(newValue, servicesArray), function(service) {
                                return service.display
                            }))
                        })
                }
                ]
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a
    },
    712: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(13));
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a.factory("AddressService", ["ConfigService", function(ConfigService) {
            var api = {}
                , config = ConfigService.getConfig();
            function separatorRequired(dealer, formatConfig, i) {
                var nextFormatConfig = formatConfig[i + 1];
                return "separator" === formatConfig[i] && dealer && Object.prototype.hasOwnProperty.call(dealer, nextFormatConfig) && !(!dealer[nextFormatConfig].trim() || 0 === dealer[nextFormatConfig])
            }
            return api.getAddressFormat = function() {
                return config.addressformat.split(",")
            }
                ,
                api.formatAddress = function(dealer, formatConfig) {
                    for (var linesIndex = 0, addressLines = [], i = 0; i < formatConfig.length; i++)
                        addressLines[linesIndex] || (addressLines[linesIndex] = []),
                            "newLine" === formatConfig[i] && addressLines[linesIndex].length > 0 ? linesIndex++ : separatorRequired(dealer, formatConfig, i) ? addressLines[linesIndex].push(config.dealerItemAddressSeparator) : dealer && Object.prototype.hasOwnProperty.call(dealer, formatConfig[i]) && addressLines[linesIndex].push(dealer[formatConfig[i]]);
                    for (var x = 0; x < addressLines.length; x++)
                        addressLines[x] = addressLines[x].join("");
                    return addressLines
                }
                ,
                api
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a
    },
    713: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_dealerlocatorGoogleMaps__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(116))
            , __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__ = __webpack_require__(13);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a.factory("ApiService", function() {
            return __WEBPACK_IMPORTED_MODULE_1_dealerlocatorGoogleMaps__.a
        });
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a
    },
    714: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
            __webpack_require__(13))
            , __WEBPACK_IMPORTED_MODULE_3_dealerServiceValidator__ = __webpack_require__(118);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a.factory("DealerService", ["$timeout", "$rootScope", "$compile", "TimeService", "AddressService", "ConfigService", "DL_SERVICE", function($timeout, $rootScope, $compile, TimeService, AddressService, ConfigService, DL_SERVICE) {
            var api = {};
            api.addProtocol = function(url) {
                return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.startsWith(url, "http://") || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.startsWith(url, "https://") ? url : "http://" + url
            }
            ;
            return api.processDealer = function(dealer, config, params, callDealer, getDirections, dealerWebsite, getRatingsPercentage, onRatingsClick) {
                var i, closingTimeCollection, jsDaysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], today = new Date, services = [], filters = config.filters;
                if (closingTimeCollection = {
                    service: (dealer = function(dealer, daysDisplayOrder, departmentList) {
                        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(departmentList, function(department) {
                            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(daysDisplayOrder, function(day) {
                                dealer[department + day + "OpenTime"] && dealer[department + day + "CloseTime"] && (dealer[department + day + "OpenTime"] = TimeService.formatTime(dealer[department + day + "OpenTime"]),
                                    dealer[department + day + "CloseTime"] = TimeService.formatTime(dealer[department + day + "CloseTime"]))
                            })
                        }),
                            dealer
                    }(dealer, ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], ["Sales", "Parts", "Service"]))["Service" + jsDaysOrder[today.getDay()] + "CloseTime"],
                    sales: dealer["Sales" + jsDaysOrder[today.getDay()] + "CloseTime"],
                    parts: dealer["Parts" + jsDaysOrder[today.getDay()] + "CloseTime"]
                },
                    dealer.todayServiceClosingTime = closingTimeCollection.service ? closingTimeCollection.service : null,
                    dealer.todayClosingTime = closingTimeCollection.sales ? closingTimeCollection.sales : null,
                    dealer.todayPartsClosingTime = closingTimeCollection.parts ? closingTimeCollection.parts : null,
                dealer.PrimaryPhone && (dealer.PrimaryPhoneURL = dealer.PrimaryPhone.replace(/\s/g, "")),
                dealer.PrimaryURL && (dealer.PrimaryURL = api.addProtocol(dealer.PrimaryURL)),
                dealer.ServiceURL && (dealer.ServiceURL = api.addProtocol(dealer.ServiceURL)),
                    filters) {
                    for (i = 0; i < filters.length; i++)
                        1 === dealer[filters[i].option] && services.push(filters[i].display);
                    services.length && (dealer.serviceList = services.join(", "))
                }
                dealer.formattedAddress = AddressService.formatAddress(dealer, ConfigService.getConfig().dealerItemAddressFormat),
                    dealer.ratingPercentage = getRatingsPercentage(dealer);
                var $scope = $rootScope.$new(!1);
                $scope.dealer = dealer,
                    $scope.config = config,
                    $scope.params = params,
                    $scope.callDealer = callDealer,
                    $scope.getDirections = getDirections,
                    $scope.dealerWebsite = dealerWebsite,
                    $scope.CustomerRatingsCombined = dealer.CustomerRatingsCombined,
                    $scope.CustomerRespondentsCombined = dealer.CustomerRespondentsCombined;
                var html = $compile('<div data-ng-gux-dealer-item data-dealer="dealer" data-config="config" data-params="params" data-is-tooltip="true" data-main-ctrl-call-dealer="callDealer" data-main-ctrl-get-directions="getDirections" data-main-ctrl-dealer-website="dealerWebsite" data-main-ctrl-get-ratings-percentage="getRatingsPercentage" + data-main-ctrl-on-ratings-click="onRatingsClick"></div>')($scope);
                $scope.$apply(),
                    dealer.infoWindowMarkup = html[0].outerHTML
            }
                ,
                api.checkService = __WEBPACK_IMPORTED_MODULE_3_dealerServiceValidator__.a.checkService,
                api.commaSeparatedServices = __WEBPACK_IMPORTED_MODULE_3_dealerServiceValidator__.a.commaSeparatedServices,
                api.getDealerAddressDirectionsURL = function(dealerLocation, dealer, dealerlocator, origin) {
                    return "true" === DL_SERVICE.useCoordinates ? dealerlocator.map.getDirectionsURL(dealerLocation, origin) : dealerlocator.map.getAddressDirectionsURL(dealer, dealerlocator.addressFormat, origin)
                }
                ,
                api
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a
    },
    715: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(13));
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a.factory("DeviceService", function() {
            var api = {
                get: function() {
                    return "pc"
                }
            };
            return api
        });
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a
    },
    716: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(13));
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a.factory("EncodingService", function() {
            var api = {
                encodeSlash: function(uri) {
                    return void 0 !== uri ? uri.replace(/\//g, "%252F").replace(/%2F/gi, "%252F") : uri
                },
                decodeSlash: function(uri) {
                    return uri.replace(/%2F/gi, "/")
                },
                encodeMapCharacters: function(uri) {
                    return uri.replace(/&/g, "%26").replace(/'/g, "%5C%27").replace(/\+/g, "%2B")
                }
            };
            return api
        });
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a
    },
    717: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(13));
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a.factory("PremiumService", function() {
            var api = {
                check: function() {
                    var s = document.referrer.toLowerCase();
                    return s.indexOf("mustang") > -1 || s.indexOf("n=00s") > -1 || s.indexOf("vignale") > -1
                }
            };
            return api
        });
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a
    },
    718: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(13));
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a.factory("TimeService", function() {
            var api = {
                formatTime: function(time) {
                    return time.length < 4 && (time = 0 + time),
                        time = time.substr(0, 2) + ":" + time.substr(2, 2)
                }
            };
            return api
        });
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a
    },
    719: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(13));
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a.factory("errorHandler", function() {
            return function(reason) {
                return "no-connection" === reason ? $(".error-no-connection").text() : "timeout" === reason ? $(".error-timeout").text() : $(".error-critical").text()
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_dealerlocator_dealer_locator_app_js__.a
    },
    720: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_angular_route__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(28))
            , __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_route__),
            __webpack_require__(13))
            , url = window.location.href;
        try {
            decodeURIComponent(url)
        } catch (e) {
            window.location.hash = ""
        }
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a.config(["$locationProvider", function($locationProvider) {
            $locationProvider.hashPrefix("")
        }
        ]),
            __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
                $routeProvider.when("/search/:searchParam/", {
                    template: $("#list-template").html(),
                    controller: "DealerResultsController"
                }).when("/search/:searchParam/dealer/:dealerID/", {
                    template: $("#details-template").html(),
                    controller: "DealerDetailsController"
                }).when("/dealer/:dealerID/", {
                    template: $("#details-template").html(),
                    controller: "DealerDetailsController"
                }).when("/search/:searchParam/dealer/:dealerID/:tabParam", {
                    template: $("#details-template").html(),
                    controller: "DealerDetailsController"
                }).when("/dealer/:dealerID/:tabParam", {
                    template: $("#details-template").html(),
                    controller: "DealerDetailsController"
                })
            }
            ]);
        __WEBPACK_IMPORTED_MODULE_2_dealerlocator_dealer_locator_app_js__.a
    },
    721: function(module, exports) {}
}, [702]);
