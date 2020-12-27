import React from "react";
const slidesInfo = [
	{
		src:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdeqJkQV5_0g2YFkRuq2EWfliK4ZpuC5FGnA&usqp=CAU",
		alt: "Proyecto Podcast",
		des: "Proyecto Podcast",
	},
	{
		src:
			"https://mir-s3-cdn-cf.behance.net/projects/404/ed275c99892443.Y3JvcCwxMzY2LDEwNjgsMCww.png",
		alt: "Proyecto Gifs",
		des: "Proyecto Gifs",
	},
	{
		src:
			"https://images.prismic.io/acamica/30ccac35fe1c8ec49af66bf6a4c20a3a095655b2_thumb-03-dwfs.png?auto=compress,format",
		alt: "Proyecto Delilah Resto",
		des: "Proyecto Delilah Resto",
	},
];

const slides = slidesInfo.map((slide) => (
	<div className="slides-container">
		<img src={slide.src} alt={slide.alt} />
		<div className="slide-desc">
			<span>{slide.desc}</span>
		</div>
	</div>
));
export default slides;
