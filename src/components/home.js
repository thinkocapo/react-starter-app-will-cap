import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
    render () {
        return (
            <div>
            <Button bsStyle='primary' bsSize='large'>Button from React-Bootstrap</Button>
            <RaisedButton label="Button from Material-UI" />
            </div>
        )
    }
}
export default Home