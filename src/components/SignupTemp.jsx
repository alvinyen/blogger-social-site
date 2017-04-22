import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/main.scss';


class SignupTemp extends Component {
    constructor(props) {
        super();
        this.state = {
            account: '',
            password: '',
            password1: '',
            email: '',
            nickName: '',
            accountCheck: true,
            passwordCheck: true,
            password1Check: true,
            emailCheck: true,
            checkNickName: true,
            dialog: false,
            dialogText: ''
        }
    }
    checkAccount = (e) => {
        if (e.target.value === '') {
            this.setState({ accountCheck: false });
            return;
        }
        this.state.account = e.target.value;
        this.setState({ accountCheck: true });
    }
    checkPassword = (e) => {
        if (e.target.value === '') {
            this.setState({ passwordCheck: false });
            return;
        }
        this.state.password = e.target.value;
        this.setState({ passwordCheck: true });
    }
    checkPassword1 = (e) => {
        if (e.target.value === '' || e.target.value !== this.state.password) {
            this.setState({ password1Check: false });
            return;
        }
        this.state.password1 = e.target.value;
        this.setState({ password1Check: true });
    }
    checkEmail = (e) => {
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        if (e.target.value === '' || validateEmail(e.target.value) === false) {
            this.setState({ emailCheck: false });
            return;
        }
        this.state.email = e.target.value;
        this.setState({ emailCheck: true })
    }
    checkNickName = (e) => {
        if (e.target.value === '') {
            this.setState({ checkNickName: false });
            return;
        }
        this.state.nickName = e.target.value;
        this.setState({ checkNickName: true })
    }
    sendRequest = () => {
        console.log('send request');
    }
    render() {
        return (
            <div className="container">
                <TextField
                    className="innerElement"
                    onBlur={this.checkAccount}
                    hintText="帳號"
                    errorText={this.state.accountCheck ? '' : 'This field is required'}
                    floatingLabelText="帳號"
                />
                <br />
                <TextField
                    className="innerElement"
                    onBlur={this.checkPassword}
                    hintText="密碼"
                    type="password"
                    errorText={this.state.passwordCheck ? '' : 'This field is required'}
                    floatingLabelText="密碼"
                />
                <br />
                <TextField
                    className="innerElement"
                    onBlur={this.checkPassword1}
                    hintText="確認密碼"
                    type="password"
                    errorText={this.state.password1Check ? '' : 'This field is required or Not match password'}
                    floatingLabelText="確認密碼"
                />
                <br />
                <TextField
                    className="innerElement"
                    onBlur={this.checkEmail}
                    hintText="E-mail"
                    errorText={this.state.emailCheck ? '' : 'This field is required or Wrong email format'}
                    floatingLabelText="E-mail"
                />
                <br />
                <TextField
                    className="innerElement"
                    onBlur={this.checkNickName}
                    hintText="暱稱"
                    errorText={this.state.checkNickName ? '' : 'This field is required'}
                    floatingLabelText="暱稱"
                />
                <br />
                <RaisedButton
                    className="innerElement"
                    onClick={this.sendRequest}
                    label="註冊"
                    primary={true} 
                />
            </div>
        )
    }
}

export default SignupTemp;

