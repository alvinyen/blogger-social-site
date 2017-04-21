import React, { Component } from 'react';
import '../styles/main.scss';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory, Link } from 'react-router';
import Radium from 'radium';
import ActionHome from 'material-ui/svg-icons/action/home';

class Header extends Component {
    login = () => {
        browserHistory.push('login');
    }
    signup = () => {
        browserHistory.push('signup');
    }

    render() {
        return (
            <div className="header">
                {/*<a style={styles.nav} key='1'>aaaa</a>*/}
                <Link to='/'>
                    <ActionHome style={styles.actionHome} color='#fff' />
                </Link>
                <RaisedButton
                    label="登入"
                    primary={true}
                    className="login"
                    onClick={this.login} />
                <RaisedButton
                    label="註冊"
                    primary={true}
                    className="signup"
                    onClick={this.signup} />
            </div>
        );
    }
}

export default Radium(Header);

const styles = {
    nav: {
        //test Radium
        ':hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
    actionHome: {
        height: 40,
        width: 40,
        marginLeft: 10,
        marginTop: 15
    }
};