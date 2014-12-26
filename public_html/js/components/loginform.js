/** @jsx React.DOM */
var LoginForm = React.createClass({
    getInitialState: function() {
        return {
            channel: this.props.channel,
            password: this.props.password,
            login: this.props.login
        };
    },
    handleChange: function() {
        this.setState({
            channel: this.refs.channel.getDOMNode().value,
            login: this.refs.login.getDOMNode().value
        });
    },
    handleSubmit: function(e) {
        if (e)
            e.preventDefault();
        var channel = this.state.channel;
        var password = this.state.password;
        var login = this.state.login;
        if (!channel || !login) {
          return;
        }

        this.props.onLogin(channel, password, login);
    },
    onKeyUp: function(e) {
        if (e.keyCode === 13) {
            var href = this.refs.signin.props.href;
            window.location.href = href;
        }
    },
    render: function() {
        var linkParams = [];
        if (this.state.channel)
            linkParams.push("channel=" + this.state.channel);
        if (this.state.login)
            linkParams.push("username=" + this.state.login);
        return (
            <div className="d-f fd-c h-100 w-100 pos-r jc-c">
                <form className="d-f fd-c jc-c" onSubmit={this.handleSubmit}>
                    <h1 className="as-c">Elysium</h1>
                    {this.props.status? <div className="as-c w-75 mw-400 mb-12">{this.props.status}</div>: null}
                    <input type="text" className="d-b as-c w-75 mw-400 lh-2 px-8 mb-12 bz-bb" placeholder="Channel" ref="channel" value={this.state.channel} onChange={this.handleChange} onKeyUp={this.onKeyUp}/>
                    <input type="hidden" className="d-b as-c w-75 mw-400 lh-2 px-8 mb-12 bz-bb" placeholder="Password" ref="password" value={this.state.password} onChange={this.handleChange} onKeyUp={this.onKeyUp}/>
                    <input type="text" className="d-b as-c w-75 mw-400 lh-2 px-8 mb-12 bz-bb" placeholder="Username" ref="login" value={this.state.login} onChange={this.handleChange} autoFocus onKeyUp={this.onKeyUp}/>
                    <a href={"?" + linkParams.join("&")} className="button fz-m as-c w-75 mw-400 lh-2 tr td-n ta-c bz-bb" disabled={this.props.isSigningIn} ref="signin">
                        {this.props.isSigningIn? "Signing in": "Sign in"}
                        {this.props.isSigningIn? <i className="ml-8 fa fa-spinner fa-spin"></i>: null}
                    </a>
                </form>
                {this.props.debug && this.props.error? <iframe className="w-100" srcDoc={this.props.error} />: null }
            </div>
        );
    }
});

export default LoginForm;