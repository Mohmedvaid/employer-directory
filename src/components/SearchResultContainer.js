import React, {Component} from "react";
import ResultList from "./ResultList";
import FilterBox from "./FilterBox";
import ClearBtn from "./ClearFilters"
import API from "../utils/API";



class Employee extends Component {
  state = {
    results: []
  };

  // When this component mounts, search for all employees
  componentDidMount() {
    this.searchEmployee();
    // this.display();
  }


  sortByFirstName(results) {
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
        results[i] = results[i + 1]
        results[i + 1] = temp
        switching = true;
      }
    }

    this.setState({
      results: results
    })
  }

  sortByLastName(results) {
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
        x = results[i].name.last[0];
        y = results[i + 1].name.last[0]
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
        results[i] = results[i + 1]
        results[i + 1] = temp
        switching = true;
      }
    }

    this.setState({
      results: results
    })
  }

  filterCity(city, results){

    let cityFilterResults = results.filter(result=>{
      if(city !==result.location.city){
         result.visible = false;
      }
      else{
        result.visible = true;
      }
      return result;
    })
    console.log(cityFilterResults)
    this.setState({ results: cityFilterResults})
  }

  handleClick = event => {
    this.filterCity(event.target.innerHTML, this.state.results)
  };

  searchEmployee = () => {
    API.search()
      .then(res => {
        res.results.forEach(result => {
          result.visible = true
        });
        this.setState({
          results: res.results
        })
      })
      .catch(err => console.log(err));
  };

  display(){
    let newResults= this.state.results.filter(result=>{
      if(result.visible === true){
        return result;
      }
    })
    console.log(newResults)
    return newResults;
  }
  clearFilter(){
    console.log(`Clear was hit`)
    let resetResults = this.state.results.map( result=>{
      result.visible = true;
      return result;
    })
    this.setState({results: resetResults})
  }

  render() {
    return ( 
    <div >
      <div className="act-buttons">
      <FilterBox
      results = {this.state.results}
      filter= {this.handleClick}
      />
      <ClearBtn
      clear = {()=>this.clearFilter()}
      />
      </div>
      <ResultList 
      results = {this.display()} 
      sortFirst = {() => this.sortByFirstName(this.state.results)}
      sortLast = {() => this.sortByLastName(this.state.results)}
      
      />
    </div >
    );
  }
}

export default Employee;