require('../css/Counter.css');

import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: null,
    };

    const db = firebase.database(),
          ref = db.ref("/" + props.user + "/" + props.label);

    let _this = this;    
    ref.once("value", function(data) {
      let loadedValue = data.val();
      if (loadedValue == null) {
        loadedValue = 0;
      }
      _this.setState({ count: loadedValue });
    });
  }
 
  render() {
    return (
      <div className="counter">
        <button disabled={this.state.count == null}
          onClick={() => {
            let newCount = this.state.count + 1;
            this.setState({ count: newCount });

            let update = {};
            update[this.props.label] = newCount;
            firebase.database().ref("/" + this.props.user).update(update);
          }}
        >
          {this.props.label}: {this.state.count}
        </button>
      </div>
    );
  }
}
export default Counter;