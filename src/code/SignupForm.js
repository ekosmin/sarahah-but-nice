import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const input = this.input.value,
          db = firebase.database(),
          ref = db.ref("/" + input);

    let _this = this;    
    ref.once("value", function(data) {
      let loadedState = data.val();
      if (loadedState == null) {
        console.log("valid name");
        window.location.search = "user=" + input;
      } else {
        alert("Username taken, try again");
      }
    });
  }
  render() {
    return (
      <div>
        Create a username:
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={(input) => this.input = input} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default SignupForm;