import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App'
import HomeView from './components/HomeView'
import EditView from './components/EditView'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeView} />
    <Route path="/home" component={HomeView} />
    <Route path="/edit" component={EditView} />
  </Route>
)
