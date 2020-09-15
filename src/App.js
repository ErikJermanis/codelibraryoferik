import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import ItemGrid1 from './pages/itemGrid1/itemGrid1';
import Form1 from './pages/inputForm1/form1';
import CssOnlyNav from './pages/cssOnlyNav/cssOnlyNav';
import ShowcaseCards1 from './pages/showcaseCards1/showcaseCards1';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ItemGrid1} />
        <Route exact path='/form1' component={Form1} />
        <Route exact path='/cssOnlyNav' component={CssOnlyNav} />
        <Route exact path='/showcaseCards1' component={ShowcaseCards1} />
      </Switch>
    </div>
  );
}

export default App;
