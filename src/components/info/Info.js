import React from "react";
import "./Info.css";
const Info = () => {
	return (
		<div className="info-container" id="habilidades">
			<div className="info">
				<h3 className="info-title">Habilidades tecnologicas</h3>
				<div className="logos">
					<i id="html" class="fab fa-html5 fa-8x" aria-hidden="true"></i>
					<i class="fab fa-css3-alt fa-8x" aria-hidden="true"></i>
					<i class="fab fa-react fa-8x"></i>
					<i class="fab fa-js fa-8x" aria-hidden="true"></i>
					<i class="fab fa-node fa-8x"></i>
					<i class="fab fa-bootstrap fa-8x"></i>
					<i class="fab fa-sass  fa-8x" aria-hidden="true"></i>
					<i class="fab fa-github fa-8x" id="github"></i>
				</div>
			</div>
		</div>
	);
};

export default Info;
