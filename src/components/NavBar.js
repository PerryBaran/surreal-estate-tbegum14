import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "../styles/navbar.css";

export default function NavBar() {
	return (
		<div className="nav-bar">
			<img src={logo} alt="surreal-logo" />
			<ul>
				<li>
					<NavLink to="/" className="navbar-links-item">
						View Properties
					</NavLink>
				</li>
				<li>
					<NavLink to="add-property" className="navbar-links-item">
						Add a Property
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
