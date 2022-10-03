var param = "";//user.getLocal("profile_fr_handover_state");

if (param == "") {
    param = profile.get('mbox_fr_handover_state');
}

if (param == "post") {
    user.setLocal("profile_fr_handover_state", "post");
    return "post";
}

var savedDate = user.getLocal("profile_fr_handover_date");

if (savedDate == "" && param == "pre") {
    var d = new Date();
    d.setHours(d.getHours() + (15*24));
    user.setLocal("profile_fr_handover_date", d);
    return "pre";
}

if (savedDate != "") {
    var today = new Date();
    if (today > savedDate) {
        user.setLocal("profile_fr_handover_state", "post");
        return "post";
    }

    return "pre";
}

return "";