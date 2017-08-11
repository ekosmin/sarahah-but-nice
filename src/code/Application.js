import React from 'react';
import Counter from './Counter';
import urlParams from './url-params';
 
class Application extends React.Component {
  makeButton(label) {
    return <Counter label={label} user={urlParams.user}/>;
  }

  render() {
    return (
      <div className="column">
        <div> Push to say nice things about {urlParams.user}: </div>
        {this.makeButton("ur great")}
        {this.makeButton("u make good gamez")}
        {this.makeButton("i luv u")}
        {this.makeButton("nice butt")}
      </div>
    );
  }
}

export default Application;