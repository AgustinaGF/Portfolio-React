import React from "react";
import "./Info.css";
const Info = () => {
	return (
		<div className="info-container">
			<div className="info">
				<h3 className="info-title">Habilidades tecnologicas</h3>
				<div className="logos">
					<i id="html" class="fab fa-html5 fa-9x" aria-hidden="true"></i>
					<i class="fab fa-css3-alt fa-9x" aria-hidden="true"></i>
					<i class="fab fa-react fa-9x"></i>
					<i class="fab fa-js fa-9x" aria-hidden="true"></i>
					<i class="fab fa-node fa-9x"></i>
					<i class="fab fa-bootstrap fa-9x"></i>
					<i class="fab fa-sass fa-10x fa-9x" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	);
};

export default Info;
