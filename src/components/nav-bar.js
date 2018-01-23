import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import RaisedButton from 'material-ui/RaisedButton';

const navbarInstance = (
	<Navbar>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#home">My Site</a>
			</Navbar.Brand>
		</Navbar.Header>
		<Nav>
			<NavItem eventKey={1} href="#">
				AboutMe
			</NavItem>
			<NavItem eventKey={2} href="#">
				Portfolio
			</NavItem>
            <NavItem eventKey={2} href="#">
				Links
			</NavItem>
			<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				<MenuItem eventKey={3.1}>Action</MenuItem>
				<MenuItem eventKey={3.2}>Another action</MenuItem>
				<MenuItem eventKey={3.3}>Something else here</MenuItem>
				<MenuItem divider />
				<MenuItem eventKey={3.4}>Separated link</MenuItem>
			</NavDropdown>
		</Nav>
	</Navbar>
);
class NavBar extends Component {
    render () {
        return (
            navbarInstance
        )
    }
}
export default NavBar