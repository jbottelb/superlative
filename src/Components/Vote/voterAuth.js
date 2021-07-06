import React from "react";
import { withRouter } from "react-router-dom";

/*
Need to be able to send the id to the vote page, after verifying access pw
*/

// Has the user select thier groups form and verify with a password
class VoterAuth extends React.Component {
  handleChange(e) {
    this.setState({ id: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.history.push({ pathname: "/vote/name" });
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <label>
          Form ID:
          <input type="text" onChange={this.handleIdChange} />
        </label>
        <label>
          Password:
          <input type="text" onChange={this.handlePasswordChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default withRouter(VoterAuth);
