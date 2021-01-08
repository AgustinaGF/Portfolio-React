import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-contact">
				<h3> Contacto </h3>{" "}
			</div>{" "}
			<div className="footer-sns" id="contacto">
				<div className="sns-links">
					<a
						href="https://www.linkedin.com/in/agustina-gomez-fernandez/"
						target="blank"
					>
						<i class="fab fa-linkedin linkedin"> </i>{" "}
					</a>{" "}
					<a href="https://twitter.com/Agustinagomezf" target="blank">
						<i class="fab fa-twitter twitter"> </i>{" "}
					</a>{" "}
					<a href="https://github.com/AgustinaGF" target="blank">
						<i class="fab fa-github github"> </i>{" "}
					</a>{" "}
				</div>{" "}
			</div>{" "}
			<div className="desing-by"> Desing By Agustina Gomez Fernandez </div>{" "}
		</footer>
	);
};

export default Footer;
