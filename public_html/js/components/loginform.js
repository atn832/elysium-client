/** @jsx React.DOM */
var LoginForm = React.createClass({
    getInitialState: function() {
        return {
            username: this.props.username,
            password: this.props.password
        };
    },
    handleChange: function() {
        this.setState({
            username: this.refs.username.getDOMNode().value,
            password: this.refs.password.getDOMNode().value
        });
    },
    handleSubmit: function(e) {
        if (e)
            e.preventDefault();
        var username = this.state.username;
        var password = this.state.password;
        if (!username) {
          return;
        }

        this.props.onLogin(username, password);
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
            linkParams.push("channel=" + this.state.username);
        if (this.state.login)
            linkParams.push("username=" + this.state.password);
        return (
            <div className="d-f fd-c h-100 w-100 pos-a jc-c">
                <form className="d-f fd-c jc-c" onSubmit={this.handleSubmit}>
                    <h1 className="as-c">Elysium</h1>
                    {this.props.status? <div className="as-c w-75 mw-400 mb-12">{this.props.status}</div>: null}
                    <input type="text" className="d-b as-c w-75 mw-400 lh-2 px-8 mb-12 bz-bb" placeholder="Username" ref="username" value={this.state.username} onChange={this.handleChange} onKeyUp={this.onKeyUp}/>
                    <input type="text" className="d-b as-c w-75 mw-400 lh-2 px-8 mb-12 bz-bb" placeholder="Password" ref="password" value={this.state.password} onChange={this.handleChange} onKeyUp={this.onKeyUp}/>
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