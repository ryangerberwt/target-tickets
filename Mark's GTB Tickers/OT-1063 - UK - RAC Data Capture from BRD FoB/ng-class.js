function driller(objects) {
    for (var i = 0; i < objects.length; i++) {
        if (isClass(objects[i].dataset.ngClass)) {
            console.log(objects[i]);
            console.log(objects[i].dataset.ngClass);
            var theClass = returnClass(objects[i].dataset.ngClass);
            //console.log(theClass);
            objects[i].classList.add(theClass);  
        }

        driller(objects[i].children);
    }
}

function returnClass(ngClass) {
    return ngClass.substr(ngClass.indexOf('?')+1, ngClass.lastIndexOf(':') - ngClass.indexOf('?')-1).trim().replaceAll('\'','');
}

function isClass(ngClass) {
    if (ngClass != undefined) {
        return ngClass.includes('short') || ngClass.includes('wizard');
    }

    return false;
}