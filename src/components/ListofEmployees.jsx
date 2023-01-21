import React, { Component } from "react";
import EmployeeServices from "../services/EmployeeServices";

export default class ListofEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }
  //To call here the axios api calling service.
  componentDidMount() {
    EmployeeServices.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  render() {
    return (
      <>
        <div>
          <h1>Employee List</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
