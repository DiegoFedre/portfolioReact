import React from 'react';
// Counup
//import CountUp from 'react-countup';
// Intersection observer hook
import { useInView } from 'react-intersection-observer';
// Motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';

const About = () => {
	const [ref] = useInView({
		threshold: 0.5,
	});

	const contactame = () => {
		let url = 'https://wa.link/ywne8f';
		window.open(url, '_blank');
	};

	return (
		<section className="section" id="about" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
					{/* img */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] bg-top"
					></motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent">Sobre mi</h2>
						<h3 className="h3 mb-4">
							Desarrollador Front-end, Analista de Sistemas y Desarrollador
							Salesforce
						</h3>
						<p className="mb-6">
							Me distingo por diversas cualidades que definen mi enfoque
							profesional. Mi habilidad para fomentar un ambiente de trabajo
							colaborativo, mi actitud positiva ante los desafíos y mi capacidad
							para mantenerme enfocado en objetivos son rasgos sobresalientes.
							Estos atributos me permiten contribuir al equipo con energía y
							soluciones efectivas en cada proyecto.
						</p>
						<p className="text-[20px] font-tertiary text-gradient mb-2">
							Si buscas un profesional dedicado, orientado a resultados y con
							una pasión genuina por la tecnología, ¡no dudes en contactarme!
						</p>

						{/* Estadisticas */}
						<div className="flex gap-x-6 lg:gap-x-10 mb-12"></div>
						<div className="flex gap-x-8 items-center">
							<button className="btn btn-lg" onClick={contactame}>
								Contáctame
							</button>
							<a href="#work" className="text-gradient btn-link">
								Mi Portfolio
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
