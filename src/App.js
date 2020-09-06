import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import ItemGrid1 from './pages/itemGrid1/itemGrid1';
import Form1 from './pages/inputForm1/form1';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ItemGrid1} />
        <Route exact path='/form1' component={Form1} />
      </Switch>
    </div>
  );
}

export default App;
