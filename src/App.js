import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import QR from './components/qr'

function App() {
return (
  <Router>
    <Switch>
      <Route exact path="/">
        <QR/>
      </Route>
    </Switch>
  </Router >
  );

}

export default App;
