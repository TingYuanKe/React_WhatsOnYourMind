import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Badge , MenuItem,NavDropdown} from 'react-bootstrap';
class top extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		var nav = {
			backgroundColor: '#1E2C53',
			color: 'white',
			width:'100%',
			textAlign:'Left',
			marginRight:'0px'
			};
		var title={
			color:'#EEEEEE',
			fontSize:'30px'
		}
		var content={
			color:'#EEEEEE',
			fontSize:'20px'
		}
		return (
			 <Navbar style={nav}>
			      <Navbar.Header>
			        <Navbar.Brand>

			          <a href="#" style={title}>WhatsOnYourMind</a>
			        </Navbar.Brand>
			      </Navbar.Header>
			        <Navbar.Collapse>

			    <Nav pullRightstyle={content} >
       				 <NavItem eventKey={1} href="#" >Link Right</NavItem>
      				 <NavItem eventKey={2} href="#">Link Right</NavItem>
   				</Nav>
   				   </Navbar.Collapse>
			  </Navbar>

		);
	}
}
export default top;
