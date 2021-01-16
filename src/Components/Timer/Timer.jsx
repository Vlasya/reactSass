import React from 'react';
import s from './Timer.module.sass'


export class Timer extends React.Component {
    state = {
        timerValue: 0
    }

    constructor(props) {
        super(props);

        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)

    }

    render() {
        return (
            <div className={s.wrapper}>
                {this.getTime()}
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }

    componentWillUnmount() {
        this.stop()
    }

    getTime() {

        const totalSeconds = this.state.timerValue;

        let seconds = totalSeconds % 60;
        let minutes = Math.floor(totalSeconds / 60) % 60;
        let hours = Math.floor(totalSeconds / (60 * 60));

        seconds = seconds.toString().padStart(2, '0');
        minutes = minutes.toString().padStart(2, '0');
        hours = hours.toString().padStart(2, '0');

        return ` ${hours}:${minutes}:${seconds} `
    }

    start() {
        this.stop()
        this.timerId = setInterval(() => {
            this.setState({
                timerValue: this.state.timerValue + 1
            })
        }, 1000)
    }

    stop() {
        clearInterval(this.timerId)
    }

    reset() {
        this.stop();
        this.setState({
            timerValue: 0
        })
    }

}