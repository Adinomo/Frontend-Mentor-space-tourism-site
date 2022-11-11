import React, {useState} from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crew from './components/Crew';
import Moon from './components/pages/Moon';
import Technology from './components/pages/Technology';


function App() {

  return (
			<BrowserRouter>
            <NavBar />
				<Routes>
					<Route index element={<Home />} />
					<Route path="crew" element={<Crew />}/>
					<Route path="explore">
						<Route path="moon" element={<Moon />}/>
					</Route>
					<Route path="technology" element={<Technology />}/>
				</Routes>
			</BrowserRouter>
		);
}

export default App
