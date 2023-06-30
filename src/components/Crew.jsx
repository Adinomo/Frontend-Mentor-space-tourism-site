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
				<div className={`col-md-6 col-xs-6 p-lg-5 mt-0 mb-2 d-flex flex-column align-items-center justify-content-center ${crews === 1 ? "mt-3" : "mt-4"}`}>
					{crewArray.map((crew, index) => {
						return (
							<div key={index}>
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
					<div>
						<div
							className={`indicator mt-4 ${crews === 0 ? "text-dark bg-light" : ""}`}
							onClick={() => setCrews(0)}>
							1
						</div>
						<div
							className={`indicator mt-4 ${crews === 1 ? "text-dark bg-light" : ""}`}
							onClick={() => setCrews(1)}>
							2
						</div>
						<div
							className={`indicator mt-4 ${crews === 2 ? "text-dark bg-light" : ""}`}
							onClick={() => setCrews(2)}>
							3
						</div>
						<div
							className={`indicator mt-4 ${crews === 3 ? "text-dark bg-light" : ""}`}
							onClick={() => setCrews(3)}>
							4
						</div>
					</div>
				</div>
				<div className="col-md-6 col-xs-6 order-first order-xs-last border d-flex justify-content-center">
					<img
						src={crewImg}
						alt="crew"
						className='border mx-auto'
						width={crews === 1 ? 300 : 350}
						height={crews === 1 ? 440 : 450}
					/>
				</div>
			</div>
		</div>
	);
}

export default Crew;