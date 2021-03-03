import './App.css';
// import 'materialize-css/dist/css/materialize.min.css'
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Jumbotron from './components/Jumbotron'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

import Layout from './hocs/Layout'

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Layout>
            <Route exact path='/' component={Jumbotron} />
            <Route exact path='/' component={About} />
            <Route exact path='/' component={Experience} />
            <Route exact path='/' component={Education} />
            <Route exact path='/' component={Projects} />
            <Route exact path='/' component={Contact} />
          </Layout>
        </Fragment>  
      </Switch>
    </Router>
  );
}

export default App;
