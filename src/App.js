
import React from 'react'
import './App.sass';
import {Timer} from "./Components/Timer/Timer";

export class App extends React.Component {
    state = {
        timers: []
    }

    render() {
        return (
            <div className="App">
                <div>
                    <button onClick={() => {this.addTimer()}}>Add Timer</button>
                    <button onClick={()=>{this.removeAll()}}>Remove All</button>
                    <div className='timers'>
                        {this.state.timers.map(timer =>
                            <div className='timer' key={timer}>
                                <Timer/>
                                <button onClick={() => {this.delTimer(timer)}}>
                                    X
                                </button>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    addTimer() {
        this.setState({
            timers: [
                ...this.state.timers,
                Math.random()
            ]
        })
    }

    delTimer(delTimer) {
        let currentTimer = this.state.timers
            .filter(timer => timer !== delTimer)
        this.setState({
            timers: currentTimer
        })
    }

    removeAll(){
        this.setState({
            timers:[]
        })
    }
}

export class App2 extends React.Component{
    state={

        name:'',
        surname:'',
        phone:''
    }

    constructor(props) {
        super(props);

        this.changeInput=this.changeInput.bind(this)

    }


    render(){
        console.log(this.state)
        return(
            <div>
                <input type="text"
                       value={this.state.name}
                       onChange={this.changeInput('name')}
                />
                <input type="text"
                       value={this.state.surname}
                       onChange={this.changeInput('surname')}
                />
                <input type="text"
                       value={this.state.phone}
                       onChange={this.changeInput('phone')}
                />
            </div>
        )
    }

    changeInput(name){
        return event =>{
            this.setState({
                [name]: event.target.value
            })
        }

    }

}

