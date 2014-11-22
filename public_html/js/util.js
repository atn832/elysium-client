function htmlentities(text) {
    return $('<div/>').text(text).html()
}

export { htmlentities };