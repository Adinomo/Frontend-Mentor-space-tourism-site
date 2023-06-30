import React, {useState, useEffect} from 'react';
import back from '/src/assets/destination/background-destination-desktop.jpg'
import data from '/src/data.json'
import Explore from './Explore';
import moon from "/src/assets/destination/image-moon.png";
import mars from "/src/assets/destination/image-mars.png";
import europa from "/src/assets/destination/image-europa.png";
import titan from "/src/assets/destination/image-titan.png";

function Moon() {
	const [currentDestination, setCurrentDestination] = useState(0);
	const [destImage, setDestImage] = useState(moon)
	console.log(destImage)
	
	useEffect(() => {
	   if (currentDestination === 1) {
			setDestImage(mars);
		} else if(currentDestination === 2){
			setDestImage(europa);
		} else if(currentDestination === 3){
			setDestImage(titan);
		}else {
			setDestImage(moon)
		}
	}, [currentDestination])
	
	
	const dataArray = [data]
	const {destinations, crew, technology} = dataArray[0]							
	console.log(destinations[0]);
	document.body.style.backgroundImage = `url(${back})`;
	const destinyArray = [destinations[currentDestination]]
	const destination = destinyArray.map((dest, index) => {
		return <Explore dest={dest} key={index} currentDestination={setCurrentDestination} currentDest={currentDestination} destImg={destImage}/>
	})
	
	return (
		<div className="container-fluid text-white">
			{destination}
		</div>
	);
}



export default Moon;