import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom'
import background from '../assets/img/home/background-home-desktop.jpg'
import background_sm from '../assets/img/home/background-home-mobile.jpg';
import background_md from '../assets/img/home/background-home-tablet.jpg';

function Body() {
	useLayoutEffect(() => {
	  if (window.innerWidth < 500) {
		document.body.style.backgroundImage = `url(${background_sm})`;
	  } else if (window.innerWidth < 850){
		document.body.style.backgroundImage = `url(${background_md})`;
	  } 
	  else {
		document.body.style.backgroundImage = `url(${background})`;
	  }
	}, [window.innerWidth])
	return (
		<div className="home">
			<div className="px-4">
				<section className="">
					<h3 className="text-2xl">SO YOU WANT TO TRAVEL TO</h3>
					<h1 className="leading-[7rem] ms-0 text-[7.5rem] sm:text-[10rem]">SPACE</h1>
					<p className="mt-8 text-center lg:text-justify max-w-[440px]">
						Let’s face it; if you want to go to space, you might as well genuinely go
						to outer space and not hover kind of on the edge of it. Well sit back, and
						relax because we’ll give you a truly out of this world experience!
					</p>
				</section>
			</div>
			<div className="flex items-center justify-center">
				<Link
					to="/explore/moon"
					className="home-explore">
					EXPLORE
				</Link>
			</div>
		</div>
	);
}

export default Body;