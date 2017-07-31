import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault();

    // Grap the text from the input box
    const storeId = this.storeInput.value;
    // Transition from "/" to "/store/:storeId"
    this.context.router.transitionTo(`store/${storeId}`);
  }

  render() {
    return (
      <form
        className="store-selector"
        // We need to use arrow function to bind "this"
        onSubmit={(e) => { this.goToStore(e); }}
      >
        <h2>Please Enter a Store Name</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          // This will give a reference to the <input> as this.storeInput
          // so if we want to call the <input>, we use this.storeInput
          ref={(input) => { this.storeInput = input; }}
        />
        <button type="submit">Visit Store >> </button>
      </form>
    );
  }
}

// This is to link our StorePicker.js with the Router in the index.js (Root Component)
// Rather than use props, we use context, all of the child component get access to whatever we want
// in this case, we want our child component (StorePicker.js) to get access to "router"
StorePicker.contextTypes = {
  router: React.PropTypes.object,
};

export default StorePicker;
