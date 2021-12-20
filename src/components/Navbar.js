import React, {useContext} from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { FlowerLotus } from "phosphor-react";
import {UserContext} from '../dataContext/UserContext'
import '../styles/NavBar.css';

const Navigationbar = () => {
const { isLoggedIn } = useContext(UserContext)
console.log(isLoggedIn)
	return (
		<Navbar className="navigation" fluid >
			<Container fluid className={"no-gutters mx-0 px-0"}>
				<Navbar.Brand href='/' style={{color: "#3F7740", fontWeight: "700"}}>
					<FlowerLotus size={48} className="logo" style={{color: "#3F7740"}} />
					 Plantiful
				</Navbar.Brand>

				<Nav className="ml-auto" >
					<Nav.Link href='/plants' className="nav_link" style={{color: "#3F7740", fontWeight: "600", fontSize: "20px"}}>Plants</Nav.Link>
					<Nav.Link href='/registerform' className="nav_link" style={{color: "#3F7740", fontWeight: "600", fontSize: "20px"}}>Register</Nav.Link>
					<Nav.Link href='/loginform' className="nav_link" style={{color: "#3F7740", fontWeight: "600", fontSize: "20px"}}>Log in</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigationbar;