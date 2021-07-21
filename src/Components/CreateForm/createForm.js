import React from "react";
import ReactDOM from "react-dom";
import { createForm } from "../../Services/ParseModels.js";
import { addUserForm } from "../../Services/UserModels.js";
import { UserContext } from "../../contexts/authContext";

// Creates html form to create Voting Form
class CreateForm extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      Creator: "",
      GroupeName: "",
      Password: "",
      Candidates: "",
      Awards: ""
    };
  }
  // double submitting causes a type error
  mySubmitHandler = (event) => {
    // In the future, we will check if the groupname exists
    // first we need to format for the db
    event.preventDefault();
    console.log(this.state);
    var Candidates = this.state.Candidates.trim().split(",");
    var Awards = this.state.Awards.trim().split(",");

    const data = [];
    const CandidatesIm = [];
    for (const c of Candidates) {
      CandidatesIm.push({ name: c, votes: 0 });
    }

    for (const a of Awards) {
      var element = { award: a, candidates: CandidatesIm };
      data.push(element);
    }

    // creator will correspond to email
    const { user } = this.context;

    // now we submit to the db
    createForm(
      this.state.GroupeName,
      this.state.Password,
      Candidates,
      data,
      user
    );

    alert("Form Submitted and Created");
  };
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <p>GroupName</p>
        <input type="text" name="GroupeName" onChange={this.myChangeHandler} />
        <p>Password</p>
        <input type="text" name="Password" onChange={this.myChangeHandler} />
        <p>Candadates, comma seperated</p>
        <input type="text" name="Candidates" onChange={this.myChangeHandler} />
        <p>Awards, comma seperated</p>
        <input type="text" name="Awards" onChange={this.myChangeHandler} />
        <br />
        <input type="submit" />
      </form>
    );
  }
}
ReactDOM.render(<CreateForm />, document.getElementById("root"));
export default CreateForm;
