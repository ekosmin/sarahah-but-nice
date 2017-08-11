import React from 'react';

class ButtonsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputs = [];
  }

  handleSubmit(event) {
    event.preventDefault();
    this.inputs.forEach(input => {
      const label = input.value,
            update = {};

      if (label.length > 0) {
        update[label] = 0;
        firebase.database().ref("/" + this.props.user).update(update);
      }
    });
    location.reload();
  }

  createInput() {
    return (
      <div>
        <input type="text" ref={(input) => this.inputs.push(input)} />
      </div>
    );
  }

  render() {
    return (
      <div>
        Enter the buttons you would like below:
        <form onSubmit={this.handleSubmit}>
          {this.createInput()}
          {this.createInput()}
          {this.createInput()}
          {this.createInput()}
          {this.createInput()}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default ButtonsForm;