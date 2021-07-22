import "./App.css";
import Home from "./view/Home/Home";
import AdminPage from "./view/Admin/AdminPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./view/Login/Login";
import PaintingDetails from "./view/Home/Components/PaintingDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/paintings/:id">
            <PaintingDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
