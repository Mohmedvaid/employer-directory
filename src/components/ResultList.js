import React from "react";

function ResultList(props) {
  return (

    <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col" style={{cursor: "default"}}>#</th>
        <th scope="col" style={{cursor: "default"}} onClick={() => props.sort()}>First Name</th>
        <th scope="col" style={{cursor: "default"}}>Last Name</th>
        <th scope="col" style={{cursor: "default"}}>Picture</th>
        <th scope="col" style={{cursor: "default"}}>Address</th>
        <th scope="col" style={{cursor: "default"}}>Email</th>
        <th scope="col" style={{cursor: "default"}}>Age</th>
        <th scope="col" style={{cursor: "default"}}>Phone</th>
      </tr>
   </thead>
      <tbody>
        {props.results.map((result, i) =>(
         <tr key={result.login.uuid}>
            <th scope="row">{i+1} </th>
            <td>{result.name.first} </td>
            <td>{result.name.last} </td>
            <td><img alt={result.name.first+" "+ result.name.last +"profile image"} src={result.picture.thumbnail}/> </td>
            <td>{result.location.street.number+" "+ result.location.street.name+"\n"+result.location.city+", "+result.location.country} </td>
            <td>{result.email} </td>
            <td>{result.dob.age} </td>
            <td>{result.cell} </td>
          </tr>
        ))}
     </tbody>
    </table>
  );
}

export default ResultList;
