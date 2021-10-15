import Index from './pages';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/Page1' >
            <Page1 />
          </Route>

          <Route path='/Page2'>
            <Page2 />
          </Route>

          <Route path='/Page3'>
            <Page3 />
          </Route>

          <Route path='/Page4'>
            <Page4 />
          </Route>

          <Route path='/Page5'>
            <Page5 />
          </Route>

          <Route path='/Page6'>
            <Page6 />
          </Route>

          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}
export default App
