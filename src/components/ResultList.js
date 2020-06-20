import React from "react";

function ResultList(props) {
  return (

    <table>
      <tbody>
      <tr>
        <th>Name</th>
        <th>Picture</th>
        <th>Address</th>
        <th>Email</th>
        <th>Age</th>
        <th>Phone</th>
      </tr>
        {props.results.map(result =>(
      <tr key={result.login.uuid}>
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
    // <ul className="list-group">
    //   {props.results.map(result => (
    //     <li className="list-group-item" key={result.id}>
    //       <img alt={result.title} className="img-fluid" src={result.images.original.url} />
    //     </li>
    //   ))}
    // </ul>
  );
}

export default ResultList;
