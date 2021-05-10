import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import QR from './components/qr';
import Principal from './components/principal';




function App() {
return (
  <Router>
    <Switch>

      <Route exact path="/">
        <QR/>
      </Route>

      <Route path="/principal">
        <Principal/>
      </Route>
      
    </Switch>
  </Router >
  );

}

export default App;
