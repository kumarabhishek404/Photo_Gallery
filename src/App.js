import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/pages/Home'
import Footer from './Component/Footer'
import Abhishek from './Component/pages/Abhishek'
import Bhai from './Component/pages/Bhai';
import Papa from './Component/pages/Papa';
import Mummy from './Component/pages/Mummy';
import Sister from './Component/pages/Sister';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/gallery' component={Home} />
          <Route path='/about' component={Home} />
          <Route path='/contact' component={Home} />

          <Route path='/me' component={Abhishek} />
          <Route path='/bhai' component={Bhai} />
          <Route path='/papa' component={Papa} />
          <Route path='/mummy' component={Mummy} />
          <Route path='/sister' component={Sister} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
