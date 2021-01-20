import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";
const Slider = () => {
	return (
		<div className="card-container" id="proyectos">
			<div className="card-title">
				<h2 className="title-card"> Mis Proyectos </h2>{" "}
			</div>{" "}
			<div className="container-images"> {Slides} </div>{" "}
		</div>
	);
};

export default Slider;
