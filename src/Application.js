import React from 'react';
import Counter from './Counter';
 
class Application extends React.Component { 
  render() {
    return (
      <div>
        <div> Press to Nicole she is great: </div>
        <Counter label="ur great"/>
        <Counter label="nice gamez" />
      </div>
    );
  }
}

export default Application;