import React, { Component } from 'react';
import '../styles/main.scss';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory, Link } from 'react-router';
import Radium from 'radium';
import ActionHome from 'material-ui/svg-icons/action/home';
import { connect } from 'react-redux';
import { logout } from './../redux/actions/authActions.js';
import AnnouncementBox from './../components/AnnouncementBox.jsx';


class Header extends Component {
    logout = (e) => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const { isAuthenticated, currentUser } = this.props.auth;
        const displayAnnounceBox = this.props.announce;
        let name = currentUser.name;
        if (name !== undefined) {
            if (name.length > 9) {
                name = `${name.slice(0, 5)}...`;
            }
        }
        
        const LoginLink = (
            <span style={styles.authenticationButtonsContainer}>
                <Link to='signup' style={styles.nav} className="signup">註冊</Link>
                <Link to='login' style={styles.nav} className="login">登入</Link>
            </span>
        );

        const LogoutLink = (
            <span style={styles.authenticationButtonsContainer}>
                <span style={styles.welcomeName}>{name}</span>
                <Link to='/' style={styles.nav} className="login" onClick={this.logout} >登出</Link>
            </span>
        );
 
        return (
            <div className="header" style={{minWidth: '400px'}}>
                { displayAnnounceBox ?
                 <AnnouncementBox /> : '' }
                 
                 <div style={styles.headerContentContainer}>
                     <div style={styles.innerWrapper}>
                        { currentUser.admin ? 
                                    <ActionHome color="rgb(0, 188, 212)" style={styles.actionHome} /> : 
                                    <Link to='/'><ActionHome color='#fff' style={styles.actionHome} /></Link> }
                        {isAuthenticated ? LogoutLink : LoginLink}
                    </div>
                </div>
            </div>
        );
    }
}


const styles = {
    headerContentContainer: {
        // border: '2px solid red',
        display: 'flex',
        justifyContent: 'center',
    },
    authenticationButtonsContainer: {
        display: 'flex',
        alignItems: 'center',
        // border: '2px solid yellow',
        width: '130px',
        justifyContent: 'space-between',
    },
    innerWrapper: {
        // border: '2px solid green',
        width: '960px',
        display: 'flex',
        justifyContent: 'space-between',
    },
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
        // marginRight: '2px',
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
    },
    hasLoggedIn: {
        marginTop: 60
    },
    welcomeName: {
        display: 'inline-block', // 超重要啊！！！span必須讓它變inline-block那些寬度什麼的及相關屬性才會生效啊！！！
        // border: 'red solid 2px',
        color: 'rgb(255, 226, 0)',
        // marginRight: '10px', 
    }
};

export default connect(({ auth, announce }) => ({
    auth,
    announce
}), { logout })(Radium(Header));

