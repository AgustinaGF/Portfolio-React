import React from "react";
import "./Navbar.css";

const NavBar = ({ isScrolling }) => {
	return (
		<div>
			<div className="submenu">
				<nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
					<input type="checkbox" id="barra" className="barra"></input>
					<label for="barra" className="hamburguesa">
						<i class="fas fa-bars"></i>
					</label>
					<label for="barra" className="close">
						<i class="fas fa-times"></i>
					</label>
					{/* Esto agrego */}
					<ul>
						<li>
							<a href="#sobreMi" className="link">
								Sobre Mí{" "}
							</a>{" "}
						</li>{" "}
						<li>
							<a className="link" href="#habilidades">
								Habilidades{" "}
							</a>{" "}
						</li>{" "}
						<li>
							<a className="link" href="#proyectos">
								Proyectos{" "}
							</a>{" "}
						</li>{" "}
						<li>
							<a className="link" href="#contacto">
								Contacto{" "}
							</a>{" "}
						</li>{" "}
					</ul>{" "}
				</nav>{" "}
			</div>
		</div>
	);
};

export default NavBar;
