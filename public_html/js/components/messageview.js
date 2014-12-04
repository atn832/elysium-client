/** @jsx React.DOM */
import Line from "./line/line";
import JoinLeaveLine from "./line/joinleaveline";
import ConnectionLine from "./line/connectionline";
import SessionEventLine from "./line/sessioneventline";
import { getEventTypeID } from "../data/eventtype";
import EventTypes from "../data/eventtype";
import formatTitle from "./line/formattitle";

function isNotPauseResumeEvent(event) {
    var typeID = getEventTypeID(event);
    return typeID != EventTypes.SessionPause  && typeID != EventTypes.SessionResume;
}

function getEventRenderer(event) {
    if (!isNotPauseResumeEvent(event)) {
      return null;
    }
    var typeID = getEventTypeID(event);
    if (typeID === EventTypes.Message)
      return Line;
    else if (typeID === EventTypes.Join || typeID === EventTypes.Leave)
      return JoinLeaveLine;
    else if (typeID === EventTypes.LostConnection || typeID === EventTypes.FoundConnection)
      return ConnectionLine;
    return SessionEventLine;
}

var MessageView = React.createClass({
    render: function() {
        var displayedEvents = this.props.events && this.props.events.filter(isNotPauseResumeEvent) || [];
        var lines = displayedEvents.map(function(event) {
            var Renderer = getEventRenderer(event);
            return <Renderer event={event} />;
        }) || "";
        if (displayedEvents.length > 0) {
            var lastEvent = displayedEvents[displayedEvents.length - 1];
//            $('title').text(formatTitle(lastEvent));
            document.title = formatTitle(lastEvent);
        }
        return (
            <div className="fg-1 w-100 ov-x-h ov-y-s" ref="conversationElement">
                {lines}
            </div>
        );
    },
    componentDidUpdate: function(prevProps, prevState) {
        if (this.scrollAtNextUpdate) {
            this.scrollAtNextUpdate = false;
            this.scrollToBottom();
        }
    },
    scrollToBottom: function(atNextUpdate) {
        if (atNextUpdate) {
            this.scrollAtNextUpdate = true;
            return;
        }
        var scrollObj = this.refs.conversationElement.getDOMNode();
        $(scrollObj).animate({ scrollTop: scrollObj.scrollHeight }, 500);
    },
    isScrolledToBottom: function() {
        var scrollObj = this.refs.conversationElement.getDOMNode();
        return (scrollObj.scrollHeight - scrollObj.scrollTop) === scrollObj.clientHeight;
    }
});

export default MessageView;