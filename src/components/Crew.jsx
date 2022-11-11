import React, {useState, useEffect} from 'react';
import background from '/src/assets/crew/background-crew-desktop.jpg';
import data from '/src/data.json';
import douglas from "/src/assets/crew/image-douglas-hurley.png";
import mark from "/src/assets/crew/image-mark-shuttleworth.png";
import glover from "/src/assets/crew/image-victor-glover.png";
import ansari from "/src/assets/crew/image-anousheh-ansari.png";

const Crew = () => {
	document.body.style.backgroundImage = `url(${background})`;
	const dataArray = [data];
	const {destinations, crew, technology} = dataArray[0];
	const crewArray = [crew];
	const [crews, setCrews] = useState(0);
	const [crewImg, setCrewImg] = useState(douglas)

	useEffect(() => {
		if (crews === 1) {
			setCrewImg(mark);
		} else if (crews === 2) {
			setCrewImg(glover);
		} else if (crews === 3) {
			setCrewImg(ansari);
		} else {
			setCrewImg(douglas);
		}
	}, [crews]);

	return (
		<div className="container mt-5">
			<h4 className="mx-4 text-white">MEET YOUR CREW</h4>
			<div className="row">
				<div className="col-md-6 col-xs-6 p-5 mt-5">
					{crewArray.map((crew) => {
						return (
							<div>
								<h4 className=" text-white text-uppercase">{crew[crews].role}</h4>
								<h6 className="text-white text-uppercase display-5">
									{crew[crews].name}
								</h6>
								<div className="w-75">
									<p className="text-white mt-3">{crew[crews].bio}</p>
								</div>
							</div>
						);
					})}
					<div
						className="indicator mt-4"
						onClick={() => setCrews(0)}>1</div>
					<div
						className="indicator"
						onClick={() => setCrews(1)}>2</div>
					<div
						className="indicator"
						onClick={() => setCrews(2)}>3</div>
					<div
						className="indicator"
						onClick={() => setCrews(3)}>4</div>
				</div>
				<div className="col-md-6 col-xs-6 order-first order-xs-last">
							<img
								src={crewImg}
								alt="crew"
								width={crews === 1 ? 300 : 350}
							/>
				</div>
			</div>
		</div>
	);
}

export default Crew;