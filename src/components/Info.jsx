import personalImage from '../../assets/personal_image.png'

export default function Info() {
	return (
		<>
			<img src={personalImage} width="400px" />
			<h1>Spider-Man</h1>
			<h2>Superhero</h2>
			<a href="https://example.com">spiderman.com</a>
			<menu>
				<li><a href="mailto:user@example.com">Email</a></li>
				<li><a href="https://www.linkedin.com">LinkedIn</a></li>
			</menu>
		</>
	)
}