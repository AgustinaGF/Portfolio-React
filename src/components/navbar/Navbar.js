import React from "react";
import "./Navbar.css";

const NavBar = ({ isScrolling }) => {
	return (
		<div>
			<nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
				<a href="#sobreMi" className="sobreMi">
					Sobre Mí
				</a>
				<a className="habilidades" href="#habilidades">
					Habilidades
				</a>
				<a className="proyectos" href="#proyectos">
					Proyectos
				</a>
				<a className="contacto" href="#contacto">
					Contacto
				</a>
			</nav>
		</div>
	);
};

export default NavBar;
