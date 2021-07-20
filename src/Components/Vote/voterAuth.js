import React from "react";
import { withRouter } from "react-router-dom";

// Has the user select thier groups form and verify with a password
class VoterAuth extends React.Component {
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  // redirecrs to voting page based off name of the group
  /*
  future updates will have a password verification into forms
  */

  submitForm(e) {
    e.preventDefault();
    this.props.history.push({ pathname: "/voter/" + this.state.FormId });
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <label>
          GroupName:
          <br />
          <input type="text" name="FormId" onChange={this.myChangeHandler} />
        </label>
        <br />
        <input type="submit" value="Go" />
      </form>
    );
  }
}

export default withRouter(VoterAuth);
