import React,{Component} from 'react' ;
import Header from './Header.jsx' ;
import Login from '../components/Login.jsx' ;

class App extends Component {
    render(){
        return (
            <div>
                <Header />  
                <div style={styles.content}>
                    <Login />
                </div>
            </div>
        );
    }
}

export default App ;

const styles = {
    content: {
        marginTop: "10%"
    }
}
