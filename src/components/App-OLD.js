import React, {Component} from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home'

// const App = ({ message = 'Hello Starter App!' }) => (
//   <Button bsStyle='primary' bsSize='large'>{message}</Button>
// )

// App.propTypes = {
//   message: React.PropTypes.string
// }

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>      
    )
  }
}

//<Route exact path='/' component={Home} />
//<Route exact path='/login' render={() => <Login/>} />
//<Route exact path='/implicit/callback' component={ImplicitCallback} />
//<SecureRoute  path='/' component={CaseManager} />


function mapStateToProps(state, ownProps) {
  return {

  }
}
const actions = {}
export default connect(mapStateToProps, actions)(App)
