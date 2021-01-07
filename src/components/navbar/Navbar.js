import React from "react";
import "./Navbar.css";

const NavBar = ({ isScrolling }) => {
	return (
		<div>
			<nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
				<div className="navbar-logo"> Sobre Mí </div>{" "}
			</nav>{" "}
		</div>
	);
};

export default NavBar;
