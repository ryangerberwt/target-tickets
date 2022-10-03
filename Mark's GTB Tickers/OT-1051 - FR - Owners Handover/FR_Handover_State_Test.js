var param = profile.get('mbox_fr_handover_state_test');

if (param == "") {
    param = user.getLocal("profile_fr_handover_state_test");
}

if (param == "post") {
    return "A";
}

var savedDate = user.getLocal("profile_fr_handover_date_test");

if (savedDate == "" && param == "pre") {
    var d = new Date();
    d.setHours(d.getHours() + (14*24));
    user.setLocal("profile_fr_handover_date_test", d);
    return "B";
}

if (savedDate == "") {
    var today = new Date();
    if (today > savedDate) {
        return "C";
    } 
        
    return "D";
}

return "E";