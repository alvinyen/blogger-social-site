import React, { Component } from 'react';
import Header from './Header.jsx';
import Login from '../components/auth/Login.jsx';
import Signup from '../components/auth/Signup.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { isAdmin } from './../routes/rootRoute.js';
import { SET_ANNOUNCE_DISPLAY, setAnnounceDisplay } from './../redux/actions/authActions.js';

class App extends Component {
    componentWillMount(){
        if(isAdmin()){
            this.props.dispatch(setAnnounceDisplay(SET_ANNOUNCE_DISPLAY, false));
        }
    }
    render() {
        return (
            <StyleRoot>
            <MuiThemeProvider>
                <div>
                    <Header />
                    {
                        isAdmin() ? 
                            (<div style={styles.adminContent}>
                                {this.props.children}
                            </div>) : 
                            (<div style={styles.content}>
                                {this.props.children}
                            </div>)
                    }
                </div>
            </MuiThemeProvider>
            </StyleRoot>
        );
    }
}

export default connect(null)(Radium(App));

const styles = {
    content: {
        marginTop: "120px"
    } ,
    adminContent: {
        marginTop: "90px"
    }
}
