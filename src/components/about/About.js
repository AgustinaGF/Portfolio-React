import React from "react";
import "./About.css";
import image from "../../media/foto2.jpeg";
const About = () => {
	return (
		<div className="about-container" id="sobreMi">
			<div className="about-desc">
				<h3 className="title">Sobre Mi </h3>{" "}
				<p className="text">
					Soy Desarrolladora Web Full Stack, innovadora, creativa y en constante
					crecimiento.Hoy en día me encuentro en la búsqueda de poder
					desarrollarme laboralmente como developer y así poder seguir
					aprendiendo un poco mas acerca de este apasionante mundo creativo.Te
					cuento un poco sobre mi historia, mi formación profesional es en
					Derecho, soy Abogada, pero desde que soy chica me interese por
					programar, por eso durante muchos años fui formándome de manera
					autodidacta, hasta que al fin tome la decisión de inscribirme en
					Acamica para realizar el curso de Desarrollo Web Full Stack y creo que
					fue la mejor decisión que pude tomar en este 2020, me sirvió para
					terminar de confirmar que me encanta programar y a su vez fue todo un
					proceso de autoconocimiento en donde descubrí que me fascina afrontar
					nuevos desafíos, que puedo manejar el sentimiento de frustración
					cuando algo no me sale e intentarlo hasta que pueda lograrlo y por
					sobre todo, descubrí lo fabuloso de salir de la zona de confort y de
					desafiarse a uno mismo.En este proceso entendí que Abogacia y
					programación tienen mucho en común, en ambas, es fundamental
					implementar soluciones creativas a la resolución de problemas.Hoy
					estoy segura que quiero seguir aprendiendo, que quiero dedicarme a
					programar y que me queda un largo camino de aprendizaje por recorrer y
					eso me entusiasma muchísimo.{" "}
				</p>{" "}
			</div>{" "}
			<div className="about-img">
				<img src={image} alt="about" />
			</div>{" "}
		</div>
	);
};

export default About;
