import React from 'react';
//Imagenes
import LogoDiego3 from '../assets/LogoDiego3.png';

const Header = () => {
	const trabajaConMigo = () => {
		let contactSection = document.getElementById('contact');
		contactSection.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<header className="py-8">
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{/* Logo */}
					{/* <a href="#"> */}
					<img src={LogoDiego3} alt="" />
					{/* </a> */}
					{/* boton */}
					<button className="btn btn-sm" onClick={trabajaConMigo}>
						Trabaja conmigo
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
