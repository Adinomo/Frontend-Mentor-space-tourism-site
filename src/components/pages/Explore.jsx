import React from 'react';
import data from "/src/data.json";
import moon from "/src/assets/destination/image-moon.png";
import mars from "/src/assets/destination/image-mars.png";
import europa from "/src/assets/destination/image-europa.png";
import titan from "/src/assets/destination/image-titan.png";


function Explore(props) {
	const dataArray = [data];
	const { destinations, crew, technology } = dataArray[0];
	const allDestinations = [destinations]
	console.log(props.currentDestination)
	return (
		<div className="container-fluid text-white">
			<div className="row p-0">
				<div className="col-md-6 col-xs-6 space-content">
					<h4 className="mx-5">PICK YOUR DESTINATION</h4>
					<section className="p-4 d-flex justify-content-center align-items-center">
						<img
							className="w-75 mt-2"
							src={props.destImg}
						/>
					</section>
				</div>
				<div className="col-md-6 col-xs-6 text-white p-5">
					<div className="p-3">
						<nav className="nav text-white">
							<a
								className="nav-link text-white pointer"
								aria-current="page"
								onClick={() => props.currentDestination(0)}>
								Moon
							</a>
							<a
								className="nav-link text-white pointer"
								onClick={() => props.currentDestination(1)}>
								Mars
							</a>
							<a
								className="nav-link text-white pointer"
								onClick={() => props.currentDestination(2)}>
								Europa
							</a>
							<a
								className="nav-link text-white pointer"
								onClick={() => props.currentDestination(3)}>
								Titan
							</a>
						</nav>
						<h1 className="display-1 text-uppercase">{props.dest.name}</h1>
						<p className="text-justify">{props.dest.description}</p>
						<div className="d-flex justify-content-between mt-3">
							<div className="mt-3">
								<h4>Avg. distance</h4>
								<h4 className="text-uppercase">{props.dest.distance}</h4>
							</div>
							<div className="mt-3">
								<h4>Est. travel time</h4>
								<h4 className="text-uppercase">{props.dest.travel}</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Explore;