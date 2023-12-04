import {Component} from 'react'
import './index.css'

const initialTime = {timeInMinutes: 0, timeInSeconds: 0}

class Stopwatch extends Component {
  state = initialTime

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timerID)

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState(initialTime)
  }

  onStopTimer = () => {
    this.clearTimerInterval()
  }

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds - 1,
    }))
  }

  onStartTimer = () => {
    this.timerID = setInterval(this.incrementTimeElapsedInSeconds, 1000)
  }

  getElapsedTimeInFormat = () => {
    const {timeInMinutes, timeInSeconds} = this.state
    const totalRemainingSeconds = timeInMinutes * 60 - timeInSeconds

    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-top-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <p className="name">Timer</p>
          </div>
          <h1 className="time">{this.getElapsedTimeInFormat()}</h1>
          <div className="timer-bottom-section">
            <button
              type="button"
              className="start button"
              onClick={this.onStartTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="stop button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
