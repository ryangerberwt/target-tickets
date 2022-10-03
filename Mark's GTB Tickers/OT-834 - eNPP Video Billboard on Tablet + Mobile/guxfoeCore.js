webpackJsonp([1], [, , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_events_modelWalkAndCompareEvents_js__ = __webpack_require__(215),
        __WEBPACK_IMPORTED_MODULE_1_analytics_events_contactUsEvents_js__ = __webpack_require__(218),
        __WEBPACK_IMPORTED_MODULE_2_analytics_events_shareEvents_js__ = __webpack_require__(219),
        __WEBPACK_IMPORTED_MODULE_3_analytics_events_imageVideoInteractionsEvents_js__ = __webpack_require__(220),
        __WEBPACK_IMPORTED_MODULE_4_analytics_events_miniDealerLocatorEvents_js__ = __webpack_require__(221),
        __WEBPACK_IMPORTED_MODULE_5_analytics_events_dealerLocatorEvents_js__ = __webpack_require__(222),
        __WEBPACK_IMPORTED_MODULE_6_analytics_events_threesixtyColouriserEvents_js__ = __webpack_require__(223),
        __WEBPACK_IMPORTED_MODULE_7_analytics_events_brightcoveVideoEvents_js__ = __webpack_require__(224),
        __WEBPACK_IMPORTED_MODULE_8_analytics_events_cookieMessageEvents_js__ = __webpack_require__(225),
        __WEBPACK_IMPORTED_MODULE_9_analytics_events_searchEvents_js__ = __webpack_require__(226),
        __WEBPACK_IMPORTED_MODULE_10_analytics_events_carouselEvents_js__ = __webpack_require__(227),
        __WEBPACK_IMPORTED_MODULE_11_analytics_events_galleryEvents_js__ = __webpack_require__(228),
        __WEBPACK_IMPORTED_MODULE_12_analytics_events_commonDealerLocatorEvents_js__ = __webpack_require__(85),
        __WEBPACK_IMPORTED_MODULE_13_analytics_events_accordionEvents_js__ = __webpack_require__(113),
        __WEBPACK_IMPORTED_MODULE_14_analytics_events_hotspotsEvents_js__ = __webpack_require__(229),
        __WEBPACK_IMPORTED_MODULE_15_analytics_events_specQuickViewEvents_js__ = __webpack_require__(230),
        __WEBPACK_IMPORTED_MODULE_16_analytics_events_tabsEvents_js__ = __webpack_require__(231),
        __WEBPACK_IMPORTED_MODULE_17_analytics_events_showroomEvents_js__ = __webpack_require__(232),
        __WEBPACK_IMPORTED_MODULE_18_analytics_events_ctaEvents_js__ = __webpack_require__(233),
        __WEBPACK_IMPORTED_MODULE_19_analytics_events_socialEvents_js__ = __webpack_require__(235),
        __WEBPACK_IMPORTED_MODULE_20_analytics_events_promotionsShowroomEvents_js__ = __webpack_require__(236),
        __WEBPACK_IMPORTED_MODULE_21_analytics_events_downloadEvents_js__ = __webpack_require__(237),
        __WEBPACK_IMPORTED_MODULE_22_analytics_events_selectVehiclesEvents_js__ = __webpack_require__(238),
        __WEBPACK_IMPORTED_MODULE_23_analytics_events_formWizardEvents_js__ = __webpack_require__(239),
        __WEBPACK_IMPORTED_MODULE_24_analytics_events_formErrorEvents_js__ = __webpack_require__(240),
        __WEBPACK_IMPORTED_MODULE_25_analytics_events_youtubeVideoEvents_js__ = __webpack_require__(241),
        __WEBPACK_IMPORTED_MODULE_26_analytics_events_liveChatEvents_js__ = __webpack_require__(242),
        __WEBPACK_IMPORTED_MODULE_27_analytics_events_clickToCallEvents_js__ = __webpack_require__(243),
        __WEBPACK_IMPORTED_MODULE_28_analytics_bandpevents_bandpEvents_js__ = __webpack_require__(245),
        __WEBPACK_IMPORTED_MODULE_29_analytics_events_additionalLeaseTaxCalculatorEvents_js__ = __webpack_require__(270),
        __WEBPACK_IMPORTED_MODULE_30_analytics_events_phevSavingsCalculatorEvents_js__ = __webpack_require__(271),
        api = {
            init: function() {
                window.digitaldata = window.digitaldata || {}, __WEBPACK_IMPORTED_MODULE_0_analytics_events_modelWalkAndCompareEvents_js__.a.init(), __WEBPACK_IMPORTED_MODULE_7_analytics_events_brightcoveVideoEvents_js__.a.init(), __WEBPACK_IMPORTED_MODULE_28_analytics_bandpevents_bandpEvents_js__.a.init()
            },
            getLiveChatEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_26_analytics_events_liveChatEvents_js__.a
            },
            getModelWalkAndCompareEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_0_analytics_events_modelWalkAndCompareEvents_js__.a
            },
            getContactUsEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_1_analytics_events_contactUsEvents_js__.a
            },
            getDownloadEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_21_analytics_events_downloadEvents_js__.a
            },
            getShareEventsTracker: function() {
                return __WEBPACK_IMPORTED_MODULE_2_analytics_events_shareEvents_js__.a
            },
            getCookieMessageEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_8_analytics_events_cookieMessageEvents_js__.a
            },
            getSocialEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_19_analytics_events_socialEvents_js__.a
            },
            getImageVideoInteractionsEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_3_analytics_events_imageVideoInteractionsEvents_js__.a
            },
            getThreesixtyColouriserEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_6_analytics_events_threesixtyColouriserEvents_js__.a
            },
            getMiniDealerLocatorEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_4_analytics_events_miniDealerLocatorEvents_js__.a
            },
            getSearchEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_9_analytics_events_searchEvents_js__.a
            },
            getDealerLocatorEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_5_analytics_events_dealerLocatorEvents_js__.a
            },
            getBrightcoveVideoEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_7_analytics_events_brightcoveVideoEvents_js__.a
            },
            getCommonDealerLocatorEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_12_analytics_events_commonDealerLocatorEvents_js__.a
            },
            getGalleryEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_11_analytics_events_galleryEvents_js__.a
            },
            getAccordionEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_13_analytics_events_accordionEvents_js__.a
            },
            getHotspotsEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_14_analytics_events_hotspotsEvents_js__.a
            },
            getSpecQuickViewEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_15_analytics_events_specQuickViewEvents_js__.a
            },
            getTabsEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_16_analytics_events_tabsEvents_js__.a
            },
            getShowroomEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_17_analytics_events_showroomEvents_js__.a
            },
            getPromotionsShowroomEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_20_analytics_events_promotionsShowroomEvents_js__.a
            },
            getCarouselEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_10_analytics_events_carouselEvents_js__.a
            },
            getCtaEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_18_analytics_events_ctaEvents_js__.a
            },
            getSelectVehiclesEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_22_analytics_events_selectVehiclesEvents_js__.a
            },
            getFormWizardEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_23_analytics_events_formWizardEvents_js__.a
            },
            getFormErrorEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_24_analytics_events_formErrorEvents_js__.a
            },
            getYoutubeVideoEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_25_analytics_events_youtubeVideoEvents_js__.a
            },
            getClickToCallEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_27_analytics_events_clickToCallEvents_js__.a
            },
            getAdditionalLeaseTaxCalculatorEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_29_analytics_events_additionalLeaseTaxCalculatorEvents_js__.a
            },
            getPhevSavingsCalculatorEvents: function() {
                return __WEBPACK_IMPORTED_MODULE_30_analytics_events_phevSavingsCalculatorEvents_js__.a
            }
        };
    __webpack_exports__.a = api
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.fjs = __webpack_require__(272)
    }).call(exports, __webpack_require__(9))
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.mediaQuery = __webpack_require__(214)
    }).call(exports, __webpack_require__(9))
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.configurationProvider = __webpack_require__(244)
    }).call(exports, __webpack_require__(9))
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.analyticsVariables = __webpack_require__(216)
    }).call(exports, __webpack_require__(9))
}, , , , function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.isAuthor = __webpack_require__(274)
    }).call(exports, __webpack_require__(9))
}, , , function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.objectUtil = __webpack_require__(217)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var configuration, vehicleAttributes, __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__), __webpack_require__(14)),
        __WEBPACK_IMPORTED_MODULE_2_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_configurationProvider__),
        __WEBPACK_IMPORTED_MODULE_4_numberFormat__ = __webpack_require__(72),
        __WEBPACK_IMPORTED_MODULE_4_numberFormat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_numberFormat__),
        api = {},
        formatTemplate = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.template('<span class="vehicle-attribute-group <%= attributeKey %> <%= itemClass %>"><span class="vehicle-attribute-prefix"><%= prefix %></span><span class="value"><%= value %></span><span class="vehicle-attribute-suffix"><%= suffix %></span></span>');

    function formatItem(item, vehicle, attributeKey) {
        var value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.getPropertyByString(item.backendVariable, vehicle);
        return value && item.numeric && (value = __WEBPACK_IMPORTED_MODULE_4_numberFormat___default.a.formatNumber(value, item)), getFormattedAttribute(value, item, attributeKey)
    }

    function getFormattedAttribute(value, item, attributeKey) {
        return value || 0 === value ? formatTemplate({
            prefix: item.prefix,
            value: value,
            suffix: item.suffix,
            attributeKey: attributeKey,
            itemClass: item.backendVariable.replace(/\./g, "-")
        }) : ""
    }

    function getVehicleAttributes() {
        return configuration && vehicleAttributes || (configuration = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get($("#global-market-configuration")), vehicleAttributes = configuration.vehicleAttributes), void 0 === vehicleAttributes && (vehicleAttributes = {}), vehicleAttributes
    }
    api.getAttributeVariant = function(attributeKey) {
        var definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null;
        if (definition) return definition.variant
    }, api.getAttribute = function(attributeKey, vehicle) {
        var vehicleAttributes = getVehicleAttributes(),
            definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null,
            result = "";
        return definition && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(definition.items, function(item) {
            result += formatItem(item, vehicle, attributeKey)
        }), result
    }, api.getAttribute = function(attributeKey, vehicle, valueOverwrite) {
        var vehicleAttributes = getVehicleAttributes(),
            definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null,
            result = "";
        return definition && (valueOverwrite && !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(definition.items) ? result = getFormattedAttribute(valueOverwrite, definition.items[0], attributeKey) : __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(definition.items) || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(definition.items, function(item) {
            result += formatItem(item, vehicle, attributeKey)
        })), result
    }, api.getSingleAttributeTuple = function(attributeKey, vehicle) {
        var vehicleAttributes = getVehicleAttributes(),
            definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null,
            result = {};
        return definition && (result = function(item, vehicle) {
            var result = {};
            result.value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.getPropertyByString(item.backendVariable, vehicle), item.numeric && (result.value = __WEBPACK_IMPORTED_MODULE_4_numberFormat___default.a.formatNumber(result.value, item));
            item.prefix && (result.prefix = item.prefix);
            item.suffix && (result.suffix = item.suffix);
            return result
        }(definition.items[0], vehicle)), result
    }, api.getAttributeString = function(attributeKey, vehicle) {
        var vehicleAttributes = getVehicleAttributes(),
            definition = vehicleAttributes ? vehicleAttributes[attributeKey] : null,
            result = [];
        return definition && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(definition.items, function(item) {
            result.push(function(item, vehicle) {
                var value = __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.getPropertyByString(item.backendVariable, vehicle),
                    result = [];
                if (value && "0" !== value) return item.numeric && (value = __WEBPACK_IMPORTED_MODULE_4_numberFormat___default.a.formatNumber(value, item)), item.prefix && result.push(item.prefix), result.push(value), item.suffix && result.push(item.suffix), result.join(" ");
                return ""
            }(item, vehicle))
        }), result.join("")
    }, api.getAttributeWithoutFormatter = function(attributeKey, vehicle) {
        var result, resultArray = [],
            vehicleAttributes = getVehicleAttributes();
        return vehicleAttributes[attributeKey] && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(vehicleAttributes[attributeKey].items, function(item) {
            resultArray.push(__WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.getPropertyByString(item.backendVariable, vehicle))
        }), resultArray.length > 0 && (result = resultArray.join("")), result
    }, api.getAttributeKeyFromValue = function(attributeBackendVariable) {
        var result, vehicleAttributes = getVehicleAttributes();
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(vehicleAttributes, function(definition) {
            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(definition.items, function(item) {
                item.backendVariable === attributeBackendVariable && (result = definition.name)
            })
        }), result
    }, api.getAttributeValueFromKey = function(attributeKey) {
        var valuePath, vehicleAttributes = getVehicleAttributes();
        return vehicleAttributes[attributeKey] && (valuePath = vehicleAttributes[attributeKey].items[0].backendVariable), valuePath
    }, api.getAttributePriceFlag = function(attributeKey) {
        var priceFlag = !1,
            vehicleAttributes = getVehicleAttributes();
        return void 0 !== vehicleAttributes && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.has(vehicleAttributes[attributeKey], "items") && (priceFlag = vehicleAttributes[attributeKey].items[0].price), priceFlag
    }, api.groupVehicleAttributesByVehicle = function(attributes) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.uniqBy(attributes, "path").map(function(item) {
            return {
                path: item.path.replace(".html", ""),
                attributes: attributes.filter(function(vehicle) {
                    return vehicle.path === item.path
                }).map(function(_ref) {
                    var attribute = _ref.attribute,
                        prefix = _ref.prefix,
                        suffix = _ref.suffix,
                        disclosure = _ref.disclosure;
                    return {
                        attribute: attribute,
                        attributeId: _ref.attributeId,
                        prefix: prefix,
                        suffix: suffix,
                        disclosure: disclosure
                    }
                })
            }
        })
    }, __webpack_exports__.a = api
}, , , , , , function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.guxTooltip = __webpack_require__(213)
    }).call(exports, __webpack_require__(9))
}, , function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.guxDisclosure = __webpack_require__(281)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_2_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_configurationProvider__),
        __WEBPACK_IMPORTED_MODULE_4_guxfoe_form_ngGuxForms_js__ = __webpack_require__(90),
        __WEBPACK_IMPORTED_MODULE_5_angular_route__ = __webpack_require__(29),
        __WEBPACK_IMPORTED_MODULE_6_angular_sanitize__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_route__), __webpack_require__(22)),
        app = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_sanitize__), __WEBPACK_IMPORTED_MODULE_2_angular___default.a.module("wizard", ["ngRoute", "lastsearchcookie", "ngSanitize", "ngGuxKeyboardTriggerClick", "ngGuxGoogleMaps", __WEBPACK_IMPORTED_MODULE_4_guxfoe_form_ngGuxForms_js__.a.module.name]));

    function toObject(collection) {
        var map = {};
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(collection, function(item) {
            map[item.key] = item.value
        }), map
    }
    app.configurationBuilder = function(component) {
        var $component = $(component),
            globalConfig = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get($("#global-market-configuration")),
            configuration = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get($component),
            serviceConfig = toObject(configuration.serviceConfig),
            localisationConfig = function(componentConfig) {
                var polygons = [],
                    localisationConfig = toObject(componentConfig.localisationConfig);
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(localisationConfig.polygon.split("%2C"), function(item) {
                    var latLng = item.match(/[^+]\d*\.\d*/g);
                    latLng && polygons.push({
                        lng: latLng[0],
                        lat: latLng[1]
                    })
                }), localisationConfig.polygon = polygons, localisationConfig
            }(configuration),
            addressFormatConfig = function(componentConfig) {
                var i, addressConfig = componentConfig.addressFormatConfig,
                    addressFormatObj = {},
                    addressFormat = [];
                for (i = 0; i < addressConfig.entries.length; i++) addressFormat[i] = addressConfig.entries[i].entry;
                return addressFormatObj.addressSeparator = addressConfig.separator, addressFormatObj.addressFormat = addressFormat, addressFormatObj
            }(configuration),
            distanceConfig = configuration.distanceConfig,
            filterConfig = configuration.filterConfig[0],
            userExperienceConfig = function(componentConfig) {
                for (var userExpConfig = {}, i = 0; i < componentConfig.length; i++) userExpConfig[componentConfig[i].key] = componentConfig[i].value;
                return userExpConfig
            }(configuration.uxpConfig),
            dealershipServices = function(componentConfig) {
                var property, filter, services = {};
                if (componentConfig.filters)
                    for (property in componentConfig.filters) Object.prototype.hasOwnProperty.call(componentConfig.filters, property) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(componentConfig.filters[property]) && (filter = componentConfig.filters[property], services[componentConfig.filters[property].option] = filter);
                return services
            }(filterConfig);
        configuration.config.dealerLocatorURL = configuration.dealerLocatorUrl, userExperienceConfig.dlAutocompleteUrl = configuration.dlAutocompleteUrl, userExperienceConfig.services = dealershipServices, app.value("WIZARD_CONF", configuration), app.value("TIME_FORMAT_HOURS_DELIMITER", configuration.delimiter), app.value("CONF", configuration.config), app.value("DL_SERVICE", userExperienceConfig), app.value("SERVICE_CONF", serviceConfig), app.value("LOCALISATION_CONF", localisationConfig), app.value("GLOBAL_CONF", globalConfig), app.value("ADDRESS_FORMAT_CONF", addressFormatConfig), app.value("DISTANCE_CONF", distanceConfig), app.value("FILTER_CONF", filterConfig), app.value("_", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a)
    }, __webpack_exports__.a = app
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_mediaQuery__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(5)),
        __WEBPACK_IMPORTED_MODULE_1_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mediaQuery__),
        __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
    module = {
        preventScrollBody: function(forceOnDesktop) {
            var $body = $("body:not(.cq-wcm-edit)"),
                overlayCount = $body.data("overlayCount") || 0,
                bodyScrollPrevented = !1;
            return $body.length && ("mobile" === __WEBPACK_IMPORTED_MODULE_1_mediaQuery___default.a.getMediaType() || forceOnDesktop) && (bodyScrollPrevented = !0, overlayCount++, $body.data("overlayCount", overlayCount).addClass("no-scroll")), bodyScrollPrevented
        },
        allowScrollBody: function(scrollTopPosition, scrollTopOnDesktop) {
            var $body = $("body:not(.cq-wcm-edit)"),
                overlayCount = $body.data("overlayCount") || 0,
                animationDuration = "mobile" === __WEBPACK_IMPORTED_MODULE_1_mediaQuery___default.a.getMediaType() ? 0 : 1;
            $body.length && (overlayCount <= 1 ? ($body.removeClass("no-scroll"), __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isNumber(scrollTopPosition) && ("mobile" === __WEBPACK_IMPORTED_MODULE_1_mediaQuery___default.a.getMediaType() || scrollTopOnDesktop) && $("body, html").animate({
                scrollTop: scrollTopPosition + "px"
            }, animationDuration), overlayCount = 0) : overlayCount--, $body.data("overlayCount", overlayCount))
        }
    }, __webpack_exports__.a = module
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.guxOverlay = __webpack_require__(273)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var marketWideKillSwitch, __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_2_vehicleAttributeUtil__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__), __webpack_require__(15)),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_configurationProvider__),
        api = {},
        nameplateCodes = [],
        isDataSet = !1;

    function initData() {
        var killSwitchConfig = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get($("#market-wide-configuration"));
        marketWideKillSwitch = killSwitchConfig.marketWidePricesSuppression, nameplateCodes = killSwitchConfig.nameplatesWithPriceSuppression, isDataSet = !0
    }
    api.isNameplatePriceHidden = function(nameplateCode) {
        return isDataSet || initData(), __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.includes(nameplateCodes, nameplateCode.split("~")[0])
    }, api.areAllPricesHidden = function() {
        return isDataSet || initData(), marketWideKillSwitch
    }, api.isAttributeHidden = function(attributeName, modelCode) {
        var marketLanguagePriceFlag = __WEBPACK_IMPORTED_MODULE_2_vehicleAttributeUtil__.a.getAttributePriceFlag(attributeName),
            nameplateCode = function(modelCode) {
                var nameplateCode = modelCode;
                return modelCode && modelCode.indexOf(".") > 0 && (nameplateCode = modelCode.substring(0, modelCode.indexOf("."))), nameplateCode
            }(modelCode),
            nameplateCodeIsOnKillSwitchList = api.isNameplatePriceHidden(nameplateCode);
        return (marketWideKillSwitch || nameplateCodeIsOnKillSwitchList) && marketLanguagePriceFlag
    }, __webpack_exports__.a = api
}, , , , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var timer, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_pubsub__ = __webpack_require__(18),
        winWidth = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pubsub__), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).width()),
        winHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).height(),
        onResize = function() {
            void 0 !== timer && window.clearTimeout(timer), timer = window.setTimeout(function() {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).width() === winWidth && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).height() === winHeight || (winWidth = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).width(), winHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).height(), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("window:resize"))
            }, 50)
        };
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).resize(onResize)
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1),
        api = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__), {}),
        stickyItemRegistry = [],
        itemAddedCallbacks = [];

    function elemIsInRegistry($elem, stickyItemRegistry) {
        return !!__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.reduce(stickyItemRegistry, function(result, value) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEqual(value, $elem[0]) && result.push($elem[0]), result
        }, []).length
    }
    api.addItemToRegistry = function($elem) {
        elemIsInRegistry($elem, stickyItemRegistry) || (stickyItemRegistry.push($elem[0]), itemAddedCallbacks.length && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(itemAddedCallbacks, function(callback) {
            callback()
        }))
    }, api.removeItemFromRegistry = function($elem) {
        elemIsInRegistry($elem, stickyItemRegistry) && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.pull(stickyItemRegistry, $elem[0])
    }, api.pageHasStickyItem = function() {
        return !!stickyItemRegistry.length
    }, api.getStickyItemHeight = function() {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.reduce(stickyItemRegistry, function(result, element) {
            return result += element.getBoundingClientRect().height
        }, 0)
    }, api.onItemAdded = function(callback) {
        itemAddedCallbacks.push(callback)
    }, api.init = function() {
        stickyItemRegistry = []
    }, __webpack_exports__.a = api
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.guxAccordion = __webpack_require__(304)
    }).call(exports, __webpack_require__(9))
}, , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsEventLayer_js__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_3_guxfoe_form_component_form_dataservice_js__ = __webpack_require__(54),
        __WEBPACK_IMPORTED_MODULE_4_scrollToUtil__ = __webpack_require__(91),
        api = {},
        formErrorEvents = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsEventLayer_js__.a.getFormErrorEvents();

    function FormValidate($form) {
        this.$body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body"), this.errorTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<small class="error${isWarning ? " error-is-warning" : ""}">${errorMessage}</small>'), this.serverGeneralErrors = [], this.serverFieldErrors = [], this.$form = $form, this.$formElementValidation = this.$form.find("[data-validation]"), this.isInOverlay = this.$body.hasClass("wizard-overlay-open") || this.$body.hasClass("is-overlay-open"), this.$overlayContainer = this.$form.closest(".overlay-container"), this.cookieToBslIsTrue = __WEBPACK_IMPORTED_MODULE_3_guxfoe_form_component_form_dataservice_js__.a.getBSLConfigCookieToBsl(), this.$mainNav = this.$body.find(".main-nav"), this.dealerLocatorErrorContainer = null, this.overlayOffset = this.isInOverlay ? parseInt(this.$overlayContainer.css("padding-top"), 10) : 0, this.bindUIEvents(), this.config = {
            validateOnBlur: !0
        }, this.uiFeedback = {
            clear: function($element) {
                var $errorContainer = $element.parent(),
                    $errorMessage = $errorContainer.find("small.error").length ? $errorContainer.find("small.error:not(.dealer-locator-field-error)") : $element.closest(".error-container").find("small.error:not(.dealer-locator-field-error)"),
                    isDealerLocator = $element.hasClass("dealer-locator-filed-search-input");
                !$errorMessage && $element.parent().hasClass("addressLookup-input") && ($errorMessage = ($errorContainer = $element.closest(".form-address-lookup-input-and-button-wrapper").find(".addressLookup-search")).find("small.error").length ? $errorContainer.find("small.error:not(.dealer-locator-field-error)") : $element.closest(".error-container").find("small.error:not(.dealer-locator-field-error)")), isDealerLocator && ($errorMessage = ($errorContainer = this.dealerLocatorErrorContainer || $element.closest(".component-content").find(".error-container")).find("small.error:not(.dealer-locator-field-error)"), this.dealerLocatorErrorContainer = $errorContainer), $element.add($element.parent()).removeClass("valid").removeClass("error"), $errorContainer.removeClass("valid").removeClass("error"), $errorMessage.remove()
            }.bind(this),
            invalid: function($element, message, isWarning) {
                $element.hasClass("error") || ($element.removeClass("valid").addClass("invalid").addClass("error"), $element.parent().addClass("error"), this.addErrorMessage($element, message, isWarning), $element.parent().removeClass("valid").addClass("error"))
            }.bind(this),
            valid: function($element) {
                $element.hasClass("valid") || ($element.removeClass("error").removeClass("invalid").addClass("valid"), $element.parent().removeClass("error").addClass("valid").find("small.error:not(.dealer-locator-field-error)").remove())
            }
        }, this.validators = {
            required: function($element) {
                var value = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.trim($element.val()),
                    type = $element.prop("type"),
                    checked = $element.prop("checked");
                return "checkbox" === type ? checked : value.length > 0 || checked
            },
            regExp: function($element, rule) {
                return new RegExp(rule).test($element.val())
            },
            confirmValue: function($container) {
                var elements = $container.find("input");
                return elements[0].value === elements[1].value
            },
            validationValue: function($element) {
                return "true" === $element[0].dataset.validationValue
            }
        }, this.$form.addClass("is-validation-enabled")
    }
    FormValidate.prototype.getStickyNavHeight = function() {
        return this.$mainNav.closest(".sticky-nav").length > 0 ? this.$mainNav.outerHeight() : 0
    }, FormValidate.prototype.serverValidationFieldErrors = function(errors) {
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(errors, function(error) {
            var $field = this.$form.find('[name="' + error.field + '"]').not('[type="hidden"]').eq(0),
                errorMessage = error.message;
            $field.addClass("server-side-error"), this.uiFeedback.invalid($field, errorMessage), this.serverFieldErrors.push($field), $field.length || (errorMessage = error.message + " (" + error.field + ")", this.serverSideValidationAppendGeneralError(errorMessage))
        }.bind(this)), this.serverGeneralErrors.length && this.scrollToForm()
    }, FormValidate.prototype.serverValidationGeneralErrors = function(error) {
        this.serverSideValidationAppendGeneralError(error), this.scrollToForm()
    }, FormValidate.prototype.serverValidationClearErrors = function(fieldErrors) {
        var oldErrors = function() {
            return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(this.serverFieldErrors, function($oldError) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(fieldErrors, function(error, field) {
                    return $oldError.attr("name") === field
                })
            })
        }.bind(this);
        this.serverGeneralErrors.length && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.serverGeneralErrors, function($error) {
            $error.remove()
        }), this.serverFieldErrors.length && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(oldErrors(), function($field) {
            this.uiFeedback.clear($field), $field.removeClass("server-side-error").removeClass("invalid")
        }.bind(this)), this.serverFieldErrors = [], this.serverGeneralErrors = []
    }, FormValidate.prototype.serverSideValidationAppendGeneralError = function(error) {
        var $template = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this.errorTemplate({
            errorMessage: error,
            isWarning: !1
        })).addClass("server-side-error");
        this.serverGeneralErrors.push($template), this.$form.prepend($template)
    }, FormValidate.prototype.scrollToForm = function() {
        var formOffset = this.$form.position().top,
            $context = __WEBPACK_IMPORTED_MODULE_4_scrollToUtil__.a.getContext(),
            formOffsetValue = this.isInOverlay ? formOffset : formOffset - this.getStickyNavHeight();
        __WEBPACK_IMPORTED_MODULE_4_scrollToUtil__.a.scroll(formOffsetValue, 500, $context)
    }, FormValidate.prototype.scrollToFirstInvalidInput = function() {
        var $firstInvalidInput, $context = __WEBPACK_IMPORTED_MODULE_4_scrollToUtil__.a.getContext(),
            firstInvalidInputOffset = 0;
        $firstInvalidInput = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(this.$formElementValidation, function(input) {
            return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(input).is(".error, .invalid")
        })).closest(".form-validation-wrapper:visible"), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty($firstInvalidInput) || (firstInvalidInputOffset = this.isInOverlay ? $firstInvalidInput.position().top + this.overlayOffset : $firstInvalidInput.offset().top - this.getStickyNavHeight(), __WEBPACK_IMPORTED_MODULE_4_scrollToUtil__.a.scroll(firstInvalidInputOffset, 500, $context))
    }, FormValidate.prototype.serverSideValidation = function(response) {
        var status, isEmptyData, isBadJsonResponse, $deffer = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
        return response ? (status = response.status, isEmptyData = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(status) || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(status.statusCode), isBadJsonResponse = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(response.data) && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(status.errorMessage), isEmptyData && $deffer.reject(), this.serverValidationClearErrors(response.data), 200 === status.statusCode ? $deffer.resolve() : (isBadJsonResponse && $deffer.reject(), response.data && response.data.length && this.serverValidationFieldErrors(response.data), status.errorMessage && this.serverValidationGeneralErrors(status.errorMessage)), $deffer.promise()) : ($deffer.reject(), $deffer.promise())
    }, FormValidate.prototype.bindUIEvents = function() {
        this.$formElementValidation.on({
            change: function(e) {
                var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target),
                    isNotDataValidation = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined($el.attr("data-validation-value"));
                this.config.validateOnBlur && this.isInputValidationEnabled($el) && isNotDataValidation && this.validateInput($el, !1)
            }.bind(this),
            validationValueChange: function(e) {
                var $el = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.target);
                this.validateInput($el, !1)
            }.bind(this)
        }), this.$form.submit(function(e) {
            this.$formElementValidation = this.$form.find("[data-validation]"), this.isFormValidationEnabled() && (e.preventDefault(), this.cancelSubmit = !1, this.$formElementValidation = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(this.$form.find("[data-validation]"), function(input) {
                return !__WEBPACK_IMPORTED_MODULE_0_jquery___default()(input).closest(".group-disabled").length
            }), this.ngValidation && this.ngValidation.validate(this), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.$formElementValidation, function(element) {
                var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
                this.isInputValidationEnabled($element) && this.validateInput($element, !0)
            }.bind(this)), this.cancelSubmit || 0 !== this.$form.closest(".wizard").length ? (formErrorEvents.trackFormErrors(), this.scrollToFirstInvalidInput()) : (__WEBPACK_IMPORTED_MODULE_2_analytics_analyticsEventLayer_js__.a.getFormWizardEvents().trackFormSubmit(this.$form), __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsEventLayer_js__.a.getFormWizardEvents().setSuccessFormDictionaryData(this.$form), this.$form.find(".field-disabled").detach(), this.ajaxSubmit()))
        }.bind(this))
    }, FormValidate.prototype.cleanData = function(data) {
        var jsonData = JSON.parse(data);
        return jsonData.fields = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(jsonData.fields, function(item) {
            if (item.value.length > 0) return item
        }), JSON.stringify(jsonData)
    }, FormValidate.prototype.resetForm = function() {
        this.$form[0].reset()
    }, FormValidate.prototype.ajaxSubmit = function() {
        var path = __WEBPACK_IMPORTED_MODULE_3_guxfoe_form_component_form_dataservice_js__.a.buildRequestPath(this.$form),
            data = __WEBPACK_IMPORTED_MODULE_3_guxfoe_form_component_form_dataservice_js__.a.initDataStructure(this.$form).fields.remove("buyPlans-hidden").getData(),
            successPage = this.$form.data("success"),
            errorPage = this.$form.data("error"),
            cleanedData = this.cleanData(data);

        function handleSubmitSuccess() {
            this.resetForm(), window.location = successPage
        }

        function handleSubmitFailure() {
            this.resetForm(), window.location = errorPage
        }
        this.assignCheckboxValue(), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
            type: "POST",
            url: path,
            data: cleanedData,
            contentType: "application/json",
            dataType: "json",
            context: this,
            xhrFields: {
                withCredentials: this.cookieToBslIsTrue
            },
            timeout: 3e4,
            errorPage: errorPage,
            successPage: successPage,
            success: function(response) {
                this.serverSideValidation(response).then(handleSubmitSuccess.bind(this), handleSubmitFailure.bind(this))
            },
            error: handleSubmitFailure
        })
    }, FormValidate.prototype.assignCheckboxValue = function() {
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(this.$form[0], function(input, key) {
            "checkbox" === input.type && input.checked && "on" === input.value && (input.value = !0)
        })
    }, FormValidate.prototype.isFormValidationEnabled = function() {
        return this.$formElementValidation.length > 0
    }, FormValidate.prototype.isInputValidationEnabled = function($element) {
        return $element.data("validation") && !$element.hasClass("field-disabled")
    }, FormValidate.prototype.addErrorMessage = function($element, message, isWarning) {
        var $errorParentElement, errorMsgIsVisible = !1;
        "checkbox" === $element.attr("type") ? $errorParentElement = $element.closest("fieldset") : $element.hasClass("radio-button-hidden") || "radio" === $element.attr("type") ? $errorParentElement = $element.closest("div").addClass("error-container") : $element.parent().hasClass("addressLookup-input") ? errorMsgIsVisible = !!($errorParentElement = $element.closest(".addressLookup-input")).find(".error").length : $errorParentElement = $element.hasClass("dealer-locator-filed-search-input") ? this.dealerLocatorErrorContainer : $element.closest("label"), errorMsgIsVisible || $errorParentElement.append(this.errorTemplate({
            errorMessage: message,
            isWarning: isWarning
        }))
    }, FormValidate.prototype.isValid = function($element, rule) {
        var isValid = !0,
            value = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.trim($element.val());
        if ("required" === rule.type)
            if ($element.hasClass("contact-permission-radio")) isValid = this._validateContactPermissions($element);
            else if (!0 === $element.data("validation-ignore")) {
            var $siblingInput = $element.siblings("input");
            $siblingInput && $siblingInput.hasClass("error") && $siblingInput.removeClass("error"), $element.hasClass("error") && $element.removeClass("error"), isValid = !0
        } else isValid = this.validators.required($element);
        else if (value && "regexp" === rule.type) isValid = this.validators.regExp($element, rule.regexp);
        else if ("confirmValue" === rule.type) {
            var $container = $element.closest("div.form-emailfield"),
                $inputs = $container.find("input"),
                $firstEmail = $inputs.first(),
                $secondEmail = $inputs.last();
            ((isValid = this.validators.confirmValue($container)) || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty($secondEmail.val())) && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEqual($element.attr("name"), $firstEmail.attr("name")) && (isValid = !0, this.uiFeedback.clear($secondEmail)), isValid && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty($secondEmail.val()) && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEqual($element.attr("name"), $firstEmail.attr("name")) && this.uiFeedback.valid($secondEmail), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEqual($element.attr("name"), $firstEmail.attr("name")) && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty($secondEmail.val()) && __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.extend($element, $secondEmail)
        } else "validationValue" === rule.type && (isValid = this.validators.validationValue($element));
        return isValid
    }, FormValidate.prototype.isOptional = function(rules) {
        return !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(rules, {
            type: "required"
        })
    }, FormValidate.prototype.isConfirm = function(rules, $element) {
        var isConfirm = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(rules, {
                type: "confirmValue"
            }),
            isEmpty = "" === $element.val();
        return isConfirm && !isEmpty
    }, FormValidate.prototype.validateInput = function($element, isSubmit) {
        var validationRules = JSON.parse($element.attr("data-validation")),
            isOptional = this.isOptional(validationRules.rules),
            isConfirmValue = this.isConfirm(validationRules.rules, $element),
            isValid = !0;
        $element.removeClass("error"), $element.removeClass("invalid"), this.uiFeedback.clear($element), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(validationRules.rules, function(rule) {
            this.isValid($element, rule) || (this.uiFeedback.invalid($element, rule.message, validationRules.isWarning), this.cancelSubmit = !0, isValid = !1, isSubmit && formErrorEvents.addError({
                variableName: $element.attr("name"),
                dataAnalyticsInputName: $element.attr("data-analytics-input-name"),
                errorType: rule.type
            }))
        }.bind(this)), !isValid || isOptional && !isConfirmValue || this.uiFeedback.valid($element)
    }, FormValidate.prototype.injectValidator = function(ngValidationService) {
        this.ngValidation = ngValidationService
    }, FormValidate.prototype._validateContactPermissions = function($element) {
        var $permissionCheckbox = $element.next(".contact-permission-checkbox"),
            $inputs = $permissionCheckbox.find("input"),
            referencedFieldElementCollection = function(referencedFieldNameList, $formElementCollection) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(referencedFieldNameList, function(fieldName) {
                    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find($formElementCollection, function($formElement) {
                        return $formElement.name === fieldName
                    })
                })
            }($permissionCheckbox.data().permissionReferenceField, this.$formElementValidation);
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(referencedFieldElementCollection, function(isValid, referencedFieldElement) {
            return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(referencedFieldElement).is(":visible") && referencedFieldElement.value && (isValid = $inputs[0].checked || $inputs[1].checked), isValid
        }, !0)
    }, api.forms = [], api.formValidationElementList = [], api.init = function($form) {
        if (!$form.hasClass("is-validation-enabled")) {
            var form = new FormValidate($form);
            return api.forms.push(form), form.$formElementValidation.length && api.formValidationElementList.push(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a.makeArray(form.$formElementValidation)), form
        }
    }, api.getForm = function(formToGet) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(api.forms, function(form) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(form.$form, function(form) {
                return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(form).is(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(formToGet))
            })
        })
    }, api.injectValidator = function($formElement, validatorService) {
        api.getForm($formElement).injectValidator(validatorService)
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var $component, $overlay, $background, $initialPage, $manageCookiesPage, disclaimerDate, cookieDate, isBackground, isOverlay, position, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery__ = __webpack_require__(5),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mediaQuery__),
        __WEBPACK_IMPORTED_MODULE_3_analytics_analyticsEventLayer__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_4_cookieService__ = __webpack_require__(30),
        api = {},
        cookieTimestamp = Date.now(),
        isVisible = !1,
        closeDisclaimer = function(e) {
            var linkContextType = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(e.currentTarget).data("context-type");
            if (e.preventDefault(), "keypress" !== e.type || 13 === e.which) {
                if (linkContextType) {
                    var isDisagree = "cookiesDisagree" === linkContextType,
                        cookieServiceMethod = isDisagree ? "setDefault" : "setAllOn";
                    __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.store[cookieServiceMethod](linkContextType, function(message, payload) {
                        __WEBPACK_IMPORTED_MODULE_3_analytics_analyticsEventLayer__.a.getCookieMessageEvents().trackCookieMessageDecision({
                            cookieData: payload,
                            cookieGroupCategoryNames: __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.store.getGroupCategoryNames,
                            isCookieAgree: !isDisagree
                        }), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish(message, payload)
                    })
                }
                setCookie(), hideDisclaimer()
            }
        };

    function setCookie() {
        __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.cookie.set({
            name: __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.NAMES.cookieDisclaimer,
            value: cookieTimestamp,
            expirationDays: __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.configuredExpirationDate,
            path: "/"
        })
    }

    function hideDisclaimer() {
        isBackground && $background.removeClass("visible"), isOverlay ? ($overlay.removeClass("visible"), window.setTimeout(function() {
            $overlay.removeClass("shown"), $overlay.add($background).removeClass("shown")
        }, 500)) : $component.slideUp("slow", function() {
            $component.removeClass("shown"), $overlay.add($background).removeClass("shown")
        }), isVisible = !1, __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("cookieDisclaimer:closed")
    }

    function manageCookies() {
        $initialPage.addClass("hidden"), $manageCookiesPage.addClass("shown"), __WEBPACK_IMPORTED_MODULE_3_analytics_analyticsEventLayer__.a.getCookieMessageEvents().trackCookieBannerManage({
            cookieData: __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.store.config,
            cookieGroupCategoryNames: __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.store.getGroupCategoryNames
        })
    }

    function initOne($element) {
        if ($background = ($component = $element).siblings(".cookie-disclaimer-background"), $overlay = $component.siblings(".cookie-disclaimer-overlay-container"), disclaimerDate = $component.data("last-modified"), cookieDate = __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.cookie.get(__WEBPACK_IMPORTED_MODULE_4_cookieService__.a.NAMES.cookieDisclaimer), position = $component.data("position"), isBackground = (isOverlay = "middle" === position) || "bottom" === position && "mobile" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType(), api.isDisclaimerVisible()) {
            var $cookieText = $component.find("p");
            paragraphs = $cookieText, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(paragraphs, function(paragraph) {
                paragraph.innerHTML = paragraph.innerHTML.replace(/{{DOMAIN}}/g, window.location.hostname)
            });
            var $close = $component.find(".close"),
                $cookieLinks = $component.find("a"),
                $cookieAgreeButton = $component.find('[data-context-type="cookiesAgree"]'),
                $cookieDisagreeButton = $component.find('[data-context-type="cookiesDisagree"]');
            if ($component.find('[data-context-type="cookiesManage"]').on("click", manageCookies), isVisible = !0, $close.add($cookieAgreeButton).add($cookieDisagreeButton).on("click keypress", closeDisclaimer), $cookieLinks.each(function(index, item) {
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(item).attr("tabindex", "1")
                }), $initialPage = $component.find(".cookie-disclaimer-text"), $manageCookiesPage = $component.find(".cookie-disclaimer-manage-cookies"), "bottom" === position) {
                var $cookieTextParent = $component.find(".text");
                $close.prependTo($cookieTextParent), $component.addClass("bottom")
            }
            if (isOverlay) {
                var $overlayContent = $overlay.find(".cookie-disclaimer-overlay-content"),
                    $overlayInnerContent = $overlay.find(".cookie-disclaimer-overlay-content-inner");
                $initialPage.appendTo($overlayInnerContent), $manageCookiesPage.appendTo($overlayInnerContent), $close.prependTo($overlayContent), $overlayInnerContent.prepend(($imgLink = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".nav-header .nav-header-center .component-content a").clone(), __WEBPACK_IMPORTED_MODULE_0_jquery___default()("<div>", {
                    class: "logo"
                }).html($imgLink)))
            }! function() {
                var $overlayInnerContent = $overlay.find(".cookie-disclaimer-overlay-content-inner");
                $overlay.on("click.cookie-disclaimer", hideDisclaimer), $overlayInnerContent.on("click.cookie-disclaimer", function(event) {
                    event.stopPropagation()
                }), isBackground && $background.on("click", hideDisclaimer)
            }(), isBackground && ($background.addClass("shown"), $background.addClass("visible")), isOverlay ? ($overlay.addClass("shown"), window.setTimeout(function() {
                $overlay.addClass("visible")
            }, 200), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("cookieDisclaimer:opened")) : $component.slideDown("slow", function() {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("cookieDisclaimer:opened")
            })
        }
        var $imgLink, paragraphs
    }
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("cookiePreferences:change", function() {
        setCookie(), hideDisclaimer()
    }), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("cookiePreferences:goBack", function() {
        $initialPage.removeClass("hidden"), $manageCookiesPage.removeClass("shown"), __WEBPACK_IMPORTED_MODULE_3_analytics_analyticsEventLayer__.a.getCookieMessageEvents().trackCookieBannerGoBack({
            cookieData: __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.store.config,
            cookieGroupCategoryNames: __WEBPACK_IMPORTED_MODULE_4_cookieService__.a.store.getGroupCategoryNames
        })
    }), api.isDisclaimerVisible = function() {
        var canDisplay = $component.data("always-display") || !cookieDate || disclaimerDate > cookieDate,
            suppressCookieDisclaimerAttr = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").data("suppressCookieDisclaimer");
        return canDisplay && !(void 0 !== suppressCookieDisclaimerAttr && !1 !== suppressCookieDisclaimerAttr)
    }, api.getElement = function() {
        return $component || !1
    }, api.getHeight = function() {
        return $component ? $component.outerHeight() : 0
    }, api.isVisible = function() {
        return !!$component && isVisible
    }, api.init = function() {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").hasClass("cq-wcm-edit") || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".cookie-disclaimer").each(function() {
            initOne(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this))
        })
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        api = {
            match: function(current, expected) {
                var currentSplit, currentCatalogId, expectedSplit, expectedCatalogId, expectedWersCode, catalogsMatch, wersCodesMatches, currentWerscodes = [];
                return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isString(current) && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isString(expected) && (currentCatalogId = (currentSplit = current.split("~"))[0], expectedCatalogId = (expectedSplit = expected.split("~"))[0], currentSplit.length > 1 && (currentWerscodes = currentSplit[1].split(",")), expected.split("~").length > 1 && (expectedWersCode = expectedSplit[1])), catalogsMatch = currentCatalogId && expectedCatalogId && currentCatalogId === expectedCatalogId, wersCodesMatches = !expectedWersCode || __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.indexOf(currentWerscodes, expectedWersCode) >= 0, catalogsMatch && wersCodesMatches
            },
            generateWerscode: function(nameplate, selectedFeatures) {
                var featuresArray, result = nameplate,
                    codes = [];
                return featuresArray = Array.isArray(selectedFeatures) ? selectedFeatures : __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(selectedFeatures) ? [] : [selectedFeatures], __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.transform(featuresArray, function(result, code) {
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(code) || null === code || result.push(encodeURIComponent(code))
                }, codes), __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEmpty(featuresArray) || (nameplate.indexOf("~") > -1 ? result += "," + codes.join(",") : result += "~" + codes.join(",")), result
            }
        };
    __webpack_exports__.a = api
}, , , , , , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        api = {},
        accordionCollection = [],
        overlayAccordionCollection = [];

    function matchElemInCollection($elem) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.reduce(accordionCollection, function(result, value) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEqual(value.elem, $elem[0]) && result.push(value), result
        }, [])
    }
    api.getFullCollection = function() {
        return accordionCollection
    }, api.getOverlayCollection = function() {
        return overlayAccordionCollection
    }, api.addToCollection = function(accordion) {
        accordionCollection.push(accordion), accordion.isInOverlay && overlayAccordionCollection.push(accordion)
    }, api.isInRegistry = function($elem) {
        return !!matchElemInCollection($elem).length
    }, api.getAccordionClassFromCollection = function($elem) {
        var matchingItem = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.head(matchElemInCollection($elem));
        if (matchingItem && matchingItem.accordionClass) return matchingItem.accordionClass;
        console.warn("Element does not exist in the registry")
    }, api.deregisterElement = function($elem) {
        var accordion, accordionItem = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.head(matchElemInCollection($elem));
        return accordionItem && ($elem.removeClass("initialized"), accordion = accordionItem, accordionCollection = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.reduce(accordionCollection, function(result, value) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isEqual(value.elem, accordion.elem) || result.push(value), result
        }, [])), $elem
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_pubsub__ = __webpack_require__(18),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pubsub__), __webpack_require__(11)),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isAuthor__),
        __WEBPACK_IMPORTED_MODULE_4_guxfoe_form_component_form_dataservice__ = __webpack_require__(54),
        __WEBPACK_IMPORTED_MODULE_5_fordjs__ = __webpack_require__(4),
        __WEBPACK_IMPORTED_MODULE_5_fordjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fordjs__),
        isAuthorMode = __WEBPACK_IMPORTED_MODULE_3_isAuthor___default.a.getAuthorStatus(),
        EVENT = {
            stateChange: "dropdown:state:change"
        };

    function initialize(component) {
        var $option, blankOption, $component = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(component),
            $dropdown = $component.find("[data-service]"),
            cookieToBslIsTrue = __WEBPACK_IMPORTED_MODULE_4_guxfoe_form_component_form_dataservice__.a.getBSLConfigCookieToBsl();
        $dropdown.data("isBlankLabel") && (blankOption = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("<option/>", {
                value: "",
                text: $dropdown.data("blankLabel"),
                selected: !0
            })), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined($dropdown.data("service")) ? (initSelect2($component), setTimeout(function() {
                clearAngularEmptyOption($component), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("forms:dependDropDown:valueSet", {})
            })) : __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
                type: "GET",
                url: $dropdown.data("service"),
                xhrFields: {
                    withCredentials: cookieToBslIsTrue
                },
                success: function(response) {
                    var options = [],
                        keys = Object.keys(response.data);
                    keys.length > 0 && __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(response.data[keys[0]], function(index, item) {
                        $option = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("<option/>", {
                            value: item.code,
                            text: item.title
                        }), options.push($option)
                    }), clearAngularEmptyOption($dropdown), $dropdown.prepend(blankOption).append(options), initSelect2($component), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("forms:dependDropDown:valueSet", {})
                }
            }),
            function($component) {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).on("overlayclose.wizard", function() {
                    var $dropdown = $component.find("select");
                    $dropdown.select2("close")
                }), $component.on("change", function(e) {
                    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish(EVENT.stateChange, {
                        event: e
                    })
                })
            }($component)
    }

    function clearAngularEmptyOption($dropdown) {
        $dropdown.find('[value="? undefined:undefined ?"]').remove()
    }

    function initSelect2($component) {
        var $dropdown = $component.find("select");
        return isAuthorMode || $dropdown.select2({
            minimumResultsForSearch: -1
        }), $dropdown
    }
    module = {
        name: "formDropdown",
        selector: ".form-dropdown",
        init: function(element) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).is("[data-formdropdown]") || initialize(element)
        },
        initSelect2: initSelect2,
        initWithConfiguration: function(element, configuration) {
            return element.select2(configuration)
        }
    }, __WEBPACK_IMPORTED_MODULE_5_fordjs___default.a.registerComponent(module), __webpack_exports__.a = module
}, , , , , , function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.heightMeasureUtil = __webpack_require__(212)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_angular_sanitize__ = __webpack_require__(22);
    __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_sanitize__);
    __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("click-to-call", ["ngSanitize"])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var dataStructure, __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_configurationProvider__),
        api = {},
        trueValues = ["on", "yes", "true"],
        specialFieldsRegex = /(__e|__p|__s)$/,
        additionalEvents = [],
        fallbackEventObject = {
            groupCode: "",
            itemCode: "",
            sequence: "1"
        };

    function removeField(key) {
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.remove(dataStructure.fields, {
            name: key
        })
    }
    api.parameters = {
        add: function(data) {
            return data && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.extend(dataStructure, data), api
        }
    }, api.fields = {
        add: function(data) {
            return data && dataStructure.fields.push(data), api
        },
        remove: function(data) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(data) ? __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(data, removeField) : removeField(data), api
        }
    }, api.events = {
        add: function(data) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(data) ? __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(data, function(event) {
                dataStructure.events.push(event)
            }) : dataStructure.events.push(data), api
        },
        extend: function() {
            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(dataStructure.events, function(event) {
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(additionalEvents, function(additionalEvent) {
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.extend(event, additionalEvent)
                })
            }), additionalEvents.length = 0
        }
    }, api.buildRequestPath = function(form, CONF) {
        var $form = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(form),
            path = [$form.data("service"), CONF ? CONF.campaignCode : $form.data("campaign-code"), CONF ? CONF.siteId : $form.data("site-id"), CONF ? CONF.eventType : $form.data("event-type")],
            parameters = [{
                locale: CONF ? CONF.cultureCode : $form.data("culture-code")
            }, {
                validateOnly: $form.data("validate-only") || !1
            }],
            result = "";
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(path, function(part, index) {
            part && (result += (index ? "/" : "") + part)
        }), __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(parameters, function(param, index) {
            param && (result += (index ? "&" : "?") + __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.keys(param) + "=" + __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.values(param))
        }), result
    }, api.initDataStructure = function($form) {
        var fields, extracted, basicFields, formFields = $form.find('[type="radio"], [type="text"], [type="hidden"], [type="checkbox"], select, textarea, email').not("[data-form-ignore]"),
            filteredFormFields = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(formFields, function(input) {
                return 0 === __WEBPACK_IMPORTED_MODULE_1_jquery___default()(input).closest(".group-disabled").length
            }),
            extractedFields = (fields = filteredFormFields, extracted = {
                permission: []
            }, basicFields = [], __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(fields, function(field) {
                var $field = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(field),
                    eventObject = {},
                    type = $field.data("type-no-conflict-in-firefox") || $field.data("type"),
                    fieldName = $field.attr("name"),
                    strippedFieldName = fieldName ? fieldName.replace(specialFieldsRegex, "") : fieldName,
                    value = $field.val(),
                    isCheckbox = $field.is('[type="checkbox"]'),
                    isRadio = $field.is('[type="radio"]') || $field.data("isRadioGroup"),
                    isRadioGroup = $field.data("isRadioGroup"),
                    isUndefinedType = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(extracted[type]),
                    isChecked = field.checked,
                    isTrueValue = trueValues.indexOf(value) > -1,
                    isVisible = field && (null !== field.offsetParent || "hidden" === field.type);
                type && "regular" !== type ? "suppression" === type ? isCheckbox ? extracted[type] = isChecked : isRadio ? value && (extracted[type] = isTrueValue) : extracted[type] = isTrueValue : "events" === type ? (eventObject[strippedFieldName] = value, additionalEvents.push(eventObject)) : isUndefinedType || extracted[type].push({
                    name: strippedFieldName,
                    value: isCheckbox ? isChecked : value
                }) : isCheckbox ? basicFields.push({
                    name: strippedFieldName,
                    value: isChecked
                }) : isRadio ? isRadioGroup && basicFields.push(__WEBPACK_IMPORTED_MODULE_1_jquery___default()("<input>", {
                    name: field.dataset.referencedVariable,
                    value: field.value
                })[0]) : isVisible && basicFields.push(field)
            }), {
                extracted: extracted,
                fields: __WEBPACK_IMPORTED_MODULE_1_jquery___default()(basicFields).serializeArray()
            }),
            destination = $form.data("destination");
        return dataStructure = {
            pageUrl: window.location.href,
            destination: destination,
            events: [],
            fields: extractedFields.fields
        }, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.extend(dataStructure, extractedFields.extracted), api
    }, api.getData = function() {
        return dataStructure.events.length || api.events.add(fallbackEventObject), additionalEvents.length && dataStructure.events.length && api.events.extend(additionalEvents), dataStructure.permission = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.transform(dataStructure.permission, function(memo, permission) {
            permission.value = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isString(permission.value) ? trueValues.indexOf(permission.value.toLowerCase()) > -1 : permission.value, memo.push(permission)
        }), JSON.stringify(dataStructure, null, 2)
    }, api.getBSLConfigCookieToBsl = function() {
        return !!__WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_1_jquery___default()("#bsl-endpoints-configuration")).cookieToBsl
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
    __webpack_require__(88), __webpack_require__(92);
    __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ng-gux-forms", ["dealerLocatorField", "click-to-call"])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var api = {
        getPropertyByString: function(propertyString, object) {
            var props, prop, value = null;
            if (propertyString && object) {
                props = propertyString.split("."), value = object;
                for (var i = 0; i < props.length; i++) {
                    if (!(prop = props[i]) || !value) {
                        value = null;
                        break
                    }
                    value = value[prop]
                }
            }
            return value
        },
        objectToList: function(key, data, childProcessor) {
            var source = api.getPropertyByString(key, data),
                result = [];
            for (key in source)
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    var toAdd = childProcessor ? childProcessor(key, source[key]) : source[key];
                    result.push(toAdd)
                }
            return result
        },
        adaptDataTo: function(data, adaptTo) {
            var temp = {};
            for (var item in adaptTo) Object.prototype.hasOwnProperty.call(adaptTo, item) && (Object.prototype.hasOwnProperty.call(adaptTo[item], "adaptFunc") ? temp[item] = adaptTo[item].adaptFunc(adaptTo[item].key, data) : "object" != typeof adaptTo[item] ? temp[item] = !0 === adaptTo[item] ? data[item] : api.getPropertyByString(adaptTo[item], data) : temp[item] = api.adaptDataTo(data, adaptTo[item]));
            return temp
        }
    };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_exports__.a = {
        SELECTOR: {
            accordionList: ".accordion-list",
            accordionItem: ".accordion-item",
            accordionTrigger: ".accordion-trigger",
            accordionItemBody: ".accordion-body",
            accordionItemContent: ".accordion-content",
            accordionOverlay: ".accordion-overlay",
            accordionItemTitle: ".accordion-title",
            overlayContentInner: ".overlay-content-inner",
            galleryTrigger: ".gallery-trigger-carousel"
        },
        ATTR: {
            itemDataState: "data-state",
            itemDataIndex: "data-item-index",
            itemDataHash: "data-item-hash",
            allowMultiple: "allowMultiple",
            drawerAnimDelay: "drawerAnimDelay",
            drawerResolveDelay: "drawerResolveDelay",
            onLoadState: "onLoadState",
            autoScrollToAccordionContent: "auto-scrolls-to-accordion-content"
        },
        STATE: {
            open: "open",
            closed: "closed",
            initialLoad: {
                openFirst: "OPEN_FIRST",
                openAll: "OPEN_ALL",
                closeAll: "CLOSE_ALL"
            }
        }
    }
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.dynamicDataProvider = __webpack_require__(307)
    }).call(exports, __webpack_require__(9))
}, , , , , , , , , , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsEventLayer_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(3)),
        __WEBPACK_IMPORTED_MODULE_2_guxfoe_brightcove_component_brightcove_videoRegistry_js__ = __webpack_require__(275),
        __WEBPACK_IMPORTED_MODULE_3_guxfoe_brightcove_component_brightcove_poster_js__ = __webpack_require__(276),
        __WEBPACK_IMPORTED_MODULE_4_guxfoe_brightcove_component_brightcove_captionsHandler_js__ = __webpack_require__(277),
        __WEBPACK_IMPORTED_MODULE_5_mediaQuery__ = __webpack_require__(5),
        __WEBPACK_IMPORTED_MODULE_5_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mediaQuery__),
        __WEBPACK_IMPORTED_MODULE_6_isAuthor__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_6_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isAuthor__),
        api = {};

    function Brightcove($element) {
        var mediaType = __WEBPACK_IMPORTED_MODULE_5_mediaQuery___default.a.getMediaType();
        this.$element = $element, this.$videoEl = $element.find("video"), this.isAuthor = __WEBPACK_IMPORTED_MODULE_6_isAuthor___default.a.getAuthorStatus(), this.isMobile = "mobile" === mediaType || "tablet" === mediaType, this.videoRegistry = __WEBPACK_IMPORTED_MODULE_2_guxfoe_brightcove_component_brightcove_videoRegistry_js__.a, this.withinBillboard = $element.hasClass("within-billboard"), !this.isVideoValid() || this.withinBillboard && this.isMobile || (this.videoObj = null, this.captionsHandler = null, this.currentProgressQuart = -1, this.withinCarousel = !!this.$element.closest(".genericCarousel").length, this.$isInitialized = $.Deferred(), this.poster = new __WEBPACK_IMPORTED_MODULE_3_guxfoe_brightcove_component_brightcove_poster_js__.a($element), this.brightcoveVideoEvents = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsEventLayer_js__.a.getBrightcoveVideoEvents(), this.attachVideoEvents(), this.attachInteractionEvents(), this.poster.initStartImage(this.triggerVideoStart.bind(this)), this.withinBillboard && (this.$startingImage = $element.siblings(".billboard-image")), this.isAuthor && this.showBillboardVideo(), this.shouldDefer() ? this.onPageLoad(this.preparePlayer.bind(this)) : this.preparePlayer())
    }
    Brightcove.prototype.shouldDefer = function() {
        return !this.isAuthor && !window.location.search.substring(1).split("&").includes("no-defer")
    }, Brightcove.prototype.preparePlayer = function() {
        this.withinBillboard || this.isAuthor ? this.createPlayer() : this.poster.hasStartImage || this.isAuthor || this.triggerVideoStart()
    }, Brightcove.prototype.onPageLoad = function(resolve) {
        var navData = window.performance.getEntriesByType("navigation");
        navData.length > 0 && navData[0].loadEventEnd > 0 ? resolve() : $(window).on("load", resolve)
    }, Brightcove.prototype.showBillboardVideo = function() {
        this.withinBillboard && (this.$startingImage.addClass("hide"), this.$element.removeClass("not-ready"))
    }, Brightcove.prototype.triggerVideoStart = function() {
        this.isPlayerInitialized() ? this.startVideo() : (this.createPlayer(), this.$isInitialized.promise().then(this.fixTabIndex.bind(this))), this.poster.toggleStartImage(!1), this.notifyVideoStarted()
    }, Brightcove.prototype.createPlayer = function() {
        var self = this,
            configuration = self.$videoEl.data(),
            scriptUrl = self.buildBcScriptUrl(configuration.account, configuration.player);
        self.isBrightcoveLibraryLoaded() ? self.initPlayer() : $.getScript(scriptUrl, function() {
            self.initPlayer()
        })
    }, Brightcove.prototype.initPlayer = function() {
        this.initBrightcovePlayer(), this.initGuxPlayer()
    }, Brightcove.prototype.initBrightcovePlayer = function() {
        var options = this.withinBillboard ? {
            loop: !0,
            autoplay: !1
        } : {};
        this.videoObj = bc(this.$videoEl[0], options), this.setVideoOptions(), this.attachBcVideoEvents()
    }, Brightcove.prototype.initGuxPlayer = function() {
        this.poster.initEndImage(this.$videoEl, this.videoObj, this.startVideo.bind(this)), this.captionsHandler = new __WEBPACK_IMPORTED_MODULE_4_guxfoe_brightcove_component_brightcove_captionsHandler_js__.a(this.$videoEl, this.videoObj)
    }, Brightcove.prototype.disposePlayer = function() {
        this.isPlayerInitialized() && (this.videoObj = videojs(this.$element.find("video")[0]), this.videoObj.pause(), this.videoObj.dispose(), this.videoRegistry.remove(this))
    }, Brightcove.prototype.attachInteractionEvents = function() {
        var self = this;
        !this.isAuthor && this.withinCarousel && (this.$element.add(self.$videoEl).on("keydown", function(e) {
            13 === e.which && self.startVideo()
        }), $.subscribe("carousel-slider:start", function($context) {
            this.handleBillboardVideoEvent($context, function(video) {
                video.videoObj.muted(!0), video.videoObj.play()
            })
        }.bind(this)), $.subscribe("carousel-slider:switch", function(context) {
            this.handleBillboardVideoEvent(context.$from, function(video) {
                video.videoObj.pause()
            }), this.handleBillboardVideoEvent(context.$to, function(video) {
                video.videoObj.muted(!0), video.videoObj.play()
            })
        }.bind(this)))
    }, Brightcove.prototype.handleBillboardVideoEvent = function($context, handler) {
        var $brightcoveVideo = $context.find(".brightcove.within-billboard"),
            video = null;
        $brightcoveVideo.length && (video = __WEBPACK_IMPORTED_MODULE_2_guxfoe_brightcove_component_brightcove_videoRegistry_js__.a.getBillboardVideoByContainer($brightcoveVideo)) && video === this && video.$isInitialized.promise().then(function() {
            handler(video)
        })
    }, Brightcove.prototype.attachBcVideoEvents = function() {
        var self = this;
        self.videoObj.on("loadedmetadata", self.onLoadedMetadata.bind(self)), self.videoObj.on("loadeddata", function(e) {
            self.showBillboardVideo()
        }), self.videoObj.on("fullscreenchange", function(e) {
            self.trackFullScreen(e)
        })
    }, Brightcove.prototype.onLoadedMetadata = function() {
        this.$isInitialized.resolve(), !this.isAuthor && !this.withinCarousel && this.withinBillboard && this.videoObj && (this.videoObj.muted(!0), this.videoObj.play()), this.notifyPlayerReady.bind(this)
    }, Brightcove.prototype.attachVideoEvents = function() {
        var self = this;
        self.withinBillboard || (self.$videoEl.one("timeupdate", function(e) {
            var data = {
                id: e.target.id,
                videoName: self.videoObj.mediainfo.name
            };
            self.brightcoveVideoEvents.trackPlay(data)
        }), self.$videoEl.on("timeupdate", function(e) {
            self.trackMilestone(e)
        }), self.$videoEl.on("seeked", function(e) {
            self.trackMilestone(e, !0)
        }), self.$videoEl.on("play", function(e) {
            self.videoRegistry.stopOtherVideos(self)
        }), self.$videoEl.one("play", function(e) {
            self.captionsHandler.handle()
        }), self.$videoEl.on("ended", function(e) {
            self.brightcoveVideoEvents.trackEnded({
                progress: "100",
                ts: e.target.currentTime,
                id: e.target.id,
                videoName: self.videoObj.mediainfo.name
            }), self.currentProgressQuart = -1
        }))
    }, Brightcove.prototype.trackMilestone = function(e, forceTrack) {
        var progress = Math.floor(e.target.currentTime / e.target.duration * 100),
            progressQuart = Math.floor(progress / 25);
        progressQuart < this.currentProgressQuart && (this.currentProgressQuart = progressQuart), progress <= 1 || progressQuart > this.currentProgressQuart && progressQuart < 4 && (this.brightcoveVideoEvents.trackMilestone({
            progress: 25 * progressQuart,
            ts: e.target.currentTime,
            id: e.target.id,
            videoName: this.videoObj.mediainfo.name
        }, forceTrack), this.currentProgressQuart = progressQuart)
    }, Brightcove.prototype.trackFullScreen = function(e) {
        this.brightcoveVideoEvents.trackFullscreen({
            videoName: this.videoObj.mediainfo.name,
            id: e.target.id
        })
    }, Brightcove.prototype.notifyPlayerReady = function() {
        this.generateEvent("playerready", this.$element)
    }, Brightcove.prototype.notifyVideoStarted = function() {
        this.generateEvent("videostarted", this.$element)
    }, Brightcove.prototype.buildBcScriptUrl = function(account, player) {
        return "//players.brightcove.net/" + account + "/" + player + "_default/index.min.js"
    }, Brightcove.prototype.fixTabIndex = function() {
        "1" !== this.$element.attr("tabindex") && this.$element.attr("tabindex", "1")
    }, Brightcove.prototype.generateEvent = function(eventName, $element) {
        if (eventName && $element) {
            var evt = $.Event(eventName);
            return evt.$element = $element, $element.trigger(evt), !0
        }
        return !1
    }, Brightcove.prototype.isBrightcoveLibraryLoaded = function() {
        return "undefined" != typeof videojs
    }, Brightcove.prototype.isPlayerInitialized = function() {
        return this.videoObj && this.videoObj.isReady_
    }, Brightcove.prototype.isVideoValid = function() {
        return this.$videoEl.length > 0
    }, Brightcove.prototype.setVideoOptions = function() {
        this.videoObj.options_.inactivityTimeout = 0, this.videoObj.options_.techOrder = ["html5"], this.withinBillboard && this.videoObj.autoplay(!this.withinCarousel)
    }, Brightcove.prototype.startVideo = function() {
        this.$videoEl.get(0).currentTime = 0, this.$videoEl.trigger("play")
    }, api.init = function() {
        $(".brightcove").each(function(index, element) {
            var brightcove = new Brightcove($(element));
            __WEBPACK_IMPORTED_MODULE_2_guxfoe_brightcove_component_brightcove_videoRegistry_js__.a.addVideo(brightcove)
        })
    }, api.initOne = function($element) {
        var brightcove = __WEBPACK_IMPORTED_MODULE_2_guxfoe_brightcove_component_brightcove_videoRegistry_js__.a.getVideoByContainer($element);
        return brightcove || (brightcove = new Brightcove($element), __WEBPACK_IMPORTED_MODULE_2_guxfoe_brightcove_component_brightcove_videoRegistry_js__.a.addVideo(brightcove)), brightcove
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_dealerServiceValidator__ = __webpack_require__(119),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        api = {
            formatDealerDetails: function(dealer, config) {
                var servicesData = "",
                    dealerData = config.autocompleteLabelFormat,
                    autocompleteLabelFormatArray = config.autocompleteLabelFormat.replace(/{|}|\[|\]|\(|\)/g, "").split(/\W/g).filter(Boolean);
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(autocompleteLabelFormatArray, function(autocompleteLabelPlaceholderText) {
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(autocompleteLabelPlaceholderText) || ("services" === autocompleteLabelPlaceholderText ? (servicesData = __WEBPACK_IMPORTED_MODULE_0_dealerServiceValidator__.a.commaSeparatedServices(dealer.services, config.allServicesArray), dealerData = dealerData.replace(autocompleteLabelPlaceholderText, "(" + servicesData + ")")) : dealerData = dealerData.replace(autocompleteLabelPlaceholderText, dealer[autocompleteLabelPlaceholderText]))
                }), dealerData.replace(/{|}|\[|\]/g, "")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var dp, __WEBPACK_IMPORTED_MODULE_0_cookieService__ = __webpack_require__(30),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__),
        __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_configurationProvider__),
        CONST = {
            className: {
                previewEnabled: "data-preview-enabled",
                active: "active"
            },
            selector: {
                globalUx: "#global-ux",
                previewContent: ".data-preview-content",
                previewBannerContainer: ".data-preview-banner-container",
                previewSetStaging: "#dataPreviewSetStaging",
                previewSetLive: "#dataPreviewSetLive",
                previewReset: "#dataPreviewReset"
            },
            cookieName: {
                dataStatus: "dataStatus",
                previewOnOff: "previewOnOff",
                timestamp: "timestamp"
            },
            cookieValue: {
                staging: "staging",
                published: "published"
            },
            cookiePath: "/"
        };
    module = {};

    function DataPreview() {
        this.alwaysShowBanner = !1, this.defaultToStagingData = !1, this.urlParams = this.getURLParams(), this.$banner = this.initializeBanner(), this.$banner.length && (this.$bannerContent = this.$banner.find(CONST.selector.previewContent), this.setCookies(this.urlParams, this.defaultToStagingData), this.updateBanner())
    }

    function setCookie(cookieName, cookieValue, cookiePath) {
        __WEBPACK_IMPORTED_MODULE_0_cookieService__.a.cookie.set({
            name: cookieName,
            value: cookieValue,
            path: cookiePath
        })
    }

    function getCookie(cookieName) {
        return __WEBPACK_IMPORTED_MODULE_0_cookieService__.a.cookie.get(cookieName)
    }

    function deleteCookie(cookieName, cookiePath) {
        __WEBPACK_IMPORTED_MODULE_0_cookieService__.a.cookie.remove({
            name: cookieName,
            path: cookiePath
        })
    }
    DataPreview.prototype.getURLParams = function() {
        var paramArray, i, queryString = location.search,
            params = {};
        for (paramArray = (queryString = queryString.substr(1)).split("&"), i = 0; i < paramArray.length; i++) params[paramArray[i].split("=")[0]] = paramArray[i].split("=")[1];
        return params
    }, DataPreview.prototype.initializeBanner = function() {
        var $banner = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(CONST.selector.previewBannerContainer);
        return $banner.length ? (this.$stagingButton = $banner.find(CONST.selector.previewSetStaging), this.$stagingButton.on("click", this.setStagingDataPreview.bind(this)), this.$liveButton = $banner.find(CONST.selector.previewSetLive), this.$liveButton.on("click", this.setLiveDataPreview.bind(this)), this.$resetButton = $banner.find(CONST.selector.previewReset), this.$resetButton.on("click", this.setReset.bind(this)), this.initializeConfiguration($banner)) : (this.clearCookieValues(), this.clearUrlParams()), $banner
    }, DataPreview.prototype.initializeConfiguration = function($bannerContainer) {
        var configuration = __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get($bannerContainer);
        this.alwaysShowBanner = configuration.previewBannerShowAlways, this.defaultToStagingData = configuration.previewDefaultToStagingData
    }, DataPreview.prototype.setCookies = function(urlParams, defaultToStagingData) {
        if (urlParams) {
            var sanitizedDataStatus = urlParams.dataStatus ? urlParams.dataStatus.toLowerCase() : "";
            sanitizedDataStatus === CONST.cookieValue.staging ? setCookie(CONST.cookieName.dataStatus, CONST.cookieValue.staging, CONST.cookiePath) : sanitizedDataStatus === CONST.cookieValue.published && setCookie(CONST.cookieName.dataStatus, CONST.cookieValue.published, CONST.cookiePath), "on" !== sanitizedDataStatus && "off" !== sanitizedDataStatus || setCookie(CONST.cookieName.previewOnOff, sanitizedDataStatus, CONST.cookiePath), urlParams.timestamp && setCookie(CONST.cookieName.timestamp, urlParams.timestamp, CONST.cookiePath)
        }
        defaultToStagingData && !getCookie(CONST.cookieName.dataStatus) && setCookie(CONST.cookieName.dataStatus, CONST.cookieValue.staging, CONST.cookiePath)
    }, DataPreview.prototype.updateBanner = function() {
        var dataCookie = getCookie(CONST.cookieName.dataStatus),
            timeCookie = getCookie(CONST.cookieName.timestamp),
            onOffSwitchCookie = getCookie(CONST.cookieName.previewOnOff);
        "off" === onOffSwitchCookie ? this.hideBanner() : this.alwaysShowBanner || dataCookie || timeCookie || "on" === onOffSwitchCookie ? (this.setButtonsState(dataCookie), this.showBanner(function(dataStatus, dateString) {
            var dateArray, timestamp, message = "You are currently viewing ",
                today = new Date;
            message += dataStatus ? dataStatus.toUpperCase() : "PUBLISHED";
            message += " data", dateString && (2 === (dateArray = dateString.split("-"))[2].length && (dateArray[2] = "20" + dateArray[2]), (timestamp = new Date(parseInt(dateArray[2], 10), parseInt(dateArray[1], 10) - 1, parseInt(dateArray[0], 10))) > today && (message += " as it will be on: " + timestamp.toDateString()));
            return "<p>" + (message += ".") + "</p>"
        }(dataCookie, timeCookie))) : this.hideBanner()
    }, DataPreview.prototype.setButtonsState = function(dataStatus) {
        "staging" === dataStatus ? this.$stagingButton.addClass(CONST.className.active) : this.$liveButton.addClass(CONST.className.active)
    }, DataPreview.prototype.reset = function() {
        this.clearCookieValues(), this.clearUrlParams(), this.reloadPage()
    }, DataPreview.prototype.reloadPage = function() {
        var currentParams = [];
        __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.forEach(this.urlParams, function(value, key) {
            __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isUndefined(value) || "" === value || currentParams.push(key + "=" + value)
        }), currentParams.length ? location.assign(location.origin + location.pathname + "?" + currentParams.join("&") + location.hash) : location.assign(location.origin + location.pathname + location.hash)
    }, DataPreview.prototype.getCookieValues = function() {
        var timestampArray, dataStatusCookie = getCookie(CONST.cookieName.dataStatus),
            timestampCookie = getCookie(CONST.cookieName.timestamp),
            params = {};
        return params.dataStatus = dataStatusCookie || "", timestampCookie && (timestampArray = timestampCookie.split("-"), params.timestamp = timestampArray[2] + "-" + timestampArray[1] + "-" + timestampArray[0] + "T00%3A00%3A00Z"), params
    }, DataPreview.prototype.clearCookieValues = function() {
        deleteCookie(CONST.cookieName.dataStatus, CONST.cookiePath), deleteCookie(CONST.cookieName.timestamp, CONST.cookiePath), deleteCookie(CONST.cookieName.previewOnOff, CONST.cookiePath)
    }, DataPreview.prototype.clearUrlParams = function() {
        this.urlParams.dataStatus = void 0, this.urlParams.timestamp = void 0
    }, DataPreview.prototype.notifyError = function(errorCode, errorMsg) {
        this.$banner.length && this.$bannerContent.empty().append("<p>Error code: " + errorCode + " - " + errorMsg + "</p>")
    }, DataPreview.prototype.showBanner = function(bannerMessage) {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(CONST.selector.globalUx).addClass(CONST.className.previewEnabled), this.$bannerContent.html(bannerMessage)
    }, DataPreview.prototype.hideBanner = function() {
        __WEBPACK_IMPORTED_MODULE_1_jquery___default()(CONST.selector.globalUx).removeClass(CONST.className.previewEnabled)
    }, DataPreview.prototype.setLiveDataPreview = function(event) {
        event.preventDefault(), setCookie(CONST.cookieName.dataStatus, CONST.cookieValue.published, CONST.cookiePath), this.clearUrlParams(), this.reloadPage()
    }, DataPreview.prototype.setStagingDataPreview = function(event) {
        event.preventDefault(), setCookie(CONST.cookieName.dataStatus, CONST.cookieValue.staging, CONST.cookiePath), this.clearUrlParams(), this.reloadPage()
    }, DataPreview.prototype.setReset = function(event) {
        event.preventDefault(), this.reset()
    }, module.init = function() {
        dp = new DataPreview
    }, module.getCookieValues = function() {
        return dp.getCookieValues()
    }, module.notifyError = function(errorCode, errorMsg) {
        dp.notifyError(errorCode, errorMsg)
    }, module.init(), __webpack_exports__.a = module
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.numberFormat = __webpack_require__(315)
    }).call(exports, __webpack_require__(9))
}, , , , , , , , , , , , , function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js__),
        api = {};
    window.commonDealerLocatorEvents = window.commonDealerLocatorEvents || {}, window.commonDealerLocatorEvents.trackVisitDealersWebsiteFromMap = function(miniDealer) {
        api.trackDealerActionClick({
            miniDealer: miniDealer,
            directionsClicked: !1,
            viewType: "map view",
            dealerID: void 0
        })
    }, window.commonDealerLocatorEvents.trackGetDirectionsFromMap = function(miniDealer) {
        api.trackDealerActionClick({
            miniDealer: miniDealer,
            directionsClicked: !0,
            viewType: "map view",
            dealerID: void 0
        })
    }, api.trackDealerActionClick = function(data) {
        data.miniDealer && digitaldata.vehicle.nameplate ? digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":dealer locator:dealer:referral:exit:" + digitaldata.vehicle.nameplate : digitaldata.onclick.onclickLinkName = "brand:dealer locator:dealer:referral:exit", data.directionsClicked ? (digitaldata.page.toolDescriptor = "getDirections", digitaldata.onclick.referredTo = "google:maps:get directions") : (digitaldata.page.toolDescriptor = "dealer weblink", digitaldata.onclick.referredTo = "ford:dealer:weblink"), digitaldata.onclick.linkType = "e", digitaldata.onclick.onclick = "dealer info:referral", data.dealerID && (digitaldata.page.dealerID = data.dealerID), digitaldata.event.action = "tool|brand referral", digitaldata.page.tool = "event:referral:dealer", digitaldata.onclick.contentType = "fd:" + __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "find dealer", digitaldata.onclick.contentNameID = data.viewType, _satellite.track("ladDealerReferral")
    }, api.trackError = function(data, pageNameOverride) {
        if (data.miniDealer) {
            var pgNameNoVehicle = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(),
                originalPgNameNoVehicle = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle();
            pgNameNoVehicle && pgNameNoVehicle.indexOf(":dealer locator:result") >= 0 ? digitaldata.page.pageNameNoVehicle = originalPgNameNoVehicle + ":dealer locator:result" : digitaldata.page.pageNameNoVehicle = originalPgNameNoVehicle + ":dealer locator:error", "invalid location" === data.errorReason && (digitaldata.page.pageNameNoVehicle = originalPgNameNoVehicle + ":dealer locator:error"), pageNameOverride && (digitaldata.page.pageNameNoVehicle = digitaldata._utils.temporaryPageNameNoVehicle + ":dealer locator:error"), digitaldata.page.pageName = digitaldata.page.pageNameNoVehicle + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.page.siteSection = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPreviousSiteSection(), digitaldata.page.hierarchy = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPreviousHierarchy(), digitaldata.onclick.contentSubType = "mini find dealer", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPTemplate() + ":impress"
        } else digitaldata.page.pageName = "brand:dealer locator:error", digitaldata.page.pageNameNoVehicle = "brand:dealer locator:error", digitaldata.onclick.contentSubType = "find dealer", digitaldata.onclick.contentType = "fd:" + __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPTemplate() + ":impress", digitaldata.page.filterName = api.getFilterName(data.filters);
        data.totalResults = 0, api.setSearchData(data), api.setContentNameID(data), digitaldata.page.errorTracking = "dealer locator:search:" + data.errorReason, digitaldata.event.action = "errorTracking", _satellite.track("ladErrorPage")
    }, api.getFilterName = function(filters) {
        var filterName = "";
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(filters, function(filterValue) {
            filterName ? filterName += "," + filterValue : filterName = filterValue
        }), filterName
    }, api.setContentNameID = function(data) {
        "location" === data.searchType ? digitaldata.onclick.contentNameID = "dealer location search:" + (data.currentLocation ? "current location" : "manual search") : digitaldata.onclick.contentNameID = "dealer name search:manual search"
    }, api.setSearchData = function(data) {
        data.searchTerm = void 0 === data.searchTerm ? "" : data.searchTerm, "location" === data.searchType ? (data.miniDealer || (digitaldata.page.toolDescriptor = "dealer search:dealer location search:" + (data.currentLocation ? "current location" : "manual search")), digitaldata.page.siteSearchString = "", digitaldata.page.searchLocationTerm = data.searchTerm) : (data.miniDealer || (digitaldata.page.toolDescriptor = "dealer search:dealer name search:manual search"), digitaldata.page.siteSearchString = "dealer name search:" + data.searchTerm, digitaldata.page.searchLocationTerm = ""), digitaldata.page.searchRadius = data.distance, api.setSearchDepth(data)
    }, api.setSearchDepth = function(data) {
        data.resultPosition ? digitaldata.page.searchDepth = data.resultPosition + ":" + data.totalResults : digitaldata.page.searchDepth = "0:" + data.totalResults
    }, api.getDealerPosition = function(vm, data) {
        var dealerPosition = 1;
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(vm.dealer) || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(vm.dealer.index) || (dealerPosition = vm.dealer.index + 1), dealerPosition
    }, api.setContentSubType = function(contentSubType) {
        return "list" === contentSubType ? "dealer results list view" : "map" === contentSubType ? "dealer results map view" : "details" === contentSubType ? "dealer info" : void 0
    }, api.trackInitiateContactFullDealerLocator = function(dealerID) {
        digitaldata.onclick.onclickLinkName = "brand:dealer locator:dealer:contact:c2c", digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "dealer info:contact:c2c", digitaldata.page.dealerID = dealerID, digitaldata.event.action = "tool|contact dealer", digitaldata.page.tool = "event:contact dealer", digitaldata.page.toolDescriptor = "contact dealer:c2c", digitaldata.onclick.contentType = "fd:" + __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "find dealer", digitaldata.onclick.contentNameID = "list view", _satellite.track("ladContactDealer")
    }, api.trackInitiateContactMiniDealerLocator = function(dealerID) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":dealer locator:dealer:contact:c2c" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "dealer info:contact dealer:c2c", digitaldata.page.dealerID = dealerID, digitaldata.event.action = "tool|contact dealer", digitaldata.page.tool = "event:contact dealer", digitaldata.page.toolDescriptor = "contact dealer:c2c", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "mini find dealer", digitaldata.onclick.contentNameID = "list view", _satellite.track("ladContactDealer")
    }, __webpack_exports__.a = api
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.omnitureLinkExtension = __webpack_require__(234)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_fordjs__ = __webpack_require__(4);
    module = {
        init: function() {
            var $body = $("body"),
                $bestsellerCollection = $body.find(".bestseller-sash"),
                bestsellerLabel = $body.find("#global-market-configuration .configuration").data("bestseller-label");
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map($bestsellerCollection, function(item) {
                $(item).attr("data-bestseller-sash", bestsellerLabel)
            })
        }
    }, __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fordjs__).a.registerComponent(module), __webpack_exports__.a = module
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var clickToCallModule, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(2)),
        __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
        __WEBPACK_IMPORTED_MODULE_2_guxfoe_click_to_call_click_to_call_app_js__ = __webpack_require__(53),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_configurationProvider__);
    __webpack_require__(278), __webpack_require__(279), __webpack_require__(280);

    function initialize() {
        __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(".clickToCall").not(".initialized").each(function(index, component) {
            var $component = $(component);
            __WEBPACK_IMPORTED_MODULE_2_guxfoe_click_to_call_click_to_call_app_js__.a.value("CONFIGURATION", __WEBPACK_IMPORTED_MODULE_3_configurationProvider___default.a.get($component)), __WEBPACK_IMPORTED_MODULE_1_angular___default.a.bootstrap(component, [__WEBPACK_IMPORTED_MODULE_2_guxfoe_click_to_call_click_to_call_app_js__.a.name]), $component.addClass("initialized")
        })
    }
    initialize(), clickToCallModule = {
        init: initialize
    }, __webpack_exports__.a = clickToCallModule
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.wizardOverlay = __webpack_require__(283)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
        __WEBPACK_IMPORTED_MODULE_2_fordjs__ = __webpack_require__(4),
        __WEBPACK_IMPORTED_MODULE_2_fordjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fordjs__),
        __WEBPACK_IMPORTED_MODULE_3_guxfoe_form_component_form_validation__ = __webpack_require__(36),
        __WEBPACK_IMPORTED_MODULE_4_guxfoe_form_ngGuxForms_module__ = __webpack_require__(55);
    __webpack_require__(284), __webpack_require__(285), __webpack_require__(286), __webpack_require__(287), __webpack_require__(118), __webpack_require__(53);
    module = {
        name: "form",
        selector: ".form.section",
        module: __WEBPACK_IMPORTED_MODULE_4_guxfoe_form_ngGuxForms_module__.a,
        init: function(element) {
            var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
            __WEBPACK_IMPORTED_MODULE_1_angular___default.a.bootstrap($element, [__WEBPACK_IMPORTED_MODULE_4_guxfoe_form_ngGuxForms_module__.a.name]), $element.parent().hasClass("component-search-form") || __WEBPACK_IMPORTED_MODULE_3_guxfoe_form_component_form_validation__.a.init($element.find("form"))
        }
    };
    __WEBPACK_IMPORTED_MODULE_2_fordjs___default.a.registerComponent(module), __webpack_exports__.a = module
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var $overlayContainer, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_stickyItemService__ = __webpack_require__(33),
        isCurrentlyScrolling = !1,
        $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body"),
        $defaultContext = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body"),
        animationSpeed = 500,
        cssSelector = {
            overlayContainer: ".overlay-container"
        },
        cssClass = {
            wizardOverlayOpen: "wizard-overlay-open",
            overlayOpen: "is-overlay-open"
        };

    function stickyElementsHeight() {
        return __WEBPACK_IMPORTED_MODULE_1_stickyItemService__.a.getStickyItemHeight() || 0
    }

    function scroll(offset, speed, $context, callback) {
        isCurrentlyScrolling || (isCurrentlyScrolling = !0, ($context || $defaultContext).stop(!0, !1).animate({
            scrollTop: offset
        }, speed || animationSpeed, function() {
            isCurrentlyScrolling = !1, callback && callback()
        })), __WEBPACK_IMPORTED_MODULE_1_stickyItemService__.a.onItemAdded(function() {
            isCurrentlyScrolling && (isCurrentlyScrolling = !1, scroll(offset - stickyElementsHeight(), speed, $context, callback))
        })
    }
    module = {
        scrollToElement: function($element, speed, $context, callback) {
            var offset = $element.offset().top - stickyElementsHeight();
            isCurrentlyScrolling || scroll(offset, speed, $context, callback)
        },
        scroll: scroll,
        getContext: function() {
            return $body.hasClass(cssClass.wizardOverlayOpen) || $body.hasClass(cssClass.overlayOpen) ? $overlayContainer || ($overlayContainer = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(cssSelector.overlayContainer)) : $defaultContext
        }
    }, __webpack_exports__.a = module
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_configurationProvider__),
        __WEBPACK_IMPORTED_MODULE_3_dealerlocatorGoogleMaps__ = __webpack_require__(117);
    module = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.module("ngGuxGoogleMaps", []);
    window.GuxGoogleMap = {}, module.factory("ngGuxGoogleMapService", ["$q", function($q) {
        var api = {},
            GLOBAL_CONF = __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_1_angular___default.a.element("#global-market-configuration")),
            cookieToBslIsTrue = !!__WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_1_angular___default.a.element("#bsl-endpoints-configuration")).cookieToBsl,
            registeredMaps = {};

        function _loadGoogleMapApi() {
            if (!window.GuxGoogleMap.mapReadyDeferred)
                if (window.GuxGoogleMap.mapReadyDeferred = $q.defer(), $("#dealerLocatorMap").length) window.GuxGoogleMap.mapReadyDeferred.resolve();
                else {
                    window.GuxGoogleMap.initCallback = function() {
                        window.GuxGoogleMap.mapReadyDeferred.resolve()
                    };
                    var apiUrl = "https://maps.googleapis.com/maps/api/js?client=gme-fordmotorcompany2&libraries=places&channel=" + GLOBAL_CONF.marketCode + "&callback=GuxGoogleMap.initCallback",
                        script = document.createElement("script");
                    script.setAttribute("type", "text/javascript"), script.setAttribute("id", "dealerLocatorMap"), script.setAttribute("src", apiUrl), document.body.appendChild(script)
                }
            return window.GuxGoogleMap.mapReadyDeferred.promise
        }
        return api.registerMap = function(id, element, config) {
            registeredMaps[id] = {
                element: element,
                config: config
            }
        }, api.getMap = function(id) {
            var mapObject = registeredMaps[id];
            if (mapObject) return mapObject.map ? $q.when(mapObject) : function(mapObject) {
                var googleMapsApi;
                return _loadGoogleMapApi().then(function() {
                    return googleMapsApi = new __WEBPACK_IMPORTED_MODULE_3_dealerlocatorGoogleMaps__.a(function(mapObject) {
                        var apiConf = {
                            language: GLOBAL_CONF.locale,
                            countryCode: GLOBAL_CONF.marketCode,
                            cookieToBsl: cookieToBslIsTrue,
                            imagePath: "/etc/designs/guxfoe/clientlibs/guxfoe-dealerlocator/img/dealerlocator/",
                            autocompleteCallbackName: "autoCompleteDealers"
                        };
                        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(apiConf, mapObject.config)
                    }(mapObject)), mapObject.dealerDataStatus = googleMapsApi.getDealerDataStatus, mapObject.map = new googleMapsApi.map(mapObject.element[0], {
                        disableBusinessPOI: !0
                    }), google.maps.event.addListener(mapObject.map.map, "idle", function() {
                        google.maps.event.trigger(mapObject.map.map, "resize")
                    }), mapObject
                })
            }(mapObject)
        }, api.initializeGoogleMapsApi = function() {
            return _loadGoogleMapApi()
        }, api
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
        __WEBPACK_IMPORTED_MODULE_2_imagesLoaded__ = __webpack_require__(94),
        __WEBPACK_IMPORTED_MODULE_2_imagesLoaded___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_imagesLoaded__);

    function _extends() {
        return (_extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        }).apply(this, arguments)
    }
    __WEBPACK_IMPORTED_MODULE_1_angular___default.a.module("ngGuxGallery", ["ngGuxTouch"]).directive("ngGuxGallery", function() {
        return {
            restrict: "A",
            scope: {
                imageUrls: "=",
                pristine: "=",
                isBslLoading: "="
            },
            transclude: !0,
            template: directiveTemplate,
            controller: ["$scope", "$rootScope", "$element", "$timeout", "ngGuxPreloaderService", function($scope, $rootScope, $element, $timeout, ngGuxPreloaderService) {
                function enableRotation(currentX) {
                    $scope.gallery.mouseX = currentX, $scope.gallery.rotateActive = !0
                }

                function disableRotation() {
                    $scope.gallery.rotateActive = !1
                }

                function rotateGallery(currentX) {
                    if ($scope.images) {
                        var threshold = Math.round($element.width() / $scope.images.length);
                        $scope.gallery.rotateActive && 0 !== currentX && ($scope.gallery.mouseX ? currentX > $scope.gallery.mouseX + threshold ? ($scope.gallery.mouseX = currentX, performRotation(getPrevIndex(), {
                            type: "spin",
                            direction: "left"
                        })) : currentX < $scope.gallery.mouseX - threshold && ($scope.gallery.mouseX = currentX, performRotation(getNextIndex(), {
                            type: "spin",
                            direction: "right"
                        })) : $scope.gallery.mouseX = currentX)
                    }
                }

                function performRotation(nextIndex, eventDetails) {
                    $scope.isTouched || ($scope.isTouched = !0), $scope.pristine.value && ($scope.pristine = {
                        value: !1
                    }), $scope.seekToNextImage || ($scope.seekToNextImage = !0, ngGuxPreloaderService.preloadImages($scope.images[nextIndex]).then(function() {
                        $scope.currentIndex = nextIndex, $scope.seekToNextImage = !1,
                            function(eventDetails) {
                                $scope.images.length > 0 && $rootScope.$broadcast("ngGuxGallery.galleryRotate", _extends({
                                    image: $scope.images[$scope.currentIndex],
                                    index: $scope.currentIndex
                                }, eventDetails))
                            }(eventDetails)
                    }, function() {
                        $scope.seekToNextImage = !1
                    }))
                }

                function getNextIndex() {
                    return $scope.currentIndex === $scope.images.length - 1 ? 0 : $scope.currentIndex + 1
                }

                function getPrevIndex() {
                    return 0 === $scope.currentIndex ? $scope.images.length - 1 : $scope.currentIndex - 1
                }

                function showIndicatorIcon() {
                    var $image = $element.find(".layer");
                    __WEBPACK_IMPORTED_MODULE_2_imagesLoaded___default()($image).then(function(isErrorOccurred) {
                        $scope.$apply(function() {
                            $scope.isImagesLoaded = !isErrorOccurred
                        })
                    })
                }

                function imagesLoaded() {
                    $scope.images = $scope.imageUrls, $timeout(showIndicatorIcon, 0), (!$scope.images || $scope.currentIndex > $scope.images.length - 1) && ($scope.currentIndex = 0, ngGuxPreloaderService.preloadImages($scope.images))
                }

                function imageUrlsWatch() {
                    var resultPromise, images;
                    if (!$scope.isLoading && $scope.imageUrls && $scope.imageUrls.length) return $scope.pristine.value ? resultPromise = function() {
                        var images = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray($scope.imageUrls) ? $scope.imageUrls : [];
                        return $scope.isLoading = !0, ngGuxPreloaderService.preloadImages(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.slice(images, 0, 1))
                    }() : (images = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray($scope.imageUrls) ? $scope.imageUrls : [], $scope.isLoading = !0, resultPromise = ngGuxPreloaderService.preloadImages(images)), resultPromise.then(function() {
                        imagesLoaded(), $scope.isLoading = !1
                    }, function() {
                        imagesLoaded(), $scope.isLoading = !1
                    })
                }
                $scope.seekToNextImage = !1, $scope.imagesPreloaded = !1, $scope.currentIndex = 0, $scope.isTouched = !1, $scope.gallery = {
                    rotateActive: !1,
                    mouseX: null
                }, $scope.$watch("imageUrls", imageUrlsWatch), $scope.$watch("pristine", imageUrlsWatch), $scope.nextSlide = function(event) {
                    performRotation(getNextIndex(), {
                        type: "rotate",
                        direction: "right"
                    }), event.preventDefault()
                }, $scope.prevSlide = function(event) {
                    performRotation(getPrevIndex(), {
                        type: "rotate",
                        direction: "left"
                    }), event.preventDefault()
                }, $scope.mouseDown = function(event) {
                    enableRotation(event.offsetX), event.preventDefault()
                }, $scope.mouseUp = function(event) {
                    disableRotation(), event.preventDefault()
                }, $scope.touchStart = function(event) {
                    var touch = event.touches[0];
                    enableRotation(touch.pageX)
                }, $scope.touchEnd = function() {
                    disableRotation()
                }, $scope.touchMove = function(event) {
                    var touch = event.touches[0];
                    rotateGallery(touch.pageX)
                }, $scope.mouseMove = function(event) {
                    rotateGallery(event.offsetX), event.preventDefault()
                }
            }],
            link: function(scope, element, attrs, ctrl, transclude) {
                transclude(scope, function(clone) {
                    element.append(clone)
                })
            }
        }
    });
    var directiveTemplate = '<div class="ng-gux-gallery-wrapper">\t<div class="gallery-slides"\t\ttabindex="0"\t\tdata-ng-mousedown="mouseDown($event)"\t\tdata-ng-mouseup="mouseUp($event)"\t\tdata-ng-mouseleave="mouseUp($event)"\t\tdata-ng-mousemove="mouseMove($event)"\t\tdata-ng-gux-touchstart="touchStart(event)"\t\tdata-ng-gux-touchend="touchEnd(event)"\t\tdata-ng-gux-touchmove="touchMove(event)"\t\tdata-ng-class="{ multiple : images.length > 1, \'is-touched\':isTouched, \'images-loaded\': isImagesLoaded}">\t\t<div class="slide">\t\t\t<img data-ng-repeat="url in images[currentIndex].urls track by $index" data-ng-src="{{url}}" alt="{{images[currentIndex].tag}}" class="layer"\t\t\t\tsrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+AGHA07DpzN/ckAAABIaVRYdENvbW1lbnQAAAAAAENSRUFUT1I6IGdkLWpwZWcgdjEuMCAodXNpbmcgSUpHIEpQRUcgdjYyKSwgZGVmYXVsdCBxdWFsaXR5Ctrb0JYAAAAPSURBVCjPY2AYBaOACgAAAkkAAQysdekAAAAASUVORK5CYII=">\t\t</div>\t</div>\t<div class="bp-loader" data-ng-if="isLoading">\t\t<div class="bp-loader-icon">\t\t\t<svg class="circular" viewBox="25 25 50 50">\t\t\t\t<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>\t\t\t</svg>\t\t</div>\t</div></div>'
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.imagesLoaded = __webpack_require__(311)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        module = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxTouch", ["ng"]);
    module.directive("ngGuxTouchstart", [function() {
        return {
            controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
                function onTouchStart($event) {
                    var method = "$scope." + $attrs.ngGuxTouchstart;
                    $scope.$apply(function() {
                        eval(method)
                    })
                }
                $element.bind("touchstart", onTouchStart)
            }]
        }
    }]), module.directive("ngGuxTouchend", [function() {
        return {
            controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
                function onTouchEnd($event) {
                    var method = "$scope." + $attrs.ngGuxTouchend;
                    $scope.$apply(function() {
                        eval(method)
                    })
                }
                $element.bind("touchend", onTouchEnd)
            }]
        }
    }]), module.directive("ngGuxTouchmove", [function() {
        return {
            controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
                function onTouchStart($event) {
                    $element.bind("touchmove", onTouchMove), $element.bind("touchend", onTouchEnd)
                }

                function onTouchMove($event) {
                    var method = "$scope." + $attrs.ngGuxTouchmove;
                    $scope.$apply(function() {
                        eval(method)
                    })
                }

                function onTouchEnd($event) {
                    event.preventDefault(), $element.unbind("touchmove", onTouchMove), $element.unbind("touchend", onTouchEnd)
                }
                $element.bind("touchstart", onTouchStart)
            }]
        }
    }]);
    var _unused_webpack_default_export = module
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        legacySupport = 1 === __WEBPACK_IMPORTED_MODULE_0_angular___default.a.version.major && 0 === __WEBPACK_IMPORTED_MODULE_0_angular___default.a.version.minor;
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxSlider", []).directive("rangeSlider", ["$document", "$filter", "$log", function($document, $filter, $log) {
        var eventNamespace = ".rangeSlider",
            defaults_disabled = !1,
            defaults_orientation = "horizontal",
            defaults_step = 0,
            defaults_decimalPlaces = 0,
            defaults_showValues = !0,
            defaults_preventEqualMinMax = !1,
            defaults_attachHandleValues = !1,
            actions = window.navigator.pointerEnabled ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
                over: "pointerdown",
                out: "mouseout"
            } : window.navigator.msPointerEnabled ? {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
                over: "MSPointerDown",
                out: "mouseout"
            } : {
                start: "mousedown touchstart",
                move: "mousemove touchmove",
                end: "mouseup touchend",
                over: "mouseover touchstart",
                out: "mouseout"
            },
            onEvent = actions.start + eventNamespace,
            moveEvent = actions.move + eventNamespace,
            offEvent = actions.end + eventNamespace,
            overEvent = actions.over + eventNamespace,
            outEvent = actions.out + eventNamespace,
            client = function(f) {
                try {
                    return [f.clientX || f.originalEvent.clientX || f.originalEvent.touches[0].clientX, f.clientY || f.originalEvent.clientY || f.originalEvent.touches[0].clientY]
                } catch (e) {
                    return ["x", "y"]
                }
            },
            restrict = function(value) {
                return value < 0 ? 0 : value > 100 ? 100 : value
            },
            isNumber = function(n) {
                return !isNaN(parseFloat(n)) && isFinite(n)
            },
            scopeOptions = {
                disabled: "=?",
                min: "=",
                max: "=",
                modelMin: "=?",
                modelMax: "=?",
                onHandleDown: "&",
                onHandleUp: "&",
                onMaxHandleKeyUp: "&",
                onMinHandleKeyUp: "&",
                orientation: "@",
                step: "@",
                decimalPlaces: "@",
                filter: "@",
                filterOptions: "@",
                showValues: "@",
                pinHandle: "@",
                preventEqualMinMax: "@",
                attachHandleValues: "@",
                getterSetter: "@"
            };
        return legacySupport && (scopeOptions.disabled = "=", scopeOptions.modelMin = "=", scopeOptions.modelMax = "="), {
            restrict: "A",
            replace: !0,
            template: ['<div class="ng-slider-range-slider">', '<div class="ng-slider-runner">', '<div class="ng-slider-handle ng-slider-handle-min" data-ng-keyup="onMinHandleKeyUpEvent($event)" tabindex="0"><i></i></div>', '<div class="ng-slider-handle ng-slider-handle-max" data-ng-keyup="onMaxHandleKeyUpEvent($event)" tabindex="0"><i></i></div>', '<div class="ng-slider-join"></div>', "</div>", '<div class="ng-slider-value-runner">', '<div class="ng-slider-value ng-slider-value-min" ng-show="showValues"><div>{{filteredModelMin}}</div></div>', '<div class="ng-slider-value ng-slider-value-max" ng-show="showValues"><div>{{filteredModelMax}}</div></div>', "</div>", "</div>"].join(""),
            scope: scopeOptions,
            link: function(scope, element, attrs, controller) {
                var $slider = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(element),
                    handles = [element.find(".ng-slider-handle-min"), element.find(".ng-slider-handle-max")],
                    values = [element.find(".ng-slider-value-min"), element.find(".ng-slider-value-max")],
                    join = element.find(".ng-slider-join"),
                    pos = "left",
                    posOpp = "right",
                    orientation = 0,
                    range = 0,
                    down = !1;

                function modelMin(newValue) {
                    return scope.getterSetter ? arguments.length ? scope.modelMin(newValue) : scope.modelMin() : arguments.length ? scope.modelMin = newValue : scope.modelMin
                }

                function modelMax(newValue) {
                    return scope.getterSetter ? arguments.length ? scope.modelMax(newValue) : scope.modelMax() : arguments.length ? scope.modelMax = newValue : scope.modelMax
                }

                function setPinHandle(status) {
                    "min" === status ? (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[0]).css("display", "none"), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[1]).css("display", "block")) : "max" === status ? (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[0]).css("display", "block"), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[1]).css("display", "none")) : (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[0]).css("display", "block"), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[1]).css("display", "block"))
                }

                function setDisabledStatus(status) {
                    status ? $slider.addClass("ng-slider-disabled") : $slider.removeClass("ng-slider-disabled")
                }

                function setMinMax() {
                    scope.min > scope.max && throwError("min must be less than or equal to max"), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(scope.min) && __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(scope.max) && (isNumber(scope.min) || throwError("min must be a number"), isNumber(scope.max) || throwError("max must be a number"), range = scope.max - scope.min, [scope.min, scope.max], setModelMinMax())
                }

                function setModelMinMax() {
                    if (modelMin() > modelMax() && (throwWarning("modelMin must be less than or equal to modelMax"), modelMin(modelMax())), (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(modelMin()) || "min" === scope.pinHandle) && (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(modelMax()) || "max" === scope.pinHandle)) {
                        isNumber(modelMin()) || ("min" !== scope.pinHandle && throwWarning("modelMin must be a number"), modelMin(scope.min)), isNumber(modelMax()) || ("max" !== scope.pinHandle && throwWarning("modelMax must be a number"), modelMax(scope.max));
                        var value1pos, value2pos, handle1pos = restrict((modelMin() - scope.min) / range * 100),
                            handle2pos = restrict((modelMax() - scope.min) / range * 100);
                        if (scope.attachHandleValues && (value1pos = handle1pos, value2pos = handle2pos), modelMin(Math.max(scope.min, modelMin())), modelMax(Math.min(scope.max, modelMax())), scope.filter && scope.filterOptions) scope.filteredModelMin = $filter(scope.filter)(modelMin(), scope.filterOptions), scope.filteredModelMax = $filter(scope.filter)(modelMax(), scope.filterOptions);
                        else if (scope.filter) {
                            var filterTokens = scope.filter.split(":"),
                                filterName = scope.filter.split(":")[0],
                                filterOptions = filterTokens.slice().slice(1),
                                modelMinOptions = (filterOptions = filterOptions.map(function(arg) {
                                    return isNumber(arg) ? +arg : '"' === arg[0] && '"' === arg[arg.length - 1] || "'" === arg[0] && "'" === arg[arg.length - 1] ? arg.slice(1, -1) : void 0
                                })).slice().unshift(modelMin()),
                                modelMaxOptions = filterOptions.slice().unshift(modelMax());
                            scope.filteredModelMin = $filter(filterName).apply(void 0, modelMinOptions), scope.filteredModelMax = $filter(filterName).apply(void 0, modelMaxOptions)
                        } else scope.filteredModelMin = modelMin(), scope.filteredModelMax = modelMax();
                        scope.min === scope.max && modelMin() === modelMax() ? (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[0]).css(pos, "0%"), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[1]).css(pos, "100%"), scope.attachHandleValues && (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(values[0]).css(pos, "0%"), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(values[1]).css(pos, "100%")), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(join).css(pos, "0%").css(posOpp, "0%")) : (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[0]).css(pos, handle1pos + "%"), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[1]).css(pos, handle2pos + "%"), scope.attachHandleValues && (__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(values[0]).css(pos, value1pos + "%"), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(values[1]).css(pos, value2pos + "%"), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(values[1]).css(posOpp, "auto")), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(join).css(pos, handle1pos + "%").css(posOpp, 100 - handle2pos + "%"), handle1pos > 95 && __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(handles[0]).css("z-index", 3))
                    }
                }

                function handleMove(index) {
                    var $handle = handles[index];
                    $handle.bind(onEvent + "X", function(event) {
                        var handleDownClass = (0 === index ? "ng-slider-handle-min" : "ng-slider-handle-max") + "-down",
                            originalPosition = ((0 === index ? modelMin() : modelMax()) - scope.min) / range * 100,
                            originalClick = client(event),
                            previousClick = originalClick,
                            previousProposal = !1;
                        __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(scope.onHandleDown) && scope.onHandleDown(), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("body").bind("selectstart" + eventNamespace, function() {
                            return !1
                        }), scope.disabled || (down = !0, $handle.addClass("ng-slider-down"), $slider.addClass("ng-slider-focus " + handleDownClass), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("body").addClass("ng-slider-touching"), $document.bind(moveEvent, function(e) {
                            var movement, proposal, currentClick = client(e),
                                per = scope.step / range * 100,
                                otherModelPosition = ((0 === index ? modelMax() : modelMin()) - scope.min) / range * 100;
                            "touchmove" !== e.type && e.preventDefault(), "x" !== currentClick[0] && (currentClick[0] -= originalClick[0], currentClick[1] -= originalClick[1], movement = [previousClick[0] !== currentClick[0], previousClick[1] !== currentClick[1]], proposal = originalPosition + 100 * currentClick[orientation] / (orientation ? $slider.height() : $slider.width()), proposal = restrict(proposal), scope.preventEqualMinMax && (0 === per && (per = 1 / range * 100), 0 === index ? otherModelPosition -= per : 1 === index && (otherModelPosition += per)), 0 === index ? proposal = proposal > otherModelPosition ? otherModelPosition : proposal : 1 === index && (proposal = proposal < otherModelPosition ? otherModelPosition : proposal), scope.step > 0 && proposal < 100 && proposal > 0 && (proposal = Math.round(proposal / per) * per), proposal > 95 && 0 === index ? $handle.css("z-index", 3) : $handle.css("z-index", ""), movement[orientation] && proposal !== previousProposal && (0 === index ? modelMin(parseFloat(parseFloat(proposal * range / 100 + scope.min).toFixed(scope.decimalPlaces))) : 1 === index && modelMax(parseFloat(parseFloat(proposal * range / 100 + scope.min).toFixed(scope.decimalPlaces))), scope.$apply(), previousProposal = proposal), previousClick = currentClick)
                        }).bind(offEvent, function() {
                            __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isFunction(scope.onHandleUp) && scope.onHandleUp(), $document.off(moveEvent), $document.off(offEvent), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("body").removeClass("ng-slider-touching"), down = !1, $handle.removeClass("ng-slider-down"), $handle.removeClass("ng-slider-over"), $slider.removeClass("ng-slider-focus " + handleDownClass)
                        }))
                    }).on(overEvent, function() {
                        $handle.addClass("ng-slider-over")
                    }).on(outEvent, function() {
                        down || $handle.removeClass("ng-slider-over")
                    })
                }

                function throwError(message) {
                    throw scope.disabled = !0, new Error("RangeSlider: " + message)
                }

                function throwWarning(message) {
                    $log.warn(message)
                }
                scope.filteredModelMin = modelMin(), scope.filteredModelMax = modelMax(), scope.onMaxHandleKeyUpEvent = function(e) {
                    scope.onMaxHandleKeyUp({
                        event: e
                    })
                }, scope.onMinHandleKeyUpEvent = function(e) {
                    scope.onMinHandleKeyUp({
                        event: e
                    })
                }, attrs.$observe("disabled", function(val) {
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(val) || (scope.disabled = defaults_disabled), scope.$watch("disabled", setDisabledStatus)
                }), attrs.$observe("orientation", function(val) {
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(val) || (scope.orientation = defaults_orientation);
                    for (var classNames = scope.orientation.split(" "), i = 0, l = classNames.length; i < l; i++) classNames[i] = "ng-slider-" + classNames[i];
                    var useClass = classNames.join(" ");
                    $slider.addClass(useClass), "vertical" !== scope.orientation && "vertical left" !== scope.orientation && "vertical right" !== scope.orientation || (pos = "top", posOpp = "bottom", orientation = 1)
                }), attrs.$observe("step", function(val) {
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(val) || (scope.step = defaults_step)
                }), attrs.$observe("decimalPlaces", function(val) {
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(val) || (scope.decimalPlaces = defaults_decimalPlaces)
                }), attrs.$observe("showValues", function(val) {
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(val) ? scope.showValues = "false" !== val : scope.showValues = defaults_showValues
                }), attrs.$observe("pinHandle", function(val) {
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(val) ? scope.pinHandle = "min" === val || "max" === val ? val : null : scope.pinHandle = null, scope.$watch("pinHandle", setPinHandle)
                }), attrs.$observe("preventEqualMinMax", function(val) {
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(val) ? scope.preventEqualMinMax = "false" !== val : scope.preventEqualMinMax = defaults_preventEqualMinMax
                }), attrs.$observe("attachHandleValues", function(val) {
                    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined(val) ? "true" === val || "" === val ? (scope.attachHandleValues = !0, element.find(".ng-slider-value-runner").addClass("ng-slider-attached-handles")) : scope.attachHandleValues = !1 : scope.attachHandleValues = defaults_attachHandleValues
                }), scope.$watch("min", setMinMax), scope.$watch("max", setMinMax), scope.$watch(function() {
                    return modelMin()
                }, setModelMinMax), scope.$watch(function() {
                    return modelMax()
                }, setModelMinMax), scope.$on("$destroy", function() {
                    $slider.off(eventNamespace), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("body").off(eventNamespace), $document.off(eventNamespace);
                    for (var i = 0, l = handles.length; i < l; i++) handles[i].off(eventNamespace), handles[i].off(eventNamespace + "X")
                }), $slider.bind("selectstart" + eventNamespace, function(event) {
                    return !1
                }).bind("click", function(event) {
                    event.stopPropagation()
                }), handleMove(0), handleMove(1)
            }
        }
    }]);
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1e3 / 60)
    }
}, , , , , , , , , , , , , , , , function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.hammer = __webpack_require__(211)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var accordionTracked, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};
    api.trackExpandAccordion = function(panelTabText, expand) {
        !accordionTracked && expand && (digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":content:onpage" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:accordion:expand panel", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "accordion", digitaldata.onclick.contentNameID = "tab text:" + panelTabText, _satellite.track("moduleIExpandContent"), accordionTracked = !0)
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_exports__.a = {
        getValidJsonFromString: function(cookieStr) {
            var cookieJson;
            try {
                cookieJson = "string" == typeof cookieStr && JSON.parse(cookieStr)
            } catch (e) {
                return void console.error("INVALID JSON ERROR: ", e.message)
            }
            return cookieJson
        }
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery__ = __webpack_require__(5),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mediaQuery__),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isAuthor__),
        __WEBPACK_IMPORTED_MODULE_4_picturefill__ = __webpack_require__(43),
        __WEBPACK_IMPORTED_MODULE_6_guxfoe_accordion_component_accordion_registry_js__ = (__webpack_require__(32), __webpack_require__(45)),
        __WEBPACK_IMPORTED_MODULE_8_analytics_analyticsEventLayer_js__ = (__webpack_require__(69), __webpack_require__(3)),
        api = {},
        keys_leftArrow = 37,
        keys_rightArrow = 39;

    function GalleryTrigger($element) {
        this.$el = $element, this.$window = $(window), this.$body = $("body"), this.$galleryImage = this.$el.find(".image > .link-overlay-image, .image > .video-link-overlay").parent(), this.$triggerLinks = this.$galleryImage.find("a"), this.counterSeparator = this.$el.siblings(".configuration").data("gallery-page-separator"), this.slidesArray = [], this.isAuthorMode = __WEBPACK_IMPORTED_MODULE_3_isAuthor___default.a.getAuthorStatus(), this.isReady = !0, this.$activeItem = null, this.startedTouchX = null, this.startedTouchY = null, this.fixImages(), this.bindUIEvents(), this.enumerateGalleryElements(), setAccordionGlobalState(this.$el, __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.mobile.matches ? "open" : "closed"), $.subscribe("youtube:slideVideoLoaded", function() {
            this.reinitSlide()
        }.bind(this)), $.subscribe("overlay:widthChange", function() {
            this.recalculateSlide()
        }.bind(this)), $.subscribe("overlay:itemHasLoaded", this.setCarouselArrowsHeight.bind(this)), $.subscribe("accordion:item:click", function(state) {
            setAccordionGlobalState(this.$el, state)
        }.bind(this)), $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", this.reinitSlide.bind(this))
    }

    function setAccordionGlobalState($el, state) {
        $el.data("accordionGlobalState", state)
    }
    GalleryTrigger.prototype.handleAccordionState = function() {
        var currentGlobalState = this.$el.data("accordionGlobalState");
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(__WEBPACK_IMPORTED_MODULE_6_guxfoe_accordion_component_accordion_registry_js__.a.getOverlayCollection(), function(accordion) {
            accordion.accordionClass.accordionItemManger.updateItemState({
                itemIndex: 0,
                newState: currentGlobalState
            })
        })
    }, GalleryTrigger.prototype.reinitSlide = function() {
        this.setCarouselWidth(), this.resetSlidePosition(), this.setCarouselArrowsHeight(), this.recalculateSlide()
    }, GalleryTrigger.prototype.bindOverlayElements = function() {
        this.$overlayContainer = this.$body.find(".overlay-container"), this.$overlayContent = this.$overlayContainer.find(".overlay-content"), this.$overlayContentInner = this.$overlayContent.find(".overlay-content-inner"), this.$overlayCarouselArrows = this.$overlayContentInner.parent().find(".carousel-arrows"), this.$overlayClose = this.$overlayContentInner.parent().find(".overlay-close"), this.$overlayCounter = this.$overlayContentInner.find(".gallery-counter"), this.$counterCurrent = this.$overlayContentInner.find(".gallery-counter-current"), this.$counterTotal = this.$overlayContentInner.find(".gallery-counter-all"), this.$counterTotal.html(this.$triggerLinks.length)
    }, GalleryTrigger.prototype.carouselArrowsTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<div class="carousel-arrows"><div class="carousel-btn carousel-next" tabindex="-1"><span class="icon icon-chevron-thin-right"></span></div><div class="carousel-btn darkened carousel-previous inactive" tabindex="-1"><span class="icon icon-chevron-thin-left"></span></div></div>'), GalleryTrigger.prototype.counterTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<div class="gallery-counter"><span class="gallery-counter-current"></span> <%= counterSeparator %> <span class="gallery-counter-all"></span></div>'), GalleryTrigger.prototype.bindUIEvents = function() {
        $(window).on("onoverlayload", function(event) {
            if (this.$el.hasClass("is-open")) {
                var $clickedLink = this.findTrigger(event.url);
                if (0 === $clickedLink.length) return;
                var order = $clickedLink.data("order");
                this.setActiveClass($clickedLink), this.$overlayCarouselArrows && this.$overlayCarouselArrows.css({
                    display: "none"
                }), this.bindOverlayElements(), this.$overlayContainer.addClass("gallery-trigger-carousel"), this.$overlayContentInner.addClass("slides-container"), this.$overlayContentInner.find("> div").addClass("is-active slide").attr("data-order", order).prepend('<div class="swipe-area"></div>'), this.slidesArray = [], this.slidesArray.push(order), this.updateCounter(order);
                var $activeSlideContainer = this.$overlayContentInner.find(".is-active");
                $activeSlideContainer.on("videostarted", function(event) {
                    event.$element.find(".brightcove-player .swipe-layer").show()
                }), $activeSlideContainer.on("playerready", function(event) {
                    this.setCarouselWidth(), this.resetSlidePosition()
                }.bind(this)), this.onSlideLoaded(this.$overlayContent).then(function() {
                    this.setCarouselWidth(), this.setCarouselArrowsHeight(), this.bindEventsOnSlide(this.$overlayContent), this.resetSlidePosition(), this.setCarouselWidthOnResize(), 0 === this.$overlayCarouselArrows.length && (this.addCarouselArrows(), this.bindEventsOnCarouselArrows()), this.$overlayCarouselArrows.css({
                        display: ""
                    }), this.setCarouselArrowsHeight(), 0 === this.$overlayCounter.length && (this.addCounter(), this.updateCounter(order)), setTimeout(function() {
                        this.resetSlidePosition(), this.isReady = !0, this.$overlayContainer.find(".overlay-loading").hide(), this.setCarouselArrowsHeight(), this.recalculateSlide()
                    }.bind(this), 300)
                }.bind(this))
            }
        }.bind(this)), this.$triggerLinks.on("click", function(event) {
            var $clickedLink = $(event.target).closest(".image");
            this.setActiveClass($clickedLink)
        }.bind(this)), $(window).on("overlayclose", function(event) {
            !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(this.$overlayContainer) && this.$overlayContainer.hasClass("gallery-trigger-carousel") && (this.disposeSlide(), this.$el.removeClass("is-open"), this.$el.find(".is-active").removeClass("is-active"), this.$overlayContainer.find(".carousel-arrows").remove(), this.$overlayContainer.removeClass("gallery-trigger-carousel").removeClass("slide-loading"), this.$overlayContentInner.removeClass("slides-container").removeAttr("style"))
        }.bind(this))
    }, GalleryTrigger.prototype.enumerateGalleryElements = function() {
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.$triggerLinks, function(img, i) {
            $(img).closest(".image").attr("data-order", i + 1)
        })
    }, GalleryTrigger.prototype.setActiveClass = function($element) {
        $element.siblings().removeClass("is-active"), $element.addClass("is-active")
    }, GalleryTrigger.prototype.addCounter = function() {
        var $activeSlide = this.$body.find(".slide.is-active"),
            $noAccordion = $activeSlide.find(".box-image-overlay .richtext.section");
        ($noAccordion.length > 0 ? $noAccordion : $activeSlide.find(".accordion-handle")).after(this.counterTemplate({
            counterSeparator: this.counterSeparator
        })), this.$counterCurrent = this.$overlayContentInner.find(".gallery-counter-current"), this.$counterTotal = this.$overlayContentInner.find(".gallery-counter-all"), this.$counterTotal.html(this.$triggerLinks.length)
    }, GalleryTrigger.prototype.updateCounter = function(order) {
        this.$counterCurrent.html(order)
    }, GalleryTrigger.prototype.handleSlide = function($activeSlide, dir) {
        var overlayWidth = this.$overlayContent.width(),
            hasNext = $activeSlide.next().length,
            hasPrev = $activeSlide.prev().length,
            $prevSlide = hasPrev ? $activeSlide.prev() : $activeSlide.parent().find("> :last-child"),
            $nextSlide = hasNext ? $activeSlide.next() : $activeSlide.parent().find("> :first-child");
        this.$overlayContentInner.addClass("is-loading"), $activeSlide.width(overlayWidth), "next" === dir ? ($prevSlide.addClass("is-loading"), hasPrev ? ($prevSlide.css({
            left: overlayWidth + "px"
        }), $activeSlide.css({
            left: overlayWidth + "px"
        })) : ($prevSlide.css({
            left: 0
        }), $activeSlide.css({
            left: 2 * overlayWidth + "px"
        })), this.$overlayContentInner.css({
            left: -2 * overlayWidth + "px"
        })) : ($nextSlide.addClass("is-loading"), hasNext ? ($nextSlide.css({
            left: 0
        }), $activeSlide.css({
            left: 0
        })) : ($nextSlide.css({
            left: 1440
        }), $activeSlide.css({
            left: -1440
        })), this.$overlayContentInner.css({
            left: 0
        }))
    }, GalleryTrigger.prototype.resetSlidePosition = function() {
        var $activeSlide = this.$overlayContentInner.find(".is-active"),
            overlayWidth = this.$overlayContent.width(),
            $prevSlide = $activeSlide.prev().length ? $activeSlide.prev() : $activeSlide.parent().find("> :last-child"),
            $nextSlide = $activeSlide.next().length ? $activeSlide.next() : $activeSlide.parent().find("> :first-child");
        this.$overlayContentInner.add($nextSlide).add($prevSlide).removeClass("is-loading"), this.$overlayContentInner.css({
            left: -1 * overlayWidth + "px"
        }), $activeSlide.css({
            width: overlayWidth + "px",
            left: overlayWidth + "px"
        })
    }, GalleryTrigger.prototype.getSlideContent = function(url, dir) {
        var deferred = $.Deferred(function() {
            $.ajax({
                type: "GET",
                url: url,
                dataType: "html",
                success: function(response) {
                    var $content = $(response).find(".content > div");
                    $content.addClass("is-downloaded").find("script").remove(), "next" === dir ? this.$overlayContentInner.append($content) : this.$overlayContentInner.prepend($content);
                    var state, evt, $newSlide = this.$overlayContentInner.find(".is-downloaded");
                    this.setActiveClass($newSlide), $newSlide.removeClass("is-downloaded"), state = "loaded", (evt = $.Event("ongalleryslideload")).state = state, $(window).trigger(evt), deferred.resolve()
                }.bind(this)
            })
        }.bind(this));
        return deferred
    }, GalleryTrigger.prototype.setHashRoute = function(url) {
        var hashRoute = "overlay" + url;
        window.location.hash = hashRoute
    }, GalleryTrigger.prototype.getNextLink = function(dir) {
        var $nextLink, $activeLink = this.$el.find(".is-active"),
            $overlayLinks = $activeLink.parent().find(".image.link-overlay");
        return "prev" === dir ? $nextLink = $activeLink.prev(".link-overlay").length ? $activeLink.prev(".link-overlay") : $overlayLinks.last() : "next" === dir && ($nextLink = $activeLink.next(".link-overlay").length ? $activeLink.next(".link-overlay") : $overlayLinks.first()), $nextLink
    }, GalleryTrigger.prototype.getSlideHref = function(dir) {
        var $nextLink = this.getNextLink(dir),
            absoluteURL = $nextLink.find("a").attr("href").substring(1).split(/#overlay/g),
            href = absoluteURL[absoluteURL.length - 1];
        return window.location.search.indexOf("wcmmode=disabled") > -1 && (href += "?wcmmode=disabled"), this.setActiveClass($nextLink), href
    }, GalleryTrigger.prototype.getActiveSlideContainer = function(activeSlideOrder) {
        var activeSlideContainer = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(this.$overlayContentInner.find(".slide"), function(el) {
            return $(el).data("order") === activeSlideOrder
        });
        return $(activeSlideContainer)
    }, GalleryTrigger.prototype.disposeSlide = function() {
        if (this.$overlayContainer) {
            var $videos = this.$overlayContainer.find(".slide.is-active .brightcove video"),
                $youtube = this.$overlayContainer.find(".slide.is-active .youtube");
            $videos.each(function(i, element) {
                $(element).trigger("pause")
            }), $youtube.each(function(i, element) {
                $.publish("youtube:disposeVideo", element)
            })
        }
    }, GalleryTrigger.prototype.getSlide = function(dir, deffered) {
        var $activeSlideContainer, href = this.getSlideHref(dir),
            activeSlideOrder = this.$el.find(".is-active").data("order");
        if (this.isReady) {
            if (this.isReady = !1, this.disposeSlide(), this.$overlayContainer.addClass("slide-loading"), this.slidesArray.indexOf(activeSlideOrder) < 0) {
                var getContent = this.getSlideContent(href, dir);
                return this.slidesArray.push(activeSlideOrder), getContent.done(function() {
                    ($activeSlideContainer = this.$overlayContentInner.find(".is-active")).attr("data-order", activeSlideOrder).addClass("slide").prepend('<div class="swipe-area"></div>'), this.handleSlide($activeSlideContainer, dir), this.onSlideLoaded($activeSlideContainer).then(function() {
                        Object(__WEBPACK_IMPORTED_MODULE_4_picturefill__.a)($activeSlideContainer), this.addCounter(), this.updateCounter(activeSlideOrder), this.setCarouselArrowsHeight(), this.bindEventsOnSlide($activeSlideContainer), $activeSlideContainer.on("videostarted", function(event) {
                            event.$element.find(".brightcove-player .swipe-layer").show()
                        }), setTimeout(function() {
                            this.resetSlidePosition(), this.isReady = !0, $activeSlideContainer.attr("data-should-be-open", "false")
                        }.bind(this), 200), this.$overlayContainer.removeClass("slide-loading"), this.$overlayClose.focus(), deffered.resolve()
                    }.bind(this))
                }.bind(this))
            }
            var $deferred = $.Deferred();
            return $activeSlideContainer = this.getActiveSlideContainer(activeSlideOrder), activeSlideOrder = $activeSlideContainer.data("order"), this.setActiveClass($activeSlideContainer), this.updateCounter(activeSlideOrder), this.handleSlide($activeSlideContainer, dir), setTimeout(function() {
                this.resetSlidePosition(), this.isReady = !0, $deferred.resolve()
            }.bind(this), 200), this.$overlayContainer.removeClass("slide-loading"), this.$overlayClose.focus(), deffered.resolve(), this.setHashRoute(href), deffered
        }
    }, GalleryTrigger.prototype.onSlideLoaded = function($element) {
        var deferred = $.Deferred(),
            $slideImage = $element.find(".image .component-content img"),
            $slideVideo = $element.find(".brightcove video"),
            $youtubeElement = $element.find(".youtube");
        return $slideImage.length && $slideImage.on("load", function() {
            requestAnimationFrame(function() {
                deferred.resolve()
            })
        }), $slideVideo.length && ($element.find(".brightcove").each(function() {
            $(this).find(".brightcove-player").prepend('<div class="swipe-layer"/>'), $(this).find(".start-image").children().length && $(this).find(".brightcove-player .swipe-layer").hide()
        }), deferred.resolve()), $youtubeElement.length && ($youtubeElement.each(function() {
            $(this).find(".youtube-player-wrapper").append('<div class="swipe-layer"/>')
        }), $.publish("youtube:createOverlayYoutubeVideo", {
            $iframe: $youtubeElement,
            deferred: deferred
        }), deferred.resolve()), deferred.promise()
    }, GalleryTrigger.prototype.trackCarouselInteractions = function(dir) {
        var data = {
            type: "gallery trigger",
            onclick: "next" === dir ? "carousel scroll next" : "carousel scroll previous"
        };
        __WEBPACK_IMPORTED_MODULE_8_analytics_analyticsEventLayer_js__.a.getCarouselEvents().trackCarouselInteractions(data)
    }, GalleryTrigger.prototype.bindEventsOnCarouselArrows = function() {
        this.$overlayContent = this.$overlayContainer.find(".overlay-content"), this.$overlayContent.off("click", ".carousel-next").on("click", ".carousel-next", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function() {
            var def = $.Deferred();
            this.getSlide("next", def).then(function() {
                this.trackCarouselInteractions("next")
            }.bind(this)).then(function() {
                this.handleAccordionState()
            }.bind(this))
        }.bind(this), 250)), this.$overlayContent.off("click", ".carousel-previous").on("click", ".carousel-previous", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function() {
            var def = $.Deferred();
            this.getSlide("prev", def).then(function() {
                this.trackCarouselInteractions("prev")
            }.bind(this)).then(function() {
                this.handleAccordionState()
            }.bind(this))
        }.bind(this), 250)), $(document).off("keydown").on("keydown", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function(e) {
            var dir, keyCode = e.keyCode || e.which,
                def = $.Deferred();
            switch (keyCode) {
                case keys_leftArrow:
                    dir = "prev", this.getSlide(dir, def).then(function() {
                        this.trackCarouselInteractions(dir)
                    }.bind(this)).then(function() {
                        this.handleAccordionState()
                    }.bind(this));
                    break;
                case keys_rightArrow:
                    dir = "next", this.getSlide(dir, def).then(function() {
                        this.trackCarouselInteractions(dir)
                    }.bind(this)).then(function() {
                        this.handleAccordionState()
                    }.bind(this))
            }
        }.bind(this), 250))
    }, GalleryTrigger.prototype.bindEventsOnSlide = function($element) {
        if (this.isTouchDevice()) {
            var touchableContentSelector = [".image.section", ".start-image", ".swipe-layer", ".feature-container > .accordion.section", ".feature-container > .box.section", ".swipe-area", ".accordion.section .share-overlay"].join(", "),
                contentLayers = $element.find(touchableContentSelector);
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(contentLayers, function(contentLayer) {
                this.addTouchListeners(contentLayer)
            }.bind(this))
        }
    }, GalleryTrigger.prototype.isTouchDevice = function() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    }, GalleryTrigger.prototype.addTouchListeners = function(contentLayer) {
        var self = this;
        contentLayer.addEventListener("touchstart", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function(e) {
            self.onTouchEvent(e, this, self)
        }, 250), !1), contentLayer.addEventListener("touchend", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(function(e) {
            self.onTouchEvent(e, this, self)
        }, 250), !1)
    }, GalleryTrigger.prototype.onTouchEvent = function(e, contentLayer, self) {
        e.stopPropagation(), e.preventDefault();
        var dir, def = $.Deferred(),
            outerWidth = window.outerWidth || screen.width,
            innerWidth = window.innerWidth,
            movementX = 0,
            movementY = 0;
        if (Math.abs(outerWidth - innerWidth) > 50) return !1;
        if ("touchstart" === e.type && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNull(self.startedTouchX) && 1 === e.touches.length) self.startedTouchX = e.targetTouches[0].clientX, self.startedTouchY = e.targetTouches[0].clientY;
        else if ("touchend" === e.type && !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isNull(self.startedTouchX) && 0 === e.touches.length) {
            if (movementX = e.changedTouches[0].clientX - self.startedTouchX, movementY = e.changedTouches[0].clientY - self.startedTouchY, Math.abs(movementX) < Math.abs(movementY) || Math.abs(movementX) < 100) return self.startedTouchX = null, self.startedTouchY = null, !1;
            movementX > 0 ? (dir = "prev", self.getSlide(dir, def).then(function() {
                this.trackCarouselInteractions(dir)
            }.bind(this)).then(function() {
                this.handleAccordionState()
            }.bind(this))) : movementX < 0 && (dir = "next", self.getSlide(dir, def).then(function() {
                this.trackCarouselInteractions(dir)
            }.bind(this)).then(function() {
                this.handleAccordionState()
            }.bind(this))), self.startedTouchX = null, self.startedTouchY = null
        }
    }, GalleryTrigger.prototype.addCarouselArrows = function() {
        this.$overlayContent.append(this.carouselArrowsTemplate()), this.$overlayCarouselArrows = this.$overlayContentInner.parent().find(".carousel-arrows")
    }, GalleryTrigger.prototype.setCarouselWidth = function() {
        var overlayWidth = this.$overlayContent.width();
        this.$overlayContentInner.css({
            width: "auto",
            left: "auto"
        }), this.$overlayContentInner.css({
            width: 3 * overlayWidth,
            left: -1 * overlayWidth
        })
    }, GalleryTrigger.prototype.setCarouselWidthOnResize = function() {
        $.subscribe("window:resize", this.recalculateSlide.bind(this))
    }, GalleryTrigger.prototype.recalculateSlide = function() {
        var $carouselSlide, overlayWidth;
        this.$overlayContainer.hasClass("gallery-trigger-carousel") && ($carouselSlide = this.$overlayContentInner.find(".slide"), overlayWidth = this.$overlayContent.width(), this.$overlayContentInner.css({
            width: 3 * overlayWidth,
            left: -1 * overlayWidth + "px"
        }), $carouselSlide.css({
            width: overlayWidth + "px",
            left: overlayWidth + "px"
        })), this.setCarouselArrowsHeight()
    }, GalleryTrigger.prototype.setArrows = function() {
        var itemHeight = this.$activeItem.height(),
            carouselArrowsHeight = this.$overlayCarouselArrows.height();
        this.$overlayCarouselArrows.css({
            top: itemHeight / 2 - carouselArrowsHeight / 2 + "px"
        })
    }, GalleryTrigger.prototype.setCarouselArrowsHeight = function() {
        var $activeImage = this.$overlayContentInner.find(".slide.is-active .image img"),
            $activeVideo = this.$overlayContentInner.find(".slide.is-active .brightcove video"),
            $youtubeVideo = this.$overlayContentInner.find(".slide.is-active .youtube");
        $activeImage.length ? (this.$activeItem = $activeImage, this.setArrows()) : $activeVideo.length ? (this.$activeItem = $activeVideo, this.setArrows.call(this)) : $youtubeVideo.length && (this.$activeItem = $youtubeVideo, this.setArrows.call(this)), this.$activeItem.on("load", this.setArrows.bind(this))
    }, GalleryTrigger.prototype.findTrigger = function(url) {
        var res = [];
        return this.$el.hasClass("is-open") && (res = this.$el.find('.component-content a[href*="' + url.replace("?wcmmode=disabled", "") + '"]').parent().parent()), res.length > 1 && res.hasClass("is-active") ? res.filter(".is-active") : $(res[0])
    }, GalleryTrigger.prototype.fixImages = function() {
        this.$galleryImage.each(function() {
            var $image = $(this),
                childClass = $image.children().attr("class").replace("component-content", "");
            $image.addClass(childClass)
        })
    }, api.galleryTriggers = [], api.init = function($element) {
        var galleryTrigger = new GalleryTrigger($element);
        api.galleryTriggers.push(galleryTrigger)
    }, __webpack_exports__.a = api
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.guxSecondaryNavigation = __webpack_require__(282)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_exports__.a = function(config) {
        config.language;
        var countryCode = config.countryCode,
            countryCodes = config.countryCodes ? config.countryCodes.split(",") : [countryCode],
            imagePath = config.imagePath,
            countryBounds = config.countryBounds,
            autocompleteServiceURL = config.autocompleteCallbackURL,
            autoCompleteState = (config.autocompleteCallbackName, config.autoCompleteState),
            boundsString = ((config.autocompleteLabelFormat || "").replace(/{|}|\[|\]|\(|\)/g, "").split(/\W/g).filter(Boolean), config.services, ""),
            bingKey = config.apiKey ? config.apiKey : "Al1EdZ_aW5T6XNlr-BJxCw1l4KaA0tmXFI_eTl1RITyYptWUS0qit_MprtcG7w2F",
            dealerTableBingURL = config.dealerTableURL ? config.dealerTableURL : "https://spatial.virtualearth.net/REST/v1/data/1652026ff3b247cd9d1f4cc12b9a080b/FordEuropeDealers_Transition/Dealer",
            autocompleteDealerList = [],
            punctuationRegex = /[!"#$%&'()*+`\-./:;<=>?@[\\\]^_{|}~]/g,
            googleMatrixLimit = 100,
            dealerDataStatus = $.Deferred(),
            cookieToBslIsTrue = !!config.cookieToBsl;
        if (countryBounds) {
            for (var bounds = [], i = 0; i < countryBounds.length; i++) countryBounds[i].lat && countryBounds[i].lng && bounds.push(countryBounds[i].lng + " " + countryBounds[i].lat);
            countryBounds[0].lat === countryBounds[countryBounds.length - 1].lat && countryBounds[0].lng === countryBounds[countryBounds.length - 1].lng || bounds.push(countryBounds[0].lng + " " + countryBounds[0].lat)
        }
        if (countryBounds) {
            for (var nLat = -91, sLat = 91, eLng = -181, wLng = 181, j = 0; j < countryBounds.length; j++) {
                var x = countryBounds[j];
                x.lat = Number(x.lat), x.lng = Number(x.lng), "" == x.lat && "" == x.lng || (x.lat > nLat && (nLat = x.lat), x.lat < sLat && (sLat = x.lat), x.lng > eLng && (eLng = x.lng), x.lng < wLng && (wLng = x.lng))
            }
            boundsString = "(" + sLat + "," + wLng + "," + nLat + "," + eLng + ")"
        }
        autocompleteServiceURL && "true" === autoCompleteState ? $.ajax({
            url: autocompleteServiceURL,
            method: "GET",
            dataType: "json",
            xhrFields: {
                withCredentials: cookieToBslIsTrue
            }
        }).done(function(dealers) {
            autocompleteDealerList = dealers.data, dealerDataStatus.resolve()
        }).fail(function() {
            dealerDataStatus.reject()
        }) : dealerDataStatus.reject();

        function googleMap(element, options) {
            options.streetViewControl = !1, options.center && options.zoom ? this.map = new google.maps.Map(element, options) : (this.map = new google.maps.Map(element, options), this.setBounds(countryBounds)), options.enableZoom || this.map.setOptions({
                scrollwheel: !1
            }), options.disableBusinessPOI && this.map.setOptions({
                styles: [{
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "poi.attraction",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi.government",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi.medical",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi.park",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi.place_of_worship",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi.school",
                    stylers: [{
                        visibility: "on"
                    }]
                }, {
                    featureType: "poi.sports_complex",
                    stylers: [{
                        visibility: "on"
                    }]
                }]
            }), this.map.setOptions({
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_TOP
                },
                panControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_TOP
                },
                mapTypeControl: !1
            }), this.markers = [], this.autocompleteTimeout = null, this.directionsService = new google.maps.DirectionsService, this.directionsDisplay = new google.maps.DirectionsRenderer({
                suppressMarkers: !0
            }), this.offsetByPixels = function(latlng, offset) {
                var gLatLng, point, newLatLng, projection = this.map.getProjection(),
                    scale = 1 << this.map.getZoom();
                return gLatLng = new google.maps.LatLng(latlng.lat, latlng.lng), (point = projection.fromLatLngToPoint(gLatLng)).x += offset / scale, {
                    lat: (newLatLng = projection.fromPointToLatLng(point)).lat(),
                    lng: newLatLng.lng()
                }
            }
        }

        function filterDealers(dealers, containsParameters, maxResults) {
            var dealersFiltered = [];
            if (!containsParameters) return dealers;
            if (dealers.length > 0)
                for (var _i12 = 0; _i12 < dealers.length; _i12++) {
                    var allMatched = !0;
                    for (var key in containsParameters)
                        if (Object.prototype.hasOwnProperty.call(containsParameters, key)) {
                            var check = containsParameters[key],
                                dealerString = dealers[_i12][key]; - 1 === searchStringPosition(check, dealerString) && (allMatched = !1)
                        }!0 === allMatched && dealersFiltered.push(dealers[_i12])
                }
            return dealersFiltered.length >= maxResults ? dealersFiltered.slice(0, maxResults) : dealersFiltered
        }

        function GuxMarker(position, map, label, infoWindowContent, callback) {
            this.position_ = position, this.map_ = map, this.label_ = label, this.content_ = infoWindowContent, this.div_ = null, this.icon = null, this.callback = callback, this.infoWindow = null, this.setMap(map)
        }

        function GuxInfoWindow(position, map, content) {
            this.position_ = new google.maps.LatLng(position.lat, position.lng), this.map_ = map, this.content_ = content, this.div_ = null, this.setMap(map)
        }

        function jsonpRequest(url) {
            var script = document.createElement("script");
            script.setAttribute("type", "text/javascript"), script.setAttribute("src", url), document.body.appendChild(script)
        }

        function dealerDistance(olat, olon, dlat, dlon) {
            var a, c, lat1 = Math.PI * olat / 180,
                lon1 = Math.PI * olon / 180,
                lat2 = Math.PI * dlat / 180,
                lon2 = Math.PI * dlon / 180;
            return dlon = lon2 - lon1, dlat = lat2 - lat1, a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2), c = 2 * Math.asin(Math.min(1, Math.sqrt(a))), 6371 * c
        }

        function characterFolding(character) {
            return {
                "Âµ": "Î¼",
                "ÃŸ": "ss",
                "Ä°": "iÌ‡",
                "Å‰": "Ê¼n",
                "Å¿": "s",
                "Ç°": "jÌŒ",
                "Í…": "Î¹",
                "Î": "Î¹ÌˆÌ",
                "Î°": "Ï…ÌˆÌ",
                "Ï‚": "Ïƒ",
                "Ï": "Î²",
                "Ï‘": "Î¸",
                "Ï•": "Ï†",
                "Ï–": "Ï€",
                "Ï°": "Îº",
                "Ï±": "Ï",
                "Ïµ": "Îµ",
                "Ö‡": "Õ¥Ö‚",
                "áº–": "hÌ±",
                "áº—": "tÌˆ",
                "áº˜": "wÌŠ",
                "áº™": "yÌŠ",
                "áºš": "aÊ¾",
                "áº›": "á¹¡",
                "áºž": "ss",
                "á½": "Ï…Ì“",
                "á½’": "Ï…Ì“Ì€",
                "á½”": "Ï…Ì“Ì",
                "á½–": "Ï…Ì“Í‚",
                "á¾€": "á¼€Î¹",
                "á¾": "á¼Î¹",
                "á¾‚": "á¼‚Î¹",
                "á¾ƒ": "á¼ƒÎ¹",
                "á¾„": "á¼„Î¹",
                "á¾…": "á¼…Î¹",
                "á¾†": "á¼†Î¹",
                "á¾‡": "á¼‡Î¹",
                "á¾ˆ": "á¼€Î¹",
                "á¾‰": "á¼Î¹",
                "á¾Š": "á¼‚Î¹",
                "á¾‹": "á¼ƒÎ¹",
                "á¾Œ": "á¼„Î¹",
                "á¾": "á¼…Î¹",
                "á¾Ž": "á¼†Î¹",
                "á¾": "á¼‡Î¹",
                "á¾": "á¼ Î¹",
                "á¾‘": "á¼¡Î¹",
                "á¾’": "á¼¢Î¹",
                "á¾“": "á¼£Î¹",
                "á¾”": "á¼¤Î¹",
                "á¾•": "á¼¥Î¹",
                "á¾–": "á¼¦Î¹",
                "á¾—": "á¼§Î¹",
                "á¾˜": "á¼ Î¹",
                "á¾™": "á¼¡Î¹",
                "á¾š": "á¼¢Î¹",
                "á¾›": "á¼£Î¹",
                "á¾œ": "á¼¤Î¹",
                "á¾": "á¼¥Î¹",
                "á¾ž": "á¼¦Î¹",
                "á¾Ÿ": "á¼§Î¹",
                "á¾ ": "á½ Î¹",
                "á¾¡": "á½¡Î¹",
                "á¾¢": "á½¢Î¹",
                "á¾£": "á½£Î¹",
                "á¾¤": "á½¤Î¹",
                "á¾¥": "á½¥Î¹",
                "á¾¦": "á½¦Î¹",
                "á¾§": "á½§Î¹",
                "á¾¨": "á½ Î¹",
                "á¾©": "á½¡Î¹",
                "á¾ª": "á½¢Î¹",
                "á¾«": "á½£Î¹",
                "á¾¬": "á½¤Î¹",
                "á¾­": "á½¥Î¹",
                "á¾®": "á½¦Î¹",
                "á¾¯": "á½§Î¹",
                "á¾²": "á½°Î¹",
                "á¾³": "Î±Î¹",
                "á¾´": "Î¬Î¹",
                "á¾¶": "Î±Í‚",
                "á¾·": "Î±Í‚Î¹",
                "á¾¼": "Î±Î¹",
                "á¾¾": "Î¹",
                "á¿‚": "á½´Î¹",
                "á¿ƒ": "Î·Î¹",
                "á¿„": "Î®Î¹",
                "á¿†": "Î·Í‚",
                "á¿‡": "Î·Í‚Î¹",
                "á¿Œ": "Î·Î¹",
                "á¿’": "Î¹ÌˆÌ€",
                "á¿“": "Î¹ÌˆÌ",
                "á¿–": "Î¹Í‚",
                "á¿—": "Î¹ÌˆÍ‚",
                "á¿¢": "Ï…ÌˆÌ€",
                "á¿£": "Ï…ÌˆÌ",
                "á¿¤": "ÏÌ“",
                "á¿¦": "Ï…Í‚",
                "á¿§": "Ï…ÌˆÍ‚",
                "á¿²": "á½¼Î¹",
                "á¿³": "Ï‰Î¹",
                "á¿´": "ÏŽÎ¹",
                "á¿¶": "Ï‰Í‚",
                "á¿·": "Ï‰Í‚Î¹",
                "á¿¼": "Ï‰Î¹",
                "ï¬€": "ff",
                "ï¬": "fi",
                "ï¬‚": "fl",
                "ï¬ƒ": "ffi",
                "ï¬„": "ffl",
                "ï¬…": "st",
                "ï¬†": "st",
                "ï¬“": "Õ´Õ¶",
                "ï¬”": "Õ´Õ¥",
                "ï¬•": "Õ´Õ«",
                "ï¬–": "Õ¾Õ¶",
                "ï¬—": "Õ´Õ­"
            }[character] || character
        }

        function searchStringPosition(searchString, comparisonString) {
            return searchString = removeNonAlphanumericCharacters(searchString), (comparisonString = removeNonAlphanumericCharacters(comparisonString)).indexOf(searchString)
        }

        function removeNonAlphanumericCharacters(inputString) {
            return inputString.toLowerCase().replace(punctuationRegex, "").replace(/\s+/g, "").replace(/./g, characterFolding)
        }

        function dealerServicesListToCollection(serviceList) {
            var servicesCollection = {};
            return serviceList.forEach(function(val) {
                servicesCollection[val] = !0
            }), servicesCollection
        }
        return googleMap.prototype.setCenter = function(latlng, offset) {
            var self = this;
            if (this.map.setCenter(latlng), offset) var listener = google.maps.event.addListener(this.map, "idle", function() {
                self.map.panBy(offset, 0), google.maps.event.removeListener(listener)
            })
        }, googleMap.prototype.getCenter = function() {
            var center = this.map.getCenter();
            return {
                lat: center.lat(),
                lng: center.lng()
            }
        }, googleMap.prototype.panTo = function(latlng) {
            this.map.panTo({
                lat: latlng.lat,
                lng: latlng.lng
            })
        }, googleMap.prototype.setZoom = function(zoomLevel) {
            this.map.setZoom(zoomLevel)
        }, googleMap.prototype.getZoom = function() {
            return this.map.getZoom()
        }, googleMap.prototype.setBounds = function(points, offset) {
            for (var bounds = new google.maps.LatLngBounds, self = this, _i = 0; _i < points.length; _i++) points[_i].lat && points[_i].lng ? bounds.extend(new google.maps.LatLng(points[_i].lat, points[_i].lng)) : points[_i].location && points[_i].location.lat && points[_i].location.lng && bounds.extend(new google.maps.LatLng(points[_i].location.lat, points[_i].location.lng));
            if (points.length && (this.map.fitBounds(bounds), offset)) var listener = google.maps.event.addListener(this.map, "idle", function() {
                var zoom = self.map.getZoom();
                self.map.setZoom(zoom - 1), self.map.panBy(offset, 0), google.maps.event.removeListener(listener)
            })
        }, googleMap.prototype.getBounds = function() {
            var bounds = this.map.getBounds(),
                ne = bounds.getNorthEast(),
                sw = bounds.getSouthWest();
            return {
                ne: {
                    lat: ne.lat(),
                    lng: ne.lng()
                },
                sw: {
                    lat: sw.lat(),
                    lng: sw.lng()
                }
            }
        }, googleMap.prototype.geocodeLocation = function(location, callback) {
            var locations = [];
            (new google.maps.Geocoder).geocode({
                address: location,
                region: countryCode
            }, function(data) {
                var addLocation = !1;
                if (data)
                    for (var _i2 = 0; _i2 < data.length; _i2++) {
                        addLocation = !1;
                        for (var _j = 0; _j < data[_i2].address_components.length; _j++)
                            for (var k = 0; k < data[_i2].address_components[_j].types.length; k++)
                                if ("country" === data[_i2].address_components[_j].types[k])
                                    for (var m = 0; m < countryCodes.length; m++) data[_i2].address_components[_j].short_name === countryCodes[m] && (addLocation = !0);
                        addLocation && locations.push({
                            lat: data[_i2].geometry.location.lat(),
                            lng: data[_i2].geometry.location.lng(),
                            description: data[_i2].formatted_address,
                            types: data[_i2].types,
                            address_components: data[_i2].address_components
                        })
                    }
                callback(locations)
            })
        }, googleMap.prototype.reverseGeocode = function(latlng, callback) {
            (new google.maps.Geocoder).geocode({
                latLng: new google.maps.LatLng(latlng.lat, latlng.lng)
            }, function(results, status) {
                results[0] && callback(results[0].formatted_address)
            })
        }, googleMap.prototype.addMarker = function(latlng) {
            return new google.maps.Marker({
                position: latlng,
                map: this.map
            })
        }, googleMap.prototype.addGuxMarker = function(latlng, label, infoWindowContent, callback) {
            var overlay;
            return overlay = new GuxMarker(new google.maps.LatLng(latlng.lat, latlng.lng), this.map, label, infoWindowContent, callback), this.markers.unshift(overlay), overlay
        }, googleMap.prototype.addListener = function(target, event, handler) {
            return google.maps.event.addListener(target, event, handler)
        }, googleMap.prototype.removeListener = function(listener) {
            google.maps.event.removeListener(listener)
        }, googleMap.prototype.trigger = function(target, event) {
            google.maps.event.trigger(target, event)
        }, googleMap.prototype.clearMarkers = function(markers) {
            for (var _i3 = 0; _i3 < markers.length; _i3++) markers[_i3].setMap(null)
        }, googleMap.prototype.searchDealersByDistance = function(config) {
            var url, orArr, baseUrl = dealerTableBingURL + "?",
                geoFilter = config.radius ? "spatialFilter=nearby(" + config.origin.lat + "," + config.origin.lng + "," + config.radius + ")" : "spatialFilter=bbox" + boundsString,
                select = "&$select=*,__Distance",
                matchArr = [],
                distanceMatrixDealers = [],
                filter = "&$filter=",
                maxResults = config.radius ? "&$top=" + config.limit : "&$top=250",
                key = "&key=" + bingKey,
                jsonp = "&Jsonp=collectResults",
                results = [],
                skipValue = 0;
            if (config.matchParameters && config.matchParameters.OR_CLAUSES) {
                for (var _i4 = 0; _i4 < config.matchParameters.OR_CLAUSES.length; _i4++) {
                    for (var orKey in orArr = [], config.matchParameters.OR_CLAUSES[_i4]) 0 === orKey.indexOf("!") ? orArr.push(orKey.slice(1) + "%20Ne%20%27" + config.matchParameters.OR_CLAUSES[_i4][orKey] + "%27") : orArr.push(orKey + "%20Eq%20%27" + config.matchParameters.OR_CLAUSES[_i4][orKey] + "%27");
                    matchArr.push("(" + orArr.join("%20OR%20") + ")")
                }
                delete config.matchParameters.OR_CLAUSES
            }
            if (config.matchParameters)
                for (var k in config.matchParameters) 0 === k.indexOf("!") ? matchArr.push(k.slice(1) + "%20Ne%20%27" + config.matchParameters[k] + "%27") : matchArr.push(k + "%20Eq%20%27" + config.matchParameters[k] + "%27");

            function sortByAsCrowFlies(flattenedResults, origin) {
                var dealerADistance, dealerBDistance;
                flattenedResults.d.results.sort(function(a, b) {
                        return dealerADistance = dealerDistance(origin.lat, origin.lng, a.Latitude, a.Longitude), dealerBDistance = dealerDistance(origin.lat, origin.lng, b.Latitude, b.Longitude), dealerADistance - dealerBDistance
                    }),
                    function(data) {
                        for (var dealer, newDealers, distanceResponses, dealers = [], service = new google.maps.DistanceMatrixService, destinationLatLngs = [], _i5 = 0; _i5 < data.d.results.length; _i5++)(dealer = data.d.results[_i5]).location = {
                            lat: data.d.results[_i5].Latitude,
                            lng: data.d.results[_i5].Longitude
                        }, dealer.distance = 1e3 * data.d.results[_i5].__Distance, dealers.push(dealer);
                        newDealers = filterDealers(dealers, config.containsParameters, googleMatrixLimit);
                        for (var _i6 = 0; _i6 < newDealers.length; _i6++) destinationLatLngs.push(new google.maps.LatLng(newDealers[_i6].location.lat, newDealers[_i6].location.lng));
                        if (distanceResponses = new Array(Math.ceil(destinationLatLngs.length / 25)), newDealers.length && !config.skipSortByDrivingDistance)
                            for (var createDistanceCallback = function(index) {
                                    return function(distances) {
                                        var j, responsesReturned, count = destinationLatLngs.slice(25 * index, 25 * index + 25).length;
                                        if (distances)
                                            for (j = 0; j < distances.rows[0].elements.length; j++) "OK" === distances.rows[0].elements[j].status ? (newDealers[25 * index + j].distance = distances.rows[0].elements[j].distance.value, newDealers[25 * index + j].drivingTime = distances.rows[0].elements[j].duration.value, config.radius ? newDealers[25 * index + j].distance <= 1e3 * config.radius && distanceMatrixDealers.push(newDealers[25 * index + j]) : distanceMatrixDealers.push(newDealers[25 * index + j])) : (newDealers[25 * index + j].distanceError = distances.rows[0].elements[j].status, newDealers[25 * index + j].distance = null, distanceMatrixDealers.push(newDealers[25 * index + j]));
                                        else
                                            for (j = 0; j < count; j++) newDealers[25 * index + j].distanceError = "DRIVING DISTANCE UNAVAILABLE", newDealers[25 * index + j].distance = null, distanceMatrixDealers.push(newDealers[25 * index + j]);
                                        distanceResponses[index] = !0, responsesReturned = !0;
                                        for (var _k = 0; _k < distanceResponses.length; _k++) distanceResponses[_k] || (responsesReturned = !1);
                                        responsesReturned && (dealers = distanceMatrixDealers.sort(function(a, b) {
                                            return "number" == typeof a.distance && "number" == typeof b.distance ? a.distance - b.distance : "number" != typeof a.distance && "number" != typeof b.distance ? a.directDistance - b.directDistance : "number" == typeof a.distance ? -1 : 1
                                        }), config.callback(dealers.slice(0, config.limit)))
                                    }
                                }, _i7 = 0; _i7 < destinationLatLngs.length / 25; _i7++) service.getDistanceMatrix({
                                origins: [config.origin],
                                destinations: destinationLatLngs.slice(25 * _i7, 25 * _i7 + 25),
                                travelMode: google.maps.TravelMode.DRIVING
                            }, createDistanceCallback(_i7));
                        else config.callback(newDealers)
                    }(flattenedResults)
            }
            matchArr.length ? (filter += matchArr.join("%20And%20"), url = baseUrl + geoFilter + select + filter + maxResults + "&$format=json" + key + jsonp) : url = baseUrl + geoFilter + select + maxResults + "&$format=json" + key + jsonp, jsonpRequest(url + "&$skip=" + skipValue), window.collectResults = function(data) {
                results.push(data.d.results), 250 === data.d.results.length ? jsonpRequest(url + "&$skip=" + (skipValue += 250)) : sortByAsCrowFlies({
                    d: {
                        results: [].concat.apply([], results)
                    }
                }, config.origin)
            }
        }, googleMap.prototype.searchDealersByProperties = function(limit, callback, matchParameters, containsParameters) {
            var orArr, dealerCount, baseUrl = dealerTableBingURL + "?",
                geoFilter = "spatialFilter=bbox" + boundsString,
                matchArr = [],
                filter = "&$filter=",
                maxResults = "&$top=" + limit,
                key = "&key=" + bingKey,
                jsonp = "&Jsonp=processDealerResults",
                dealers = [],
                dealersCompleted = [];
            if (matchParameters && matchParameters.OR_CLAUSES) {
                for (var _i8 = 0; _i8 < matchParameters.OR_CLAUSES.length; _i8++) {
                    for (var orKey in orArr = [], matchParameters.OR_CLAUSES[_i8]) 0 === orKey.indexOf("!") ? orArr.push(orKey.slice(1) + "%20Ne%20%27" + matchParameters.OR_CLAUSES[_i8][orKey] + "%27") : orArr.push(orKey + "%20Eq%20%27" + matchParameters.OR_CLAUSES[_i8][orKey] + "%27");
                    matchArr.push("(" + orArr.join("%20OR%20") + ")")
                }
                delete matchParameters.OR_CLAUSES
            }
            if (matchParameters)
                for (var k in matchParameters) 0 === k.indexOf("!") ? matchArr.push(k.slice(1) + "%20Ne%20%27" + matchParameters[k] + "%27") : matchArr.push(k + "%20Eq%20%27" + matchParameters[k] + "%27");
            if (!matchArr.length) throw new Error("Must specify at least one match parameter.");
            filter += matchArr.join("%20And%20"), jsonpRequest(baseUrl + geoFilter + "&$select=*" + filter + maxResults + "&$inlinecount=allpages&$format=json" + key + jsonp), window.processDealerResults = function(data) {
                var dealer;
                dealerCount = data.d.__count;
                for (var _i9 = 0; _i9 < dealerCount / 250; _i9++) dealersCompleted.push(!1);
                for (var _i10 = 0; _i10 < data.d.results.length; _i10++)(dealer = data.d.results[_i10]).location = {
                    lat: data.d.results[_i10].Latitude,
                    lng: data.d.results[_i10].Longitude
                }, dealer.distance = 1e3 * data.d.results[_i10].__Distance, dealers.push(dealer);
                if (dealerCount > limit) ! function() {
                    for (var skip, iterationCount = parseInt(limit, 10), testLoop = 0, outloop = 0; outloop < dealerCount / 250; outloop++) skip = "&$skip=" + iterationCount, iterationCount += 250, jsonpRequest(baseUrl + geoFilter + "&$select=*" + filter + skip + "&$top=250&$format=json" + key + jsonp), window.processDealerResults = function(data) {
                        for (var dealer, complete = !0, _i11 = 0; _i11 < data.d.results.length; _i11++)(dealer = data.d.results[_i11]).location = {
                            lat: data.d.results[_i11].Latitude,
                            lng: data.d.results[_i11].Longitude
                        }, dealer.distance = 1e3 * data.d.results[_i11].__Distance, dealers.push(dealer);
                        dealersCompleted[testLoop] = !0, testLoop += 1;
                        for (var innerLoop = 0; innerLoop < dealersCompleted.length; innerLoop++) !1 === dealersCompleted[innerLoop] && (complete = !1);
                        if (!0 === complete) {
                            var newDealers = filterDealers(dealers, containsParameters, limit);
                            callback(newDealers)
                        }
                    }
                }();
                else {
                    var newDealers = filterDealers(dealers, containsParameters, limit);
                    callback(newDealers)
                }
            }
        }, googleMap.prototype.displayDealers = function(dealers) {
            var marker, index, latlngs = {};
            this.clearMarkers(this.markers), this.markers = [];
            for (var _i13 = dealers.length - 1; _i13 >= 0; _i13--) index = dealers[_i13].indexOverride || _i13 + 1, marker = this.addGuxMarker({
                lat: dealers[_i13].location.lat,
                lng: dealers[_i13].location.lng
            }, index, dealers[_i13].infoWindowMarkup, dealers[_i13].callback), latlngs[dealers[_i13].location.lat + "," + dealers[_i13].location.lng] && (marker.xOffset = 12), latlngs[dealers[_i13].location.lat + "," + dealers[_i13].location.lng] = !0
        }, googleMap.prototype.clearDealers = function() {
            this.clearMarkers(this.markers), this.markers = []
        }, googleMap.prototype.selectMarker = function(index, delay) {
            this.markers[index] && this.markers[index].select(delay)
        }, googleMap.prototype.deselectMarker = function(index) {
            this.markers[index] && this.markers[index].deselect()
        }, googleMap.prototype.deselectMarkers = function() {
            for (var _i14 = 0; _i14 < this.markers.length; _i14++) this.markers[_i14].deselect()
        }, googleMap.prototype.autocomplete = function(text, limit, callback, type) {
            var ac, locationPredictions, predictions = {
                    dealers: [],
                    locations: []
                },
                placesCompleted = 0,
                places = {};
            this.autocompleteTimeout && clearTimeout(this.autocompleteTimeout), "dealers" !== type && (ac = new google.maps.places.AutocompleteService), this.autocompleteTimeout = setTimeout(function() {
                var dealerMatch, dealerMatches = [];
                if ("dealers" === type) dealerDataStatus.then(function() {
                    for (var _i15 = 0; _i15 < autocompleteDealerList.length; _i15++) - 1 !== searchStringPosition(text, autocompleteDealerList[_i15].DealerName) && (dealerMatch = {
                        DealerName: autocompleteDealerList[_i15].DealerName,
                        DealerID: autocompleteDealerList[_i15].DealerID,
                        DealerServices: autocompleteDealerList[_i15].services,
                        EntityID: autocompleteDealerList[_i15].EntityID,
                        Locality: autocompleteDealerList[_i15].Locality,
                        services: dealerServicesListToCollection(autocompleteDealerList[_i15].services)
                    }, 0 === searchStringPosition(text, autocompleteDealerList[_i15].DealerName) ? dealerMatches.splice(0, 0, dealerMatch) : dealerMatches.push(dealerMatch));
                    predictions.dealers = dealerMatches.slice(0, limit), callback(predictions)
                }).fail(function() {
                    predictions.dealers = [], callback(predictions)
                });
                else
                    for (var _i16 = 0; _i16 < countryCodes.length; _i16++) ac.getPlacePredictions({
                        input: text,
                        componentRestrictions: {
                            country: countryCodes[_i16]
                        },
                        types: ["geocode"]
                    }, function(index) {
                        return function(results, status) {
                            var dealerMatch, dealerMatches = [];
                            if (locationPredictions = [], status === google.maps.places.PlacesServiceStatus.OK)
                                for (var _j2 = 0; _j2 < results.length; _j2++) locationPredictions.push(results[_j2].description);
                            if (places[countryCodes[index]] = locationPredictions, ++placesCompleted === countryCodes.length) {
                                for (var k = 0; k < countryCodes.length; k++) predictions.locations = predictions.locations.concat(places[countryCodes[k]]);
                                if ("locations" !== type) {
                                    for (var m = 0; m < autocompleteDealerList.length; m++) - 1 !== searchStringPosition(text, autocompleteDealerList[m].DealerName) && (dealerMatch = {
                                        DealerName: autocompleteDealerList[m].DealerName,
                                        DealerID: autocompleteDealerList[m].DealerID,
                                        EntityID: autocompleteDealerList[m].EntityID
                                    }, 0 === searchStringPosition(text, autocompleteDealerList[m].DealerName) ? dealerMatches.splice(0, 0, dealerMatch) : dealerMatches.push(dealerMatch));
                                    predictions.dealers = dealerMatches.slice(0, limit)
                                }
                                callback(predictions)
                            }
                        }
                    }(_i16))
            }, 300)
        }, googleMap.prototype.displayRouteToDealer = function(origin, dealer) {
            var self = this;
            this.directionsDisplay.setMap(this.map), this.directionsService.route({
                origin: origin.lat + ", " + origin.lng,
                destination: dealer.location.lat + ", " + dealer.location.lng,
                travelMode: google.maps.TravelMode.DRIVING
            }, function(response, status) {
                status === google.maps.DirectionsStatus.OK && self.directionsDisplay.setDirections(response)
            })
        }, googleMap.prototype.clearRoutes = function() {
            this.directionsDisplay.setMap(null)
        }, googleMap.prototype.getDirectionsURL = function(destination, origin) {
            return "https://maps.google.com?" + (origin ? "saddr=" + origin.lat + "," + origin.lng + "&" : "") + "daddr=" + destination.lat + "," + destination.lng
        }, googleMap.prototype.getAddressDirectionsURL = function(destinationDealer, addressFormat, origin) {
            for (var addressLines = [], _i17 = 0; _i17 < addressFormat.length; _i17++) destinationDealer[addressFormat[_i17]] && addressLines.push(destinationDealer[addressFormat[_i17]]);
            return "https://maps.google.com?" + (origin ? "saddr=" + origin.description + "&" : "") + "daddr=" + addressLines.join("+") + "&output=classic"
        }, GuxMarker.prototype = new google.maps.OverlayView, GuxMarker.prototype.select = function(delay) {
            var self = this,
                gux3ImgPath = document.querySelector("#dealer-locator.gux3-theme") ? imagePath + "gux3-theme/" : imagePath;
            self.icon && self.div_ ? (self.icon.src = gux3ImgPath + "map-marker-active.png", self.div_.style.zIndex = 100) : setTimeout(function() {
                self.icon && self.div_ && (self.icon.src = gux3ImgPath + "map-marker-active.png", self.div_.style.zIndex = 100)
            }, delay || 500)
        }, GuxMarker.prototype.deselect = function(delay) {
            var self = this,
                gux3ImgPath = document.querySelector("#dealer-locator.gux3-theme") ? imagePath + "gux3-theme/" : imagePath;
            self.icon && self.div_ ? (self.icon.src = gux3ImgPath + "map-marker.png", self.div_.style.zIndex = 1, self.infoWindow && self.infoWindow.hide()) : setTimeout(function() {
                self.icon && self.div_ && (self.icon.src = gux3ImgPath + "map-marker.png", self.div_.style.zIndex = 1, self.infoWindow && self.infoWindow.hide())
            }, delay || 500)
        }, GuxMarker.prototype.onAdd = function() {
            var img, div = document.createElement("div"),
                self = this,
                gux3ImgPath = document.querySelector("#dealer-locator.gux3-theme") ? imagePath + "gux3-theme/" : imagePath;
            if (div.className = "map-marker", div.style.width = "35px", div.style.height = "46px", (img = document.createElement("img")).src = gux3ImgPath + "map-marker.png", this.icon = img, div.appendChild(img), this.label_) {
                var span = document.createElement("span");
                span.innerHTML = this.label_, span.className = "marker-label", div.appendChild(span)
            }
            this.div_ = div, this.getPanes().overlayMouseTarget.appendChild(div), this.callback && google.maps.event.addDomListener(div, "click", function() {
                self.callback()
            }), this.content_ && google.maps.event.addDomListener(div, "click", function() {
                self.showInfoWindow()
            })
        }, GuxMarker.prototype.showInfoWindow = function() {
            this.infoWindow && this.infoWindow.hide(), this.infoWindow = new GuxInfoWindow(this.getPosition(), this.map_, this.content_), this.xOffset && (this.infoWindow.xOffset = this.xOffset), window.setTimeout(function() {
                __WEBPACK_IMPORTED_MODULE_1_guxfoe_tooltip_component_tooltip_js___default.a.init()
            })
        }, GuxMarker.prototype.hideInfowindow = function() {
            this.infoWindow && this.infoWindow.hide()
        }, GuxMarker.prototype.draw = function() {
            var pos = this.getProjection().fromLatLngToDivPixel(this.position_),
                xOffset = this.xOffset || 0,
                div = this.div_;
            div.style.position = "absolute", div.style.left = pos.x - (17 + xOffset) + "px", div.style.top = pos.y - 46 + "px"
        }, GuxMarker.prototype.onRemove = function() {
            this.div_.parentNode.removeChild(this.div_), this.div_ = null, this.infoWindow && this.infoWindow.hide()
        }, GuxMarker.prototype.getPosition = function() {
            return {
                lat: this.position_.lat(),
                lng: this.position_.lng()
            }
        }, GuxInfoWindow.prototype = new google.maps.OverlayView, GuxInfoWindow.prototype.onAdd = function() {
            var infoWindow, panes = this.getPanes();
            this.div_ = document.createElement("div"), this.div_.className = "info-window", this.div_.innerHTML = this.content_, infoWindow = panes.overlayMouseTarget.appendChild(this.div_), $(infoWindow).find(".gux-tooltip").each(function() {
                __WEBPACK_IMPORTED_MODULE_1_guxfoe_tooltip_component_tooltip_js___default.a.initOne($(this))
            }), google.maps.event.addListener(this.map_, "click", function() {
                this.setMap(null)
            }.bind(this)), google.maps.event.addDomListener(this.div_, "click", function(e) {
                if ("A" === e.target.nodeName) return e.target.classList.contains("dealer-details-link") ? $.publish("dealer-details-link:clicked", e) : e.target.classList.contains("dl-cvp-rating-note") && $.publish("ratingsLink:clicked", e), void(e.cancelBubble = !0);
                e.stopPropagation()
            })
        }, GuxInfoWindow.prototype.draw = function() {
            var pos = this.getProjection().fromLatLngToDivPixel(this.position_),
                xOffset = this.xOffset || 0,
                div = this.div_;
            div.style.position = "absolute", div.style.left = pos.x + 30 - xOffset + "px", div.style.top = pos.y - 60 + "px"
        }, GuxInfoWindow.prototype.onRemove = function() {
            this.div_ && (this.div_.parentNode.removeChild(this.div_), this.div_ = null)
        }, GuxInfoWindow.prototype.hide = function() {
            this.setMap(null)
        }, {
            map: googleMap,
            getDealerDataStatus: dealerDataStatus
        }
    };
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_guxfoe_tooltip_component_tooltip_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(21)),
        __WEBPACK_IMPORTED_MODULE_1_guxfoe_tooltip_component_tooltip_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_guxfoe_tooltip_component_tooltip_js__)
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_guxfoe_form_dealer_locator_field_component_form_dealerLocatorField_module_js__ = __webpack_require__(288);
    __webpack_require__(289), __webpack_require__(290), __webpack_require__(292), __webpack_require__(293), __webpack_require__(120);
    __WEBPACK_IMPORTED_MODULE_0_guxfoe_form_dealer_locator_field_component_form_dealerLocatorField_module_js__.a.setConfiguration(), __webpack_exports__.a = __WEBPACK_IMPORTED_MODULE_0_guxfoe_form_dealer_locator_field_component_form_dealerLocatorField_module_js__.a
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        api = {};

    function isFilterValid(keyWords, item, isAndComparator) {
        return keyWords.reduce(function(prev, curr) {
            return isAndComparator ? item[curr] && prev : item[curr] || prev
        }, isAndComparator)
    }
    api.checkService = function(item, filters) {
        var parsedFilters = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(filters, function(filter) {
                return 0 === filter.option.indexOf("!") ? !item[filter.option.slice(1)] : item[filter.option]
            }),
            orFilters = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(filters, function(filter) {
                return filter.option.indexOf("_OR_") > -1
            }),
            andFilters = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(filters, function(filter) {
                return filter.option.indexOf("_AND_") > -1
            });
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(orFilters, function(filter) {
            isFilterValid(filter.option.split("_OR_"), item, !1) && parsedFilters.push(filter)
        }), __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(andFilters, function(filter) {
            isFilterValid(filter.option.split("_AND_"), item, !0) && parsedFilters.push(filter)
        }), parsedFilters
    }, api.commaSeparatedServices = function(dealer, services) {
        var servicesArr = [];
        return dealer && services && (servicesArr = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(api.checkService(dealer, services), function(service) {
            return service.display
        })), servicesArr.join(", ")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(2)),
        __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
        __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isAuthor__);
    __webpack_exports__.a = function($q, $http, configurationProvider) {
        var nameplates, dealer, api = {},
            selection = [],
            $component = __WEBPACK_IMPORTED_MODULE_1_angular___default.a.element(".wizard"),
            CONFIG = configurationProvider.getConfiguration($component),
            cookieToBslIsTrue = !!configurationProvider.getConfiguration($("#bsl-endpoints-configuration")).cookieToBsl,
            isVehicleStepValid = !0;

        function matchCodes(vehicle, code) {
            var result = !1;
            return api.getCode(vehicle) === code ? result = !0 : vehicle.wersCode || vehicle.modelCode !== code || (result = !0), result
        }

        function goToErrorPage() {
            __WEBPACK_IMPORTED_MODULE_3_isAuthor___default.a.getAuthorStatus() || (window.location = CONFIG.errorPage)
        }

        function appendImageToVehicle(vehicle) {
            var vehicleImageMapping = function(vehicle) {
                var code = api.getCode(vehicle);
                return CONFIG.vehicleImages ? CONFIG.vehicleImages[code] || CONFIG.vehicleImages[vehicle.wersCode] || CONFIG.vehicleImages[vehicle.modelCode] : null
            }(vehicle);
            vehicleImageMapping && (vehicle.imagePath = vehicleImageMapping.path, vehicle.imageAltText = vehicleImageMapping.altText)
        }

        function mergeAnalyticsConfigToVehicle(vehicle) {
            var vehicleAnalyticsMapping = function(vehicle) {
                var code = api.getCode(vehicle);
                return CONFIG.vehicleAnalytics ? CONFIG.vehicleAnalytics[code] || CONFIG.vehicleAnalytics[vehicle.wersCode] || CONFIG.vehicleAnalytics[vehicle.modelCode] : null
            }(vehicle);
            vehicleAnalyticsMapping && (vehicle.omnitureDesc = vehicleAnalyticsMapping.nameplate, vehicle.omnitureModelYear = vehicleAnalyticsMapping.modelYear, vehicle.modelSeries = vehicleAnalyticsMapping.nameplate + ":" + vehicleAnalyticsMapping.modelSeries)
        }

        function appendGroupIdToVehicle(vehicle, group) {
            vehicle.groupCode = group.code
        }
        return api.loadNameplates = function() {
            var promise, url;
            if (nameplates) {
                var defer = $q.defer();
                defer.resolve(nameplates), promise = defer.promise
            } else promise = $http.get((url = "", CONFIG.nameplateService && CONFIG.campaignCode && CONFIG.siteId && CONFIG.eventType && CONFIG.cultureCode && (url = CONFIG.nameplateService + "/" + CONFIG.campaignCode + "/" + CONFIG.siteId + "/" + CONFIG.eventType + "?locale=" + CONFIG.cultureCode), url), {
                withCredentials: cookieToBslIsTrue
            }).then(function(response) {
                return 200 !== response.status && goToErrorPage(), void 0 !== response.data.status && void 0 !== response.data.status.statusCode && 200 === response.data.status.statusCode || goToErrorPage(),
                    function(nameplates, applyForVehicle) {
                        __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.each(nameplates.data, function(group) {
                            __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.each(group.eventItem, function(vehicle) {
                                applyForVehicle instanceof Array ? __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.each(applyForVehicle, function(apply) {
                                    return apply(vehicle, group)
                                }) : applyForVehicle(vehicle, group)
                            })
                        })
                    }(nameplates = response.data, [appendImageToVehicle, mergeAnalyticsConfigToVehicle, appendGroupIdToVehicle]), nameplates
            }, goToErrorPage);
            return promise
        }, api.getNameplates = function() {
            return nameplates
        }, api.getNameplatesPlaceholder = function(useOriginalNameplateName) {
            var selectedNameplates = api.getSelectedNameplates(),
                nameplatesPlaceholder = "";
            return selectedNameplates.length > 1 ? nameplatesPlaceholder = "multiple nameplates" : 1 === selectedNameplates.length && (nameplatesPlaceholder = !__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isUndefined(useOriginalNameplateName) && useOriginalNameplateName ? selectedNameplates[0].omnitureDesc : selectedNameplates[0].desc), nameplatesPlaceholder
        }, api.getNameplatesDataJson = function() {
            return JSON.stringify({
                nameplate: api.getNameplatesPlaceholder(!0)
            })
        }, api.validateNameplates = function(nameplatesParam) {
            return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isArray(nameplatesParam) || (nameplatesParam = [nameplatesParam]), __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.every(nameplatesParam, function(value) {
                var result = !1;
                return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.forEach(nameplates.data, function(group) {
                    __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.each(group.eventItem, function(item) {
                        result = result || matchCodes(item, value)
                    })
                }), result
            })
        }, api.setSelectedNameplates = function(nameplatesParam) {
            __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isArray(nameplatesParam) || (nameplatesParam = [nameplatesParam]), selection = nameplatesParam
        }, $.subscribe("wizard:changeSelection", function(data) {
            selection = data.selection
        }), api.getSelectedNameplates = function() {
            return selection
        }, api.setSelectedNameplatesByCode = function(nameplateCodes) {
            var filtered;
            __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isArray(nameplateCodes) || (nameplateCodes = [nameplateCodes]), __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.each(nameplates.data, function(group) {
                __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.each(nameplateCodes, function(nameplateCode) {
                    (filtered = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.filter(group.eventItem, function(item) {
                        return matchCodes(item, nameplateCode)
                    })) && filtered.length > 0 && (selection = selection.concat(filtered))
                })
            })
        }, api.getSelectedNameplatesNames = function() {
            return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.map(selection, "desc")
        }, api.getSelectedVehicleCodes = function() {
            return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.map(selection, "modelCode")
        }, api.removeSelectedNameplate = function(vehicle) {
            vehicle && $.publish("wizard:changeSelection", {
                selection: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.without(selection, vehicle)
            })
        }, api.clearData = function() {
            selection = []
        }, api.setDealer = function(selectedDealer) {
            dealer = selectedDealer
        }, api.getDealerName = function() {
            var dealerName = "";
            return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isUndefined(dealer) || (dealerName = dealer.DealerName), dealerName
        }, api.getDealerPlaceholder = function() {
            var dealerName = "";
            return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isUndefined(dealer) || (dealerName = dealer.DealerName), dealerName
        }, api.getDealer = function() {
            return dealer
        }, api.parseNameplates = function(urlParams) {
            var nameplatesCodes;
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isUndefined(urlParams)) {
                var params = function(params) {
                    return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.fromPairs(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.compact(__WEBPACK_IMPORTED_MODULE_2_lodash___default.a.map(params.split("&"), function(item) {
                        if (item) return item.split("=")
                    })))
                }(urlParams = urlParams.replace("?", ""));
                return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.has(params, "vehicleCode") && params.vehicleCode && (nameplatesCodes = params.vehicleCode.split(",")), nameplatesCodes
            }
        }, api.getDealerId = function() {
            return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isUndefined(dealer) ? "" : dealer.DealerID
        }, api.getIsVehicleStepValid = function() {
            return isVehicleStepValid
        }, api.setVehicleStepValidation = function(isValid) {
            isVehicleStepValid = isValid
        }, api.getCode = function(vehicle) {
            var code = sanitize(vehicle.wersCode) || sanitize(vehicle.modelCode),
                derivativeCode = sanitize(vehicle.wersDerivCode) || sanitize(vehicle.derivativeCode);

            function sanitize(value) {
                return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.trim(value).replace("\n", "")
            }
            return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isEmpty(derivativeCode) || (code += "-" + derivativeCode), code
        }, api.setEProfileDigitalData = function() {
            digitaldata.page.eprofileCampaignID = CONFIG.campaignCode, digitaldata.page.eprofileJourneyID = CONFIG.journeyId
        }, api
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
    __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    __webpack_exports__.a = function(dataPreview, errorRedirectUrl) {
        var api = {};

        function redirect(path) {
            var host = window.location.host,
                protocol = window.location.protocol;
            window.location.pathname.indexOf(path) > -1 || window.location.replace(protocol + "//" + host + "/" + path)
        }
        return api.success = function(response) {
            var deferred = $.Deferred();
            return response && response.status && 200 === response.status.statusCode ? deferred.resolve(response) : (deferred.reject(response), dataPreview.notifyError(response.status.statusCode, response.status.errorMessage), errorRedirectUrl && redirect(errorRedirectUrl)), deferred.promise()
        }, api.error = function(xhr) {
            errorRedirectUrl ? redirect(errorRedirectUrl) : dataPreview.notifyError(xhr.status, xhr.statusText)
        }, api
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__transformer_js__ = __webpack_require__(56),
        objectMap = {
            code: "config",
            name: "props.nameplate-label",
            year: "props.marketing-model-year",
            images: !0,
            price: !0,
            specs: !0
        };
    __webpack_exports__.a = function(bslNameplate) {
        return __WEBPACK_IMPORTED_MODULE_0__transformer_js__.a.adaptDataTo(bslNameplate, objectMap)
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_guxfoe_accordion_component_accordion_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__), __webpack_require__(34)),
        __WEBPACK_IMPORTED_MODULE_1_guxfoe_accordion_component_accordion_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_guxfoe_accordion_component_accordion_js__);
    angular.module("ngGuxAccordion", []).directive("guxAccordion", ["$timeout", function($timeout) {
        return {
            restrict: "A",
            link: function($scope, $element) {
                $timeout(function() {
                    $element.length && __WEBPACK_IMPORTED_MODULE_1_guxfoe_accordion_component_accordion_js___default.a.init($element)
                }, 0)
            }
        }
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_configurationProvider__);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxBuyOnlineContextualLink", []).directive("ngGuxBuyOnlineContextualLink", function() {
        var config = __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("#contextual-links-configuration"));
        return {
            restrict: "A",
            scope: {
                disabled: "@",
                selectedFeatures: "=",
                nameplateCode: "=",
                modelCode: "=",
                buyOnlineUrlLink: "@"
            },
            link: function($scope, $element, $attrs) {
                var baseUrl = $element.attr("href"),
                    watchTarget = $scope.selectedFeatures ? "selectedFeatures" : "modelCode";
                $scope.$watch(watchTarget, function() {
                    var contextualOptions = {};
                    contextualOptions = $scope.selectedFeatures ? {
                        baseUrl: baseUrl,
                        linkElements: "/?config=".concat(config.nameplateCode, "~", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map($scope.selectedFeatures, "code")),
                        isContextualDisabled: "true" === $scope.disabled
                    } : {
                        baseUrl: $scope.buyOnlineUrlLink,
                        linkElements: "/?config=".concat($scope.nameplateCode)
                    }, $attrs.$set("href", contextualOptions.isContextualDisabled ? contextualOptions.baseUrl : contextualOptions.baseUrl + contextualOptions.linkElements)
                })
            }
        }
    })
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_dynamicDataProvider__ = __webpack_require__(58),
        __WEBPACK_IMPORTED_MODULE_1_dynamicDataProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dynamicDataProvider__);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxBsl", []).factory("ngDynamicDataProvider", ["$q", function($q) {
        var api = {
            describe: function(vehicle) {
                return $q.when(__WEBPACK_IMPORTED_MODULE_1_dynamicDataProvider___default.a.describe(vehicle))
            },
            enumerate: function(vehicle) {
                return $q.when(__WEBPACK_IMPORTED_MODULE_1_dynamicDataProvider___default.a.enumerate(vehicle))
            },
            enumerateFamilies: function(vehicle, families) {
                return $q.when(__WEBPACK_IMPORTED_MODULE_1_dynamicDataProvider___default.a.enumerateFamilies(vehicle, families))
            },
            getFirstElement: function(payload) {
                return __WEBPACK_IMPORTED_MODULE_1_dynamicDataProvider___default.a.getFirstElement(payload)
            }
        };
        return api
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__transformer_js__ = __webpack_require__(56);
    __webpack_exports__.a = function(response) {
        return __WEBPACK_IMPORTED_MODULE_0__transformer_js__.a.objectToList("data", response)
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_objectUtil__ = __webpack_require__(14),
        __WEBPACK_IMPORTED_MODULE_2_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_objectUtil__);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxBslRelativeImgServiceModule", []).service("ngGuxBslRelativeImgService", function() {
        var api = {};
        return api.getImgSrc = function(vehicleImgObj, displayRelativeCvImages) {
            return function(vehicleImgObj, displayRelativeCvImages) {
                var img;
                vehicleImgObj && vehicleImgObj.showroom && (displayRelativeCvImages && (img = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(vehicleImgObj.showroom, {
                    tag: "showroomcv"
                })), img = img || __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(vehicleImgObj.showroom, function(image) {
                    return "showroomcv" !== image.tag
                }));
                return img && img.urls ? img.urls[0] : ""
            }(vehicleImgObj, displayRelativeCvImages) || __WEBPACK_IMPORTED_MODULE_2_objectUtil___default.a.getPropertyByString("exterior[0].urls[0]", vehicleImgObj) || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+AGHA07DpzN/ckAAABIaVRYdENvbW1lbnQAAAAAAENSRUFUT1I6IGdkLWpwZWcgdjEuMCAodXNpbmcgSUpHIEpQRUcgdjYyKSwgZGVmYXVsdCBxdWFsaXR5Ctrb0JYAAAAPSURBVCjPY2AYBaOACgAAAkkAAQysdekAAAAASUVORK5CYII="
        }, api
    })
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_configurationProvider__);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxConfigurationProviderModule", []).service("ngGuxConfigurationProvider", function() {
        var api = {
            get: function(configurationId) {
                return __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("#" + configurationId))
            }
        };
        return api
    })
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxGallery").factory("ngGuxPreloaderService", ["$q", "$rootScope", function($q, $rootScope) {
        function Preloader(imageLocations) {
            this.imageLocations = imageLocations, this.imageCount = this.getAllImagesCount(), this.loadCount = 0, this.errorCount = 0, this.states = {
                PENDING: 1,
                LOADING: 2,
                RESOLVED: 3,
                REJECTED: 4
            }, this.state = this.states.PENDING, this.deferred = $q.defer(), this.promise = this.deferred.promise
        }
        return Preloader.preloadImages = function(imageLocations) {
            return new Preloader(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(imageLocations) ? imageLocations : [imageLocations]).load()
        }, Preloader.prototype = {
            constructor: Preloader,
            getAllImagesCount: function() {
                var result = 0;
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(this.imageLocations, function(imageLocation) {
                    imageLocation && imageLocation.urls && (result += imageLocation.urls.length)
                }), result
            },
            isInitiated: function() {
                return this.state !== this.states.PENDING
            },
            isRejected: function() {
                return this.state === this.states.REJECTED
            },
            isResolved: function() {
                return this.state === this.states.RESOLVED
            },
            load: function() {
                return this.isInitiated() ? this.promise : (this.state = this.states.LOADING, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(this.imageLocations, function(imageLocation) {
                    imageLocation && imageLocation.urls ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(imageLocation.urls, function(url) {
                        this.loadImageLocation(url)
                    }.bind(this)) : imageLocation && this.loadImageLocation(imageLocation)
                }.bind(this)), this.promise)
            },
            handleImageError: function(imageLocation) {
                this.errorCount++, this.isRejected() || (this.state = this.states.REJECTED, this.deferred.reject(imageLocation))
            },
            handleImageLoad: function(imageLocation) {
                this.loadCount++, this.isRejected() || (this.deferred.notify({
                    percent: Math.ceil(this.loadCount / this.imageCount * 100),
                    imageLocation: imageLocation
                }), this.loadCount === this.imageCount && (this.state = this.states.RESOLVED, this.deferred.resolve(this.imageLocations)))
            },
            loadImageLocation: function(imageLocation) {
                var preloader = this;
                $(new Image).load(function(event) {
                    $rootScope.$apply(function() {
                        preloader.handleImageLoad(event.target.src), preloader = null, event = null
                    })
                }).error(function(event) {
                    $rootScope.$apply(function() {
                        preloader.handleImageError(event.target.src), preloader = null, event = null
                    })
                }).prop("src", imageLocation)
            }
        }, Preloader
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_picturefill__ = __webpack_require__(43);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxInitPicturefill", []).directive("initPicturefill", function() {
        return {
            restrict: "A",
            link: function($scope, $element) {
                Object(__WEBPACK_IMPORTED_MODULE_1_picturefill__.a)($element)
            }
        }
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(module, exports, __webpack_require__) {
    __webpack_require__(112), __webpack_require__(52), __webpack_require__(21), __webpack_require__(26), __webpack_require__(23), __webpack_require__(116), __webpack_require__(89), module.exports = __webpack_require__(294)
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    ! function(window, document, exportName, undefined) {
        "use strict";
        var assign, VENDOR_PREFIXES = ["", "webkit", "Moz", "MS", "ms", "o"],
            TEST_ELEMENT = document.createElement("div"),
            TYPE_FUNCTION = "function",
            round = Math.round,
            abs = Math.abs,
            now = Date.now;

        function setTimeoutContext(fn, timeout, context) {
            return setTimeout(bindFn(fn, context), timeout)
        }

        function invokeArrayArg(arg, fn, context) {
            return !!Array.isArray(arg) && (each(arg, context[fn], context), !0)
        }

        function each(obj, iterator, context) {
            var i;
            if (obj)
                if (obj.forEach) obj.forEach(iterator, context);
                else if (obj.length !== undefined)
                for (i = 0; i < obj.length;) iterator.call(context, obj[i], i, obj), i++;
            else
                for (i in obj) obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj)
        }

        function deprecate(method, name, message) {
            var deprecationMessage = "DEPRECATED METHOD: " + name + "\n" + message + " AT \n";
            return function() {
                var e = new Error("get-stack-trace"),
                    stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    log = window.console && (window.console.warn || window.console.log);
                return log && log.call(window.console, deprecationMessage, stack), method.apply(this, arguments)
            }
        }
        assign = "function" != typeof Object.assign ? function(target) {
            if (target === undefined || null === target) throw new TypeError("Cannot convert undefined or null to object");
            for (var output = Object(target), index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source !== undefined && null !== source)
                    for (var nextKey in source) source.hasOwnProperty(nextKey) && (output[nextKey] = source[nextKey])
            }
            return output
        } : Object.assign;
        var extend = deprecate(function(dest, src, merge) {
                for (var keys = Object.keys(src), i = 0; i < keys.length;)(!merge || merge && dest[keys[i]] === undefined) && (dest[keys[i]] = src[keys[i]]), i++;
                return dest
            }, "extend", "Use `assign`."),
            merge = deprecate(function(dest, src) {
                return extend(dest, src, !0)
            }, "merge", "Use `assign`.");

        function inherit(child, base, properties) {
            var childP, baseP = base.prototype;
            (childP = child.prototype = Object.create(baseP)).constructor = child, childP._super = baseP, properties && assign(childP, properties)
        }

        function bindFn(fn, context) {
            return function() {
                return fn.apply(context, arguments)
            }
        }

        function boolOrFn(val, args) {
            return typeof val == TYPE_FUNCTION ? val.apply(args && args[0] || undefined, args) : val
        }

        function ifUndefined(val1, val2) {
            return val1 === undefined ? val2 : val1
        }

        function addEventListeners(target, types, handler) {
            each(splitStr(types), function(type) {
                target.addEventListener(type, handler, !1)
            })
        }

        function removeEventListeners(target, types, handler) {
            each(splitStr(types), function(type) {
                target.removeEventListener(type, handler, !1)
            })
        }

        function hasParent(node, parent) {
            for (; node;) {
                if (node == parent) return !0;
                node = node.parentNode
            }
            return !1
        }

        function inStr(str, find) {
            return str.indexOf(find) > -1
        }

        function splitStr(str) {
            return str.trim().split(/\s+/g)
        }

        function inArray(src, find, findByKey) {
            if (src.indexOf && !findByKey) return src.indexOf(find);
            for (var i = 0; i < src.length;) {
                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) return i;
                i++
            }
            return -1
        }

        function toArray(obj) {
            return Array.prototype.slice.call(obj, 0)
        }

        function uniqueArray(src, key, sort) {
            for (var results = [], values = [], i = 0; i < src.length;) {
                var val = key ? src[i][key] : src[i];
                inArray(values, val) < 0 && results.push(src[i]), values[i] = val, i++
            }
            return sort && (results = key ? results.sort(function(a, b) {
                return a[key] > b[key]
            }) : results.sort()), results
        }

        function prefixed(obj, property) {
            for (var prefix, prop, camelProp = property[0].toUpperCase() + property.slice(1), i = 0; i < VENDOR_PREFIXES.length;) {
                if ((prop = (prefix = VENDOR_PREFIXES[i]) ? prefix + camelProp : property) in obj) return prop;
                i++
            }
            return undefined
        }
        var _uniqueId = 1;

        function getWindowForElement(element) {
            var doc = element.ownerDocument || element;
            return doc.defaultView || doc.parentWindow || window
        }
        var SUPPORT_TOUCH = "ontouchstart" in window,
            SUPPORT_POINTER_EVENTS = prefixed(window, "PointerEvent") !== undefined,
            SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            COMPUTE_INTERVAL = 25,
            INPUT_START = 1,
            INPUT_MOVE = 2,
            INPUT_END = 4,
            INPUT_CANCEL = 8,
            DIRECTION_NONE = 1,
            DIRECTION_LEFT = 2,
            DIRECTION_RIGHT = 4,
            DIRECTION_UP = 8,
            DIRECTION_DOWN = 16,
            DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT,
            DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN,
            DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
            PROPS_XY = ["x", "y"],
            PROPS_CLIENT_XY = ["clientX", "clientY"];

        function Input(manager, callback) {
            var self = this;
            this.manager = manager, this.callback = callback, this.element = manager.element, this.target = manager.options.inputTarget, this.domHandler = function(ev) {
                boolOrFn(manager.options.enable, [manager]) && self.handler(ev)
            }, this.init()
        }

        function inputHandler(manager, eventType, input) {
            var pointersLen = input.pointers.length,
                changedPointersLen = input.changedPointers.length,
                isFirst = eventType & INPUT_START && pointersLen - changedPointersLen == 0,
                isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen == 0;
            input.isFirst = !!isFirst, input.isFinal = !!isFinal, isFirst && (manager.session = {}), input.eventType = eventType,
                function(manager, input) {
                    var session = manager.session,
                        pointers = input.pointers,
                        pointersLength = pointers.length;
                    session.firstInput || (session.firstInput = simpleCloneInputData(input));
                    pointersLength > 1 && !session.firstMultiple ? session.firstMultiple = simpleCloneInputData(input) : 1 === pointersLength && (session.firstMultiple = !1);
                    var firstInput = session.firstInput,
                        firstMultiple = session.firstMultiple,
                        offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center,
                        center = input.center = getCenter(pointers);
                    input.timeStamp = now(), input.deltaTime = input.timeStamp - firstInput.timeStamp, input.angle = getAngle(offsetCenter, center), input.distance = getDistance(offsetCenter, center),
                        function(session, input) {
                            var center = input.center,
                                offset = session.offsetDelta || {},
                                prevDelta = session.prevDelta || {},
                                prevInput = session.prevInput || {};
                            input.eventType !== INPUT_START && prevInput.eventType !== INPUT_END || (prevDelta = session.prevDelta = {
                                x: prevInput.deltaX || 0,
                                y: prevInput.deltaY || 0
                            }, offset = session.offsetDelta = {
                                x: center.x,
                                y: center.y
                            });
                            input.deltaX = prevDelta.x + (center.x - offset.x), input.deltaY = prevDelta.y + (center.y - offset.y)
                        }(session, input), input.offsetDirection = getDirection(input.deltaX, input.deltaY);
                    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
                    input.overallVelocityX = overallVelocity.x, input.overallVelocityY = overallVelocity.y, input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y, input.scale = firstMultiple ? (start = firstMultiple.pointers, end = pointers, getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY)) : 1, input.rotation = firstMultiple ? function(start, end) {
                            return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY)
                        }(firstMultiple.pointers, pointers) : 0, input.maxPointers = session.prevInput ? input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers : input.pointers.length,
                        function(session, input) {
                            var velocity, velocityX, velocityY, direction, last = session.lastInterval || input,
                                deltaTime = input.timeStamp - last.timeStamp;
                            if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
                                var deltaX = input.deltaX - last.deltaX,
                                    deltaY = input.deltaY - last.deltaY,
                                    v = getVelocity(deltaTime, deltaX, deltaY);
                                velocityX = v.x, velocityY = v.y, velocity = abs(v.x) > abs(v.y) ? v.x : v.y, direction = getDirection(deltaX, deltaY), session.lastInterval = input
                            } else velocity = last.velocity, velocityX = last.velocityX, velocityY = last.velocityY, direction = last.direction;
                            input.velocity = velocity, input.velocityX = velocityX, input.velocityY = velocityY, input.direction = direction
                        }(session, input);
                    var start, end;
                    var target = manager.element;
                    hasParent(input.srcEvent.target, target) && (target = input.srcEvent.target);
                    input.target = target
                }(manager, input), manager.emit("hammer.input", input), manager.recognize(input), manager.session.prevInput = input
        }

        function simpleCloneInputData(input) {
            for (var pointers = [], i = 0; i < input.pointers.length;) pointers[i] = {
                clientX: round(input.pointers[i].clientX),
                clientY: round(input.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: now(),
                pointers: pointers,
                center: getCenter(pointers),
                deltaX: input.deltaX,
                deltaY: input.deltaY
            }
        }

        function getCenter(pointers) {
            var pointersLength = pointers.length;
            if (1 === pointersLength) return {
                x: round(pointers[0].clientX),
                y: round(pointers[0].clientY)
            };
            for (var x = 0, y = 0, i = 0; i < pointersLength;) x += pointers[i].clientX, y += pointers[i].clientY, i++;
            return {
                x: round(x / pointersLength),
                y: round(y / pointersLength)
            }
        }

        function getVelocity(deltaTime, x, y) {
            return {
                x: x / deltaTime || 0,
                y: y / deltaTime || 0
            }
        }

        function getDirection(x, y) {
            return x === y ? DIRECTION_NONE : abs(x) >= abs(y) ? x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT : y < 0 ? DIRECTION_UP : DIRECTION_DOWN
        }

        function getDistance(p1, p2, props) {
            props || (props = PROPS_XY);
            var x = p2[props[0]] - p1[props[0]],
                y = p2[props[1]] - p1[props[1]];
            return Math.sqrt(x * x + y * y)
        }

        function getAngle(p1, p2, props) {
            props || (props = PROPS_XY);
            var x = p2[props[0]] - p1[props[0]],
                y = p2[props[1]] - p1[props[1]];
            return 180 * Math.atan2(y, x) / Math.PI
        }
        Input.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && addEventListeners(this.element, this.evEl, this.domHandler), this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler), this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler), this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler), this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler)
            }
        };
        var MOUSE_INPUT_MAP = {
                mousedown: INPUT_START,
                mousemove: INPUT_MOVE,
                mouseup: INPUT_END
            },
            MOUSE_ELEMENT_EVENTS = "mousedown",
            MOUSE_WINDOW_EVENTS = "mousemove mouseup";

        function MouseInput() {
            this.evEl = MOUSE_ELEMENT_EVENTS, this.evWin = MOUSE_WINDOW_EVENTS, this.pressed = !1, Input.apply(this, arguments)
        }
        inherit(MouseInput, Input, {
            handler: function(ev) {
                var eventType = MOUSE_INPUT_MAP[ev.type];
                eventType & INPUT_START && 0 === ev.button && (this.pressed = !0), eventType & INPUT_MOVE && 1 !== ev.which && (eventType = INPUT_END), this.pressed && (eventType & INPUT_END && (this.pressed = !1), this.callback(this.manager, eventType, {
                    pointers: [ev],
                    changedPointers: [ev],
                    pointerType: "mouse",
                    srcEvent: ev
                }))
            }
        });
        var POINTER_INPUT_MAP = {
                pointerdown: INPUT_START,
                pointermove: INPUT_MOVE,
                pointerup: INPUT_END,
                pointercancel: INPUT_CANCEL,
                pointerout: INPUT_CANCEL
            },
            IE10_POINTER_TYPE_ENUM = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            POINTER_ELEMENT_EVENTS = "pointerdown",
            POINTER_WINDOW_EVENTS = "pointermove pointerup pointercancel";

        function PointerEventInput() {
            this.evEl = POINTER_ELEMENT_EVENTS, this.evWin = POINTER_WINDOW_EVENTS, Input.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        window.MSPointerEvent && !window.PointerEvent && (POINTER_ELEMENT_EVENTS = "MSPointerDown", POINTER_WINDOW_EVENTS = "MSPointerMove MSPointerUp MSPointerCancel"), inherit(PointerEventInput, Input, {
            handler: function(ev) {
                var store = this.store,
                    removePointer = !1,
                    eventTypeNormalized = ev.type.toLowerCase().replace("ms", ""),
                    eventType = POINTER_INPUT_MAP[eventTypeNormalized],
                    pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType,
                    isTouch = "touch" == pointerType,
                    storeIndex = inArray(store, ev.pointerId, "pointerId");
                eventType & INPUT_START && (0 === ev.button || isTouch) ? storeIndex < 0 && (store.push(ev), storeIndex = store.length - 1) : eventType & (INPUT_END | INPUT_CANCEL) && (removePointer = !0), storeIndex < 0 || (store[storeIndex] = ev, this.callback(this.manager, eventType, {
                    pointers: store,
                    changedPointers: [ev],
                    pointerType: pointerType,
                    srcEvent: ev
                }), removePointer && store.splice(storeIndex, 1))
            }
        });
        var SINGLE_TOUCH_INPUT_MAP = {
                touchstart: INPUT_START,
                touchmove: INPUT_MOVE,
                touchend: INPUT_END,
                touchcancel: INPUT_CANCEL
            },
            SINGLE_TOUCH_TARGET_EVENTS = "touchstart",
            SINGLE_TOUCH_WINDOW_EVENTS = "touchstart touchmove touchend touchcancel";

        function SingleTouchInput() {
            this.evTarget = SINGLE_TOUCH_TARGET_EVENTS, this.evWin = SINGLE_TOUCH_WINDOW_EVENTS, this.started = !1, Input.apply(this, arguments)
        }
        inherit(SingleTouchInput, Input, {
            handler: function(ev) {
                var type = SINGLE_TOUCH_INPUT_MAP[ev.type];
                if (type === INPUT_START && (this.started = !0), this.started) {
                    var touches = function(ev, type) {
                        var all = toArray(ev.touches),
                            changed = toArray(ev.changedTouches);
                        type & (INPUT_END | INPUT_CANCEL) && (all = uniqueArray(all.concat(changed), "identifier", !0));
                        return [all, changed]
                    }.call(this, ev, type);
                    type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length == 0 && (this.started = !1), this.callback(this.manager, type, {
                        pointers: touches[0],
                        changedPointers: touches[1],
                        pointerType: "touch",
                        srcEvent: ev
                    })
                }
            }
        });
        var TOUCH_INPUT_MAP = {
                touchstart: INPUT_START,
                touchmove: INPUT_MOVE,
                touchend: INPUT_END,
                touchcancel: INPUT_CANCEL
            },
            TOUCH_TARGET_EVENTS = "touchstart touchmove touchend touchcancel";

        function TouchInput() {
            this.evTarget = TOUCH_TARGET_EVENTS, this.targetIds = {}, Input.apply(this, arguments)
        }
        inherit(TouchInput, Input, {
            handler: function(ev) {
                var type = TOUCH_INPUT_MAP[ev.type],
                    touches = function(ev, type) {
                        var allTouches = toArray(ev.touches),
                            targetIds = this.targetIds;
                        if (type & (INPUT_START | INPUT_MOVE) && 1 === allTouches.length) return targetIds[allTouches[0].identifier] = !0, [allTouches, allTouches];
                        var i, targetTouches, changedTouches = toArray(ev.changedTouches),
                            changedTargetTouches = [],
                            target = this.target;
                        if (targetTouches = allTouches.filter(function(touch) {
                                return hasParent(touch.target, target)
                            }), type === INPUT_START)
                            for (i = 0; i < targetTouches.length;) targetIds[targetTouches[i].identifier] = !0, i++;
                        i = 0;
                        for (; i < changedTouches.length;) targetIds[changedTouches[i].identifier] && changedTargetTouches.push(changedTouches[i]), type & (INPUT_END | INPUT_CANCEL) && delete targetIds[changedTouches[i].identifier], i++;
                        if (!changedTargetTouches.length) return;
                        return [uniqueArray(targetTouches.concat(changedTargetTouches), "identifier", !0), changedTargetTouches]
                    }.call(this, ev, type);
                touches && this.callback(this.manager, type, {
                    pointers: touches[0],
                    changedPointers: touches[1],
                    pointerType: "touch",
                    srcEvent: ev
                })
            }
        });
        var DEDUP_TIMEOUT = 2500,
            DEDUP_DISTANCE = 25;

        function TouchMouseInput() {
            Input.apply(this, arguments);
            var handler = bindFn(this.handler, this);
            this.touch = new TouchInput(this.manager, handler), this.mouse = new MouseInput(this.manager, handler), this.primaryTouch = null, this.lastTouches = []
        }

        function setLastTouch(eventData) {
            var touch = eventData.changedPointers[0];
            if (touch.identifier === this.primaryTouch) {
                var lastTouch = {
                    x: touch.clientX,
                    y: touch.clientY
                };
                this.lastTouches.push(lastTouch);
                var lts = this.lastTouches;
                setTimeout(function() {
                    var i = lts.indexOf(lastTouch);
                    i > -1 && lts.splice(i, 1)
                }, DEDUP_TIMEOUT)
            }
        }
        inherit(TouchMouseInput, Input, {
            handler: function(manager, inputEvent, inputData) {
                var isTouch = "touch" == inputData.pointerType,
                    isMouse = "mouse" == inputData.pointerType;
                if (!(isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents)) {
                    if (isTouch)(function(eventType, eventData) {
                        eventType & INPUT_START ? (this.primaryTouch = eventData.changedPointers[0].identifier, setLastTouch.call(this, eventData)) : eventType & (INPUT_END | INPUT_CANCEL) && setLastTouch.call(this, eventData)
                    }).call(this, inputEvent, inputData);
                    else if (isMouse && function(eventData) {
                            for (var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                                var t = this.lastTouches[i],
                                    dx = Math.abs(x - t.x),
                                    dy = Math.abs(y - t.y);
                                if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) return !0
                            }
                            return !1
                        }.call(this, inputData)) return;
                    this.callback(manager, inputEvent, inputData)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, "touchAction"),
            NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined,
            TOUCH_ACTION_AUTO = "auto",
            TOUCH_ACTION_MANIPULATION = "manipulation",
            TOUCH_ACTION_NONE = "none",
            TOUCH_ACTION_PAN_X = "pan-x",
            TOUCH_ACTION_PAN_Y = "pan-y",
            TOUCH_ACTION_MAP = function() {
                if (!NATIVE_TOUCH_ACTION) return !1;
                var touchMap = {},
                    cssSupports = window.CSS && window.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(val) {
                    touchMap[val] = !cssSupports || window.CSS.supports("touch-action", val)
                }), touchMap
            }();

        function TouchAction(manager, value) {
            this.manager = manager, this.set(value)
        }
        TouchAction.prototype = {
            set: function(value) {
                "compute" == value && (value = this.compute()), NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value] && (this.manager.element.style[PREFIXED_TOUCH_ACTION] = value), this.actions = value.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var actions = [];
                return each(this.manager.recognizers, function(recognizer) {
                        boolOrFn(recognizer.options.enable, [recognizer]) && (actions = actions.concat(recognizer.getTouchAction()))
                    }),
                    function(actions) {
                        if (inStr(actions, TOUCH_ACTION_NONE)) return TOUCH_ACTION_NONE;
                        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X),
                            hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
                        if (hasPanX && hasPanY) return TOUCH_ACTION_NONE;
                        if (hasPanX || hasPanY) return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
                        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) return TOUCH_ACTION_MANIPULATION;
                        return TOUCH_ACTION_AUTO
                    }(actions.join(" "))
            },
            preventDefaults: function(input) {
                var srcEvent = input.srcEvent,
                    direction = input.offsetDirection;
                if (this.manager.session.prevented) srcEvent.preventDefault();
                else {
                    var actions = this.actions,
                        hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE],
                        hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y],
                        hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];
                    if (hasNone) {
                        var isTapPointer = 1 === input.pointers.length,
                            isTapMovement = input.distance < 2,
                            isTapTouchTime = input.deltaTime < 250;
                        if (isTapPointer && isTapMovement && isTapTouchTime) return
                    }
                    if (!hasPanX || !hasPanY) return hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL ? this.preventSrc(srcEvent) : void 0
                }
            },
            preventSrc: function(srcEvent) {
                this.manager.session.prevented = !0, srcEvent.preventDefault()
            }
        };
        var STATE_POSSIBLE = 1,
            STATE_BEGAN = 2,
            STATE_CHANGED = 4,
            STATE_ENDED = 8,
            STATE_RECOGNIZED = STATE_ENDED,
            STATE_CANCELLED = 16;

        function Recognizer(options) {
            this.options = assign({}, this.defaults, options || {}), this.id = _uniqueId++, this.manager = null, this.options.enable = ifUndefined(this.options.enable, !0), this.state = STATE_POSSIBLE, this.simultaneous = {}, this.requireFail = []
        }

        function stateStr(state) {
            return state & STATE_CANCELLED ? "cancel" : state & STATE_ENDED ? "end" : state & STATE_CHANGED ? "move" : state & STATE_BEGAN ? "start" : ""
        }

        function directionStr(direction) {
            return direction == DIRECTION_DOWN ? "down" : direction == DIRECTION_UP ? "up" : direction == DIRECTION_LEFT ? "left" : direction == DIRECTION_RIGHT ? "right" : ""
        }

        function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
            var manager = recognizer.manager;
            return manager ? manager.get(otherRecognizer) : otherRecognizer
        }

        function AttrRecognizer() {
            Recognizer.apply(this, arguments)
        }

        function PanRecognizer() {
            AttrRecognizer.apply(this, arguments), this.pX = null, this.pY = null
        }

        function PinchRecognizer() {
            AttrRecognizer.apply(this, arguments)
        }

        function PressRecognizer() {
            Recognizer.apply(this, arguments), this._timer = null, this._input = null
        }

        function RotateRecognizer() {
            AttrRecognizer.apply(this, arguments)
        }

        function SwipeRecognizer() {
            AttrRecognizer.apply(this, arguments)
        }

        function TapRecognizer() {
            Recognizer.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Hammer(element, options) {
            return (options = options || {}).recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset), new Manager(element, options)
        }
        Recognizer.prototype = {
            defaults: {},
            set: function(options) {
                return assign(this.options, options), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(otherRecognizer) {
                if (invokeArrayArg(otherRecognizer, "recognizeWith", this)) return this;
                var simultaneous = this.simultaneous;
                return simultaneous[(otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this)).id] || (simultaneous[otherRecognizer.id] = otherRecognizer, otherRecognizer.recognizeWith(this)), this
            },
            dropRecognizeWith: function(otherRecognizer) {
                return invokeArrayArg(otherRecognizer, "dropRecognizeWith", this) ? this : (otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this), delete this.simultaneous[otherRecognizer.id], this)
            },
            requireFailure: function(otherRecognizer) {
                if (invokeArrayArg(otherRecognizer, "requireFailure", this)) return this;
                var requireFail = this.requireFail;
                return -1 === inArray(requireFail, otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this)) && (requireFail.push(otherRecognizer), otherRecognizer.requireFailure(this)), this
            },
            dropRequireFailure: function(otherRecognizer) {
                if (invokeArrayArg(otherRecognizer, "dropRequireFailure", this)) return this;
                otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
                var index = inArray(this.requireFail, otherRecognizer);
                return index > -1 && this.requireFail.splice(index, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(otherRecognizer) {
                return !!this.simultaneous[otherRecognizer.id]
            },
            emit: function(input) {
                var self = this,
                    state = this.state;

                function emit(event) {
                    self.manager.emit(event, input)
                }
                state < STATE_ENDED && emit(self.options.event + stateStr(state)), emit(self.options.event), input.additionalEvent && emit(input.additionalEvent), state >= STATE_ENDED && emit(self.options.event + stateStr(state))
            },
            tryEmit: function(input) {
                if (this.canEmit()) return this.emit(input);
                this.state = 32
            },
            canEmit: function() {
                for (var i = 0; i < this.requireFail.length;) {
                    if (!(this.requireFail[i].state & (32 | STATE_POSSIBLE))) return !1;
                    i++
                }
                return !0
            },
            recognize: function(inputData) {
                var inputDataClone = assign({}, inputData);
                if (!boolOrFn(this.options.enable, [this, inputDataClone])) return this.reset(), void(this.state = 32);
                this.state & (STATE_RECOGNIZED | STATE_CANCELLED | 32) && (this.state = STATE_POSSIBLE), this.state = this.process(inputDataClone), this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED) && this.tryEmit(inputDataClone)
            },
            process: function(inputData) {},
            getTouchAction: function() {},
            reset: function() {}
        }, inherit(AttrRecognizer, Recognizer, {
            defaults: {
                pointers: 1
            },
            attrTest: function(input) {
                var optionPointers = this.options.pointers;
                return 0 === optionPointers || input.pointers.length === optionPointers
            },
            process: function(input) {
                var state = this.state,
                    eventType = input.eventType,
                    isRecognized = state & (STATE_BEGAN | STATE_CHANGED),
                    isValid = this.attrTest(input);
                return isRecognized && (eventType & INPUT_CANCEL || !isValid) ? state | STATE_CANCELLED : isRecognized || isValid ? eventType & INPUT_END ? state | STATE_ENDED : state & STATE_BEGAN ? state | STATE_CHANGED : STATE_BEGAN : 32
            }
        }), inherit(PanRecognizer, AttrRecognizer, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: DIRECTION_ALL
            },
            getTouchAction: function() {
                var direction = this.options.direction,
                    actions = [];
                return direction & DIRECTION_HORIZONTAL && actions.push(TOUCH_ACTION_PAN_Y), direction & DIRECTION_VERTICAL && actions.push(TOUCH_ACTION_PAN_X), actions
            },
            directionTest: function(input) {
                var options = this.options,
                    hasMoved = !0,
                    distance = input.distance,
                    direction = input.direction,
                    x = input.deltaX,
                    y = input.deltaY;
                return direction & options.direction || (options.direction & DIRECTION_HORIZONTAL ? (direction = 0 === x ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT, hasMoved = x != this.pX, distance = Math.abs(input.deltaX)) : (direction = 0 === y ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN, hasMoved = y != this.pY, distance = Math.abs(input.deltaY))), input.direction = direction, hasMoved && distance > options.threshold && direction & options.direction
            },
            attrTest: function(input) {
                return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input))
            },
            emit: function(input) {
                this.pX = input.deltaX, this.pY = input.deltaY;
                var direction = directionStr(input.direction);
                direction && (input.additionalEvent = this.options.event + direction), this._super.emit.call(this, input)
            }
        }), inherit(PinchRecognizer, AttrRecognizer, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [TOUCH_ACTION_NONE]
            },
            attrTest: function(input) {
                return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN)
            },
            emit: function(input) {
                if (1 !== input.scale) {
                    var inOut = input.scale < 1 ? "in" : "out";
                    input.additionalEvent = this.options.event + inOut
                }
                this._super.emit.call(this, input)
            }
        }), inherit(PressRecognizer, Recognizer, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [TOUCH_ACTION_AUTO]
            },
            process: function(input) {
                var options = this.options,
                    validPointers = input.pointers.length === options.pointers,
                    validMovement = input.distance < options.threshold,
                    validTime = input.deltaTime > options.time;
                if (this._input = input, !validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) this.reset();
                else if (input.eventType & INPUT_START) this.reset(), this._timer = setTimeoutContext(function() {
                    this.state = STATE_RECOGNIZED, this.tryEmit()
                }, options.time, this);
                else if (input.eventType & INPUT_END) return STATE_RECOGNIZED;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(input) {
                this.state === STATE_RECOGNIZED && (input && input.eventType & INPUT_END ? this.manager.emit(this.options.event + "up", input) : (this._input.timeStamp = now(), this.manager.emit(this.options.event, this._input)))
            }
        }), inherit(RotateRecognizer, AttrRecognizer, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [TOUCH_ACTION_NONE]
            },
            attrTest: function(input) {
                return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN)
            }
        }), inherit(SwipeRecognizer, AttrRecognizer, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
                pointers: 1
            },
            getTouchAction: function() {
                return PanRecognizer.prototype.getTouchAction.call(this)
            },
            attrTest: function(input) {
                var velocity, direction = this.options.direction;
                return direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL) ? velocity = input.overallVelocity : direction & DIRECTION_HORIZONTAL ? velocity = input.overallVelocityX : direction & DIRECTION_VERTICAL && (velocity = input.overallVelocityY), this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END
            },
            emit: function(input) {
                var direction = directionStr(input.offsetDirection);
                direction && this.manager.emit(this.options.event + direction, input), this.manager.emit(this.options.event, input)
            }
        }), inherit(TapRecognizer, Recognizer, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [TOUCH_ACTION_MANIPULATION]
            },
            process: function(input) {
                var options = this.options,
                    validPointers = input.pointers.length === options.pointers,
                    validMovement = input.distance < options.threshold,
                    validTouchTime = input.deltaTime < options.time;
                if (this.reset(), input.eventType & INPUT_START && 0 === this.count) return this.failTimeout();
                if (validMovement && validTouchTime && validPointers) {
                    if (input.eventType != INPUT_END) return this.failTimeout();
                    var validInterval = !this.pTime || input.timeStamp - this.pTime < options.interval,
                        validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;
                    if (this.pTime = input.timeStamp, this.pCenter = input.center, validMultiTap && validInterval ? this.count += 1 : this.count = 1, this._input = input, 0 === this.count % options.taps) return this.hasRequireFailures() ? (this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED, this.tryEmit()
                    }, options.interval, this), STATE_BEGAN) : STATE_RECOGNIZED
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = setTimeoutContext(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == STATE_RECOGNIZED && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), Hammer.VERSION = "2.0.7", Hammer.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [RotateRecognizer, {
                    enable: !1
                }],
                [PinchRecognizer, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [SwipeRecognizer, {
                    direction: DIRECTION_HORIZONTAL
                }],
                [PanRecognizer, {
                        direction: DIRECTION_HORIZONTAL
                    },
                    ["swipe"]
                ],
                [TapRecognizer],
                [TapRecognizer, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [PressRecognizer]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };

        function Manager(element, options) {
            var manager;
            this.options = assign({}, Hammer.defaults, options || {}), this.options.inputTarget = this.options.inputTarget || element, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = element, this.input = new((manager = this).options.inputClass || (SUPPORT_POINTER_EVENTS ? PointerEventInput : SUPPORT_ONLY_TOUCH ? TouchInput : SUPPORT_TOUCH ? TouchMouseInput : MouseInput))(manager, inputHandler), this.touchAction = new TouchAction(this, this.options.touchAction), toggleCssProps(this, !0), each(this.options.recognizers, function(item) {
                var recognizer = this.add(new item[0](item[1]));
                item[2] && recognizer.recognizeWith(item[2]), item[3] && recognizer.requireFailure(item[3])
            }, this)
        }

        function toggleCssProps(manager, add) {
            var prop, element = manager.element;
            element.style && (each(manager.options.cssProps, function(value, name) {
                prop = prefixed(element.style, name), add ? (manager.oldCssProps[prop] = element.style[prop], element.style[prop] = value) : element.style[prop] = manager.oldCssProps[prop] || ""
            }), add || (manager.oldCssProps = {}))
        }
        Manager.prototype = {
            set: function(options) {
                return assign(this.options, options), options.touchAction && this.touchAction.update(), options.inputTarget && (this.input.destroy(), this.input.target = options.inputTarget, this.input.init()), this
            },
            stop: function(force) {
                this.session.stopped = force ? 2 : 1
            },
            recognize: function(inputData) {
                var session = this.session;
                if (!session.stopped) {
                    var recognizer;
                    this.touchAction.preventDefaults(inputData);
                    var recognizers = this.recognizers,
                        curRecognizer = session.curRecognizer;
                    (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) && (curRecognizer = session.curRecognizer = null);
                    for (var i = 0; i < recognizers.length;) recognizer = recognizers[i], 2 === session.stopped || curRecognizer && recognizer != curRecognizer && !recognizer.canRecognizeWith(curRecognizer) ? recognizer.reset() : recognizer.recognize(inputData), !curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED) && (curRecognizer = session.curRecognizer = recognizer), i++
                }
            },
            get: function(recognizer) {
                if (recognizer instanceof Recognizer) return recognizer;
                for (var recognizers = this.recognizers, i = 0; i < recognizers.length; i++)
                    if (recognizers[i].options.event == recognizer) return recognizers[i];
                return null
            },
            add: function(recognizer) {
                if (invokeArrayArg(recognizer, "add", this)) return this;
                var existing = this.get(recognizer.options.event);
                return existing && this.remove(existing), this.recognizers.push(recognizer), recognizer.manager = this, this.touchAction.update(), recognizer
            },
            remove: function(recognizer) {
                if (invokeArrayArg(recognizer, "remove", this)) return this;
                if (recognizer = this.get(recognizer)) {
                    var recognizers = this.recognizers,
                        index = inArray(recognizers, recognizer); - 1 !== index && (recognizers.splice(index, 1), this.touchAction.update())
                }
                return this
            },
            on: function(events, handler) {
                if (events !== undefined && handler !== undefined) {
                    var handlers = this.handlers;
                    return each(splitStr(events), function(event) {
                        handlers[event] = handlers[event] || [], handlers[event].push(handler)
                    }), this
                }
            },
            off: function(events, handler) {
                if (events !== undefined) {
                    var handlers = this.handlers;
                    return each(splitStr(events), function(event) {
                        handler ? handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1) : delete handlers[event]
                    }), this
                }
            },
            emit: function(event, data) {
                this.options.domEvents && function(event, data) {
                    var gestureEvent = document.createEvent("Event");
                    gestureEvent.initEvent(event, !0, !0), gestureEvent.gesture = data, data.target.dispatchEvent(gestureEvent)
                }(event, data);
                var handlers = this.handlers[event] && this.handlers[event].slice();
                if (handlers && handlers.length) {
                    data.type = event, data.preventDefault = function() {
                        data.srcEvent.preventDefault()
                    };
                    for (var i = 0; i < handlers.length;) handlers[i](data), i++
                }
            },
            destroy: function() {
                this.element && toggleCssProps(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, assign(Hammer, {
            INPUT_START: INPUT_START,
            INPUT_MOVE: INPUT_MOVE,
            INPUT_END: INPUT_END,
            INPUT_CANCEL: INPUT_CANCEL,
            STATE_POSSIBLE: STATE_POSSIBLE,
            STATE_BEGAN: STATE_BEGAN,
            STATE_CHANGED: STATE_CHANGED,
            STATE_ENDED: STATE_ENDED,
            STATE_RECOGNIZED: STATE_RECOGNIZED,
            STATE_CANCELLED: STATE_CANCELLED,
            STATE_FAILED: 32,
            DIRECTION_NONE: DIRECTION_NONE,
            DIRECTION_LEFT: DIRECTION_LEFT,
            DIRECTION_RIGHT: DIRECTION_RIGHT,
            DIRECTION_UP: DIRECTION_UP,
            DIRECTION_DOWN: DIRECTION_DOWN,
            DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
            DIRECTION_VERTICAL: DIRECTION_VERTICAL,
            DIRECTION_ALL: DIRECTION_ALL,
            Manager: Manager,
            Input: Input,
            TouchAction: TouchAction,
            TouchInput: TouchInput,
            MouseInput: MouseInput,
            PointerEventInput: PointerEventInput,
            TouchMouseInput: TouchMouseInput,
            SingleTouchInput: SingleTouchInput,
            Recognizer: Recognizer,
            AttrRecognizer: AttrRecognizer,
            Tap: TapRecognizer,
            Pan: PanRecognizer,
            Swipe: SwipeRecognizer,
            Pinch: PinchRecognizer,
            Rotate: RotateRecognizer,
            Press: PressRecognizer,
            on: addEventListeners,
            off: removeEventListeners,
            each: each,
            merge: merge,
            extend: extend,
            assign: assign,
            inherit: inherit,
            bindFn: bindFn,
            prefixed: prefixed
        }), (void 0 !== window ? window : "undefined" != typeof self ? self : {}).Hammer = Hammer, (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return Hammer
        }.call(exports, __webpack_require__, exports, module)) === undefined || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }(window, document)
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        api = {},
        SELECTORS_genericMeasureHook = ".js-height-measure-hook",
        SELECTORS_headerMeasureHook = ".js-header-height-measure-hook";

    function getHeight(elements) {
        var result = 0;
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(elements, function(element) {
            result += element.getBoundingClientRect().height
        }), Math.floor(result)
    }
    api.getHeightOfComponentsAboveHeader = function() {
        return getHeight(document.querySelectorAll(SELECTORS_genericMeasureHook))
    }, api.getHeightOfHeader = function() {
        return getHeight(document.querySelectorAll(SELECTORS_headerMeasureHook))
    }, __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery__ = __webpack_require__(5),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mediaQuery__),
        __WEBPACK_IMPORTED_MODULE_3_guxfoe_scroll_global_ux_scroll__ = __webpack_require__(25),
        __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_5_fordjs__ = __webpack_require__(4),
        __WEBPACK_IMPORTED_MODULE_5_fordjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fordjs__),
        $body = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("body"),
        $globalUX = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#global-ux"),
        touchOrClick = null !== document.ontouchstart ? "click.toggleTooltip" : "touchstart",
        tooltipPrefix = "gux-tooltip",
        tooltipClass = tooltipPrefix + "-overlay";

    function trackRefineToolTip(element) {
        var $promotionsShowroom = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(element).parents(".promotions-showroom-column"),
            $showroom = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(element).parents(".showroom");
        if ($promotionsShowroom.length > 0) {
            var filterCategory = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(element).parent().contents().get(0).nodeValue;
            __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__.a.getPromotionsShowroomEvents().trackRefineToolTip(filterCategory)
        }
        $showroom.length > 0 && __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__.a.getShowroomEvents().trackRefineToolTip(element)
    }

    function trackDealerReviewsToolTip(element) {
        var contentSubType = element.data("contentSubType");
        "mini-dealer-locator" === element.data("locator") ? __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__.a.getMiniDealerLocatorEvents().trackDealerReviewsToolTip(contentSubType) : element.parents(".locator-dealer-results").length ? __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackDealerReviewsToolTip("list") : element.parents(".dealer-details").length ? __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackDealerReviewsToolTip("details") : element.parents(".map-container").length && __WEBPACK_IMPORTED_MODULE_4_analytics_analyticsEventLayer__.a.getDealerLocatorEvents().trackDealerReviewsToolTip("map")
    }

    function showTooltip(element, title, text, className) {
        var $tooltip, tooltipId = tooltipPrefix + "-" + Math.random().toString(16).slice(2),
            tooltipTitle = title || "",
            tooltipText = text || "",
            tooltipTpl = "",
            toolTipConfig = element.data().tooltipConfig,
            scrollTopPosition = 0,
            $targetContainer = toolTipConfig ? __WEBPACK_IMPORTED_MODULE_1_jquery___default()(toolTipConfig.containerInnerSelector) : $globalUX,
            customContent = !(!toolTipConfig || !toolTipConfig.customContent) && toolTipConfig.customContent,
            $scrollableElem = toolTipConfig && toolTipConfig.scrollWrapperSelector ? __WEBPACK_IMPORTED_MODULE_1_jquery___default()(toolTipConfig.scrollWrapperSelector) : $body,
            bodyScrollPrevented = !1;
        toolTipConfig && (toolTipConfig.$scrollableElem = $scrollableElem), __WEBPACK_IMPORTED_MODULE_1_jquery___default()("." + tooltipClass).each(function() {
            closeTooltip(this)
        }), tooltipTpl += '<div id="' + tooltipId + '" class="' + tooltipClass + '" tabindex="0">', customContent ? tooltipTpl += tooltipText : (tooltipTitle && (tooltipTpl += '<h5 class="' + tooltipClass + '-title">' + tooltipTitle + "</h5>"), tooltipTpl += '<span class="' + tooltipClass + '-text">' + tooltipText + "</span>"), tooltipTpl += '<a class="hidden-element" tabindex="0"></a>', tooltipTpl += '<a class="close-icon" tabindex="0"></a></div>', 0 === __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + tooltipId).length && (scrollTopPosition = $scrollableElem.scrollTop(), bodyScrollPrevented = __WEBPACK_IMPORTED_MODULE_3_guxfoe_scroll_global_ux_scroll__.a.preventScrollBody(), $targetContainer.append(tooltipTpl), $tooltip = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + tooltipId), applyTooltipStyles(tooltipId, element, $targetContainer), checkTooltipPosition(tooltipId, $targetContainer), function(tooltipId, className) {
            void 0 === className && "" === className || __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + tooltipId).addClass(className)
        }(tooltipId, className), function(tooltip, scrollTopPosition, clickedElement) {
            tooltip.find("a.close-icon").on(touchOrClick, function(e) {
                e.stopPropagation(), e.preventDefault(), closeTooltip(tooltip, scrollTopPosition)
            }), tooltip.keyup(function(e) {
                27 !== e.which && 13 !== e.which || (e.stopPropagation(), e.preventDefault(), closeTooltip(tooltip, scrollTopPosition), clickedElement.focus())
            }), __WEBPACK_IMPORTED_MODULE_1_jquery___default()(document).on("click.toggleTooltip", function(e) {
                e.stopPropagation(), tooltip.is(e.target) || 0 !== tooltip.has(e.target).length || closeTooltip(tooltip, scrollTopPosition)
            })
        }($tooltip, scrollTopPosition, element), $tooltip.data("body-scroll-prevented", bodyScrollPrevented), $tooltip.on("focus", function(e) {
            e.preventDefault()
        }), $tooltip.find(".hidden-element").focus(), __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.subscribe("mediaQuery:change", function() {
            ! function(tooltipId, clickedElement, container) {
                __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + tooltipId).length > 0 && ("mobile" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() && __WEBPACK_IMPORTED_MODULE_3_guxfoe_scroll_global_ux_scroll__.a.preventScrollBody(), "mobile" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getPreviousMediaType() && __WEBPACK_IMPORTED_MODULE_3_guxfoe_scroll_global_ux_scroll__.a.allowScrollBody(0), applyTooltipStyles(tooltipId, clickedElement, container), "mobile" !== __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() && checkTooltipPosition(tooltipId))
            }(tooltipId, element, $targetContainer)
        }), __WEBPACK_IMPORTED_MODULE_1_jquery___default()(window).on("resize.tooltip", function() {
            ! function(tooltipId, clickedElement, container) {
                "mobile" !== __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() && (applyTooltipStyles(tooltipId, clickedElement, container), checkTooltipPosition(tooltipId))
            }(tooltipId, element, $targetContainer)
        }), __WEBPACK_IMPORTED_MODULE_1_jquery___default.a.publish("toolTip:show", element)), toolTipConfig && (__WEBPACK_IMPORTED_MODULE_1_jquery___default()(toolTipConfig.containerInnerSelector).addClass(toolTipConfig.tooltipOpenClass), $tooltip.data("tooltipConfig", toolTipConfig))
    }

    function applyTooltipStyles(tooltipId, clickedElement, container) {
        var $container, child, result, $tooltip = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + tooltipId),
            linkPosY = 0,
            linkPosX = 0,
            linkWidth = 0,
            linkHeight = 0,
            tooltipHeight = $tooltip.outerHeight(),
            zIndex = parseInt($tooltip.css("z-index"), 10),
            clickedElementParent = (result = !1, (child = clickedElement) && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach([".main-nav", ".build-price-header"], function(value) {
                child.parents(value).length > 0 && (result = child.parents(value))
            }), result);
        clickedElementParent && (zIndex = parseInt(clickedElementParent.css("z-index"), 10) + 1), clickedElement && (linkWidth = clickedElement.outerWidth(), linkHeight = clickedElement.outerHeight()), $container = void 0 === container ? $globalUX : container, "mobile" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() ? $tooltip.css({
            top: "0",
            right: "0",
            bottom: "0",
            left: "0"
        }) : ("global-ux" === $container.attr("id") ? (linkPosX = clickedElement ? clickedElement.offset().left + linkWidth : 0, linkPosY = clickedElement ? clickedElement.offset().top + linkHeight : 0) : (linkPosX = clickedElement ? clickedElement.position().left + linkWidth : 0, linkPosY = clickedElement ? clickedElement.position().top + linkHeight : 0), linkPosY = function(linkPosY, tooltipHeight) {
            var winHeight = window.innerHeight,
                winScrollTop = window.pageYOffset || 0;
            return linkPosY + tooltipHeight <= winHeight + winScrollTop ? linkPosY : 0 === winScrollTop ? 1 : winScrollTop
        }(linkPosY, tooltipHeight), $tooltip.css({
            position: linkPosX && linkPosY ? "absolute" : "fixed",
            top: linkPosY || "50%",
            left: linkPosX || "50%",
            right: "auto",
            bottom: "auto",
            "z-index": zIndex,
            "margin-top": linkPosX && linkPosY ? "" : -$tooltip.outerHeight() / 2,
            "margin-left": linkPosX && linkPosY ? "" : -$tooltip.outerWidth() / 2
        }))
    }

    function checkTooltipPosition(tooltipId, wrapper) {
        var $wrapper, $tooltip = __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#" + tooltipId),
            tooltipLeftEdge = Math.floor($tooltip.offset().left),
            tooltipRightEdge = Math.floor($tooltip.offset().left + $tooltip.outerWidth());
        $wrapper = void 0 === wrapper ? $globalUX : wrapper, tooltipRightEdge > Math.floor(2 * $wrapper.offset().left + $wrapper.outerWidth()) && $tooltip.css({
            left: "auto",
            right: "5px"
        }), tooltipLeftEdge < 0 && $tooltip.css({
            left: "5px",
            right: "auto"
        })
    }

    function closeTooltip(tooltip, scrollTopPosition) {
        var $tooltip = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tooltip),
            bodyScrollPrevented = $tooltip.data("body-scroll-prevented"),
            tooltipData = $tooltip.data().tooltipConfig;
        tooltipData && __WEBPACK_IMPORTED_MODULE_1_jquery___default()(tooltipData.containerInnerSelector).removeClass(tooltipData.tooltipOpenClass), $tooltip.remove(), __WEBPACK_IMPORTED_MODULE_1_jquery___default()(window).off("resize.tooltip"), __WEBPACK_IMPORTED_MODULE_1_jquery___default()(document).off("click.toggleTooltip"), bodyScrollPrevented && __WEBPACK_IMPORTED_MODULE_3_guxfoe_scroll_global_ux_scroll__.a.allowScrollBody(scrollTopPosition), tooltipData && tooltipData.$scrollableElem && "mobile" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() && tooltipData.$scrollableElem.scrollTop(scrollTopPosition)
    }

    function initialize(element) {
        var $tooltip = __WEBPACK_IMPORTED_MODULE_1_jquery___default()(element),
            $className = $tooltip.attr("data-gux-tooltip-class"),
            $title = $tooltip.attr("data-gux-tooltip-title"),
            $text = $tooltip.attr("data-gux-tooltip-text");
        $body = $body.length ? $body : __WEBPACK_IMPORTED_MODULE_1_jquery___default()("body"), $globalUX = $globalUX.length ? $globalUX : __WEBPACK_IMPORTED_MODULE_1_jquery___default()("#global-ux"), $tooltip.off("click.toggleTooltip"),
            function(element, title, text, className) {
                var $link = element;
                $link.on(touchOrClick, function(e) {
                    e.stopPropagation(), e.preventDefault(), showTooltip(element, title, text, className), trackRefineToolTip(element), trackDealerReviewsToolTip(element)
                }), $link.on("keydown", function(e) {
                    13 === e.which && (e.stopPropagation(), showTooltip($link, title, text), trackRefineToolTip(element), trackDealerReviewsToolTip(element))
                })
            }($tooltip, $title, $text, $className)
    }
    module = {
        name: "guxTooltip",
        selector: ".gux-tooltip",
        init: initialize,
        showTooltip: showTooltip,
        closeTooltip: closeTooltip,
        applyTooltipStyles: applyTooltipStyles,
        initOne: initialize
    }, __WEBPACK_IMPORTED_MODULE_5_fordjs___default.a.registerComponent(module), __webpack_exports__.default = module
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        mediaQueries = (__webpack_require__(32), {
            xlarge: window.matchMedia("(min-width: 1200px)"),
            desktop: window.matchMedia("(min-width: 992px) and (max-width: 1199px)"),
            tablet: window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
            mobile: window.matchMedia("(max-width: 767px)"),
            small: window.matchMedia("(max-width: 480px)"),
            landscape: window.matchMedia("(orientation: landscape)"),
            portrait: window.matchMedia("(orientation: portrait)"),
            getMediaType: getMediaType,
            getPreviousMediaType: function() {
                return prevActiveMediaType
            },
            getOrientation: getOrientation,
            getPreviousOrientation: function() {
                return prevActiveOrientation
            },
            isSmallDisplay: function() {
                return mediaQueries.small.matches
            },
            isIOS: function() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
            },
            mapValueToBreakpoint: function(value) {
                var mediaType = "small";
                switch (value.toLowerCase()) {
                    case "tablet":
                        mediaType = "medium";
                        break;
                    case "desktop":
                        mediaType = "large";
                        break;
                    case "xlarge":
                        mediaType = "extra_large"
                }
                return mediaType
            }
        }),
        prevMediaType = getMediaType(),
        prevOrientation = getOrientation(),
        prevActiveMediaType = null,
        prevActiveOrientation = null;

    function getMediaType() {
        var media = "mobile";
        return mediaQueries.tablet.matches ? media = "tablet" : mediaQueries.desktop.matches ? media = "desktop" : mediaQueries.xlarge.matches && (media = "xlarge"), media
    }

    function getOrientation() {
        var orientation = "landscape";
        return mediaQueries.portrait.matches && (orientation = "portrait"), orientation
    }
    __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("window:resize", function() {
        var currentMedia = getMediaType(),
            currentOrientation = getOrientation();
        currentMedia === prevMediaType && currentOrientation === prevOrientation || (prevActiveMediaType = prevMediaType, prevMediaType = currentMedia, prevActiveOrientation = prevOrientation, prevOrientation = currentOrientation, __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("mediaQuery:change", mediaQueries))
    }), __webpack_exports__.default = mediaQueries
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {},
        vehicleNavCategory = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehicleNavCategory().length ? __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehicleNavCategory() + ":" : "",
        shortTailPageID = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":";

    function trackCommonData() {
        window.digitaldata.onclick.linkType = "o", window.digitaldata.onclick.contentType = shortTailPageID + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", window.digitaldata.onclick.contentSubType = "model compare"
    }

    function initModelSeries(nameplate, model) {
        nameplate && model && (digitaldata.vehicle.modelSeries = nameplate + ":" + model)
    }
    api.trackShowDifferences = function(showDifferencesIsOn, nameplate) {
        var action = showDifferencesIsOn ? "apply" : "remove";
        window.digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":compare:" + action + " filter:" + nameplate, window.digitaldata.onclick.onclick = shortTailPageID + "model compare:" + action + " filter", window.digitaldata.onclick.contentNameID = "", trackCommonData(), _satellite.track("vhpModelFilterActions")
    }, api.trackCategory = function(element, nameplate, mode) {
        $(element.parent().parent()).on("click.analytics", '.accordion-item[data-state="open"]', function() {
            ! function(nameplate, $element) {
                var specCategory = $element.has("a h3").length ? $element.find("a h3").text() : $element.text();
                window.digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":" + vehicleNavCategory + "vehicle:models:compare:view " + specCategory + ":" + nameplate, window.digitaldata.onclick.onclick = "models:compare:view:" + specCategory, window.digitaldata.onclick.contentNameID = specCategory, trackCommonData(), _satellite.track("vhpModelFilterActions")
            }(nameplate, $(this))
        })
    }, api.trackModelOperations = function(nameplate, operation, modelCode) {
        initModelSeries(nameplate, modelCode), window.digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":compare:cta:" + operation + " model:" + nameplate, window.digitaldata.onclick.onclick = shortTailPageID + "model compare:cta click:" + operation + " model", trackCommonData(), _satellite.track("vhpModelCompareActions")
    }, api.trackToogleCompare = function(operation, isPageResult, nameplate, modelYear, nameplateCombination) {
        var mode = operation ? "compare" : "cancel compare",
            contentSubType = isPageResult ? "model compare" : "model walk";
        window.digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":cta:" + mode + ":" + nameplate, window.digitaldata.onclick.linkType = "o", window.digitaldata.onclick.onclick = shortTailPageID + "model walk:cta click:" + mode, window.digitaldata.onclick.contentType = shortTailPageID + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", window.digitaldata.onclick.contentSubType = contentSubType, window.digitaldata.vehicle.nameplateCombination = nameplateCombination, _satellite.track("vhpModelCompareActions")
    }, api.trackCompareSelected = function(nameplate, modelYear, nameplateCombination) {
        window.digitaldata.page.pageName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":compare:" + nameplate, window.digitaldata.page.pageNameNoVehicle = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":compare", window.digitaldata.page.siteSection = "vehicle", window.digitaldata.vehicle.nameplate = window.fordAnalytics.nameplate, window.digitaldata.vehicle.modelYear = window.fordAnalytics.modelYear, window.digitaldata.event.action = "tool|vehicle compare", window.digitaldata.page.tool = "event:compare vehicles:models", window.digitaldata.onclick.onclick = shortTailPageID + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":cta click:compare", window.digitaldata.onclick.contentType = shortTailPageID + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":impress", window.digitaldata.onclick.contentSubType = "model compare", window.digitaldata.vehicle.nameplateCombination = nameplateCombination, _satellite.track("vhpModelComparePage")
    }, api.trackCTA = function(data) {
        initModelSeries(data.nameplate, data.model), digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":cta:" + data.ctaName + ":" + data.nameplate + ":" + data.model, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "models:compare:cta click", digitaldata.onclick.contentType = shortTailPageID + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "model compare", digitaldata.vehicle.nameplate = data.nameplate, digitaldata.vehicle.modelYear = data.year, _satellite.track("moduleInternalCtaClick")
    }, api.trackDisclosure = function(element, nameplate, scope, disclosure, getModelSeries) {
        $(element).on("click.analytics", function() {
            var model = scope.$parent.$parent.$parent.model,
                modelName = model.name,
                modelCode = model.code;
            initModelSeries(nameplate, getModelSeries(modelCode)), window.digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":" + vehicleNavCategory + "view disclaimer:" + disclosure + ":" + modelName + ":" + nameplate, window.digitaldata.onclick.linkType = "o", window.digitaldata.onclick.onclick = "models:view vehicle disclaimer", window.digitaldata.onclick.contentType = shortTailPageID + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", window.digitaldata.onclick.contentSubType = "model walk", _satellite.track("vhpModelCompareActions")
        })
    }, api.init = function() {
        window.digitaldata.onclick = window.digitaldata.onclick || {}, window.digitaldata.event = window.digitaldata.event || {}
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_objectUtil__ = __webpack_require__(14),
        __WEBPACK_IMPORTED_MODULE_1_objectUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_objectUtil__),
        api = {};

    function getPreviousValue(key, value) {
        if (Modernizr.localstorage) {
            var previousValue = localStorage.getItem(key);
            return previousValue || (previousValue = value), previousValue
        }
        console.error("No Web Storage support.")
    }

    function setPreviousValue(key, value) {
        Modernizr.localstorage ? value && localStorage.setItem(key, value) : console.error("No Web Storage support.")
    }

    function getValues(keys, data, splitter) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(keys, function(key) {
            return __WEBPACK_IMPORTED_MODULE_1_objectUtil___default.a.getPropertyByString(key, data)
        }).join(splitter)
    }
    digitaldata = window.digitaldata, api.setPgNames = function(nameplate) {
        digitaldata.page.pageNameNoVehicle = api.getOriginalPgNameNoVehicle(), digitaldata.page.pageName = nameplate ? digitaldata.page.pageNameNoVehicle + ":" + nameplate : digitaldata.page.pageNameNoVehicle
    }, api.getPTemplate = function() {
        return FordPersonalisation.ptemplate.value
    }, api.getPg = function() {
        return window.fordAnalytics.pg
    }, api.getVehicleCategory = function() {
        return "vehicleCategory"
    }, api.getVehicleNavCategory = function() {
        return window.fordAnalytics.vehicleNavCategory || ""
    }, api.getTool = function() {
        return "tool"
    }, api.getPgNameNoVehicle = function() {
        return digitaldata.page.pageNameNoVehicle
    }, api.getOriginalPgNameNoVehicle = function() {
        return digitaldata._utils.page.pageNameNoVehicle
    }, api.getModelSeries = function() {
        return digitaldata.vehicle.modelSeries
    }, api.getPreviousSiteSection = function() {
        return getPreviousValue("guxfoe.previousSiteSection", "site entry")
    }, api.setPreviousSiteSection = function() {
        setPreviousValue("guxfoe.previousSiteSection", digitaldata.page.siteSection)
    }, api.getPreviousHierarchy = function() {
        return getPreviousValue("guxfoe.previousHierarchy", "hierarchy entry")
    }, api.setPreviousHierarchy = function() {
        setPreviousValue("guxfoe.previousHierarchy", digitaldata.page.hierarchy)
    }, api.getLeadId = function(data) {
        return "<digitaldata.user.leadID>"
    }, api.getLeadOptIn = function(data) {
        return "<digitaldata.user.leadOptIn>"
    }, api.getVehiclePayload = function(data) {
        return data.payload ? data.payload : ""
    }, api.getVehicleLoadLengthHeight = function(data) {
        return data.length && data.height ? data.payload + ":" + data.length + ":" + data.height : ""
    }, api.getVehicleAccessories = function(data) {
        return data.accessories
    }, api.getOriginalHierarchy = function() {
        return digitaldata._utils.page.hierarchy
    }, api.getStoredVehicleNameplate = function() {
        return digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""
    }, api.getPropertiesByString = function(string, fallback, data) {
        var keys = (string || "").split(":"),
            fallbackKeys = fallback ? fallback.split(":") : "";
        return function(keys, data) {
            return keys.reduce(function(isTrue, key) {
                return __WEBPACK_IMPORTED_MODULE_1_objectUtil___default.a.getPropertyByString(key, data) && isTrue
            }, !0)
        }(keys, data) ? getValues(keys, data, ":") : getValues(fallbackKeys, data, ":")
    }, __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        api = {};
    api.getPropertyByString = function(propertyString, object) {
        var props, prop, value = null,
            bracketValues = propertyString && propertyString.match(/\[(\d+|[a-z]+)]/g);
        if (propertyString && object) {
            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(bracketValues, function(bracketValue) {
                var val = bracketValue.match(/(\d+|[a-z]+)/);
                propertyString = propertyString.replace(bracketValue, "." + val[0])
            }), props = propertyString.split("."), value = object;
            for (var i = 0; i < props.length; i++) {
                if (!(prop = props[i]) || !value) {
                    value = null;
                    break
                }
                value = value[prop]
            }
        }
        return value
    }, api.get = function(object, path) {
        return api.getPropertyByString(path, object)
    }, api.set = function(object, path, value) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(object, function setBase(pathArr, value) {
            var result = {};
            return pathArr.length > 1 ? result[pathArr[0]] = setBase(pathArr.slice(1), value) : result[pathArr[0]] = value, result
        }(path.split("."), value))
    }, __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {
            trackInitiateContactUs: function(contactMethod) {
                digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":contact us:select " + contactMethod + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "e", digitaldata.onclick.onclick = "contact us:" + contactMethod, digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "anchor links bar", digitaldata.onclick.contentNameID = contactMethod, digitaldata.onclick.referredTo = "ford:" + contactMethod, digitaldata.event.action = "brand referral|tools", digitaldata.page.tool = "", _satellite.track("contactUsReferral")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};

    function setContentType() {
        digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click"
    }
    api.trackInitiateShare = function($element) {
        digitaldata.onclick.contentSubType = function($element) {
            var isVideoOverlay = !!$element.parents(".overlay-container.visible.overlay-video").length,
                isImageOverlay = !!$element.parents(".overlay-container.visible.overlay-image").length,
                isOverlay = !!$element.parents("overlay-container.visible").length,
                moduleType = "other";
            isVideoOverlay ? moduleType = "video overlay" : isImageOverlay ? moduleType = "image overlay" : isOverlay && (moduleType = "overlay");
            return moduleType
        }($element), digitaldata.onclick.contentNameID = function($element) {
            var $overlay, $video, $image, assetName = "";
            $overlay = $element.parents(".overlay-container").hasClass("gallery-trigger-carousel") ? $element.parents(".overlay-container .slide.is-active") : $element.parents(".overlay-container.visible");
            1 === $overlay.length && ($video = $overlay.find(".brightcove-player video"), $image = $overlay.find(".image img"), 1 === $video.length ? assetName = $video.attr("data-video-id") : 1 === $image.length && (assetName = $image.data("meta-title")));
            return assetName
        }($element), digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":share:initiate options:" + digitaldata.onclick.contentSubType + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "share:initiate options", setContentType(), _satellite.track("initiateShareOptions")
    }, api.trackSelectSocialChannel = function(socialChannelName, $element) {
        digitaldata.onclick.socialChannel = socialChannelName, digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":share:select " + socialChannelName + ":" + digitaldata.onclick.contentSubType + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "share:select social network", digitaldata.event.action = "social share|tools", digitaldata.page.tool = "event:social share:initiate", setContentType(), _satellite.track("selectSocialChannel")
    }, api.trackSelectEmailShare = function(data) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":share:select email:" + digitaldata.onclick.contentSubType + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "share:select email", digitaldata.event.action = "email share|tools", digitaldata.page.tool = "event:email share:initiate", setContentType(), _satellite.track("selectEmailShare")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};

    function setCommonData(contentSubType, assetName) {
        var nameplate = "";
        digitaldata.vehicle.nameplate && (nameplate = ":" + digitaldata.vehicle.nameplate), digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":content:onpage" + nameplate, digitaldata.onclick.linkType = "o", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = contentSubType, digitaldata.onclick.contentNameID = assetName
    }
    api.trackOpenMediaInOverlay = function(data) {
        null !== data.contentSubType && (digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:" + data.contentSubType + " select media", setCommonData(data.contentSubType, data.assetName), _satellite.track("moduleMediaInteract"))
    }, api.trackFullSizeImageInOverlay = function(imageTitle) {
        digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:image overlay view media full-size", setCommonData("image overlay", imageTitle), _satellite.track("moduleMediaInteract")
    }, api.trackDownloadImageInOverlay = function($overlayContent) {
        $(".content").off("click", ".overlay-container a[download]").on("click", ".overlay-container a[download]", function() {
            var imageTitle = "";
            imageTitle = $overlayContent.parent(".overlay-container").hasClass("gallery-trigger-carousel") ? $overlayContent.find(".slide.is-active img").attr("title") : $overlayContent.find("img").attr("title"), digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:image overlay download media", digitaldata.event.action = "download media|tools", digitaldata.page.tool = "event:download image", setCommonData("image overlay", imageTitle), _satellite.track("moduleMediaDownload")
        })
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__ = __webpack_require__(85),
        api = {};

    function setContentType(type) {
        digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":" + type
    }
    api.trackInitiateSearch = function(data, useDigitaldataPageName, useDigitaldataPageNameNoVehicle) {
        data.searchLocationType = data.postalCode ? "zip" : "address", __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setSearchData(data), __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setContentNameID(data), setContentType("impress"), digitaldata.event.action = "find dealer|tools", digitaldata.onclick.filterName = "", digitaldata.page.pageNameNoVehicle = useDigitaldataPageNameNoVehicle ? digitaldata._utils.temporaryPageNameNoVehicle + ":dealer locator:result" : __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":dealer locator:result", digitaldata.page.tool = "event:find dealer-complete", useDigitaldataPageName || (digitaldata.page.pageName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":dealer locator:result" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : "")), useDigitaldataPageNameNoVehicle && (digitaldata.page.pageName = digitaldata._utils.temporaryPageNameNoVehicle + ":dealer locator:result" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : "")), _satellite.track("ladCompletePageMini")
    }, api.trackSearchAgain = function(data) {
        setContentType("click"), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "find dealer:search " + data.searchAgainType, digitaldata.onclick.contentSubType = "mini find dealer", digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":dealer locator:result:search " + data.searchAgainType + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), _satellite.track("ladMoreOptions")
    }, api.trackExpandAndHideMap = function(data) {
        var showHideMap = data.open ? "show" : "hide";
        setContentType("click"), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "find dealer:" + showHideMap + " map", digitaldata.onclick.contentSubType = "mini find dealer", digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":dealer locator:result:" + showHideMap + " map" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), _satellite.track("ladMoreOptions")
    }, api.trackDealerViewReviews = function(vm, data) {
        var dealerPosition = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.getDealerPosition(vm, data);
        digitaldata.page.pageName = "dealer locator:dealer:reviews" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.page.pageNameNoVehicle = "dealer locator:dealer:reviews", digitaldata.page.dealerID = vm.dealer.DealerID, digitaldata.page.searchDepth = dealerPosition + ":" + data.dealersNumber, digitaldata.onclick.contentSubType = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setContentSubType(data.contentSubType), digitaldata.onclick.onclick = "view reviews", _satellite.track("ladDealerViewReviews")
    }, api.trackDealerReviewsSelectTab = function(reviewsTab) {
        digitaldata.onclick.onclick = "select " + reviewsTab, digitaldata.onclick.onclickLinkName = "dealer locator:dealer:reviews:select " + reviewsTab + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.contentSubType = "dealer ratings & reviews", digitaldata.onclick.contentID = reviewsTab, _satellite.track("ladDealerReviewsSelectTab")
    }, api.trackDealerReviewsViewMore = function(reviewsTab) {
        digitaldata.onclick.onclick = "view more", digitaldata.onclick.onclickLinkName = "dealer locator:dealer:reviews:" + reviewsTab + ":view more" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.contentSubType = "dealer ratings & reviews", digitaldata.onclick.contentID = reviewsTab, _satellite.track("ladDealerReviewsViewMore")
    }, api.trackDealerReviewsToolTip = function(contentSubType) {
        digitaldata.onclick.onclick = "select reviews info", digitaldata.onclick.onclickLinkName = "dealer locator:dealer:reviews:select reviews info" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.contentSubType = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setContentSubType(contentSubType), _satellite.track("ladDealerReviewsToolTip")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__ = __webpack_require__(85),
        api = {};

    function setContentType(type) {
        digitaldata.onclick.contentType = "fd:" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":" + type
    }

    function setDealerLocatorData(pageNumber) {
        digitaldata.page.pageName = "brand:dealer locator:results:pg " + pageNumber, digitaldata.page.pageNameNoVehicle = "brand:dealer locator:results:pg " + pageNumber
    }
    api.trackInitSearch = function(data) {
        setDealerLocatorData(1), __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setSearchData(data), __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setContentNameID(data), digitaldata.onclick.filterName = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.getFilterName(data.filters), digitaldata.onclick.contentSubType = "find dealer", digitaldata.onclick.onclick = "find dealer:" + (data.currentLocation ? "current location" : "manual search"), digitaldata.page.tool = "event:find dealer-complete", digitaldata.event.action = "find dealer|tools", setContentType("impress"), _satellite.track("ladCompletePageFull")
    }, api.trackOpeningFilters = function(data) {
        digitaldata.onclick.onclickLinkName = "brand:dealer locator:results:advanced search:initiate", digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "dealership:filter initiate", digitaldata.onclick.contentSubType = "find dealer", setContentType("click"), _satellite.track("ladMoreOptions")
    }, api.trackSubmit = function(data) {
        digitaldata.onclick.onclickLinkName = "brand:dealer locator:results:advanced search:submit", digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "dealership:filter submit", digitaldata.onclick.contentSubType = "find dealer", digitaldata.onclick.filterName = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.getFilterName(data.filters), setContentType("click"), __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setContentNameID(data), __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setSearchData(data), _satellite.track("ladFilterSubmit")
    }, api.trackShowMore = function(data) {
        setDealerLocatorData(data.pageNumber), setContentType("impress"), digitaldata.onclick.filterName = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.getFilterName(data.filters), digitaldata.onclick.contentSubType = "find dealer", _satellite.track("ladMoreResults")
    }, api.trackResultsPresent = function(data) {
        void 0 !== data.postalCode && (data.searchLocationType = data.postalCode ? "zip" : "address"), digitaldata.page.pageName = "brand:dealer locator:advanced search:results:pg " + data.pageNumber, digitaldata.page.pageNameNoVehicle = "brand:dealer locator:advanced search:results:pg " + data.pageNumber, digitaldata.onclick.filterName = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.getFilterName(data.filters), __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setSearchData(data), __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setContentNameID(data), setContentType("impress"), digitaldata.onclick.contentSubType = "find dealer", _satellite.track("ladMoreResults")
    }, api.trackClickDealer = function(data) {
        digitaldata.page.pageName = "brand:dealer locator:dealer:info", digitaldata.page.pageNameNoVehicle = "brand:dealer locator:dealer:info", setContentType("impress"), digitaldata.onclick.filterName = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.getFilterName(data.filters), digitaldata.onclick.contentSubType = "find dealer", digitaldata.onclick.contentNameID = data.ctaPlacement, digitaldata.onclick.onclick = "view reviews", digitaldata.page.dealerID = data.dealerID, digitaldata.event.action = "tool", digitaldata.page.tool = "event:view dealer", __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setSearchDepth(data), _satellite.track("ladDealerView")
    }, api.trackExpandDealerInfo = function(infoType) {
        digitaldata.onclick.onclickLinkName = "brand:dealer locator:dealer:expand " + infoType, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "dealer info:expand info", digitaldata.onclick.contentSubType = "find dealer", setContentType("click"), _satellite.track("ladDealerViewInteract")
    }, api.trackClickCTA = function(ctaName) {
        digitaldata.onclick.onclickLinkName = "brand:dealer locator:dealer:cta " + ctaName, digitaldata.onclick.onclick = "dealer info:cta click", digitaldata.onclick.linkType = "o", digitaldata.onclick.contentSubType = "find dealer", setContentType("click"), _satellite.track("ladDealerViewInteract")
    }, api.trackDealerViewReviews = function(vm, data) {
        var dealerPosition = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.getDealerPosition(vm, data);
        window.digitaldata.page.pageName = "brand:dealer locator:dealer:reviews", window.digitaldata.page.pageNameNoVehicle = "brand:dealer locator:dealer:reviews", window.digitaldata.page.dealerID = vm.dealer.DealerID, window.digitaldata.page.searchDepth = dealerPosition + ":" + data.dealersNumber, window.digitaldata.onclick.contentSubType = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setContentSubType(data.contentSubType), window.digitaldata.onclick.onclick = "view reviews", _satellite.track("ladDealerViewReviews")
    }, api.trackDealerReviewsSelectTab = function(reviewsTab) {
        digitaldata.onclick.onclick = "select " + reviewsTab, digitaldata.onclick.onclickLinkName = "brand:dealer locator:dealer:reviews:select " + reviewsTab, digitaldata.onclick.contentSubType = "dealer ratings & reviews", digitaldata.onclick.contentID = reviewsTab, _satellite.track("ladDealerReviewsSelectTab")
    }, api.trackDealerReviewsViewMore = function(reviewsTab) {
        digitaldata.onclick.onclick = "view more", digitaldata.onclick.onclickLinkName = "brand:dealer locator:dealer:reviews:" + reviewsTab + ":view more", digitaldata.onclick.contentSubType = "dealer ratings & reviews", digitaldata.onclick.contentID = reviewsTab, _satellite.track("ladDealerReviewsViewMore")
    }, api.trackDealerReviewsToolTip = function(contentSubType) {
        digitaldata.onclick.onclick = "select reviews info", digitaldata.onclick.onclickLinkName = "brand:dealer locator:dealer:reviews:select reviews info", digitaldata.onclick.contentSubType = __WEBPACK_IMPORTED_MODULE_2_analytics_events_commonDealerLocatorEvents_js__.a.setContentSubType(contentSubType), _satellite.track("ladDealerReviewsToolTip")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {},
        clickedOptions = [];

    function mapFeatureCategoryCode(featureCategoryCode) {
        var mapping = {
            paint: "colour"
        };
        return mapping[featureCategoryCode] ? mapping[featureCategoryCode] : featureCategoryCode
    }

    function setDigitaldataVehicleData(featureCategoryCode, code) {
        switch (featureCategoryCode) {
            case "paint":
                digitaldata.vehicle.extIntColour = code;
                break;
            case "bodystyle":
                digitaldata.vehicle.bodystyle = code;
                break;
            case "wheels":
                digitaldata.vehicle.wheels = code
        }
    }
    api.trackThreesixtyColouriserRotations = function(data) {
        var isRotate = "rotate" === data.type,
            eventType = "360:" + data.type + (isRotate ? " " + data.direction : ""),
            satelliteEventName = isRotate ? "360Rotate" : "360Spin";
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(data) + ":" + eventType + ":" + digitaldata.vehicle.nameplate, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg(data) + " content:" + eventType, digitaldata.page.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg(data) + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.page.contentSubType = "360", _satellite.track(satelliteEventName)
    }, api.trackThreesixtyColouriserSwitchBetweenTabs = function(data) {
        if (-1 === $.inArray(data.code, clickedOptions)) {
            var mappedFeatureCategoryCode = mapFeatureCategoryCode(data.code);
            digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(data) + ":360:view " + mappedFeatureCategoryCode + ":" + digitaldata.vehicle.nameplate, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg(data) + " content:360:view " + mappedFeatureCategoryCode, digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg(data) + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "360", digitaldata.onclick.contentNameID = mappedFeatureCategoryCode, _satellite.track("360SelectTab"), clickedOptions.push(data.code)
        }
    }, api.trackThreesixtyColouriserSelectOption = function(data) {
        var mappedFeatureCategoryCode = mapFeatureCategoryCode(data.featureCategory.code);
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(data) + ":360:select " + mappedFeatureCategoryCode + ":" + digitaldata.vehicle.nameplate, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg(data) + " content:360:select " + mappedFeatureCategoryCode, digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg(data) + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "360", digitaldata.onclick.contentNameID = mappedFeatureCategoryCode, setDigitaldataVehicleData(data.featureCategory.code, data.feature.code), _satellite.track("360SelectOption")
    }, api.trackThreesixtyColouriserCtaClicks = function(e, data) {
        for (var key in digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(data) + ":360:cta:" + digitaldata.vehicle.nameplate, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg(data) + " content:360:" + e.currentTarget.innerText, digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg(data) + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "360", digitaldata.onclick.contentNameID = e.currentTarget.innerText, data.features) Object.prototype.hasOwnProperty.call(data.features, key) && "S" === data.features[key].state && setDigitaldataVehicleData(key, data.features[key].code);
        _satellite.track("360Cta")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {
            videos: [],
            init: function() {
                digitaldata.video = digitaldata.video || {}, digitaldata.onclick = digitaldata.onclick || {}, digitaldata.event = digitaldata.event || {}
            },
            setTrackingData: function(id) {
                api.videos[id] = api.videos[id] || {
                    lastPlayTracked: 0,
                    lastSegmentTracked: 0,
                    lastFullscreenTracked: 0,
                    fullscreen: !1,
                    trackedEnded: !1
                }
            },
            setCommonPlayData: function(data) {
                digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "video play", digitaldata.video.videoName = data.videoName, digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPg(null) + ":" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "video player", digitaldata.onclick.contentNameID = data.videoName, digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":video:play:" + data.videoName, digitaldata.vehicle && digitaldata.vehicle.nameplate && (digitaldata.onclick.onclickLinkName += ":" + digitaldata.vehicle.nameplate)
            },
            trackMilestone: function(data, forceTrack) {
                var currentTime = Date.now();
                this.setTrackingData(data.id), (forceTrack || data.progress > 0 && currentTime - api.videos[data.id].lastSegmentTracked > 1750) && (this.setCommonPlayData(data), digitaldata.video.segmentTime = data.ts ? data.ts.toString() : "", digitaldata.event.action = "100" === data.progress ? "video complete" : data.progress + "% complete", window._satellite.track("videoSegments"), api.videos[data.id].lastSegmentTracked = currentTime)
            },
            trackEnded: function(data) {
                api.videos[data.id].trackedEnded || (api.trackMilestone(data), api.videos[data.id].lastSegmentTracked = 0, api.videos[data.id].trackedEnded = !0)
            },
            trackPlay: function(data) {
                var currentTime = Date.now();
                this.setTrackingData(data.id), api.videos[data.id].trackedEnded = !1, currentTime - api.videos[data.id].lastPlayTracked > 250 && (this.setCommonPlayData(data), digitaldata.event.action = "video start|tools", digitaldata.page.tool = "event:video play", window._satellite.track("videoPlay"), api.videos[data.id].lastPlayTracked = currentTime)
            },
            trackFullscreen: function(data) {
                var currentTime = Date.now();
                this.setTrackingData(data.id), currentTime - api.videos[data.id].lastFullscreenTracked > 750 && (api.videos[data.id].fullscreen ? (api.videos[data.id].lastFullscreenTracked = currentTime, api.videos[data.id].fullscreen = !1) : (digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPg(null) + " content:video overlay view media full-size", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPg(data) + ":" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "video overlay", digitaldata.onclick.contentNameID = data.videoName, digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":content:onpage", digitaldata.vehicle && digitaldata.vehicle.nameplate && (digitaldata.onclick.onclickLinkName += ":" + digitaldata.vehicle.nameplate), window._satellite.track("moduleMediaInteract"), api.videos[data.id].lastFullscreenTracked = currentTime, api.videos[data.id].fullscreen = !0))
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        __WEBPACK_IMPORTED_MODULE_2_cookieServiceAnalytics__ = __webpack_require__(84),
        __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);

    function _extends() {
        return (_extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        }).apply(this, arguments)
    }
    var api = {};

    function getSubTypeName(analytics) {
        return analytics.isBannerMode ? "cookie banner" : "cookie preferences"
    }

    function getAnalyticsData(data, params) {
        return void 0 === params && (params = {}), _extends({}, data, {
            pageNameNoVehicle: __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(),
            pageId: __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg(),
            pTemplate: __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate(),
            vehicle: digitaldata.vehicle.modelSeries ? ":" + digitaldata.vehicle.modelSeries : __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getStoredVehicleNameplate()
        }, params)
    }
    api.trackCookieMessageDecision = function(data) {
        var analytics = getAnalyticsData(data, {
            clickAction: data.isCookieAgree ? "accept cookies" : "decline cookies",
            isBannerMode: !0
        });
        api.trackCookiePreferencesCTAClick(analytics)
    }, api.trackCookieBannerManage = function(data) {
        var analytics = getAnalyticsData(data, {
            clickAction: "manage cookies",
            isBannerMode: !0
        });
        api.trackCookiePreferencesCTAClick(analytics)
    }, api.trackCookieBannerGoBack = function(data) {
        var analytics = getAnalyticsData(data, {
            clickAction: "go back",
            isBannerMode: !0
        });
        api.trackCookiePreferencesCTAClick(analytics)
    }, api.trackCookiePreferencesSave = function(data) {
        var analytics = getAnalyticsData(data, {
            clickAction: "save cookie settings"
        });
        api.trackCookiePreferencesCTAClick(analytics)
    }, api.trackCookieCategoryToggle = function(data) {
        var analytics = getAnalyticsData(data),
            categoryName = function(categoryName, cookieGroupCategoryNames) {
                return __WEBPACK_IMPORTED_MODULE_3_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.filter(cookieGroupCategoryNames, function(cookieGroupData) {
                    return cookieGroupData.id === categoryName
                }), "analyticsName")
            }(analytics.category, analytics.cookieGroupCategoryNames),
            categoryValue = analytics.cookieData[analytics.category] ? "on" : "off",
            context = getSubTypeName(analytics),
            cookieData = analytics.isSaveButtonMode ? analytics.previousCookieData : analytics.cookieData;
        digitaldata.onclick.onclickLinkName = analytics.pageNameNoVehicle + ":toggle:" + categoryName + " cookies " + categoryValue + analytics.vehicle, digitaldata.onclick.onclick = analytics.pageId + ":" + context + ":toggle click:" + categoryName + " cookies " + categoryValue, digitaldata.onclick.contentType = analytics.pageId + ":" + analytics.pTemplate + ":click", digitaldata.onclick.contentSubType = context, digitaldata.user.optInStatus = __WEBPACK_IMPORTED_MODULE_2_cookieServiceAnalytics__.a.getOptInStatus(analytics.cookieGroupCategoryNames, cookieData), _satellite.track("moduleToggleClick")
    }, api.trackCookiePreferencesCTAClick = function(analytics) {
        var context = getSubTypeName(analytics);
        digitaldata.onclick.onclickLinkName = analytics.pageNameNoVehicle + ":cta:" + analytics.clickAction + analytics.vehicle, digitaldata.onclick.onclick = analytics.pageId + ":" + context + ":cta click:" + analytics.clickAction, digitaldata.onclick.contentType = analytics.pageId + ":" + analytics.pTemplate + ":click", digitaldata.onclick.contentSubType = context, digitaldata.user.optInStatus = __WEBPACK_IMPORTED_MODULE_2_cookieServiceAnalytics__.a.getOptInStatus(analytics.cookieGroupCategoryNames, analytics.cookieData), _satellite.track("moduleInternalCtaClick")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {
            trackSearchOverlayInit: function() {
                window.fordAnalytics.nameplateCode ? digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":site search:initiate:" + window.fordAnalytics.nameplateCode : digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":site search:initiate", digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "site search:initiate", _satellite.track("initiateSiteSearch")
            },
            trackSearchPopularTermSelection: function(data) {
                window.fordAnalytics.nameplateCode ? digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":site search:select popular search term:" + window.fordAnalytics.nameplateCode : digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":site search:select popular search term", digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "site search:select popular search term", digitaldata.page.siteSearchString = data.searchTerm, _satellite.track("selectPopularSearchTerm")
            },
            trackSearchResultSelection: function(data) {
                digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":select result", digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "site search:select result", digitaldata.page.searchDepth = data.resultOrder + ":" + data.resultsCount, _satellite.track("selectSearchResult")
            },
            trackSearchRepeat: function(data) {
                digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":search again", digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "site search:search again", digitaldata.page.siteSearchString = data.searchTerm, digitaldata.page.searchDepth = data.searchDepth, _satellite.track("siteSearchRepeat")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {
            trackCarouselInteractions: function(data) {
                window.digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":content:onpage" + (window.digitaldata.vehicle.nameplate ? ":" + window.digitaldata.vehicle.nameplate : ""), window.digitaldata.onclick.linkType = "o", window.digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:" + data.onclick, window.digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", window.digitaldata.onclick.contentSubType = data.type, _satellite.track("carouselnteract")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var viewAllClicked, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};
    api.trackViewAllClicks = function(data) {
        viewAllClicked || (digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(data) + ":content:onpage:" + digitaldata.vehicle.nameplate, digitaldata.onclick.linkType = "o", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", data.attr("class").indexOf("galleryCategory") > -1 ? digitaldata.onclick.contentSubType = "galleryCategory" : data.attr("class").indexOf("brandGallery") > -1 && (digitaldata.onclick.contentSubType = "brandGallery"), digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:" + digitaldata.onclick.contentSubType + " view more", _satellite.track("moduleIViewMore"), viewAllClicked = !0)
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {
            trackSelectHotspots: function(assetName) {
                digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":content:onpage" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:hotspots:view more", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "hotspots", digitaldata.onclick.contentNameID = assetName, _satellite.track("moduleSelectContent")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};
    api.trackSelectSpecQuickView = function(assetName) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":content:onpage" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:spec quick view:select spec option", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "spec quick view", digitaldata.onclick.contentNameID = assetName, _satellite.track("moduleSelectContent"), !0
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var interiorTracked, exteriorTracked, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};

    function fillDataAndTrack(contentNameID) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":content:onpage" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:gallery trigger reveal:select tab", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "gallery trigger reveal", digitaldata.onclick.contentNameID = contentNameID, _satellite.track("moduleSelectContent")
    }
    api.trackSelectTabs = function(contentNameID) {
        !exteriorTracked && contentNameID.indexOf("exterior") >= 0 && (fillDataAndTrack("exterior"), exteriorTracked = !0), !interiorTracked && contentNameID.indexOf("interior") >= 0 && (fillDataAndTrack("interior"), interiorTracked = !0)
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var zeroResultsDisplayed, __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js__),
        api = {},
        clickedResetFilterTypes = [],
        initializedRadioFilters = [];

    function applyRefinementData(filterCategory, filterName) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(null) + ":refine:" + filterCategory + ":" + filterName, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "showroom refine", digitaldata.onclick.filterName = filterCategory + ":" + filterName, _satellite.track("srFilterOptions")
    }
    api.trackRefineToolTip = function(data) {
        var filterCategory, componentName = data.closest(".sr-filter").parent().attr("class");
        (filterCategory = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(componentName) || -1 === componentName.indexOf("sliderSelectionFilter") ? data.closest(".sr-filter").find("ul").data("no-results-label") : data.closest(".sr-filter").find(".ng-isolate-scope").data("no-results-label")) && (digitaldata.onclick.onclick = "showroom refine tool tip", digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(null) + ":refine tool tip:" + filterCategory, digitaldata.onclick.linkType = "o", digitaldata.onclick.filterName = filterCategory, _satellite.track("srFilterOptions"))
    }, api.trackSortBySelection = function(data) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(data) + ":sort:" + data.label, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "showroom sort", digitaldata.onclick.filterName = data.label, _satellite.track("srFilterOptions")
    }, api.trackRefinementInput = function(data) {
        var filterType = data.attr("type"),
            filterTypeName = data.attr("name"),
            filterCategory = data.closest(".sr-filter").find("ul").data("no-results-label");
        "radio" === filterType ? $.inArray(filterTypeName, initializedRadioFilters) > -1 ? applyRefinementData(filterCategory, data.val()) : initializedRadioFilters.push(filterTypeName) : applyRefinementData(filterCategory, data.data("label"))
    }, api.trackRefinementSlider = function(filterCategory, filterName) {
        applyRefinementData(filterCategory, filterName)
    }, api.trackResetingFilters = function(resetType) {
        -1 === $.inArray(resetType, clickedResetFilterTypes) && (digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(null) + ":" + resetType, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "showroom " + resetType, _satellite.track("srRemoveFilters"), clickedResetFilterTypes.push(resetType))
    }, api.trackZeroResults = function() {
        zeroResultsDisplayed || (digitaldata.page.pageName = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle(null) + ":refine:error", digitaldata.page.errorTracking = "showroom:refine:zero results", digitaldata.event.action = "errorTracking", _satellite.track("srError"), zeroResultsDisplayed = !0)
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        __WEBPACK_IMPORTED_MODULE_2_analytics_omnitureLinkExtension_js__ = __webpack_require__(86),
        __WEBPACK_IMPORTED_MODULE_2_analytics_omnitureLinkExtension_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_analytics_omnitureLinkExtension_js__),
        api = {},
        setCommonData = function() {
            digitaldata.onclick.linkType = "o", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click"
        };
    api.trackCTA = function(data) {
        setCommonData();
        var model = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getModelSeries(),
            ctaName = data.ctaName ? ":" + data.ctaName : "",
            contentSubType = data.contentSubType ? data.contentSubType : "";
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":cta" + ctaName, void 0 !== data.nameplate ? digitaldata.onclick.onclickLinkName += data.nameplate ? ":" + data.nameplate : "" : digitaldata.onclick.onclickLinkName += digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : "";
        var startingSign = data.nameplate || digitaldata.vehicle.nameplate ? " " : ":";
        digitaldata.onclick.onclickLinkName += model ? startingSign + model : "", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:" + contentSubType + ":cta click" + ctaName, digitaldata.onclick.contentSubType = contentSubType, digitaldata.onclick.contentNameID = (data.assetName ? data.assetName + ":" : "") + (data.ctaName ? data.ctaName : ""), __WEBPACK_IMPORTED_MODULE_2_analytics_omnitureLinkExtension_js___default.a.extendLink(data.$elem, data), _satellite.track("moduleInternalCtaClick")
    }, api.trackPromotionsShowroomCTA = function(data) {
        var ctaName = data.ctaName ? data.ctaName : "";
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":cta:" + ctaName + ":" + data.nameplate.analyticsNameplateName, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "promotions:cta click", digitaldata.onclick.contentType = "ps:" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "promotions showroom", digitaldata.page.promotionID = data.promotionID, digitaldata.page.searchDepth = data.resultPosition + ":" + data.totalResults, __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.setPgNames(), data.contentSubType = "promotions showroom", __WEBPACK_IMPORTED_MODULE_2_analytics_omnitureLinkExtension_js___default.a.extendLink(data.$elem, data), _satellite.track("prCtaClick")
    }, api.trackShowroomCTA = function(data, nameplateData) {
        setCommonData(), digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehicleNavCategory() + ":cta:" + data.ctaName + ":" + nameplateData.analyticsNameplateName, digitaldata.onclick.onclick = "sr:vehicle cta click", digitaldata.onclick.contentSubType = "showroom", digitaldata.onclick.contentNameID = "", digitaldata.vehicle.nameplate = nameplateData.analyticsNameplateName, digitaldata.vehicle.modelYear = nameplateData.analyticsModelYear, data.contentSubType = "showroom", __WEBPACK_IMPORTED_MODULE_2_analytics_omnitureLinkExtension_js___default.a.extendLink(data.$elem, data), _satellite.track("moduleInternalCtaClick")
    }, api.trackBnpShowroomCTA = function(data, nameplateData) {
        setCommonData(), digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehicleNavCategory() + ":cta:" + data.ctaName + ":" + nameplateData.analyticsNameplateName, digitaldata.onclick.onclick = "sr:" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":cta click:" + data.ctaName, digitaldata.onclick.contentSubType = "showroom", digitaldata.onclick.contentNameID = "", digitaldata.vehicle.nameplate = nameplateData.analyticsNameplateName, digitaldata.vehicle.modelYear = nameplateData.analyticsModelYear, data.contentSubType = "showroom", __WEBPACK_IMPORTED_MODULE_2_analytics_omnitureLinkExtension_js___default.a.extendLink(data.$elem, data), _satellite.track("moduleInternalCtaClick")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_cookieService__ = __webpack_require__(30),
        __WEBPACK_IMPORTED_MODULE_1_jsonValidatorUtil__ = __webpack_require__(114),
        api = {},
        config_cookieName = "internalNavigationID",
        config_cookiePath = "/";
    api.init = function() {
        ! function() {
            var navigationIdCookie = __WEBPACK_IMPORTED_MODULE_0_cookieService__.a.cookie.get(config_cookieName);
            if (void 0 !== navigationIdCookie && "" !== navigationIdCookie) {
                var data = __WEBPACK_IMPORTED_MODULE_1_jsonValidatorUtil__.a.getValidJsonFromString(navigationIdCookie);
                void 0 !== data && data.page === location.pathname && (digitaldata.page.internalNavigationID = data.value, __WEBPACK_IMPORTED_MODULE_0_cookieService__.a.cookie.remove({
                    name: config_cookieName,
                    path: config_cookiePath
                }))
            }
        }(), $(document).ready(function() {
            $(".nav-content .accordion-content-wrapper a, .nav-content .vehicle-tiles a, .navigation-vertical a, .nav-header .component-content a").click(function() {
                api.extendLink($(this), {
                    contentSubType: "global-nav-header"
                })
            }), $(".footer-links a, .footer-bottom a, .footer-search  a").click(function() {
                api.extendLink($(this), {
                    contentSubType: "global-nav-footer"
                })
            })
        })
    }, api.extendLink = function($elem, data) {
        var href = $elem.attr("href");
        if (href && !$elem.hasClass("link-overlay") && -1 === href.indexOf("cmp=other%3Anwp%3A")) {
            var shortTailPageID = window.fordAnalytics.pg ? window.fordAnalytics.pg : "",
                nameplate = digitaldata.vehicle.nameplate ? digitaldata.vehicle.nameplate : "",
                ctaName = data.ctaName ? data.ctaName : $elem.text().trim(),
                value = "other:nwp:" + shortTailPageID + ":" + (data.contentSubType ? data.contentSubType : "") + ":" + (data.assetName ? data.assetName : "") + ":" + (ctaName || fullTrim($elem.parent().text())) + ":" + nameplate;
            if (/^\//.test(href)) {
                var jsonString = JSON.stringify({
                    page: $elem[0].pathname,
                    value: value
                });
                __WEBPACK_IMPORTED_MODULE_0_cookieService__.a.cookie.set({
                    name: config_cookieName,
                    value: jsonString,
                    path: config_cookiePath
                })
            } else "#" === href ? digitaldata.page.internalNavigationID = value : $elem.attr("href", addUrlParam(href, "fmccmp", value))
        }
    };
    var addUrlParam = function(url, param, value) {
            var a = document.createElement("a"),
                str = [];
            return url.indexOf("?") > 1 && (str = url.slice(url.indexOf("?") + 1).split("&")), a.href = url, str.push(param + (value ? "=" + encodeURIComponent(value).replace(/%3A/g, ":") : "")), a.search = str.join("&"), a.href
        },
        fullTrim = function(string) {
            return string.replace(/(\r\n|\n|\r)/gm, "").replace(/\s{2,}/g, " ").trim()
        };
    __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {
            trackInitiateSocial: function(socialChannel) {
                digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":referral:social:" + socialChannel + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "e", digitaldata.onclick.onclick = "referral:social", digitaldata.onclick.socialChannel = socialChannel, digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "footer", digitaldata.onclick.referredTo = socialChannel + ":ford page", digitaldata.event.action = "brand referral|tools", digitaldata.page.tool = "event:referral:social", _satellite.track("referralSocial")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var visited, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};
    api.trackRefinementInput = function(element) {
        var filterCategory = "",
            accordion = element.closest(".filter-accordion-item");
        if (accordion.length > 0) filterCategory = accordion.find("p").text().trim();
        else {
            var $filter = element.closest(".sr-filter") || element.prev();
            filterCategory = $filter.find("a").length > 0 ? $filter.find("a").text().trim() : $filter.find(".header p").contents().get(0).nodeValue
        }! function(filterCategory, filterName) {
            digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":refine:" + filterCategory + ":" + filterName, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "promotions:refine", digitaldata.onclick.filterName = filterCategory + ":" + filterName, __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.setPgNames(), _satellite.track("prFilterOptions")
        }(filterCategory, element.data("label"))
    }, api.trackRefineToolTip = function(filterCategory) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":refine tool tip:" + filterCategory, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "promotions:refine tool tip", digitaldata.onclick.filterName = filterCategory, __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.setPgNames(), _satellite.track("prFilterOptions")
    }, api.trackZeroResults = function() {
        visited && (digitaldata.page.pageName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":refine:error", digitaldata.page.pageNameNoVehicle = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":refine:error", digitaldata.page.siteSection = "promotions", digitaldata.page.siteBusinessUnit = "ford-brand", digitaldata.page.errorTracking = "promotions:refine:zero results", digitaldata.event.action = "errorTracking", _satellite.track("prError")), visited = !0
    }, api.trackResetingFilters = function(resetType) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":" + resetType, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "promotions:" + resetType, __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.setPgNames(), _satellite.track("prRemoveFilters")
    }, api.trackShowOffers = function(data) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":show promotions:" + data.analyticsNameplateName, digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "promotions:show all promotions", digitaldata.onclick.contentType = "ps:" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "promotions showroom", digitaldata.vehicle.nameplate = data.analyticsNameplateName, digitaldata.vehicle.modelYear = data.analyticsModelYear, __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.setPgNames(data.analyticsNameplateName), _satellite.track("prShowPromotions")
    }, api.trackOffersAccordion = function(data) {
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":view promotion:" + data.nameplate.analyticsNameplateName, digitaldata.page.siteSection = "promotions", digitaldata.page.tool = "event:view promotion", digitaldata.event.action = "promotion view|tools", digitaldata.onclick.contentType = "ps:" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":impress", digitaldata.onclick.contentSubType = "promotions showroom", digitaldata.page.promotionID = data.promoId, digitaldata.page.searchDepth = data.resultPosition + ":" + data.totalResults, digitaldata.vehicle.nameplate = data.nameplate.analyticsNameplateName, digitaldata.vehicle.modelYear = data.nameplate.analyticsModelYear, __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.setPgNames(data.nameplate.analyticsNameplateName), _satellite.track("prViewPromotion")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};
    api.trackDownloadButton = function(downloadsData, nameplatesData) {
        downloadsData && function(downloadLinkName, downloadCategoryName, downloadType, nameplatesData) {
            var downloadTypeLC = downloadType.toLowerCase();
            nameplatesData ? (digitaldata.vehicle.nameplate = nameplatesData.nameplate, digitaldata.vehicle.modelYear = nameplatesData.year) : (digitaldata.vehicle.nameplate = "", digitaldata.vehicle.modelYear = "");
            digitaldata.onclick.onclickLinkName = downloadLinkName, digitaldata.onclick.linkType = "d", digitaldata.onclick.onclick = downloadTypeLC + " download", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.page.contentCategory = downloadCategoryName, "PDF" !== downloadType && (digitaldata.event.action = "tool|" + downloadTypeLC + " download", digitaldata.page.tool = "event:" + downloadTypeLC + ":pdf", digitaldata.page.toolDescriptor = downloadTypeLC + ":" + downloadCategoryName);
            _satellite.track(downloadTypeLC + "Download")
        }(function(link, nameplate) {
            var returnLinkName = "";
            returnLinkName = link.match("<nameplate>$") ? nameplate ? link.replace(/<nameplate>$/, nameplate) : digitaldata.vehicle.nameplate ? link.replace(/<nameplate>$/, digitaldata.vehicle.nameplate) : link.replace(/:<nameplate>$/, "") : link + (digitaldata.vehicle.nameplate || "");
            return returnLinkName
        }(downloadsData.link, nameplatesData ? nameplatesData.nameplate : ""), downloadsData.category, downloadsData.type, nameplatesData)
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};

    function trackNameplate(nameplate, subType) {
        var type = ":select vehicle";
        digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":" + subType + type + ":" + nameplate, digitaldata.onclick.contentNameID = nameplate, setCommonData(subType, nameplate, type), _satellite.track("moduleSelectVehicleNP")
    }

    function setCommonData(subType, nameplate, type) {
        digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + " content:" + subType + type, digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = subType, digitaldata.vehicle.nameplate = nameplate
    }
    api.trackFromModelsDisplay = function($element, conf, modelData) {
        var nameplate, modelSeries, subType, type;
        conf.isNameplateSubType ? trackNameplate(modelData.analyticsNameplateName, conf.analyticsContentSubType) : (nameplate = modelData.analyticsNameplateName, modelSeries = modelData.analyticsModelSeries, subType = conf.analyticsContentSubType, type = ":select model", modelSeries = modelSeries || "", digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":model display" + type + ":" + nameplate + ":" + modelSeries, digitaldata.onclick.contentNameID = nameplate + ":" + modelSeries, digitaldata.vehicle.modelSeries = nameplate + ":" + modelSeries, setCommonData(subType, nameplate, type), _satellite.track("moduleSelectVehicleSeries"))
    }, api.trackFromYouMightAlsoLike = function($element, modelData) {
        $element.find("> a, h6 a").on("click", function() {
            trackNameplate(modelData.nameplateCode, "you might also like")
        })
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js__),
        api = {};

    function modelSeriesYear(vehicle) {
        return (vehicle.modelSeries || vehicle.omnitureDesc + ":") + ":" + vehicle.omnitureModelYear
    }
    api.handleRadioButtonClick = function($referencedField) {
        $referencedField.parents(".config[data-track-as-contact-preference]").length > 0 && (window.fordAnalytics.contactPreference = $referencedField.val())
    }, api.trackFormSubmit = function($form) {
        var formObject = $form.parents(".form.section").find(".analytics-configuration").data("form-success");
        if (formObject && formObject.directCallRule) {
            var contactPreference = window.fordAnalytics.contactPreference ? window.fordAnalytics.contactPreference : "",
                directCallRule = formObject.directCallRule.replace("<contactPreference>", contactPreference);
            _satellite.track(directCallRule)
        }
    }, api.setWizardDictionaryData = function($element) {
        setDictionariesData($element, "data-page-name", null), digitaldata.user.leadID = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getLeadId(null), digitaldata.user.leadOptIn = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getLeadOptIn(null)
    }, api.setWizardDesktopDictionaryData = function($element) {
        setDictionariesData($element, "data-desktop-page-name", null), digitaldata.user.leadID = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getLeadId(null), digitaldata.user.leadOptIn = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getLeadOptIn(null)
    }, api.setStartFormDictionaryData = function(form) {
        var $spanData = $(form).closest("div.form").find("span.analytics-configuration");
        setDictionariesData($spanData, "data-page-name-start", "NOT-EXISTING-ATTRIBUTE"), digitaldata.user.leadID = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getLeadId(null), digitaldata.user.leadOptIn = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getLeadOptIn(null)
    }, api.setSuccessFormDictionaryData = function($form) {
        var $spanData = $form.closest("div.form").find("span.analytics-configuration");
        setDictionariesData($spanData, "data-page-name-success", "data-nameplate-success")
    }, api.setStartWizardDictionaryData = function($element) {
        setDictionariesData($element, "data-page-name-start", "NOT-EXISTING-ATTRIBUTE"), digitaldata.user.leadID = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getLeadId(null), digitaldata.user.leadOptIn = __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getLeadOptIn(null)
    }, api.setSuccessWizardDictionaryData = function($element) {
        setDictionariesData($element, "data-page-name-success", "data-nameplate-success")
    }, api.setVehicleSelectorData = function(selection) {
        var vehicles = selection.filter(function(sel) {
            return "vehicle" === sel.omnitureBrochureType
        });
        if (vehicles.length)
            if (1 === vehicles.length) digitaldata.vehicle.nameplate = selection[0].omnitureDesc, digitaldata.vehicle.modelYear = selection[0].omnitureModelYear, digitaldata.vehicle.modelSeries = selection[0].modelSeries, window.fordAnalytics.nameplate = selection[0].modelSeries || selection[0].omnitureDesc, digitaldata.vehicle.nameplateCombination = modelSeriesYear(selection[0]);
            else {
                var nameplates = "multiple nameplates";
                window.fordAnalytics.nameplate = nameplates, digitaldata.vehicle.nameplate = nameplates, digitaldata.vehicle.modelYear = nameplates, digitaldata.vehicle.modelSeries = nameplates, digitaldata.vehicle.nameplateCombination = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(vehicles, modelSeriesYear).join(",")
            } else window.fordAnalytics.nameplate = "", digitaldata.vehicle.nameplate = "", digitaldata.vehicle.modelYear = "", digitaldata.vehicle.modelSeries = "", digitaldata.vehicle.nameplateCombination = "";
        selection.length ? 1 === selection.length ? digitaldata.page.contentCategory = selection[0].omnitureBrochureType : digitaldata.page.contentCategory = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.sortBy(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.uniq(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(selection, "omnitureBrochureType"))).join(" + ") : digitaldata.page.contentCategory = ""
    }, api.removeVehicleSelectorData = function(selection) {
        selection.length || (digitaldata.vehicle.nameplateCombination = "", window.fordAnalytics.nameplate = "", digitaldata.vehicle.nameplate = "", digitaldata.vehicle.modelYear = "", digitaldata.vehicle.modelSeries = "", digitaldata.page.contentCategory = "")
    }, api.setDirectCallRule = function($ele, formAttribute) {
        var formObject = $ele.data(formAttribute);
        formObject && formObject.directCallRule && _satellite.track(formObject.directCallRule)
    }, api.setDealerLocatorData = function(data, $spanData) {
        digitaldata.page.dealerID = data.dealerID, digitaldata.page.searchDepth = data.searchDepth, setDictionariesData($spanData, "data-page-name-result", "data-nameplate-result")
    };
    var setDictionariesData = function($spanData, pageNameAttribute, nameplateAttribute) {
        var pageNameDataAttribute = $spanData.attr(pageNameAttribute);
        if (void 0 !== pageNameDataAttribute) {
            var pageNameData = JSON.parse(pageNameDataAttribute);
            digitaldata.page.pageName = pageNameData.pageName, digitaldata.page.siteSection = pageNameData.siteSection, digitaldata.page.hierarchy = pageNameData.siteLevel, digitaldata.page.siteBusinessUnit = pageNameData.siteBusinessUnit, digitaldata.onclick.contentType = (void 0 !== pageNameData.shortTailPageId ? pageNameData.shortTailPageId + ":" : "") + __WEBPACK_IMPORTED_MODULE_2_analytics_analyticsVariables_js___default.a.getPTemplate() + ":impress"
        }
        if (nameplateAttribute) {
            var nameplateDataAttribute = $spanData.attr(nameplateAttribute);
            if (void 0 !== nameplateDataAttribute) {
                var nameplateData = JSON.parse(nameplateDataAttribute);
                window.fordAnalytics.nameplate = nameplateData.nameplate, digitaldata.vehicle.nameplate = nameplateData.nameplate, digitaldata.vehicle.modelYear = nameplateData.year, digitaldata.vehicle.modelSeries = ""
            }
        }
        digitalDataUtils.setAnalyticsPageNameFields(), digitaldata._utils.temporaryPageNameNoVehicle = digitaldata.page.pageNameNoVehicle
    };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_2_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__),
        api = {},
        errors = [],
        errorTypesMap = {
            required: "no entry",
            regexp: "invalid entry",
            confirmValue: "emails don't match"
        };

    function setCommonDataSet() {
        digitaldata.page.pageNameNoVehicle = window.fordAnalytics.pageNameNoVehicle + ":error", digitaldata.page.pageName = digitaldata.page.pageNameNoVehicle, digitaldata.page.pageName += digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : "", digitaldata.event.action = "error tracking"
    }

    function getErrorTitle() {
        var errorTitle = "undefined";
        if ("string" == typeof window.fordAnalytics.pageNameNoVehicle) {
            var pageNameParts = window.fordAnalytics.pageNameNoVehicle.split(":");
            errorTitle = pageNameParts && pageNameParts[2] ? pageNameParts[2] : ""
        }
        return errorTitle
    }
    api.addError = function(data) {
        if ("object" == typeof data && data.variableName && data.errorType) {
            var variableName = data.dataAnalyticsInputName;
            variableName || (variableName = data.variableName.replace(/-hidden$/, "")), errors.push(getErrorTitle() + ":" + variableName + ":" + errorTypesMap[data.errorType])
        }
    }, api.clearErrors = function() {
        errors = []
    }, api.trackFormErrors = function() {
        errors.length > 0 && (setCommonDataSet(), digitaldata.page.errorTracking = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.uniq(errors).join(","), errors = [], _satellite.track("formError"))
    }, api.trackDealerErrors = function(data) {
        "object" == typeof data && data.searchType && data.errorType && (setCommonDataSet(), digitaldata.page.errorTracking = getErrorTitle() + ":" + data.searchType + " search:" + data.errorType, _satellite.track("formError"))
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {
            videos: [],
            init: function() {
                digitaldata.video = digitaldata.video || {}, digitaldata.onclick = digitaldata.onclick || {}, digitaldata.event = digitaldata.event || {}
            },
            setTrackingData: function(id) {
                api.videos[id] = api.videos[id] || {
                    lastPlayTracked: 0,
                    lastSegmentTracked: 0,
                    lastFullscreenTracked: 0,
                    fullscreen: !1,
                    trackedEnded: !1
                }
            },
            trackMilestone: function(data, ended) {
                var currentTime = Date.now();
                this.setTrackingData(data.id), (ended || data.progress > 0 && currentTime - api.videos[data.id].lastSegmentTracked > 1750) && (digitaldata.video.segmentTime = data.ts ? data.ts.toString() : "", digitaldata.event.action = ended ? "video complete" : data.progress + "% complete", window._satellite.track("videoSegments"), api.videos[data.id].lastSegmentTracked = currentTime)
            },
            trackEnded: function(data) {
                api.trackMilestone(data, !0), api.videos[data.id].lastSegmentTracked = 0, api.videos[data.id].trackedEnded = !0, api.trackedVideo = null
            },
            trackPlay: function(data) {
                var currentTime = Date.now();
                this.setTrackingData(data.id), currentTime - api.videos[data.id].lastPlayTracked > 250 && data.id !== api.trackedVideo && (digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "video play", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPg(null) + ":" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "video player", digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":video:play:" + data.videoName, digitaldata.onclick.contentNameID = data.id + ":" + data.videoName, digitaldata.video.videoName = data.videoName, digitaldata.video.videoID = data.id, data.videoPlaylistID ? digitaldata.video.videoPlaylistID = data.videoPlaylistID : digitaldata.video.videoPlaylistID && delete digitaldata.video.videoPlaylistID, digitaldata.event.action = "video start|tools", digitaldata.page.tool = "event:video play", digitaldata.vehicle && digitaldata.vehicle.nameplate && (digitaldata.onclick.onclickLinkName += ":" + digitaldata.vehicle.nameplate), window._satellite.track("videoPlay"), api.trackedVideo = data.id, api.videos[data.id].lastPlayTracked = currentTime)
            },
            trackFullscreen: function(data) {
                var currentTime = Date.now();
                this.setTrackingData(data.id), api.videos[data.id].fullscreen ? (api.videos[data.id].lastFullscreenTracked = currentTime, api.videos[data.id].fullscreen = !1) : (digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPg(null) + " content:video view media full-size", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPg(data) + ":" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "video overlay", digitaldata.onclick.contentNameID = data.id + ":" + data.videoName, digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":content:onpage", digitaldata.vehicle && digitaldata.vehicle.nameplate && (digitaldata.onclick.onclickLinkName += ":" + digitaldata.vehicle.nameplate), digitaldata.video.videoName = data.videoName, digitaldata.video.videoID = data.id, data.videoPlaylistID ? digitaldata.video.videoPlaylistID = data.videoPlaylistID : digitaldata.video.videoPlaylistID && delete digitaldata.video.videoPlaylistID, window._satellite.track("moduleMediaInteract"), api.videos[data.id].lastFullscreenTracked = currentTime, api.videos[data.id].fullscreen = !0)
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {
            trackInitiateLiveChat: function() {
                digitaldata.onclick.onclickLinkName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPgNameNoVehicle() + ":live chat:initiate" + (digitaldata.vehicle.nameplate ? ":" + digitaldata.vehicle.nameplate : ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "live chat initiate", digitaldata.onclick.contentType = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPg() + ":" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "live chat", digitaldata.onclick.referredTo = "ford:call centre", digitaldata.page.tool = "event:live chat-start", digitaldata.event.action = "live chat|tools", _satellite.track("liveChatInitiate")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_configurationProvider__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(6));

    function _extends() {
        return (_extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        }).apply(this, arguments)
    }
    var api = {},
        clickToCallConfig = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_configurationProvider__).a.get($("#market-wide-configuration")).clickToCallConfiguration;

    function trackEvent(stepConfig, errorReason, field) {
        stepConfig && (delete digitaldata.page.pageName, delete digitaldata.page.pageNameNoVehicle, delete digitaldata.page.errorTracking, function(stepConfig) {
            var pageName = digitalDataUtils.replaceDynamicValues(stepConfig.pageName, !1, _extends({}, stepConfig, {
                modelYear: stepConfig.year,
                modelSeriesName: stepConfig.model
            }));
            digitaldata.page.pageName = pageName, digitaldata.page.pageNameNoVehicle = pageName, digitaldata.vehicle.nameplate = stepConfig.nameplate, digitaldata.vehicle.modelYear = stepConfig.year, digitaldata.vehicle.modelSeries = stepConfig.nameplate ? stepConfig.nameplate + ":" + stepConfig.model : stepConfig.model
        }(stepConfig), errorReason && function(stepConfig, errorReason, field) {
            var fieldEntry = field ? ":" + field : "";
            digitaldata.page.errorTracking = stepConfig.formStage + fieldEntry + ":" + errorReason
        }(stepConfig, errorReason, field), _satellite.track(stepConfig.directCallRule))
    }
    api.setAnalyticsVariables = function(analyticsConfig) {
        clickToCallConfig = _extends({}, clickToCallConfig, analyticsConfig)
    }, api.trackSubmit = function() {
        trackEvent(clickToCallConfig.formStep)
    }, api.trackSuccess = function() {
        trackEvent(clickToCallConfig.successStep)
    }, api.trackFormError = function() {
        trackEvent(clickToCallConfig.errorStep, "form error")
    }, api.trackValidationError = function(field, reasons) {
        trackEvent(clickToCallConfig.formStep, reasons, field)
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var api = {
        get: function($element) {
            var $configNode, config = {};
            return $element ? (($configNode = $element.find(".configuration")) && (config = $configNode.data() || {}), config) : config
        }
    };
    __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_pubsub__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(18)),
        __WEBPACK_IMPORTED_MODULE_2_analytics_bandpevents_include_bpStart_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_pubsub__), __webpack_require__(246)),
        __WEBPACK_IMPORTED_MODULE_3_analytics_bandpevents_include_bpSeeAll_js__ = __webpack_require__(247),
        __WEBPACK_IMPORTED_MODULE_4_analytics_bandpevents_include_bpSave_js__ = __webpack_require__(248),
        __WEBPACK_IMPORTED_MODULE_5_analytics_bandpevents_include_bpPrimaryCategory_js__ = __webpack_require__(249),
        __WEBPACK_IMPORTED_MODULE_6_analytics_bandpevents_include_bpFeatureSelect_js__ = __webpack_require__(250),
        __WEBPACK_IMPORTED_MODULE_7_analytics_bandpevents_include_bpFeatureInfo_js__ = __webpack_require__(251),
        __WEBPACK_IMPORTED_MODULE_8_analytics_bandpevents_include_bpComplete_js__ = __webpack_require__(252),
        __WEBPACK_IMPORTED_MODULE_9_analytics_bandpevents_include_bpQuoteFullComplete_js__ = __webpack_require__(253),
        __WEBPACK_IMPORTED_MODULE_10_analytics_bandpevents_include_bpConflictOverlay_js__ = __webpack_require__(254),
        __WEBPACK_IMPORTED_MODULE_11_analytics_bandpevents_include_bpConflictDecision_js__ = __webpack_require__(255),
        __WEBPACK_IMPORTED_MODULE_12_analytics_bandpevents_include_bpQuoteStart_js__ = __webpack_require__(256),
        __WEBPACK_IMPORTED_MODULE_13_analytics_bandpevents_include_bpSeriesOverlay_js__ = __webpack_require__(257),
        __WEBPACK_IMPORTED_MODULE_14_analytics_bandpevents_include_bpAccOptionsInfo_js__ = __webpack_require__(258),
        __WEBPACK_IMPORTED_MODULE_15_analytics_bandpevents_include_bpShare_js__ = __webpack_require__(259),
        __WEBPACK_IMPORTED_MODULE_16_analytics_bandpevents_include_bpCta_js__ = __webpack_require__(260),
        __WEBPACK_IMPORTED_MODULE_17_analytics_bandpevents_include_bpOverlayClose_js__ = __webpack_require__(261),
        __WEBPACK_IMPORTED_MODULE_18_analytics_bandpevents_include_bpPersonalisedOpenVideoOverlay_js__ = __webpack_require__(262),
        __WEBPACK_IMPORTED_MODULE_19_analytics_bandpevents_include_bpPersonalisedVideoPlay_js__ = __webpack_require__(263),
        __WEBPACK_IMPORTED_MODULE_20_analytics_bandpevents_include_bpPersonalisedVideoProgress_js__ = __webpack_require__(264),
        __WEBPACK_IMPORTED_MODULE_21_analytics_bandpevents_include_bpPersonalisedMediaDownload_js__ = __webpack_require__(265),
        __WEBPACK_IMPORTED_MODULE_22_analytics_bandpevents_include_bpPersonalisedInitiateShareOptions_js__ = __webpack_require__(266),
        __WEBPACK_IMPORTED_MODULE_23_analytics_bandpevents_include_bpPersonalisedSelectShare_js__ = __webpack_require__(267),
        __WEBPACK_IMPORTED_MODULE_24_analytics_bandpevents_include_bpBSLErrorTracking_js__ = __webpack_require__(268),
        __WEBPACK_IMPORTED_MODULE_25_analytics_bandpevents_include_bpGallery__ = __webpack_require__(269),
        api = {
            init: function() {
                $.subscribe("bpStart", __WEBPACK_IMPORTED_MODULE_2_analytics_bandpevents_include_bpStart_js__.a.handle), $.subscribe("bpSeeAll", __WEBPACK_IMPORTED_MODULE_3_analytics_bandpevents_include_bpSeeAll_js__.a.handle), $.subscribe("bpSave", __WEBPACK_IMPORTED_MODULE_4_analytics_bandpevents_include_bpSave_js__.a.handle), $.subscribe("bpPrimaryCategory", __WEBPACK_IMPORTED_MODULE_5_analytics_bandpevents_include_bpPrimaryCategory_js__.a.handle), $.subscribe("bpPrimaryCategoryInit", __WEBPACK_IMPORTED_MODULE_5_analytics_bandpevents_include_bpPrimaryCategory_js__.a.handleInit), $.subscribe("bpFeatureSelect", __WEBPACK_IMPORTED_MODULE_6_analytics_bandpevents_include_bpFeatureSelect_js__.a.handle), $.subscribe("bpFeatureInfo", __WEBPACK_IMPORTED_MODULE_7_analytics_bandpevents_include_bpFeatureInfo_js__.a.handle), $.subscribe("bpComplete", __WEBPACK_IMPORTED_MODULE_8_analytics_bandpevents_include_bpComplete_js__.a.handle), $.subscribe("bpConflictOverlay", __WEBPACK_IMPORTED_MODULE_10_analytics_bandpevents_include_bpConflictOverlay_js__.a.handle), $.subscribe("bpQuoteFullComplete", __WEBPACK_IMPORTED_MODULE_9_analytics_bandpevents_include_bpQuoteFullComplete_js__.a.handle), $.subscribe("bpAcceptConflict", __WEBPACK_IMPORTED_MODULE_11_analytics_bandpevents_include_bpConflictDecision_js__.a.handleAccept), $.subscribe("bpDeclineConflict", __WEBPACK_IMPORTED_MODULE_11_analytics_bandpevents_include_bpConflictDecision_js__.a.handleDecline), $.subscribe("bpQuoteStart", __WEBPACK_IMPORTED_MODULE_12_analytics_bandpevents_include_bpQuoteStart_js__.a.handle), $.subscribe("bpSeriesOverlay", __WEBPACK_IMPORTED_MODULE_13_analytics_bandpevents_include_bpSeriesOverlay_js__.a.handle), $.subscribe("bpAccOptionsInfo", __WEBPACK_IMPORTED_MODULE_14_analytics_bandpevents_include_bpAccOptionsInfo_js__.a.handle), $.subscribe("bpShareSocial", __WEBPACK_IMPORTED_MODULE_15_analytics_bandpevents_include_bpShare_js__.a.handleSocial), $.subscribe("bpShareEmail", __WEBPACK_IMPORTED_MODULE_15_analytics_bandpevents_include_bpShare_js__.a.handleEmail), $.subscribe("moduleInternalCtaClick", __WEBPACK_IMPORTED_MODULE_16_analytics_bandpevents_include_bpCta_js__.a.handle), $.subscribe("bpOverlayClose", __WEBPACK_IMPORTED_MODULE_17_analytics_bandpevents_include_bpOverlayClose_js__.a.handle), $.subscribe("bpPersonalisedOpenVideoOverlay", __WEBPACK_IMPORTED_MODULE_18_analytics_bandpevents_include_bpPersonalisedOpenVideoOverlay_js__.a.handle), $.subscribe("bpPersonalisedVideoPlay", __WEBPACK_IMPORTED_MODULE_19_analytics_bandpevents_include_bpPersonalisedVideoPlay_js__.a.handle), $.subscribe("bpPersonalisedVideoProgress", __WEBPACK_IMPORTED_MODULE_20_analytics_bandpevents_include_bpPersonalisedVideoProgress_js__.a.handle), $.subscribe("bpPersonalisedMediaDownload", __WEBPACK_IMPORTED_MODULE_21_analytics_bandpevents_include_bpPersonalisedMediaDownload_js__.a.handle), $.subscribe("bpPersonalisedInitiateShareOptions", __WEBPACK_IMPORTED_MODULE_22_analytics_bandpevents_include_bpPersonalisedInitiateShareOptions_js__.a.handle), $.subscribe("bpPersonalisedSelectShare", __WEBPACK_IMPORTED_MODULE_23_analytics_bandpevents_include_bpPersonalisedSelectShare_js__.a.handle), $.subscribe("bpLoadError", __WEBPACK_IMPORTED_MODULE_24_analytics_bandpevents_include_bpBSLErrorTracking_js__.a.handleLoad), $.subscribe("bpUpdateError", __WEBPACK_IMPORTED_MODULE_24_analytics_bandpevents_include_bpBSLErrorTracking_js__.a.handleUpdate), $.subscribe("bpQuoteError", __WEBPACK_IMPORTED_MODULE_24_analytics_bandpevents_include_bpBSLErrorTracking_js__.a.handleCalculator), $.subscribe("bpDefaultQuoteError", __WEBPACK_IMPORTED_MODULE_24_analytics_bandpevents_include_bpBSLErrorTracking_js__.a.handleDefaultQuotes), $.subscribe("bpSummaryError", __WEBPACK_IMPORTED_MODULE_24_analytics_bandpevents_include_bpBSLErrorTracking_js__.a.handleSummary), $.subscribe("bpGalleryRotate", __WEBPACK_IMPORTED_MODULE_25_analytics_bandpevents_include_bpGallery__.a.rotateOrSpin), $.subscribe("bpGalleryChangeView", __WEBPACK_IMPORTED_MODULE_25_analytics_bandpevents_include_bpGallery__.a.changeView), $.subscribe("bpGalleryMaximiseOrMinimise", __WEBPACK_IMPORTED_MODULE_25_analytics_bandpevents_include_bpGallery__.a.maximiseOrMinimise)
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {
            handle: function(data) {
                window.digitaldata = window.digitaldata || {}, digitaldata.page.pageName = "brand:build:initiate:" + data.nameplate, digitaldata.page.pageNameNoVehicle = "brand:build:initiate", digitaldata.page.siteSection = "build-price", digitaldata.page.hierarchy = "shopping tools:build-price:" + data.vehicleCategory + ":" + data.nameplate + ":" + data.modelYear, digitaldata.page.siteBusinessUnit = "ford-brand", digitaldata.page.tool = "event: bp start", digitaldata.page.toolDescriptor = "full build", digitaldata.event.action = "tools|build start", digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":impress", digitaldata.vehicle.nameplate = data.nameplate, digitaldata.vehicle.modelYear = data.modelYear, digitaldata.vehicle.modelSeries = data.modelSeries ? data.nameplate + ":" + data.modelSeries : data.seriesCode || "", digitaldata.vehicle.extIntColour = data.extColorCode + (data.trimCode ? ":" + data.trimCode : ""), digitaldata.vehicle.bodystyle = data.bodystyleCode, digitaldata.vehicle.accessories = data.accessories, digitaldata.vehicle.engineTrans = data.engineTransCode, digitaldata.vehicle.price = data.buildPrice, digitaldata.page.variantName = "buildStart", data.isCapacityCategoryEnabled && (digitaldata.vehicle.payload = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehiclePayload(data), digitaldata.vehicle.loadLengthHeight = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehicleLoadLengthHeight(data)), _satellite.track("bpStart")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        api = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__), {}),
        seeAllMap = {
            series: "bp:see all series",
            bodystyle: "bp:see all bodystyles",
            drive: "bp:see all engines",
            color: "bp:see all colours",
            trim: "bp:see all trims",
            extra: "bp:see all accessories options",
            capacity: "bp:see all payload options"
        };
    api.handle = function(data) {
        digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":see all:", digitaldata.onclick.onclickLinkName += digitaldata.vehicle.nameplate ? digitaldata.vehicle.nameplate : "", digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = seeAllMap[data.category], _satellite.track("bpSeeAll")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        api = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__), {
            handle: function(data) {
                digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":save to profile:" + (digitaldata.vehicle.nameplate || ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "bp:save to profile", digitaldata.event.action = "save build|tools", digitaldata.page.tool = "event: bp save to profile", _satellite.track("bpSave")
            }
        });
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        api = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__), {});
    api.lastTrackedCategory = "", api.handle = function(data) {
        ! function(data) {
            var category = {
                series: "series",
                drive: "engine",
                bodystyle: "bodystyle",
                color: "colour",
                trim: "trim",
                extra: "options",
                capacity: "capacity"
            }[data.category];
            void 0 !== data.category && "" !== data.category && (void 0 === category && (category = ""), digitaldata.page.pageNameNoVehicle = "brand:build:", digitaldata.page.pageNameNoVehicle += category, digitaldata.page.pageName = digitaldata.page.pageNameNoVehicle + ":" + (data.nameplate ? data.nameplate : ""), _satellite.track("bpPrimaryCategory"), api.lastTrackedCategory = data.category)
        }(data)
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__),
        api = {},
        configuration = {
            series: {
                onclickValue: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.template("bp:<%= state %> series"),
                propertyMapping: [{
                    propertyName: "accessories",
                    mapping: "accessories"
                }, {
                    propertyName: "modelSeries",
                    mapping: "nameplate:modelSeries",
                    fallback: "seriesCode"
                }, {
                    propertyName: "modelYear",
                    mapping: "modelYear"
                }, {
                    propertyName: "nameplate",
                    mapping: "nameplate"
                }, {
                    propertyName: "engineTrans",
                    mapping: "engineTransCode"
                }, {
                    propertyName: "price",
                    mapping: "buildPrice"
                }, {
                    propertyName: "bodystyle",
                    mapping: "bodystyleCode"
                }, {
                    propertyName: "extIntColour",
                    mapping: "extColorCode:trimCode",
                    fallback: "extColorCode"
                }],
                trackValue: "bpSeriesSelect"
            },
            drive: {
                onclickValue: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.template("bp:<%= state %> engine"),
                propertyMapping: [{
                    propertyName: "engineTrans",
                    mapping: "engineTransCode"
                }],
                trackValue: "bpEngineSelect"
            },
            bodystyle: {
                onclickValue: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.template("bp:<%= state %> bodystyle"),
                propertyMapping: [{
                    propertyName: "bodystyle",
                    mapping: "bodystyleCode"
                }],
                trackValue: "bpBodystyleSelect"
            },
            color: {
                onclickValue: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.template("bp:<%= state %> colour"),
                propertyMapping: [{
                    propertyName: "extIntColour",
                    mapping: "extColorCode"
                }],
                trackValue: "bpColourSelect"
            },
            trim: {
                onclickValue: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.template("bp:<%= state %> trim"),
                propertyMapping: [{
                    propertyName: "extIntColour",
                    mapping: "trimCode"
                }],
                trackValue: "bpTrimSelect"
            },
            extra: {
                onclickValue: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.template("bp:<%= state %> accessories options"),
                propertyMapping: [{
                    propertyName: "accessories",
                    mapping: "accessories"
                }],
                trackValue: "bpAccOptionsSelect"
            },
            capacity: {
                gvm: {
                    value: "payload",
                    trackValue: "bpPayloadSelect"
                },
                length: {
                    value: "load length",
                    trackValue: "bpLoadLengthHeightSelect"
                },
                height: {
                    value: "load height",
                    trackValue: "bpLoadLengthHeightSelect"
                },
                onclickValue: __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.template("bp:<%= state %> <%= value %>"),
                capacity: !0
            }
        };
    api.handle = function(data) {
        var state, trackData;
        if ("AVAILABLE" === data.selectedFeatureState) state = "select";
        else {
            if ("SELECTED" !== data.selectedFeatureState || "extra" !== data.selectedFeatureType) return;
            state = "deselect"
        }(trackData = configuration[data.selectedFeatureType]) && (digitaldata.onclick.linkType = "o", digitaldata.vehicle.price = data.buildPrice, trackData.capacity ? function(state, trackData, data) {
            var capacityData = trackData[data.capacityType];
            capacityData && (digitaldata.onclick.onclick = trackData.onclickValue({
                state: state,
                value: capacityData.value
            }), digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":build:" + state + " " + capacityData.value + ":" + (data.nameplate || ""), digitaldata.vehicle.payload = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehiclePayload(data), digitaldata.vehicle.loadLengthHeight = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehicleLoadLengthHeight(data), _satellite.track(capacityData.trackValue))
        }(state, trackData, data) : function(state, trackData, data) {
            digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":" + state + ":" + (data.nameplate || ""), digitaldata.onclick.onclick = trackData.onclickValue({
                state: state
            }), __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.forEach(trackData.propertyMapping, function(propertyMapping) {
                digitaldata.vehicle[propertyMapping.propertyName] = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPropertiesByString(propertyMapping.mapping, propertyMapping.fallback, data)
            }), _satellite.track(trackData.trackValue)
        }(state, trackData, data))
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {},
        configuration = {
            series: {
                onclickValue: "bp:select series info",
                propertyName: "modelSeries",
                trackValue: "bpSeriesInfo",
                dataKeyOverride: "nameplate:infoFeature.nameplateName"
            },
            drive: {
                onclickValue: "bp:select engine info",
                propertyName: "engineTrans",
                trackValue: "bpEngineInfo"
            },
            bodystyle: {
                onclickValue: "bp:select bodystyle info",
                propertyName: "bodystyle",
                trackValue: "bpBodystyleInfo"
            },
            color: {
                onclickValue: "bp:select colour info",
                propertyName: "extIntColour",
                trackValue: "bpColourInfo"
            },
            trim: {
                onclickValue: "bp:select trim info",
                propertyName: "extIntColour",
                trackValue: "bpTrimInfo"
            },
            extra: {
                onclickValue: "bp:select accessories options info",
                propertyName: "accessories",
                trackValue: "bpAccOptionsInfo"
            },
            capacity: {
                gvm: {
                    value: "payload info",
                    onclick: "bp:select payload info",
                    trackValue: "bpPayloadInfo"
                },
                length: {
                    value: "load length:info",
                    onclick: "bp:select load length height info",
                    trackValue: "bpLoadLengthHeightSelectInfo"
                },
                height: {
                    value: "load height:info",
                    onclick: "bp:select load length height info",
                    trackValue: "bpLoadLengthHeightSelectInfo"
                },
                capacity: !0
            }
        };
    api.handle = function(data) {
        var trackData = configuration[data.selectedFeatureType];
        trackData && (digitaldata.onclick.linkType = "o", trackData.capacity ? function(trackData, data) {
            var capacityData = trackData[data.infoCapacityType];
            capacityData && (digitaldata.onclick.onclick = capacityData.onclick, digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":" + capacityData.value + ":" + (data.nameplate || ""), data.isCapacityCategoryEnabled && (digitaldata.vehicle.payload = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehiclePayload(data), digitaldata.vehicle.loadLengthHeight = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehicleLoadLengthHeight(data)), _satellite.track(capacityData.trackValue))
        }(trackData, data) : function(trackData, data) {
            digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":info:" + (data.nameplate || ""), digitaldata.onclick.onclick = trackData.onclickValue, digitaldata.vehicle[trackData.propertyName] = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPropertiesByString(trackData.dataKeyOverride, "infoFeature.code", data), _satellite.track(trackData.trackValue)
        }(trackData, data))
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {
            handle: function(data) {
                digitaldata.page.pageName = "brand:build:vehicle summary:" + data.nameplate, digitaldata.page.pageNameNoVehicle = "brand:build:vehicle summary", digitaldata.page.siteSection = "build-price", digitaldata.page.hierarchy = "shopping tools:build-price:" + (data.vehicleCategory || "") + ":" + data.nameplate + ":" + data.modelYear, digitaldata.page.siteBusinessUnit = "ford-brand", digitaldata.page.tool = "event: bp complete", digitaldata.page.toolDescriptor = "full build", digitaldata.event.action = "tools|build complete", digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getPTemplate() + ":impress", digitaldata.vehicle.nameplate = data.nameplate, digitaldata.vehicle.modelYear = data.modelYear, digitaldata.vehicle.modelSeries = data.modelSeries ? data.nameplate + ":" + data.modelSeries : data.seriesCode || "", digitaldata.vehicle.extIntColour = (data.extColorCode || "") + (data.trimCode ? ":" + data.trimCode : ""), digitaldata.vehicle.bodystyle = data.bodystyleCode || "", digitaldata.vehicle.accessories = data.accessories || "", digitaldata.vehicle.engineTrans = data.engineTransCode || "", digitaldata.vehicle.price = data.buildPrice || "", _satellite.track("bpComplete")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        api = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), {
            handle: function(data) {
                digitaldata.page.pageName = "brand:build:payment estimator:full quote:" + (data.nameplate || ""), digitaldata.page.pageNameNoVehicle = "brand:build:payment estimator:full quote", digitaldata.event.action = "tools|full payment quote", digitaldata.page.tool = "event:payment estimator:full quote", digitaldata.page.toolDescriptor = (data.creditPlanType || "") + ":" + (data.numberPayments || ""), void 0 === digitaldata.creditProduct && (digitaldata.creditProduct = {}), digitaldata.creditProduct.financePlanType = data.creditPlanType, digitaldata.creditProduct.numberPayments = data.numberPayments, digitaldata.creditProduct.depositAmount = data.deposit, digitaldata.creditProduct.mileage = null !== data.mileage ? data.mileage : "", !0 === data.hasAdditionalFinanceAttributes && (digitaldata.creditProduct.renewal = data.renewalCustomer, digitaldata.creditProduct.residualValue = data.residualPC, digitaldata.creditProduct.documents = data.docType, digitaldata.creditProduct.cpi = data.cpiIncluded), _satellite.track("bpQuoteFullComplete")
            }
        });
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        api = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__), {});
    api.handle = function(data) {
        var str, suffix;
        digitaldata.page.pageNameNoVehicle && (str = digitaldata.page.pageNameNoVehicle, suffix = ":selection conflict", -1 === str.indexOf(suffix, str.length - suffix.length)) && (digitaldata.page.pageNameNoVehicle += ":selection conflict"), digitaldata.page.pageName = (digitaldata.page.pageNameNoVehicle || "") + ":" + (data.nameplate || ""), _satellite.track("bpConflictOverlay")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};

    function handle(data, decision) {
        var str, suffix;
        digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle || "", str = digitaldata.onclick.onclickLinkName, suffix = ":selection conflict", -1 === str.indexOf(suffix, str.length - suffix.length) && (digitaldata.onclick.onclickLinkName += ":selection conflict"), digitaldata.onclick.onclickLinkName += ":" + decision + ":" + (data.nameplate || ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "bp:" + decision + " conflict", digitaldata.vehicle.buildSelectionString = data.buildSelectionString, digitaldata.vehicle.modelSeries = data.modelSeries ? data.nameplate + ":" + data.modelSeries : data.seriesCode || "", _satellite.track("bpConflictDecision")
    }
    api.handleAccept = function(data) {
        data.buildPrice !== data.previousBuildPrice && (digitaldata.vehicle.price = data.buildPrice, data.isCapacityCategoryEnabled && (digitaldata.vehicle.payload = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehiclePayload(data), digitaldata.vehicle.loadLengthHeight = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehicleLoadLengthHeight(data)), digitaldata.vehicle.accessories = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getVehicleAccessories(data)), handle(data, "accept")
    }, api.handleDecline = function(data) {
        handle(data, "decline")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var api = {
        handle: function(data) {
            digitaldata.page.pageName = "brand:build:payment estimator:enter deposit:" + (data.nameplate || ""), digitaldata.page.pageNameNoVehicle = "brand:build:payment estimator:enter deposit", digitaldata.page.hierarchy = "shopping tools:build-price:payment estimator:" + (data.vehicleCategory || "") + ":" + (data.nameplate || "") + ":" + (data.modelYear || ""), digitaldata.event.action = "tools", digitaldata.page.tool = "event:payment estimator:start", void 0 === digitaldata.creditProduct && (digitaldata.creditProduct = {}), digitaldata.creditProduct.financePlanType = data.creditPlanType, digitaldata.creditProduct.numberPayments = data.numberPayments, digitaldata.creditProduct.depositAmount = data.deposit, digitaldata.creditProduct.mileage = null !== data.mileage ? data.mileage : "", !0 === data.hasAdditionalFinanceAttributes && (digitaldata.creditProduct.renewal = data.renewalCustomer, digitaldata.creditProduct.residualValue = data.residualPC, digitaldata.creditProduct.documents = data.docType, digitaldata.creditProduct.cpi = data.cpiIncluded), _satellite.track("bpQuoteStart")
        }
    };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var api = {
        handle: function(data) {
            digitaldata.page.pageName = "brand:build:series:vehicle overlay:" + (data.nameplate || ""), digitaldata.page.pageNameNoVehicle = "brand:build:series:vehicle overlay", _satellite.track("bpSeriesOverlay")
        }
    };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var api = {
        handle: function(data) {
            digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":selected options:info:" + (data.nameplate || ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "bp:selected options info", digitaldata.vehicle.accessories = data.infoFeature && data.infoFeature.code || "", _satellite.track("bpAccOptionsInfo")
        }
    };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var api = {};

    function setData(socialChannelName, shortUrlCode) {
        digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":share:select " + socialChannelName + ":" + (digitaldata.vehicle.nameplate || ""), digitaldata.onclick.linkType = "o", digitaldata.user.referralCode = shortUrlCode || ""
    }
    api.handleSocial = function(data) {
        setData(data.socialChannelName, data.shortUrlCode), digitaldata.onclick.socialChannel = data.socialChannelName, digitaldata.onclick.onclick = "bp:share:select social network", digitaldata.event.action = "social share|tools", digitaldata.page.tool = "event:bp social share:initiate", _satellite.track("bpShareSocial")
    }, api.handleEmail = function(data) {
        setData("email", data.shortUrlCode), digitaldata.onclick.onclick = "bp:share:select email", digitaldata.event.action = "email share|tools", digitaldata.page.tool = "event:bp email share:initiate", _satellite.track("bpShareEmail")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {
            handle: function(data) {
                digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":cta:" + (data.ctaName || "") + ":" + (data.nameplate || ""), digitaldata.onclick.linkType = "o", digitaldata.onclick.onclick = "bp:select cta:" + (data.ctaName || ""), digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = data.contentSubType || "", digitaldata.onclick.contentNameID = "", digitaldata.vehicle.nameplate = data.nameplate || "", digitaldata.vehicle.modelYear = data.modelYear || "", digitaldata.vehicle.modelSeries = data.modelSeries ? data.nameplate + ":" + data.modelSeries : data.seriesCode || "", _satellite.track("moduleInternalCtaClick")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {},
        configuration = {
            series: {
                propertyName: "modelSeries",
                trackValue: "nameplate:modelSeries",
                fallback: "seriesCode"
            }
        };
    api.handle = function(data) {
        var trackData = configuration[data.selectedFeatureType];
        trackData && (digitaldata.vehicle[trackData.propertyName] = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPropertiesByString(trackData.trackValue, trackData.fallback, data))
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {
            handle: function(data) {
                digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":cta:open video:" + data.nameplate, digitaldata.onclick.onclick = "cta click:open video", digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "bp personalised content panel", digitaldata.video.videoName = data.personalisedVideoName, _satellite.track("openVideo")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {
            handle: function(data) {
                digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":video:play:" + data.nameplate, digitaldata.onclick.onclick = "video play", digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.video.videoName = data.personalisedVideoName, digitaldata.video.segmentTime = data.personalisedVideoInformation.currentSecondsPlayed, digitaldata.event.action = data.personalisedVideoInformation.videoPercentagePlayed + "% complete", _satellite.track("videoPlay")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {
            handle: function(data) {
                var videoProgress = "video" + data.personalisedVideoInformation.videoPercentagePlayed;
                digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":video:segments:" + data.nameplate, digitaldata.onclick.onclick = "video " + data.personalisedVideoInformation.videoPercentagePlayed + "%", digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.video.segmentTime = data.personalisedVideoInformation.currentSecondsPlayed, digitaldata.event.action = data.personalisedVideoInformation.videoPercentagePlayed + "% complete", _satellite.track(videoProgress)
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {
            handle: function(data) {
                "brochure" === data.mediaDownloadType ? (digitaldata.onclick.onclickLinkName = "brand:brochure download:vehicle:personalised brochure:" + data.nameplate, digitaldata.onclick.onclick = "brochure download", digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "bp personalised content panel", digitaldata.page.contentCategory = "vehicle", _satellite.track("brochureDownload")) : "video" === data.mediaDownloadType && (digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":video:download:" + data.nameplate, digitaldata.onclick.onclick = "download video", digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentID = data.personalisedVideoName, digitaldata.video.videoName = data.personalisedVideoName, _satellite.track("videoDownload"))
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {
            handle: function(data) {
                digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":video:share:initiate options:" + data.nameplate, digitaldata.onclick.onclick = "share:initiate options", digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentID = data.personalisedVideoName, _satellite.track("initiateShareOptions")
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {
            handle: function(data) {
                "email" === data.shareServiceName ? (digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":video:share:select email:" + data.nameplate, digitaldata.onclick.onclick = "share:select email", digitaldata.onclick.contentID = data.personalisedVideoName, digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", _satellite.track("selectEmailShare")) : (digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":video:share:select social:" + data.shareServiceName + ":" + data.nameplate, digitaldata.onclick.onclick = "share:select social network", digitaldata.onclick.contentID = data.personalisedVideoName, digitaldata.onclick.socialChannel = data.shareServiceName, digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", _satellite.track("selectSocialShare"))
            }
        };
    __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var api = {};

    function handle(data, error, errorDetail) {
        var nameplate = data.nameplate || "";
        digitaldata.page.pageNameNoVehicle = "brand:build:" + error + ":error", digitaldata.page.pageName = "brand:build:" + error + ":error" + (nameplate ? ":" + nameplate : ""), digitaldata.page.errorTracking = errorDetail ? "build price:" + errorDetail : "build price:" + error + ":bsl failure", digitaldata.vehicle.nameplate = nameplate, _satellite.track("bpError")
    }
    api.handleLoad = function(data) {
        handle(data, "initiate")
    }, api.handleUpdate = function(data) {
        handle(data, digitaldata.page.pageNameNoVehicle.split(":")[2])
    }, api.handleCalculator = function(data) {
        handle(data, "payment estimator:full quote", "payment estimator:cfc calculator failure")
    }, api.handleDefaultQuotes = function(data) {
        handle(data, "payment estimator:full quote", "payment estimator:finance api failure")
    }, api.handleSummary = function(data) {
        handle(data, "vehicle summary")
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__);

    function getNameplate() {
        return digitaldata.vehicle.nameplate || ""
    }
    __webpack_exports__.a = {
        rotateOrSpin: function(data) {
            var isRotate = "rotate" === data.type,
                eventType = "360:" + data.type + (isRotate ? " " + data.direction : ""),
                satelliteEventName = isRotate ? "360Rotate" : "360Spin";
            digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":" + eventType + ":" + data.selectedCategoryCarouselType + ":" + getNameplate(), digitaldata.onclick.onclick = "bp:" + eventType + ":" + data.selectedCategoryCarouselType, digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "360", _satellite.track(satelliteEventName)
        },
        changeView: function(data) {
            var eventType = "360:toggle:" + data.selectedCategoryCarouselType;
            digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":" + eventType + ":" + getNameplate(), digitaldata.onclick.onclick = "bp:" + eventType, digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "360", _satellite.track("360ChangeView")
        },
        maximiseOrMinimise: function(data) {
            var eventType = "360:" + data.galleryViewType + " view:" + data.selectedCategoryCarouselType;
            digitaldata.onclick.onclickLinkName = digitaldata.page.pageNameNoVehicle + ":" + eventType + ":" + getNameplate(), digitaldata.onclick.onclick = "bp:" + eventType, digitaldata.onclick.contentType = "bp:" + __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate() + ":click", digitaldata.onclick.contentSubType = "360", _satellite.track("360ChangeView")
        }
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(7)),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js__),
        api = {};

    function trackEvent(eventName, callRule) {
        ! function(eventName) {
            var pageName = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() + ":calculator:" + eventName,
                modelSeries = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsVariables_js___default.a.getModelSeries();
            digitaldata.page.pageNameNoVehicle = pageName, modelSeries ? pageName += ":" + modelSeries : digitaldata.vehicle.nameplate && (pageName += ":" + digitaldata.vehicle.nameplate);
            digitaldata.page.pageName = pageName
        }(eventName), _satellite.track(callRule)
    }
    api.trackStart = function() {
        delete digitaldata.page.errorTracking, trackEvent("start", "genericCalculatorStart")
    }, api.trackComplete = function() {
        delete digitaldata.page.errorTracking, trackEvent("complete", "genericCalculatorComplete")
    }, api.trackErrors = function(errors) {
        errors && (digitaldata.page.errorTracking = errors.reduce(function(acc, err, idx) {
            return (0 === idx ? "" : acc + ",") + "calculator:" + err.field + ":" + err.description
        }, ""), trackEvent("complete:error", "genericCalculatorError"))
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__ = __webpack_require__(7),
        __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js__),
        api = {};

    function trackFieldInteraction(contex, clickAction, clickActionPostfix, directCallRule, contentSubType) {
        var pageId = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPg() || "",
            pageNameNoVehicle = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getOriginalPgNameNoVehicle() || "",
            pageName = fordAnalytics.pageName,
            pTemplate = __WEBPACK_IMPORTED_MODULE_0_analytics_analyticsVariables_js___default.a.getPTemplate(),
            vehicle = "";
        contex = contex.toLowerCase(), pageName.includes("<modelSeriesName>") && digitaldata.vehicle.modelSeries ? vehicle += ":" + digitaldata.vehicle.modelSeries : pageName.includes("<nameplate>") && digitaldata.vehicle.nameplate && (vehicle += ":" + digitaldata.vehicle.nameplate), digitaldata.onclick.onclick = pageId + ":" + contentSubType + ":" + clickAction + clickActionPostfix + ":" + contex, digitaldata.onclick.onclickLinkName = pageNameNoVehicle + ":" + clickAction + ":" + contex + vehicle, digitaldata.onclick.contentType = pageId + ":" + pTemplate + ":click", digitaldata.onclick.contentSubType = contentSubType, _satellite.track(directCallRule)
    }
    api.trackCalculatorAmend = function(fieldName, contentSubType) {
        trackFieldInteraction(fieldName, "amend", "", "calculatorAmend", contentSubType)
    }, api.trackCalculatorToolTipClick = function(contex, contentSubType) {
        trackFieldInteraction(contex, "tool tip", " click", "moduleToolTipClick", contentSubType)
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var fordjsModule, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        modules = [];

    function initComponent(component, componentElement) {
        var instance, elements = componentElement || document.querySelectorAll(component.selector),
            $elements = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elements);
        if (component.staticInit && component.staticInit(), !component.initElements) return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each($elements, function(element) {
            var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
            if (!$element.hasClass("initialized-" + component.name) || component.isForceInit) try {
                component.init && (instance = component.init(element), component.isForceInit = null, instance && (component.instances.push(instance), component.initializationNotify.notify(instance))), component.callback && component.callback(), $element.addClass("initialized initialized-" + component.name)
            } catch (e) {
                console.error(e)
            }
        }), instance;
        component.initElements(elements)
    }

    function init(options) {
        (options = options || {}).modules = options.modules || modules;
        for (var i = 0; i < options.modules.length; i++) {
            initComponent(options.modules[i])
        }
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("fordjs-loaded")
    }
    document.addEventListener("initFordjs", init), fordjsModule = {
        registerComponent: function(module) {
            module.initializationNotify = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred(), module.instances = [], modules.push(module)
        },
        deregisterComponent: function(module) {
            modules.splice(module, 1)
        },
        extendComponent: function(module, parentModule) {
            parentModule.initializationNotify.promise().then(null, null, function(parentInstance) {
                module.init(parentInstance)
            })
        },
        init: init,
        initOne: function(componentName, componentElement, isForceInit) {
            var component = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(modules, {
                name: componentName
            });
            return component.isForceInit = isForceInit, initComponent(component, componentElement)
        },
        initSingleComponent: function(componentName) {
            var component = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(modules, {
                name: componentName
            });
            initComponent(component, component.node)
        }
    }, __webpack_exports__.default = fordjsModule
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery__ = __webpack_require__(5),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mediaQuery__),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isAuthor__),
        __WEBPACK_IMPORTED_MODULE_5_guxfoe_scroll_global_ux_scroll__ = (__webpack_require__(115), __webpack_require__(25)),
        __WEBPACK_IMPORTED_MODULE_6_guxfoe_brightcove_component_brightcove__ = __webpack_require__(69),
        __WEBPACK_IMPORTED_MODULE_7_analytics_analyticsEventLayer__ = __webpack_require__(3),
        __WEBPACK_IMPORTED_MODULE_8_guxfoe_bestseller_sash_component_bestseller_sash__ = __webpack_require__(87),
        __WEBPACK_IMPORTED_MODULE_9_pubsub__ = __webpack_require__(18),
        __WEBPACK_IMPORTED_MODULE_10_sophusUtil__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_pubsub__), __webpack_require__(68)),
        __WEBPACK_IMPORTED_MODULE_10_sophusUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_sophusUtil__),
        __WEBPACK_IMPORTED_MODULE_11_guxfoe_click_to_call_click_to_call__ = __webpack_require__(88),
        __WEBPACK_IMPORTED_MODULE_12_fordjs__ = __webpack_require__(4),
        __WEBPACK_IMPORTED_MODULE_12_fordjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_fordjs__),
        url = window.location.href,
        overlayIdMax = 1e6,
        refs_dynamicOverlayClass = "link-overlay-dynamic",
        $window = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window),
        overlayTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<div class="overlay-container" data-accordion-body-open="false">     <div class="overlay-content" tabindex="0">        <span class="overlay-close" tabindex="0"><i class="icon-plus icon-x"></i></span>        <div class="overlay-content-inner is-active"></div>    </div>    <div class="overlay-loading">        <div class="loader-icon">            <svg class="circular" viewBox="25 25 50 50">                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>            </svg>        </div>    </div> </div>'),
        getLocation = function(href) {
            var pathname, link = document.createElement("a");
            return link.href = href, 0 !== (pathname = link.pathname).indexOf("/") && (pathname = "/" + pathname), pathname
        },
        selectors = {
            overlayContainer: ".overlay-container",
            overlayClose: ".overlay-close",
            overlayContent: ".overlay-content",
            overlayContentInner: ".overlay-content-inner",
            overlayLoading: ".overlay-loading"
        };

    function Overlay($element) {
        var isElementBody = !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined($element[0]) && "BODY" === $element[0].nodeName;
        this.$html = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html"), this.$body = isElementBody ? $element : __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body"), this.overlay = isElementBody ? $element : this.$body, this.$overlayBox = this.$body.find(".content:first"), this.$item = isElementBody ? $element.find("a.link-overlay, .link-overlay a") : $element, this.$currentItem = null, this.isAuthorMode = __WEBPACK_IMPORTED_MODULE_3_isAuthor___default.a.getAuthorStatus(), this.isSearchOverlay = !1, this.isVideoOverlay = !1, this.isYoutubeOverlay = !1, this.brightcoveCompObj = null, this.isImageOverlay = !1, this.isDynamicOverlay = !1, this.isOverlayVisible = !1, this.isFullScreenOpen = !1, this.scrollTopPosition = 0, this.addBaseUrl(), this.attachLinkEvents(), this.getHashUrl(), this.destroyOverlay = destroyOverlay, this.dynamicOverlayAttributes = {
            imageUrl: !1,
            shortDescription: !1,
            longDescription: !1
        }, this.enabledLinks()
    }

    function assignLinkOrigin($elem, href) {
        $elem.find(selectors.overlayContentInner).data("overlayLinkOrigin", href)
    }

    function destroyOverlay(overlay) {
        return overlay.$item.off(), !!__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.remove(module.instances, function(overlayItem) {
            return overlayItem.idHash === overlay.idHash
        }).length
    }
    Overlay.prototype.enabledLinks = function() {
        (Modernizr._config.enableJSClass || __WEBPACK_IMPORTED_MODULE_0_jquery___default.a) && this.$body.find(".link-overlay").addClass("link-overlay-enabled")
    }, Overlay.prototype.addBaseUrl = function() {
        var urlWithoutOverlay, normalizedUrl = url.replace("#/overlay/", "#overlay/");
        urlWithoutOverlay = -1 !== normalizedUrl.indexOf("#overlay/") ? normalizedUrl.substring(0, normalizedUrl.indexOf("#overlay/")) : url, this.$item.filter(function(i, link) {
            var $link = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(link),
                deepLinking = $link.data("deep-linking"),
                isInitialized = $link.hasClass("initialized");
            return (void 0 === deepLinking || !0 === deepLinking) && !isInitialized
        }).each(function(i, link) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(link).attr("href", urlWithoutOverlay + "#overlay" + getLocation(link.href)).addClass("initialized")
        })
    }, Overlay.prototype.setFavicon = function() {
        var link = __WEBPACK_IMPORTED_MODULE_0_jquery___default()('link[type="image/x-icon"]').remove().attr("href");
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()('<link href="' + link + '" rel="shortcut icon" type="image/x-icon" />').appendTo("head")
    }, Overlay.prototype.getHashUrl = function() {
        var hashWithoutSlash = window.location.hash.replace("#/overlay/", "#overlay/");
        this.hashRoute = hashWithoutSlash, 0 === this.hashRoute.indexOf("#overlay") && "#overlay" !== this.hashRoute && (this.checkContext(this.hashRoute), this.hashRoute = this.hashRoute.replace("#overlay", "") + ".html")
    }, Overlay.prototype.clearHashUrl = function() {
        history.pushState("", document.title, window.location.pathname + window.location.search), this.hashRoute = ""
    }, Overlay.prototype.checkContext = function(hashRoute) {
        var href = hashRoute.split("?"),
            context = this.$item.filter(__WEBPACK_IMPORTED_MODULE_0_jquery___default()('a[href$="' + href[0] + '"]'));
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(context[0]).trigger("click.openOverlay")
    }, Overlay.prototype.prepareLinks = function(event, isNativeClick) {
        var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget),
            deepLinking = $element.data("deep-linking"),
            isClickToCall = "clickToCallContext" === $element.data("context-type"),
            href = function($element) {
                var deepLinking = $element.data("deep-linking"),
                    overlayUrl = $element.data("overlay-url");
                return void 0 !== overlayUrl ? getLocation(overlayUrl) : !1 === deepLinking ? $element.attr("href") : $element.attr("href").substring(1).split(/#overlay/g)[1]
            }($element),
            $linkOverlay = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget).closest(".link-overlay");
        (this.$currentItem = $element, this.isVideoOverlay = $linkOverlay.hasClass("link-overlay-video") || $linkOverlay.hasClass("video-link-overlay"), this.isSearchOverlay = $element.closest(".link-overlay").hasClass("link-overlay-search"), this.isImageOverlay = $element.closest(".link-overlay").hasClass("link-overlay-image"), this.isDynamicOverlay = $element.closest(".link-overlay").hasClass(refs_dynamicOverlayClass), this.isDeeplink = (void 0 === deepLinking || !0 === deepLinking) && !isClickToCall, this.$galleryTriggerReference = this.$currentItem.closest(".gallery-trigger"), this.isDynamicOverlay && (this.dynamicOverlayAttributes = {
            imageUrl: $element.data("imageUrl"),
            shortDescription: $element.data("shortDescription"),
            longDescription: $element.data("longDescription")
        }), !$element.attr("data-is-tracked") && isNativeClick && $element.attr("data-is-tracked", "true"), this.isSearchOverlay && (deepLinking = !1), 0 !== this.$galleryTriggerReference.length && this.$galleryTriggerReference.addClass("is-open"), 0 !== this.$currentItem.closest(".section.hotspots").length) && this.$currentItem.closest(".section.hotspots").addClass("is-open");
        this.isAuthorMode ? window.open(href) : (window.location.search.indexOf("wcmmode=disabled") > -1 && (href += window.location.search), this.getOverlayContent(href, void 0 === deepLinking || !0 === deepLinking))
    }, Overlay.prototype.attachLinkEvents = function() {
        var startX, startY, tap;

        function getCoord(e, c) {
            return /touch/.test(e.type) ? (e.originalEvent || e).changedTouches[0]["page" + c] : e["page" + c]
        }
        this.$item.on("touchstart", function(event) {
            startX = getCoord(event, "X"), startY = getCoord(event, "Y")
        }).on("touchend", function(event) {
            Math.abs(getCoord(event, "X") - startX) < 5 && Math.abs(getCoord(event, "Y") - startY) < 5 && (event.preventDefault(), event.stopPropagation(), this.prepareLinks(event)), tap = !0, setTimeout(function() {
                tap = !1
            }, 500)
        }.bind(this)).off("click.openOverlay").on("click.openOverlay", function(event) {
            if (!tap) {
                var isNativeClick = !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(event.originalEvent);
                this.prepareLinks(event, isNativeClick)
            }
            event.preventDefault(), event.stopPropagation()
        }.bind(this)).on("keydown", function(event) {
            var $element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.currentTarget);
            13 === (event.keyCode || event.which) && (event.preventDefault(), $element.trigger("click"))
        })
    }, Overlay.prototype.attachOverlayEvents = function() {
        var self = this;
        this.$overlayBox.off("click touchstart", selectors.overlayContainer).off("click keydown", selectors.overlayClose).off("click", '.overlay-content a[data-context-type="livechatenabled"]').on("click", '.overlay-content a[data-context-type="livechatenabled"]', function(e) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").trigger("click:overlay:liveChat", e)
        }).on("click", selectors.overlayClose, function(event) {
            event.preventDefault(), event.stopPropagation(), this.hideOverlay()
        }.bind(this)).on("keydown", selectors.overlayClose, function(event) {
            var keyCode = event.keyCode || event.which;
            !this.isOverlayVisible || 27 !== keyCode && 13 !== keyCode || this.hideOverlay()
        }.bind(this)), $window.on("keydown", function(event) {
            9 === event.which && self.isOverlayVisible && setTimeout(function() {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document.activeElement).closest(self.$overlayContainer).length || self.$overlayClose.focus()
            }, 0, !1)
        }), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("overlay:closeOverlay", function() {
            this.hideOverlay()
        }.bind(this))
    }, Overlay.prototype.showLiveChatButtons = function() {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(selectors.overlayContent).find("a[data-context-type=livechatenabled]").each(function(i, link) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(link).addClass("show")
        })
    }, Overlay.prototype.getOverlayContent = function(url, addHashRoute) {
        this.initOverlayContainer(url), this.showLoadingContainer(), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
            type: "GET",
            url: url,
            dataType: "html",
            success: function(response) {
                var content = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(response).find(".content").html();
                this.overlayBuilder(content, url, addHashRoute), this.$overlayClose.blur(), this.setFavicon()
            }.bind(this),
            error: function() {
                this.clearHashUrl(), this.hideOverlay()
            }.bind(this)
        })
    }, Overlay.prototype.initOverlayContainer = function(url) {
        var overlay = this,
            $overlayContainer = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(selectors.overlayContainer),
            saveElementsAndStart = function() {
                overlay.$overlayContainer = this.$body.find(selectors.overlayContainer).eq(0), overlay.$overlayContent = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(selectors.overlayContent), overlay.$overlayContentInner = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(selectors.overlayContentInner), overlay.$overlayLoading = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(selectors.overlayLoading), overlay.$overlayClose = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(selectors.overlayClose), overlay.$overlayContainer.on("click", function(ev) {
                    var $target = ev.target,
                        hasClickedOutside = 0 === __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find($target).length;
                    overlay.isOverlayVisible && hasClickedOutside && overlay.hideOverlay()
                }), overlay.attachOverlayEvents()
            },
            currentHref = url || overlay.$currentItem.attr("href");
        $overlayContainer.length ? (assignLinkOrigin($overlayContainer, currentHref), saveElementsAndStart.call(this), this.$overlayContentInner.empty()) : (this.$overlayBox.append(overlayTemplate), assignLinkOrigin(this.$overlayBox, currentHref), saveElementsAndStart.call(this)), this.$overlayContainer.addClass("visible").removeClass("wizard-overlay"), this.scrollTopPosition = $window.scrollTop(), this.$body.addClass("no-scroll is-overlay-open"), this.$html.addClass("is-overlay-open"), __WEBPACK_IMPORTED_MODULE_5_guxfoe_scroll_global_ux_scroll__.a.preventScrollBody(!0), this.isSearchOverlay && (this.$overlayContainer.addClass("overlay-search"), __WEBPACK_IMPORTED_MODULE_7_analytics_analyticsEventLayer__.a.getSearchEvents().trackSearchOverlayInit()), (this.isImageOverlay || this.isVideoOverlay) && this.$overlayContainer.addClass("overlay-image"), this.isDynamicOverlay && this.$overlayContainer.addClass("overlay-dynamic overlay-image")
    }, Overlay.prototype.hideOverlayOnEscapeKeydown = function(event) {
        var keyCode = event.keyCode || event.which;
        this.isFullScreenOpen && 27 === keyCode ? (this.$body.trigger("hideFullscreen"), this.$body.one("keydown", function(e) {
            this.hideOverlayOnEscapeKeydown(e)
        }.bind(this))) : 27 === keyCode && this.hideOverlay()
    }, Overlay.prototype.showLoadingContainer = function() {
        this.$overlayClose.hide(), this.$overlayContainer.removeClass("overlay-hide"), this.$overlayLoading.show()
    }, Overlay.prototype.overlayBuilder = function(response, url, addHashRoute) {
        var hashRoute = "overlay" + url;
        this.showOverlay(response), addHashRoute && (window.location.hash = hashRoute);
        new function(state, url) {
            var evt = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event("onoverlayload");
            evt.state = state, evt.url = url, __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger(evt)
        }("loaded", url)
    }, Overlay.prototype.getDocumentHeight = function(context) {
        return (context = context || document).height()
    }, Overlay.prototype.setIframeHeight = function(id) {
        var frame = document.getElementById(id) || document.getElementsByTagName("iframe")[0],
            context = frame.contentWindow.document,
            box = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(context).find(".brightcove-player");
        frame.style.height = this.getDocumentHeight(box) + "px"
    }, Overlay.prototype.showOverlay = function(response, url) {
        var mediaType = __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType(),
            isDesktop = "desktop" === mediaType || "xlarge" === mediaType,
            shouldTrack = !!this.$currentItem && this.$currentItem.attr("data-is-tracked"),
            event = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event("overlayOpen", {
                element: this.$overlayContentInner
            }),
            overlay = this;
        if (this.$overlayContainer.on("click", function(ev) {
                var $target = ev.target,
                    hasClickedOutside = 0 === __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).find($target).length;
                overlay.isOverlayVisible && hasClickedOutside && overlay.hideOverlay()
            }), this.isSearchOverlay || this.isImageOverlay || this.isDynamicOverlay || this.isVideoOverlay ? this.$overlayContainer.delay(200).queue(function() {
                this.$overlayContainer.addClass("visible").removeClass("overlay-hide").clearQueue(), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger(event), this.isSearchOverlay && this.$overlayBox.find(".component-search-form .typeahead").focus()
            }.bind(this)) : this.$overlayContainer.delay(0).queue(function() {
                this.$overlayContainer.addClass("visible").removeClass("overlay-hide").clearQueue(), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger(event)
            }.bind(this)), this.isDynamicOverlay) {
            var responseObj = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(response),
                $image = responseObj.find(".image"),
                $imageSrcSet = $image.find("source"),
                $imageSource = $image.find("img"),
                $accordion = responseObj.find(".accordion"),
                $accordionTitle = $accordion.find(".accordion-title"),
                $accordionBody = $accordion.find(".accordion-body");
            $imageSrcSet.attr("srcset", this.dynamicOverlayAttributes.imageUrl), $imageSource.attr("src", this.dynamicOverlayAttributes.imageUrl).one("load", function(event) {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default()(event.target).addClass("loaded"), this.$overlayLoading.hide()
            }.bind(this)).each(function() {
                this.complete && __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).load()
            }), this.dynamicOverlayAttributes.longDescription ? ($accordionTitle.find("h3").text(this.dynamicOverlayAttributes.shortDescription), $accordionBody.find(".richtext p").text(this.dynamicOverlayAttributes.longDescription)) : ($accordion.attr("data-disable-items-activation", "1"), $accordionTitle.empty().append(__WEBPACK_IMPORTED_MODULE_0_jquery___default()("<h3>").text(this.dynamicOverlayAttributes.shortDescription))), response = responseObj
        }
        this.$overlayClose.show().focus(), this.$overlayContainer.animate({
            scrollTop: "0px"
        }, 1);
        try {
            this.$overlayContentInner.append(response)
        } catch (e) {}
        if (this.isVideoOverlay = this.$overlayContentInner.find("video").length > 0, this.isYoutubeOverlay = this.$overlayContentInner.find(".youtube").length > 0, this.isVideoOverlay && (this.$overlayContainer.addClass("overlay-video"), this.brightcoveCompObj = __WEBPACK_IMPORTED_MODULE_6_guxfoe_brightcove_component_brightcove__.a.initOne(this.$overlayContentInner.find(".brightcove"))), this.isYoutubeOverlay) {
            var deferred = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred(),
                $youtubeElement = this.$overlayContainer.find(".youtube");
            this.$overlayContainer.addClass("overlay-video"), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("youtube:createOverlayYoutubeVideo", {
                $iframe: $youtubeElement,
                deferred: deferred
            })
        }
        this.$overlayContent.focus(), this.isOverlayVisible = !0, isDesktop && this.checkOverlaySize(), this.$body.on("keydown.overlay", this.hideOverlayOnEscapeKeydown.bind(this)), __WEBPACK_IMPORTED_MODULE_8_guxfoe_bestseller_sash_component_bestseller_sash__.a.init(), this.isDynamicOverlay || this.$overlayLoading.hide(), 0 === (this.$galleryTriggerReference && this.$galleryTriggerReference.length) && "true" !== shouldTrack && __WEBPACK_IMPORTED_MODULE_7_analytics_analyticsEventLayer__.a.getImageVideoInteractionsEvents().trackOpenMediaInOverlay(function(data) {
            if (data.isImageOverlay) return {
                contentSubType: "image-overlay",
                assetName: data.$overlayContentInner.find("img").attr("title")
            };
            if (data.isVideoOverlay) return {
                contentSubType: "video-overlay",
                assetName: data.$overlayContentInner.find("video").data("video-id")
            };
            if (data.isYoutubeOverlay) return {
                contentSubType: "video-overlay",
                assetName: data.$overlayContentInner.find(".youtube .configuration").data("video-id")
            };
            return {
                contentSubType: null
            }
        }(this)), __WEBPACK_IMPORTED_MODULE_10_sophusUtil___default.a.checkSophus().then(this.showLiveChatButtons.bind(this)), __WEBPACK_IMPORTED_MODULE_11_guxfoe_click_to_call_click_to_call__.a.init(), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("overlay:show")
    }, Overlay.prototype.hideOverlay = function() {
        new function() {
            var evt = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event("overlayclose");
            evt.url = url, __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger(evt)
        };
        this.isVideoOverlay && this.brightcoveCompObj.disposePlayer(), this.isYoutubeOverlay && this.$overlayContainer.find(".youtube").each(function(i, element) {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("youtube:disposeVideo", element)
        }), !this.isSearchOverlay && this.isDeeplink && (window.location.hash = ""), this.$body.off("keydown.overlay"), this.$body.removeClass("no-scroll is-overlay-open"), this.$html.removeClass("is-overlay-open"), __WEBPACK_IMPORTED_MODULE_5_guxfoe_scroll_global_ux_scroll__.a.allowScrollBody(this.scrollTopPosition, !0), this.$overlayContainer && this.$overlayContainer.removeClass("visible").delay(200).queue(function() {
            __WEBPACK_IMPORTED_MODULE_0_jquery___default()(selectors.overlayContent, this).css("width", ""), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this).removeClass("overlay-search overlay-image overlay-dynamic").addClass("overlay-hide").clearQueue()
        }), this.$currentItem && (this.$currentItem.focus(), this.$currentItem = null), this.isOverlayVisible = !1
    }, Overlay.prototype.getElementToResize = function() {
        var $element, $overlay = this.$overlayContent,
            $image = $overlay.find(".image.section picture > img"),
            $video = $overlay.find(".brightcove.section > div"),
            $youtube = $overlay.find(".youtube.section .youtube-player-wrapper");
        return 1 === $image.length ? $element = $image : 1 === $video.length ? $element = $video : 1 === $youtube.length && ($element = $youtube), $element
    }, Overlay.prototype.checkOverlaySize = function() {
        var $overlay = this.$overlayContent,
            $accordion = $overlay.find(".accordion"),
            $element = this.getElementToResize(),
            $contentReady = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
        $accordion.length < 1 && ($accordion = $overlay.find(".box-image-overlay")), $element && $element.length ? $element.on("load", function() {
            $contentReady.resolve()
        }) : $contentReady.resolve(), $contentReady.promise().then(function() {
            var sizeChecker;
            this.$galleryTriggerReference && this.$galleryTriggerReference.length && __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("overlay:widthChange"), $element && 1 === $element.length && (sizeChecker = setInterval(function() {
                var windowHeight, accordionHeight, imageWidth, imageHeight = $element.height();
                imageHeight > 300 && (windowHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).height(), imageHeight + (accordionHeight = $accordion.height()) > windowHeight ? (imageWidth = $element.width(), clearInterval(sizeChecker), this.adjustToScreen(imageWidth, imageHeight, accordionHeight)) : clearInterval(sizeChecker))
            }.bind(this), 100))
        }.bind(this))
    }, Overlay.prototype.adjustToScreen = function(imageWidth, imageHeight, accordionHeight) {
        var newImgWidth, newImgHeight, $overlay = this.$overlayContent,
            initImgWidth = imageWidth,
            initImgHeight = imageHeight,
            windowHeight = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).height(),
            $element = this.getElementToResize();
        newImgHeight = windowHeight - accordionHeight, newImgWidth = Math.floor(initImgWidth * newImgHeight / initImgHeight), $overlay.css({
            width: newImgWidth + "px"
        }), $element.css({
            height: newImgHeight + "px",
            width: "auto"
        }), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("overlay:widthChange", newImgWidth)
    }, module = {
        name: "overlay",
        selector: "body",
        initOne: function($elem) {
            return __WEBPACK_IMPORTED_MODULE_12_fordjs___default.a.initOne(module.name, $elem, !0)
        },
        init: function(element) {
            element = element || __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body");
            var min, max, overlay = new Overlay(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(element));
            return overlay.idHash = (min = 0, max = overlayIdMax, Math.floor(Math.random() * (max - min + 1)) + min), overlay
        }
    }, __WEBPACK_IMPORTED_MODULE_12_fordjs___default.a.registerComponent(module), __webpack_exports__.default = module
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var api = {
        _isPreview: function() {
            return -1 !== window.location.search.indexOf("wcmmode=disabled")
        },
        getAuthorStatus: function() {
            return !("undefined" == typeof CQ || !CQ.WCM || !CQ.WCM.isEditMode(!0))
        },
        keepWcmMode: function(url) {
            return api._isPreview() && url && (url = url.replace(".html", ".html?wcmmode=disabled")), url
        }
    };
    __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        api = {},
        videos = [],
        billboardVideos = [];
    api.addVideo = function(video) {
        video.withinBillboard ? billboardVideos.push(video) : videos.push(video)
    }, api.stopOtherVideos = function(currentVideo) {
        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(videos, function(videoItem) {
            if (videoItem !== currentVideo) {
                var videoObject = videoItem.videoObj || null;
                videoObject && videoObject.pause()
            }
        })
    }, api.getVideoByContainer = function($videoContainer) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(videos, function(item) {
            return item.$element.is($videoContainer)
        })
    }, api.getBillboardVideoByContainer = function($videoContainer) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(billboardVideos, function(item) {
            return item.$element.is($videoContainer)
        })
    }, api.remove = function(videoToRemove) {
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.remove(videos, function(videoItem) {
            return videoItem === videoToRemove
        })
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function BrightcovePoster($element) {
        this.$startImage = $element.find(".start-image"), this.$endImage = $element.find(".end-image"), this.hasStartImage = this.$startImage.children().length > 0, this.hasEndImage = this.$endImage.children().length > 0
    }
    BrightcovePoster.prototype.toggleStartImage = function(show) {
        show ? this.$startImage.show() : this.$startImage.hide()
    }, BrightcovePoster.prototype.toggleEndImage = function(show) {
        show ? this.$endImage.show() : this.$endImage.hide()
    }, BrightcovePoster.prototype.initStartImage = function(startImageClickCallback) {
        this.hasStartImage ? (this.$startImage.find(".component-content").wrap("<a></a>"), this.$startImage.find("a").on("click", function(event) {
            event.preventDefault(), startImageClickCallback()
        })) : this.toggleStartImage(!1)
    }, BrightcovePoster.prototype.initEndImage = function($videoEl, videoObj, endImageClickCallback) {
        var self = this;
        self.hasEndImage ? (self.$endImage.find(".component-content").wrap("<a></a>"), $videoEl.on("ended", function() {
            self.toggleEndImage(!videoObj.isFullscreen_)
        }), self.$endImage.find("a").on("click", function() {
            self.toggleEndImage(!1), endImageClickCallback()
        }), videoObj.on("fullscreenchange", function() {
            self.toggleEndImage(self.shouldDisplayEndImage($videoEl))
        })) : self.hasStartImage && ($videoEl.on("ended", function() {
            self.toggleStartImage(!videoObj.isFullscreen_)
        }), videoObj.on("fullscreenchange", function() {
            self.toggleStartImage(self.shouldDisplayEndImage($videoEl))
        }))
    }, BrightcovePoster.prototype.shouldDisplayEndImage = function($videoEl) {
        var $videoContainer = $videoEl.parent(".video-js");
        return $videoContainer.hasClass("vjs-ended") && !$videoContainer.hasClass("vjs-fullscreen")
    }, __webpack_exports__.a = BrightcovePoster
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

    function BrightcoveCaptionsHander($videoElement, videoObject) {
        this.$videoElement = $videoElement, this.videoObject = videoObject, this.defaultLanguageData = this.$videoElement.attr("data-default-language"), this.defaultLanguageBackupData = this.$videoElement.attr("data-default-language-backup"), this.tracks = this.videoObject.remoteTextTracks()
    }
    BrightcoveCaptionsHander.prototype.handle = function() {
        var captions = this.getSortedCaptions(this.tracks.tracks_),
            defaultLanguage = this.getDefaultLanguage(captions, this.defaultLanguageData, this.defaultLanguageBackupData);
        this.removeExistingCaptions(this.videoObject, this.tracks, this.tracks.length), this.addCaptions(captions, this.videoObject, defaultLanguage), this.defaultToCaptionInCurrentLanguage(this.videoObject, defaultLanguage)
    }, BrightcoveCaptionsHander.prototype.getSortedCaptions = function(tracks) {
        return tracks.filter(function(track) {
            return "captions" === track.kind
        }).sort(function(a, b) {
            return a.label < b.label ? -1 : a.label > b.label ? 1 : 0
        })
    }, BrightcoveCaptionsHander.prototype.removeExistingCaptions = function(videoObject, tracks, tracksLength) {
        for (; tracksLength--;) videoObject.removeRemoteTextTrack(tracks[tracksLength])
    }, BrightcoveCaptionsHander.prototype.addCaptions = function(captions, videoObject, defaultLanguage) {
        captions.forEach(function(caption) {
            videoObject.addRemoteTextTrack({
                kind: caption.kind,
                language: caption.language,
                label: caption.label,
                src: caption.src,
                default: caption.language === defaultLanguage
            })
        })
    }, BrightcoveCaptionsHander.prototype.getDefaultLanguage = function(captions, defaultLanguageData, defaultLanguageBackupData) {
        var result;
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(captions, {
            language: defaultLanguageData
        }) ? result = defaultLanguageData : __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(captions, {
            language: defaultLanguageBackupData
        }) && (result = defaultLanguageBackupData), result
    }, BrightcoveCaptionsHander.prototype.defaultToCaptionInCurrentLanguage = function(videoObject, defaultLanguage) {
        var defaultLanguageTrack = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(videoObject.textTracks(), {
            language: defaultLanguage
        });
        defaultLanguageTrack && (defaultLanguageTrack.mode = "showing")
    }, __webpack_exports__.a = BrightcoveCaptionsHander
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_3_guxfoe_click_to_call_click_to_call_app__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__), __webpack_require__(53)),
        __WEBPACK_IMPORTED_MODULE_4_isAuthor__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_4_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_isAuthor__),
        __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__ = __webpack_require__(3),
        successCode = 200,
        isAuthorMode = __WEBPACK_IMPORTED_MODULE_4_isAuthor___default.a.getAuthorStatus();

    function ClickToCallMainController($scope, $element, clickToCallService, CONFIGURATION) {
        this.isValid = null, this.isInOvelay = $element.closest(".overlay-container").length, this.$resetButton = $element.find('[data-context-type="clickToCallTryAgain"]'), this.$closeButton = $element.find('[data-context-type="closeOverlay"]'), this.inputValidation = {
                phone: [{
                    type: "required",
                    message: CONFIGURATION.errorMessageMandatory,
                    isValid: !1
                }, {
                    type: "regex",
                    message: CONFIGURATION.errorMessageInvalid,
                    isValid: !1,
                    regex: CONFIGURATION.phoneRegex
                }]
            }, this.setAnalyticsVariables = function() {
                __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getClickToCallEvents().setAnalyticsVariables(CONFIGURATION.analytics)
            }, this.isFieldValid = function(field) {
                return clickToCallService.isFieldValid(this.inputValidation[field])
            }, this.isStep = {
                form: function() {
                    return !this.isFormSubmitted || !this.isValid || isAuthorMode
                }.bind(this),
                success: function() {
                    return this.isSuccess && this.isFormSubmitted || isAuthorMode
                }.bind(this),
                error: function() {
                    return (this.isError || this.isServerError) && this.isFormSubmitted || isAuthorMode
                }.bind(this)
            }, this.onSubmit = function(e) {
                if (e.preventDefault(), this.setAnalyticsVariables(), this.isValid = clickToCallService.isFormValid(this.inputValidation) && this.clickToCallForm.$dirty, $scope.$broadcast("submit"), this.isFormSubmitted = !0, this.isValid) __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getClickToCallEvents().trackSubmit(), clickToCallService.sendRequest(this.phoneNumber).then(this.handleSuccessCall.bind(this), this.handleErrorCall.bind(this));
                else {
                    var reasons = this.fieldValidationErrorTypes($scope.vm.inputValidation.phone);
                    __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getClickToCallEvents().trackValidationError("phone number", reasons.join())
                }
            }, this.handleSuccessCall = function(response) {
                this.isSuccess = response.data.code === successCode && response.data.leadId, this.isError = !this.isSuccess, this.isError ? __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getClickToCallEvents().trackFormError() : __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getClickToCallEvents().trackSuccess()
            }, this.handleErrorCall = function(response) {
                this.isServerError = !0, __WEBPACK_IMPORTED_MODULE_5_analytics_analyticsEventLayer__.a.getClickToCallEvents().trackFormError()
            }, this.resetForm = function() {
                this.clickToCallForm && this.clickToCallForm.$setPristine(), this.isFormSubmitted = !1, this.isSuccess = !1, this.isError = !1, this.isServerError = !1, this.phoneNumber = "", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(this.inputValidation, function(fieldType) {
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(fieldType, function(field) {
                        field.isValid = !1, field.isDirty = !1
                    })
                })
            }, this.attachEvents = function() {
                this.$resetButton.on("click", function(e) {
                    e.preventDefault(), $scope.$apply(this.resetForm.bind(this))
                }.bind(this)), this.$closeButton.on("click", function(e) {
                    e.preventDefault(), $scope.$apply(this.resetForm.bind(this)), this.isInOvelay && __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("overlay:closeOverlay")
                }.bind(this))
            }, this.fieldValidationErrorTypes = function(validationResult) {
                return validationResult.filter(function(val) {
                    return !val.isValid
                }).map(function(val) {
                    return "required" === val.type ? "no entry" : "invalid entry"
                }).filter(function(val, index, self) {
                    return self.indexOf(val) === index
                })
            },
            function() {
                this.resetForm(), this.attachEvents()
            }.bind(this)()
    }
    __WEBPACK_IMPORTED_MODULE_3_guxfoe_click_to_call_click_to_call_app__.a.controller("ClickToCallMainController", ["$scope", "$element", "clickToCallService", "CONFIGURATION", ClickToCallMainController])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_guxfoe_click_to_call_click_to_call_app_js__ = __webpack_require__(53);
    __WEBPACK_IMPORTED_MODULE_2_guxfoe_click_to_call_click_to_call_app_js__.a.service("clickToCallService", ["$http", "$sce", "CONFIGURATION", function($http, $sce, configuration) {
        var url = $sce.trustAsResourceUrl(configuration.endpointUrl);
        return {
            sendRequest: function(phoneNumber) {
                var data = {
                    idTag: configuration.idTag,
                    phone: phoneNumber,
                    term: configuration.term || "",
                    name: "",
                    IdConcesion: "",
                    NombreConcesion: "",
                    idlead: "",
                    medium: "GUX",
                    ELanding: "",
                    campaign: configuration.campaign,
                    format: "jsonp",
                    country: configuration.country,
                    source: configuration.source
                };
                return configuration.isSendingContent && (data.content = window.location.href.split("#overlay")[0]), $http.jsonp(url, {
                    params: data,
                    jsonpCallbackParam: "callback"
                })
            },
            validators: {
                required: function(value) {
                    return "" !== value
                },
                isNumber: function(value) {
                    return new RegExp(/^\d+$/).test(value)
                },
                length: function(value, param) {
                    return value.length === param
                },
                regex: function(value, _regex) {
                    return new RegExp(_regex).test(value)
                }
            },
            handleValidation: function(value, rule) {
                var validationTypes = rule.type.split("|");
                return rule.isValid = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(validationTypes, function(isValid, type) {
                    return this.validators[type](value, rule[type]) && isValid
                }.bind(this), !0), rule.isDirty = !0, rule
            },
            validate: function(rules, value) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(rules, function(isValid, rule) {
                    return this.handleValidation(value, rule).isValid && isValid
                }.bind(this), !0)
            },
            isFieldValid: function(field) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(field, function(isFieldValid, type) {
                    return isFieldValid && type.isValid
                }, !0)
            },
            isFormValid: function(fields) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(fields, function(isFormValid, field) {
                    return this.isFieldValid(field) && isFormValid
                }.bind(this), !0)
            }
        }
    }]);
    __WEBPACK_IMPORTED_MODULE_2_guxfoe_click_to_call_click_to_call_app_js__.a
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_1_guxfoe_click_to_call_click_to_call_app_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__), __webpack_require__(53));
    __WEBPACK_IMPORTED_MODULE_1_guxfoe_click_to_call_click_to_call_app_js__.a.directive("clickToCallValidation", ["clickToCallService", function(clickToCallService) {
        return {
            restrict: "A",
            scope: {
                clickToCallValidation: "=",
                ngModel: "="
            },
            link: function(scope, element) {
                function validate() {
                    scope.isValid = clickToCallService.validate(scope.clickToCallValidation, scope.ngModel), element.toggleClass("error", !scope.isValid)
                }
                scope.$on("submit", validate), element.on("blur", function() {
                    scope.$apply(validate)
                })
            }
        }
    }]);
    __WEBPACK_IMPORTED_MODULE_1_guxfoe_click_to_call_click_to_call_app_js__.a
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var disclosureType, disclosureTitle, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_isAuthor__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_2_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isAuthor__),
        __WEBPACK_IMPORTED_MODULE_3_fordjs__ = __webpack_require__(4),
        __WEBPACK_IMPORTED_MODULE_4_guxfoe_tooltip_component_tooltip__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_fordjs__), __webpack_require__(21)),
        __WEBPACK_IMPORTED_MODULE_4_guxfoe_tooltip_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_guxfoe_tooltip_component_tooltip__),
        __WEBPACK_IMPORTED_MODULE_5_mediaQuery__ = __webpack_require__(5),
        __WEBPACK_IMPORTED_MODULE_5_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mediaQuery__),
        api = {},
        disclosuresLibraryMap = {},
        disclosureBoxItemTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<li data-disclosure="${key}"><span>[${key}]</span>${value}</div></li>'),
        usedDisclosures = {},
        disclosuresMap = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred(),
        isPublishMode = !__WEBPACK_IMPORTED_MODULE_2_isAuthor___default.a.getAuthorStatus(),
        created = !1;

    function bindScrollToDisclosure($disclosure) {
        $disclosure.on("click.disclosure", function(e) {
            scrollOnClickPress($disclosure, e)
        }), $disclosure.on("keyup.disclosure", function(e) {
            13 === e.which && scrollOnClickPress($disclosure, e)
        })
    }

    function bindShowDisclosureTooltip($disclosure, title) {
        $disclosure.on("click.disclosure", function(e) {
            $disclosure.is(e.target) && (e.stopPropagation(), showOnClickPress($disclosure, title))
        }), $disclosure.on("keyup.disclosure", function(e) {
            13 === e.which && showOnClickPress($disclosure, title)
        })
    }

    function scrollOnClickPress($disclosure, e) {
        var $disclosuresRef, $disclosureTextBox, posTop, relativePosTop, bodyScrollTopValue, $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body"),
            disclosureSeq = $disclosure.data("disclosure"),
            $disclosureBox = $body.find(".disclosure-accordion"),
            $nav = $body.find(".secondaryNavigation > .navigation"),
            navHeight = $nav.height();
        $disclosuresRef = $disclosureBox.find("li[data-disclosure]"), $disclosureTextBox = $disclosureBox.find(".disclosure-text"), $disclosureBox.hasClass("collapsed") && $disclosureBox.removeClass("collapsed"), $disclosureTextBox.animate({
            scrollTop: 0
        }, 0), $disclosuresRef.each(function() {
            var $menuBackdrop, $siteLinks, $category, $accordionContent, $accordionContentWrapper, $disclosureRef = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
            if ($disclosureRef.removeClass("is-active"), $disclosureRef.data("disclosure") === disclosureSeq) {
                var disclosureRefOffset = $disclosureRef.offset().top,
                    disclosureBoxOffset = $disclosureTextBox.offset().top;
                posTop = disclosureBoxOffset - navHeight, relativePosTop = disclosureRefOffset - disclosureBoxOffset, $disclosureRef.addClass("is-active"), $menuBackdrop = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".vehicle-menu-backdrop"), $siteLinks = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".site-links"), $category = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".category-open"), $accordionContent = $category.find(".expanded"), $accordionContentWrapper = $accordionContent.find(".accordion-content-wrapper"), $siteLinks.find(".site-link-open").removeClass("site-link-open"), $category.removeClass("category-open").find("a:not(a.model-shot-link),sup").attr("tabindex", "-1"), $accordionContent.removeClass("expanded"), "mobile" === __WEBPACK_IMPORTED_MODULE_5_mediaQuery___default.a.getMediaType() && $accordionContentWrapper.height(0), $category.css({
                    "min-height": "0",
                    height: "0"
                }), $siteLinks.removeClass("has-open-category"), $menuBackdrop.addClass("is-hidden-backdrop")
            }
            $disclosureRef.hasClass("is-active") && "keypress" === e.type && $disclosureRef.trigger("focus")
        }), $disclosureTextBox.hasClass("no-scroll") ? (bodyScrollTopValue = $disclosureBox.find('li[data-disclosure="' + $disclosure.context.innerText + '"]').offset().top, $nav.hasClass("fixed") || (bodyScrollTopValue -= navHeight)) : bodyScrollTopValue = posTop, bodyScrollTopValue -= 70, $body.animate({
            scrollTop: bodyScrollTopValue
        }, 300), $disclosureTextBox.animate({
            scrollTop: relativePosTop
        }, 300)
    }

    function showOnClickPress($disclosure, title) {
        var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("html, body"),
            disclosureSeq = $disclosure.data("disclosure"),
            disclosureText = "";
        $body.find(".disclosure-accordion li[data-disclosure]").each(function() {
            var $disclosureRef = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this);
            $disclosureRef.data("disclosure").toString() === disclosureSeq.toString() && (disclosureText = $disclosureRef.html())
        }), __WEBPACK_IMPORTED_MODULE_4_guxfoe_tooltip_component_tooltip___default.a.showTooltip($disclosure, title, disclosureText)
    }

    function fillDisclosureBox($disclosureBox, $disclosuresList, $disclosures) {
        (function($disclosures) {
            var $genericDisclosure = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".disclosure-generic");
            return $disclosures.length > 0 || $genericDisclosure.children().length > 0
        })($disclosures) && (updateDisclosureBox($disclosuresList, $disclosures), isPublishMode && $disclosureBox.removeClass("hidden"))
    }

    function updateDisclosureBox($disclosuresList, $disclosures) {
        $disclosures.each(function(index) {
            var $disclosure = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(this),
                dataAttribute = $disclosure.attr("data-disclosure"),
                boxDisclosure = disclosuresLibraryMap[dataAttribute],
                newDataAttribute = isPublishMode ? boxDisclosure.number : dataAttribute;
            usedDisclosures[dataAttribute] ? isPublishMode && updateDisclosureSuperScript($disclosure, usedDisclosures[dataAttribute]) : (! function($disclosuresList, attribute, text) {
                var disclosureElement = disclosureBoxItemTemplate({
                    key: attribute,
                    value: text
                });
                $disclosuresList.append(disclosureElement)
            }($disclosuresList, newDataAttribute, boxDisclosure.text), isPublishMode && updateDisclosureSuperScript($disclosure, newDataAttribute), usedDisclosures[dataAttribute] = boxDisclosure.number)
        }), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("disclosure:updateDisclosuresLibraryMap", disclosuresLibraryMap)
    }

    function buildUniqueDisclosureLibraryMap($disclosures) {
        var disclosureData = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("span[data-disclosures-json]").data("disclosures-json"),
            data = function(data) {
                var map = {},
                    disclosures = data.disclosures;
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(disclosures, function(item) {
                    map[item.name] = item.text
                }), map
            }(disclosureData),
            unique = function($disclosures) {
                var unique = [];
                return __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each($disclosures, function(i, el) {
                    var attr = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(el).attr("data-disclosure");
                    attr && -1 === __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.inArray(attr, unique) && unique.push(attr)
                }), unique
            }($disclosures),
            enumerators = disclosureData.enumerators,
            keyToValueMap = {};
        if (0 === enumerators.length) __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(unique, function(index) {
            keyToValueMap[this] = {
                number: index + 1
            }
        });
        else {
            var undefinedIndex = 1;
            __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(unique, function(index) {
                index < enumerators.length ? keyToValueMap[this] = {
                    number: String(enumerators[index])
                } : (keyToValueMap[this] = {
                    number: "undefined" + undefinedIndex
                }, undefinedIndex++)
            })
        }
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.each(data, function(key) {
            keyToValueMap[key] && (keyToValueMap[key].text = this)
        }), disclosuresMap.resolve(keyToValueMap), keyToValueMap
    }

    function updateDisclosureSuperScript($sup, indexData) {
        return $sup.data("disclosure", indexData), $sup.html(indexData), $sup.css({
            display: "inline"
        }), $sup
    }

    function initOne($element, forceReinit) {
        if (!$element.hasClass("initialized") || forceReinit) {
            var forceOverlayType = $element.data("disclosure-force-mobile-tooltip") && __WEBPACK_IMPORTED_MODULE_5_mediaQuery___default.a.mobile.matches;
            "overlay" === disclosureType || forceOverlayType ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(disclosureTitle) ? (api.init(), initOne($element)) : bindShowDisclosureTooltip($element, disclosureTitle) : bindScrollToDisclosure($element), isPublishMode && __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").find(".disclosure-accordion").removeClass("hidden"), $element.addClass("initialized"), api.notBreakableDisclosure($element)
        }
    }

    function applyNewDisclosure($disclosures, $sup, disclosureKey) {
        $sup.attr("data-disclosure", disclosureKey),
            function($disclosures) {
                var $disclosureBox = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body").find(".disclosure-accordion"),
                    $disclosuresList = $disclosureBox.find(".disclosure-list");
                disclosureType = $disclosureBox.find("span[data-disclosures-show-mode]").data("disclosures-show-mode"), disclosuresLibraryMap = buildUniqueDisclosureLibraryMap($disclosures), $disclosures = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter($disclosures, function(disclosure) {
                    var result = !0,
                        $disclosure = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(disclosure),
                        dataAttribute = $disclosure.attr("data-disclosure"),
                        disclosureText = disclosuresLibraryMap[dataAttribute];
                    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(disclosureText) && (result = !1, $disclosure.remove()), result
                })), usedDisclosures = {}, $disclosuresList.empty(), updateDisclosureBox($disclosuresList, $disclosures), $disclosures.each(function() {
                    initOne(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this))
                })
            }($disclosures)
    }
    api.initOne = function($sup, disclosureKey, forceReinit) {
        var $disclosures = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("sup[data-disclosure]");
        $disclosures.index($sup) === $disclosures.length - 1 || function($disclosures, $sup, disclosureKey) {
            var isSame = !1,
                prevIndex = $disclosures.index($sup) - 1;
            prevIndex > 0 && __WEBPACK_IMPORTED_MODULE_0_jquery___default()($disclosures[prevIndex]).attr("data-disclosure") === disclosureKey && (isSame = !0);
            return isSame
        }($disclosures, $sup, disclosureKey) ? usedDisclosures[disclosureKey] ? (updateDisclosureSuperScript($sup, isPublishMode ? usedDisclosures[disclosureKey] : disclosureKey), initOne($sup, forceReinit)) : applyNewDisclosure($disclosures, $sup, disclosureKey) : applyNewDisclosure($disclosures, $sup, disclosureKey);
        return $sup
    }, api.updateEventHandlers = function($sup) {
        var forceOverlayType = $sup.data("disclosure-force-mobile-tooltip") && __WEBPACK_IMPORTED_MODULE_5_mediaQuery___default.a.mobile.matches;
        $sup.off(".disclosure"), "overlay" === disclosureType || forceOverlayType ? bindShowDisclosureTooltip($sup, disclosureTitle) : bindScrollToDisclosure($sup)
    }, api.isInitialized = function() {
        return created
    }, api.getDisclosureMap = disclosuresMap.promise(), api.destroyAllDisclosures = function() {
        if (!created) return !1;
        var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body"),
            $disclosureBox = $body.find(".disclosure-accordion");
        return isPublishMode && $disclosureBox.addClass("hidden"), $disclosureBox.find(".disclosure-list").empty(), $disclosureBox.find(".disclosure-heading").off("click").off("keyup"), $body.find("sup[data-disclosure]").removeClass("initialized"), usedDisclosures = {}, created = !1, !0
    }, api.notBreakableDisclosure = function($element) {
        var prevElem;
        if ($element.hasClass("dont-break")) {
            var createLastWordSupWrapper = function($elemToPrepend) {
                $element.wrap('<span class="last-word-sup-wrapper"></span>').parent().prepend($elemToPrepend)
            };
            if ((prevElem = $element.prev()).hasClass("attr-suffix")) {
                var prevElemTxt = prevElem.text().split(" "),
                    prevElemTxtLastWord = prevElemTxt.pop();
                prevElem.html(prevElemTxt.join(" ") + " "), createLastWordSupWrapper(prevElemTxtLastWord)
            } else prevElem.hasClass("attr-value") && createLastWordSupWrapper(prevElem)
        }
    }, api.reinitAllDisclosures = function() {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.when(api.destroyAllDisclosures()).done(function() {
            api.init()
        })
    }, api.init = function() {
        var $body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body"),
            $disclosureBox = $body.find(".disclosure-accordion"),
            $disclosuresList = $disclosureBox.find(".disclosure-list"),
            $heading = $disclosureBox.find(".disclosure-heading"),
            $disclosures = $body.find("sup[data-disclosure]:not(.initialized)"),
            $disclosureText = $disclosureBox.find(".disclosure-text"),
            disclosureScrollDisabled = $disclosureBox.find("span[data-disclosures-scroll-disabled]").data("disclosures-scroll-disabled"),
            isHeaderVisible = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".main-nav").is(":visible");
        disclosureType = $disclosureBox.find("span[data-disclosures-show-mode]").data("disclosures-show-mode"), disclosureTitle = $disclosureBox.find("span[data-disclosures-overlay-heading]").data("disclosures-overlay-heading"), disclosuresLibraryMap = buildUniqueDisclosureLibraryMap($disclosures), $disclosures = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter($disclosures, function(disclosure) {
            var result = !0,
                $disclosure = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(disclosure),
                dataAttribute = $disclosure.attr("data-disclosure"),
                disclosureText = disclosuresLibraryMap[dataAttribute],
                belongsToHeader = $disclosure.parents(".main-nav").length;
            return (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(disclosureText) || belongsToHeader > 0 && !isHeaderVisible) && (result = !1, $disclosure.remove()), $disclosure.hasClass("initialized") && (result = !1), result
        })), api.isInitialized() || function($heading, $disclosureBox) {
            $heading.on("click", function() {
                $disclosureBox.hasClass("collapsed") ? $disclosureBox.removeClass("collapsed") : $disclosureBox.addClass("collapsed")
            }), $heading.on("keyup", function(e) {
                13 === e.which && $heading.trigger("click")
            })
        }($heading, $disclosureBox), fillDisclosureBox($disclosureBox, $disclosuresList, $disclosures), created = !0, $disclosures.each(function() {
            initOne(__WEBPACK_IMPORTED_MODULE_0_jquery___default()(this))
        }), disclosureScrollDisabled && $disclosureText.addClass("no-scroll")
    }, __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("bnp:reinitDisclosures", api.reinitAllDisclosures), __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery__ = __webpack_require__(5),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mediaQuery__),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_3_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isAuthor__),
        __WEBPACK_IMPORTED_MODULE_4_fordjs__ = __webpack_require__(4),
        __WEBPACK_IMPORTED_MODULE_4_fordjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fordjs__),
        __WEBPACK_IMPORTED_MODULE_5_pubsub__ = __webpack_require__(18),
        __WEBPACK_IMPORTED_MODULE_6_configurationProvider__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pubsub__), __webpack_require__(6)),
        __WEBPACK_IMPORTED_MODULE_6_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_configurationProvider__),
        __WEBPACK_IMPORTED_MODULE_7_stickyItemService__ = __webpack_require__(33),
        __WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil__ = __webpack_require__(52),
        __WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil__),
        CONST = (__webpack_require__(37), {
            className: {
                collapsed: "collapsed",
                fixed: "fixed",
                navOpen: "navOpen",
                noScroll: "body-lock",
                approvedUsed: "secondary-navigation-approved-used"
            },
            selector: {
                approvedUsed: ".secondary-navigation-approved-used",
                navigationButton: ".dropdown-navigation-button"
            }
        });

    function SecondaryNavigation(element) {
        var $wrapperElem, approvedUsedElem;
        this.$el = $(element), this.$body = $("body"), this.currentUrl = __WEBPACK_IMPORTED_MODULE_6_configurationProvider___default.a.get($("#global-market-configuration")).currentPagePath, this.expandedVerticalNav = !1, this.expandedTertiaryNav = !1, this.isDropdownExpand = !1, this.isAuthorMode = __WEBPACK_IMPORTED_MODULE_3_isAuthor___default.a.getAuthorStatus(), this.scrollTopValue = 0, this.mobileBreakpoints = ["mobile", "tablet"], this.bindUIElements(), this.addTertiaryNav(), this.setActiveLink(), this.setTabIndex(), this.setNavigationHeight(), this.addMenu(), this.setNavByMedia(__WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType()), this.getSecNavContainerInnerHeight(), this.bindUIEvents(), this.applyMobileViewIfNotFit(), $wrapperElem = this.$el, (approvedUsedElem = $wrapperElem.find(CONST.selector.approvedUsed)).length && (approvedUsedElem.removeClass(CONST.className.approvedUsed), $wrapperElem.addClass(CONST.className.approvedUsed))
    }
    SecondaryNavigation.prototype.bindUIElements = function() {
        this.$window = $(window), this.$body = $("body"), this.$mainNav = $(".main-nav"), this.$secNavContainer = $(".section.secondaryNavigation"), this.$overlayContentInner = this.$secNavContainer.closest(".content"), this.$secNav = this.$el.find(".navigation"), this.$navigationRowInner = this.$el.find(".navigation-row-inner"), this.$verticalNav = this.$el.find(".navigation-vertical"), this.$navLinks = this.$verticalNav.find("a"), this.$horizontalNav = this.$el.find(".navigation-horizontal"), this.$subVerticalNav = this.$verticalNav.find("li ul"), this.$horizontalNavElements = this.$horizontalNav.find("li"), this.$subVerticalNavParent = this.$subVerticalNav.parent(), this.$navigationButton = this.$secNav.find(CONST.selector.navigationButton), this.isForceMobileViewEnabled = !1, this.$tertiaryNav = null, this.$verticalNav.find("h1").length > 0 ? this.$verticalNavHeader = this.$verticalNav.find("h1") : this.$verticalNavHeader = this.$verticalNav.find("h2"), this.$verticalNavHeader.length && (this.$verticalNavHeaderMobile = this.$verticalNavHeader.clone().addClass("mobile-only"), this.$secNavContainer.prepend(this.$verticalNavHeaderMobile)), this.showMenu = !1, 0 !== this.$navigationButton.length && (this.showMenu = !0)
    }, SecondaryNavigation.prototype.isForceMobileView = function() {
        var isMobile = this.mobileBreakpoints.includes(__WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType()),
            horizontalWidth = this.$horizontalNav.width(),
            elementsWidth = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(this.$horizontalNavElements, function(result, element) {
                return result + Math.floor(element.getBoundingClientRect().width)
            }, 0);
        return !isMobile && elementsWidth > horizontalWidth
    }, SecondaryNavigation.prototype.applyMobileViewIfNotFit = function() {
        this.isForceMobileView() && (this.$horizontalNav.add(this.$navigationButton).addClass("is-force-mobile"), this.$horizontalNav.addClass("collapsed"), this.$window.off(".navigationFit"), this.isForceMobileViewEnabled = !0)
    }, SecondaryNavigation.prototype.tertiaryNavTemplate = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<div class="tertiary-navigation navigation-vertical columns collapsed"><h2><%= headerText %></h2><ul><%= subnav %></ul></div>'), SecondaryNavigation.prototype.bindUIEvents = function() {
        this.$tertiaryNav = this.$secNav.find(".tertiary-navigation"), this.$window.on("resize", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.throttle(function() {
            this.setNavigationHeight(), this.getSecNavContainerInnerHeight()
        }, 300).bind(this)), this.$window.on("resize.navigationFit", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(this.applyMobileViewIfNotFit.bind(this), 300)), $.subscribe("mediaQuery:change", function() {
            this.setNavByMedia(__WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType())
        }.bind(this)), this.isAuthorMode || this.$window.on("scroll", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.throttle(function() {
            this.stickyNav()
        }, 100).bind(this)), this.$verticalNavHeader.on("click", function(e) {
            this.handleSecondaryNavToggle(e)
        }.bind(this)), this.$verticalNavHeaderMobile && this.$verticalNavHeaderMobile.on("click", function(e) {
            this.handleSecondaryNavToggle(e)
        }.bind(this)), this.$body.on("click", function(event) {
            this.expandedVerticalNav && !$(event.target).closest(".secondaryNavigation").length ? this.handleSecondaryNavToggle(event) : this.expandedTertiaryNav ? this.handleTertiaryNavToggle(event) : this.isDropdownExpand && !$(event.target).closest(".navigation-horizontal").length && this.navigationToggle(event)
        }.bind(this)), this.$navLinks.on("click", function(event) {
            $(event.target).attr("href") === window.location.pathname + window.location.hash && this.handleSecondaryNavToggle(event)
        }.bind(this)), this.$tertiaryNav.on("click", "h2", function(e) {
            this.handleTertiaryNavToggle(e)
        }.bind(this)), this.$tertiaryNav.on("keyup", function(e) {
            13 === (e.keyCode || e.which) && this.handleTertiaryNavToggle(e)
        }.bind(this)), this.$subVerticalNavParent.on("click", function(e) {
            "SPAN" === e.target.tagName && (e.stopPropagation(), this.$subVerticalNavParent.toggleClass("open"))
        }.bind(this)), this.$verticalNavHeader.on("keydown", function(e) {
            13 === e.which && this.handleSecondaryNavToggle(e)
        }.bind(this)), this.$navigationButton.on("click", this.navigationToggle.bind(this)), $.subscribe("extraNavigation:open", this.closeAllNavigation.bind(this))
    }, SecondaryNavigation.prototype.closeAllNavigation = function() {
        this.closeSmallNavigation(), this.closeSecondNavigation()
    }, SecondaryNavigation.prototype.closeSmallNavigation = function() {
        "tablet" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() && (this.isDropdownExpand = !1, this.$horizontalNav.addClass(CONST.className.collapsed))
    }, SecondaryNavigation.prototype.closeSecondNavigation = function() {
        this.expandedVerticalNav = !1, this.$verticalNav.addClass(CONST.className.collapsed), this.$secNavContainer.removeClass(CONST.className.navOpen)
    }, SecondaryNavigation.prototype.navigationToggle = function(e) {
        e.preventDefault(), e.stopPropagation(), this.isDropdownExpand = !this.isDropdownExpand, this.$horizontalNav.toggleClass(CONST.className.collapsed), this.isDropdownExpand && (this.closeSecondNavigation(), $.publish("secondaryNavigation:open", this.isDropdownExpand))
    }, SecondaryNavigation.prototype.handleSecondaryNavToggle = function(e) {
        e.stopPropagation(), this.$verticalNav.toggleClass(CONST.className.collapsed), this.$secNavContainer.toggleClass(CONST.className.navOpen), this.expandedTertiaryNav && this.handleTertiaryNavToggle(e), "mobile" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() && this.$horizontalNav.toggleClass(CONST.className.collapsed), this.expandedVerticalNav = !this.expandedVerticalNav, this.expandedVerticalNav && (this.closeSmallNavigation(), $.publish("secondaryNavigation:open", this.expandedVerticalNav))
    }, SecondaryNavigation.prototype.handleTertiaryNavToggle = function(e) {
        e.stopPropagation(), this.$tertiaryNav.toggleClass(CONST.className.collapsed), this.expandedVerticalNav && this.handleSecondaryNavToggle(e), this.expandedTertiaryNav = !this.expandedTertiaryNav
    }, SecondaryNavigation.prototype.setActiveLink = function() {
        var currUrl = this.currentUrl;
        $.each(this.$verticalNav.find("li"), function(id, el) {
            $(el).find("a:first-child").attr("href") === currUrl && $(el).addClass("active")
        })
    }, SecondaryNavigation.prototype.setTabIndex = function() {
        this.$verticalNavHeader.attr("tabindex", 0), $(".tertiary-navigation").find("h2").attr("tabindex", 0)
    }, SecondaryNavigation.prototype.stickyNav = function() {
        var $physicalHeightElem = "mobile" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() ? this.$verticalNavHeaderMobile : this.$secNav;
        this.scrollTopValue = this.$window.scrollTop(), this.scrollTopValue > __WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil___default.a.getHeightOfHeader() + __WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil___default.a.getHeightOfComponentsAboveHeader() ? (this.$overlayContentInner.css("paddingTop", this.secNavContainerInnerHeight), this.$secNavContainer.addClass(CONST.className.fixed), this.$secNav.addClass(CONST.className.fixed), clearTimeout($.data(this, "scrollCheck")), $.data(this, "scrollCheck", setTimeout(function() {
            this.scrollTopValue > __WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil___default.a.getHeightOfHeader() + __WEBPACK_IMPORTED_MODULE_8_heightMeasureUtil___default.a.getHeightOfComponentsAboveHeader() && (this.scrollTopValue = this.$window.scrollTop())
        }.bind(this), 100)), __WEBPACK_IMPORTED_MODULE_7_stickyItemService__.a.addItemToRegistry($physicalHeightElem)) : (this.$overlayContentInner.attr("style", ""), this.$secNavContainer.removeClass(CONST.className.fixed), this.$secNav.removeClass(CONST.className.fixed), __WEBPACK_IMPORTED_MODULE_7_stickyItemService__.a.removeItemFromRegistry($physicalHeightElem))
    }, SecondaryNavigation.prototype.addMenu = function() {
        this.showMenu && this.$horizontalNav.addClass("menu-dropdown")
    }, SecondaryNavigation.prototype.addTertiaryNav = function() {
        $.each(this.$subVerticalNav, function(id, el) {
            if (!0 === this.hasTertiary($(el).children("li"))) {
                var $subNavMain = $(".secondaryNavigation .navigation-vertical:first"),
                    navHeader = $(el).parent().children("a:first-child").text(),
                    subn = $(el).html();
                $(el).parent().addClass("tertiary-is-active"), $(el).siblings("a").wrap("<span></span>"), $subNavMain.after(this.tertiaryNavTemplate({
                    headerText: navHeader,
                    subnav: subn
                }))
            }
        }.bind(this))
    }, SecondaryNavigation.prototype.hasTertiary = function($link) {
        var isTertiary = !1,
            originRegex = /(^(http|https):\/\/)?([^/]*)/;
        return $.each($link, function(id, el) {
            var currentAnchor = $(el).find("a"),
                anchorHref = currentAnchor ? currentAnchor.attr("href") : null;
            if ((anchorHref ? anchorHref.replace(originRegex, "") : null) === this.currentUrl) return isTertiary = !0, $(el).addClass("selected-tertiary"), !0
        }.bind(this)), isTertiary
    }, SecondaryNavigation.prototype.showNav = function() {
        this.$horizontalNav.removeClass(CONST.className.collapsed)
    }, SecondaryNavigation.prototype.hideNav = function() {
        this.$horizontalNav.addClass(CONST.className.collapsed)
    }, SecondaryNavigation.prototype.setNavigationHeight = function() {
        var navigationHeaders = this.$el.find(".navigation-vertical h1, .navigation-vertical h2"),
            actionLinks = this.$el.find(".navigation-horizontal li a"),
            dropdownButton = this.$el.find(".dropdown-navigation-button"),
            mobileHeaderHeight = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(this.$verticalNavHeaderMobile) ? 0 : this.$verticalNavHeaderMobile.outerHeight();
        if (navigationHeaders.wrapInner(function() {
                if ($(this).find(".header-wrapper").length <= 0) return '<div class="header-wrapper"></div>'
            }), "mobile" !== __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType()) {
            var currentHeaderHeight = 0,
                currentNavigationHeight = 0;
            navigationHeaders.css({
                height: "auto"
            }), navigationHeaders.each(function() {
                var $self = $(this),
                    headerHeight = $self.height(),
                    headerOuterHeight = $self.innerHeight();
                currentHeaderHeight = currentHeaderHeight > headerHeight ? currentHeaderHeight : headerHeight, currentNavigationHeight = currentNavigationHeight > headerOuterHeight ? currentNavigationHeight : headerOuterHeight
            }), navigationHeaders.height(currentHeaderHeight), this.$secNav.css({
                top: 0,
                "max-height": "auto",
                height: currentNavigationHeight + "px"
            }), dropdownButton.css({
                "line-height": currentNavigationHeight + "px"
            }), "tablet" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() && this.showMenu ? actionLinks.css({
                "line-height": 2
            }) : actionLinks.css({
                "line-height": currentNavigationHeight + "px",
                height: currentNavigationHeight + "px"
            })
        } else this.$secNav.css({
            top: mobileHeaderHeight + "px",
            height: "auto",
            "max-height": "calc(100vh - " + mobileHeaderHeight + "px)"
        }), navigationHeaders.height("auto"), actionLinks.css({
            "line-height": 1
        })
    }, SecondaryNavigation.prototype.setNavByMedia = function(mediaWidth) {
        "mobile" === mediaWidth ? this.expandedVerticalNav ? this.showNav() : this.hideNav() : "tablet" === mediaWidth ? this.showMenu ? this.hideNav() : this.showNav() : "desktop" !== mediaWidth && "xlarge" !== mediaWidth || this.isForceMobileViewEnabled || this.showNav()
    }, SecondaryNavigation.prototype.getSecNavContainerInnerHeight = function() {
        "mobile" === __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.getMediaType() ? this.secNavContainerInnerHeight = this.$verticalNavHeaderMobile.outerHeight() : this.secNavContainerInnerHeight = this.$secNavContainer.innerHeight()
    }, module = {
        name: "secondaryNavigation",
        selector: ".secondaryNavigation.section",
        init: function(element) {
            return new SecondaryNavigation(element)
        }
    }, __WEBPACK_IMPORTED_MODULE_4_fordjs___default.a.registerComponent(module), __webpack_exports__.default = module
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_isAuthor__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_2_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isAuthor__),
        __WEBPACK_IMPORTED_MODULE_3_guxfoe_scroll_global_ux_scroll_js__ = __webpack_require__(25),
        __WEBPACK_IMPORTED_MODULE_4_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_4_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular__),
        __WEBPACK_IMPORTED_MODULE_5_guxfoe_wizard_wizard_app_js__ = __webpack_require__(24),
        __WEBPACK_IMPORTED_MODULE_6_guxfoe_form_dealer_locator_field_component_form_dealerLocatorField_js__ = __webpack_require__(118),
        api = {},
        $window = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window),
        template = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.template('<div class="overlay-container wizard-overlay">     <div class="overlay-content" tabindex="0">        <a class="overlay-close" tabindex="0"><i class="icon-plus icon-x"></i></a>        <div class="overlay-content-inner is-active"></div>    </div>    <div class="overlay-loading">        <div class="loader-icon">            <svg class="circular" viewBox="25 25 50 50">                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>            </svg>        </div>    </div> </div>');

    function WizardOverlay($elem) {
        this.$body = __WEBPACK_IMPORTED_MODULE_0_jquery___default()("body"), this.$elem = $elem || this.$body, this.$box = this.$elem.find(".content:first"), this.$item = this.$elem.find("a.link-wizard-overlay"), this.isAuthorMode = __WEBPACK_IMPORTED_MODULE_2_isAuthor___default.a.getAuthorStatus(), this.isVisible = !1, this.isAppInit = !1, this.scrollTopPosition = 0, this.openEvents()
    }
    WizardOverlay.prototype.onOverlayClose = function() {
        var evt = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Event("overlayclose.wizard");
        __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window).trigger(evt)
    }, WizardOverlay.prototype.openEvents = function() {
        this.$item.off("click.wizard").off("keydown.wizard"), this.$item.on("click.wizard", function(ev) {
            var href = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(ev.currentTarget).attr("href");
            ev.preventDefault(), this.showContent(href)
        }.bind(this)), this.$item.on("keydown.wizard", function(ev) {
            var href = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(ev.currentTarget).attr("href");
            13 === (ev.keyCode || ev.which) && (ev.preventDefault(), this.showContent(href))
        }.bind(this))
    }, WizardOverlay.prototype.hideEvents = function() {
        this.$container.on("click touchstart", ".overlay-close", function(ev) {
            ev.preventDefault(), this.isVisible && this.hideOverlay()
        }.bind(this)), this.$box.on("keydown", ".overlay-close", function(ev) {
            var keyCode = ev.keyCode || ev.which;
            !this.isVisible || 27 !== keyCode && 13 !== keyCode || this.hideOverlay()
        }.bind(this)), this.$box.on("keydown", function(ev) {
            var keyCode = ev.keyCode || ev.which;
            this.isVisible && 27 === keyCode && this.hideOverlay()
        }.bind(this)), this.$box.on("click", ".wizard-overlay", function(ev) {
            var $target = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(ev.target);
            this.isVisible && $target.is(this.$container) && this.hideOverlay()
        }.bind(this)), __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document).on("click", 'a[href="#close"]', function(ev) {
            ev.preventDefault(), this.isVisible && this.hideOverlay()
        }.bind(this)), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("overlay:closeOverlay", function() {
            this.isVisible && this.hideOverlay()
        }.bind(this))
    }, WizardOverlay.prototype.getContent = function(url) {
        var promise = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.ajax({
            type: "GET",
            url: url,
            dataType: "html",
            success: function(response) {
                promise.resolve(response)
            },
            error: function() {
                promise.reject()
            }
        }), promise
    }, WizardOverlay.prototype.showContent = function(url) {
        if (this.isAuthorMode) window.open(url);
        else {
            var queryStringCollection = function(fullQueryString) {
                    var valAndKeyCollection = fullQueryString.split("&"),
                        keyValSplit = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(valAndKeyCollection, function(item) {
                            return item.split("=")
                        });
                    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.fromPairs(keyValSplit)
                }(url.split("?")[1] || ""),
                paramUrl = window.location.search;
            url.indexOf("?") > -1 && (paramUrl = paramUrl.replace("?", "&")), url = paramUrl.indexOf("wcmmode=disabled") > -1 ? url += paramUrl : url;
            var content = this.getContent(url);
            this.initContainer(), this.showLoadingContainer(), content.done(function(response) {
                var content = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(response).find(".content").html();
                this.showOverlay(content, queryStringCollection.vehicleCode, queryStringCollection), this.$closeButton.blur()
            }.bind(this)).fail(function() {
                __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("wizard:content-failed"), this.$loading.hide(), this.hideOverlay()
            }.bind(this))
        }
    }, WizardOverlay.prototype.initContainer = function() {
        var container = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".wizard-overlay");
        container.length ? container.find(".overlay-content-inner").empty() : this.$box.append(template), this.$container = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(".wizard-overlay"), this.$content = this.$container.find(".overlay-content"), this.$contentInner = this.$container.find(".overlay-content-inner"), this.$loading = this.$container.find(".overlay-loading"), this.$closeButton = this.$container.find(".overlay-close"), this.hideEvents(), this.scrollTopPosition = $window.scrollTop(), this.$body.addClass("wizard-overlay-open"), __WEBPACK_IMPORTED_MODULE_3_guxfoe_scroll_global_ux_scroll_js__.a.preventScrollBody(!0), this.$container.removeClass("overlay-hide").addClass("visible"), this.$container.animate({
            scrollTop: "0px"
        }, 1)
    }, WizardOverlay.prototype.showLoadingContainer = function() {
        this.$closeButton.hide(), this.$loading.show()
    }, WizardOverlay.prototype.showOverlay = function(response, vehicleCode, queryData) {
        __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.subscribe("wizard:content-loaded", function() {
            this.$loading.hide(), this.$body.addClass("wizard-overlay-open"), this.$closeButton.show()
        }.bind(this)), this.$contentInner.append(response), this.$content.focus(), this.isVisible = !0, this.initApp(vehicleCode, queryData)
    }, WizardOverlay.prototype.initApp = function(vehicleCode, queryData) {
        this.$component = this.$container.find(".wizard"), this.$component.data("vehicle-code", vehicleCode), this.$component.data("wizard-query", __WEBPACK_IMPORTED_MODULE_4_angular___default.a.toJson(queryData)), this.$component.attr("data-is-overlay", !0), this.isAppInit || (this.isAppInit = !0), __WEBPACK_IMPORTED_MODULE_5_guxfoe_wizard_wizard_app_js__.a.configurationBuilder(this.$component[0]), __WEBPACK_IMPORTED_MODULE_6_guxfoe_form_dealer_locator_field_component_form_dealerLocatorField_js__.a.setConfiguration(), __WEBPACK_IMPORTED_MODULE_5_guxfoe_wizard_wizard_app_js__.a.constant("WIZARD_STATE", {
            VehicleSelector: 0,
            DealerLocator: 1,
            Form: 2,
            Summary: 3
        }), __WEBPACK_IMPORTED_MODULE_4_angular___default.a.bootstrap(this.$component[0], ["wizard", "lastsearchcookie", "ngSanitize"])
    }, WizardOverlay.prototype.hideOverlay = function() {
        this.$container.removeClass("visible").addClass("overlay-hide"), this.isVisible = !1, this.$body.removeClass("wizard-overlay-open"), this.$component && this.$component.injector().get("$rootScope").$destroy(), this.onOverlayClose(), this.$contentInner.empty(), __WEBPACK_IMPORTED_MODULE_3_guxfoe_scroll_global_ux_scroll_js__.a.allowScrollBody(this.scrollTopPosition, !0), __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.publish("wizardOverlay:closed")
    }, api.wizardOverlays = [], api.init = function($elem) {
        var wizardOverlay = new WizardOverlay($elem);
        api.wizardOverlays.push(wizardOverlay)
    }, __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_guxfoe_form_ngGuxForms_module_js__ = __webpack_require__(55);
    __WEBPACK_IMPORTED_MODULE_0_guxfoe_form_ngGuxForms_module_js__.a.controller("ngGuxFormController", [function() {}]);
    __WEBPACK_IMPORTED_MODULE_0_guxfoe_form_ngGuxForms_module_js__.a
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_2_guxfoe_form_ngGuxForms_module_js__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__), __webpack_require__(55)),
        __WEBPACK_IMPORTED_MODULE_3_guxfoe_form_component_form_validation_js__ = __webpack_require__(36);
    __WEBPACK_IMPORTED_MODULE_2_guxfoe_form_ngGuxForms_module_js__.a.controller("ngGuxFormContactPermissionsController", ["$scope", "$element", "$timeout", function($scope, $element, $timeout) {
        var CLASSNAME = {
                hideRow: "hide-row"
            },
            SELECTOR = {
                agreeInputsSelector: ".contact-permission-input[value=true]",
                contactPermissionRadioWrapper: ".contact-permission-radio-wrapper",
                inputTypeRadio: 'input[type="radio"]',
                inputTypeHidden: 'input[type="hidden"]',
                fieldsGroup: ".fieldsGroup"
            },
            $contactPermissionWrapperCollection = $element.find(SELECTOR.contactPermissionRadioWrapper);

        function _bindEventListeners(config) {
            config.$radio.on("change", function() {
                ! function(config) {
                    var value = config.$radio.filter(":checked").val();
                    config.$hidden.val(value).trigger("change")
                }(config)
            })
        }

        function _allSelected() {
            var $rowCollection, $visibleRowCollection = _getVisibleRows($contactPermissionWrapperCollection),
                agreeInputCollection = ($rowCollection = $visibleRowCollection, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.reduce($rowCollection, function(inputList, row) {
                    var agreeInput = row.querySelector(SELECTOR.agreeInputsSelector);
                    return agreeInput && inputList.push(agreeInput), inputList
                }, [])),
                checkedAgreeInputCollection = function(agreeInputCollection) {
                    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(agreeInputCollection, function(input) {
                        return input.checked
                    })
                }(agreeInputCollection);
            return checkedAgreeInputCollection.length === agreeInputCollection.length
        }

        function _getVisibleRows($rowCollection) {
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter($rowCollection, function(row) {
                return !$(row).hasClass(CLASSNAME.hideRow)
            })
        }

        function _setVisibleInputs($collection, state) {
            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach($collection, function(wrapperRow) {
                $(wrapperRow).find(SELECTOR.agreeInputsSelector).prop("checked", state).change()
            })
        }

        function _selectAllVisibleAgreeInputs() {
            var $visibleRowCollection = _getVisibleRows($contactPermissionWrapperCollection);
            _setVisibleInputs($visibleRowCollection, !0)
        }

        function _deselectAllVisibleAgreeInputs() {
            var $visibleRowCollection = _getVisibleRows($contactPermissionWrapperCollection);
            _setVisibleInputs($visibleRowCollection, !1)
        }
        this.isToggleButtonActive = !1, $.subscribe("fieldsgroup:resetFormFields", __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.debounce(function() {
                $scope.$apply(function() {
                    this.isToggleButtonActive = !1
                }.bind(this))
            }.bind(this), 300)), this.toggleAllPermissions = function($event) {
                $event.preventDefault(), this.isToggleButtonActive = !_allSelected(), this.isToggleButtonActive ? $scope.$$postDigest(_selectAllVisibleAgreeInputs) : $scope.$$postDigest(_deselectAllVisibleAgreeInputs)
            }, this.selection = function(event, key, value) {
                value || (this.isToggleButtonActive = !1)
            }, this.getScopedFormInputs = function() {
                this.form = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.find(__WEBPACK_IMPORTED_MODULE_3_guxfoe_form_component_form_validation_js__.a.forms, function(form) {
                    return form.$form.find($element).length
                }), this.fieldGroup = $element.closest(SELECTOR.fieldsGroup), this.fieldGroup.length ? this.elementsInScope = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(this.form.$formElementValidation, function(input) {
                    return $(input).closest(this.fieldGroup).length
                }.bind(this)) : this.elementsInScope = this.form.$formElementValidation
            },
            function() {
                var $radioWrapperCollection, callback;
                $timeout(this.getScopedFormInputs.bind(this)), $radioWrapperCollection = $contactPermissionWrapperCollection, callback = _bindEventListeners, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach($radioWrapperCollection, function(radioWrapper) {
                    var $radioWrapper = $(radioWrapper),
                        $radio = $radioWrapper.find(SELECTOR.inputTypeRadio),
                        $hidden = $radioWrapper.find(SELECTOR.inputTypeHidden);
                    callback && callback({
                        $radio: $radio,
                        $hidden: $hidden
                    })
                })
            }.bind(this)()
    }]);
    __WEBPACK_IMPORTED_MODULE_2_guxfoe_form_ngGuxForms_module_js__.a
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_guxfoe_form_ngGuxForms_module_js__ = __webpack_require__(55);
    __WEBPACK_IMPORTED_MODULE_2_guxfoe_form_ngGuxForms_module_js__.a.directive("contactPermissionsVisibility", ["$timeout", function($timeout) {
        return {
            restrict: "A",
            scope: {
                permissionReferenceField: "=",
                fieldsInScope: "="
            },
            link: {
                post: function(scope, $element) {
                    $timeout(function() {
                        ! function(scope, $element) {
                            var referencedInputList = (collection = scope.fieldsInScope, elementList = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(collection, function(element) {
                                    return !$(element).hasClass(CLASSNAME.contactPermissionRadio)
                                }), referencedVarList = scope.permissionReferenceField, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(elementList, function(element) {
                                    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(referencedVarList, function(referencedVar) {
                                        return element.name === referencedVar
                                    })
                                })),
                                isRequiredInput = checkInputRequiredStatus(referencedInputList),
                                isInputVisible = hasVisibleInput(referencedInputList),
                                isMultiRef = scope.permissionReferenceField.length > 1;
                            var elementList, referencedVarList;
                            var collection;
                            isRequiredInput && isInputVisible ? $element.removeClass(CLASSNAME.hideRow) : (updateDisplayState(), function(elementList, $element) {
                                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(elementList, function(element) {
                                    $(element).on("keyup focusout", function(evt) {
                                        var event = evt || window.event,
                                            type = evt.type;
                                        if (9 === event.which || "focusout" === type) {
                                            var isFieldGroupPopulated = checkInputLength(elementList),
                                                isRequiredInput = checkInputRequiredStatus(elementList);
                                            handlePermissionsButtonVisibility($element, !isFieldGroupPopulated && !isRequiredInput)
                                        }
                                    })
                                })
                            }(referencedInputList, $element));

                            function updateDisplayState() {
                                var isReferencedInputRequired = checkInputRequiredStatus(referencedInputList),
                                    isReferencedInputVisible = hasVisibleInput(referencedInputList),
                                    isReferencedInputHasValue = checkInputLength(referencedInputList);
                                isReferencedInputRequired && isReferencedInputVisible || isReferencedInputVisible && isReferencedInputHasValue ? $element.removeClass(CLASSNAME.hideRow) : $element.addClass(CLASSNAME.hideRow)
                            }
                            $.subscribe("fieldsGroup:input:visibility:change", function(config) {
                                var shouldBeHidden, list, inputName, isMyFieldGroup = (list = scope.permissionReferenceField, inputName = config.$input[0].name, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(list, function(isMatch, refVar) {
                                    return isMatch || refVar === inputName
                                }, !1));
                                isMyFieldGroup && isRequiredInput ? (shouldBeHidden = !isMultiRef && !config.isVisible, handlePermissionsButtonVisibility($element, shouldBeHidden)) : !isMyFieldGroup || isRequiredInput || config.isVisible || handlePermissionsButtonVisibility($element, !0)
                            }), $.subscribe("addressLookup:addressInputs:visibility:change", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(updateDisplayState, 300)), $.subscribe("dropdown:state:change", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(updateDisplayState, 300)), $.subscribe("form:validation:formCleared", __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(updateDisplayState, 300))
                        }(scope, $element)
                    })
                }
            }
        }
    }]);
    var CLASSNAME = {
            hideRow: "hide-row",
            contactPermissionRadio: "contact-permission-radio",
            fieldDisabled: "field-disabled"
        },
        SELECTOR = {
            contactPermissionInput: ".contact-permission-input",
            contactPermissionRadio: ".contact-permission-radio"
        };

    function checkInputRequiredStatus(referencedInputList) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(referencedInputList, function(isRequired, input) {
            return isRequired || $(input).data("validation").required
        }, !1)
    }

    function hasVisibleInput(referencedInputList) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(referencedInputList, function(isVisible, input) {
            return isVisible || !$(input).hasClass(CLASSNAME.fieldDisabled)
        }, !1)
    }

    function handlePermissionsButtonVisibility($permissionsButtonElement, shouldBeHidden) {
        $permissionsButtonElement.toggleClass(CLASSNAME.hideRow, shouldBeHidden), shouldBeHidden && function($permissionsButtonElement) {
            var $permissionsButtonElementCollection = $permissionsButtonElement.find(SELECTOR.contactPermissionInput);
            $permissionsButtonElement.find(SELECTOR.contactPermissionRadio).prop("value", "").change(), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach($permissionsButtonElementCollection, function(element) {
                element.checked && (element.checked = !1)
            })
        }($permissionsButtonElement)
    }

    function checkInputLength(elementList) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.reduce(elementList, function(hasLength, element) {
            return !!element.value.length || hasLength
        }, !1)
    }
    __WEBPACK_IMPORTED_MODULE_2_guxfoe_form_ngGuxForms_module_js__.a
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__(55).a.directive("ngToFixed", ["$filter", function($filter) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function(scope, element, attrs, ngModel) {
                ngModel.$formatters.unshift(function() {
                    return $filter("number")(ngModel.$modelValue)
                }), ngModel.$parsers.unshift(function(viewValue) {
                    var plainNumber = viewValue.replace(/[^\d|\-+|.+]/g, "");
                    return plainNumber ? element.val($filter("number")(plainNumber)) : element.val(""), plainNumber
                })
            }
        }
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var api, __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_configurationProvider__);
    api = {
        setConfiguration: function() {
            var configuration, globalConfiguration, bslConfiguration, $component = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element(".dealerLocatorField");
            $component.length && (configuration = __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default.a.get($component), globalConfiguration = __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("#global-market-configuration")), bslConfiguration = __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("#bsl-endpoints-configuration")), module.constant("$component", $component), module.constant("CONFIGURATION", configuration), module.constant("GLOBAL_CONFIGURATION", globalConfiguration), module.constant("BSL_CONFIGURATION", bslConfiguration))
        },
        module: module = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("dealerLocatorField", ["ngGuxGoogleMaps"])
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_2_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular__),
        __WEBPACK_IMPORTED_MODULE_3_dealerDetailsFormatter__ = __webpack_require__(70),
        __WEBPACK_IMPORTED_MODULE_4_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_4_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_configurationProvider__),
        enterKeyCode = 13,
        searchTypes = {
            location: "locations",
            dealer: "dealers"
        },
        salesDepartmentProps = ["HasSalesDepartmentPV", "HasSalesDepartmentCV"];
    __WEBPACK_IMPORTED_MODULE_2_angular___default.a.module("dealerLocatorField").controller("dealerLocatorFieldMainController", ["$rootElement", "$scope", "$q", "$timeout", "$element", "CONFIGURATION", "LOCALISATION_CONF", "dealerLocatorFieldGoogleMapService", "workFlowData", "dealerLocatorFieldAnalyticsService", function($rootElement, $scope, $q, $timeout, $element, CONFIGURATION, LOCALISATION_CONF, googleService, workFlowData, analytics) {
        var timeout, WIZARD_CONFIG = __WEBPACK_IMPORTED_MODULE_4_configurationProvider___default.a.get($rootElement);

        function buildAdditionalFilters(filterList) {
            return filterList.reduce(function(current, item) {
                return current[item] = 1, current
            }, {})
        }
        this.$searchInput = $element.find("#location-input"), this.searchBy = searchTypes.location, this.isLoading = !1, this.searchPhrase = "", this.predictions = [], this.totalResults = [], this.results = [], this.dealerQuery = {}, this.cachedQuery = "", this.pickedOption = null, this.selectedDealer = "", this.placeholders = {}, this.additionalFilters = {}, this.isError = !1, this.isSearchBeenInitialized = !1, this.isNoEntryError = !1, this.analyticsError = "", this.errorMessage = "", this.visibleResults = LOCALISATION_CONF.displayLimit, this.currentOffset = 1, this.maxResults = LOCALISATION_CONF.prioritisationCount, this.maxOffset = this.maxResults / this.visibleResults, this.isVehicleSelected = !1, this.isWarningError = !1, this.visiblePredictionsFilter = null, this.formatDealerDetailsConfig = googleService.getFormatDealerDetailsConfig(), this.formatDealerDetails = __WEBPACK_IMPORTED_MODULE_3_dealerDetailsFormatter__.a.formatDealerDetails, this.setResponseTimeout = function() {
            this.isLoading = !0, timeout = $timeout(function() {
                "canceled" !== timeout.$$state.value && (this.analyticsError = "system error", this.handleError(CONFIGURATION.labelErrorTimeout))
            }.bind(this), 2e4)
        }, this.isFieldValid = function() {
            var isValid = !!this.selectedDealer && this.isVehicleSelected;
            return this.validationRules = {
                isWarning: !this.isVehicleSelected,
                rules: [{
                    type: "validationValue",
                    message: this.isVehicleSelected ? CONFIGURATION.labelErrorNoDealerSelected : CONFIGURATION.labelErrorNoCarSelected
                }, {
                    type: "required",
                    message: CONFIGURATION.labelErrorEmptySearch
                }]
            }, isValid
        }, this.placeholders[searchTypes.location] = CONFIGURATION.config.enterLocationText, this.placeholders[searchTypes.dealer] = CONFIGURATION.config.enterDealerNameText, this.isLocationSearch = function() {
            return this.searchBy === searchTypes.location
        }, this.isCachedQuerySame = function() {
            return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEqual(this.searchPhrase, this.cachedQuery)
        }, this.resetFormStatus = function() {
            this.isError = !1, this.isWarningError = !1, this.isLoading = !1, this.errorMessage = "", this.analyticsError = "", this.isNoEntryError = !1, this.currentOffset = 1
        }, this.onEnterKeyPress = function(e) {
            var isEnterKey = e.keyCode === enterKeyCode;
            isEnterKey && this.initializeSearch(e, this.searchPhrase)
        }, this.displayResults = function(results) {
            $timeout.cancel(timeout), this.totalResults = results, this.isLoading = !1, this.predictions = [], this.disambiguations = [], this.isSearchBeenInitialized = !1, this.cachedQuery = this.searchPhrase, this.renderResults()
        }, this.handleError = function(error) {
            var isDisambiguation = "Disambiguation" === error;
            $timeout.cancel(timeout), isDisambiguation ? (this.disambiguations = googleService.getDisambiguations(), this.analyticsError = "disambiguation") : (this.isError = !0, this.errorMessage = error, this.isNoEntryError || (this.analyticsError = this.isLocationSearch() ? "invalid location" : "zero results")), this.results = [], this.totalResults = [], this.predictions = [], this.isLoading = !1, this.selectedDealer = "", this.cachedQuery = "", this.isSearchBeenInitialized = !1, this.dealerQuery = {}, analytics.trackError({
                searchType: this.isLocationSearch() ? "location" : "dealer",
                searchTerm: this.searchPhrase,
                totalResults: this.results.length,
                distance: CONFIGURATION.distanceConfig.defaultDistance
            }, this.analyticsError)
        }, this.renderResults = function() {
            this.results = this.totalResults.slice(0, this.visibleResults * this.currentOffset)
        }, this.isMaxResultsReached = function() {
            return this.currentOffset >= this.maxOffset || this.totalResults.length <= this.currentOffset * this.visibleResults
        }, this.showMore = function() {
            this.currentOffset++, this.renderResults()
        }, this.performSearch = function() {
            (this.isLocationSearch() ? googleService.searchByLocation(this.dealerQuery, this.additionalFilters) : googleService.searchByDealer(this.dealerQuery, this.additionalFilters)).then(this.displayResults.bind(this), this.handleError.bind(this))
        }, this.initializeSearch = function(e, pickedOption) {
            var scopeSearchValue = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(this.dealerQuery) ? this.searchPhrase : this.dealerQuery;
            e.preventDefault(), $.publish("dealerLocatorField:search"), this.dealerQuery = pickedOption || scopeSearchValue, this.resetFormStatus(), this.isSearchBeenInitialized = !0, this.isValid(this.dealerQuery) ? (this.searchPhrase = (this.isLocationSearch() ? this.dealerQuery.name : this.dealerQuery.DealerName) || this.dealerQuery, this.isCachedQuerySame() && this.isLocationSearch() ? this.isSearchBeenInitialized = !1 : (this.setResponseTimeout(), this.performSearch())) : this.isSearchBeenInitialized = !1
        }, this.reinitializeSearch = function() {
            var scopeSearchValue = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(this.dealerQuery) ? this.searchPhrase : this.dealerQuery;
            this.resetFormStatus(), this.dealerQuery = scopeSearchValue, this.isVehicleSelected ? this.performSearch() : this.clearFields(!0)
        }, this.disambiguationSearch = function(e, pickedOption) {
            e.preventDefault(), this.resetFormStatus(), this.setResponseTimeout(), googleService.disambiguationSearch(pickedOption, this.additionalFilters).then(this.displayResults.bind(this), this.handleError.bind(this))
        }, this.handleAutocomplete = function(query) {
            this.isSearchBeenInitialized || (this.resetFormStatus(), !this.isValid(query) || this.isCachedQuerySame() ? (this.predictions.length = 0, this.resetFormStatus()) : (this.setResponseTimeout(), googleService.getPredictions(query, this.searchBy).then(this.setPredictions.bind(this))))
        }, this.clearFields = function(isOnlyResults) {
            this.predictions = [], this.totalResults = [], this.results = [], this.selectedDealer = "", isOnlyResults || (this.searchPhrase = "")
        }, this.setVisiblePredictionsFilter = function(filter) {
            this.visiblePredictionsFilter = filter
        }, this.setPredictions = function(predictions) {
            var searchType = this.searchBy;
            $timeout.cancel(timeout), searchType === searchTypes.location ? this.setVisiblePredictionsFilter(function() {
                return !0
            }) : this.setVisiblePredictionsFilter(function(prediction) {
                return salesDepartmentProps.some(function(property) {
                    return !0 === prediction.services[property]
                })
            }), this.predictions = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.transform(predictions[searchType], function(result, item) {
                searchType === searchTypes.location ? result.push({
                    name: item
                }) : result.push({
                    DealerName: item.DealerName,
                    DealerID: item.DealerID,
                    DealerServices: item.DealerServices,
                    EntityID: item.EntityID,
                    services: item.services
                })
            }), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.delay(function() {
                this.isLoading = !1, $scope.$apply()
            }.bind(this), 300)
        }, this.setAdditionalFilters = function(nameplate) {
            if (nameplate.franchise) {
                var franchiseData = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(WIZARD_CONFIG.franchiseMappings, function(item) {
                        return item.key === nameplate.franchise
                    }),
                    filterList = franchiseData[0].value.replace(/_(\w+)_/, ",").split(","),
                    isORClause = !!franchiseData[0].value.match(/_OR_/);
                this.additionalFilters = {
                    OR_CLAUSES: []
                }, isORClause ? this.additionalFilters.OR_CLAUSES.push(buildAdditionalFilters(filterList)) : this.additionalFilters = buildAdditionalFilters(filterList)
            }
        }, this.setWatchers = function() {
            $scope.$watch("vm.searchPhrase", this.handleAutocomplete.bind(this)), $scope.$watch("vm.searchBy", this.clearFields.bind(this)), $scope.$watch("vm.selectedDealer", function(newValue, oldValue) {
                newValue && newValue !== oldValue && (workFlowData.setDealer(newValue), this.$searchInput.trigger("validationValueChange"))
            }.bind(this)), $.subscribe("vehicle:selected", function(nameplate) {
                this.setAdditionalFilters(nameplate), this.isFieldValid(), this.isVehicleSelected = nameplate.isSelected || nameplate, this.searchPhrase && this.reinitializeSearch()
            }.bind(this)), workFlowData.getSelectedNameplates().length && (this.isVehicleSelected = !0, this.isFieldValid(), this.setAdditionalFilters(workFlowData.getSelectedNameplates()[0])), $scope.$on("dealerLocatorField:showMore", this.showMore.bind(this))
        }, this.isValid = function(query) {
            var phrase = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isObject(query) ? this.searchBy === searchTypes.location ? query.name : query.DealerName : query,
                isFieldEmpty = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(phrase),
                isValid = !isFieldEmpty && phrase.length >= 3 && this.isVehicleSelected;
            return !this.isVehicleSelected && this.isSearchBeenInitialized ? ($.publish("dealerLocatorField:noVehicleSelectedError"), this.handleError(CONFIGURATION.labelErrorNoCarSelected), this.isWarningError = !0) : isFieldEmpty && this.isSearchBeenInitialized && (this.analyticsError = "no entry", this.isNoEntryError = !0, this.isWarningError = !1, this.handleError(CONFIGURATION.labelErrorEmptySearch)), isValid
        }, $.subscribe("vehicleSelector:ready", function() {
            googleService.onReady.then(this.setWatchers.bind(this))
        }.bind(this)), $.subscribe("dealerLocatorField:queryByEntityID", function(entityId) {
            var _this = this;
            googleService.mapObjectIsReady().then(function() {
                _this.dealerQuery = {
                    EntityID: entityId
                }, _this.resetFormStatus(), _this.searchBy = searchTypes.dealer;
                var $searchByDealer = googleService.searchByDealer(_this.dealerQuery, _this.additionalFilters);
                $searchByDealer.then(function(results) {
                    results && 1 === results.length && (_this.searchPhrase = results[0].DealerName, _this.dealerQuery = {}, _this.displayResults(results))
                }, function() {
                    digitaldata.page.dealerID = null
                })
            })
        }.bind(this))
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_angular__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(2)),
        __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__),
        __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__),
        __WEBPACK_IMPORTED_MODULE_3_dealerLocatorConfigurationHelper__ = __webpack_require__(291);

    function _extends() {
        return (_extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
            }
            return target
        }).apply(this, arguments)
    }
    __WEBPACK_IMPORTED_MODULE_1_angular___default.a.module("dealerLocatorField").factory("dealerLocatorFieldGoogleMapService", ["$q", "ngGuxGoogleMapService", "dealerLocatorFieldAnalyticsService", "GLOBAL_CONFIGURATION", "BSL_CONFIGURATION", "CONFIGURATION", "LOCALISATION_CONF", function($q, mapService, analytics, GLOBAL_CONFIGURATION, BSL_CONFIGURATION, CONFIGURATION, LOCALISATION_CONF) {
        var mapObject, api = {},
            maxResults = LOCALISATION_CONF.prioritisationCount,
            distanceConversionValues = {
                Miles: 1.60934,
                Km: 1
            },
            disambiguations = [],
            localisationConfig = __WEBPACK_IMPORTED_MODULE_3_dealerLocatorConfigurationHelper__.a.getLocalisation(CONFIGURATION),
            userExperienceConfig = __WEBPACK_IMPORTED_MODULE_3_dealerLocatorConfigurationHelper__.a.getUserExperience(CONFIGURATION.uxpConfig),
            servicesConfig = __WEBPACK_IMPORTED_MODULE_3_dealerLocatorConfigurationHelper__.a.getServices(CONFIGURATION.filterConfig[0]),
            distanceConfig = CONFIGURATION.distanceConfig,
            $mapObject = $("<div/>"),
            mapConfiguration = {
                language: GLOBAL_CONFIGURATION.localeLowerHyphenUpper,
                countryCode: GLOBAL_CONFIGURATION.marketCode,
                countryCodes: localisationConfig.countryCodes,
                countryBounds: localisationConfig.polygon,
                autocompleteCallbackURL: CONFIGURATION.dlAutocompleteUrl,
                autoCompleteState: userExperienceConfig.isAutoCompleteEnabled,
                autocompleteLabelFormat: userExperienceConfig.autocompleteLabelFormat,
                services: servicesConfig
            },
            $mapObjectIsReady = $q.defer();

        function formatResponse(data) {
            return __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.transform(data, function(result, item) {
                result.push({
                    DealerName: item.DealerName,
                    distance: function(source) {
                        var number = source / (1e3 * distanceConversionValues[distanceConfig.unit]);
                        number && (number = number >= 1 ? parseInt(number, 10) : Math.round(10 * number) / 10);
                        return number ? "- " + number + " " + distanceConfig.unitLabel : ""
                    }(item.distance),
                    DealerID: item.DealerID,
                    EntityID: item.EntityID
                })
            })
        }
        return api.getFormatDealerDetailsConfig = function() {
            return {
                autocompleteLabelFormat: userExperienceConfig.autocompleteLabelFormat,
                allServicesArray: CONFIGURATION.filterConfig[0].filters
            }
        }, api.onReady = mapService.initializeGoogleMapsApi().then(function() {
            var $defer = $q.defer();
            return mapService.registerMap("dealerLocatorField", $mapObject, mapConfiguration), mapService.getMap("dealerLocatorField").then(function(map) {
                mapObject = map, $mapObjectIsReady.resolve()
            }), $defer.resolve()
        }), api.mapObjectIsReady = function() {
            return $mapObjectIsReady.promise
        }, api.getPredictions = function(query, type) {
            var $defer = $q.defer();
            return mapObject.map.autocomplete(query, 5, function(results) {
                $defer.resolve(results)
            }, type, function() {
                $defer.reject(CONFIGURATION.labelErrorCritical)
            }), $defer.promise
        }, api.getDisambiguations = function() {
            return disambiguations
        }, api.searchByLocation = function(query, additionalFilters) {
            var $defer = $q.defer(),
                phrase = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isObject(query) ? query.name : query,
                isPostalCode = !1,
                matchParameters = {
                    CountryCode: GLOBAL_CONFIGURATION.iso3MarketCode
                };
            return additionalFilters && __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.extend(matchParameters, additionalFilters),
                function(query) {
                    var $defer = $q.defer();
                    return mapObject.map.geocodeLocation(query, function(results) {
                        results.length ? results.length > 1 ? (disambiguations = results, $defer.reject("Disambiguation")) : $defer.resolve(results[0]) : $defer.reject(CONFIGURATION.labelErrorNoLocations)
                    }), $defer.promise
                }(phrase).then(function(queryLocation) {
                    queryLocation && queryLocation.types && (isPostalCode = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.includes(queryLocation.types, "postal_code")), mapObject.map.searchDealersByDistance({
                        origin: queryLocation,
                        radius: distanceConfig.defaultDistance,
                        limit: maxResults,
                        matchParameters: matchParameters,
                        callback: function(dealers) {
                            analytics.trackSearch("location", phrase, maxResults, isPostalCode), dealers.length ? $defer.resolve(formatResponse(dealers)) : $defer.reject(CONFIGURATION.labelErrorNoLocations)
                        }
                    })
                }, function(error) {
                    $defer.reject(error)
                }), $defer.promise
        }, api.disambiguationSearch = function(location, additionalFilters) {
            var $defer = $q.defer(),
                matchParameters = {
                    CountryCode: GLOBAL_CONFIGURATION.iso3MarketCode
                };
            return additionalFilters && __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.extend(matchParameters, additionalFilters), mapObject.map.searchDealersByDistance({
                origin: location,
                radius: distanceConfig.defaultDistance,
                limit: maxResults,
                matchParameters: matchParameters,
                callback: function(dealers) {
                    dealers.length ? $defer.resolve(formatResponse(dealers)) : $defer.reject(CONFIGURATION.labelErrorNoLocations)
                }
            }), $defer.promise
        }, api.searchByDealer = function(query, additionalFilters) {
            var $defer = $q.defer(),
                matchParameters = _extends({
                    CountryCode: GLOBAL_CONFIGURATION.iso3MarketCode
                }, additionalFilters),
                containsParameters = {};
            return query.EntityID ? (matchParameters.EntityID = query.EntityID, query = query.DealerName) : containsParameters.DealerNameSearch = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.isString(query) ? query.toLowerCase() : "", mapObject.map.searchDealersByProperties(maxResults, function(dealers) {
                dealers.length ? (analytics.trackSearch("dealer", query, dealers.length), $defer.resolve(formatResponse(dealers))) : $defer.reject(CONFIGURATION.labelErrorNoResults)
            }, matchParameters, containsParameters), $defer.promise
        }, api
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
    __webpack_exports__.a = {
        getLocalisation: function(componentConfig) {
            var collection, map, polygons = [],
                localisationConfig = (collection = componentConfig.localisationConfig, map = {}, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(collection, function(item) {
                    map[item.key] = item.value
                }), map);
            return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(localisationConfig.polygon.split("%2C"), function(item) {
                var latLng = item.match(/[^+]\d*\.\d*/g);
                latLng && polygons.push({
                    lng: latLng[0],
                    lat: latLng[1]
                })
            }), localisationConfig.polygon = polygons, localisationConfig
        },
        getUserExperience: function(componentConfig) {
            var i, userExpConfig = {};
            for (i = 0; i < componentConfig.length; i++) userExpConfig[componentConfig[i].key] = componentConfig[i].value;
            return userExpConfig
        },
        getServices: function(componentConfig) {
            var property, filter, services = {};
            if (componentConfig.filters)
                for (property in componentConfig.filters) Object.prototype.hasOwnProperty.call(componentConfig.filters, property) && !__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isUndefined(componentConfig.filters[property]) && (filter = componentConfig.filters[property], services[componentConfig.filters[property].option] = filter);
            return services
        }
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsEventLayer_js__ = __webpack_require__(3);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("dealerLocatorField").factory("dealerLocatorFieldAnalyticsService", ["CONFIGURATION", function(configuration) {
        var miniDealerEvents = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsEventLayer_js__.a.getMiniDealerLocatorEvents(),
            commonEvents = __WEBPACK_IMPORTED_MODULE_1_analytics_analyticsEventLayer_js__.a.getCommonDealerLocatorEvents();
        return {
            trackSearch: function(searchType, query, totalResults, ispPostalCode) {
                var digitalDataPageName = window.digitaldata.page.pageName,
                    data = {
                        searchType: searchType,
                        searchTerm: query,
                        totalResults: totalResults,
                        distance: configuration.distanceConfig.defaultDistance,
                        postalCode: ispPostalCode
                    };
                miniDealerEvents.trackInitiateSearch(data, digitalDataPageName, !0)
            },
            trackError: function(data, error) {
                data.errorReason = error, data.miniDealer = !0, commonEvents.trackError(data, !0)
            }
        }
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_guxfoe_form_component_form_dropdown_js__ = __webpack_require__(46);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("dealerLocatorField").directive("dealerLocatorFieldResults", ["$timeout", "CONFIGURATION", "LOCALISATION_CONF", function($timeout, CONFIGURATION, LOCALISATION_CONF) {
        return {
            restrict: "A",
            scope: {
                results: "=",
                isLoading: "=",
                dealer: "=",
                isMoreResultsAvailable: "="
            },
            template: '<input type="text" data-ng-disabled="isLoading" data-validation="{{validationRules}}"class="dropdown-element"/>',
            link: function(scope, element) {
                var $dropdownContainer, previousValue, $dropdown = element.find(".dropdown-element"),
                    currentScrollTop = 0,
                    options = [];

                function getData() {
                    var data;
                    data = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(scope.results, function(item) {
                        return {
                            id: item.DealerID,
                            text: item.DealerName + item.distance,
                            css: "dealer-locator-field-option"
                        }
                    }), scope.isMoreResultsAvailable && data.push({
                        id: "showMoreDealers",
                        text: CONFIGURATION.labelViewMoreDealers,
                        css: "dealer-locator-field-load-more-dealers"
                    }), options = data
                }

                function setInitialValue() {
                    var isLoadMoreDealers = scope.results.length > LOCALISATION_CONF.displayLimit;
                    isLoadMoreDealers || $timeout(function() {
                        var value = scope.results.length ? scope.results[0].DealerID : "";
                        $dropdown.select2("val", value), setDealer(value), !1
                    })
                }

                function attachDropdownEvents() {
                    $dropdown.one("select2-selecting", function(e) {
                        e.preventDefault(), currentScrollTop = $dropdownContainer[0].scrollTop, "showMoreDealers" === e.val ? scope.$apply(function() {
                            scope.$emit("dealerLocatorField:showMore"), $timeout(function() {
                                $dropdown.select2("val", previousValue), $dropdown.select2("open", !0), $dropdownContainer[0].scrollTop = currentScrollTop, attachDropdownEvents()
                            })
                        }) : setDealer(e.val)
                    })
                }

                function setDealer(value) {
                    $dropdown.select2("val", value), $dropdown.select2("close"), scope.dealer = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(scope.results, {
                        DealerID: value
                    }), previousValue = value
                }
                $dropdown = __WEBPACK_IMPORTED_MODULE_2_guxfoe_form_component_form_dropdown_js__.a.initWithConfiguration($dropdown, {
                    minimumResultsForSearch: -1,
                    data: function() {
                        return {
                            results: options
                        }
                    }
                }), $dropdownContainer = $dropdown.select2("container").find(".select2-results"), getData(), setInitialValue(), attachDropdownEvents(), scope.$watch("results", function(newValue, oldValue) {
                    newValue !== oldValue && (setInitialValue(), getData())
                })
            }
        }
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_2_fordjs__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__), __webpack_require__(295), __webpack_require__(4)),
        __WEBPACK_IMPORTED_MODULE_25__scss_guxfoe_core_scss__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fordjs__), __webpack_require__(296), __webpack_require__(121), __webpack_require__(38), __webpack_require__(297), __webpack_require__(299), __webpack_require__(301), __webpack_require__(302), __webpack_require__(123), __webpack_require__(124), __webpack_require__(125), __webpack_require__(127), __webpack_require__(128), __webpack_require__(93), __webpack_require__(92), __webpack_require__(129), __webpack_require__(95), __webpack_require__(96), __webpack_require__(312), __webpack_require__(313), __webpack_require__(314), __webpack_require__(316), __webpack_require__(130), __webpack_require__(317));
    __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__scss_guxfoe_core_scss__)
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var $, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1);
    __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
    void 0 === ($ = jQuery).fn.each2 && $.extend($.fn, {
            each2: function(c) {
                for (var j = $([0]), i = -1, l = this.length; ++i < l && (j.context = j[0] = this[i]) && !1 !== c.call(j[0], i, j););
                return this
            }
        }),
        function($, undefined) {
            if (window.Select2 === undefined) {
                var AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer, $document, scrollBarDimensions, counter, lastMousePosition = {
                        x: 0,
                        y: 0
                    },
                    KEY = {
                        TAB: 9,
                        ENTER: 13,
                        ESC: 27,
                        SPACE: 32,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40,
                        SHIFT: 16,
                        CTRL: 17,
                        ALT: 18,
                        PAGE_UP: 33,
                        PAGE_DOWN: 34,
                        HOME: 36,
                        END: 35,
                        BACKSPACE: 8,
                        DELETE: 46,
                        isArrow: function(k) {
                            switch (k = k.which ? k.which : k) {
                                case KEY.LEFT:
                                case KEY.RIGHT:
                                case KEY.UP:
                                case KEY.DOWN:
                                    return !0
                            }
                            return !1
                        },
                        isControl: function(e) {
                            switch (e.which) {
                                case KEY.SHIFT:
                                case KEY.CTRL:
                                case KEY.ALT:
                                    return !0
                            }
                            return !!e.metaKey
                        },
                        isFunctionKey: function(k) {
                            return (k = k.which ? k.which : k) >= 112 && k <= 123
                        }
                    },
                    MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",
                    DIACRITICS = {
                        "â’¶": "A",
                        "ï¼¡": "A",
                        "Ã€": "A",
                        "Ã": "A",
                        "Ã‚": "A",
                        "áº¦": "A",
                        "áº¤": "A",
                        "áºª": "A",
                        "áº¨": "A",
                        "Ãƒ": "A",
                        "Ä€": "A",
                        "Ä‚": "A",
                        "áº°": "A",
                        "áº®": "A",
                        "áº´": "A",
                        "áº²": "A",
                        "È¦": "A",
                        "Ç ": "A",
                        "Ã„": "A",
                        "Çž": "A",
                        "áº¢": "A",
                        "Ã…": "A",
                        "Çº": "A",
                        "Ç": "A",
                        "È€": "A",
                        "È‚": "A",
                        "áº ": "A",
                        "áº¬": "A",
                        "áº¶": "A",
                        "á¸€": "A",
                        "Ä„": "A",
                        "Èº": "A",
                        "â±¯": "A",
                        "êœ²": "AA",
                        "Ã†": "AE",
                        "Ç¼": "AE",
                        "Ç¢": "AE",
                        "êœ´": "AO",
                        "êœ¶": "AU",
                        "êœ¸": "AV",
                        "êœº": "AV",
                        "êœ¼": "AY",
                        "â’·": "B",
                        "ï¼¢": "B",
                        "á¸‚": "B",
                        "á¸„": "B",
                        "á¸†": "B",
                        "Éƒ": "B",
                        "Æ‚": "B",
                        "Æ": "B",
                        "â’¸": "C",
                        "ï¼£": "C",
                        "Ä†": "C",
                        "Äˆ": "C",
                        "ÄŠ": "C",
                        "ÄŒ": "C",
                        "Ã‡": "C",
                        "á¸ˆ": "C",
                        "Æ‡": "C",
                        "È»": "C",
                        "êœ¾": "C",
                        "â’¹": "D",
                        "ï¼¤": "D",
                        "á¸Š": "D",
                        "ÄŽ": "D",
                        "á¸Œ": "D",
                        "á¸": "D",
                        "á¸’": "D",
                        "á¸Ž": "D",
                        "Ä": "D",
                        "Æ‹": "D",
                        "ÆŠ": "D",
                        "Æ‰": "D",
                        "ê¹": "D",
                        "Ç±": "DZ",
                        "Ç„": "DZ",
                        "Ç²": "Dz",
                        "Ç…": "Dz",
                        "â’º": "E",
                        "ï¼¥": "E",
                        "Ãˆ": "E",
                        "Ã‰": "E",
                        "ÃŠ": "E",
                        "á»€": "E",
                        "áº¾": "E",
                        "á»„": "E",
                        "á»‚": "E",
                        "áº¼": "E",
                        "Ä’": "E",
                        "á¸”": "E",
                        "á¸–": "E",
                        "Ä”": "E",
                        "Ä–": "E",
                        "Ã‹": "E",
                        "áºº": "E",
                        "Äš": "E",
                        "È„": "E",
                        "È†": "E",
                        "áº¸": "E",
                        "á»†": "E",
                        "È¨": "E",
                        "á¸œ": "E",
                        "Ä˜": "E",
                        "á¸˜": "E",
                        "á¸š": "E",
                        "Æ": "E",
                        "ÆŽ": "E",
                        "â’»": "F",
                        "ï¼¦": "F",
                        "á¸ž": "F",
                        "Æ‘": "F",
                        "ê»": "F",
                        "â’¼": "G",
                        "ï¼§": "G",
                        "Ç´": "G",
                        "Äœ": "G",
                        "á¸ ": "G",
                        "Äž": "G",
                        "Ä ": "G",
                        "Ç¦": "G",
                        "Ä¢": "G",
                        "Ç¤": "G",
                        "Æ“": "G",
                        "êž ": "G",
                        "ê½": "G",
                        "ê¾": "G",
                        "â’½": "H",
                        "ï¼¨": "H",
                        "Ä¤": "H",
                        "á¸¢": "H",
                        "á¸¦": "H",
                        "Èž": "H",
                        "á¸¤": "H",
                        "á¸¨": "H",
                        "á¸ª": "H",
                        "Ä¦": "H",
                        "â±§": "H",
                        "â±µ": "H",
                        "êž": "H",
                        "â’¾": "I",
                        "ï¼©": "I",
                        "ÃŒ": "I",
                        "Ã": "I",
                        "ÃŽ": "I",
                        "Ä¨": "I",
                        "Äª": "I",
                        "Ä¬": "I",
                        "Ä°": "I",
                        "Ã": "I",
                        "á¸®": "I",
                        "á»ˆ": "I",
                        "Ç": "I",
                        "Èˆ": "I",
                        "ÈŠ": "I",
                        "á»Š": "I",
                        "Ä®": "I",
                        "á¸¬": "I",
                        "Æ—": "I",
                        "â’¿": "J",
                        "ï¼ª": "J",
                        "Ä´": "J",
                        "Éˆ": "J",
                        "â“€": "K",
                        "ï¼«": "K",
                        "á¸°": "K",
                        "Ç¨": "K",
                        "á¸²": "K",
                        "Ä¶": "K",
                        "á¸´": "K",
                        "Æ˜": "K",
                        "â±©": "K",
                        "ê€": "K",
                        "ê‚": "K",
                        "ê„": "K",
                        "êž¢": "K",
                        "â“": "L",
                        "ï¼¬": "L",
                        "Ä¿": "L",
                        "Ä¹": "L",
                        "Ä½": "L",
                        "á¸¶": "L",
                        "á¸¸": "L",
                        "Ä»": "L",
                        "á¸¼": "L",
                        "á¸º": "L",
                        "Å": "L",
                        "È½": "L",
                        "â±¢": "L",
                        "â± ": "L",
                        "êˆ": "L",
                        "ê†": "L",
                        "êž€": "L",
                        "Ç‡": "LJ",
                        "Çˆ": "Lj",
                        "â“‚": "M",
                        "ï¼­": "M",
                        "á¸¾": "M",
                        "á¹€": "M",
                        "á¹‚": "M",
                        "â±®": "M",
                        "Æœ": "M",
                        "â“ƒ": "N",
                        "ï¼®": "N",
                        "Ç¸": "N",
                        "Åƒ": "N",
                        "Ã‘": "N",
                        "á¹„": "N",
                        "Å‡": "N",
                        "á¹†": "N",
                        "Å…": "N",
                        "á¹Š": "N",
                        "á¹ˆ": "N",
                        "È ": "N",
                        "Æ": "N",
                        "êž": "N",
                        "êž¤": "N",
                        "ÇŠ": "NJ",
                        "Ç‹": "Nj",
                        "â“„": "O",
                        "ï¼¯": "O",
                        "Ã’": "O",
                        "Ã“": "O",
                        "Ã”": "O",
                        "á»’": "O",
                        "á»": "O",
                        "á»–": "O",
                        "á»”": "O",
                        "Ã•": "O",
                        "á¹Œ": "O",
                        "È¬": "O",
                        "á¹Ž": "O",
                        "ÅŒ": "O",
                        "á¹": "O",
                        "á¹’": "O",
                        "ÅŽ": "O",
                        "È®": "O",
                        "È°": "O",
                        "Ã–": "O",
                        "Èª": "O",
                        "á»Ž": "O",
                        "Å": "O",
                        "Ç‘": "O",
                        "ÈŒ": "O",
                        "ÈŽ": "O",
                        "Æ ": "O",
                        "á»œ": "O",
                        "á»š": "O",
                        "á» ": "O",
                        "á»ž": "O",
                        "á»¢": "O",
                        "á»Œ": "O",
                        "á»˜": "O",
                        "Çª": "O",
                        "Ç¬": "O",
                        "Ã˜": "O",
                        "Ç¾": "O",
                        "Æ†": "O",
                        "ÆŸ": "O",
                        "êŠ": "O",
                        "êŒ": "O",
                        "Æ¢": "OI",
                        "êŽ": "OO",
                        "È¢": "OU",
                        "â“…": "P",
                        "ï¼°": "P",
                        "á¹”": "P",
                        "á¹–": "P",
                        "Æ¤": "P",
                        "â±£": "P",
                        "ê": "P",
                        "ê’": "P",
                        "ê”": "P",
                        "â“†": "Q",
                        "ï¼±": "Q",
                        "ê–": "Q",
                        "ê˜": "Q",
                        "ÉŠ": "Q",
                        "â“‡": "R",
                        "ï¼²": "R",
                        "Å”": "R",
                        "á¹˜": "R",
                        "Å˜": "R",
                        "È": "R",
                        "È’": "R",
                        "á¹š": "R",
                        "á¹œ": "R",
                        "Å–": "R",
                        "á¹ž": "R",
                        "ÉŒ": "R",
                        "â±¤": "R",
                        "êš": "R",
                        "êž¦": "R",
                        "êž‚": "R",
                        "â“ˆ": "S",
                        "ï¼³": "S",
                        "áºž": "S",
                        "Åš": "S",
                        "á¹¤": "S",
                        "Åœ": "S",
                        "á¹ ": "S",
                        "Å ": "S",
                        "á¹¦": "S",
                        "á¹¢": "S",
                        "á¹¨": "S",
                        "È˜": "S",
                        "Åž": "S",
                        "â±¾": "S",
                        "êž¨": "S",
                        "êž„": "S",
                        "â“‰": "T",
                        "ï¼´": "T",
                        "á¹ª": "T",
                        "Å¤": "T",
                        "á¹¬": "T",
                        "Èš": "T",
                        "Å¢": "T",
                        "á¹°": "T",
                        "á¹®": "T",
                        "Å¦": "T",
                        "Æ¬": "T",
                        "Æ®": "T",
                        "È¾": "T",
                        "êž†": "T",
                        "êœ¨": "TZ",
                        "â“Š": "U",
                        "ï¼µ": "U",
                        "Ã™": "U",
                        "Ãš": "U",
                        "Ã›": "U",
                        "Å¨": "U",
                        "á¹¸": "U",
                        "Åª": "U",
                        "á¹º": "U",
                        "Å¬": "U",
                        "Ãœ": "U",
                        "Ç›": "U",
                        "Ç—": "U",
                        "Ç•": "U",
                        "Ç™": "U",
                        "á»¦": "U",
                        "Å®": "U",
                        "Å°": "U",
                        "Ç“": "U",
                        "È”": "U",
                        "È–": "U",
                        "Æ¯": "U",
                        "á»ª": "U",
                        "á»¨": "U",
                        "á»®": "U",
                        "á»¬": "U",
                        "á»°": "U",
                        "á»¤": "U",
                        "á¹²": "U",
                        "Å²": "U",
                        "á¹¶": "U",
                        "á¹´": "U",
                        "É„": "U",
                        "â“‹": "V",
                        "ï¼¶": "V",
                        "á¹¼": "V",
                        "á¹¾": "V",
                        "Æ²": "V",
                        "êž": "V",
                        "É…": "V",
                        "ê ": "VY",
                        "â“Œ": "W",
                        "ï¼·": "W",
                        "áº€": "W",
                        "áº‚": "W",
                        "Å´": "W",
                        "áº†": "W",
                        "áº„": "W",
                        "áºˆ": "W",
                        "â±²": "W",
                        "â“": "X",
                        "ï¼¸": "X",
                        "áºŠ": "X",
                        "áºŒ": "X",
                        "â“Ž": "Y",
                        "ï¼¹": "Y",
                        "á»²": "Y",
                        "Ã": "Y",
                        "Å¶": "Y",
                        "á»¸": "Y",
                        "È²": "Y",
                        "áºŽ": "Y",
                        "Å¸": "Y",
                        "á»¶": "Y",
                        "á»´": "Y",
                        "Æ³": "Y",
                        "ÉŽ": "Y",
                        "á»¾": "Y",
                        "â“": "Z",
                        "ï¼º": "Z",
                        "Å¹": "Z",
                        "áº": "Z",
                        "Å»": "Z",
                        "Å½": "Z",
                        "áº’": "Z",
                        "áº”": "Z",
                        "Æµ": "Z",
                        "È¤": "Z",
                        "â±¿": "Z",
                        "â±«": "Z",
                        "ê¢": "Z",
                        "â“": "a",
                        "ï½": "a",
                        "áºš": "a",
                        "Ã ": "a",
                        "Ã¡": "a",
                        "Ã¢": "a",
                        "áº§": "a",
                        "áº¥": "a",
                        "áº«": "a",
                        "áº©": "a",
                        "Ã£": "a",
                        "Ä": "a",
                        "Äƒ": "a",
                        "áº±": "a",
                        "áº¯": "a",
                        "áºµ": "a",
                        "áº³": "a",
                        "È§": "a",
                        "Ç¡": "a",
                        "Ã¤": "a",
                        "ÇŸ": "a",
                        "áº£": "a",
                        "Ã¥": "a",
                        "Ç»": "a",
                        "ÇŽ": "a",
                        "È": "a",
                        "Èƒ": "a",
                        "áº¡": "a",
                        "áº­": "a",
                        "áº·": "a",
                        "á¸": "a",
                        "Ä…": "a",
                        "â±¥": "a",
                        "É": "a",
                        "êœ³": "aa",
                        "Ã¦": "ae",
                        "Ç½": "ae",
                        "Ç£": "ae",
                        "êœµ": "ao",
                        "êœ·": "au",
                        "êœ¹": "av",
                        "êœ»": "av",
                        "êœ½": "ay",
                        "â“‘": "b",
                        "ï½‚": "b",
                        "á¸ƒ": "b",
                        "á¸…": "b",
                        "á¸‡": "b",
                        "Æ€": "b",
                        "Æƒ": "b",
                        "É“": "b",
                        "â“’": "c",
                        "ï½ƒ": "c",
                        "Ä‡": "c",
                        "Ä‰": "c",
                        "Ä‹": "c",
                        "Ä": "c",
                        "Ã§": "c",
                        "á¸‰": "c",
                        "Æˆ": "c",
                        "È¼": "c",
                        "êœ¿": "c",
                        "â†„": "c",
                        "â““": "d",
                        "ï½„": "d",
                        "á¸‹": "d",
                        "Ä": "d",
                        "á¸": "d",
                        "á¸‘": "d",
                        "á¸“": "d",
                        "á¸": "d",
                        "Ä‘": "d",
                        "ÆŒ": "d",
                        "É–": "d",
                        "É—": "d",
                        "êº": "d",
                        "Ç³": "dz",
                        "Ç†": "dz",
                        "â“”": "e",
                        "ï½…": "e",
                        "Ã¨": "e",
                        "Ã©": "e",
                        "Ãª": "e",
                        "á»": "e",
                        "áº¿": "e",
                        "á»…": "e",
                        "á»ƒ": "e",
                        "áº½": "e",
                        "Ä“": "e",
                        "á¸•": "e",
                        "á¸—": "e",
                        "Ä•": "e",
                        "Ä—": "e",
                        "Ã«": "e",
                        "áº»": "e",
                        "Ä›": "e",
                        "È…": "e",
                        "È‡": "e",
                        "áº¹": "e",
                        "á»‡": "e",
                        "È©": "e",
                        "á¸": "e",
                        "Ä™": "e",
                        "á¸™": "e",
                        "á¸›": "e",
                        "É‡": "e",
                        "É›": "e",
                        "Ç": "e",
                        "â“•": "f",
                        "ï½†": "f",
                        "á¸Ÿ": "f",
                        "Æ’": "f",
                        "ê¼": "f",
                        "â“–": "g",
                        "ï½‡": "g",
                        "Çµ": "g",
                        "Ä": "g",
                        "á¸¡": "g",
                        "ÄŸ": "g",
                        "Ä¡": "g",
                        "Ç§": "g",
                        "Ä£": "g",
                        "Ç¥": "g",
                        "É ": "g",
                        "êž¡": "g",
                        "áµ¹": "g",
                        "ê¿": "g",
                        "â“—": "h",
                        "ï½ˆ": "h",
                        "Ä¥": "h",
                        "á¸£": "h",
                        "á¸§": "h",
                        "ÈŸ": "h",
                        "á¸¥": "h",
                        "á¸©": "h",
                        "á¸«": "h",
                        "áº–": "h",
                        "Ä§": "h",
                        "â±¨": "h",
                        "â±¶": "h",
                        "É¥": "h",
                        "Æ•": "hv",
                        "â“˜": "i",
                        "ï½‰": "i",
                        "Ã¬": "i",
                        "Ã­": "i",
                        "Ã®": "i",
                        "Ä©": "i",
                        "Ä«": "i",
                        "Ä­": "i",
                        "Ã¯": "i",
                        "á¸¯": "i",
                        "á»‰": "i",
                        "Ç": "i",
                        "È‰": "i",
                        "È‹": "i",
                        "á»‹": "i",
                        "Ä¯": "i",
                        "á¸­": "i",
                        "É¨": "i",
                        "Ä±": "i",
                        "â“™": "j",
                        "ï½Š": "j",
                        "Äµ": "j",
                        "Ç°": "j",
                        "É‰": "j",
                        "â“š": "k",
                        "ï½‹": "k",
                        "á¸±": "k",
                        "Ç©": "k",
                        "á¸³": "k",
                        "Ä·": "k",
                        "á¸µ": "k",
                        "Æ™": "k",
                        "â±ª": "k",
                        "ê": "k",
                        "êƒ": "k",
                        "ê…": "k",
                        "êž£": "k",
                        "â“›": "l",
                        "ï½Œ": "l",
                        "Å€": "l",
                        "Äº": "l",
                        "Ä¾": "l",
                        "á¸·": "l",
                        "á¸¹": "l",
                        "Ä¼": "l",
                        "á¸½": "l",
                        "á¸»": "l",
                        "Å¿": "l",
                        "Å‚": "l",
                        "Æš": "l",
                        "É«": "l",
                        "â±¡": "l",
                        "ê‰": "l",
                        "êž": "l",
                        "ê‡": "l",
                        "Ç‰": "lj",
                        "â“œ": "m",
                        "ï½": "m",
                        "á¸¿": "m",
                        "á¹": "m",
                        "á¹ƒ": "m",
                        "É±": "m",
                        "É¯": "m",
                        "â“": "n",
                        "ï½Ž": "n",
                        "Ç¹": "n",
                        "Å„": "n",
                        "Ã±": "n",
                        "á¹…": "n",
                        "Åˆ": "n",
                        "á¹‡": "n",
                        "Å†": "n",
                        "á¹‹": "n",
                        "á¹‰": "n",
                        "Æž": "n",
                        "É²": "n",
                        "Å‰": "n",
                        "êž‘": "n",
                        "êž¥": "n",
                        "ÇŒ": "nj",
                        "â“ž": "o",
                        "ï½": "o",
                        "Ã²": "o",
                        "Ã³": "o",
                        "Ã´": "o",
                        "á»“": "o",
                        "á»‘": "o",
                        "á»—": "o",
                        "á»•": "o",
                        "Ãµ": "o",
                        "á¹": "o",
                        "È­": "o",
                        "á¹": "o",
                        "Å": "o",
                        "á¹‘": "o",
                        "á¹“": "o",
                        "Å": "o",
                        "È¯": "o",
                        "È±": "o",
                        "Ã¶": "o",
                        "È«": "o",
                        "á»": "o",
                        "Å‘": "o",
                        "Ç’": "o",
                        "È": "o",
                        "È": "o",
                        "Æ¡": "o",
                        "á»": "o",
                        "á»›": "o",
                        "á»¡": "o",
                        "á»Ÿ": "o",
                        "á»£": "o",
                        "á»": "o",
                        "á»™": "o",
                        "Ç«": "o",
                        "Ç­": "o",
                        "Ã¸": "o",
                        "Ç¿": "o",
                        "É”": "o",
                        "ê‹": "o",
                        "ê": "o",
                        "Éµ": "o",
                        "Æ£": "oi",
                        "È£": "ou",
                        "ê": "oo",
                        "â“Ÿ": "p",
                        "ï½": "p",
                        "á¹•": "p",
                        "á¹—": "p",
                        "Æ¥": "p",
                        "áµ½": "p",
                        "ê‘": "p",
                        "ê“": "p",
                        "ê•": "p",
                        "â“ ": "q",
                        "ï½‘": "q",
                        "É‹": "q",
                        "ê—": "q",
                        "ê™": "q",
                        "â“¡": "r",
                        "ï½’": "r",
                        "Å•": "r",
                        "á¹™": "r",
                        "Å™": "r",
                        "È‘": "r",
                        "È“": "r",
                        "á¹›": "r",
                        "á¹": "r",
                        "Å—": "r",
                        "á¹Ÿ": "r",
                        "É": "r",
                        "É½": "r",
                        "ê›": "r",
                        "êž§": "r",
                        "êžƒ": "r",
                        "â“¢": "s",
                        "ï½“": "s",
                        "ÃŸ": "s",
                        "Å›": "s",
                        "á¹¥": "s",
                        "Å": "s",
                        "á¹¡": "s",
                        "Å¡": "s",
                        "á¹§": "s",
                        "á¹£": "s",
                        "á¹©": "s",
                        "È™": "s",
                        "ÅŸ": "s",
                        "È¿": "s",
                        "êž©": "s",
                        "êž…": "s",
                        "áº›": "s",
                        "â“£": "t",
                        "ï½”": "t",
                        "á¹«": "t",
                        "áº—": "t",
                        "Å¥": "t",
                        "á¹­": "t",
                        "È›": "t",
                        "Å£": "t",
                        "á¹±": "t",
                        "á¹¯": "t",
                        "Å§": "t",
                        "Æ­": "t",
                        "Êˆ": "t",
                        "â±¦": "t",
                        "êž‡": "t",
                        "êœ©": "tz",
                        "â“¤": "u",
                        "ï½•": "u",
                        "Ã¹": "u",
                        "Ãº": "u",
                        "Ã»": "u",
                        "Å©": "u",
                        "á¹¹": "u",
                        "Å«": "u",
                        "á¹»": "u",
                        "Å­": "u",
                        "Ã¼": "u",
                        "Çœ": "u",
                        "Ç˜": "u",
                        "Ç–": "u",
                        "Çš": "u",
                        "á»§": "u",
                        "Å¯": "u",
                        "Å±": "u",
                        "Ç”": "u",
                        "È•": "u",
                        "È—": "u",
                        "Æ°": "u",
                        "á»«": "u",
                        "á»©": "u",
                        "á»¯": "u",
                        "á»­": "u",
                        "á»±": "u",
                        "á»¥": "u",
                        "á¹³": "u",
                        "Å³": "u",
                        "á¹·": "u",
                        "á¹µ": "u",
                        "Ê‰": "u",
                        "â“¥": "v",
                        "ï½–": "v",
                        "á¹½": "v",
                        "á¹¿": "v",
                        "Ê‹": "v",
                        "êŸ": "v",
                        "ÊŒ": "v",
                        "ê¡": "vy",
                        "â“¦": "w",
                        "ï½—": "w",
                        "áº": "w",
                        "áºƒ": "w",
                        "Åµ": "w",
                        "áº‡": "w",
                        "áº…": "w",
                        "áº˜": "w",
                        "áº‰": "w",
                        "â±³": "w",
                        "â“§": "x",
                        "ï½˜": "x",
                        "áº‹": "x",
                        "áº": "x",
                        "â“¨": "y",
                        "ï½™": "y",
                        "á»³": "y",
                        "Ã½": "y",
                        "Å·": "y",
                        "á»¹": "y",
                        "È³": "y",
                        "áº": "y",
                        "Ã¿": "y",
                        "á»·": "y",
                        "áº™": "y",
                        "á»µ": "y",
                        "Æ´": "y",
                        "É": "y",
                        "á»¿": "y",
                        "â“©": "z",
                        "ï½š": "z",
                        "Åº": "z",
                        "áº‘": "z",
                        "Å¼": "z",
                        "Å¾": "z",
                        "áº“": "z",
                        "áº•": "z",
                        "Æ¶": "z",
                        "È¥": "z",
                        "É€": "z",
                        "â±¬": "z",
                        "ê£": "z"
                    };
                $document = $(document), counter = 1, nextUid = function() {
                    return counter++
                }, $document.on("mousemove", function(e) {
                    lastMousePosition.x = e.pageX, lastMousePosition.y = e.pageY
                }), SingleSelect2 = clazz(AbstractSelect2 = clazz(Object, {
                    bind: function(func) {
                        var self = this;
                        return function() {
                            func.apply(self, arguments)
                        }
                    },
                    init: function(opts) {
                        var results, search;
                        this.opts = opts = this.prepareOpts(opts), this.id = opts.id, opts.element.data("select2") !== undefined && null !== opts.element.data("select2") && opts.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = $("<span>", {
                                role: "status",
                                "aria-live": "polite"
                            }).addClass("select2-hidden-accessible").appendTo(document.body), this.containerId = "s2id_" + (opts.element.attr("id") || "autogen" + nextUid()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", opts.element.attr("title")), this.body = $("body"), syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", opts.element.attr("style")), this.container.css(evaluate(opts.containerCss)), this.container.addClass(evaluate(opts.containerCssClass)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", killEvent), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(evaluate(opts.dropdownCssClass)), this.dropdown.data("select2", this), this.dropdown.on("click", killEvent), this.results = results = this.container.find(".select2-results"), this.search = search = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", killEvent), this.results.on("mousemove", function(e) {
                                var lastpos = lastMousePosition;
                                lastpos !== undefined && lastpos.x === e.pageX && lastpos.y === e.pageY || $(e.target).trigger("mousemove-filtered", e)
                            }), this.dropdown.on("mousemove-filtered", ".select2-results", this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", ".select2-results", this.bind(function(event) {
                                this._touchEvent = !0, this.highlightUnderEvent(event)
                            })), this.dropdown.on("touchmove", ".select2-results", this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", ".select2-results", this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function(event) {
                                this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
                            })),
                            function(threshold, element) {
                                var notify = debounce(threshold, function(e) {
                                    element.trigger("scroll-debounced", e)
                                });
                                element.on("scroll", function(e) {
                                    indexOf(e.target, element.get()) >= 0 && notify(e)
                                })
                            }(80, this.results), this.dropdown.on("scroll-debounced", ".select2-results", this.bind(this.loadMoreIfNeeded)), $(this.container).on("change", ".select2-input", function(e) {
                                e.stopPropagation()
                            }), $(this.dropdown).on("change", ".select2-input", function(e) {
                                e.stopPropagation()
                            }), $.fn.mousewheel && results.mousewheel(function(e, delta, deltaX, deltaY) {
                                var top = results.scrollTop();
                                deltaY > 0 && top - deltaY <= 0 ? (results.scrollTop(0), killEvent(e)) : deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height() && (results.scrollTop(results.get(0).scrollHeight - results.height()), killEvent(e))
                            }), installKeyUpChangeEvent(search), search.on("keyup-change input paste", this.bind(this.updateResults)), search.on("focus", function() {
                                search.addClass("select2-focused")
                            }), search.on("blur", function() {
                                search.removeClass("select2-focused")
                            }), this.dropdown.on("mouseup", ".select2-results", this.bind(function(e) {
                                $(e.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(e), this.selectHighlighted(e))
                            })), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(e) {
                                e.stopPropagation()
                            }), this.nextSearchTerm = undefined, $.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== opts.maximumInputLength && this.search.attr("maxlength", opts.maximumInputLength);
                        var disabled = opts.element.prop("disabled");
                        disabled === undefined && (disabled = !1), this.enable(!disabled);
                        var readonly = opts.element.prop("readonly");
                        readonly === undefined && (readonly = !1), this.readonly(readonly), scrollBarDimensions = scrollBarDimensions || function() {
                            var $template = $(MEASURE_SCROLLBAR_TEMPLATE);
                            $template.appendTo("body");
                            var dim = {
                                width: $template.width() - $template[0].clientWidth,
                                height: $template.height() - $template[0].clientHeight
                            };
                            return $template.remove(), dim
                        }(), this.autofocus = opts.element.prop("autofocus"), opts.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", opts.searchInputPlaceholder)
                    },
                    destroy: function() {
                        var element = this.opts.element,
                            select2 = element.data("select2");
                        this.close(), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), select2 !== undefined && (select2.container.remove(), select2.liveRegion.remove(), select2.dropdown.remove(), element.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? element.attr({
                            tabindex: this.elementTabIndex
                        }) : element.removeAttr("tabindex"), element.show()), cleanupJQueryElements.call(this, "container", "liveRegion", "dropdown", "results", "search")
                    },
                    optionToData: function(element) {
                        return element.is("option") ? {
                            id: element.prop("value"),
                            text: element.text(),
                            element: element.get(),
                            css: element.attr("class"),
                            disabled: element.prop("disabled"),
                            locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), !0)
                        } : element.is("optgroup") ? {
                            text: element.attr("label"),
                            children: [],
                            element: element.get(),
                            css: element.attr("class")
                        } : void 0
                    },
                    prepareOpts: function(opts) {
                        var element, select, idKey, ajaxUrl, self = this;
                        if ("select" === (element = opts.element).get(0).tagName.toLowerCase() && (this.select = select = opts.element), select && $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
                                if (this in opts) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.")
                            }), "function" != typeof(opts = $.extend({}, {
                                populateResults: function(container, results, query) {
                                    var _populate, id = this.opts.id,
                                        liveRegion = this.liveRegion;
                                    (_populate = function(results, container, depth) {
                                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;
                                        for (i = 0, l = (results = opts.sortResults(results, container, query)).length; i < l; i += 1) selectable = !(disabled = !0 === (result = results[i]).disabled) && id(result) !== undefined, compound = result.children && result.children.length > 0, (node = $("<li></li>")).addClass("select2-results-dept-" + depth), node.addClass("select2-result"), node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable"), disabled && node.addClass("select2-disabled"), compound && node.addClass("select2-result-with-children"), node.addClass(self.opts.formatResultCssClass(result)), node.attr("role", "presentation"), (label = $(document.createElement("div"))).addClass("select2-result-label"), label.attr("id", "select2-result-label-" + nextUid()), label.attr("role", "option"), (formatted = opts.formatResult(result, label, query, self.opts.escapeMarkup)) !== undefined && (label.html(formatted), node.append(label)), compound && ((innerContainer = $("<ul></ul>")).addClass("select2-result-sub"), _populate(result.children, innerContainer, depth + 1), node.append(innerContainer)), node.data("select2-data", result), container.append(node);
                                        liveRegion.text(opts.formatMatches(results.length))
                                    })(results, container, 0)
                                }
                            }, $.fn.select2.defaults, opts)).id && (idKey = opts.id, opts.id = function(e) {
                                return e[idKey]
                            }), $.isArray(opts.element.data("select2Tags"))) {
                            if ("tags" in opts) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
                            opts.tags = opts.element.data("select2Tags")
                        }
                        if (select ? (opts.query = this.bind(function(query) {
                                var children, placeholderOption, _process2, data = {
                                        results: [],
                                        more: !1
                                    },
                                    term = query.term;
                                _process2 = function(element, collection) {
                                    var group;
                                    element.is("option") ? query.matcher(term, element.text(), element) && collection.push(self.optionToData(element)) : element.is("optgroup") && (group = self.optionToData(element), element.children().each2(function(i, elm) {
                                        _process2(elm, group.children)
                                    }), group.children.length > 0 && collection.push(group))
                                }, children = element.children(), this.getPlaceholder() !== undefined && children.length > 0 && (placeholderOption = this.getPlaceholderOption()) && (children = children.not(placeholderOption)), children.each2(function(i, elm) {
                                    _process2(elm, data.results)
                                }), query.callback(data)
                            }), opts.id = function(e) {
                                return e.id
                            }) : "query" in opts || ("ajax" in opts ? ((ajaxUrl = opts.element.data("ajax-url")) && ajaxUrl.length > 0 && (opts.ajax.url = ajaxUrl), opts.query = ajax.call(opts.element, opts.ajax)) : "data" in opts ? opts.query = local(opts.data) : "tags" in opts && (opts.query = tags(opts.tags), opts.createSearchChoice === undefined && (opts.createSearchChoice = function(term) {
                                return {
                                    id: $.trim(term),
                                    text: $.trim(term)
                                }
                            }), opts.initSelection === undefined && (opts.initSelection = function(element, callback) {
                                var data = [];
                                $(splitVal(element.val(), opts.separator)).each(function() {
                                    var obj = {
                                            id: this,
                                            text: this
                                        },
                                        tags = opts.tags;
                                    $.isFunction(tags) && (tags = tags()), $(tags).each(function() {
                                        if (equal(this.id, obj.id)) return obj = this, !1
                                    }), data.push(obj)
                                }), callback(data)
                            }))), "function" != typeof opts.query) throw "query function not defined for Select2 " + opts.element.attr("id");
                        if ("top" === opts.createSearchChoicePosition) opts.createSearchChoicePosition = function(list, item) {
                            list.unshift(item)
                        };
                        else if ("bottom" === opts.createSearchChoicePosition) opts.createSearchChoicePosition = function(list, item) {
                            list.push(item)
                        };
                        else if ("function" != typeof opts.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
                        return opts
                    },
                    monitorSource: function() {
                        var sync, observer, el = this.opts.element;
                        el.on("change.select2", this.bind(function(e) {
                            !0 !== this.opts.element.data("select2-change-triggered") && this.initSelection()
                        })), sync = this.bind(function() {
                            var disabled = el.prop("disabled");
                            disabled === undefined && (disabled = !1), this.enable(!disabled);
                            var readonly = el.prop("readonly");
                            readonly === undefined && (readonly = !1), this.readonly(readonly), syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(evaluate(this.opts.containerCssClass)), syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(evaluate(this.opts.dropdownCssClass))
                        }), el.length && el[0].attachEvent && el.each(function() {
                            this.attachEvent("onpropertychange", sync)
                        }), (observer = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver) !== undefined && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new observer(function(mutations) {
                            mutations.forEach(sync)
                        }), this.propertyObserver.observe(el.get(0), {
                            attributes: !0,
                            subtree: !1
                        }))
                    },
                    triggerSelect: function(data) {
                        var evt = $.Event("select2-selecting", {
                            val: this.id(data),
                            object: data
                        });
                        return this.opts.element.trigger(evt), !evt.isDefaultPrevented()
                    },
                    triggerChange: function(details) {
                        details = details || {}, details = $.extend({}, details, {
                            type: "change",
                            val: this.val()
                        }), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(details), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
                    },
                    isInterfaceEnabled: function() {
                        return !0 === this.enabledInterface
                    },
                    enableInterface: function() {
                        var enabled = this._enabled && !this._readonly,
                            disabled = !enabled;
                        return enabled !== this.enabledInterface && (this.container.toggleClass("select2-container-disabled", disabled), this.close(), this.enabledInterface = enabled, !0)
                    },
                    enable: function(enabled) {
                        enabled === undefined && (enabled = !0), this._enabled !== enabled && (this._enabled = enabled, this.opts.element.prop("disabled", !enabled), this.enableInterface())
                    },
                    disable: function() {
                        this.enable(!1)
                    },
                    readonly: function(enabled) {
                        enabled === undefined && (enabled = !1), this._readonly !== enabled && (this._readonly = enabled, this.opts.element.prop("readonly", enabled), this.enableInterface())
                    },
                    opened: function() {
                        return this.container.hasClass("select2-dropdown-open")
                    },
                    positionDropdown: function() {
                        var bodyOffset, above, changeDirection, css, resultsListNode, $dropdown = this.dropdown,
                            offset = this.container.offset(),
                            height = this.container.outerHeight(!1),
                            width = this.container.outerWidth(!1),
                            dropHeight = $dropdown.outerHeight(!1),
                            $window = $(window),
                            windowWidth = $window.width(),
                            windowHeight = $window.height(),
                            viewPortRight = $window.scrollLeft() + windowWidth,
                            viewportBottom = $window.scrollTop() + windowHeight,
                            dropTop = offset.top + height,
                            dropLeft = offset.left,
                            enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
                            enoughRoomAbove = offset.top - dropHeight >= $window.scrollTop(),
                            dropWidth = $dropdown.outerWidth(!1),
                            enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
                        $dropdown.hasClass("select2-drop-above") ? (above = !0, !enoughRoomAbove && enoughRoomBelow && (changeDirection = !0, above = !1)) : (above = !1, !enoughRoomBelow && enoughRoomAbove && (changeDirection = !0, above = !0)), changeDirection && ($dropdown.hide(), offset = this.container.offset(), height = this.container.outerHeight(!1), width = this.container.outerWidth(!1), dropHeight = $dropdown.outerHeight(!1), viewPortRight = $window.scrollLeft() + windowWidth, viewportBottom = $window.scrollTop() + windowHeight, dropTop = offset.top + height, enoughRoomOnRight = (dropLeft = offset.left) + (dropWidth = $dropdown.outerWidth(!1)) <= viewPortRight, $dropdown.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (resultsListNode = $(".select2-results", $dropdown)[0], $dropdown.addClass("select2-drop-auto-width"), $dropdown.css("width", ""), (dropWidth = $dropdown.outerWidth(!1) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width)) > width ? width = dropWidth : dropWidth = width, dropHeight = $dropdown.outerHeight(!1), enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (dropTop -= (bodyOffset = this.body.offset()).top, dropLeft -= bodyOffset.left), enoughRoomOnRight || (dropLeft = offset.left + this.container.outerWidth(!1) - dropWidth), css = {
                            left: dropLeft,
                            width: width
                        }, above ? (css.top = offset.top - dropHeight, css.bottom = "auto", this.container.addClass("select2-drop-above"), $dropdown.addClass("select2-drop-above")) : (css.top = dropTop, css.bottom = "auto", this.container.removeClass("select2-drop-above"), $dropdown.removeClass("select2-drop-above")), css = $.extend(css, evaluate(this.opts.dropdownCss)), $dropdown.css(css)
                    },
                    shouldOpen: function() {
                        var event;
                        return !this.opened() && (!1 !== this._enabled && !0 !== this._readonly && (event = $.Event("select2-opening"), this.opts.element.trigger(event), !event.isDefaultPrevented()))
                    },
                    clearDropdownAlignmentPreference: function() {
                        this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
                    },
                    open: function(isForceOpen) {
                        return !(!isForceOpen && !this.shouldOpen()) && (this.opening(), !0)
                    },
                    opening: function() {
                        var mask, cid = this.containerEventName,
                            scroll = "scroll." + cid,
                            resize = "resize." + cid,
                            orient = "orientationchange." + cid;
                        this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), 0 == (mask = $("#select2-drop-mask")).length && ((mask = $(document.createElement("div"))).attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), mask.hide(), mask.appendTo(this.body), mask.on("mousedown touchstart click", function(e) {
                            reinsertElement(mask);
                            var self, dropdown = $("#select2-drop");
                            dropdown.length > 0 && ((self = dropdown.data("select2")).opts.selectOnBlur && self.selectHighlighted({
                                noFocus: !0
                            }), self.close(), e.preventDefault(), e.stopPropagation())
                        })), this.dropdown.prev()[0] !== mask[0] && this.dropdown.before(mask), $("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), mask.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active");
                        var that = this;
                        this.container.parents().add(window).each(function() {
                            $(this).on(resize + " " + scroll + " " + orient, function(e) {
                                that.opened() && that.positionDropdown()
                            })
                        })
                    },
                    close: function() {
                        if (this.opened()) {
                            var cid = this.containerEventName,
                                scroll = "scroll." + cid,
                                resize = "resize." + cid,
                                orient = "orientationchange." + cid;
                            this.container.parents().add(window).each(function() {
                                $(this).off(scroll).off(resize).off(orient)
                            }), this.clearDropdownAlignmentPreference(), $("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger($.Event("select2-close"))
                        }
                    },
                    externalSearch: function(term) {
                        this.open(), this.search.val(term), this.updateResults(!1)
                    },
                    clearSearch: function() {},
                    getMaximumSelectionSize: function() {
                        return evaluate(this.opts.maximumSelectionSize)
                    },
                    ensureHighlightVisible: function() {
                        var children, index, child, hb, rb, y, more, results = this.results;
                        (index = this.highlight()) < 0 || (0 != index ? (children = this.findHighlightableChoices().find(".select2-result-label"), hb = (child = $(children[index])).offset().top + child.outerHeight(!0), index === children.length - 1 && (more = results.find("li.select2-more-results")).length > 0 && (hb = more.offset().top + more.outerHeight(!0)), hb > (rb = results.offset().top + results.outerHeight(!0)) && results.scrollTop(results.scrollTop() + (hb - rb)), (y = child.offset().top - results.offset().top) < 0 && "none" != child.css("display") && results.scrollTop(results.scrollTop() + y)) : results.scrollTop(0))
                    },
                    findHighlightableChoices: function() {
                        return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
                    },
                    moveHighlight: function(delta) {
                        for (var choices = this.findHighlightableChoices(), index = this.highlight(); index > -1 && index < choices.length;) {
                            var choice = $(choices[index += delta]);
                            if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
                                this.highlight(index);
                                break
                            }
                        }
                    },
                    highlight: function(index) {
                        var choice, data, choices = this.findHighlightableChoices();
                        if (0 === arguments.length) return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
                        index >= choices.length && (index = choices.length - 1), index < 0 && (index = 0), this.removeHighlight(), (choice = $(choices[index])).addClass("select2-highlighted"), this.search.attr("aria-activedescendant", choice.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(choice.text()), (data = choice.data("select2-data")) && this.opts.element.trigger({
                            type: "select2-highlight",
                            val: this.id(data),
                            choice: data
                        })
                    },
                    removeHighlight: function() {
                        this.results.find(".select2-highlighted").removeClass("select2-highlighted")
                    },
                    touchMoved: function() {
                        this._touchMoved = !0
                    },
                    clearTouchMoved: function() {
                        this._touchMoved = !1
                    },
                    countSelectableResults: function() {
                        return this.findHighlightableChoices().length
                    },
                    highlightUnderEvent: function(event) {
                        var el = $(event.target).closest(".select2-result-selectable");
                        if (el.length > 0 && !el.is(".select2-highlighted")) {
                            var choices = this.findHighlightableChoices();
                            this.highlight(choices.index(el))
                        } else 0 == el.length && this.removeHighlight()
                    },
                    loadMoreIfNeeded: function() {
                        var results = this.results,
                            more = results.find("li.select2-more-results"),
                            page = this.resultsPage + 1,
                            self = this,
                            term = this.search.val(),
                            context = this.context;
                        0 !== more.length && more.offset().top - results.offset().top - results.height() <= this.opts.loadMorePadding && (more.addClass("select2-active"), this.opts.query({
                            element: this.opts.element,
                            term: term,
                            page: page,
                            context: context,
                            matcher: this.opts.matcher,
                            callback: this.bind(function(data) {
                                self.opened() && (self.opts.populateResults.call(this, results, data.results, {
                                    term: term,
                                    page: page,
                                    context: context
                                }), self.postprocessResults(data, !1, !1), !0 === data.more ? (more.detach().appendTo(results).text(evaluate(self.opts.formatLoadMore, page + 1)), window.setTimeout(function() {
                                    self.loadMoreIfNeeded()
                                }, 10)) : more.remove(), self.positionDropdown(), self.resultsPage = page, self.context = data.context, this.opts.element.trigger({
                                    type: "select2-loaded",
                                    items: data
                                }))
                            })
                        }))
                    },
                    tokenize: function() {},
                    updateResults: function(initial) {
                        var data, input, queryNumber, search = this.search,
                            results = this.results,
                            opts = this.opts,
                            self = this,
                            term = search.val(),
                            lastTerm = $.data(this.container, "select2-last-term");
                        if ((!0 === initial || !lastTerm || !equal(term, lastTerm)) && ($.data(this.container, "select2-last-term", term), !0 === initial || !1 !== this.showSearchInput && this.opened())) {
                            queryNumber = ++this.queryCount;
                            var maxSelSize = this.getMaximumSelectionSize();
                            if (!(maxSelSize >= 1 && (data = this.data(), $.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")))) return search.val().length < opts.minimumInputLength ? (checkFormatter(opts.formatInputTooShort, "formatInputTooShort") ? render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooShort, search.val(), opts.minimumInputLength) + "</li>") : render(""), void(initial && this.showSearch && this.showSearch(!0))) : void(opts.maximumInputLength && search.val().length > opts.maximumInputLength ? checkFormatter(opts.formatInputTooLong, "formatInputTooLong") ? render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooLong, search.val(), opts.maximumInputLength) + "</li>") : render("") : (opts.formatSearching && 0 === this.findHighlightableChoices().length && render("<li class='select2-searching'>" + evaluate(opts.formatSearching) + "</li>"), search.addClass("select2-active"), this.removeHighlight(), (input = this.tokenize()) != undefined && null != input && search.val(input), this.resultsPage = 1, opts.query({
                                element: opts.element,
                                term: search.val(),
                                page: this.resultsPage,
                                context: null,
                                matcher: opts.matcher,
                                callback: this.bind(function(data) {
                                    var def;
                                    queryNumber == this.queryCount && (this.opened() ? (this.context = data.context === undefined ? null : data.context, this.opts.createSearchChoice && "" !== search.val() && (def = this.opts.createSearchChoice.call(self, search.val(), data.results)) !== undefined && null !== def && self.id(def) !== undefined && null !== self.id(def) && 0 === $(data.results).filter(function() {
                                        return equal(self.id(this), self.id(def))
                                    }).length && this.opts.createSearchChoicePosition(data.results, def), 0 === data.results.length && checkFormatter(opts.formatNoMatches, "formatNoMatches") ? render("<li class='select2-no-results'>" + evaluate(opts.formatNoMatches, search.val()) + "</li>") : (results.empty(), self.opts.populateResults.call(this, results, data.results, {
                                        term: search.val(),
                                        page: this.resultsPage,
                                        context: null
                                    }), !0 === data.more && checkFormatter(opts.formatLoadMore, "formatLoadMore") && (results.append("<li class='select2-more-results'>" + self.opts.escapeMarkup(evaluate(opts.formatLoadMore, this.resultsPage)) + "</li>"), window.setTimeout(function() {
                                        self.loadMoreIfNeeded()
                                    }, 10)), this.postprocessResults(data, initial), postRender(), this.opts.element.trigger({
                                        type: "select2-loaded",
                                        items: data
                                    }))) : this.search.removeClass("select2-active"))
                                })
                            })));
                            render("<li class='select2-selection-limit'>" + evaluate(opts.formatSelectionTooBig, maxSelSize) + "</li>")
                        }

                        function postRender() {
                            search.removeClass("select2-active"), self.positionDropdown(), results.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? self.liveRegion.text(results.text()) : self.liveRegion.text(self.opts.formatMatches(results.find(".select2-result-selectable").length))
                        }

                        function render(html) {
                            results.html(html), postRender()
                        }
                    },
                    cancel: function() {
                        this.close()
                    },
                    blur: function() {
                        this.opts.selectOnBlur && this.selectHighlighted({
                            noFocus: !0
                        }), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
                    },
                    focusSearch: function() {
                        var $el;
                        ($el = this.search)[0] !== document.activeElement && window.setTimeout(function() {
                            var range, el = $el[0],
                                pos = $el.val().length;
                            $el.focus(), (el.offsetWidth > 0 || el.offsetHeight > 0) && el === document.activeElement && (el.setSelectionRange ? el.setSelectionRange(pos, pos) : el.createTextRange && ((range = el.createTextRange()).collapse(!1), range.select()))
                        }, 0)
                    },
                    selectHighlighted: function(options) {
                        if (this._touchMoved) this.clearTouchMoved();
                        else {
                            var index = this.highlight(),
                                data = this.results.find(".select2-highlighted").closest(".select2-result").data("select2-data");
                            data ? (this.highlight(index), this.onSelect(data, options)) : options && options.noFocus && this.close()
                        }
                    },
                    getPlaceholder: function() {
                        var placeholderOption;
                        return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined)
                    },
                    getPlaceholderOption: function() {
                        if (this.select) {
                            var firstOption = this.select.children("option").first();
                            if (this.opts.placeholderOption !== undefined) return "first" === this.opts.placeholderOption && firstOption || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
                            if ("" === $.trim(firstOption.text()) && "" === firstOption.val()) return firstOption
                        }
                    },
                    initContainerWidth: function() {
                        var width = function() {
                            var style, attrs, matches, i, l;
                            if ("off" === this.opts.width) return null;
                            if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
                            if ("copy" === this.opts.width || "resolve" === this.opts.width) {
                                if ((style = this.opts.element.attr("style")) !== undefined)
                                    for (i = 0, l = (attrs = style.split(";")).length; i < l; i += 1)
                                        if (null !== (matches = attrs[i].replace(/\s/g, "").match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i)) && matches.length >= 1) return matches[1];
                                return "resolve" === this.opts.width ? (style = this.opts.element.css("width")).indexOf("%") > 0 ? style : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px" : null
                            }
                            return $.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
                        }.call(this);
                        null !== width && this.container.css("width", width)
                    }
                }), {
                    createContainer: function() {
                        return $(document.createElement("div")).attr({
                            class: "select2-container"
                        }).html(["<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>", "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>", "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>", "</a>", "<label for='' class='select2-offscreen'></label>", "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />", "<div class='select2-drop select2-display-none'>", "   <div class='select2-search'>", "       <label for='' class='select2-offscreen'></label>", "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'", "       aria-autocomplete='list' />", "   </div>", "   <ul class='select2-results' role='listbox'>", "   </ul>", "</div>"].join(""))
                    },
                    enableInterface: function() {
                        this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
                    },
                    opening: function() {
                        var el, range, len;
                        this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), !1 !== this.showSearchInput && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), (el = this.search.get(0)).createTextRange ? ((range = el.createTextRange()).collapse(!1), range.select()) : el.setSelectionRange && (len = this.search.val().length, el.setSelectionRange(len, len))), "" === this.search.val() && this.nextSearchTerm != undefined && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger($.Event("select2-open"))
                    },
                    close: function() {
                        this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
                    },
                    focus: function() {
                        this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
                    },
                    isFocused: function() {
                        return this.container.hasClass("select2-container-active")
                    },
                    cancel: function() {
                        this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
                    },
                    destroy: function() {
                        $("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), cleanupJQueryElements.call(this, "selection", "focusser")
                    },
                    initContainer: function() {
                        var selection, elementLabel, container = this.container,
                            dropdown = this.dropdown,
                            idSuffix = nextUid();
                        this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = selection = container.find(".select2-choice"), this.focusser = container.find(".select2-focusser"), selection.find(".select2-chosen").attr("id", "select2-chosen-" + idSuffix), this.focusser.attr("aria-labelledby", "select2-chosen-" + idSuffix), this.results.attr("id", "select2-results-" + idSuffix), this.search.attr("aria-owns", "select2-results-" + idSuffix), this.focusser.attr("id", "s2id_autogen" + idSuffix), elementLabel = $("label[for='" + this.opts.element.attr("id") + "']"), this.focusser.prev().text(elementLabel.text()).attr("for", this.focusser.attr("id"));
                        var originalTitle = this.opts.element.attr("title");
                        this.opts.element.attr("title", originalTitle || elementLabel.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text($("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(e) {
                            if (this.isInterfaceEnabled())
                                if (e.which !== KEY.PAGE_UP && e.which !== KEY.PAGE_DOWN) switch (e.which) {
                                    case KEY.UP:
                                    case KEY.DOWN:
                                        return this.moveHighlight(e.which === KEY.UP ? -1 : 1), void killEvent(e);
                                    case KEY.ENTER:
                                        return this.selectHighlighted(), void killEvent(e);
                                    case KEY.TAB:
                                        return void this.selectHighlighted({
                                            noFocus: !0
                                        });
                                    case KEY.ESC:
                                        return this.cancel(e), void killEvent(e)
                                } else killEvent(e)
                        })), this.search.on("blur", this.bind(function(e) {
                            document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
                                this.opened() && this.search.focus()
                            }), 0)
                        })), this.focusser.on("keydown", this.bind(function(e) {
                            if (this.isInterfaceEnabled() && e.which !== KEY.TAB && !KEY.isControl(e) && !KEY.isFunctionKey(e) && e.which !== KEY.ESC) {
                                if (!1 !== this.opts.openOnEnter || e.which !== KEY.ENTER) {
                                    if (e.which == KEY.DOWN || e.which == KEY.UP || e.which == KEY.ENTER && this.opts.openOnEnter) {
                                        if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;
                                        return this.open(), void killEvent(e)
                                    }
                                    return e.which == KEY.DELETE || e.which == KEY.BACKSPACE ? (this.opts.allowClear && this.clear(), void killEvent(e)) : void 0
                                }
                                killEvent(e)
                            }
                        })), installKeyUpChangeEvent(this.focusser), this.focusser.on("keyup-change input", this.bind(function(e) {
                            if (this.opts.minimumResultsForSearch >= 0) {
                                if (e.stopPropagation(), this.opened()) return;
                                this.open()
                            }
                        })), selection.on("mousedown touchstart", "abbr", this.bind(function(e) {
                            var event;
                            this.isInterfaceEnabled() && (this.clear(), (event = e).preventDefault(), event.stopImmediatePropagation(), this.close(), this.selection.focus())
                        })), selection.on("click", this.bind(function(e) {
                            reinsertElement(selection), this.container.hasClass("select2-container-active") || this.opts.element.trigger($.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), killEvent(e)
                        })), dropdown.on("mousedown touchstart", this.bind(function() {
                            this.opts.shouldFocusInput(this) && this.search.focus()
                        })), selection.on("focus", this.bind(function(e) {
                            killEvent(e)
                        })), this.focusser.on("focus", this.bind(function() {
                            this.container.hasClass("select2-container-active") || this.opts.element.trigger($.Event("select2-focus")), this.container.addClass("select2-container-active")
                        })).on("blur", this.bind(function() {
                            this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger($.Event("select2-blur")))
                        })), this.search.on("focus", this.bind(function() {
                            this.container.hasClass("select2-container-active") || this.opts.element.trigger($.Event("select2-focus")), this.container.addClass("select2-container-active")
                        })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.setPlaceholder()
                    },
                    clear: function(triggerChange) {
                        var data = this.selection.data("select2-data");
                        if (data) {
                            var evt = $.Event("select2-clearing");
                            if (this.opts.element.trigger(evt), evt.isDefaultPrevented()) return;
                            var placeholderOption = this.getPlaceholderOption();
                            this.opts.element.val(placeholderOption ? placeholderOption.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), !1 !== triggerChange && (this.opts.element.trigger({
                                type: "select2-removed",
                                val: this.id(data),
                                choice: data
                            }), this.triggerChange({
                                removed: data
                            }))
                        }
                    },
                    initSelection: function() {
                        if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
                        else {
                            var self = this;
                            this.opts.initSelection.call(null, this.opts.element, function(selected) {
                                selected !== undefined && null !== selected && (self.updateSelection(selected), self.close(), self.setPlaceholder(), self.nextSearchTerm = self.opts.nextSearchTerm(selected, self.search.val()))
                            })
                        }
                    },
                    isPlaceholderOptionSelected: function() {
                        var placeholderOption;
                        return this.getPlaceholder() !== undefined && ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === undefined || null === this.opts.element.val())
                    },
                    prepareOpts: function() {
                        var opts = this.parent.prepareOpts.apply(this, arguments),
                            self = this;
                        return "select" === opts.element.get(0).tagName.toLowerCase() ? opts.initSelection = function(element, callback) {
                            var selected = element.find("option").filter(function() {
                                return this.selected && !this.disabled
                            });
                            callback(self.optionToData(selected))
                        } : "data" in opts && (opts.initSelection = opts.initSelection || function(element, callback) {
                            var id = element.val(),
                                match = null;
                            opts.query({
                                matcher: function(term, text, el) {
                                    var is_match = equal(id, opts.id(el));
                                    return is_match && (match = el), is_match
                                },
                                callback: $.isFunction(callback) ? function() {
                                    callback(match)
                                } : $.noop
                            })
                        }), opts
                    },
                    getPlaceholder: function() {
                        return this.select && this.getPlaceholderOption() === undefined ? undefined : this.parent.getPlaceholder.apply(this, arguments)
                    },
                    setPlaceholder: function() {
                        var placeholder = this.getPlaceholder();
                        if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {
                            if (this.select && this.getPlaceholderOption() === undefined) return;
                            this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
                        }
                    },
                    postprocessResults: function(data, initial, noHighlightUpdate) {
                        var selected = 0,
                            self = this;
                        if (this.findHighlightableChoices().each2(function(i, elm) {
                                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) return selected = i, !1
                            }), !1 !== noHighlightUpdate && (!0 === initial && selected >= 0 ? this.highlight(selected) : this.highlight(0)), !0 === initial) {
                            var min = this.opts.minimumResultsForSearch;
                            min >= 0 && this.showSearch(function countResults(results) {
                                var count = 0;
                                return $.each(results, function(i, item) {
                                    item.children ? count += countResults(item.children) : count++
                                }), count
                            }(data.results) >= min)
                        }
                    },
                    showSearch: function(showSearchInput) {
                        this.showSearchInput !== showSearchInput && (this.showSearchInput = showSearchInput, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput), $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput))
                    },
                    onSelect: function(data, options) {
                        if (this.triggerSelect(data)) {
                            var old = this.opts.element.val(),
                                oldData = this.data();
                            this.opts.element.val(this.id(data)), this.updateSelection(data), this.opts.element.trigger({
                                type: "select2-selected",
                                val: this.id(data),
                                choice: data
                            }), this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val()), this.close(), options && options.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), equal(old, this.id(data)) || this.triggerChange({
                                added: data,
                                removed: oldData
                            })
                        }
                    },
                    updateSelection: function(data) {
                        var formatted, cssClass, container = this.selection.find(".select2-chosen");
                        this.selection.data("select2-data", data), container.empty(), null !== data && (formatted = this.opts.formatSelection(data, container, this.opts.escapeMarkup)), formatted !== undefined && container.append(formatted), (cssClass = this.opts.formatSelectionCssClass(data, container)) !== undefined && container.addClass(cssClass), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== undefined && this.container.addClass("select2-allowclear")
                    },
                    val: function() {
                        var val, triggerChange = !1,
                            data = null,
                            self = this,
                            oldData = this.data();
                        if (0 === arguments.length) return this.opts.element.val();
                        if (val = arguments[0], arguments.length > 1 && (triggerChange = arguments[1]), this.select) this.select.val(val).find("option").filter(function() {
                            return this.selected
                        }).each2(function(i, elm) {
                            return data = self.optionToData(elm), !1
                        }), this.updateSelection(data), this.setPlaceholder(), triggerChange && this.triggerChange({
                            added: data,
                            removed: oldData
                        });
                        else {
                            if (!val && 0 !== val) return void this.clear(triggerChange);
                            if (this.opts.initSelection === undefined) throw new Error("cannot call val() if initSelection() is not defined");
                            this.opts.element.val(val), this.opts.initSelection(this.opts.element, function(data) {
                                self.opts.element.val(data ? self.id(data) : ""), self.updateSelection(data), self.setPlaceholder(), triggerChange && self.triggerChange({
                                    added: data,
                                    removed: oldData
                                })
                            })
                        }
                    },
                    clearSearch: function() {
                        this.search.val(""), this.focusser.val("")
                    },
                    data: function(value) {
                        var data, triggerChange = !1;
                        if (0 === arguments.length) return data = this.selection.data("select2-data"), data == undefined && (data = null), data;
                        arguments.length > 1 && (triggerChange = arguments[1]), value ? (data = this.data(), this.opts.element.val(value ? this.id(value) : ""), this.updateSelection(value), triggerChange && this.triggerChange({
                            added: value,
                            removed: data
                        })) : this.clear(triggerChange)
                    }
                }), MultiSelect2 = clazz(AbstractSelect2, {
                    createContainer: function() {
                        return $(document.createElement("div")).attr({
                            class: "select2-container select2-container-multi"
                        }).html(["<ul class='select2-choices'>", "  <li class='select2-search-field'>", "    <label for='' class='select2-offscreen'></label>", "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>", "  </li>", "</ul>", "<div class='select2-drop select2-drop-multi select2-display-none'>", "   <ul class='select2-results'>", "   </ul>", "</div>"].join(""))
                    },
                    prepareOpts: function() {
                        var opts = this.parent.prepareOpts.apply(this, arguments),
                            self = this;
                        return "select" === opts.element.get(0).tagName.toLowerCase() ? opts.initSelection = function(element, callback) {
                            var data = [];
                            element.find("option").filter(function() {
                                return this.selected && !this.disabled
                            }).each2(function(i, elm) {
                                data.push(self.optionToData(elm))
                            }), callback(data)
                        } : "data" in opts && (opts.initSelection = opts.initSelection || function(element, callback) {
                            var ids = splitVal(element.val(), opts.separator),
                                matches = [];
                            opts.query({
                                matcher: function(term, text, el) {
                                    var is_match = $.grep(ids, function(id) {
                                        return equal(id, opts.id(el))
                                    }).length;
                                    return is_match && matches.push(el), is_match
                                },
                                callback: $.isFunction(callback) ? function() {
                                    for (var ordered = [], i = 0; i < ids.length; i++)
                                        for (var id = ids[i], j = 0; j < matches.length; j++) {
                                            var match = matches[j];
                                            if (equal(id, opts.id(match))) {
                                                ordered.push(match), matches.splice(j, 1);
                                                break
                                            }
                                        }
                                    callback(ordered)
                                } : $.noop
                            })
                        }), opts
                    },
                    selectChoice: function(choice) {
                        var selected = this.container.find(".select2-search-choice-focus");
                        selected.length && choice && choice[0] == selected[0] || (selected.length && this.opts.element.trigger("choice-deselected", selected), selected.removeClass("select2-search-choice-focus"), choice && choice.length && (this.close(), choice.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", choice)))
                    },
                    destroy: function() {
                        $("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), cleanupJQueryElements.call(this, "searchContainer", "selection")
                    },
                    initContainer: function() {
                        var selection, selector = ".select2-choices";
                        this.searchContainer = this.container.find(".select2-search-field"), this.selection = selection = this.container.find(selector);
                        var _this = this;
                        this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function(e) {
                            _this.search[0].focus(), _this.selectChoice($(this))
                        }), this.search.attr("id", "s2id_autogen" + nextUid()), this.search.prev().text($("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("input paste", this.bind(function() {
                            this.isInterfaceEnabled() && (this.opened() || this.open())
                        })), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(e) {
                            if (this.isInterfaceEnabled()) {
                                ++this.keydowns;
                                var selected = selection.find(".select2-search-choice-focus"),
                                    prev = selected.prev(".select2-search-choice:not(.select2-locked)"),
                                    next = selected.next(".select2-search-choice:not(.select2-locked)"),
                                    pos = function(el) {
                                        var offset = 0,
                                            length = 0;
                                        if ("selectionStart" in (el = $(el)[0])) offset = el.selectionStart, length = el.selectionEnd - offset;
                                        else if ("selection" in document) {
                                            el.focus();
                                            var sel = document.selection.createRange();
                                            length = document.selection.createRange().text.length, sel.moveStart("character", -el.value.length), offset = sel.text.length - length
                                        }
                                        return {
                                            offset: offset,
                                            length: length
                                        }
                                    }(this.search);
                                if (selected.length && (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
                                    var selectedChoice = selected;
                                    return e.which == KEY.LEFT && prev.length ? selectedChoice = prev : e.which == KEY.RIGHT ? selectedChoice = next.length ? next : null : e.which === KEY.BACKSPACE ? this.unselect(selected.first()) && (this.search.width(10), selectedChoice = prev.length ? prev : next) : e.which == KEY.DELETE ? this.unselect(selected.first()) && (this.search.width(10), selectedChoice = next.length ? next : null) : e.which == KEY.ENTER && (selectedChoice = null), this.selectChoice(selectedChoice), killEvent(e), void(selectedChoice && selectedChoice.length || this.open())
                                }
                                if ((e.which === KEY.BACKSPACE && 1 == this.keydowns || e.which == KEY.LEFT) && 0 == pos.offset && !pos.length) return this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last()), void killEvent(e);
                                if (this.selectChoice(null), this.opened()) switch (e.which) {
                                    case KEY.UP:
                                    case KEY.DOWN:
                                        return this.moveHighlight(e.which === KEY.UP ? -1 : 1), void killEvent(e);
                                    case KEY.ENTER:
                                        return this.selectHighlighted(), void killEvent(e);
                                    case KEY.TAB:
                                        return this.selectHighlighted({
                                            noFocus: !0
                                        }), void this.close();
                                    case KEY.ESC:
                                        return this.cancel(e), void killEvent(e)
                                }
                                if (e.which !== KEY.TAB && !KEY.isControl(e) && !KEY.isFunctionKey(e) && e.which !== KEY.BACKSPACE && e.which !== KEY.ESC) {
                                    if (e.which === KEY.ENTER) {
                                        if (!1 === this.opts.openOnEnter) return;
                                        if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return
                                    }
                                    this.open(), e.which !== KEY.PAGE_UP && e.which !== KEY.PAGE_DOWN || killEvent(e), e.which === KEY.ENTER && killEvent(e)
                                }
                            }
                        })), this.search.on("keyup", this.bind(function(e) {
                            this.keydowns = 0, this.resizeSearch()
                        })), this.search.on("blur", this.bind(function(e) {
                            this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), e.stopImmediatePropagation(), this.opts.element.trigger($.Event("select2-blur"))
                        })), this.container.on("click", selector, this.bind(function(e) {
                            this.isInterfaceEnabled() && ($(e.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger($.Event("select2-focus")), this.open(), this.focusSearch(), e.preventDefault()))
                        })), this.container.on("focus", selector, this.bind(function() {
                            this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger($.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
                        })), this.initContainerWidth(), this.opts.element.addClass("select2-offscreen"), this.clearSearch()
                    },
                    enableInterface: function() {
                        this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
                    },
                    initSelection: function() {
                        if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
                            var self = this;
                            this.opts.initSelection.call(null, this.opts.element, function(data) {
                                data !== undefined && null !== data && (self.updateSelection(data), self.close(), self.clearSearch())
                            })
                        }
                    },
                    clearSearch: function() {
                        var placeholder = this.getPlaceholder(),
                            maxWidth = this.getMaxSearchWidth();
                        placeholder !== undefined && 0 === this.getVal().length && !1 === this.search.hasClass("select2-focused") ? (this.search.val(placeholder).addClass("select2-default"), this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"))) : this.search.val("").width(10)
                    },
                    clearPlaceholder: function() {
                        this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
                    },
                    opening: function() {
                        this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != undefined && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger($.Event("select2-open"))
                    },
                    close: function() {
                        this.opened() && this.parent.close.apply(this, arguments)
                    },
                    focus: function() {
                        this.close(), this.search.focus()
                    },
                    isFocused: function() {
                        return this.search.hasClass("select2-focused")
                    },
                    updateSelection: function(data) {
                        var ids = [],
                            filtered = [],
                            self = this;
                        $(data).each(function() {
                            indexOf(self.id(this), ids) < 0 && (ids.push(self.id(this)), filtered.push(this))
                        }), data = filtered, this.selection.find(".select2-search-choice").remove(), $(data).each(function() {
                            self.addSelectedChoice(this)
                        }), self.postprocessResults()
                    },
                    tokenize: function() {
                        var input = this.search.val();
                        null != (input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts)) && input != undefined && (this.search.val(input), input.length > 0 && this.open())
                    },
                    onSelect: function(data, options) {
                        this.triggerSelect(data) && (this.addSelectedChoice(data), this.opts.element.trigger({
                            type: "selected",
                            val: this.id(data),
                            choice: data
                        }), this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val()), this.clearSearch(), this.updateResults(), !this.select && this.opts.closeOnSelect || this.postprocessResults(data, !1, !0 === this.opts.closeOnSelect), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != undefined && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
                            added: data
                        }), options && options.noFocus || this.focusSearch())
                    },
                    cancel: function() {
                        this.close(), this.focusSearch()
                    },
                    addSelectedChoice: function(data) {
                        var formatted, cssClass, enableChoice = !data.locked,
                            enabledItem = $("<li class='select2-search-choice'>    <div></div>    <a href='#' class='select2-search-choice-close' tabindex='-1'></a></li>"),
                            disabledItem = $("<li class='select2-search-choice select2-locked'><div></div></li>"),
                            choice = enableChoice ? enabledItem : disabledItem,
                            id = this.id(data),
                            val = this.getVal();
                        (formatted = this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup)) != undefined && choice.find("div").replaceWith("<div>" + formatted + "</div>"), (cssClass = this.opts.formatSelectionCssClass(data, choice.find("div"))) != undefined && choice.addClass(cssClass), enableChoice && choice.find(".select2-search-choice-close").on("mousedown", killEvent).on("click dblclick", this.bind(function(e) {
                            this.isInterfaceEnabled() && (this.unselect($(e.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), killEvent(e), this.close(), this.focusSearch())
                        })).on("focus", this.bind(function() {
                            this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
                        })), choice.data("select2-data", data), choice.insertBefore(this.searchContainer), val.push(id), this.setVal(val)
                    },
                    unselect: function(selected) {
                        var data, index, val = this.getVal();
                        if (0 === (selected = selected.closest(".select2-search-choice")).length) throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
                        if (data = selected.data("select2-data")) {
                            var evt = $.Event("select2-removing");
                            if (evt.val = this.id(data), evt.choice = data, this.opts.element.trigger(evt), evt.isDefaultPrevented()) return !1;
                            for (;
                                (index = indexOf(this.id(data), val)) >= 0;) val.splice(index, 1), this.setVal(val), this.select && this.postprocessResults();
                            return selected.remove(), this.opts.element.trigger({
                                type: "select2-removed",
                                val: this.id(data),
                                choice: data
                            }), this.triggerChange({
                                removed: data
                            }), !0
                        }
                    },
                    postprocessResults: function(data, initial, noHighlightUpdate) {
                        var val = this.getVal(),
                            choices = this.results.find(".select2-result"),
                            compound = this.results.find(".select2-result-with-children"),
                            self = this;
                        choices.each2(function(i, choice) {
                            indexOf(self.id(choice.data("select2-data")), val) >= 0 && (choice.addClass("select2-selected"), choice.find(".select2-result-selectable").addClass("select2-selected"))
                        }), compound.each2(function(i, choice) {
                            choice.is(".select2-result-selectable") || 0 !== choice.find(".select2-result-selectable:not(.select2-selected)").length || choice.addClass("select2-selected")
                        }), -1 == this.highlight() && !1 !== noHighlightUpdate && self.highlight(0), !this.opts.createSearchChoice && !choices.filter(".select2-result:not(.select2-selected)").length > 0 && (!data || data && !data.more && 0 === this.results.find(".select2-no-results").length) && checkFormatter(self.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + evaluate(self.opts.formatNoMatches, self.search.val()) + "</li>")
                    },
                    getMaxSearchWidth: function() {
                        return this.selection.width() - getSideBorderPadding(this.search)
                    },
                    resizeSearch: function() {
                        var minimumWidth, left, maxWidth, searchWidth, sideBorderPadding = getSideBorderPadding(this.search);
                        minimumWidth = function(e) {
                            if (!sizer) {
                                var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
                                (sizer = $(document.createElement("div")).css({
                                    position: "absolute",
                                    left: "-10000px",
                                    top: "-10000px",
                                    display: "none",
                                    fontSize: style.fontSize,
                                    fontFamily: style.fontFamily,
                                    fontStyle: style.fontStyle,
                                    fontWeight: style.fontWeight,
                                    letterSpacing: style.letterSpacing,
                                    textTransform: style.textTransform,
                                    whiteSpace: "nowrap"
                                })).attr("class", "select2-sizer"), $("body").append(sizer)
                            }
                            return sizer.text(e.val()), sizer.width()
                        }(this.search) + 10, left = this.search.offset().left, (searchWidth = (maxWidth = this.selection.width()) - (left - this.selection.offset().left) - sideBorderPadding) < minimumWidth && (searchWidth = maxWidth - sideBorderPadding), searchWidth < 40 && (searchWidth = maxWidth - sideBorderPadding), searchWidth <= 0 && (searchWidth = minimumWidth), this.search.width(Math.floor(searchWidth))
                    },
                    getVal: function() {
                        var val;
                        return this.select ? null === (val = this.select.val()) ? [] : val : splitVal(val = this.opts.element.val(), this.opts.separator)
                    },
                    setVal: function(val) {
                        var unique;
                        this.select ? this.select.val(val) : (unique = [], $(val).each(function() {
                            indexOf(this, unique) < 0 && unique.push(this)
                        }), this.opts.element.val(0 === unique.length ? "" : unique.join(this.opts.separator)))
                    },
                    buildChangeDetails: function(old, current) {
                        current = current.slice(0), old = old.slice(0);
                        for (var i = 0; i < current.length; i++)
                            for (var j = 0; j < old.length; j++) equal(this.opts.id(current[i]), this.opts.id(old[j])) && (current.splice(i, 1), i > 0 && i--, old.splice(j, 1), j--);
                        return {
                            added: current,
                            removed: old
                        }
                    },
                    val: function(_val, triggerChange) {
                        var oldData, self = this;
                        if (0 === arguments.length) return this.getVal();
                        if ((oldData = this.data()).length || (oldData = []), !_val && 0 !== _val) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), void(triggerChange && this.triggerChange({
                            added: this.data(),
                            removed: oldData
                        }));
                        if (this.setVal(_val), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), triggerChange && this.triggerChange(this.buildChangeDetails(oldData, this.data()));
                        else {
                            if (this.opts.initSelection === undefined) throw new Error("val() cannot be called if initSelection() is not defined");
                            this.opts.initSelection(this.opts.element, function(data) {
                                var ids = $.map(data, self.id);
                                self.setVal(ids), self.updateSelection(data), self.clearSearch(), triggerChange && self.triggerChange(self.buildChangeDetails(oldData, self.data()))
                            })
                        }
                        this.clearSearch()
                    },
                    onSortStart: function() {
                        if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
                        this.search.width(0), this.searchContainer.hide()
                    },
                    onSortEnd: function() {
                        var val = [],
                            self = this;
                        this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
                            val.push(self.opts.id($(this).data("select2-data")))
                        }), this.setVal(val), this.triggerChange()
                    },
                    data: function(values, triggerChange) {
                        var ids, old, self = this;
                        if (0 === arguments.length) return this.selection.children(".select2-search-choice").map(function() {
                            return $(this).data("select2-data")
                        }).get();
                        old = this.data(), values || (values = []), ids = $.map(values, function(e) {
                            return self.opts.id(e)
                        }), this.setVal(ids), this.updateSelection(values), this.clearSearch(), triggerChange && this.triggerChange(this.buildChangeDetails(old, this.data()))
                    }
                }), $.fn.select2 = function() {
                    var opts, select2, method, value, multiple, args = Array.prototype.slice.call(arguments, 0),
                        allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
                        valueMethods = ["opened", "isFocused", "container", "dropdown"],
                        propertyMethods = ["val", "data"],
                        methodsMap = {
                            search: "externalSearch"
                        };
                    return this.each(function() {
                        if (0 === args.length || "object" == typeof args[0])(opts = 0 === args.length ? {} : $.extend({}, args[0])).element = $(this), "select" === opts.element.get(0).tagName.toLowerCase() ? multiple = opts.element.prop("multiple") : (multiple = opts.multiple || !1, "tags" in opts && (opts.multiple = multiple = !0)), (select2 = multiple ? new window.Select2.class.multi : new window.Select2.class.single).init(opts);
                        else {
                            if ("string" != typeof args[0]) throw "Invalid arguments to select2 plugin: " + args;
                            if (indexOf(args[0], allowedMethods) < 0) throw "Unknown method: " + args[0];
                            if (value = undefined, (select2 = $(this).data("select2")) === undefined) return;
                            if ("container" === (method = args[0]) ? value = select2.container : "dropdown" === method ? value = select2.dropdown : (methodsMap[method] && (method = methodsMap[method]), value = select2[method].apply(select2, args.slice(1))), indexOf(args[0], valueMethods) >= 0 || indexOf(args[0], propertyMethods) >= 0 && 1 == args.length) return !1
                        }
                    }), value === undefined ? this : value
                }, $.fn.select2.defaults = {
                    width: "copy",
                    loadMorePadding: 0,
                    closeOnSelect: !0,
                    openOnEnter: !0,
                    containerCss: {},
                    dropdownCss: {},
                    containerCssClass: "",
                    dropdownCssClass: "",
                    formatResult: function(result, container, query, escapeMarkup) {
                        var markup = [];
                        return markMatch(result.text, query.term, markup, escapeMarkup), markup.join("")
                    },
                    formatSelection: function(data, container, escapeMarkup) {
                        return data ? escapeMarkup(data.text) : undefined
                    },
                    sortResults: function(results, container, query) {
                        return results
                    },
                    formatResultCssClass: function(data) {
                        return data.css
                    },
                    formatSelectionCssClass: function(data, container) {
                        return undefined
                    },
                    formatMatches: function(matches) {
                        return matches + " results are available, use up and down arrow keys to navigate."
                    },
                    formatNoMatches: function() {
                        return "No matches found"
                    },
                    formatInputTooShort: function(input, min) {
                        var n = min - input.length;
                        return "Please enter " + n + " or more character" + (1 == n ? "" : "s")
                    },
                    formatInputTooLong: function(input, max) {
                        var n = input.length - max;
                        return "Please delete " + n + " character" + (1 == n ? "" : "s")
                    },
                    formatSelectionTooBig: function(limit) {
                        return "You can only select " + limit + " item" + (1 == limit ? "" : "s")
                    },
                    formatLoadMore: function(pageNumber) {
                        return "Loading more resultsâ€¦"
                    },
                    formatSearching: function() {
                        return "Searchingâ€¦"
                    },
                    minimumResultsForSearch: 0,
                    minimumInputLength: 0,
                    maximumInputLength: null,
                    maximumSelectionSize: 0,
                    id: function(e) {
                        return e == undefined ? null : e.id
                    },
                    matcher: function(term, text) {
                        return stripDiacritics("" + text).toUpperCase().indexOf(stripDiacritics("" + term).toUpperCase()) >= 0
                    },
                    separator: ",",
                    tokenSeparators: [],
                    tokenizer: function(input, selection, selectCallback, opts) {
                        var token, index, i, l, separator, original = input,
                            dupe = !1;
                        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;
                        for (;;) {
                            for (index = -1, i = 0, l = opts.tokenSeparators.length; i < l && (separator = opts.tokenSeparators[i], !((index = input.indexOf(separator)) >= 0)); i++);
                            if (index < 0) break;
                            if (token = input.substring(0, index), input = input.substring(index + separator.length), token.length > 0 && (token = opts.createSearchChoice.call(this, token, selection)) !== undefined && null !== token && opts.id(token) !== undefined && null !== opts.id(token)) {
                                for (dupe = !1, i = 0, l = selection.length; i < l; i++)
                                    if (equal(opts.id(token), opts.id(selection[i]))) {
                                        dupe = !0;
                                        break
                                    }
                                dupe || selectCallback(token)
                            }
                        }
                        return original !== input ? input : void 0
                    },
                    escapeMarkup: defaultEscapeMarkup,
                    blurOnChange: !1,
                    selectOnBlur: !1,
                    adaptContainerCssClass: function(c) {
                        return c
                    },
                    adaptDropdownCssClass: function(c) {
                        return null
                    },
                    nextSearchTerm: function(selectedObject, currentSearchTerm) {
                        return undefined
                    },
                    searchInputPlaceholder: "",
                    createSearchChoicePosition: "top",
                    shouldFocusInput: function(instance) {
                        return !("ontouchstart" in window || navigator.msMaxTouchPoints > 0) || !(instance.opts.minimumResultsForSearch < 0)
                    }
                }, $.fn.select2.ajaxDefaults = {
                    transport: $.ajax,
                    params: {
                        type: "GET",
                        cache: !1,
                        dataType: "json"
                    }
                }, window.Select2 = {
                    query: {
                        ajax: ajax,
                        local: local,
                        tags: tags
                    },
                    util: {
                        debounce: debounce,
                        markMatch: markMatch,
                        escapeMarkup: defaultEscapeMarkup,
                        stripDiacritics: stripDiacritics
                    },
                    class: {
                        abstract: AbstractSelect2, single: SingleSelect2, multi: MultiSelect2
                    }
                }
            }

            function reinsertElement(element) {
                var placeholder = $(document.createTextNode(""));
                element.before(placeholder), placeholder.before(element), placeholder.remove()
            }

            function stripDiacritics(str) {
                return str.replace(/[^\u0000-\u007E]/g, function(a) {
                    return DIACRITICS[a] || a
                })
            }

            function indexOf(value, array) {
                for (var i = 0, l = array.length; i < l; i += 1)
                    if (equal(value, array[i])) return i;
                return -1
            }

            function equal(a, b) {
                return a === b || a !== undefined && b !== undefined && (null !== a && null !== b && (a.constructor === String ? a + "" == b + "" : b.constructor === String && b + "" == a + ""))
            }

            function splitVal(string, separator) {
                var val, i, l;
                if (null === string || string.length < 1) return [];
                for (i = 0, l = (val = string.split(separator)).length; i < l; i += 1) val[i] = $.trim(val[i]);
                return val
            }

            function getSideBorderPadding(element) {
                return element.outerWidth(!1) - element.width()
            }

            function installKeyUpChangeEvent(element) {
                var key = "keyup-change-value";
                element.on("keydown", function() {
                    $.data(element, key) === undefined && $.data(element, key, element.val())
                }), element.on("keyup", function() {
                    var val = $.data(element, key);
                    val !== undefined && element.val() !== val && ($.removeData(element, key), element.trigger("keyup-change"))
                })
            }

            function debounce(quietMillis, fn, ctx) {
                var timeout;
                return ctx = ctx || undefined,
                    function() {
                        var args = arguments;
                        window.clearTimeout(timeout), timeout = window.setTimeout(function() {
                            fn.apply(ctx, args)
                        }, quietMillis)
                    }
            }

            function killEvent(event) {
                event.preventDefault(), event.stopPropagation()
            }

            function syncCssClasses(dest, src, adapter) {
                var classes, adapted, replacements = [];
                (classes = dest.attr("class")) && $((classes = "" + classes).split(" ")).each2(function() {
                    0 === this.indexOf("select2-") && replacements.push(this)
                }), (classes = src.attr("class")) && $((classes = "" + classes).split(" ")).each2(function() {
                    0 !== this.indexOf("select2-") && (adapted = adapter(this)) && replacements.push(adapted)
                }), dest.attr("class", replacements.join(" "))
            }

            function markMatch(text, term, markup, escapeMarkup) {
                var match = stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
                    tl = term.length;
                match < 0 ? markup.push(escapeMarkup(text)) : (markup.push(escapeMarkup(text.substring(0, match))), markup.push("<span class='select2-match'>"), markup.push(escapeMarkup(text.substring(match, match + tl))), markup.push("</span>"), markup.push(escapeMarkup(text.substring(match + tl, text.length))))
            }

            function defaultEscapeMarkup(markup) {
                var replace_map = {
                    "\\": "&#92;",
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#47;"
                };
                return String(markup).replace(/[&<>"'\/\\]/g, function(match) {
                    return replace_map[match]
                })
            }

            function ajax(options) {
                var timeout, handler = null,
                    quietMillis = options.quietMillis || 100,
                    ajaxUrl = options.url,
                    self = this;
                return function(query) {
                    window.clearTimeout(timeout), timeout = window.setTimeout(function() {
                        var data = options.data,
                            url = ajaxUrl,
                            transport = options.transport || $.fn.select2.ajaxDefaults.transport,
                            deprecated = {
                                type: options.type || "GET",
                                cache: options.cache || !1,
                                jsonpCallback: options.jsonpCallback || undefined,
                                dataType: options.dataType || "json"
                            },
                            params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);
                        data = data ? data.call(self, query.term, query.page, query.context) : null, url = "function" == typeof url ? url.call(self, query.term, query.page, query.context) : url, handler && "function" == typeof handler.abort && handler.abort(), options.params && ($.isFunction(options.params) ? $.extend(params, options.params.call(self)) : $.extend(params, options.params)), $.extend(params, {
                            url: url,
                            dataType: options.dataType,
                            data: data,
                            success: function(data) {
                                var results = options.results(data, query.page);
                                query.callback(results)
                            }
                        }), handler = transport.call(self, params)
                    }, quietMillis)
                }
            }

            function local(options) {
                var dataText, tmp, data = options,
                    text = function(item) {
                        return "" + item.text
                    };
                $.isArray(data) && (data = {
                    results: tmp = data
                }), !1 === $.isFunction(data) && (tmp = data, data = function() {
                    return tmp
                });
                var dataItem = data();
                return dataItem.text && (text = dataItem.text, $.isFunction(text) || (dataText = dataItem.text, text = function(item) {
                        return item[dataText]
                    })),
                    function(query) {
                        var _process, t = query.term,
                            filtered = {
                                results: []
                            };
                        "" !== t ? (_process = function(datum, collection) {
                            var group, attr;
                            if ((datum = datum[0]).children) {
                                for (attr in group = {}, datum) datum.hasOwnProperty(attr) && (group[attr] = datum[attr]);
                                group.children = [], $(datum.children).each2(function(i, childDatum) {
                                    _process(childDatum, group.children)
                                }), (group.children.length || query.matcher(t, text(group), datum)) && collection.push(group)
                            } else query.matcher(t, text(datum), datum) && collection.push(datum)
                        }, $(data().results).each2(function(i, datum) {
                            _process(datum, filtered.results)
                        }), query.callback(filtered)) : query.callback(data())
                    }
            }

            function tags(data) {
                var isFunc = $.isFunction(data);
                return function(query) {
                    var t = query.term,
                        filtered = {
                            results: []
                        },
                        result = isFunc ? data(query) : data;
                    $.isArray(result) && ($(result).each(function() {
                        var isObject = this.text !== undefined,
                            text = isObject ? this.text : this;
                        ("" === t || query.matcher(t, text)) && filtered.results.push(isObject ? this : {
                            id: this,
                            text: this
                        })
                    }), query.callback(filtered))
                }
            }

            function checkFormatter(formatter, formatterName) {
                if ($.isFunction(formatter)) return !0;
                if (!formatter) return !1;
                if ("string" == typeof formatter) return !0;
                throw new Error(formatterName + " must be a string, function, or falsy value")
            }

            function evaluate(val) {
                if ($.isFunction(val)) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return val.apply(null, args)
                }
                return val
            }

            function cleanupJQueryElements() {
                var self = this;
                Array.prototype.forEach.call(arguments, function(element) {
                    self[element].remove(), self[element] = null
                })
            }

            function clazz(SuperClass, methods) {
                var constructor = function() {};
                return (constructor.prototype = new SuperClass).constructor = constructor, constructor.prototype.parent = SuperClass.prototype, constructor.prototype = $.extend(constructor.prototype, methods), constructor
            }
        }(jQuery)
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        api = {},
        params = {
            config: [],
            family: [],
            format: [],
            namedConfig: [],
            retrieve: [],
            dataStatus: [],
            timestamp: []
        },
        forceSeparate = ["config", "family", "namedConfig"];

    function appendParam(name) {
        for (var paramsGroup = params[name], _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
        paramsGroup && args && (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isString(args) ? paramsGroup.push(args) : __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(args, function(param) {
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(param) ? params[name] = paramsGroup.concat(param) : __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isUndefined(param) || paramsGroup.push(param)
        }))
    }
    api.setFallbackNamedConfig = function() {
        params.namedConfig = params.namedConfig || [];
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
        __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(args, function(arg) {
            Array.isArray(arg) ? __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(arg, function(argItem) {
                __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(params.namedConfig, argItem) || params.namedConfig.push(argItem)
            }) : __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(params.namedConfig, arg) || params.namedConfig.push(arg)
        }), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(params.namedConfig, "default") || params.namedConfig.push("default")
    }, api.buildPath = function(endpoint, catalogId) {
        var query = [];
        return catalogId && appendParam("config", catalogId), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(params, function(value, name) {
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(value) || (__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.includes(forceSeparate, name) ? query.push(function(name) {
                var paramsGroup = params[name],
                    queries = [];
                if (paramsGroup && __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(paramsGroup, function(param) {
                        queries.push(name + "=" + param)
                    }), !__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isEmpty(queries)) return queries.join("&")
            }(name)) : query.push(function(name) {
                var paramsGroup = params[name];
                if (paramsGroup) return name + "=" + paramsGroup.join(",")
            }(name)))
        }), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(params, function(value, name) {
            params[name] = []
        }), endpoint + "&" + query.join("&")
    }, api.family = function() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
        return appendParam("family", args), this
    }, api.format = function() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
        return appendParam("format", args), this
    }, api.named = function() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) args[_key5] = arguments[_key5];
        return appendParam("namedConfig", args), this
    }, api.retrieve = function() {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) args[_key6] = arguments[_key6];
        return appendParam("retrieve", args), this
    }, api.dataStatus = function() {
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) args[_key7] = arguments[_key7];
        return appendParam("dataStatus", args), this
    }, api.timestamp = function() {
        for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) args[_key8] = arguments[_key8];
        return appendParam("timestamp", args), this
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__(298)
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__transformer_js__ = __webpack_require__(56),
        objectMap = {
            code: !0,
            name: !0,
            year: "configs.default.props.marketing-model-year",
            images: "configs.default.images",
            price: "configs.default.price",
            specs: "configs.default.specs"
        };
    __webpack_exports__.a = function(bslNameplate) {
        return __WEBPACK_IMPORTED_MODULE_0__transformer_js__.a.adaptDataTo(bslNameplate, objectMap)
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__(300)
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__transformer_js__ = __webpack_require__(56),
        objectMap = {
            code: !0,
            name: !0,
            configs: !0
        };
    __webpack_exports__.a = function(bslNameplate) {
        return __WEBPACK_IMPORTED_MODULE_0__transformer_js__.a.adaptDataTo(bslNameplate, objectMap)
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__(122)
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_odometer__ = __webpack_require__(303),
        __WEBPACK_IMPORTED_MODULE_1_odometer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_odometer__);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxOdometer", []).directive("ngOdometer", function() {
        return {
            restrict: "A",
            scope: {
                value: "="
            },
            link: function($scope, $element) {
                var od = new __WEBPACK_IMPORTED_MODULE_1_odometer___default.a({
                    el: $element[0],
                    value: $scope.value,
                    format: "(,ddd).dd"
                });
                $scope.$watch("value", function() {
                    od.update($scope.value)
                })
            }
        }
    })
}, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function() {
        var DIGIT_HTML, DURATION, FORMAT_PARSER, FRAMES_PER_VALUE, MS_PER_FRAME, MutationObserver, Odometer, TRANSITION_END_EVENTS, TRANSITION_SUPPORT, addClass, createFromHTML, fractionalPart, now, removeClass, requestAnimationFrame, round, transitionCheckStyles, trigger, truncate, wrapJQuery, _jQueryWrapped, _old, _ref, _ref1, __slice = [].slice;
        DIGIT_HTML = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + ('<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + '<span class="odometer-value"></span>' + "</span></span>") + "</span></span>", FORMAT_PARSER = /^\(?([^)]*)\)?(?:(.)(d+))?$/, DURATION = 2e3, FRAMES_PER_VALUE = 2, MS_PER_FRAME = 1e3 / 30, TRANSITION_END_EVENTS = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", transitionCheckStyles = document.createElement("div").style, TRANSITION_SUPPORT = null != transitionCheckStyles.transition || null != transitionCheckStyles.webkitTransition || null != transitionCheckStyles.mozTransition || null != transitionCheckStyles.oTransition, requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, createFromHTML = function(html) {
            var el;
            return (el = document.createElement("div")).innerHTML = html, el.children[0]
        }, removeClass = function(el, name) {
            return el.className = el.className.replace(new RegExp("(^| )" + name.split(" ").join("|") + "( |$)", "gi"), " ")
        }, addClass = function(el, name) {
            return removeClass(el, name), el.className += " " + name
        }, trigger = function(el, name) {
            var evt;
            if (null != document.createEvent) return (evt = document.createEvent("HTMLEvents")).initEvent(name, !0, !0), el.dispatchEvent(evt)
        }, now = function() {
            var _ref, _ref1;
            return null != (_ref = null != (_ref1 = window.performance) && "function" == typeof _ref1.now ? _ref1.now() : void 0) ? _ref : +new Date
        }, round = function(val, precision) {
            return null == precision && (precision = 0), precision ? (val *= Math.pow(10, precision), val += .5, (val = Math.floor(val)) / Math.pow(10, precision)) : Math.round(val)
        }, truncate = function(val) {
            return val < 0 ? Math.ceil(val) : Math.floor(val)
        }, fractionalPart = function(val) {
            return val - round(val)
        }, _jQueryWrapped = !1, (wrapJQuery = function() {
            var property, _i, _len, _ref, _results;
            if (!_jQueryWrapped && null != window.jQuery) {
                for (_jQueryWrapped = !0, _results = [], _i = 0, _len = (_ref = ["html", "text"]).length; _i < _len; _i++) property = _ref[_i], _results.push(function(property) {
                    var old;
                    return old = window.jQuery.fn[property], window.jQuery.fn[property] = function(val) {
                        var _ref1;
                        return null == val || null == (null != (_ref1 = this[0]) ? _ref1.odometer : void 0) ? old.apply(this, arguments) : this[0].odometer.update(val)
                    }
                }(property));
                return _results
            }
        })(), setTimeout(wrapJQuery, 0), (Odometer = function() {
            function Odometer(options) {
                var k, property, v, _base, _i, _len, _ref, _ref1, _ref2, _this = this;
                if (this.options = options, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
                for (k in this.el.odometer = this, _ref = Odometer.options) v = _ref[k], null == this.options[k] && (this.options[k] = v);
                null == (_base = this.options).duration && (_base.duration = DURATION), this.MAX_VALUES = this.options.duration / MS_PER_FRAME / FRAMES_PER_VALUE | 0, this.resetFormat(), this.value = this.cleanValue(null != (_ref1 = this.options.value) ? _ref1 : ""), this.renderInside(), this.render();
                try {
                    for (_i = 0, _len = (_ref2 = ["innerHTML", "innerText", "textContent"]).length; _i < _len; _i++) property = _ref2[_i], null != this.el[property] && function(property) {
                        Object.defineProperty(_this.el, property, {
                            get: function() {
                                var _ref3;
                                return "innerHTML" === property ? _this.inside.outerHTML : null != (_ref3 = _this.inside.innerText) ? _ref3 : _this.inside.textContent
                            },
                            set: function(val) {
                                return _this.update(val)
                            }
                        })
                    }(property)
                } catch (_error) {
                    _error, this.watchForMutations()
                }
            }
            return Odometer.prototype.renderInside = function() {
                return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
            }, Odometer.prototype.watchForMutations = function() {
                var _this = this;
                if (null != MutationObserver) try {
                    return null == this.observer && (this.observer = new MutationObserver(function(mutations) {
                        var newVal;
                        return newVal = _this.el.innerText, _this.renderInside(), _this.render(_this.value), _this.update(newVal)
                    })), this.watchMutations = !0, this.startWatchingMutations()
                } catch (_error) {
                    _error
                }
            }, Odometer.prototype.startWatchingMutations = function() {
                if (this.watchMutations) return this.observer.observe(this.el, {
                    childList: !0
                })
            }, Odometer.prototype.stopWatchingMutations = function() {
                var _ref;
                return null != (_ref = this.observer) ? _ref.disconnect() : void 0
            }, Odometer.prototype.cleanValue = function(val) {
                var _ref;
                return "string" == typeof val && (val = (val = (val = val.replace(null != (_ref = this.format.radix) ? _ref : ".", "<radix>")).replace(/[.,]/g, "")).replace("<radix>", "."), val = parseFloat(val, 10) || 0), round(val, this.format.precision)
            }, Odometer.prototype.bindTransitionEnd = function() {
                var event, renderEnqueued, _i, _len, _ref, _results, _this = this;
                if (!this.transitionEndBound) {
                    for (this.transitionEndBound = !0, renderEnqueued = !1, _results = [], _i = 0, _len = (_ref = TRANSITION_END_EVENTS.split(" ")).length; _i < _len; _i++) event = _ref[_i], _results.push(this.el.addEventListener(event, function() {
                        return !!renderEnqueued || (renderEnqueued = !0, setTimeout(function() {
                            return _this.render(), renderEnqueued = !1, trigger(_this.el, "odometerdone")
                        }, 0), !0)
                    }, !1));
                    return _results
                }
            }, Odometer.prototype.resetFormat = function() {
                var format, fractional, parsed, precision, radix, repeating, _ref, _ref1;
                if ((format = null != (_ref = this.options.format) ? _ref : "(,ddd).dd") || (format = "d"), !(parsed = FORMAT_PARSER.exec(format))) throw new Error("Odometer: Unparsable digit format");
                return repeating = (_ref1 = parsed.slice(1, 4))[0], radix = _ref1[1], precision = (null != (fractional = _ref1[2]) ? fractional.length : void 0) || 0, this.format = {
                    repeating: repeating,
                    radix: radix,
                    precision: precision
                }
            }, Odometer.prototype.render = function(value) {
                var classes, cls, digit, match, newClasses, theme, wholePart, _i, _j, _len, _len1, _ref;
                for (null == value && (value = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", theme = this.options.theme, newClasses = [], _i = 0, _len = (classes = this.el.className.split(" ")).length; _i < _len; _i++)(cls = classes[_i]).length && ((match = /^odometer-theme-(.+)$/.exec(cls)) ? theme = match[1] : /^odometer(-|$)/.test(cls) || newClasses.push(cls));
                for (newClasses.push("odometer"), TRANSITION_SUPPORT || newClasses.push("odometer-no-transitions"), theme ? newClasses.push("odometer-theme-" + theme) : newClasses.push("odometer-auto-theme"), this.el.className = newClasses.join(" "), this.ribbons = {}, this.digits = [], wholePart = !this.format.precision || !fractionalPart(value) || !1, _j = 0, _len1 = (_ref = value.toString().split("").reverse()).length; _j < _len1; _j++) "." === (digit = _ref[_j]) && (wholePart = !0), this.addDigit(digit, wholePart);
                return this.startWatchingMutations()
            }, Odometer.prototype.update = function(newValue) {
                var diff, _this = this;
                if (diff = (newValue = this.cleanValue(newValue)) - this.value) return removeClass(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), addClass(this.el, diff > 0 ? "odometer-animating-up" : "odometer-animating-down"), this.stopWatchingMutations(), this.animate(newValue), this.startWatchingMutations(), setTimeout(function() {
                    return _this.el.offsetHeight, addClass(_this.el, "odometer-animating")
                }, 0), this.value = newValue
            }, Odometer.prototype.renderDigit = function() {
                return createFromHTML(DIGIT_HTML)
            }, Odometer.prototype.insertDigit = function(digit, before) {
                return null != before ? this.inside.insertBefore(digit, before) : this.inside.children.length ? this.inside.insertBefore(digit, this.inside.children[0]) : this.inside.appendChild(digit)
            }, Odometer.prototype.addSpacer = function(chr, before, extraClasses) {
                var spacer;
                return (spacer = createFromHTML('<span class="odometer-formatting-mark"></span>')).innerHTML = chr, extraClasses && addClass(spacer, extraClasses), this.insertDigit(spacer, before)
            }, Odometer.prototype.addDigit = function(value, repeating) {
                var chr, digit, resetted, _ref;
                if (null == repeating && (repeating = !0), "-" === value) return this.addSpacer(value, null, "odometer-negation-mark");
                if ("." === value) return this.addSpacer(null != (_ref = this.format.radix) ? _ref : ".", null, "odometer-radix-mark");
                if (repeating)
                    for (resetted = !1;;) {
                        if (!this.format.repeating.length) {
                            if (resetted) throw new Error("Bad odometer format without digits");
                            this.resetFormat(), resetted = !0
                        }
                        if (chr = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === chr) break;
                        this.addSpacer(chr)
                    }
                return (digit = this.renderDigit()).querySelector(".odometer-value").innerHTML = value, this.digits.push(digit), this.insertDigit(digit)
            }, Odometer.prototype.animate = function(newValue) {
                return TRANSITION_SUPPORT && "count" !== this.options.animation ? this.animateSlide(newValue) : this.animateCount(newValue)
            }, Odometer.prototype.animateCount = function(newValue) {
                var cur, diff, last, start, tick, _this = this;
                if (diff = +newValue - this.value) return start = last = now(), cur = this.value, (tick = function() {
                    var delta, fraction;
                    return now() - start > _this.options.duration ? (_this.value = newValue, _this.render(), void trigger(_this.el, "odometerdone")) : ((delta = now() - last) > 50 && (last = now(), fraction = delta / _this.options.duration, cur += diff * fraction, _this.render(Math.round(cur))), null != requestAnimationFrame ? requestAnimationFrame(tick) : setTimeout(tick, 50))
                })()
            }, Odometer.prototype.getDigitCount = function() {
                var i, max, value, values, _i, _len;
                for (i = _i = 0, _len = (values = 1 <= arguments.length ? __slice.call(arguments, 0) : []).length; _i < _len; i = ++_i) value = values[i], values[i] = Math.abs(value);
                return max = Math.max.apply(Math, values), Math.ceil(Math.log(max + 1) / Math.log(10))
            }, Odometer.prototype.getFractionalDigitCount = function() {
                var i, parser, parts, value, values, _i, _len;
                for (parser = /^\-?\d*\.(\d*?)0*$/, i = _i = 0, _len = (values = 1 <= arguments.length ? __slice.call(arguments, 0) : []).length; _i < _len; i = ++_i) value = values[i], values[i] = value.toString(), parts = parser.exec(values[i]), values[i] = null == parts ? 0 : parts[1].length;
                return Math.max.apply(Math, values)
            }, Odometer.prototype.resetDigits = function() {
                return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
            }, Odometer.prototype.animateSlide = function(newValue) {
                var boosted, cur, diff, digitCount, digits, dist, end, fractionalCount, frame, frames, i, incr, j, mark, numEl, oldValue, start, _base, _i, _k, _l, _len, _len1, _len2, _m, _ref, _results;
                if (oldValue = this.value, (fractionalCount = this.getFractionalDigitCount(oldValue, newValue)) && (newValue *= Math.pow(10, fractionalCount), oldValue *= Math.pow(10, fractionalCount)), diff = newValue - oldValue) {
                    for (this.bindTransitionEnd(), digitCount = this.getDigitCount(oldValue, newValue), digits = [], boosted = 0, i = _i = 0; 0 <= digitCount ? _i < digitCount : _i > digitCount; i = 0 <= digitCount ? ++_i : --_i) {
                        if (start = truncate(oldValue / Math.pow(10, digitCount - i - 1)), dist = (end = truncate(newValue / Math.pow(10, digitCount - i - 1))) - start, Math.abs(dist) > this.MAX_VALUES) {
                            for (frames = [], incr = dist / (this.MAX_VALUES + this.MAX_VALUES * boosted * .5), cur = start; dist > 0 && cur < end || dist < 0 && cur > end;) frames.push(Math.round(cur)), cur += incr;
                            frames[frames.length - 1] !== end && frames.push(end), boosted++
                        } else frames = function() {
                            _results = [];
                            for (var _j = start; start <= end ? _j <= end : _j >= end; start <= end ? _j++ : _j--) _results.push(_j);
                            return _results
                        }.apply(this);
                        for (i = _k = 0, _len = frames.length; _k < _len; i = ++_k) frame = frames[i], frames[i] = Math.abs(frame % 10);
                        digits.push(frames)
                    }
                    for (this.resetDigits(), i = _l = 0, _len1 = (_ref = digits.reverse()).length; _l < _len1; i = ++_l)
                        for (frames = _ref[i], this.digits[i] || this.addDigit(" ", i >= fractionalCount), null == (_base = this.ribbons)[i] && (_base[i] = this.digits[i].querySelector(".odometer-ribbon-inner")), this.ribbons[i].innerHTML = "", diff < 0 && (frames = frames.reverse()), j = _m = 0, _len2 = frames.length; _m < _len2; j = ++_m) frame = frames[j], (numEl = document.createElement("div")).className = "odometer-value", numEl.innerHTML = frame, this.ribbons[i].appendChild(numEl), j === frames.length - 1 && addClass(numEl, "odometer-last-value"), 0 === j && addClass(numEl, "odometer-first-value");
                    return start < 0 && this.addDigit("-"), null != (mark = this.inside.querySelector(".odometer-radix-mark")) && mark.parent.removeChild(mark), fractionalCount ? this.addSpacer(this.format.radix, this.digits[fractionalCount - 1], "odometer-radix-mark") : void 0
                }
            }, Odometer
        }()).options = null != (_ref = window.odometerOptions) ? _ref : {}, setTimeout(function() {
            var k, v, _base, _ref1, _results;
            if (window.odometerOptions) {
                for (k in _results = [], _ref1 = window.odometerOptions) v = _ref1[k], _results.push(null != (_base = Odometer.options)[k] ? (_base = Odometer.options)[k] : _base[k] = v);
                return _results
            }
        }, 0), Odometer.init = function() {
            var el, elements, _i, _len, _ref1, _results;
            if (null != document.querySelectorAll) {
                for (_results = [], _i = 0, _len = (elements = document.querySelectorAll(Odometer.options.selector || ".odometer")).length; _i < _len; _i++) el = elements[_i], _results.push(el.odometer = new Odometer({
                    el: el,
                    value: null != (_ref1 = el.innerText) ? _ref1 : el.textContent
                }));
                return _results
            }
        }, null != (null != (_ref1 = document.documentElement) ? _ref1.doScroll : void 0) && null != document.createEventObject ? (_old = document.onreadystatechange, document.onreadystatechange = function() {
            return "complete" === document.readyState && !1 !== Odometer.options.auto && Odometer.init(), null != _old ? _old.apply(this, arguments) : void 0
        }) : document.addEventListener("DOMContentLoaded", function() {
            if (!1 !== Odometer.options.auto) return Odometer.init()
        }, !1), __WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return Odometer
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
    }).call(this)
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery__ = __webpack_require__(5),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mediaQuery__),
        __WEBPACK_IMPORTED_MODULE_3_guxfoe_accordion_component_accordion_registry_js__ = __webpack_require__(45),
        __WEBPACK_IMPORTED_MODULE_4_guxfoe_accordion_component_accordion_const_js__ = __webpack_require__(57),
        __WEBPACK_IMPORTED_MODULE_5_guxfoe_accordion_component_accordion_itemManager_js__ = __webpack_require__(305),
        __WEBPACK_IMPORTED_MODULE_6_guxfoe_accordion_component_accordion_itemFactory_js__ = __webpack_require__(306),
        __WEBPACK_IMPORTED_MODULE_8_isAuthor__ = (__webpack_require__(3), __webpack_require__(11)),
        __WEBPACK_IMPORTED_MODULE_8_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isAuthor__),
        __WEBPACK_IMPORTED_MODULE_9_fordjs__ = __webpack_require__(4),
        __WEBPACK_IMPORTED_MODULE_9_fordjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_fordjs__),
        SELECTOR = __WEBPACK_IMPORTED_MODULE_4_guxfoe_accordion_component_accordion_const_js__.a.SELECTOR,
        ATTR = __WEBPACK_IMPORTED_MODULE_4_guxfoe_accordion_component_accordion_const_js__.a.ATTR,
        STATE = __WEBPACK_IMPORTED_MODULE_4_guxfoe_accordion_component_accordion_const_js__.a.STATE;

    function Accordion($elem, settings) {
        var listConfig, authSettings, isMobile, isAuthor, elem = {
                $accordion: $elem,
                $accordionList: $elem.find(SELECTOR.accordionList),
                $accordionItemCollection: []
            },
            config = {
                timeBodyScroll: 300,
                timeDrawerAnimDelay: 200,
                timeDrawerResolveDelay: 600,
                allowMultiple: elem.$accordionList.data(ATTR.allowMultiple) || null,
                onLoadState: (listConfig = elem.$accordionList.data(ATTR.onLoadState) || null, authSettings = settings, isMobile = __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.mobile.matches, isAuthor = __WEBPACK_IMPORTED_MODULE_8_isAuthor___default.a.getAuthorStatus(), authSettings.isInOvelay && isMobile || isAuthor ? STATE.initialLoad.openAll : listConfig),
                externalAnalytics: !1
            };
        $.extend(config, settings), elem.$accordionItemCollection = this.setUpAccordionItems($elem.find(SELECTOR.accordionItem), config), this.config = config, this.elem = elem, this.$element = $elem, this.accordionItemManger = __WEBPACK_IMPORTED_MODULE_5_guxfoe_accordion_component_accordion_itemManager_js__.a.init(config), this.accordionItemManger.initCollection(elem.$accordionItemCollection)
    }
    Accordion.prototype.setUpAccordionItems = function($itemCollection, config) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map($itemCollection, function(item) {
            return __WEBPACK_IMPORTED_MODULE_6_guxfoe_accordion_component_accordion_itemFactory_js__.a.createAccordionItem(item, config)()
        })
    }, module = {
        init: function($elem, settings) {
            var accSettings = settings || {},
                accordion = {};
            return $elem = $elem instanceof $ ? $elem : $($elem), accSettings.isInOvelay = !!$elem.closest(SELECTOR.overlayContentInner).length, accSettings.isInGalleryTrigger = !!$elem.closest(SELECTOR.galleryTrigger).length, !__WEBPACK_IMPORTED_MODULE_3_guxfoe_accordion_component_accordion_registry_js__.a.isInRegistry($elem) && (accordion = new Accordion($elem, accSettings), __WEBPACK_IMPORTED_MODULE_3_guxfoe_accordion_component_accordion_registry_js__.a.addToCollection({
                accordionClass: accordion,
                elem: $elem[0],
                isInOverlay: !!$elem.find(SELECTOR.accordionOverlay)
            }), accordion)
        },
        name: "accordion",
        selector: ".accordion"
    }, __WEBPACK_IMPORTED_MODULE_9_fordjs___default.a.registerComponent(module), __webpack_exports__.default = module
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery__ = __webpack_require__(5),
        __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mediaQuery__),
        __WEBPACK_IMPORTED_MODULE_3_guxfoe_accordion_component_accordion_const_js__ = __webpack_require__(57),
        __WEBPACK_IMPORTED_MODULE_4_stickyItemService__ = __webpack_require__(33),
        api = {},
        STATE = __WEBPACK_IMPORTED_MODULE_3_guxfoe_accordion_component_accordion_const_js__.a.STATE,
        ATTR = __WEBPACK_IMPORTED_MODULE_3_guxfoe_accordion_component_accordion_const_js__.a.ATTR;
    api.init = function(config) {
        var accordionConfig = config,
            itemHandleCollection = [],
            itemCollectionState = [],
            $body = $("html, body");

        function handleItemClick(itemHandle, isScrollToTop) {
            var $deferredCollection, clickedItemIsClosed = itemHandle.getItemState() === STATE.closed;
            if (config.isInGalleryTrigger && __WEBPACK_IMPORTED_MODULE_2_mediaQuery___default.a.mobile.matches) return !1;
            !0 === accordionConfig.allowMultiple ? (itemCollectionState = toggleSingleItemState(itemCollectionState, itemHandle), $deferredCollection = applyCurrentState(itemHandleCollection, itemCollectionState, itemHandle)) : (itemCollectionState = clickedItemIsClosed ? function(itemCollectionState, itemHandle) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(itemCollectionState, function(item) {
                    item.state = item.itemIndex === itemHandle.itemIndex ? STATE.open : STATE.closed
                })
            }(itemCollectionState, itemHandle) : toggleSingleItemState(itemCollectionState, itemHandle), $deferredCollection = applyCurrentState(itemHandleCollection, itemCollectionState)), onAnimateCompletion($deferredCollection, function() {
                if (clickedItemIsClosed && isScrollToTop) return handleScrollToItem(itemHandle)
            }), $.publish("accordion:item:click", itemHandle.getItemState())
        }

        function onAnimateCompletion($deferredCollection, callback) {
            var _$;
            (_$ = $).when.apply(_$, $deferredCollection).then(function() {
                callback && callback()
            })
        }

        function handleScrollToItem(itemHandle) {
            var itemOffsetTop = itemHandle.getItemOffsetTop(),
                stickyElemHeight = __WEBPACK_IMPORTED_MODULE_4_stickyItemService__.a.getStickyItemHeight(),
                offset = __WEBPACK_IMPORTED_MODULE_4_stickyItemService__.a.pageHasStickyItem() ? itemOffsetTop - stickyElemHeight : itemOffsetTop;
            $body.stop().animate({
                scrollTop: offset
            }, accordionConfig.timeBodyScroll, "swing")
        }

        function toggleSingleItemState(itemCollectionState, itemHandle) {
            return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(itemCollectionState, function(item) {
                return item.itemIndex === itemHandle.itemIndex ? (item.state = item.state === STATE.open ? STATE.closed : STATE.open, item) : item
            })
        }

        function applyCurrentState(itemHandleCollection, itemCollectionState, itemHandle) {
            var currentItem, currentState;
            return itemHandle ? (currentState = "open" === (currentItem = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(itemHandleCollection, {
                itemIndex: itemHandle.itemIndex
            })).getItemState() ? "closed" : "open", currentItem.setItemState(currentState), currentItem.handleItemDisplay(currentState)) : __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(itemCollectionState, function(item) {
                return (currentItem = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(itemHandleCollection, {
                    itemIndex: item.itemIndex
                })).setItemState(item.state), currentItem.handleItemDisplay(currentItem.getItemState())
            })
        }

        function setItemState(item, newState) {
            return item.state === newState ? item : (item.state = newState, item)
        }
        return $.subscribe("window:resize", function() {
            var openItems = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(itemHandleCollection, function(item) {
                return item.getItemState() === STATE.open
            });
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(openItems, function(item) {
                item.resizeItem(item.getItemState())
            })
        }), {
            initCollection: function(itemCollection) {
                (function(itemHandleCollection) {
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(itemHandleCollection, function(item) {
                        item.$accordionItem.data(ATTR.drawerAnimDelay, accordionConfig.timeDrawerAnimDelay), item.$accordionItem.data(ATTR.drawerResolveDelay, accordionConfig.timeDrawerResolveDelay)
                    })
                })(itemHandleCollection = itemCollection),
                function(itemHandleCollection) {
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(itemHandleCollection, function(itemHandle) {
                        itemHandle.handleItemClick = function(evt, isScrollToTop) {
                            return config.externalCtrl ? config.externalCtrl({
                                itemHandle: itemHandle,
                                callBack: handleItemClick,
                                isScrollToTop: isScrollToTop
                            }) : handleItemClick(itemHandle, isScrollToTop)
                        }
                    })
                }(itemHandleCollection), onAnimateCompletion(applyCurrentState(itemCollection, itemCollectionState = function(itemCollectionState, config) {
                    var newState = [];
                    switch (config.onLoadState) {
                        case "OPEN_FIRST":
                            newState = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(itemCollectionState, function(item) {
                                return 0 === item.itemIndex && (item.state = STATE.open), item
                            });
                            break;
                        case "OPEN_ALL":
                            newState = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(itemCollectionState, function(item) {
                                return item.state = STATE.open, item
                            });
                            break;
                        default:
                            newState = itemCollectionState
                    }
                    return newState
                }(itemCollectionState = function(itemHandleCollection) {
                    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(itemHandleCollection, function(item) {
                        return {
                            state: item.getItemState(),
                            itemIndex: item.itemIndex
                        }
                    })
                }(itemHandleCollection), config)), null)
            },
            updateItemState: function(config) {
                return itemCollectionState = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(itemCollectionState, function(item) {
                    return item.itemIndex === config.itemIndex ? setItemState(item, config.newState) : item
                }), applyCurrentState(itemHandleCollection, itemCollectionState)
            },
            setAllItemsState: function(state) {
                return itemCollectionState = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(itemCollectionState, function(item) {
                    return setItemState(item, state)
                }), applyCurrentState(itemHandleCollection, itemCollectionState)
            },
            handleScrollToItem: handleScrollToItem,
            getCurrentOpenItems: function() {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(itemCollectionState, function(item) {
                    return "open" === item.state
                })
            }
        }
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_guxfoe_accordion_component_accordion_const_js__ = __webpack_require__(57),
        __WEBPACK_IMPORTED_MODULE_3_analytics_events_accordionEvents_js__ = __webpack_require__(113),
        api = {},
        SELECTOR = __WEBPACK_IMPORTED_MODULE_2_guxfoe_accordion_component_accordion_const_js__.a.SELECTOR,
        STATE = __WEBPACK_IMPORTED_MODULE_2_guxfoe_accordion_component_accordion_const_js__.a.STATE,
        ATTR = __WEBPACK_IMPORTED_MODULE_2_guxfoe_accordion_component_accordion_const_js__.a.ATTR;
    api.createAccordionItem = function(item, config) {
        var $item = $(item),
            $itemBody = $item.find(SELECTOR.accordionItemBody),
            onItemClick = function(evt, isScrollToTop) {
                evt.preventDefault(), evt.stopPropagation(), isScrollToTop = void 0 === isScrollToTop || isScrollToTop, evt.data.itemHandle.handleItemClick(evt, isScrollToTop), config.externalAnalytics ? config.externalAnalytics.callback.apply(this, config.externalAnalytics.params) : __WEBPACK_IMPORTED_MODULE_3_analytics_events_accordionEvents_js__.a.trackExpandAccordion(evt.data.itemHandle.itemTitle, evt.data.itemHandle.getItemState())
            },
            getItemState = function() {
                return item.getAttribute(ATTR.itemDataState)
            },
            setItemState = function(state) {
                return item.setAttribute(ATTR.itemDataState, state)
            },
            getItemOffsetTop = function() {
                return $item.offset().top
            },
            toggleAccordionItemState = function($elem) {
                var currentElemState = $elem.attr(ATTR.itemDataState);
                $elem.attr(ATTR.itemDataState, currentElemState === STATE.open ? STATE.closed : STATE.open)
            },
            animateDrawer = function(config) {
                config.$elem.length ? "open" === config.state ? config.$elem.slideDown(500, function() {
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.delay(function() {
                        config.$deferred.resolve()
                    }, config.resolveDelay || 0)
                }) : config.$elem.slideUp(500, function() {
                    __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.delay(function() {
                        config.$deferred.resolve()
                    }, config.resolveDelay || 0)
                }) : __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.delay(function() {
                    config.$deferred.resolve()
                }, config.resolveDelay || 0)
            },
            handleItemDisplay = function(state) {
                var $deferred = $.Deferred();
                return animateDrawer({
                    $elem: $itemBody,
                    state: state,
                    animDelay: $item.data(ATTR.drawerAnimDelay),
                    $deferred: $deferred,
                    resolveDelay: $item.data(ATTR.drawerResolveDelay)
                }), $deferred
            },
            resizeItem = function(state) {
                var $deferred = $.Deferred();
                return animateDrawer({
                    $elem: $itemBody,
                    state: state,
                    animDelay: $item.data(ATTR.drawerAnimDelay),
                    $deferred: $deferred,
                    resolveDelay: $item.data(ATTR.drawerResolveDelay)
                }), $deferred
            };
        return function() {
            var itemHandle = {
                $accordionItem: $item,
                $accordionTrigger: $item.find(SELECTOR.accordionTrigger),
                itemTitle: $item.find(SELECTOR.accordionItemTitle).text().trim(),
                itemIndex: parseInt(item.getAttribute(ATTR.itemDataIndex), 10),
                itemHash: item.getAttribute(ATTR.itemDataHash),
                getItemState: getItemState,
                setItemState: setItemState,
                getItemOffsetTop: getItemOffsetTop,
                toggleAccordionItemState: toggleAccordionItemState,
                handleItemDisplay: handleItemDisplay,
                resizeItem: resizeItem
            };
            return function(itemHandle) {
                itemHandle.$accordionTrigger.on("click", {
                    itemHandle: itemHandle
                }, onItemClick)
            }(itemHandle), itemHandle
        }
    }, __webpack_exports__.a = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var configs, __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_1_lodash__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__), __webpack_require__(0)),
        __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_configurationProvider__),
        __WEBPACK_IMPORTED_MODULE_3_requestQueue__ = __webpack_require__(308),
        __WEBPACK_IMPORTED_MODULE_3_requestQueue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_requestQueue__),
        __WEBPACK_IMPORTED_MODULE_4_dataPreview__ = __webpack_require__(71),
        __WEBPACK_IMPORTED_MODULE_6__adapters_familiesAdapter_js__ = (__webpack_require__(126), __webpack_require__(310)),
        api = {};

    function mergeResponses(v0data, v1data) {
        var result = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(v0data) ? v0data : [v0data],
            v1dataArray = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(v1data) ? v1data : [v1data];
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(v1dataArray, function(v1vehicle) {
            __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(result, function(resultVehicle) {
                return resultVehicle.code && v1vehicle.code && resultVehicle.code === v1vehicle.code
            }) || result.push(v1vehicle)
        }), result
    }

    function filterVehiclesByServiceVersion(vehicleList, serviceVersion) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(vehicleList, function(vehicle) {
            return (vehicle.dataSource || vehicle.serviceVersion || "v1") === serviceVersion
        })
    }

    function buildEnumerateUrl(version) {
        if (!configs.endpoint || !configs.endpoint.endpoint) return "";
        var url = [configs.endpoint.endpoint, "/vehicleModel/", version || "v1", "/enumerate", "?locale=", configs.endpoint.locale, "&namedConfig=", configs.endpoint.allNamedConfig ? configs.endpoint.allNamedConfig.join(",") : "default", "&retrieve=images,prices,specs"];
        return url.push(getDataPreviewParams()), url.join("")
    }

    function buildEnumerateFamilyUrl(version, vehicleList, families) {
        if (!configs.endpoint || !configs.endpoint.endpoint) return "";
        var url = [configs.endpoint.endpoint, "/vehicleModel/", version || "v1", "/enumerate", "?locale=", configs.endpoint.locale, "&namedConfig=", configs.endpoint.allNamedConfig ? configs.endpoint.allNamedConfig.join(",") : "default", "&retrieve=images,prices,specs"];
        return url.push(getDataPreviewParams()), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(vehicleList, function(vehicle) {
            url.push(["&config=", vehicle.nameplateCode, vehicle.selectedFeatures && vehicle.selectedFeatures.length ? "~" + vehicle.selectedFeatures.join(",") : ""].join(""))
        }), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(families, function(family) {
            url.push(["&family=", family].join(""))
        }), url.join("")
    }

    function buildDescribeUrl(vehicleList, version) {
        if (!configs.endpoint || !configs.endpoint.endpoint) return "";
        var url = [configs.endpoint.endpoint, "/vehicleModel/", version || "v1", "/describe", "?locale=", configs.endpoint.locale, "&namedConfig=default", "&retrieve=featuresMkt,images,featureImages,prices,specs,keyFeatures,keyFeaturesWalkup,keyFeaturesModel,featuresBnp,selectedBnp"];
        return url.push(getDataPreviewParams()), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(vehicleList, function(vehicle) {
            var array;
            url.push(["&config=", encodeURIComponent(vehicle.nameplateCode), vehicle.selectedFeatures && vehicle.selectedFeatures.length ? "~" + (array = vehicle.selectedFeatures, __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.map(array, function(el) {
                return encodeURIComponent(el)
            })).join(",") : ""].join(""))
        }), url.join("")
    }

    function getDataPreviewParams() {
        return [configs.dataPreviewParams.dataStatus ? "&dataStatus=" + configs.dataPreviewParams.dataStatus : "", configs.dataPreviewParams.timestamp ? "&timestamp=" + configs.dataPreviewParams.timestamp : ""].join("")
    }

    function mergeManuallyAuthoredVehicles(data) {
        var vehiclesToAppend = [];
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.each(configs.manuallyAuthoredVehicles, function(item) {
            var index = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(data, {
                code: item.code
            }); - 1 !== index ? $.extend(!0, data[index], item) : vehiclesToAppend.push(item)
        }), __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.union(data, vehiclesToAppend)
    }

    function lazyReadConfig() {
        configs || (configs = {
            endpoint: __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get($("#bsl-endpoints-configuration")),
            manuallyAuthoredVehicles: __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get($("#manually-authored-vehicles-configuration")).vehicles.nameplates,
            dataPreviewParams: __WEBPACK_IMPORTED_MODULE_4_dataPreview__.a.getCookieValues() ? __WEBPACK_IMPORTED_MODULE_4_dataPreview__.a.getCookieValues() : {}
        })
    }
    api.describe = function(vehicleList) {
        var resultPromise;
        lazyReadConfig();
        var vehiclesV0 = filterVehiclesByServiceVersion(vehicleList, "v0"),
            vehiclesV1 = filterVehiclesByServiceVersion(vehicleList, "v1"),
            urlV0 = buildDescribeUrl(vehiclesV0, "v0"),
            urlV1 = buildDescribeUrl(vehiclesV1, "v1");
        return vehiclesV0.length > 0 && vehiclesV1.length > 0 ? resultPromise = $.when(__WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV0), __WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV1)).then(mergeResponses) : vehiclesV0.length > 0 ? resultPromise = __WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV0) : vehiclesV1.length > 0 && (resultPromise = __WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV1)), resultPromise
    }, api.getFirstElement = function(payload) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.isArray(payload) ? payload[0] : payload
    }, api.enumerate = function(vehicleList) {
        var resultPromise;
        lazyReadConfig();
        var vehiclesV0 = filterVehiclesByServiceVersion(vehicleList, "v0"),
            vehiclesV1 = filterVehiclesByServiceVersion(vehicleList, "v1"),
            urlV0 = buildEnumerateUrl("v0"),
            urlV1 = buildEnumerateUrl("v1");
        return vehiclesV0.length > 0 && vehiclesV1.length > 0 ? resultPromise = $.when(__WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV0), __WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV1)).then(mergeResponses) : vehiclesV0.length > 0 ? resultPromise = __WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV0) : vehiclesV1.length > 0 ? resultPromise = __WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV1) : vehiclesV0.length || vehiclesV1.length || (resultPromise = __WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get()), resultPromise.then(mergeManuallyAuthoredVehicles).then(function(vehicles) {
            return function(requestedVehicles, vehicles) {
                return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.filter(vehicles, function(vehicle) {
                    return __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.find(requestedVehicles, function(requestedVehicle) {
                        return requestedVehicle.code === vehicle.code || requestedVehicle.nameplateCode === vehicle.code
                    })
                })
            }(vehicleList, vehicles)
        })
    }, api.enumerateFamilies = function(vehicleList, families) {
        var resultPromise;
        lazyReadConfig();
        var vehiclesV0 = filterVehiclesByServiceVersion(vehicleList, "v0"),
            vehiclesV1 = filterVehiclesByServiceVersion(vehicleList, "v1"),
            urlV0 = buildEnumerateFamilyUrl("v0", vehiclesV0, families),
            urlV1 = buildEnumerateFamilyUrl("v1", vehiclesV1, families);
        return vehiclesV0.length > 0 ? resultPromise = __WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV0) : vehiclesV1.length > 0 && (resultPromise = __WEBPACK_IMPORTED_MODULE_3_requestQueue___default.a.get(urlV1)), resultPromise.then(__WEBPACK_IMPORTED_MODULE_6__adapters_familiesAdapter_js__.a)
    }, __webpack_exports__.default = api
}, function(module, exports, __webpack_require__) {
    (function(global) {
        module.exports = global.requestQueue = __webpack_require__(309)
    }).call(exports, __webpack_require__(9))
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var configs, validator, __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider__ = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__), __webpack_require__(6)),
        __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_configurationProvider__),
        __WEBPACK_IMPORTED_MODULE_3_dataPreview__ = __webpack_require__(71),
        __WEBPACK_IMPORTED_MODULE_4__responseValidator_js__ = __webpack_require__(121),
        __WEBPACK_IMPORTED_MODULE_5__adapters_responseAdapter_js__ = __webpack_require__(126),
        api = {},
        requestQueue = {};
    api.get = function(url) {
        return function() {
            configs || (configs = {
                endpoint: __WEBPACK_IMPORTED_MODULE_2_configurationProvider___default.a.get($("#bsl-endpoints-configuration")),
                dataPreview: __WEBPACK_IMPORTED_MODULE_3_dataPreview__.a.getCookieValues()
            });
            validator || (validator = Object(__WEBPACK_IMPORTED_MODULE_4__responseValidator_js__.a)(__WEBPACK_IMPORTED_MODULE_3_dataPreview__.a, configs.endpoint.errorRedirect))
        }(), requestQueue[url] || (! function(url) {
            return !!url
        }(url) ? requestQueue[url] = $.Deferred().reject() : requestQueue[url] = $.when($.ajax({
            url: url,
            xhrFields: {
                withCredentials: !!configs.endpoint.cookieToBsl
            }
        })).then(validator.success, validator.error).then(__WEBPACK_IMPORTED_MODULE_5__adapters_responseAdapter_js__.a)), $.when(requestQueue[url]).then(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.cloneDeep)
    }, __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_2__vehicleAdapter_js__ = (__webpack_require__(56), __webpack_require__(122));
    __webpack_exports__.a = function(payload) {
        var vehicles = [],
            bslNameplate = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.isArray(payload) ? payload[0] : payload;
        return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(bslNameplate.configs.default, function(vehicleObject) {
            vehicles.push({
                keys: vehicleObject.keys,
                vehicle: Object(__WEBPACK_IMPORTED_MODULE_2__vehicleAdapter_js__.a)(vehicleObject.vehicle)
            })
        }), {
            families: bslNameplate.families,
            vehicles: vehicles
        }
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(1);
    __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);

    function WaitForImages($element) {
        var isImage = $element.is("img");
        return this.$images = isImage ? $element : $element.find("img"), this.defer = $.Deferred(), this.imagesCount = this.$images.length, this.loadedImages = [], this.imagesCount ? this.initializeWait() : this.defer.resolve(), this.defer.promise()
    }
    WaitForImages.prototype = {
        attachWaitEvents: function(image) {
            image.addEventListener("load", function() {
                this.pushImageToLoadedStack(image)
            }.bind(this)), image.addEventListener("error", function() {
                this.pushImageToLoadedStack(image, !0)
            }.bind(this))
        },
        resolveWaiting: function(isErrorOccurred) {
            this.isAllImagesLoaded && this.defer.resolve(isErrorOccurred)
        },
        pushImageToLoadedStack: function(image, isErrorOccurred) {
            this.loadedImages.push(image), this.resolveWaiting(isErrorOccurred)
        },
        isAllImagesLoaded: function() {
            return this.loadedImages.length === this.imagesCount
        },
        initializeWait: function() {
            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.each(this.$images, function(image) {
                image.complete ? this.pushImageToLoadedStack(image) : this.attachWaitEvents(image)
            }.bind(this))
        }
    }, __webpack_exports__.default = function($container) {
        return new WaitForImages($container)
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_stickyItemService__ = __webpack_require__(33);
    (module = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxScrollpoint", [])).directive("uiScrollpoint", ["$window", function($window) {
        function getWindowScrollTop() {
            return __WEBPACK_IMPORTED_MODULE_0_angular___default.a.isDefined($window.pageYOffset) ? $window.pageYOffset : (document.compatMode && "BackCompat" !== document.compatMode ? document.documentElement : document.body).scrollTop
        }

        function getWindowHeight(contentHeight) {
            return contentHeight ? $window.document.body.scrollHeight - $window.innerHeight : $window.innerHeight
        }
        return {
            require: "^?uiScrollpointTarget",
            scope: {
                uiScrollpoint: "@",
                uiScrollpointClass: "@?",
                uiScrollpointAction: "&?",
                uiScrollpointBottom: "@"
            },
            link: function(scope, elm, attrs, uiScrollpointTarget) {
                var fixLimit, absolute = !0,
                    percent = !1,
                    shift = 0,
                    past = !1,
                    bottom = scope.uiScrollpointBottom,
                    $target = uiScrollpointTarget && uiScrollpointTarget.$element || __WEBPACK_IMPORTED_MODULE_0_angular___default.a.element($window),
                    scrollpointClass = scope.uiScrollpointClass || "ui-scrollpoint",
                    action = scope.uiScrollpointAction ? scope.uiScrollpointAction() : void 0;

                function setup(scrollpoint) {
                    if (scrollpoint) {
                        if ("string" == typeof scrollpoint)
                            if ((percent = "%" === scrollpoint.charAt(scrollpoint.length - 1)) && (scrollpoint = scrollpoint.substr(0, scrollpoint.length - 1)), "-" === scrollpoint.charAt(0)) absolute = percent, shift = -parseFloat(scrollpoint.substr(1));
                            else if ("+" === scrollpoint.charAt(0)) absolute = percent, shift = parseFloat(scrollpoint.substr(1));
                        else {
                            var parsed = parseFloat(scrollpoint);
                            !isNaN(parsed) && isFinite(parsed) && (absolute = !0, shift = parsed)
                        } else if ("number" == typeof scrollpoint) return void setup(scrollpoint = scrollpoint.toString())
                    } else absolute = !1;
                    fixLimit = calcLimit()
                }

                function calcLimit() {
                    var limit = absolute ? shift : function() {
                        if (!uiScrollpointTarget) {
                            var bounds = elm[0].getBoundingClientRect();
                            return bounds.top + getWindowScrollTop()
                        }
                        return elm[0].offsetTop
                    }() + shift;
                    return percent && absolute ? (limit = shift / 100 * calcTargetContentHeight(), bottom && (limit = calcTargetContentHeight() - limit)) : bottom && (limit = absolute ? calcTargetContentHeight() - limit : limit + elm[0].offsetHeight + 1 - (uiScrollpointTarget ? $target[0].offsetHeight : getWindowHeight())), limit
                }

                function calcTargetContentHeight() {
                    return uiScrollpointTarget ? $target[0].scrollHeight - $target[0].clientHeight : getWindowHeight(!0)
                }

                function onScroll() {
                    var limit = calcLimit(),
                        offset = uiScrollpointTarget ? $target[0].scrollTop : getWindowScrollTop(),
                        distance = null;
                    !bottom && offset >= limit || bottom && offset <= limit ? (past || (distance = limit - offset, past = !0), elm.hasClass(scrollpointClass) || (elm.addClass(scrollpointClass), elm.hasClass("mwc-compare-head") && __WEBPACK_IMPORTED_MODULE_1_stickyItemService__.a.addItemToRegistry(elm)), fixLimit = limit) : (!bottom && offset < fixLimit || bottom && offset > fixLimit) && (past && (distance = fixLimit - offset, past = !1), elm.hasClass(scrollpointClass) && (elm.removeClass(scrollpointClass), elm.hasClass("mwc-compare-head") && __WEBPACK_IMPORTED_MODULE_1_stickyItemService__.a.removeItemFromRegistry(elm))), action && null !== distance && action(elm, distance * (bottom ? -1 : 1))
                }
                setup(scope.uiScrollpoint), scope.$on("scrollpointShouldReset", function() {
                    elm.hasClass("mwc-compare-head") && __WEBPACK_IMPORTED_MODULE_1_stickyItemService__.a.removeItemFromRegistry(elm), elm.removeClass(scrollpointClass), past = bottom, fixLimit = calcLimit(), onScroll()
                }), $target.on("scroll", onScroll), onScroll(), scope.$on("$destroy", function() {
                    $target.off("scroll", onScroll)
                }), scope.$watch("uiScrollpoint", function(newScrollpoint) {
                    setup(newScrollpoint), onScroll()
                })
            }
        }
    }]), module.directive("uiScrollpointTarget", [function() {
        return {
            controller: ["$element", function($element) {
                this.$element = $element
            }]
        }
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2);
    __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__).a.module("ngGuxKeyboardTriggerClick", []).directive("keyboardTriggerClick", function() {
        return {
            restrict: "A",
            link: function($scope, $element) {
                $element.on("keydown", function($event) {
                    var Keys_ENTER = 13,
                        Keys_SPACEBAR = 32,
                        keyCode = $event.keyCode || $event.which;
                    keyCode !== Keys_SPACEBAR && keyCode !== Keys_ENTER || ($event.preventDefault(), $event.stopPropagation(), $element.trigger("click"))
                })
            }
        }
    })
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_isAuthor__ = __webpack_require__(11),
        __WEBPACK_IMPORTED_MODULE_1_isAuthor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isAuthor__),
        __WEBPACK_IMPORTED_MODULE_2_pricesDisplayConfiguration__ = __webpack_require__(27),
        __WEBPACK_IMPORTED_MODULE_3_vehicleAttributeUtil__ = __webpack_require__(15);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngGuxVehicleAttribute", []).directive("guxVehicleAttribute", ["$sce", function($sce) {
        return {
            restrict: "A",
            scope: {
                guxVaAttribute: "=",
                guxVaVehicle: "="
            },
            template: (template = "", template += '<p class="{{attributeStyle}}" data-ng-if="attributeVisible">', template += '{{guxVaAttribute.prefix}} <span data-ng-bind-html="attributeValue"></span> {{guxVaAttribute.suffix}}', template += '<sup data-disclosure="{{guxVaAttribute.disclosure}}" tabindex="0">{{guxVaAttribute.disclosure}}</sup>', template += "</p>"),
            link: function($scope) {
                $scope.attributeValue = $sce.trustAsHtml(__WEBPACK_IMPORTED_MODULE_3_vehicleAttributeUtil__.a.getAttribute($scope.guxVaAttribute.attribute, $scope.guxVaVehicle));
                var isAttributeHidden = __WEBPACK_IMPORTED_MODULE_2_pricesDisplayConfiguration__.a.isAttributeHidden($scope.guxVaAttribute.attribute, $scope.guxVaVehicle.nameplateCode),
                    isAttributeEmpty = !$scope.attributeValue,
                    isAuthorMode = __WEBPACK_IMPORTED_MODULE_1_isAuthor___default.a.getAuthorStatus();
                $scope.attributeVisible = !0, isAuthorMode && (isAttributeHidden || isAttributeEmpty) ? $scope.attributeStyle = "attr-strike" : (isAttributeHidden || isAttributeEmpty) && ($scope.attributeVisible = !1)
            }
        };
        var template
    }])
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0),
        __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__),
        api = {},
        defaultValues = {
            decimalsNumber: 2,
            decimalsDelimiter: ".",
            thousandsDelimiter: "",
            forceDecimals: !1
        };
    api.formatNumber = function(number, configuration) {
        var conf = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.defaults(configuration, defaultValues);
        return function(number, decimals, decimalPoint, thousandsSeparator, forceDecimals) {
            number = (number + "").replace(/[^0-9+\-Ee.]/g, "");
            var n = isFinite(+number) ? +number : 0,
                precision = isFinite(+decimals) ? Math.abs(decimals) : 0,
                s = (precision ? function(n, prec) {
                    var k = Math.pow(10, prec);
                    return "" + Math.round(n * k) / k
                }(n, precision) : "" + Math.round(n)).split(".");
            s[0].length > 3 && (s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, thousandsSeparator));
            ((s[1] || "").length > 0 || forceDecimals) && (s[1] = s[1] || "", s[1] += new Array(precision - s[1].length + 1).join("0"), "" === s[1] && (s = [s[0]]));
            return s.join(decimalPoint)
        }(number, conf.decimalsNumber, conf.decimalsDelimiter, conf.thousandsDelimiter, conf.forceDecimals)
    }, __webpack_exports__.default = api
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(2),
        __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__),
        __WEBPACK_IMPORTED_MODULE_1_configurationProvider__ = __webpack_require__(6),
        __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_configurationProvider__);
    __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module("ngUrlRewrite", []).factory("ngUrlRewriteService", function() {
        var api = {},
            config = __WEBPACK_IMPORTED_MODULE_1_configurationProvider___default.a.get(__WEBPACK_IMPORTED_MODULE_0_angular___default.a.element("#images-sizes-configuration")),
            lastSlashRegexp = /\/(?=[^/]*$)/;
        return api.rewriteUrls = function(images, mediaQuery) {
            var mediaType = mediaQuery.getMediaType(),
                imgSize = config.imagesSizesConfiguration[mediaType];
            return images = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.copy(images), __WEBPACK_IMPORTED_MODULE_0_angular___default.a.forEach(images, function(image) {
                image.urls[0] = image.urls[0].replace(lastSlashRegexp, "/" + imgSize)
            }), images
        }, api
    })
}, function(module, exports) {}, function(module, exports) {
    module.exports = function(css) {
        var location = "undefined" != typeof window && window.location;
        if (!location) throw new Error("fixUrls requires window.location");
        if (!css || "string" != typeof css) return css;
        var baseUrl = location.protocol + "//" + location.host,
            currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");
        return css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
            var newUrl, unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function(o, $1) {
                return $1
            }).replace(/^'(.*)'$/, function(o, $1) {
                return $1
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl) ? fullMatch : (newUrl = 0 === unquotedOrigUrl.indexOf("//") ? unquotedOrigUrl : 0 === unquotedOrigUrl.indexOf("/") ? baseUrl + unquotedOrigUrl : currentDir + unquotedOrigUrl.replace(/^\.\//, ""), "url(" + JSON.stringify(newUrl) + ")")
        })
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(module, exports) {
    module.exports = function(useSourceMap) {
        var list = [];
        return list.toString = function() {
            return this.map(function(item) {
                var content = function(item, useSourceMap) {
                    var content = item[1] || "",
                        cssMapping = item[3];
                    if (!cssMapping) return content;
                    if (useSourceMap && "function" == typeof btoa) {
                        var sourceMapping = (sourceMap = cssMapping, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */"),
                            sourceURLs = cssMapping.sources.map(function(source) {
                                return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */"
                            });
                        return [content].concat(sourceURLs).concat([sourceMapping]).join("\n")
                    }
                    var sourceMap;
                    return [content].join("\n")
                }(item, useSourceMap);
                return item[2] ? "@media " + item[2] + "{" + content + "}" : content
            }).join("")
        }, list.i = function(modules, mediaQuery) {
            "string" == typeof modules && (modules = [
                [null, modules, ""]
            ]);
            for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                var id = this[i][0];
                "number" == typeof id && (alreadyImportedModules[id] = !0)
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), list.push(item))
            }
        }, list
    }
}, function(module, exports, __webpack_require__) {
    var fn, memo, stylesInDom = {},
        isOldIE = (fn = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === memo && (memo = fn.apply(this, arguments)), memo
        }),
        getElement = function(fn) {
            var memo = {};
            return function(target) {
                if ("function" == typeof target) return target();
                if (void 0 === memo[target]) {
                    var styleTarget = function(target) {
                        return document.querySelector(target)
                    }.call(this, target);
                    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) try {
                        styleTarget = styleTarget.contentDocument.head
                    } catch (e) {
                        styleTarget = null
                    }
                    memo[target] = styleTarget
                }
                return memo[target]
            }
        }(),
        singleton = null,
        singletonCounter = 0,
        stylesInsertedAtTop = [],
        fixUrls = __webpack_require__(318);

    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i],
                domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                for (; j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options))
            } else {
                var parts = [];
                for (j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                stylesInDom[item.id] = {
                    id: item.id,
                    refs: 1,
                    parts: parts
                }
            }
        }
    }

    function listToStyles(list, options) {
        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
            var item = list[i],
                id = options.base ? item[0] + options.base : item[0],
                part = {
                    css: item[1],
                    media: item[2],
                    sourceMap: item[3]
                };
            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                id: id,
                parts: [part]
            })
        }
        return styles
    }

    function insertStyleElement(options, style) {
        var target = getElement(options.insertInto);
        if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];
        if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling) : target.appendChild(style) : target.insertBefore(style, target.firstChild), stylesInsertedAtTop.push(style);
        else if ("bottom" === options.insertAt) target.appendChild(style);
        else {
            if ("object" != typeof options.insertAt || !options.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
            target.insertBefore(style, nextSibling)
        }
    }

    function removeStyleElement(style) {
        if (null === style.parentNode) return !1;
        style.parentNode.removeChild(style);
        var idx = stylesInsertedAtTop.indexOf(style);
        idx >= 0 && stylesInsertedAtTop.splice(idx, 1)
    }

    function createStyleElement(options) {
        var style = document.createElement("style");
        return options.attrs.type = "text/css", addAttrs(style, options.attrs), insertStyleElement(options, style), style
    }

    function addAttrs(el, attrs) {
        Object.keys(attrs).forEach(function(key) {
            el.setAttribute(key, attrs[key])
        })
    }

    function addStyle(obj, options) {
        var style, update, remove, result;
        if (options.transform && obj.css) {
            if (!(result = options.transform(obj.css))) return function() {};
            obj.css = result
        }
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            style = singleton || (singleton = createStyleElement(options)), update = applyToSingletonTag.bind(null, style, styleIndex, !1), remove = applyToSingletonTag.bind(null, style, styleIndex, !0)
        } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (style = function(options) {
            var link = document.createElement("link");
            return options.attrs.type = "text/css", options.attrs.rel = "stylesheet", addAttrs(link, options.attrs), insertStyleElement(options, link), link
        }(options), update = function(link, options, obj) {
            var css = obj.css,
                sourceMap = obj.sourceMap,
                autoFixUrls = void 0 === options.convertToAbsoluteUrls && sourceMap;
            (options.convertToAbsoluteUrls || autoFixUrls) && (css = fixUrls(css));
            sourceMap && (css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
            var blob = new Blob([css], {
                    type: "text/css"
                }),
                oldSrc = link.href;
            link.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc)
        }.bind(null, style, options), remove = function() {
            removeStyleElement(style), style.href && URL.revokeObjectURL(style.href)
        }) : (style = createStyleElement(options), update = function(style, obj) {
            var css = obj.css,
                media = obj.media;
            media && style.setAttribute("media", media);
            if (style.styleSheet) style.styleSheet.cssText = css;
            else {
                for (; style.firstChild;) style.removeChild(style.firstChild);
                style.appendChild(document.createTextNode(css))
            }
        }.bind(null, style), remove = function() {
            removeStyleElement(style)
        });
        return update(obj),
            function(newObj) {
                if (newObj) {
                    if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                    update(obj = newObj)
                } else remove()
            }
    }
    module.exports = function(list, options) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (options = options || {}).attrs = "object" == typeof options.attrs ? options.attrs : {}, options.singleton || "boolean" == typeof options.singleton || (options.singleton = isOldIE()), options.insertInto || (options.insertInto = "head"), options.insertAt || (options.insertAt = "bottom");
        var styles = listToStyles(list, options);
        return addStylesToDom(styles, options),
            function(newList) {
                for (var mayRemove = [], i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    (domStyle = stylesInDom[item.id]).refs--, mayRemove.push(domStyle)
                }
                newList && addStylesToDom(listToStyles(newList, options), options);
                for (i = 0; i < mayRemove.length; i++) {
                    var domStyle;
                    if (0 === (domStyle = mayRemove[i]).refs) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                        delete stylesInDom[domStyle.id]
                    }
                }
            }
    };
    var textStore, replaceText = (textStore = [], function(index, replacement) {
        return textStore[index] = replacement, textStore.filter(Boolean).join("\n")
    });

    function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (style.styleSheet) style.styleSheet.cssText = replaceText(index, css);
        else {
            var cssNode = document.createTextNode(css),
                childNodes = style.childNodes;
            childNodes[index] && style.removeChild(childNodes[index]), childNodes.length ? style.insertBefore(cssNode, childNodes[index]) : style.appendChild(cssNode)
        }
    }
}], [210]);