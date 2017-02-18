import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory, IndexRoute } from 'react-router';
import Root from './containers/Root';
import Skill from './components/Skill';
import './index.css';

const routeConfig = [
  { path: '/',
    component: Root,
    IndexRoute: {component: Root},
    childRoutes: [
      {path: 'skill', component: Skill },
      {path: '', component: Root },
      {path: '', component: Root },
      {path: '', component: Root }
    ]
  }
]

ReactDOM.render(
  <Router history={browserHistory} routes={routeConfig}/>,
  document.getElementById('root')
);
