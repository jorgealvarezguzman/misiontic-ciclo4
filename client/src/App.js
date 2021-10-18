import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectList from "./components/ProjectsList";
import ProjectForm from "./components/ProjectForm";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import ProjectView from "./components/ProjectView";
import {Navigation} from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
      <Switch>
        <Route exact path="/" component={ProjectList} />
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/new-project" component={ProjectForm} />
        <Route exact path="/users" component={UserList} /> 
        <Route exact path="/new-user" component={UserForm} />
        <Route exact path="/projects/:projectId" component={(props)=> <ProjectView {...props}/>}/>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
