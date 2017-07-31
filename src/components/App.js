import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  constructor() {
    super();

    // This is so our application can use addFish function
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    // This is how we initialize state, so our application can share states
    this.state = {
      fishes: {},
      order: {},
    };
  }

  addFish(fish) {
    // We can use "this" inside this function because we already bind(this) in the constructor
    // Make a copy of fishes state
    const fishes = { ...this.state.fishes };
    // Add in our new fish to the newly created fishes object
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // Same as this.setState ({ fishes : fishes });
    this.setState({ fishes });
  }

  // To make this function available to child component, we add it via props
  addToOrder(key) {
    // Make a copy of order state
    const order = { ...this.state.order };
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // Set the state
    this.setState({ order });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes,
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              // We use Object.keys to make our state an array, so then we can map it
              Object
                .keys(this.state.fishes)
                // We use index={key} so we can pass it down to <Fish> and it can know which fish is clicked
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />

      </div>
    );
  }
}


export default App;
