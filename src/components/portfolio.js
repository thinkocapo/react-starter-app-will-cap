import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import NavBar from './nav-bar'

class Portfolio extends Component {
    render () {
        return (
            <div>
            <NavBar/>
            <Button bsStyle='primary' bsSize='large'>Portfolio</Button>
            </div>
        )
    }
}
export default Portfolio
//<RaisedButton label="Button from Material-UI" />