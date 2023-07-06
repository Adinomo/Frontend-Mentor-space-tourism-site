import React, {useState, useEffect, useLayoutEffect} from 'react';
import data from "/src/data.json";
import background from "../../assets/img/technology/background-technology-desktop.jpg";
import background_md from "../../assets/img/technology/background-technology-tablet.jpg";
import background_sm from "../../assets/img/technology/background-technology-mobile.jpg";

function Technology() {
	const [tech, setTech] = useState(0)
   const { technology } = data; 

	useLayoutEffect(() => {
		if (window.innerWidth < 500) {
			document.body.style.backgroundImage = `url(${background_sm})`;
		} else if (window.innerWidth < 850) {
			document.body.style.backgroundImage = `url(${background_md})`;
		} else {
			document.body.style.backgroundImage = `url(${background})`;
		}
	}, [window.innerWidth]);

	return (
		<div className="px-3">
			<h1 className="mt-4 text-2xl uppercase">03 space launch</h1>
			<div className="flex flex-col lg:flex-row mt-5 mx-auto sm:mt-[10vh] items-center justify-center">
				<div className="max-w-[100%] w-full mx-auto lg:mx-0">
					<picture>
						<source
							srcSet={technology[tech].images.portrait}
							media="(max-width: 560px)"
						/>
						<img
							src={technology[tech].images.landscape}
							alt={technology.name}
							className=" w-full h-[340px] md:h-[400px] mb-4"
						/>
					</picture>
				</div>
				<div className="flex flex-col lg:flex-row items-center lg:ps-10 max-w-[650px]">
					<div className="flex flex-row lg:flex-col my-5 ">
						<div
							className={`tech-selector ${
								tech === 0 ? "bg-white text-black" : "hover:bg-opacity-20"
							}`} 
							onClick={() => setTech(0)}>
							1
						</div>
						<div
							className={`tech-selector ${
								tech === 1 ? "bg-white text-black" : "hover:bg-opacity-20"
							}`} 
							onClick={() => setTech(1)}>
							2
						</div>
						<div
							className={`tech-selector ${
								tech === 2 ? "bg-white text-black" : "hover:bg-opacity-20"
							}`} 
							onClick={() => setTech(2)}>
							3
						</div>
					</div>
					<div className="lg:px-10">
						<h3 className="text-xl uppercase text-center lg:text-left">The terminology</h3>
						<h1 className="text-[2.5rem] sm:text-[3rem] text-center lg:text-left uppercase">{technology[tech].name}</h1>
						<p className="text-center lg:text-left">{technology[tech].description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Technology;