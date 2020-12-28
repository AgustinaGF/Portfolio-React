import React from "react";
import podcast from "../../media/podcast.png";
import gifs from "../../media/gifs.png";
import delilah from "../../media/delilah.png";
import "./Slider.css";
const slidesInfo = [
	{
		src: podcast,
		alt: "Proyecto Podcast",
		des: "Proyecto Podcast",
	},
	{
		src: gifs,
		alt: "Proyecto Gifs",
		des: "Proyecto Gifs",
	},
	{
		src: delilah,
		alt: "Proyecto Delilah Resto",
		des: "Proyecto Delilah Resto",
	},
];

const slides = slidesInfo.map((slide) => (
	<div className="slides-container">
		<img src={slide.src} alt={slide.alt} />
		<div className="slide-desc">
			<span>{slide.des}</span>
		</div>
	</div>
));
export default slides;
