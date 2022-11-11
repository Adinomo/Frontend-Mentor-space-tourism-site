import React from 'react';
import { Link } from 'react-router-dom'
import background from '/src/assets/home/background-home-desktop.jpg'

function Body() {
	document.body.style.backgroundImage = `url(${background})`;
	
	return (
		<div className="container-fluid text-white pt-5">
			<div className="row mt-3 p-2">
				<div className="col-md-6 p-3 text-justify space-content">
					<section className="p-5">
						<h3 className="text-white">SO YOU WANT TO TRAVEL TO</h3>
						<h1 className="display-1">SPACE</h1>
						<p>
							Let’s face it; if you want to go to space, you might as well genuinely go
							to outer space and not hover kind of on the edge of it. Well sit back,
							and relax because we’ll give you a truly out of this world experience!
						</p>
					</section>
				</div>
				<div className="col-md-6 d-flex align-items-center justify-content-center">
					<div className="display-6 border-radius bg-light p-5 h text-dark d-flex align-items-center justify-content-center">
						<Link to="/explore/moon" className="nav-link">EXPLORE</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Body;