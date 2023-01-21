import axios from "axios";
const EMP_SERVICE_URL = "http://localhost:8080/motuma/v1/allEmployees";
const addEmployee_url = "http://localhost:8080/motuma/v1/add-employee";
class EmployeeServices {
  getEmployees() {
    return axios.get(EMP_SERVICE_URL);
  }
  addEmployee() {
    return axios.post(addEmployee_url);
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeServices();
