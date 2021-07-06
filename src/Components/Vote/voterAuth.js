import React from "react";
import { withRouter } from "react-router-dom";

// Has the user select thier groups form and verify with a password
class VoterAuth extends React.Component {
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  submitForm(e) {
    // some time we will verify the password first

    e.preventDefault();
    this.props.history.push({ pathname: "/voter/" + this.state.FormId });
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <label>
          Form ID (Try "Test2" for testing):
          <input type="text" name="FormId" onChange={this.myChangeHandler} />
        </label>
        <label>
          Password:
          <input type="text" onChange={this.myChangeHandler} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default withRouter(VoterAuth);
