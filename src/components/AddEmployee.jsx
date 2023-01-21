import React, { Component } from "react";
import axios from "axios";

export default class AddEmployee extends Component {
  state = {
    firstName: "",
    lasttName: "",
    emailId: "",
  };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lasttName: this.state.lasttName,
      emailId: this.state.emailId,
    };

    axios
      .post(`http://localhost:8080/motuma/v1/register`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <>
        <div>
          <h1>Add Employee</h1>
        </div>
        <form class="row g-3" onSubmit={this.handleSubmit}>
          <div class="col-md-4">
            <label for="inputfirtName" class="form-label">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              class="form-control"
              id="inputfirtName"
            />
          </div>
          <div class="col-md-4">
            <label for="inputlastName" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              class="form-control"
              id="inputlastName"
            />
          </div>
          <div class="col-md-4">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              name="emailId"
              onChange={this.handleChange}
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}
