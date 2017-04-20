import React,{Component} from 'react' ;
import '../styles/main.scss' ;
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router' ;

// const styles = {
//     size: {
//         height: '50px',
//         width: '80px'
//     }
// } ;

class Header extends Component {
    login = () => {
        browserHistory.push('login');
    }
    signup = () => {
        browserHistory.push('signup');
    }

    render(){
        return (
            <div className="header"> 
                <RaisedButton 
                    label="登入" 
                    primary={true} 
                    className="login"
                    onClick={this.login}/>
                <RaisedButton 
                    label="註冊" 
                    primary={true} 
                    className="signup"
                    onClick={this.signup}/>
            </div>
        );
    }
}

export default Header ;