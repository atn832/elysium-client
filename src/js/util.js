function getURLParameter(name) {
    var arg = (RegExp(name + '=' + '(.+?)(&|$)').exec(window.location.search)||[,null])[1];
    if (!arg) return null;
    return unescape(decodeURI(arg));
}

export { getURLParameter };