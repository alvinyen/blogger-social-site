import ReactDOM from 'react-dom' ;
import React from 'react' ;
// import Test from './components/Test.jsx' ;
import App from './containers/App.jsx' ;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(<div>
                    <MuiThemeProvider>
                        <App />
                    </ MuiThemeProvider>
                </div>
,document.getElementById("app"));