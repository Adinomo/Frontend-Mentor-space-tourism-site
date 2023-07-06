import React from "react";


function Explore({ destination, currentDestination, setCurrentDestination }) {
	return (
		<div className="explore">
			<div className="w-full">
				<h4 className="text-2xl">01 PICK YOUR DESTINATION</h4>
				<section className="">
					<img
						className="max-w-[380px] w-full my-5 mx-auto"
						src={destination.images.png}
					/>
				</section>
			</div>
			<div className="pt-5 relative">
				<nav className="py-1 mx-auto w-fit flex absolute z-50 top-10 left-0 right-0 lg:right-auto">
					<div
						className={` ${
							currentDestination == 0 ? "border-b-2 explore-link" : "explore-link"
						}`}
						aria-current="page"
						onClick={() => setCurrentDestination(0)}>
						Moon
					</div>
					<div
						className={` ${
							currentDestination == 1 ? "border-b-2 explore-link" : "explore-link"
						}`}
						onClick={() => setCurrentDestination(1)}>
						Mars
					</div>
					<div
						className={` ${
							currentDestination == 2 ? "border-b-2 explore-link" : "explore-link"
						}`}
						onClick={() => setCurrentDestination(2)}>
						<p>Europa</p>
					</div>
					<div
						className={`${
							currentDestination == 3 ? "border-b-2 explore-link" : "explore-link"
						}`}
						onClick={() => setCurrentDestination(3)}>
						<p>Titan</p>
					</div>
				</nav>
				<h1 className="explore-name">{destination.name}</h1>
				<p className="text-center text-xl lg:text-justify lg:pe-14">
					{destination.description}
				</p>
				<div className="sm:flex mt-6 w-full justify-between ">
					<div className="mb-4 sm:mb-0 mx-auto lg:mx-0 w-fit">
						<h4 className="text-xl text-center lg:text-left">Avg. distance</h4>
						<h4 className="uppercase text-[2.2rem] leading-[2rem]">
							{destination.distance}
						</h4>
					</div>
					<div className="mb-4 sm:mb-0 mx-auto w-fit">
						<h4 className="text-xl text-center lg:text-left">Est. travel time</h4>
						<h4 className="uppercase text-[2.2rem] leading-[2rem]">
							{destination.travel}
						</h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Explore;
