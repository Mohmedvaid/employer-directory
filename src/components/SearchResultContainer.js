import React, { Component} from "react";
import ResultList from "./ResultList";
import API from "../utils/API";

class Employee extends Component {
  state = {
    results: []
  };

  // logres() {
  //   console.log(this.searchEmployee())
  // }

  // When this component mounts, search for all employees
  componentDidMount() {
    this.searchEmployee()
  }

  // test(){
  //   console.log("Test Executed")
  // }

  sortByName(results) {
    let names = results.map(result=>{
      return result.name.first
    })
    console.log("NAMES")
    console.log(names)
    console.log("Ends")
    let switching = true;
    let i = 0;
    let shouldSwitch

    while (switching) {
      switching = false;
      let x, y;
      for (i = 0; i < names.length-1; i++) {
         shouldSwitch = false;

        // Fetch 2 elements that need to be compared 
        x = names[0];
        y = names[i + 1];

        // Check if 2 rows need to be switched 
        if (x.toLowerCase() > y.toLowerCase()) {
          // If yes, mark Switch as needed and break loop 
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        var temp = names[i];
        names[i] = names[i+1];
        names[i+1] = temp;
        // Function to switch rows and mark switch as completed 
        switching = true;
      }
    }
    
    for(let j=0; j<names.length; j++){
      results[j].name.first = names[0]
    }

    this.setState({results: results})
  }

  searchEmployee = () => {
    API.search()
      .then(res => this.setState({
        results: res.results
      }))
      .catch(err => console.log(err));
  };

  render() {
    return ( 
    <div >
      <ResultList results = {this.state.results} sort={()=>this.sortByName(this.state.results)}/> 
    </div >
    );
  }
}

export default Employee;