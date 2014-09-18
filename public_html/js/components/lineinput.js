/** @jsx React.DOM */
var LineInput = React.createClass({
  render: function() {
    return (
      <div>
          <input type="text" id="txtBox" className="txtBox">
          </input>
          <input className="sendButton" type="button" onclick="sendMessage()" value="send"></input>
      </div>
    );
  }
});
