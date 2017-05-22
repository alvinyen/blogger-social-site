import React, { Component } from 'react';
import Header from './Header.jsx';
import Login from '../components/auth/Login.jsx';
import Signup from '../components/auth/Signup.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
    render() {
        return (
            <StyleRoot>
            <MuiThemeProvider>
                <div>
                    <Header />
                    <div style={styles.content}>
                    {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
            </StyleRoot>
        );
    }
}

export default Radium(App) ;

const styles = {
    content: {
        marginTop: "10%"
    }
}
