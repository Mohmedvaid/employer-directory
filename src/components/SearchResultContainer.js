import React, { Component } from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

class Employee extends Component {
  state = {
    results: []
  };

  logres(){
    console.log(this.searchEmployee())
  }

  // When this component mounts, search for all employees
  componentDidMount() {
    this.searchEmployee();
   // this.logres();
  }

  searchEmployee = () => {
    API.search()
      .then(res => this.setState({ results: res.results}))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default Employee;
