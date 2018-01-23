import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import NavBar from './nav-bar'

class AboutMe extends Component {
    render () {
        return (
            <div>
            <NavBar/>
            <Button bsStyle='primary' bsSize='large'>AboutMe</Button>
            </div>
        )
    }
}
export default AboutMe
//<RaisedButton label="Button from Material-UI" />