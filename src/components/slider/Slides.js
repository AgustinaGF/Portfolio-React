import React from "react";
import podcast from "../../media/podcast.png";
import gifs from "../../media/gifs.png";
import delilah from "../../media/delilah.png";
import portfolio from "../../media/portfolio.png";
import "./Slider.css";
const slidesInfo = [
	{
		src: podcast,
		alt: "Proyecto Podcast",
		des: "Proyecto Podcast",
		text:
			"Primer Proyecto, el mismo consistio en maquetar con HTML y CSS un sitio Web estatico responsivo, desde este sitio se pueden escuchar podcast reales que estan junto con imagenes y texto relacionado al contenido.",
		link: "https://github.com/AgustinaGF/Proyecto-Delilah-Resto.git",
	},
	{
		src: gifs,
		alt: "Proyecto Gifs",
		des: "Proyecto Gifs",
		text:
			"Sitio Web de Gifs en donde se utilizo Javascript para darle funcionalidad de busqueda, integracion con la API de Ghipy para crear y ver Gifs.",
		link: "https://proyecto-gifs.netlify.app/",
	},
	{
		src: delilah,
		alt: "Proyecto Delilah Resto",
		des: "Proyecto Delilah Resto",
		text:
			"El proyecto consistió en crear una API que permita realizar operaciones online para un restaurante. Se utilizo NodeJS,Express,Sequelize,JWT,Dotenv,bcrypt,MySQL,Postman",
		link: "https://github.com/AgustinaGF/Proyecto-Delilah-Resto.git",
	},
	{
		src: portfolio,
		alt: "Portfolio",
		des: "Portfolio",
		text:
			"Web Desarrollada con React.Js. Es la pagina que te encuentras visitando ahora",
		link: "https://github.com/AgustinaGF/Portfolio-React.git",
	},
];

const slides = slidesInfo.map((slide) => (
	<div className="slides-container">
		<img src={slide.src} alt={slide.alt} />{" "}
		<div className="slide-desc">
			<span> {slide.des} </span>
			<span>{slide.text}</span>
			<a href={slide.link} target="blank">
				<i class="fas fa-link"></i>
			</a>
		</div>
	</div>
));
export default slides;
