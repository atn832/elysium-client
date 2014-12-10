/** @jsx React.DOM */
import Cookie from "../io/cookie";

var LastUserNickKey = "lastUserNick";
var LastChannelKey = "lastChannel";

var LoginForm = React.createClass({
    getInitialState: function() {
        // restore latest settings
        var lastChannel = Cookie.getCookie(LastChannelKey);
        var lastUserNick = Cookie.getCookie(LastUserNickKey);
        return {
            channel: lastChannel || "Elysium",
            password: "",
            login: lastUserNick
        };
    },
    handleChange: function() {
        this.setState({
            channel: this.refs.channel.getDOMNode().value,
            login: this.refs.login.getDOMNode().value
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var channel = this.state.channel;
        var password = this.state.password;
        var login = this.state.login;
        if (!channel || !login) {
          return;
        }

        Cookie.setCookie(LastUserNickKey, login, 365);
        Cookie.setCookie(LastChannelKey, channel, 365);
        
        this.props.onLogin(channel, password, login);
    },
    render: function() {
        return (
            <div className="d-f fd-c h-100 w-100 pos-r jc-c">
                <form className="login d-f fd-c jc-c" onSubmit={this.handleSubmit}>
                    <h1 className="as-c">Elysium</h1>
                    <input type="text" className="d-b as-c w-75 lh-2 px-8 mb-12 bz-bb" placeholder="Channel" ref="channel" value={this.state.channel} onChange={this.handleChange}/>
                    <input type="hidden" className="d-b as-c w-75 lh-2 px-8 mb-12 bz-bb" placeholder="Password" ref="password" value={this.state.password} onChange={this.handleChange}/>
                    <input type="text" className="d-b as-c w-75 lh-2 px-8 mb-12 bz-bb" placeholder="Login" ref="login" value={this.state.login} onChange={this.handleChange} autoFocus/>
                    <input type="submit" className="button as-c w-75 mb-12" value="Sign in" onClick={this.onSubmit}/>
                    <a href={"?chanName=" + this.state.channel + "&nick=" + this.state.login} className="d-b as-c link">bookmark this link for direct login</a>
                </form>
                {this.props.status? <div className="mt-30">{this.props.status}</div>: null}
                {this.props.error? <iframe className="w-100" srcDoc={this.props.error} />: null }
            </div>
        );
    }
});

export default LoginForm;