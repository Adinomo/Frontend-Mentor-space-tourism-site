import React, {useState, useLayoutEffect} from 'react';
import background from '../../assets/img/destination/background-destination-desktop.jpg';
import background_md from '../../assets/img/destination/background-destination-tablet.jpg';
import background_sm from '../../assets/img/destination/background-destination-mobile.jpg';
import data from '../../data.json';
import Explore from './Explore';

function Moon() {
	const [currentDestination, setCurrentDestination] = useState(0);
	const dataArray = [data]
	const { destinations } = dataArray[0]						
	
	const destination = (
		<Explore
			destination={destinations[currentDestination]}
			setCurrentDestination={setCurrentDestination}
			currentDestination={currentDestination}
		/>
	); 
			

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
		<div className="">
			{destination}
		</div>
	);
}

export default Moon;