import React, { Component } from "react";
import "./Cover.css";
import coverVideo from "../../media/video.mp4";
import coverImage from "../../media/loading.gif";

const Cover = () => {
	const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
	const onLoadedData = () => {
		setIsVideoLoaded(true);
	};
	return (
		<div className="cover-container">
			<div className={`loading ${isVideoLoaded === true ? "load" : null}`}>
				<img src={coverImage} alt="thumb" />
			</div>
			<video
				className="video"
				src={coverVideo}
				width="100%"
				height="100vh"
				autoPlay
				loop
				muted
				onLoadedData={onLoadedData}
			/>{" "}
			<h1> Agustina Gomez Fernandez </h1> <p> Developer Web Full Stack </p>{" "}
		</div>
	);
};

export default Cover;
