/** @jsx React.DOM */

var EventTypes = {Join:1, Leave: 2, Message:3, SessionStart:4, SessionStop: 5, SessionPause:6, SessionResume:7 }

isNotPauseResumeEvent = function(event) {
    var typeID = event.eventType.ID;
    return typeID != EventTypes.SessionPause  && typeID != EventTypes.SessionResume;
}

var Chat = React.createClass({
  render: function() {
    var lines = this.props.events.filter(isNotPauseResumeEvent).map(function(event) {
        return <Line event={event}></Line>;
    });
    return (
      <div className="commentBox">
        {lines}
      </div>
    );
  }
});
