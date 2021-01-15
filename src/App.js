import logo from './logo.svg'
import './App.sass';
import {Comment} from "./Components/Comment/Comment";

function App() {

    const user={
        user1:{
            avatar:logo,
            name:'Jonh'
        },
        user2:{
            avatar:logo,
            name:'Anna'
        },
        user3:{
            avatar:logo,
            name:'Ivan'
        }
    }
    return (
        <div className="App">
            <Comment user={user.user1} text='Lorem ipsum dolor sit amet.'/>
            <Comment user={user.user2} text='Lorem ipsum 5566dolor sit amet.'/>
            <Comment user={user.user3} text='Lorem ipsum dolor sit amet, consectetur.'/>
        </div>
    );
}

export default App;
