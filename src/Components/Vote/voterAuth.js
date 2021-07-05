import React from "react";
import { withRouter } from "react-router-dom"; // <--- import `withRouter`. We will use this in the bottom of our file.

class VoterAuth extends React.Component {
  handleIdChange(e) {
    this.setState({ id: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.history.push({ pathname: "/vote/:" + "name" });
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
