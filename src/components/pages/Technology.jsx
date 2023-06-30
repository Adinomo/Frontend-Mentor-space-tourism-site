import React, {useState, useEffect} from 'react';
import data from "/src/data.json";
import background from "/src/assets/technology/background-technology-desktop.jpg";
import launch from "/src/assets//technology/image-launch-vehicle-portrait.jpg";
import spacesport from "/src/assets//technology/image-spaceport-portrait.jpg";
import spacecapsule from "/src/assets//technology/image-space-capsule-portrait.jpg";

function Technology() {
	/* document.body.style.backgroundImage = `url(${background})`; */
	const dataArray = [data];
	const { destinations, crew, technology } = dataArray[0];
	const techArray = [technology];
	const [techs, setTechs] = useState(0)
	const [techImg, setTechImg] = useState(launch);

	useEffect(() => {
		document.body.style.backgroundImage = `url(${background})`;
		if (techs === 1) {
			setTechImg(spacesport);
		} else if (techs === 2) {
			setTechImg(spacecapsule);
		} else {
			setTechImg(launch);
		}
	}, [techs]);

	return (
		<div className="container text-white">
			<h4 className="text-uppercase text-white">Space Launch 101</h4>
			<div className="row">
				<div className="col-md-6 col-xs-6 d-flex justify-content-between align-items-center">
					<div className="row d-flex justify-content-between align-items-center ">
						<div className="col-md-4 col-xs-4 g-2 w-md-25 width container-sm d-flex flex-lg-column">
							<div
								className="numbering p-3 mt-3 m-auto"
								onClick={() => setTechs(0)}>
								1
							</div>
							<div
								className="numbering p-3 mt-3 m-auto"
								onClick={() => setTechs(1)}>
								2
							</div>
							<div
								className="numbering p-3 mt-3 m-auto"
								onClick={() => setTechs(2)}>
								3
							</div>
						</div>
						<div className="col-md-8 col-xs-8 p-2">
							<h4>THE TERMINOLOGY</h4>
							{techArray.map((tech, i) => {
								return (
									<div className="p-4">
										<h3 className="text-uppercase">{tech[techs].name}</h3>
										<p className="text-justify">{tech[techs].description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="col-md-6 col-xs-6 order-first order-xs-last d-flex align-items-center justify-content-center">
							<img
								src={techImg}
								width={450}
								className="tech-img"
							/>
				</div>
			</div>
		</div>
	);
}

export default Technology;