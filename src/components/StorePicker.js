import React from 'react';
import { getFunName } from '../helpers';


class StorePicker extends React.Component {

  goToStore(event) {
    event.preventDefault();

    // Grap the text from the input box
    console.log(this.storeInput.value);
    // Transition from "/" to "/store/:storeId"
  }

  render() {
    return (
      <form className="store-selector" onSubmit={(e) => { this.goToStore(e); }}>
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


export default StorePicker;
