import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h2 className="title">Speed is {speed}mph</h2>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="btn button1"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="btn button2" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
