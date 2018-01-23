import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import NavBar from './nav-bar'

class Links extends Component {
    render () {
        return (
            <div>
            <NavBar/>
            <Button bsStyle='primary' bsSize='large'>Links</Button>
            </div>
        )
    }
}
export default Links
//<RaisedButton label="Button from Material-UI" />