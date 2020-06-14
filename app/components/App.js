import React from 'react'
import Popular from './Popular/Popular'
import ReactRouter from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Battle from './Battle/Battle'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route
              render={function () {
                return <p>Kagak ada !!</p>
              }}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
