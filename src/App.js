import logo from './logo.svg';
import './App.css';
import SearchPage from './Components/SearchPage';
import AddCapPage from "./Components/AddCapPage"
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Route exact path="/" component={SearchPage} />
      <Route path="/addcap" component={AddCapPage} />
    </Router>
  );
}

export default App;
