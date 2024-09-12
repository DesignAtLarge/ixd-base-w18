function getCookie(name, cookies) {
    var cookieList = cookies.split(';');
    for(var i = 0; i < cookieList.length; i++) {
        var c = cookieList[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length + 1, c.length);
        }
    }

    return '';
}