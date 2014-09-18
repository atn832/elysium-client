/** @jsx React.DOM */

var EventTypes = {
    Join:1,
    Leave: 2,
    Message: 3,
    SessionStart: 4,
    SessionStop: 5,
    SessionPause: 6,
    SessionResume: 7,
    LostConnection: 10,
    FoundConnection: 11
}

function getEventTypeID(event) {
    var typeID = event.eventType.ID;
    return typeID;
}
isNotPauseResumeEvent = function(event) {
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
    var lines = this.props.events.filter(isNotPauseResumeEvent).map(function(event) {
        var renderer = getEventRenderer(event);
        return <renderer event={event}></renderer>;
    });
    return (
      <div id="conversationdiv" className="conversationDiv">
        {lines}
      </div>
    );
  }
});
