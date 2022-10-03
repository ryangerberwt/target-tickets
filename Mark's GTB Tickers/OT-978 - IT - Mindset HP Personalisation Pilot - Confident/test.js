    //var image = undefined;
    var image = "https://www.ford.it/content/dam/guxeu/it/home/billboard/2020/ford-homepage-it-gtb68671-16x9-2160x1215-bb-blue-ford-puma-on-street.jpg";
    var globalData;
    var billboard = billboard || undefined;
    var carouselLoadInterval_978;
    var offer;
    var slideToRemove = 4;
    var counter = counter || 0;
    var remoteURL = "/content/snippets/target/bot-hpr-slide01";
     //var remoteURL = "/content/offers-library/focus-carousel-offer";
    var customCopy = "Il design di domani. Per muoverti meglio oggi.";
    var customCopyH2 = "Prova Nuova Ford Puma."
    var customCTA = "Prenota un test drive";
    var customDestinationURL = "/guida-allacquisto/ricerca/richiedi-test-drive?vehicleCode=CF701";
    var customDestinationClickthrough = "Prenota un test drive";
    var targetCampaign = targetCampaign || {};
   
    function createOffer_978() {
     console.log("createOffer");
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
      id: "optprg-returning-slide-billboard",
      child: [{
       type: "div",
       className: "carousel-content",
       child: [{
        type: "div",
        className: "content",
        child: [{
         type: "div",
         className: "section billboard"
        }]
       }]
      }]
     })
    }
   
    function processData_978(data) {
        // New Code
        try {

            // EXTRA HEADING
            var h3 = $(data.body).find("h2").first().clone();
            h3[0].id = "h3Heading";
            $(data.body).find("h2").parent().append(h3);
            $(data).find("h2")[1].parentNode.insertBefore($(data).find("h2")[1], $(data).find("h2")[1].parentNode.children[1])
            $(data).find("#h3Heading")[0].outerHTML = $(data).find("#h3Heading")[0].outerHTML.replace("h2", "h3")
            $(data).find("#h3Heading")[0].innerHTML = customCopyH2;
            
            $(data).find('h3 a').parent().contents().unwrap().wrap('<h4/>');
            // ALIGNMENT CHANGES
            if (data.body.getElementsByTagName("h2").length > 0)
                data.body.getElementsByTagName("h2")[0].style.textAlign = "";
            
            if (data.body.getElementsByTagName("h3").length > 0)
                data.body.getElementsByTagName("h3")[0].style.textAlign = "";
            
            if (data.body.getElementsByTagName('h4').length > 0)
                data.body.getElementsByTagName("h4")[0].style.textAlign = "";

            // STYLING CHANGES
            $(data).find("h4 a").removeClass("link-chevron").removeClass("link-chevron-white").addClass("cta-button").addClass("cta-button-primary");
            $(data).find("h3").addClass("hidden-mobile")

            // IMAGE
            for (var i = 0; i < $(data).find('source').length; i++) {
                var tempImage = image;
                switch ($(data).find('source')[i].media) {
                    case "(min-width: 1200px)": tempImage += ".renditions.extra-large.jpeg";
                        break;
                    case "(min-width: 992px)": tempImage += ".renditions.large.jpeg";
                        break;
                    case "(min-width: 768px)": tempImage += ".renditions.medium.jpeg";
                        break;
                    case "(min-width: 480px)": tempImage += ".renditions.small.jpeg";
                        break;
                    case "(min-width: 0px)": tempImage += ".renditions.extra-small.jpeg";
                        break;
                }

                $(data).find('source')[i].srcset = tempImage;
            }
            //$(data).find('source').attr("srcset", image);
            $(data).find('img').removeAttr("src").attr("src", image).attr("alt", "").attr("title", "");

        } catch (ex) {
            console.log(ex);
        }

        
        
        data.body.getElementsByTagName("h2")[0].innerHTML = customCopy;
        data.body.getElementsByTagName("h4")[0].children[0].innerHTML = customCTA;
        //custom destination URL here and clickthrough for analytics
        data.body.getElementsByTagName("a")[1].href = customDestinationURL;
        data.body.getElementsByTagName("a")[1].attributes["data-cta-name"] = customDestinationClickthrough;
        offer[0].getElementsByClassName("section billboard")[0].append(data.body.getElementsByClassName("billboard-content")[0]);
    }
   
    function loadComplete_978() {
     console.log("handler");
     if (this.status == 200 && this.responseXML != null) {
      processData_978(this.responseXML);
     } else {
      console.log("error on request");
     }
    }
   
    function customisationInit_978() {
     if (!billboard) {
      offer = createOffer_978();
      var client = new XMLHttpRequest();
      client.onload = loadComplete_978;
      client.open("GET", remoteURL);
      client.responseType = "document";
      client.send();
      carouselLoadInterval_978 = setInterval(checkCarouselLoaded_978, 50);
     }
    }
   
    function checkCarouselLoaded_978() {
     console.log("checkCarouselLoaded");
     billboard = $("div.carousel.carousel-billboard-homepage.active").data("flexslider");
     if (billboard != undefined) {
      clearInterval(carouselLoadInterval_978);
      customiseCarousel_978();
     }
    }
   
    function customiseCarousel_978() {
     console.log("customiseCarousel");
     billboard.pause();
     if (billboard.count > 4) {
               billboard.removeSlide(slideToRemove);
     }
     billboard.addSlide(offer, 0);
     billboard.play();
      
   
     FordPersonalisation.ptemplate.set("return");
    }

    $(document).ready(function() {
        console.log("OT-978");
        if (image != undefined) {
            window.targetCampaign = {
                page: {
                    campaignName: "tt:nwp:opt-978:ab:hp:mindset-conf-it:challenger"
                }
            }
            _satellite.track("genericTestingImpressionIDWorkaround");
            customisationInit_978();
        }
    });

    var image = "https://www.ford.it/content/dam/guxeu/it/home/billboard/2020/ford-homepage-it-gtb68671-16x9-2160x1215-bb-blue-ford-puma-on-street.jpg";
    var globalData;
    var billboard = billboard || undefined;
    var carouselLoadInterval;
    var offer;
    var slideToRemove = 4;
    
    var remoteURL = "/content/snippets/target/bot-hpr-slide01";

    var customCopy = "Scopri l’ibrido più venduto in Italia.";
    var customCopyH2 = "Nuova Ford <strong>Puma</strong>."
    var customCTA = "Provala in sicurezza";
    var customDestinationURL = "/guida-allacquisto/ricerca/richiedi-test-drive?vehicleCode=CF701";
    var customDestinationClickthrough = "Prenota un test drive";
    var targetCampaign = targetCampaign || {};

    function createOffer() {

        console.log("createOffer");

        return function DOMBuilder(obj) {
            if (obj) {
                if ($.isArray(obj)) {
                    var i, arr = [];
                    for (i = 0; i < obj.length; i++) obj[i] instanceof $ ? arr.push(obj[i]) : arr.push(DOMBuilder(
                        obj[i]));
                    return arr
                }
                if (obj instanceof $) return obj;
                if ($.isFunction(obj)) return DOMBuilder(obj());
                if (!obj.type) return obj.html || obj.text || undefined;
                if (obj.hasOwnProperty("render") && !obj.render) return undefined;
                var $e = $("<" + obj.type + ">");
                if (obj.id && $e.prop("id", obj.id), obj.className && $e.addClass(obj.className), $.isPlainObject(
                        obj.data) && obj.data.key && $e.data(obj.data.key, obj.data.value), obj.html ? $e.html(obj
                        .html) : $e.text(obj.text || ""), obj.child && $e.append(DOMBuilder(obj.child)), $
                    .isPlainObject(obj.handlers))
                    for (var evName in obj.handlers) $e.on(evName, obj.handlers[evName]);
                if ($.isPlainObject(obj.props))
                    for (var propName in obj.props) $e.prop(propName, obj.props[propName]);
                return $.isFunction(obj.callback) && obj.callback($e), $e
            }
        }({
            type: "article",
            className: "carousel-slide slider-model-detail target-slide",
            id: "optprg-returning-slide-billboard",
            child: [{
                type: "div",
                className: "carousel-content",
                child: [{
                    type: "div",
                    className: "content",
                    child: [{
                        type: "div",
                        className: "section billboard"
                    }]
                }]
            }]
        })
    }

    function processData(data) {

        // New Code
        try {

            // EXTRA HEADING
            var h3 = $(data.body).find("h2").first().clone();
            h3[0].id = "h3Heading";
            $(data.body).find("h2").parent().append(h3);
            $(data).find("h2")[1].parentNode.insertBefore($(data).find("h2")[1], $(data).find("h2")[1].parentNode.children[1]);
            $(data).find("#h3Heading")[0].outerHTML = $(data).find("#h3Heading")[0].outerHTML.replace("h2", "h3");
            $(data).find("#h3Heading")[0].innerHTML = customCopyH2;

            $(data).find('h3 a').parent().contents().unwrap().wrap('<h4/>');

            // ALIGNMENT CHANGES
            if (data.body.getElementsByTagName("h2").length > 0)
                data.body.getElementsByTagName("h2")[0].style.textAlign = "";

            if (data.body.getElementsByTagName("h3").length > 0)
                data.body.getElementsByTagName("h3")[0].style.textAlign = "";

            if (data.body.getElementsByTagName('h4').length > 0)
                data.body.getElementsByTagName("h4")[0].style.textAlign = "";

            // STYLING CHANGES
            $(data).find("h4 a").addClass("link-chevron").addClass("link-chevron-white").removeClass("cta-button").removeClass("cta-button-primary");
            $(data).find("h3").addClass("hidden-mobile");

            // IMAGE
            for (var i = 0; i < $(data).find('source').length; i++) {
                var tempImage = image;
                switch ($(data).find('source')[i].media) {
                    case "(min-width: 1200px)":
                        tempImage += ".renditions.extra-large.jpeg";
                        break;
                    case "(min-width: 992px)":
                        tempImage += ".renditions.large.jpeg";
                        break;
                    case "(min-width: 768px)":
                        tempImage += ".renditions.medium.jpeg";
                        break;
                    case "(min-width: 480px)":
                        tempImage += ".renditions.small.jpeg";
                        break;
                    case "(min-width: 0px)":
                        tempImage += ".renditions.extra-small.jpeg";
                        break;
                }

                $(data).find('source')[i].srcset = tempImage;
            }
           
            $(data).find('img').removeAttr("src").attr("src", image).attr("alt", "").attr("title", "");

        } catch (ex) {
            console.log(ex);
        }



        data.body.getElementsByTagName("h2")[0].innerHTML = customCopy;
        data.body.getElementsByTagName("h4")[0].children[0].innerHTML = customCTA;

        //custom destination URL here and clickthrough for analytics
        data.body.getElementsByTagName("a")[1].href = customDestinationURL;
        data.body.getElementsByTagName("a")[1].attributes["data-cta-name"] = customDestinationClickthrough;
        offer[0].getElementsByClassName("section billboard")[0].append(data.body.getElementsByClassName("billboard-content")[0]);

    }

    function loadComplete() {

        console.log("loadComplete handler");

        if (this.status == 200 && this.responseXML != null) {
            processData(this.responseXML);
        } else {
            console.log("error on request");
        }

    }

    function customisationInit() {

        if (!billboard) {
            offer = createOffer();
            var client = new XMLHttpRequest();
            client.onload = loadComplete;
            client.open("GET", remoteURL);
            client.responseType = "document";
            client.send();
            carouselLoadInterval = setInterval(checkCarouselLoaded, 50);
        }

    }

    function checkCarouselLoaded() {

        console.log("checkCarouselLoaded");

        billboard = $("div.carousel.carousel-billboard-homepage.active").data("flexslider");

        if (billboard != undefined) {
            clearInterval(carouselLoadInterval);
            customiseCarousel();
        }

    }

    function customiseCarousel() {

        console.log("customiseCarousel");

        billboard.pause();

        if (billboard.count > 4) {
            billboard.removeSlide(slideToRemove);
        }

        billboard.addSlide(offer, 0);
        billboard.play();

        FordPersonalisation.ptemplate.set("return");

    }

    $(document).ready(function () {

        console.log("OT-979");

        if (image != undefined) {
            window.targetCampaign = {
                page: {
                    campaignName: "tt:nwp:opt-979:ab:hp:mindset-appreh-it:challenger"
                }
            }
            _satellite.track("genericTestingImpressionIDWorkaround");
            customisationInit();
        }

    });