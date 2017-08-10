import React from 'react';
import Counter from './Counter';
 
class Application extends React.Component { 
  render() {
    return (
      <div className="column">
        <div> Push to say nice things about Nicole: </div>
        <Counter label="ur great"/>
        <Counter label="u make good gamez"/>
        <Counter label="i luv u"/>
      </div>
    );
  }
}

export default Application;