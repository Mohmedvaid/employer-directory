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


  sortByName(results) {

    let switching, i, x, y, shouldSwitch;

  switching = true;
  
  while (switching) {

    switching = false;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (results.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = results[i].name.first[0];
      y = results[i + 1].name.first[0]
      //check if the two rows should switch place:
      if (x.toLowerCase() > y.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      let temp = results[i]
      results[i] = results[i+1]
      results[i+1]= temp
      switching = true;
    }
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