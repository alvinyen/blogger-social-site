import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import { connect } from 'react-redux';
import { signup, setAuthErrorEmpty } from './../../redux/actions/authActions.js';


class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            passwordDiffConfirm: false,
            containSpaceConfirm: false,
            lengthNotEnoughConfirm: false
        } ;
    }
    getStyles() {
        return {
            root: {
                backgroundColor: '#fff',
                boxShadow: '0 0 0 1px rgba(200, 215, 225, 0.5), 0 1px 2px #e9eff3',
                textAlign: 'center',
                padding: '0 1em 1em',
                margin: '30px 16px',
                '@media (min-width: 400px)': {
                    width: '400px',
                    margin: '30px auto'
                }
            },
            textField: {
                display: 'block',
                width: '100%',
                fontSize: '.9em'
            },
            label: {
                fontWeight: '600',
                fontSize: '1em',
                lineHeight: '40px'
            },
            button: {
                width: '130px',
                height: '40px',
                marginTop: '30px',
                marginBottom: '15px'
            },
            a: {
                fontSize: '.8em',
                textDecoration: 'none',
                color: 'gray',
                ':hover': { color: '#00bcd4' }
            }
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.setAuthErrorEmpty();
        let username = this.refs.username.getValue().trim();
        let password = this.refs.password.getValue().trim();
        let confirmPassword = this.refs.confirmPassword.getValue().trim();
        if( username.match('[^A-Za-z0-9]') !== null ||  password.match('[^A-Za-z0-9]') !== null ){
            this.setState({ containSpaceConfirm: true });
            this.setState({ passwordDiffConfirm: false });
            this.setState({ lengthNotEnoughConfirm: false });
            return ;
        }
        if(username.length<5 || password.length<5){
            this.setState({ lengthNotEnoughConfirm: true });
            this.setState({ containSpaceConfirm: false });
            this.setState({ passwordDiffConfirm: false });
            return ;
        }
        if(password !== confirmPassword){
            this.setState({ containSpaceConfirm: false });
            this.setState({ passwordDiffConfirm: true });
            this.setState({ lengthNotEnoughConfirm: false });
            return ;
        }
        this.setState({ passwordDiffConfirm: false });
        this.setState({ containSpaceConfirm: false });
        this.setState({ lengthNotEnoughConfirm: false });
        this.props.signup({username, password});
    }
    componentWillUnmount(){
        this.props.setAuthErrorEmpty();
    }
    render() {
        let styles = this.getStyles();
        return (
            <div style={styles.root}>
                <form onSubmit={this.onSubmit}>
                    <TextField
                        style={styles.textField}
                        floatingLabelText="帳號"
                        ref="username" />
                    <TextField
                        style={styles.textField}
                        floatingLabelText="密碼"
                        type="password" 
                        ref="password" />
                    <TextField
                        style={styles.textField}
                        floatingLabelText="確認密碼"
                        type="password" 
                        ref="confirmPassword" />
                    <RaisedButton
                        primary={true}
                        style={styles.button}
                        labelStyle={styles.label}
                        type="submit"
                        label="註冊" />
                </form>
                <div style={{color: 'red'}}>
                    { this.state.containSpaceConfirm ? '輸入的內容中不能含有特殊字元或空白喔~':'' }
                    { this.state.passwordDiffConfirm ? '2次輸入的密碼不同唷，請重新輸入~':'' }
                    { this.state.lengthNotEnoughConfirm ? '帳號或密碼不足5位~':'' }
                    { this.props.auth.errorMsg } 
                </div>
            </div>
        );
    }
}

Signup.propTypes = {
    signup: React.PropTypes.func.isRequired,
    setAuthErrorEmpty:  React.PropTypes.func.isRequired
}

export default connect(( { auth } )=>({
    auth
}), {signup, setAuthErrorEmpty})(Radium(Signup));

