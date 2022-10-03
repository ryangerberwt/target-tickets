!function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__),
            module.l = !0,
            module.exports
    }
    __webpack_require__.m = modules,
        __webpack_require__.c = installedModules,
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            })
        }
        ,
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                    return module.default
                }
                : function() {
                    return module
                }
            ;
            return __webpack_require__.d(getter, "a", getter),
                getter
        }
        ,
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property)
        }
        ,
        __webpack_require__.p = "",
        __webpack_require__(__webpack_require__.s = 26)
}([function(module, exports) {
    module.exports = ang
}
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__)
            , __WEBPACK_IMPORTED_MODULE_1_angular_route__ = __webpack_require__(38)
            , __WEBPACK_IMPORTED_MODULE_2_angular_sanitize__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_route__),
            __webpack_require__(39))
            , __WEBPACK_IMPORTED_MODULE_3_angular_animate__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_sanitize__),
            __webpack_require__(40))
            , __WEBPACK_IMPORTED_MODULE_4_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_animate__),
            __webpack_require__(2));
        __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__),
            __webpack_require__(15),
            __webpack_require__(17),
            __webpack_require__(18),
            __webpack_require__(19),
            __webpack_require__(12),
            __webpack_require__(20),
            __webpack_require__(7),
            __webpack_require__(16),
            __webpack_require__(21);
        __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("approvedUsed", ["ngRoute", "ngAnimate", "ngSanitize", "ngGuxGallery", "auSliderFilter", "auSelectionFilter", "auDropdownMenu", "auCheckboxGroup", "auGeolocationAutocomplete", "auCheckboxSingle", "auFilterStore", "approvedUsedAnalytics", "auVehicleDetailsAccordion"])
    }
    , function(module, exports) {
        module.exports = lodash
    }
    , function(module, exports) {
        module.exports = objectUtil
    }
    , function(module, exports) {
        module.exports = jQuery
    }
    , function(module, exports) {
        module.exports = configurationProvider
    }
    , function(module, exports) {
        module.exports = mediaQuery
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_1_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_2_mediaQuery__ = __webpack_require__(6);
        __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mediaQuery__),
            angular.module("auFilterStore", []).factory("filterStoreService", ["$location", "$httpParamSerializer", function($location, $httpParamSerializer) {
                var lastLocation, filtersListeners = {
                    allFilters: []
                }, filtersState = {}, registeredFilters = {};
                return {
                    register: function(name, filterControls) {
                        registeredFilters[name] = filterControls
                    },
                    getRegistered: function() {
                        return registeredFilters
                    },
                    get: function() {
                        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
                            args[_key] = arguments[_key];
                        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pick(filtersState, args)
                    },
                    getAll: function() {
                        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pickBy(filtersState, function(value) {
                            return !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNull(value)
                        })
                    },
                    watch: function(backendVariable, watchCallback) {
                        filtersListeners[backendVariable] || (filtersListeners[backendVariable] = []),
                            filtersListeners[backendVariable].push(watchCallback)
                    },
                    watchAll: function(watchCallback) {
                        filtersListeners.allFilters.length = 0,
                            filtersListeners.allFilters.push(watchCallback)
                    },
                    update: function(backendVariable, newValue, filterType) {
                        (function(newValue, oldValue) {
                                var isValid = !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(newValue) && "" !== newValue;
                                return newValue !== oldValue && isValid
                            }
                        )(newValue, __WEBPACK_IMPORTED_MODULE_1_objectUtil___default.a.get(filtersState, backendVariable)) && backendVariable && (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(filtersListeners[backendVariable], function(watchCallback) {
                            watchCallback(newValue, filtersState[backendVariable], backendVariable)
                        }),
                        (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(newValue) || null === newValue) && delete filtersState[backendVariable],
                            __WEBPACK_IMPORTED_MODULE_1_objectUtil___default.a.set(filtersState, backendVariable, newValue),
                            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(filtersListeners.allFilters, function(watchCallback) {
                                watchCallback(filtersState, backendVariable, filterType)
                            }))
                    },
                    applyChanges: function() {
                        filtersState = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pickBy(filtersState, function(value) {
                            return !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNull(value)
                        }),
                            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(filtersListeners.allFilters, function(watchCallback) {
                                watchCallback(filtersState, null)
                            })
                    },
                    discardChanges: function() {
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(registeredFilters, function(filter, backendVariable) {
                            filter.setValue && filter.setValue(__WEBPACK_IMPORTED_MODULE_1_objectUtil___default.a.get(filtersState, backendVariable))
                        }),
                        filtersListeners.vehicleCategory && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(filtersListeners.vehicleCategory, function(watchCallback) {
                            watchCallback(filtersState.vehicleCategory, void 0, "vehicleCategory")
                        })
                    },
                    setValue: function(backendVariable, newValue) {
                        __WEBPACK_IMPORTED_MODULE_1_objectUtil___default.a.set(filtersState, backendVariable, newValue)
                    },
                    saveLocation: function(location) {
                        lastLocation = location
                    },
                    getLastLocation: function() {
                        return lastLocation
                    },
                    getActiveFiltersQuery: function() {
                        var searchParams = $location.search();
                        return searchParams ? "?" + $httpParamSerializer(searchParams) : ""
                    },
                    setAllFilters: function(_setAllFilters) {
                        filtersState = _setAllFilters
                    }
                }
            }
            ])
    }
    , function(module, exports) {
        module.exports = dynamicDataProvider
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var configuration, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__), __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_2_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__), __WEBPACK_IMPORTED_MODULE_3_configurationProvider__ = __webpack_require__(5), __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_configurationProvider__), __WEBPACK_IMPORTED_MODULE_4_numberFormat__ = __webpack_require__(23), __WEBPACK_IMPORTED_MODULE_4_numberFormat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_numberFormat__), api = {}, formatTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<span class="vehicle-attribute-group <%= attributeKey %> <%= itemClass %>"><span class="vehicle-attribute-prefix"><%= prefix %></span><span class="value"><%= value %></span><span class="vehicle-attribute-suffix"><%= suffix %></span></span>'), co2ChartTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<img class="co2-chart-image" src="${src}" alt="class ${alt}" />'), schemeBannersTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<img class="scheme-banner" src="${src}" alt="class ${alt}" />');
        function getVehicleAttributes() {
            var vehicleAttributes = {};
            return configuration && vehicleAttributes || (configuration = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_jquery___default()("#global-approved-used-configuration"))),
                vehicleAttributes = configuration ? configuration.approvedUsedVehicleAttributes : vehicleAttributes
        }
        api.getAttribute = function(attributeKey, vehicle) {
            var vehicleAttributes = getVehicleAttributes()
                , definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null
                , result = "";
            return definition && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(definition.items, function(item) {
                result += api.formatItem(item, vehicle, attributeKey)
            }),
                result
        }
            ,
            api.getOwnerAttribute = function(attributeKey, vehicle) {
                var vehicleAttributes = getVehicleAttributes()
                    , disclaimerData = function() {
                    var disclaimerConfiguration, disclaimer = {};
                    disclaimerConfiguration || (disclaimerConfiguration = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_jquery___default()("#approved-used-view-configuration")));
                    return disclaimer = disclaimerConfiguration.unsoldDisclaimer ? disclaimerConfiguration.unsoldDisclaimer : disclaimer
                }()
                    , definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null
                    , isFordOwned = disclaimerData.value
                    , result = "";
                return definition && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(definition.items, function(item) {
                    var ownerData = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, item.backendVariable);
                    ownerData && ownerData === isFordOwned && (result = disclaimerData.disclaimer)
                }),
                    result
            }
            ,
            api.getValueWithPrefixAndSuffix = function(attributeKey, vehicle) {
                var vehicleAttributes = getVehicleAttributes()
                    , definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null
                    , result = [];
                return definition && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(definition.items, function(item) {
                    result.push(function(item, vehicle) {
                        var value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, item.backendVariable)
                            , result = [];
                        if ("True" === value || !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(value) && value)
                            return item.prefix && result.push(item.prefix),
                            item.suffix && result.push(item.suffix),
                                result.join(" ")
                    }(item, vehicle))
                }),
                    result.join("")
            }
            ,
            api.getVehicleAttributeItems = function(attributeKey) {
                var vehicleAttributes = getVehicleAttributes()
                    , definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null;
                return definition ? definition.items : {}
            }
            ,
            api.formatItem = function(item, vehicle, attributeKey) {
                var value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, item.backendVariable);
                return value && item.numeric && (value = __WEBPACK_IMPORTED_MODULE_4_numberFormat___default.a.formatNumber(value, item)),
                    function(value, item, attributeKey) {
                        return value || 0 === value ? formatTemplate({
                            prefix: item.prefix,
                            value: value,
                            suffix: item.suffix,
                            attributeKey: attributeKey,
                            itemClass: item.backendVariable.replace(/\./g, "-")
                        }) : ""
                    }(value, item, attributeKey)
            }
            ,
            api.getVehicleCo2Chart = function(attributeKey, vehicle) {
                var item, vehicleAttributes = getVehicleAttributes(), co2ChartImgs = function() {
                    var co2Charts = {};
                    configuration || (configuration = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_jquery___default()("#global-approved-used-configuration")));
                    return co2Charts = configuration.approvedUsedCo2Charts ? configuration.approvedUsedCo2Charts : co2Charts
                }(), definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null, result = "";
                return definition && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(definition.items, function(item) {
                    var co2Class = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, item.backendVariable);
                    co2Class && (result = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(co2ChartImgs, {
                        co2Class: co2Class
                    }))
                }),
                    (item = result) ? co2ChartTemplate({
                        alt: item.co2Class,
                        src: item.chartImagePath
                    }) : ""
            }
            ,
            api.getHrefPath = function(facetsQuery, vehicle) {
                var path, vehicleID, vendorCode;
                return vehicle && vehicle.Vehicle && (vehicleID = vehicle.Vehicle.Identity.ID,
                    vendorCode = vehicle.VendorInformation.VendorCode,
                    vehicleID && vendorCode ? (vehicle.isSafeUrl = !0,
                        path = "#vehicleDetails/" + vehicleID + "/" + vendorCode + facetsQuery) : path = "#"),
                    path
            }
            ,
            api.getVehicleSchemeImgs = function(attributeKey, vehicle, selector) {
                var item, vehicleAttributes = getVehicleAttributes(), banner = function(selector) {
                    var schemeConfiguration, schemeImgs = {};
                    schemeConfiguration || (selector = selector || "#approved-used-view-configuration",
                        schemeConfiguration = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(selector)));
                    return schemeImgs = schemeConfiguration.marketingSchemeConfig ? schemeConfiguration.marketingSchemeConfig.marketingSchemes : schemeImgs
                }(selector), definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null, result = "";
                return definition && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(definition.items, function(item) {
                    var schemeValue = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, item.backendVariable);
                    schemeValue && (result = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(banner, {
                        schemeValue: schemeValue
                    }))
                }),
                    (item = result) ? schemeBannersTemplate({
                        alt: item.schemeValue,
                        src: item.bannerImagePath || item.badgeImagePath
                    }) : ""
            }
            ,
            __webpack_exports__.a = api
    }
    , function(module, exports) {
        module.exports = isAuthor
    }
    , function(module, exports) {
        module.exports = guxDisclosure
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
        __webpack_require__(16);
        __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("auGeolocationAutocomplete", ["ngGuxGoogleMaps", "approvedUsedAnalytics"])
    }
    , function(module, exports) {
        module.exports = pubsub
    }
    , function(module, exports) {
        module.exports = fjs
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
        __webpack_require__(7);
        __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("auSliderFilter", ["ngSanitize", "ngGuxSlider", "auFilterStore"])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
        __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("approvedUsedAnalytics", [])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
        __webpack_require__(7);
        __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("auSelectionFilter", ["auFilterStore"])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
        __webpack_require__(7);
        __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("auDropdownMenu", ["auFilterStore"])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
        __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("auCheckboxGroup", [])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
        __webpack_require__(7);
        __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("auCheckboxSingle", ["auFilterStore"])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
        __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("auVehicleDetailsAccordion", [])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angularCommons_au_geolocation_autocomplete_au_geolocation_autocomplete_module__ = __webpack_require__(12);
        __webpack_require__(32),
            __WEBPACK_IMPORTED_MODULE_0_angularCommons_au_geolocation_autocomplete_au_geolocation_autocomplete_module__.a.directive("auGeolocationAutocomplete", [function() {
                return {
                    restrict: "A",
                    transclude: !0,
                    scope: {
                        form: "=",
                        pickedPrediction: "=",
                        isError: "=",
                        autocompletePrompt: "@",
                        backendVariable: "@",
                        locationLabel: "@",
                        errorMessageEmpty: "@",
                        errorMessageNoResults: "@"
                    },
                    controllerAs: "vm",
                    controller: "auGeolocationAutocompleteController",
                    bindToController: !0,
                    template: ['<ng-transclude></ng-transclude><label class="locationLabel"\t\tdata-ng-if="vm.locationLabel"\t\tfor="locationInput">{{::vm.locationLabel}}</label>', '<div class="input-wrapper "\tdata-ng-class="{\'is-focused\': vm.predictions.length}">', '\t<input type="text"\t\tid="locationInput"\t\tname="locationInput"\t\tdata-ng-model="vm.directiveValue"\t\tdata-ng-required="true"\t\tdata-ng-keypress="vm.onKeyPress($event)"\t\tdata-ng-model-options="{ debounce: 200 }"\t\tautocomplete="off">', '\t\t<div class="bp-loader"             data-ng-class="{\'is-visible\' : vm.isLoading}">\t\t\t<span class="bp-loader-icon">\t\t\t\t<svg class="circular" viewBox="25 25 50 50">\t\t\t\t\t<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>\t\t\t\t</svg>\t\t\t</span>\t\t</div></div>', '<small class="error" data-ng-if="vm.isError"\tdata-ng-bind="vm.errorMessage"></small>', '<div class="autocomplete-wrapper"\tdata-ng-class="{\'is-visible\': vm.predictions.length}">', '\t<div class="autocomplete-content"\t\tdata-ng-show="vm.predictions.length">', "\t\t<p>{{::vm.autocompletePrompt}}</p>", '\t\t<ul class="autocomplete-list">', '\t\t\t<li data-ng-repeat="prediction in vm.predictions track by $index">', '\t\t\t\t<a href="#"\t\t\t\t\tdata-ng-click="vm.predictionPicked($event, prediction)"\t\t\t\t\tdata-ng-bind="prediction.description">', "\t\t\t\t</a>", "\t\t\t</li>", "\t\t</ul>", "\t</div>", "</div>"].join("")
                }
            }
            ])
    }
    , function(module, exports) {
        module.exports = numberFormat
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__(60),
            __webpack_require__(62),
            __webpack_require__(64),
            __webpack_require__(66),
            __webpack_require__(67),
            __webpack_require__(69),
            __webpack_require__(22),
            __webpack_require__(71),
            __webpack_require__(73),
            __webpack_require__(74),
            __webpack_require__(77),
            __webpack_require__(78),
            __webpack_require__(79),
            __webpack_require__(80),
            __webpack_require__(81),
            __webpack_require__(82),
            __webpack_require__(83),
            __webpack_require__(84),
            __webpack_require__(85),
            __webpack_require__(86),
            __webpack_require__(24)
    }
    , function(module, exports) {
        module.exports = requestQueue
    }
    , function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(27)
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: !0
        });
        __webpack_require__(28),
            __webpack_require__(35);
        var __WEBPACK_IMPORTED_MODULE_2__scss_approved_used_scss__ = __webpack_require__(96);
        __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_approved_used_scss__)
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__)
            , __WEBPACK_IMPORTED_MODULE_1_fordjs__ = __webpack_require__(14)
            , __WEBPACK_IMPORTED_MODULE_1_fordjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fordjs__);
        __webpack_require__(29),
            __webpack_require__(30),
            __webpack_require__(22),
            __webpack_require__(7),
            __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("aused.searchBox", ["aused.searchBox.controllers", "auSliderFilter", "auGeolocationAutocomplete", "auFilterStore"]);
        __WEBPACK_IMPORTED_MODULE_1_fordjs___default.a.registerComponent({
            name: "aused/search-box",
            selector: ".approved-used-search",
            init: function(element) {
                __WEBPACK_IMPORTED_MODULE_0_angular___default.a.bootstrap(element, ["aused.searchBox"], {
                    strictDi: !0
                })
            }
        })
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__)
            , __WEBPACK_IMPORTED_MODULE_1_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_2_isAuthor__ = __webpack_require__(10)
            , __WEBPACK_IMPORTED_MODULE_2_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isAuthor__);
        __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("aused.searchBox.controllers", []).controller("AusedSearchBoxCtrl", ["$scope", "$element", "$httpParamSerializer", "filterStoreService", function($scope, $element, $httpParamSerializer, filterStoreService) {
            var vm = this
                , CONFIG = __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default.a.get($element)
                , url = CONFIG.approvedUsedUrl
                , preFilters = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.fromJson(CONFIG.preFilterValue)
                , backendVariable = CONFIG.backendVariable
                , bslConfigElement = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("#bsl-endpoints-configuration")
                , bslConfig = __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default.a.get(bslConfigElement)
                , bslUrl = CONFIG.bslService
                , locale = CONFIG.locale
                , vehicleType = CONFIG.vehicleType;
            vm.formaction = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("button.submit").data("formaction"),
            __WEBPACK_IMPORTED_MODULE_2_isAuthor___default.a.getAuthorStatus() && $.ajax({
                type: "GET",
                url: bslUrl,
                dataType: "json",
                withCredentials: bslConfig.cookieToBsl,
                success: function(msg) {
                    vm.bslToModelConversion(msg)
                },
                error: function(err) {}
            });
            vm.bslToModelConversion = function(obj) {
                var bslres = encodeURIComponent(JSON.stringify(obj))
                    , urlToSearchBoxServlet = "bslResponse=" + bslres + "&locale=" + locale + "&vehicleType=" + vehicleType;
                $.ajax({
                    type: "POST",
                    dataType: "json",
                    data: urlToSearchBoxServlet,
                    url: "/bin/guxfoe/eused/bslResponse"
                })
            }
                ,
                vm.submit = function(form) {
                    var params, isPredictionAvailable = vm.pickedPrediction && vm.pickedPrediction.name;
                    if ($scope.$broadcast("searchBoxFormSubmitted"),
                    form.$invalid || vm.isError || !isPredictionAvailable)
                        return !1;
                    if (params = {
                        distance: filterStoreService.getAll().distance,
                        locationId: vm.pickedPrediction.placeId
                    },
                        preFilters)
                        for (var list = preFilters.split(","), i = 0; i < list.length; i++) {
                            var key = list[i].split(":")[0]
                                , value = list[i].split(":")[1];
                            params[key] = value
                        }
                    params[backendVariable] = vm.pickedPrediction.geoLocation.lng + "," + vm.pickedPrediction.geoLocation.lat,
                    window.location.search.indexOf("wcmmode=disabled") > -1 && (url += "?wcmmode=disabled"),
                        window.location = url + "#/searchResults?" + $httpParamSerializer(params)
                }
        }
        ])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
            __webpack_require__(0))
            , __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_slider_filter_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
            __webpack_require__(15));
        __webpack_require__(31),
            __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_slider_filter_module_js__.a.directive("auGuxSliderFilter", [function() {
                return {
                    restrict: "A",
                    transclude: !0,
                    scope: {
                        variableName: "=",
                        singleValue: "=?",
                        sliderVariant: "@",
                        options: "=?",
                        optionsLength: "=?",
                        min: "=",
                        max: "=",
                        step: "@",
                        defaultMin: "=?",
                        defaultMax: "=",
                        shouldBeDisplayed: "=?",
                        dependentFilter: "@",
                        formatter: "@",
                        prefix: "@",
                        suffix: "@",
                        preventEqualMinMax: "@",
                        firstHandleBackendVar: "@",
                        secondHandleBackendVar: "@"
                    },
                    bindToController: !0,
                    controllerAs: "vm",
                    controller: "auGuxSliderFilterController",
                    template: '<div class="facet"\tdata-ng-if="vm.shouldBeDisplayed">\t<ng-transclude></ng-transclude>\t<div data-range-slider\t\tdata-ng-keydown="vm.sliderKeydownUpdate($event)"\t\tdata-min="vm.min"\t\tdata-single-value="vm.singleValue"\t\tdata-max="vm.optionsLength"\t\tdata-model-min="vm.modelMin"\t\tdata-model-max="vm.modelMax"\t\tdata-prevent-equal-min-max="{{vm.preventEqualMinMax}}"\t\tdata-step="{{vm.step}}"\t\tdata-pin-handle="{{vm.pinHandle}}"\t\tdata-show-values="false">\t</div>\t<div class="slider-value">\t\t<span class="slider-value-left"\t\t\tdata-ng-if="vm.pinHandle == null || vm.pinHandle == \'min\'">\t\t\t<span data-ng-bind-html="vm.getModelMin()"></span>\t\t</span>\t\t<span class="slider-value-right" \t\t\tdata-ng-if="vm.pinHandle == null || vm.pinHandle == \'max\'">\t\t\t<span data-ng-bind-html="vm.getModelMax()"></span>\t\t</span>\t</div></div>'
                }
            }
            ])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(2))
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_isAuthor__ = __webpack_require__(10)
            , __WEBPACK_IMPORTED_MODULE_2_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isAuthor__)
            , __WEBPACK_IMPORTED_MODULE_3_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_3_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_4_angularCommons_au_slider_filter_module_js__ = __webpack_require__(15);
        __WEBPACK_IMPORTED_MODULE_4_angularCommons_au_slider_filter_module_js__.a.controller("auGuxSliderFilterController", ["$scope", "$element", "$attrs", "filterStoreService", function($scope, $element, $attrs, filterStoreService) {
            var storeValue, vm = this, isAuthorStatus = __WEBPACK_IMPORTED_MODULE_2_isAuthor___default.a.getAuthorStatus();
            vm.shouldBeDisplayed = !0,
                vm.sliderKeydownUpdate = function($event) {
                    var step = parseInt(vm.step, 10)
                        , key = $event.keyCode || $event.which;
                    $($event.target).hasClass("ng-slider-handle-min") ? 37 === key ? vm.modelMin -= step : 39 === key && vm.modelMin + step < vm.modelMax && (vm.modelMin += step) : $($event.target).hasClass("ng-slider-handle-max") && (37 === key && vm.modelMax - step >= vm.modelMin ? vm.modelMax -= step : 39 === key && vm.modelMax < vm.optionsLength && (vm.modelMax += step))
                }
                ,
                vm.getModelMin = function() {
                    if (!isAuthorStatus)
                        return "double" === $attrs.sliderVariant ? vm.options[vm.modelMin].label : vm.getModelMax()
                }
                ,
                vm.getModelMax = function() {
                    if (!isAuthorStatus)
                        return vm.singleValue = vm.options[vm.modelMax].value,
                            vm.options[vm.modelMax].label
                }
                ,
                function() {
                    var val;
                    vm.firstHandleBackendVar = $attrs.firstHandleBackendVar,
                        vm.secondHandleBackendVar = $attrs.secondHandleBackendVar,
                        vm.defaultMin = parseInt($attrs.defaultMin, 10),
                        vm.defaultMax = parseInt($attrs.defaultMax, 10),
                        vm.options = JSON.parse($attrs.sliderValues),
                        vm.optionsLength = vm.options.length - 1,
                        vm.options = JSON.parse($attrs.sliderValues),
                        vm.optionsLength = vm.options.length - 1;
                    for (var i = 0; i < vm.options.length; i++)
                        (val = parseInt(vm.options[i].value, 10)) === vm.defaultMin ? $attrs.defaultMin = i : val === vm.defaultMax && ($attrs.defaultMax = i)
                }(),
                vm.pinHandle = null,
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined($attrs.defaultMin) && (vm.pinHandle = "min");
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined($attrs.defaultMax) && (vm.pinHandle = "max");
            vm.step = parseInt(vm.step, 10),
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(vm.dependentFilter) || (vm.shouldBeDisplayed = !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(filterStoreService.get(vm.dependentFilter)[vm.dependentFilter]) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNull(filterStoreService.get(vm.dependentFilter)[vm.dependentFilter]),
                filterStoreService.watch(vm.dependentFilter, function(newValue) {
                    vm.shouldBeDisplayed = !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(newValue),
                    vm.firstHandleBackendVar && filterStoreService.setValue(vm.firstHandleBackendVar, getActualValue(vm.modelMin)),
                    vm.secondHandleBackendVar && filterStoreService.setValue(vm.secondHandleBackendVar, getActualValue(vm.modelMax))
                }));
            vm.firstHandleBackendVar && (storeValue = getOptionFromFilterStore(vm.firstHandleBackendVar),
                vm.modelMin = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(storeValue) ? parseInt($attrs.defaultMin, 10) : storeValue,
            !storeValue && vm.shouldBeDisplayed && filterStoreService.setValue(vm.firstHandleBackendVar, getActualValue(vm.modelMin)));
            vm.secondHandleBackendVar && (storeValue = getOptionFromFilterStore(vm.secondHandleBackendVar),
                vm.modelMax = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(storeValue) ? parseInt($attrs.defaultMax, 10) : storeValue,
            !storeValue && vm.shouldBeDisplayed && filterStoreService.setValue(vm.secondHandleBackendVar, getActualValue(vm.modelMax)));
            function getOptionFromFilterStore(handleBackendVar) {
                var result, selectedOption, storeValue = __WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(filterStoreService.getAll(), handleBackendVar);
                return storeValue && -1 !== (selectedOption = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(vm.options, function(option) {
                    return option.value === storeValue
                })) && (result = selectedOption),
                    result
            }
            function getActualValue(newValue) {
                return vm.options[newValue] ? vm.options[newValue].value : ""
            }
            $element.find(".ng-slider-handle").on("click", function() {
                this.blur()
            }),
                $scope.$watch("vm.singleValue", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function(newValue) {
                    vm.shouldBeDisplayed && filterStoreService.update(vm.secondHandleBackendVar, newValue)
                }, 300)),
                $scope.$watch("vm.modelMin", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function(newValue) {
                    vm.shouldBeDisplayed && filterStoreService.update(vm.firstHandleBackendVar, getActualValue(newValue))
                }, 300)),
                $scope.$watch("vm.modelMax", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function(newValue) {
                    vm.shouldBeDisplayed && filterStoreService.update(vm.secondHandleBackendVar, getActualValue(newValue))
                }, 300)),
                filterStoreService.register(vm.firstHandleBackendVar, {
                    setValue: function(newValue) {
                        newValue && (vm.modelMin = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(vm.options, function(option) {
                            return option.value === newValue
                        }))
                    }
                }),
                filterStoreService.register(vm.secondHandleBackendVar, {
                    setValue: function(newValue) {
                        newValue && (vm.modelMax = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(vm.options, function(option) {
                            return option.value === newValue
                        }))
                    }
                })
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_4_angularCommons_au_slider_filter_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_geolocation_autocomplete_au_geolocation_autocomplete_module__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
            __webpack_require__(12))
            , enterKeyCode = (__webpack_require__(33),
            __webpack_require__(34),
            13);
        __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_geolocation_autocomplete_au_geolocation_autocomplete_module__.a.controller("auGeolocationAutocompleteController", ["$scope", "$element", "$location", "analyticsService", "geolocationAutocompleteService", "filterStoreService", function($scope, $element, $location, analyticsService, autocompleteService, filterStoreService) {
            var vm = this
                , locationPlaceId = $location.search().locationId;
            function displayLocation() {
                analyticsService.analyticsFilterValues.address = vm.pickedPrediction.name,
                    analyticsService.analyticsFilterValues.addressBackendVariable = vm.backendVariable,
                    vm.directiveValue = vm.pickedPrediction.name,
                    vm.$input.focus(),
                vm.form || (handleFieldValidation(),
                vm.isError || (filterStoreService.update(vm.backendVariable, vm.pickedPrediction.geoLocation.lng + "," + vm.pickedPrediction.geoLocation.lat, "address"),
                    $location.search("locationId", vm.pickedPrediction.placeId),
                    $location.search(vm.backendVariable, vm.pickedPrediction.geoLocation.lng + "," + vm.pickedPrediction.geoLocation.lat)))
            }
            function handleAutocomplete(query) {
                var isPredicting = query ? query.length >= 3 : null
                    , isSame = !!vm.pickedPrediction && query === vm.pickedPrediction.name;
                isSame ? clearPredictions() : isPredicting ? (vm.isLoading = !0,
                    autocompleteService.getPredictions(query).then(handlePredictions)) : (clearPredictions(),
                    vm.pickedPrediction = {})
            }
            function handlePredictions(predictions) {
                vm.isError = !1,
                    predictions ? vm.predictions = predictions : clearPredictions(),
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.delay(function() {
                        vm.isLoading = !1,
                            $scope.$apply()
                    }, 300)
            }
            function clearPredictions() {
                vm.predictions.length = 0
            }
            function handleFieldValidation() {
                var isEmpty = !vm.directiveValue || !vm.directiveValue.length
                    , isNoResults = !vm.predictions.length && !vm.pickedPrediction.placeId;
                isEmpty ? (vm.errorMessage = vm.errorMessageEmpty,
                    vm.isError = !0) : isNoResults ? (vm.errorMessage = vm.errorMessageNoResults,
                    vm.isError = !0) : vm.isError = !1
            }
            vm.predictions = [],
                vm.pickedPrediction = {},
                vm.directiveValue = "",
                vm.errorMessage = "",
                vm.isError = !1,
                vm.isLoading = !1,
                vm.$input = $element.find("#locationInput"),
                vm.predictionPicked = function(e, prediction) {
                    e && e.preventDefault(),
                        autocompleteService.getGeoLocation(prediction.place_id).then(function(geoLocation) {
                            vm.pickedPrediction = {
                                name: prediction.description,
                                placeId: prediction.place_id,
                                geoLocation: geoLocation
                            }
                        }).then(displayLocation)
                }
                ,
                vm.onKeyPress = function(e) {
                    var isEnterKey = e.which === enterKeyCode;
                    isEnterKey && vm.predictions.length && !vm.isError && (vm.predictionPicked(e, vm.predictions[0]),
                        vm.isError = !1)
                }
                ,
                autocompleteService.googleMapsApi.then(function() {
                    locationPlaceId && (locationId = locationPlaceId,
                        autocompleteService.getGeoLocationPlace(locationId).then(function(geoLocation) {
                            vm.directiveValue = geoLocation.place,
                                vm.pickedPrediction.placeId = locationId,
                                vm.pickedPrediction.name = vm.directiveValue,
                                vm.pickedPrediction.geoLocation = geoLocation,
                                analyticsService.analyticsFilterValues.address = vm.pickedPrediction.name,
                                analyticsService.analyticsFilterValues.addressBackendVariable = vm.backendVariable,
                                analyticsService.locationPromise.resolve()
                        }).then(function() {
                            filterStoreService.saveLocation({
                                locationId: vm.pickedPrediction.placeId,
                                name: vm.pickedPrediction.name
                            })
                        }));
                    var locationId;
                    $scope.$watch("vm.directiveValue", handleAutocomplete),
                    vm.form && $scope.$on("searchBoxFormSubmitted", handleFieldValidation)
                }),
                $scope.$on("storeLastLocation", function() {
                    filterStoreService.saveLocation({
                        locationId: vm.pickedPrediction.placeId,
                        name: vm.pickedPrediction.name
                    })
                }),
                filterStoreService.register(vm.backendVariable, {
                    setValue: function() {
                        var storedLocation = filterStoreService.getLastLocation();
                        storedLocation && autocompleteService.getGeoLocation(storedLocation.locationId).then(function(geoLocation) {
                            vm.pickedPrediction = {
                                name: storedLocation.name,
                                placeId: storedLocation.locationId,
                                geoLocation: geoLocation
                            }
                        }).then(displayLocation)
                    }
                })
        }
        ])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_pubsub__ = __webpack_require__(13)
            , __WEBPACK_IMPORTED_MODULE_3_aUsedAnalytics_approvedUsedAnalytics_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pubsub__),
            __webpack_require__(16));
        __WEBPACK_IMPORTED_MODULE_3_aUsedAnalytics_approvedUsedAnalytics_module_js__.a.factory("analyticsService", ["$q", function($q) {
            var locationPromise = $q.defer()
                , analyticsFilterValues = {
                lastSelectedFilterType: "",
                address: "",
                filterName: "",
                filterValue: "",
                filterList: [],
                addressBackendVariable: ""
            }
                , lastView = {}
                , nameplate = $q.defer();
            function transformData(analyticsData) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(analyticsData, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.pick(analyticsFilterValues, ["lastSelectedFilterType", "address", "filterName", "filterValue", "filterList", "addressBackendVariable"]))
            }
            return {
                track: function(event, analyticsData) {
                    analyticsData.waitForLocationToBeResolved ? "vehicleDetails" !== lastView.name && $q.when(locationPromise.promise).then(function() {
                        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish(event, transformData(analyticsData))
                    }) : __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish(event, transformData(analyticsData));
                    lastView.name = analyticsData.lastView
                },
                lastView: lastView,
                setReturnedFromVehicleDetails: function() {
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("au:analytics:setReturnedFromVehicleDetails")
                },
                locationPromise: locationPromise,
                analyticsFilterValues: analyticsFilterValues,
                nameplate: nameplate,
                totalResults: void 0,
                resultNumber: void 0,
                setSearchRefinedState: function(isNotRefined) {
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("au:analytics:setSearchRefinedState", {
                        isRefined: !isNotRefined
                    })
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsedAnalytics_approvedUsedAnalytics_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__)
            , __WEBPACK_IMPORTED_MODULE_1_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_geolocation_autocomplete_au_geolocation_autocomplete_module_js__ = __webpack_require__(12);
        __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_geolocation_autocomplete_au_geolocation_autocomplete_module_js__.a.factory("geolocationAutocompleteService", ["ngGuxGoogleMapService", "$q", function(googleMapService, $q) {
            var autocomplete, geocoder, api = {}, configuration = __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("#global-market-configuration"));
            return api.googleMapsApi = googleMapService.initializeGoogleMapsApi().then(function() {
                var $defer = $q.defer();
                return autocomplete = new window.google.maps.places.AutocompleteService,
                    geocoder = new window.google.maps.Geocoder,
                    $defer.resolve()
            }),
                api.getPredictions = function(query) {
                    var $defer = $q.defer();
                    return autocomplete.getPlacePredictions({
                        input: query,
                        types: ["geocode"],
                        componentRestrictions: {
                            country: configuration.marketCode
                        }
                    }, function(response) {
                        $defer.resolve(response)
                    }),
                        $defer.promise
                }
                ,
                api.getGeoLocation = function(locationId) {
                    var $defer = $q.defer();
                    return geocoder.geocode({
                        placeId: locationId
                    }, function(results) {
                        results && $defer.resolve({
                            lat: results[0].geometry.location.lat(),
                            lng: results[0].geometry.location.lng()
                        })
                    }),
                        $defer.promise
                }
                ,
                api.getGeoLocationPlace = function(locationId) {
                    var $defer = $q.defer();
                    return geocoder.geocode({
                        placeId: locationId
                    }, function(results) {
                        results && $defer.resolve({
                            place: results[0].formatted_address
                        })
                    }),
                        $defer.promise
                }
                ,
                api
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_geolocation_autocomplete_au_geolocation_autocomplete_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__)
            , __WEBPACK_IMPORTED_MODULE_1_aUsedAnalytics_events_approvedUsedAnalytics__ = __webpack_require__(36)
            , __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_7_fordjs__ = (__webpack_require__(41),
            __webpack_require__(42),
            __webpack_require__(24),
            __webpack_require__(87),
            __webpack_require__(14));
        module = {
            name: "approvedUsed",
            selector: "#approved-used",
            init: function(element) {
                __WEBPACK_IMPORTED_MODULE_1_aUsedAnalytics_events_approvedUsedAnalytics__.a.init(),
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.bootstrap(element, ["approvedUsed"])
            }
        };
        __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_fordjs__).a.registerComponent(module);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var returnedFromVehicleDetails, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__), __WEBPACK_IMPORTED_MODULE_2_pubsub__ = __webpack_require__(13), __WEBPACK_IMPORTED_MODULE_3_analyticsVariables__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pubsub__),
            __webpack_require__(37)), __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_analyticsVariables__), api = {}, isSearchInitiated = !1, isSearchRefined = !1;
        function setCommonSearchSuccessData(data) {
            var refinedSearchText = isSearchRefined ? ":refine" : "";
            digitaldata.page.pageName = __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + ":results" + refinedSearchText + ":pg " + data.pageNumber,
                digitaldata.page.pageNameNoVehicle = __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + ":results" + refinedSearchText + ":pg " + data.pageNumber,
                digitaldata.page.searchDepth = "0:" + data.totalResults,
                digitaldata.page.searchLocationTerm = data.address
        }
        function setCommonSearchData(data) {
            var resultSuccessful = !1;
            return !function(data) {
                return data.totalResults
            }(data) ? function(data) {
                var refinedSearchText = isSearchRefined ? ":refine" : ""
                    , refinedSearchErrorText = isSearchRefined ? "search refinement" : "search results";
                digitaldata.page.pageName = __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + refinedSearchText + ":error:zero results",
                    digitaldata.page.pageNameNoVehicle = __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + refinedSearchText + ":error:zero results",
                    digitaldata.page.errorTracking = "used search inventory:" + refinedSearchErrorText + ":zero results",
                    digitaldata.page.searchDepth = "0:0",
                    digitaldata.page.searchLocationTerm = data.address
            }(data) : (setCommonSearchSuccessData(data),
                resultSuccessful = !0),
                resultSuccessful
        }
        function setSortData(sortFilter) {
            var sortFilterParsed = function(sortValue) {
                var values, result = {};
                sortValue && (values = sortValue.split(","),
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(values, function(sortFilterParam) {
                        var filterParamSplit = sortFilterParam.split(":");
                        2 === filterParamSplit.length && (result[filterParamSplit[0]] = filterParamSplit[1])
                    }));
                return result
            }(sortFilter.value);
            digitaldata.onclick.onclickLinkName = digitaldata.page.pageName + ":sort:submit",
                digitaldata.onclick.onclick = ":sort:submit",
                digitaldata.page.filterCategoryName = sortFilterParsed.orderBy,
                digitaldata.page.filterName = sortFilterParsed.sortOrder
        }
        function filterSelected(data) {
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.some(data.filters, function(filter) {
                return "sort" === filter.filterType
            }) && data && data.filters[0] && (setSortData(data.filters[0].filterValue),
                _satellite.track("usedSearchResultsSort"))
        }
        function searchRefined(data) {
            var resultSuccessful = setCommonSearchData(data);
            !function(data) {
                data.addressBackendVariable === data.filterName ? (digitaldata.page.filterCategoryName = "address",
                    digitaldata.page.filterName = data.address) : (digitaldata.page.filterCategoryName = data.filterName,
                    digitaldata.page.filterName = data.filterValue);
                var filterList = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(function flattenObject(obj) {
                    var toReturn = {};
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forOwn(obj, function(outerValue, outerKey) {
                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(outerValue) ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forOwn(flattenObject(outerValue), function(innerValue, innerKey) {
                            toReturn[outerKey + "." + innerKey] = innerValue
                        }) : toReturn[outerKey] = outerValue
                    });
                    return toReturn
                }(data.filterList), function(value, name) {
                    var returnObj = {};
                    return data.addressBackendVariable === name ? returnObj.address = data.address : returnObj[name] = value,
                        returnObj
                });
                digitaldata.page.filterList = JSON.stringify(filterList).replace(/[{}[\]]/g, "")
            }(data),
                resultSuccessful ? returnedFromVehicleDetails ? (returnedFromVehicleDetails = !1,
                    _satellite.track("usedSearchResultsPagination")) : _satellite.track("usedSearchRefinedResults") : _satellite.track("usedSearchErrorZeroResults")
        }
        function trackSearch(data) {
            "sort" !== data.lastSelectedFilterType && (isSearchInitiated ? searchRefined(data) : (!function(data) {
                var resultSuccessful = setCommonSearchData(data);
                digitaldata.page.hierarchy = __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalHierarchy() + ":search results",
                    digitaldata.page.pageID = "used srp",
                    digitaldata.page.searchRadius = data.searchRadius,
                    resultSuccessful ? _satellite.track("usedSearchComplete") : _satellite.track("usedSearchErrorZeroResults")
            }(data),
                isSearchInitiated = !0))
        }
        function paginationClicked(data) {
            setCommonSearchSuccessData(data),
                _satellite.track("usedSearchResultsPagination")
        }
        function downloadBrochure(data) {
            digitaldata.onclick.onclickLinkName = "brand:brochure download:used vehicle:" + data.nameplate,
                digitaldata.onclick.onclick = "brochure download",
                _satellite.track("usedSearchBrochureDownload")
        }
        function contactDealerCTA(data) {
            digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + ":view vehicle:contact dealer:c2c:" + data.nameplate,
                digitaldata.onclick.onclick = "contact dealer:c2c",
                _satellite.track("usedSearchReferral")
        }
        function vehicleDetailsOpen(data) {
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.extend(digitaldata.page, {
                pageName: __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + ":view vehicle:" + data.nameplate,
                pageNameNoVehicle: __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + ":view vehicle",
                pageID: "used vhp"
            }),
                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.extend(digitaldata.vehicle, {
                    nameplate: validate("ford " + data.nameplate).toLowerCase(),
                    modelYear: validate(data.modelYear),
                    modelSeries: validate(data.modelSeries),
                    exteriorColour: validate(data.exteriorColour),
                    bodystyle: validate(data.bodyStyle),
                    engineTrans: validate(data.engine + ":" + data.transmission),
                    payload: data.payload,
                    loadLengthHeight: validate(data.loadLength + ":" + data.loadHeight),
                    mileage: data.mileage,
                    price: data.price,
                    usedScheme: validate(data.usedScheme),
                    usedDealerID: validate(data.dealerId),
                    usedVehicleID: validate(data.vehicleId)
                }),
            data.resultNumber && data.totalResults && (digitaldata.page.searchDepth = data.resultNumber + ":" + data.totalResults),
                _satellite.track("usedSearchVehicleDetailPage")
        }
        function validate(value) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(value) || "[object Object]:[object Object]" === value ? "" : value
        }
        function accessoriesLinkClicked(data) {
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.extend(digitaldata.onclick, {
                onclickLinkName: __WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + ":view vehicle:view accessory:" + data.nameplate,
                onclick: data.ctaName
            }),
                _satellite.track("usedSearchViewAcc")
        }
        function addToCompare(data) {
            digitaldata.onclick.onclickLinkName = (__WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + ":add to compare:" + data.nameplate + ":" + data.modelSeries).toLowerCase(),
                digitaldata.onclick.onclick = "add to compare",
                digitaldata.vehicle.nameplate = validate("ford " + data.nameplate).toLowerCase(),
                digitaldata.vehicle.modelYear = validate(data.modelYear).toLowerCase(),
                digitaldata.vehicle.modelSeries = validate(data.modelSeries).toLowerCase(),
                digitaldata.vehicle.exteriorColour = validate(data.exteriorColour).toLowerCase(),
                digitaldata.vehicle.interiorTrim = validate(data.interiorTrim).toLowerCase(),
                digitaldata.vehicle.bodystyle = validate(data.bodyStyle).toLowerCase(),
                digitaldata.vehicle.engineTrans = validate(data.engine + ":" + data.transmission).toLowerCase(),
                digitaldata.vehicle.payload = data.payload,
                digitaldata.vehicle.loadLengthHeight = validate(data.loadLength + ":" + data.loadHeight).toLowerCase(),
                digitaldata.vehicle.mileage = data.mileage,
                digitaldata.vehicle.price = data.price,
                digitaldata.vehicle.usedScheme = validate(data.usedScheme).toLowerCase(),
                digitaldata.vehicle.usedDealerID = validate(data.dealerId).toLowerCase(),
                digitaldata.vehicle.usedVehicleID = data.vehicleId,
                digitaldata.page.searchDepth = validate(data.resultNumber + ":" + data.totalResults).toLowerCase(),
                _satellite.track("usedSearchAddToCompare")
        }
        function removeCompare(data) {
            digitaldata.onclick.onclickLinkName = (__WEBPACK_IMPORTED_MODULE_3_analyticsVariables___default.a.getOriginalPgNameNoVehicle() + ":remove from compare:" + data.nameplate + ":" + data.modelSeries).toLowerCase(),
                digitaldata.onclick.onclick = "remove from compare",
                digitaldata.vehicle.nameplate = validate("ford " + data.nameplate).toLowerCase(),
                digitaldata.vehicle.modelYear = validate(data.modelYear).toLowerCase(),
                digitaldata.vehicle.modelSeries = validate(data.modelSeries).toLowerCase(),
                digitaldata.vehicle.exteriorColour = validate(data.exteriorColour).toLowerCase(),
                digitaldata.vehicle.interiorTrim = validate(data.interiorTrim).toLowerCase(),
                digitaldata.vehicle.bodystyle = validate(data.bodyStyle).toLowerCase(),
                digitaldata.vehicle.engineTrans = validate(data.engine + ":" + data.transmission).toLowerCase(),
                digitaldata.vehicle.payload = data.payload,
                digitaldata.vehicle.loadLengthHeight = validate(data.loadLength + ":" + data.loadHeight).toLowerCase(),
                digitaldata.vehicle.mileage = data.mileage,
                digitaldata.vehicle.price = data.price,
                digitaldata.vehicle.usedScheme = validate(data.usedScheme).toLowerCase(),
                digitaldata.vehicle.usedDealerID = validate(data.dealerId).toLowerCase(),
                digitaldata.vehicle.usedVehicleID = data.vehicleId,
                digitaldata.page.searchDepth = validate(data.resultNumber + ":" + data.totalResults).toLowerCase(),
                _satellite.track("usedSearchRemoveFromCompare")
        }
        function compareView(data) {
            digitaldata.page.pageName = fordAnalytics.pageName + ":compare",
                digitaldata.page.pageNameNoVehicle = fordAnalytics.pageNameNoVehicle + ":compare",
                digitaldata.page.hierarchy = fordAnalytics.hierarchy + ":compare",
                digitaldata.vehicle.nameplateCombination = data.nameplates.toLowerCase(),
                digitaldata.page.pageID = "used cmp",
                _satellite.track("usedSearchCompareView")
        }
        function setSearchRefinedState(state) {
            isSearchRefined = state.isRefined
        }
        function setReturnedFromVehicleDetails() {
            returnedFromVehicleDetails = !0
        }
        api.init = function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("trackSearch", trackSearch),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("paginationClicked", paginationClicked),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("filterOptionSelected", filterSelected),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("contactDealerCTA", contactDealerCTA),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("usedSearchBrochureDownload", downloadBrochure),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("vehicleDetailsOpen", vehicleDetailsOpen),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("accessoriesLinkClicked", accessoriesLinkClicked),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("addToCompare", addToCompare),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("removeCompare", removeCompare),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("compareView", compareView),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("au:analytics:setSearchRefinedState", setSearchRefinedState),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("au:analytics:setReturnedFromVehicleDetails", setReturnedFromVehicleDetails)
        }
            ,
            __webpack_exports__.a = api
    }
    , function(module, exports) {
        module.exports = analyticsVariables
    }
    , function(module, exports) {
        module.exports = angularRoute
    }
    , function(module, exports) {
        module.exports = angularSanitize
    }
    , function(module, exports) {
        module.exports = angularAnimate
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__)
            , __WEBPACK_IMPORTED_MODULE_2_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_3_isAuthor__ = __webpack_require__(10)
            , __WEBPACK_IMPORTED_MODULE_3_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isAuthor__)
            , __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1)
            , $configElement = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element("#approved-used-configuration")
            , $bslConfigElement = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element("#bsl-endpoints-configuration")
            , $globalApprovedUsedConfiguration = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element("#global-approved-used-configuration")
            , isAuthorStatus = __WEBPACK_IMPORTED_MODULE_3_isAuthor___default.a.getAuthorStatus();
        function ApplicationConfig($routeProvider, $compileProvider) {
            $compileProvider.debugInfoEnabled(!1),
                $routeProvider.when("/searchResults", {
                    templateUrl: "search-tpl.html",
                    controller: "SearchResultsController",
                    reloadOnSearch: !1,
                    controllerAs: "vm"
                }).when("/vehicleDetails/:vehicleId/:dealerId", {
                    template: __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#vehicleDetailsTpl").html(),
                    controller: "VehicleDetailsController",
                    reloadOnSearch: !1,
                    controllerAs: "vm"
                }).when("/compareVehicles", {
                    template: "<div></div>",
                    controller: "CompareVehiclesController",
                    reloadOnSearch: !1,
                    controllerAs: "vm"
                }).otherwise({
                    redirectTo: "/searchResults"
                })
        }
        __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a.constant("APP_CONFIG", __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get($configElement)),
            __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a.constant("BSL_CONFIG", __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get($bslConfigElement)),
            __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a.constant("GLOBAL_APP_CONFIG", __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get($globalApprovedUsedConfiguration)),
            __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a.constant("MAP_NAME", "au-dealer-details"),
        isAuthorStatus || __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a.config(["$routeProvider", "$compileProvider", ApplicationConfig]).config(["$locationProvider", function($locationProvider) {
            $locationProvider.hashPrefix("")
        }
        ]).config(["$compileProvider", function($compileProvider) {
            $compileProvider.preAssignBindingsEnabled(!0)
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__(43),
            __webpack_require__(44),
            __webpack_require__(45),
            __webpack_require__(49),
            __webpack_require__(51),
            __webpack_require__(52),
            __webpack_require__(53),
            __webpack_require__(54),
            __webpack_require__(55),
            __webpack_require__(57),
            __webpack_require__(58),
            __webpack_require__(59)
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_pubsub__ = __webpack_require__(13)
            , __WEBPACK_IMPORTED_MODULE_2_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pubsub__),
            __webpack_require__(0))
            , __WEBPACK_IMPORTED_MODULE_2_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__)
            , __WEBPACK_IMPORTED_MODULE_3_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_4_mediaQuery__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_objectUtil__),
            __webpack_require__(6))
            , __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mediaQuery__)
            , __WEBPACK_IMPORTED_MODULE_5_aUsed_approved_used_approved_used_main_module__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_6_dynamicDataProvider__ = __webpack_require__(8)
            , __WEBPACK_IMPORTED_MODULE_6_dynamicDataProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dynamicDataProvider__);
        __WEBPACK_IMPORTED_MODULE_5_aUsed_approved_used_approved_used_main_module__.a.controller("AccessoriesController", ["$timeout", "$routeParams", "getVehicles", "analyticsService", "APP_CONFIG", function($timeout, $routeParams, getVehicles, analyticsService, APP_CONFIG) {
            var vm = this;
            function getLinkTypeBasedOnMediaType() {
                $timeout(function() {
                    vm.isMobile = "mobile" === __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType() || "tablet" === __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType()
                })
            }
            vm.isMobile = !1,
                vm.handleLinkClick = function() {
                    var data = {
                        vehicleCategory: APP_CONFIG.vehicleCategory.split(":")[1].toLowerCase(),
                        nameplate: vm.vehicle.Vehicle.Model.ShortDescription,
                        ctaName: "view accessory"
                    };
                    analyticsService.track("accessoriesLinkClicked", data)
                }
                ,
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("mediaQuery:change", getLinkTypeBasedOnMediaType),
                vehicleId = $routeParams.vehicleId,
                dealerId = $routeParams.dealerId,
            vehicleId && dealerId && getVehicles.getVehicleById(vehicleId, dealerId).then(function(response) {
                var vehicleName;
                vm.vehicle = __WEBPACK_IMPORTED_MODULE_6_dynamicDataProvider___default.a.getFirstElement(response),
                    (vehicleName = __WEBPACK_IMPORTED_MODULE_2_angular___default.a.element(".accessories-title")).html(vehicleName.html().replace("{vehicleName}", vm.vehicle.Vehicle.Model.ShortDescription))
            }).catch(__WEBPACK_IMPORTED_MODULE_2_angular___default.a.noop),
                getLinkTypeBasedOnMediaType();
            var vehicleId, dealerId
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_5_aUsed_approved_used_approved_used_main_module__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(1));
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a.controller("ApprovedUsedMainController", ["$scope", "$location", "filterStoreService", "APP_CONFIG", function($scope, $location, filterStoreService, APP_CONFIG) {
            $location.url(decodeURIComponent($location.url())),
                $scope.aUConfiguration = APP_CONFIG,
                $scope.isRootPath = !0,
                $scope.applicationRootPath = "/searchResults",
                $scope.displayLoader = !1,
                $scope.serviceErrorMsg = !1,
                $scope.$on("page:loader", function(event, displayLoader) {
                    $scope.displayLoader = displayLoader
                }),
                $scope.getBackUrl = function() {
                    return $scope.applicationRootPath + filterStoreService.getActiveFiltersQuery()
                }
                ,
                $scope.$on("display:serviceError", function(event, serviceErrorMsg) {
                    $scope.serviceErrorMsg = serviceErrorMsg
                }),
                $scope.$on("$routeChangeSuccess", function() {
                    $scope.isRootPath = $location.path() === $scope.applicationRootPath
                }),
                $scope.$on("$routeChangeStart", function() {
                    $scope.displayLoader = !1,
                        $scope.serviceErrorMsg = !1
                }),
                $scope.$on("show:modal", function(event, modal) {
                    $scope.modalOptions = modal
                })
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__)
            , __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_3_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_4_mediaQuery__ = __webpack_require__(6)
            , __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mediaQuery__)
            , __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(46)
            , __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__)
            , __WEBPACK_IMPORTED_MODULE_6_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_7_aUsed_utils_auVehicleAttributeUtil_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_objectUtil__),
            __webpack_require__(9))
            , __WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil__ = __webpack_require__(47)
            , __WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil__)
            , __WEBPACK_IMPORTED_MODULE_9_guxTooltip__ = __webpack_require__(48)
            , __WEBPACK_IMPORTED_MODULE_9_guxTooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_guxTooltip__);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a.controller("CompareVehiclesController", ["$scope", "$timeout", "$sce", "getCompareListService", "analyticsService", "filterStoreService", "APP_CONFIG", function($scope, $timeout, $sce, getCompareListService, analyticsService, filterStoreService, APP_CONFIG) {
            var breakpoint, vm = this, CONST = {
                selector: {
                    compareConfig: "#compare-vehicles",
                    contactDealer: "#contact-dealer",
                    compareOverlayContainer: "#compare-overlay",
                    compareOverlay: ".compare-overlay",
                    stickyHeader: ".compare-body .sticky-header",
                    compareBody: ".compare-body",
                    swipeArea: ".compare-body .model-body",
                    tooltip: ".gux-tooltip-overlay"
                },
                className: {
                    stickToBottom: "stick-to-bottom",
                    bodyLock: "body-lock",
                    overlayActive: "compare-overlay-active"
                },
                swipeDirection: {
                    left: 2,
                    right: 4
                }
            }, $window = $(window), $body = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element("body"), $compareOverlayContainer = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.compareOverlayContainer), imageRatio = 1.7897, xlargeWidth = 460, desktopWidth = 225, tabletWidth = 270, mobileWidth = 420;
            function imageHeight(imageBreakpoint) {
                window.devicePixelRatio > 1 && (imageBreakpoint *= 2),
                    vm.imageWidth = imageBreakpoint,
                    vm.imageHeight = Math.round(imageBreakpoint / imageRatio, 0)
            }
            function setCurrentBreakpoints(onResizeEvent) {
                var currentBreakpoint = __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType();
                breakpoint !== currentBreakpoint && (imageHeight("xlarge" === currentBreakpoint ? xlargeWidth : "desktop" === currentBreakpoint ? desktopWidth : "tablet" === currentBreakpoint ? tabletWidth : mobileWidth),
                onResizeEvent && $scope.$apply(),
                    breakpoint = currentBreakpoint)
            }
            function stickyModelHeader() {
                var $modelHeaderWidth, $compareOverlay = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.compareOverlay), $stickyHeader = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.stickyHeader), currentBreakpoint = __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType();
                $modelHeaderWidth = "xlarge" === currentBreakpoint ? $compareOverlay.width() - 18 : $compareOverlay.width(),
                    $stickyHeader.css({
                        width: $modelHeaderWidth
                    })
            }
            function setCompareOverlayHeight() {
                var $compareBody = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.compareBody)
                    , headerHeight = __WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil___default.a.getHeightOfHeader() + 72
                    , compareBodyHeight = $window.innerHeight() - headerHeight;
                $compareBody.css({
                    height: compareBodyHeight
                })
            }
            function isValidPage() {
                0 === vm.currentPage && (vm.currentPage = vm.compareList.length),
                vm.currentPage > vm.compareList.length && (vm.currentPage %= vm.compareList.length)
            }
            function disableSlide() {
                var currentBreakpoint = __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType();
                return "tablet" === currentBreakpoint || "mobile" === currentBreakpoint ? 1 === vm.compareList.length : vm.compareList.length <= 3
            }
            function bindSlideSwipeEvent() {
                var swipeArea = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.swipeArea)
                    , currentBreakpoint = __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType();
                "tablet" !== currentBreakpoint && "mobile" !== currentBreakpoint || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(swipeArea, function(element) {
                    new __WEBPACK_IMPORTED_MODULE_5_hammerjs___default.a(element).on("swipe", function(event) {
                        !function(event) {
                            var direction = event.direction
                                , disableSwipe = disableSlide();
                            event.preventDefault(),
                                event.stopPropagation(),
                                event.gesture.preventDefault(),
                                event.gesture.stopPropagation(),
                            disableSwipe || (direction === CONST.swipeDirection.left ? vm.nextPage() : direction === CONST.swipeDirection.right && vm.prevPage(),
                                $scope.$apply());
                            event.gesture.stopDetect()
                        }(event)
                    })
                }
                    .bind())
            }
            vm.compareVehicleConfiguration = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.compareConfig)),
                getCompareListService.setCompareVehicleMaxLimit(vm.compareVehicleConfiguration.vehiclelimit),
                vm.facetsQuery = filterStoreService.getActiveFiltersQuery(),
                vm.compareDataSet = getCompareListService.getCompareDataSet(),
                vm.featureGroup = getCompareListService.getFeatureGroup(),
                vm.currentPage = 1,
                vm.hidePagination = !1,
                vm.expanded = !1,
                vm.toggleOverlay = function() {
                    var compareList, nameplateArray;
                    vm.expanded = !vm.expanded,
                        vm.expanded ? ($body.addClass(CONST.className.bodyLock),
                        $compareOverlayContainer.hasClass(CONST.className.stickToBottom) || $compareOverlayContainer.addClass(CONST.className.stickToBottom),
                            analyticsService.track("compareView", (compareList = getCompareListService.getCompareDataSet(),
                                nameplateArray = [],
                                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(compareList, function(item) {
                                    nameplateArray.push("ford " + item.Vehicle.Model.ShortDescription)
                                }),
                                {
                                    vehicleCategory: APP_CONFIG.vehicleCategory.split(":")[1].toLowerCase(),
                                    nameplates: nameplateArray.length ? nameplateArray.join(":") : ""
                                }))) : $body.removeClass(CONST.className.bodyLock)
                }
                ,
                vm.getVehicleAttribute = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_7_aUsed_utils_auVehicleAttributeUtil_js__.a.getAttribute(attribute, vehicle)
                }
                ,
                vm.getValueWithPrefixAndSuffix = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_7_aUsed_utils_auVehicleAttributeUtil_js__.a.getValueWithPrefixAndSuffix(attribute, vehicle)
                }
                ,
                vm.getVehicleAttributeItems = function(attribute) {
                    return __WEBPACK_IMPORTED_MODULE_7_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleAttributeItems(attribute)
                }
                ,
                vm.formatItem = function(item, vehicle, attributeKey) {
                    return __WEBPACK_IMPORTED_MODULE_7_aUsed_utils_auVehicleAttributeUtil_js__.a.formatItem(item, vehicle, attributeKey, vm.compareVehicleConfiguration.placeholderText)
                }
                ,
                vm.getVehicleCo2Chart = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_7_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleCo2Chart(attribute, vehicle)
                }
                ,
                vm.getVehicleSchemeImg = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_7_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleSchemeImgs(attribute, vehicle, CONST.selector.compareConfig)
                }
                ,
                vm.getHrefPath = function(vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_7_aUsed_utils_auVehicleAttributeUtil_js__.a.getHrefPath(vm.facetsQuery, vehicle)
                }
                ,
                vm.viewDetails = function(type) {
                    vm.toggleOverlay(),
                    "contact-dealer" === type && $timeout(function() {
                        __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.contactDealer).trigger("click")
                    }, 0)
                }
                ,
                vm.toTrusted = function(htmlCode) {
                    return $sce.trustAsHtml(htmlCode)
                }
                ,
                vm.removeCompareVehicle = function(vehicle) {
                    var vehicleQuery = {
                        vehicleId: vehicle.Vehicle.Identity.ID,
                        dealerId: vehicle.VendorInformation.VendorCode
                    }
                        , modalOptions = {
                        show: !0,
                        content: vm.compareVehicleConfiguration.errorObject.confirmationMsg,
                        closeLabel: vm.compareVehicleConfiguration.errorObject.cancelLabel,
                        actionLabel: vm.compareVehicleConfiguration.errorObject.deleteLabel,
                        actionMethod: function(closeOverlay) {
                            getCompareListService.removeCompareList(vehicleQuery),
                                analyticsService.track("removeCompare", function(vehicle) {
                                    return {
                                        vehicleCategory: APP_CONFIG.vehicleCategory.split(":")[1].toLowerCase(),
                                        nameplate: vehicle.Vehicle.Model.ShortDescription,
                                        modelYear: vehicle.Vehicle.History.YearOfProduction,
                                        modelSeries: vehicle.Vehicle.Variant.ShortDescription,
                                        exteriorColour: vehicle.Vehicle.Configuration.Appearance.ExteriorColor.ShortDescription,
                                        interiorTrim: vehicle.Vehicle.Configuration.Appearance.InteriorColor.ShortDescription,
                                        bodyStyle: vehicle.Vehicle.Configuration.BodyStyle.ShortDescription,
                                        engine: vehicle.Vehicle.Configuration.Engine.Description,
                                        transmission: vehicle.Vehicle.Configuration.TransmissionType.ShortDescription,
                                        payload: vehicle.Vehicle.Configuration.Payload,
                                        loadLength: vehicle.Vehicle.Configuration.Loadspace,
                                        loadHeight: vehicle.Vehicle.Configuration.LoadFloorToRoof,
                                        mileage: vehicle.Vehicle.CurrentCondition.CurrentOdometerReading.value,
                                        price: vehicle.VendorInformation.Price.value,
                                        usedScheme: vehicle.Vehicle.CurrentCondition.SchemeAvailable.join(" "),
                                        vehicleId: vehicle.Vehicle.Identity.ID,
                                        dealerId: vehicle.VendorInformation.VendorCode,
                                        resultNumber: "",
                                        totalResults: ""
                                    }
                                }(vehicle)),
                                closeOverlay(),
                            vm.compareList.length && vm.currentPage > vm.compareList.length && vm.currentPage--;
                            vm.compareList.length || (vm.expanded = !1,
                                $body.removeClass(CONST.className.bodyLock))
                        }
                    };
                    $scope.$emit("show:modal", modalOptions)
                }
                ,
                vm.nextPage = function() {
                    vm.currentPage++,
                        isValidPage()
                }
                ,
                vm.prevPage = function() {
                    vm.currentPage--,
                        isValidPage()
                }
                ,
                vm.getOrder = function(vehicle) {
                    var vehicleIndex = vm.compareList.indexOf(vehicle.Vehicle.Identity.ID);
                    return vm.currentPage === vehicleIndex + 1 ? vm.currentPage - vehicleIndex : vm.currentPage > vehicleIndex + 1 ? vm.compareList.length - vm.currentPage + vehicleIndex + 2 : vehicleIndex + 2 - vm.currentPage
                }
                ,
                vm.disablePagination = function() {
                    return disableSlide()
                }
                ,
            getCompareListService.refreshCompareList() && $compareOverlayContainer.addClass(CONST.className.stickToBottom),
                vm.compareList = getCompareListService.getCompareList(),
                setCurrentBreakpoints(),
                setCompareOverlayHeight(),
                stickyModelHeader(),
                bindSlideSwipeEvent(),
                __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.compareBody).scroll(function(event) {
                    var currentBreakpoint = __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType()
                        , scrollTop = event.target.scrollTop
                        , tooltips = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.tooltip);
                    "tablet" !== currentBreakpoint && "mobile" !== currentBreakpoint || (vm.hidePagination = scrollTop > 0,
                        $scope.$apply()),
                        tooltips.each(function() {
                            __WEBPACK_IMPORTED_MODULE_9_guxTooltip___default.a.closeTooltip(this)
                        })
                }),
                $staticContainer = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(CONST.selector.compareConfig),
                $window.scroll(function(event) {
                    $compareOverlayContainer.hasClass(CONST.className.overlayActive) || (ipos = $staticContainer.offset().top,
                        wpos = $window.scrollTop(),
                        space = $window.height() - $staticContainer.height(),
                        wpos + space < ipos ? $compareOverlayContainer.addClass(CONST.className.stickToBottom) : $compareOverlayContainer.removeClass(CONST.className.stickToBottom))
                }),
                $window.on("resize", __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function() {
                    setCurrentBreakpoints(),
                        setCompareOverlayHeight(),
                        stickyModelHeader()
                }, 300));
            var ipos, wpos, space, $staticContainer
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, exports) {
        module.exports = hammer
    }
    , function(module, exports) {
        module.exports = heightMeasureUtil
    }
    , function(module, exports) {
        module.exports = guxTooltip
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__)
            , __WEBPACK_IMPORTED_MODULE_2_fordjs__ = __webpack_require__(14)
            , __WEBPACK_IMPORTED_MODULE_2_fordjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fordjs__)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_4_mediaQuery__ = __webpack_require__(6)
            , __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mediaQuery__)
            , __WEBPACK_IMPORTED_MODULE_5_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_5_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_6_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_6_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_7_guxOverlay__ = __webpack_require__(50)
            , __WEBPACK_IMPORTED_MODULE_7_guxOverlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_guxOverlay__)
            , __WEBPACK_IMPORTED_MODULE_8_dynamicDataProvider__ = __webpack_require__(8)
            , __WEBPACK_IMPORTED_MODULE_8_dynamicDataProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_dynamicDataProvider__);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.controller("DealerDetailsController", ["$element", "$scope", "$q", "$timeout", "$routeParams", "$location", "$httpParamSerializer", "GLOBAL_APP_CONFIG", "MAP_NAME", "ngGuxGoogleMapService", "getDealerDetailsService", "getVehicles", function($element, $scope, $q, $timeout, $routeParams, $location, $httpParamSerializer, GLOBAL_APP_CONFIG, MAP_NAME, mapService, dealerService, getVehicles) {
            var mapObject, vm = this, $window = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(window), isMapVisible = __WEBPACK_IMPORTED_MODULE_5_configurationProvider___default.a.get($element).openMapOnLoad, dealerSearchParameters = {}, onDetailsLoad = $q.defer();
            function centerMap() {
                mapObject.map.setCenter(vm.dealer.location),
                    $timeout(mapObject.map.setZoom(14))
            }
            vm.vehicleId = $routeParams.vehicleId,
                vm.dealerId = $routeParams.dealerId,
                vm.mapOptions = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.assign({}, GLOBAL_APP_CONFIG.approvedUsedDealerDetailsConfiguration),
                vm.mapOptions.countryBounds = dealerService.getCountryBounds(vm.mapOptions),
                vm.isMobile = __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.mobile.matches,
                vm.isMapVisible = !vm.isMobile && isMapVisible,
                vm.isMapAvailable = !0,
                vm.dealersResponse = [],
                vm.mapToggle = function(e) {
                    e && !vm.isMobile && e.preventDefault(),
                        vm.isMapVisible = !vm.isMobile && !vm.isMapVisible
                }
                ,
                $scope.$watch("$parent.vm.vehicle", function(payload) {
                    var currentVehicle = __WEBPACK_IMPORTED_MODULE_8_dynamicDataProvider___default.a.getFirstElement(payload);
                    currentVehicle && (vm.dealerInformation = currentVehicle.VendorInformation,
                        vm.phoneNumber = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(vm.dealerInformation.ContactInformation.ContactMethod, {
                            type: "telephone"
                        }),
                        vm.distance = vm.dealerInformation.Distance.value,
                        dealerSearchParameters.DealerID = vm.mapOptions.dealerIdPrefix + vm.dealerInformation.VendorCode,
                        onDetailsLoad.resolve())
                }),
                onDetailsLoad.promise.then(function() {
                    $window.on("resize", __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function() {
                        vm.isMobile = __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.mobile.matches,
                            centerMap(),
                            $scope.$apply()
                    }, 300)),
                        $scope.$watch("vm.isMobile", function(newValue, oldValue) {
                            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(newValue) || newValue === oldValue || (vm.isMapVisible = !newValue)
                        }),
                        dealerService.getDealer(dealerSearchParameters).then(function(dealers) {
                            if (vm.dealersResponse = dealers,
                                vm.dealer = dealers[0],
                                !vm.dealer)
                                return vm.isMapVisible = !1,
                                    void (vm.isMapAvailable = !1);
                            vm.address = dealerService.getNameAndAddress(vm.dealer),
                                vm.openingHours = dealerService.getOpeningHours(vm.dealer),
                                vm.mapUrl = "//maps.google.com?daddr=" + dealerService.getNameAndAddress(vm.dealer, !0) + "&output=classic",
                                mapService.getMap(MAP_NAME).then(function(map) {
                                    (mapObject = map).map.displayDealers(vm.dealersResponse),
                                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.delay(centerMap, 300)
                                })
                        })
                }).then(function() {
                    getVehicles.getVehicleById(vm.vehicleId, vm.dealerId).then(function(vehicle) {
                        vm.contactDealerPayloadQuery = $httpParamSerializer({
                            VehicleId: vm.vehicleId,
                            DealerId: vm.dealerId,
                            ConfigurationUrl: $location.absUrl(),
                            make: __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "Vehicle.Brand.ShortDescription"),
                            model: __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "Vehicle.Model.ShortDescription"),
                            bodyStyle: __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "Vehicle.Configuration.BodyStyle.ShortDescription"),
                            series: __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "Vehicle.Variant.ShortDescription"),
                            color: __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "Vehicle.Configuration.Appearance.ExteriorColor.ShortDescription"),
                            regNo: __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "Vehicle.Identity.RegistrationNumber"),
                            engineTransmission: __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "Vehicle.Configuration.Engine.Description") + __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "Vehicle.Configuration.TransmissionType.ShortDescription"),
                            "price.baseGrossPrice": __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "VendorInformation.Price.value"),
                            "price.netPrice": __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "VendorInformation.NetPrice.value"),
                            "eUsedData.dealerCode": __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "VendorInformation.VendorCode"),
                            "eUsedData.vehicleIDNumber": __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "Vehicle.Identity.VIN"),
                            "eUsedData.dealerStockID": __WEBPACK_IMPORTED_MODULE_6_objectUtil___default.a.get(vehicle, "VendorInformation.VehicleStockID")
                        })
                    })
                }).then(function() {
                    __WEBPACK_IMPORTED_MODULE_7_guxOverlay___default.a.init(),
                        __WEBPACK_IMPORTED_MODULE_2_fordjs___default.a.initSingleComponent("contextualLinks")
                })
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, exports) {
        module.exports = guxOverlay
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_pubsub__ = __webpack_require__(13)
            , __WEBPACK_IMPORTED_MODULE_3_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pubsub__),
            __webpack_require__(0))
            , __WEBPACK_IMPORTED_MODULE_3_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular__)
            , __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a.controller("GalleryController", ["$scope", "$attrs", "$timeout", "ngGuxPreloaderService", function($scope, $attrs, $timeout, preloaderService) {
            var $flexSliderImage, vm = this, RATIO = 1.33, flexSlider = __WEBPACK_IMPORTED_MODULE_3_angular___default.a.element(".flexslider"), config = {
                animation: $attrs.animation,
                slideshow: !1,
                controlNav: !1,
                directionNav: !1,
                touch: !0,
                start: function(slider) {
                    __WEBPACK_IMPORTED_MODULE_3_angular___default.a.element(".totalSlidesNumber").text(slider.count),
                        __WEBPACK_IMPORTED_MODULE_3_angular___default.a.element(".currentSlideNumber").text(slider.currentSlide + 1),
                        function(slider) {
                            slider.count > 1 && __WEBPACK_IMPORTED_MODULE_3_angular___default.a.element(".gallery-controls").addClass("display-controls")
                        }(slider),
                        $timeout(function() {
                            vm.isImagesLoaded && (vm.displayGallery = !0)
                        }, 0)
                },
                after: function(slider) {
                    __WEBPACK_IMPORTED_MODULE_3_angular___default.a.element(".currentSlideNumber").text(slider.currentSlide + 1)
                }
            };
            function getLandscapeImages() {
                var $image, isPortrait = function() {
                    var $image, isPortraitInArray = !1;
                    return $flexSliderImage = flexSlider.find("img"),
                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each($flexSliderImage, function(image) {
                            ($image = __WEBPACK_IMPORTED_MODULE_3_angular___default.a.element(image))[0].width < $image[0].height && (isPortraitInArray = !0)
                        }),
                        isPortraitInArray
                }(), imgArray = [];
                $flexSliderImage = flexSlider.find("img"),
                isPortrait && (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each($flexSliderImage, function(image) {
                    var imgW = ($image = __WEBPACK_IMPORTED_MODULE_3_angular___default.a.element(image))[0].width
                        , imgH = $image[0].height;
                    imgW > imgH && imgArray.push(imgW)
                }),
                    function(imgArray) {
                        if (imgArray.length) {
                            var widthArr = imgArray
                                , maxWidth = widthArr.reduce(function(result, value) {
                                return Math.max(result, value)
                            }, 0);
                            flexSlider.css({
                                maxHeight: Math.floor(maxWidth / RATIO) - 2,
                                overflow: "hidden"
                            })
                        }
                    }(imgArray))
            }
            function handleResolve() {
                getLandscapeImages(),
                    $timeout(function() {
                        flexSlider.flexslider(config),
                            vm.isImagesLoaded = !0,
                            vm.isLoaderVisible = !1
                    }, 500)
            }
            function handleError() {
                vm.imageLoadingError = !0
            }
            vm.isImagesLoaded = !1,
                vm.isLoaderVisible = !1,
                vm.displayGallery = !1,
                vm.imagesArr = [],
                $scope.$watch("vm.images", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function(newValue) {
                    var imageObj;
                    !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(newValue) && newValue.Vehicle && (imageObj = newValue.Vehicle.Configuration.Appearance.ImageRef).length && (vm.getVehicleImgs = imageObj,
                        vm.isLoaderVisible = !0,
                        function(getImages) {
                            vm.vehicleImages = getImages;
                            for (var i = 0; i < getImages.length; i++)
                                vm.imagesArr.push({
                                    tag: "",
                                    urls: [vm.vehicleImages[i].value],
                                    alt: ""
                                });
                            vm.galleryImageSet = vm.imagesArr,
                                config.touch = vm.galleryImageSet.length > 1,
                                preloaderService.preloadImages(vm.galleryImageSet).then(handleResolve, handleError)
                        }(vm.getVehicleImgs))
                }, 10)),
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("window:resize", getLandscapeImages),
                vm.nextSlide = function() {
                    flexSlider.flexslider("next")
                }
                ,
                vm.previousSlide = function() {
                    flexSlider.flexslider("prev")
                }
                ,
                $scope.$on("$destroy", function() {
                    flexSlider.flexslider("destroy"),
                        flexSlider.removeData("flexslider")
                })
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__)
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__),
            __webpack_require__(1))
            , __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_auVehicleAttributeUtil_js__ = __webpack_require__(9)
            , __WEBPACK_IMPORTED_MODULE_5_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_5_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_6_guxDisclosure__ = __webpack_require__(11)
            , __WEBPACK_IMPORTED_MODULE_6_guxDisclosure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_guxDisclosure__)
            , __WEBPACK_IMPORTED_MODULE_7_dynamicDataProvider__ = __webpack_require__(8)
            , __WEBPACK_IMPORTED_MODULE_7_dynamicDataProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_dynamicDataProvider__);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.controller("KeyFactsCO2ChartsController", ["$element", "getVehicles", "$routeParams", "$timeout", function($element, getVehicles, $routeParams, $timeout) {
            var vm = this;
            vm.co2Configuration = __WEBPACK_IMPORTED_MODULE_5_configurationProvider___default.a.get($element),
                vehicleId = $routeParams.vehicleId,
                dealerId = $routeParams.dealerId,
            vehicleId && dealerId && getVehicles.getVehicleById(vehicleId, dealerId).then(function(response) {
                vm.vehicle = __WEBPACK_IMPORTED_MODULE_7_dynamicDataProvider___default.a.getFirstElement(response),
                vm.getVehicleCo2Chart(vm.co2Configuration.co2ClassAttribute, vm.vehicle) || (__WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(".splitter-column").addClass("switch-to-3-col"),
                    __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(".splitter-column:last-child").addClass("hidden"),
                    __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(".splitter-column").addClass("xlarge-4"))
            }).then(function() {
                $timeout(function() {
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach($element.find("[data-disclosure]"), function(element) {
                        var $supElement = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(element);
                        __WEBPACK_IMPORTED_MODULE_6_guxDisclosure___default.a.initOne($supElement, element.getAttribute("data-disclosure"))
                    })
                })
            }),
                vm.getVehicleCo2Chart = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleCo2Chart(attribute, vehicle)
                }
            ;
            var vehicleId, dealerId
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__)
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__),
            __webpack_require__(1))
            , __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_auVehicleAttributeUtil_js__ = __webpack_require__(9)
            , __WEBPACK_IMPORTED_MODULE_5_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_5_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_6_dynamicDataProvider__ = __webpack_require__(8)
            , __WEBPACK_IMPORTED_MODULE_6_dynamicDataProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_dynamicDataProvider__)
            , __WEBPACK_IMPORTED_MODULE_7_guxDisclosure__ = __webpack_require__(11)
            , __WEBPACK_IMPORTED_MODULE_7_guxDisclosure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_guxDisclosure__);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.controller("KeyFactsController", ["$element", "getVehicles", "$routeParams", "$timeout", function($element, getVehicles, $routeParams, $timeout) {
            var vm = this;
            vm.keyFactsConfiguration = __WEBPACK_IMPORTED_MODULE_5_configurationProvider___default.a.get($element),
                vehicleId = $routeParams.vehicleId,
                dealerId = $routeParams.dealerId,
            vehicleId && dealerId && getVehicles.getVehicleById(vehicleId, dealerId).then(function(payload) {
                vm.vehicle = __WEBPACK_IMPORTED_MODULE_6_dynamicDataProvider___default.a.getFirstElement(payload)
            }).then(function() {
                $timeout(function() {
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach($element.find("[data-disclosure]"), function(element) {
                        var $supElement = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(element);
                        __WEBPACK_IMPORTED_MODULE_7_guxDisclosure___default.a.initOne($supElement, element.getAttribute("data-disclosure"))
                    })
                })
            }),
                vm.getVehicleAttribute = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_auVehicleAttributeUtil_js__.a.getAttribute(attribute, vehicle)
                }
                ,
                vm.getVehicleAttributeItems = function(attribute) {
                    return __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleAttributeItems(attribute)
                }
                ,
                vm.getValueWithPrefixAndSuffix = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_auVehicleAttributeUtil_js__.a.getValueWithPrefixAndSuffix(attribute, vehicle)
                }
                ,
                vm.formatItem = function(item, vehicle, attributeKey) {
                    return __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_auVehicleAttributeUtil_js__.a.formatItem(item, vehicle, attributeKey)
                }
                ,
                vm.getVehicleCo2Chart = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleCo2Chart(attribute, vehicle)
                }
            ;
            var vehicleId, dealerId
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_2_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__)
            , __WEBPACK_IMPORTED_MODULE_3_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_3_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_4_mediaQuery__ = __webpack_require__(6)
            , __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mediaQuery__)
            , __WEBPACK_IMPORTED_MODULE_6_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__(9),
            __webpack_require__(1))
            , __WEBPACK_IMPORTED_MODULE_7_guxDisclosure__ = __webpack_require__(11);
        __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_guxDisclosure__);
        __WEBPACK_IMPORTED_MODULE_6_aUsed_approved_used_approved_used_main_module_js__.a.controller("SearchResultsController", ["$scope", "$location", "getVehicles", "filterStoreService", "analyticsService", "searchParamHistoryService", "APP_CONFIG", "BSL_CONFIG", "$timeout", function($scope, $location, getVehicles, filterStoreService, analyticsService, searchParamHistoryService, APP_CONFIG, BSL_CONFIG, $timeout) {
            var searchOptionsPromise, vm = this, $body = __WEBPACK_IMPORTED_MODULE_2_angular___default.a.element("body"), availableFilters = ["distance", "incVATIndicator", "longLatCoordinates", "model", "vehicleCategory", "bodyStyle", "fuelType", "drive", "transmission", "ageOfVehicle", "mileage", "roofHeight", "wheelBase", "exteriorColor", "features"], filtersToMap = ["model", "bodyStyle", "transmission", "drive", "features", "specialFeature", "variant", "marketingScheme", "fuelType", "roofHeight", "wheelBase", "exteriorColor"], requiredFilters = ["vehicleCategory", "distance", "locationId", "longLatCoordinates", "page", "price.minPrice", "price.maxPrice"], isMobileDevice = checkIsMobileDevice(), isMobileChangesApplied = !1;
            function checkIsMobileDevice() {
                return "mobile" === __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType() || "tablet" === __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType() && "portrait" === __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getOrientation() && __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.isIOS()
            }
            function fetchVehicles() {
                var storeParameters, searchOptionsParameters, parameters = (storeParameters = filterStoreService.getAll(),
                    searchOptionsParameters = {
                        locale: BSL_CONFIG.locale,
                        vehicleCategory: APP_CONFIG.vehicleCategory.split(":")[0]
                    },
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.cloneDeep(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign(searchOptionsParameters, storeParameters)));
                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(filtersToMap, function(filterType) {
                    var filterValue = parameters[filterType];
                    filterValue && ("any-option" === filterValue ? delete parameters[filterType] : __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(filterValue) ? parameters[filterType] = function(filterValueArray) {
                        var result = [];
                        if (filterValueArray.length)
                            return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(filterValueArray, function(value) {
                                result.push({
                                    searchTerm: value
                                })
                            }),
                                result
                    }(filterValue) : parameters[filterType] = function(filterValue) {
                        return [{
                            searchTerm: filterValue
                        }]
                    }(filterValue))
                }),
                    $scope.$emit("page:loader", !0),
                    $scope.$broadcast("storeLastLocation"),
                    getVehicles.getVehicleData(parameters).then(function(response) {
                        !function(response) {
                            response && response.status && 200 !== response.status.statusCode && ($scope.$emit("display:serviceError", !0),
                                $scope.$emit("page:loader", !1))
                        }(response),
                            vm.vehicles = response ? response.VehicleInventoryItem : [],
                            $scope.$emit("page:loader", !1)
                    }, function() {
                        $scope.$emit("page:loader", !1),
                            $scope.$emit("display:serviceError", !0)
                    })
            }
            function scrollLock() {
                var isScrollLock = ("mobile" === __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType() || "tablet" === __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getMediaType() && "portrait" === __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.getOrientation() && __WEBPACK_IMPORTED_MODULE_4_mediaQuery___default.a.isIOS()) && vm.isSidebarMobileVisible;
                $body.toggleClass("body-lock", isScrollLock)
            }
            function updateFiltersOptions(searchOptions) {
                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(filterStoreService.getRegistered(), function(filter) {
                    filter.optionsLookupPath && filter.updateOptions && (__WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(searchOptions, filter.optionsLookupPath) ? filter.updateOptions(__WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(searchOptions, filter.optionsLookupPath)) : filter.updateOptions([]))
                })
            }
            function saveToSearch(backendVariable, newFilterState) {
                var urlSafeNewFilterValue, isObject = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(newFilterState);
                isObject ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(newFilterState) && (urlSafeNewFilterValue = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(newFilterState, function(singleFilter) {
                    return encodePlusChar(singleFilter)
                }),
                    $location.search(backendVariable, urlSafeNewFilterValue.join(";"))) : (urlSafeNewFilterValue = encodePlusChar(newFilterState),
                    $location.search(backendVariable, urlSafeNewFilterValue)),
                    function(requestParam) {
                        if (!isMobileDevice && "vehicleCategory" === requestParam) {
                            var searchParams = $location.search()
                                , sliderFilterDefaults = getSliderDefaults();
                            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forOwn(searchParams, function(value, key) {
                                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(requiredFilters, key) || (__WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(sliderFilterDefaults, key) ? filterStoreService.setValue(key, __WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(sliderFilterDefaults, key)) : filterStoreService.setValue(key, null),
                                    $location.search(key, null))
                            }),
                                filterStoreService.discardChanges()
                        }
                    }(backendVariable),
                0 !== __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.size(newFilterState) && (newFilterState || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNull(backendVariable)) || $location.search(backendVariable, null)
            }
            function getSliderDefaults() {
                for (var $el = __WEBPACK_IMPORTED_MODULE_2_angular___default.a.element("[data-au-gux-slider-filter]"), defaults = {}, i = 0; i < $el.length; i++) {
                    var item = $el[i]
                        , data = item.dataset
                        , label = data.secondHandleBackendVar.split(".")[0];
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(requiredFilters, data.secondHandleBackendVar) || (defaults[label] = {
                        min: data.defaultMin,
                        max: data.defaultMax
                    })
                }
                return defaults
            }
            function encodePlusChar(val) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(val) ? val.replace("+", "_") : val
            }
            function decodePlusChar(val) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(val) ? val.replace("_", "+") : val
            }
            vm.isSidebarHidden = !1,
                vm.isSidebarMobileVisible = !1,
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("mediaQuery:change", function() {
                    isMobileDevice = checkIsMobileDevice()
                }),
                vm.viewDetails = function(vehicle) {
                    var data = {
                        selectedVehicle: vehicle,
                        vehicleId: vehicle.uniqueId
                    };
                    Modernizr.sessionstorage && sessionStorage.setItem("vehicleQueryData", JSON.stringify(data))
                }
                ,
                vm.sideBarToggle = function(e) {
                    e.preventDefault(),
                        vm.isSidebarHidden = !vm.isSidebarHidden
                }
                ,
                vm.sideBarMobileToggle = function() {
                    vm.isSidebarMobileVisible = !vm.isSidebarMobileVisible,
                        scrollLock()
                }
                ,
                vm.discardChanges = function() {
                    vm.isSidebarMobileVisible = !vm.isSidebarMobileVisible,
                    searchParamHistoryService.getLastItem() && filterStoreService.setAllFilters(searchParamHistoryService.getLastItem()),
                        filterStoreService.discardChanges(),
                        scrollLock()
                }
                ,
                vm.applyChanges = function() {
                    filterStoreService.applyChanges(),
                        vm.isSidebarMobileVisible = !vm.isSidebarMobileVisible,
                        __WEBPACK_IMPORTED_MODULE_2_angular___default.a.element(".content").toggleClass("sidebar-open"),
                        isMobileChangesApplied = !0,
                        scrollLock()
                }
                ,
                function() {
                    var isSortOrder, mergedPayload, initialSearchParams, currentSearchParams, filterState, locationSearch, searchOptionsParameters = {
                        locale: BSL_CONFIG.locale,
                        vehicleType: APP_CONFIG.vehicleCategory.split(":")[1]
                    }, selectedFilter = [], uniqueFilterCollection = [];
                    function assignPromiseData(backendVariable, filterType) {
                        searchOptionsPromise.then(function() {
                            var lastSelectedFilterType, filterName, filterValue, filterList, filtersState = filterStoreService.getAll(), newFilterState = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNull(backendVariable) ? "" : __WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(filtersState, backendVariable);
                            "pagination.startingRecord" !== backendVariable && filterStoreService.setValue("pagination.startingRecord", 0),
                                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNull(backendVariable) ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(filterStoreService.getRegistered(), function(filter, filterKey) {
                                    saveToSearch(filterKey, __WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(filtersState, filterKey))
                                }) : (analyticsService.setSearchRefinedState(),
                                    saveToSearch(backendVariable, newFilterState)),
                                searchParamHistoryService.addLastItem(filtersState),
                                fetchVehicles(),
                                lastSelectedFilterType = filterType,
                                filterName = backendVariable,
                                filterValue = newFilterState,
                                filterList = filterStoreService.getAll(),
                                analyticsService.analyticsFilterValues.lastSelectedFilterType = lastSelectedFilterType,
                                analyticsService.analyticsFilterValues.filterName = filterName,
                                analyticsService.analyticsFilterValues.filterValue = filterValue,
                                analyticsService.analyticsFilterValues.filterList = filterList
                        })
                    }
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forOwn($location.search(), function(value, key) {
                        var urlDecodedValue, array = value.split(";"), useAsArray = array.length > 1;
                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(availableFilters, key) && (urlDecodedValue = useAsArray ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(array, function(arrayItem) {
                            return decodePlusChar(arrayItem)
                        }) : decodePlusChar(value),
                            filterStoreService.setValue(key, urlDecodedValue))
                    }),
                        initialSearchParams = ["distance", "locationId", "longLatCoordinates", "page"],
                        currentSearchParams = Object.keys($location.search()),
                        filterState = filterStoreService.getAll(),
                        locationSearch = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.extend({}, $location.search()),
                    currentSearchParams.length > initialSearchParams.length && (mergedPayload = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forOwn(locationSearch, function(val) {
                        decodePlusChar(val)
                    }), filterState),
                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forOwn(mergedPayload, function(value, key) {
                            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(initialSearchParams, key) || filterStoreService.setValue(key, value)
                        })),
                        $scope.$$postDigest(function() {
                            var lastFilter = searchParamHistoryService.getLastItem();
                            lastFilter && filterStoreService.setAllFilters(lastFilter),
                                fetchVehicles()
                        }),
                        isMobileDevice ? filterStoreService.watchAll(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function(allFiltersState, backendVariable, filterType) {
                            isSortOrder = "resultOrder" === backendVariable,
                                function(isVehicleType, backendVariable) {
                                    if (isVehicleType && uniqueFilterCollection.length)
                                        for (var i = 0; i < uniqueFilterCollection.length; i++) {
                                            var sliderFilterDefaults = getSliderDefaults()
                                                , path = uniqueFilterCollection[i];
                                            __WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(sliderFilterDefaults, path) ? filterStoreService.setValue(path, __WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(sliderFilterDefaults, path)) : "vehicleCategory" !== path && filterStoreService.update(path, null),
                                                filterStoreService.discardChanges()
                                        }
                                    else
                                        selectedFilter.push(backendVariable),
                                            uniqueFilterCollection = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.uniq(selectedFilter, function(filter) {
                                                return filter
                                            })
                                }("vehicleCategory" === backendVariable, backendVariable),
                            (isMobileChangesApplied || isSortOrder) && (assignPromiseData(backendVariable, filterType),
                                selectedFilter = [],
                                uniqueFilterCollection = [],
                                isMobileChangesApplied = !1)
                        }), 500) : filterStoreService.watchAll(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function(allFiltersState, backendVariable, filterType) {
                            assignPromiseData(backendVariable, filterType)
                        }), 500),
                        searchOptionsPromise = getVehicles.getSearchOptions(searchOptionsParameters).then(function(searchOptions) {
                            var vehicleTypeOptions, vehicleCategory = __WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(filterStoreService.getAll(), "vehicleCategory");
                            return vehicleCategory ? (vehicleTypeOptions = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(searchOptions.vehicles, function(vehicleType) {
                                return vehicleCategory === vehicleType.searchTerm
                            }),
                                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(searchOptions, vehicleTypeOptions)) : searchOptions
                        }).then(updateFiltersOptions),
                        filterStoreService.watch("vehicleCategory", function(newVehicleType) {
                            searchOptionsPromise = getVehicles.getSearchOptions(searchOptionsParameters).then(function(searchOptions) {
                                var vehicleTypeOptions = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(searchOptions.vehicles, function(vehicleType) {
                                    return newVehicleType === vehicleType.searchTerm
                                });
                                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.merge(searchOptions, vehicleTypeOptions)
                            }).then(updateFiltersOptions)
                        })
                }()
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_6_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_isAuthor__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(10))
            , __WEBPACK_IMPORTED_MODULE_1_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isAuthor__)
            , __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_3_guxSecondaryNavigation__ = __webpack_require__(56)
            , __WEBPACK_IMPORTED_MODULE_3_guxSecondaryNavigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_guxSecondaryNavigation__);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a.controller("SecondaryNavigationController", ["$scope", "$location", function($scope, $location) {
            var vm = this;
            $scope.aUConfiguration.approvedUsedSecondaryNavReference && function() {
                var auSecondaryNavReference = $scope.aUConfiguration.approvedUsedSecondaryNavReference
                    , labelBackToSearch = auSecondaryNavReference.backToSearchResultsLabel
                    , labelCompareVehicles = auSecondaryNavReference.compareButtonLabel
                    , labelStartNewSearch = auSecondaryNavReference.startNewSearchLabel
                    , urlNewSearch = __WEBPACK_IMPORTED_MODULE_1_isAuthor___default.a.keepWcmMode(auSecondaryNavReference.startNewSearchPath)
                    , secondaryNavs = __WEBPACK_IMPORTED_MODULE_3_guxSecondaryNavigation___default.a.instances;
                function setLabelsAndUrls(isRootPath) {
                    vm.currentBackButtonLabel = isRootPath ? labelStartNewSearch : labelBackToSearch,
                        vm.currentBackButtonUrl = isRootPath ? urlNewSearch : "#back",
                        vm.compareButtonLabel = labelCompareVehicles
                }
                vm.backToResults = function(e) {
                    var isNavOpen = secondaryNavs[0].expandedVerticalNav;
                    $scope.isRootPath || (e.preventDefault(),
                        $location.url($scope.getBackUrl()),
                    secondaryNavs && secondaryNavs.length && isNavOpen && secondaryNavs[0].handleSecondaryNavToggle(e))
                }
                    ,
                    vm.isBackButtonAvailable = labelBackToSearch,
                    vm.isCompareButtonAvailable = labelCompareVehicles,
                    $scope.$watch("isRootPath", setLabelsAndUrls),
                    setLabelsAndUrls($scope.isRootPath)
            }()
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, exports) {
        module.exports = guxSecondaryNavigation
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_2_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__)
            , __WEBPACK_IMPORTED_MODULE_3_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_3_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_5_aUsed_utils_auVehicleAttributeUtil_js__ = __webpack_require__(9)
            , __WEBPACK_IMPORTED_MODULE_6_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_6_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_7_dynamicDataProvider__ = __webpack_require__(8)
            , __WEBPACK_IMPORTED_MODULE_7_dynamicDataProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_dynamicDataProvider__);
        __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a.controller("VehicleDetailsController", ["$q", "$scope", "getVehicles", "$routeParams", "analyticsService", "getCompareListService", "GLOBAL_APP_CONFIG", "APP_CONFIG", "$sce", function($q, $scope, getVehicles, $routeParams, analyticsService, getCompareListService, GLOBAL_APP_CONFIG, APP_CONFIG, $sce) {
            var vm = this
                , CONST = {
                selector: {
                    compareConfig: "#compare-vehicles",
                    vehicleDetails: "#vehicleDetails",
                    vehicleAttr: "#vehicleDetails [data-vehicle-attributes]",
                    galleryConfig: "#gallery-eused-configuration"
                },
                className: {
                    compareDisabled: "disabled"
                }
            };
            function getAosAPI() {
                var autoPlay = vm.galleryConfiguration.isAutoPlayEnabled
                    , language = vm.galleryConfiguration.language
                    , api = ""
                    , vehicleIdAttrItems = vm.getVehicleAttributeItems(vm.galleryConfiguration.vehicleId);
                if (vehicleIdAttrItems) {
                    var vehicleIdValue = vm.mapVehicleData(vm.vehicle, vehicleIdAttrItems[0].backendVariable);
                    vehicleIdValue && (api = vm.galleryConfiguration.servicePath + vehicleIdValue + "?autoPlay=" + autoPlay + "&language=" + language)
                }
                return api
            }
            function handleTokenFetchAndAOSFlow() {
                getVehicles.fetchAOSToken().then(function(response) {
                    if (response.data) {
                        var token = response.data;
                        getVehicles.setAOSToken(token),
                            getVehicles.getAutoOnShowDetails(getAosAPI()).then(galleryDataRetrieved, function() {
                                vm.replaceAOSGallery = !1
                            })
                    }
                }, function() {
                    vm.replaceAOSGallery = !1
                })
            }
            function galleryDataRetrieved(response) {
                var payload = response && response.data ? response.data : null;
                response && response.data.images && getVehicles.setAOSImage(response.data.images),
                    payload && payload.player && payload.imageGallery ? (vm.autoOnShowGalleryHtml = $sce.trustAsHtml(payload.player + payload.imageGallery),
                        vm.replaceAOSGallery = !0) : vm.replaceAOSGallery = !1
            }
            function getCompareCtaLabel(type) {
                var result = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(vm.vehicleDetailsConfiguration.ctaLinkItems, function(item) {
                    return item.ctaContextType === type
                });
                return result && Object.prototype.hasOwnProperty.call(result, "linkLabel") ? result.linkLabel : ""
            }
            function handleAnalytics() {
                return {
                    vehicleCategory: APP_CONFIG.vehicleCategory.split(":")[1].toLowerCase(),
                    nameplate: vm.vehicle.Vehicle.Model.ShortDescription,
                    modelYear: vm.vehicle.Vehicle.History.YearOfProduction,
                    modelSeries: vm.vehicle.Vehicle.Variant.ShortDescription,
                    exteriorColour: vm.vehicle.Vehicle.Configuration.Appearance.ExteriorColor.ShortDescription,
                    interiorTrim: vm.vehicle.Vehicle.Configuration.Appearance.InteriorColor.ShortDescription,
                    bodyStyle: vm.vehicle.Vehicle.Configuration.BodyStyle.ShortDescription,
                    engine: vm.vehicle.Vehicle.Configuration.Engine.Description,
                    transmission: vm.vehicle.Vehicle.Configuration.TransmissionType.ShortDescription,
                    payload: vm.vehicle.Vehicle.Configuration.Payload,
                    loadLength: vm.vehicle.Vehicle.Configuration.Loadspace,
                    loadHeight: vm.vehicle.Vehicle.Configuration.LoadFloorToRoof,
                    mileage: vm.vehicle.Vehicle.CurrentCondition.CurrentOdometerReading.value,
                    price: vm.vehicle.VendorInformation.Price.value,
                    usedScheme: vm.vehicle.Vehicle.CurrentCondition.SchemeAvailable.join(" "),
                    dealerId: $routeParams.dealerId,
                    vehicleId: $routeParams.vehicleId,
                    resultNumber: analyticsService.resultNumber,
                    totalResults: analyticsService.totalResults
                }
            }
            vm.vehicleAttr = __WEBPACK_IMPORTED_MODULE_2_angular___default.a.element(CONST.selector.vehicleAttr).data("vehicle-attributes"),
                vm.vehicleDetailsConfiguration = __WEBPACK_IMPORTED_MODULE_6_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_2_angular___default.a.element(CONST.selector.vehicleDetails)),
                vm.galleryConfiguration = __WEBPACK_IMPORTED_MODULE_6_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_2_angular___default.a.element(CONST.selector.galleryConfig)),
                vm.co2Charts = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(GLOBAL_APP_CONFIG.approvedUsedCo2Charts) ? {} : GLOBAL_APP_CONFIG.approvedUsedCo2Charts,
                vm.serialisedCo2Charts = window.encodeURIComponent(JSON.stringify(vm.co2Charts)),
                vm.vehicleId = $routeParams.vehicleId,
                vm.dealerId = $routeParams.dealerId,
                vm.compareList = getCompareListService.getCompareList(),
                vm.compareLimit = getCompareListService.getCompareVehicleMaxLimit(),
                vm.removeLabel = getCompareCtaLabel("remove-compare"),
                vm.compareLabel = getCompareCtaLabel("add-to-compare"),
                vm.vehicleUniqueId = parseInt($routeParams.vehicleId, 10),
                vm.replaceAOSGallery = !1,
                vm.autoOnShowGalleryHtml = "",
                function() {
                    var vehicleId = $routeParams.vehicleId
                        , dealerId = $routeParams.dealerId
                        , $defer = $q.defer();
                    analyticsService.nameplate = $q.defer(),
                    vehicleId && dealerId && getVehicles.getVehicleById(vehicleId, dealerId).then(function(payload) {
                        var response = __WEBPACK_IMPORTED_MODULE_7_dynamicDataProvider___default.a.getFirstElement(payload);
                        response ? (function(response) {
                            response && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(response.Vehicle) && $scope.$emit("display:serviceError", !0)
                        }(response),
                            vm.vehicle = response,
                            vm.scheme = __WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.getPropertyByString("Vehicle.CurrentCondition.SchemeAvailable[0]", response).toLocaleLowerCase(),
                            vm.serialisedVehicle = window.encodeURIComponent(JSON.stringify(vm.vehicle)),
                            $defer.resolve(),
                            analyticsService.nameplate.resolve(vm.vehicle.Vehicle.Model.ShortDescription),
                            vm.vehicle.Vehicle.Configuration.Appearance.IsAutoOnShow ? (vm.replaceAOSGallery = !0,
                                function() {
                                    if (vm.galleryConfiguration.serviceOnOff) {
                                        var aosURL = getAosAPI();
                                        if (!aosURL)
                                            return void (vm.replaceAOSGallery = !1);
                                        getVehicles.getStoredAOSToken() ? getVehicles.getAutoOnShowDetails(aosURL).then(galleryDataRetrieved, function(status) {
                                            401 === status ? handleTokenFetchAndAOSFlow() : vm.replaceAOSGallery = !1
                                        }) : handleTokenFetchAndAOSFlow()
                                    } else
                                        vm.replaceAOSGallery = !1
                                }()) : vm.replaceAOSGallery = !1) : $scope.$emit("display:serviceError", !0)
                    });
                    return $defer.promise
                }().then(function() {
                    analyticsService.lastView.name = "vehicleDetails",
                        analyticsService.setReturnedFromVehicleDetails(),
                        analyticsService.track("vehicleDetailsOpen", handleAnalytics())
                }),
                vm.mapVehicleData = function(vehicle, attr) {
                    return __WEBPACK_IMPORTED_MODULE_3_objectUtil___default.a.get(vehicle, attr)
                }
                ,
                vm.getVehicleAttribute = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_5_aUsed_utils_auVehicleAttributeUtil_js__.a.getAttribute(attribute, vehicle)
                }
                ,
                vm.getVehicleAttributeItems = function(attribute) {
                    return __WEBPACK_IMPORTED_MODULE_5_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleAttributeItems(attribute)
                }
                ,
                vm.getValueWithPrefixAndSuffix = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_5_aUsed_utils_auVehicleAttributeUtil_js__.a.getValueWithPrefixAndSuffix(attribute, vehicle)
                }
                ,
                vm.formatItem = function(item, vehicle, attributeKey) {
                    return __WEBPACK_IMPORTED_MODULE_5_aUsed_utils_auVehicleAttributeUtil_js__.a.formatItem(item, vehicle, attributeKey)
                }
                ,
                vm.getVehicleCo2Chart = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_5_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleCo2Chart(attribute, vehicle)
                }
                ,
                vm.getVehicleSchemeImg = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_5_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleSchemeImgs(attribute, vehicle)
                }
                ,
                vm.getOwnerAttribute = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_5_aUsed_utils_auVehicleAttributeUtil_js__.a.getOwnerAttribute(attribute, vehicle)
                }
                ,
                vm.isCompare = function(type) {
                    return vm.vehicleDetailsConfiguration.displayCompare && vm.compareLabel && vm.removeLabel && "add-to-compare" === type
                }
                ,
                vm.vehicleInCompare = function(vehicleUniqueId) {
                    return -1 !== vm.compareList.indexOf(vehicleUniqueId)
                }
                ,
                vm.ctaLabel = function(vehicleUniqueId) {
                    return vm.vehicleInCompare(vehicleUniqueId) ? vm.removeLabel : vm.compareLabel
                }
                ,
                vm.onDetailsCompare = function(event) {
                    var element = __WEBPACK_IMPORTED_MODULE_2_angular___default.a.element(event.target)
                        , compareVehicleConfig = __WEBPACK_IMPORTED_MODULE_6_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_2_angular___default.a.element(CONST.selector.compareConfig))
                        , vehicleQuery = {
                        vehicleId: parseInt($routeParams.vehicleId, 10),
                        dealerId: $routeParams.dealerId
                    }
                        , modalOptions = {
                        show: !0,
                        content: compareVehicleConfig.errorObject.maxVehicleLimitMsg,
                        closeLabel: compareVehicleConfig.errorObject.okLabel
                    };
                    element.hasClass(CONST.className.compareDisabled) ? $scope.$emit("show:modal", modalOptions) : vm.compareList.length <= vm.compareLimit && (vm.vehicleInCompare(vehicleQuery.vehicleId) ? (getCompareListService.removeCompareList(vehicleQuery),
                        analyticsService.track("removeCompare", handleAnalytics())) : getCompareListService.addCompareList(vehicleQuery, function() {
                        analyticsService.track("addToCompare", handleAnalytics())
                    }))
                }
                ,
                $scope.$on("show:video", function(event, modal) {
                    $scope.videoOptions = modal
                }),
                vm.close = function() {
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default()("#myModal").hide()
                }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_4_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_2_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_4_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_4_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_5_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_6_aUsed_utils_auVehicleAttributeUtil_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_objectUtil__),
            __webpack_require__(9))
            , __WEBPACK_IMPORTED_MODULE_7_mediaQuery__ = __webpack_require__(6)
            , __WEBPACK_IMPORTED_MODULE_7_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_mediaQuery__);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.controller("VehicleListController", ["$scope", "$element", "$sce", "$location", "analyticsService", "filterStoreService", "getVehicles", "getCompareListService", "APP_CONFIG", function($scope, $element, $sce, $location, analyticsService, filterStoreService, getVehiclesService, getCompareListService, APP_CONFIG) {
            var breakpoint, vm = this, CONST = {
                selector: {
                    compareConfig: "#compare-vehicles"
                },
                className: {
                    compareDisabled: "disabled"
                }
            }, maxPagesPerRequest = APP_CONFIG.vehiclePaginationMaxRecordsPages, maxRecords = APP_CONFIG.vehiclePaginationItemsPerPage * maxPagesPerRequest, currentResponseOffset = 0, isNewPageRequest = !1, isPreviousPageRequest = !1, $window = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window), imageRatio = 1.7897, xlargeWidth = 290, desktopWidth = 225, tabletWidth = 270, mobileWidth = 420;
            function getCompareLabel(type) {
                var result = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(vm.tileConfiguration.ctaAttributes, function(item) {
                    return item.ctaContextType === type
                });
                return result && Object.prototype.hasOwnProperty.call(result, "linkLabel") ? result.linkLabel : ""
            }
            function getVehicleAnalyticsdata(vehicle) {
                var vehicleId, matchedVehicle, compareDataSet, pickedVehicleIndex = vm.vehicles.indexOf(vehicle) % vm.maxRecordsPerPage + 1, vehicleData = (vehicleId = vehicle.Vehicle.Identity.ID,
                    compareDataSet = getCompareListService.getCompareDataSet(),
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(compareDataSet, function(item) {
                        matchedVehicle = item.Vehicle.Identity.ID === vehicleId ? item : ""
                    }),
                matchedVehicle || "");
                return {
                    vehicleId: vehicle.Vehicle.Identity.ID,
                    dealerId: vehicle.VendorInformation.VendorCode,
                    nameplate: vehicle.Vehicle.Model.ShortDescription,
                    modelYear: vehicle.Vehicle.History.YearOfProduction,
                    modelSeries: vehicle.Vehicle.Variant.ShortDescription,
                    exteriorColour: vehicle.Vehicle.Configuration.Appearance.ExteriorColor.ShortDescription,
                    interiorTrim: vehicle.Vehicle.Configuration.Appearance.InteriorColor.ShortDescription,
                    bodyStyle: vehicle.Vehicle.Configuration.BodyStyle.ShortDescription,
                    engine: vehicle.Vehicle.Configuration.Engine.Description,
                    transmission: vehicle.Vehicle.Configuration.TransmissionType.ShortDescription,
                    payload: vehicleData ? vehicleData.Vehicle.Configuration.Payload : "",
                    loadLength: vehicle.Vehicle.Configuration.Loadspace,
                    loadHeight: vehicleData ? vehicleData.Vehicle.Configuration.LoadFloorToRoof : "",
                    mileage: vehicle.Vehicle.CurrentCondition.CurrentOdometerReading.value,
                    price: vehicle.VendorInformation.Price.value,
                    usedScheme: vehicle.Vehicle.CurrentCondition.SchemeAvailable.join(" "),
                    resultNumber: vm.maxRecordsPerPage * vm.currentPage + pickedVehicleIndex,
                    totalResults: vm.totalMatches
                }
            }
            function getNewVehicleOffset(isBackwards) {
                var startingRecord = vm.recordsViewed;
                isBackwards ? (startingRecord = vm.recordsViewed - maxRecords,
                    currentResponseOffset = maxPagesPerRequest - 1) : currentResponseOffset = 0,
                    vm.startingRecord = startingRecord,
                    filterStoreService.update("pagination.startingRecord", startingRecord)
            }
            function updateVehicleList(offset, isPageUpdate) {
                var reset = !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(isPageUpdate) && !1 === isPageUpdate && !isPreviousPageRequest
                    , start = reset ? 0 : offset * vm.maxRecordsPerPage
                    , end = start + vm.maxRecordsPerPage;
                reset && !isNewPageRequest && (vm.currentPage = 0,
                    currentResponseOffset = 0),
                    vm.vehicleList = vm.vehicles ? vm.vehicles.slice(start, end) : vm.vehicles,
                    isNewPageRequest = !1,
                    isPreviousPageRequest = !1
            }
            function imageHeight(imageBreakpoint) {
                window.devicePixelRatio > 1 && (imageBreakpoint *= 2),
                    vm.imageWidth = imageBreakpoint,
                    vm.imageHeight = Math.round(imageBreakpoint / imageRatio, 0)
            }
            function setCurrentBreakpoints(onResizeEvent) {
                var currentBreakpoint = __WEBPACK_IMPORTED_MODULE_7_mediaQuery___default.a.getMediaType();
                breakpoint !== currentBreakpoint && (imageHeight("xlarge" === currentBreakpoint ? xlargeWidth : "desktop" === currentBreakpoint ? desktopWidth : "tablet" === currentBreakpoint ? tabletWidth : mobileWidth),
                onResizeEvent && $scope.$apply(),
                    breakpoint = currentBreakpoint)
            }
            function getAnalyticsData() {
                return {
                    vehicleCategory: APP_CONFIG.vehicleCategory.split(":")[1].toLowerCase(),
                    totalResults: vm.totalMatches,
                    searchRadius: filterStoreService.get("distance").distance,
                    pageNumber: vm.currentPage + 1,
                    waitForLocationToBeResolved: !0,
                    lastView: "searchResults"
                }
            }
            vm.maxRecordsPerPage = APP_CONFIG.vehiclePaginationItemsPerPage,
                vm.tileConfiguration = __WEBPACK_IMPORTED_MODULE_4_configurationProvider___default.a.get($element),
                vm.currentPage = 0,
                vm.numberOfPages = 0,
                vm.totalMatches = null,
                vm.startingRecord = 0,
                vm.recordsViewed = vm.maxRecordsPerPage * (vm.currentPage + 1),
                vm.searchResultsLabel = APP_CONFIG.searchResultsLabel,
                vm.compareList = getCompareListService.getCompareList(),
                vm.compareLimit = getCompareListService.getCompareVehicleMaxLimit(),
                vm.removeLabel = getCompareLabel("remove-compare"),
                vm.compareLabel = getCompareLabel("add-to-compare"),
                vm.getVehicleAttribute = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_6_aUsed_utils_auVehicleAttributeUtil_js__.a.getAttribute(attribute, vehicle)
                }
                ,
                vm.getValueWithPrefixAndSuffix = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_6_aUsed_utils_auVehicleAttributeUtil_js__.a.getValueWithPrefixAndSuffix(attribute, vehicle)
                }
                ,
                vm.getVehicleAttributeItems = function(attribute) {
                    return __WEBPACK_IMPORTED_MODULE_6_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleAttributeItems(attribute)
                }
                ,
                vm.formatItem = function(item, vehicle, attributeKey) {
                    return __WEBPACK_IMPORTED_MODULE_6_aUsed_utils_auVehicleAttributeUtil_js__.a.formatItem(item, vehicle, attributeKey)
                }
                ,
                vm.getVehicleCo2Chart = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_6_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleCo2Chart(attribute, vehicle)
                }
                ,
                vm.getVehicleSchemeImg = function(attribute, vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_6_aUsed_utils_auVehicleAttributeUtil_js__.a.getVehicleSchemeImgs(attribute, vehicle)
                }
                ,
                vm.getHrefPath = function(vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_6_aUsed_utils_auVehicleAttributeUtil_js__.a.getHrefPath(vm.facetsQuery, vehicle)
                }
                ,
                vm.pickVehicle = function(vehicle, $event) {
                    if (vehicle && vehicle.isSafeUrl) {
                        var pickedVehicleIndex = vm.vehicles.indexOf(vehicle) + 1;
                        analyticsService.totalResults = vm.totalMatches,
                            analyticsService.resultNumber = vm.startingRecord + pickedVehicleIndex
                    } else
                        $event.preventDefault()
                }
                ,
                vm.nextPage = function() {
                    vm.currentPage++,
                        vm.recordsViewed = vm.maxRecordsPerPage * vm.currentPage,
                        currentResponseOffset++,
                        vm.currentPage % maxPagesPerRequest == 0 && vm.numberOfPages > maxPagesPerRequest ? (isNewPageRequest = !0,
                            getNewVehicleOffset()) : updateVehicleList(currentResponseOffset),
                        analyticsService.track("paginationClicked", getAnalyticsData())
                }
                ,
                vm.prevPage = function() {
                    vm.currentPage--,
                        vm.recordsViewed = vm.maxRecordsPerPage * (vm.currentPage + 1),
                        currentResponseOffset--,
                        (vm.currentPage + 1) % maxPagesPerRequest == 0 && vm.numberOfPages > maxPagesPerRequest ? (isNewPageRequest = !0,
                            isPreviousPageRequest = !0,
                            getNewVehicleOffset(!0)) : updateVehicleList(currentResponseOffset),
                        analyticsService.track("paginationClicked", getAnalyticsData())
                }
                ,
                vm.toTrusted = function(htmlCode) {
                    return $sce.trustAsHtml(htmlCode)
                }
                ,
                vm.isCompare = function(type) {
                    return vm.tileConfiguration.displayCompare && vm.compareLabel && vm.removeLabel && "add-to-compare" === type
                }
                ,
                vm.vehicleInCompare = function(vehicleUniqueId) {
                    return -1 !== vm.compareList.indexOf(vehicleUniqueId)
                }
                ,
                vm.ctaLabel = function(vehicleUniqueId) {
                    return vm.vehicleInCompare(vehicleUniqueId) ? vm.removeLabel : vm.compareLabel
                }
                ,
                vm.onCompare = function(vehicle, event) {
                    var element = __WEBPACK_IMPORTED_MODULE_2_angular___default.a.element(event.target)
                        , compareVehicleConfig = __WEBPACK_IMPORTED_MODULE_4_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_2_angular___default.a.element(CONST.selector.compareConfig))
                        , vehicleQuery = {
                        vehicleId: vehicle.Vehicle.Identity.ID,
                        dealerId: vehicle.VendorInformation.VendorCode
                    }
                        , modalOptions = {
                        show: !0,
                        content: compareVehicleConfig.errorObject.maxVehicleLimitMsg,
                        closeLabel: compareVehicleConfig.errorObject.okLabel
                    };
                    element.hasClass(CONST.className.compareDisabled) ? $scope.$emit("show:modal", modalOptions) : vm.compareList.length <= vm.compareLimit && (vm.vehicleInCompare(vehicleQuery.vehicleId) ? (analyticsService.track("removeCompare", getVehicleAnalyticsdata(vehicle)),
                        getCompareListService.removeCompareList(vehicleQuery)) : getCompareListService.addCompareList(vehicleQuery, function() {
                        analyticsService.track("addToCompare", getVehicleAnalyticsdata(vehicle))
                    }))
                }
                ,
                paginationData = filterStoreService.get("pagination"),
                startingRecord = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(paginationData.pagination) ? 0 : paginationData.pagination.startingRecord,
                capacity = maxRecords / vm.maxRecordsPerPage,
                vm.currentPage = $location.search().page - 1 || 0,
                currentResponseOffset = vm.currentPage % capacity,
                isPreviousPageRequest = !0,
                filterStoreService.setValue("pagination.maxRecords", maxRecords),
                filterStoreService.setValue("pagination.startingRecord", startingRecord),
                setCurrentBreakpoints(),
                $window.on("resize", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(setCurrentBreakpoints, 300)),
                $scope.$watch("vm.currentPage", function() {
                    $location.search("page", vm.currentPage + 1),
                        vm.facetsQuery = filterStoreService.getActiveFiltersQuery()
                }),
                $scope.$watch(function() {
                    return getVehiclesService.getVehiclesTimestamp()
                }, function(newValue, oldValue) {
                    var vehiclesFromService, vehiclesCount, totalNumberItems, thousandsDelimiter;
                    newValue !== oldValue && (vm.facetsQuery = filterStoreService.getActiveFiltersQuery(),
                    (vehiclesFromService = getVehiclesService.getVehicles()).VehicleInventoryItem && (vehiclesCount = vehiclesFromService.totalMatches || vehiclesFromService.VehicleInventoryItem.length),
                        vm.totalMatches = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(vehiclesCount) ? 0 : vehiclesCount,
                        thousandsDelimiter = vm.searchResultsLabel.thousandsDelimiter,
                        1 === vm.totalMatches ? vm.totalNumberLabel = vm.searchResultsLabel.singleSearchResultLabel.replace("1", "<span>1</span>") : vm.totalMatches ? (totalNumberItems = vm.totalMatches.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsDelimiter),
                            vm.totalNumberLabel = vm.searchResultsLabel.pluralSearchResultsLabel.replace("#", "<span>" + totalNumberItems + "</span>")) : vm.totalNumberLabel = vm.searchResultsLabel.pluralSearchResultsLabel.replace("#", "<span>" + vm.totalMatches + "</span>"),
                        vm.vehicles = vehiclesFromService.VehicleInventoryItem,
                        vm.numberOfPages = Math.ceil(vehiclesCount / vm.maxRecordsPerPage) || 1,
                        updateVehicleList(currentResponseOffset, !1),
                        analyticsService.track("trackSearch", getAnalyticsData()))
                });
            var paginationData, startingRecord, capacity
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
            __webpack_require__(2))
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__),
            __webpack_require__(1))
            , __WEBPACK_IMPORTED_MODULE_4_dynamicDataProvider__ = __webpack_require__(8)
            , __WEBPACK_IMPORTED_MODULE_4_dynamicDataProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_dynamicDataProvider__);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.controller("PDFDownloadController", ["$scope", "$attrs", "pdfDownloadService", "getVehicles", "GLOBAL_APP_CONFIG", "getDealerDetailsService", "$routeParams", function($scope, $attrs, pdfDownloadService, getVehicles, GLOBAL_APP_CONFIG, dealerService, $routeParams) {
            var vm = this
                , vehicleId = $routeParams.vehicleId
                , dealerId = $routeParams.dealerId
                , mapOptions = {}
                , dealerSearchParameters = {}
                , dealer = {};
            vm.getPDFDownload = function(environmentURL, templateURL, nodeJSServiceURL, pdfConfigJSON, imageAOSGallery) {
                vm.openingHrsCtrl = "",
                    mapOptions = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.assign(mapOptions, GLOBAL_APP_CONFIG.approvedUsedDealerDetailsConfiguration),
                    dealerSearchParameters.DealerID = mapOptions.dealerIdPrefix + $routeParams.dealerId,
                    getVehicles.getVehicleById(vehicleId, dealerId).then(function(response) {
                        vm.vehicle = __WEBPACK_IMPORTED_MODULE_4_dynamicDataProvider___default.a.getFirstElement(response),
                            dealerService.getDealer(dealerSearchParameters).then(function(dealers) {
                                dealer = dealers[0],
                                    vm.openingHrsCtrl = dealer ? dealerService.getOpeningHours(dealer) : "",
                                    pdfDownloadService.getVehicleBrochurePDF(environmentURL, templateURL, nodeJSServiceURL, pdfConfigJSON, vm.vehicle, vm.openingHrsCtrl, imageAOSGallery)
                            })
                    })
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_omnitureLinkExtension__ = __webpack_require__(61)
            , __WEBPACK_IMPORTED_MODULE_0_omnitureLinkExtension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_omnitureLinkExtension__)
            , __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a.directive("ngAuAccessoriesLink", function() {
            return {
                restrict: "A",
                scope: {
                    isMobile: "="
                },
                link: function(scope, $element) {
                    scope.$watch("isMobile", function() {
                        __WEBPACK_IMPORTED_MODULE_0_omnitureLinkExtension___default.a.extendLink($element, {
                            ctaName: "view accessory"
                        })
                    })
                }
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, exports) {
        module.exports = omnitureLinkExtension
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_angularCommons_au_checkbox_group_au_checkbox_group_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(19));
        __webpack_require__(63),
            __WEBPACK_IMPORTED_MODULE_1_angularCommons_au_checkbox_group_au_checkbox_group_module_js__.a.directive("auGuxCheckboxGroup", [function() {
                return {
                    restrict: "A",
                    transclude: !0,
                    bindToController: !0,
                    scope: {
                        filterRequestParam: "@",
                        filterLookupParam: "@",
                        dependentFilter: "@",
                        selectionOptionsJson: "@"
                    },
                    controllerAs: "vm",
                    controller: "auCheckboxGroupController",
                    template: '<div ng-if="vm.shouldBeDisplayed" class="filter-checkbox-group">\t<ng-transclude></ng-transclude>\t<div class="filter-row checkboxes"\t\tng-repeat="option in vm.selectionOptions">\t\t<input\t\t\tid="{{vm.getUniqueId(option)}}"\t\t\ttype="checkbox"\t\t\tng-model="option.selected"\t\t\tng-click="vm.select(option)">\t\t<label for="{{vm.getUniqueId(option)}}">{{option.text}}</label>\t</div></div>'
                }
            }
            ])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__)
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__);
        __webpack_require__(19).a.controller("auCheckboxGroupController", ["$scope", "$location", "filterStoreService", function($scope, $location, filterStoreService) {
            var vm = this;
            function updateSelectionOptions(options) {
                var filterState = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(filterStoreService.getAll(), vm.filterRequestParam);
                vm.selectionOptions = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.transform(options, function(result, option) {
                    result.push({
                        text: option.description,
                        value: option.searchTerm,
                        selected: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(filterState) ? __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.includes(filterState, option.searchTerm) : filterState === option.searchTerm
                    })
                }),
                    vm.filtersDependiences = !vm.dependentFilter || filterStoreService.getAll()[vm.dependentFilter],
                    vm.shouldBeDisplayed = !!vm.filtersDependiences && !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(vm.selectionOptions)
            }
            function setValue(newValue) {
                var newOptions = newValue || [];
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(vm.selectionOptions, function(option) {
                    option.selected = newOptions === option.value
                })
            }
            vm.shouldBeDisplayed = !0,
                vm.getUniqueId = function(option) {
                    return $scope.$id + "-" + option.value
                }
                ,
                vm.select = function() {
                    var selection = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.transform(vm.selectionOptions, function(result, option) {
                        option.selected && result.push(option.value)
                    });
                    filterStoreService.update(vm.filterRequestParam, selection)
                }
                ,
            vm.selectionOptionsJson && (vm.selectionOptions = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.fromJson(vm.selectionOptionsJson),
                function(selectionOptions) {
                    if (selectionOptions && selectionOptions.length) {
                        var filterRequestParam = $location.search()[vm.filterRequestParam]
                            , filterRequestArray = filterRequestParam ? filterRequestParam.split(";") : [];
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(selectionOptions, function(option, i) {
                            var selectionOptionsValue = option.value;
                            !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(filterRequestArray) && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.includes(filterRequestArray, selectionOptionsValue) && (vm.selectionOptions[i].selected = !0)
                        })
                    }
                }(vm.selectionOptions)),
            vm.dependentFilter && (vm.shouldBeDisplayed = filterStoreService.get(vm.dependentFilter)[vm.dependentFilter],
                filterStoreService.watch(vm.dependentFilter, function(newValue) {
                    vm.shouldBeDisplayed = !!newValue && !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(vm.selectionOptions)
                })),
                filterStoreService.register(vm.filterRequestParam, {
                    updateOptions: updateSelectionOptions,
                    optionsLookupPath: vm.filterLookupParam,
                    setValue: setValue
                })
        }
        ])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angularCommons_au_checkbox_single_au_checkbox_single_module_js__ = __webpack_require__(20);
        __webpack_require__(65);
        __WEBPACK_IMPORTED_MODULE_0_angularCommons_au_checkbox_single_au_checkbox_single_module_js__.a.directive("auGuxCheckboxFilter", ["filterStoreService", function() {
            return {
                restrict: "A",
                scope: !0,
                bindToController: {
                    checkboxFilterValue: "=",
                    filterRequestParam: "@",
                    dependentFilter: "@",
                    filterValue: "@",
                    label: "@"
                },
                controllerAs: "checkboxFilter",
                controller: "auCheckboxSingleController",
                template: '<div class="filter-checkbox-group" data-ng-if="checkboxFilter.shouldBeDisplayed">\t<div class="filter-row checkboxes">\t\t<input \t\t\ttype="checkbox" \t\t\tname="checkboxFilter" \t\t\tid="checkboxFilter" \t\t\tdata-ng-click="checkboxFilter.toggle()"\t\t\tdata-ng-checked="checkboxFilter.checked">\t\t<label for="checkboxFilter">{{checkboxFilter.label}}</label>\t</div></div>'
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_0_angularCommons_au_checkbox_single_au_checkbox_single_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
            __webpack_require__(0))
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
            __webpack_require__(3))
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_3_angularCommons_au_checkbox_single_au_checkbox_single_module_js__ = __webpack_require__(20);
        __WEBPACK_IMPORTED_MODULE_3_angularCommons_au_checkbox_single_au_checkbox_single_module_js__.a.controller("auCheckboxSingleController", ["filterStoreService", function(filterStoreService) {
            var checkboxFilter = this
                , storeValue = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(filterStoreService.getAll(), checkboxFilter.filterRequestParam);
            checkboxFilter.shouldBeDisplayed = !0,
                checkboxFilter.checked = "true" === storeValue,
            checkboxFilter.dependentFilter && (checkboxFilter.shouldBeDisplayed = filterStoreService.get(checkboxFilter.dependentFilter)[checkboxFilter.dependentFilter],
                filterStoreService.watch(checkboxFilter.dependentFilter, function(newValue) {
                    newValue && (checkboxFilter.shouldBeDisplayed = !0)
                }));
            checkboxFilter.toggle = function() {
                checkboxFilter.checked = !checkboxFilter.checked,
                    checkboxFilter.checked ? filterStoreService.update(checkboxFilter.filterRequestParam, checkboxFilter.filterValue) : filterStoreService.update(checkboxFilter.filterRequestParam, null)
            }
                ,
                filterStoreService.register(checkboxFilter.filterRequestParam, {
                    setValue: function(newValue) {
                        checkboxFilter.checked = "true" === newValue
                    }
                })
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_angularCommons_au_checkbox_single_au_checkbox_single_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(1));
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a.directive("auConfirmDialog", [function() {
            return {
                restrict: "EA",
                scope: {
                    option: "="
                },
                replace: !0,
                transclude: !0,
                link: function(scope, element) {
                    scope.hideModal = function() {
                        scope.option.show = !1
                    }
                        ,
                        scope.actionModal = function() {
                            scope.option.actionMethod(function() {
                                scope.option.show = !1
                            })
                        }
                },
                template: '<div class="au-modal" \tdata-ng-show="option.show" \tdata-overlay-focus \tdata-overlay-focus-open="{{option.show}}">\t<div class="au-modal-overlay" tabindex="0"></div>\t<div class="au-modal-dialog">\t\t<div class="au-modal-dialog-content" \t\t\t data-ng-transclude \t\t\t ng-bind-html="option.content">\t\t</div>\t\t<div class="au-modal-button">\t\t\t<a data-ng-if="option.closeLabel" \t\t\t   data-ng-bind="option.closeLabel" \t\t\t   data-ng-click="hideModal()" \t\t\t   data-ng-enter-selector="hideModal()"               tabindex="0">\t\t\t</a>\t\t\t<a data-ng-if="option.actionLabel" \t\t\t   data-ng-bind="option.actionLabel"               data-ng-click="actionModal()" \t\t\t   data-ng-enter-selector="actionModal()" \t\t\t   tabindex="0">\t\t\t</a>\t\t</div>\t</div></div>'
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
            __webpack_require__(0))
            , __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__)
            , __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1)
            , __WEBPACK_IMPORTED_MODULE_3_wizardOverlay__ = __webpack_require__(68)
            , __WEBPACK_IMPORTED_MODULE_3_wizardOverlay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_wizardOverlay__);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a.directive("auContextualLink", ["$q", "analyticsService", "APP_CONFIG", function($q, analyticsService, APP_CONFIG) {
            return {
                restrict: "A",
                scope: {},
                controllerAs: "vm",
                controller: "PDFDownloadController",
                link: function(scope, $element, attributes, vm) {
                    var contextualLink = attributes.auContextualLink
                        , analyticsServiceCall = function(param) {
                        $q.when(analyticsService.nameplate.promise).then(function(nameplate) {
                            analyticsService.track(param, {
                                nameplate: nameplate,
                                vehicleCategory: APP_CONFIG.vehicleCategory.split(":")[1].toLowerCase()
                            })
                        })
                    };
                    "forms" === contextualLink && __WEBPACK_IMPORTED_MODULE_3_wizardOverlay___default.a.init(),
                        $element.on("click", function(event) {
                            if ("download-pdf" === contextualLink) {
                                event.preventDefault(),
                                    analyticsServiceCall("usedSearchBrochureDownload");
                                var pdfForm = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element("#eUsedPDFform");
                                __WEBPACK_IMPORTED_MODULE_1_angular___default.a.isUndefined(pdfForm) || pdfForm.submit()
                            } else
                                "forms" === contextualLink ? analyticsServiceCall("contactDealerCTA") : "AusedDownloadPDF" === contextualLink && (event.preventDefault(),
                                    analyticsServiceCall("usedSearchBrochureDownload"),
                                    vm.getPDFDownload(attributes.environmenturl, attributes.templateurl, attributes.nodeserviceurl, attributes.pdfconfigjson, attributes.replaceaosgallery))
                        })
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, exports) {
        module.exports = wizardOverlay
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(2))
            , __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_dropdown_menu_au_dropdown_menu_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
            __webpack_require__(18));
        __webpack_require__(70),
            __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_dropdown_menu_au_dropdown_menu_module_js__.a.directive("auDropdownMenuFilter", [function() {
                return {
                    restrict: "A",
                    transclude: !0,
                    scope: !0,
                    bindToController: {
                        filterRequestParam: "@",
                        selectionOptionsJson: "@",
                        selectionOptions: "=?",
                        defaultOption: "@",
                        selectedOption: "=?",
                        selectionLabel: "@",
                        filterType: "@"
                    },
                    controllerAs: "vm",
                    controller: "auDropdownMenuController",
                    template: '<div>\t<ng-transclude></ng-transclude>\t<button class="sort-button" \t\t\tdata-ng-click="vm.toggle($event)"\t\t\tdata-ng-class="{\'is-active\': vm.isActive}">{{vm.selectionLabel}}\t\t<i class="icon-chevron-thin-right chevron-down"></i>\t</button>\t<ul class="au-dropdown-menu-list" data-ng-class="{\'is-active\': vm.isActive}">\t\t<li data-ng-repeat="option in vm.selectionOptions" \t\t\tdata-ng-class="{\'current\': vm.selectedOption === option}">\t\t\t<a href="#" data-ng-click="vm.select($event, option)">{{option.text}}</a>\t\t</li>\t</ul></div>',
                    link: function(scope, element, vm) {
                        var selectedValue = JSON.parse(sessionStorage.getItem("selectedOptionChanged"));
                        null != sessionStorage.getItem("selectedOptionChanged") && selectedValue.selectedOption === scope.vm.selectedOption.text && (vm.selectionLabel = scope.vm.selectedOption.text)
                    }
                }
            }
            ])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__)
            , __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_dropdown_menu_au_dropdown_menu_module_js__ = __webpack_require__(18);
        __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_dropdown_menu_au_dropdown_menu_module_js__.a.controller("auDropdownMenuController", ["$scope", "$element", "filterStoreService", "analyticsService", function($scope, $element, filterStoreService, analyticsService) {
            var vm = this;
            function readObjectNotationValue(value) {
                var keyValue, result = {};
                return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(value.split(","), function(keyValuePair) {
                    2 === (keyValue = keyValuePair.split(":")).length && (result[keyValue[0]] = keyValue[1])
                }),
                    result
            }
            vm.shouldBeDisplayed = !0,
                vm.isActive = !1,
                __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element("body").on("click", function() {
                    vm.isActive && (vm.isActive = !1,
                        $scope.$apply())
                }),
                vm.toggle = function($event) {
                    $event.stopPropagation(),
                        $event.preventDefault(),
                        vm.isActive = !vm.isActive
                }
                ,
                vm.select = function($event, selectedOption) {
                    vm.toggle($event),
                        vm.selectedOption = selectedOption,
                        vm.selectionLabel = vm.selectedOption.text;
                    var selectedValue = {
                        selectedOption: vm.selectedOption.text
                    };
                    sessionStorage.setItem("selectedOptionChanged", JSON.stringify(selectedValue)),
                        filterStoreService.update(vm.filterRequestParam, readObjectNotationValue(selectedOption.value), vm.filterType),
                        analyticsService.track("filterOptionSelected", {
                            filters: [{
                                filterParam: vm.filterRequestParam,
                                filterValue: vm.selectedOption,
                                filterType: vm.filterType
                            }]
                        })
                }
                ,
                function() {
                    if (vm.selectionOptions = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.fromJson(vm.selectionOptionsJson),
                        vm.defaultOption) {
                        var initialFilterState = filterStoreService.getAll()[vm.filterRequestParam] || readObjectNotationValue(__WEBPACK_IMPORTED_MODULE_1_angular___default.a.fromJson(vm.defaultOption).value);
                        vm.selectedOption = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(vm.selectionOptions, function(option) {
                            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEqual(initialFilterState, readObjectNotationValue(option.value))
                        })
                    }
                    vm.selectedOption && filterStoreService.setValue(vm.filterRequestParam, readObjectNotationValue(vm.selectedOption.value))
                }()
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_angularCommons_au_dropdown_menu_au_dropdown_menu_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(2))
            , __WEBPACK_IMPORTED_MODULE_2_isAuthor__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
            __webpack_require__(10))
            , __WEBPACK_IMPORTED_MODULE_2_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isAuthor__)
            , __WEBPACK_IMPORTED_MODULE_3_angularCommons_au_selection_filter_module_js__ = __webpack_require__(17)
            , isAuthorStatus = (__webpack_require__(72),
            __WEBPACK_IMPORTED_MODULE_2_isAuthor___default.a.getAuthorStatus());
        __WEBPACK_IMPORTED_MODULE_3_angularCommons_au_selection_filter_module_js__.a.directive("auGuxSelectionFilter", ["$timeout", function($timeout) {
            return {
                restrict: "A",
                transclude: !0,
                scope: !0,
                bindToController: {
                    filterValue: "=?",
                    filterRequestParam: "@",
                    filterLookupParam: "@",
                    emptySelectionLabel: "@",
                    shouldBeDisplayed: "=?",
                    dependentFilter: "@",
                    selectionOptionsJson: "@",
                    selectionOptions: "=?",
                    selectedOption: "=?",
                    selectionPlaceholder: "@",
                    defaultOption: "@",
                    objectNotationValue: "@"
                },
                controllerAs: "vm",
                controller: "auGuxSelectionFilterController",
                template: '<div data-ng-show="vm.shouldBeDisplayed"\tclass="form-wrapper">\t<ng-transclude></ng-transclude>\t<div class="form-dropdown form" data-form-dropdown>\t\t<div data-placeholder="{{vm.selectionPlaceholder}}"></div>\t\t<select class="au-filter-select" \t\t\t\tdata-ng-model="vm.selectedOption">\t\t<option></option>\t\t<option data-ng-value="option" data-ng-repeat="option in vm.selectionOptions track by option.value">{{option.text}}</option>\t\t</select>\t</div></div>',
                link: function(scope, $element, attrs, vm) {
                    $timeout(function() {
                        isAuthorStatus || ($element.find("select").select2({
                            minimumResultsForSearch: -1,
                            dropdownCssClass: "au-dropdown",
                            placeholder: vm.selectionPlaceholder
                        }),
                            $element.find(".select2-input").attr({
                                readonly: "true"
                            }))
                    }, 0)
                }
            }
        }
        ])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_3_angularCommons_au_selection_filter_module_js__ = __webpack_require__(17);
        __WEBPACK_IMPORTED_MODULE_3_angularCommons_au_selection_filter_module_js__.a.controller("auGuxSelectionFilterController", ["$scope", "$element", "filterStoreService", function($scope, $element, filterStoreService) {
            var initialFilterState, actualValue, vm = this, $select = $element.find("select");
            vm.selectionOptions = [],
                vm.shouldBeDisplayed = !0,
                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach($element.data().selectionOptionsJson, function(option) {
                    vm.selectionOptions.push(option)
                }),
            vm.emptySelectionLabel && $element.data().selectionOptionsJson && vm.selectionOptions.unshift({
                text: vm.emptySelectionLabel,
                value: null
            });
            !(initialFilterState = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(filterStoreService.getAll(), vm.filterRequestParam)) && vm.defaultOption && vm.objectNotationValue && (initialFilterState = readObjectNotationValue(__WEBPACK_IMPORTED_MODULE_0_angular___default.a.fromJson(vm.defaultOption).value),
                vm.selectedOption = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(vm.selectionOptions, function(option) {
                    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEqual(initialFilterState, readObjectNotationValue(option.value))
                }));
            vm.dependentFilter && (vm.shouldBeDisplayed = filterStoreService.get(vm.dependentFilter)[vm.dependentFilter],
                filterStoreService.watch(vm.dependentFilter, function(newValue) {
                    vm.shouldBeDisplayed = !!newValue && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(vm.selectionOptions)
                }));
            function readObjectNotationValue(value) {
                var keyValue, result = {};
                return value && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(value.split(","), function(keyValuePair) {
                    2 === (keyValue = keyValuePair.split(":")).length && (result[keyValue[0]] = keyValue[1])
                }),
                    result
            }
            $scope.$watch("vm.selectedOption", function(newValue) {
                newValue && (actualValue = newValue.value,
                vm.objectNotationValue && (actualValue = readObjectNotationValue(actualValue)),
                    filterStoreService.update(vm.filterRequestParam, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(actualValue) ? null : actualValue),
                    vm.filterValue = actualValue)
            }),
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(vm.filterRequestParam) || "vehicleCategory" === vm.filterRequestParam || filterStoreService.setValue(vm.filterRequestParam, null);
            filterStoreService.register(vm.filterRequestParam, {
                updateOptions: function(options) {
                    var selectedOption;
                    vm.emptySelectionLabel && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(options) && options.unshift({
                        description: vm.emptySelectionLabel,
                        searchTerm: "any-option"
                    });
                    vm.selectionOptions = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.transform(options, function(result, option) {
                        result.push({
                            text: option.description,
                            value: option.searchTerm
                        })
                    }),
                        selectedOption = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(vm.selectionOptions, function(option) {
                            return option.value === (vm.selectedOption ? vm.selectedOption.value : initialFilterState)
                        }),
                        vm.shouldBeDisplayed = !(vm.dependentFilter && !filterStoreService.getAll()[vm.dependentFilter] || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(vm.selectionOptions)),
                        vm.selectedOption = selectedOption || "";
                    $scope.$$postDigest(function() {
                        $select.select2("val", vm.selectedOption ? vm.selectedOption.$$hashKey : "")
                    }),
                    vm.selectedOption || filterStoreService.setValue(vm.filterRequestParam, null);
                    vm.shouldBeDisplayed || filterStoreService.update(vm.filterRequestParam, null)
                },
                optionsLookupPath: vm.filterLookupParam,
                setValue: function(newValue) {
                    vm.selectedOption = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(vm.selectionOptions, function(option) {
                        return option.value === newValue
                    }),
                        $select.select2("val", vm.selectedOption ? vm.selectedOption.$$hashKey : "")
                }
            })
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_angularCommons_au_selection_filter_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(1));
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a.directive("auRemarkableTechnologies", [function() {
            return {
                restrict: "A",
                transclude: !0,
                scope: {
                    content: "=",
                    title: "@"
                },
                link: function($scope) {
                    $scope.showVideo = function(rmTech) {
                        var videoOptions = {
                            show: !0,
                            videoUrl: rmTech.YouTubeURL,
                            title: rmTech.value,
                            description: rmTech.LongDescription
                        };
                        $scope.$emit("show:video", videoOptions)
                    }
                },
                template: '<div class="remarkable-tech" data-ng-if="content">\t<h3>{{title}}</h3>\t<div class="row" data-ng-repeat="rmTech in content | orderBy:rmTech.priority">\t\t<div class="">\t\t\t<div class="large-6 columns text-content">\t\t\t\t<h4>{{rmTech.value}}</h4>\t\t\t\t<p>{{rmTech.LongDescription}}</p>\t\t\t</div>\t\t\t<div class="large-6 columns image section">\t\t\t\t<div class="component-content link-overlay video-link-overlay link-overlay-enabled" \t\t\t\t\t data-ng-if="rmTech.YouTubeURL">\t\t\t\t\t <div class="link-overlay video-link-overlay initialized link-overlay-enabled" \t\t\t\t\t\tdata-ng-click="showVideo(rmTech)">\t\t\t\t\t\t<picture data-ng-if="rmTech.ImageURL">\t\t\t\t\t\t\t<img src="{{rmTech.ImageURL}}" alt="{{rmTech.value}}">\t\t\t\t\t\t</picture>\t\t\t\t\t </div>\t\t\t\t</div>\t\t\t\t<img src="{{rmTech.ImageURL}}" alt="{{rmTech.value}}" data-ng-if="!rmTech.YouTubeURL && rmTech.ImageURL">\t\t\t</div>\t\t</div>\t</div></div>'
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_directives_vehicle_details_accordion_vehicle_details_accordion_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(21));
        __webpack_require__(75),
            __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_directives_vehicle_details_accordion_vehicle_details_accordion_module_js__.a.directive("auVehicleDetailsAccordion", [function() {
                return {
                    restrict: "A",
                    transclude: !0,
                    bindToController: !0,
                    scope: {
                        filterRequestParam: "@",
                        filterLookupParam: "@",
                        dependentFilter: "@",
                        selectionOptionsJson: "@",
                        openFirstAccordion: "@",
                        accordionHeader: "@"
                    },
                    controller: "auVehicleDetailsAccordionController",
                    controllerAs: "vm",
                    template: '<div data-ng-if="vm.featureGroupList.length" data-ng-bind-html="vm.unescapedAccordionHeader"></div><div class="accordion">\t<ul class="accordion-list" data-on-load-state="{{vm.openFirstAccordion}}">\t\t<li class="accordion-item" data-state="closed" data-item-index="{{$index}}" data-ng-repeat="featureGroup in vm.featureGroupList track by $index">\t\t\t<div class="accordion-title">\t\t\t\t<a href="#" class="accordion-trigger">\t\t\t\t\t<h3>{{featureGroup.Group}}</h3>\t\t\t\t\t<div class="accordion-handle">\t\t\t\t\t\t<i class="accordion-indicator icon-chevron-thin-right"></i>\t\t\t\t\t</div>\t\t\t\t</a>\t\t\t</div>\t\t\t<div class="accordion-body" data-ng-class="{\'active\' : $first && vm.openFirstAccordion}">\t\t\t\t<div class="accordion-content">\t\t\t\t\t<ul class="feature">\t\t\t\t\t\t<li ng-repeat="feature in featureGroup.Feature">{{feature.Description}}</li>\t\t\t\t\t</ul>\t\t\t\t</div>\t\t\t</div>\t\t</li>\t</ul></div>'
                }
            }
            ])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
            __webpack_require__(0))
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
            __webpack_require__(3))
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_directives_vehicle_details_accordion_vehicle_details_accordion_module_js__ = __webpack_require__(21)
            , __WEBPACK_IMPORTED_MODULE_4_guxAccordion__ = __webpack_require__(76)
            , __WEBPACK_IMPORTED_MODULE_4_guxAccordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_guxAccordion__)
            , __WEBPACK_IMPORTED_MODULE_5_dynamicDataProvider__ = __webpack_require__(8)
            , __WEBPACK_IMPORTED_MODULE_5_dynamicDataProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_dynamicDataProvider__);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_directives_vehicle_details_accordion_vehicle_details_accordion_module_js__.a.controller("auVehicleDetailsAccordionController", ["$scope", "$routeParams", "$element", "getVehicles", "$sce", function($scope, $routeParams, $element, getVehicles, $sce) {
            var vm = this;
            vehicleId = $routeParams.vehicleId,
                dealerId = $routeParams.dealerId,
            vehicleId && dealerId && getVehicles.getVehicleById(vehicleId, dealerId).then(function(payload) {
                var response = __WEBPACK_IMPORTED_MODULE_5_dynamicDataProvider___default.a.getFirstElement(payload);
                vm.featureGroupList = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(response, "Vehicle.Configuration.Features.FeatureGroup"),
                    $scope.$$postDigest(function() {
                        __WEBPACK_IMPORTED_MODULE_4_guxAccordion___default.a.init($element)
                    })
            }),
                vm.unescapedAccordionHeader = $sce.trustAsHtml(vm.accordionHeader);
            var vehicleId, dealerId
        }
        ])
    }
    , function(module, exports) {
        module.exports = guxAccordion
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__)
            , __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a.directive("auVideoOverlay", ["youtubePlayer", function(youtubePlayer) {
            return {
                restrict: "AE",
                scope: {
                    videoOption: "="
                },
                replace: !0,
                transclude: !0,
                link: function(scope, element) {
                    var $body = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("body")
                        , CONST = {
                        className: {
                            bodyLock: "body-lock"
                        }
                    };
                    scope.expanded = !1,
                        scope.loaded = !1,
                        scope.hideModal = function() {
                            scope.videoOption.show = !1,
                                $body.removeClass(CONST.className.bodyLock),
                                scope.loaded = !1,
                                youtubePlayer.stopPlay()
                        }
                        ,
                        scope.toggleAccordion = function($event) {
                            var state;
                            $event.stopPropagation(),
                                scope.expanded = !scope.expanded,
                                state = scope.expanded ? "open" : "closed",
                                __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(element).find(".accordion-item").attr("data-state", state)
                        }
                        ,
                        scope.$watch("videoOption", function(newValue) {
                            var $wrapper = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(".au-video-dialog");
                            newValue && newValue.show && newValue.videoUrl && ($body.addClass(CONST.className.bodyLock),
                                youtubePlayer.init(scope.videoOption.videoUrl, $wrapper, "youtube-player", function() {
                                    scope.loaded = !0
                                }))
                        })
                },
                template: document.getElementById("au-video-overlay").innerHTML
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_guxDisclosure__ = __webpack_require__(11)
            , __WEBPACK_IMPORTED_MODULE_1_guxDisclosure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_guxDisclosure__)
            , __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module__.a.directive("ngAuDisclosure", ["$document", "$timeout", "$compile", function($document, $timeout, $compile) {
            return {
                restrict: "A",
                template: "<sup>{{attr.disclosure}}</sup>",
                replace: !0,
                scope: {
                    disclosure: "@"
                },
                link: function($scope, $element) {
                    var parentElem = $element.parent();
                    $scope.disclosure && __WEBPACK_IMPORTED_MODULE_1_guxDisclosure___default.a.initOne($element, $scope.disclosure),
                        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe(function() {
                            $timeout(function() {
                                var compiledElem = $compile($element);
                                parentElem.append($element),
                                    compiledElem($scope)
                            }, 0)
                        })
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_guxDisclosure__ = __webpack_require__(11)
            , __WEBPACK_IMPORTED_MODULE_2_guxDisclosure___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_guxDisclosure__)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.directive("ngAuDisclosureInitialiser", ["$document", "$timeout", function($document, $timeout) {
            return {
                restrict: "A",
                link: function($scope, $element) {
                    $document.ready(function() {
                        $timeout(function() {
                            var $disclosureElementList = $element.find("[data-disclosure]");
                            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach($disclosureElementList, function(element) {
                                __WEBPACK_IMPORTED_MODULE_2_guxDisclosure___default.a.initOne(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element), element.getAttribute("data-disclosure"))
                            })
                        })
                    })
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__.a.directive("ngEnterSelector", [function() {
            return function(scope, element, attrs) {
                element.bind("keydown keypress", function(event) {
                    13 === event.which && (scope.$apply(function() {
                        scope.$eval(attrs.ngEnterSelector)
                    }),
                        event.preventDefault())
                })
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function GoogleMap(mapService, MAP_NAME) {
            return {
                restrict: "A",
                scope: {
                    mapOptions: "=",
                    mapToggle: "=",
                    isMapVisible: "="
                },
                template: '<div class="map-wrapper">\t<div class="component-content"\t\t data-ng-class="{\'is-visible\': isMapVisible}">\t\t<div class="map-container mini-dealer-map"></div>\t</div><button class="button-collapse" \t\t data-ng-click="mapToggle();"\t\t data-ng-class="{\'is-visible\': isMapVisible}"></button></div>',
                link: function(scope, $element) {
                    var $mapElement = $element.find(".map-container");
                    mapService.registerMap(MAP_NAME, $mapElement, scope.mapOptions)
                }
            }
        }
        __webpack_require__(1).a.directive("auGoogleMap", ["ngGuxGoogleMapService", "MAP_NAME", GoogleMap])
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(0)
            , __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
            __webpack_require__(1));
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a.directive("overlayFocus", ["$timeout", function($timeout) {
            return {
                restrict: "A",
                link: function(scope, element, attr) {
                    var firstTabStop, lastTabStop, focusedElementBeforeModal = document.activeElement, overlayIsOpen = !1;
                    element.on("keydown", function(event) {
                        9 === event.keyCode && (focusedElementBeforeModal = document.activeElement,
                            event.shiftKey ? overlayIsOpen && document.activeElement === firstTabStop && (event.preventDefault(),
                                lastTabStop.focus()) : document.activeElement === lastTabStop && (event.preventDefault(),
                                firstTabStop.focus()))
                    }),
                        attr.$observe("overlayFocusOpen", function(newValue) {
                            "true" === newValue ? (overlayIsOpen = !0,
                                $timeout(function() {
                                    var focusableElements = element.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"]:not([disabled]), [contenteditable]');
                                    (focusableElements = Array.prototype.slice.call(focusableElements)).length && (firstTabStop = focusableElements[0],
                                        lastTabStop = focusableElements[focusableElements.length - 1],
                                        firstTabStop.focus())
                                })) : (overlayIsOpen = !1,
                                focusedElementBeforeModal.focus())
                        })
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_1_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
            __webpack_require__(0))
            , __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__)
            , __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1)
            , $htmlBody = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element("html, body");
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a.directive("auScrollTo", [function() {
            return {
                restrict: "A",
                link: function(scope, $element, attributes) {
                    var offset, $target = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(attributes.auScrollTo);
                    $element.on("click", function() {
                        offset = $target.offset().top,
                            $htmlBody.animate({
                                scrollTop: offset
                            }, 300)
                    })
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__.a.directive("ausedFlexSlider", [function() {
            return {
                restrict: "A",
                scope: {
                    slideshow: "@",
                    animation: "@",
                    navNumbers: "@",
                    prevText: "@",
                    nextText: "@",
                    images: "="
                },
                controllerAs: "vm",
                controller: "GalleryController",
                bindToController: !0,
                template: '<div class="flexslider" \t\tdata-ng-class="{\'is-visible\' : vm.displayGallery }">\t<ul class="slides">\t\t<li data-ng-repeat="img in vm.galleryImageSet">\t\t\t<img data-ng-src="{{img.urls[0]}}"/>\t\t</li>\t</ul>\t<div class="gallery-controls">\t\t<ul>\t\t\t<li>\t\t\t\t<button class="handles chevronLeft"\t\t\t\t\tdata-ng-click="vm.previousSlide();">\t\t\t\t\t<span class="prev-button-text label">{{vm.prevText}}</span>\t\t\t\t</button>\t\t\t</li>\t\t\t<li class="navNumbers">\t\t\t\t<span class="currentSlideNumber"></span>\t\t\t\t<span>/</span>\t\t\t\t<span class="totalSlidesNumber"></span>\t\t\t</li>\t\t\t<li>\t\t\t\t<button class="handles chevronRight"\t\t\t\t\tdata-ng-click="vm.nextSlide()">\t\t\t\t\t<span class="next-button-text label">{{vm.nextText}}</span>\t\t\t\t</button>\t\t\t</li>\t\t</ul>\t</div></div><div class="bp-loader" data-ng-class="{\'loader-is-visible\' : vm.isLoaderVisible }">\t<div class="bp-loader-icon">\t\t<svg class="circular" viewBox="25 25 50 50">\t\t\t<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"></circle>\t\t</svg>\t</div></div>'
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_mediaQuery__ = __webpack_require__(6)
            , __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mediaQuery__)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.directive("vehicleOpenOverlay", [function() {
            return {
                restrict: "A",
                link: function($scope, $element) {
                    var $focusedItem = null
                        , CLASSNAME = {
                        isActive: "is-active"
                    }
                        , SELECTOR = {
                        contentWrap: ".content-wrap",
                        modelItem: ".model-item"
                    };
                    "xlarge" !== __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() && "desktop" !== __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() || $element.on("focus click", function() {
                        var $itemsWrapper = $element.closest(SELECTOR.contentWrap);
                        ($focusedItem = $element.closest(SELECTOR.modelItem)).addClass(CLASSNAME.isActive),
                            $itemsWrapper.find(SELECTOR.modelItem).not($focusedItem).removeClass(CLASSNAME.isActive)
                    }).on("focusout", function() {
                        var $elem = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
                        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.delay(function() {
                            var hasFocus = !$elem.find(":focus").length;
                            hasFocus && $focusedItem && ($focusedItem.removeClass(CLASSNAME.isActive),
                                $focusedItem = null)
                        }, 10)
                    }).on("focus", "a", function() {
                        $element.addClass(CLASSNAME.isActive)
                    })
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__.a.directive("auVehicleTileImage", [function() {
            return {
                restrict: "A",
                scope: {
                    imageWidth: "=",
                    imageHeight: "=",
                    vehicleId: "@",
                    imageRef: "@",
                    imageShowUrlHeightWidth: "@"
                },
                link: function(scope) {
                    scope.$watch("imageRef", function() {
                        "true" === scope.imageShowUrlHeightWidth ? scope.url = scope.imageRef : scope.url = [scope.imageRef, "&Width=", scope.imageWidth, "&Height=", scope.imageHeight, "+&ImageType=S"].join("")
                    })
                },
                replace: !0,
                template: '<img class="model-short" data-ng-src="{{url}}" />'
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__(88),
            __webpack_require__(89),
            __webpack_require__(90),
            __webpack_require__(91),
            __webpack_require__(92),
            __webpack_require__(93),
            __webpack_require__(94)
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a.factory("getCompareListService", ["getVehicles", "APP_CONFIG", function(getVehiclesService, APP_CONFIG) {
            var compareList = []
                , compareQuery = []
                , compareDataSet = []
                , featureGroup = {}
                , compareLimit = 0;
            return {
                addCompareList: function(vehicleQuery, success) {
                    compareList.push(vehicleQuery.vehicleId),
                        compareQuery.push(vehicleQuery),
                        getVehicleData(vehicleQuery, success),
                        addToStorage()
                },
                removeCompareList: function(vehicleQuery) {
                    compareList.splice(compareList.indexOf(vehicleQuery.vehicleId), 1),
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.remove(compareQuery, function(item) {
                            return item.vehicleId === vehicleQuery.vehicleId
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.remove(compareDataSet, function(item) {
                            return item.Vehicle.Identity.ID === vehicleQuery.vehicleId
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(featureGroup, function(features) {
                            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.remove(features, function(vehicle) {
                                return vehicle.vehicleId === vehicleQuery.vehicleId
                            })
                        }),
                        addToStorage()
                },
                getCompareList: function() {
                    return compareList
                },
                refreshCompareList: function() {
                    var vehicleCategory, currentVehicleCategory = APP_CONFIG.vehicleCategory.split(":")[1];
                    Modernizr.sessionstorage && (compareList = JSON.parse(sessionStorage.getItem("compareList")),
                        compareQuery = JSON.parse(sessionStorage.getItem("compareQuery")),
                        vehicleCategory = sessionStorage.getItem("vehicleCategory"));
                    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isNull(compareList) || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(compareList) || vehicleCategory !== currentVehicleCategory ? (compareList = [],
                        compareQuery = [],
                        addToStorage(),
                    Modernizr.sessionstorage && sessionStorage.setItem("vehicleCategory", currentVehicleCategory),
                        !1) : (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(compareQuery, function(vehicleQuery) {
                        getVehicleData(vehicleQuery)
                    }),
                        !0)
                },
                getCompareQuery: function() {
                    return compareQuery
                },
                setCompareVehicleMaxLimit: function(limit) {
                    compareLimit = limit
                },
                getCompareVehicleMaxLimit: function() {
                    return compareLimit
                },
                getCompareDataSet: function() {
                    return compareDataSet
                },
                setCompareDataSet: setCompareDataSet,
                getFeatureGroup: function() {
                    return featureGroup
                },
                setFeatureGroup: setFeatureGroup
            };
            function addToStorage() {
                Modernizr.sessionstorage && (sessionStorage.setItem("compareList", JSON.stringify(compareList)),
                    sessionStorage.setItem("compareQuery", JSON.stringify(compareQuery)))
            }
            function setCompareDataSet(vehicle) {
                compareDataSet.push(vehicle),
                    setFeatureGroup(vehicle)
            }
            function setFeatureGroup(vehicle) {
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(vehicle.Vehicle.Configuration.Features.FeatureGroup, function(feature) {
                    var group = {};
                    featureGroup[feature.Group] = featureGroup[feature.Group] || [],
                        group.vehicleId = vehicle.Vehicle.Identity.ID,
                        group.feature = feature.Feature,
                        featureGroup[feature.Group].push(group)
                })
            }
            function getVehicleData(query, success) {
                var vehicleId = query.vehicleId
                    , dealerId = query.dealerId;
                vehicleId && dealerId && getVehiclesService.getVehicleById(vehicleId, dealerId).then(function(response) {
                    Array.isArray(response) && (response = response[0]),
                    response && (setCompareDataSet(response),
                    success && "function" == typeof success && success())
                })
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_configurationProvider__)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.factory("getDealerDetailsService", ["$q", "GLOBAL_APP_CONFIG", "MAP_NAME", "ngGuxGoogleMapService", function($q, GLOBAL_APP_CONFIG, MAP_NAME, mapService) {
            var today = new Date
                , addressFormat = ["DealerName", "AddressLine1", "AddressLine2", "AddressLine3", "AdministrativeArea", "Locality", "PostCode"]
                , jsDaysOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                , addressTemplateFormat = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template("<% _.each(addressLine, function(line) { %><%- line.name %> <% if(line.lineBreakAfter) { %><br/><% }}); %>")
                , addressTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template("<% _.each(addressLine, function(line) { %><%- line %> <% if(!isString) { %><br/><% }}); %>")
                , tempHTML = ""
                , configuration = __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get(angular.element(".vehicle-details-dealer-information")).addressFormatConfig;
            return {
                getDealer: function(params) {
                    var $defer = $q.defer();
                    return mapService.initializeGoogleMapsApi().then(function() {
                        mapService.getMap(MAP_NAME).then(function(map) {
                            map.map.searchDealersByProperties(1, function(dealers) {
                                $defer.resolve(function(dealers) {
                                    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(dealers, function(dealer) {
                                        dealer.infoWindowMarkup = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(tempHTML).html()
                                    })
                                }(dealers))
                            }, params)
                        })
                    }),
                        $defer.promise
                },
                getNameAndAddress: function(dealer, isString) {
                    var list, result = [];
                    return configuration && configuration.length ? (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(configuration, function(val) {
                        dealer[val.fieldName] && result.push({
                            lineBreakAfter: val.lineBreakAfter,
                            name: dealer[val.fieldName]
                        })
                    }),
                        addressTemplateFormat({
                            addressLine: result
                        })) : (list = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(dealer, function(value, key) {
                        if (value)
                            return addressFormat.indexOf(key) > -1
                    }),
                        addressTemplate({
                            addressLine: list,
                            isString: isString
                        }))
                },
                getOpeningHours: function(dealer) {
                    var time, hours, minutes, formattedTime = "";
                    dealer["Sales" + jsDaysOrder[today.getDay()] + "CloseTime"] && (time = dealer["Sales" + jsDaysOrder[today.getDay()] + "CloseTime"]).length < 4 && (time = 0 + time);
                    time && (hours = time.substr(0, 2),
                        minutes = time.substr(2, 2),
                        formattedTime = hours + ":" + minutes);
                    return formattedTime
                },
                getCountryBounds: function(config) {
                    var polygons = []
                        , localisationConfig = config.countryBounds;
                    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(localisationConfig.split("%2C"), function(item) {
                        var latLng = item.match(/[^+]\d*\.\d*/g);
                        latLng && polygons.push({
                            lng: latLng[0],
                            lat: latLng[1]
                        })
                    }),
                        polygons
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__.a.factory("getFilterService", [function() {
            var filter = null;
            return {
                setFilterData: function(filterParam) {
                    filter = filterParam
                },
                getFilterData: function() {
                    return filter
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_0_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_1_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_2_requestQueue__ = __webpack_require__(25)
            , __WEBPACK_IMPORTED_MODULE_2_requestQueue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_requestQueue__)
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.factory("getVehicles", ["$http", "$q", "BSL_CONFIG", function($http, $q, BSL_CONFIG) {
            var deferred, endpoint = BSL_CONFIG.endpoint + "/eUsed/v1/", locale = BSL_CONFIG.locale, searchVehiclesUrl = endpoint + "searchVehicles", getVehicleUrl = endpoint + "vehicleDetails?locale=" + locale, searchOptionsUrl = endpoint + "searchOptions", getAosTokenUrl = endpoint + "getToken", vehiclesCache = {
                lastModified: new Date,
                vehicles: []
            }, cookieToBslIsTrue = !!BSL_CONFIG.cookieToBsl, aosToken = "", aosImage = "";
            function vehicleDataRetrieved(response) {
                var vehiclesData = __WEBPACK_IMPORTED_MODULE_1_objectUtil___default.a.get(response, "data.data.VehicleInventoryList");
                return vehiclesData ? (vehiclesData.status = response.data.status,
                    vehiclesCache.vehicles = vehiclesData,
                    vehiclesCache.lastModified = new Date,
                    deferred.resolve(vehiclesData)) : deferred.reject(),
                    deferred.promise
            }
            function serviceErr(error) {
                return vehiclesCache.vehicles = [],
                    vehiclesCache.lastModified = new Date,
                    deferred.reject(error)
            }
            function copyIdsToRootOfObject(response) {
                if (response)
                    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(response.VehicleInventoryItem, function(vehicle) {
                        vehicle.uniqueId = vehicle.Vehicle.Identity.ID
                    }),
                        response
            }
            return {
                getVehicleData: function(data) {
                    return deferred = $q.defer(),
                        $http({
                            method: "POST",
                            url: searchVehiclesUrl,
                            data: data,
                            withCredentials: cookieToBslIsTrue
                        }).then(vehicleDataRetrieved, serviceErr).then(copyIdsToRootOfObject, serviceErr).catch(angular.noop),
                        deferred.promise
                },
                getVehicleById: function(vehicleId, dealerId) {
                    var vehicleQuery = ["&vehicleId=", vehicleId, "&dealerId=", dealerId].join("");
                    return $q.when(__WEBPACK_IMPORTED_MODULE_2_requestQueue___default.a.get(getVehicleUrl + vehicleQuery)).catch(angular.noop)
                },
                getAutoOnShowDetails: function(aosUrl) {
                    var deferred = $q.defer();
                    return $http({
                        url: aosUrl,
                        method: "GET",
                        headers: {
                            Authorization: aosToken.data
                        }
                    }).then(function(response) {
                        deferred.resolve(response)
                    }, function(status) {
                        deferred.reject(status)
                    }),
                        deferred.promise
                },
                fetchAOSToken: function() {
                    var deferred = $q.defer();
                    return $http({
                        method: "GET",
                        url: getAosTokenUrl,
                        withCredentials: cookieToBslIsTrue
                    }).then(function(response) {
                        deferred.resolve(response)
                    }, function(status) {
                        deferred.reject(status)
                    }),
                        deferred.promise
                },
                getSearchOptions: function(params) {
                    return $http({
                        method: "GET",
                        url: searchOptionsUrl,
                        params: params,
                        withCredentials: cookieToBslIsTrue
                    }).then(function(response) {
                        return __WEBPACK_IMPORTED_MODULE_1_objectUtil___default.a.get(response, "data.data")
                    }, function(errorResponse) {
                        console.warn("status: " + errorResponse.status + " " + errorResponse.statusText)
                    }).catch(angular.noop)
                },
                findVehicleById: function(id) {
                    var result;
                    vehiclesCache && (result = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(vehiclesCache, function(vehicle) {
                        return vehicle.uniqueId === id
                    }));
                    return result
                },
                getVehicles: function() {
                    return vehiclesCache.vehicles
                },
                getVehiclesTimestamp: function() {
                    return vehiclesCache.lastModified
                },
                setAOSToken: function(token) {
                    aosToken = token
                },
                getStoredAOSToken: function() {
                    return aosToken
                },
                setAOSImage: function(img) {
                    aosImage = img
                },
                getAOSImage: function() {
                    return aosImage
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
            __webpack_require__(1));
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a.service("searchParamHistoryService", [function() {
            var lastValue = null;
            return {
                getLastItem: function() {
                    return lastValue ? JSON.parse(lastValue) : null
                },
                addLastItem: function(searchParamCollection) {
                    lastValue = JSON.stringify(searchParamCollection)
                }
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_1_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__ = __webpack_require__(1);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a.factory("youtubePlayer", ["$window", "$timeout", function($window, $timeout) {
            var FIXED_ASPECT_RATIO = 9 / 16;
            $window.onYouTubeIframeAPIReady = function() {
                service.ready = !0,
                    service.loadPlayer()
            }
            ;
            var service = {
                playerId: null,
                player: null,
                videoId: null,
                wrapper: null,
                ready: !1,
                playerHeight: "390",
                playerWidth: "640",
                init: function(url, wrapper, playerId, success) {
                    if (!document.getElementById("youtubeApiLoader")) {
                        var script = document.createElement("script");
                        script.setAttribute("type", "text/javascript"),
                            script.setAttribute("id", "youtubeApiLoader"),
                            script.setAttribute("src", "//www.youtube.com/iframe_api"),
                            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").append(script)
                    }
                    service.videoId = service.YouTubeGetID(url),
                        service.playerId = playerId,
                        service.wrapper = wrapper,
                    service.ready && service.loadPlayer();
                    success && "function" == typeof success && $timeout(function() {
                        success()
                    }, 500)
                },
                createPlayer: function() {
                    var wrapperWidth = service.wrapper.width()
                        , wrapperHeight = wrapperWidth * FIXED_ASPECT_RATIO - 50
                        , YtApi = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(YT) || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(YT.Player) ? "" : YT.Player;
                    if (YtApi)
                        return new YtApi(service.playerId,{
                            height: wrapperHeight || service.playerHeight,
                            width: wrapperWidth || service.playerWidth,
                            videoId: service.videoId,
                            playerVars: {
                                color: "white",
                                showinfo: 0,
                                rel: 0
                            },
                            events: {
                                onReady: service.onPlayerReady
                            }
                        })
                },
                onPlayerReady: function(event) {
                    event.target.playVideo()
                },
                loadPlayer: function() {
                    if (service.ready && service.playerId && service.videoId)
                        if (service.player) {
                            var playerState = service.player.getPlayerState();
                            1 !== playerState && 2 !== playerState && 3 !== playerState || service.player.stopVideo(),
                                service.player.loadVideoById({
                                    videoId: service.videoId
                                })
                        } else
                            service.player = service.createPlayer()
                },
                stopPlay: function() {
                    service.player.stopVideo()
                },
                YouTubeGetID: function(url) {
                    var ID = "";
                    ID = void 0 !== (url = url.replace(/(>|<)/gi, "").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2] ? (ID = url[2].split(/[^0-9a-z_-]/i))[0] : url;
                    return ID
                }
            };
            return service
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_2_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2)
            , __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__)
            , __WEBPACK_IMPORTED_MODULE_1_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_2_requestQueue__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_objectUtil__),
            __webpack_require__(25))
            , __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_requestQueue__),
            __webpack_require__(1))
            , __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__ = __webpack_require__(95);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a.factory("pdfDownloadService", ["$http", "getVehicles", function($http, getVehicles) {
            var fileName = "Approved Used Pdf Page"
                , formData = {};
            function convertToPdf(response) {
                var URL = window.URL || window.webkitURL
                    , pdfResponse = new Blob([response],{
                    type: "application/pdf"
                });
                if (window.navigator && window.navigator.msSaveOrOpenBlob)
                    window.navigator.msSaveOrOpenBlob(pdfResponse);
                else {
                    var pdfURL = URL.createObjectURL(pdfResponse)
                        , tempLink = document.createElement("a");
                    tempLink.href = pdfURL,
                        tempLink.download = fileName,
                        tempLink.target = "_blank",
                        document.body.appendChild(tempLink),
                        tempLink.click(),
                        window.open(pdfURL, "_blank")
                }
            }
            function getTemplateURL(environmentURL, templateURL) {
                var obj = {
                    pdfTemplate: environmentURL + templateURL
                };
                formData = angular.extend({}, formData, obj)
            }
            function getHeaderComponentData(headerObject, vehicle) {
                var headerData = [];
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(headerObject, function(param, key) {
                    var addtext = "";
                    param.componentAttribute.prefix && (addtext = addtext + "<span>" + param.componentAttribute.prefix + "</span>"),
                        addtext = "" + addtext + __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getAttribute(param.configurationAttribute, vehicle),
                    param.componentAttribute.suffix && (addtext = addtext + "<span>" + param.componentAttribute.suffix + "</span>"),
                        headerData[param.configurationAttribute.attribute] = addtext
                }),
                    formData = angular.extend({}, formData, headerData)
            }
            function getKeyFactsData(keyFactsData, vehicle) {
                var keyFactsArray = [];
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(keyFactsData, function(param, key) {
                    keyFactsArray[param.configurationAttribute.attribute] = __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getKeyFactValue(param, vehicle)
                }),
                    formData = angular.extend(formData, keyFactsArray)
            }
            function getDynamicImage(dynamicImageData, vehicle, multiple, imgAOS) {
                var dynamicImgObject = angular.fromJson(dynamicImageData)
                    , dynamicImgData = []
                    , resultStr = '<div class="dynamic-img-row">';
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(dynamicImgObject, function(param, index) {
                    if ("true" === imgAOS) {
                        var imageAOSObj = getVehicles.getAOSImage()
                            , imageIndex = multiple ? index + 1 : index
                            , isSomeCondition = void 0 !== imageAOSObj[imageIndex]
                            , nextImage = isSomeCondition ? imageAOSObj[imageIndex].medium : "";
                        resultStr += __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getImageAttribute(nextImage, vehicle, multiple, imgAOS)
                    } else
                        resultStr += __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getImageAttribute(param.componentAttribute, vehicle, multiple, imgAOS);
                    multiple && (index + 1) % 3 == 0 && (resultStr += '</div><div class="dynamic-img-row">'),
                    dynamicImgObject.length - 1 === index && (resultStr += "</div>"),
                        dynamicImgData[param.componentAttribute.attribute] = resultStr,
                        resultStr = ""
                }),
                    formData = angular.extend({}, formData, dynamicImgData)
            }
            function getChartData(chartText, vehicle, environmentURL) {
                var chartTextObject = [];
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(chartText, function(param, key) {
                    chartTextObject[param.componentAttribute.displayAttribute] = __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getChartTextValue(param, vehicle, environmentURL)
                }),
                    formData = angular.extend({}, formData, chartTextObject)
            }
            function getStandardFeaturesData(standardFeaturesData, vehicle) {
                var standardFeaturesObject = angular.fromJson(standardFeaturesData)
                    , stdFittedData = []
                    , featuresStr = "";
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(standardFeaturesObject, function(param, key) {
                    featuresStr = __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getStandardFeaturesDataAttribute(param.componentAttribute, vehicle),
                        stdFittedData[param.componentAttribute.attribute] = featuresStr
                }),
                    formData = angular.extend({}, formData, stdFittedData)
            }
            function getDealerDetailsForPDF(dealerData, vehicle, openingHrsVal) {
                var dealerDataObject = angular.fromJson(dealerData)
                    , dealerDetailsFinalData = []
                    , dealerStr = "";
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(dealerDataObject, function(param, index) {
                    2 === index ? dealerDetailsFinalData[dealerDataObject[index].componentAttribute.attribute] = "" !== openingHrsVal ? "<span>(" + dealerDataObject[index].componentAttribute.attribute + " " + openingHrsVal + ")</span>" : "" : (dealerStr = __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getDealerDetailsAttributeForPDF(param.componentAttribute, vehicle),
                        dealerDetailsFinalData[param.componentAttribute.attribute] = dealerStr)
                }),
                    formData = angular.extend({}, formData, dealerDetailsFinalData)
            }
            function getDisclosureVEDIndicator(vedData, vehicle) {
                var vedDataObject = angular.fromJson(vedData)
                    , vedDataFinalData = [];
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(vedDataObject, function(param, key) {
                    vedDataFinalData[param.componentAttribute.ComponentType] = __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getVEDIndicatorAttribute(param.componentAttribute, vehicle)
                }),
                    formData = angular.extend({}, formData, vedDataFinalData)
            }
            return {
                getVehicleBrochurePDF: function(environmentURL, templateURL, nodeJSServiceURL, pdfConfigJSON, vehicle, openingHrsVal, imageOfAOS) {
                    var pdfData = angular.fromJson(pdfConfigJSON);
                    getTemplateURL(environmentURL, templateURL),
                    pdfData && (pdfData.dynamicSingleImage && getDynamicImage(pdfData.dynamicSingleImage, vehicle, !1, imageOfAOS),
                    pdfData.dynamicMultipleImage && getDynamicImage(pdfData.dynamicMultipleImage, vehicle, !0, imageOfAOS),
                    pdfData.keyFacts && getKeyFactsData(pdfData.keyFacts, vehicle),
                    pdfData.KeyfactsWithPdfCo2Emissions && getKeyFactsData(pdfData.KeyfactsWithPdfCo2Emissions, vehicle),
                    pdfData.keyFactsCo2ChartsText && getChartData(pdfData.keyFactsCo2ChartsText, vehicle, environmentURL),
                    pdfData.keyFactsCo2ChartsImage && getChartData(pdfData.keyFactsCo2ChartsImage, vehicle, environmentURL),
                    pdfData.fordDirectImage && getChartData(pdfData.fordDirectImage, vehicle, environmentURL),
                    pdfData.fordDirectText && getChartData(pdfData.fordDirectText, vehicle, environmentURL),
                    pdfData.euseddealerdetails && getDealerDetailsForPDF(pdfData.euseddealerdetails, vehicle, openingHrsVal),
                    pdfData.standardFitted && getStandardFeaturesData(pdfData.standardFitted, vehicle),
                    pdfData.headerIdentifier && getHeaderComponentData(pdfData.headerIdentifier, vehicle),
                    pdfData.headerModel && getHeaderComponentData(pdfData.headerModel, vehicle),
                    pdfData.disclosure && getDisclosureVEDIndicator(pdfData.disclosure, vehicle),
                    pdfData.warranty && function(warrantyInfo, vehicle) {
                        var warrantyInfObject = angular.fromJson(warrantyInfo)
                            , warrantyInfoData = [];
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(warrantyInfObject, function(param, key) {
                            warrantyInfoData[param.componentAttribute.attribute] = __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getWarrantyInfoAttribute(param.componentAttribute, vehicle)
                        }),
                            formData = angular.extend({}, formData, warrantyInfoData)
                    }(pdfData.warranty, vehicle),
                    pdfData.headerIndicator && function(headerIndicatorObject, vehicle) {
                        var headerIndicatorData = [];
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(headerIndicatorObject, function(param, key) {
                            headerIndicatorData[param.componentAttribute.attribute] = __WEBPACK_IMPORTED_MODULE_4_aUsed_utils_pdfVehicleAttributeUtil_js__.a.getHeaderIndicatorValue(param, vehicle)
                        }),
                            formData = angular.extend({}, formData, headerIndicatorData)
                    }(pdfData.headerIndicator, vehicle));
                    $http({
                        url: nodeJSServiceURL,
                        method: "POST",
                        responseType: "arraybuffer",
                        data: JSON.stringify(formData),
                        dataType: "json",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(function(response) {
                        convertToPdf(response.data)
                    }).catch(function() {
                        angular.element("#myModal").show()
                    })
                },
                convertToPdf: convertToPdf,
                getTemplateURL: getTemplateURL,
                getDealerDetailsForPDF: getDealerDetailsForPDF,
                getDynamicImage: getDynamicImage,
                getKeyFactsData: getKeyFactsData,
                getChartData: getChartData,
                getStandardFeaturesData: getStandardFeaturesData,
                getDisclosureVEDIndicator: getDisclosureVEDIndicator
            }
        }
        ]);
        __WEBPACK_IMPORTED_MODULE_3_aUsed_approved_used_approved_used_main_module_js__.a
    }
    , function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(4)
            , __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
            __webpack_require__(2))
            , __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__)
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = __webpack_require__(3)
            , __WEBPACK_IMPORTED_MODULE_2_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__)
            , __WEBPACK_IMPORTED_MODULE_3_configurationProvider__ = __webpack_require__(5)
            , __WEBPACK_IMPORTED_MODULE_4_numberFormat__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_configurationProvider__),
            __webpack_require__(23))
            , __WEBPACK_IMPORTED_MODULE_4_numberFormat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_numberFormat__)
            , api = {}
            , formatTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<span class="vehicle-attribute-prefix <%= prefixClass %>"><%= prefix %></span><span class="value"><%= value %></span><span class="vehicle-attribute-suffix <%= suffixClass %>"><%= suffix %></span>')
            , dealerDetailsTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template("<span><%= value %></span>")
            , keyFactTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<div class="key-fact-title"><span class="title-value"><span class="title-prefix"><%= titlePrefix %></span><%= title %><span class="title-suffix"><%= titleSuffix %></span></span><span class="key-value"><span class="attribute-prefix"><%= prefix %></span><span class="value" ><%= value %></span><span class="attribute-suffix"><%= suffix %></span></span></div>')
            , imageTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<div class="dynamic-img-col  <%= multipleClass %>"><img src="${src}" alt="${alt}" /></div>')
            , co2ChartImg = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<div class=" <%= imageARight %>"><img  class=" <%= imageHeight %> " src="${src}" alt="${alt}" /></div>');
        function getFormattedImage(result, multiple) {
            return result ? imageTemplate({
                alt: "#",
                src: result,
                multipleClass: multiple ? "multiple" : ""
            }) : ""
        }
        function getValueOfChart(obj, isImageAttribute, Co2ChartComponent, environmentURL) {
            return "true" === isImageAttribute ? co2ChartImg({
                alt: "#",
                src: environmentURL + obj,
                imageARight: "false" === Co2ChartComponent ? "imageARight" : "",
                imageHeight: "false" === Co2ChartComponent ? "imageHeight" : ""
            }) : obj
        }
        api.getAttribute = function(vehicleAttributes, vehicle) {
            var result = "";
            return vehicleAttributes && (result += api.formatItem(vehicleAttributes, vehicle)),
                result
        }
            ,
            api.getHeaderIndicatorValue = function(indicatorAttributes, vehicle) {
                var value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, indicatorAttributes.componentAttribute.attribute);
                return value && !0 === value ? indicatorAttributes.text.text : ""
            }
            ,
            api.getKeyFactValue = function(keyFactAttributes, vehicle) {
                var value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, keyFactAttributes.configurationAttribute.attribute);
                return value && keyFactAttributes.configurationAttribute.numeric && (value = __WEBPACK_IMPORTED_MODULE_4_numberFormat___default.a.formatNumber(value, keyFactAttributes.configurationAttribute)),
                    value || 0 === value ? keyFactTemplate({
                        title: keyFactAttributes.text.text,
                        prefix: keyFactAttributes.configurationAttribute.prefix,
                        value: value,
                        suffix: keyFactAttributes.configurationAttribute.suffix
                    }) : ""
            }
            ,
            api.formatItem = function(item, vehicle) {
                var value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, item.attribute);
                return value && item.numeric && (value = __WEBPACK_IMPORTED_MODULE_4_numberFormat___default.a.formatNumber(value, item)),
                    function(value, item) {
                        return value || 0 === value ? formatTemplate({
                            prefix: item.prefix,
                            value: value,
                            suffix: item.suffix,
                            prefixClass: item.prefix ? "pr8" : "",
                            suffixClass: item.suffix ? "pl8" : ""
                        }) : ""
                    }(value, item)
            }
            ,
            api.getImageAttribute = function(vehicleAttributes, vehicle, multiple, imgAOS) {
                var result = "";
                if ("true" !== imgAOS) {
                    var imageValue = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, vehicleAttributes.attribute);
                    result = getFormattedImage(void 0 !== imageValue ? imageValue.value : "", multiple)
                } else
                    result = getFormattedImage(vehicleAttributes, multiple);
                return result
            }
            ,
            api.getStandardFeaturesDataAttribute = function(vehicleAttributes, vehicle) {
                var resultStr = "";
                if (vehicleAttributes ? vehicleAttributes.attribute : null) {
                    var resObj = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, vehicleAttributes.attribute);
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(resObj, function(param, index) {
                        resultStr = resultStr + "<li><h4>" + param.Group + '</h4><ul class="pdfChildFeatures">',
                            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(param.Feature, function(value, key) {
                                resultStr = resultStr + "<li>" + value.Description + "</li>"
                            }),
                            resultStr += "</ul></li>"
                    })
                }
                return resultStr
            }
            ,
            api.getChartTextValue = function(chartTextAttributes, vehicle, environmentURL) {
                var obj, value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, chartTextAttributes.componentAttribute.attribute), textValue = "", isShowHash = !1, fordDirect = vehicle.Vehicle.CurrentCondition.SchemeAvailable[0];
                return obj = "true" === chartTextAttributes.componentAttribute.isImageAttribute ? chartTextAttributes.componentAttribute : chartTextAttributes.text,
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(obj, function(param, index) {
                        index === value && (textValue = getValueOfChart(obj[value], chartTextAttributes.componentAttribute.isImageAttribute, chartTextAttributes.componentAttribute.isCo2ChartComponent, environmentURL),
                            isShowHash = !0)
                    }),
                "false" === chartTextAttributes.componentAttribute.isCo2ChartComponent && "false" === chartTextAttributes.componentAttribute.isImageAttribute && "FordDirect" !== fordDirect && (textValue = ""),
                isShowHash || (textValue = "",
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(obj, function(param, index) {
                        "#" === index && (textValue = getValueOfChart(obj["#"], chartTextAttributes.componentAttribute.isImageAttribute, chartTextAttributes.componentAttribute.isCo2ChartComponent, environmentURL))
                    })),
                    textValue
            }
            ,
            api.getKeyFactValue = function(keyFactAttributes, vehicle) {
                var value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, keyFactAttributes.configurationAttribute.attribute);
                return value && keyFactAttributes.configurationAttribute.numeric && (value = __WEBPACK_IMPORTED_MODULE_4_numberFormat___default.a.formatNumber(value, keyFactAttributes.configurationAttribute)),
                    value || 0 === value ? keyFactTemplate({
                        titlePrefix: keyFactAttributes.componentAttribute.prefix,
                        title: keyFactAttributes.text.text,
                        titleSuffix: keyFactAttributes.componentAttribute.suffix,
                        prefix: keyFactAttributes.configurationAttribute.prefix,
                        value: value,
                        suffix: keyFactAttributes.configurationAttribute.suffix
                    }) : ""
            }
            ,
            api.getDealerDetailsAttributeForPDF = function(vehicleAttributes, vehicle) {
                var resObj = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, vehicleAttributes.attribute)
                    , value = "";
                return "VendorInformation.ContactInformation.ContactMethod" === vehicleAttributes.attribute ? value += resObj[1].value : "VendorInformation.VendorName" === vehicleAttributes.attribute ? value += resObj : __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(resObj, function(item) {
                    value += item.value
                }),
                    function(value) {
                        return value || 0 === value ? dealerDetailsTemplate({
                            value: value
                        }) : ""
                    }(value)
            }
            ,
            api.getVEDIndicatorAttribute = function(componentAttributes, vehicle) {
                return "Vehicle.Identity.VEDIndicator" === componentAttributes.ComponentType ? __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, componentAttributes.ComponentType) ? componentAttributes.disclosureTextValue : "" : componentAttributes.disclosureTextValue
            }
            ,
            api.getWarrantyInfoAttribute = function(warrantyAttributes, vehicle) {
                var result = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.get(vehicle, warrantyAttributes.attribute);
                return "" !== result ? result[0] : ""
            }
            ,
            __webpack_exports__.a = api
    }
    , function(module, exports) {}
]);
