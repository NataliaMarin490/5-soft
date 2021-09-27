import Index from './pages';
import Page1 from './pages/Page1';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className='App'>
    <Router>
        <Switch>

        <Route path='/Page1'>
            <Page1 />
          </Route>

          <Route path='/'>
            <Index />
          </Route>

        </Switch>  
    </Router>
  
  </div>

  

  );
}

export default App;
