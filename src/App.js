import React, { Component } from "react";
import css from "./App.module.css";
import volume from "./volume.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0,
      knobSpin: 0,
      indSpin: 0
    };
  }

  setVolume = event => {
    this.setState(state => ({
      volume: Math.round(
        (state.knobSpin / 3.6 - state.indSpin / 3.6 + 50) % 100
      )
    }));
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        knobSpin: ++state.knobSpin % 360
      }));
    }, Math.random() * 5);
    setInterval(() => {
      this.setState(state => ({
        indSpin: --state.indSpin % 360
      }));
    }, Math.random() * 7);
  }

  render() {
    return (
      <div className={css.app}>
        <header className={css.appheader}>
          <div>
            <div
              className={css.indicator}
              style={{
                transform: `rotate(${this.state.indSpin}deg)`
              }}
            >
              |
            </div>
            <img
              src={volume}
              alt="volume knob"
              className={css.knob}
              style={{
                transform: `rotate(${this.state.knobSpin}deg)`
              }}
              onClick={this.setVolume}
            />
            <div className={css.volumeNumber}>{this.state.volume}</div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
