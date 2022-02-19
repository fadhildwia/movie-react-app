import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Detail, Home } from 'views';

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/detail' component={Detail} />
    </Switch>
  </BrowserRouter>
  );
}

export default App
