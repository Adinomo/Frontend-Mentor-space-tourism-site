import React from 'react';
import logoIcon from '../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
			<Navbar
				collapseOnSelect
				expand="lg" variant="dark">
				<Container className="text-white">
					<Navbar.Brand to="#home">
						<img
							src={logoIcon}
							className="w-50"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 shadow-none" />
					<Navbar.Collapse id="responsive-navbar-nav" >
						<Nav className="me-auto"></Nav>
						<Nav>
							<Nav.Link
								as={NavLink}
								to="/"
								className="text-white">
								HOME
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="/explore/moon"
								className="text-white">
								DESTINATION
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="/crew"
								className="text-white">
								CREW
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="/technology"
								className="text-white">
								TECHNOLOGY
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
}

export default NavBar;