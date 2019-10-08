import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class NamePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Greetings, traveler! What is your name?
          <br />
          <input type="text" value="your mom" />
          <input
            type={"submit"}
            onClick={() => this.props.goFunction(StartPage)}
          />
        </p>
      </div>
    );
  }
}

class MTrainPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Where would you like to go?
          <br />
          <input
            type="text"
            value={this.props.data.place}
            onChange={event =>
              this.props.setStateFunction("place", event.target.value)
            }
          />
        </p>
        <button onClick={() => this.props.goFunction(NoPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class StartPage extends Component {
  render() {
    return (
      <div className="page">
        <p>Welcome, your mom! How would you like to get to your destination?</p>
        <button onClick={() => this.props.goFunction(MTrainPage)}>
          Modified Train
        </button>
        <button onClick={() => this.props.goFunction(TrainPage)}>Train</button>
        <button onClick={() => this.props.goFunction(ShipPage)}>Ship</button>
        <button onClick={() => this.props.goFunction(WalkPage)}>
          Walk your ass
        </button>
      </div>
    );
  }
}

class TrainPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the choo-choo train! Please make your way to your seat.
          What is the number?
        </p>
        <input type="text" value="your mom" />
        <input
          type={"submit"}
          onClick={() => this.props.goFunction(FourTwentyPage)}
        />
      </div>
    );
  }
}

class ShipPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the ship! Please make your way to your seat. What is
          the number?
        </p>
        <button onClick={() => this.props.goFunction(FourTwentyPage)}>
          420
        </button>
        <button onClick={() => this.props.goFunction(SixNinePage)}>69</button>
      </div>
    );
  }
}

class WalkPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the walk! Please make your way to your destination.
        </p>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
        <button onClick={() => this.props.goFunction(KPage)}>k</button>
      </div>
    );
  }
}

class FourTwentyPage extends Component {
  render() {
    return (
      <div className="page">
        <p>Nice.</p>
        <button onClick={() => this.props.goFunction(NicePage)}>Nice.</button>
        <button onClick={() => this.props.goFunction(NicePage)}>Nice.</button>
      </div>
    );
  }
}

class SixNinePage extends Component {
  render() {
    return (
      <div className="page">
        <p>Nice.</p>
        <button onClick={() => this.props.goFunction(NicePage)}>Nice.</button>
        <button onClick={() => this.props.goFunction(NicePage)}>Nice.</button>
      </div>
    );
  }
}

class KPage extends Component {
  render() {
    return (
      <div className="page">
        <p>You died.</p>
        <button onClick={() => this.props.goFunction(NicePage)}>Nice.</button>
      </div>
    );
  }
}

class NicePage extends Component {
  render() {
    return (
      <div className="page">
        <p>"rain drop-</p>
        <button onClick={() => this.props.goFunction(NoPage)}>
          -drip shop"
        </button>
        <button onClick={() => this.props.goFunction(KPage)}>-drop top"</button>
        <button onClick={() => this.props.goFunction(NoPage)}>-hip hop"</button>
        <button onClick={() => this.props.goFunction(NoPage)}>
          -crop top"
        </button>
      </div>
    );
  }
}

class NoPage extends Component {
  render() {
    return (
      <div className="page">
        <p>fucking dumbass</p>
        <button onClick={() => this.props.goFunction(NoPage)}>
          aight then.
        </button>
        <button onClick={() => this.props.goFunction(KPage)}>
          aight then.
        </button>
        <button onClick={() => this.props.goFunction(NoPage)}>
          aight then.
        </button>
        <button onClick={() => this.props.goFunction(NoPage)}>
          aight then.
        </button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageClass: NamePage
    };
  }

  goToPage(pageClass) {
    this.setState({
      pageClass: pageClass
    });
  }

  render() {
    var app = this;

    function setState(key, value) {
      let newState = {};
      newState[key] = value;
      app.setState(newState);
    }

    function goFunction(pageClass) {
      app.goToPage(pageClass);
    }

    return (
      <div className="App">
        <this.state.pageClass
          data={this.state}
          setStateFunction={setState}
          goFunction={goFunction}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
