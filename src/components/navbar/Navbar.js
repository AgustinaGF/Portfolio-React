import React, { useState } from "react";
import "./Navbar.css";

const NavBar = ({ isScrolling }) => {
	const [click, setClick] = useState(false);

	console.log(click);
	return (
		<div>
			<div className="submenu">
				<nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
					<label
						id="iconoMenu"
						className={`hamburguesa ${click === true ? "visible" : null}`}
						onClick={() => setClick(true)}
					>
						<i class="fas fa-bars"></i>
					</label>
					<label
						id="iconoClose"
						className={`close ${click === true ? "visible" : null}`}
						onClick={() => setClick(false)}
					>
						<i class="fas fa-times"></i>
					</label>
					<ul className="lista">
						<li>
							<a
								href="#sobreMi"
								className={`link ${click === true ? "visible" : "close"}`}
								onClick={() => setClick(false)}
							>
								Sobre Mí
							</a>
						</li>
						<li>
							<a
								className="link"
								href="#habilidades"
								className={`link ${click === true ? "visible" : "close"}`}
								onClick={() => setClick(false)}
							>
								Habilidades
							</a>
						</li>
						<li>
							<a
								className="link"
								href="#proyectos"
								className={`link ${click === true ? "visible" : "close"}`}
								onClick={() => setClick(false)}
							>
								Proyectos
							</a>
						</li>
						<li>
							<a
								className="link"
								href="#contacto"
								className={`link ${click === true ? "visible" : "close"}`}
								onClick={() => setClick(false)}
							>
								Contacto
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;
