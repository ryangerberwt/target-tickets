if (user.get('PostHandoverDate') && user.get('PostHandoverDate') != "") {
    return true;
}
if (user.get('PreHandoverDate') && user.get('PreHandoverDate') != "") {
    if (user.get('PreHandoverDate') < new Date()) {
        return true;
    }
}

return false;