import React,{Component} from 'react' ;
import '../styles/main.scss' ;
import RaisedButton from 'material-ui/RaisedButton';

// const styles = {
//     size: {
//         height: '50px',
//         width: '80px'
//     }
// } ;

class Header extends Component {
    login = () => {
        console.log('login');
    }
    signup = () => {
        console.log('signup');
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