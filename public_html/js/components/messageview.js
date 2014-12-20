/** @jsx React.DOM */
import Bubble from "./line/bubble";
import JoinLeaveLine from "./line/joinleaveline";
import ConnectionLine from "./line/connectionline";
import SessionEventLine from "./line/sessioneventline";
import { getEventTypeID } from "../data/eventtype";
import EventTypes from "../data/eventtype";
import formatTitle from "./line/formattitle";

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

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
      throw new "Should be rendered by Bubble"
    else if (typeID === EventTypes.Join || typeID === EventTypes.Leave)
      return JoinLeaveLine;
    else if (typeID === EventTypes.LostConnection || typeID === EventTypes.FoundConnection)
      return ConnectionLine;
    return SessionEventLine;
}

var MessageView = React.createClass({
    render: function() {
        var displayedEvents = this.props.events && this.props.events.filter(isNotPauseResumeEvent) || [];
        var lines = [];
        var prevEvent;
        var displayItems = [];
        displayedEvents.forEach(function(event) {
            var typeID = getEventTypeID(event);
            if (typeID === EventTypes.Message) {
                if (!prevEvent || lines.length === 0 || (event.source.entity.ID === prevEvent.source.entity.ID &&
                    event.source.datetime.diff(prevEvent.source.datetime) < 5 * 60 * 1000)) {
                    //just add
                } else {
                    // new bubble
                    displayItems.push(<Bubble lines={lines} />);
                    lines = [];
                }
                lines.push(event);
            } else {
                if (lines.length > 0) {
                    //render bubble
                    displayItems.push(<Bubble lines={lines} />);
                    lines = [];
                }
                var Renderer = getEventRenderer(event);
                displayItems.push(<Renderer event={event} />);
            }
            prevEvent = event;
        });
        if (lines.length > 0) {
            //render bubble
            displayItems.push(<Bubble lines={lines} />);
            lines = [];
        }
        if (displayedEvents.length > 0) {
            var lastEvent = displayedEvents[displayedEvents.length - 1];
            document.title = formatTitle(lastEvent);
        }
        return (
            <div className="" onClick={this.props.onClick} >
                {displayItems}
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
        var scrollObj = this.props.conversationElement.getDOMNode();
        $(scrollObj).animate({ scrollTop: scrollObj.scrollHeight }, 500);
    },
    isScrolledToBottom: function() {
        var scrollObj = this.props.conversationElement.getDOMNode();
        return (scrollObj.scrollHeight - scrollObj.scrollTop) === scrollObj.clientHeight;
    }
});

export default MessageView;