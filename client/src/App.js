import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import {Navigation} from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
      <Switch>
        <Route exact path="/" component={MessageList} />
        <Route exact path="/new-messsage" component={MessageForm} />
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
