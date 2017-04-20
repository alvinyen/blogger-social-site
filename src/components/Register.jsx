import React,{Component} from 'react' ;
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/main.scss'


class Register extends Component {
    constructor(props) {
      super();
      this.state = {
        account: '',
        password: '',
        accountCheck : true,
        passwordCheck : true,
        dialog: false,
        dialogText: ''
      }
    } 
  checkAccount = (e) => {
    if (e.target.value === ''){
      this.setState({ accountCheck: false }) ;
      return ;
    }
    this.setState({ accountCheck: true }) ;
    this.state.account = e.target.value;
  }
  checkPassword = (e) => {
    this.state.password = e.target.value;
    if (e.target.value === ''){
      this.setState({ passwordCheck: false }) ;
      return ;
    }
    this.setState({ passwordCheck: true }) ;
  }
  sendRequest = () => {
    console.log('sendRequest') ;
  }
  render() {
    return (
      <div className="container" style={styles.containerSize}>
        <TextField
          className="innerElement"
          onBlur = { this.checkAccount }
          hintText="帳號"
          floatingLabelText="帳號"
          errorText={ this.state.accountCheck ? '' : 'This field is required' }
        />
        <br />
        <TextField
          className="innerElement"
          type="password"
          onBlur = { this.checkPassword }
          hintText="密碼"
          floatingLabelText="密碼"
          errorText={ this.state.passwordCheck ? '' : 'This field is required' }
        />
        <br />
        <RaisedButton 
          className="innerElement"
          onClick={() => this.sendRequest()} label="登入" primary={true}
        />
      </div>
    )
  }
}

export default Login ;

const styles = {
  containerSize: {
    hegith: '100%'
  }
} ;

