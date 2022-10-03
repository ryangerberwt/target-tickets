

var offer;
var remoteURL = [
    "/content/snippets/target/bot-hpr-slide05",
    "/content/snippets/target/bot-hpr-slide04",
    "/content/snippets/target/bot-hpr-slide03",
    "/content/snippets/target/bot-hpr-slide02",
    "/content/snippets/target/bot-hpr-slide01"
];

var targetCampaign = targetCampaign || {};
targetCampaign = {
    page: {
        campaignName: "tt:nwp:opt-768:xt:hp:brand-reset"
    }
};

function customisationInit()
{
    for(var x = 0; x < remoteURL.length; x++) {

        var COUNTER = x;
        console.log("1. DOING URL: " + remoteURL[x] + " AND COUNTER IS: " + COUNTER);
        offer = createOffer(COUNTER);

        $.ajax({
            type: "GET",
            async: false,
            url: remoteURL[x],
            success: function(data, textStatus, object)
            {
                console.log("3. LOAD COMPLETE: " + COUNTER);

                if (object.status === 200 && object.responseText != null)
                {
                    console.log("4. PROCESS DATA");

                    var billboardSection = $(offer[0]).find(".section.billboard")[0];
                    console.log ("Offer " + $(offer[0]));
                    console.log(billboardSection);
                    $(billboardSection).append($(object.responseText).find(".billboard-content").html());
                    checkCarouselLoaded(COUNTER);

                } else {
                    console.log("ERROR");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("error on request");
                console.error(errorThrown);
            },
            complete: function(data) {}
        });
    }
}
function createOffer(COUNTER) {
    console.log("2. CREATE OFFER");
    return function DOMBuilder(obj) {
        if (obj) {
            if ($.isArray(obj)) {
                var i, arr = [];
                for (i = 0; i < obj.length; i++) obj[i] instanceof $ ? arr.push(obj[i]) : arr.push(DOMBuilder(obj[i]));
                return arr
            }
            if (obj instanceof $) return obj;
            if ($.isFunction(obj)) return DOMBuilder(obj());
            if (!obj.type) return obj.html || obj.text || undefined;
            if (obj.hasOwnProperty("render") && !obj.render) return undefined;
            var $e = $("<" + obj.type + ">");
            if (obj.id && $e.prop("id", obj.id), obj.className && $e.addClass(obj.className), $.isPlainObject(obj.data) && obj.data.key && $e.data(obj.data.key, obj.data.value), obj.html ? $e.html(obj.html) : $e.text(obj.text || ""), obj.child && $e.append(DOMBuilder(obj.child)), $.isPlainObject(obj.handlers))
                for (var evName in obj.handlers) $e.on(evName, obj.handlers[evName]);
            if ($.isPlainObject(obj.props))
                for (var propName in obj.props) $e.prop(propName, obj.props[propName]);
            return $.isFunction(obj.callback) && obj.callback($e), $e
        }
    }({
        type: "article",
        className: "carousel-slide slider-model-detail target-slide",
        id: "optprg-returning-slide-billboard" + COUNTER,
        child: [{
            type: "div",
            className: "carousel-content",
            child: [{
                type: "div",
                className: "content",
                child: [{
                    type: "div",
                    className: "billboard section within-carousel-white"/*,
                      		child: [{
                            	type: "div",
                              	className: "billboard-content within-carousel-white",
                              		child: [{
                                    	type: "div",
                                      	className: "billboard-inner",
                                      		child: [{
                                              type: "div",
                                              className: "brightcove within-billboard"
                                            }]
                                    }]
                            }]*/
                }]
            }]
        }]
    })
}
function checkCarouselLoaded(COUNTER)
{
    console.log("5. CHECK CAROUSEL LOADED");
    var billboard = $("div.carousel.carousel-billboard-homepage.active").data("flexslider");

    console.log("6. CUSTOMIZE CAROUSEL");
    console.log("Slide to modify: " + COUNTER);
    console.log("---------------------------");
    billboard.pause();
    billboard.removeSlide(COUNTER);
    billboard.addSlide(offer, 0);
    billboard.play();
}

var existsInterval = setInterval(function() {
    if($("div.carousel.carousel-billboard-homepage.active").length > 0) {
        clearInterval(existsInterval);
        customisationInit();
    }
}, 500);

