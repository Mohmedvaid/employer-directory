import React from "react";

function ResultList(props) {
  return (

    <table className="table">
    <thead className="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Picture</th>
        <th scope="col">Address</th>
        <th scope="col">Email</th>
        <th scope="col">Age</th>
        <th scope="col">Phone</th>
      </tr>
   </thead>
      <tbody>
        {props.results.map((result, i) =>(
         <tr key={result.login.uuid}>
            <th scope="row">{i+1} </th>
            <td>{result.name.first+" "+ result.name.last} </td>
            <td><img alt={result.name.first+" "+ result.name.last +"profile image"} src={result.picture.thumbnail}/> </td>
            <td>{result.location.street.number+" "+ result.location.street.name+"\n"+result.location.city+", "+result.location.country} </td>
            <td>{result.email} </td>
            <td>{result.dob.age} </td>
            <td>{result.cell} </td>
          </tr>
        ))}
     </tbody>
    </table>
    /* 
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
*/
  );
}

export default ResultList;
