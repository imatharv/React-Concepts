import './App.css';
import HomePage from "./pages/HomePage"
import DetailsPage from "./pages/DetailsPage"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
        <Switch>
          <Route exact path = "/" component = {HomePage} />
          <Route exact path = "/dashboard" component = {HomePage} />
          <Route exact path = "/details" component = {DetailsPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
