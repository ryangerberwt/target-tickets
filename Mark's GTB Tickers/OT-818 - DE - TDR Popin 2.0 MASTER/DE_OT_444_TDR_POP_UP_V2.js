try {
    var marketPathSlice = "wwwperf-de.brandeu.ford.com";
    var marketProdPathSlice = "ford.de";
    var mboxName = "DE_SummaryPage_tdrV2PopUp_v2";
    var openTreshold = 2;

    // Run just on correct market
    if (page.url.indexOf(marketPathSlice) === -1 && page.url.indexOf(marketProdPathSlice) === -1)
        return false;

    var storedDataTimeStamp = parseInt(user.getLocal("v2_tdrPopUpTimeStamp"));
    var storedData = {
        tdrPopUpTimeStamp: isNaN(storedDataTimeStamp) ? undefined : storedDataTimeStamp,
        tdrPopUpCounter: parseInt(user.getLocal("v2_tdrPopUpCounter"))
    };
    var SHOW_WITHIN = 1296000;
    var currentTimeStamp = (new Date().getTime() / 1000);

    function _initializeDataInProfileScript() {
        user.setLocal("v2_tdrPopUpTimeStamp", currentTimeStamp);
        user.setLocal("v2_tdrPopUpCounter", 0);
    }
    // Reset or reinitialize
    if (mbox && mbox.name.indexOf(mboxName) > -1) {
        // On open mBox call
        if (mbox.param("open")) {
            user.setLocal("v2_tdrPopUpCounter", ++storedData.tdrPopUpCounter);
            return false;
        }

        // Close Pop Up
        if (mbox.param("popup")) {
            if (mbox.param("release")) {
                user.setLocal("v2_tdrPopUpTimeStamp", "undefined");
                user.setLocal("v2_tdrPopUpCounter", "undefined");
            }

            return false;
        }
        // Everything else should be initialize call
        _initializeDataInProfileScript();

        // In both cases - new or renew we don't want to show PopUp
        return false;
    }

    // If there is no timestamp don't do anything
    if (!storedData.tdrPopUpTimeStamp)
        return false;

    // Limit open treshold
    if (storedData.tdrPopUpCounter >= openTreshold)
        return false;

    if (page.url.indexOf("kaufberatung/informieren/probefahrt-vereinbaren") !== -1){
        console.log("not equal");
        return false;
        }

    // Do logic and try to answer is PopUp should be opened
    var msDifference = currentTimeStamp - storedData.tdrPopUpTimeStamp;

    if (msDifference < SHOW_WITHIN)
        return true;

    return false;
} catch(e) {
    return false;
}