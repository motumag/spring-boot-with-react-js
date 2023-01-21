import "./App.css";
import ListofEmployees from "./components/ListofEmployees";
import DashBoardComponents from "./components/DashBoardComponents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import HeaderComponent from "./components/HeaderComponent";
// import HeaderComponent from "./components/HeaderComponent";
// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" exact element={<DashBoardComponents />} />
          <Route path="/employeeList" element={<ListofEmployees />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
