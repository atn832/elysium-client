/** @jsx React.DOM */

var LoginForm = React.createClass({
    getInitialState: function() {
        return {
            channel: "Elysium",
            password: "",
            login: "atn"
        };
    },
    handleChange: function() {
        this.setState({
            login: this.refs.login.getDOMNode().value
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        console.log("handleSubmit");
        var channel = this.state.channel;
        var password = this.state.password;
        var login = this.state.login;
        if (!channel || !login) {
          return;
        }
        console.log("Logging in with info", this.state);
    },
    render: function() {
        return (
<div id="formFrame">
    <form id="loginform" onSubmit={this.handleSubmit} className="container" style={{"justify-content": "center"}}>
        <h1 className="as-c">Elysium</h1>
        <input type="hidden" className="d-b as-c" placeholder="Channel" ref="channel" value={this.state.channel} onChange={this.handleChange}/>
        <input type="hidden" className="d-b as-c" placeholder="Password" ref="password" value={this.state.password} onChange={this.handleChange}/>
        <input type="text" className="d-b as-c" placeholder="Login" ref="login" value={this.state.login} onChange={this.handleChange} autoFocus/>
        <input type="submit" className="button as-c" value="login" onClick={this.onSubmit}/>
        <a href={"?chanName=" + this.state.channel + "&nick=" + this.state.login} className="d-b as-c link">bookmark this link for direct login</a>
    </form>
</div>
        );
    }
});

export default LoginForm;