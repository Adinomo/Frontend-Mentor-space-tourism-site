import React, { useState, useEffect, useLayoutEffect } from "react";
import background from "../assets/img/crew/background-crew-desktop.jpg";
import background_md from "../assets/img/crew/background-crew-tablet.jpg";
import background_sm from "../assets/img/crew/background-crew-mobile.jpg";
import data from "../data.json";

const Crew = () => {
	const [crews, setCrews] = useState(0);
	const { crew } = data;
	console.log(crew);

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
		<div className="crew">
			<h4 className="mx-4 text-2xl sm:mt-2">02 MEET YOUR CREW</h4>
			<div className="grid lg:grid-cols-2">
				<div className="px-3 mt-4 lg:mt-[25vh] lg:ps-10">
					<h2 className="uppercase text-xl text-center lg:text-left">
						{crew[crews].role}
					</h2>
					<h1 className="text-3xl md:text-[3.5rem] uppercase my-1 sm:my-3 lg:my-5 text-center lg:text-left">
						{crew[crews].name}
					</h1>
					<p className="text-center lg:text-left text-lg sm:px-32 lg:px-0">{crew[crews].bio}</p>
					<div className="flex mx-auto lg:mx-0 w-fit mt-5 lg:mt-12">
						<div
							className={`p-1 me-2 border rounded-full cursor-pointer ${crews === 0 ? "bg-white" : ""}`}
							onClick={() => setCrews(0)}></div>
						<div
							className={`p-1 mx-2 border rounded-full cursor-pointer ${crews === 1 ? "bg-white" : ""}`}
							onClick={() => setCrews(1)}></div>
						<div
							className={`p-1 mx-2 border rounded-full cursor-pointer ${crews === 2 ? "bg-white" : ""}`}
							onClick={() => setCrews(2)}></div>
						<div
							className={`p-1 mx-2 border rounded-full cursor-pointer ${crews === 3 ? "bg-white" : ""}`}
							onClick={() => setCrews(3)}></div>
					</div>
				</div>
				<div className="px-2">
					<img
						src={crew[crews].images.png}
						alt={crew[crews].name}
						className="mt-6 lg:mt-0 mx-auto max-w-[500px] w-full "
					/>
				</div>
			</div>
		</div>
	);
};

export default Crew;
