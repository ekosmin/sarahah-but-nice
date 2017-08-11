import React from 'react';
import Counter from './Counter';
import ButtonsForm from './ButtonsForm';
import urlParams from './url-params';
 
class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      userState: null
    };

    const db = firebase.database(),
          ref = db.ref("/" + urlParams.user);

    let _this = this;    
    ref.once("value", function(data) {
      let loadedState = data.val();
      if (loadedState != null) {
        console.log("returning user");
        _this.setState({ userState: loadedState });
      } else {
        console.log("new user");
      }
    });
  }

  makeButton(label) {
    return <Counter label={label} user={urlParams.user}/>;
  }

  render() {
    if (this.state.userState == null) {
      return <ButtonsForm user={urlParams.user}/>
    } else {
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
}

export default Application;