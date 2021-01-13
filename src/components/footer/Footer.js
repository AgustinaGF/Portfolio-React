import React from "react";
import "./Footer.css";
const Footer = () => {
	return (
		<div id="contacto">
			<footer className="footer">
				<div className="footer-contact">
					<h3> Contacto </h3>{" "}
				</div>{" "}
				<div className="footer-sns">
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
				<div className="line"></div>
				<div className="desing-by">
					{" "}
					Copyright© 2021 Agustina Gomez Fernandez | All Rights Reserved{" "}
				</div>{" "}
			</footer>
		</div>
	);
};

export default Footer;
