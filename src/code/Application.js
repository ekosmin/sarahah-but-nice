import React from 'react';
import Counter from './Counter';
import ButtonsForm from './ButtonsForm';
import SignupForm from './SignupForm';
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
      }
    });
  }

  makeButton(label, uid) {
    return <Counter label={label} user={urlParams.user} key={uid}/>;
  }

  render() {
    if (urlParams.user == null) {
      return <SignupForm />
    } else if (this.state.userState == null) {
      return <ButtonsForm user={urlParams.user}/>
    } else {
      let buttons = [],
          uid = 0;
      Object.keys(this.state.userState).forEach(key => {
        buttons.push(this.makeButton(key, uid++));
      });
      return (
        <div className="column">
          <div> Push to say nice things about {urlParams.user}: </div>
          {buttons}
        </div>
      );
    }
  }
}

export default Application;