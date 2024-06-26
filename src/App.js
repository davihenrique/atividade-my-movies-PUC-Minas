import './App.css';
import { Header } from './Components/Header';

import{
   BrowserRouter as Router,
   Switch,
   Route,
   Link 
}from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
