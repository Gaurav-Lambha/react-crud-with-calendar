import logo from './logo.svg';
import './App.css';
import Employeelist from "./components/Employeelist";
import Editemployee from "./components/Editemployee";
import Addemployee from "./components/Addemployee";
import Calendar from "./components/Calendar";
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container body-content">     
          <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Calendar</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/emplist'} className="nav-link">List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/addemployee'} className="nav-link">Create</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome to React CRUD Tutorial</h2> <br/>

            <Switch>
              <Route path="/" exact component={Calendar} />
              <Route path="/emplist" exact component={Employeelist} />
              <Route path="/editemployee/:id" exact component={Editemployee} />
              <Route path="/addemployee" exact component={Addemployee} />
            </Switch>
          </Router>
    </div>
  );
}

export default App;
