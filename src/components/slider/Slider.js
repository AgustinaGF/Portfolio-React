import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";
const Slider = () => {
	return (
		<div className="carousel-cointainer" id="proyectos">
			<div className="carousel-title">
				<h2 className="title-carousel"> Mis Proyectos </h2>{" "}
			</div>{" "}
			<div className="container-images"> {Slides} </div>{" "}
		</div>
	);
};

export default Slider;
