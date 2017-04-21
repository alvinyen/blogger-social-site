import React, { Component } from 'react';
import '../styles/main.scss';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory, Link } from 'react-router';
import Radium from 'radium';
import ActionHome from 'material-ui/svg-icons/action/home';
import { connect } from 'react-redux';
import { logout } from './../redux/actions/authActions.js';


class Header extends Component {
    logout = (e) => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const { isAuthenticated, currentUser } = this.props.auth;

        const LoginLink = (
            <span>
                <Link to='/signup' style={styles.nav} className="signup">註冊</Link>
                <Link to='/login' style={styles.nav} className="login">登入</Link>
            </span>
        );

        const LogoutLink = (
            <span>
                <span style={{ color: 'rgb(255, 226, 0)', paddingRight: '15px' }} className="signup">{currentUser.name}</span>
                <Link to='/' style={styles.nav} className="login" onClick={this.logout}>登出</Link>
            </span>
        );

        return (
            <div className="header">
                {/*<a style={styles.nav} key='1'>aaaa</a>*/}
                <Link to='/'>
                    <Link to='/'><ActionHome color='#fff' style={styles.actionHome} /></Link>
                </Link>
                {isAuthenticated ? LogoutLink : LoginLink}
            </div>
        );
    }
}


const styles = {
    header: {
        position: 'fixed',
        zIndex: '100',
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: '#00bcd4',
        borderBottom: '1px solid #0079aa',
        height: '47px',
        paddingLeft: '16px',
        paddingRight: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nav: {
        color: 'white',
        opacity: '.8',
        fontWeight: '600',
        fontSize: '1em',
        textDecoration: 'none',
        paddingLeft: '20px',
        ':hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
    actionHome: {
        height: 40,
        width: 40,
        marginLeft: 10,
        marginTop: 10
    }
};

export default connect(({ auth }) => ({
    auth
}), { logout } )(Radium(Header));

