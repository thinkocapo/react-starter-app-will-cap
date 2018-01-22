import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

// const App = ({ message = 'Hello Starter App!' }) => (
//   <Button bsStyle='primary' bsSize='large'>{message}</Button>
// )

// App.propTypes = {
//   message: React.PropTypes.string
// }

class App extends Component {
  render() {
    return (
      <Button bsStyle='primary' bsSize='large'>Will-Cap Starter App</Button>
    )
  }
}
export default App

// function mapStateToProps(state, ownProps) {
//   return {

//   }
// }
// const actions = {}
// export default connect(mapStateToProps, actions)(App)
