import React, { useState } from 'react';
import logoIcon from '../assets/img/shared/logo.svg'
import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg"

function NavBar() {
   const [open, setOpen] = useState(false);
   return (
				<div className="navbar">
					<img
						src={logoIcon}
						alt="tourism"
						className="w-8 ms-3 sm:ms-5"
					/>
					<div
						className={`navbar-collapse ${
							open ? "opacity-100 sm:opacity-100 block" : "opacity-0 sm:opacity-100"
						}`}>
						<ul className="flex justify-between sm:flex-row flex-col">
							<NavLink
								className={({ isActive }) =>
									!isActive ? "navbar-link" : "navbar-link navbar-link-active"
								}
								to={"/"}>
								00 Home
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									!isActive ? "navbar-link" : "navbar-link navbar-link-active"
								}
								to={"/explore/moon"}>
								01 Destination
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									!isActive ? "navbar-link" : "navbar-link navbar-link-active"
								}
								to={"/crew"}>
								02 Crew
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									!isActive ? "navbar-link" : "navbar-link navbar-link-active"
								}
								to={"/technology"}>
								03 Technology
							</NavLink>
						</ul>
					</div>
					{open ? (
						<CgClose
							size={40}
							className="me-3 sm:me-5 sm:hidden cursor-pointer z-10"
							onClick={() => setOpen(false)}
						/>
					) : (
						<FiMenu
							size={40}
							className="me-3 sm:me-5 sm:hidden cursor-pointer z-10"
							onClick={() => setOpen(true)}
						/>
					)}
				</div>
			);
}

export default NavBar;