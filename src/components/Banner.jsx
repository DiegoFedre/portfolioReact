import React from 'react';
//Imagenes
import FotoDiegoConFondoCircularRedimencionada from '../assets/FotoDiegoConFondoCircularRedimencionada.png';
//Iconos
import { FaGithub, FaLinkedin, FaSalesforce } from 'react-icons/fa';
//Type animation
import { TypeAnimation } from 'react-type-animation';
//Motion
import { motion } from 'framer-motion';
//Variants
import { fadeIn } from '../variants';

const Banner = () => {
	const contactame = () => {
		let url = 'https://wa.link/ywne8f';
		window.open(url, '_blank');
	};

	return (
		<section
			className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
			id="home"
		>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
					{/* text */}
					<div className="flex-1 text-center font-secondary lg:text-left">
						<motion.h1
							variants={fadeIn('up', 0.3)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
						>
							DIEGO <span>FEDRE</span>
						</motion.h1>
						<motion.div
							variants={fadeIn('up', 0.4)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
						>
							<span className="text-white mr-4">Desarrollador</span>
							<TypeAnimation
								sequence={[
									'Front-end',
									2000,
									'React',
									2000,
									'Salesforce',
									2000,
								]}
								speed={50}
								className="text-accent"
								wrapper="span"
								repeat={Infinity}
							/>
						</motion.div>
						<motion.p
							variants={fadeIn('up', 0.5)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="mb-8 max-w-max mx-auto lg:mx-0"
						>
							Con una pasión innata por la tecnología, estoy ansioso por formar
							parte de un equipo de trabajo en un entorno colaborativo, donde
							pueda aplicar mis capacidades técnicas y trabajar en proyectos
							desafiantes que impulsen la innovación.
						</motion.p>
						<motion.div
							variants={fadeIn('up', 0.6)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 "
						>
							<button className="btn btn-lg" onClick={contactame}>
								Contáctame
							</button>
							<a href="#work" className="text-gradient btn-link">
								Mi Portfolio
							</a>
						</motion.div>
						{/* Sociales */}
						<motion.div
							variants={fadeIn('up', 0.7)}
							initial="hidden"
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
						>
							<a
								href="https://linkedin.com/in/diego-fedre"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin />
							</a>
							<a
								href="https://www.salesforce.com/trailblazer/dfedre"
								target="_blank"
								rel="noreferrer"
							>
								<FaSalesforce />
							</a>
							<a
								href="https://github.com/DiegoFedre"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub />
							</a>
						</motion.div>
					</div>
					{/* image */}
					<motion.div
						variants={fadeIn('down', 0.5)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.7 }}
						className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mix-blend-lighten"
					>
						<img src={FotoDiegoConFondoCircularRedimencionada} alt="" />
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
