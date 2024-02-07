import React from 'react';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Imagenes
import Img1 from '../assets/proyecto-portfolio-img-app-clima.png';
import Img2 from '../assets/proyecto-portfolio-img-app-lista.png';
import Img3 from '../assets/proyecto-portfolio-img-app-generatorQr.jpg';

const Work = () => {
	const verTodosLosProyectos = () => {
		let url = 'https://github.com/DiegoFedre';
		window.open(url, '_blank');
	};

	return (
		<section className="section" id="work">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row gap-x-10">
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
					>
						{/* text */}
						<div>
							<h2 className="h2 leading-tight text-accent">
								Algunos de <br />
								mis trabajos
							</h2>
							<p className="max-w-sm mb-16 md:max-w-xl">
								Puedes hacer click sobre los proyectos para verlos funcionando.
								También, haz click en el botón "Ver todos los proyectos" para
								ver el código en Github.
							</p>
							<button
								className="btn btn-sm mb-12"
								onClick={verTodosLosProyectos}
							>
								Ver todos los proyectos
							</button>
						</div>
						{/* image */}
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							{/* overlay */}
							<a
								href="https://earnest-llama-e94ccb.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							</a>
							{/* img */}
							<a
								href="https://earnest-llama-e94ccb.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="group-hover:scale-125 transition-all duration-500"
									src={Img1}
									alt=""
								/>
							</a>
							{/* Subtitulo */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">
									{' '}
									React.js - Bootstrap - Consumo de API OpenWeather
								</span>
							</div>
							{/* Titulo */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">
									Consulta Meteorológica
								</span>
							</div>
						</div>
					</motion.div>

					<motion.div
						variants={fadeIn('left', 0.2)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex flex-col gap-y-10"
					>
						{/* image */}
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							{/* overlay */}
							<a
								href="https://boisterous-kangaroo-c415d9.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							</a>

							{/* img */}
							<a
								href="https://boisterous-kangaroo-c415d9.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="group-hover:scale-125 transition-all duration-500"
									src={Img2}
									alt=""
								/>
							</a>

							{/* Subtitulo */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">
									React.js - CRUD - Custom Hooks - Local Storage
								</span>
							</div>
							{/* Titulo */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Lista de Tareas</span>
							</div>
						</div>
						{/* image */}
						<div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
							{/* overlay */}
							<a
								href="https://reliable-kleicha-cade63.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
							</a>
							{/* img */}
							<a
								href="https://reliable-kleicha-cade63.netlify.app"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="group-hover:scale-125 transition-all duration-500"
									src={Img3}
									alt=""
								/>
							</a>
							{/* Subtitulo */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
								<span className="text-gradient">
									Vite - React - Axios - API - Tailwind CSS
								</span>
							</div>
							{/* Titulo */}
							<div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
								<span className="text-3xl text-white">Qr Generator</span>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Work;
