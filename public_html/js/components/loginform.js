/** @jsx React.DOM */
import Cookie from "../io/cookie";
var LastUserNickKey = "lastUserNick";

var LoginForm = React.createClass({
    getInitialState: function() {
        // restore last user nick
        var lastUserNick = Cookie.getCookie(LastUserNickKey);
        return {
            channel: "Elysium",
            password: "",
            login: lastUserNick
        };
    },
    handleChange: function() {
        this.setState({
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

        var typedUserNick = login;
        Cookie.setCookie(LastUserNickKey, login, 365);
        
        this.props.onLogin(channel, password, login);
    },
    render: function() {
        return (
            <div className="d-f fd-c h-100 w-100 p-r jc-c">
                <form className="login d-f fd-c jc-c" onSubmit={this.handleSubmit}>
                    <h1 className="as-c">Elysium</h1>
                    <input type="hidden" className="d-b as-c w-75" placeholder="Channel" ref="channel" value={this.state.channel} onChange={this.handleChange}/>
                    <input type="hidden" className="d-b as-c w-75" placeholder="Password" ref="password" value={this.state.password} onChange={this.handleChange}/>
                    <input type="text" className="d-b as-c w-75" placeholder="Login" ref="login" value={this.state.login} onChange={this.handleChange} autoFocus/>
                    <input type="submit" className="button as-c" value="login" onClick={this.onSubmit}/>
                    <a href={"?chanName=" + this.state.channel + "&nick=" + this.state.login} className="d-b as-c link">bookmark this link for direct login</a>
                </form>
                {this.props.status? <div className="mt-30">{this.props.status}</div>: null}
                {this.props.error? <iframe className="w-100" srcDoc={this.props.error} />: null }
            </div>
        );
    }
});

export default LoginForm;