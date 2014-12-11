/** @jsx React.DOM */

import Image from "./image";

var imageExtensions = ["jpg", "jpeg", "gif", "png"];
var linkRegex = /(https?:\/\/[^ ,)]*)/g;

/*
 * Define endsWith
 */
if (!String.prototype.endsWith) {
    Object.defineProperty(String.prototype, 'endsWith', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (searchString, position) {
            position = position || this.length;
            position = position - searchString.length;
            return this.lastIndexOf(searchString) === position;
        }
    });
}

function getYouTubeId(url) {
    // source: http://closure-library.googlecode.com/svn-history/r8/trunk/closure/goog/docs/closure_goog_ui_media_youtube.js.source.html
    var matches = /https?:\/\/(?:[a-zA_Z]{2,3}.)?(?:youtube\.com\/watch\?)((?:[\w\d\-\_\=]+&amp;(?:amp;)?)*v(?:&lt;[A-Z]+&gt;)?=([0-9a-zA-Z\-\_]+))/i.exec(url);
    if (!matches)
        return null;
    return matches[2];
}

function isImageURL(url) {
    return imageExtensions.some(function(ext) {
        return url.toLowerCase().endsWith("." + ext) ||
                url.toLowerCase().indexOf("." + ext + "?") >= 0;
    });
}

// Parses links
function processLinks(text) {
    var result = [null];
    var containsLinks = false;

    var matches;
    var lastIndex = 0;
    while (matches = linkRegex.exec(text)) {
        containsLinks = true;
        var unescapedMatch = matches[0];
        var match = unescapedMatch;
        var link;
        if (isImageURL(match))
            link = <Image src={match} />
        else {
            var youtubeID = getYouTubeId(unescapedMatch);
            if (youtubeID)
                link = <span><iframe type="text/html" width="640" height="390" src={"http://www.youtube.com/embed/" + youtubeID + "?origin=http://www.wafrat.com"} frameborder="0"/><br/><a href={match} target="_blank">{match}</a></span>;
            else
                link = <a href={match} target="_blank">{match}</a>;
        }
        result.push(text.substring(lastIndex, matches.index));
        result.push(link);
        lastIndex = matches.index + matches[0].length;
    }
    result.push(text.substring(lastIndex));
    result = React.DOM.span.apply(null, result);
    return {
        containsLinks: containsLinks,
        text: result
    }
}

var Content = React.createClass({
    render: function() {
        var processedText = processLinks(this.props.content);
        var textWithHTMLLinks = processedText.text;
        return textWithHTMLLinks;
    }
});

export default Content;