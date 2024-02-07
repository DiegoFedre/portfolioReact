import React from 'react';

// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';

// Service data
const services = [
	{
		name: 'Analista y Programador de Sistemas',
		description:
			'Me gradué como "Analista y Programador de Sistemas" en el Instituto San Vicente de Paul de San Martín, Mendoza. Durante mi formación, adquirí sólidos conocimientos en Sistemas de Información, con un enfoque en la resolución de problemas organizacionales, programación, bases de datos y habilidades técnicas. Desarrollé competencias en desarrollo web front-end y back-end, así como en programación orientada a objetos y análisis de sistemas. Además, cuento con experiencia en lenguajes como HTML, CSS, JavaScript, PHP, así como en el uso de Bootstrap 4, MySQL y Visual Studio Code.',
		link: 'Leer mas',
	},
	{
		name: 'Desarrollador Salesforce',
		description:
			'Me certifiqué como Salesforce Developer por Guayerd. Durante 5 meses, cursé un programa de formación que incluyó proyectos variados y la adquisición de conocimientos clave. En el desarrollo front-end, dominé la lógica de programación, HTML, CSS, JavaScript y metodologías ágiles, culminando en un proyecto integrador. En el ámbito de Salesforce, completé trailheads, participé en el proyecto "Travel App", obtuve superbadges como "App Customization Specialist" y "Flow Fundamentals Superbadge Unit", y realicé prácticas profesionales. Además, fortalecí habilidades profesionales, incluyendo trabajo en equipo, comunicación efectiva, gestión del tiempo y emociones, resolución de conflictos, y análisis de problemas, respaldado por talleres de soft skills y coaching laboral.',
		link: 'Leer mas',
	},
	{
		name: 'Desarrollador React',
		description:
			'Actualmente, me encuentro inmerso en el curso "Master en React" de Udemy, explorando temas esenciales para el desarrollo de aplicaciones web dinámicas y modernas con React. Desde la creación de componentes funcionales hasta el uso de Hooks, Router para la navegación SPA, Context API para compartir información entre componentes, y la integración con tecnologías como NodeJS, ExpressJS, MongoDB en el marco de MERN Stack. Además, profundizo en detalles y nuevas funcionalidades de JavaScript, y exploro las últimas novedades de React 18. A través de proyectos prácticos, desarrollo habilidades full-stack, abordando desde la maquetación web hasta la creación de una red social completa con autenticación JWT, sistema de publicaciones, comentarios, seguimiento entre usuarios y más. ',
		link: 'Leer mas',
	},
];

const Services = () => {
	const [expandedIndex, setExpandedIndex] = React.useState(null);

	const toggleServiceExpansion = (index) => {
		setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	// Enlace de Google Drive compartido
	const pdfLink =
		'https://drive.google.com/file/d/1sbhSZC4qwWieQ5ZP_zZgnhDo8dO43tvo/view?usp=sharing';

	const handleDownloadCV = () => {
		window.open(pdfLink, '_blank');
	};

	return (
		<section
			className="section relative lg:bg-services lg:bg-bottom bg-no-repeat bg-center w-full h-screen flex items-center justify-center"
			id="services"
		>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text & image */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						<h2 className="h2 text-accent mb-6">Mis estudios</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							Algunos conocimientos adquiridos a través de mi carrera y
							distintos cursos que han moldeado mi perfil profesional en
							habilidades técnicas. Para conocerme mejor descargá mi CV !
						</h3>
						<button className="btn btn-sm" onClick={handleDownloadCV}>
							Descargar CV
						</button>
					</motion.div>
					{/* services */}
					<motion.div
						variants={fadeIn('left', 0.5)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1"
					>
						{/* Lista de servicios */}
						{services.map((service, index) => {
							// Desestructuro servicios
							const { name, description } = service;
							const isExpanded = index === expandedIndex;

							return (
								<div
									className={`border-b border-white/20 h-auto mb-[38px] flex flex-col ${
										isExpanded ? 'pb-4' : ''
									}`}
									key={index}
								>
									<div className="max-w-[476px]">
										<h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
											{name}
										</h4>
										<p
											className={`font-secondary leading-tight overflow-hidden transition-all ease-in-out duration-300 ${
												isExpanded ? 'max-h-full' : 'h-0'
											}`}
										>
											{description}
										</p>
										<a
											href="#"
											className="btn-link text-gradient text-sm"
											onClick={(e) => {
												e.preventDefault();
												toggleServiceExpansion(index);
											}}
										>
											{isExpanded ? 'Leer menos' : 'Leer más'}
										</a>
									</div>
									<div className="flex flex-col flex-1 items-end"></div>
								</div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
