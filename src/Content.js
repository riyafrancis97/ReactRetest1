import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Books from './Books'
import AboutUs from './AboutUs'

const Content = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/books' component={Books}/>
      <Route path='/about' component={AboutUs}/>
      <Route path='/greeting' render = {() => (
          <div>
            <h1>Hello World</h1>
          </div>)} />
    </Switch>
)

export default Content;
