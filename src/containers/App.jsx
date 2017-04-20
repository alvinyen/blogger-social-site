import React, { Component } from 'react';
import Header from './Header.jsx';
import Login from '../components/Login.jsx';
import Signup from '../components/Signup.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <div style={styles.content}>
                    {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;

const styles = {
    content: {
        marginTop: "10%"
    }
}
