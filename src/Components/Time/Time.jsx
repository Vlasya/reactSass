import React from 'react'


export class Time extends React.Component{
    state={
        time: new Date
    }

  componentDidMount() {
        this.timer=setInterval( ()=>{
            this.setState({
                time: new Date
            })
        },1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

    render() {
       return(
           <div>
               {this.state.time.toLocaleTimeString()}
           </div>
       )
   }
}