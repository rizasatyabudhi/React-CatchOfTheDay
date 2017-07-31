import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super();

    // This is so our application can use addFish function
    this.addFish = this.addFish.bind(this);
    // This is how we initialize state, so our application can share states
    this.state = {
      fishes: {},
      order: {},
    };
  }

  addFish(fish) {
    // Update our state / copy fishes state into new fishes object
    const fishes = { ...this.state.fishes };
    // Add in our new fish to the newly created fishes object
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // Same as this.setState ({ fishes : fishes });
    this.setState({ fishes });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />

      </div>
    );
  }
}


export default App;
