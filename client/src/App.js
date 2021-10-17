import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectList from "./components/ProjectsList";
import ProjectForm from "./components/ProjectForm";
import {Navigation} from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
      <Switch>
        <Route exact path="/" component={ProjectList} />
        <Route exact path="/new-project" component={ProjectForm} />
        <Route exact path="/users" component={ProjectList} /> 
        <Route exact path="/new-user" component={ProjectList} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
