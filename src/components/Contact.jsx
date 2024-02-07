import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';

const Contact = () => {
	const form = useRef();
	const [isMailSent, setIsMailSent] = useState(false);
	const [isMailError, setIsMailError] = useState(false);

	// Valida el formato del mail con expresiones regulares
	const validateEmail = (email) => {
		// Expresión regular para validar el formato de un correo electrónico
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		// Validar que todos los campos estén completados
		const user_email = form.current.user_email.value.trim();
		const user_name = form.current.user_name.value.trim();
		const message = form.current.message.value.trim();

		if (!user_email || !user_name || !message) {
			// Mostrar alerta de campos incompletos
			alert('Todos los campos deben ser completados para enviar tu email');
			return;
		}

		// Validar formato de correo electrónico
		if (!validateEmail(user_email)) {
			// Mostrar alerta de formato de correo electrónico incorrecto
			alert('Por favor, introduce un correo electrónico válido');
			return;
		}

		emailjs
			.sendForm(
				'service_gcb776v',
				'template_b5n11jn',
				form.current,
				'hAu6YXhdTfBhSv0tf'
			)
			.then((result) => {
				console.log(result.text);
				setIsMailSent(true); // Activa la alerta de correo enviado
				setIsMailError(false); // Desactiva la alerta de error

				setTimeout(() => {
					setIsMailSent(false); // Desactiva la alerta después de 5 segundos
				}, 5000);

				// Resetea el formulario
				form.current.reset();
			})
			.catch((error) => {
				console.log(error.text);
				setIsMailError(true); // Activa la alerta de error
				setIsMailSent(false); // Desactiva la alerta de correo enviado

				setTimeout(() => {
					setIsMailError(false); // Desactiva la alerta después de 5 segundos
				}, 5000);
			});
	};

	return (
		<section className="py-16 lg:section" id="contact">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 flex justify-start items-center"
					>
						<div>
							<h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
								Ponerse en contacto
							</h4>
							<h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
								Trabajemos <br />
								juntos!
							</h2>
						</div>
					</motion.div>
					{/* formulario */}
					<motion.form
						ref={form}
						onSubmit={sendEmail}
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.3 }}
						className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
					>
						<input
							className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
							type="text"
							name="user_email"
							placeholder="Tu Email"
						/>
						<input
							className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
							type="text"
							name="user_name"
							placeholder="Tu Nombre"
						/>
						<textarea
							className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
							name="message"
							placeholder="Tu mensaje"
						></textarea>
						<button className="btn btn-lg">Enviar Mensaje</button>
						{isMailSent && (
							<div className="text-green-500 mt-2">
								Mail enviado correctamente. ¡Gracias por contactarte!
							</div>
						)}
						{isMailError && (
							<div className="text-red-500 mt-2">
								No se ha podido enviar el mail. Intente de nuevo.
							</div>
						)}
					</motion.form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
